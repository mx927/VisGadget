function createUSMap(id) {
    var width = 960,
        height = 600;

    var formatNumber = d3.format(",.0f");

    var path = d3.geo.path()
        .projection(null);

    var radius = d3.scale.sqrt()
        .domain([0, 1e6])
        .range([0, 15]);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", id);
        
        

    var legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(" + (width - 50) + "," + (height - 20) + ")")
        .selectAll("g")
        .data([1e6, 5e6, 1e7])
        .enter().append("g");

    legend.append("circle")
        .attr("cy", function (d) {
            return -radius(d);
        })
        .attr("r", radius);
        

    legend.append("text")
        .attr("y", function (d) {
            return -2 * radius(d);
        })
        .attr("dy", "1.3em")
        .text(d3.format(".1s"));

    d3.json("us.json", function (error, us) {
        if (error) throw error;

        svg.append("path")
            .datum(topojson.feature(us, us.objects.nation))
            .attr("class", "land")
            .attr("d", path);

        svg.append("path")
            .datum(topojson.mesh(us, us.objects.states, function (a, b) {
                return a !== b;
            }))
            .attr("class", "border border--state")
            .attr("d", path);

        svg.append("g")
            .attr("class", "bubble")
            .selectAll("circle")
            .data(topojson.feature(us, us.objects.counties).features
                .sort(function (a, b) {
                    return b.properties.population - a.properties.population;
                }))
            .enter().append("circle")
            .attr("transform", function (d) {
                return "translate(" + path.centroid(d) + ")";
            })
            .attr("r", function (d) {
                return radius(d.properties.population);
            })
            .append("title")
            .text(function (d) {
                return d.properties.name +
                    "\nPopulation " + formatNumber(d.properties.population);
            });
    });
}

function createCircular(id) {

    var width = 960,
        height = 500;

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id",id)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var gradient = svg.append("defs").append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "20%")
        .attr("x2", "20%")
        .attr("y2", "100%");

    gradient.append("stop")
        .attr("offset", "20%")
        .attr("stop-color", "#ccf");

    gradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#1C425C");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#19162B");

    // could use transparent gradient overlay to vary raindrop color
    svg.selectAll("path")
        .data(d3.range(358))
        .enter().append("path")
        .attr("fill", "url(#gradient)")
        .attr("d", function () {
            return raindrop(10 + Math.random() * 200);
        })
        .attr("transform", function (d) {
            return "rotate(" + d + ")" +
                "translate(" + (height / 4 + Math.random() * height / 6) + ",0)" +
                "rotate(90)";
        });

    // size is linearly proportional to square pixels (not exact, yet)
    function raindrop(size) {
        var r = Math.sqrt(size / Math.PI);
        return "M" + r + ",0" +
            "A" + r + "," + r + " 0 1,1 " + -r + ",0" +
            "C" + -r + "," + -r + " 0," + -r + " 0," + -3 * r +
            "C0," + -r + " " + r + "," + -r + " " + r + ",0" +
            "Z";
    }

}

createUSMap('country');
createCircular('circular')

let link = document.createElement('link');
link.href = "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
link.rel = "stylesheet";
document.head.appendChild(link);

var vd = new VisGadget({
    targetId: ['country','circular'],
    view: {}
})

