import { Control, FieldValues, Path } from 'react-hook-form';
import { OverridableStringUnion } from '@mui/types';
import { TextFieldPropsSizeOverrides, TextFieldPropsColorOverrides } from '@mui/material/TextField';

export type TFormTextField<T extends FieldValues> = {
  isError?: boolean;
  errorMessage?: string;
  size?: OverridableStringUnion<'small' | 'medium', TextFieldPropsSizeOverrides> | undefined;
  fullWidth?: boolean;
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    TextFieldPropsColorOverrides
  >;
  control?: Control<T>;
  name: Path<T>;
  label: string;
  handleChangeShowPassword?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
