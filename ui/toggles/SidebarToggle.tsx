'use client';

import { SidebarContext } from '#/context/sidebarContext';
import { Menu, X } from 'lucide-react';
import { useContext } from 'react';

export default function SidebarToggle() {
  /* @ts-ignore */
  const { sidebar, toggleSidebar } = useContext(SidebarContext);

  return (
    <button
      type="button"
      className="p-2 rounded-xl hover:hover:bg-slate-700/10 dark:hover:hover:bg-white/10 dark:text-white block md:hidden"
      onClick={() => toggleSidebar()}
    >
      <span className="sr-only">Navigation</span>
      {sidebar ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
