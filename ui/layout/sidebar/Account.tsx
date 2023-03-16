"use client";

import Avatar from "#/ui/avatar/User";
import IconButton from "#/ui/buttons/Icon";
import api from "#/utils/appwrite";
import { Models } from "appwrite";
import { Mic, Headphones, Settings } from "lucide-react";
import { useEffect, useState } from "react";

interface AccountProps {
  account: Models.Preferences;
}

export default function Account() {
  const [account, setAccount] = useState<Models.Preferences | null>(null);

  useEffect(() => {
    api.getAccount().then((response) => {
      setAccount(response);
    });
  }, []);

  return (
    <div className="w-full h-14 border-t border-slate-300 flex items-center p-2 flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900">
      {account && (
        <>
          <div className="h-full w-full flex-1 flex flex-row flex-nowrap items-center gap-2">
            <Avatar
              height={"100%"}
              avatar={account.prefs.avatar}
              title="User Icon"
            />
            <div className="text-sm overflow-hidden dark:text-white">
              <p className="truncate font-bold">{account.name}</p>
              <p className="text-xs truncate">{account.$id}</p>
            </div>
          </div>
          <div className="flex-none flex flex-row flex-nowrap">
            <IconButton
              tooltip={{
                message: "Mute",
                align: "center",
                position: "top",
              }}
            >
              <Mic size={20} />
            </IconButton>
            <IconButton
              tooltip={{
                message: "Deafen",
                align: "center",
                position: "top",
              }}
            >
              <Headphones size={20} />
            </IconButton>
            <IconButton
              tooltip={{
                message: "User Settings",
                align: "center",
                position: "top",
              }}
            >
              <Settings size={20} />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
}
