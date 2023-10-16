import { FC, ReactNode } from 'react';
import { ListProps } from '@mui/material';
import { ListViewVariants } from '../types';
import { StyledList } from './styles';

interface ICustomList extends ListProps {
  children: ReactNode;
  view: keyof typeof ListViewVariants;
}

const CustomList: FC<ICustomList> = ({ children, view = 'Vertical', ...other }) => (
  <StyledList view={ListViewVariants[view]} {...other}>
    {children}
  </StyledList>
);

export default CustomList;
