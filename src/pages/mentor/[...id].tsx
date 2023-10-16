import { FC } from 'react';
import { Mentor } from '@/components/Mentor';
import { mentors } from '@/constants/mentors';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const paramsId = params?.id;

  // TODO: выпилить когда будет апи
  const mentor = paramsId ? mentors.filter(({ id }) => +paramsId === id)[0] : undefined;

  return {
    props: { mentor },
  };
};

const MentorPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ mentor }) => (
  <Mentor {...mentor} />
);

export default MentorPage;
