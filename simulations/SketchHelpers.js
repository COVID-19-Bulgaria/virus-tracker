/* eslint-disable no-param-reassign */
import DiseaseState from './DiseaseState';
import { checkCollision, changeDirections } from './Physics';

const setupCanvas = (p5, width, height) => {
  const canvas = p5.createCanvas(width, height);
  canvas.class('simulation');
};

const handleInteractions = (p5, person, population, statistics = null, mortalityRate = 0) => {
  population.forEach((other) => {
    if (other === person) return;
    if (person.state === DiseaseState.FATAL || other.state === DiseaseState.FATAL) return;

    if (checkCollision(person, other)) {
      changeDirections(person, other);

      if (person.state === other.state) return;
      if (person.state === DiseaseState.CURED || other.state === DiseaseState.CURED) return;

      if (statistics === null) {
        person.infect();
        other.infect();
      } else {
        if (person.infect(p5.random(0, 1) > mortalityRate)) {
          statistics.infected += 1;
          statistics.unaffected -= 1;
        }

        if (other.infect(p5.random(0, 1) > mortalityRate)) {
          statistics.infected += 1;
          statistics.unaffected -= 1;
        }
      }
    }
  });
};

export {
  setupCanvas,
  handleInteractions,
};
