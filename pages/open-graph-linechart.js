import ErrorPage from 'next/error';
import CasesLineChartImage from '../components/OpenGraph/CasesLineChartImage';

const OpenGraphLineChart = () => {
  const shouldRender = process.env.BUILD_ID === 'development';

  return shouldRender ? <CasesLineChartImage /> : <ErrorPage statusCode={404} />;
};

export default OpenGraphLineChart;
