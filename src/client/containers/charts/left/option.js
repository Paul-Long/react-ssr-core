import baseData from './data';
import { MaCn, MaColor, VolumeColor } from '../varible';
import {
  axisPointer,
  dataZoomInside,
  dataZoomSlider,
  seriesCandlestick,
  seriesLine,
  seriesBar,
  xAxisCategory,
  yAxisValue,
  tooltipCross,
  color,
} from '@components/charts';

const {upColor, downColor} = color;

function splitData(rawData) {
  const categoryData = [];
  const values = [];
  const volumes = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
    volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
  }
  return {categoryData, values, volumes};
}

function calculateMA(dayCount, data) {
  const result = [];
  for (let i = 0, len = data.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += data.values[i - j][1];
    }
    result.push(+(sum / dayCount).toFixed(3));
  }
  return result;
}

const data = splitData(baseData);

function grid(height) {
  const h1 = (height - 50 - 130) * 0.7;
  return [
    {
      top: 50,
      left: 50,
      right: 50,
      bottom: height - h1 - 80,
      height: h1,
    },
    {
      left: 50,
      right: 50,
      top: 50 + h1 + 30,
      bottom: 60,
    }
  ];
}

function dataZoom(height) {
  return [
    {
      ...dataZoomInside,
      xAxisIndex: [0, 1],
      start: 90,
      end: 100
    },
    {
      ...dataZoomSlider,
      xAxisIndex: [0, 1],
      top: height - 40,
      start: 98,
      end: 100,
      height: 20,
    }
  ];
}

function candlestick() {
  return {
    ...seriesCandlestick,
    name: 'Dow-Jones index',
    data: data.values,
  };
}

export default ({width, height, mas = [], manager}) => {
  const option = {
    animation: false,
    tooltip: {
      ...tooltipCross,
      position: function (pos, params, el, elRect, size) {
        const obj = {top: 10};
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      },
      formatter: function (params) {
        if (params instanceof Array) {
          params = params.find(p => p.seriesIndex === 0);
          if (params) {
            manager.emit('tooltip', {
              open: params.data[1],
              close: params.data[2],
              lowest: params.data[3],
              highest: params.data[4],
              volume: params.data[5],
            });
          }
        }
      }
    },
    axisPointer: {...axisPointer},
    xAxis: [
      {
        ...xAxisCategory,
        data: data.categoryData,
        axisLine: {onZero: false, show: false},
        splitLine: {show: false},
        splitNumber: 20,
        axisPointer: {
          z: 100
        }
      },
      {
        ...xAxisCategory,
        gridIndex: 1,
        data: data.categoryData,
        axisLine: {onZero: false},
        axisTick: {show: false},
        splitLine: {show: false},
        axisLabel: {show: false},
        splitNumber: 20,
      }
    ],
    yAxis: [
      {
        ...yAxisValue,
        splitArea: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
      },
      {
        ...yAxisValue,
        gridIndex: 1,
        splitNumber: 4,
        axisLabel: {
          color: '#FFEBC8',
          formatter: function (value) {
            if (value !== 0) {
              return value / 10000;
            }
            return value;
          }
        },
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
      }
    ],
  };

  option.grid = grid(height);

  const maLines = mas.map((ma, i) => {
    return {
      ...seriesLine,
      name: ma,
      data: calculateMA(MaCn[ma], data),
      lineStyle: {
        color: [MaColor[i]],
      }
    };
  });

  const volume = {
    ...seriesBar,
    name: 'Volume',
    xAxisIndex: 1,
    yAxisIndex: 1,
    data: data.volumes,
    itemStyle: {
      color: VolumeColor[0]
    }
  };

  option.series = [candlestick(), ...maLines, volume];


  option.visualMap = {
    show: false,
    seriesIndex: option.series.length - 1,
    dimension: 2,
    pieces: [{
      value: 1,
      color: downColor
    }, {
      value: -1,
      color: upColor
    }]
  };

  option.dataZoom = dataZoom(height);

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
