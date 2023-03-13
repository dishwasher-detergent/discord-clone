import { Models } from "appwrite";

export type SiloedMessageTypes = {
  creator: string;
  message: string;
  server: string;
  channel: string;
};

export type UserType = {
  id: string;
  name: string;
  prefs: {
    avatar: string;
  };
};

export type MessageTypes = {
  message: SiloedMessageTypes & Models.Document;
  user: UserType;
};

export interface MessageProps {
  content: {
    message: MessageTypes[];
    user: UserType;
  };
}
