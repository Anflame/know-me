import { styled, Box, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const StyledSwiperContainer = styled(Box)(({ theme: { palette, spacing } }) => ({
  position: 'relative',
  height: 'inherit',
  '& .swiper-container': {
    padding: '10px',
  },
  '& .swiper': {
    width: 'inherit',
    margin: `${spacing(3)} auto 0`,
    height: '352px',
    boxSizing: 'content-box',
    position: 'relative',
  },

  '& .swiper-slide': {
    height: '60%',
    width: 'calc(20% - 10px) !important',
    top: '20%',
    border: `1px solid ${palette.secondary.main}`,
    opacity: '0.3',
    borderRadius: spacing(2),
    boxShadow: `0px 0px 0px ${palette.secondary.main}`,
    transform: `translateY(${spacing(0)})`,
    transition: 'all 0.3s',

    [`&:hover`]: {
      transform: `translateY(-${spacing(1)})`,
      boxShadow: `0px 0px 8px ${palette.secondary.main}`,
    },
  },

  '& .swiper-slide-next': {
    height: '75%',
    top: '12.5%',
    opacity: '0.6',
  },

  '& .swiper-slide-next + .swiper-slide': {
    opacity: '1',
    height: '332px',
    top: '15px',
    '& + div': {
      height: '75%',
      top: '12.5%',
      opacity: '0.7',
    },
  },
}));

export const StyledArrowIcon = styled(ArrowBackIosNewIcon)<{ rotate?: number }>(
  ({ rotate, theme: { palette } }) => ({
    height: 'inherit',
    width: '100%',
    fill: palette.grey[500],
    ...(rotate && {
      transform: `rotate(${rotate}deg)`,
    }),
  })
);

export const StyledNavigationWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  flexDirection: 'row',
  position: 'absolute',
  top: `calc(50% - ${spacing(7)})`,
  height: spacing(7),
  width: '100%',
  justifyContent: 'space-between',
  zIndex: 11,
}));
