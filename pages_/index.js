/* eslint-disable react/jsx-wrap-multilines */
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
} from 'react-bootstrap';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import useTranslation from 'next-translate/useTranslation';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import AlertWithIcon from '../components/AlertWithIcon';
import LanguageChart from '../components/charts/LanguageChart';

const Index = () => {
  const { t, lang } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [totalsData, setTotalsData] = useState({});
  const [dateDiffCasesData, setDateDiffCasesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalsDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json');
        setTotalsData(await totalsDataset.json());

        const dateDiffCasesDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json');
        setDateDiffCasesData(await dateDiffCasesDataset.json());

        setIsLoading(false);
      } catch (error) {
        // Empty
      }
    };

    fetchData();
  }, []);

  const preloadResources = [
    'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json',
    'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json'
  ];

  return (
    <BaseLayout>
      <Head>
        {preloadResources.map((resource) => <link key={resource} rel="preload" as="fetch" href={resource} crossOrigin="anonymous" />)}
      </Head>
      <NextSeo
        title={t('home:seo.title')}
        description={t('home:seo.description')}
        openGraph={{
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=${process.env.BUILD_ID}`,
              width: 1200,
              height: 630,
              alt: t('home:charts.historical_cases.title'),
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
              <AlertWithIcon variant="info" icon={faInfo}>
                {t('home:info.p1')}
                <br />
                <strong>{t('home:info.new')}:</strong> {t('home:info.p2')}
              </AlertWithIcon>

              <Badge variant="info">
                {t('home:last_updated')}&nbsp;
                {format(parse(totalsData.timestamp, 'yyyy-MM-dd HH:mm:ss xx', new Date()), t('common:date_format'))}
              </Badge>
              <CasesOverview
                totalsData={totalsData}
                dateDiffCasesData={dateDiffCasesData}
              />
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="shadow h-100">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.historical_cases.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <LanguageChart id="historical_cases" lang={lang} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="shadow h-100">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.active_cases.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <LanguageChart id="active_cases" lang={lang} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="shadow h-100">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.weekly_infected_cured_cases.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <LanguageChart id="weekly_infected_cured_cases" lang={lang} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="shadow h-100">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.weekly_hospitalized_intensive_fatal_cases.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <LanguageChart id="weekly_hospitalized_intensive_fatal_cases" lang={lang} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  <Card className="shadow h-100">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{t('home:charts.date_tests_positivity.title')}</h6>
                    </Card.Header>
                    <Card.Body>
                      <LanguageChart id="date_tests_positivity" lang={lang} />
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
