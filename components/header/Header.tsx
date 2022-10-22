import classes from "./header.module.scss";
import LangPanel from './LangPanel';
import Contacts from './Contacts';
import Menu from './Menu';
import Logo from './Logo';
import Price from './Price';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <Contacts />
        <LangPanel />
      </div>
      <div className={classes.bottom}>
        <Menu />
        <Logo />
        <Price />
      </div>
    </header>
  );
};

export default Header;
