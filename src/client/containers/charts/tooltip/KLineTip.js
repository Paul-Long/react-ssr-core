import React from 'react';
import classNames from 'classnames';
import Tip from './Tip';
import Item from './Item';
import VolumeTip from './VolumeTip';

class KLineTip extends Tip {
  keys = [['开', 'open'], ['高', 'highest'], ['收', 'close'], ['低', 'lowest']];
  static defaultProps = {
    indicator: 'kLine',
  };

  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-kLine`);
  };

  render() {
    const {tip, tipLast} = this.state;
    const {prefixCls, manager} = this.props;
    const data = tip || tipLast || {};
    const style = {display: 'none'};
    if (tipLast) {
      style.top = tipLast.grid.top - 20;
      style.left = tipLast.grid.left;
      style.display = 'flex';
    }
    return (
      <div className={this.getCls()} style={style}>
        {this.keys.map(([l, k]) => (<Item key={k} prefixCls={prefixCls} label={l} value={data[k]} />))}
        <VolumeTip prefixCls={prefixCls} manager={manager} />
      </div>
    );
  }
}

export default KLineTip;