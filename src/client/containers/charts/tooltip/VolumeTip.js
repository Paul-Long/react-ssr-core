import React from 'react';
import Tip from './Tip';
import Item from './Item';

class VolumeTip extends Tip {
  static defaultProps = {
    indicator: 'volume',
  };

  render() {
    const {prefixCls} = this.props;
    const {tip, tipLast} = this.state;
    const data = tip || tipLast || {};
    const style = {display: 'none'};
    if (tipLast) style.display = 'flex';
    return (
      <Item prefixCls={prefixCls} label='量' value={data.data} style={style} />
    );
  }
}

export default VolumeTip;