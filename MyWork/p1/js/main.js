/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

const svg = d3.select("#chart-area").append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

const g = svg.append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

d3.csv("./data/revenues.csv").then(data => {
    
    // Clean data
	data.forEach(d => {
		d.revenue = Number(d.revenue)
        d.profit = Number(d.profit)
	})
    
    // Create x-scale
    const x = d3.scaleBand()
    .domain(data.map(d => d.month))
    .range([0, WIDTH])
    .paddingInner(0.3)
    .paddingOuter(0.2)
  
    // Create y-scale
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.revenue)])
        .range([HEIGHT, 0])

    // Create x-axis
    const leftAxis = d3.axisLeft(y)
        .ticks(10)
        .tickFormat(d => "$" + d)
    g.append("g")
        .attr("class", "left axis")
        .call(leftAxis)

    // Create y-axis
    const bottomAxis = d3.axisBottom(x)
    g.append("g")
        .attr("class", "bottom axis")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(bottomAxis)
        .selectAll("text")
            .attr("y", 10)
            .attr("x", -5)
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)")

    // Create x-label
    g.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("x", WIDTH/2)
        .attr("y", HEIGHT + 50)
        .text("Month");

    // Create y-label
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("y", 40)
        .attr("x", -(HEIGHT/2))
        .attr("transform", "rotate(-90)")
        .text("Revenue");

    // Join our data
    const rects = g.selectAll("rect")
        .data(data)
    rects.enter().append("rect")
        .attr("y", d => y(d.revenue))
        .attr("x", d => x(d.month))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.revenue))
        .attr("fill", "grey")

})
