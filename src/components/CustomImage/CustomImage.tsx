import { ImageProps } from 'next/image';

import { FC, useState } from 'react';
import { StyledImage, StyledSkeleton } from './styles';

interface IImageProps extends ImageProps {}

const CustomImage: FC<IImageProps> = (imageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <StyledImage isLoaded={isLoaded} {...imageProps} onLoad={() => setIsLoaded(true)} />
      {!isLoaded && <StyledSkeleton animation="wave" variant="rectangular" color="secondary" />}
    </>
  );
};

export default CustomImage;
