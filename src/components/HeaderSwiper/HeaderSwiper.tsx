import { FC, ReactNode, useRef, useMemo } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions, PaginationOptions } from 'swiper/types';

import { CustomSwiper } from '../CustomSwiper';
import {
  StyledArrowIcon,
  StyledNavigationWrapper,
  StyledPagination,
  StyledSwiperContainer,
} from './styles';

interface ICustomSwiperOptions extends Omit<SwiperOptions, 'pagination'> {
  pagination?: PaginationOptions;
}

export interface IHeaderSwiperProps {
  children: ReactNode;
}

const HeaderSwiper: FC<IHeaderSwiperProps> = ({ children }) => {
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');

  const getSlidesPerView = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 3;
    if (isDesktop) return 5;
    return 'auto';
  }, [isDesktop, isMobile, isTablet]);

  const next = useRef(null);
  const prev = useRef(null);
  const paginationRef = useRef(null);

  const config = useMemo<ICustomSwiperOptions>(
    () => ({
      loop: true,
      autoplay: true,
      slidesPerView: getSlidesPerView,
      spaceBetween: 10,
      pagination: {
        clickable: false,
      },
      modules: [Autoplay, Navigation, Pagination],
    }),
    [getSlidesPerView]
  );

  const refs = {
    next,
    prev,
    pagination: paginationRef,
  };

  return (
    <StyledSwiperContainer>
      <StyledPagination ref={paginationRef} />
      {isDesktop && (
        <StyledNavigationWrapper>
          <IconButton type="button" ref={prev}>
            <StyledArrowIcon />
          </IconButton>
          <IconButton type="button" ref={next}>
            <StyledArrowIcon rotate={180} />
          </IconButton>
        </StyledNavigationWrapper>
      )}
      <CustomSwiper {...config} refs={refs}>
        {children}
      </CustomSwiper>
    </StyledSwiperContainer>
  );
};

export default HeaderSwiper;
