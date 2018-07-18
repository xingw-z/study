import { Component } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  componentDidMount () {
  }
  handleLogin () {
    axios.post('http://120.78.185.217:5005/signin', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswrodChange (event) {
    this.setState({
      password: event.target.value
    })
  }
  render () {
    return (
      <div>
        <Input placeholder="username" value={this.state.username}
        onChange={this.handleUsernameChange.bind(this)}/>
        <Input placeholder="password" value={this.state.password}
        onChange={this.handlePasswrodChange.bind(this)}/>
        <Button
            type="primary"
            onClick={this.handleLogin.bind(this)}
          >
            Log in
          </Button>
      </div>
    )
  }
}

export default Login