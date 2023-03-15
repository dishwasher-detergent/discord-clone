"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { motion, MotionConfig } from "framer-motion";
import { Compass, Plus } from "lucide-react";
import { useState } from "react";

interface CreateServerProps {
  width?: string | number;
  height?: string | number;
  setOpen: () => void;
}

export default function CreateButton({
  width = "auto",
  height = "auto",
  setOpen,
}: CreateServerProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <MotionConfig transition={{ duration: 0.15 }}>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <li
              className="w-full grid place-items-center relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="absolute left-0 h-full flex items-center">
                <motion.div
                  className="rounded-r-full bg-slate-900 dark:bg-slate-50"
                  initial={false}
                  animate={{
                    width: hovered ? ".25rem" : 0,
                    height: hovered ? "1.5rem" : 0,
                  }}
                />
              </div>
              <motion.button
                onClick={setOpen}
                className="bg-white aspect-square cursor-pointer dark:bg-slate-50 overflow-hidden relative grid place-items-center hover:bg-green-600 hover:text-white text-green-600"
                style={{ width: width, height: height }}
                initial={false}
                animate={{
                  borderRadius: hovered ? "24px" : "32px",
                }}
              >
                <Plus size={24} />
              </motion.button>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="shadow-lg z-[1000] py-1 px-2.5 rounded-xl bg-white text-slate-900 dark:bg-slate-900 dark:text-white text-sm font-bold"
            >
              Add a Server
              <Tooltip.Arrow className="fill-white dark:fill-slate-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </MotionConfig>
  );
}
