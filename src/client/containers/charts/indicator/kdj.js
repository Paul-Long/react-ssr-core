import { seriesLine, xAxisCategory, yAxisValue } from '@components/charts';
import {kdjKColor, kdjDColor, kdjJColor} from '@components/charts/color';
import { calcKDJ } from './indicator';
import { SeriesName } from '../varible';

const {KDJ_K, KDJ_D, KDJ_J} = SeriesName;

export default function ({category, data, gridIndex, axisIndex}) {
  const kdjData = calcKDJ(data);
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
  const series = {
    ...seriesLine,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    showSymbol: false,
  };
  const KLine = {
    ...series,
    name: KDJ_K,
    data: kdjData.map(d => d ? d.K : null),
    itemStyle: {
      color: kdjKColor,
    }
  };
  const DLine = {
    ...series,
    name: KDJ_D,
    data: kdjData.map(d => d ? d.D : null),
    itemStyle: {
      color: kdjDColor,
    }
  };
  const JLine = {
    ...series,
    name: KDJ_J,
    data: kdjData.map(d => d ? d.J : null),
    itemStyle: {
      color: kdjJColor,
    }
  };

  return {xAxis, yAxis, series: [KLine, DLine, JLine]};
}