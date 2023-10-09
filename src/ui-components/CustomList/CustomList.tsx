import { FC, ReactNode } from 'react';
import { ListViewVariants } from '../types';
import { StyledList } from './styles';

interface ICustomList {
  children: ReactNode;
  view: keyof typeof ListViewVariants;
}

const CustomList: FC<ICustomList> = ({ children, view = 'Vertical' }) => {
  return <StyledList view={ListViewVariants[view]}>{children}</StyledList>;
};

export default CustomList;
