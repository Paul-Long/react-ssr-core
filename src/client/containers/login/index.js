import './Login.less';
import React from 'react';
import { Button, Icon, Input, message } from 'antd';

class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
  };

  static defaultProps = {
    prefix: 'ss',
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    if (!username || username === '') {
      message.info('请输入用户名');
      return;
    }
    if (!password || password === '') {
      message.info('请输入密码');
      return;
    }
    console.log(username, password);
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const prefix = 'ss';
    return (
      <div className={`${prefix}-login`}>
        <div className={`${prefix}-login-container`}>
          <Input prefix={<Icon type='user' />}
                 placeholder='Username'
                 onChange={e => this.handleChange('username', e.target.value)}
                 onPressEnter={this.handleSubmit}
          />
          <Input prefix={<Icon type='lock' />}
                 type='password'
                 placeholder='Password'
                 onChange={e => this.handleChange('password', e.target.value)}
                 onPressEnter={this.handleSubmit}
          />
          <Button type='primary'
                  htmlType='submit'
                  onClick={this.handleSubmit}
          >登录</Button>
        </div>
      </div>
    );
  }
}

export default Login;

