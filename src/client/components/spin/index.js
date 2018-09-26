import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { LOGO } from '@constants/images';
import './style.less';

class Spin extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
  };
  static defaultProps = {
    prefixCls: 'ssr-spin',
  };

  render() {
    const {prefixCls} = this.props;
    return (
      <div className={prefixCls}>
        <img src={LOGO} className='rubberBand' />
      </div>
    );
  }
}

export default Spin;