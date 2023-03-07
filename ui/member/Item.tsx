import Avatar from '../avatar/User';

interface ItemProps {
  children: React.ReactNode;
}

export default function MemberItem({ children }: ItemProps) {
  return (
    <li className="w-full h-14 flex items-center p-2 flex-row flex-nowrap gap-2 justify-between flex-none hover:bg-slate-700/10 cursor-pointer rounded-md">
      <div className="h-full w-full flex-1 flex flex-row flex-nowrap items-center gap-2">
        <Avatar height={'100%'} />
        <div className="overflow-hidden dark:text-white">
          <p className="truncate font-bold text-sm">DishwasherDetergent</p>
          <p className="truncate text-xs text-slate-300">
            asdfasdfasdfasdfasdfasasdfasdfasdfdfasdfasdf
          </p>
        </div>
      </div>
    </li>
  );
}
