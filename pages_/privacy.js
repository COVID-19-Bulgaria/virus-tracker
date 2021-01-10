import { NextSeo } from 'next-seo';
import {
  Container,
  Row,
  Col,
  Accordion,
  Button,
} from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import BaseLayout from '../components/BaseLayout';
import CollapsibleCard from '../components/CollapsibleCard';
import ExternalLink from '../components/ExternalLink';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo
        title={t('privacy:seo.title')}
        description={t('privacy:seo.description')}
        canonical={t('privacy:seo.canonical')}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('privacy:seo.keywords'),
          },
        ]}
        openGraph={{
          title: t('privacy:seo.title'),
          description: t('privacy:seo.description'),
          images: [
            {
              url: `https://coronavirus-bulgaria.org/static/images/open_graph_privacy.png?v=${process.env.BUILD_ID}`,
              alt: t('privacy:seo.description'),
            },
          ],
        }}
      />
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between mt-4">
          <h1 className="h3 mb-0 text-gray-800">{t('privacy:page_title')}</h1>
        </div>
        <Row className="mt-3">
          <Col>
            <Accordion bsPrefix="custom-accordion">
              <CollapsibleCard anchor="policy" title={t('privacy:policy.title')}>
                {t('privacy:policy.text')}
              </CollapsibleCard>
              <CollapsibleCard anchor="data" title={t('privacy:data.title')}>
                {t('privacy:data.text')}
              </CollapsibleCard>
              <CollapsibleCard anchor="usage" title={t('privacy:usage.title')}>
                {t('privacy:usage.text')}
              </CollapsibleCard>
              <CollapsibleCard anchor="cookies" title={t('privacy:cookies.title')}>
                {t('privacy:cookies.text')}
              </CollapsibleCard>
              <CollapsibleCard anchor="partners" title={t('privacy:partners.title')}>
                {t('privacy:partners.text')}
                <ul>
                  <li>
                    Google Ireland Ltd. - Google Analytics, Google Tag Manager -
                    <ExternalLink href="https://safety.google/privacy/" title="Google Services Privacy Policy">
                      https://safety.google/privacy/
                    </ExternalLink>
                  </li>
                </ul>
              </CollapsibleCard>
              <CollapsibleCard anchor="preferences" title={t('privacy:preferences.title')}>
                <div>
                  <Trans
                    i18nKey="privacy:preferences.text"
                    components={[<br />]}
                  />
                </div>
                <Button className="mt-2" onClick={() => klaro.show()}>
                  {t('privacy:preferences.button')}
                </Button>
              </CollapsibleCard>
              <CollapsibleCard anchor="changes" title={t('privacy:changes.title')}>
                {t('privacy:changes.text')}
              </CollapsibleCard>
            </Accordion>
            <div className="mb-3"><small>{t('privacy:last_updated')}</small></div>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Privacy;
