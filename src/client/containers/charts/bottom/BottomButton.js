import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BottomButton extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
  };

  handleClick = () => {
    const {onClick, value} = this.props;
    onClick(value);
  };

  render() {
    const {prefixCls, text, active} = this.props;
    const className = classNames(`${prefixCls}-button`, {active});
    return (
      <div className={className} onClick={this.handleClick}>
        {text}
      </div>
    );
  }
}

export default BottomButton;
