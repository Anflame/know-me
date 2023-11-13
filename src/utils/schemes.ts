import { object, string } from 'yup';

export const signUpScheme = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}/g)
    .required(),
});

export const logInScheme = object().shape({
  email: string().email().required(),
  password: string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}/g),
});

export const messageScheme = object({
  newMessage: string().required(),
}).required();
