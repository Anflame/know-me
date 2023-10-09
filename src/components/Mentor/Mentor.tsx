import { FC } from 'react';
import { Container, Typography, IconButton, Stack, useTheme, Box } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MessageIcon from '@mui/icons-material/Message';

import type { IMentor } from '@/types';
import { SkillsList } from '@/components/SkillsList';

import { StyledImage } from './styles';

const Mentor: FC<IMentor> = ({ alt, description, image, name, skills, rating }) => {
  const { spacing } = useTheme();

  return (
    <Stack padding={`${spacing(5)} 0`}>
      <Container>
        <Stack flexDirection="row">
          <StyledImage src={`/static/${image}`} alt={alt} width={200} height={300} />
          <Stack padding={spacing(2)}>
            <Box>
              <Stack flexDirection="row">
                <Typography variant="h4">{name}</Typography>
                <IconButton>
                  <PhoneEnabledIcon color="success" />
                </IconButton>
                <IconButton>
                  <MessageIcon color="success" />
                </IconButton>
              </Stack>
              <Stack flexDirection="row">
                <Typography variant="body2">{rating}</Typography>
                <StarRateIcon fontSize="inherit" color="warning" />
              </Stack>
              <SkillsList skills={skills} />
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
