'use client';

import { SidebarContext } from '#/context/sidebarContext';
import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  /* @ts-ignore */
  const { sidebar, toggleSidebar } = useContext(SidebarContext);

  return (
    <AnimatePresence mode="wait">
      {sidebar && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: 'auto' }}
          exit={{ width: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.25 }}
          key="sidebar"
          className="flex flex-row flex-nowrap justify-start"
        >
          {children}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
