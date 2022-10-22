import classes from "./list.module.scss";
import CloseIcon from "./../icons/CloseIcon";
import InputNumber from "../InputNumber";
import { observer } from "mobx-react-lite";
import cart from "../../store/cart";
import { IService } from './../../interfaces/index';
import { removeNumber } from './../../utils/index';

interface IGroup {
  title: string,
  items: Array<IService>
}

const List = () => {
  const groups: Array<string> = cart.services.map((s) => decodeURIComponent(s.group_p || s.group_c));
  const uniqGroups = groups.filter((group: string, index: number) => groups.indexOf(group) === index).sort();
  const serviceByGroups: Array<IGroup> = uniqGroups.map((group) => ({
      title: group,
      items: cart.services.filter(s => decodeURIComponent(s.group_p || s.group_c) === group),
    }));

  return (
    <div className={classes.groups}>
      {serviceByGroups.map((group: IGroup) => (
        <div className={classes.group} key={group.title}>
          <div className={classes.title}>{removeNumber(group.title)}</div>
          <ul className={classes.list}>
            {group.items.map((s) => (
              <li className={classes.item} key={s.id}>
                <div className={classes.name}>{decodeURIComponent(s.name)}</div>
                <div className={classes.info}>
                  <div className={classes.price}>{s.price}₽</div>
                  <InputNumber count={s.count ? s.count : 1} service={s} />
                </div>
                <button
                  className={classes.remove}
                  onClick={() => cart.remove(s.id, s.count || 1, +s.price)}
                >
                  <CloseIcon />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default observer(List);
