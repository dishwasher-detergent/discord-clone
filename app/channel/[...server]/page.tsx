"use client";

import api from "#/utils/appwrite";
import { MessageTypes } from "#/types/MessageTypes";
import TextWrapper from "#/ui/layout/content/text/Wrapper";
import MemberList from "#/ui/member/List";
import TextTitle from "#/ui/layout/content/text/Title";
import TextChat from "#/ui/layout/content/text/Chat";
import ChatInput from "#/ui/chat/Input";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import { ChannelTypes } from "#/types/ChannelTypes";

export default function Channel({ params }: { params: any }) {
  const [channelInfo, setChannel] = useState<any>(null);

  useEffect(() => {
    api
      .getDocument(params.server[1], "6407d0c0eb16af0ec5e2")
      .then((response) => {
        const channels = response as ChannelTypes;
        setChannel(channels);
      });
  }, [params]);

  return (
    <TextWrapper>
      <TextTitle>{channelInfo && channelInfo.title}</TextTitle>
      <div className="h-full w-full overflow-hidden flex flex-row flex-nowrap">
        <div className="flex-1 overflow-hidden w-full flex flex-col flex-nowrap p-2">
          <TextChat />
          <div className="p-4">
            <ChatInput />
          </div>
        </div>
        <MemberList />
      </div>
    </TextWrapper>
  );
}
