import { render, screen, act, waitFor } from '@testing-library/react';
import { Messenger } from '@/components/Messenger';
import { IChat } from '@/types';
import { IChatListProps } from '@/components/ChatList/ChatList';
import { IChatProps } from '@/components/Chat/Chat';
import { userEvent } from '@testing-library/user-event';
import { DrawerProps, StackProps, ButtonProps } from '@mui/material';

let lastSetSelectedId: ((id: string) => void) | null = null;

jest.mock('../ChatList', () => ({
  ChatList: ({ setSelectedId }: IChatListProps) => {
    lastSetSelectedId = setSelectedId;
    return <div>ChatList mock</div>;
  },
}));

jest.mock('../Chat', () => ({
  Chat: ({ id }: IChatProps) => <div>Chat mock: {id}</div>,
}));

jest.mock('./style', () => ({
  StyledDrawer: ({ open, onClose, children }: DrawerProps) =>
    open ? (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
      <div
        data-testid="drawer"
        data-open={open}
        onClick={(e) => onClose?.(e, 'backdropClick')}
        role="button"
      >
        {children}
      </div>
    ) : null,
  StyledWrapper: ({ children }: StackProps) => <div>{children}</div>,
  StyledCloseBtn: ({ children, ...props }: ButtonProps) => (
    <button {...props} type="button">
      {children}
    </button>
  ),
}));

describe('Messenger Component', () => {
  const chats: IChat[] = [
    {
      _id: '1',
      alt: '',
      image: 'image.png',
      lastMessage: 'asdad',
      lastMessageTimeSent: new Date().toString(),
      title: 'sdada',
    },
  ];

  beforeEach(() => {
    render(
      <Messenger
        chats={chats}
        userImage={{
          image: 'image.png',
          alt: 'sd',
        }}
      />
    );
    act(() => lastSetSelectedId?.('1'));
  });

  test('передаёт выбранный id в Chat', () => {
    expect(screen.getByText('Chat mock: 1')).toBeInTheDocument();
  });

  test('Закрывается Drawer по клику на кнопку', async () => {
    expect(screen.getByText('Chat mock: 1')).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByTestId('close-btn'));

    await waitFor(() => {
      expect(screen.queryByText('Chat mock: 1')).not.toBeInTheDocument();
    });
  });

  test('Закрывается Drawer по клику на out drawer', async () => {
    expect(screen.getByText('Chat mock: 1')).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByTestId('drawer'));

    await waitFor(() => {
      expect(screen.queryByText('Chat mock: 1')).not.toBeInTheDocument();
    });
  });
});
