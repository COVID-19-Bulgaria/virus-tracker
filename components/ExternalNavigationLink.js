import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExternalLink from './ExternalLink';

const ExternalNavigationLink = (props) => {
  const {
    title,
    href,
    icon,
  } = props;

  return (
    <li className="nav-item">
      <ExternalLink href={href} title={title} className="nav-link">
        <FontAwesomeIcon icon={icon} size="xs" />
        <span>
          &nbsp;
          {title}
        </span>
      </ExternalLink>
    </li>
  );
};

ExternalNavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default ExternalNavigationLink;
