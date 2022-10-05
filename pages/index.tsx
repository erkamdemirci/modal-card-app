import type { NextPage } from 'next';
import ModalTemplates from '../components/Templates';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto py-4 self-center">
      <ModalTemplates />
    </div>
  );
};

export default Home;
