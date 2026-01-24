import { mentors } from '@/server/mocks';
import { IMentorCard } from '@/types';
import { FilterParams, IFilters } from '@/server/types/mentors';
import { isEmptyObject } from '@/utils/object';

export const getMentor = async (id: number) => mentors.find((item) => item.id === id);
export const getMentors = async () => mentors;
export const getMentorsByDirection = async (direction: string) =>
  mentors.filter((item) => item.group === direction);

export const getMentorsWithParams = async (filterParams?: FilterParams) => {
  if (!filterParams) return [];

  if (isEmptyObject(filterParams)) return [];

  if (filterParams && 'search' in filterParams) {
    return mentors.filter((item) => {
      const arr = Object.keys(item);
      const regexp = new RegExp(filterParams.search, 'gi');

      return arr.find(
        (key) =>
          regexp.test(String(item[key as keyof IMentorCard])) || regexp.test(String(item.user))
      );
    });
  }

  const keys = Object.keys(filterParams || {});

  const filters = {} as IFilters;

  keys.forEach((arrKey) => {
    const direction = arrKey.replace(/\[\d+]/g, '') as keyof IMentorCard;
    if (!filters[direction]) {
      filters[direction] = [];
    }

    filters[direction]?.push(filterParams[arrKey]);
  });

  return mentors.filter((item) => {
    let result = true;

    Object.entries(filters).forEach(([key, values]) => {
      if (key === 'rating' && !values.includes(item.user.rating)) result = false;

      if (key !== 'rating' && !values.includes(item[key as keyof IMentorCard] as string))
        result = false;
    });

    return result;
  });
};
