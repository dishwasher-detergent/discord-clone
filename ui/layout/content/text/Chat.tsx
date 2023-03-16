"use client";

import { MessageTypes } from "#/types/MessageTypes";
import Message from "#/ui/chat/Message";
import ChatWelcome from "#/ui/chat/Welcome";
import api from "#/utils/appwrite";
import { Server } from "#/utils/config";
import { Query } from "appwrite";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TextChat() {
  const path = usePathname();
  const [serverId, setServerId] = useState<string>("");
  const [channelId, setChannelId] = useState<string>("");
  const [messages, setMessages] = useState<MessageTypes[]>([]);
  const [fetchingMessages, setFetchingMessages] = useState<boolean>(false);
  const [prevScrollTop, setPrevScrollTop] = useState<number | null>(null);
  const [response, setResponse] = useState<MessageTypes | null>(null);
  const messageContainer = useRef(null);

  useEffect(() => {
    const channelIndex = path.split("/").findIndex((item) => item == "channel");
    setServerId(path.split("/")[channelIndex + 1]);
    setChannelId(path.split("/")[channelIndex + 2]);
  }, [path]);

  useEffect(() => {
    const unsubscribe = api
      .provider()
      .client.subscribe(
        `databases.${Server.databaseID}.collections.6407d0ca13d1d255cd32.documents`,
        (response: { payload: MessageTypes }) => {
          setResponse(response.payload);
        }
      );

    return function cleanup() {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    api
      .getMessages("640fa83096da31a1f220", {
        databaseId: Server.databaseID,
        collectionId: "6407d0ca13d1d255cd32",
        filter: [
          Query.equal("server", serverId),
          Query.equal("channel", channelId),
          Query.orderDesc("$createdAt"),
          Query.limit(25),
        ],
      })
      .then((res) => {
        const message = JSON.parse(res.response).messages[0] as MessageTypes;

        if (message) setMessages([message, ...messages]);
      });
  }, [response]);

  const onScroll = async () => {
    if (fetchingMessages) return;
    if (messageContainer.current) {
      const element = messageContainer.current as any;
      const { scrollTop, scrollHeight, clientHeight } = element;
      if (Math.abs(scrollTop) + clientHeight === scrollHeight) {
        setFetchingMessages(true);
        setPrevScrollTop(scrollTop);
        const fetch = await api.getMessages("640fa83096da31a1f220", {
          databaseId: Server.databaseID,
          collectionId: "6407d0ca13d1d255cd32",
          filter: [
            Query.equal("server", serverId),
            Query.equal("channel", channelId),
            Query.orderDesc("$createdAt"),
            Query.limit(25),
            Query.cursorAfter(messages[messages.length - 1].message.$id),
          ],
        });

        const newMessages = JSON.parse(fetch.response)
          .messages as MessageTypes[];
        setMessages([...messages, ...newMessages]);
        element.scrollTop = prevScrollTop;
        setFetchingMessages(false);
      }
    }
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
