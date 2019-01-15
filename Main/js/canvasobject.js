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
        }
        ctx.restore();
    }

    /**
     *绘制矩形

     * @param {canvas.getContext} ctx
     * @param {ShapeObject} rect
     */
    _drawRect(ctx, rect) {
        let x = rect.attr('x');
        let y = rect.attr('y');
        let width = rect.attr('width');
        let height = rect.attr('height');
        let fill = rect.attr('fill');
        let fillOpacity = rect.attr('fill-opacity') ? rect.attr('fill-opacity') : rect.attr('opacity');
        let strokeWidth = rect.attr('stroke-width');
        let stroke = rect.attr('stroke');
        let strokeOpacity = rect.attr('stroke-opacity') ? rect.attr('stroke-opacity') : rect.attr('opacity');

        // 绘制内部矩形
        ctx.fillStyle = fill;
        ctx.globalAlpha = fillOpacity;
        ctx.fillRect(x, y, width, height);

        // 绘制边框
        ctx.strokeStyle = stroke;
        ctx.globalAlpha = strokeOpacity;
        ctx.lineWidth = strokeWidth;
        ctx.strokeRect(x - strokeWidth / 2, y - strokeWidth / 2, width + strokeWidth, height + strokeWidth);
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

        canvas.style.pointerEvents = 'auto';
        canvas.style.backgroundColor = 'rgba(236, 154, 154, 0.5)';

        _this.status = CanvasObject.defaults.status.rectReady;

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
        rectReady: 'rectReady', // 矩形， 准备绘制矩形
        rectProcessing: 'rectProssing', // 矩形， 正在根据用户操作绘制矩形
        cancel: 'cancel', // 不激活，鼠标事件会穿透canvas元素
    }
}