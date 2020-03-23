import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';

const BulgariaMap = ({ children, ...rest }) => (
  <Map center={[42.748, 25.492]} zoom={7} style={{ width: '100%', height: '100%' }} {...rest}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {children}
  </Map>
);

BulgariaMap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BulgariaMap;
