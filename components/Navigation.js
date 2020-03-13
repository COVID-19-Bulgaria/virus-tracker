import { Navbar } from 'react-bootstrap';
import Link from './Link';
import NavigationLink from './NavigationLink';

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
