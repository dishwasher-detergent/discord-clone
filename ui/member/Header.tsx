interface HeaderProps {
  children: React.ReactNode;
}

export default function MemberHeader({ children }: HeaderProps) {
  return (
    <div className="w-full flex flex-row flex-nowrap text-sm text-slate-600 font-bold dark:text-slate-100">
      <p className="truncate uppercase">{children}</p>
      <p className="whitespace-nowrap"> - 3</p>
    </div>
  );
}
