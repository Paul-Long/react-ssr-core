import './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectMenu extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    children: PropTypes.any,
    options: PropTypes.array,
    trigger: PropTypes.oneOf(['click', 'hover']),
  };

  handleClick = () => {

  };

  handleHover = () => {

  };

  render() {
    const {className} = this.props;
    const prefix = 'ssr-select-menu';
    const cls = classNames(className, prefix);
    return (
      <div className={cls}>
        <div className={`${prefix}-items`}>

        </div>
      </div>
    );
  }
}

export default SelectMenu;