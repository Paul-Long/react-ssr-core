import React from 'react';
import PropTypes from 'prop-types';
import Basic from '../Basic';
import IconButton from '../IconButton';
import { Menu, Popover } from 'antd';
import { KLineType } from '@containers/charts/varible';

class KLine extends Basic {
  static propTypes = {
    onChange: PropTypes.func
  };
  state = {
    visible: false,
  };

  handleClick = () => {
    this.setState({visible: true});
  };

  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({visible});
    }
  };

  handleMenuClick = ({key}) => {
    const {manager} = this.props;
    manager.emit('KLine-type', key);
  };

  renderMenu = () => {
    const {prefixCls} = this.props;
    return (
      <Menu className={`${prefixCls}-menu`} onSelect={this.handleMenuClick}>
        <Menu.Item key={KLineType.KLINE}>K线图</Menu.Item>
        <Menu.Item key={KLineType.KLINE_O}>空心K线图</Menu.Item>
      </Menu>
    );
  };

  render() {
    const {prefixCls} = this.props;
    const {visible} = this.state;
    return (
      <Popover
        content={this.renderMenu()}
        placement='right'
        trigger='click'
        visible={visible}
        overlayClassName='charts-indicator'
        onVisibleChange={this.handleVisibleChange}
      >
        <IconButton
          prefixCls={prefixCls}
          icon={'line-chart'}
          value={'line-chart'}
          onClick={this.handleClick}
        />
      </Popover>
    );
  }
}

export default KLine;