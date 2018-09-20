import React from 'react';
import classNames from 'classnames';
import { rsiColor } from '@components/charts/color';
import Tip from './Tip';
import Item from './Item';

class RsiTip extends Tip {
  static defaultProps = {
    indicator: 'rsi',
  };
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-rsi`);
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
        <Item prefixCls={prefixCls} label={' RSI(14)'} value={data.data} style={{color: rsiColor}} />
      </div>
    );
  }
}

export default RsiTip;
