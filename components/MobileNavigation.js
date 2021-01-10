import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import ReactCountryFlag from 'react-country-flag';
import { useRouter } from 'next/router';
import {
  faMedkit,
  faTachometerAlt,
  faMapMarkerAlt,
  faQuestionCircle,
  faHome,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationLink from './NavigationLink';
import ExternalNavigationLink from './ExternalNavigationLink';

const MobileNavigation = () => {
  const { t, lang } = useTranslation();
  const noLang = lang === 'bg';
  const router = useRouter();

  const langPath = router.pathname.replace(/(en|bg)\/?/gi, '');

  return (
    <Navbar as="ul" variant="light" bg="white" expand="lg" className="d-lg-none">
      <Link href="/" noLang={noLang}>
        <a className="navbar-brand d-flex align-items-center justify-content-center" title="COVID-19 Bulgaria">
          <div className="sidebar-brand-icon">
            <FontAwesomeIcon icon={faMedkit} size="2x" />
          </div>
          <div className="sidebar-brand-text mx-3">
            COVID-19 BG
          </div>
        </a>
      </Link>
      <div>
        <Link href={langPath} noLang>
          <a title="Български">
            <ReactCountryFlag countryCode="BG" alt="Български" svg />
          </a>
        </Link>
        <Link href={langPath} lang="en">
          <a title="English" className="mx-3">
            <ReactCountryFlag countryCode="GB" alt="English" svg />
          </a>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="mobile-navbar-nav" />
      <Navbar.Collapse id="mobile-navbar-nav">
        <Nav className="mr-auto text-center">
          <NavigationLink title={t('common:navigation.home')} href="/" icon={faTachometerAlt} />
          <NavigationLink title={t('common:navigation.map')} href="/map" icon={faMapMarkerAlt} />
          <NavigationLink title={t('common:navigation.what-we-know')} href="/what-we-know" icon={faQuestionCircle} />
          <NavigationLink title={t('common:navigation.why-stay-home')} href="/why-stay-home" icon={faHome} />
          <NavigationLink title={t('common:navigation.about')} href="/about" icon={faInfoCircle} />

          <ExternalNavigationLink
            title={t('common:navigation.facebook')}
            href="https://www.facebook.com/groups/covidbulgaria"
            icon={faFacebook}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNavigation;
