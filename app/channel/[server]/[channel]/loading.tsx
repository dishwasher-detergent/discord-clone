import ChatInput from "#/ui/chat/Input";
import TextTitle from "#/ui/layout/content/text/Title";
import TextWrapper from "#/ui/layout/content/text/Wrapper";
import SkeletonMessages from "#/ui/skeleton/chat/Messages";
import Skeleton from "#/ui/skeleton/Skeleton";

export default function Loading() {
  return (
    <TextWrapper>
      <TextTitle>
        <Skeleton />
      </TextTitle>
      <div className="h-full w-full overflow-hidden flex flex-row flex-nowrap">
        <div className="flex-1 overflow-hidden w-full flex flex-col flex-nowrap p-2">
          <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse">
            <div className="flex flex-col-reverse gap-8">
              <SkeletonMessages count={20} />
            </div>
          </div>
          <div className="p-4">
            <ChatInput channel={"loading"} server={"loading"} />
          </div>
        </div>
      </div>
    </TextWrapper>
  );
}
