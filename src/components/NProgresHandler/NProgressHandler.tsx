import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useTheme } from '@mui/material/styles';

const NProgressHandler: FC = () => {
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

    // const style = document.createElement('style');
    // style.id = 'nprogress-theme-style';
    // style.innerHTML = `
    //   #nprogress .bar {
    //     background: ${theme.palette.primary.dark} !important;
    //     height: 3px;
    //   }
    //   .nprogress .spinner {
    //     display: none !important;
    //   }
    // `;
    // document.head.appendChild(style);

    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
      // document.head.removeChild(style);
    };
  }, [router, theme.palette.primary.main]);

  return null;
};

export default NProgressHandler;
