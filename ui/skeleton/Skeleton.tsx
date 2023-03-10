export default function Skeleton({
  rows = null,
  maxRows = 1,
}: {
  rows?: number | null;
  maxRows?: number;
}) {
  return (
    <div role="status" className="max-w-full animate-pulse">
      {[...Array(rows ? rows : Math.floor(Math.random() * (maxRows + 1)))].map(
        (index: number) => (
          <div
            key={index}
            className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"
            style={{
              width: `${Math.floor(Math.random() * (20 - 5 + 1) + 5)}rem`,
              maxWidth: `${Math.floor(Math.random() * (20 - 5 + 1) + 5)}rem`,
            }}
          />
        )
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
