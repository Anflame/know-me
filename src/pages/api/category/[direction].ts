import type { NextApiRequest, NextApiResponse } from 'next';
import { getMentorsByDirection } from '@/server/services/mentors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { direction } = req.query;

  try {
    if (!direction) return res.status(400).json({ message: 'category is not exists' });
    const mentors = await getMentorsByDirection(direction as string);

    return res.status(200).json({ mentors, title: direction });
  } catch {
    return res.status(404).json({ message: 'Not found' });
  }
}
