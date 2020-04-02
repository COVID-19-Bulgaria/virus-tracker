import { Navbar } from 'react-bootstrap';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import ReactCountryFlag from 'react-country-flag';
import { useRouter } from 'next/router';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const { t, lang } = useTranslation();
  const noLang = lang === 'bg';
  const router = useRouter();

  const langPath = router.pathname.replace(/(en|bg)\/?/gi, '');

  return (
    <Navbar as="ul" bg="gradient-primary" variant="dark" bsPrefix="sidebar" className="navbar-nav accordion">
      <Link href="/" noLang={noLang}>
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon">
            <i className="fas fa-medkit" />
          </div>
          <div className="sidebar-brand-text mx-3">
            COVID-19 BG
          </div>
        </a>
      </Link>

      <hr className="sidebar-divider my-0" />

      <div className="text-center">
        <Link href={langPath} noLang>
          <a>
            <ReactCountryFlag countryCode="BG" svg />
          </a>
        </Link>
        &nbsp;
        <Link href={langPath} lang="en">
          <a>
            <ReactCountryFlag countryCode="GB" svg />
          </a>
        </Link>
      </div>

      <NavigationLink title={t('common:navigation.home')} href="/" icon="fas fa-fw fa-tachometer-alt" />
      <NavigationLink title={t('common:navigation.map')} href="/map" icon="fas fa-fw fa-map-marker-alt" />
      <NavigationLink title={t('common:navigation.what-we-know')} href="/what-we-know" icon="fas fa-fw fa-question-circle" />
      <NavigationLink title={t('common:navigation.why-stay-home')} href="/why-stay-home" icon="fas fa-fw fa-home" />
      <NavigationLink title={t('common:navigation.about')} href="/about" icon="fas fa-fw fa-info-circle" />
    </Navbar>
  );
};

export default Navigation;
