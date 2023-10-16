import { FC } from 'react';
import { Container, Slide, Stack, Typography, useTheme } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { CustomList } from '@/ui-components';

import { IMentorCard } from '@/types';
import { useRouter } from 'next/router';
import { MentorCard } from '../MentorCard';
import { StyledIconButton, StyledTitleWrapper } from './styles';

interface ICategory {
  mentors: IMentorCard[];
  title: string | null;
}

const Category: FC<ICategory> = ({ mentors, title }) => {
  const { back } = useRouter();
  const { spacing } = useTheme();
  return (
    <>
      <Container>
        <Stack position="relative" padding={spacing(2)}>
          <StyledIconButton onClick={back}>
            <Stack flexDirection="row" gap={spacing(1)} alignItems="center" height="inherit">
              <KeyboardDoubleArrowLeftIcon />
              <Typography textTransform="none">Назад</Typography>
            </Stack>
          </StyledIconButton>
        </Stack>
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
};

export default Category;
