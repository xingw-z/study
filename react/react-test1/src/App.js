import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  render() {
    axios.post('http://localhost:3000/signin', {
      username: 'asdasd',
      password: 'asdasd'
    }).then(res => {
      let _data = res.data
      console.log(_data, 'success')
    }).catch(err => {
      console.log(err, 'fail')
    })
    return (
      <div className="App">
        react
      </div>
    );
  }
}

export default App;
