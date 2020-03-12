import PropTypes from 'prop-types';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import { Row, Col, Card } from 'react-bootstrap';

const CasesLineChart = (props) => {
  const { data } = props;

  return (
    <Row>
      <Col>
        <Card className="shadow mb-4">
          <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Хронология на заразата</h6>
          </Card.Header>
          <Card.Body>
            <div className="chart-area">
              <LineChart data={data} xtitle="Дата" ytitle="Брой засегнати" colors={['#f6c23e', '#1cc88a', '#e74a3b']} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

CasesLineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CasesLineChart;
