import { MaCn, MaColor, KLineType } from '../varible';
import { seriesCandlestick, seriesCandlestickO, seriesLine, xAxisCategory, yAxisValue } from '@components/charts';
import { calculateMA } from './indicator';

export default function ({category, data, mas, gridIndex, axisIndex, kLineType}) {
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

  const maLines = mas.map((ma, i) => {
    const lineStyle = {...seriesLine.lineStyle};
    lineStyle.color = [MaColor[i]];
    return {
      ...seriesLine,
      lineStyle,
      xAxisIndex: axisIndex,
      yAxisIndex: axisIndex,
      name: ma.indicator,
      data: calculateMA(MaCn[ma.indicator], data),
    };
  });

  let series = seriesCandlestick;
  if (kLineType === KLineType.KLINE_O) {
    series = seriesCandlestickO;
  }
  const ks = {
    ...series,
    name: 'KLine',
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    data,
  };

  return {xAxis, yAxis, series: [ks, ...maLines]};
};