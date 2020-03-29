import React from 'react';
import PropTypes from 'prop-types';
import { ColumnChart } from 'react-chartkick';
import 'chart.js';

const CasesBarChart = (props) => {
  const { data, ...rest } = props;

  return (
    <ColumnChart
      data={data}
      xtitle="Дата"
      ytitle="Брой засегнати"
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
