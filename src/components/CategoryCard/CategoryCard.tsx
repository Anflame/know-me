import { FC } from 'react';
import { Typography } from '@mui/material';

import type { ICategory } from '@/types';

import {
  StyledWrapper,
  StyledContent,
  StyledDescription,
  StyledLink,
  StyledImage,
  StyledArticle,
} from './styles';

const CategoryCard: FC<Omit<ICategory, 'id'> & { index: number }> = ({
  description,
  title,
  slug,
  image,
  alt,
  index,
}) => (
  <StyledArticle index={index}>
    <StyledLink href={`/category/${slug}`} scroll={false}>
      <StyledWrapper component="article">
        <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" />
        <StyledContent>
          <Typography variant="h6">{title}</Typography>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
      </StyledWrapper>
    </StyledLink>
  </StyledArticle>
);

export default CategoryCard;
