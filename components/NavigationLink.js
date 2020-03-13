import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const assetPrefix = process.env.ASSET_PREFIX;

const NavigationLink = (props) => {
  const {
    title,
    href,
    icon,
    active,
  } = props;

  return (
    <li className={`nav-item ${active ? 'active' : ''}`}>
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
  active: PropTypes.bool.isRequired,
};

export default NavigationLink;
