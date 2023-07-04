import { axisLeft, axisBottom } from 'd3';
import { one } from './one';
export const axes = (
  selection,
  { height, margin: { bottom, left }, xScale, yScale }
) => {
  one(selection, 'g', 'x-axis')
    .attr('transform', `translate(0, ${height - bottom})`)
    .call(axisBottom(xScale));

  one(selection, 'g', 'y-axis')
    .attr('transform', `translate(${left}, 0)`)
    .call(axisLeft(yScale));
};
