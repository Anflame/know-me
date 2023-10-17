import { FC } from 'react';
import { Container, Typography, Stack, Box, useTheme } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

import type { IMentorCard } from '@/types';
import { SkillsList } from '@/components/SkillsList';

import { StyledImage, StyledImageWrapper } from './styles';
import { CommunicationPanel } from '../CommunicationPanel';

const Mentor: FC<IMentorCard> = ({
  alt,
  description,
  image,
  skills,
  title,
  user: { name, rating },
}) => {
  const { spacing } = useTheme();

  return (
    <Stack p={`${spacing(8)} 0`}>
      <Container>
        <Stack flexDirection="row" position="relative">
          <StyledImageWrapper>
            <StyledImage src={`/static/${image}`} alt={alt} fill sizes="100%" />
          </StyledImageWrapper>
          <Stack padding={spacing(2)}>
            <Box>
              <Typography variant="h4">{title}</Typography>
              <Stack flexDirection="row" gap={spacing(1)} alignItems="center">
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h6">{rating}</Typography>
                <StarRateIcon fontSize="inherit" color="warning" />
                <CommunicationPanel callLink="/" messageLink="/" />
              </Stack>
              <SkillsList skills={skills} variant="Page" />
            </Box>
            <Typography component="p" mt="50px">
              {description}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Mentor;
