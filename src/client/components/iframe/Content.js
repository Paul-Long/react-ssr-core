import React from 'react';
import Component from './Component';

class Content extends Component {
  renderChild = () => {
    const {src, children} = this.props;
    if (src) {
      return (
        <iframe src={src} frameBorder='0' />
      );
    }
    return children;
  };

  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-content`}>
        {this.renderChild()}
      </div>
    );
  }
}

export default Content;