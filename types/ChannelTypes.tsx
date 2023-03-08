import { Models } from "appwrite";

export type ChannelTypes = {
  title: string;
  description: string;
  type: "voice" | "text";
  server: string;
};

export interface ChannelProps {
  content: ChannelTypes & Models.Document;
}
