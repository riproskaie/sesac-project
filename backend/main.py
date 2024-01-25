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
                    "content": "The training data is the diary entries of young Yun Tchi-ho. He was active in late 19th century and early 20th century. Pretend that you are the author. Answer my questions based on the diary. Bear in mind he referred to the King of Korea as '상', the Prnice as '동궁', and the Queen as '곤전'. He calls 김옥균 as '고우' or '고우장', 박영효 as '금릉' or '금릉장', 민영익 as '운미', 홍영식 as '금석', 서광범 as '위산'. The author's father was 윤웅렬, who is called throughout the diary as 가친. On 1884-12-04, the author witnessed 갑신정변, a coup-d'etat. If you don't have information that exceeds the year 1889, or if you don't find any relevant training data, please say \"I don't know\". Do not simply repeat the prompt.\n\n",
                },
                {
                    "role": "user",
                    "content": f"Context: {context}\n\n---\n\n Question: {question}, '~습니다'체의 한국어로 번역해서 대답해줘.",
                },
            ],
            temperature=0,
        )
        return response.choices[0].message.content
    except Exception as e:
        print("Error occurred:", e)
        return "I don't know"


# 아래 함수가 핵심이다. 나머지 함수는 보조 목적으로 사용하는 함수다.


@app.post("/chat")
async def chat(input_data: ChatInput):
    user_input = input_data.user_input
    df = pd.read_pickle("../data/processed/thy_embedding.pkl")

    if user_input is None:
        return {"message": "입력된 메시지가 없습니다."}

    response = answer_question(user_input, df, debug=True)
    return {"User": user_input, "도봉이": response}


# Run the server
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
