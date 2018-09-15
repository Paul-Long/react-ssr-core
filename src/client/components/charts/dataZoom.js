import * as color from './color';

const {DZ_BgColor, DZ_HandleColor, DZ_DataBgColor} = color;

export const dataZoomSlider = {
  show: true,
  type: 'slider',
  backgroundColor: DZ_BgColor,
  borderColor: 'transparent',
  handleStyle: {
    color: DZ_HandleColor
  },
  dataBackground: {
    lineStyle: {
      color: DZ_DataBgColor,
      width: 1,
      opacity: 1,
    }
  },
  showDetail: false,
  fillerColor: 'rgba(255,146,0,0.10)',
};

export const dataZoomInside = {
  type: 'inside',
};