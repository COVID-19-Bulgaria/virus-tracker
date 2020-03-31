import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';

const CasesMap = dynamic(() => import('../components/CasesMap/CasesMap'), { ssr: false });

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [geoData, setGeoData] = useState({});
  const [zoom, setZoom] = useState(7);

  const fixZoom = () => {
    if (document.documentElement.clientWidth <= 768) {
      setZoom(6);
    }
  };

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

  return (
    <BaseLayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <NextSeo
        title="Карта на разпространение"
        description="Карта на разпространението на коронавируса по области"
        openGraph={{
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=${process.env.BUILD_ID}`,
              width: 1200,
              height: 630,
              alt: 'Разпространение на коронавируса по области',
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">Карта на разпространение</h1>
        </div>
        <Row className="mt-3">
          <Col style={{ height: '400px' }}>
            {isLoading
              ? <Spinner animation="border" variant="primary" />
              : <CasesMap data={geoData} zoom={zoom} whenReady={fixZoom} zoomSnap={0.5} />};
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Map;
