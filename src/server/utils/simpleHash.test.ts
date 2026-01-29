import { createToken } from '@/server/utils/simpleHash';

describe('simpleHash', () => {
  const user = 'aab';
  const email = 'aab@mail.ru';
  it('should return hash for access token', () => {
    const payload = `${user}:${email}:${Date.now()}`;
    expect(createToken(user, email)).toEqual(btoa(payload));
  });

  it('should return hash for refresh token', () => {
    const payload = `${user}:${email}:${Date.now()}:refresh`;
    expect(createToken(user, email, true)).toEqual(btoa(payload));
  });
});
