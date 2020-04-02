import { NextSeo } from 'next-seo';
import { Container, Card } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import BaseLayout from '../components/BaseLayout';
import ExternalLink from '../components/ExternalLink';

const About = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo title={t('about:seo.title')} />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('about:page_title')}</h1>
        </div>
        <Card className="shadow">
          <Card.Body>
            <p>
              <Trans
                i18nKey="about:p1"
                components={[<ExternalLink href="https://www.mh.government.bg/bg/informaciya-za-grazhdani/potvrdeni-sluchai-na-koronavirus-na-teritoriyata-na-r-blgariya/" />]}
              />
            </p>
            <p>{t('about:p2')}</p>
            <p>{t('about:p3')}</p>
            <p>
              <Trans
                i18nKey="about:p4"
                components={[<ExternalLink href="http://creativecommons.org/licenses/by-nc-sa/4.0/" />]}
              />
              <Trans
                i18nKey="about:p5"
                components={[<ExternalLink href="https://github.com/COVID-19-Bulgaria/virus-tracker" />]}
              />
            </p>
          </Card.Body>
        </Card>
      </Container>
    </BaseLayout>
  );
};

export default About;
