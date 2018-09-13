export function calculateMA(dayCount, data) {
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

export function calculateMACD(data) {
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
    dif = emaFast - emaSlow;
    deaSignal = ((deaSignal * (signal - 1)) + (dif * 2)) / (signal + 1);
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
