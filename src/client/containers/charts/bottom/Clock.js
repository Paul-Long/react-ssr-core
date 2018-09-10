import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const FORMAT = 'HH:mm:ss';

class Clock extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
  };
  state = {
    time: moment().format(FORMAT)
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({time: moment().format(FORMAT)});
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