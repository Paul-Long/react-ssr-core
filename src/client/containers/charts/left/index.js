import React from 'react';
import { findDOMNode } from 'react-dom';
import echarts from 'echarts';
import { IndicatorStatus } from '@containers/charts/varible';
import Basic from '../Basic';
import Option, { calcTip } from '../option';
import Tip from './Tip';
import MACDTip from './MACDTip';
import { Indicator, KLineType } from '../varible';
import Tooltip from '../tooltip';

class Left extends Basic {
  constructor(props) {
    super(props);
    this.indicators = [];
    this.KLineType = KLineType.KLINE;
  }

  componentDidMount() {
    const {manager} = this.props;
    const node = this.updateSize();
    this.charts = echarts.init(node);
    this.setOption();
    window.addEventListener('resize', this.resize);
    window.addEventListener('mousemove', this.handleMouseMove);
    manager.on('maChange', this.handleMaChange);
    manager.on('indicator', this.handleIndicatorChange);
    manager.on('KLine-type', this.handleKLineChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('mousemove', this.handleMouseMove);
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

  setOption = () => {
    const {manager} = this.props;
    const opt = {
      width: this.size.width,
      height: this.size.height,
      manager: this.props.manager,
      indicators: this.indicators,
    };
    this.option = new Option(opt)
      .kLine(this.kLineType)
      .ma()
      .volume()
      .macd()
      .kdj()
      .boll()
      .rsi()
      .json();
    const series = this.option.series;
    const tip = calcTip(series, this.option, true);
    manager.emit('tooltip-last', tip);
    this.charts.setOption(this.option, true);
  };

  resize = () => {
    this.charts.resize();
    this.updateSize();
    this.setOption();
  };

  handleKLineChange = (type) => {
    this.KLineType = type;
    this.setOption();
  };

  handleIndicatorChange = (indicators) => {
    if (!(indicators instanceof Array)) {
      indicators = [indicators];
    }
    this.indicators = this.indicators.filter(h => !indicators.some(o => o.indicator === h.indicator));
    this.indicators = [...this.indicators, ...indicators];
    this.setOption();
  };

  handleMaChange = (mas) => {
    this.setOption({mas});
  };

  handleMouseMove = event => {
    const {manager} = this.props;
    if (event.clientY < this.bgSize.y || event.clientY > this.bgSize.y + this.bgSize.height) {
      manager.emit('tooltip-hide');
      return;
    }
    const option = this.charts.getOption();
    let xy = this.charts.convertFromPixel({seriesIndex: 0}, [event.offsetX, event.offsetY]);
    if (xy[0] >= option.series[0].data.length || xy[0] < option.dataZoom[1].startValue) {
      manager.emit('tooltip-hide');
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
        />
        <div
          ref={this.saveRef('bg')}
          className={`${prefix}-bg`}
        />
        <Tooltip prefixCls={prefix} manager={manager} />
        {/*<Tip prefixCls={prefix} manager={manager} />*/}
        {/*<MACDTip ref={this.saveRef('mTip')} prefixCls={prefix} manager={manager} />*/}
      </div>
    );
  }
}

export default Left;