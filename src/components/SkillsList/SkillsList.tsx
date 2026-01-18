import { FC } from 'react';
import { Typography } from '@mui/material';

import type { ISkill } from '@/types';

import { StyledSkillWrapp, StyledSkillsList } from './styles';
import { SkillsVariants } from './types';

interface ISkillsListProps {
  skills: ISkill[];
  variant?: keyof typeof SkillsVariants;
}

const SkillsList: FC<ISkillsListProps> = ({ skills, variant = 'Listing' }) => (
  <StyledSkillsList variant={variant}>
    {skills.map(({ title, id }) => (
      <StyledSkillWrapp key={id}>
        <Typography variant="body2" color="primary">
          {title}
        </Typography>
      </StyledSkillWrapp>
    ))}
  </StyledSkillsList>
);

export default SkillsList;
