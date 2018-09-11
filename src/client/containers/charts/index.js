import './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import Left from './left';
import Right from './Right';
import Top from './top';
import Bottom from './bottom';
import Toolbar from './toolbar';
import Manager from './Manager';

class Charts extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };
  static defaultProps = {
    prefixCls: 'ssr-charts'
  };

  constructor(props) {
    super(props);
    this.manager = new Manager();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {prefixCls} = this.props;
    const props = {
      prefixCls,
      manager: this.manager,
    };
    return (
      <div className={prefixCls}>
        <Top {...props} />
        <div className={`${prefixCls}-content`}>
          <Toolbar {...props} />
          <div className={`${prefixCls}-content-center`}>
            <Left {...props} />
            <Bottom {...props} />
          </div>
          <Right {...props} />
        </div>
      </div>
    );
  }
}

export default Charts;