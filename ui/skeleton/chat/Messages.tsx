"use client";

import SkeletonMessage from "#/ui/skeleton/chat/Message";

export default function SkeletonMessages({ count = 1 }: { count?: number }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse">
      <div className="flex flex-col-reverse gap-8">
        {[...Array(count)].map((index: number) => (
          <SkeletonMessage key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
