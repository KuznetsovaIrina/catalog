import { useState } from "react";
import { IService } from './../interfaces/index';
import { observer } from 'mobx-react-lite';
import cart from "../store/cart";

interface IInputNumberProps {
  size?: "big" | "small";
  count: number | string;
  service: IService;
}

const InputNumber = ({ size, count, service }: IInputNumberProps) => {
  const [value, setValue] = useState(count);

  const down = () => {
    setValue(+value - 1);
    +value - 1 === 0
      ? cart.remove(service.id, 1, +service.price)
      : cart.downCount(service.id, +service.price);
  }
  
  const add = () => {
    setValue(+value + 1);
    cart.addCount(service.id, +service.price);
  }

  return (
    <div className={`count ${size}`}>
      <button onClick={down}>-</button>
      <input
        type="number"
        step="1"
        min="1"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        readOnly
      />
      <button onClick={add}>+</button>
    </div>
  );
};

export default observer(InputNumber);
