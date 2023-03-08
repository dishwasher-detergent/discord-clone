import { Models } from "appwrite";

export type SiloedChannelTypes = {
  title: string;
  description: string;
  type: "voice" | "text";
  server: string;
};

export type ChannelTypes = SiloedChannelTypes & Models.Document;

export interface ChannelProps {
  content: ChannelTypes;
}
