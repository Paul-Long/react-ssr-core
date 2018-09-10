import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'antd';

class IconButton extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool,
    value: PropTypes.string,
    onClick: PropTypes.func,
  };

  handleClick = () => {
    const {onClick, value} = this.props;
    if (typeof onClick === 'function') {
      onClick(value);
    }
  };

  render() {
    const {prefixCls, active, icon} = this.props;
    const className = classNames(
      'ssr-icon-button',
      `${prefixCls}-button`,
      active
    );
    return (
      <div className={className} onClick={this.handleClick}>
        <Icon type={icon} />
      </div>
    );
  }
}

export default IconButton;
