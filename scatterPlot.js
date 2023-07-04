import { scaleLinear, extent } from 'd3';
import { axes } from './axes';
import { axisLabels } from './axisLabels';

export const scatterPlot = (
  selection,
  {
    data,
    width,
    height,
    xValue,
    yValue,
    xLabel,
    yLabel,
    xLabelOffset,
    yLabelOffset,
    circleRadius,
    margin,
  }
) => {
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([height - margin.bottom, margin.top]);

  selection
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', (d) => xScale(xValue(d)))
    .attr('cy', (d) => yScale(yValue(d)))
    .attr('r', circleRadius);

  selection
    .call(axes, { height, margin, xScale, yScale })
    .call(axisLabels, {
      width,
      height,
      margin,
      xScale,
      yScale,
      xLabel,
      yLabel,
      xLabelOffset,
      yLabelOffset,
    });
};
