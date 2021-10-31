import { NextSeo } from 'next-seo';
import { Container, Card } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import BaseLayout from '../components/BaseLayout';
import ExternalLink from '../components/ExternalLink';

const About = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('about:seo.title')}
        description={t('about:seo.description')}
        canonical={t('about:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('about:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('about:seo.title'),
          description: t('about:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_about.png?v=${process.env.BUILD_ID}`,
              alt: t('about:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('about:page_title')}</h1>
        </div>
        <Card className="shadow">
          <Card.Body>
            <p>{t('about:p1')}</p>
            <p>{t('about:p2')}</p>
            <p>{t('about:p3')}</p>
            <p>
              <Trans
                i18nKey="about:p4"
                components={[<ExternalLink href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)" />]}
              />
              <Trans
                i18nKey="about:p5"
                components={[<ExternalLink href="https://github.com/COVID-19-Bulgaria/virus-tracker" title="GitHub virus-tracker repository" />]}
              />
            </p>
          </Card.Body>
        </Card>
      </Container>
    </BaseLayout>
  );
};

export default About;
