import {
  PlusCircle,
  Gift,
  Image as ImageIcon,
  File,
  Smile,
} from "lucide-react";

export default function ChatInput() {
  return (
    <div className="w-full max-w-full relative">
      <div className="overflow-y-auto px-4 relative h-full max-h-32 w-full rounded-xl bg-slate-200 resize-none flex flex-row flex-nowrap dark:bg-slate-800">
        <div className="sticky top-0 pt-1">
          <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
            <PlusCircle size={20} />
          </button>
        </div>
        <div
          contentEditable
          className="overflow-x-hidden bg-transparent h-full flex-1 p-2.5 dark:text-white"
          placeholder="Message #Channel"
        />
        <div className="sticky top-0 p-1">
          <div className="flex flex-row justify-center items-center">
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <Gift size={20} />
            </button>
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <ImageIcon size={20} />
            </button>
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <File size={20} />
            </button>
            <button className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white">
              <Smile size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
