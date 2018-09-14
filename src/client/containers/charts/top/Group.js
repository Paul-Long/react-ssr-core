import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Dropdown, Menu } from 'antd';
import { MaType } from '../varible';

class Group extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    children: PropTypes.any,
    type: PropTypes.oneOf(Object.keys(MaType)),
    onChange: PropTypes.func,
  };

  handleChange = (checkedValue) => {
    const {onChange} = this.props;
    if (typeof onChange === 'function') {
      onChange(checkedValue);
    }
  };

  renderCheckbox = () => {
    const {options} = this.props;
    return (
      <Checkbox.Group size='small' className='ssr-checkbox-group' onChange={this.handleChange}>
        {options.map(({text, value}) => (<Checkbox key={value} value={value}>{text}</Checkbox>))}
      </Checkbox.Group>
    );
  };

  renderMenu = () => {
    const {options} = this.props;
    return (
      <Menu multiple>
        {options.map(({text, value}) => (<Menu.Item key={value}>{text}</Menu.Item>))}
      </Menu>
    );
  };

  renderDropdown = () => {
    const {children} = this.props;
    return (
      <Dropdown overlay={this.renderMenu()}>
        {children}
      </Dropdown>
    );
  };

  renderChildren = () => {
    const {type} = this.props;
    switch (type) {
      case MaType.DROPDOWN:
        return this.renderDropdown();
      default:
        return this.renderCheckbox();
    }
  };

  render() {
    const {className, type} = this.props;
    const cls = classNames(className, {'is-dropdown': type === MaType.DROPDOWN});
    return (
      <div className={cls}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Group;