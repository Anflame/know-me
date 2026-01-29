import type { NextApiRequest, NextApiResponse } from 'next';
import { getChats } from '@/server/services/messenger';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const chats = await getChats();

    return res.status(200).json(chats);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
