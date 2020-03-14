import { Container } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import CasesLineChart from '../components/CasesLineChart';
import {
  infected,
  cured,
  fatal,
  dataset,
} from '../dataset';

const Index = () => {
  const sumCases = (dataSet) => Object.values(dataSet.data)
    .reduce((total, cases) => total + cases, 0);

  return (
    <BaseLayout>
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <h1 className="h3 mb-0 text-gray-800">Начало</h1>
        </div>
        <CasesOverview
          infected={sumCases(infected) - sumCases(cured) - sumCases(fatal)}
          cured={sumCases(cured)}
          fatal={sumCases(fatal)}
        />
        <CasesLineChart data={dataset} />
      </Container>
    </BaseLayout>
  );
};

export default Index;
