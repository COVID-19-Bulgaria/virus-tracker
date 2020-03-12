import { Container } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CasesOverview from '../components/CasesOverview';
import CasesLineChart from '../components/CasesLineChart';

const Index = () => {
  const data = [
    {
      name: 'Заразени',
      data: {
        // https://www.bnr.bg/post/101237668/potvardeni-sa-dva-sluchaa-na-koronavirus-v-balggaria
        // 27-годишен мъж от Плевен и на 75-годишна жена от Габрово
        '2020-03-08': 2,
        '2020-03-09': 2,
        // https://nova.bg/news/view/2020/03/10/280816/%D0%B8%D0%B7%D0%B2%D1%8A%D0%BD%D1%80%D0%B5%D0%B4%D0%BD%D0%BE-%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%D1%8A%D1%82-%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B0-%D1%81%D0%BE%D1%84%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/
        '2020-03-10': 2,
        // https://btvnovinite.bg/bulgaria/sedmi-bolen-ot-koronavirus-u-nas.html
        '2020-03-11': 1,
        // https://nova.bg/news/view/2020/03/12/281028/%D0%B8%D0%B7%D0%B2%D1%8A%D0%BD%D1%80%D0%B5%D0%B4%D0%BD%D0%BE-%D0%BD%D0%BE%D0%B2%D0%B8-9-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81-%D1%83-%D0%BD%D0%B0%D1%81/
        // https://nova.bg/news/view/2020/03/12/281060/%D0%B8%D0%B7%D0%B2%D1%8A%D0%BD%D1%80%D0%B5%D0%B4%D0%BD%D0%BE-%D0%BD%D0%BE%D0%B2%D0%B8-7-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81-%D0%BE%D0%B1%D1%89%D0%BE-%D1%81%D1%82%D0%B0%D0%B2%D0%B0%D1%82-23-%D0%B2-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F/
        '2020-03-12': 16,
      },
    },
    {
      name: 'Излекувани',
      data: {
        '2020-03-08': 0,
        '2020-03-09': 0,
        '2020-03-10': 0,
        '2020-03-11': 0,
        '2020-03-12': 0,
      },
    },
    {
      name: 'Жертви',
      data: {
        '2020-03-08': 0,
        '2020-03-09': 0,
        '2020-03-10': 0,
        // https://www.economic.bg/bg/news/12/parvi-smarten-sluchaj-ot-koronavirusa-v-balgariya.html
        '2020-03-11': 1,
        '2020-03-12': 0,
      },
    },
  ];

  return (
    <BaseLayout>
      <Container fluid>
        <div className="d-sm-flex align-items-center justify-content-between mt-4">
          <h1 className="h3 mb-0 text-gray-800">Начало</h1>
        </div>
        <CasesOverview infected={23} cured={0} fatal={1} />
        <CasesLineChart data={data} />
      </Container>
    </BaseLayout>
  );
};

export default Index;
