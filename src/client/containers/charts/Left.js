import React from 'react';
import Basic from './Basic';

class Left extends Basic {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-left`}>

      </div>
    );
  }
}

export default Left;