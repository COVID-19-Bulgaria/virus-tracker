import { NextSeo } from 'next-seo';
import { Container, Card, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import LanguageChart from '../components/charts/LanguageChart';

const Tests = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('tests:seo.title')}
        description={t('tests:seo.description')}
        canonical={t('tests:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('tests:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('tests:seo.title'),
          description: t('tests:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_tests.png?v=${process.env.BUILD_ID}`,
              alt: t('tests:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('tests:page_title')}</h1>
        </div>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('tests:charts.date_tests_positivity.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="date_tests_positivity" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('tests:charts.weekly_tests_positivity.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="weekly_tests_positivity" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('tests:charts.weekly_pcr_tests_positivity.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="weekly_pcr_tests_positivity" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('tests:charts.weekly_antigen_tests_positivity.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="weekly_antigen_tests_positivity" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Tests;
