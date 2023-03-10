import Avatar from "#/ui/avatar/User";
import Skeleton from "react-loading-skeleton";

export default function SkeletonMessage() {
  return (
    <div className="w-full flex flex-row flex-nowrap gap-2">
      <div className="h-full w-12 flex-none overflow-hidden">
        <Avatar
          width={"100%"}
          src="https://source.unsplash.com/random"
          title="User Icon"
        />
      </div>
      <div className="flex-1 overflow-hidden dark:text-white">
        <div className="flex flex-row items-center overflow-hidden gap-2">
          <p className="font-bold truncate">
            <Skeleton
              className="w-24"
              baseColor="#1e293b"
              highlightColor="#0f172a"
            />
          </p>
          <p className="text-xs flex-none text-slate-600 dark:text-slate-300">
            <Skeleton
              className="w-16"
              baseColor="#1e293b"
              highlightColor="#0f172a"
            />
          </p>
        </div>
        <div className="">
          <Skeleton
            baseColor="#1e293b"
            highlightColor="#0f172a"
            count={Math.floor(Math.random() * 10)}
          />
        </div>
      </div>
    </div>
  );
}
