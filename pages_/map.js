import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import LanguageChart from '../components/charts/LanguageChart';

const CasesMap = dynamic(() => import('../components/CasesMap/CasesMap'), { ssr: false });

const Map = () => {
  const { t, lang } = useTranslation();
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
        title={t('map:seo.title')}
        description={t('map:seo.description')}
        canonical={t('map:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('map:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('map:seo.title'),
          description: t('map:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=${process.env.BUILD_ID}`,
              width: 1200,
              height: 630,
              alt: t('map:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('map:page_title')}</h1>
        </div>
        <Row className="mt-3">
          <Col className="mb-4" style={{ height: '400px' }}>
            {isLoading
              ? <Spinner animation="border" variant="primary" />
              : <CasesMap data={geoData} zoom={zoom} whenReady={fixZoom} zoomSnap={0.5} />}
          </Col>
        </Row>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('map:charts.weekly_places_cases.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="weekly_places_cases" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('map:charts.rolling_biweekly_places_cases.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="rolling_biweekly_places_cases" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Map;
