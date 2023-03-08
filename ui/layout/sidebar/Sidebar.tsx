import SidebarTitle from "#/ui/layout/sidebar/Title";
import Account from "./Account";
import CurrentlyPlaying from "./Current";
import SidebarItem from "./Item";

export default function Sidebar({ content }: { content: any }) {
  return (
    <aside className="w-72 rounded-t-xl md:rounded-tl-xl md:rounded-tr-none flex flex-none h-full bg-slate-100 overflow-hidden flex-col flex-nowrap dark:bg-slate-800">
      <SidebarTitle>{content.title}</SidebarTitle>
      <ul className="sidebar w-full p-2.5 flex flex-col flex-nowrap overflow-y-auto gap-1 flex-1">
        {content.channels &&
          content.channels.map((channel: any, index: number) => {
            return (
              <SidebarItem
                key={index}
                type={channel.type}
                channel={`${channel.server}/${channel.$id}`}
              >
                {channel.title}
              </SidebarItem>
            );
          })}
      </ul>
      <CurrentlyPlaying />
      <Account />
    </aside>
  );
}
