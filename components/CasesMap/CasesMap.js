import PropTypes from 'prop-types';
import { useState } from 'react';
import BulgariaMap from './BulgariaMap';
import Legend from './Legend';
import MapRegions from './MapRegions';
import RegionsGeoJSON from './regions_geojson.json';
import RegionsNameMappingJSON from './regions_name_mapping.json';

const CasesMap = ({ data, ...rest }) => {
  const [map, setMap] = useState(null);

  return (
    <BulgariaMap whenCreated={setMap} {...rest}>
      <Legend map={map} />
      <MapRegions
        geoJson={RegionsGeoJSON}
        regionsNameMapping={RegionsNameMappingJSON}
        regionsDataset={data}
      />
    </BulgariaMap>
  );
};

CasesMap.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CasesMap;
