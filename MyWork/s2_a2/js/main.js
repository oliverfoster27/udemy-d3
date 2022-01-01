/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

d3.json("../data/buildings.json").then(data => {

	data.forEach(d => {
		d.height = Number(d.height)
	})

	const svg = d3.select("#chart-area").append("svg")
		.attr("width", 500)
		.attr("height", 500)

	const rectangles = svg.selectAll("rect")
		.data(data)

	rectangles.enter().append("rect")
		.attr("x", (d, i) => (i * 50) + 50)
		.attr("y", 50)
		.attr("width", 30)
		.attr("height", (d, i) => d.height)
		.attr('stroke', 'black')
		.attr('fill', '#69a3b2')

}).catch(error => {
	console.log(error)
})
