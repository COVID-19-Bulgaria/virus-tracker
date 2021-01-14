import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import Navigation from './Navigation';
import Footer from './Footer';
import { CookieConsent } from './CookieConsent';
import MobileNavigation from './MobileNavigation';
import { SEO as bgSEO } from '../next-seo.config';
import { SEO as enSEO } from '../next-seo.en.config';

const BaseLayout = ({ children }) => {
  const { lang } = useTranslation();
  const SEO = lang === 'en' ? enSEO : bgSEO;

  return (
    <div>
      <DefaultSeo {...SEO} />
      <CookieConsent />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Nunito:400,700,800&display=swap" />
        <link rel="stylesheet" media="print" onLoad="this.media='all'" href="https://fonts.googleapis.com/css?family=Nunito:400,700,800&display=swap" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,700,800&display=swap" />
        </noscript>
      </Head>

      <div id="wrapper">
        <Navigation />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <MobileNavigation />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
