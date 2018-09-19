import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Manager from '../Manager';

class Tip extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    manager: Manager,
  };

  state = {
    data: null,
    base: {}
  };

  componentDidMount() {
    this.props.manager.on('baseData', data => this.setState({base: data}));
    this.props.manager.on('tooltip', this.handleChange);
    this.props.manager.on('tipHide', this.handleHide);
  }

  handleChange = ({kLine}) => {
    this.setState({data: kLine});
  };

  handleHide = () => {
    if (this.state.data) {
      this.setState({data: null});
    }
  };

  render() {
    const {prefixCls} = this.props;
    const {base} = this.state;
    let data = this.state.data || base || {};

    const prefix = `${prefixCls}-tip`;
    const labelCls = `${prefix}-label`;
    let cls;
    if (data.open > data.close) {
      cls = 'down';
    } else if (data.open < data.close) {
      cls = 'up';
    }
    const textCls = classNames(`${prefix}-text`, cls);
    return (
      <div className={`${prefixCls}-tip`}>

        <span className={labelCls}>开=</span>
        <span className={textCls}>{data.open}</span>

        <span className={labelCls}>高=</span>
        <span className={textCls}>{data.lowest}</span>

        <span className={labelCls}>收=</span>
        <span className={textCls}>{data.close}</span>

        <span className={labelCls}>低=</span>
        <span className={textCls}>{data.highest}</span>

      </div>
    );
  }
}

export default Tip;