import { MaCn, MaColor } from '../varible';
import { seriesLine } from '@components/charts';
import { calcMA } from './indicator';

export default function ({mas, axisIndex, data}) {
  const maLines = mas.map((ma, i) => {
    const lineStyle = {...seriesLine.lineStyle};
    lineStyle.color = [MaColor[i]];
    return {
      ...seriesLine,
      lineStyle,
      xAxisIndex: axisIndex,
      yAxisIndex: axisIndex,
      name: ma.indicator,
      data: calcMA(MaCn[ma.indicator], data),
    };
  });

  return [...maLines];
}