import React from 'react';
import CasesMap from '../CasesMap/CasesMap';
import GeoDataset from '../../db/GeoDataset.json';

const MapImage = () => (
  <div className="map-container align-content-center">
    <CasesMap data={GeoDataset} />
    <style jsx global>
      {`
        svg {
          width: 100%;
          height: 680px;
        }

        .map-container {
          width: 1200px;
          height: 630px;
        }
      `}
    </style>
  </div>
);

export default MapImage;
