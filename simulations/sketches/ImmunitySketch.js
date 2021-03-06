/* eslint-disable no-param-reassign */
import Person from '../Person';
import DiseaseState from '../DiseaseState';
import RulesSketch from './RulesSketch';

const ImmunitySketch = (props) => {
  const setupPopulation = (p5, population) => {
    population[0] = new Person({
      x: 100,
      y: 48,
      horizontalSpeed: 1,
      verticalSpeed: 0,
      radius: 30,
      state: DiseaseState.INFECTED,
      p5,
    });

    population[1] = new Person({
      x: 170,
      y: 48,
      horizontalSpeed: 0,
      verticalSpeed: 0,
      radius: 30,
      state: DiseaseState.CURED,
      p5,
    });
  };

  return <RulesSketch id="immunity" setupPopulation={setupPopulation} {...props} />;
};

export default ImmunitySketch;
