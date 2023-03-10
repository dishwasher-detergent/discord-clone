"use client";

import React, { createContext, useState } from "react";

/* @ts-ignore */
const MemberListContext = createContext();

interface ProviderProps {
  children: React.ReactElement | React.ReactElement;
}

const MemberListProvider = ({ children }: ProviderProps) => {
  const [memberList, setMemberList] = useState<boolean>(false);

  function toggleMemberList() {
    if (arguments.length > 0) setMemberList(arguments[0]);
    else setMemberList(!memberList);
  }

  return (
    <MemberListContext.Provider value={{ memberList, toggleMemberList }}>
      {children}
    </MemberListContext.Provider>
  );
};

export { MemberListProvider, MemberListContext };
