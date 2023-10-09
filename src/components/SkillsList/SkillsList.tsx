import { FC } from 'react';
import { Typography } from '@mui/material';

import { StyledSkillWrapp, StyledSkillsList } from './styles';

interface ISkillsListProps {
  skills: Array<string>;
}

const SkillsList: FC<ISkillsListProps> = ({ skills }) => {
  return (
    <StyledSkillsList>
      {skills.map((item, index) => (
        <StyledSkillWrapp key={index}>
          <Typography variant="body2" color="primary">
            {item}
          </Typography>
        </StyledSkillWrapp>
      ))}
    </StyledSkillsList>
  );
};

export default SkillsList;
