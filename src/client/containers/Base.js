import React from 'react';
import PropTypes from 'prop-types';
import title from '@utils/title';

class Base extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
  };
  static defaultProps = {
    prefixCls: 'ssr',
  };

  componentDidMount() {
    title.call(this);
  }
}

export default Base;