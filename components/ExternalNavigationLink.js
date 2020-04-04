import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const ExternalNavigationLink = (props) => {
  const {
    title,
    href,
    icon,
  } = props;

  return (
    <li className="nav-item">
      <ExternalLink href={href} className="nav-link">
        <i className={icon} />
        <span>{title}</span>
      </ExternalLink>
    </li>
  );
};

ExternalNavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ExternalNavigationLink;
