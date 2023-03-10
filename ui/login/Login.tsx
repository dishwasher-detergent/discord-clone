"use client";

import api from "#/utils/appwrite";

export default function Login() {
  const Login = async () => {
    // try {
    //   const req = await fetch("/api/auth", {
    //     method: "POST",
    //     headers: new Headers({ "Content-Type": "application/json" }),
    //   });

    //   console.log(req);
    // } catch (error: any) {
    //   console.error(error);
    // }
    api.createAnonymousSession();
  };

  return (
    <button
      onClick={() => Login()}
      className="bg-blue-500 text-white rounded-xl px-2 py-1"
    >
      Login
    </button>
  );
}
