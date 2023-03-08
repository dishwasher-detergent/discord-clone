import { Models } from "appwrite";

export type MessageTypes = {
  creator: string;
  message: string;
  server: string;
  channel: string;
};

export interface MessageProps {
  content: MessageTypes & Models.Document;
}
