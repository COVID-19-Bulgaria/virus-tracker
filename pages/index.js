/* eslint-disable react/jsx-wrap-multilines */
import { NextSeo } from 'next-seo';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Moment from 'react-moment';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import CasesLineChart from '../components/CasesLineChart';
import CasesBarChart from '../components/CasesBarChart';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalsData, setTotalsData] = useState({});
  const [dateCasesData, setDateCasesData] = useState({});
  const [dateDiffCasesData, setDateDiffCasesData] = useState({});

  const prepareChartData = (dataset) => {
    if (dataset == null) return [];

    return Object.fromEntries(Object.entries(dataset).map(entry => [entry[0], entry[1].cases]));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalsDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json');
        setTotalsData(await totalsDataset.json());

        const dateCasesDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json');
        setDateCasesData(await dateCasesDataset.json());

        const dateDiffCasesDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json');
        setDateDiffCasesData(await dateDiffCasesDataset.json());

        setIsLoading(false);
      } catch (error) {
        // Empty
      }
    };

    fetchData();
  }, []);

  const lineChartData = [
    { name: 'Заразени', data: prepareChartData(dateCasesData.infected) },
    { name: 'Излекувани', data: prepareChartData(dateCasesData.cured) },
    { name: 'Жертви', data: prepareChartData(dateCasesData.fatal) },
  ];

  const barChartData = [
    { name: 'Заразени', data: prepareChartData(dateDiffCasesData.infected) },
    { name: 'Излекувани', data: prepareChartData(dateDiffCasesData.cured) },
    { name: 'Жертви', data: prepareChartData(dateDiffCasesData.fatal) },
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
        {isLoading ? <Spinner animation="border" variant="primary" />
          : (
            <>
              <Badge variant="info">
                Последна актуализация:&nbsp;
                <Moment format="DD.MM.YYYY г. в HH:mm ч.">
                  {totalsData.timestamp}
                </Moment>
              </Badge>
              <CasesOverview
                infected={totalsData.infected}
                cured={totalsData.cured}
                fatal={totalsData.fatal}
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
              <Row>
                <Col>
                  <Card className="shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Статистика по дни</h6>
                    </Card.Header>
                    <Card.Body>
                      <CasesBarChart data={barChartData} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}
      </Container>
    </BaseLayout>
  );
};

export default Index;
