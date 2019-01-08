# VisGadget
**VisGadget是一款通用型可视化插件，其目的在于帮助开发人员简化Web端可视化系统交互部分的编码工作，本插件仅仅针对基于SVG的系统。**

> 灵感来源于VisDock

## **使用说明**   
---
### 依赖
- [Font Awesome](http://fontawesome.dashgame.com/)

### **初始化:**
 **var vd = new VisGadget(options);**   
例如：
~~~
var vd = new VisGadget({
                targetId:['svg1','svg2'],
                view:{width:300},
                title:'VisGadGet 0.1'
            });
~~~

**options**
名称 | 说明 |数据格式 | 默认值
---  |--- |---|---
targetId | 目标的svg元素的ID数组(这是因为可以同时监听多个svg元素) | [string] | /
view | 关于工具栏面板的设置参数，以json格式进行设置。如果不需要工具栏，则可设置为null| json | /


**关于view：**
名称 | 说明 |数据格式 | 默认值
---  |--- |---|---
view.title | 工具栏的标题,默认值为 'VisGadGet 0.1' | string | "VisGadGet 0.1"
view.width | 工具栏宽度，默认为 300 | integer | 300
view.height | 工具栏高度，默认为700 | integer | 700
view.rows | 一页显示按钮的行数 | integer | 4
view.columns | 按钮的列数 | integer | 3
