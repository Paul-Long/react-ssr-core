import React from 'react';
import classNames from 'classnames';
import Tip from './Tip';

class RsiTip extends Tip {
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-rsi`);
  };

  render() {
    return (
      <div className={this.getCls()}>

      </div>
    );
  }
}

export default RsiTip;
