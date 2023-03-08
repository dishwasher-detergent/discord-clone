interface ContentProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function ContentWrapper({ children }: ContentProps) {
  return (
    <div className="pt-2 gap-2 md:gap-0 w-full h-full overflow-hidden flex flex-row flex-nowrap">
      {children}
    </div>
  );
}
