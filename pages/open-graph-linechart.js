import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import CasesLineChartImage from '../components/OpenGraph/CasesLineChartImage';

const OpenGraphLineChart = ({ dateCasesData }) => {
  const shouldRender = process.env.BUILD_ID === 'development';

  return shouldRender ? <CasesLineChartImage dateCasesData={dateCasesData} /> : <ErrorPage statusCode={404} />;
};

OpenGraphLineChart.getInitialProps = async function () {
  const dateCasesDataset = await fetch('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json');
  const dateCasesData = await dateCasesDataset.json();

  return {
    dateCasesData,
  };
};

export default OpenGraphLineChart;
