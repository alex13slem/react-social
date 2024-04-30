import css from './style.module.css';
const Header = () => {
  return (
    <header className={css.root}>
      <div className={css.container}>
        <div className={css['site-logo']}>LOGO</div>
      </div>
    </header>
  );
};

export default Header;
