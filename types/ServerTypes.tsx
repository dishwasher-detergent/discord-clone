import { Models } from "appwrite";

export type SiloedServerTypes = {
  title: string;
  description: string;
};

export type ServerTypes = SiloedServerTypes & Models.Document;

export interface ProjectProps {
  content: ServerTypes;
}
