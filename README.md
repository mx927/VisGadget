# VisGadget
**VisGadget是一款通用型可视化插件，其目的在于帮助开发人员简化Web端可视化系统交互部分的编码工作，本插件仅仅针对基于SVG的系统。**

> 灵感来源于[`VisDock`](https://github.com/VisDockHub/NewVisDock)

## **初始化**   
---
>### 依赖项
> - [Font Awesome](http://fontawesome.dashgame.com/)

### **构造函数:**
**`var vd = new VisGadget(options);`**   
例如：
``` js
var vd = new VisGadget({
                targetIdArr:['svg1','svg2'],
                view:{width:300},
                title:'VisGadGet 0.1'
            });
```


### **options**   

| 名称 | 说明 |数据格式 | 默认值 |
| ---  | --- | --- |--- |
| targetIdArr | 目标的svg元素ID数组(这是因为可以同时监听多个svg元素) | `[string]` | / |
| view     | toolbox设置参数,如果不需要toolbox，请设置为`null`。 | `json`     | / |


### **view：**   

| 名称 | 说明 | 数据格式 | 默认值 |
| ---  | --- | ---| --- |
| view.title   | 工具栏标题   | string  | `"VisGadGet 0.1"`   |
| view.width   | 工具栏宽度   | integer | `view.height*(3/7)` |
| view.height  | 工具栏高度   | integer | `svg.height`        |
| view.rows    | 按钮的行数   | integer | `4`                 |
| view.columns | 按钮的列数   | integer | `3`                 |


>**关于初始化**：   
>在进行初始时，如果用户没有指定view.width或者view.height。工具栏将会根据指定的SVG窗口进行适配，选择一个合适的大小和比例来展示。
   

## **接口**   
---
### **addButton** : 添加toolbox中的功能按钮
>**`vd.addButton(btnOption);`**   
> 如:    
> ```Javascript
> //vd是VisGadget实例
> vd.addButton({
>    name: 'Pointer', 
>    picture: 'images/pointer.png',
>    class: null,
>    onclick: null
>    });
> ```
>
>### **btnOption**   
>
>| 名称 | 说明 | 数据格式 | 默认值 |
>| ---               | --- | ---| --- |
>| btnOption.text    | 说明文字               | `string`   | `null` |
>| btnOption.picture | 图片路径               | `string`   | `null` |
>| btnOption.class   | 添加className(可选)    | `string`   | `null` |
>| btnOption.onclick | 点击事件               | `function` | `null` |
   

### **onlyUseButtons** : 仅使用指定的默认功能按钮

>**`vd.onlyUseButtons(nameArr);`**   
>
> 如:    
> ```Javascript
> //vd是VisGadget实例
> vd.onlyUseButtons(['Pointer','Zoom']);
> ```
>
>### **nameArr**  :字符数组，对应按钮的name属性


### **unUseButtons** : 删除指定的默认功能按钮

>**`vd.unUseButtons(nameArr);`**   
>
> 如:    
> ```Javascript
> //vd是VisGadget实例
> vd.unUseButtons(['Pointer','Zoom']);
> ```
>
>### **nameArr**  :字符数组，对应按钮的name属性
