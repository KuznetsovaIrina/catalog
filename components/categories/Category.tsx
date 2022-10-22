import ArrowIcon from "./../icons/ArrowIcon";
import classes from "./categories.module.scss";
import { useState } from "react";
import Link from "next/link";
import { IGroupWithChildrens, IGroup } from "../../interfaces";
import { removeNumber } from "./../../utils/index";
import { useRouter } from "next/router";

interface ICategoryProps {
  category: IGroupWithChildrens;
  setIsOpen: any;
  isOpen: string | null;
}

const Category = ({ category, setIsOpen, isOpen }: ICategoryProps) => {
  const router = useRouter();
  const currentCategoryId = router.query.id;
  const isHaveChildrens = category.childrens.length > 0;

  const clickHandler = () => {
    isOpen !== category.folder_id
      ? setIsOpen(category.folder_id)
      : setIsOpen(null);
  };

  const setCurrentClass = (id: string): string => currentCategoryId === id ? classes.isCurrent : "";
  const openClass = isOpen === category.folder_id ? classes.isOpen : "";

  return (
    <li className={openClass}>
      <div className={classes.parent}>
        <Link href={`/category/${category.folder_id}`}>
          <a className={setCurrentClass(category.folder_id)}>
            {removeNumber(decodeURIComponent(category.name))}
          </a>
        </Link>
        {isHaveChildrens && (
          <button onClick={clickHandler}>
            <ArrowIcon color="#0084CA" />
          </button>
        )}
      </div>
      {isOpen === category.folder_id && isHaveChildrens && (
        <ul className={classes.sub}>
          {isHaveChildrens &&
            category.childrens.map((c: IGroup) => (
              <li key={c.folder_id}>
                <Link href={`/category/${c.folder_id}`}>
                  <a className={setCurrentClass(c.folder_id)}>
                    {removeNumber(decodeURIComponent(c.name)).replace(",", ", ")}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

export default Category;
