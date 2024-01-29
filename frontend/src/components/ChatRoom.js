import React, { useState } from "react";

const ChatRoom = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    const userMessage = userInput.trim();
    console.log(userMessage);
    if (!userMessage) return;
    setUserInput(''); // 입력창 초기화

    // Add user message to chat history
    setChatHistory([...chatHistory, { sender: "User", message: userMessage }]);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_input: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "윤치호", message: responseData.윤치호 },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    console.log(chatHistory);

    // Clear input field
    setUserInput("");
  };

  return (
    <section className=" flex flex-col font-sans">
      <h1 className="text-center text-3xl font-serif font-bold mb-4">Talk to T.H.Y. (Tchi Ho Yun)</h1>
      <div className="w-full mx-auto my-4 max-w-2xl flex flex-row">
        <div className="w-full mx-auto max-w-3xl h-[80vh] pt-2 flex flex-row">
          <div className="w-full">
            <div className="h-[70%] w-full mb-4 p-2 overflow-y-scroll">
              {/* Display chat history */}
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`bg-[#f5f2e9] ${
                    chat.sender === "User" ? "float-right bg-[#f5f2e9]" : "clear-right bg-[#292524] text-gray-50"
                  } rounded-lg mb-3 p-3 text-sm font-sans text-black max-w-[60%] message ${
                    chat.sender === "User" ? "user" : "윤치호"
                  }`}
                >
                  <p>
                    <strong>{chat.sender}:</strong> {chat.message}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-gray-300 border">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="w-4/5 p-2"
                placeholder="메세지를 입력하세요."
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="w-1/5 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                보내기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatRoom;
