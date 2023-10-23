import { useRef, useEffect } from "react";
import { ChatMessagesProps } from "@/types/ChatTypes";

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  selectedModel,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const getChatDisplayName = (role: string) => {
    if (role === "user") return "You: ";
    return selectedModel === "gpt-3" ? "The Pirate: " : "The Riddler: ";
  };

  const filteredMessages = messages[1];
  console.log(filteredMessages);

  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, messagesEndRef]);

  return (
    <div className="mb-8">
      <div className="overflow-y-auto break-words bg-white drop-shadow-lg rounded-lg p-4 min-h-[15vh] max-h-[40vh]">
        <p>{filteredMessages?.content}</p>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
