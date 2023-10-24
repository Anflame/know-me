export interface IAuthConfig {
  email: string;
  password: string;
  name?: string;
  isSignUp: boolean;
}

export enum IsSignUp {
  SignUp = 'signUp',
  Login = 'login',
}

export const { SignUp, Login } = IsSignUp;

export interface ITOkens {
  access_token: string;
  refresh_token: string;
}
