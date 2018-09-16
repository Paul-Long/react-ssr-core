import baseData from './data';
import { axisPointer, color, dataZoomInside, dataZoomSlider, } from '@components/charts';
import tooltip from './tooltip';
import { Indicator, IndicatorStatus, MAS } from '../varible';
import { Option } from '../indicator';

const {upColor, downColor, GD_BorderColor} = color;

function splitData(rawData) {
  const categoryData = [];
  const values = [];
  const volumes = [];
  const closes = [];
  const rsi = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    const [open, close, lowest, highest, volume] = rawData[i];
    values.push(rawData[i]);
    closes.push(close);
    rsi.push(close - open);
    volumes.push([i, volume, open > close ? 1 : -1]);
  }
  const lengths = closes.map(c => c.toString().length);
  const maxLength = Math.max(...lengths);
  const maxVolumes = Math.max(...volumes.map(v => Math.round(v[1] / 10000).toString().length));
  return {categoryData, values, volumes, rsi, closes, maxLength: Math.max(maxLength, maxVolumes)};
}

const data = splitData(baseData);

function grid({height, maxLength, gridCount = 1}) {
  const top = 50;
  const contentHeight = height - top - 60;
  const h = Math.round(contentHeight * 0.01);
  const gridHeight = h * 20;
  const left = ((maxLength - 1) * 7) + 3 + 10;
  const G = {
    show: true,
    left,
    right: 20,
    borderColor: GD_BorderColor,
  };
  const grid0 = {
    ...G,
    top,
    height: contentHeight - (gridHeight * (gridCount - 1)) - 20,
    bottom: (gridCount - 1) * gridHeight + 60,
  };

  const grids = [];
  let t = grid0.height + top + 20;
  for (let i = 0; i < gridCount - 1; i++) {
    grids.push({
      ...G,
      height: gridHeight - 20,
      top: t,
      bottom: height - t - gridHeight + 20,
    });
    t = t + gridHeight;
  }
  return [grid0, ...grids];
}

function dataZoom({height, gridCount}) {
  const index = [];
  for (let i = 0; i < gridCount; i++) {
    index.push(i);
  }
  return [
    {
      ...dataZoomInside,
      xAxisIndex: index,
      start: 90,
      end: 100
    },
    {
      ...dataZoomSlider,
      xAxisIndex: index,
      top: height - 40,
      start: 98,
      end: 100,
      height: 20,
    }
  ];
}

export default ({width, height, macd = false, manager, indicators = [], kLineType}) => {
  const masAll = MAS.map(m => m.value);
  indicators = indicators.filter(o => o.status === IndicatorStatus.OPEN);
  const mas = indicators.filter(o => masAll.some(m => m === o.indicator));
  const option = {
    animation: false,
    axisPointer: {...axisPointer},
    xAxis: [],
    yAxis: [],
  };
  option.tooltip = tooltip({manager});
  let gridIndex = 0;
  let axisIndex = 0;
  const ko = Option.kLine({category: data.categoryData, data: data.values, mas, gridIndex, axisIndex, kLineType});
  option.xAxis = [ko.xAxis];
  option.yAxis = [ko.yAxis];
  option.series = [...ko.series];

  if (indicators.some(o => o.indicator === Indicator.BOLL)) {
    option.series = [...option.series, ...Option.boll({data: data.closes})];
  }

  if (indicators.some(o => o.indicator === Indicator.VOLUME)) {
    gridIndex += 1;
    axisIndex += 1;
    const vo = Option.volume({category: data.categoryData, data: data.volumes, gridIndex, axisIndex});
    option.xAxis.push(vo.xAxis);
    option.yAxis.push(vo.yAxis);
    option.visualMap = {
      show: false,
      seriesIndex: option.series.length,
      dimension: 2,
      pieces: [{
        value: 1,
        color: downColor
      }, {
        value: -1,
        color: upColor
      }]
    };
    option.series = [...option.series, ...vo.series];
  }

  if (indicators.some(o => o.indicator === Indicator.MACD)) {
    gridIndex += 1;
    axisIndex += 1;
    const mo = Option.macd({category: data.categoryData, data: data.closes, gridIndex, axisIndex});
    option.xAxis.push(mo.xAxis);
    option.yAxis.push(mo.yAxis);
    option.series = [...option.series, ...mo.series];
  }
  if (indicators.some(o => o.indicator === Indicator.KDJ)) {
    gridIndex += 1;
    axisIndex += 1;
    const kdjo = Option.kdj({category: data.categoryData, data: data.closes, gridIndex, axisIndex});
    option.xAxis.push(kdjo.xAxis);
    option.yAxis.push(kdjo.yAxis);
    option.series = [...option.series, ...kdjo.series];
  }
  option.grid = grid({height, maxLength: data.maxLength, gridCount: gridIndex + 1});
  option.dataZoom = dataZoom({height, gridCount: gridIndex + 1});
  option.xAxis[option.xAxis.length - 1].axisLabel.show = true;
  option.xAxis[option.xAxis.length - 1].axisPointer.label.show = true;
  const last = data.values[data.values.length - 1];
  manager.emit('baseData', {
    open: last[0],
    close: last[1],
    lowest: last[2],
    highest: last[3],
    volume: last[4],
  });

  return option;
};
