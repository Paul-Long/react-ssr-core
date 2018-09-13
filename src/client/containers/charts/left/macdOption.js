import { xAxisCategory, yAxisValue, seriesBar, seriesLine, color } from '@components/charts';
import { calculateMACD } from './indicator';

const {upColor, downColor, difLineColor, deaLineColor, axisPointerLabelBackgroundColor} = color;

function series(name, ser, axisIndex) {
  return {
    ...ser,
    name,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
  };
}

export default function ({category, data, gridIndex, axisIndex}) {
  data = calculateMACD(data);
  const xAxis = {
    ...xAxisCategory,
    gridIndex,
    data: category,
  };
  const yAxis = {
    ...yAxisValue,
    gridIndex,
    axisLine: {show: false},
    axisTick: {show: false},
  };

  const bar = {
    ...series('MACD', seriesBar, axisIndex),
    data: data.map(m => {
      return {
        value: m.macd,
        itemStyle: {color: m.macd > 0 ? upColor : downColor}
      };
    })
  };
  const difLine = {
    ...series('DIF', seriesLine, axisIndex),
    data: data.map(m => m.dif),
    itemStyle: {
      color: difLineColor,
    },
    showSymbol: false,
  };
  const deaLine = {
    ...series('DEA', seriesLine, axisIndex),
    data: data.map(m => m.signal),
    itemStyle: {
      color: deaLineColor,
    },
    showSymbol: false,
  };

  return {xAxis, yAxis, series: [bar, difLine, deaLine]};
}
