import PropTypes from 'prop-types';
import BulgariaMap from './BulgariaMap';
import MapMarker from './MapMarker';
import MapCustomizations from './MapCustomizations.json';

const CasesMap = ({ data, ...rest }) => {
  const tooltipText = (location, infected) => (
    <>
      <strong>{location}</strong>
      <br />
      {`Заразени: ${infected}`}
      <br />
    </>
  );

  return (
    <BulgariaMap {...rest}>
      {
        Object.entries(data).map(([location, {
          coordinates,
          infected,
        }]) => {
          let circleProps = {};

          if (MapCustomizations[location] && MapCustomizations[location].circleProps) {
            circleProps = MapCustomizations[location].circleProps;
          }

          return (
            <MapMarker
              key={location}
              coordinates={coordinates}
              tooltip={tooltipText(location, infected)}
              circleProps={circleProps}
            />
          );
        })
      }
    </BulgariaMap>
  );
};

CasesMap.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CasesMap;
