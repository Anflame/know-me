import { FC } from 'react';
import { Mentor as MentorComponent } from '@/components/Mentor';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { IMentorCard } from '@/types';
import { fetcher } from '@/lib/helpers';

export const getServerSideProps: GetServerSideProps<{ mentor: IMentorCard }> = async ({
  params,
}) => {
  const id = params?.id?.[0];

  if (!id) return { notFound: true };

  const result = await fetcher<IMentorCard>(`/api/mentor/${id}`);

  if (result.error || !result.data) return { notFound: true };

  return { props: { mentor: result.data } };
};

const MentorPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ mentor }) => (
  <MentorComponent {...mentor} />
);

export default MentorPage;
