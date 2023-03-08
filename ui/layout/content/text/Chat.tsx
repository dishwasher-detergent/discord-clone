import { MessageTypes } from "#/types/MessageTypes";
import Message from "#/ui/chat/Message";

export default function TextChat({ messages }: { messages: MessageTypes[] }) {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-8 p-4">
      {messages &&
        messages.map((message: any) => {
          return <Message key={message.$id} content={message} />;
        })}
    </div>
  );
}
