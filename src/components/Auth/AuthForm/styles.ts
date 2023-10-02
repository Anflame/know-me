import { styled, FormGroup, Button } from '@mui/material';

export const StyledForm = styled(FormGroup)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

export const StyledButton = styled(Button)(({ theme: { spacing } }) => ({
  marginTop: spacing(4),
}));
