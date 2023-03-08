import Wrapper from "#/ui/layout/Wrapper";
import Sidebar from "#/ui/layout/sidebar/Sidebar";
import Text from "#/ui/layout/content/text/Text";
import ServerSidebar from "#/ui/layout/sidebar/server/Sidebar";
import SidebarWrapper from "#/ui/layout/sidebar/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SidebarWrapper>
        <ServerSidebar />
        <Sidebar content={{ title: "Main" }} />
      </SidebarWrapper>
      <Text content={{ title: "Main" }} />
    </Wrapper>
  );
}
