import { ServerTypes } from "#/types/ServerTypes";
import ServerAvatar from "#/ui/avatar/Server";
import Login from "#/ui/login/Login";
import { Models } from "appwrite";

type Servers = ServerTypes & Models.Document;

interface SidebarProps {
  content: Servers[];
}

export default function ServerSidebar({ content }: SidebarProps) {
  return (
    <aside className="w-20 flex-none py-4 bg-slate-300 h-full overflow-hidden dark:bg-slate-900">
      <ul className="server w-full h-full flex flex-col flex-nowrap overflow-y-auto items-center gap-2">
        <div className="w-full flex flex-col flex-nowrap items-center gap-2">
          <Login />
          <div className="w-10 h-0.5 rounded-full bg-slate-500" />
        </div>
        {content.map((server: Servers) => {
          return (
            <ServerAvatar
              key={server.$id}
              width="70%"
              title={server.title}
              server={server.$id}
            />
          );
        })}
      </ul>
    </aside>
  );
}
