import PropTypes from 'prop-types';

const Graph = (props) => {
  const {
    width,
    height,
    infectedTimeline,
    curedTimeline,
    populationSize,
  } = props;

  const generatePath = (dataset) => {
    const horizontalStep = width / 1600;
    const verticalStep = height / populationSize;

    let pathData = `M 0 ${height}`;

    dataset.forEach((record, i) => {
      const x = horizontalStep * i;
      const y = height - (verticalStep * record);
      pathData = `${pathData} L ${x} ${y}`;
    });

    pathData = `${pathData} V ${height} L 0 ${height}`;

    return pathData;
  };

  const generateInversePath = (dataset) => {
    const horizontalStep = width / 1600;
    const verticalStep = height / populationSize;

    let pathData = 'M 0 0';

    dataset.forEach((record, i) => {
      const x = horizontalStep * i;
      const y = verticalStep * record;
      pathData = `${pathData} L ${x} ${y}`;
    });

    pathData = `${pathData} V 0 L 0 0`;

    return pathData;
  };

  return (
    <svg className="graph" width={width} height={height}>
      <g>
        <rect width={width} height={height} className="background" />
        <path d={generatePath(infectedTimeline)} className="infected" />
        <path d={generateInversePath(curedTimeline)} className="cured" />
      </g>

      <style jsx>
        {`
          .graph .background {
            fill: #eeeeee;
          }

          .graph .infected {
            fill: #f6c23e;
          }

          .graph .cured {
            fill: #1cc88a;
          }
        `}
      </style>
    </svg>
  );
};

Graph.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  infectedTimeline: PropTypes.array.isRequired,
  curedTimeline: PropTypes.array.isRequired,
  populationSize: PropTypes.number.isRequired,
};

Graph.defaultProps = {
  width: 600,
  height: 60,
};

export default Graph;
