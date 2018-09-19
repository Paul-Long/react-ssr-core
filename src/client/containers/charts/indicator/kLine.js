import { KLineType, SeriesName } from '../varible';
import { seriesCandlestick, seriesCandlestickO, xAxisCategory, yAxisValue } from '@components/charts';

export default function ({category, data, gridIndex, axisIndex, kLineType}) {
  const xAxis = {
    ...xAxisCategory,
    gridIndex,
    data: category,
    axisLine: {onZero: false, show: false},
    axisLabel: {
      ...xAxisCategory.axisLabel,
      show: false,
    },
    axisTick: {show: false},
    axisPointer: {
      label: {
        show: false
      }
    }
  };
  const yAxis = {
    ...yAxisValue,
    gridIndex,
    splitArea: {show: false},
    axisLine: {show: false},
    axisTick: {show: false},
  };

  let series = seriesCandlestick;
  if (kLineType === KLineType.KLINE_O) {
    series = seriesCandlestickO;
  }
  const ks = {
    ...series,
    name: SeriesName.KLine,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    data,
  };

  return {xAxis, yAxis, series: [ks]};
};