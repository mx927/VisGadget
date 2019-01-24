/**
 * 监视器，一个监视器对应一个SVG窗口
 *
 * @class Monitor
 */
class Monitor {
    /**
     * @param  {} goal 需要监听的SVG元素
     */
    constructor(goal) {


        this.goal = goal;
        let svgRect = this.goal.getClientRects()[0];
        this.shapes = [];
        this.currentCallBack = null;
        this.currentSelectArea = null;
        this.selectArea = [];

        this.tasks = [];
        this.renderer = 'canvas';
        this.drawBoard = null;
        this.container = document.createElement('div');
        this.backgroundColor_active = 'rgba(255, 255, 255, 0)';
        this.backgroundColor_inactive = 'rgba(236, 154, 154, 0.3)';

        // 关于选择器的样式设定
        this.selectAreaColor = 'steelblue';
        this.selectAreaOpacity = 0.5;
        this.selectAreaLineWidth = 3;
        this.selectAreaZLevel = 2;
        this.previewZLevel = 1;

        // 设置容器大小
        this.container.className = 'VisGadget_Monitor';
        this.container.style.position = 'absolute';
        this.container.style.width = goal.width.animVal.value + 'px';
        this.container.style.height = goal.height.animVal.value + 'px';
        this.container.style.left = svgRect.left + 'px';
        this.container.style.top = svgRect.top + Monitor.getScrollTop() + 'px';
        this.container.style.backgroundColor = 'rgba(236, 154, 154, 0.3)';
        this.container.style.pointerEvents = 'none';
        this.container.style.zIndex = 999;
        this.zr = Monitor.zrender.init(this.container, {
            renderer: this.renderer,
            devicePixelRatio: 3
        })


        //获取画板。为svg或者canvas元素
        setTimeout(() => {
            this.drawBoard = this.zr.dom.firstChild.firstChild;
        }, 1);

        document.body.appendChild(this.container);



    }

    /*********************************  元素检测 ************************************/
    getInclusion(selector) {

        let allCircle = util.makeArray(this.goal.getElementsByTagName('circle'));
        let allPath = util.makeArray(this.goal.getElementsByTagName('path'));

        let allSVG = allCircle.concat(allPath);

        for (let svgDom of allSVG) {
            let shape = this.clone(svgDom);
            let cross = false;
            let rect = this.getTrueRect(shape);
            let featurePoints = this.getFeaturePoints(shape);


            // 边界矩形 相交检测
            if (!rect.intersect(selector.getBoundingRect())) {
                if (shape.type != 'path') {
                    continue;
                } else {
                    let vertex = this.getTrueVertex(shape);
                    let intersect = false;
                    for (let d of vertex) {
                        if (selector.contain(d[0], d[1])) {
                            intersect = true;
                            break;
                        }
                    }

                    if (!intersect) {
                        continue;
                    }
                }
            }

            // 特征顶点 包含检测
            for (let p of featurePoints) {
                if (selector.contain(p[0], p[1])) {
                    cross = true;
                    break;
                }
            }

            if (!cross) {
                if (eval('this.check_' + selector.type + '(selector,shape,svgDom)')) {
                    cross = true;
                }
            }

            if (cross) {
                shape.attr({
                    style: {
                        fill: this.selectAreaColor
                    }
                });
                this.zr.add(shape);
            }
        }

        selector.attr({
            style: {
                opacity: 0
            }
        });


    }
    getTrueRect(shape) {
        let rect = shape.getBoundingRect().clone();
        [rect.x, rect.y] = shape.transformCoordToGlobal(rect.x, rect.y);
        return rect;
    }

    getTrueVertex(shape) {
        let rect = shape.getBoundingRect();
        let vertex = [
            [rect.x, rect.y],
            [rect.x + rect.width, rect.y],
            [rect.x, rect.y + rect.height],
            [rect.x + rect.width, rect.y + rect.height],
        ];
        for (let i in vertex) {
            let d = vertex[i];
            vertex[i] = shape.transformCoordToGlobal(d[0], d[1]);
        }
        return vertex;
    }

    getFeaturePoints(shape) {
        let rect = this.getTrueRect(shape);
        let points = [];

        switch (shape.type) {
            case 'circle':
                let cx = shape.shape.cx;
                let cy = shape.shape.cy;
                let r = shape.shape.r;
                [cx, cy] = shape.transformCoordToGlobal(cx, cy);
                points.push([cx, cy]);
                points.push([cx - r, cy]);
                points.push([cx + r, cy]);
                points.push([cx, cy - r]);
                points.push([cx, cy + r]);
                break;
            case 'path':
                let br = shape.getBoundingRect();
                let p = shape.transformCoordToGlobal(br.x + br.width/2,br.y + br.height/2);
                points.push(p);
                break;
        }
        return points;
    }

    check_rectSelect(selector, shape, svg) {

        let rect = this.getTrueRect(selector);

        if (shape.type == 'circle') {
            let cpoint = shape.transformCoordToGlobal(shape.shape.cx, shape.shape.cy);
            let scale = shape.scale;
            let r = shape.shape.r;
            let lines = [
                util.createLineByPoints([rect.x, rect.y], [rect.x + rect.width, rect.y]),
                util.createLineByPoints([rect.x, rect.y + rect.height], [rect.x + rect.width, rect.y + rect.height]),
                util.createLineByPoints([rect.x, rect.y], [rect.x, rect.y + rect.height]),
                util.createLineByPoints([rect.x + rect.width, rect.y], [rect.x + rect.width, rect.y + rect.height])
            ];
            for (let line of lines) {
                let d = util.calcDistanceByPointLine(cpoint, line, scale);

                if (cpoint.x > line.point2[0]) {
                    d = util.calcDistanceByPoints(cpoint, line.point2, scale);
                }

                if (cpoint.x < line.point1[0]) {
                    d = util.calcDistanceByPoints(cpoint, line.point1, scale);
                }

                if (d <= r) {
                    return true;
                }
            }

        } else if (shape.type == 'path') {
            let totaLength = svg.getTotalLength();
            for (let len = 0; len < totaLength; len += totaLength * 0.02) {
                let point = svg.getPointAtLength(len);
                point = shape.transformCoordToGlobal(point.x, point.y);

                if (selector.contain(point[0], point[1])) {
                    return true;
                }
            }
        }
        return false;
    }

    check_lassoSelect(selector, shape, svg) {

        let points = selector.shape.points;

        if (shape.type == 'circle') {
            let cpoint = shape.transformCoordToGlobal(shape.shape.cx, shape.shape.cy);
            let r = shape.shape.r;
            let scale = shape.scale;
            for (let point of points) {
                let d = util.calcDistanceByPoints(point, cpoint, scale);
                if (d <= r) {
                    return true;
                }
            }
        } else if (shape.type == 'path') {
            let totaLength = svg.getTotalLength();
            for (let len = 0; len < totaLength; len += totaLength * 0.05) {
                let point = svg.getPointAtLength(len);
                point = shape.transformCoordToGlobal(point.x, point.y);

                if (selector.contain(point[0], point[1])) {
                    return true;
                }
            }
        }
        return false;
    }

    check_straightSelect(selector, shape, svg) {
        let p1 = selector.transformCoordToGlobal([selector.shape.x1, selector.shape.y1])[0];
        let p2 = selector.transformCoordToGlobal([selector.shape.x2, selector.shape.y2])[0];

        let line1 = util.createLineByPoints(p1, p2);

        if (shape.type == 'circle') {
            let cpoint = shape.transformCoordToGlobal(shape.shape.cx, shape.shape.cy);

            let r = shape.shape.r;

            let d = util.calcDistanceByPointLine(cpoint, line1, shape.scale);

            if (d <= r) {
                return true;
            }
        } else if (shape.type == 'path') {
            let totaLength = svg.getTotalLength();
            for (let len = 0; len < totaLength; len += totaLength * 0.05) {
                let point = svg.getPointAtLength(len);
                point = shape.transformCoordToGlobal(point.x, point.y);

                let d = util.calcDistanceByPointLine(point, line1, [1, 1]);

                if (d > 3) {
                    continue;
                }

                if (selector.contain(point[0], point[1])) {
                    return true;
                }
            }
        }
        return false;
    }

    check_ellipseSelect(selector, shape,svg) {
        let cx = 0,
            cy = 0;
        let rx = selector.shape.rx;
        let ry = selector.shape.ry;
        [cx, cy] = selector.transformCoordToGlobal(selector.shape.cx, selector.shape.cy);

        if (shape.type == 'circle') {
            let p = [];
            p.push(selector.transformCoordToGlobal(selector.shape.cx - selector.shape.rx, selector.shape.cy));
            p.push(selector.transformCoordToGlobal(selector.shape.cx + selector.shape.rx, selector.shape.cy));
            p.push(selector.transformCoordToGlobal(selector.shape.cx, selector.shape.cy + selector.shape.ry));
            p.push(selector.transformCoordToGlobal(selector.shape.cx, selector.shape.cy - selector.shape.ry));
            p.push(selector.transformCoordToGlobal(selector.shape.cx, selector.shape.cy));

            let cpoint = shape.transformCoordToGlobal(shape.shape.cx, shape.shape.cy);
            let scale = shape.scale;
            let r = shape.shape.r;
            let line = util.createLineByPoints([cx, cy], cpoint);
            let a = parseFloat(rx),
                b = parseFloat(ry),
                c = parseFloat(cx),
                d = parseFloat(cy),
                B = parseFloat(line.b),
                k = parseFloat(line.k);

            //第一轮判断
            for (let point of p) {
                let d = util.calcDistanceByPoints(cpoint, point, shape.scale);

                if (d <= r) {
                    return true;
                }
            }

            //第二轮判断
            let judge = {
                a: a * a * k * k + b * b,
                b: -2 * b * b * c + 2 * a * a * (B - d) * k,
                c: a * a * (B - d) * (B - d) + b * b * c * c - a * a * b * b
            }

            let derta = judge.b * judge.b - 4 * judge.a * judge.c;

            if (derta >= 0) {
                let x1 = (-judge.b + Math.sqrt(derta)) / (2 * judge.a);
                let y1 = k * x1 + B;
                let x2 = (-judge.b - Math.sqrt(derta)) / (2 * judge.a);
                let y2 = k * x2 + B;

                let d = Math.min(util.calcDistanceByPoints(cpoint, [x1, y1], scale), util.calcDistanceByPoints(cpoint, [x2, y2], scale));

                if (Math.abs(r - d) < 2) {
                    return true;
                }
            }
        }else if(shape.type == 'path'){
            let totaLength = svg.getTotalLength();
            for (let len = 0; len < totaLength; len += totaLength * 0.05) {
                let point = svg.getPointAtLength(len);
                point = shape.transformCoordToGlobal(point.x, point.y);

                if (selector.contain(point[0], point[1])) {
                    return true;
                }
            }
        }
        return false;
    }

    check_polylineSelect(selector, shape,svg) {
        let points = selector.shape.points;

        if (shape.type == 'circle') {
            let cpoint = shape.transformCoordToGlobal(shape.shape.cx, shape.shape.cy);
            let r = shape.shape.r;
            let scale = shape.scale;
            for (let point of points) {
                let d = util.calcDistanceByPoints(point, cpoint, scale);
                if (d <= r) {
                    return true;
                }
            }
        }else if(shape.type == 'path'){
            let totaLength = svg.getTotalLength();
            for (let len = 0; len < totaLength; len += totaLength * 0.05) {
                let point = svg.getPointAtLength(len);
                point = shape.transformCoordToGlobal(point.x, point.y);

                if (selector.contain(point[0], point[1])) {
                    return true;
                }
            }
        }
        return false;
    }

    check_freeSelect(selector, shape,svg) {
        let points = selector.shape.points;

        if (shape.type == 'circle') {
            let cpoint = shape.transformCoordToGlobal(shape.shape.cx, shape.shape.cy);
            let r = shape.shape.r;
            let scale = shape.scale;
            for (let point of points) {
                let d = util.calcDistanceByPoints(point, cpoint, scale);
                if (d <= r) {
                    return true;
                }
            }
        }else if(shape.type == 'path'){
            let totaLength = svg.getTotalLength();
            for (let len = 0; len < totaLength; len += totaLength * 0.05) {
                let point = svg.getPointAtLength(len);
                point = shape.transformCoordToGlobal(point.x, point.y);

                if (selector.contain(point[0], point[1])) {
                    return true;
                }
            }
        }
        return false;
    }
    /*********************************  克隆SVG元素 ************************************/
    clone(svg) {
        let style = window.getComputedStyle(svg, "");
        let shape = null;
        switch (svg.tagName) {
            case 'circle':
                shape = new Monitor.zrender.Circle({
                    type: 'circle',
                    shape: {
                        cx: parseFloat(style.cx),
                        cy: parseFloat(style.cy),
                        r: parseFloat(style.r)
                    },
                    style: {
                        fill: style.fill,
                        opacity: parseFloat(style.fillOpacity),
                        stroke: style.stroke,
                        lineWidth: parseFloat(style.strokeWidth)
                    }
                })
                break;
            case 'path':
                let pathStr = style.d.split('(')[1].split(')')[0];
                shape = Monitor.zrender.path.createFromString(pathStr, {
                    type: 'path',
                    style: {
                        x: 100,
                        y: 100,
                        brushType: 'both',
                        fill: 'steelblue',
                        lineWidth: 10,
                    }
                });
                break;
        }

        if (shape && style.transform != 'none') {
            let matrix = Monitor.zrender.matrix.create();
            let nodeArr = [];

            //获取所有直系节点
            while (svg instanceof SVGElement) {
                nodeArr.push(svg);
                svg = svg.parentNode;
            }

            //倒置， 从最顶级的父节点开始 合并transform样式
            nodeArr.reverse();
            for (let node of nodeArr) {
                let transform = window.getComputedStyle(node, '').transform;

                //若有transform样式， 则合并
                if (transform != 'none') {
                    let arr = transform.split('(')[1].split(')')[0].split(',');
                    for (let i in arr) {
                        arr[i] = parseFloat(arr[i]);
                    }
                    Monitor.zrender.matrix.mul(matrix, matrix, arr);
                }
            }

            shape.attr('transform', matrix);
            shape.decomposeTransform();
        }

        return shape;
    }
    /*********************************  画图相关 ************************************/

    /**
     * 指针模式
     */
    pointerMode() {
        this.cancel();
        this._pointerSelect();

    }

    rectSelect() {
        this.cancel();
        this._rectSelect();
    }

    ellipseSelect() {
        this.cancel();
        this._ellipseSelect();
    }

    lassoSelect() {
        this.cancel();
        this._lassoSelect();
    }

    straightSelect() {
        this.cancel();
        this._straightSelect();
    }

    polylineSelect() {
        this.cancel();
        this._polylineSelect();
    }

    freeSelect() {
        this.cancel();
        this._freeSelect();
    }

    selectComplete(restart) {
        let type = this.currentSelectArea.type;

        this.getInclusion(this.currentSelectArea);

        eval('this.' + type + '()');
    }

    cancel() {
        this.container.style.pointerEvents = 'none';
        this.container.style.backgroundColor = this.backgroundColor_inactive;
        this.currentCallBack = null;

        this.container.onclick = null;
        this.container.ondbclick = null;
        this.container.onmouseup = null;
        this.container.onmousedown = null;
        this.container.onmousemove = null;
        this.container.onmouseout = null;

        if (this.currentSelectArea) {
            this.zr.remove(this.currentSelectArea);
            this.currentSelectArea = null;
        }


        for (let selectShape of this.selectArea) {
            selectShape.attr('draggable', false);
        }
    }

    /*********************************  内部函数 ************************************/

    _pointerSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;

        for (let selectShape of this.selectArea) {
            selectShape.attr('draggable', true);
        }

    }

    _rectSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;

        this.container.onmousedown = (ev) => {
            this.currentSelectArea = new Monitor.zrender.Rect({
                type: 'rectSelect',
                zlevel: this.selectAreaZLevel,
                shape: {
                    x: ev.offsetX,
                    y: ev.offsetY,
                    width: 1,
                    height: 1
                },
                style: {
                    fill: this.selectAreaColor,
                    opacity: this.selectAreaOpacity,
                    stroke: 'black'
                }
            });
            this.zr.add(this.currentSelectArea);
            this.container.onmousedown = null;


            setTimeout(() => {
                this.container.onmousemove = (ev) => {
                    if (this.currentSelectArea) {
                        let x = this.currentSelectArea.shape.x;
                        let y = this.currentSelectArea.shape.y;

                        this.currentSelectArea.attr({
                            shape: {
                                width: ev.offsetX - x,
                                height: ev.offsetY - y
                            }
                        })
                    }
                }

                this.container.onmouseup = this.container.onmouseout = (ev) => {
                    if (this.currentSelectArea) {
                        let x = this.currentSelectArea.shape.x;
                        let y = this.currentSelectArea.shape.y;
                        let width = this.currentSelectArea.shape.width;
                        let height = this.currentSelectArea.shape.height;

                        if (width < 0) {
                            x = x + width;
                            width = -width;
                        }
                        if (height < 0) {
                            y = y + height;
                            height = -height;
                        }

                        this.currentSelectArea.attr({
                            shape: {
                                x: x,
                                y: y,
                                width: width,
                                height: height
                            }
                        })

                        this.container.onmousemove = null;
                        this.container.onmouseup = null;
                        this.container.onmouseout = null;

                        this.selectComplete();
                    }
                }
            }, 100);
        }
    }

    _ellipseSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;

        this.container.onmousedown = (ev) => {
            this.currentSelectArea = new Monitor.zrender.Ellipse({
                type: 'ellipseSelect',
                zlevel: this.selectAreaZLevel,
                shape: {
                    ox: ev.offsetX,
                    oy: ev.offsetY,
                    cx: ev.offsetX,
                    cy: ev.offsetY,
                    rx: 1,
                    ry: 1
                },
                style: {
                    fill: this.selectAreaColor,
                    opacity: this.selectAreaOpacity,
                    stroke: 'black'
                }
            })
            this.zr.add(this.currentSelectArea);

            this.container.onmousedown = null;

            this.container.onmousemove = (ev) => {
                if (this.currentSelectArea) {
                    let sp = this.currentSelectArea.shape;
                    sp.rx = Math.abs((ev.offsetX - sp.ox) / 2);
                    sp.ry = Math.abs((ev.offsetY - sp.oy) / 2);
                    sp.cx = (ev.offsetX + sp.ox) / 2;
                    sp.cy = (ev.offsetY + sp.oy) / 2;

                    this.currentSelectArea.attr({
                        shape: {
                            cx: sp.cx,
                            cy: sp.cy,
                            rx: sp.rx,
                            ry: sp.ry
                        }
                    })
                }
            }

            setTimeout(() => {
                this.container.onmouseup = this.container.onmouseout = (ev) => {
                    if (this.currentSelectArea) {
                        this.selectComplete();
                    }
                }
            }, 100);
        }

    }

    _lassoSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;


        this.container.onmousedown = (ev) => {
            this.currentSelectArea = new Monitor.zrender.Polygon({
                type: 'lassoSelect',
                zlevel: this.selectAreaZLevel,
                shape: {
                    points: [
                        [ev.offsetX, ev.offsetY],
                        [ev.offsetX, ev.offsetY]
                    ]
                },
                style: {
                    fill: this.selectAreaColor,
                    opacity: this.selectAreaOpacity
                }
            })

            this.zr.add(this.currentSelectArea);

            this.container.mousedown = null;

            this.container.onmousemove = (ev) => {
                let points = this.currentSelectArea.shape.points;
                points = points.slice(0, points.length - 1);
                points.push([ev.offsetX, ev.offsetY]);
                points.push(points[0]);
                this.currentSelectArea.attr({
                    shape: {
                        points: points
                    }
                });
            }

            setTimeout(() => {
                this.container.onmouseup = this.container.onmouseout = (ev) => {
                    if (this.currentSelectArea) {
                        let points = this.currentSelectArea.shape.points;
                        points = points.slice(0, points.length - 1);
                        points.push([ev.offsetX, ev.offsetY]);
                        points.push(points[0]);
                        this.currentSelectArea.attr({
                            shape: {
                                points: points
                            }
                        });

                        this.selectComplete();
                    }
                }
            }, 100);
        }

    }

    _straightSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;

        this.container.onmousedown = (ev) => {
            this.currentSelectArea = new Monitor.zrender.Line({
                type: 'straightSelect',
                zlevel: this.selectAreaZLevel,
                shape: {
                    x1: parseFloat(ev.offsetX),
                    y1: parseFloat(ev.offsetY),
                    x2: parseFloat(ev.offsetX),
                    y2: parseFloat(ev.offsetY),
                },
                style: {
                    stroke: this.selectAreaColor,
                    lineWidth: this.selectAreaLineWidth,
                    opacity: this.selectAreaOpacity
                }
            })

            this.zr.add(this.currentSelectArea);

            this.container.onmousedown = null;

            this.container.onmousemove = (ev) => {
                if (this.currentSelectArea) {
                    this.currentSelectArea.attr({
                        shape: {
                            x2: parseFloat(ev.offsetX),
                            y2: parseFloat(ev.offsetY)
                        }
                    })
                }
            }

            setTimeout(() => {
                if (this.currentSelectArea) {
                    this.container.onmouseup = this.container.onmouseout = (ev) => {
                        this.currentSelectArea.attr({
                            shape: {
                                x2: parseFloat(ev.offsetX),
                                y2: parseFloat(ev.offsetY)
                            }
                        })
                        this.selectComplete();
                    }
                }
            }, 100);
        }
    }

    _polylineSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;

        let _this = this;
        _this.container.onclick = function (ev) {
            // 第一次点击，新建图形
            if (_this.currentSelectArea == null) {
                _this.currentSelectArea = new Monitor.zrender.Polyline({
                    type: 'polylineSelect',

                    zlevel: _this.selectAreaZLevel,
                    shape: {
                        points: [
                            [ev.offsetX, ev.offsetY],
                            [ev.offsetX, ev.offsetY]
                        ]
                    },
                    style: {
                        stroke: _this.selectAreaColor,
                        lineWidth: _this.selectAreaLineWidth,
                        opacity: _this.selectAreaOpacity
                    }
                })
                _this.zr.add(_this.currentSelectArea);
            } else {

                let points = _this.currentSelectArea.shape.points;
                points.push([ev.offsetX, ev.offsetY]);
                points.push([ev.offsetX, ev.offsetY]);
                _this.currentSelectArea.attr({
                    shape: {
                        points: points
                    }
                })
            }
        }

        _this.container.onmousemove = function (ev) {
            if (_this.currentSelectArea) {
                let points = _this.currentSelectArea.shape.points;
                points = points.slice(0, points.length - 1);
                points.push([ev.offsetX, ev.offsetY]);
                _this.currentSelectArea.attr({
                    shape: {
                        points: points
                    }
                });
            }
        }

        _this.container.onmousemout = _this.container.ondblclick = function (ev) {
            if (_this.currentSelectArea) {
                _this.selectComplete();
            }
        }
    }


    _freeSelect() {
        this.container.style.pointerEvents = 'auto';
        this.container.style.backgroundColor = this.backgroundColor_active;

        this.container.onmousedown = (ev) => {
            this.currentSelectArea = new Monitor.zrender.Polyline({
                type: 'freeSelect',

                zlevel: this.selectAreaZLevel,
                shape: {
                    points: [
                        [ev.offsetX, ev.offsetY]
                    ]
                },
                style: {
                    stroke: this.selectAreaColor,
                    lineWidth: this.selectAreaLineWidth,
                    opacity: this.selectAreaOpacity
                }
            });

            this.zr.add(this.currentSelectArea);

            this.container.onmousedown = null;

            this.container.onmousemove = (ev) => {
                if (this.currentSelectArea) {
                    let points = this.currentSelectArea.shape.points
                    points.push([ev.offsetX, ev.offsetY]);
                    this.currentSelectArea.attr({
                        shape: {
                            points: points
                        }
                    })
                }
            }

            setTimeout(() => {
                this.container.onmouseup = this.container.onmouseout = (ev) => {
                    if (this.currentSelectArea) {
                        this.selectComplete();
                    }
                }
            }, 100);
        }
    }


    /** 获取滚动轴高度 */
    static getScrollTop() {
        let scroll_top = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scroll_top = document.documentElement.scrollTop;
        } else if (document.body) {
            scroll_top = document.body.scrollTop;
        }
        return scroll_top;
    }
}