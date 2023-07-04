import { axisLeft, axisBottom } from 'd3';
import { one } from './one';
export const axisLabels = (
  selection,
  {
    width,
    height,
    margin: { top, right, bottom, left },
    xLabel,
    yLabel,
    xLabelOffset,
    yLabelOffset,
  }
) => {
  const g = one(selection, 'g', 'axis-labels')
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')
    .attr('font-family', 'sans-serif');

  one(g, 'text', 'x-axis-label')
    .attr('x', left + (width - right - left) / 2)
    .attr('y', height - bottom + xLabelOffset)
    .attr('alignment-baseline', 'hanging')
    .text(xLabel);

  one(g, 'text', 'y-axis-label')
    .attr('x', -(top + (height - bottom - top) / 2))
    .attr('y', left - yLabelOffset)
    .attr('transform', 'rotate(-90)')
    .text(yLabel);
};
