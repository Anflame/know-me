import { FC } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface IFilterItemProps {
  checked?: boolean;
  title: string;
  idToCheck: number | string;
  group: string;
  changeSelectFilter: (idToCheck: number | string, group: string) => void;
}

const FilterItem: FC<IFilterItemProps> = ({
  checked,
  title,
  group,
  idToCheck,
  changeSelectFilter,
}) => (
  <FormControlLabel
    control={<Checkbox checked={checked} onClick={() => changeSelectFilter(idToCheck, group)} />}
    label={title}
  />
);

export default FilterItem;
