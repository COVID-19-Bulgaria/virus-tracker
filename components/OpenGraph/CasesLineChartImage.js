import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CasesLineChart from '../CasesLineChart';

const CasesLineChartImage = ({ dateCasesData }) => {
  const prepareChartData = (dataset) => Object.fromEntries(
    Object.entries(dataset).map((entry) => [entry[0], entry[1].cases]),
  );

  const lineChartData = [
    { name: 'Заразени', data: prepareChartData(dateCasesData.infected) },
    { name: 'Излекувани', data: prepareChartData(dateCasesData.cured) },
    { name: 'Жертви', data: prepareChartData(dateCasesData.fatal) },
  ];

  return (
    <Row className="chart-container align-items-center" noGutters>
      <Col>
        <div className="mx-auto" style={{ width: '1059px', height: '600px' }}>
          <CasesLineChart data={lineChartData} width="1059px" height="600px" />
        </div>
      </Col>
      <link rel="stylesheet" type="text/css" href="/static/css/sb-admin-2.min.css" />
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
          }

          .chart-container {
            width: 1200px;
            height: 630px;
          }
        `}
      </style>
    </Row>
  );
};

CasesLineChartImage.propTypes = {
  dateCasesData: PropTypes.object.isRequired,
};

export default CasesLineChartImage;
