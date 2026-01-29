import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { IMentorCard } from '@/types';
import { MentorList } from '@/components/MentorList';
import { fetcher } from '@/lib/helpers';
import { SEO } from '@/components/SEO';
import { stringify } from 'qs';

interface IPropMentorCard {
  propMentors: IMentorCard[];
}

export const getServerSideProps: GetServerSideProps<IPropMentorCard> = async ({ query }) => {
  let result: IMentorCard[] | [] = [];
  const searchParams = stringify(query);
  const url = searchParams ? `/mentors?${searchParams}` : '/mentors';

  const res = await fetcher<IMentorCard[]>(url);

  if (res.error || !res.data) return { notFound: true };

  result = res.data;

  return {
    props: { propMentors: result },
  };
};

const Mentors: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ propMentors }) => (
  <>
    <SEO title="Менторы" />
    <MentorList propMentors={propMentors} />
  </>
);

export default Mentors;
