/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Favicon from '../components/Favicon';

const CustomApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // if (window.location.hostname === 'coronavirus-bulgaria.org') {
    const currentPath = `?u=${encodeURIComponent(window.location.pathname)}`;
    const referrer = document.referrer ? `&r=${encodeURIComponent(document.referrer)}` : '';
    const analyticsPixel = new Image(1, 1);
    analyticsPixel.src = `http://stats.coronavirus-bulgaria.org/stats.gif${currentPath}${referrer}`;
    // }
  }, [Component]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Favicon />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
