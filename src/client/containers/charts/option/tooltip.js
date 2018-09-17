import { tooltipCross, } from '@components/charts';

export default function ({manager}) {
  return {
    ...tooltipCross,
    position: function (pos, params, el, elRect, size) {
      const obj = {top: 10};
      obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
      return obj;
    },
    formatter: function (params) {
      if (params instanceof Array) {
        let macd = {};
        for (let i = 0; i < params.length; i++) {
          const series = params[i];
          if (series.seriesName === 'KLine') {
            manager.emit('tooltip', {
              open: series.data[1],
              close: series.data[2],
              lowest: series.data[3],
              highest: series.data[4],
              volume: series.data[5],
            });
          } else if (series.seriesName === 'Volume') {

          } else if (series.seriesName === 'MACD') {
          } else if (series.seriesName === 'DIF') {
            macd.dif = series.data;
          } else if (series.seriesName === 'DEA') {
            macd.dea = series.data;
          }
          if (Object.keys(macd).length > 0) {
            manager.emit('macd-tip', macd);
          }
        }
      }
    }
  };
}