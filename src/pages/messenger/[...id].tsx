import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Messenger } from '@/components/Messenger';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const paramsId = params?.id;

  const chats = paramsId;

  return {
    props: { chats },
  };
};

const MessengerPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ mentor }) => (
  <Messenger {...mentor} />
);

export default MessengerPage;
