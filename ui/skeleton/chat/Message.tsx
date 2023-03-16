"use client";

import Avatar from "#/ui/avatar/User";
import Skeleton from "#/ui/skeleton/Skeleton";

export default function SkeletonMessage() {
  return (
    <div className="w-full flex flex-row flex-nowrap gap-2">
      <div className="h-full w-12 flex-none overflow-hidden">
        <Avatar width={"100%"} title="User Icon" />
      </div>
      <div className="flex-1 overflow-hidden dark:text-white">
        <div className="flex flex-row items-center overflow-hidden gap-2 pb-2">
          <p className="font-bold truncate">
            <Skeleton />
          </p>
          <p className="text-xs flex-none text-slate-600 dark:text-slate-300">
            <Skeleton />
          </p>
        </div>
        <div className="">
          <Skeleton maxRows={12} />
        </div>
      </div>
    </div>
  );
}
