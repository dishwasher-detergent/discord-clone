"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function useParams() {
  const path = usePathname();

  function getParams() {
    const channelIndex = path.split("/").findIndex((item) => item == "channel");

    const serverId = path.split("/")[channelIndex + 1];
    const channelId = path.split("/")[channelIndex + 2];
    return {
      serverId,
      channelId,
    };
  }

  const [params, setParams] = useState(getParams);

  useEffect(() => {
    setParams(getParams);
  }, [path]);

  return params;
}
