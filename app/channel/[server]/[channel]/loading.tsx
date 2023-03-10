import ChatInput from "#/ui/chat/Input";
import TextTitle from "#/ui/layout/content/text/Title";
import TextWrapper from "#/ui/layout/content/text/Wrapper";
import SkeletonMessage from "#/ui/skeleton/chat/Message";
import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <TextWrapper>
      <TextTitle>
        <Skeleton
          className="w-24 max-w-full"
          baseColor="#1e293b"
          highlightColor="#0f172a"
        />
      </TextTitle>
      <div className="h-full w-full overflow-hidden flex flex-row flex-nowrap">
        <div className="flex-1 overflow-hidden w-full flex flex-col flex-nowrap p-2">
          <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse">
            <div className="flex flex-col-reverse gap-8">
              {[...Array(25)].map((index: number) => {
                return <SkeletonMessage key={index} />;
              })}
            </div>
          </div>
          <div className="p-4">
            <ChatInput channel={"loading"} server={"loading"} />
          </div>
        </div>
        {/* <MemberList /> */}
      </div>
    </TextWrapper>
  );
}
