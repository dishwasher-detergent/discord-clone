import Sidebar from "#/ui/layout/sidebar/Sidebar";
import ServerSidebar from "#/ui/layout/sidebar/server/Sidebar";
import SidebarWrapper from "#/ui/layout/sidebar/Wrapper";
import api from "#/utils/appwrite";
import { ServerTypes } from "#/types/ServerTypes";
import { Query } from "appwrite";
import { ChannelTypes } from "#/types/ChannelTypes";
import Wrapper from "#/ui/layout/Wrapper";
import { redirect } from "next/navigation";

type SidebarType = {
  title: string;
  channels: ChannelTypes[];
};

async function getServerSidebarContent(): Promise<ServerTypes[]> {
  const servers = await api.listDocuments("6407d0c519ecaeb89836");

  const servers_results = servers.documents as ServerTypes[];

  return servers_results;
}

async function getSidebarContent(server: string): Promise<SidebarType> {
  const single_server = await api.getDocument(server, "6407d0c519ecaeb89836");
  const server_name = single_server.title;

  const channels = await api.listDocuments("6407d0c0eb16af0ec5e2", [
    Query.equal("server", server),
  ]);

  const channels_results = channels.documents as ChannelTypes[];

  const category = channels_results.reduce(
    (groups: any, item: any) => ({
      ...groups,
      [item.category.toLowerCase()]: [
        ...(groups[item.category.toLowerCase()] || []),
        item,
      ],
    }),
    {}
  );

  return { title: server_name, channels: category };
}

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
  const servers: ServerTypes[] = await getServerSidebarContent();
  const sidebar: SidebarType = await getSidebarContent(params.server);

  return (
    <Wrapper>
      <SidebarWrapper>
        <ServerSidebar content={servers} />
        <Sidebar content={sidebar} />
      </SidebarWrapper>
      {children}
    </Wrapper>
  );
}
