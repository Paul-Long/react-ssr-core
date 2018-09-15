import * as color from './color';

const {AXPL_BgColor} = color;

export const axisPointer = {
  link: {xAxisIndex: 'all'},
  lineStyle: {
    type: 'dashed'
  },
  label: {
    backgroundColor: AXPL_BgColor,
    padding: [2, 4],
    shadowBlur: 0,
  }
};
