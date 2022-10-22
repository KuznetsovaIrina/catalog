import Link from "next/link";
import { observer } from "mobx-react-lite";
import ArrowLeftIcon from "./../icons/ArrowLeftIcon";
import CartIcon from "./../icons/CartIcon";
import InputNumber from "./../InputNumber";
import { IService } from "../../interfaces";
import cart from "./../../store/cart";
import classes from "./services.module.scss";

interface IServiceProps {
  service: IService;
}

const Service = observer(({ service }: IServiceProps) => {
  const inCart = cart.services.findIndex((s) => s.id === service.id) !== -1;

  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <div className={classes.title}>{decodeURIComponent(service.name)}</div>
        <Link href={`/service/${service.id}`}>
          <a className={classes.more}>
            Подробнее
            <ArrowLeftIcon />
          </a>
        </Link>
      </div>
      <div className={classes.buyPanel}>
        <div className={classes.price}>{service.price}₽</div>
        {inCart ? (
          <InputNumber
            size="big"
            count={service.count ? service.count : 1}
            service={service}
          />
        ) : (
          <div className={classes.toCartWrap}>
            <button
              className={classes.toCart}
              onClick={() => cart.add(service)}
            >
              <CartIcon />
            </button>
          </div>
        )}
      </div>
    </li>
  );
});

export default Service;
