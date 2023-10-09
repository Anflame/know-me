import { styled } from '@mui/material';
import Image from 'next/image';

export const StyledImage = styled(Image)(({ theme: { spacing } }) => ({
  borderRadius: spacing(2),
}));
