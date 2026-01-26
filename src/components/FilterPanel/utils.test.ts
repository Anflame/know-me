import { filters } from '@/constants/filters';
import { IFilterGroup } from '@/types';
import { changeFilterChecked, getSelectableFilters, transformFiltersToURLParams } from './utils';

describe('filter utils', () => {
  it('getSelectableFilters sets all checked to false', () => {
    const checkedFilters = getSelectableFilters(filters);

    const allUnchecked = checkedFilters.every((group) =>
      group.filters.every((filter) => filter.checked === false)
    );

    expect(allUnchecked).toBe(true);
  });

  it('should return JSON', () => {
    const checkedFilter: IFilterGroup[] = [
      {
        id: 1,
        title: 'Direction',
        filters: [
          {
            id: 1,
            checked: true,
            title: 'direction checked',
          },
          {
            id: 2,
            checked: false,
            title: 'direction not checked',
          },
        ],
      },
      {
        id: 2,
        title: 'rating',
        filters: [
          {
            id: 1,
            checked: true,
            title: 'rating checked',
          },
        ],
      },
    ];

    expect(transformFiltersToURLParams(checkedFilter)).toBe(
      'direction%5B0%5D=direction%20checked&rating%5B0%5D=rating%20checked'
    );
  });

  it('should checked definite filter', () => {
    const checked = changeFilterChecked(filters, 1, 'Direction');

    expect(
      checked.find(({ title }) => title === 'Direction')?.filters.find(({ id }) => +id === 1)
        ?.checked
    ).toBe(true);
  });
});
