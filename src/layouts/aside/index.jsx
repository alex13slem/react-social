import css from './style.module.css';
import { NavLink } from 'react-router-dom';
const Aside = () => {
  return (
    <aside className={css.root}>
      <nav className={css.nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/friends">Друзья</NavLink>
        <NavLink to="/chat">Чат</NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
