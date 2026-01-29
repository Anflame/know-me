import { renderHook, act } from '@testing-library/react';
import { useMutation } from 'react-query';
import { createWrapper } from '@test/test-utils';
import { useAuth } from './hooks';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useMutation: jest.fn(),
}));

const setMock = jest.fn();
jest.mock('@/utils', () => {
  const actual = jest.requireActual('@/utils');
  return {
    ...actual,
    localSource: () => ({ set: setMock }),
  };
});

describe('useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handleAuth calls mutate with merged payload', () => {
    const mutate = jest.fn();

    (useMutation as jest.Mock).mockReturnValue({
      isError: false,
      isLoading: false,
      mutate,
    });

    const wrapper = createWrapper();
    const { result } = renderHook(() => useAuth(true), { wrapper });

    act(() => {
      result.current.handleAuth({ email: 'a@a.ru', password: 'Aa123456', name: 'Den' });
    });

    expect(mutate).toHaveBeenCalledWith({
      email: 'a@a.ru',
      password: 'Aa123456',
      name: 'Den',
      isSignUp: true,
    });
  });

  it('onSuccess saves tokens and authorizes (covers saveAuthTokens)', () => {
    const mutate = jest.fn();
    let onSuccess: ((data: unknown) => void) | undefined;

    (useMutation as jest.Mock).mockImplementation((opts: { onSuccess: () => void }) => {
      onSuccess = opts?.onSuccess;
      return {
        isError: false,
        isLoading: false,
        mutate,
      };
    });

    const wrapper = createWrapper();
    renderHook(() => useAuth(true), { wrapper });

    act(() => {
      onSuccess?.({ access_token: 'acc', refresh_token: 'ref' });
    });

    expect(setMock).toHaveBeenCalledTimes(1);
    expect(setMock).toHaveBeenCalledWith('tokens', expect.stringContaining('access_token=acc'));
    expect(setMock).toHaveBeenCalledWith('tokens', expect.stringContaining('refresh_token=ref'));
  });

  it('onSuccess does nothing if tokens shape is invalid (negative branch)', () => {
    const mutate = jest.fn();
    let onSuccess: ((data: unknown) => void) | undefined;

    (useMutation as jest.Mock).mockImplementation((opts: { onSuccess: () => void }) => {
      onSuccess = opts?.onSuccess;
      return {
        isError: false,
        isLoading: false,
        mutate,
      };
    });

    const wrapper = createWrapper();
    renderHook(() => useAuth(true), { wrapper });

    act(() => {
      onSuccess?.({ access_token: 'acc' });
    });

    expect(setMock).not.toHaveBeenCalled();
  });
});
