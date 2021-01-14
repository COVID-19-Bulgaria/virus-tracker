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

  const langPath = router.asPath.replace(/(en|bg)\/?/gi, '');

  return (
    <Navbar as="ul" variant="light" bg="white" expand="lg" className="d-lg-none">
      <Link href="/" noLang={noLang} prefetch={false}>
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
        <Link href={langPath} noLang prefetch={false}>
          <a title="Български">
            <ReactCountryFlag countryCode="BG" alt="Български" svg />
          </a>
        </Link>
        <Link href={langPath} lang="en" prefetch={false}>
          <a title="English" className="mx-3">
            <ReactCountryFlag countryCode="GB" alt="English" svg />
          </a>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="mobile-navbar-nav" />
      <Navbar.Collapse id="mobile-navbar-nav">
        <Nav className="mr-auto text-center">
          <NavigationLink title={t('common:navigation.home.title')} href="/" as={t('common:navigation.home.as')} icon={faTachometerAlt} prefetch={false} />
          <NavigationLink title={t('common:navigation.map.title')} href="/map" as={t('common:navigation.map.as')} icon={faMapMarkerAlt} prefetch={false} />
          <NavigationLink title={t('common:navigation.what-we-know.title')} href="/what-we-know" as={t('common:navigation.what-we-know.as')} icon={faQuestionCircle} prefetch={false} />
          <NavigationLink title={t('common:navigation.why-stay-home.title')} href="/why-stay-home" as={t('common:navigation.why-stay-home.as')} icon={faHome} prefetch={false} />
          <NavigationLink title={t('common:navigation.about.title')} href="/about" as={t('common:navigation.about.as')} icon={faInfoCircle} prefetch={false} />

          <ExternalNavigationLink
            title={t('common:navigation.facebook.title')}
            href="https://www.facebook.com/groups/covidbulgaria"
            icon={faFacebook}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNavigation;
