/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400)

svg.append("line")
  .style("stroke", "lightgreen")
  .style("Stroke-width", 10)
  .attr("x1", 0)
  .attr("y1", 100)
  .attr("x2", 200)
  .attr("y2", 200); 

svg.append("rect")
  .attr('x', 10)
  .attr('y', 300)
  .attr('width', 400)
  .attr('height', 40)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

svg.append("ellipse")
  .attr("cx", 150)
  .attr("cy", 100)
  .attr("rx", 20)
  .attr("ry", 60);  