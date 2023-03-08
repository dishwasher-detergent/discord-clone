"use client";

import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    const small = hasWindow && window.innerWidth >= 640;
    const medium = hasWindow && window.innerWidth >= 768;
    const large = hasWindow && window.innerWidth >= 1024;
    const extra_large = hasWindow && window.innerWidth >= 1280;
    const double_large = hasWindow && window.innerWidth >= 1536;
    return {
      width,
      height,
      small,
      medium,
      large,
      extra_large,
      double_large,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
