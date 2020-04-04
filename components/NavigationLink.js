import PropTypes from 'prop-types';
import Link from 'next-translate/Link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const NavigationLink = (props) => {
  const {
    title,
    href,
    icon,
    ...rest
  } = props;

  const router = useRouter();
  const { lang } = useTranslation();
  const noLang = lang === 'bg';
  let isActivePage;
  if (noLang) {
    isActivePage = router.pathname === href;
  } else {
    isActivePage = router.pathname === `/${lang}${href}`;
  }

  return (
    <li className={`nav-item ${isActivePage ? 'active' : ''}`}>
      <Link href={href} noLang={noLang}>
        <a className="nav-link" {...rest}>
          <i className={icon} />
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );
};

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavigationLink;
