"use client";

import { SidebarContext } from "#/context/sidebarContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "#/hooks/useWindowDimensions";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { medium } = useWindowDimensions();
  /* @ts-ignore */
  const { sidebar } = useContext(SidebarContext);

  return (
    <AnimatePresence initial={false}>
      {sidebar && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: medium ? "22rem" : "80%" }}
          exit={{ width: 0 }}
          transition={{ ease: "easeInOut", duration: 0.25 }}
          key="sidebar"
          className="flex flex-row flex-nowrap justify-start overflow-hidden"
        >
          {children}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
