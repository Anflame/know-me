import { IsSignUp } from '@/types';

export const getIsSignUp = (type: IsSignUp) => type !== IsSignUp.Login;
