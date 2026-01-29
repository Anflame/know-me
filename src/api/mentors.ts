import { IMentorCard } from '@/types';
import api from './instance';

export const fetchMentors = async (): Promise<IMentorCard[]> => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await api.get(`${apiURL}/mentors`);

  return data;
};
