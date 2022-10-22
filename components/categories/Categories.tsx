import classes from "./categories.module.scss";
import Category from "./Category";
import { IGroup, IGroupWithChildrens } from "../../interfaces";
import { useState } from "react";

interface ICategoriesProps {
  categories: Array<IGroup>;
}

const Categories = ({ categories }: ICategoriesProps) => {
  const [isOpen, setIsOpen] = useState(null);

  const categoriesTree = categories
    .filter((c) => !c.parent)
    .map((c) => ({
      ...c,
      childrens: categories.filter(category => category.parent === c.folder_id),
    }));

  return (
    <ul className={classes.list}>
      {categoriesTree.map((category: IGroupWithChildrens) => (
        <Category
          key={category.folder_id}
          category={category}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      ))}
    </ul>
  );
};

export default Categories;
