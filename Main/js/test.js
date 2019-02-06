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


function createDynamic(id){

    var width = 700,
    height = 500;

    var nodes = d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; }),
        root = nodes[0],
        color = d3.scale.category10();

    root.radius = 0;
    root.fixed = true;

    var force = d3.layout.force()
        .gravity(0.05)
        .charge(function(d, i) { return i ? 0 : -2000; })
        .nodes(nodes)
        .size([width, height]);

    force.start();

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id",id);

    svg.selectAll("circle")
        .data(nodes.slice(1))
    .enter().append("circle")
        .attr("r", function(d) { return d.radius; })
        .style("fill", function(d, i) { return color(i % 3); });

    var vd = new VisGadget({
        targetId: ['dynamic','country','circular'],
        view: { }
    });

    force.on("tick", function(e) {


    var q = d3.geom.quadtree(nodes),
        i = 0,
        n = nodes.length;

    while (++i < n) q.visit(collide(nodes[i]));

    svg.selectAll("circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    vd.monitors[0].layerManager.update();


    });

    svg.on("mousemove", function() {
    var p1 = d3.mouse(this);
    root.px = p1[0];
    root.py = p1[1];
    force.resume();
    });

    function collide(node) {
    var r = node.radius + 16,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
    return function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
        var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = node.radius + quad.point.radius;
        if (l < r) {
            l = (l - r) / l * .5;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
        }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    };
    }
}


createDynamic('dynamic');
createUSMap('country');
createCircular('circular');


let link = document.createElement('link');
link.href = "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
link.rel = "stylesheet";
document.head.appendChild(link);


//
// vd.filter({
//     typename:'all',
//     monitorId:1,
//     func:(svgDom) => {
//         return svgDom.tagName !== 'path';
//     }
// });

