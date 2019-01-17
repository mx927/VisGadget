/**
 * Shape对象，包含了图形基础功能与属性
 *
 * @class ShapeObject
 */
class ShapeObject {
    /**
     * 根据指定的类型进行初始化
     * 
     * @param  {String|SVGElement} type
     */
    constructor(type) {
        switch (type) {
            case 'rect':
                this.para = this.getDefaults('rect');
                break;
            case 'circle':
                this.para = this.getDefaults('circle');
                break;
            case 'ellipse':
                this.para = this.getDefaults('ellipse');
                break;
        }

        if (type instanceof SVGElement) {
            this.para = ShapeObject.clone(type);
            //console.log( this.para )

        }
    }


    /**
     * 获取默认属性
     * @param  {String} attribute 属性名称
     */
    getDefaults(attribute) {
        return JSON.parse(JSON.stringify(ShapeObject.defaults.shapeOption[attribute]));
    }


    /**
     * 获取/设置 属性
     * @param  {String} attribute 属性名称
     * @param  {any} value 属性值
     */
    attr(attribute, value) {
        if (!attribute)
            return this

        // 设置属性，链式调用(返回this)
        if (typeof (value) != 'undefined') {
            if (typeof (value) == 'function') {
                value = value.call(this);
            }

            if (this.para.shape.hasOwnProperty(attribute)) {
                this.para.shape[attribute] = value;
            }

            if (this.para.style.hasOwnProperty(attribute)) {
                this.para.style[attribute] = value;
            }

            return this;
        }

        // 读取属性，返回属性值
        else {
            if (this.para.shape.hasOwnProperty(attribute)) {
                return this.para.shape[attribute];
            } else if (this.para.style.hasOwnProperty(attribute)) {
                return this.para.style[attribute];
            }

            return undefined;
        }
    }

    confirm() {
        switch (this.attr('type')) {
            case 'ellipse':
                let x = this.attr('x');
                let y = this.attr('y');
                let ex = this.attr('ex');
                let ey = this.attr('ey');

                this.attr('cx', (x + ex) / 2)
                    .attr('cy', (y + ey) / 2)
                    .attr('rx', Math.abs(x - ex) / 2)
                    .attr('ry', Math.abs(y - ey) / 2);
        }
    }

    /**
     * 将目标SVG元素转换为CanvasObject绘图所需
     *
     * @static
     * @param {SVGElement} source 需要克隆的SVG元素
     */
    static clone(source) {
        let res = {};
        let transformX = 0; // x偏移量
        let transformY = 0; // y偏移量
        let sourceStyle = window.getComputedStyle(source, "");
        res.type = source.tagName;

        switch (res.type) {
            case 'circle':
                res['cx'] = 0;
                res['cy'] = 0;
                break;
        }

        //获取 attribute 属性
        for (let attribute of source.attributes) {
            res[attribute.name] = attribute.value;
        }

        for (let attribute of ShapeObject.defaults.cloneShapeOption.normal) {

            res[attribute] = sourceStyle[attribute]

        }

        if (!res['opacity'])
            res['opacity'] = 1;


        return res;
    }


    static getAttribute(source) {
        let res = {};
        for (let attribute of source.style) {
            res[attribute] = source.style[attribute];
        }

        for (let attribute of source.attributes) {
            res[attribute.name] = attribute.value;
        }
        return res;
    }

    static getTransform(transform) {

        let arr = transform.split('(')[1].split(')')[0].split(',');
        for (let i in arr) {
            arr[i] = parseFloat(arr[i]);
        }

        return {
            a: arr[0],
            b: arr[1],
            c: arr[2],
            d: arr[3],
            e: arr[4],
            f: arr[5]
        }
    }

    /**
     * 碰撞检测，返回碰撞类型
     *
     * @static
     * @param {ShapeObject} shape
     * @param {SVGElement} svg
     */
    static containShape(shape, svg) {
        if (!svg instanceof SVGElement) {
            console.error('ShapeObject.containShape ： 参数"svg" 格式错误!');
            return;
        }

        if (shape.attr('type') == 'rect') {
            if (svg.tagName == 'circle') {
                return ShapeObject.rectContainCircle(shape, svg);
            }
        }
    }

    static rectContainCircle(shape, svg) {
        let svgStyle = window.getComputedStyle(svg, "");

        let rect = {
            x: parseFloat(shape.attr('x')),
            y: parseFloat(shape.attr('y')),
            width: parseFloat(shape.attr('width')),
            height: parseFloat(shape.attr('height'))
        };



        let circle = {
            cx: parseFloat(svgStyle.cx),
            cy: parseFloat(svgStyle.cy),
            r: parseFloat(svgStyle.r)
        }

        if (shape.attr('transform')) {
            let shapeTransform = ShapeObject.getTransform(shape.attr('transfrom'));
            rect.x = rect.x * shapeTransform.a + rect.y * shapeTransform.c + shapeTransform.e;
            rect.y = rect.x * shapeTransform.b + rect.y * shapeTransform.d + shapeTransform.f;
            rect.width = rect.width * svgTransform.a;
            rect.height = rect.height * svgTransform.d;
        }

        if (svgStyle.transform != 'none') {
            let svgTransform = ShapeObject.getTransform(svgStyle.transform);
            circle.cx = parseFloat(svgStyle.cx) * svgTransform.a + parseFloat(svgStyle.cy) * svgTransform.c + svgTransform.e;
            circle.cy = parseFloat(svgStyle.cx) * svgTransform.b + parseFloat(svgStyle.cy) * svgTransform.d + svgTransform.f;
            circle.r = parseFloat(svgStyle.r) * Math.max(svgTransform.a, svgTransform.d);

        }


        if (circle.cx - circle.r > rect.x && circle.cx + circle.r < rect.x + rect.width &&
            circle.cy - circle.r > rect.y && circle.cy + circle.r < rect.y + rect.height) {
            return true;
        }
        return false;

    }

}

ShapeObject.defaults = {
    shapeOption: {
        rect: {
            type: "rect",
            shape: {
                "x": 0, // x坐标
                "y": 0, // y坐标
                "width": 1, // 宽度
                "height": 1, // 高度
            },
            style: {
                "fill": 'steelblue', // 矩形颜色
                "fill-opacity": 0.5, // 矩形透明度
                "stroke": 'black', // 边框颜色
                "stroke-width": 0.5, // 边框宽度
                "stroke-opacity": 1, // 边框透明度
                "opacity": 1 // 整体透明度，若未选择矩形和边框的透明度， 则默认使用整体透明度
            }
        },
        circle: {
            'type': 'circle',
            "cx": 50, // 圆心x坐标
            "cy": 50, // 圆心y坐标
            "r": 50, // 半径
            "fill": 'steelblue', // 颜色
            "fill-opacity": 0.5, // 透明度
            "stroke": 'black', // 边框颜色
            "stroke-width": 0.5, // 边框宽度
            "stroke-opacity": 1, // 边框透明度
            "opacity": 1 // 整体透明度，若未选择矩形和边框的透明度， 则默认使用整体透明度
        },
        ellipse: {
            'type': 'ellipse',
            "x": 0, //外接矩形左上角 x坐标
            "y": 0, //外接矩形左上角 y坐标
            "ex": 0, //外接矩形右下角 x坐标
            "ey": 0, //外接矩形右下角 y坐标
            "cx": 0, // 圆心x坐标
            "cy": 0, // 圆心y坐标
            "rx": 0, // x轴半径
            "ry": 0, // y轴半径
            "fill": 'steelblue', // 颜色
            "fill-opacity": 0.5, // 透明度
            "stroke": 'black', // 边框颜色
            "stroke-width": 0.5, // 边框宽度
            "stroke-opacity": 1, // 边框透明度
            "opacity": 1 // 整体透明度，若未选择矩形和边框的透明度， 则默认使用整体透明度
        }
    },
    cloneShapeOption: {
        normal: ["x", "y", "cx", "cy", "d", "rx", "ry", "r", "width", "height", "transform", "fill", "fill-opacity", "stroke", "stroke-width", "stroke-opacity", "opacity"]
    }
}