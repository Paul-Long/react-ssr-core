import React from 'react';
import PropTypes from 'prop-types';
import Manager from './Manager';

class Basic extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    manager: Manager
  };
}

export default Basic;
