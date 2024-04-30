import { Outlet } from 'react-router';
import css from './style.module.css';
import Header from '../header';
import Aside from '../aside';
const LayoutBase = () => {
  return (
    <div className={css.root}>
      <Header />
      <Aside />
      <Outlet />
    </div>
  );
};

export default LayoutBase;
