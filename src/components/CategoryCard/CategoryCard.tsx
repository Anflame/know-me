import { FC } from 'react';
import { Typography, Grow } from '@mui/material';

import type { ICategory } from '@/types';

import { StyledWrapper, StyledContent, StyledDescription, StyledLink, StyledImage } from './styles';

const CategoryCard: FC<Omit<ICategory, 'id'> & { index: number }> = ({
  description,
  title,
  slug,
  image,
  alt,
  index,
}) => (
  <Grow in timeout={300 * index}>
    <StyledLink href={`/category/${slug}`} scroll={false}>
      <StyledWrapper>
        <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" />
        <StyledContent>
          <Typography variant="h6">{title}</Typography>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
      </StyledWrapper>
    </StyledLink>
  </Grow>
);

export default CategoryCard;
