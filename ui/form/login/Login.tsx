"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Input from "#/ui/form/Input";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Login = async () => {
    if (!username) return;
    if (!password) return;

    try {
      const req = await fetch("/api/auth", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          email: username,
          password: password,
        }),
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Login</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/10 backdrop-blur-md z-[1001]" />
        <Dialog.Content className="pt-8 p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] max-w-full max-h-96 rounded-xl shadow-lg bg-white dark:bg-slate-900 z-[1002]">
          <Dialog.Close className="absolute top-4 right-4">
            <X size={20} />
          </Dialog.Close>
          <div className="space-y-10">
            <div className="flex flex-col flex-nowrap gap-2">
              <Dialog.Title className="font-bold text-3xl text-center">
                Login
              </Dialog.Title>
              {/* <Dialog.Description className="text-slate-600 dark:text-slate-300 text-center">
                Your server is where you and your friends hang out. Make yours
                and start talking.
              </Dialog.Description> */}
            </div>
            <div className="flex flex-col flex-nowrap gap-2">
              <Input
                label="Server Name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
              />
              <Input
                label="Server Name"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
              <button
                onClick={() => Login()}
                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-xl"
              >
                Login
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
