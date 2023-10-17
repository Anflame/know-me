import Image, { ImageProps } from 'next/image';
import { useTheme, Skeleton, alpha } from '@mui/material';

import { FC, useState } from 'react';

interface IImageProps extends ImageProps {}

const CustomImage: FC<IImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { palette } = useTheme();

  return (
    <>
      <Image
        {...props}
        onLoadingComplete={() => setIsLoaded(true)}
        style={{ borderRadius: 'inherit', opacity: !isLoaded ? 0 : 1 }}
      />
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          color="secondary"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 'inherit',
            background: alpha(palette.secondary.main, 0.4),
            top: 0,
            left: 0,
          }}
        />
      )}
    </>
  );
};

export default CustomImage;
