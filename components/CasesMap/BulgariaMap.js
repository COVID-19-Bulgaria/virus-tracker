import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';

const BulgariaMap = ({ children, ...rest }) => (
  <MapContainer center={[42.748, 25.492]} zoom={7} style={{ width: '100%', height: '100%' }} {...rest}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {children}
  </MapContainer>
);

BulgariaMap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BulgariaMap;
