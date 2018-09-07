import './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import Component from './Component';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class IFrame extends Component {
  static propTypes = {
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    renderHeader: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  };
  static defaultProps = {
    prefixCls: 'ssr-iframe',
    showHeader: true,
    showFooter: false,
  };

  render() {
    const {
      prefixCls,
      children,
      src,
      style,
      title,
      showHeader,
      showFooter,
      renderHeader,
    } = this.props;
    return (
      <div className={prefixCls} style={style}>
        {showHeader && <Header prefixCls={prefixCls} renderHeader={renderHeader} title={title} />}
        <Content prefixCls={prefixCls} src={src}>
          {children}
        </Content>
        {showFooter && <Footer prefixCls={prefixCls} />}
      </div>
    );
  }
}

export default IFrame;