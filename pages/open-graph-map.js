import ErrorPage from 'next/error';
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

const MapImage = dynamic(() => import('../components/OpenGraph/MapImage'), { ssr: false });

const OpenGraphMap = () => {
  const shouldRender = process.env.BUILD_ID === 'development';

  if (shouldRender) {
    const [isLoading, setIsLoading] = useState(true);
    const [geoData, setGeoData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const geoDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/GeoDataset.json');
          setGeoData(await geoDataset.json());
          setIsLoading(false);
        } catch (error) {
          // Empty
        }
      };

      fetchData();
    }, []);

    return !isLoading && <MapImage geoData={geoData} />;
  }

  return <ErrorPage statusCode={404} />;
};

export default OpenGraphMap;
