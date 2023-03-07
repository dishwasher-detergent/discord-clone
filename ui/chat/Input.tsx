import {
  PlusCircle,
  Gift,
  Image as ImageIcon,
  File,
  Smile,
} from 'lucide-react';

export default function ChatInput() {
  return (
    <div className="w-full relative">
      <div className=" px-4 h-12 w-full rounded-xl bg-slate-200 resize-none flex flex-row flex-nowrap dark:bg-slate-800">
        <div className="flex items-center h-full">
          <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <PlusCircle size={20} />
          </button>
        </div>
        <textarea
          className="resize-none bg-transparent h-full flex-1 p-2.5 dark:text-white"
          placeholder="Message #Channel"
        />
        <div className="flex items-center h-full">
          <button className="block p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <Gift size={20} />
          </button>
          <button className="block p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <ImageIcon size={20} />
          </button>
          <button className="block p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <File size={20} />
          </button>
          <button className="block p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <Smile size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
