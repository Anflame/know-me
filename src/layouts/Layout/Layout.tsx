import React, { FC, ReactNode } from 'react';

import { Footer } from '@/layouts/Footer';
import { Header } from '../Header';
import { StyledLayout, StyledMain } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <StyledLayout as="main">
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledLayout>
);

export default Layout;
