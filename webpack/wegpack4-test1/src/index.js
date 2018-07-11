import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>react demo</p>
      </div>
    );
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));