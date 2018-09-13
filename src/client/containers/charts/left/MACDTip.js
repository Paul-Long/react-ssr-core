import React from 'react';
import Basic from '../Basic';

class MACDTip extends Basic {
  state = {
    dif: null,
    dea: null,
    style: {top: 0},
  };

  componentDidMount() {
    const {manager} = this.props;
    manager.on('macd-tip', (macd) => {
      this.setState(macd);
    });
    manager.on('tipHide', () => {
      this.setState({dif: null, dea: null});
    });
  }

  updateStyle = (style) => {
    this.setState({style});
  };

  render() {
    const {dif, dea, style} = this.state;
    const {prefixCls} = this.props;
    const prefix = `${prefixCls}-tip-macd`;
    return (
      <div className={prefix} style={style}>
        <span>MACD(12, 26, 9)</span>
        <div className={`${prefix}-dif`}>DIF <span>{dif}</span></div>
        <div className={`${prefix}-dea`}>DEA(9) <span>{dea}</span></div>
      </div>
    );
  }
}

export default MACDTip;