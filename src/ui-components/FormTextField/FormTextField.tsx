import { Controller, FieldValues } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

import type { IFormTextField } from '../types';

const FormTextField = <T extends FieldValues>({
  control,
  name,
  isError,
  fullWidth,
  handleChangeShowPassword,
  ...args
}: IFormTextField<T> & TextFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange } }) => (
      <TextField error={isError} onChange={onChange} value={value} {...args} />
    )}
  />
);

export default FormTextField;
