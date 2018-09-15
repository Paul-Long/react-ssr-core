import { FontColor, SplitLineColor } from './color';

export const yAxisValue = {
  type: 'value',
  scale: true,
  axisLabel: {
    color: FontColor
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: SplitLineColor,
    }
  },
};

export const yAxisCategory = {
  type: 'category',
  scale: true,
  axisLabel: {
    color: FontColor
  },
};