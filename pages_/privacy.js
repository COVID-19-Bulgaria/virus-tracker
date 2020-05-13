import { NextSeo } from 'next-seo';
import {
  Container,
  Row,
  Col,
  Accordion,
} from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import BaseLayout from '../components/BaseLayout';
import CollapsibleCard from '../components/CollapsibleCard';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <NextSeo title={t('privacy:seo.title')} />
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
