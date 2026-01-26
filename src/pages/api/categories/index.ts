import type { NextApiRequest, NextApiResponse } from 'next';
import { delay } from '@/server/utils/delay';
import { getCategories } from '@/server/services/categories';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await delay(500);

  if (req.method === 'GET') {
    const categories = await getCategories();

    return res.status(200).json(categories);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
