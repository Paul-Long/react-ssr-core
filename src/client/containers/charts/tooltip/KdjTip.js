import React from 'react';
import classNames from 'classnames';
import Tip from './Tip';

class KdjTip extends Tip {
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-kdj`);
  };
  render() {
    return (
      <div className={this.getCls()}>

      </div>
    );
  }
}

export default KdjTip;