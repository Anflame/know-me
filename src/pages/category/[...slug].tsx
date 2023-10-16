import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Category } from '@/components/Category';
import { mentors } from '@/constants/mentors';
import { categories } from '@/constants/categories';
import { IMentorCard } from '@/types';

export const getServerSideProps: GetServerSideProps<{
  mentors: IMentorCard[];
  title: string | null;
}> = async ({ params }) => {
  const paramsSlug = params?.slug?.[0];

  const category = mentors.filter(({ group }) => paramsSlug === group);

  const props = {
    mentors: category || [],
    title: categories.filter(({ slug }) => slug === paramsSlug)[0]?.title || null,
  };

  return { props };
};

const CategoryPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => (
  <Category {...props} />
);

export default CategoryPage;
