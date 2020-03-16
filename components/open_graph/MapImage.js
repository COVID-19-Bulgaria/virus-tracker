import React from 'react';
import CasesMap from '../CasesMap';
import RegionsDataset from '../../db/RegionsDataset.json';

const MapImage = () => (
  <div className="map-container align-content-center">
    <CasesMap data={RegionsDataset} />
    <style jsx>
      {`
        .map-container {
          width: 1200px;
          height: 630px;
        }
      `}
    </style>
  </div>
);

export default MapImage;
