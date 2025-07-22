"use client";

import { useState, useEffect, useRef } from "react";
import AiMessage from "@/app/components/messages/AiMessage";
import UserMessage from "@/app/components/messages/UserMessage";
import ThinkingDots from "@/app/components/messages/ThinkingDots";
import PdfViewer from "@/app/components/PdfViewer";

const Demo = () => {
  const [qry, setQry] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setMessages([
        {
          type: "ai",
          content:
            "Hello! I am Paige. I am currently under construction, but am happy to assist you in any way I can! Below are a few questions you can ask.",
        },
      ]);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e, question) => {
    e.preventDefault();

    const userMessage = { type: "user", content: question || qry };
    setMessages((prev) => [...prev, userMessage]);

    setQry("");

    setIsLoading(true);

    await qryAi(question || qry);
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

      if (!res.ok || !res.body) {
        const errorText = await res.text();
        throw new Error(errorText || "Something went wrong.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let result = ""; // Store the full response incrementally

      // Start loading
      setIsLoading(false);

      // Add an empty "ai" message first
      setMessages((prev) => [...prev, { type: "ai", content: "" }]);

      // Read the stream incrementally
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Decode the chunk into a string
        const chunk = decoder.decode(value, { stream: true });
        result += chunk; // Append the new chunk to the result

        // Update the content of the most recent AI message after 500ms
        setTimeout(() => {
          console.log("Running!");
          updateMostRecentMessage(result);
        }, 500);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      return {
        type: "ai",
        content:
          "Sorry, Paige is currently unavailable. Please try again shortly.",
      };
    }
  };

  const updateMostRecentMessage = (newContent) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];

      // Find the most recent message of type 'ai' (the one with empty content initially)
      const mostRecentIndex = updatedMessages.findLastIndex(
        (msg) => msg.type === "ai" && msg.content === ""
      );

      // Update the most recent message's content
      if (mostRecentIndex !== -1) {
        updatedMessages[mostRecentIndex].content = newContent; // Set the content to the accumulated message
      }

      return updatedMessages;
    });
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
        <div className="flex-1 overflow-y-scroll p-8 pt-0 w-full">
          <div className="w-[90%] max-w-4xl mx-auto">
            {messages.map((msg, index) => {
              const isFirst = index === 0 && msg.type === "ai";
              const isLast =
                index === messages.length - 1 && msg.type === "user";
              return msg.type === "ai" ? (
                <AiMessage
                  key={index}
                  text={msg.content}
                  isFirst={isFirst}
                  handleSubmit={handleSubmit}
                />
              ) : (
                <UserMessage
                  key={index}
                  text={msg.content}
                  messagesEndRef={messagesEndRef}
                  isLast={isLast}
                />
              );
            })}
            {isLoading && <ThinkingDots />}
          </div>
        </div>

        {/* Sticky footer/header at bottom */}
        <form
          onSubmit={handleSubmit}
          className="w-[90%] max-w-4xl h-14 sticky bottom-0 z-10 flex items-center justify-center gap-x-4 px-8"
        >
          <input
            type="text"
            value={qry}
            onChange={(e) => setQry(e.target.value)}
            placeholder="Ask Paige..."
            className="border-red border-1 rounded-2xl w-full h-8 shadow-md px-4 focus:outline-none focus:ring-0"
          ></input>
          <button type="submit" disabled={isLoading || qry === ""}>
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
