"use client";

import SidebarTitle from "#/ui/layout/sidebar/Title";
import SidebarItem from "./Item";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChannelTypes } from "#/types/ChannelTypes";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import api from "#/utils/appwrite";
import { ServerTypes } from "#/types/ServerTypes";
import { Query } from "appwrite";
import Account from "#/ui/layout/sidebar/Account";
import useParams from "#/hooks/useParams";

export default function Sidebar() {
  const { serverId, channelId } = useParams();
  const [serverInfo, setServer] = useState<ServerTypes | null>(null);
  const [channels, setChannel] = useState<ChannelTypes[]>([]);

  useEffect(() => {
    api.getDocument(serverId, "6407d0c519ecaeb89836").then((response) => {
      const servers = response as ServerTypes;
      setServer(servers);
    });
  }, [serverId]);

  useEffect(() => {
    api
      .listDocuments("6407d0c0eb16af0ec5e2", [Query.equal("server", serverId)])
      .then((response) => {
        let category = [];
        if (response) {
          const channels = response?.documents as ChannelTypes[];
          category = channels.reduce(
            (groups: any, item: any) => ({
              ...groups,
              [item.category.toLowerCase()]: [
                ...(groups[item.category.toLowerCase()] || []),
                item,
              ],
            }),
            {}
          );
        }
        setChannel(category);
      });
  }, [serverId]);

  return (
    <aside className="flex-1 rounded-t-xl md:rounded-none flex h-full bg-slate-100 overflow-hidden flex-col flex-nowrap dark:bg-slate-800">
      <SidebarTitle>{serverInfo && serverInfo.title}</SidebarTitle>
      <ul className="sidebar w-full py-4 px-2.5 flex flex-col flex-nowrap overflow-y-auto gap-4 flex-1">
        {channels &&
          Object.keys(channels).map((category: any, index: number) => {
            return (
              <Collapsible.Root key={index} defaultOpen={true}>
                <Collapsible.Trigger className="flex flex-row flex-nowrap items-center gap-2 uppercase text-xs font-bold w-full mb-2 ">
                  <ChevronDown size={10} />
                  <p>{category}</p>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <ul className="w-full flex flex-col flex-nowrap gap-1">
                    {channels[category].map((channel: ChannelTypes) => {
                      return (
                        <SidebarItem
                          key={channel.$id}
                          type={channel.type}
                          channel={`${channel.server}/${channel.$id}`}
                          selected={channelId == channel.$id}
                        >
                          {channel.title}
                        </SidebarItem>
                      );
                    })}
                  </ul>
                </Collapsible.Content>
              </Collapsible.Root>
            );
          })}
      </ul>
      <Account />
    </aside>
  );
}
