import ServerSidebar from "#/ui/layout/sidebar/server/Sidebar";
import SidebarWrapper from "#/ui/layout/sidebar/Wrapper";
import api from "#/utils/appwrite";
import { ServerTypes } from "#/types/ServerTypes";
import { Models, Query } from "appwrite";
import { ChannelTypes } from "#/types/ChannelTypes";
import Wrapper from "#/ui/layout/Wrapper";
import Sidebar from "#/ui/layout/sidebar/Sidebar";
import { checkLoggedInStatus } from "#/utils/auth";

type SidebarType = {
  title: string;
  channels: ChannelTypes[];
  account: Models.Preferences | null;
};

async function getServerSidebarContent(): Promise<ServerTypes[]> {
  const servers = await api.listDocuments("6407d0c519ecaeb89836");

  let servers_results: ServerTypes[] = [];

  if (servers) {
    servers_results = servers.documents as ServerTypes[];
  }

  return servers_results;
}

async function getSidebarContent(server: string): Promise<SidebarType> {
  let single_server;
  let server_name;
  single_server = await api.getDocument(server, "6407d0c519ecaeb89836");

  if (single_server) {
    server_name = single_server.title;
  }

  const channels = await api.listDocuments("6407d0c0eb16af0ec5e2", [
    Query.equal("server", server),
  ]);

  let category = [];

  if (channels) {
    const channels_results = channels.documents as ChannelTypes[];

    category = channels_results.reduce(
      (groups: any, item: any) => ({
        ...groups,
        [item.category.toLowerCase()]: [
          ...(groups[item.category.toLowerCase()] || []),
          item,
        ],
      }),
      {}
    );
  }

  const account = await checkLoggedInStatus();

  return { title: server_name, channels: category, account: account };
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
        {servers && <ServerSidebar content={servers} />}
        {sidebar && <Sidebar content={sidebar} />}
      </SidebarWrapper>
      {children}
    </Wrapper>
  );
}
