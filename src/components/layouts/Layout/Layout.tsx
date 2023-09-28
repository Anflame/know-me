import React, { FC, ReactNode } from 'react';
import { StyledLayout, StyledMain } from './styles';
import { Header } from '../Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain component="main">{children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;
