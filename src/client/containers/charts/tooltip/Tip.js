import React from 'react';
import PropTypes from 'prop-types';
import Manager from '../Manager';

class Tip extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    indicator: PropTypes.string,
    manager: Manager,
  };

  state = {
    tip: null,
    tipLast: null,
  };

  componentWillMount() {
    const {manager} = this.props;
    if (manager) {
      manager.on('tooltip-hide', this.tipHide);
      manager.on('tooltip-last', this.tipLast);
      manager.on('tooltip', this.tipInfo);
    }
  }

  tipLast = (tipData) => {
    const tipLast = (tipData || {})[this.props.indicator];
    this.setState({tipLast});
  };

  tipInfo = (tipData) => {
    const tip = (tipData || {})[this.props.indicator];
    this.setState({tip});
  };

  tipHide = () => {
    this.setState({tip: null});
  };
}

export default Tip;