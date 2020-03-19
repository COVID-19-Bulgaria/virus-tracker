import { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import Person from '../Person';
import DiseaseState from '../DiseaseState';
import { checkCollision, changeDirections } from '../Physics';
import Statistics from '../Statistics';

const Infection = () => {
  const containerRef = useRef();
  const statistics = new Statistics({ infected: 0, cured: 0, fatal: 0 });
  const stats = useState(statistics);

  const sketch = (p) => {
    const RECOVERY_TIME = 500;
    const MORTALITY_RATE = 0.05;

    const setupCanvas = (width, height) => {
      p.createCanvas(width, height);
    };

    const population = [];

    const setupPopulation = (size) => {
      population[0] = new Person({
        x: p.random(Person.defaultRadius, p.width - Person.defaultRadius),
        y: p.random(Person.defaultRadius, p.height - Person.defaultRadius),
        radius: 10,
        state: DiseaseState.INFECTED,
        p5: p,
      });

      statistics.incrementInfected();

      for (let i = 1; i < size; i += 1) {
        population[i] = new Person({
          x: p.random(Person.defaultRadius, p.width - Person.defaultRadius),
          y: p.random(Person.defaultRadius, p.height - Person.defaultRadius),
          radius: 10,
          state: DiseaseState.UNAFFECTED,
          p5: p,
        });
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

          if (person.infect(p.random(0, 1) > MORTALITY_RATE)) statistics.incrementInfected();
          if (other.infect(p.random(0, 1) > MORTALITY_RATE)) statistics.incrementInfected();
        }
      });
    };

    const updateState = (person) => {
      if (person.state !== DiseaseState.INFECTED) return;

      if (person.infectedTime > RECOVERY_TIME / 2 && !person.willSurvive) {
        person.state = DiseaseState.FATAL;
        statistics.incrementFatal();
        statistics.infected -= 1;
        return;
      }

      if (person.infectedTime >= RECOVERY_TIME) {
        person.state = DiseaseState.CURED;
        statistics.incrementCured();
        statistics.infected -= 1;
        return;
      }

      person.infectedTime += 1;
    };

    p.setup = () => {
      setupCanvas(640, 480);
      setupPopulation(200);
    };

    p.draw = () => {
      p.background('white');

      population.forEach((person) => {
        updateState(person);
        person.move();
        handleInteractions(person);
        person.render();
      });
    };
  };

  useEffect(() => {
    const p = new p5(sketch, containerRef.current);
  });

  return (
    <div>
      <ul>
        <li>
          Заразени -
          {stats.infected}
        </li>
        <li>
          Излекувани -
          {stats.cured}
        </li>
        <li>
          Жертви -
          {stats.fatal}
        </li>
      </ul>
      <div id="infection" ref={containerRef} />
    </div>
  );
};

export default Infection;
