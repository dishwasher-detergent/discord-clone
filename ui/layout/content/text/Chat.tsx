import Message from '#/ui/chat/Message';

export default function TextChat({ messages }: { messages: any }) {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-8 p-4">
      {messages &&
        messages.map((message: any, index: any) => {
          return <Message content={message} />;
        })}
    </div>
  );
}
