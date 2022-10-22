import { makeAutoObservable } from "mobx";
import { IService } from "../interfaces";

class Cart {
  services: Array<IService> = [];
  count: number = 0;
  totalPrice: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add(service: IService, count: number = 1) {
    let index = this.services.findIndex(s => s.id === service.id);
    
    if (index === -1) {
      this.services.push({...service, count});
    } else {
      this.services[index].count = this.services[index].count + count;
    }

    this.count += count;
    this.totalPrice += +service.price;
  }

  remove(id: number, count: number, price: number) {
    this.services = this.services.filter((service: IService) => service.id !== id);
    this.count -= count;
    this.totalPrice -= price * count;
  }

  addCount(id: number, price: number) {
    this.services = this.services.map(s => s.id === id ? {...s, count: s.count + 1} : s);
    this.totalPrice += price;
    this.count += 1;
  }

  downCount(id: number, price: number) {
    this.services = this.services.map(s => s.id === id ? {...s, count: s.count - 1} : s);
    this.totalPrice -= price;
    this.count -= 1;
  }
}

const cart = new Cart();

export default cart;
