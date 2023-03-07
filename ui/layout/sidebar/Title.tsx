import { ChevronDown } from 'lucide-react';

interface TitleProps {
  children: React.ReactNode;
}

export default function SidebarTitle({ children }: TitleProps) {
  return (
    <h2 className="w-full h-14 border-b border-slate-300 flex items-center px-4 font-bold flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900">
      <span className="w-full truncate dark:text-white">{children}</span>
      <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
        <ChevronDown size={20} />
      </button>
    </h2>
  );
}
