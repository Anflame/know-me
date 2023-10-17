import { FC } from 'react';
import { Container, Slide, Typography } from '@mui/material';

import { CustomList } from '@/ui-components';
import type { IMentorCard } from '@/types';

import { MentorCard } from '../MentorCard';
import { BackLink } from '../BackLink';
import { StyledTitleWrapper } from './styles';

interface ICategory {
  mentors: IMentorCard[];
  title: string | null;
}

const Category: FC<ICategory> = ({ mentors, title }) => (
  <>
    <Container>
      <BackLink />
      <CustomList view="Grid">
        {mentors.map((item) => (
          <MentorCard variant="FullWidth" key={item.id} {...item} />
        ))}
      </CustomList>
    </Container>
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <StyledTitleWrapper>
        <Typography fontSize="inherit">{title}</Typography>
      </StyledTitleWrapper>
    </Slide>
  </>
);

export default Category;
