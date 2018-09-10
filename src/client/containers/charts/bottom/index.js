import React from 'react';
import Basic from '../Basic';
import BottomButton from './BottomButton';
import Clock from './Clock';

const buttons = [
  {value: '5y', text: '5y'},
  {value: '1y', text: '1y'},
  {value: '6m', text: '6月'},
  {value: '3m', text: '3月'},
  {value: '1m', text: '1月'},
  {value: '5d', text: '5天'},
  {value: '1d', text: '1天'},
  {value: 'go-to', text: '前往到...'},
];

class Bottom extends Basic {
  state = {
    value: '5y',
  };
  handleClick = (value) => {
    this.setState({value});
  };

  render() {
    const {prefixCls} = this.props;
    const prefix = `${prefixCls}-bottom`;
    return (
      <div className={prefix}>
        <div className={`${prefix}-left`}>
          {buttons.map(({value, text}) => (
            <BottomButton
              prefixCls={prefix}
              key={value}
              text={text}
              value={value}
              active={value === this.state.value}
              onClick={this.handleClick}
            />
          ))}
        </div>
        <div className={`${prefix}-right`}>
          <Clock prefixCls={prefix} />
        </div>
      </div>
    );
  }
}

export default Bottom;
