import { tooltipCross, } from '@components/charts';
import { SeriesName } from '../varible';

export default function ({manager, option}) {
  return {
    ...tooltipCross,
    position: function (pos, params, el, elRect, size) {
      const obj = {top: 10};
      obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
      return obj;
    },
    formatter: function (params) {
      if (params instanceof Array) {
        const tips = tip(params, option);
        if (Object.keys(tips).length > 0) {
          manager.emit('tooltip', tips);
        }
      }
    }
  };
}

function grid(index, option) {
  return option.grid[option.xAxis[index].gridIndex].top;
}

function tip(params, option) {
  if (!params || !(params instanceof Array)) return;
  const tip = {};
  for (let i = 0; i < params.length; i++) {
    const series = params[i];
    switch (series.seriesName) {
      case SeriesName.KLine:
        tip.kLine = tip.kLine || {};
        tip.kLine.open = series.data[1];
        tip.kLine.close = series.data[2];
        tip.kLine.lowest = series.data[3];
        tip.kLine.highest = series.data[4];
        tip.kLine.gridIndex = series.axisIndex;
        tip.kLine.gridTop = grid(series.axisIndex, option);
        break;
      case SeriesName.Volume:
        tip.volume = tip.volume || {};
        tip.volume.data = series.data[1];
        tip.volume.gridIndex = series.axisIndex;
        break;
      case SeriesName.MACD:
        tip.macd = tip.macd || {};
        tip.macd.macd = (series.data || {}).value;
        tip.macd.gridIndex = series.axisIndex;
        tip.macd.gridTop = grid(series.axisIndex, option);
        break;
      case SeriesName.DIF:
        tip.macd = tip.macd || {};
        tip.macd.dif = series.data;
        break;
      case SeriesName.DEA:
        tip.macd = tip.macd || {};
        tip.macd.dea = series.data;
        break;
      case SeriesName.KDJ_K:
        tip.kdj = tip.kdj || {};
        tip.kdj.k = series.data;
        tip.kdj.gridIndex = series.axisIndex;
        tip.kdj.gridTop = grid(series.axisIndex, option);
        break;
      case SeriesName.KDJ_D:
        tip.kdj = tip.kdj || {};
        tip.kdj.d = series.data;
        break;
      case SeriesName.KDJ_J:
        tip.kdj = tip.kdj || {};
        tip.kdj.j = series.data;
        break;
      case SeriesName.BOLL_UP:
        tip.boll = tip.boll || {};
        tip.boll.up = series.data;
        tip.boll.gridIndex = series.axisIndex;
        tip.boll.gridTop = grid(series.axisIndex, option);
        break;
      case SeriesName.BOLL_MB:
        tip.boll = tip.boll || {};
        tip.boll.mb = series.data;
        break;
      case SeriesName.BOLL_DN:
        tip.boll = tip.boll || {};
        tip.boll.dn = series.data;
        break;
      case SeriesName.RSI:
        tip.rsi = tip.rsi || {};
        tip.rsi.data = series.data;
        tip.rsi.gridIndex = series.axisIndex;
        tip.rsi.gridTop = grid(series.axisIndex, option);
        break;
      case SeriesName.MA5:
      case SeriesName.MA10:
      case SeriesName.MA20:
      case SeriesName.MA60:
      case SeriesName.MA120:
      case SeriesName.MA250:
        tip.ma = tip.ma || {};
        tip.ma[series.seriesName] = series.data;
        tip.ma.gridIndex = series.axisIndex;
        tip.ma.gridTop = grid(series.axisIndex, option);
        break;
      default:
        break;
    }
  }
  return tip;
}