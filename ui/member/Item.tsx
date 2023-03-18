import { MemberTypes } from "#/types/MemberTypes";
import Avatar from "../avatar/User";

interface MemberProps {
  content: MemberTypes;
}

export default function MemberItem({ content }: MemberProps) {
  return (
    <li className="w-full h-14 flex items-center p-2 flex-row flex-nowrap gap-2 justify-between flex-none hover:bg-slate-700/10 cursor-pointer rounded-md">
      <div className="h-full w-full flex-1 flex flex-row flex-nowrap items-center gap-2">
        <Avatar
          height={"100%"}
          avatar={content.user.prefs.avatar}
          title="User Icon"
        />
        <div className="overflow-hidden dark:text-white">
          <p className="truncate font-bold text-sm">
            {content.member.userName}
          </p>
          <p className="truncate text-xs text-slate-500">
            {content.member.userId}
          </p>
        </div>
      </div>
    </li>
  );
}
