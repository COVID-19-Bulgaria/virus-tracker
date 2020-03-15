import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MapRegion = (props) => {
  const {
    title,
    infected,
    cured,
    fatal,
    warning,
    danger,
  } = props;

  let additionalClasses = warning ? 'warning' : '';
  additionalClasses = danger ? 'danger' : additionalClasses;

  if (additionalClasses === '' && (infected + fatal) > 0) {
    additionalClasses = 'warning';
  }

  return (
    <>
      <OverlayTrigger
        overlay={(
          <Tooltip>
            <strong>{title}</strong>
            <br />
            {`Заразени: ${infected}`}
            <br />
            {`Излекувани: ${cured}`}
            <br />
            {`Жертви: ${fatal}`}
            <br />
          </Tooltip>
        )}
      >
        <path className={`map-region ${additionalClasses}`} {...props} />
      </OverlayTrigger>

      <style jsx>
        {`
          .map-region {
            fill: #858796;
            stroke: #ffffff;
            stroke-width: 0.05em;
          }

          .map-region:hover {
            fill-opacity: 0.5;
          }

          .warning {
            fill: #f6c23e;
          }

          .danger {
            fill: #e74a3b;
          }
        `}
      </style>
    </>
  );
};

MapRegion.propTypes = {
  title: PropTypes.string.isRequired,
  infected: PropTypes.number.isRequired,
  cured: PropTypes.number.isRequired,
  fatal: PropTypes.number.isRequired,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
};

MapRegion.defaultProps = {
  warning: false,
  danger: false,
};

export default MapRegion;
