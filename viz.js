import { select } from "d3";
import { loadAndParseCSV } from "./loadAndParseCSV";
import { parseRow } from "./parseRow";
import { respondToResize } from "./respondToResize";
import { one } from "./one";
import { scatterPlot } from "./scatterPlot";

export const viz = (container, { state, setState }) => {
  const data = loadAndParseCSV({
    csvURL: "data.csv",
    parseRow,
    state,
    setState,
  });

  const dimensions = respondToResize({ state, setState });

  if (data && dimensions) {
    const svg = one(select(container), "svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

    svg.call(scatterPlot, {
      data,
      width: dimensions.width,
      height: dimensions.height,
      xValue: (d) => d.sepal_width,
      yValue: (d) => d.petal_length,
      xLabel: "Sepal Width",
      yLabel: "Sepal Length",
      xLabelOffset: 25,
      yLabelOffset: 30,
      circleRadius: 5,
      margin: { top: 10, right: 10, bottom: 45, left: 45 },
    });
  }
};
