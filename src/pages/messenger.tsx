import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Messenger } from '@/components/Messenger';
import { chats as mockChats } from '@/constants/chats';
import { mockUserImage } from '@/constants/userImage';

export const getServerSideProps: GetServerSideProps = async () => {
  const chats = mockChats;
  const userImage = mockUserImage;

  return {
    props: { chats, userImage },
  };
};

const MessengerPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  chats,
  userImage,
}) => <Messenger chats={chats} userImage={userImage} />;

export default MessengerPage;
