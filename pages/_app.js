/* eslint-disable react/prop-types */

import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Favicon from '../components/Favicon';
import '../css/sb-admin-2.css';
import '../css/style.css';

config.autoAddCss = false;

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <style>{dom.css()}</style>
    </Head>
    <Favicon />
    <Component {...pageProps} />
  </>
);

export default CustomApp;
