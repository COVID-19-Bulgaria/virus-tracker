import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';

const OverviewCard = (props) => {
  const {
    title,
    value,
    icon,
    variant,
  } = props;

  return (
    <Card className={`border-left-${variant} shadow h-100 py-2`}>
      <Card.Body>
        <Row noGutters className="align-items-center">
          <Col className="mr-2">
            <div className={`text-xs font-weight-bold text-${variant} text-uppercase mb-1`}>
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {value}
            </div>
          </Col>
          <div className="col-auto">
            <i className={`fas ${icon} fa-2x text-gray-300`} />
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

OverviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default OverviewCard;
