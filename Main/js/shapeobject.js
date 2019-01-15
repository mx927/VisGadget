
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

        if(type instanceof SVGElement){
            this.para = ShapeObject.clone(type);
            //console.log( this.para )
          
        }
    }

    
    /**
     * 获取默认属性
     * @param  {String} attribute 属性名称
     */
    getDefaults(attribute){
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
            if(typeof (value) == 'function'){
                this.para[attribute] = value.call(this);
            }
            else{
                this.para[attribute] = value;
            }
            return this;
        }

        // 读取属性，返回属性值
        else {
            return this.para[attribute];
        }
    }

    confirm(){
        switch(this.attr('type')){
            case 'ellipse':
            let x = this.attr('x');
            let y = this.attr('y');
            let ex = this.attr('ex');
            let ey = this.attr('ey');

            this.attr('cx',(x+ex)/2)
            .attr('cy',(y + ey)/2)
            .attr('rx',Math.abs(x-ex)/2)
            .attr('ry',Math.abs(y-ey)/2);
        }
    }

    /**
     * 将目标SVG元素转换为CanvasObject绘图所需
     *
     * @static
     * @param {SVGElement} source 需要克隆的SVG元素
     */
    static clone(source){
        let res = {};
        let transformX = 0;     // x偏移量
        let transformY = 0;     // y偏移量
        let sourceStyle = window.getComputedStyle(source, "");
        res.type = source.tagName;

        switch(res.type){
            case 'circle':
                res['cx'] = 0;
                res['cy'] = 0;
                break;
        }
 
        //获取 attribute 属性
        for(let attribute of source.attributes){
            res[attribute.name] = attribute.value;
        }
   
        for(let attribute of ShapeObject.defaults.cloneShapeOption.normal){
            
            res[attribute] = sourceStyle[attribute]
     
        }
        
        if(!res['opacity'])
            res['opacity'] = 1;

       
        return res;
    }
    static getAttribute(source){
        let res = {};
        for(let attribute of source.style){
            res[attribute] = source.style[attribute];
        }

        for(let attribute of source.attributes){
            res[attribute.name] = attribute.value;
        }
        return res;
    }

    static getTransform(transform){

        let arr = transform.split('(')[1].split(')')[0].split(',');
        return {transformX:parseFloat(arr[0]),transformY:parseFloat(arr[1])}
    }

}

ShapeObject.defaults = {
    shapeOption:{
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
            "x": 0,//外接矩形左上角 x坐标
            "y":0, //外接矩形左上角 y坐标
            "ex":0,//外接矩形右下角 x坐标
            "ey":0,//外接矩形右下角 y坐标
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
    cloneShapeOption:{
        normal:["x","y","cx","cy","d","rx","ry","r","width","height","transform","fill","fill-opacity","stroke","stroke-width","stroke-opacity","opacity"]
    }
}