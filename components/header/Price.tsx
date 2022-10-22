import classes from "./header.module.scss";
import SearchIcon from "./../icons/SearchIcon";

const Price = () => {
  return (
    <button className={classes.price}>
      <SearchIcon />
      Прайс-лист
    </button>
  );
};

export default Price;
