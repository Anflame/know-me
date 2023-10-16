import { stringify } from 'qs';

import type { IFilterGroup } from '@/types';

export const getSelectableFilters = (filterGroups: IFilterGroup[]): IFilterGroup[] =>
  filterGroups.map(({ filters, ...item }) => ({
    ...item,
    filters: filters.map(({ checked, ...filterItem }) => ({
      ...filterItem,
      checked: false,
    })),
  }));

export const changeFilterChecked = (
  filterGroups: IFilterGroup[],
  idToCheck: string | number,
  group: string
) =>
  filterGroups.map(({ filters, title, id }) => ({
    id,
    title,
    filters: filters.map(({ id: filterId, checked, title: filterTitle }) => ({
      title: filterTitle,
      id: filterId,
      checked: group === title && idToCheck === filterId ? !checked : checked,
    })),
  }));

type FilterObj = {
  [key: string]: Array<string>;
};

export const getFormatFilters = (filterGroups: IFilterGroup[]) =>
  filterGroups.reduce<FilterObj>((acc, { title, filters }) => {
    acc[title.toLowerCase()] = filters.reduce(
      (filterAcc: string[], filterCurr) => [...filterAcc, filterCurr.title],
      []
    );
    return acc;
  }, {});

export const getCheckedFilters = (filterGroups: IFilterGroup[]) =>
  filterGroups.map(({ filters, ...group }) => ({
    ...group,
    filters: filters.filter(({ checked }) => checked),
  }));

export const transformFiltersToURLParams = (filterGroups: IFilterGroup[]) => {
  const checkedFilters = getCheckedFilters(filterGroups);
  const formattedFilters = getFormatFilters(checkedFilters);

  return stringify(formattedFilters);
};
