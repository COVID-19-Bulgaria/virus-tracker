import PropTypes from 'prop-types';
import { Alert, Row, Col } from 'react-bootstrap';

const AlertWithIcon = (props) => {
  const { iconClass, children, ...rest } = props;

  return (
    <Alert {...rest}>
      <Row>
        <Col xs={{ span: 'auto' }} sm={{ span: 'auto' }} className="align-self-center">
          <i className={iconClass} />
        </Col>
        <Col>
          {children}
        </Col>
      </Row>
    </Alert>
  );
};

AlertWithIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AlertWithIcon;
