"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

type TooltipType = {
  message: string;
  position: "top" | "bottom" | "left" | "right";
  align: "start" | "center" | "end";
};

interface IconButtonProps {
  children: React.ReactElement | React.ReactElement[];
  tooltip?: TooltipType;
  onClick?: (e?: any) => void | any;
}

export default function IconButton({
  children,
  tooltip,
  onClick,
}: IconButtonProps) {
  {
    return tooltip ? (
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={onClick}
              className="test block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white"
            >
              {children}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="shadow-lg z-[1000] py-1 px-2.5 rounded-xl bg-white text-slate-900 dark:bg-slate-900 dark:text-white text-sm font-bold"
              side={tooltip.position}
              align={tooltip.align}
            >
              <Tooltip.Arrow className="text-white dark:text-slate-900" />
              {tooltip.message}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    ) : (
      <button
        onClick={onClick}
        className="block p-2 rounded-xl hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white"
      >
        {children}
      </button>
    );
  }
}
