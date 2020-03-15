import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

const assetPrefix = process.env.ASSET_PREFIX;

const NavigationLink = (props) => {
  const {
    title,
    href,
    icon,
  } = props;

  const router = useRouter();

  return (
    <li className={`nav-item ${router.pathname === href ? 'active' : ''}`}>
      <Nav.Link href={`${assetPrefix}${href}`}>
        <i className={icon} />
        <span>{title}</span>
      </Nav.Link>
    </li>
  );
};

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavigationLink;
