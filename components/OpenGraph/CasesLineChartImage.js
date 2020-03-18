import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CasesLineChart from '../CasesLineChart';
import DateCasesDataset from '../../db/DateCasesDataset.json';

const CasesLineChartImage = () => {
  const prepareChartData = (dataset) => Object.fromEntries(
    Object.entries(dataset).map((entry) => [entry[0], entry[1].cases]),
  );

  const lineChartData = [
    { name: 'Заразени', data: prepareChartData(DateCasesDataset.infected) },
    { name: 'Излекувани', data: prepareChartData(DateCasesDataset.cured) },
    { name: 'Жертви', data: prepareChartData(DateCasesDataset.fatal) },
  ];

  return (
    <Row className="map-container align-items-center" noGutters>
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

          .map-container {
            width: 1200px;
            height: 630px;
          }
        `}
      </style>
    </Row>
  );
};

export default CasesLineChartImage;
