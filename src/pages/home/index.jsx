import css from './style.module.css';
import { useLoaderData } from 'react-router-dom';
import SectProfile from '../../sections/profile';

const PageHome = () => {
  const userData = useLoaderData();
  return (
    <main className={css.root}>
      <SectProfile {...userData} />
    </main>
  );
};

export default PageHome;
