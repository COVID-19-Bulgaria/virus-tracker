import PropTypes from 'prop-types';
import BulgariaMap from './BulgariaMap';
import MapMarker from './MapMarker';

const CasesMap = ({ data, ...rest }) => {
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
    <BulgariaMap {...rest}>
      {
        Object.entries(data).map(([location, {
          coordinates,
          infected,
          cured,
          fatal,
          circleProps,
        }]) => (
          <MapMarker
            key={location}
            coordinates={coordinates}
            tooltip={tooltipText(location, infected, cured, fatal)}
            circleProps={circleProps}
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
