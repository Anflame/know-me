import type { NextApiRequest, NextApiResponse } from 'next';
import { delay } from '@/server/utils/delay';
import { getMentors } from '@/server/services/mentors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await delay(500);

  if (req.method === 'GET') {
    const projects = await getMentors();

    return res.status(200).json(projects);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
