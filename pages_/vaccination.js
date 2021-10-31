import { NextSeo } from 'next-seo';
import { Container, Card, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import LanguageChart from '../components/charts/LanguageChart';

const Vaccination = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('vaccination:seo.title')}
        description={t('vaccination:seo.description')}
        canonical={t('vaccination:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('vaccination:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('vaccination:seo.title'),
          description: t('vaccination:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_vaccination.png?v=${process.env.BUILD_ID}`,
              alt: t('vaccination:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('vaccination:page_title')}</h1>
        </div>
        <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('vaccination:charts.date_vaccination_timeline.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="date_vaccination_timeline" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('vaccination:charts.weekly_vaccination_timeline.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <LanguageChart id="weekly_vaccination_timeline" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Vaccination;
