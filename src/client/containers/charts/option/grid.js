import { GD_BorderColor } from '@components/charts/color';

export default function ({height, maxLength, gridCount = 1}) {
  const top = 50;
  const bottom = 60;
  const spaceSize = 20;
  const contentHeight = height - top - bottom;
  const h = Math.round(contentHeight * 0.01);
  let gridHeight = h * 20;
  if (gridCount === 4) {
    gridHeight = h * 15;
  } else if (gridCount === 5) {
    gridHeight = h * 13;
  } else if (gridCount > 5) {
    gridHeight = h * 11;
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
    height: contentHeight - (gridHeight * (gridCount - 1)) - spaceSize,
    bottom: (gridCount - 1) * gridHeight + bottom,
  };

  const grids = [];
  let gridTop = grid0.height + top + spaceSize;
  for (let i = 0; i < gridCount - 1; i++) {
    grids.push({
      ...G,
      height: gridHeight - spaceSize,
      top: gridTop,
      bottom: height - gridTop - gridHeight + spaceSize,
    });
    gridTop = gridTop + gridHeight;
  }
  return [grid0, ...grids];
};