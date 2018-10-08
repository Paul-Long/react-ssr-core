import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import Base from '../Base';

const FormItem = Form.Item;

class User extends Base {
  state = {
    confirmDirty: false,
    visible: false,
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  handleClick = () => {
    this.setState({visible: true});
  };

  handleCancel = () => {
    const form = this.props.form;
    this.setState({visible: false});
    form.setFieldsValue({
      userName: '',
      password: '',
      confirm: '',
    });
  };

  handleOk = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {prefixCls} = this.props;
    const {visible} = this.state;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 18},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 18},
        sm: {span: 12},
      },
    };
    return (
      <div className={`${prefixCls}-user`}>
        <Button size='small' onClick={this.handleClick}>新增</Button>
        <Modal
          title='新增用户'
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label='用户名' {...formItemLayout}>
              {getFieldDecorator('userName', {
                rules: [{
                  required: true, message: 'Please input your userName'
                }],
                initialValue: '',
              })(<Input />)}
            </FormItem>
            <FormItem label='密码' {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password'
                }, {
                  validator: this.validateToNextPassword,
                }]
              })(<Input type='password' />)}
            </FormItem>
            <FormItem label='确认密码' {...formItemLayout}>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password'
                }, {
                  validator: this.compareToFirstPassword,
                }]
              })(<Input type='password' />)}
            </FormItem>
            <FormItem label='电话' {...formItemLayout}>
              {getFieldDecorator('phone', {
                rules: [{
                  required: true, message: 'Please input your phone'
                }]
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(User);