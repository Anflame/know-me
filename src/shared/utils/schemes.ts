import { object, string } from 'yup';

export const signUpScheme = object().shape({
  userName: string().required(),
  email: string().email().required(),
  password: string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}/g)
    .required(),
});

export const logInScheme = object().shape({
  email: string().email().required(),
  password: string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}/g)
    .required(),
});
