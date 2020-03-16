import { NextSeo } from 'next-seo';
import { Container, Row, Col } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CasesMap from '../components/CasesMap';
import RegionsDataset from '../db/RegionsDataset.json';

const Map = () => (
  <BaseLayout>
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
        <Col lg={8}>
          <CasesMap data={RegionsDataset} />
        </Col>
      </Row>
    </Container>
  </BaseLayout>
);

export default Map;
