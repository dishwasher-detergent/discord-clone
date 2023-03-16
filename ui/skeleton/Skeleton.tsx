"use client";

export default function Skeleton({
  rows = null,
  maxRows = 1,
}: {
  rows?: number | null;
  maxRows?: number;
}) {
  return (
    <span role="status" className="block max-w-full animate-pulse space-y-2">
      {[...Array(rows ? rows : Math.floor(Math.random() * maxRows) + 1)].map(
        (index: number) => (
          <span
            key={Math.random()}
            className="block h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"
            style={{
              width: `${Math.floor(Math.random() * (20 - 5 + 1) + 5)}rem`,
              maxWidth: `${Math.floor(Math.random() * (20 - 5 + 1) + 5)}rem`,
            }}
          />
        )
      )}
      <span className="sr-only">Loading...</span>
    </span>
  );
}
