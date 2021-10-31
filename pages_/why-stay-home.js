import dynamic from 'next/dynamic';
import {
  Container,
  Card,
  Badge,
  Figure,
  Image
} from 'react-bootstrap';
import {
  faInfo,
  faLightbulb,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import BaseLayout from '../components/BaseLayout';
import AlertWithIcon from '../components/AlertWithIcon';
import SimulationCounters from '../components/SimulationCounters';
import ExternalLink from '../components/ExternalLink';
import { ArticleJsonLdDefaults } from '../next-seo.config';

const TransmissionSketch = dynamic(
  () => import('../simulations/sketches/TransmissionSketch'),
  { ssr: false },
);

const ImmunitySketch = dynamic(
  () => import('../simulations/sketches/ImmunitySketch'),
  { ssr: false },
);

const NoRestrictionsSketch = dynamic(
  () => import('../simulations/sketches/NoRestrictionsSketch'),
  { ssr: false },
);

const StayHomeSketch = dynamic(
  () => import('../simulations/sketches/StayHomeSketch'),
  { ssr: false },
);

const WhyStayHome = () => {
  const { t, lang } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('why-stay-home:seo.title')}
        description={t('why-stay-home:seo.description')}
        canonical={t('why-stay-home:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('why-stay-home:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('why-stay-home:seo.title'),
          description: t('why-stay-home:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph/${lang}/open_graph_social_distancing.png?v=${process.env.BUILD_ID}`,
              width: 1200,
              height: 630,
              alt: t('why-stay-home:seo.title'),
            },
          ],
        }}
      />
      <ArticleJsonLd
        {...ArticleJsonLdDefaults}
        url={t('why-stay-home:seo.canonical')}
        title={t('why-stay-home:seo.title')}
        description={t('why-stay-home:seo.description')}
        images={['https://coronavirus-bulgaria.org/static/images/open_graph_social_distancing.png']}
        datePublished='2019-04-03T21:00:00.000Z'
        dateModified='2019-04-03T21:00:00.000Z'
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">{t('why-stay-home:page_title')}</h1>
        </div>
        <Card className="shadow">
          <Card.Body>
            <Image
              fluid
              rounded
              src="/static/images/covid-19-stay-home.jpg"
              alt={t('why-stay-home:page_title')}
              width="640"
              height="480"
              className="align-center"
            />
            <AlertWithIcon variant="info" icon={faInfo}>
              {t('why-stay-home:inspiration')}
              <br />
              <ExternalLink
                href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"
                title="Why outbreaks like coronavirus spread exponentially, and how to flatten the curve"
              >
                Why outbreaks like coronavirus spread exponentially, and how to &quot;flatten the
                curve&quot;
              </ExternalLink>.
            </AlertWithIcon>

            <p>{t('why-stay-home:p1')}</p>

            <strong>{t('why-stay-home:legend')}</strong>
            <ul>
              <li>
                <Badge pill variant="secondary">
                  <i className="fas fa-smile" />
                  &nbsp;
                  {t('why-stay-home:unaffected')}
                </Badge>
              </li>
              <li>
                <Badge pill variant="warning">
                  <i className="fas fa-radiation" />
                  &nbsp;
                  {t('why-stay-home:infected')}
                </Badge>
              </li>
              <li>
                <Badge pill variant="success">
                  <i className="fas fa-notes-medical" />
                  &nbsp;
                  {t('why-stay-home:cured')}
                </Badge>
              </li>
            </ul>

            <p>{t('why-stay-home:p2')}</p>
            <TransmissionSketch className="mx-auto" replayProps={{ replayText: t('why-stay-home:see_again') }} />

            <p>{t('why-stay-home:p3')}</p>
            <ImmunitySketch className="mx-auto" replayProps={{ replayText: t('why-stay-home:see_again') }} />

            <p>{t('why-stay-home:p4')}</p>
            <NoRestrictionsSketch className="mx-auto" CountersComponent={SimulationCounters} />

            <p>{t('why-stay-home:p5')}</p>

            <p>{t('why-stay-home:p6')}</p>
            <StayHomeSketch className="mx-auto" stayHomePercentage={0.5} CountersComponent={SimulationCounters} />

            <p>{t('why-stay-home:p7')}</p>
            <StayHomeSketch className="mx-auto" stayHomePercentage={0.80} CountersComponent={SimulationCounters} />

            <p>{t('why-stay-home:p8')}</p>

            <AlertWithIcon variant="info" icon={faLightbulb}>
              <Trans
                i18nKey="why-stay-home:conclusion"
                components={[<b />]}
              />
            </AlertWithIcon>

            <Figure>
              <Figure.Image
                fluid
                src="/static/images/social_distancing.svg"
                alt="Графика на ефекта от социално дистанциране"
              />
            </Figure>

            <AlertWithIcon variant="warning" icon={faExclamation}>
              <Trans
                i18nKey="why-stay-home:important"
                components={[<b />]}
              />
            </AlertWithIcon>

            <p>{t('why-stay-home:stay_safe')}</p>
          </Card.Body>
        </Card>
      </Container>
    </BaseLayout >
  );
};

export default WhyStayHome;
