import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'react-chartkick';
import 'chart.js';

const CasesLineChart = (props) => {
  const { data, ...rest } = props;

  return (
    <LineChart
      data={data}
      xtitle="Дата"
      ytitle="Брой засегнати"
      colors={['#f6c23e', '#1cc88a', '#e74a3b']}
      download={{ background: '#ffffff', filename: 'COVID-19-Bulgaria_CasesLineChart' }}
      {...rest}
    />
  );
};

CasesLineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CasesLineChart;
