import PropTypes from 'prop-types';
import { PieChart } from 'react-chartkick';
import 'chart.js';
import useTranslation from 'next-translate/useTranslation';

const CasesPieChart = (props, ...rest) => {
  const { infected, cured, fatal } = props;
  const { t } = useTranslation();

  const total = infected;
  const currentInfected = total - cured - fatal;

  const infectedPercentage = Math.round((currentInfected / total + Number.EPSILON) * 100);
  const curedPercentage = Math.round((cured / total + Number.EPSILON) * 100);
  const fatalPercentage = 100 - infectedPercentage - curedPercentage;
  const casesPieChartData = [
    [t('home:charts.cases_piechart.infected', { percentage: infectedPercentage }), currentInfected],
    [t('home:charts.cases_piechart.cured', { percentage: curedPercentage }), cured],
    [t('home:charts.cases_piechart.fatal', { percentage: fatalPercentage }), fatal],
  ];

  return (
    <PieChart
      data={casesPieChartData}
      colors={['#f6c23e', '#1cc88a', '#e74a3b']}
      download={{ background: '#ffffff', filename: 'COVID-19-Bulgaria_CasesPieChart' }}
      {...rest}
    />
  );
};

CasesPieChart.propTypes = {
  infected: PropTypes.number.isRequired,
  cured: PropTypes.number.isRequired,
  fatal: PropTypes.number.isRequired,
};

export default CasesPieChart;
