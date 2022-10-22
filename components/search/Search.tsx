import { SetStateAction, useState, useEffect } from "react";
import classes from "./search.module.scss";
import SearchIcon from "./../icons/SearchIcon";
import CloseIcon from "./../icons/CloseIcon";

const MAX_LENGTH_SEARCH_TEXT = 42;
const SEARCH_ERROR_LENGTH = "Слишком длинный запрос";

const Search = () => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    value.length > 0 ? setIsActive(true) : setIsActive(false);
    value.length >= MAX_LENGTH_SEARCH_TEXT
      ? setError(SEARCH_ERROR_LENGTH)
      : setError("");
  }, [value]);

  const changeHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${classes.search} ${error ? classes.isError : ""}`}>
      <input
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={changeHandler}
      />
      <div className={classes.icon}>
        {isActive ? (
          <button onClick={() => setValue("")}>
            <CloseIcon />
          </button>
        ) : (
          <SearchIcon />
        )}
      </div>
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

export default Search;
