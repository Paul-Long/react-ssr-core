import React from 'react';
import Basic from './Basic';

class Right extends Basic {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-right`}>

      </div>
    );
  }
}

export default Right;