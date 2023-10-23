import { FC, useMemo, Children } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import type { PaginationOptions } from 'swiper/types';

import 'swiper/css';

import { useSwiper } from './useSwiper';
import type { IRefsSwiper } from './types';

interface ICustomSwiperProps extends SwiperProps {
  refs?: Partial<IRefsSwiper>;
  pagination?: PaginationOptions;
}

const CustomSwiper: FC<ICustomSwiperProps> = ({ children, refs = {}, pagination, ...others }) => {
  const { isInit, navigationOptions, paginationOptions } = useSwiper(refs);

  const wrappedChildren = useMemo(
    () =>
      Children.map(
        children,
        (child, index) => child && <SwiperSlide key={index}>{child}</SwiperSlide>
      ),
    [children]
  );

  return (
    <Swiper
      init={isInit}
      navigation={navigationOptions}
      pagination={{ ...pagination, ...(paginationOptions || {}) }}
      {...others}
    >
      {wrappedChildren}
    </Swiper>
  );
};

export default CustomSwiper;
