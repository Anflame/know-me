import type { NextApiRequest, NextApiResponse } from 'next';
import { getMentors, getMentorsWithParams } from '@/server/services/mentors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const mentors = await getMentors();

    return res.status(200).json(mentors);
  }

  if (req.method === 'POST') {
    const mentors = await getMentorsWithParams(JSON.parse(req.body));

    return res.status(200).json(mentors);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
