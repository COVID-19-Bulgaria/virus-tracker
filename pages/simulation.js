import dynamic from 'next/dynamic';
import BaseLayout from '../components/BaseLayout';

const Transmission = dynamic(
  () => import('../simulations/rules/Transmission'),
  { ssr: false }
);

const Immunity = dynamic(
  () => import('../simulations/rules/Immunity'),
  { ssr: false }
);

const Infection = dynamic(
  () => import('../simulations/no_restrictions/Infection'),
  { ssr: false }
);

const Simulation = () => (
  <BaseLayout>
    <Transmission />
    <Immunity />

    <Infection />
  </BaseLayout>
);

export default Simulation;
