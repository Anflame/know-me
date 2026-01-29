import type { NextApiRequest, NextApiResponse } from 'next';
import { checkAuth } from '@/server/services/auth';
import { createToken } from '@/server/utils/simpleHash';
import { IAuthConfig } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body as Omit<IAuthConfig, 'isSignUp'>;

  if (req.method === 'POST') {
    if (!email || !password) return res.status(401).json({ message: 'Неверный логин или пароль' });

    const auth = checkAuth(req.body, 'Login');

    if (auth) {
      return res.status(200).json({
        accessToken: createToken(email, password),
        refreshToken: createToken(email, password, true),
      });
    }

    return res.status(401).json({ message: 'Неверный логин или пароль' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
