import React from 'react';
import { findDOMNode } from 'react-dom';
import echarts from 'echarts';
import Basic from '../Basic';
import option from './option';
import Tip from './Tip';
import MACDTip from './MACDTip';

class Left extends Basic {
  componentDidMount() {
    const {manager} = this.props;
    const node = this.updateSize();
    this.charts = echarts.init(node);
    this.setOption();
    window.addEventListener('resize', this.resize);
    manager.on('maChange', this.handleMaChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  updateSize = () => {
    const node = findDOMNode(this.cc);
    const rect = node.getBoundingClientRect();
    const bgNode = findDOMNode(this.bg);
    this.bgSize = bgNode.getBoundingClientRect();
    this.size = {
      width: rect.width,
      height: rect.height,
    };
    return node;
  };

  setOption = (opt) => {
    opt = opt || {mas: []};
    this.option = option({
      width: this.size.width,
      height: this.size.height,
      mas: opt.mas || [],
      manager: this.props.manager,
    });

    this.mTip.updateStyle({top: this.option.grid[2].top - 20, left: this.option.grid[2].left});
    this.charts.setOption(this.option, true);
  };

  resize = () => {
    this.charts.resize();
    this.updateSize();
    this.setOption();
  };

  handleMaChange = (mas) => {
    this.setOption({mas});
  };

  handleMouseMove = event => {
    const {manager} = this.props;
    if (event.clientY < this.bgSize.y || event.clientY > this.bgSize.y + this.bgSize.height) {
      manager.emit('tipHide');
      return;
    }
    const option = this.charts.getOption();
    let xy = this.charts.convertFromPixel({seriesIndex: 0}, [event.offsetX, event.offsetY]);
    if (xy[0] >= option.series[0].data.length || xy[0] < option.dataZoom[1].startValue) {
      manager.emit('tipHide');
    }
  };

  saveRef = name => node => this[name] = node;

  render() {
    const {prefixCls, manager} = this.props;
    const prefix = `${prefixCls}-left`;
    return (
      <div className={prefix}>
        <div
          ref={this.saveRef('cc')}
          style={{width: '100%', height: 'calc(100% - 64px)'}}
          onMouseMove={this.handleMouseMove}
        />
        <div
          ref={this.saveRef('bg')}
          className={`${prefix}-bg`}
        />
        <Tip prefixCls={prefix} manager={manager} />
        <MACDTip ref={this.saveRef('mTip')} prefixCls={prefix} manager={manager} />
      </div>
    );
  }
}

export default Left;