"use client";

import Avatar from "#/ui/avatar/User";
import Login from "#/ui/form/login/Login";
import api from "#/utils/appwrite";
import { Models } from "appwrite";
import { useEffect, useState } from "react";

export default function Account() {
  const [account, setAccount] = useState<Models.Preferences | null>(null);

  useEffect(() => {
    api.getAccount().then((response) => {
      setAccount(response);
    });
  }, []);

  return (
    <div className="w-full h-14 border-t border-slate-300 overflow-hidden flex items-center p-2 flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900">
      {account ? (
        <div className="h-full flex-1 flex flex-row flex-nowrap items-center gap-2">
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
      ) : (
        <Login />
      )}
    </div>
  );
}
