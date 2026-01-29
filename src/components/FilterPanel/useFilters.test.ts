import { act, renderHook } from '@testing-library/react';
import { IFilterGroup } from '@/types';
import { useRouter } from 'next/router';
import { useFilters } from './useFilters';
import * as utils from './utils';

const mockCloseFilters = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('./utils', () => ({
  getSelectableFilters: jest.fn(),
  transformFiltersToURLParams: jest.fn(),
  changeFilterChecked: jest.fn(),
}));

const mockUseRouter = useRouter as jest.Mock;
const mockPush = jest.fn().mockResolvedValue(true);

describe('useFilters hook', () => {
  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      push: mockPush,
    });
  });

  it('should change router and close dialog', async () => {
    const { result } = renderHook(() => useFilters([] as IFilterGroup[], mockCloseFilters));

    await act(async () => {
      await result.current.handleFilter();
    });

    expect(mockPush).toHaveBeenCalledWith('/mentors?', '', { scroll: false });
    expect(mockCloseFilters).toHaveBeenCalledTimes(1);
  });

  it('changeSelectFilter updates selectableFilters using changeFilterChecked result', () => {
    const initial = [{ group: 'skills', filters: [{ id: 1, checked: false }] }];
    const updated = [{ group: 'skills', filters: [{ id: 1, checked: true }] }];

    (utils.getSelectableFilters as jest.Mock).mockReturnValue(initial);
    (utils.changeFilterChecked as jest.Mock).mockReturnValue(updated);

    const { result } = renderHook(() => useFilters([] as IFilterGroup[], mockCloseFilters));

    expect(result.current.selectableFilters).toBe(initial);

    act(() => {
      result.current.changeSelectFilter(1, 'skills');
    });

    expect(utils.changeFilterChecked).toHaveBeenCalledWith(initial, 1, 'skills');
    expect(result.current.selectableFilters).toBe(updated);
  });
});
