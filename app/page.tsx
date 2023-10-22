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
    // <>
    // <ChatInput
    //   handleInputChange={handleInputChange}
    //   handleSubmit={handleSubmit}
    //   input={input}
    //   isLoading={isLoading}
    //   selectedModel={selectedModel}
    // />
    //   <ChatMessages messages={messages} selectedModel={selectedModel} />
    // </>

    <div className=" min-h-screen flex justify-center items-center bg-lime-100 ">
      <div className="bg-gray py-8 w-2/3 rounded-lg px-64 sm:px-1 md:px-16 lg:px-44">
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
