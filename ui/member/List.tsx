"use client";

import { MemberListContext } from "#/context/memberListContext";
import useParams from "#/hooks/useParams";
import { MemberTypes } from "#/types/MemberTypes";
import api from "#/utils/appwrite";
import { useContext, useEffect, useState } from "react";
import MemberItem from "./Item";

export default function MemberList() {
  /* @ts-ignore */
  const { memberList } = useContext(MemberListContext);
  const { serverId } = useParams();
  const [members, setMembers] = useState<MemberTypes[]>([]);

  useEffect(() => {
    api
      .getMemberships("6415df200dbbf735c17d", {
        databaseId: "6407d0b0c40a37d4f06c",
        collectionId: "6407d0c519ecaeb89836",
        documentId: serverId,
      })
      .then((res) => {
        if (!res.response) return;
        const member = JSON.parse(res.response).members as MemberTypes[];
        if (member) setMembers(member);
      });
  }, []);

  return (
    memberList && (
      <aside className="flex-none h-full w-72 bg-slate-100 overflow-hidden flex flex-col flex-nowrap dark:bg-slate-700">
        <ul className="w-full p-4 flex flex-col flex-nowrap overflow-y-auto gap-1 flex-1">
          {members.map((member: MemberTypes) => {
            return <MemberItem key={member.member.$id} content={member} />;
          })}
        </ul>
      </aside>
    )
  );
}
