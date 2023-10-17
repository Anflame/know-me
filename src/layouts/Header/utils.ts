import { IsSignUp } from './types';

export const getIsSignUp = (type: IsSignUp) => {
  if (type === IsSignUp.Login) return false;
  return true;
};
