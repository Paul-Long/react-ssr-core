import { boll } from './indicator';
import { seriesLine, color } from '@components/charts';

const {bollUPColor, bollMBColor, bollDNColor} = color;

export default function ({data}) {
  const bollData = boll(data);
  const upLine = {
    ...seriesLine,
    lineStyle: {
      width: 1,
      color: bollUPColor,
    },
    xAxisIndex: 0,
    yAxisIndex: 0,
    name: 'BOLL-UP',
    data: bollData.map(b => b ? b.UP - b.DN : null),
    areaStyle: {
      color: 'rgba(128, 128, 128, 0.2)'
    },
    stack: 'boll',
  };
  const mdLine = {
    ...seriesLine,
    lineStyle: {
      width: 1,
      color: bollMBColor,
    },
    xAxisIndex: 0,
    yAxisIndex: 0,
    name: 'BOLL-MB',
    data: bollData.map(b => b ? b.MB : null),
  };
  const downLine = {
    ...seriesLine,
    lineStyle: {
      width: 1,
      color: bollDNColor,
    },
    xAxisIndex: 0,
    yAxisIndex: 0,
    name: 'BOLL-DN',
    data: bollData.map(b => b ? b.DN : null),
    areaStyle: {
      color: 'transparent'
    },
    stack: 'boll',
  };
  return [downLine, mdLine, upLine];
}