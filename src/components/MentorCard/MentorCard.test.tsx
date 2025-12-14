import { render, screen } from '@testing-library/react';
import { useMediaQuery } from '@mui/material';
import { userEvent } from '@testing-library/user-event';
import MentorCard, { IMentorCardProps } from './MentorCard';

const push = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({ push }),
}));

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: jest.fn(),
  };
});

const useMediaQueryMock = useMediaQuery as jest.Mock;

describe('mentor card', () => {
  const props: IMentorCardProps = {
    id: 1,
    title: 'd',
    alt: 'da',
    user: {
      id: 1,
      name: 'd',
      rating: '1',
      phone: '999999999',
    },
    skills: [{ id: 1, title: 'dsada' }],
    description: 'dada',
    image: 'src/ds.jpg',
    variant: 'Swiper',
  };

  it('should render swiper variant', () => {
    render(<MentorCard {...props} />);
    expect(screen.queryByTestId('communication-panel')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect-btn')).toBeInTheDocument();
  });

  it('should render full variant', () => {
    render(<MentorCard {...{ ...props, variant: 'FullWidth' }} />);
    expect(screen.getByTestId('communication-panel')).toBeInTheDocument();
    expect(screen.queryByTestId('redirect-btn')).not.toBeInTheDocument();
  });

  it('should render tablet full variant', () => {
    useMediaQueryMock.mockReturnValue(true);
    render(<MentorCard {...{ ...props, variant: 'FullWidth' }} />);
    expect(screen.getByTestId('redirect-btn')).toBeInTheDocument();
  });

  it('btn onClick worked once', async () => {
    render(<MentorCard {...props} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId('redirect-btn'));

    expect(push).toHaveBeenNthCalledWith(1, `/mentor/${1}`, '', { scroll: false });
  });
});
