import { ChatInputProps } from "@/types/ChatTypes";
import {
  ArrowPathIcon,
  NoSymbolIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
// import { ChatInputProps } from "../../types/chatTypes";

const ChatInput: React.FC<ChatInputProps> = ({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
  selectedModel,
}) => {
  const getPlaceholderText = () => {
    if (isLoading) {
      return selectedModel === "gpt-3"
        ? "Whispering to the parrot..."
        : "Writing in invisible ink...";
    }
    return "Describe what you do";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row mb-10">
      <input
        name="message"
        id="message"
        placeholder={getPlaceholderText()}
        required
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`h-14 w-2/3 rounded-lg border border-gray-200 px-4 ${
          !isLoading ? "hover:border-highlight" : "cursor-not-allowed"
        }`}
        disabled={isLoading}
        aria-label="Type your message"
        aria-required="true"
        aria-describedby="Message Description"
        maxLength={250}
      />
      <button
        type="submit"
        aria-label="Send message"
        className={`h-14 w-40 ml-10 flex items-center justify-center bg-violet-700 rounded-lg ${
          !isLoading && input
            ? "hover:border-highlight hover:bg-violet-400"
            : "hover:border-dark cursor-not-allowed bg-violet-400"
        }`}
        disabled={!input || isLoading}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p className="text-white text-xl">Generate</p>
        )}
      </button>
    </form>
  );
};

export default ChatInput;
