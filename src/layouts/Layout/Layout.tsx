import React, { FC, ReactNode } from 'react';

import { Header } from '../Header';
import { StyledLayout, StyledMain } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain as="main">{children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;
