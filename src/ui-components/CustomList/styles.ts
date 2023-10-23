import { List, styled } from '@mui/material';

export const StyledList = styled(List)<{ view: string }>(
  ({ theme: { palette, spacing, breakpoints }, view }) => ({
    marginTop: spacing(6),
    color: palette.primary.main,
    ...(view === 'grid' && {
      display: 'grid',
      justifyContent: 'space-between',
      [breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
      grid: 'repeat(auto-fill, minmax(250px, 1fr)) / repeat(1, minmax(auto, 400px))',
      [breakpoints.up('sm')]: {
        grid: 'repeat(auto-fill, minmax(250px, 1fr)) / repeat(2, minmax(auto, 400px))',
      },
      [breakpoints.up('md')]: {
        grid: 'repeat(auto-fill, minmax(250px, 1fr)) / repeat(3, minmax(auto, 400px))',
      },
      [breakpoints.up('lg')]: {
        grid: 'repeat(auto-fill, minmax(250px, 1fr)) / repeat(4, 300px)',
      },
      gap: spacing(6),
    }),
  })
);
