import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('counter')
@observer
class App extends Component {
  render() {
    const { counter } = this.props;
    console.log(this.props);
    return (
      <div>
        <button onClick={counter.increment}>+</button>
        <span>{counter.count}</span>
        <button onClick={counter.decrement}>-</button>
        <span>{counter.getPrice}</span>
      </div>
    );
  }
}

export default App;
