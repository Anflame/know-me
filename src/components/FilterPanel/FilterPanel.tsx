import { FC, useState } from 'react';
import { Typography, useTheme, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import type { IFilterGroup } from '@/types';

import { useFilters } from './useFilters';
import {
  StyledSwipeableDrawer,
  StyledButtonWrapper,
  StyledButton,
  StyledWrapper,
  StyledFilterGroups,
} from './styles';
import { GroupFilters } from './GroupFilters';

export interface IFilterPanelProps {
  filterGroups: IFilterGroup[];
}

const FilterPanel: FC<IFilterPanelProps> = ({ filterGroups }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { spacing } = useTheme();
  const { changeSelectFilter, selectableFilters, handleFilter } = useFilters(
    filterGroups,
    setIsOpen
  );

  return (
    <StyledWrapper>
      <StyledButton variant="text" onClick={() => setIsOpen(true)} color="primary">
        <FilterListIcon />
        <Typography variant="body1" ml={spacing(1)}>
          Filters
        </Typography>
      </StyledButton>
      <StyledSwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <StyledFilterGroups as="form">
          {selectableFilters.map((item) => (
            <GroupFilters key={item.id} {...item} changeSelectFilter={changeSelectFilter} />
          ))}
          <StyledButtonWrapper>
            <Button fullWidth onClick={handleFilter}>
              Применить
            </Button>
          </StyledButtonWrapper>
        </StyledFilterGroups>
      </StyledSwipeableDrawer>
    </StyledWrapper>
  );
};

export default FilterPanel;
