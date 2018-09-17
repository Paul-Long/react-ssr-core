export function splitData(rawData) {
  const categoryData = [];
  const values = [];
  const volumes = [];
  const closes = [];
  const rsi = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    const [open, close, lowest, highest, volume] = rawData[i];
    values.push(rawData[i]);
    closes.push(close);
    rsi.push(close - open);
    volumes.push([i, volume, open > close ? 1 : -1]);
  }
  const lengths = closes.map(c => c.toString().length);
  const maxLength = Math.max(...lengths);
  const maxVolumes = Math.max(...volumes.map(v => Math.round(v[1] / 10000).toString().length));
  return {categoryData, values, volumes, rsi, closes, maxLength: Math.max(maxLength, maxVolumes)};
}
