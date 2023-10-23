export type Message = {
  role: "user" | "assistant" | "system" | "function";
  content: string;
};

export type ModelType = "gpt-3" | "gpt-4";

export type ChatModelSelectionProps = {
  selectedModel: ModelType;
  setSelectedModel: React.Dispatch<React.SetStateAction<ModelType>>;
  isLoading: boolean;
};

export type ChatMessagesProps = {
  messages: Message[];
  selectedModel: ModelType;
};

export type ChatInputProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  isLoading: boolean;
  selectedModel: ModelType;
};
