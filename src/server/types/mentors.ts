import { IMentorCard } from '@/types';

type FilteredObjectKeys = Omit<IMentorCard, 'user'> & {
  rating: string;
  search: string;
};

export type FilterParams = {
  [key in keyof FilteredObjectKeys]: string;
};

export type IFilters = {
  [key in keyof IMentorCard]: string[];
};
