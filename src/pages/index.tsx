import { GetStaticProps, InferGetServerSidePropsType } from 'next';

import { FC } from 'react';
import { fetcher } from '@/lib/helpers';
import { ICategory } from '@/types';
import { HomeComponent } from '@/components/HomeComponent';
import { SEO } from '@/components/SEO';

export const getStaticProps: GetStaticProps<{ categories: ICategory[] }> = async () => {
  const result = await fetcher<ICategory[]>(`/categories`);

  if (result.error || !result.data) return { notFound: true };

  return { props: { categories: result.data }, revalidate: 3000 };
};

const Home: FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({ categories }) => (
  <>
    <SEO title="Главная" />
    <HomeComponent categories={categories} />
  </>
);

export default Home;
