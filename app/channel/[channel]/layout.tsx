import Wrapper from "#/ui/layout/Wrapper";

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
