import { NextSeo } from 'next-seo';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import CasesLineChart from '../components/CasesLineChart';

import TotalsDataset from '../db/TotalsDataset.json';
import DateCasesDataset from '../db/DateCasesDataset.json';

const Index = () => {
  const prepareChartData = (dataset) => Object.fromEntries(
    Object.entries(dataset).map((entry) => [entry[0], entry[1].cases]),
  );

  const lineChartData = [
    { name: 'Заразени', data: prepareChartData(DateCasesDataset.infected) },
    { name: 'Излекувани', data: prepareChartData(DateCasesDataset.cured) },
    { name: 'Жертви', data: prepareChartData(DateCasesDataset.fatal) },
  ];

  return (
    <BaseLayout>
      <NextSeo
        openGraph={{
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=${process.env.BUILD_ID}`,
              width: 1200,
              height: 630,
              alt: 'Хронология на заразата',
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">Начало</h1>
        </div>
        <CasesOverview
          infected={TotalsDataset.infected - TotalsDataset.cured - TotalsDataset.fatal}
          cured={TotalsDataset.cured}
          fatal={TotalsDataset.fatal}
        />
        <Row>
          <Col>
            <Card className="shadow mb-4">
              <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Хронология на заразата</h6>
              </Card.Header>
              <Card.Body>
                <CasesLineChart data={lineChartData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Index;
