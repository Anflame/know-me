import { AccordionSummary, Stack } from '@mui/material';
import { FC } from 'react';
import { StyledTitle } from './styles';

interface IFilterGroupTitleProps {
  title: string;
}

const FilterGroupTitle: FC<IFilterGroupTitleProps> = ({ title }) => (
  <AccordionSummary>
    <Stack>
      <StyledTitle>{title}</StyledTitle>
    </Stack>
  </AccordionSummary>
);

export default FilterGroupTitle;
