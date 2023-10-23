import { styled, Box, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const StyledSwiperContainer = styled(Box)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
    position: 'relative',
    width: '85%',
    [breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '400px',
    },
    [breakpoints.between('md', 'lg')]: {
      width: '95%',
    },
    margin: '0 auto',
    height: 'inherit',
    '& .swiper-container': {
      padding: '10px',
    },
    '& .swiper': {
      width: 'inherit',
      margin: `${spacing(3)} auto 0`,
      height: '352px',
      position: 'relative',
    },

    '& .swiper-slide': {
      opacity: 0.7,
      height: '100%',
      [breakpoints.between('sm', 'md')]: {
        height: '75%',
        top: '12.5%',
      },
      [breakpoints.up('md')]: {
        opacity: 0.3,
        height: '60%',
        top: '20%',
      },
      [breakpoints.down('sm')]: {
        opacity: 1,
      },
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
      height: '100%',
      top: 0,
      opacity: 1,
    },

    [breakpoints.up('md')]: {
      '& .swiper-slide-next': {
        height: '75% !important',
        top: '12.5% !important',
        opacity: '0.6 !important',
      },

      '& .swiper-slide-next + .swiper-slide': {
        opacity: '1',
        height: '332px',
        top: '15px',
        '& + .swiper-slide': {
          height: '75%',
          top: '12.5%',
          opacity: '0.7',
        },
      },
    },
  })
);

export const StyledArrowIcon = styled(ArrowBackIosNewIcon)<{ rotate?: number }>(
  ({ rotate, theme: { palette } }) => ({
    height: 'inherit',
    width: '100%',
    pointerEvents: 'all',
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
  pointerEvents: 'none',
  zIndex: 11,
}));

export const StyledPagination = styled(Stack)(
  ({ theme: { border, breakpoints, palette, spacing } }) => ({
    [breakpoints.up('md')]: {
      display: 'none',
    },
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: '100% !important',
    height: spacing(1),
    zIndex: '2',
    bottom: `-${spacing(3)} !important`,
    margin: '0 auto',

    '.swiper-pagination-bullet': {
      marginLeft: spacing(0.5),
      display: 'block',
      width: `${spacing(1)} !important`,
      height: `${spacing(1)} !important`,
      border: `${border?.default}`,
      background: 'transparent',
      opacity: '1',
      borderRadius: spacing(0.3),
    },
    '.swiper-pagination-bullet-active': {
      background: palette.secondary.main,
    },
  })
);
