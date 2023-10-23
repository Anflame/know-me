import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@mui/material';

import { CategoryCard } from '@/components/CategoryCard';
import { CustomList } from '@/ui-components/';
import { categories } from '@/constants/categories';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Know-me</title>
      <meta name="description" content="Know-me" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container>
      <CustomList view="Grid">
        {categories.map(({ id, ...item }, index) => (
          <CategoryCard key={id} {...item} index={index} />
        ))}
      </CustomList>
    </Container>
  </>
);

export default Home;
