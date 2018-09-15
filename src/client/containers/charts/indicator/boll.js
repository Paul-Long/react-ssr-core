import { calcBOLL } from './indicator';
import { seriesLine, color } from '@components/charts';

const {bollUPColor, bollMBColor, bollDNColor} = color;

export default function ({data}) {
  const bollData = calcBOLL(data);
  const series = {
    ...seriesLine,
    xAxisIndex: 0,
    yAxisIndex: 0,
    showSymbol: false,
  };
  const upLine = {
    ...series,
    lineStyle: {
      width: 1,
      color: bollUPColor,
    },
    name: 'BOLL-UP',
    data: bollData.map(b => b ? b.UP - b.DN : null),
    areaStyle: {
      color: 'rgba(128, 128, 128, 0.2)'
    },
    stack: 'boll',
  };
  const mdLine = {
    ...series,
    lineStyle: {
      width: 1,
      color: bollMBColor,
    },
    name: 'BOLL-MB',
    data: bollData.map(b => b ? b.MB : null),
  };
  const downLine = {
    ...series,
    lineStyle: {
      width: 1,
      color: bollDNColor,
    },
    name: 'BOLL-DN',
    data: bollData.map(b => b ? b.DN : null),
    areaStyle: {
      color: 'transparent'
    },
    stack: 'boll',
  };
  return [downLine, mdLine, upLine];
}