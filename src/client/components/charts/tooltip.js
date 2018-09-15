import { TT_BgColor, TT_FontColor } from './color';

export const tooltip = {
  trigger: 'axis',
  backgroundColor: TT_BgColor,
  padding: [5, 10],
  textStyle: {
    color: TT_FontColor
  },
};

export const tooltipLine = {
  ...tooltip,
  axisPointer: {
    type: 'line'
  }
};

export const tooltipShadow = {
  ...tooltip,
  axisPointer: {
    type: 'shadow'
  }
};

export const tooltipCross = {
  ...tooltip,
  axisPointer: {
    type: 'cross'
  }
};