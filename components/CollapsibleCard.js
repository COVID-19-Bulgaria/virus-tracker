import PropTypes from 'prop-types';
import { Card, Accordion } from 'react-bootstrap';

const CollapsibleCard = (props) => {
  const { anchor, title, children } = props;

  return (
    <Card className="shadow mb-4 collapsible-card">
      <Accordion.Toggle as={Card.Header} eventKey={anchor} className="d-block py-3" data-toggle="collapse" aria-expanded="true">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={anchor}>
        <Card.Body>
          {children}
        </Card.Body>
      </Accordion.Collapse>
      <style jsx global>
        {`
          .collapsible-card .card-header {
            cursor: pointer;
          }
        `}
      </style>
    </Card>
  );
};

CollapsibleCard.propTypes = {
  anchor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleCard;
