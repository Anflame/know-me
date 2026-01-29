import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserImage } from '@/server/services/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const userImage = await getUserImage();

    return res.status(200).json(userImage);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
