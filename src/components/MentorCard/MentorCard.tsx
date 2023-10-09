import { FC } from 'react';
import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';

import { SkillsList } from '@/components/SkillsList';
import type { IMentor } from '@/types';

import { useRouter } from 'next/router';
import { MentorCardVariant } from './types';
import {
  StyledInfo,
  StyledImage,
  StyledContent,
  StyledWrapper,
  StyledDescription,
  StyledCommunicationWrapper,
} from './styles';

const MentorCard: FC<IMentor & { variant: keyof typeof MentorCardVariant }> = ({
  id,
  image,
  alt,
  name,
  skills,
  description,
  variant = 'FullWidth',
  rating,
}) => {
  const { push } = useRouter();

  return (
    <StyledWrapper variant={variant}>
      <StyledImage src={`/static/${image}`} alt={alt} fill variant={variant} priority />
      {variant === 'FullWidth' && (
        <StyledCommunicationWrapper>
          <IconButton onClick={() => push('/')}>
            <Stack flexDirection="row" gap="15px">
              <LocalPhoneIcon color="success" />
              <MessageIcon color="success" />
            </Stack>
          </IconButton>
        </StyledCommunicationWrapper>
      )}
      <StyledContent color="white" variant={variant}>
        <StyledInfo>
          <Typography variant="body1" color="primary">
            Подробнее
          </Typography>
          <ArrowForwardIcon color="primary" />
          <Button variant="ghost" onClick={() => push(`/mentor/${id}`, '', { scroll: false })} />
        </StyledInfo>
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Stack gap="3px" flexDirection="row">
            <Typography variant="body1">{rating}</Typography>
            <StarRateIcon color="warning" fontSize="inherit" />
          </Stack>
        </Box>
        {variant === 'FullWidth' && (
          <StyledDescription variant="body2">{description}</StyledDescription>
        )}
        <SkillsList skills={skills} />
      </StyledContent>
      {variant === 'Swiper' && (
        <Button variant="ghost" onClick={() => push(`/mentor/${id}`, '', { scroll: false })} />
      )}
    </StyledWrapper>
  );
};

export default MentorCard;
