import Input from '#/ui/form/Input';
import SidebarToggle from '#/ui/toggles/SidebarToggle';
import { Pin, Hash, Users, Bell, HelpCircle, Inbox, Menu } from 'lucide-react';

interface TitleProps {
  children: React.ReactNode;
}

export default function TextTitle({ children }: TitleProps) {
  return (
    <div className="w-full h-14 border-b border-slate-300 flex items-center px-4 flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900 dark:bg-slate-700">
      <div className="flex flex-row gap-2">
        <SidebarToggle />
        <h2 className="flex flex-row flex-nowarp gap-2 items-center font-bold dark:text-white">
          <span className="text-slate-600 dark:text-slate-400">
            <Hash size={20} />
          </span>
          {children}
        </h2>
      </div>
      <div className="flex-none flex flex-row gap-1">
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white hidden md:block">
          <Hash size={20} />
        </button>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white hidden md:block">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white hidden md:block">
          <Pin size={20} />
        </button>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white">
          <Users size={20} />
        </button>
        <Input placeholder="Search" />
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white hidden md:block">
          <Inbox size={20} />
        </button>
        <button className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white hidden md:block">
          <HelpCircle size={20} />
        </button>
      </div>
    </div>
  );
}
