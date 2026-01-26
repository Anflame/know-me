import { FC } from 'react';
import { Container, Slide, Typography } from '@mui/material';

import { CustomList } from '@/ui-components';
import type { IMentorCard } from '@/types';

import { MentorCard } from '../MentorCard';
import { StyledTitleWrapper, StyledMentorWrapper } from './styles';

interface ICategory {
  mentors: IMentorCard[];
  title: string | null;
}

const Category: FC<ICategory> = ({ mentors, title }) => (
  <main>
    <Container>
      <CustomList view="Grid">
        {mentors.map((item, index) => (
          <StyledMentorWrapper index={index} key={index}>
            <MentorCard variant="FullWidth" {...item} />
          </StyledMentorWrapper>
        ))}
      </CustomList>
    </Container>
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <StyledTitleWrapper>
        <Typography fontSize="inherit">{title}</Typography>
      </StyledTitleWrapper>
    </Slide>
  </main>
);

export default Category;
