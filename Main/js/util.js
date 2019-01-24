class util {
    constructor() {}

    /**
     * 根据两点生成直线
     *
     * @static
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
     * @static
     * @param {Float32Array|number[]} point 点
     * @param {JSON} line  直线
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
     * @static
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
     * @static
     * @param {Float32Array|number[]} point 点
     * @param {JSON} line 直线
     * @param {Float32Array|number[]} scale 缩放因子
     * @returns 距离
     */
    static calcDistanceByPointLine(point, line, scale) {

        let line2 = util.createVertical(point,line);

        return util.calcDistanceByPoints(point,[line2.tx,line2.ty],scale);

    }


    static makeArray(pseudoArray){
        let array = [];
        
        for(let item of pseudoArray){
            array.push(item);
        }

        return array;
    }
}
util.Infinity = 9999999;

