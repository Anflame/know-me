import { FilterPanel } from '@/components/FilterPanel/index';
import { render, screen, waitFor } from '@testing-library/react';
import { filters } from '@/constants/filters';
import { userEvent } from '@testing-library/user-event';

const handleFilter = jest.fn();

jest.mock('./useFilters', () => ({
  useFilters: () => ({
    handleFilter,
    selectableFilters: filters,
  }),
}));

describe('render filter panel', () => {
  it('should render component', () => {
    render(<FilterPanel filterGroups={filters} />);
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
  });

  it('handleFilter should called after click', async () => {
    render(<FilterPanel filterGroups={filters} />);
    const user = userEvent.setup();
    const btn = screen.getByTestId('submit-btn');
    const drawerBtn = screen.getByTestId('open-drawer');
    const drawer = screen.getByTestId('drawer');

    expect(drawerBtn).toBeInTheDocument();

    await user.click(drawerBtn);
    expect(drawer).toBeVisible();

    await user.click(btn);
    await waitFor(() => {
      expect(handleFilter).toHaveBeenCalled();
    });
  });
});
