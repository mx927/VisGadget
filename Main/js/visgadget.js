;(function (undefined) {
	"use strict"
	let _global;

	// 对象合并
	function extend(o, n, override) {
		for (let key in n) {
			if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
				o[key] = n[key];
			}
		}
		return o;
	}

	// 通过class查找dom
	if (!('getElementsByClass' in HTMLElement)) {
		HTMLElement.prototype.getElementsByClass = function (n, tar) {
			let el = [],
				_el = (!!tar ? tar : this).getElementsByTagName('*');
			for (let i = 0; i < _el.length; i++) {
				if (!!_el[i].className && (typeof _el[i].className == 'string') && _el[i].className.indexOf(n) > -1) {
					el[el.length] = _el[i];
				}
			}
			return el;
		};
		((typeof HTMLDocument !== 'undefined') ? HTMLDocument : Document).prototype.getElementsByClass = HTMLElement.prototype.getElementsByClass;
	}

	// 边缘停靠
	function viewDock(x,y,myRect,rects){
		let tx = x,
			ty = y;
		let rect = rects;

		// 左右边缘
		if(tx - rect.left<30){
			tx = rect.left;
		}else if(tx + rect.width - myRect.left - myRect.width < 15){
			tx = rect.left + rect.width - myRect.width;
		}
		// 修正
		if(tx > rect.left + rect.width - myRect.width){
			tx = rect.left + rect.width - myRect.width;
		}

		// 上下边缘
		if(ty - rect.top<15){
			ty = rect.top;
		}else if(rect.top + rect.height - ty - myRect.height< 15){
			//ty = rect.top + rect.height - myRect.height;
		}
		
		return [tx,ty];
	}


	//构造函数
	function VisGadget(opt) {
		this._initial(opt);
	}
	
	VisGadget.prototype = {
		constructor: this,
		_initial: function (opt) {
			let _title = 'VisGadGet 0.1';
			let options = {
				ok: true,
				ok_txt: '确定',
				cancel: false,
				cancel_txt: '取消',
				confirm: function () {},
				close: function () {},
				content: '',
				targetId: [],
				target: [],
				view: {
					dom:null,		// VisGadget的dom节点
					title:_title,	// 标题
					width: 300,
					height: 700,
					rows:4,			// toolbox 行数
					columns :3,		// toolbox 列数
				}
			}
			this.hasDom = false;

			// 合并参数
			opt.view = extend(opt.view, options.view, false);	// 补足默认参数
			this.options = extend(options, opt, true); 	
			let _opt = this.options;

			// id去重	
			_opt.targetId = Array.from(new Set(_opt.targetId)); 	

			// 获取目标svg集合
			_opt.targetId.forEach(v => {
				let t = document.getElementById(v);
				if (!!t) {
					_opt.target.push(t);
				}
			});	

			// 新建工具栏
			if (!!_opt.view) {

				if(!_opt.view.title)
					_opt.view.title = _title;
				
				this.createDom(_opt);
			}
		},
		createDom: function () {
			let view = this.options.view;
			let targetRect = this.options.target[0].getBoundingClientRect();
			/*************************** 设置view样式 *************************/

			this.options.dom = document.createElement('div');
			let _dom = this.options.dom;

			// 设置样式
			_dom.id = 'visgadget';
			_dom.style.width = view.width + 'px';
			_dom.style.height = view.height + 'px';
			_dom.style.top = targetRect.top + 'px';
			_dom.style.left = targetRect.left + targetRect.width - view.width + 'px';
			document.body.appendChild(_dom);
			
			// 添加顶部栏
			let topBar = document.createElement('div');
			topBar.className = 'topbar';
			topBar.innerHTML = view.title;
			topBar.draggable = true;
			let arrow = document.createElement('div');
			arrow.className = 'fa fa-chevron-down';
			topBar.appendChild(arrow);
			_dom.appendChild(topBar);

			// 添加主体面板
			let pannel = document.createElement('div');
			pannel.className = 'pannel';
			_dom.appendChild(pannel);
		
			// 添加按钮区域
			let toolbox = document.createElement('div');
			toolbox.className = 'toolbox';
			pannel.appendChild(toolbox);
			
			let _btnWidth = (toolbox.offsetWidth -  ((this.options.view.columns - 1)*2 + 2)*5)/this.options.view.columns + 'px';
			let _btnHeight = (toolbox.offsetHeight - ((this.options.view.rows - 1)*2 + 2)*5)/this.options.view.rows + 'px';
			this.addButton();
			for(let i = 0;i<15;i++){
				let _btn = document.createElement('div');
				_btn.className = 'toolbtn';
				_btn.style.width = _btnWidth;
				_btn.style.height = _btnHeight;
				console.log(_btn.style.width)
				toolbox.append(_btn);
			}

			/*************************** 设置view事件 *************************/
			// 隐藏工具栏
			topBar.onclick = function(){
				if(arrow.className == 'fa fa-chevron-down'){
					arrow.className = 'fa fa-chevron-up'
					//pannel.style.bottom = '100%';
					pannel.style.opacity = 0;
					setTimeout(function () {
						pannel.style.display ='none';
						_dom.style.height = topBar.style.height;
		
					},500);
					
				}else{
					arrow.className = 'fa fa-chevron-down'
					//pannel.style.bottom = '0%';
					pannel.style.display = 'block';
					_dom.style.height = view.height + 'px';
					setTimeout(function () {
						pannel.style.opacity = 1;
					},.1);
				}
			}
			topBar.ondragstart = function(ev,i){
				let rect = _dom.getBoundingClientRect();
				_dom.dx = ev.clientX - rect.left;
				_dom.dy = ev.clientY - rect.top;

			}
			topBar.ondrag = function(ev){
				let pos = viewDock(ev.clientX - _dom.dx,ev.clientY - _dom.dy,_dom.getBoundingClientRect(),document.body.getBoundingClientRect());
				_dom.style.left = pos[0] + 'px';
				_dom.style.top = pos[1] + 'px';
			}
			topBar.ondragend = function(ev){
				let pos = viewDock(ev.clientX - _dom.dx,ev.clientY - _dom.dy,_dom.getBoundingClientRect(),document.body.getBoundingClientRect());
				_dom.style.left = pos[0] + 'px';
				_dom.style.top = pos[1] + 'px';
			}



		},
		addButton:function(o){
			let toolbox = document.getElementsByClassName('toolbox')[0];
			let button = document.createElement('button');
			let _btnWidth = (toolbox.offsetWidth -  ((this.options.view.columns - 1)*2 + 2)*5)/this.options.view.columns + 'px';
			let _btnHeight = (toolbox.offsetHeight - ((this.options.view.rows - 1)*2 + 2)*5)/this.options.view.rows + 'px';
			button.className = 'toolbtn';
		},
		parseToDom: function (str) { // 将字符串转为dom
			let div = document.createElement('div');
			if (typeof str == 'string') {
				div.innerHTML = str;
			}
			return div.childNodes;
		},
		hide: function (callback) {
			document.body.removeChild(this.dom);
			this.hasDom = false;
			callback && callback();
			return this;
		},
		viewCSS: function (n, v) {
			if (this.dom.style.hasOwnProperty(n)) {
				this.dom.style[n] = v;
			}
			return this;
		},
		width: function (val) {
			this.dom.style.width = val + 'px';
			return this;
		},
		height: function (val) {
			this.dom.style.height = val + 'px';
			return this;
		}
	}

	// 最后将插件对象暴露给全局对象
	_global = (function () {
		return this || (0, eval)('this');
	}());
	if (typeof module !== "undefined" && module.exports) {
		module.exports = VisGadget;
	} else if (typeof define === "function" && define.amd) {
		define(function () {
			return VisGadget;
		});
	} else {
		!('VisGadget' in _global) && (_global.VisGadget = VisGadget);
	}
}());