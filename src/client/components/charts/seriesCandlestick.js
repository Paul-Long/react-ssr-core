import { upColor, downColor } from './color';

export const seriesCandlestick = {
  type: 'candlestick',
  itemStyle: {
    normal: {
      color: upColor,
      color0: downColor,
      borderColor: null,
      borderColor0: null
    }
  },
};