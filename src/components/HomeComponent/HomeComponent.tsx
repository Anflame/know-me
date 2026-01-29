import React, { FC } from 'react';
import { CategoryCard, CustomList } from '@/ui-components';
import { Container } from '@mui/material';
import { ICategory } from '@/types';

interface HomeComponentProps {
  categories: ICategory[];
}

const HomeComponent: FC<HomeComponentProps> = ({ categories }) => (
  <Container>
    <CustomList view="Grid">
      {categories?.map(({ id, ...item }, index) => (
        <CategoryCard key={id} {...item} index={index} />
      ))}
    </CustomList>
  </Container>
);

export default HomeComponent;
