import { MessageTypes } from "#/types/MessageTypes";
import ChatInput from "#/ui/chat/Input";
import TextChat from "./Chat";

export default function TextContent({
  messages,
}: {
  messages: MessageTypes[];
}) {
  return (
    <div className="flex-1 overflow-hidden w-full flex flex-col flex-nowrap p-2">
      <TextChat messages={messages} />
      <div className="p-4">
        <ChatInput />
      </div>
    </div>
  );
}
