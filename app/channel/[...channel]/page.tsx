import Wrapper from "#/ui/layout/Wrapper";
import Sidebar from "#/ui/layout/sidebar/Sidebar";
import Text from "#/ui/layout/content/text/Text";
import ServerSidebar from "#/ui/layout/sidebar/server/Sidebar";
import SidebarWrapper from "#/ui/layout/sidebar/Wrapper";
import api from "#/utils/appwrite";
import { ServerTypes } from "#/types/ServerTypes";
import { Models, Query } from "appwrite";
import { ChannelTypes } from "#/types/ChannelTypes";
import { MessageTypes } from "#/types/MessageTypes";

type Servers = ServerTypes & Models.Document;
type Channels = ChannelTypes & Models.Document;
type Messages = MessageTypes & Models.Document;

type SidebarType = {
  title: string;
  channels: Channels[];
};

type TextType = {
  channel: string;
  messages: Messages[];
};

async function getServerSidebarContent(): Promise<Servers[]> {
  const servers = await api.listDocuments("6407d0c519ecaeb89836");

  const servers_results = servers.documents as Servers[];

  return servers_results;
}

async function getSidebarContent(server: string): Promise<SidebarType> {
  const single_server = await api.getDocument(server, "6407d0c519ecaeb89836");
  const server_name = single_server.title;

  const channels = await api.listDocuments("6407d0c0eb16af0ec5e2", [
    Query.equal("server", server),
  ]);

  const channels_results = channels.documents as Channels[];

  return { title: server_name, channels: channels_results };
}

async function getTextContent(
  server: string,
  channel: string
): Promise<TextType> {
  if (!channel) return { channel: "", messages: [] };
  const single_channel = await api.getDocument(channel, "6407d0c0eb16af0ec5e2");
  const channel_name = single_channel.title;

  const messages = await api.listDocuments("6407d0ca13d1d255cd32", [
    Query.equal("server", server),
    Query.equal("channel", channel),
  ]);

  const messages_results = messages.documents as Messages[];

  return { channel: channel_name, messages: messages_results };
}

export default async function Channel({ params }: { params: any }) {
  const servers: Servers[] = await getServerSidebarContent();
  const sidebar: SidebarType = await getSidebarContent(params.channel[0]);
  const text: TextType = await getTextContent(
    params.channel[0],
    params.channel[1]
  );

  console.log(servers);

  return (
    <Wrapper>
      <SidebarWrapper>
        <ServerSidebar content={servers} />
        <Sidebar content={sidebar} />
      </SidebarWrapper>
      <Text content={text} />
    </Wrapper>
  );
}
