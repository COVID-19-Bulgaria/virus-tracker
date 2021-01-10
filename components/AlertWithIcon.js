import PropTypes from 'prop-types';
import { Alert, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AlertWithIcon = (props) => {
  const { icon, children, ...rest } = props;

  return (
    <Alert {...rest}>
      <Row>
        <Col xs={{ span: 'auto' }} sm={{ span: 'auto' }} className="align-self-center">
          <FontAwesomeIcon icon={icon} size="lg" />
        </Col>
        <Col>
          {children}
        </Col>
      </Row>
    </Alert>
  );
};

AlertWithIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default AlertWithIcon;
