import baseData from './data';
import { MaCn, MaColor, VolumeColor } from '../varible';

const upColor = '#0BDD5C';
const downColor = '#B63847';

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
      bottom: 130,
    }
  ];
}

const data = splitData(baseData);
export default ({width, height, mas = [], manager}) => {
  const option = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      backgroundColor: '#FFEBC8',
      padding: [5, 10],
      textStyle: {
        color: '#000000'
      },
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
    axisPointer: {
      link: {xAxisIndex: 'all'},
      lineStyle: {
        type: 'dashed'
      }
    },
    xAxis: [
      {
        type: 'category',
        data: data.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {onZero: false, show: false},
        axisLabel: {
          color: '#FFEBC8'
        },
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax',
        axisPointer: {
          z: 100
        }
      },
      {
        type: 'category',
        gridIndex: 1,
        data: data.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {onZero: false},
        axisTick: {show: false},
        splitLine: {show: false},
        axisLabel: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      }
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: false
        },
        axisLabel: {
          color: '#FFEBC8'
        },
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
      },
      {
        scale: true,
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
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 90,
        end: 100
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        top: height - 80,
        start: 98,
        end: 100
      }
    ],
  };

  const candlestick = {
    name: 'Dow-Jones index',
    type: 'candlestick',
    data: data.values,
    itemStyle: {
      normal: {
        color: upColor,
        color0: downColor,
        borderColor: null,
        borderColor0: null
      }
    },
    tooltip: {
      formatter: function (param) {
        param = param[0];
        return [
          'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
          'Open: ' + param.data[0] + '<br/>',
          'Close: ' + param.data[1] + '<br/>',
          'Lowest: ' + param.data[2] + '<br/>',
          'Highest: ' + param.data[3] + '<br/>'
        ].join('');
      }
    }
  };

  option.grid = grid(height);

  const maLines = mas.map((ma, i) => {
    return {
      name: ma,
      type: 'line',
      data: calculateMA(MaCn[ma], data),
      smooth: true,
      lineStyle: {
        color: [MaColor[i]],
      }
    };
  });

  const volume = {
    name: 'Volume',
    type: 'bar',
    xAxisIndex: 1,
    yAxisIndex: 1,
    data: data.volumes,
    itemStyle: {
      color: VolumeColor[0]
    }
  };

  option.series = [candlestick, ...maLines, volume];


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
