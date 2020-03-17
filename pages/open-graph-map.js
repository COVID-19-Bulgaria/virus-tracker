import ErrorPage from 'next/error';
import MapImage from '../components/OpenGraph/MapImage';

const OpenGraphMap = () => {
  const shouldRender = process.env.BUILD_ID === 'development';

  return shouldRender ? <MapImage /> : <ErrorPage statusCode={404} />;
};

export default OpenGraphMap;
