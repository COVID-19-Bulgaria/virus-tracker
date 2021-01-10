import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import { CookieConsent } from './CookieConsent';
import MobileNavigation from './MobileNavigation';

const BaseLayout = ({ children }) => (
  <div>
    <CookieConsent />
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Nunito:400,700,800&display=swap" />
      <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css?family=Nunito:400,700,800" />
      <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,700,800" />
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

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
