/* eslint-disable react/no-unescaped-entities */

import { useEffect } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import SEO from '../next-seo.config';

const BaseLayout = ({ children }) => {
  useEffect(() => {
    window.tarteaucitronForceLanguage = 'bg';
    window.tarteaucitron.init({
      privacyUrl: '/privacy', /* Privacy policy url */

      hashtag: '#tarteaucitron', /* Open the panel with this hashtag */
      cookieName: 'tarteaucitron', /* Cookie name */

      orientation: 'bottom', /* Banner position (top - bottom) */
      showAlertSmall: false, /* Show the small banner on bottom right */
      cookieslist: false, /* Show the cookie list */

      adblocker: false, /* Show a Warning if an adblocker is detected */
      AcceptAllCta: true, /* Show the accept all button when highPrivacy on */
      highPrivacy: false, /* Disable auto consent */
      handleBrowserDNTRequest: false, /* If Do Not Track == 1, disallow all */

      removeCredit: true, /* Remove credit link */
      moreInfoLink: true, /* Show more info link */
      useExternalCss: false, /* If false, the tarteaucitron.css file will be loaded */

      readmoreLink: '/privacy', /* Change the default readmore link */
    });

    window.tarteaucitron.user.gtagUa = 'UA-137181155-2';
    (window.tarteaucitron.job = window.tarteaucitron.job || []).push('gtag');
  });

  return (
    <div>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/css/sb-admin-2.min.css" />
        <link rel="stylesheet" type="text/css" href="/static/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
        <script type="text/javascript" src="/static/tarteaucitronjs/tarteaucitron.js" />
      </Head>

      <div id="wrapper">
        <Navigation />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
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
