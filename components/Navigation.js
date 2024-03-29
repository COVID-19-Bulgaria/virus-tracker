import { Navbar } from 'react-bootstrap';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import ReactCountryFlag from 'react-country-flag';
import {
  faMedkit,
  faTachometerAlt,
  faMapMarkerAlt,
  faQuestionCircle,
  faHome,
  faInfoCircle,
  faFlask,
  faIdCard,
  faChartLine,
  faSyringe,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const { t, lang } = useTranslation();
  const noLang = lang === 'bg';

  return (
    <Navbar as="ul" bg="gradient-primary" variant="dark" bsPrefix="sidebar" className="navbar-nav accordion d-none d-lg-flex">
      <Link href="/" noLang={noLang} prefetch={false}>
        <a className="sidebar-brand d-flex align-items-center justify-content-center" title="COVID-19 Bulgaria">
          <div className="sidebar-brand-icon">
            <FontAwesomeIcon icon={faMedkit} size="2x" />
          </div>
          <div className="sidebar-brand-text mx-3">
            COVID-19 BG
          </div>
        </a>
      </Link>

      <hr className="sidebar-divider my-0" />

      <div className="text-center">
        <Link href="/" noLang prefetch={false}>
          <a title="Български">
            <ReactCountryFlag countryCode="BG" alt="Български" svg />
          </a>
        </Link>
        &nbsp;
        <Link href="/" lang="en" prefetch={false}>
          <a title="English">
            <ReactCountryFlag countryCode="GB" alt="English" svg />
          </a>
        </Link>
      </div>

      <NavigationLink title={t('common:navigation.home.title')} href="/" as={t('common:navigation.home.as')} icon={faTachometerAlt} prefetch={false} />
      <NavigationLink title={t('common:navigation.tests.title')} href="/tests" as={t('common:navigation.tests.as')} icon={faFlask} prefetch={false} />
      <NavigationLink title={t('common:navigation.demographics.title')} href="/demographics" as={t('common:navigation.demographics.as')} icon={faIdCard} prefetch={false} />
      <NavigationLink title={t('common:navigation.map.title')} href="/map" as={t('common:navigation.map.as')} icon={faMapMarkerAlt} prefetch={false} />
      <NavigationLink title={t('common:navigation.vaccination.title')} href="/vaccination" as={t('common:navigation.vaccination.as')} icon={faSyringe} prefetch={false} />
      <NavigationLink title={t('common:navigation.forecast.title')} href="/forecast" as={t('common:navigation.forecast.as')} icon={faChartLine} prefetch={false} />
      <NavigationLink title={t('common:navigation.what-we-know.title')} href="/what-we-know" as={t('common:navigation.what-we-know.as')} icon={faQuestionCircle} prefetch={false} />
      <NavigationLink title={t('common:navigation.why-stay-home.title')} href="/why-stay-home" as={t('common:navigation.why-stay-home.as')} icon={faHome} prefetch={false} />
      <NavigationLink title={t('common:navigation.about.title')} href="/about" as={t('common:navigation.about.as')} icon={faInfoCircle} prefetch={false} />
    </Navbar>
  );
};

export default Navigation;
