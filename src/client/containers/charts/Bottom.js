import React from 'react';
import Basic from './Basic';

class Bottom extends Basic {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-bottom`}>

      </div>
    );
  }
}

export default Bottom;