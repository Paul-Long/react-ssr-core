import './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import Left from './Left';
import Right from './Right';
import Top from './top';
import Bottom from './bottom';
import Toolbar from './toolbar';

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
        <Top prefixCls={prefixCls} />
        <div className={`${prefixCls}-content`}>
          <Toolbar prefixCls={prefixCls} />
          <div className={`${prefixCls}-content-center`}>
            <Left prefixCls={prefixCls} />
            <Bottom prefixCls={prefixCls} />
          </div>
          <Right prefixCls={prefixCls} />
        </div>
      </div>
    );
  }
}

export default Charts;