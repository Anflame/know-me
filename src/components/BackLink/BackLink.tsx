import { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography, Stack, useTheme } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { StyledIconButton } from './styles';

const BackLink: FC = () => {
  const { spacing } = useTheme();
  const { back } = useRouter();

  return (
    <Stack position="relative" padding={spacing(2)}>
      <StyledIconButton onClick={back}>
        <Stack flexDirection="row" gap={spacing(1)} alignItems="center" height="inherit">
          <KeyboardDoubleArrowLeftIcon />
          <Typography textTransform="none">Назад</Typography>
        </Stack>
      </StyledIconButton>
    </Stack>
  );
};

export default BackLink;
