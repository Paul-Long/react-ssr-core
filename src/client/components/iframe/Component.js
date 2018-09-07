import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    src: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
}

export default Component;