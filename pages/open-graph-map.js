import ErrorPage from 'next/error';
import dynamic from 'next/dynamic';

const MapImage = dynamic(() => import('../components/OpenGraph/MapImage'), { ssr: false });

const OpenGraphMap = () => {
  const shouldRender = process.env.BUILD_ID === 'development';

  return shouldRender ? <MapImage /> : <ErrorPage statusCode={404} />;
};

export default OpenGraphMap;
