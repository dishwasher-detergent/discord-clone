"use client";

import { ServerTypes } from "#/types/ServerTypes";
import ServerAvatar from "#/ui/avatar/Server";
import CreateServerForm from "#/ui/form/server/create/Form";
import Login from "#/ui/login/Login";
import api from "#/utils/appwrite";
import { useEffect, useState } from "react";

export default function ServerSidebar() {
  const [content, setContent] = useState<ServerTypes[]>([]);

  useEffect(() => {
    api.listDocuments("6407d0c519ecaeb89836").then((response) => {
      const servers = response?.documents as ServerTypes[];
      setContent(servers);
    });
  }, []);

  return (
    <aside className="w-20 flex-none py-4 bg-slate-300 h-full overflow-hidden dark:bg-slate-900">
      <ul className="server w-full h-full flex flex-col flex-nowrap overflow-y-auto items-center gap-2">
        <div className="w-full flex flex-col flex-nowrap items-center gap-2">
          <Login />
          <div className="w-10 h-0.5 rounded-full bg-slate-500" />
        </div>
        {content.map((server: ServerTypes) => {
          return (
            <ServerAvatar
              key={server.$id}
              width="70%"
              title={server.title}
              server={server.$id}
            />
          );
        })}
        <CreateServerForm />
      </ul>
    </aside>
  );
}
