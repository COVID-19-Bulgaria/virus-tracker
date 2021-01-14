import PropTypes from 'prop-types';
import Link from 'next-translate/Link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationLink = (props) => {
  const {
    title,
    href,
    as,
    icon,
    prefetch,
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
      <Link href={href} as={as} noLang={noLang} prefetch={prefetch}>
        <a className="nav-link" title={title} {...rest}>
          <FontAwesomeIcon icon={icon} fixedWidth size="xs" />
          <span>
            &nbsp;
            {title}
          </span>
        </a>
      </Link>
    </li>
  );
};

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  prefetch: PropTypes.bool,
};

NavigationLink.defaultProps = {
  prefetch: true,
};

export default NavigationLink;
