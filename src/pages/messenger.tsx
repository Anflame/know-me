import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Messenger } from '@/components/Messenger';
import { SEO } from '@/components/SEO';
import { fetcher } from '@/lib/helpers';
import { IChat, IUserImage } from '@/types';

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchChats = await fetcher<IChat[]>('/messenger/chats');

  if (fetchChats.error || !fetchChats.data) return { notFound: true };

  const fetchImage = await fetcher<IUserImage>('/user/userImage');

  if (fetchImage.error || !fetchImage.data) return { notFound: true };

  return {
    props: { chats: fetchChats.data, userImage: fetchImage.data },
  };
};

const MessengerPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  chats,
  userImage,
}) => (
  <>
    <SEO title="Меседжер" />
    <Messenger chats={chats} userImage={userImage} />
  </>
);

export default MessengerPage;
