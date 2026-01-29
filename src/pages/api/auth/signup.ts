import type { NextApiRequest, NextApiResponse } from 'next';
import { delay } from '@/server/utils/delay';
import { checkAuth } from '@/server/services/auth';
import { createToken } from '@/server/utils/simpleHash';
import { IAuthConfig } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await delay(500);

  const { password, name } = req.body as Omit<IAuthConfig, 'isSignUp'>;

  if (req.method === 'POST') {
    const auth = checkAuth(req.body, 'SignUp');

    if (auth) {
      return res.status(200).json({
        accessToken: createToken(name as string, password),
        refreshToken: createToken(name as string, password, true),
      });
    }

    return res.status(401).json({ message: 'Введены не все данные' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
