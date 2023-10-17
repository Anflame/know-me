// TODO: выпилить когда будет апи

import { IFilterGroup } from '@/types/dto/filters.dto';

export const filters: IFilterGroup[] = [
  {
    id: 1,
    title: 'Direction',
    filters: [
      {
        id: 1,
        title: 'programming',
      },
      {
        id: 2,
        title: 'accountant',
      },
      {
        id: 3,
        title: 'design',
      },
      {
        id: 4,
        title: 'language',
      },
    ],
  },
  {
    id: 2,
    title: 'Rating',
    filters: [
      {
        id: 1,
        title: '1',
      },
      {
        id: 2,
        title: '2',
      },
      {
        id: 3,
        title: '3.5',
      },
      {
        id: 4,
        title: '4.4',
      },
      {
        id: 5,
        title: '5',
      },
    ],
  },
];
