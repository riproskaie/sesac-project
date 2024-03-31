from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
import openai
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv(".env"))

from scipy.spatial.distance import cosine
import os
from openai import OpenAI
from pydantic import BaseModel


class ChatInput(BaseModel):
    user_input: Optional[str] = None


client = OpenAI()
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_embedding(text, model="text-embedding-ada-002"):
    text = text.replace("\n", " ")
    return client.embeddings.create(input=[text], model=model).data[0].embedding


def create_context(question, df, max_len=3000):
    q_embedding = (
        client.embeddings.create(input=question, model="text-embedding-ada-002")
        .data[0]
        .embedding
    )
    df["distances"] = df["embeddings"].apply(lambda x: cosine(q_embedding, x))
    cur_len = 0
    context_parts = []
    for _, row in df.sort_values("distances", ascending=True).iterrows():
        cur_len += row["n_tokens"] + 4
        if cur_len > max_len:
            break
        context_parts.append(row["combined"])
    return "\n\n===\n\n".join(context_parts)


def answer_question(question, df, max_len=3000, debug=False):
    context = create_context(question, df, max_len=max_len)
    if debug:
        print("Context:\n" + context)

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "Assistant is young Tchi Ho Yun(윤치호), the author of the diary. He was active in late 19th century and early 20th century. Instructions: (1) Answer my questions based on the diary. (2) Bear in mind he referred to the King of Korea as '상', the Prince as '동궁', and the Queen as '곤전'. He calls 김옥균 as '고우' or '고우장', 박영효 as '금릉' or '금릉장', 민영익 as '운미', 홍영식 as '금석', 서광범 as '위산'. (3) The author's father was 윤웅렬, who is called throughout the diary as 가친. (4) On 1884-12-04, the author witnessed 갑신정변, a coup-d'etat. (5) If you don't have information that exceeds the year 1889, or if you don't find any relevant training data, please say that you don't know. But don't say \"It's not recorded in the diary.\" Do not simply repeat the prompt. (6) '~습니다'로 끝나는 한국어로 번역해서 대답해줘.\n\n",
                },
                {
                    "role": "user",
                    "content": f"Context: {context}\n\n---\n\n Question: {question},",
                },
            ],
            temperature=0.4,
        )
        return response.choices[0].message.content
    except Exception as e:
        print("Error occurred:", e)
        return "I don't know"


# 아래 함수가 핵심이다. 나머지 함수는 보조 목적으로 사용하는 함수다.


@app.post("/chat")
async def chat(input_data: ChatInput):
    user_input = input_data.user_input
    df = pd.read_pickle("data/processed/thy_embedding_64.pkl")
    fine_tuned_model_id = "ft:gpt-3.5-turbo-0613:personal:recipe-ner:8lCI2Bmk"

    if user_input is None:
        return {"message": "입력된 메시지가 없습니다."}

    response = answer_question(user_input, df, debug=True)

    test_messages = []
    test_messages.append(
        {
            "role": "system",
            "content": "You are talking to a Korean who lived several generations ago. His tone and manner of speech is different from what contemporary Koreans speak, especially the end of each sentence and the first person pronoun. So, convert the tone and manner of the query text.",
        }
    )
    test_messages.append({"role": "user", "content": response})

    response = (
        openai.chat.completions.create(
            model=fine_tuned_model_id,
            messages=test_messages,
            temperature=0,
            max_tokens=500,
        )
        .choices[0]
        .message.content
    )

    return {"User": user_input, "윤치호": response}


# Run the server
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
