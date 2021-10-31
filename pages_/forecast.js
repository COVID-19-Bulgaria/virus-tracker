import { NextSeo } from 'next-seo';
import { Container, Card, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import LanguageChart from '../components/charts/LanguageChart';
import AlertWithIcon from '../components/AlertWithIcon';
import ExternalLink from '../components/ExternalLink';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

const Forecast = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('forecast:seo.title')}
        description={t('forecast:seo.description')}
        canonical={t('forecast:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('forecast:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('forecast:seo.title'),
          description: t('forecast:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_forecast.png?v=${process.env.BUILD_ID}`,
              alt: t('forecast:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('forecast:page_title')}</h1>
        </div>
        <Row>
            <Col className="mb-4">
                <Card className="shadow h-100">
                <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{t('forecast:charts.weekly_14_days_forecast.title')}</h6>
                </Card.Header>
                <Card.Body>
                    <AlertWithIcon variant="info" icon={faInfo}>
                        {t('forecast:charts.weekly_14_days_forecast.info')}
                        <br />
                        <ExternalLink
                            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8046206/"
                            title="COVID-19: Short term prediction model using daily incidence data"
                        >
                            {t('forecast:charts.weekly_14_days_forecast.scientific_paper_1')}
                        </ExternalLink>.
                    </AlertWithIcon>

                    <LanguageChart id="weekly_14_days_forecast" lang={lang} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Forecast;
