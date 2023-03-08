"use client";

import { SidebarContext } from "#/context/sidebarContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "#/hooks/useWindowDimensions";

interface WrapperProps {
  children: React.ReactNode;
}

export default function TextWrapper({ children }: WrapperProps) {
  /* @ts-ignore */
  const { sidebar, toggleSidebar } = useContext(SidebarContext);
  const { medium } = useWindowDimensions();

  return (
    <motion.main
      animate={{
        opacity: sidebar && !medium ? 0.75 : 1,
        borderTopLeftRadius: sidebar && !medium ? ".75rem" : 0,
      }}
      transition={{ delay: sidebar ? 0.2 : 0, duration: sidebar ? 0.15 : 0 }}
      className="flex-1 h-full overflow-hidden bg-slate-50 dark:bg-slate-700 z-40 relative"
    >
      {sidebar && !medium && (
        <button
          className="inset-0 absolute"
          type="button"
          onClick={() => toggleSidebar()}
        />
      )}
      <div className="w-screen md:w-full h-full flex flex-col flex-nowrap">
        {children}
      </div>
    </motion.main>
  );
}
