import { FC, ReactNode, useRef } from 'react';
import { IconButton } from '@mui/material';
import { Autoplay, Navigation } from 'swiper/modules';
import type { SwiperOptions, PaginationOptions } from 'swiper/types';

import { StyledArrowIcon, StyledNavigationWrapper, StyledSwiperContainer } from './styles';
import { CustomSwiper } from '../CustomSwiper';

interface ICustomSwiperOptions extends Omit<SwiperOptions, 'pagination'> {
  pagination?: PaginationOptions;
}

const config: ICustomSwiperOptions = {
  loop: true,
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  modules: [Autoplay, Navigation],
};

export interface IHeaderSwiperProps {
  children: ReactNode;
}

const HeaderSwiper: FC<IHeaderSwiperProps> = ({ children }) => {
  const next = useRef(null);
  const prev = useRef(null);
  const paginationRef = useRef(null);

  const refs = {
    next,
    prev,
    pagination: paginationRef,
  };

  return (
    <StyledSwiperContainer>
      <StyledNavigationWrapper>
        <IconButton type="button" ref={prev}>
          <StyledArrowIcon />
        </IconButton>
        <IconButton type="button" ref={next}>
          <StyledArrowIcon rotate={180} />
        </IconButton>
      </StyledNavigationWrapper>
      <CustomSwiper {...config} refs={refs}>
        {children}
      </CustomSwiper>
    </StyledSwiperContainer>
  );
};

export default HeaderSwiper;
