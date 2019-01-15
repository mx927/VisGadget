/**
 * Canvas对象，包含了画布基础功能与属性
 *
 * @class CanvasObject
 */
class CanvasObject {
    /**
     * @param  {} goal 需要监听的SVG元素
     */
    constructor(goal) {
        this.goal = goal;
        this.canvas = document.createElement('canvas');


        this.status = CanvasObject.defaults.status.cancel;
        this.shapes = [];
        this.currentShape = null;

        let canvas = this.canvas;
        let svgRect = this.goal.getClientRects()[0];

        canvas.style.position = 'absolute'
        canvas.width = goal.width.animVal.value;
        canvas.height = goal.height.animVal.value;
        canvas.style.left = svgRect.left + 'px';
        canvas.style.top = svgRect.top + CanvasObject.getScrollTop() + 'px';
        canvas.style.backgroundColor = 'rgba(236, 154, 154, 0.3)';
        //canvas.style.cursor = 'move';
        canvas.style.pointerEvents = 'none'

        canvas.oncontextmenu = function () {
            return false;
        }

        document.body.appendChild(canvas);



        

        this.shapes.push(new ShapeObject(document.getElementById('myRect')))

        this._redraw();

    }
    /**
     * 重绘所有图形
     */
    _redraw() {
        let canvas = this.canvas;
        let ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let shape of this.shapes) {
            this._drawByType(ctx, shape)
        }

        if (this.currentShape) {
            this._drawByType(ctx, this.currentShape)
        }
    }
    /**
     * 根据shape类型绘制图形
     * 
     * @param  {context} ctx
     * @param  {ShapeObject} shape
     */
    _drawByType(ctx, shape) {
        ctx.save();
        switch (shape.attr('type')) {
            case 'rect':
                this._drawRect(ctx, shape);
                break;
            case 'circle':
                this._drawCircle(ctx,shape);
                break;
            case 'ellipse':
                this._drawEllipse(ctx, shape);
                break;
        }
        ctx.restore();
    }

    /**
     *绘制矩形

     * @param {canvas.getContext} ctx
     * @param {ShapeObject} rect
     */
    _drawRect(ctx, rect) {
        let x = shape.attr('x');
        let y = shape.attr('y');
        let width = parseFloat(shape.attr('width'));
        let height = parseFloat(shape.attr('height'));
        let fill = shape.attr('fill');
        let fillOpacity = shape.attr('fill-opacity') ? shape.attr('fill-opacity') : shape.attr('opacity');
        fillOpacity = parseFloat(fillOpacity);
        let strokeWidth = parseFloat(shape.attr('stroke-width'));
        let stroke = shape.attr('stroke');
        let strokeOpacity = shape.attr('stroke-opacity') ? shape.attr('stroke-opacity') : shape.attr('opacity');
        strokeOpacity = parseFloat(strokeOpacity);


        // 绘制内部矩形
        ctx.fillStyle = fill;
        ctx.globalAlpha = fillOpacity;
        ctx.fillshape(x, y, width, height);

        // 绘制边框
        ctx.strokeStyle = stroke;
        ctx.globalAlpha = strokeOpacity;
        ctx.lineWidth = strokeWidth;

        ctx.strokeshape(x - strokeWidth / 2, y - strokeWidth / 2, width + strokeWidth, height + strokeWidth);
    }

    _drawCircle(context,shape){
        context.save();
        let cx = parseFloat(shape.attr('cx'));
        let cy = parseFloat(shape.attr('cy'));
        let r = parseFloat(shape.attr('r'));
        
        let fill = shape.attr('fill');
        let fillOpacity = shape.attr('fill-opacity') ? shape.attr('fill-opacity') : shape.attr('opacity');
        fillOpacity = parseFloat(fillOpacity);
        let strokeWidth = shape.attr('stroke-width');
        let stroke = shape.attr('stroke');
        let strokeOpacity = shape.attr('stroke-opacity') ? shape.attr('stroke-opacity') : shape.attr('opacity');
        strokeOpacity = parseFloat(strokeOpacity);

        context.beginPath();
        context.arc(cx, cy, r, 0, 2 * Math.PI, false);
        context.fillStyle = fill;
        context.globalAlpha = fillOpacity;
        context.fill();

        if(strokeWidth){
            context.strokeStyle = stroke;
            context.lineWidth = strokeWidth;
            context.globalAlpha = strokeOpacity;
            context.stroke();
        }
        context.restore();
    }

    _drawEllipse(context, shape) {
        let cx = parseFloat(shape.attr('cx'));
        let cy = parseFloat(shape.attr('cy'));
        let rx = parseFloat(shape.attr('rx'));
        let ry = parseFloat(shape.attr('ry'));

        let fill = shape.attr('fill');
        let fillOpacity = shape.attr('fill-opacity') ? shape.attr('fill-opacity') : shape.attr('opacity');
        fillOpacity = parseFloat(fillOpacity);
        let strokeWidth = shape.attr('stroke-width');
        let stroke = shape.attr('stroke');
        let strokeOpacity = shape.attr('stroke-opacity') ? shape.attr('stroke-opacity') : shape.attr('opacity');
        strokeOpacity = parseFloat(strokeOpacity);

        context.save();
        var r = (rx > ry) ? rx : ry;
        var ratioX = rx / r; 
        var ratioY = ry / r; 
        context.scale(ratioX, ratioY);
        context.beginPath();
        context.moveTo((cx + rx) / ratioX, cy / ratioY);
        context.arc(cx / ratioX, cy / ratioY, r, 0, 2 * Math.PI);
        context.closePath();
        context.restore();

        context.save();
        context.fillStyle = fill;
        context.globalAlpha = fillOpacity;
        context.fill();

        if(strokeWidth){
            context.strokeStyle = stroke;
            context.lineWidth = strokeWidth;
            context.globalAlpha = strokeOpacity;
            context.stroke();
        }
        context.restore();
    }

    /**
     * 状态切换为 pointer
     */
    _turnPointer() {
        let _this = this;
        let canvas = _this.canvas;
        _this.status = CanvasObject.defaults.status.pointer;
        canvas.style.pointerEvents = 'auto';
        canvas.style.backgroundColor = 'rgba(236, 154, 154, 0.5)';

    }

    /**
     * 状态切换为 rectReady
     */
    _turnRectReady() {
        let _this = this;
        let canvas = _this.canvas;
        _this.status = CanvasObject.defaults.status.rectReady;
        canvas.style.pointerEvents = 'auto';
        canvas.style.backgroundColor = 'rgba(236, 154, 154, 0.5)';

        canvas.onmousedown = function (ev) {
            _this.currentShape = new ShapeObject('rect');

            _this.currentShape
                .attr('x', ev.offsetX)
                .attr('y', ev.offsetY);


            // 该事件仅执行一次
            canvas.onmousedown = null;

            _this._turnRectProcessing();


        }
    }

    /**
     * 状态切换为 rectProcessing
     */
    _turnRectProcessing() {
        let _this = this;
        let canvas = _this.canvas;
        _this.status = CanvasObject.defaults.status.rectProcessing;

        canvas.onmousemove = function (ev) {

            let ox = ev.offsetX;
            let oy = ev.offsetY;
            let x = _this.currentShape.attr('x');
            let y = _this.currentShape.attr('y');
            _this.currentShape.attr('width', ox - x);
            _this.currentShape.attr('height', oy - y);
            _this._redraw();
        }

        canvas.onmouseup = canvas.onmouseout = function (ev) {
            let curShape = _this.currentShape;
            let x = curShape.attr('x');
            let y = curShape.attr('y');
            let width = curShape.attr('width');
            let height = curShape.attr('height');

            if (width < 0) {
                curShape.attr('x', x + width);
                curShape.attr('width', -width);
            }
            if (height < 0) {
                curShape.attr('y', y + height);
                curShape.attr('height', -height)
            }

            if (curShape.attr('width') > 5 && curShape.attr('height') > 5) {
                _this.shapes.push(_this.currentShape);
            }

            _this.currentShape = null;


            canvas.onmousemove = null;
            canvas.onmouseup = null;
            canvas.onmouseout = null;

            _this._redraw();

            _this._turnRectReady(CanvasObject.defaults.status.rectReady);
        }

    }

    /**
     * 状态切换为 ellipseReady
     */
    _turnEllipseReady() {
        let _this = this;
        let canvas = _this.canvas;
        _this.status = CanvasObject.defaults.status.ellipseReady;
        canvas.style.pointerEvents = 'auto';
        canvas.style.backgroundColor = 'rgba(236, 154, 154, 0.5)';

        canvas.onmousedown = function (ev) {
            _this.currentShape = new ShapeObject('ellipse');

            _this.currentShape
                .attr('x', ev.offsetX)
                .attr('y', ev.offsetY);

            // 该事件仅执行一次
            canvas.onmousedown = null;

            _this._turnEllipseProcessing();
        }
    }

    /**
     * 状态切换为 ellipseProcessing
     */
    _turnEllipseProcessing() {
        let _this = this;
        let canvas = _this.canvas;
        _this.status = CanvasObject.defaults.status.rectProcessing;

        canvas.onmousemove = function (ev) {

            let ox = ev.offsetX;
            let oy = ev.offsetY;
            let bx = _this.currentShape.attr('bx');
            let by = _this.currentShape.attr('by');
            _this.currentShape.attr('ex', ox)
                .attr('ey', oy)
                .confirm();
            _this._redraw();
        }

        canvas.onmouseup = canvas.onmouseout = function (ev) {
            let curShape = _this.currentShape;


            let rx = curShape.attr('rx');
            let ry = curShape.attr('ry');


            if (rx > 5 && ry > 5) {
                _this.shapes.push(_this.currentShape);
            }

            _this.currentShape = null;


            canvas.onmousemove = null;
            canvas.onmouseup = null;
            canvas.onmouseout = null;

            _this._redraw();

            _this._turnEllipseReady(CanvasObject.defaults.status.rectReady);
        }
    }

    /**
     * 状态切换为 cancel
     */
    _turnCancel() {
        let _this = this;
        let canvas = _this.canvas;

        _this.status = CanvasObject.defaults.status.cancel;
        canvas.style.pointerEvents = 'none';
        canvas.style.backgroundColor = 'rgba(236, 154, 154, 0.3)';

        _this.currentShape = null;
        canvas.onmousedown = null;
        canvas.onmousemove = null;
        canvas.onmouseup = null;
        canvas.onmouseout = null;

    }

    /**
     * 执行 pointer
     */
    pointer() {
        this._turnCancel();
        this._turnPointer();
    }

    /**
     * 执行 cancel
     */
    cancel() {
        this._turnCancel();
    }

    /**
     * 执行 rect
     */
    rect() {
        this._turnRectReady();
    }

    /**
     * 执行ellipse
     */
    ellipse() {
        this._turnEllipseReady();
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


CanvasObject.defaults = {
    status: {
        pointer: 'pointer', // 指针， 可操作CanvasObject内部元素
        rectReady: 'rectReady', // 矩形， 准备阶段
        rectProcessing: 'rectProssing', // 矩形， 绘制阶段
        ellipseReady: 'ellipseReady', //椭圆 准备阶段
        ellipsProcessing: 'ellipseProcessing', //椭圆，绘制阶段
        cancel: 'cancel', // 不激活，鼠标事件会穿透canvas元素
    }
}