import { Skeleton, styled, alpha } from '@mui/material';
import Image from 'next/image';

export const StyledSkeleton = styled(Skeleton)(({ theme: { palette } }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: 'inherit',
  background: alpha(palette.secondary.main, 0.4),
  top: 0,
  left: 0,
}));

export const StyledImage = styled(Image, { shouldForwardProp: (props) => props !== 'isLoaded' })<{
  isLoaded: boolean;
}>(({ isLoaded }) => ({
  borderRadius: 'inherit',
  opacity: !isLoaded ? 0 : 1,
}));
