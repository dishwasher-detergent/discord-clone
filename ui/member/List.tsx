"use client";

import { MemberListContext } from "#/context/memberListContext";
import MemberItem from "#/ui/member/Item";
import { useContext } from "react";
import MemberHeader from "./Header";

export default function MemberList() {
  /* @ts-ignore */
  const { memberList } = useContext(MemberListContext);

  return (
    memberList && (
      <aside className="flex-none h-full w-72 bg-slate-100 overflow-hidden flex flex-col flex-nowrap dark:bg-slate-700">
        <ul className="w-full p-4 flex flex-col flex-nowrap overflow-y-auto gap-1 flex-1">
          <MemberHeader>Test</MemberHeader>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberHeader>Test</MemberHeader>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
          <MemberItem>Test</MemberItem>
        </ul>
      </aside>
    )
  );
}
