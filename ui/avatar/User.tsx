import Image from "next/image";

interface AvatarProps {
  width?: string | number;
  height?: string | number;
  src: string;
  title: string;
}

export default function Avatar({
  width = "auto",
  height = "auto",
  src,
  title,
}: AvatarProps) {
  return (
    <div
      className="relative aspect-square"
      style={{ width: width, height: height }}
    >
      <div className="bg-slate-900 rounded-full h-full w-full aspect-square dark:bg-slate-50 overflow-hidden relative">
        {/* <Image src={src} alt={title} fill /> */}
      </div>
      <div className="z-40 w-4 h-4 absolute bottom-0 right-0 rounded-full border-2 border-slate-100 dark:border-slate-600 bg-green-400" />
    </div>
  );
}
