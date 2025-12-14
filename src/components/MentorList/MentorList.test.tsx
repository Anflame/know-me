import { render, screen } from '@testing-library/react';
import { MentorList } from '@/components/MentorList';
import { IMentorCard } from '@/types';

describe('MentorList', () => {
  it('should render mentorList correctly', () => {
    const mentor: IMentorCard = {
      id: 1,
      title: 'first',
      description: 'firstDescription',
      image: 'string.png',
      alt: '',
      user: {
        id: 1,
        name: '',
        phone: '999999999',
        rating: '1',
      },
      skills: [
        {
          id: 1,
          title: 'dsada',
        },
      ],
    };
    const mentorList = [mentor, { ...mentor, id: 2, title: 'second' }];
    render(<MentorList propMentors={mentorList} />);

    expect(screen.getAllByTestId('mentor-card')).toHaveLength(2);
    expect(screen.getByText('first')).toBeInTheDocument();
  });

  it('should not render cards', () => {
    render(<MentorList propMentors={[]} />);

    expect(screen.queryByTestId('mentor-card')).not.toBeInTheDocument();
  });
});
