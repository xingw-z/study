import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Testhooks from './hooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Testhooks></Testhooks>
      </div>
    );
  }
}

function Testhooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default App;
