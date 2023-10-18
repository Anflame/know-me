import { useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

import type { IFilterGroup } from '@/types';

import { getSelectableFilters, transformFiltersToURLParams, changeFilterChecked } from './utils';

export const useFilters = (
  filterGroups: IFilterGroup[],
  closeFilters: Dispatch<SetStateAction<boolean>>
) => {
  const [selectableFilters, setSelectableFilters] = useState(getSelectableFilters(filterGroups));

  const { push } = useRouter();

  const changeSelectFilter = (idToCheck: number | string, group: string) => {
    const changeCheckedFilter = changeFilterChecked(selectableFilters, idToCheck, group);
    setSelectableFilters(changeCheckedFilter);
  };

  const handleFilter = () => {
    push(`/mentors?${transformFiltersToURLParams(selectableFilters)}`, '', { scroll: false });
    closeFilters(false);
  };

  return {
    changeSelectFilter,
    selectableFilters,
    handleFilter,
  };
};
