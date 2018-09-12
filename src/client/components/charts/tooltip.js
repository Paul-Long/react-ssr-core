import { tooltipBackgroundColor, tooltipFontColor } from './color';

export const tooltip = {
  trigger: 'axis',
  backgroundColor: tooltipBackgroundColor,
  padding: [5, 10],
  textStyle: {
    color: tooltipFontColor
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