import { fontColor } from './color';

export const xAxisCategory = {
  type: 'category',
  scale: true,
  boundaryGap: false,
  axisLabel: {
    color: fontColor
  },
  min: 'dataMin',
  max: 'dataMax',
};

export const xAxisValue = {
  type: 'value',
};