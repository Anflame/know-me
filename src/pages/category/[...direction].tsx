import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Category } from '@/components/Category';
import { IMentorCard } from '@/types';
import { fetcher } from '@/lib/helpers';

interface ICategory {
  mentors: IMentorCard[];
  title: string | null;
}

export const getServerSideProps: GetServerSideProps<ICategory> = async ({ params }) => {
  const paramsDirection = params?.direction?.[0];

  if (!paramsDirection) return { notFound: true };

  const result = await fetcher<{ mentors: IMentorCard[] }>(`/api/category/${paramsDirection}`);

  if (result.error || !result.data) return { notFound: true };

  const props = { mentors: result.data.mentors, title: result.data.mentors[0].title ?? null };

  return { props };
};

const CategoryPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => (
  <Category {...props} />
);

export default CategoryPage;
