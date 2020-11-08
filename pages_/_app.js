/* eslint-disable react/prop-types */

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Favicon from '../components/Favicon';

const CustomApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Favicon />
    <Component {...pageProps} />
  </>
);

export default CustomApp;
