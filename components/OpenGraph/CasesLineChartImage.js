import React from 'react';
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
    <div className="map-container align-content-center">
      <CasesLineChart data={lineChartData} width="1200px" height="630px" />
      <style jsx>
        {`
          .map-container {
            width: 1200px;
            height: 630px;
          }
        `}
      </style>
    </div>
  );
};

export default CasesLineChartImage;
