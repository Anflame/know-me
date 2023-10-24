import { Controller, FieldValues } from 'react-hook-form';
import { TextField, TextFieldProps, Alert } from '@mui/material';

import type { IFormTextField } from '../types';

const FormTextField = <T extends FieldValues>({
  control,
  name,
  isError,
  fullWidth,
  handleChangeShowPassword,
  errorMessage,
  ...args
}: IFormTextField<T> & TextFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange } }) => (
      <>
        <TextField error={isError} onChange={onChange} value={value} {...args} />
        {isError && (
          <Alert
            severity="error"
            style={{
              background: 'transparent',
              color: 'red',
              padding: 0,
            }}
          >
            {errorMessage}
          </Alert>
        )}
      </>
    )}
  />
);

export default FormTextField;
