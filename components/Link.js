import PropTypes from 'prop-types';
import NextJsLink from 'next/link';

const assetPrefix = process.env.ASSET_PREFIX;

const Link = ({ href, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NextJsLink href={href} as={`${assetPrefix}${href}`} {...rest} />
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
