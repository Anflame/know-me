import { css, Global } from '@emotion/react';

const GlobalAnimations = () => (
  <Global
    styles={css`
      @keyframes slideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideDown {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  />
);

export default GlobalAnimations;
