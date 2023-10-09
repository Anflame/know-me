import { Stack, Box, styled } from '@mui/material';

export const StyledSkillsList = styled(Stack)({
  flexDirection: 'row',
  gap: '5px',
  marginTop: '5px',
});

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
    justifySelf: 'flex-end',
  })
);
