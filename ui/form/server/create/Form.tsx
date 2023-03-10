"use client";

import api from "#/utils/appwrite";
import * as Dialog from "@radix-ui/react-dialog";
import { Permission, Role } from "appwrite";
import { X } from "lucide-react";
import { useState } from "react";
import Input from "../../Input";
import CreateButton from "./Button";

export default function CreateServerForm() {
  const [open, setOpen] = useState(false);
  const [serverName, setServerName] = useState<string>("");

  const createServer = async () => {
    const server = await api.createDocument("6407d0c519ecaeb89836", {
      title: serverName,
    });

    console.log(server);

    const team = await api.createTeam(server.$id, serverName);

    console.log(team);

    const channel = await api.createDocument(
      "6407d0c0eb16af0ec5e2",
      {
        title: "general",
        category: "general",
        server: server.$id,
        type: "text",
        default: true,
      },
      [Permission.read(Role.team(server.$id))]
    );

    console.log(channel);
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <CreateButton width="70%" setOpen={() => setOpen(!open)} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/10 backdrop-blur-md z-[1001]" />
        <Dialog.Content
          className="pt-8 p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] max-w-full max-h-96 rounded-xl shadow-lg bg-white dark:bg-slate-900 z-[1002]"
          onEscapeKeyDown={() => setOpen(false)}
          onPointerDownOutside={() => setOpen(false)}
          onInteractOutside={() => setOpen(false)}
        >
          <Dialog.Close
            className="absolute top-4 right-4"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </Dialog.Close>
          <div className="space-y-10">
            <div className="flex flex-col flex-nowrap gap-2">
              <Dialog.Title className="font-bold text-3xl text-center">
                Create A Server
              </Dialog.Title>
              <Dialog.Description className="text-slate-600 dark:text-slate-300 text-center">
                Your server is where you and your friends hang out. Make yours
                and start talking.
              </Dialog.Description>
            </div>
            <div className="flex flex-col flex-nowrap gap-2">
              <Input
                label="Server Name"
                onChange={(e) => setServerName(e.target.value)}
                value={serverName}
                placeholder="Server Name"
              />
              <button
                onClick={() => createServer()}
                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-xl"
              >
                Create
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
