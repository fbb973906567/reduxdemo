import React, { Component } from 'react';
import './index.css';
import reducer from './reducer';
import {createStore} from 'redux';
const store=createStore(reducer);
store.subscribe(function(){
  debugger
  var result=store.getState()
  App.setState({
    num:result.num
  })
})
class App extends Component {
  constructor(){
    super()
    this.state={
      num:0
    }
  }
  add(){
      store.dispatch({type:'INCREMENT'})
  }
  remove(){
      store.dispatch({type:'DECREMENT'})
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.add.bind(this)}>+</button>
        <span className='num'>{this.state.num}</span>
        <button onClick={this.remove.bind(this)}>-</button>
      </div>
    );
  }
}

export default App;
