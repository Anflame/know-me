import { FC } from 'react';
import { Container } from '@mui/material';

import { MentorCard } from '@/components/MentorCard';
import type { IMentorCard } from '@/types';
import { CustomList } from '@/ui-components';
import { BackLink } from '../BackLink';

interface IMentorListProps {
  propMentors: IMentorCard[];
}

const MentorList: FC<IMentorListProps> = ({ propMentors }) => (
  <Container>
    <BackLink />
    <CustomList view="Grid">
      {propMentors.map((item) => (
        <MentorCard variant="FullWidth" key={item.id} {...item} />
      ))}
    </CustomList>
  </Container>
);

export default MentorList;
