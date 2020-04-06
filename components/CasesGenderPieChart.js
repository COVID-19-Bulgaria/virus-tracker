import PropTypes from 'prop-types';
import { PieChart } from 'react-chartkick';
import 'chart.js';
import useTranslation from 'next-translate/useTranslation';

const CasesGenderPieChart = (props, ...rest) => {
  const { infected, men, women } = props;
  const { t } = useTranslation();

  const menPercentage = Math.round((men / infected + Number.EPSILON) * 100);
  const womenPercentage = 100 - menPercentage;
  const casesGenderPieChartData = [
    [t('home:charts.cases_gender_piechart.male', { percentage: menPercentage }), men],
    [t('home:charts.cases_gender_piechart.female', { percentage: womenPercentage }), women],
  ];

  return (
    <PieChart
      data={casesGenderPieChartData}
      colors={['#4e73df', '#e74a3b']}
      download={{ background: '#ffffff', filename: 'COVID-19-Bulgaria_CasesGenderPieChart' }}
      {...rest}
    />
  );
};

CasesGenderPieChart.propTypes = {
  infected: PropTypes.number.isRequired,
  men: PropTypes.number.isRequired,
  women: PropTypes.number.isRequired,
};

export default CasesGenderPieChart;
