import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import moment from 'moment';
import OverviewCard from './OverviewCard';

const CasesOverview = (props) => {
  const {
    totalsData,
    dateDiffCasesData,
  } = props;
  const { t } = useTranslation();

  const currentDate = moment(totalsData.timestamp, 'YYYY-MM-DD HH:mm:ss ZZ').format('YYYY-MM-DD');
  const yesterdayDate = moment(totalsData.timestamp, 'YYYY-MM-DD HH:mm:ss ZZ').subtract(1, 'days').format('YYYY-MM-DD');

  const infectedToday = dateDiffCasesData['infected'][currentDate].cases;
  const curedToday = dateDiffCasesData['cured'][currentDate].cases;
  const fatalToday = dateDiffCasesData['fatal'][currentDate].cases;
  const hospitalizedToday = dateDiffCasesData['hospitalized'][currentDate].cases;
  const intensiveCareToday = dateDiffCasesData['intensive_care'][currentDate].cases;
  const medicalStaffToday = dateDiffCasesData['medical_staff'][currentDate].cases;

  const infectedYesterday = dateDiffCasesData['infected'][yesterdayDate].cases;
  const curedYesterday = dateDiffCasesData['cured'][yesterdayDate].cases;
  const fatalYesterday = dateDiffCasesData['fatal'][yesterdayDate].cases;
  const hospitalizedYesterday = dateDiffCasesData['hospitalized'][yesterdayDate].cases;
  const intensiveCareYesterday = dateDiffCasesData['intensive_care'][yesterdayDate].cases;
  const medicalStaffYesterday = dateDiffCasesData['medical_staff'][yesterdayDate].cases;

  const calculateDiff = (casesToday, casesYesterday) => (casesYesterday < 0 ? casesToday : casesToday - casesYesterday);

  return (
    <>
      <Row className="mt-3">
        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.infected')}
            value={totalsData.infected}
            today={infectedToday}
            diff={calculateDiff(infectedToday, infectedYesterday)}
            icon="fa-radiation"
            variant="warning"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.cured')}
            value={totalsData.cured}
            today={curedToday}
            diff={calculateDiff(curedToday, curedYesterday)}
            icon="fa-notes-medical"
            variant="success"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.fatal')}
            value={totalsData.fatal}
            today={fatalToday}
            diff={calculateDiff(fatalToday, fatalYesterday)}
            icon="fa-heart"
            variant="danger"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.medical_staff')}
            value={totalsData.medical_staff}
            today={medicalStaffToday}
            diff={calculateDiff(medicalStaffToday, medicalStaffYesterday)}
            icon="fa-user-md"
            variant="warning"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.hospitalized')}
            value={totalsData.hospitalized}
            today={hospitalizedToday}
            diff={calculateDiff(hospitalizedToday, hospitalizedYesterday)}
            icon="fa-hospital"
            variant="primary"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.intensive_care')}
            value={totalsData.intensive_care}
            today={intensiveCareToday}
            diff={calculateDiff(intensiveCareToday, intensiveCareYesterday)}
            icon="fa-procedures"
            variant="primary"
          />
        </Col>
      </Row>
    </>
  );
};

CasesOverview.propTypes = {
  totalsData: PropTypes.shape({
    infected: PropTypes.number,
    cured: PropTypes.number,
    fatal: PropTypes.number,
    hospitalized: PropTypes.number,
    intensive_care: PropTypes.number,
    medical_staff: PropTypes.number,
    timestamp: PropTypes.string,
  }).isRequired,
  dateDiffCasesData: PropTypes.shape({
    infected: PropTypes.object,
    cured: PropTypes.object,
    fatal: PropTypes.object,
    hospitalized: PropTypes.object,
    intensive_care: PropTypes.object,
    medical_staff: PropTypes.object,
  }).isRequired,
};

export default CasesOverview;
