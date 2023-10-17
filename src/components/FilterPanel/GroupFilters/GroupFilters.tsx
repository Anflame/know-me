import { FC } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import type { IFilterGroup } from '@/types';

import { FilterGroupTitle } from './FilterGroupTitle';
import { FilterItem } from './FilterItem';

interface IGroupFilters extends IFilterGroup {
  changeSelectFilter: (idToCheck: string | number, group: string) => void;
}

const GroupFilters: FC<IGroupFilters> = ({ filters, id, title, changeSelectFilter }) => (
  <Accordion key={id} variant="filters">
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <FilterGroupTitle title={title} />
    </AccordionSummary>
    <AccordionDetails>
      <Stack>
        {filters.map(({ id: filterId, ...item }) => (
          <FilterItem
            key={filterId}
            changeSelectFilter={changeSelectFilter}
            idToCheck={filterId}
            group={title}
            {...item}
          />
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default GroupFilters;
