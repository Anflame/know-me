import { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import type { ICategory } from '@/types';

import { StyledWrapper, StyledContent, StyledDescription, StyledImage } from './styles';

const CategoryCard: FC<Omit<ICategory, 'id'>> = ({ description, title, icon, alt }) => (
  <Link
    href={`/mentors?${new URLSearchParams({ group: title })}`}
    style={{ color: 'white', textDecoration: 'none' }}
    scroll={false}
  >
    <StyledWrapper>
      <StyledImage src={`/static/${icon}`} alt={alt} fill sizes="100%" />
      <StyledContent>
        <Typography variant="h6">{title}</Typography>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
    </StyledWrapper>
  </Link>
);

export default CategoryCard;
