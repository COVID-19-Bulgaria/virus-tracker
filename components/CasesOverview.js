import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import OverviewCard from './OverviewCard';

const CasesOverview = (props) => {
  const { infected, cured, fatal } = props;
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col md={4} className="mb-4">
        <OverviewCard title={t('home:charts.infected')} value={infected} icon="fa-radiation" variant="warning" />
      </Col>

      <Col md={4} className="mb-4">
        <OverviewCard title={t('home:charts.cured')} value={cured} icon="fa-notes-medical" variant="success" />
      </Col>

      <Col md={4} className="mb-4">
        <OverviewCard title={t('home:charts.fatal')} value={fatal} icon="fa-heart" variant="danger" />
      </Col>
    </Row>
  );
};

CasesOverview.propTypes = {
  infected: PropTypes.number.isRequired,
  cured: PropTypes.number.isRequired,
  fatal: PropTypes.number.isRequired,
};

export default CasesOverview;
