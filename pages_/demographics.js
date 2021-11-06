import { NextSeo } from 'next-seo';
import { Container, Card, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import LanguageChart from '../components/charts/LanguageChart';

const Demographics = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('demographics:seo.title')}
        description={t('demographics:seo.description')}
        canonical={t('demographics:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('demographics:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('demographics:seo.title'),
          description: t('demographics:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_demographics.png?v=${process.env.BUILD_ID}`,
              alt: t('demographics:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('demographics:page_title')}</h1>
        </div>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('demographics:charts.date_cases_age.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="date_cases_age" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('demographics:charts.week_cases_age.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="week_cases_age" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('demographics:charts.infected_by_age_group.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="infected_by_age_group" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('demographics:charts.fatal_by_age_group.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="fatal_by_age_group" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('demographics:charts.fatal_percentage_by_age_group.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="fatal_percentage_by_age_group" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('demographics:charts.unvaccinated_fatal_percentage_by_age_group.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="unvaccinated_fatal_percentage_by_age_group" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Demographics;
