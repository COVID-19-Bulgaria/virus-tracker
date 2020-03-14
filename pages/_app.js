/* eslint-disable react/prop-types */

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const CustomApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default CustomApp;
