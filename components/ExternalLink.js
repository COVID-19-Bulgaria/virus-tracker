import PropTypes from 'prop-types';

const ExternalLink = ({ href, className, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ExternalLink.defaultProps = {
  className: '',
};

export default ExternalLink;
