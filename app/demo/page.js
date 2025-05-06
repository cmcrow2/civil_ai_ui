"use client";

import { useState } from "react";
import AiMessage from "@/app/components/messages/AiMessage";
import UserMessage from "@/app/components/messages/UserMessage";
import PdfViewer from "@/app/components/PdfViewer";

const Demo = () => {
  const [qry, setQry] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hello! I am Paige. I see you want to ask me some questions about the Texas Department of Transportation Specifications Manual. How can I help?",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = { type: "user", content: qry };
    setMessages((prev) => [...prev, userMessage]);

    setQry("");

    const aiMessage = await qryAi(qry);
    setMessages((prev) => [...prev, aiMessage]);
  };

  const qryAi = async (query) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/assistant/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qry: query }),
      });

      if (!res.ok) throw new Error("Something went wrong.");

      const data = await res.json();
      const aiMessage = { type: "ai", content: data };

      return aiMessage;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex">
      <div className="h-full w-1/2 border-r-1 border-black">
        {/* FUTURE: PDF's will all be stored in AWS, need to include URL in env file */}
        <PdfViewer fileUrl={"/pdf/spec-book-0924.pdf"} />
      </div>
      <div className="h-full w-1/2 flex flex-col text-sm items-center">
        <div className="w-full h-10 sticky top-16">
          <div className="text-lg font-normal p-2 pt-1">Chat</div>
        </div>
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-scroll p-8 pt-0 w-180">
          {messages.map((msg, index) => {
            return msg.type === "ai" ? (
              <AiMessage key={index} text={msg.content} />
            ) : (
              <UserMessage key={index} text={msg.content} />
            );
          })}
        </div>

        {/* Sticky footer/header at bottom */}
        <form
          onSubmit={handleSubmit}
          className="w-full h-14 sticky bottom-0 z-10 flex items-center justify-center gap-x-4 px-8"
        >
          <input
            type="text"
            value={qry}
            onChange={(e) => setQry(e.target.value)}
            placeholder="Ask Paige..."
            className="border-red border-1 rounded-2xl w-full h-8 shadow-md px-4 focus:outline-none focus:ring-0"
          ></input>
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-7 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Demo;
