import { useRef, useEffect } from 'react';
import p5 from 'p5';
import Person from './Person';
import DiseaseState from './DiseaseState';
import { checkCollision, changeDirections } from './Physics';

const Infection = () => {
  const containerRef = useRef();

  const sketch = (p) => {
    const setupCanvas = (width, height) => {
      p.createCanvas(width, height);
    };

    const population = [];

    const setupPopulation = (size) => {
      population[0] = new Person({
        x: p.random(Person.radius, p.width - Person.radius),
        y: p.random(Person.radius, p.height - Person.radius),
        state: DiseaseState.INFECTED,
        p5: p,
      });

      for (let i = 1; i < size; i += 1) {
        population[i] = new Person({
          x: p.random(Person.radius, p.width - Person.radius),
          y: p.random(Person.radius, p.height - Person.radius),
          state: DiseaseState.UNAFFECTED,
          p5: p,
        });
      }
    };

    p.setup = () => {
      setupCanvas(640, 480);
      setupPopulation(100);
    };

    p.draw = () => {
      p.background('white');

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
    <div id="infection" ref={containerRef} />
  );
};

export default Infection;
