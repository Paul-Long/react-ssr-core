import { seriesLine, xAxisCategory, yAxisValue } from '@components/charts';
import { calculateKDJ } from './indicator';

export default function ({category, data, gridIndex, axisIndex}) {
  const kdjData = calculateKDJ(data);
  const xAxis = {
    ...xAxisCategory,
    gridIndex,
    data: category,
    axisLabel: {
      ...xAxisCategory.axisLabel,
      show: false,
    }
  };
  const yAxis = {
    ...yAxisValue,
    gridIndex,
    axisLine: {show: false},
    axisTick: {show: false},
  };
  const series = {
    ...seriesLine,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    showSymbol: false,
  };
  const KLine = {
    ...series,
    name: 'KDJ-K',
    data: kdjData.map(d => d ? d.K : null),
    itemStyle: {
      color: 'white',
    }
  };
  const DLine = {
    ...series,
    name: 'KDJ-D',
    data: kdjData.map(d => d ? d.D : null),
    itemStyle: {
      color: 'yellow',
    }
  };
  const JLine = {
    ...series,
    name: 'KDJ-J',
    data: kdjData.map(d => d ? d.J : null),
    itemStyle: {
      color: 'purple',
    }
  };

  return {xAxis, yAxis, series: [KLine, DLine, JLine]};
}