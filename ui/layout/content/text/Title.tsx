"use client";

import IconButton from "#/ui/buttons/Icon";
import Input from "#/ui/form/Input";
import SidebarToggle from "#/ui/toggles/SidebarToggle";
import { Pin, Hash, Users, Bell, HelpCircle, Inbox, Menu } from "lucide-react";
import { useContext } from "react";
import { MemberListContext } from "#/context/memberListContext";

interface TitleProps {
  children: React.ReactNode;
}

export default function TextTitle({ children }: TitleProps) {
  /* @ts-ignore */
  const { memberList, toggleMemberList } = useContext(MemberListContext);

  return (
    <div className="w-full h-12 border-b border-slate-300 flex items-center px-4 flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900 dark:bg-slate-700">
      <div className="flex flex-row gap-2">
        <SidebarToggle />
        <h2 className="flex flex-row flex-nowarp gap-2 items-center font-bold dark:text-white">
          <span className="text-slate-600 dark:text-slate-400">
            <Hash size={20} />
          </span>
          {children}
        </h2>
      </div>
      <div className="flex-none flex flex-row gap-1">
        <IconButton
          tooltip={{ message: "Threads", position: "bottom", align: "center" }}
        >
          <Hash size={20} />
        </IconButton>
        <IconButton
          tooltip={{
            message: "Notification Settings",
            position: "bottom",
            align: "center",
          }}
        >
          <Bell size={20} />
        </IconButton>
        <IconButton
          tooltip={{
            message: "Pinned Messages",
            position: "bottom",
            align: "center",
          }}
        >
          <Pin size={20} />
        </IconButton>
        <IconButton
          onClick={() => toggleMemberList()}
          tooltip={{
            message: `${memberList ? "Hide" : "Show"} Member List.`,
            position: "bottom",
            align: "center",
          }}
        >
          <Users size={20} />
        </IconButton>
        <Input placeholder="Search" />
        <IconButton
          tooltip={{ message: "Inbox", position: "bottom", align: "center" }}
        >
          <Inbox size={20} />
        </IconButton>
        <IconButton
          tooltip={{ message: "Test", position: "bottom", align: "end" }}
        >
          <HelpCircle size={20} />
        </IconButton>
      </div>
    </div>
  );
}
