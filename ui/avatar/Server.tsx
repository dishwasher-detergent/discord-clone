"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AvatarProps {
  width?: string | number;
  height?: string | number;
  src?: string;
  title: string;
  server: string;
}

export default function ServerAvatar({
  width = "auto",
  height = "auto",
  src,
  title,
  server,
}: AvatarProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <MotionConfig transition={{ duration: 0.15 }}>
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
        <motion.div
          className="bg-slate-900 aspect-square cursor-pointer dark:bg-slate-50 overflow-hidden relative"
          style={{ width: width, height: height }}
          initial={false}
          animate={{
            borderRadius: hovered ? "24px" : "32px",
          }}
        >
          <Link href={`/channel/${server}`}>
            {src ? (
              <Image src={src} alt={title} fill />
            ) : (
              <div className="font-bold w-full h-full text-xl grid place-items-center capitalize">
                {title.slice(0, 2)}
              </div>
            )}
          </Link>
        </motion.div>
      </li>
    </MotionConfig>
  );
}
