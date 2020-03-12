import Link from 'next/link';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationLink = (props) => {
  const {
    title,
    href,
    icon,
    active,
  } = props;

  return (
    <li className={`nav-item ${active ? 'active' : ''}`}>
      <Nav.Link href={href}>
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

const Navigation = () => (
  <Navbar as="ul" bg="gradient-primary" variant="dark" bsPrefix="sidebar" className="navbar-nav accordion">
    <Link href="/">
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

    <NavigationLink title="Начало" href="/" icon="fas fa-fw fa-tachometer-alt" active />
  </Navbar>
);

export default Navigation;
