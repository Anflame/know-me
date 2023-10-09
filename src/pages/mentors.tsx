import { NextPage } from 'next';
import { Container } from '@mui/material';
// import { useSearchParams } from 'next/navigation';

import { CustomList } from '@/ui-components';
import { mentors } from '@/constants/mentors';
import { MentorCard } from '@/components/MentorCard';

const Mentors: NextPage = () => {
  // const { get } = useSearchParams();

  return (
    <Container>
      <CustomList view="Grid">
        {mentors.map((item) => (
          <MentorCard variant="FullWidth" key={item.id} {...item} />
        ))}
      </CustomList>
    </Container>
  );
};

export default Mentors;
