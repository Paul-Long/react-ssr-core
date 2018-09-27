import React from 'react';
import Base from '@containers/Base';
import { Button } from 'antd';
import { logo } from './varible';

class Top extends Base {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-top`}>
        <img src={logo} />
        <Button size='small'>新增</Button>
      </div>
    );
  }
}

export default Top;