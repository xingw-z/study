import { Component } from 'react';
import { Input, Button } from 'antd';

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
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <Input placeholder="username" value={this.state.username} />
        <Input placeholder="password" value={this.state.username} />
        <Button
            type="primary"
          >
            Log in
          </Button>
      </div>
    )
  }
}

export default Login