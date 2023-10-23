export interface IAuthConfig {
  email: string;
  password: string;
  userName?: string;
  isSignUp: boolean;
}

export enum IsSignUp {
  SignUp = 'signUp',
  Login = 'login',
}

export const { SignUp, Login } = IsSignUp;
