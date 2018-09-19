import { calcBOLL } from './indicator';
import { seriesLine } from '@components/charts';
import { bollDnAreaColor, bollDNColor, bollMBColor, bollUpAreaColor, bollUPColor } from '@components/charts/color';
import { SeriesName } from '../varible';

const {BOLL_UP, BOLL_MB, BOLL_DN} = SeriesName;

export default function ({data, axisIndex}) {
  const bollData = calcBOLL(data);
  const series = {
    ...seriesLine,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    showSymbol: false,
  };
  const upLine = {
    ...series,
    lineStyle: {
      width: 1,
      color: bollUPColor,
    },
    name: BOLL_UP,
    data: bollData.map(b => b ? b.UP - b.DN : null),
    areaStyle: {
      color: bollUpAreaColor,
    },
    stack: 'boll',
  };
  const mdLine = {
    ...series,
    lineStyle: {
      width: 1,
      color: bollMBColor,
    },
    name: BOLL_MB,
    data: bollData.map(b => b ? b.MB : null),
  };
  const downLine = {
    ...series,
    lineStyle: {
      width: 1,
      color: bollDNColor,
    },
    name: BOLL_DN,
    data: bollData.map(b => b ? b.DN : null),
    areaStyle: {
      color: bollDnAreaColor
    },
    stack: 'boll',
  };
  return [downLine, mdLine, upLine];
}