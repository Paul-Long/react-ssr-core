import baseData from './data';
import { axisPointer, color, dataZoomInside, dataZoomSlider, tooltipCross, } from '@components/charts';
import kLineOption from './kLineOption';
import volumeOption from './volumeOption';
import macdOption from './macdOption';
import tooltip from './tooltip';

const {upColor, downColor, gridBorderColor} = color;

function splitData(rawData) {
  const categoryData = [];
  const values = [];
  const volumes = [];
  const closes = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
    closes.push(rawData[i][2]);
    volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
  }
  const lengths = closes.map(c => c.toString().length);
  const maxLength = Math.max(...lengths);
  const maxVolumes = Math.max(...volumes.map(v => Math.round(v[1] / 10000).toString().length));
  return {categoryData, values, volumes, closes, maxLength: Math.max(maxLength, maxVolumes)};
}

const data = splitData(baseData);

function grid({height, maxLength, gridCount = 1}) {
  const top = 50;
  const contentHeight = height - top - 60;
  const h = Math.round(contentHeight * 0.01);
  const gridHeight = (gridCount - 1) * h * 10;
  const left = ((maxLength - 1) * 7) + 3 + 10;
  const grid0 = {
    borderColor: gridBorderColor,
    show: true,
    top,
    left,
    right: 0,
    height: contentHeight - (gridHeight * (gridCount - 1)) - 20,
    bottom: (gridCount - 1) * gridHeight + 60,
  };

  const grids = [];
  let t = grid0.height + top + 20;
  for (let i = 0; i < gridCount - 1; i++) {
    grids.push({
      borderColor: gridBorderColor,
      show: true,
      left,
      right: 0,
      height: gridHeight - 20,
      top: t,
      bottom: height - t - gridHeight + 20,
    });
    t = t + gridHeight;
  }
  console.log(gridHeight, grid0, grids);
  return [grid0, ...grids];
}

function dataZoom(height) {
  return [
    {
      ...dataZoomInside,
      xAxisIndex: [0, 1, 2],
      start: 90,
      end: 100
    },
    {
      ...dataZoomSlider,
      xAxisIndex: [0, 1, 2],
      top: height - 40,
      start: 98,
      end: 100,
      height: 20,
    }
  ];
}

export default ({width, height, mas = [], macd = false, manager}) => {
  const option = {
    animation: false,
    axisPointer: {...axisPointer},
    xAxis: [],
    yAxis: [],
  };
  option.tooltip = tooltip({manager});
  option.grid = grid({height, maxLength: data.maxLength, gridCount: 3});
  const ko = kLineOption({category: data.categoryData, data: data.values, mas, gridIndex: 0, axisIndex: 0});
  const vo = volumeOption({category: data.categoryData, data: data.volumes, gridIndex: 1, axisIndex: 1});
  const mo = macdOption({category: data.categoryData, data: data.closes, gridIndex: 2, axisIndex: 2});

  option.xAxis = [ko.xAxis, vo.xAxis, mo.xAxis];
  option.yAxis = [ko.yAxis, vo.yAxis, mo.yAxis];

  option.series = [...ko.series, ...vo.series, ...mo.series];

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
