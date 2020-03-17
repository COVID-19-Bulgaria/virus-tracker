import React from 'react';
import PropTypes from 'prop-types';
import BulgariaMap from './BulgariaMap';
import MapMarker from './MapMarker';

const CasesMap = ({ data }) => {
  const tooltipText = (location, infected, cured, fatal) => (
    <>
      <strong>{location}</strong>
      <br />
      {`Заразени: ${infected}`}
      <br />
      {`Излекувани: ${cured}`}
      <br />
      {`Жертви: ${fatal}`}
      <br />
    </>
  );

  return (
    <BulgariaMap>
      {
        Object.entries(data).map(([location, {
          coordinates,
          infected,
          cured,
          fatal,
          circleProps,
          textProps,
        }]) => (
          <MapMarker
            key={location}
            title={location}
            coordinates={coordinates}
            tooltip={tooltipText(location, infected, cured, fatal)}
            circleProps={circleProps}
            textProps={textProps}
          />
        ))
      }
    </BulgariaMap>
  );
};

CasesMap.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CasesMap;
