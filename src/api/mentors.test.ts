import { fetchMentors } from '@/api/mentors';
import api from './instance';

jest.mock('./instance', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

const getMock = api.get as jest.Mock;

describe('api:mentors', () => {
  beforeEach(() => {
    getMock.mockReturnValue({
      data: [],
    });
  });

  it('should call post with props', () => {
    fetchMentors();
    expect(getMock).toHaveBeenCalledWith('undefined/mentors');
  });
});
