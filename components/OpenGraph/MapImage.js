import React from 'react';
import dynamic from 'next/dynamic';
import GeoDataset from '../../db/GeoDataset.json';

const CasesMap = dynamic(() => import('../CasesMap/CasesMap'), { ssr: false });

const MapImage = () => (
  <div className="map-container align-content-center">
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossOrigin=""
    />
    <CasesMap data={GeoDataset} zoom={7.5} zoomSnap={0.5} zoomControl={false} />
    <style jsx global>
      {`
        body {
          margin: 0;
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
