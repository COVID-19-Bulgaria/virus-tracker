import PropTypes from 'prop-types';
import { CircleMarker, Tooltip } from 'react-leaflet';

const MapMarker = (props) => {
  const {
    coordinates,
    tooltip,
    circleProps,
  } = props;

  return (
    <CircleMarker center={coordinates} color="red" radius={5} {...circleProps}>
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </CircleMarker>
  );
};

MapMarker.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  tooltip: PropTypes.object,
  circleProps: PropTypes.object,
};

MapMarker.defaultProps = {
  tooltip: null,
  circleProps: {},
};

export default MapMarker;
