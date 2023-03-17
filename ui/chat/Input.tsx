"use client";

import api from "#/utils/appwrite";
import {
  PlusCircle,
  Gift,
  Image as ImageIcon,
  File,
  Smile,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Permission, Role } from "appwrite";
import useKeyPress from "#/hooks/useKeyPress";

export default function ChatInput() {
  const path = usePathname();
  const { downHandler, upHandler } = useKeyPress("shift enter");
  const [serverId, setServerId] = useState<string>("");
  const [channelId, setChannelId] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const channelIndex = path.split("/").findIndex((item) => item == "channel");
    setServerId(path.split("/")[channelIndex + 1]);
    setChannelId(path.split("/")[channelIndex + 2]);
  }, [path]);

  const createMessage = async (e: any) => {
    const creator = await api.getAccount();
    const server = await api.getDocument(serverId, "6407d0c519ecaeb89836");

    if (creator && server) {
      await api
        .createDocument(
          "6407d0ca13d1d255cd32",
          {
            creator: creator.$id,
            message: message,
            channel: channelId,
            server: serverId,
          },
          [
            Permission.read(Role.team(server.team)),
            Permission.write(Role.user(creator.$id)),
          ]
        )
        .then(() => {
          e.target.innerText = "";
        });
    }
  };

  return (
    <div className="w-full max-w-full relative">
      <div className="overflow-y-auto px-4 relative h-full max-h-32 w-full rounded-xl bg-slate-200 resize-none flex flex-row flex-nowrap dark:bg-slate-800">
        <div className="sticky top-0 pt-1">
          <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <PlusCircle size={20} />
          </button>
        </div>
        <div
          role="textarea"
          contentEditable
          onInput={(e: any) => setMessage(e.target.innerHTML)}
          onKeyDown={(e: any) => downHandler(e)}
          onKeyUp={(e: any) => upHandler(e, () => createMessage(e))}
          className="overflow-x-hidden bg-transparent h-full flex-1 p-2.5 dark:text-white"
          placeholder="Message #Channel"
        />
        <div className="sticky top-0 p-1">
          <div className="flex flex-row justify-center items-center">
            {/* <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <Gift size={20} />
            </button>
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <ImageIcon size={20} />
            </button>
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <File size={20} />
            </button>
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <Smile size={20} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
