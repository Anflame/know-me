import { MutableRefObject } from 'react';

export interface IRefsSwiper {
  next: MutableRefObject<HTMLButtonElement | null>;
  prev: MutableRefObject<HTMLButtonElement | null>;
  pagination: MutableRefObject<HTMLElement | null>;
}
