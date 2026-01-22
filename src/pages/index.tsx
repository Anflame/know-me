import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { FC } from 'react';
import { fetcher } from '@/lib/helpers';
import { ICategory } from '@/types';
import { HomeComponent } from '@/components/HomeComponent';

export const getServerSideProps: GetServerSideProps<{ categories: ICategory[] }> = async () => {
  const result = await fetcher<ICategory[]>(`/api/categories`);

  if (result.error || !result.data) return { notFound: true };

  return { props: { categories: result.data } };
};

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ categories }) => (
  <>
    <Head>
      <title>Know-me</title>
      <meta name="description" content="Know-me" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <HomeComponent categories={categories} />
  </>
);

export default Home;
