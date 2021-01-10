/* eslint-disable react/prop-types */

import { DefaultSeo } from 'next-seo';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { SEO as bgSEO } from '../next-seo.config';
import { SEO as enSEO } from '../next-seo.en.config';
import Favicon from '../components/Favicon';
import '../css/sb-admin-2.css';
import '../css/style.css';

config.autoAddCss = false;

const CustomApp = ({ Component, pageProps }) => {
  const { lang } = useTranslation();
  const SEO = lang === 'bg' ? bgSEO : enSEO;

  return (
    <>
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <DefaultSeo {...SEO} />
      <Favicon />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
