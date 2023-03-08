"use client";

import { Hash, UserPlus, Volume2 } from "lucide-react";
import Link from "next/link";

interface ItemProps {
  children: React.ReactNode;
  channel: string;
  type?: "text" | "voice";
}

export default function SidebarItem({
  children,
  type = "text",
  channel,
}: ItemProps) {
  return (
    <li>
      <Link
        href={`/channel/${channel}`}
        className="w-full pl-3 pr-1 py-1 rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer"
      >
        <p className="flex flex-row flex-nowarp gap-2 items-center dark:text-white text-sm">
          <span className="text-slate-600 dark:text-slate-400">
            <ChannelIcon type={type} />
          </span>
          {children}
        </p>
        <button className="p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
          <UserPlus size={16} />
        </button>
      </Link>
    </li>
  );
}

function ChannelIcon({ type }: { type: "text" | "voice" }) {
  switch (type) {
    case "text":
      return <Hash size={20} />;
    case "voice":
      return <Volume2 size={20} />;
  }
}
