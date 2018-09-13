import { fontColor, splitLineColor } from './color';

export const yAxisValue = {
  type: 'value',
  scale: true,
  axisLabel: {
    color: fontColor
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: splitLineColor,
    }
  },
};

export const yAxisCategory = {
  type: 'category',
  scale: true,
  axisLabel: {
    color: fontColor
  },
};