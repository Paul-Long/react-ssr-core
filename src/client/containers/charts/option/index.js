import { axisPointer } from '@components/charts';
import { upColor, downColor } from '@components/charts/color';
import { IndicatorStatus, MAS, Indicator } from '../varible';
import { Options } from '../indicator';
import tooltip, {tip} from './tooltip';
import baseData from './data';
import { splitData } from './utils';
import grid from './grid';
import dataZoom from './dataZoom';

const _data = splitData(baseData);

function Option({data = _data, width, height, manager, indicators = []}) {
  this.__manager = manager;
  this.__data = data || [];
  this.__width = width;
  this.__height = height;
  this.__indicators = indicators.filter(o => o.status === IndicatorStatus.OPEN);
  this.__gridIndex = 0;
  this.__axisIndex = 0;
  this.__option = {
    animation: false,
    axisPointer: {...axisPointer},
    xAxis: [],
    yAxis: [],
  };
}

Option.prototype.kLine = function (kLineType) {
  const option = Options.kLine({
    category: this.__data.categoryData,
    data: this.__data.values,
    gridIndex: this.__gridIndex,
    axisIndex: this.__axisIndex,
    kLineType,
  });
  this.__option.xAxis = [option.xAxis];
  this.__option.yAxis = [option.yAxis];
  this.__option.series = [...option.series];
  return this;
};

Option.prototype.volume = function () {
  if (this.isBlank(Indicator.VOLUME)) return this;
  this.__gridIndex += 1;
  this.__axisIndex += 1;
  const option = Options.volume({
    category: this.__data.categoryData,
    data: this.__data.volumes,
    gridIndex: this.__gridIndex,
    axisIndex: this.__axisIndex,
  });
  this.__option.xAxis.push(option.xAxis);
  this.__option.yAxis.push(option.yAxis);
  this.__option.visualMap = {
    show: false,
    seriesIndex: this.__option.series.length,
    dimension: 2,
    pieces: [{
      value: 1,
      color: downColor
    }, {
      value: -1,
      color: upColor
    }]
  };
  this.__option.series = [...this.__option.series, ...option.series];
  return this;
};

Option.prototype.macd = function () {
  if (this.isBlank(Indicator.MACD)) return this;
  this.__gridIndex += 1;
  this.__axisIndex += 1;
  const option = Options.macd({
    category: this.__data.categoryData,
    data: this.__data.closes,
    gridIndex: this.__gridIndex,
    axisIndex: this.__axisIndex,
  });
  this.__option.xAxis.push(option.xAxis);
  this.__option.yAxis.push(option.yAxis);
  this.__option.series = [...this.__option.series, ...option.series];
  return this;
};

Option.prototype.ma = function () {
  const masAll = MAS.map(m => m.value);
  const mas = this.__indicators.filter(o => masAll.some(m => m === o.indicator));
  if (mas.length === 0) return this;
  const series = Options.ma({data: this.__data.values, mas, axisIndex: 0});
  this.__option.series = [...this.__option.series, ...series];
  return this;
};

Option.prototype.boll = function () {
  if (this.isBlank(Indicator.BOLL)) return this;

  const series = Options.boll({data: this.__data.closes, axisIndex: 0});
  this.__option.series = [...this.__option.series, ...series];
  return this;
};

Option.prototype.kdj = function () {
  if (this.isBlank(Indicator.KDJ)) return this;

  this.__gridIndex += 1;
  this.__axisIndex += 1;
  const option = Options.kdj({
    category: this.__data.categoryData,
    data: this.__data.closes,
    gridIndex: this.__gridIndex,
    axisIndex: this.__axisIndex,
  });
  this.__option.xAxis.push(option.xAxis);
  this.__option.yAxis.push(option.yAxis);
  this.__option.series = [...this.__option.series, ...option.series];
  return this;
};

Option.prototype.rsi = function () {
  if (this.isBlank(Indicator.RSI)) return this;

  this.__gridIndex += 1;
  this.__axisIndex += 1;

  const option = Options.rsi({
    category: this.__data.categoryData,
    data: this.__data.rsi,
    gridIndex: this.__gridIndex,
    axisIndex: this.__axisIndex,
  });
  this.__option.xAxis.push(option.xAxis);
  this.__option.yAxis.push(option.yAxis);
  this.__option.series = [...this.__option.series, ...option.series];
  return this;
};

Option.prototype.isBlank = function (indicator) {
  return !this.__indicators.some(i => indicator === i.indicator);
};

Option.prototype.json = function () {
  this.__option.grid = grid({
    height: this.__height,
    maxLength: this.__data.maxLength,
    gridCount: this.__gridIndex + 1,
  });
  this.__option.dataZoom = dataZoom({
    height: this.__height,
    gridCount: this.__gridIndex + 1,
  });
  const axisIndex = this.__option.xAxis.length - 1;
  this.__option.xAxis[axisIndex].axisLabel.show = true;
  this.__option.xAxis[axisIndex].axisPointer.label.show = true;
  this.__option.tooltip = tooltip({manager: this.__manager, option: this.__option});
  return this.__option;
};

export default Option;

export const calcTip = tip;
