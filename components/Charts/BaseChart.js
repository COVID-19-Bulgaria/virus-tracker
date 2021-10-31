import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const BaseChart = (props) => {
  const { src } = props;

  return (
    <>
      <Image src={src} fluid />
    </>
  );
};

BaseChart.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BaseChart;
