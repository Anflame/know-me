import type { NextApiRequest, NextApiResponse } from 'next';
import { getMentor } from '@/server/services/mentors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    if (!id) return res.status(400).json({ message: 'id is not exists' });
    const mentor = await getMentor(+id);

    return res.status(200).json(mentor);
  } catch {
    return res.status(404).json({ message: 'Not found' });
  }
}
