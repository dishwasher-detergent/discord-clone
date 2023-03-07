import TextWrapper from '#/ui/layout/content/text/Wrapper';
import TextContent from '#/ui/layout/content/text/Content';
import TextTitle from '#/ui/layout/content/text/Title';
import MemberList from '#/ui/member/List';

export default function Text({ content }: { content: any }) {
  return (
    <TextWrapper>
      <TextTitle>{content.title ? content.title : 'Unknown'}</TextTitle>
      <div className="h-full w-full overflow-hidden flex flex-row flex-nowrap">
        <TextContent messages={content.messages} />
        <MemberList />
      </div>
    </TextWrapper>
  );
}
