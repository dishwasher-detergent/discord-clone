import SkeletonMessage from "#/ui/skeleton/chat/Message";

export default function SkeletonMessages({ count = 1 }: { count?: number }) {
  return (
    <>
      {[...Array(count)].map((index: number) => (
        <SkeletonMessage key={Math.random()} />
      ))}
    </>
  );
}
