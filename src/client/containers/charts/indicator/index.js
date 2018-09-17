import * as Indicators from './indicator';
import boll from './boll';
import kdj from './kdj';
import kLine from './kLine';
import macd from './macd';
import volume from './volume';
import rsi from './rsi';
import ma from './ma';

export const Options = {
  boll,
  kLine,
  macd,
  volume,
  kdj,
  rsi,
  ma,
};

export const Indicator = {
  calcBOLL: Indicators.calcBOLL,
  calcMACD: Indicators.calcMACD,
  calcKDJ: Indicators.calcKDJ,
  calcMA: Indicators.calcMA,
  calcRSI: Indicators.calcRSI,
};

