import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const CasesMap = dynamic(() => import('../CasesMap/CasesMap'), { ssr: false });

const MapImage = ({ geoData }) => (
  <div className="map-container align-content-center">
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossOrigin=""
    />
    <CasesMap data={geoData} zoom={7.5} zoomSnap={0.5} zoomControl={false} />
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

MapImage.propTypes = {
  geoData: PropTypes.object.isRequired,
};

export default MapImage;
