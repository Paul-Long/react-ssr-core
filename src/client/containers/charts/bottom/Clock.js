import React from 'react';
import PropTypes from 'prop-types';

const FORMAT = 'HH:mm:ss';

class Clock extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
  };
  state = {
    time: new Date().format(FORMAT)
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({time: new Date().format(FORMAT)});
    }, 1000);
  }

  render() {
    const {time} = this.state;
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-clock`}>{time}</div>
    );
  }
}

export default Clock;