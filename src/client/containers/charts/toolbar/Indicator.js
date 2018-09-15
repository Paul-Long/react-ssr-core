import React from 'react';
import PropTypes from 'prop-types';
import Basic from '../Basic';
import IconButton from '../IconButton';
import { Menu, Popover } from 'antd';
import { Indicator, IndicatorStatus } from '@containers/charts/varible';

class IndicatorComponent extends Basic {
  static propTypes = {
    onChange: PropTypes.func
  };
  state = {
    visible: false,
    selectedKeys: [],
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
    const {selectedKeys} = this.state;
    const {manager} = this.props;
    const selected = !selectedKeys.some(s => s === key);
    manager.emit('indicator', [{
      indicator: key,
      status: selected ? IndicatorStatus.OPEN : IndicatorStatus.CLOSE,
    }]);
    if (selected) {
      const s = [...selectedKeys, key];
      this.setState({selectedKeys: s});
    } else {
      this.setState({selectedKeys: selectedKeys.filter(s => s !== key)});
    }
  };

  renderMenu = () => {
    const {prefixCls} = this.props;
    return (
      <Menu className={`${prefixCls}-menu`} onSelect={this.handleMenuClick} multiple selectedKeys={[]}>
        <Menu.Item key={Indicator.MACD}>MACD</Menu.Item>
        <Menu.Item key={Indicator.VOLUME}>交易量</Menu.Item>
        <Menu.Item key={Indicator.BOLL}>布林带</Menu.Item>
        <Menu.Item key={Indicator.KDJ}>KDJ</Menu.Item>
      </Menu>
    );
  };

  render() {
    const {prefixCls} = this.props;
    const {visible} = this.state;
    return (
      <Popover
        content={this.renderMenu()}
        placement='rightBottom'
        trigger='click'
        visible={visible}
        overlayClassName='charts-indicator'
        onVisibleChange={this.handleVisibleChange}
      >
        <IconButton
          prefixCls={prefixCls}
          icon={'area-chart'}
          value={'area-chart'}
          onClick={this.handleClick}
        />
      </Popover>
    );
  }
}

export default IndicatorComponent;