import { getMentor, getMentorsByDirection, getMentorsWithParams } from '@/server/services/mentors';
import { FilterParams } from '@/server/types/mentors';

describe('services: mentors', () => {
  it('should return definite mentor', async () => {
    const id = 1;
    expect(await getMentor(id)).toEqual(
      expect.objectContaining({
        id,
      })
    );
  });

  it('should return direction mentor array', async () => {
    const direction = 'programming';
    const result = await getMentorsByDirection(direction);

    const evertWithExpectDirection = result.every((item) => item.direction === direction);

    expect(evertWithExpectDirection).toBe(true);
  });

  it('should return empty array', async () => {
    expect(await getMentorsWithParams()).toEqual([]);
    expect(await getMentorsWithParams({} as FilterParams)).toEqual([]);
  });

  it('should return search value', async () => {
    const result = await getMentorsWithParams({ search: 'бух' } as FilterParams);

    expect(result.length).toBeGreaterThan(0);
  });

  it('find by direction', async () => {
    const result = await getMentorsWithParams({ search: 'programming' } as FilterParams);

    expect(result.some((m) => m.direction === 'programming')).toBe(true);
  });

  it('find by rating', async () => {
    const result = await getMentorsWithParams({ rating: '5' } as FilterParams);

    expect(result.every((m) => m.user.rating === '5')).toBe(true);
  });

  it('find some field', async () => {
    const result = await getMentorsWithParams({ rating: '5' } as FilterParams);

    expect(result.every((m) => m.user.rating === '5')).toBe(true);
  });
});
