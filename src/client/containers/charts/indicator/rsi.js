import { seriesLine, xAxisCategory, yAxisValue } from '@components/charts';
import { calcRSI } from './indicator';

export default function ({data, category, gridIndex, axisIndex}) {
  const rsiData = calcRSI(data);
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
    max: 100,
  };

  const line = {
    ...seriesLine,
    name: 'RSI',
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    showSymbol: false,
    data: rsiData.map(d => d ? d.RSI : null),
  };

  return {xAxis, yAxis, series: [line]};
}