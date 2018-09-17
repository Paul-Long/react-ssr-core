import Decimal from 'decimal.js-light';

Decimal.set({
  precision: 4,
  rounding: Decimal.ROUND_HALF_DOWN
});

export function calcMA(dayCount, data) {
  const result = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += data[i - j][1];
    }
    result.push(+(sum / dayCount).toFixed(3));
  }
  return result;
}

export function calcMACD(data) {
  data = data || [];
  const fast = 12;
  const slow = 26;
  const signal = 9;
  if (data.length < slow) {
    return [];
  }
  let emaFast = data[0];
  let emaSlow = data[0];
  let dif = 0;
  let deaSignal = 0;
  let macd = 2 * (dif - deaSignal);
  const macdData = [];
  for (let i = 0; i < data.length; i++) {
    const close = data[i];
    emaFast = ((emaFast * (fast - 1)) + (close * 2)) / (fast + 1);
    emaSlow = ((emaSlow * (slow - 1)) + (close * 2)) / (slow + 1);
    dif = new Decimal(emaFast - emaSlow).toFixed(4);
    deaSignal = new Decimal(((deaSignal * (signal - 1)) + (dif * 2)) / (signal + 1)).toFixed(4);
    macd = 2 * (dif - deaSignal);
    macdData.push({
      fast: emaFast,
      slow: emaSlow,
      dif,
      signal: deaSignal,
      macd
    });
  }
  return macdData;
}

export function calcBOLL(data) {
  const n = 26;
  const k = 2;
  let MA = data[0], MD, MB, UP, DN;
  let arr = [], powArr = [];
  let maSum = 0, powSum = 0;
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const close = data[i];
    const pow = Math.pow(close - MA, 2);
    if (arr.length >= n) {
      maSum -= arr[0];
      arr = arr.slice(1);
      powSum -= powArr[0];
      powArr = powArr.slice(1);
    }
    arr.push(close);
    powArr.push(pow);
    maSum += close;
    powSum += pow;
    MB = MA;
    MA = maSum / arr.length;
    MD = Math.sqrt(powSum / powArr.length);
    if (arr.length >= n) {
      UP = MB + (k * MD);
      DN = MB - (k * MD);
      result.push({MA, MB, MD, UP, DN});
    } else {
      result.push(null);
    }
  }
  return result;
}

export function calcKDJ(data) {
  data = data || [];
  const N = 9;
  let RSV, K = 50, D = 50, J, L9, H9, C8;
  let arr = [];
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const C = data[i];
    if (arr.length === 9) {
      arr = arr.slice(1);
      arr.push(C);
      L9 = Math.min(...arr);
      H9 = Math.max(...arr);
      RSV = 100 * (C - L9) / (H9 - L9);
      K = (K * 2 / 3) + (RSV * 1 / 3);
      D = (D * 2 / 3) + (K / 3);
      J = (3 * K) - (2 * D);
      result.push({RSV, K, D, J});
    } else {
      arr.push(C);
      result.push(null);
    }
  }
  return result;
}

export function calcRSI(data, N = 14) {
  let result = [];
  let arr = [];
  let A, B, RS, RS1, RSI, T1 = 0, T2 = 0;
  for (let i = 0; i < data.length; i++) {
    if (arr.length === N) {
      if (arr[0] < 0) {
        T2 += arr[0];
      } else {
        T1 -= arr[0];
      }
      arr = arr.slice(1);
    }
    const S = data[i];
    if (S > 0) {
      T1 += S;
    } else {
      T2 -= S;
    }

    arr.push(S);
    if (arr.length === N) {
      A = T1 / N;
      B = T2 / N;
      RS = A / B;
      RS1 = RS / (1 + RS);
      RSI = 100 * RS1;
      result.push({A, B, RS, RSI});
    } else {
      result.push(null);
    }
  }

  return result;
}