import { useState } from 'react';
import { useRouter } from 'next/router';

import type { IFilterGroup } from '@/types';

import { getSelectableFilters, transformFiltersToURLParams, changeFilterChecked } from './utils';

export const useFilters = (filterGroups: IFilterGroup[]) => {
  const [selectableFilters, setSelectableFilters] = useState(getSelectableFilters(filterGroups));

  const { push } = useRouter();

  const changeSelectFilter = (idToCheck: number | string, group: string) => {
    const changeCheckedFilter = changeFilterChecked(selectableFilters, idToCheck, group);
    setSelectableFilters(changeCheckedFilter);
  };

  const handleFilter = () => {
    push(`/mentors?${transformFiltersToURLParams(selectableFilters)}`, '', { scroll: false });
  };

  return {
    changeSelectFilter,
    selectableFilters,
    handleFilter,
  };
};
