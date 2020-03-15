import { Container } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import CasesLineChart from '../components/CasesLineChart';

import TotalsDataset from '../db/TotalsDataset.json';
import DateCasesDataset from '../db/DateCasesDataset.json';

const Index = () => {
  const prepareChartData = (dataset) => Object.fromEntries(
    Object.entries(dataset).map((entry) => [entry[0], entry[1].cases]),
  );

  const lineChartData = [
    { name: 'Заразени', data: prepareChartData(DateCasesDataset.infected) },
    { name: 'Излекувани', data: prepareChartData(DateCasesDataset.cured) },
    { name: 'Жертви', data: prepareChartData(DateCasesDataset.fatal) },
  ];

  return (
    <BaseLayout>
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">Начало</h1>
        </div>
        <CasesOverview
          infected={TotalsDataset.infected - TotalsDataset.cured - TotalsDataset.fatal}
          cured={TotalsDataset.cured}
          fatal={TotalsDataset.fatal}
        />
        <CasesLineChart data={lineChartData} />
      </Container>
    </BaseLayout>
  );
};

export default Index;
