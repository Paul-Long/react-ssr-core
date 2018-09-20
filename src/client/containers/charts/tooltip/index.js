import React from 'react';
import Basic from '../Basic';
import MacdTip from './MacdTip';
import KLineTip from './KLineTip';
import KdjTip from './KdjTip';
import RsiTip from './RsiTip';

class ToolTip extends Basic {
  render() {
    const {prefixCls, manager} = this.props;
    const prefix = `${prefixCls}-tip`;
    const props = {
      prefixCls: prefix,
      manager,
    };
    return (
      <div className={prefix}>
        <KLineTip {...props} />
        <MacdTip  {...props} />
        <KdjTip   {...props} />
        <RsiTip   {...props} />
      </div>
    );
  }
}

export default ToolTip;