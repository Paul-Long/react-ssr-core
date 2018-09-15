import { FontColor, SplitLineColor } from './color';

export const xAxisCategory = {
  type: 'category',
  scale: true,
  boundaryGap: false,
  axisLabel: {
    color: FontColor
  },
  min: 'dataMin',
  max: 'dataMax',
  splitLine: {
    show: true,
    lineStyle: {
      color: SplitLineColor,
    }
  },
};

export const xAxisValue = {
  type: 'value',
};