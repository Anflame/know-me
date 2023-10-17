import { Stack, Box, styled } from '@mui/material';
import { SkillsVariants } from './types';

export const StyledSkillsList = styled(Stack)<{ variant?: keyof typeof SkillsVariants }>(
  ({ theme: { spacing }, variant }) => ({
    flexDirection: 'row',
    gap: spacing(0.5),
    position: variant === 'Listing' ? 'absolute' : 'static',
    marginTop: variant === 'Page' ? spacing(2) : 0,
    bottom: spacing(1),
  })
);

export const StyledSkillWrapp = styled(Box)(
  ({
    theme: {
      palette: { extra },
      spacing,
    },
  }) => ({
    background: extra?.main,
    borderRadius: spacing(1),
    padding: '4px',
  })
);
