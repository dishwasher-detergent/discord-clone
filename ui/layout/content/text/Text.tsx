import TextWrapper from "#/ui/layout/content/text/Wrapper";
import TextContent from "#/ui/layout/content/text/Content";
import TextTitle from "#/ui/layout/content/text/Title";
import MemberList from "#/ui/member/List";

export default function Text({ content }: { content: any }) {
  return (
    <TextWrapper>
      <TextTitle>{content.channel && content.channel}</TextTitle>
      <div className="h-full w-full overflow-hidden flex flex-row flex-nowrap">
        {content.messages.length > 0 && (
          <TextContent messages={content.messages} />
        )}
        <MemberList />
      </div>
    </TextWrapper>
  );
}
