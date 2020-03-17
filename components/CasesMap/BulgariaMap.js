import React from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json';

const BulgariaMap = ({ children }) => (
  <ComposableMap
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
      rotate: [-25.4, -42.6],
      scale: 10000,
    }}
    width={810}
  >
    <Geographies geography={geoUrl}>
      {({ geographies }) => geographies
        .filter((item) => item.properties.NAME === 'Bulgaria')
        .map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#EAEAEC"
            stroke="#D6D6DA"
          />
        ))}
    </Geographies>
    {children}
  </ComposableMap>
);

BulgariaMap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BulgariaMap;
