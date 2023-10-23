import { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography, Stack, useTheme } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { StyledIconButton, StyledWrapper } from './styles';

interface IBackLinkProps {
  fullWidth?: boolean;
}

const BackLink: FC<IBackLinkProps> = ({ fullWidth }) => {
  const { spacing } = useTheme();
  const { back } = useRouter();

  return (
    <StyledWrapper maxWidth={fullWidth ? 'auto' : '400px'}>
      <StyledIconButton onClick={back}>
        <Stack flexDirection="row" gap={spacing(1)} alignItems="center" height="inherit">
          <KeyboardDoubleArrowLeftIcon />
          <Typography textTransform="none">Назад</Typography>
        </Stack>
      </StyledIconButton>
    </StyledWrapper>
  );
};

export default BackLink;
