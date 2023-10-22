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
    return "Type your message...";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
      <textarea
        name="message"
        id="message"
        rows={3}
        placeholder={getPlaceholderText()}
        required
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`button flex-grow resize-none mb-8 md:mb-0 bg-background text-light placeholder-dark cursor-text ${
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
        className={`button md:ml-8 md:p-12 flex items-center justify-center ${
          !isLoading && input
            ? "hover:border-highlight"
            : "hover:border-dark cursor-not-allowed"
        }`}
        disabled={!input || isLoading}
      >
        {isLoading ? (
          <ArrowPathIcon className="h-5 w-5 text-dark animate-spin" />
        ) : !input ? (
          <NoSymbolIcon className="h-5 w-5 text-dark" />
        ) : (
          <PaperAirplaneIcon className="h-5 w-5 text-highlight" />
        )}
      </button>
    </form>
  );
};

export default ChatInput;
