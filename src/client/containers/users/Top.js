import React from 'react';
import { Link } from 'react-router-dom';
import Base from '@containers/Base';
import { logo } from './varible';
import User from './User';

class Top extends Base {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-top`}>
        <Link to='/home'>
          <img src={logo} />
        </Link>
        <User prefixCls={prefixCls} />
      </div>
    );
  }
}

export default Top;