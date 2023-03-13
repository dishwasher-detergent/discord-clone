"use client";

import { MessageTypes } from "#/types/MessageTypes";
import Message from "#/ui/chat/Message";
import ChatWelcome from "#/ui/chat/Welcome";
import api from "#/utils/appwrite";
import { Server } from "#/utils/config";
import { Query } from "appwrite";
import { useEffect, useRef, useState } from "react";

interface ChatInputProps {
  initialMessages: MessageTypes[];
  server: string;
  channel: string;
}

export default function TextChat({
  initialMessages,
  server,
  channel,
}: ChatInputProps) {
  const [messages, setMessages] = useState<MessageTypes[]>(initialMessages);
  const [fetchingMessages, setFetchingMessages] = useState<boolean>(false);
  const [prevScrollTop, setPrevScrollTop] = useState<number | null>(null);
  const [response, setResponse] = useState<MessageTypes | null>(null);
  const messageContainer = useRef(null);

  // useEffect(() => {
  //   const test = api
  //     .provider()
  //     .client.subscribe(
  //       `databases.${Server.databaseID}.collections.6407d0ca13d1d255cd32.documents`,
  //       (response: { payload: MessageTypes }) => {
  //         setResponse(response.payload);
  //       }
  //     );

  //   return function cleanup() {
  //     test();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (response) setMessages([response, ...messages]);
  // }, [response]);

  const onScroll = async () => {
    // if (fetchingMessages) return;
    // if (messageContainer.current) {
    //   const element = messageContainer.current as any;
    //   const { scrollTop, scrollHeight, clientHeight } = element;
    //   if (Math.abs(scrollTop) + clientHeight === scrollHeight) {
    //     setFetchingMessages(true);
    //     setPrevScrollTop(scrollTop);
    //     const fetch = await api.listDocuments("6407d0ca13d1d255cd32", [
    //       Query.equal("server", server),
    //       Query.equal("channel", channel),
    //       Query.orderDesc("$createdAt"),
    //       Query.limit(5),
    //       Query.cursorAfter(messages[messages.length - 1].$id),
    //     ]);
    //     console.log(fetch);
    //     const newMessages = fetch.documents as MessageTypes[];
    //     setMessages([...messages, ...newMessages]);
    //     element.scrollTop = prevScrollTop;
    //     setFetchingMessages(false);
    //   }
    // }
  };

  return (
    <div
      onScroll={() => onScroll()}
      ref={messageContainer}
      className="flex-1 overflow-y-auto p-4 flex flex-col-reverse"
    >
      <div className="flex flex-col-reverse gap-8">
        {messages.map((message: MessageTypes, index: number) => {
          return <Message key={message.message.$id} content={message} />;
        })}
        <ChatWelcome server="test" />
      </div>
    </div>
  );
}
