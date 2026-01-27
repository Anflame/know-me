import { mentors } from '@/server/mocks';
import { IMentorCard } from '@/types';
import { FilterParams, IFilters } from '@/server/types/mentors';
import { isEmptyObject } from '@/utils/object';
import { categories } from '@/server/mocks/categories';

export const getMentor = async (id: number) => mentors.find((item) => item.id === id);
export const getMentors = async () => mentors;
export const getMentorsByDirection = async (direction: string) =>
  mentors.filter((item) => item.group === direction);

export const getMentorsWithParams = async (filterParams?: FilterParams) => {
  if (!filterParams) return [];

  if (isEmptyObject(filterParams)) return [];

  if (filterParams && 'search' in filterParams) {
    return mentors.filter((item) => {
      const arr = Object.entries(item);
      const regexp = new RegExp(filterParams.search, 'gi');

      let result = false;

      arr.forEach(([key, value]) => {
        if (key === 'direction') {
          const directionDisplayName = categories.find((cat) => cat.slug === value)?.title;
          if (!directionDisplayName) return;
          if (regexp.test(directionDisplayName as string)) result = true;
          return;
        }
        if (Array.isArray(value)) {
          value.forEach((array) => {
            Object.entries(array).forEach(([, arrValue]) => {
              if (regexp.test(arrValue as string)) result = true;
            });
          });
          return;
        }
        if (typeof value === 'object') {
          Object.entries(value).forEach(([, arrValue]) => {
            if (regexp.test(arrValue as string)) result = true;
          });
          return;
        }

        if (regexp.test(value as string)) result = true;
      });

      return result;
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
