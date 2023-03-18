import { Models } from "appwrite";

export type UserType = {
  id: string;
  name: string;
  prefs: {
    avatar: string;
  };
};

export type MemberTypes = {
  member: Models.Membership;
  user: UserType;
};

export interface MemberProps {
  content: {
    member: MemberTypes[];
    user: UserType;
  };
}
