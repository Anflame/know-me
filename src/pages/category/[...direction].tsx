import { FC } from 'react';
import { GetStaticProps, InferGetServerSidePropsType, GetStaticPaths } from 'next';

import { Category } from '@/components/Category';
import { IMentorCard } from '@/types';
import { fetcher } from '@/lib/helpers';
import { SEO } from '@/components/SEO';

interface ICategory {
  mentors: IMentorCard[];
  slug?: string | null;
  title: string | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetcher<ICategory[]>('/categories');

  const paths =
    categories.data?.map((direction) => ({
      params: { direction: [direction.slug as string] },
    })) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ICategory> = async ({ params }) => {
  const paramsDirection = params?.direction?.[0];

  if (!paramsDirection) return { notFound: true };

  const result = await fetcher<{ mentors: IMentorCard[] }>(`/category/${paramsDirection}`);

  if (result.error || !result.data) return { notFound: true };

  const props = { mentors: result.data.mentors, title: result.data.mentors[0].title ?? null };

  return { props, revalidate: 3000 };
};

const CategoryPage: FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  mentors,
  title,
}) => (
  <>
    <SEO title={title ?? ''} />
    <Category mentors={mentors} title={title} />
  </>
);

export default CategoryPage;
