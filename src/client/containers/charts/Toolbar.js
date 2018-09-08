import React from 'react';
import Basic from './Basic';

class ToolBar extends Basic {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-toolbar`}>

      </div>
    );
  }
}

export default ToolBar;