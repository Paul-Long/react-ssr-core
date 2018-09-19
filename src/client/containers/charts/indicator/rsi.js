import { seriesLine, xAxisCategory, yAxisValue } from '@components/charts';
import { rsiColor } from '@components/charts/color';
import { calcRSI } from './indicator';
import { SeriesName } from '../varible';

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
    lineStyle: {
      ...seriesLine.lineStyle,
      color: rsiColor,
    },
    name: SeriesName.RSI,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    showSymbol: false,
    data: rsiData.map(d => d ? d.RSI : null),
  };

  return {xAxis, yAxis, series: [line]};
}