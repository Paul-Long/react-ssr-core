import { VolumeColor, SeriesName } from '../varible';
import { color, seriesBar, xAxisCategory, yAxisValue } from '@components/charts';

const {FontColor} = color;

export default function ({category, data, gridIndex, axisIndex}) {
  const xAxis = {
    ...xAxisCategory,
    gridIndex,
    data: category,
    axisLine: {onZero: false},
    axisTick: {show: false},
    axisLabel: {
      ...xAxisCategory.axisLabel,
      show: false,
    },
    axisPointer: {
      label: {
        show: false,
      }
    }
  };
  const yAxis = {
    ...yAxisValue,
    gridIndex,
    splitNumber: 4,
    axisLabel: {
      color: FontColor,
      formatter: function (value) {
        if (value !== 0) {
          return value / 10000;
        }
        return value;
      }
    },
    axisLine: {show: false},
    axisTick: {show: false},
    axisPointer: {
      label: {
        formatter: ({value}) => {
          let v = value;
          if (value !== 0) {
            v = value / 10000;
          }
          return `${Math.round(v)}W`;
        }
      }
    }
  };

  const series = [{
    ...seriesBar,
    name: SeriesName.Volume,
    xAxisIndex: axisIndex,
    yAxisIndex: axisIndex,
    data,
    itemStyle: {
      color: VolumeColor[0]
    }
  }];

  return {xAxis, yAxis, series};
}
