import { useRef, useEffect } from "react";
import { ChatMessagesProps } from "@/types/ChatTypes";

const ChatMessages: React.FC<any> = ({ completion, selectedModel }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // const filteredMessages = messages[1];
  console.log(completion);

  // useEffect(() => {
  //   if (messages.length > 0 && messagesEndRef.current) {
  //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messages, messagesEndRef]);

  return (
    <div className="mb-8">
      {completion ? (
        <div className="overflow-y-auto break-words bg-white drop-shadow-lg rounded-lg p-4 min-h-[15vh] max-h-[40vh]">
          <p>{completion}</p>
          <div ref={messagesEndRef} />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ChatMessages;
