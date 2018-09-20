import React from 'react';
import classNames from 'classnames';
import { difLineColor, deaLineColor } from '@components/charts/color';
import Tip from './Tip';
import Item from './Item';

class MacdTip extends Tip {
  static defaultProps = {
    indicator: 'macd',
  };
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-macd`);
  };

  render() {
    const {tip, tipLast} = this.state;
    const {prefixCls} = this.props;
    const data = tip || tipLast || {};
    const style = {display: 'none'};
    if (tipLast) {
      style.top = tipLast.grid.top - 20;
      style.left = tipLast.grid.left;
      style.display = 'flex';
    }
    return (
      <div className={this.getCls()} style={style}>
        <Item prefixCls={prefixCls} label={'MACD(12, 26, 9)'} value={''} />
        <Item prefixCls={prefixCls} label={'DIF'} value={data.dif} style={{color: difLineColor, marginRight: 150}} />
        <Item prefixCls={prefixCls} label={'DEA'} value={data.dea} style={{color: deaLineColor}} />
      </div>
    );
  }
}

export default MacdTip;