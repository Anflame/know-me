import { List, styled } from '@mui/material';

export const StyledList = styled(List)<{ view: string }>(
  ({ theme: { palette, spacing }, view }) => ({
    marginTop: spacing(6),
    color: palette.primary.main,
    ...(view === 'grid' && {
      display: 'grid',
      grid: 'repeat(auto-fill, minmax(250px, 1fr)) / repeat(3, minmax(300px, 1fr))',
      gap: '60px',
    }),
  })
);
