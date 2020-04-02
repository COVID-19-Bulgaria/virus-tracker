import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import CasesLineChartImage from '../components/OpenGraph/CasesLineChartImage';

const OpenGraphLineChart = ({ dateCasesData }) => {
  const shouldRender = process.env.BUILD_ID === 'development';

  return shouldRender
    ? <CasesLineChartImage dateCasesData={dateCasesData} />
    : <ErrorPage statusCode={404} />;
};

OpenGraphLineChart.getInitialProps = async () => {
  const dateCasesDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json');
  const dateCasesData = await dateCasesDataset.json();

  return {
    dateCasesData,
  };
};

OpenGraphLineChart.propTypes = {
  dateCasesData: PropTypes.object.isRequired,
};

export default OpenGraphLineChart;
