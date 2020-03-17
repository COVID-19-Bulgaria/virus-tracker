import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Marker } from 'react-simple-maps';

const MapMarker = (props) => {
  const {
    title,
    coordinates,
    tooltip,
    circleProps,
    textProps,
  } = props;

  const markerContents = (
    <g>
      <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} {...circleProps} />
      <text textAnchor="right" x={10} y={5} className="map-marker-title" {...textProps}>
        {title}
      </text>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .map-marker-title {
              font-size: 17px;
            }
          }

          .map-marker-title {
            fill: '#5d5a6d',
            font-family: 'system-ui'
          }
        `}
      </style>
    </g>
  );

  return (
    <Marker key={title} coordinates={coordinates}>
      {tooltip
        ? (
          <OverlayTrigger overlay={(<Tooltip>{tooltip}</Tooltip>)}>
            {markerContents}
          </OverlayTrigger>
        ) : markerContents}
    </Marker>
  );
};

MapMarker.propTypes = {
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  tooltip: PropTypes.object,
  circleProps: PropTypes.object,
  textProps: PropTypes.object,
};

MapMarker.defaultProps = {
  tooltip: null,
  circleProps: {},
  textProps: {},
};

export default MapMarker;
