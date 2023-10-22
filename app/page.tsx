"use client";

import { useState } from "react";

import { useChat } from "ai/react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import { ModelType } from "@/types/ChatTypes";

/**
 * ChatForm Component
 *
 * A form component that allows the user to select a model and send messages to
 * the model. The messages are displayed in a chat window.
 */
const ChatForm: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType>("gpt-3");
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: `/api/hello`,
    });

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-indigo-50">
      <div className="text-center">
        <p className="text-6xl font-extrabold text-blue-600">
          LinkedIn Headline <br /> Generator
        </p>
        <p className="mt-10 text-xl font-bold text-gray-500">
          A LinkedIn Headline Generator using AI to generate highly <br />{" "}
          engaging LinkedIn headlines to get more profile visits
        </p>
        <p className="text-gray-500 mt-8">
          brought to you for free by SuperGrow
        </p>
      </div>
      <div className="bg-gray py-8 w-1/2 rounded-lg px-24 bg-zinc-100 drop-shadow-2xl mt-8">
        <p className="text-xl font-semibold mb-2">I am a...</p>
        <ChatInput
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
          isLoading={isLoading}
          selectedModel={selectedModel}
        />
        <ChatMessages messages={messages} selectedModel={selectedModel} />
      </div>
    </div>
  );
};

export default ChatForm;
