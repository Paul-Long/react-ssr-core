import * as color from './color';

const {axisPointerLabelBackgroundColor} = color;

export const axisPointer = {
  link: {xAxisIndex: 'all'},
  lineStyle: {
    type: 'dashed'
  },
  label: {
    backgroundColor: axisPointerLabelBackgroundColor,
    padding: [2, 4],
    shadowBlur: 0,
  }
};
