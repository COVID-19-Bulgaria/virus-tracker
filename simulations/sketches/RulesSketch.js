/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import P5 from 'p5';
import { setupCanvas, handleInteractions } from '../SketchHelpers';
import Replay from '../Replay';

const RulesSketch = (props) => {
  const {
    id,
    backgroundColor,
    maxFrameCount,
    setupPopulation,
  } = props;

  const canvasWidth = 300;
  const canvasHeight = 100;

  const containerRef = useRef();
  const [showReplay, setShowReplay] = useState(false);
  const [handleReplay, setHandleReplay] = useState();

  const sketch = (p) => {
    let population = [];

    const initialize = () => {
      population = [];
      setupPopulation(p, population);
      setShowReplay(false);
      p.frameCount = -1;
      p.loop();
    };

    p.setup = () => {
      setupCanvas(p, canvasWidth, canvasHeight);
      setupPopulation(p, population);
      setHandleReplay(() => initialize);
    };

    p.draw = () => {
      if (p.frameCount === maxFrameCount) {
        p.noLoop();
        setShowReplay(true);
      }

      p.background(backgroundColor);

      population.forEach((person) => {
        person.move();
        handleInteractions(p, person, population);
        person.render();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && p.frameCount < maxFrameCount) {
        p.loop();
      } else {
        p.noLoop();
      }
    });

    observer.observe(containerRef.current);
  };

  useEffect(() => {
    // eslint-disable-next-line no-new
    new P5(sketch, containerRef.current);
  }, []);

  return (
    <div id={id} ref={containerRef} className={showReplay && 'overlay'} style={{ maxWidth: canvasWidth, position: 'relative' }}>
      <Replay show={showReplay} onClick={handleReplay} />
      <style jsx global>
        {`
          .overlay canvas {
            opacity: 0.2;
          }

          canvas.simulation {
            width: 100% !important;
            height: auto !important;
          }
        `}
      </style>
    </div>
  );
};

RulesSketch.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  maxFrameCount: PropTypes.number,
  setupPopulation: PropTypes.func.isRequired,
};

RulesSketch.defaultProps = {
  backgroundColor: '#ffffff',
  maxFrameCount: 500,
};

export default RulesSketch;
