import Wrapper from '#/ui/layout/Wrapper';
import Sidebar from '#/ui/layout/sidebar/Sidebar';
import Text from '#/ui/layout/content/text/Text';
import ServerSidebar from '#/ui/layout/sidebar/server/Sidebar';
import SidebarWrapper from '#/ui/layout/sidebar/Wrapper';

function getSidebarContent(server: string) {
  const content = {
    title: 'Test2',
    channels: [
      {
        title: 'Test',
        type: 'text',
      },
      {
        title: 'Test',
        type: 'voice',
      },
      {
        title: 'Test',
        type: 'voice',
      },
      {
        title: 'Test',
        type: 'voice',
      },
      {
        title: 'Test',
        type: 'voice',
      },
      {
        title: 'Test',
        type: 'voice',
      },
      {
        title: 'Test',
        type: 'voice',
      },
    ],
  };

  return content;
}

function getTextContent(channel: string) {
  const content = {
    title: 'Test2',
    messages: [
      {
        user: 'Kenny',
        time: '03/05/2023',
        message:
          'asdfasaasdfdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
      {
        user: 'Benny',
        time: '03/06/2023',
        message: 'asdfasdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
      {
        user: 'Benny',
        time: '03/06/2023',
        message: 'asdfasdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
      {
        user: 'Benny',
        time: '03/06/2023',
        message: 'asdfasdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
      {
        user: 'Benny',
        time: '03/06/2023',
        message: 'asdfasdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
      {
        user: 'Benny',
        time: '03/06/2023',
        message: 'asdfasdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
      {
        user: 'Benny',
        time: '03/06/2023',
        message: 'asdfasdfa asdf asdf asd fa sdf asd fa sdf as df asdfasdf',
      },
    ],
  };

  return content;
}

export default function Home() {
  return (
    <Wrapper>
      <SidebarWrapper>
        <ServerSidebar />
        <Sidebar content={{ title: 'Main' }} />
      </SidebarWrapper>
      <Text content={{ title: 'Main' }} />
    </Wrapper>
  );
}
