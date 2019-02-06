/**
 * 图图层管理器
 */
class LayerManager {

    constructor(zr) {
        this.layers = {};
        this.zr = zr;
    }

    add(newLayer) {
        /*********************************  添加图层 *********************************/

        let layerId = util.getRandomCode();
        for (let code in newLayer.marks) {
            let d = newLayer.marks[code];
            let shape = d.shape;
            let svgDom = d.svgDom;
            let remark = !!(svgDom.markId || svgDom.layerId);

            // 如果svgDom已经被标记
            if (remark) {
                let t_markId = svgDom.markId;
                let t_layerId = svgDom.layerId;
                let t_shape = this.layers[t_layerId].marks[t_markId].shape;
                this.zr.remove(t_shape);
                t_shape = null;
                delete this.layers[t_layerId].marks[t_markId];

                // 如果当前图层已为空
                if (util.getObjLen(this.layers[t_layerId].marks) === 0) {
                    delete this.layers[t_layerId]
                }
            }
            svgDom.markId = code;
            svgDom.layerId = layerId;
            shape.attr({
                style: {
                    fill: newLayer.color
                }
            });
            this.zr.add(shape);
        }
        this.layers[layerId] = newLayer;
    }

    setColor(key,color){
        if(this.layers[key] && color){
            let layer = this.layers[key];
            layer.color = color;
            for(let markId in layer.marks){
                layer.marks[markId].shape.attr({
                    style:{
                        fill:color
                    }
                })
            }
        }
    }

    update(){

        for(let layerId in this.layers){
            let layer = this.layers[layerId];
            for(let markId in layer.marks){
                let mark = layer.marks[markId];
                let svgDom = mark.svgDom;
                let shape = mark.shape;
                let style = window.getComputedStyle(svgDom, "");
                let cx = style["cx"].split('px')[0];
                let cy = style["cy"].split('px')[0];

                shape.attr({
                    shape: {
                        cx:cx,
                        cy:cy
                    }
                });
            }
        }
        this.zr.flush()

    }

    _addMutationObserver(svgDom){
        let callback = (records) => {
            for (let record of records) {
                let svgDom = record.target;
                this.update();
            }
        };
        let option = {attributes: true};
        let mo = new MutationObserver(callback);mo.observe(svgDom, option);
    }
}