"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Bell,
  Bot,
  ChevronDown,
  Diamond,
  Pencil,
  Shield,
  Square,
  UserPlus,
  XCircle,
} from "lucide-react";

export default function ServerMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
          <ChevronDown size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="w-60 rounded-xl bg-white dark:bg-slate-900 z-[9999] p-2 text-white shadow-lg"
        >
          <DropdownMenu.Label />

          <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
            Server Boost <Diamond size={16} />
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="w-full border-t border-slate-300 dark:border-slate-700 my-1" />

          <DropdownMenu.Group>
            <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
              Invite People <UserPlus size={16} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
              App Directory <Bot size={16} />
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="w-full border-t border-slate-300 dark:border-slate-700 my-1" />
          </DropdownMenu.Group>

          <DropdownMenu.Group>
            <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
              Notification Settings <Bell size={16} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
              Privacy Settings <Shield size={16} />
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="w-full border-t border-slate-300 dark:border-slate-700 my-1" />
          </DropdownMenu.Group>

          <DropdownMenu.Group>
            <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
              Edit Server Profile <Pencil size={16} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-slate-900 dark:text-white w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-slate-700/10 dark:hover:bg-white/10 cursor-pointer">
              Hide Muted Channels <Square size={16} />
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="w-full border-t border-slate-300 dark:border-slate-700 my-1" />
          </DropdownMenu.Group>

          <DropdownMenu.Item className="text-rose-600 w-full p-2 text-sm rounded-md flex flex-row flex-nowrap gap-2 justify-between items-center hover:bg-rose-700/10 dark:hover:bg-rose-600/10 cursor-pointer">
            Leave Server <XCircle size={16} />
          </DropdownMenu.Item>

          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
