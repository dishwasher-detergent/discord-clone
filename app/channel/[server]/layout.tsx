import ServerSidebar from "#/ui/layout/sidebar/server/Sidebar";
import Sidebar from "#/ui/layout/sidebar/Sidebar";
import SidebarWrapper from "#/ui/layout/sidebar/Wrapper";
import Wrapper from "#/ui/layout/Wrapper";

interface ChannelLayoutProps {
  children: React.ReactElement;
  params: {
    server: string;
  };
}

export default async function ChannelLayout({
  children,
  params,
}: ChannelLayoutProps) {
  return (
    <Wrapper>
      <SidebarWrapper>
        <ServerSidebar />
        <Sidebar server={params.server} />
      </SidebarWrapper>
      {children}
    </Wrapper>
  );
}
