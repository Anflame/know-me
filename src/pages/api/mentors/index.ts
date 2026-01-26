import type { NextApiRequest, NextApiResponse } from 'next';
import { getMentors, getMentorsWithParams } from '@/server/services/mentors';
import { FilterParams } from '@/server/types/mentors';
import { isEmptyObject } from '@/utils/object';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!isEmptyObject(req.query)) {
    const mentors = await getMentorsWithParams(req.query as FilterParams);

    return res.status(200).json(mentors);
  }

  const mentors = await getMentors();

  return res.status(200).json(mentors);
}
