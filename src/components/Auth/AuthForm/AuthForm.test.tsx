import { render, screen } from '@test/test-utils';
import { userEvent } from '@testing-library/user-event';
import { useAuth } from './hooks';
import AuthForm from './AuthForm';

import clearAllMocks = jest.clearAllMocks;

jest.mock('./hooks', () => ({
  useAuth: jest.fn(),
}));

const useAuthMock = useAuth as jest.Mock;

describe('auth form', () => {
  const handleAuth = jest.fn();
  beforeEach(() => {
    useAuthMock.mockReturnValue({
      handleAuth,
      isLoading: false,
    });
  });
  afterEach(() => {
    clearAllMocks();
  });

  it('should render sign up form', () => {
    render(<AuthForm isSignUp />);

    expect(screen.getByTestId('name-field')).toBeInTheDocument();
  });

  it('should render login up form', () => {
    render(<AuthForm isSignUp={false} />);

    expect(screen.queryByTestId('name-field')).not.toBeInTheDocument();
  });

  it('shouldn"t show progress', () => {
    render(<AuthForm isSignUp />);

    expect(screen.queryByTestId('circular-progress')).not.toBeInTheDocument();
  });

  it('should show progress', () => {
    useAuthMock.mockReturnValue({
      handleAuth,
      isLoading: true,
    });
    render(<AuthForm isSignUp />);

    expect(screen.getByTestId('circular-progress')).toBeInTheDocument();
  });

  it('should call handleSubmit handler with signUp props', async () => {
    useAuthMock.mockReturnValue({
      handleAuth,
      isLoading: false,
    });
    render(<AuthForm isSignUp />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText('Email'), 'asd@mail.ru');
    await user.type(screen.getByLabelText('Your Name'), 'asd');
    await user.type(screen.getByLabelText('Password'), 'Aa123456');
    await user.click(screen.getByTestId('sendBtn'));

    expect(handleAuth).toHaveBeenCalledTimes(1);
  });

  it('should call handleSubmit handler with login props', async () => {
    render(<AuthForm isSignUp={false} />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText('Email'), 'asd@mail.ru');
    await user.type(screen.getByLabelText('Password'), 'Aa123456');
    await user.click(screen.getByTestId('sendBtn'));

    expect(handleAuth).toHaveBeenCalledTimes(1);
  });

  it('changing password visibility', async () => {
    render(<AuthForm isSignUp />);

    const user = userEvent.setup();

    expect(screen.getByTestId('icon-visibility-off')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');

    await user.click(screen.getByRole('button', { name: /toggle password visibility/i }));
    expect(screen.getByTestId('icon-visibility-on')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
  });

  it('shows name validation error on sign up', async () => {
    render(<AuthForm isSignUp />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText('Email'), 'asd@mail.ru');
    await user.type(screen.getByLabelText('Password'), 'Aa123456');

    await user.click(screen.getByTestId('sendBtn'));

    expect(await screen.findByText(/name is a required field/i)).toBeInTheDocument();
  });
});
