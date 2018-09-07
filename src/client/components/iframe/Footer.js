import React from 'react';
import Component from './Component';

class Footer extends Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-footer`}>
      </div>
    );
  }
}

export default Footer;