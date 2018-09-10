import React from 'react';
import { findDOMNode } from 'react-dom';
import eCharts from 'echarts';
import Basic from './Basic';
import option from './option';

class Left extends Basic {
  componentDidMount() {
    const node = findDOMNode(this.cc);
    const rect = node.getBoundingClientRect();
    this.charts = eCharts.init(node);
    this.charts.setOption(option({
      width: rect.width,
      height: rect.height
    }));
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.charts.resize();
    const node = findDOMNode(this.cc);
    const rect = node.getBoundingClientRect();
    this.charts.setOption(option({
      width: rect.width,
      height: rect.height
    }), true);
  };

  saveRef = name => node => this[name] = node;

  render() {
    const {prefixCls} = this.props;
    const prefix = `${prefixCls}-left`;
    return (
      <div className={prefix}>
        <div ref={this.saveRef('cc')} style={{width: '100%', height: '100%'}} />
        <div ref={this.saveRef('bg')} className={`${prefix}-bg`} />
      </div>
    );
  }
}

export default Left;