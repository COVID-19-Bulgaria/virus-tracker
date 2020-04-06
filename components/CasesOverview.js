import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import OverviewCard from './OverviewCard';

const CasesOverview = (props) => {
  const {
    infected,
    infectedToday,
    cured,
    curedToday,
    fatal,
    fatalToday,
    hospitalized,
    intensiveCare,
    medicalStaff,
  } = props;
  const { t } = useTranslation();

  return (
    <>
      <Row className="mt-3">
        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.infected')}
            value={infected}
            secondTitle={t('home:charts.today')}
            secondValue={infectedToday}
            icon="fa-radiation"
            variant="warning"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.cured')}
            value={cured}
            secondTitle={t('home:charts.today')}
            secondValue={curedToday}
            icon="fa-notes-medical"
            variant="success"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.fatal')}
            value={fatal}
            secondTitle={t('home:charts.today')}
            secondValue={fatalToday}
            icon="fa-heart"
            variant="danger"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <OverviewCard title={t('home:charts.medical_staff')} value={medicalStaff} icon="fa-user-md" variant="warning" />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard title={t('home:charts.hospitalized')} value={hospitalized} icon="fa-hospital" variant="primary" />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard title={t('home:charts.intensive_care')} value={intensiveCare} icon="fa-procedures" variant="primary" />
        </Col>
      </Row>
    </>
  );
};

CasesOverview.propTypes = {
  infected: PropTypes.number.isRequired,
  infectedToday: PropTypes.number.isRequired,
  cured: PropTypes.number.isRequired,
  curedToday: PropTypes.number.isRequired,
  fatal: PropTypes.number.isRequired,
  fatalToday: PropTypes.number.isRequired,
  hospitalized: PropTypes.number.isRequired,
  intensiveCare: PropTypes.number.isRequired,
  medicalStaff: PropTypes.number.isRequired,
};

export default CasesOverview;
