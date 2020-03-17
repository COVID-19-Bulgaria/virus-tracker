import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
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

    <NavigationLink title="Начало" href="/" icon="fas fa-fw fa-tachometer-alt" />
    <NavigationLink title="Разпространение" href="/map" icon="fas fa-fw fa-map-marker-alt" />
    <NavigationLink title="Какво знаем" href="/what-we-know" icon="fas fa-fw fa-question-circle" />
    <NavigationLink title="За проекта" href="/about" icon="fas fa-fw fa-info-circle" />
  </Navbar>
);

export default Navigation;
