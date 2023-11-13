import { FC } from 'react';
import { Container, Typography, Stack, Box, useTheme, useMediaQuery } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

import type { IMentorCard } from '@/types';
import { SkillsList } from '@/components/SkillsList';

import { CommunicationPanel } from '../CommunicationPanel';
import { StyledContent, StyledImage, StyledImageWrapper, StyledMainInfo } from './styles';

const Mentor: FC<IMentorCard> = ({
  alt,
  description,
  image,
  skills,
  title,
  user: { name, rating },
}) => {
  const { spacing } = useTheme();
  const isTablet = useMediaQuery('(min-width: 769px)');

  return (
    <Stack p={`${spacing(6)} 0`}>
      <Container>
        {!isTablet && (
          <Typography variant="h4" textAlign="center">
            {title}
          </Typography>
        )}
        <Stack flexDirection="row" position="relative" mt={isTablet ? 0 : spacing(2)}>
          {isTablet && (
            <StyledImageWrapper>
              <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" />
              <CommunicationPanel callLink="/" messageLink="/messenger" />
            </StyledImageWrapper>
          )}
          <StyledContent>
            <StyledMainInfo>
              {!isTablet && (
                <StyledImageWrapper>
                  <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" />
                  <CommunicationPanel callLink="/" messageLink="/messenger" />
                </StyledImageWrapper>
              )}
              <Box>
                {isTablet && <Typography variant="h4">{title}</Typography>}
                <Stack flexDirection="row" gap={spacing(1)} alignItems="center">
                  <Typography variant="h6">{name}</Typography>
                  <Typography variant="h6">{rating}</Typography>
                  <StarRateIcon fontSize="inherit" color="warning" />
                </Stack>
                <SkillsList skills={skills} variant="Page" />
              </Box>
            </StyledMainInfo>
            <Typography component="p" mt={isTablet ? spacing(8) : 0}>
              {description}
            </Typography>
          </StyledContent>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Mentor;
