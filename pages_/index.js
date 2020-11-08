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
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import CasesLineChart from '../components/CasesLineChart';
import CasesBarChart from '../components/CasesBarChart';
import CasesPieChart from '../components/CasesPieChart';
import ActiveCasesLineChart from '../components/ActiveCasesLineChart';
import PositiveTestsPercentageChart from '../components/PositiveTestsPercentageChart';

const Index = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [totalsData, setTotalsData] = useState({});
  const [dateCasesData, setDateCasesData] = useState({});
  const [dateDiffCasesData, setDateDiffCasesData] = useState({});
  const [dateActiveCasesData, setDateActiveCasesData] = useState({});
  const [datePositiveTestsPercentageData, setDatePositiveTestsPercentageData] = useState({});


  const prepareChartData = (dataset, dataAttribute) => {
    if (dataset == null) return [];

    return Object.fromEntries(Object.entries(dataset).map(entry => [entry[0], entry[1][dataAttribute]]));
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

        const dateActiveCasesDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateActiveCasesDataset.json');
        setDateActiveCasesData(await dateActiveCasesDataset.json());

        const datePositiveTestsPercentageDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DatePositiveTestsDataset.json');
        setDatePositiveTestsPercentageData(await datePositiveTestsPercentageDataset.json());

        setIsLoading(false);
      } catch (error) {
        // Empty
      }
    };

    fetchData();
  }, []);

  const lineChartData = [
    { name: t('home:charts.infected'), data: prepareChartData(dateCasesData.infected, 'cases') },
    { name: t('home:charts.cured'), data: prepareChartData(dateCasesData.cured, 'cases') },
    { name: t('home:charts.fatal'), data: prepareChartData(dateCasesData.fatal, 'cases') },
  ];

  const barChartData = [
    { name: t('home:charts.infected'), data: prepareChartData(dateDiffCasesData.infected, 'cases') },
    { name: t('home:charts.cured'), data: prepareChartData(dateDiffCasesData.cured, 'cases') },
    { name: t('home:charts.fatal'), data: prepareChartData(dateDiffCasesData.fatal, 'cases') },
  ];

  const activeCasesLineChartData = prepareChartData(dateActiveCasesData.active, 'cases');
  const positiveTestsPercentageBarChartData = prepareChartData(datePositiveTestsPercentageData, 'percentage');

  return (
    <BaseLayout>
      <NextSeo
        title={t('home:seo.title')}
        description={t('home:seo.description')}
        openGraph={{
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=${process.env.BUILD_ID}`,
              width: 1200,
              height: 630,
              alt: t('home:charts.cases_linechart.title'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('home:page_title')}</h1>
        </div>
        {isLoading ? <Spinner animation="border" variant="primary" />
          : (
            <>
              <Badge variant="info">
                {t('home:last_updated')}&nbsp;
                <Moment parse="YYYY-MM-DD HH:mm:ss ZZ" format={t('common:date_format')}>
                  {totalsData.timestamp}
                </Moment>
              </Badge>
              <CasesOverview
                totalsData={totalsData}
                dateDiffCasesData={dateDiffCasesData}
              />
              <Row>
                <Col md={6}>
                  <Card className="shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.cases_linechart.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <CasesLineChart data={lineChartData} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.cases_barchart.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <CasesBarChart data={barChartData} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card className="shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.active_cases_linechart.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <ActiveCasesLineChart data={activeCasesLineChartData} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.cases_piechart.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <CasesPieChart infected={totalsData.infected} cured={totalsData.cured} fatal={totalsData.fatal} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.positive_tests_percentage_barchart.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <PositiveTestsPercentageChart data={positiveTestsPercentageBarChartData} />
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
