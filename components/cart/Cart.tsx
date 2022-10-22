import classes from "./cart.module.scss";
import { useState } from "react";
import List from "./List";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import cart from "../../store/cart";
import { observer } from "mobx-react-lite";

const Cart = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`${classes.cart} ${opened ? classes.isOpened : ""}`}>
      <div className={classes.title}>Корзина</div>

      <ul className={classes.total}>
        <li>
          <span className={classes.key}>Количество услуг в корзине</span>
          <b className={classes.value}>{cart.count}</b>
        </li>
        <li>
          <span className={classes.key}>Сумма заказа</span>
          <b className={classes.value}>{cart.totalPrice}₽</b>
        </li>
      </ul>

      {opened && (
        <>
          <List />
          {cart.count > 0 &&
          <a href="#" className={`${classes.button} button`}>
            Оформить заказ
          </a>}
        </>
      )}

      <button
        className={classes.open}
        title="Открыть корзину"
        onClick={() => setOpened(!opened)}
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
};

export default observer(Cart);
