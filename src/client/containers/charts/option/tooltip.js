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
  return option.grid[option.xAxis[index].gridIndex];
}

export function tip(params, option, flag = false) {
  if (!params || !(params instanceof Array)) return;
  const tip = {};
  for (let i = 0; i < params.length; i++) {
    const series = params[i];
    const name = series.seriesName || series.name;
    const axisIndex = series.axisIndex >= 0 ? series.axisIndex : series.xAxisIndex;
    const data = flag ? series.data[series.data.length - 1] : series.data;
    const diff = flag ? 1 : 0;
    switch (name) {
      case SeriesName.KLine:
        tip.kLine = tip.kLine || {};
        tip.kLine.open = data[1 - diff];
        tip.kLine.close = data[2 - diff];
        tip.kLine.lowest = data[3 - diff];
        tip.kLine.highest = data[4 - diff];
        tip.kLine.gridIndex = axisIndex;
        tip.kLine.grid = grid(axisIndex, option);
        break;
      case SeriesName.Volume:
        tip.volume = tip.volume || {};
        tip.volume.data = data[1];
        tip.volume.gridIndex = axisIndex;
        break;
      case SeriesName.MACD:
        tip.macd = tip.macd || {};
        tip.macd.macd = (data || {}).value;
        tip.macd.gridIndex = axisIndex;
        tip.macd.grid = grid(axisIndex, option);
        break;
      case SeriesName.DIF:
        tip.macd = tip.macd || {};
        tip.macd.dif = data;
        break;
      case SeriesName.DEA:
        tip.macd = tip.macd || {};
        tip.macd.dea = data;
        break;
      case SeriesName.KDJ_K:
        tip.kdj = tip.kdj || {};
        tip.kdj.k = data;
        tip.kdj.gridIndex = axisIndex;
        tip.kdj.grid = grid(axisIndex, option);
        break;
      case SeriesName.KDJ_D:
        tip.kdj = tip.kdj || {};
        tip.kdj.d = data;
        break;
      case SeriesName.KDJ_J:
        tip.kdj = tip.kdj || {};
        tip.kdj.j = data;
        break;
      case SeriesName.BOLL_UP:
        tip.boll = tip.boll || {};
        tip.boll.up = data;
        tip.boll.gridIndex = axisIndex;
        tip.boll.grid = grid(axisIndex, option);
        break;
      case SeriesName.BOLL_MB:
        tip.boll = tip.boll || {};
        tip.boll.mb = data;
        break;
      case SeriesName.BOLL_DN:
        tip.boll = tip.boll || {};
        tip.boll.dn = data;
        break;
      case SeriesName.RSI:
        tip.rsi = tip.rsi || {};
        tip.rsi.data = data;
        tip.rsi.gridIndex = axisIndex;
        tip.rsi.grid = grid(axisIndex, option);
        break;
      case SeriesName.MA5:
      case SeriesName.MA10:
      case SeriesName.MA20:
      case SeriesName.MA60:
      case SeriesName.MA120:
      case SeriesName.MA250:
        tip.ma = tip.ma || {};
        tip.ma[name] = data;
        tip.ma.gridIndex = axisIndex;
        tip.ma.grid = grid(axisIndex, option);
        break;
      default:
        break;
    }
  }
  return tip;
}