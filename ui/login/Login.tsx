"use client";

export default function Login() {
  const Login = async () => {
    try {
      const req = await fetch("/api/auth", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
      });
    } catch (error: any) {
      console.log(error);
    }
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
