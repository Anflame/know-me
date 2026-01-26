import { FC } from 'react';
import { Container, Stack, Typography } from '@mui/material';

import { MentorCard } from '@/components/MentorCard';
import type { IMentorCard } from '@/types';
import { CustomList } from '@/ui-components';

interface IMentorListProps {
  propMentors: IMentorCard[];
}

const MentorList: FC<IMentorListProps> = ({ propMentors }) => (
  <Container>
    {!propMentors.length && (
      <Stack width="100%" justifyContent="center" alignItems="center">
        <Typography fontSize="h1">По вашему запросу, к сожалению, ничего не найдено</Typography>
      </Stack>
    )}
    <CustomList view="Grid">
      {propMentors?.map((item) => (
        <MentorCard variant="FullWidth" key={item.id} {...item} />
      ))}
    </CustomList>
  </Container>
);

export default MentorList;
