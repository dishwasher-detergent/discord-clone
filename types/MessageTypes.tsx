import { Models } from "appwrite";

export type SiloedMessageTypes = {
  creator: string;
  message: string;
  server: string;
  channel: string;
};

export type MessageTypes = SiloedMessageTypes & Models.Document;

export interface MessageProps {
  content: MessageTypes;
}
