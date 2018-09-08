import './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import Left from './Left';
import Right from './Right';
import Top from './Top';
import Bottom from './Bottom';
import Toolbar from './Toolbar';

class Charts extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };
  static defaultProps = {
    prefixCls: 'ssr-charts'
  };

  componentDidMount() {
  }

  shouldComponentUpdate() {
    return false;
  }

  saveRef = name => node => (this[name] = node);

  render() {
    const {prefixCls} = this.props;
    return (
      <div className={prefixCls}>
        <Toolbar prefixCls={prefixCls} />
        <div className={`${prefixCls}-content`}>
          <Top prefixCls={prefixCls} />
          <div className={`${prefixCls}-content-center`}>
            <Left prefixCls={prefixCls} />
            <Right prefixCls={prefixCls} />
          </div>
          <Bottom prefixCls={prefixCls} />
        </div>
      </div>
    );
  }
}

export default Charts;