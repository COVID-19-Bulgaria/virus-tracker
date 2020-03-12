import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';

const BaseLayout = ({ children }) => (
  <>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/css/sb-admin-2.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/fontawesome-free/css/all.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
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
  </>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
