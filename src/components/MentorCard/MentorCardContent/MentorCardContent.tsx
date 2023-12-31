import { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography, useMediaQuery, Button, Stack, useTheme } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { SkillsList } from '@/components/SkillsList';
import type { IMentorCard } from '@/types';

import { StyledContent, StyledDescription, StyledInfo, StyledTitle } from './styles';
import { MentorCardVariant } from '../types';

interface IMentorCardContentProps extends Omit<IMentorCard, 'image' | 'alt'> {
  variant: keyof typeof MentorCardVariant;
}

const MentorCardContent: FC<IMentorCardContentProps> = ({
  id,
  variant,
  title,
  skills,
  user: { name, rating },
  description,
}) => {
  const { push } = useRouter();
  const { spacing } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <StyledContent color="white" variant={variant}>
      {isDesktop && (
        <StyledInfo>
          <Typography variant="body1" color="primary">
            Подробнее
          </Typography>
          <ArrowForwardIcon color="primary" />
          <Button variant="ghost" onClick={() => push(`/mentor/${id}`, '', { scroll: false })} />
        </StyledInfo>
      )}
      <StyledTitle variant="body1">{title}</StyledTitle>
      <Stack gap={spacing(0.5)} flexDirection="row" mt={spacing(1)}>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2">{rating}</Typography>
        <StarRateIcon color="warning" fontSize="inherit" />
      </Stack>
      {variant === 'FullWidth' && (
        <StyledDescription variant="body2">{description}</StyledDescription>
      )}
      <SkillsList skills={skills} />
    </StyledContent>
  );
};

export default MentorCardContent;
