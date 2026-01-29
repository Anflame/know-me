import { useState } from 'react';
import { useRouter } from 'next/router';

import type { IFilterGroup } from '@/types';

import { getSelectableFilters, transformFiltersToURLParams, changeFilterChecked } from './utils';

export const useFilters = (
  filterGroups: IFilterGroup[],
  closeFilters: (value: boolean) => void
) => {
  const [selectableFilters, setSelectableFilters] = useState(getSelectableFilters(filterGroups));

  const { push } = useRouter();

  const changeSelectFilter = (idToCheck: number | string, group: string) => {
    const changeCheckedFilter = changeFilterChecked(selectableFilters, idToCheck, group);
    setSelectableFilters(changeCheckedFilter);
  };

  const handleFilter = async () => {
    const transformed = transformFiltersToURLParams(selectableFilters);
    await push(`/mentors?${transformed ?? ''}`, '', { scroll: false });
    closeFilters(false);
  };

  return {
    changeSelectFilter,
    selectableFilters,
    handleFilter,
  };
};
