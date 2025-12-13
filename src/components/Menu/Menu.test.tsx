import { render, screen } from '@testing-library/react';
import { Menu } from '@/components/Menu/';
import { IsSignUp, Login, SignUp } from '@/types';
import { IconButtonProps, StackProps, SwipeableDrawerProps } from '@mui/material';
import { userEvent } from '@testing-library/user-event';
import { SyntheticEvent } from 'react';

jest.mock('./styles', () => ({
  StyledSwipeableDrawer: ({ open, onClose, onOpen, children }: SwipeableDrawerProps) => (
    <div>
      <button
        data-testid="drawer-open"
        onClick={() => onOpen && onOpen({} as SyntheticEvent)}
        type="button"
        aria-label="open drawer"
      />
      {open ? (
        <div data-testid="drawer">
          {children}
          <button
            data-testid="drawer-close"
            onClick={(e) => onClose?.(e)}
            type="button"
            aria-label="close drawer"
          />
        </div>
      ) : null}
    </div>
  ),
  StyledMenuIcon: () => <span>menu</span>,
  // eslint-disable-next-line react/button-has-type
  StyledIconButton: (props: IconButtonProps) => <button {...props} />,
  StyledCloseIcon: () => <span>close</span>,
  StyledWrapper: ({ children }: StackProps) => <div>{children}</div>,
}));

let handleAuth: (type: IsSignUp) => jest.Mock;

describe('Menu component', () => {
  beforeEach(() => {
    handleAuth = jest.fn();
    render(<Menu handleAuth={handleAuth} />);
  });

  test('open/closed', async () => {
    expect(screen.queryByText('login')).not.toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(screen.getByTestId('icon-button-open'));
    expect(screen.getByText('login')).toBeInTheDocument();

    await user.click(screen.getByTestId('icon-button-close'));
    expect(screen.queryByText('login')).not.toBeInTheDocument();
  });

  test('open/closed через drawer-open', async () => {
    const user = userEvent.setup();

    expect(screen.queryByText('login')).not.toBeInTheDocument();

    await user.click(screen.getByTestId('drawer-open'));
    expect(screen.getByText('login')).toBeInTheDocument();

    await user.click(screen.getByTestId('drawer-close'));
    expect(screen.queryByText('login')).not.toBeInTheDocument();
  });

  test('click login/signup вызывает handleAuth', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByTestId('drawer-open'));

    expect(screen.getByText('login')).toBeInTheDocument();
    expect(screen.getByText('signup')).toBeInTheDocument();

    await user.click(screen.getByText('login'));
    expect(handleAuth).toHaveBeenCalledWith(Login);

    await user.click(screen.getByText('signup'));
    expect(handleAuth).toHaveBeenCalledWith(SignUp);
  });
});
