import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import type { IMentorCard } from '@/types';

import { CommunicationPanel } from '../CommunicationPanel';
import { MentorCardContent } from './MentorCardContent';
import type { MentorCardVariant } from './types';
import { StyledImage, StyledWrapper } from './styles';

interface IMentorCardProps extends IMentorCard {
  variant: keyof typeof MentorCardVariant;
}

const MentorCard: FC<IMentorCardProps> = ({ id, image, alt, variant = 'FullWidth', ...other }) => {
  const { push } = useRouter();

  return (
    <StyledWrapper variant={variant}>
      <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" variant={variant} />
      {variant === 'FullWidth' && <CommunicationPanel callLink="/" messageLink="/" />}
      <MentorCardContent {...other} id={id} variant={variant} />
      {variant === 'Swiper' && (
        <Button variant="ghost" onClick={() => push(`/mentor/${id}`, '', { scroll: false })} />
      )}
    </StyledWrapper>
  );
};

export default MentorCard;
