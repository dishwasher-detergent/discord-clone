import ServerMenu from "#/ui/menus/Server";

interface TitleProps {
  children: React.ReactNode;
}

export default function SidebarTitle({ children }: TitleProps) {
  return (
    <h2 className="w-full h-14 border-b border-slate-300 flex items-center px-4 font-bold flex-row flex-nowrap gap-2 justify-between flex-none dark:border-slate-900">
      <span className="w-full truncate dark:text-white">{children}</span>
      <ServerMenu />
    </h2>
  );
}
