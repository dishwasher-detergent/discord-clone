import Text from "#/ui/layout/content/text/Text";
import api from "#/utils/appwrite";
import { Query } from "appwrite";
import { MessageTypes } from "#/types/MessageTypes";

type TextType = {
  channel: string;
  messages: MessageTypes[];
};

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

  const messages_results = messages.documents as MessageTypes[];

  return { channel: channel_name, messages: messages_results };
}

export default async function Channel({ params }: { params: any }) {
  const text: TextType = await getTextContent(
    params.content,
    params.channel
  );

  return (
    <Text content={text} />
  );
}