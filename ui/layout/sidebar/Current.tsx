import { ScreenShare } from 'lucide-react';

export default function CurrentlyPlaying() {
  return (
    <div className="w-full h-14 border-t border-slate-300 flex items-center p-2 flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900">
      <div className="flex-1 flex items-center h-full overflow-hidden gap-2">
        <div className="bg-slate-900 h-full aspect-square" />
        <p className="font-bold text-sm truncate dark:text-white">
          Current Application
        </p>
      </div>
      <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
        <ScreenShare size={20} />
      </button>
    </div>
  );
}
