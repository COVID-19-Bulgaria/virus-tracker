import { NextSeo, ArticleJsonLd } from 'next-seo';
import {
  Container,
  Accordion,
  Row,
  Col,
  Figure,
  Image
} from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import BaseLayout from '../components/BaseLayout';
import CollapsibleCard from '../components/CollapsibleCard';
import ExternalLink from '../components/ExternalLink';
import { ArticleJsonLdDefaults } from '../next-seo.config';
import FigureCaption from 'react-bootstrap/FigureCaption';

const WhatWeKnow = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('what-we-know:seo.title')}
        description={t('what-we-know:seo.description')}
        canonical={t('what-we-know:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('what-we-know:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('what-we-know:seo.title'),
          description: t('what-we-know:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_what_we_know.png?v=${process.env.BUILD_ID}`,
              alt: t('what-we-know:seo.title'),
            },
          ],
        }}
      />
      <ArticleJsonLd
        {...ArticleJsonLdDefaults}
        url={t('what-we-know:seo.canonical')}
        title={t('what-we-know:seo.title')}
        description={t('what-we-know:seo.description')}
        images={['https://coronavirus-bulgaria.org/static/images/open_graph_faq.png']}
        datePublished='2019-04-03T21:00:00.000Z'
        dateModified='2019-04-03T21:00:00.000Z'
      />

      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('what-we-know:page_title')}</h1>
        </div>

        <Row>
          <Col>
            <Accordion bsPrefix="custom-accordion">
              <CollapsibleCard anchor="covid19" title={t('what-we-know:faq.covid19.title')}>
                <Trans
                  i18nKey="what-we-know:faq.covid19.text"
                  components={[<strong />, <strong />]}
                />
              </CollapsibleCard>
              <CollapsibleCard anchor="source" title={t('what-we-know:faq.source.title')}>
                <Trans
                  i18nKey="what-we-know:faq.source.text"
                  components={[<p />, <p className="mb-0" />]}
                />
              </CollapsibleCard>
              <CollapsibleCard anchor="symptoms" title={t('what-we-know:faq.symptoms.title')}>
                <p>{t('what-we-know:faq.symptoms.p1')}</p>

                <Row>
                  <Col>
                    <Figure>
                      <Figure.Image
                        fluid
                        src="/static/images/covid-19-symptoms-shortness-of-breath.jpg"
                        alt={`${t('what-we-know:faq.symptoms.difficulty_breathing')} / ${t('what-we-know:faq.symptoms.shortness_of_breath')}`}
                        width="300"
                        height="300"
                      />
                      <FigureCaption className="text-center font-weight-bold">{`${t('what-we-know:faq.symptoms.difficulty_breathing')} / ${t('what-we-know:faq.symptoms.shortness_of_breath')}`}</FigureCaption>
                    </Figure>
                  </Col>
                  <Col>
                    <Figure>
                      <Figure.Image
                        fluid
                        src="/static/images/covid-19-symptoms-fever.jpg"
                        alt={t('what-we-know:faq.symptoms.high_temperature')}
                        width="300"
                        height="300"
                      />
                      <FigureCaption className="text-center font-weight-bold">{t('what-we-know:faq.symptoms.high_temperature')}</FigureCaption>
                    </Figure>
                  </Col>
                  <Col>
                    <Figure>
                      <Figure.Image
                        fluid
                        src="/static/images/covid-19-symptoms-coughing.jpg"
                        alt={t('what-we-know:faq.symptoms.dry_cough')}
                        width="300"
                        height="300"
                      />
                      <FigureCaption className="text-center font-weight-bold">{t('what-we-know:faq.symptoms.dry_cough')}</FigureCaption>
                    </Figure>
                  </Col>
                </Row>

                <p>{t('what-we-know:faq.symptoms.p2')}</p>
                <p className="mb-0">{t('what-we-know:faq.symptoms.p3')}</p>
              </CollapsibleCard>
              <CollapsibleCard anchor="incubation-period" title={t('what-we-know:faq.incubation_period.title')}>
                {t('what-we-know:faq.incubation_period.text')}
              </CollapsibleCard>
              <CollapsibleCard anchor="transmission" title={t('what-we-know:faq.transmission.title')}>
                <Row>
                  <Col>
                    {t('what-we-know:faq.transmission.text')}
                  </Col>
                  <Col>
                    <Image
                      fluid
                      src="/static/images/covid-19-transmission.jpg"
                      alt={t('what-we-know:faq.transmission.title')}
                      height="300"
                    />
                  </Col>
                </Row>
              </CollapsibleCard>
              <CollapsibleCard anchor="treatment" title={t('what-we-know:faq.treatment.title')}>
                <Figure>
                  <Figure.Image
                    fluid
                    src="/static/images/covid-19-prevention-masks.jpg"
                    alt={t('what-we-know:faq.treatment.prevention')}
                    width="300"
                  />
                  <FigureCaption className="text-center font-weight-bold">{t('what-we-know:faq.treatment.prevention')}</FigureCaption>
                </Figure>
                <br />
                {t('what-we-know:faq.treatment.text')}
              </CollapsibleCard>
              <CollapsibleCard anchor="sources" title={t('what-we-know:faq.sources.title')}>
                <ul>
                  <li>
                    <ExternalLink
                      href="http://www.mh.government.bg/bg/novini/aktualno/informaciya-ot-evropejskiya-centr-za-prevenciya-i-/"
                      title="Информация от Европейския център за превенция и контрол на заболяванията относно новия коронавирус – 2019-nCov"
                    >
                      Информация от Европейския център за превенция и контрол на заболяванията
                      относно новия коронавирус – 2019-nCov
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      href="https://bg.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%BE%D1%82_%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81_(2019-2020)"
                      title="Пандемия от COVID-19"
                    >
                      Пандемия от COVID-19
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                      title="Coronavirus disease (COVID-19) outbreak"
                    >
                      Coronavirus disease (COVID-19) outbreak
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
                      title="Coronavirus Disease 2019 (COVID-19)"
                    >
                      Coronavirus Disease 2019 (COVID-19)
                    </ExternalLink>
                  </li>
                </ul>
              </CollapsibleCard>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default WhatWeKnow;
