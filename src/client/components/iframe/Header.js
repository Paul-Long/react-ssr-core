import React from 'react';
import PropTypes from 'prop-types';
import Component from './Component';

class Header extends Component {
  static propTypes = {
    renderHeader: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  };
  renderTitle = () => {
    let {title} = this.props;
    if (typeof title === 'function') {
      title = title();
    }
    return title;
  };

  renderChild = () => {
    const {renderHeader} = this.props;
    if (typeof renderHeader === 'function') {
      return renderHeader();
    }
    return this.renderTitle();
  };

  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-header`}>
        {this.renderChild()}
      </div>
    );
  }
}

export default Header;