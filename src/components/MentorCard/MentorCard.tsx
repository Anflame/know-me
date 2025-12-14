import { FC } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery, Button } from '@mui/material';

import type { IMentorCard } from '@/types';

import { CommunicationPanel } from '../CommunicationPanel';
import { MentorCardContent } from './MentorCardContent';
import type { MentorCardVariant } from './types';
import { StyledImage, StyledWrapper } from './styles';

export interface IMentorCardProps extends IMentorCard {
  variant: keyof typeof MentorCardVariant;
}

const MentorCard: FC<IMentorCardProps> = ({ id, image, alt, variant = 'FullWidth', ...other }) => {
  const { push } = useRouter();
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <StyledWrapper variant={variant} data-testid="mentor-card">
      <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" variant={variant} />
      {variant === 'FullWidth' && <CommunicationPanel callLink="/" messageLink="/messenger" />}
      <MentorCardContent {...other} id={id} variant={variant} />
      {(variant === 'Swiper' || isTablet) && (
        <Button
          variant="ghost"
          onClick={() => push(`/mentor/${id}`, '', { scroll: false })}
          data-testid="redirect-btn"
        />
      )}
    </StyledWrapper>
  );
};

export default MentorCard;
