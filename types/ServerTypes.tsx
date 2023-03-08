import { Models } from "appwrite";

export type ServerTypes = {
  title: string;
  description: string;
};

export interface ProjectProps {
  content: ServerTypes & Models.Document;
}
