import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const SimulationCounters = ({ counters }) => {
  const { unaffected, infected, cured } = counters;

  return (
    <div className="text-center">
      <Badge pill variant="secondary">
        <i className="fas fa-smile" />
        &nbsp;
        {unaffected}
      </Badge>
      {' '}
      <Badge pill variant="warning">
        <i className="fas fa-radiation" />
        &nbsp;
        {infected}
      </Badge>
      {' '}
      <Badge pill variant="success">
        <i className="fas fa-notes-medical" />
        &nbsp;
        {cured}
      </Badge>
    </div>
  );
};

SimulationCounters.propTypes = {
  counters: PropTypes.shape({
    unaffected: PropTypes.number,
    infected: PropTypes.number,
    cured: PropTypes.number,
  }).isRequired,
};

export default SimulationCounters;
