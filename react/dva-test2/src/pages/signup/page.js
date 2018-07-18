import { Component } from 'react';
import { Input, Button, message } from 'antd';
import axios from 'axios'

class Signup extends Component {
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
    axios.post('http://120.78.185.217:5005/signup', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res)
      this.handleMsg(res.data)
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
  handleMsg (res) {
    if (res.code === '00') {
      message.success(res.msg)
    } else {
      message.error(res.msg)
    }
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
            sign up
          </Button>
      </div>
    )
  }
}

export default Signup