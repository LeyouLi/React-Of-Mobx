import { observable, configure, action, computed } from 'mobx';

configure({enforceActions: 'observed'});

class CounterStore {
  @observable count = 0;

  @action increment = () => {
    this.count = this.count + 1;
    console.log(this.count);
  }

  @action decrement = () => {
    this.count = this.count - 1;
    console.log(this.count);
  }

  @computed get getPrice() {
    return this.count * 10;
  }

} 

const counter = new CounterStore();

export default counter;