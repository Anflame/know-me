import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { IMentorCard } from '@/types';
import { MentorList } from '@/components/MentorList';
import { fetcher } from '@/lib/helpers';
import { isEmptyObject } from '@/utils/object';
import { SEO } from '@/components/SEO';

interface IPropMentorCard {
  propMentors: IMentorCard[];
}

export const getServerSideProps: GetServerSideProps<IPropMentorCard> = async ({ query }) => {
  let result: IMentorCard[] | [] = [];

  if (isEmptyObject(query)) {
    const res = await fetcher<IMentorCard[]>(`/mentors`);

    if (res.error || !res.data) return { notFound: true };

    result = res.data;
  } else {
    const res = await fetcher<IMentorCard[]>(`/mentors`, {
      method: 'POST',
      body: JSON.stringify(query),
    });
    if (res.error || !res.data) return { notFound: true };

    result = res.data;
  }

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
