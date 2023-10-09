import { Control, FieldValues, Path } from 'react-hook-form';

export interface IFormTextField<T extends FieldValues> {
  isError?: boolean;
  errorMessage?: string;
  control?: Control<T>;
  name: Path<T>;
  handleChangeShowPassword?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export enum ListViewVariants {
  Vertical = 'vertical',
  Grid = 'grid',
}
