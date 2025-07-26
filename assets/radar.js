
(function () {
  const width = 600, height = 600;
  const radius = Math.min(width, height) / 2 - 60;
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  const svg = d3.select("#radar").append("svg")
    .attr("width", width).attr("height", height)
    .append("g").attr("transform", `translate(${width / 2},${height / 2})`);

  const rings = radarData.rings.length;
  const quadrants = radarData.quadrants.length;

  // Draw rings
  for (let r = 1; r <= rings; r++) {
    svg.append("circle")
      .attr("r", (radius / rings) * r)
      .attr("fill", "none")
      .attr("stroke", "#ccc");
  }

  // Draw quadrant lines
  for (let q = 0; q < quadrants; q++) {
    const angle = (q / quadrants) * 2 * Math.PI;
    svg.append("line")
      .attr("x1", 0).attr("y1", 0)
      .attr("x2", radius * Math.cos(angle))
      .attr("y2", radius * Math.sin(angle))
      .attr("stroke", "#ccc");
  }

  // Draw entries
  radarData.entries.forEach((entry, i) => {
    const angle = (entry.quadrant / quadrants) * 2 * Math.PI + Math.random() * (Math.PI / quadrants / 2);
    const r = (entry.ring + 0.5) * (radius / rings);
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);

    svg.append("circle")
      .attr("cx", x).attr("cy", y)
      .attr("r", 6)
      .attr("fill", color(entry.quadrant))
      .on("click", () => {
        if (entry.link) window.location.href = entry.link;
      })
      .append("title").text(entry.name + ": " + entry.description);

    svg.append("text")
      .attr("x", x + 8).attr("y", y + 4)
      .text(entry.name)
      .attr("font-size", "11px");
  });
})();
