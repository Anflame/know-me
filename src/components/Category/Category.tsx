import { FC } from 'react';
import { Container, Slide, Typography, Grow, Box } from '@mui/material';

import { CustomList } from '@/ui-components';
import type { IMentorCard } from '@/types';

import { MentorCard } from '../MentorCard';
import { StyledTitleWrapper } from './styles';

interface ICategory {
  mentors: IMentorCard[];
  title: string | null;
}

const Category: FC<ICategory> = ({ mentors, title }) => (
  <>
    <Container>
      <CustomList view="Grid">
        {mentors.map((item, index) => (
          <Grow in timeout={350 * index} key={item.id}>
            <Box>
              <MentorCard variant="FullWidth" {...item} />
            </Box>
          </Grow>
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
