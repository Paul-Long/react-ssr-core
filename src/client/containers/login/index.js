import './Login.less';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Input, message } from 'antd';
import Action from '@actions';
import md5 from 'blueimp-md5';
import invariant from '@utils/invariant';
import receive from '@utils/receive';

class Login extends React.PureComponent {
  state = {
    userName: '',
    password: '',
  };

  static defaultProps = {
    prefix: 'ss',
  };

  componentWillReceiveProps(nextProps) {
    receive.call(this, {
      key: 'login', nextProps,
      success: () => {
        const {history} = nextProps;
        message.success('登录成功');
        history.push('/home');
      },
      error: (err) => {
        invariant(!err, err, 'error');
      }
    });
  }

  handleSubmit = () => {
    const {userName, password} = this.state;
    if (invariant(userName, '请输入用户名')) return false;
    if (invariant(password, '请输入密码')) return false;
    Action.emit('user.login', {userName, password: md5(password)});
  };

  handleChange = (key, value) => {
    this.setState({[key]: value});
  };

  render() {
    const prefix = 'ss';
    return (
      <div className={`${prefix}-login`}>
        <div className={`${prefix}-login-container`}>
          <Input prefix={<Icon type='user' />}
                 placeholder='Username'
                 onChange={e => this.handleChange('userName', e.target.value)}
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

function mapStateToProps(state) {
  return {
    login: state.user.login,
  };
}

export default connect(mapStateToProps)(Login);

