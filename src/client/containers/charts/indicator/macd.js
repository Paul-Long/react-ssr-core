import { xAxisCategory, yAxisValue, seriesBar, seriesLine, color } from '@components/charts';
import { calcMACD } from './indicator';
import { SeriesName } from '../varible';

const {upColor, downColor, difLineColor, deaLineColor} = color;
const {MACD, DIF, DEA} = SeriesName;

function series(name, ser, axisIndex) {
  return {
    ...ser,
    name,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
  };
}

export default function ({category, data, gridIndex, axisIndex}) {
  data = calcMACD(data);
  const xAxis = {
    ...xAxisCategory,
    gridIndex,
    data: category,
    axisLabel: {
      ...xAxisCategory.axisLabel,
      show: false,
    },
    axisPointer: {
      label: {
        show: false
      }
    }
  };
  const yAxis = {
    ...yAxisValue,
    gridIndex,
    axisLine: {show: false},
    axisTick: {show: false},
  };

  const bar = {
    ...series(MACD, seriesBar, axisIndex),
    data: data.map(m => {
      return {
        value: m.macd,
        itemStyle: {color: m.macd > 0 ? upColor : downColor}
      };
    })
  };
  const difLine = {
    ...series(DIF, seriesLine, axisIndex),
    data: data.map(m => m.dif),
    itemStyle: {
      color: difLineColor,
    },
    showSymbol: false,
  };
  const deaLine = {
    ...series(DEA, seriesLine, axisIndex),
    data: data.map(m => m.signal),
    itemStyle: {
      color: deaLineColor,
    },
    showSymbol: false,
  };

  return {xAxis, yAxis, series: [bar, difLine, deaLine]};
}
