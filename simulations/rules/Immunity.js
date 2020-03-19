import { useRef, useEffect } from 'react';
import p5 from 'p5';
import Person from '../Person';
import DiseaseState from '../DiseaseState';
import { checkCollision, changeDirections } from '../Physics';

const Immunity = () => {
  const containerRef = useRef();

  const sketch = (p) => {
    const setupCanvas = (width, height) => {
      p.createCanvas(width, height);
    };

    const population = [];

    const setupPopulation = () => {
      population[0] = new Person({
        x: 100,
        y: 48,
        horizontalSpeed: 1,
        verticalSpeed: 0,
        radius: 30,
        state: DiseaseState.INFECTED,
        p5: p,
      });

      population[1] = new Person({
        x: 170,
        y: 48,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        radius: 30,
        state: DiseaseState.CURED,
        p5: p,
      });
    };

    p.setup = () => {
      setupCanvas(300, 100);
      setupPopulation();
    };

    p.draw = () => {
      p.background('#f8f9fc');

      population.forEach((person) => {
        person.move();

        population.forEach((other) => {
          if (other === person) return;
          if (other.state === DiseaseState.FATAL) return;

          if (checkCollision(person, other)) {
            changeDirections(person, other);

            if (person.state === other.state) return;
            if (person.state === DiseaseState.CURED || other.state === DiseaseState.CURED) return;

            person.state = DiseaseState.INFECTED;
            other.state = DiseaseState.INFECTED;
          }
        });

        person.render();
      });
    };
  };

  useEffect(() => {
    const p = new p5(sketch, containerRef.current);
  });

  return (
    <div id="immunity" ref={containerRef} />
  );
};

export default Immunity;
