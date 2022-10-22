import { useState, useEffect, useRef } from "react";
import classes from "./header.module.scss";
import ArrowIcon from './../icons/ArrowIcon';

const langs = [
  {
    title: "Русский",
    code: "ru",
    url: "#",
  },
  {
    title: "Английский",
    code: "eng",
    url: "#",
  },
  {
    title: "Молдавский",
    code: "mol",
    url: "#",
  },
];

const LangPanel = () => {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState("ru");

  const changeLang = (code: string) => {
    setLang(code);
    setVisible(!visible);
  };

  const handleKeydown = (e: any) => {
    if (e.key === "Escape") {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  }, []);

  return (
    <div className={classes.lang}>
      <button
        className={classes.langCurrent}
        onClick={() => setVisible(!visible)}
      >
        {lang}
        <ArrowIcon />
      </button>

      {visible && (
        <ul className={classes.langList}>
          {langs.map((lang) => (
            <li key={lang.code} onClick={() => changeLang(lang.code)}>
              <a href={lang.url}>{lang.code}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangPanel;
