import { render, screen } from '@test/test-utils';
import { userEvent } from '@testing-library/user-event';
import dateformat from 'dateformat';
import Chat, { IChatProps } from './Chat';

jest.mock('dateformat', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Chat component test', () => {
  const props: IChatProps = {
    companionImage: {
      image: '',
      alt: '',
      title: '',
    },
    userImage: {
      image: '',
      alt: '',
    },
  };

  beforeEach(() => {
    (dateformat as jest.Mock).mockReturnValue('12.12.2010');
  });

  it('conditional render', () => {
    render(<Chat {...props} id="1" />);
    expect(screen.queryByText(/Выберите Чат/i)).not.toBeInTheDocument();
  });

  it('conditional render', async () => {
    render(<Chat {...props} />);
    expect(await screen.findByText(/Выберите Чат/i)).toBeInTheDocument();
  });

  it('should add new message to chat', async () => {
    render(<Chat {...props} id="1" />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('Введите сообщение');

    await user.type(input, 'привет, новое сообщение');
    expect(input).toHaveValue('привет, новое сообщение');

    await user.click(screen.getByTestId('submit-button'));
    expect(await screen.findByText(/привет, новое сообщение/i)).toBeInTheDocument();
  });

  it('should not add new message to chat', async () => {
    render(<Chat {...props} id="1" />);
    const user = userEvent.setup();

    await user.click(screen.getByTestId('submit-button'));

    screen.debug();
    expect(screen.queryByText(/привет, новое сообщение/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText('Введите сообщение')).toHaveAttribute('aria-invalid');
  });
});
