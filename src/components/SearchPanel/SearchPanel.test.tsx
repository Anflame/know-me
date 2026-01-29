import { render, screen } from '@testing-library/react';
import { SearchPanel } from '@/components/SearchPanel';
import userEvent from '@testing-library/user-event';

const mockPush = jest.fn(() => Promise.resolve(true));

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('SearchPanel', () => {
  it('should change input, submit form and push calls', async () => {
    render(<SearchPanel />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('Поиск...');
    await user.type(input, 'mentor');
    expect(input).toHaveValue('mentor');

    await user.click(screen.getByTestId('submit-btn'));

    expect(mockPush).toHaveBeenCalledWith('/mentors?search=mentor', '', {
      scroll: false,
    });
  });
});
