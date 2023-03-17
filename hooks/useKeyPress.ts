import { useEffect, useRef } from "react";

export default function useKeyPress(keys: string) {
  const keysArray: string[] = keys
    .split(" ")
    .map((key: string) => key.toLowerCase());
  const isSingleKey = keys.length === 1;
  const pressedKeys = useRef<string[]>([]);

  const keyIsRequested = (key: string) => {
    key = key.toLowerCase();
    return keys.includes(key);
  };

  const addPressedKey = (key: string) => {
    key = key.toLowerCase();
    const update: string[] = pressedKeys.current.slice();
    update.push(key);
    pressedKeys.current = update;
  };

  const removePressedKey = (key: string) => {
    key = key.toLowerCase();
    let update = pressedKeys.current.slice();
    const index = update.findIndex((sKey) => sKey === key);
    update = update.slice(0, index);
    pressedKeys.current = update;
  };

  const downHandler = (key: any) => {
    const isKeyRequested = keyIsRequested(key.key.toLowerCase());
    if (isKeyRequested) {
      addPressedKey(key.key.toLowerCase());
    }

    const containsAll = keysArray.every((i) => pressedKeys.current.includes(i));

    if (!containsAll && key.key.toLowerCase() == "enter") {
      key.preventDefault();
    }
  };

  const upHandler = (key: any, onPress: (e?: any) => any) => {
    const isKeyRequested = keyIsRequested(key.key.toLowerCase());
    if (isKeyRequested) {
      const containsAll = keysArray.every((i) =>
        pressedKeys.current.includes(i)
      );
      removePressedKey(key.key.toLowerCase());
      if (containsAll) {
      } else if (key.key.toLowerCase() == "enter") {
        onPress();
      }
    }
  };

  return { upHandler, downHandler };
}
