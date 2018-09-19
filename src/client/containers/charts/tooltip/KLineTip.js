import React from 'react';
import classNames from 'classnames';
import Tip from './Tip';

class KLineTip extends Tip {
  getCls = () => {
    const {prefixCls} = this.props;
    return classNames(`${prefixCls}-kLine`);
  };

  render() {
    return (
      <div className={this.getCls()}>

      </div>
    );
  }
}

export default KLineTip;