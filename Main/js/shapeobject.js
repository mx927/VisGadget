
/**
 * Shape对象，包含了图形基础功能与属性
 *
 * @class ShapeObject
 */
class ShapeObject {
    /**
     * 根据指定的类型进行初始化
     * 
     * @param  {String} shapeType
     */
    constructor(shapeType) {
        switch (shapeType) {
            case 'rect':
                this.para = this.getDefaults('rect');
                break;
        }
    }

    
    /**
     * 获取默认属性
     * @param  {String} attribute 属性名称
     */
    getDefaults(attribute){
        return JSON.parse(JSON.stringify(ShapeObject.defaults[attribute]));
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
            this.para[attribute] = value;
            return this;
        }

        // 读取属性，返回属性值
        else {
            return this.para[attribute];
        }
    }
}

ShapeObject.defaults = {
    rect: {
        'type': 'rect',
        "x": 0, // x坐标
        "y": 0, // y坐标
        "rx": 0, // x圆角值
        "ry": 0, // y圆角值
        "width": 1, // 宽度
        "height": 1, // 高度
        "fill": 'steelblue', // 矩形颜色
        "fill-opacity": 0.5, // 矩形透明度
        "stroke": 'black', // 边框颜色
        "stroke-width": 0.5, // 边框宽度
        "stroke-opacity": 1, // 边框透明度
        "opacity": 1 // 整体透明度，若未选择矩形和边框的透明度， 则默认使用整体透明度
    }
}