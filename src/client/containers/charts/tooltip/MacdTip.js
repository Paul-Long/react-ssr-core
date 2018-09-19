import React from 'react';
import classNames from 'classnames';
import Tip from './Tip';

class MacdTip extends Tip {
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-macd`);
  };
  render() {
    return (
      <div className={this.getCls()}>

      </div>
    );
  }
}

export default MacdTip;