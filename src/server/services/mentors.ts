import { mentors } from '@/server/mocks';

export const getMentor = async (id: number) => mentors.find((item) => item.id === id);
export const getMentors = async () => mentors;
export const getMentorsByDirection = async (direction: string) =>
  mentors.filter((item) => item.group === direction);
