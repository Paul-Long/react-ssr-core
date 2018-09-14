import React from 'react';
import Basic from '../Basic';
import IconButton from '../IconButton';
import Indicator from './Indicator';
import KLine from './KLine';

const icons = ['area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart'];

class ToolBar extends Basic {
  state = {
    value: 'area-chart',
  };

  handleClick = (value) => {
    this.setState({value});
  };

  render() {
    const {value} = this.state;
    const {prefixCls, manager} = this.props;
    const prefix = `${prefixCls}-toolbar`;
    return (
      <div className={prefix}>
        <Indicator prefixCls={prefix} manager={manager} />
        <KLine prefixCls={prefix} manager={manager} />
        {/*{icons.map(icon => (*/}
        {/*<IconButton*/}
        {/*prefixCls={prefix}*/}
        {/*icon={icon}*/}
        {/*key={icon}*/}
        {/*value={icon}*/}
        {/*active={icon === value}*/}
        {/*onClick={this.handleClick}*/}
        {/*/>*/}
        {/*))}*/}
      </div>
    );
  }
}

export default ToolBar;