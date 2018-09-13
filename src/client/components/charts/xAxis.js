import { fontColor, splitLineColor } from './color';

export const xAxisCategory = {
  type: 'category',
  scale: true,
  boundaryGap: false,
  axisLabel: {
    color: fontColor
  },
  min: 'dataMin',
  max: 'dataMax',
  splitLine: {
    show: true,
    lineStyle: {
      color: splitLineColor,
    }
  },
};

export const xAxisValue = {
  type: 'value',
};