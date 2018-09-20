import React from 'react';
import classNames from 'classnames';
import { kdjKColor, kdjDColor, kdjJColor } from '@components/charts/color';
import Tip from './Tip';
import Item from './Item';

class KdjTip extends Tip {
  static defaultProps = {
    indicator: 'kdj',
  };
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-kdj`);
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
        <Item prefixCls={prefixCls} label={'KDJ(14)'} value={''} />
        <Item prefixCls={prefixCls} label={'K'} value={data.k} style={{color: kdjKColor}} />
        <Item prefixCls={prefixCls} label={'D'} value={data.d} style={{color: kdjDColor}} />
        <Item prefixCls={prefixCls} label={'J'} value={data.j} style={{color: kdjJColor}} />
      </div>
    );
  }
}

export default KdjTip;