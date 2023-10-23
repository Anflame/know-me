import { MutableRefObject, useEffect, useState } from 'react';

import type { IRefsSwiper } from './types';

const isRefObject = <T>(ref?: MutableRefObject<T>) => typeof ref === 'object' && ref;
const isReadyRef = <T>(ref?: MutableRefObject<T>) => (isRefObject(ref) ? ref?.current : true);

export const useSwiper = (refs: Partial<IRefsSwiper>) => {
  const { next, prev, pagination: paginationRef } = refs;

  const [isInit, setIsInit] = useState(false);

  const paginationOptions = isRefObject(paginationRef) && {
    el: paginationRef?.current,
  };

  const navigationOptions = isRefObject(next && prev) && {
    nextEl: next?.current,
    prevEl: prev?.current,
  };

  useEffect(() => {
    const isReadyPagination = isReadyRef(paginationRef);
    const isReadyNavigation = isReadyRef(next) && isReadyRef(prev);

    if (isReadyNavigation && isReadyPagination) {
      setIsInit(true);
    }
  }, [next, paginationRef, prev]);

  return {
    isInit,
    navigationOptions,
    paginationOptions,
  };
};
