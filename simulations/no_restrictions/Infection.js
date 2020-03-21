import { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import Person from '../Person';
import DiseaseState from '../DiseaseState';
import { checkCollision, changeDirections } from '../Physics';
import Statistics from '../Statistics';
import Graph from '../Graph';
import Counters from '../Counters';
import Replay from '../Replay';

const Infection = () => {
  const containerRef = useRef();
  const statistics = new Statistics({});
  const [counters, setCounters] = useState(statistics.counters());
  const [timelines, setTimelines] = useState(statistics.timelines());
  const [showReplay, setShowReplay] = useState(false);

  const sketch = (p) => {
    const RECOVERY_TIME = 500;
    const MORTALITY_RATE = 0.02;

    let population = [];

    const initialize = () => {
      population = [];
      statistics.reset();
      setCounters(statistics.counters());
      setTimelines(statistics.timelines());
      setShowReplay(false);
    }

    const setupCanvas = (width, height) => {
      const canvas = p.createCanvas(width, height);
      canvas.class('simulation');
    };

    const setupPopulation = (size) => {
      population[0] = new Person({
        x: p.random(Person.defaultRadius, p.width - Person.defaultRadius),
        y: p.random(Person.defaultRadius, p.height - Person.defaultRadius),
        radius: 10,
        state: DiseaseState.INFECTED,
        p5: p,
      });

      statistics.infected += 1;

      for (let i = 1; i < size; i += 1) {
        population[i] = new Person({
          x: p.random(Person.defaultRadius, p.width - Person.defaultRadius),
          y: p.random(Person.defaultRadius, p.height - Person.defaultRadius),
          radius: 10,
          state: DiseaseState.UNAFFECTED,
          p5: p,
        });

        statistics.unaffected += 1;
      }
    };

    const handleInteractions = (person) => {
      population.forEach((other) => {
        if (other === person) return;
        if (person.state === DiseaseState.FATAL || other.state === DiseaseState.FATAL) return;

        if (checkCollision(person, other)) {
          changeDirections(person, other);

          if (person.state === other.state) return;
          if (person.state === DiseaseState.CURED || other.state === DiseaseState.CURED) return;

          if (person.infect(p.random(0, 1) > MORTALITY_RATE)) {
            statistics.infected += 1;
            statistics.unaffected -= 1;
          }

          if (other.infect(p.random(0, 1) > MORTALITY_RATE)) {
            statistics.infected += 1;
            statistics.unaffected -= 1;
          }
        }
      });
    };

    const updateState = (person) => {
      if (person.state !== DiseaseState.INFECTED) return;

      if (person.infectedTime > RECOVERY_TIME / 2 && !person.willSurvive) {
        person.state = DiseaseState.FATAL;
        statistics.fatal += 1;
        statistics.infected -= 1;
        return;
      }

      if (person.infectedTime >= RECOVERY_TIME) {
        person.state = DiseaseState.CURED;
        statistics.cured += 1;
        statistics.infected -= 1;
        return;
      }

      person.infectedTime += 1;
    };

    p.setup = () => {
      initialize();
      setupCanvas(640, 480);
      setupPopulation(200);
    };

    p.draw = () => {
      if (p.frameCount === 1600) {
        p.noLoop();
        setShowReplay(true);
      }

      p.background('white');

      population.forEach((person) => {
        updateState(person);
        person.move();
        handleInteractions(person);
        person.render();
      });

      setCounters(statistics.counters());

      statistics.recordTimelines();

      if (p.frameCount % 2 === 0) {
        setTimelines(statistics.timelines());
      }
    };
  };

  const handleReplay = () => {
    sketch.frameCount = -1;
  };

  useEffect(() => {
    const p = new p5(sketch, containerRef.current);
  }, []);

  return (
    <div>
      <Counters counters={counters} />
      <Graph width={300} height={60} timelines={timelines} populationSize={200} />

      <div id="infection" ref={containerRef} className={showReplay && 'overlay'} style={{ maxWidth: 640, position: 'relative' }}>
        <Replay show={showReplay} onClick={handleReplay} />
      </div>

      <style jsx global>
        {`
          .overlay canvas {
            opacity: 0.2;
          }
        `}
      </style>
    </div>
  );
};

export default Infection;
