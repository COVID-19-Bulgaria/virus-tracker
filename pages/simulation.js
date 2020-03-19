import dynamic from 'next/dynamic';
import BaseLayout from '../components/BaseLayout';

const Infection = dynamic(
  () => import('../simulations/rules/infection'),
  { ssr: false }
);

const Simulation = () => (
  <BaseLayout>
    <Infection />
  </BaseLayout>
);

export default Simulation;
