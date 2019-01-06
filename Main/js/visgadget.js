;
(function (undefined) {
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

	//构造函数
	function VisGadget(opt) {
		this._initial(opt);
	}
	
	VisGadget.prototype = {
		constructor: this,
		_initial: function (opt) {
			let option = {
				ok: true,
				ok_txt: '确定',
				cancel: false,
				cancel_txt: '取消',
				confirm: function () {},
				close: function () {},
				content: '',
				targetId: [],
				target: [],
				toolbox: {
					width: 300,
					height: 700,
					title:'VisGadGet 0.1'
				}
			}
			this.hasDom = false;
			// 合并参数
			this.option = extend(option, opt, true); 	

			let _opt = this.option;

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
			if (!!_opt.toolbox) {
				this.createDom(option);
			}
		},
		createDom: function () {

			let dom = this.dom;
			let toolbox = this.option.toolbox;
			let targetRect = this.option.target[0].getBoundingClientRect();

			if (dom instanceof HTMLElement) {
				document.body.removeChild(dom);
				dom = null;
			}

			/*************************** 设置Dom样式 *************************/
			this.dom = document.createElement('div');

			//设置样式
			this.dom.style.width = toolbox.width + 'px';
			this.dom.style.height = toolbox.height + 'px';
			this.dom.style.top = targetRect.top + 'px';
			this.dom.style.left = targetRect.left + targetRect.width - toolbox.width + 'px';
			this.dom.id = 'visgadget';
			
			//添加顶部div
			let toolbar = document.createElement('div');
			toolbar.innerHTML = toolbox.title;
			toolbar.draggable = true;
			toolbar.className = 'toolbar';
			let triangle = document.createElement('div');
			triangle.className = 'fa fa-chevron-down';
			toolbar.appendChild(triangle);
			

			//添加主体面板
			let pannel = document.createElement('div');
			pannel.className = 'pannel';


			this.dom.appendChild(toolbar);
			this.dom.appendChild(pannel);
			
			
			document.body.appendChild(this.dom);

			/*************************** 设置Dom事件 *************************/
			toolbar.ondragstart = function(ev,i){
				let cx = ev.clientX,
					cy = ev.clientY;
				console.log(ev);
			}
			toolbar.ondrag = function(ev){
			//	console.log(ev);
			}
			toolbar.onclick = function(){
				if(triangle.className == 'fa fa-chevron-down'){
					triangle.className = 'fa fa-chevron-up'
					pannel.style.bottom = '100%';
				}else{
					triangle.className = 'fa fa-chevron-down'
					pannel.style.bottom = '0%';
				}
			}
		},
		parseToDom: function (str) { // 将字符串转为dom
			let div = document.createElement('div');
			if (typeof str == 'string') {
				div.innerHTML = str;
			}
			return div.childNodes;
		},
		show: function (callback) {
			let _this = this;
			if (this.hasDom) return;
			document.body.appendChild(this.dom);
			this.hasDom = true;
			document.getElementsByClass('close', this.dom)[0].onclick = function () {
				_this.hide();
			};
			document.getElementsByClass('btn-ok', this.dom)[0].onclick = function () {
				_this.hide();
			};
			if (this.option.cancel) {
				document.getElementsByClass('btn-cancel', this.dom)[0].onclick = function () {
					_this.hide();
				};
			}
			callback && callback();
			return this;
		},
		hide: function (callback) {
			document.body.removeChild(this.dom);
			this.hasDom = false;
			callback && callback();
			return this;
		},
		toolboxCSS: function (n, v) {
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