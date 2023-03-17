"use client";

import api from "#/utils/appwrite";
import TextWrapper from "#/ui/layout/content/text/Wrapper";
import MemberList from "#/ui/member/List";
import TextTitle from "#/ui/layout/content/text/Title";
import TextChat from "#/ui/layout/content/text/Chat";
import ChatInput from "#/ui/chat/Input";
import { useEffect, useState } from "react";
import { ChannelTypes } from "#/types/ChannelTypes";
import { Query } from "appwrite";
import { useRouter } from "next/navigation";

export default function Channel({ params }: { params: any }) {
  const router = useRouter();
  const [channelInfo, setChannel] = useState<any>(null);

  useEffect(() => {
    if (params.server.length < 2) {
      api
        .listDocuments("6407d0c0eb16af0ec5e2", [
          Query.equal("server", params.server[0]),
          Query.equal("default", true),
        ])
        .then((response) => {
          if (response) {
            router.push(
              `channel/${params.server[0]}/${response.documents[0].$id}`
            );
          }
        });
    } else {
      api
        .getDocument(params.server[1], "6407d0c0eb16af0ec5e2")
        .then((response) => {
          const channels = response as ChannelTypes;
          setChannel(channels);
        });
    }
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
