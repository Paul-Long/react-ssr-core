import { dataZoomInside, dataZoomSlider } from '@components/charts';

export default function ({height, gridCount}) {
  const index = [];
  for (let i = 0; i < gridCount; i++) {
    index.push(i);
  }
  return [
    {
      ...dataZoomInside,
      xAxisIndex: index,
      start: 90,
      end: 100
    },
    {
      ...dataZoomSlider,
      xAxisIndex: index,
      top: height - 40,
      start: 98,
      end: 100,
      height: 20,
    }
  ];
}
