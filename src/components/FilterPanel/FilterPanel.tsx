import { FC, useState } from 'react';
import { Typography, useMediaQuery, useTheme, Button, Stack } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import type { IFilterGroup } from '@/types';

import { useFilters } from './useFilters';
import {
  StyledSwipeableDrawer,
  StyledButtonWrapper,
  StyledButton,
  StyledWrapper,
  StyledFilterGroups,
  StyledHeading,
} from './styles';
import { GroupFilters } from './GroupFilters';

export interface IFilterPanelProps {
  filterGroups: IFilterGroup[];
}

const FilterPanel: FC<IFilterPanelProps> = ({ filterGroups }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery('(min-width: 769px)');
  const { spacing } = useTheme();
  const { changeSelectFilter, selectableFilters, handleFilter } = useFilters(
    filterGroups,
    setIsOpen
  );

  return (
    <StyledWrapper>
      <StyledButton variant="text" onClick={() => setIsOpen(true)} color="primary">
        <Stack flexDirection="row" gap={spacing(1)}>
          {isTablet && <Typography ml={spacing(1)}>Filters</Typography>}
          <FilterListIcon />
        </Stack>
      </StyledButton>
      <StyledSwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <StyledFilterGroups as="form">
          <StyledHeading variant="h6">Filters</StyledHeading>
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
