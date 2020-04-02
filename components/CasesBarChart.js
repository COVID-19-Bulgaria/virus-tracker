import React from 'react';
import PropTypes from 'prop-types';
import { ColumnChart } from 'react-chartkick';
import 'chart.js';
import useTranslation from 'next-translate/useTranslation';

const CasesBarChart = (props) => {
  const { data, ...rest } = props;
  const { t } = useTranslation();

  return (
    <ColumnChart
      data={data}
      xtitle={t('home:charts.barchart.xtitle')}
      ytitle={t('home:charts.barchart.ytitle')}
      colors={['#f6c23e', '#1cc88a', '#e74a3b']}
      download={{ background: '#ffffff', filename: 'COVID-19-Bulgaria_CasesBarChart' }}
      {...rest}
    />
  );
};

CasesBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CasesBarChart;
