import React from 'react';
import PropTypes from 'prop-types';
import { ColumnChart } from 'react-chartkick';
import 'chart.js';
import useTranslation from 'next-translate/useTranslation';

const PositiveTestsPercentageChart = (props) => {
  const { data, ...rest } = props;
  const { t } = useTranslation();

  return (
    <ColumnChart
      data={data}
      xtitle={t('home:charts.positive_tests_percentage_barchart.xtitle')}
      ytitle={t('home:charts.positive_tests_percentage_barchart.ytitle')}
      colors={['#4e73df']}
      download={{ background: '#ffffff', filename: 'COVID-19-PositiveTestsPercentageChart' }}
      {...rest}
    />
  );
};

PositiveTestsPercentageChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PositiveTestsPercentageChart;
