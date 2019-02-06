class util {
    constructor() {}

    /**
     * 根据两点生成直线
     *
     * @param {Float32Array|number[]} point1
     * @param {Float32Array|number[]} point2
     * @returns 直线
     */
    static createLineByPoints(point1, point2) {
        let x1 = point1[0],
            x2 = point2[0];
        let y1 = point1[1],
            y2 = point2[1];

        let k = (x2 != x1) ? (y2 - y1) / (x2 - x1) : Math.sign(y2 - y1) * util.Infinity;
        let b = y1 - k * x1

        
        if(point1[0] > point2[0]){
            [point1,point2] = [point2,point1]
        }

        return {
            point1:point1,
            point2:point2,
            k: k,
            b: b
        };
    }

    /**
     * 根据点和直线，做垂线并求出交点与距离
     *
     * @param {Float32Array|number[]} point 点
     * @param {Object} line  直线
     * @returns 垂线
     */
    static createVertical(point, line) {
        let ox = point[0];
        let oy = point[1];

        let k = (line.k != 0) ? -(1 / line.k) : -util.Infinity;
        let b = oy - k * ox;

        let tx = (line.k != k) ? (b - line.b) / (line.k - k) : (b - line.b) * util.Infinity;
        let ty = k * tx + b;

        return {
            tx: tx,
            ty: ty,
            k: k,
            b: b
        }
    }


    /**
     * 计算两点距离，考虑缩放因子
     *
     * @param {Float32Array|number[]} point1 第一个点
     * @param {Float32Array|number[]} point2 第二个点
     * @param {Float32Array|number[]} scale  缩放因子
     * @returns 距离
     */
    static calcDistanceByPoints(point1, point2, scale) {
        let x1 = point1[0],
            x2 = point2[0];
        let y1 = point1[1],
            y2 = point2[1];

        let scaleX = scale[0];
        let scaleY = scale[1];

        return Math.sqrt(Math.pow((x2 - x1) * scaleX, 2) + Math.pow((y2 - y1) * scaleY, 2))
    }

    /**
     * 计算点到直线的距离，考虑缩放因子
     *
     * @param {Float32Array|number[]} point 点
     * @param {JSON} line 直线
     * @param {Float32Array|number[]} scale 缩放因子
     * @returns 距离
     */
    static calcDistanceByPointLine(point, line, scale) {

        let line2 = util.createVertical(point,line);

        return util.calcDistanceByPoints(point,[line2.tx,line2.ty],scale);

    }

    /**
     * 将collection格式转换为array
     * @param pseudoArray
     * @returns {Array}
     */
    static makeArray(pseudoArray){
        let array = [];
        
        for(let item of pseudoArray){
            array.push(item);
        }

        return array;
    }

    static getObjLen(obj){
        return Object.keys(obj).length;
    }

    /**
     * 生成随机颜色
     * @returns {string}
     */
    static getRandomColor (){
        //return "hsb(" + Math.random()  + ", 1, 1)";
        let colorStr="#";
        //字符串的每一字符的范围
        let randomArr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        //产生一个六位的字符串
        for(let i=0;i<6;i++){
            //15是范围上限，0是范围下限，两个函数保证产生出来的随机数是整数
            colorStr+=randomArr[Math.ceil(Math.random() * (15))];
        }
        return colorStr;
    }

    /**
     * 生成随机编码
     * @param length 编码长度
     * @returns {string} 随机编码
     */
    static getRandomCode(length=10) {
        return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36)
    }

    /** 字符串解析SVG元素 */
    static ParseSVG(str, color) {

        let div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
        div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + str + '</svg>';
        let frag = document.createDocumentFragment();

        while (div.firstChild.firstChild)
            frag.appendChild(div.firstChild.firstChild);

        let svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgDom.setAttribute('viewBox', '0 0 1000 1000');
        svgDom.setAttribute('enable_background', 'new 0 0 1000 1000');
        svgDom.setAttribute('xml:space', 'preserve');
        svgDom.setAttribute('version', '1.1');
        svgDom.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        svgDom.appendChild(frag);

        svgDom.setAttribute('fill', color);
        return svgDom;
    }

    /** 获取滚动轴高度 */
    static GetScrollTop() {
        let scroll_top = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scroll_top = document.documentElement.scrollTop;
        } else if (document.body) {
            scroll_top = document.body.scrollTop;
        }
        return scroll_top;
    }

    // 判断是否为json对象
    static isJsonObj(obj){
        return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
    }

    static extent(s,t,o = true){
        if(!util.isJsonObj(t)){
            return;
        }
        for(let i in t){
            if(s.hasOwnProperty(i)){
                if(!util.isJsonObj(s[i]) && !util.isJsonObj(t[i])){
                    s[i] = t[i];
                }
                else if(util.isJsonObj(s[i]) && util.isJsonObj(t[i])){
                    util.extent(s[i],t[i]);
                }else{
                    if(o){
                        s[i] = t[i];
                    }else{
                        console.error("util.extent error" + Object.prototype.toString.call(s[i]),Object.prototype.toString.call(t[i]))
                    }

                }
            }else{
                s[i] = t[i];
            }
        }
    };
}
util.Infinity = 9999999;

