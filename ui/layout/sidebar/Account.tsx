import Avatar from '#/ui/avatar/User';
import { Mic, Headphones, Settings } from 'lucide-react';

export default function Account() {
  return (
    <div className="w-full h-14 border-t border-slate-300 flex items-center p-2 flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900">
      <div className="h-full w-full flex-1 flex flex-row flex-nowrap items-center gap-2">
        <Avatar
          height={'100%'}
          src="https://source.unsplash.com/random"
          title="User Icon"
        />
        <div className="text-xs overflow-hidden dark:text-white">
          <p className="truncate font-bold">DishwasherDetergent</p>
          <p>#1295</p>
        </div>
      </div>
      <div className="flex-none">
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
          <Mic size={20} />
        </button>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
          <Headphones size={20} />
        </button>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}
