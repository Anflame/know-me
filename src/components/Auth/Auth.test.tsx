import { render, screen } from '@test/test-utils';
import { userEvent } from '@testing-library/user-event';
import Auth from './Auth';

jest.mock('dateformat', () => ({
  default: jest.fn(() => '2025-12-14'),
}));

describe('auth popup', () => {
  const onClose = jest.fn();
  const obj = {
    isSignUp: false,
    isOpen: true,
    onClose,
  };

  it('open', () => {
    render(<Auth {...obj} />);
    expect(screen.getByTestId('auth-content')).toBeInTheDocument();
    expect(screen.getByTestId('auth-backdrop')).toBeVisible();
  });

  it('close-by-button', async () => {
    render(<Auth {...obj} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId('auth-button-close'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closed by backdrop', async () => {
    render(<Auth {...obj} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId('auth-backdrop'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
