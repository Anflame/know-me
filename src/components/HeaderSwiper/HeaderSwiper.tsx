import { FC, ReactNode, useRef } from 'react';
import { Stack, IconButton, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Autoplay, Navigation } from 'swiper/modules';
import type { SwiperOptions, PaginationOptions } from 'swiper/types';

import CustomSwiper from '../Swiper/CustomSwiper';
import { StyledSwiperContainer } from './styles';

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

  const { palette } = useTheme();

  const refs = {
    next,
    prev,
    pagination: paginationRef,
  };

  return (
    <StyledSwiperContainer>
      <Stack
        flexDirection="row"
        style={{
          position: 'absolute',
          top: 'calc(50% - 50px)',
          height: '50px',
          width: '100%',
          justifyContent: 'space-between',
          zIndex: 311,
        }}
      >
        <IconButton type="button" ref={prev}>
          <ArrowBackIosNewIcon
            style={{ height: 'inherit', width: '100%', fill: palette.grey[500] }}
          />
        </IconButton>
        <IconButton type="button" ref={next}>
          <ArrowForwardIosIcon
            style={{ height: 'inherit', width: '100%', fill: palette.grey[500] }}
          />
        </IconButton>
      </Stack>
      <CustomSwiper {...config} refs={refs}>
        {children}
      </CustomSwiper>
    </StyledSwiperContainer>
  );
};

export default HeaderSwiper;
