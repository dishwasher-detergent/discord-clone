import { MessageTypes } from "#/types/MessageTypes";
import ChatInput from "#/ui/chat/Input";
import TextChat from "./Chat";

interface TextContentProps {
  channel: string;
  server: string;
  messages: MessageTypes[];
}

export default function TextContent({
  channel,
  server,
  messages,
}: TextContentProps) {
  return (
    <div className="flex-1 overflow-hidden w-full flex flex-col flex-nowrap p-2">
      <TextChat initialMessages={messages} channel={channel} server={server} />
      <div className="p-4">
        <ChatInput channel={channel} server={server} />
      </div>
    </div>
  );
}
