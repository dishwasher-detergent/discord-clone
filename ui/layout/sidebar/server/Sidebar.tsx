import ServerAvatar from '#/ui/avatar/Server';

export default function ServerSidebar() {
  return (
    <aside className="w-20 flex-none py-4 bg-slate-300 h-full overflow-hidden dark:bg-slate-900">
      <ul className="server w-full h-full flex flex-col flex-nowrap overflow-y-auto items-center gap-2">
        <div className="w-full flex flex-col flex-nowrap items-center gap-2">
          <ServerAvatar
            width="70%"
            src="https://source.unsplash.com/random"
            title="Server Icon"
          />
          <div className="w-10 h-0.5 rounded-full bg-slate-500" />
        </div>
        <ServerAvatar
          width="70%"
          src="https://source.unsplash.com/random"
          title="Server Icon"
        />
        <ServerAvatar
          width="70%"
          src="https://source.unsplash.com/random"
          title="Server Icon"
        />
        <ServerAvatar
          width="70%"
          src="https://source.unsplash.com/random"
          title="Server Icon"
        />
        <ServerAvatar
          width="70%"
          src="https://source.unsplash.com/random"
          title="Server Icon"
        />
        <ServerAvatar
          width="70%"
          src="https://source.unsplash.com/random"
          title="Server Icon"
        />
      </ul>
    </aside>
  );
}
