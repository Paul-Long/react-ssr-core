import React from 'react';
import Basic from './Basic';

class Top extends Basic {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-top`}>

      </div>
    );
  }
}

export default Top;