import { GD_BorderColor } from '@components/charts/color';

export default function ({height, maxLength, gridCount = 1}) {
  const top = 50;
  const contentHeight = height - top - 60;
  const h = Math.round(contentHeight * 0.01);
  let gridHeight = h * 20;
  if (gridCount >= 3 && gridCount < 5) {
    gridHeight = h * 15;
  } else if (gridCount >= 5) {
    gridHeight = h * 10;
  }
  const left = ((maxLength - 1) * 7) + 3 + 10;
  const G = {
    show: true,
    left,
    right: 20,
    borderColor: GD_BorderColor,
  };
  const grid0 = {
    ...G,
    top,
    height: contentHeight - (gridHeight * (gridCount - 1)) - 20,
    bottom: (gridCount - 1) * gridHeight + 60,
  };

  const grids = [];
  let t = grid0.height + top + 20;
  for (let i = 0; i < gridCount - 1; i++) {
    grids.push({
      ...G,
      height: gridHeight - 20,
      top: t,
      bottom: height - t - gridHeight + 20,
    });
    t = t + gridHeight;
  }
  return [grid0, ...grids];
};