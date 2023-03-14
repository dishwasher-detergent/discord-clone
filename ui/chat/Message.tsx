import { MessageTypes } from "#/types/MessageTypes";
import Avatar from "#/ui/avatar/User";

export default function Message({ content }: { content: MessageTypes }) {
  return (
    <div className="w-full flex flex-row flex-nowrap gap-2">
      <div className="h-full w-12 flex-none overflow-hidden">
        <Avatar
          width={"100%"}
          avatar={content.user.prefs.avatar}
          title="User Icon"
        />
      </div>
      <div className="flex-1 overflow-hidden dark:text-white">
        <div className="flex flex-row items-center overflow-hidden gap-2">
          <p className="font-bold truncate">{content.user.name}</p>
          <p className="text-xs flex-none text-slate-600 dark:text-slate-300">
            {new Date(content.message.$createdAt).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
        <div className="">{content.message.message}</div>
      </div>
    </div>
  );
}
