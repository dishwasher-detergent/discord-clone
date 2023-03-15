import api from "#/utils/appwrite";
import Image from "next/image";

interface AvatarProps {
  width?: string | number;
  height?: string | number;
  avatar?: string;
  title: string;
}

export default function Avatar({
  width = "auto",
  height = "auto",
  avatar,
  title,
}: AvatarProps) {
  const avatarSrc = avatar
    ? api.getFilePreview(avatar, {
        height: "64",
        width: "64",
        quality: "80",
        gravity: "center",
      })
    : null;

  return (
    <div
      className="relative aspect-square"
      style={{ width: width, height: height }}
    >
      <div className="bg-slate-900 rounded-full h-full w-full aspect-square dark:bg-slate-50 overflow-hidden relative">
        {avatarSrc && <Image src={avatarSrc.href} alt={title} fill />}
      </div>
      <div className="z-40 w-4 h-4 absolute bottom-0 right-0 rounded-full border-2 border-slate-100 dark:border-slate-600 bg-green-500" />
    </div>
  );
}
