"use client";

import SidebarTitle from "#/ui/layout/sidebar/Title";
import Account from "./Account";
import SidebarItem from "./Item";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChannelTypes } from "#/types/ChannelTypes";
import { ChevronDown } from "lucide-react";

export default function Sidebar({ content }: { content: any }) {
  return (
    <aside className="flex-1 rounded-t-xl md:rounded-tl-xl md:rounded-tr-none flex h-full bg-slate-100 overflow-hidden flex-col flex-nowrap dark:bg-slate-800">
      <SidebarTitle>{content.title}</SidebarTitle>
      <ul className="sidebar w-full py-4 px-2.5 flex flex-col flex-nowrap overflow-y-auto gap-4 flex-1">
        {content.channels &&
          Object.keys(content.channels).map((category: any, index: number) => {
            return (
              <Collapsible.Root key={index} defaultOpen={true}>
                <Collapsible.Trigger className="flex flex-row flex-nowrap items-center gap-2 uppercase text-xs font-bold w-full mb-2 ">
                  <ChevronDown size={10} />
                  <p>{category}</p>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <ul className="w-full flex flex-col flex-nowrap gap-1">
                    {content.channels[category].map((channel: ChannelTypes) => {
                      return (
                        <SidebarItem
                          key={channel.$id}
                          type={channel.type}
                          channel={`${channel.server}/${channel.$id}`}
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
      <Account account={content.account} />
    </aside>
  );
}
