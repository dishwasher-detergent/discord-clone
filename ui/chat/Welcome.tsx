export default function ChatWelcome({ server }: { server: string }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 border-b border-slate-300 dark:border-slate-900 py-4">
      <h2 className="font-black text-slate-900 dark:text-white text-5xl text-center">
        Welcome to
        <br />
        {server}!
      </h2>
      <p className="text-slate-600 dark:text-slate-300">
        This is the beginning of this server.
      </p>
    </div>
  );
}
