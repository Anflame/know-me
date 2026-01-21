import React from 'react';
import { Typography } from '@mui/material';
import { StyledFooter, StyledContent, StyledContainer } from './styles';

const Footer = () => (
  <StyledFooter as="footer">
    <StyledContainer>
      <StyledContent alignSelf="flex-end" justifySelf="flex-end">
        <Typography>© Sidorov Denis. 2026. All right reserved</Typography>
        <Typography>phone: +79603622662</Typography>
        <Typography>telegram: @anflame</Typography>
      </StyledContent>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;
