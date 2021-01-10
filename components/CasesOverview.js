import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import {
  faRadiation,
  faNotesMedical,
  faHeart,
  faUserMd,
  faHospital,
  faProcedures,
  faVials,
  faFlask,
  faSyringe,
} from '@fortawesome/free-solid-svg-icons';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import OverviewCard from './OverviewCard';

const CasesOverview = (props) => {
  const {
    totalsData,
    dateDiffCasesData,
  } = props;
  const { t } = useTranslation();

  const currentDate = format(parse(totalsData.timestamp, 'yyyy-MM-dd HH:mm:ss xx', new Date()), 'yyyy-MM-dd');
  const yesterdayDate = format(subDays(parse(totalsData.timestamp, 'yyyy-MM-dd HH:mm:ss xx', new Date()), 1), 'yyyy-MM-dd');

  const infectedToday = dateDiffCasesData.infected[currentDate].cases;
  const curedToday = dateDiffCasesData.cured[currentDate].cases;
  const fatalToday = dateDiffCasesData.fatal[currentDate].cases;
  const hospitalizedToday = dateDiffCasesData.hospitalized[currentDate].cases;
  const intensiveCareToday = dateDiffCasesData.intensive_care[currentDate].cases;
  const medicalStaffToday = dateDiffCasesData.medical_staff[currentDate].cases;
  const pcrTestsToday = dateDiffCasesData.pcr_tests[currentDate].cases;
  const antigenTestsToday = dateDiffCasesData.antigen_tests[currentDate].cases;
  const vaccinatedToday = dateDiffCasesData.vaccinated[currentDate].cases;

  const infectedYesterday = dateDiffCasesData.infected[yesterdayDate].cases;
  const curedYesterday = dateDiffCasesData.cured[yesterdayDate].cases;
  const fatalYesterday = dateDiffCasesData.fatal[yesterdayDate].cases;
  const hospitalizedYesterday = dateDiffCasesData.hospitalized[yesterdayDate].cases;
  const intensiveCareYesterday = dateDiffCasesData.intensive_care[yesterdayDate].cases;
  const medicalStaffYesterday = dateDiffCasesData.medical_staff[yesterdayDate].cases;
  const pcrTestsYesterday = dateDiffCasesData.pcr_tests[yesterdayDate].cases;
  const antigenTestsYesterday = dateDiffCasesData.antigen_tests[yesterdayDate].cases;
  const vaccinatedYesterday = dateDiffCasesData.vaccinated[yesterdayDate].cases;

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
            icon={faRadiation}
            variant="warning"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.cured')}
            value={totalsData.cured}
            today={curedToday}
            diff={calculateDiff(curedToday, curedYesterday)}
            icon={faNotesMedical}
            variant="success"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.fatal')}
            value={totalsData.fatal}
            today={fatalToday}
            diff={calculateDiff(fatalToday, fatalYesterday)}
            icon={faHeart}
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
            icon={faUserMd}
            variant="warning"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.hospitalized')}
            value={totalsData.hospitalized}
            today={hospitalizedToday}
            diff={calculateDiff(hospitalizedToday, hospitalizedYesterday)}
            icon={faHospital}
            variant="primary"
          />
        </Col>

        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.intensive_care')}
            value={totalsData.intensive_care}
            today={intensiveCareToday}
            diff={calculateDiff(intensiveCareToday, intensiveCareYesterday)}
            icon={faProcedures}
            variant="primary"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.pcr_tests')}
            value={totalsData.pcr_tests}
            today={pcrTestsToday}
            diff={calculateDiff(pcrTestsToday, pcrTestsYesterday)}
            diffTranslationPrefix="tests_diff"
            icon={faVials}
            variant="primary"
          />
        </Col>
        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.antigen_tests')}
            value={totalsData.antigen_tests}
            today={antigenTestsToday}
            diff={calculateDiff(antigenTestsToday, antigenTestsYesterday)}
            diffTranslationPrefix="tests_diff"
            icon={faFlask}
            variant="primary"
          />
        </Col>
        <Col md={4} className="mb-4">
          <OverviewCard
            title={t('home:charts.vaccinated')}
            value={totalsData.vaccinated}
            today={vaccinatedToday}
            diff={calculateDiff(vaccinatedToday, vaccinatedYesterday)}
            diffTranslationPrefix="vaccinated_diff"
            icon={faSyringe}
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
    pcr_tests: PropTypes.number,
    antigen_tests: PropTypes.number,
    vaccinated: PropTypes.number,
    timestamp: PropTypes.string,
  }).isRequired,
  dateDiffCasesData: PropTypes.shape({
    infected: PropTypes.object,
    cured: PropTypes.object,
    fatal: PropTypes.object,
    hospitalized: PropTypes.object,
    intensive_care: PropTypes.object,
    medical_staff: PropTypes.object,
    pcr_tests: PropTypes.object,
    antigen_tests: PropTypes.object,
    vaccinated: PropTypes.object,
  }).isRequired,
};

export default CasesOverview;
