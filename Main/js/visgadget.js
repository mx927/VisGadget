;
(function (undefined) {
	"use strict"
	let _global;

	/**
	 * VisGadget
	 *
	 * @class VisGadget
	 */
	class VisGadget {
		constructor(opt) {
			this.view = {
				body: null, //插件界面
				topBar: null, //顶部菜单栏
				pannel: null, //主体
				toolbox: null //工具栏(按钮区域)
			};

			this.monitors = []
			this.svgSelector = {};

			let def = JSON.parse(JSON.stringify(VisGadget.defaults));

			// 合并参数
			if (!!opt.view) {
				opt.view = VisGadget.Extend(opt.view, def.view, false);
			}

			this.options = VisGadget.Extend(def, opt, true);

			let _opt = this.options;

						// id去重	
			_opt.targetId = Array.from(new Set(_opt.targetId));

			// 获取目标svg集合
			_opt.targetId.forEach(v => {
				let t = document.getElementById(v);

				if (!!t) {
					this.monitors.push(new Monitor(t))
				}
			});

			// 如果存在相关参数 ，则创建view
			if (!!_opt.view) {
				this.createView(_opt);
			}

		}

		/**
		 * 创建可视区域
		 */
		createView() {
			let viewOption = this.options.view;
			let targetRect = this.monitors[0].container.getBoundingClientRect();

			// 尺寸适配
			if (!viewOption.height) {
				viewOption.height = targetRect.height;
			}

			if (!viewOption.width) {
				viewOption.width = viewOption.height * (3 / 7);
			}

			this.view.body = document.createElement('div'); // 初始化 插件界面
			this.view.topBar = document.createElement('div'); // 初始化 插件顶部菜单按
			this.view.pannel = document.createElement('div'); // 初始化 插件主体
			this.view.toolbox = document.createElement('div'); // 初始化 插件按钮区域

			let body = this.view.body;
			let topBar = this.view.topBar;
			let pannel = this.view.pannel;
			let toolbox = this.view.toolbox;

			/*************************** 基础样式 *************************/

			// body
			body.id = 'visgadget';
			body.style.width = viewOption.width + 'px';
			body.style.height = viewOption.height + 'px';
			body.style.top = targetRect.top + VisGadget.GetScrollTop() + 'px';
			body.style.left = targetRect.left + targetRect.width + 'px';
			document.body.appendChild(body);

			// topBar
			topBar.className = 'vd_topbar';
			topBar.innerHTML = viewOption.title;
			topBar.draggable = true;
			let arrow = document.createElement('div');
			arrow.className = 'fa fa-chevron-down';
			topBar.appendChild(arrow);
			body.appendChild(topBar);

			// pannel
			pannel.className = 'vd_pannel';
			body.appendChild(pannel);

			// toolbox
			toolbox.className = 'vd_toolbox';
			pannel.appendChild(toolbox);

			// 默认按钮
			this.createDefaultButton();

			/*************************** 设置view事件 *************************/
			let _this = this;
			// 隐藏工具栏
			topBar.onclick = function () {
				if (arrow.className == 'fa fa-chevron-down') {
					arrow.className = 'fa fa-chevron-up'
					//pannel.style.bottom = '100%';
					pannel.style.opacity = 0;
					setTimeout(function () {
						pannel.style.display = 'none';
						body.style.height = topBar.style.height;

					}, 500);

				} else {
					arrow.className = 'fa fa-chevron-down'
					//pannel.style.bottom = '0%';
					pannel.style.display = 'block';
					body.style.height = viewOption.height + 'px';
					setTimeout(function () {
						pannel.style.opacity = 1;
					}, .1);
				}
			}
			topBar.ondragstart = function (ev, i) {
				let rect = body.getBoundingClientRect();
				body.dx = ev.clientX - rect.left;
				body.dy = ev.clientY - rect.top;

			}
			topBar.ondrag = function (ev) {
				let tx = ev.clientX - body.dx;
				let ty = ev.clientY - body.dy;
				if (tx < 0 || ty < 0) return;
				let pos = _this.viewDock(tx, ty, body.getBoundingClientRect(), document.body.getBoundingClientRect());
				body.style.left = pos[0] + 'px';
				body.style.top = pos[1] + 'px';
			}
			topBar.ondragend = function (ev) {
				let pos = _this.viewDock(ev.clientX - body.dx, ev.clientY - body.dy, body.getBoundingClientRect(), document.body.getBoundingClientRect());
				body.style.left = pos[0] + 'px';
				body.style.top = pos[1] + 'px';
			}
		}

		/**
		 * 创建默认按钮
		 */
		createDefaultButton() {

			let toolbox = this.view.toolbox;
			let _this = this;
			//for (let buttonOption of this.options.view.defaultButton) {
			for (let buttonOption of VisGadget.defaults.view.defaultButton) {
				let button = document.createElement('div');
				let _btnWidth = (toolbox.offsetWidth - ((this.options.view.columns - 1) * 2 + 2) * 5) / this.options.view.columns + 'px';
				let _btnHeight = (toolbox.offsetHeight - ((this.options.view.rows - 1) * 2 + 2) * 5) / this.options.view.rows + 'px';
				button.className = 'vd_toolbtn';
				button.style.width = _btnWidth;
				button.style.height = _btnHeight;

				//添加SVG元素
				let svgDom = VisGadget.ParseSVG(buttonOption.svgStr, this.options.view.defaultButtonColor);
				button.appendChild(svgDom);

				//添加文本信息
				let p = document.createElement('p');
				p.innerHTML = buttonOption.name;
				button.appendChild(p);

				//添加class
				if (buttonOption.class) {
					button.className += ' ' + buttonOption.class;
				}

				// 添加事件
				if (buttonOption.onclick) {
					button.onclick = function (ev) {
						buttonOption.onclick(ev, _this, buttonOption.callback);
					};
				}

				toolbox.appendChild(button);
			}
		}

		/**
		 * 添加按钮
		 *
		 * @param {JSON} btnOption 按钮参数
		 */
		addButton(btnOption) {

			let toolbox = document.getElementsByClassName('vd_toolbox')[0];
			let button = document.createElement('div');
			let _btnWidth = (toolbox.offsetWidth - ((this.options.view.columns - 1) * 2 + 2) * 5) / this.options.view.columns + 'px';
			let _btnHeight = (toolbox.offsetHeight - ((this.options.view.rows - 1) * 2 + 2) * 5) / this.options.view.rows + 'px';
			button.className = 'vd_toolbtn';
			button.style.width = _btnWidth;
			button.style.height = _btnHeight;

			//添加图片
			if (btnOption.picture) {
				let img = document.createElement('img');
				img.src = btnOption.picture;
				img.draggable = false;
				button.appendChild(img);
			}

			//添加文本信息
			if (btnOption.text) {
				let p = document.createElement('p');
				p.innerHTML = btnOption.text;
				button.appendChild(p);
			}

			//添加class
			if (btnOption.class) {
				button.className += ' ' + btnOption.class;
			}

			//添加鼠标事件
			if (btnOption.onclick) {
				button.onclick = btnOption.onclick;
			}

			toolbox.appendChild(button);
		}

		/**
		 * 仅使用指定部分的按钮
		 *
		 * @param {Array} nameArr
		 */
		onlyUseButtons(nameArr) {
			let defaultButton = this.options.view.defaultButton;

			for (let i = 0; i < defaultButton.length; i++) {
				let btn = defaultButton[i];
				if (nameArr.indexOf(btn.name) <= -1) {
					defaultButton.splice(i, 1);
					i--;
				}
			}
		}

		/**
		 * 禁用指定的按钮
		 *
		 * @param {Array} nameArr
		 */
		unUseButtons(nameArr) {
			let defaultButton = this.options.view.defaultButton;

			for (let i = 0; i < defaultButton.length; i++) {
				let btn = defaultButton[i];
				if (nameArr.indexOf(btn.name) > -1) {
					defaultButton.splice(i, 1);
					i--;
				}
			}
		}

		/**
		 * 边缘停靠
		 *
		 * @param {Integer} x 左上角坐标
		 * @param {Integer} y 右上角坐标
		 * @param {JSON} myRect    view元素边界
		 * @param {*} rects 
		 * @returns {Array} 停靠后的坐标
		 */
		viewDock(x, y, myRect, rects) {
			let tx = x,
				ty = y;
			let rect = rects;

			// 左右边缘
			if (tx - rect.left < 30) {
				tx = rect.left;
			} else if (tx + rect.width - myRect.left - myRect.width < 15) {
				tx = rect.left + rect.width - myRect.width;
			}
			// 修正
			if (tx > rect.left + rect.width - myRect.width) {
				tx = rect.left + rect.width - myRect.width;
			}

			// 上下边缘
			if (ty - rect.top < 15) {
				ty = rect.top;
			} else if (rect.top + rect.height - ty - myRect.height < 15) {
				//ty = rect.top + rect.height - myRect.height;
			}

			return [tx, ty];
		}

		onClickPointer(ev, visgadget, callback) {

			visgadget.target.forEach(function (v, i) {
				v.canvasObject.pointer();
			})

			if (callback) {
				callback();
			}
		}

		onClickRect(ev, visgadget, callback) {
			visgadget.target.forEach(function (v, i) {
				v.canvasObject.rect();
			})

			if (callback) {
				callback();
			}
		}

		// 点击叉叉，则取消激活CanvasObject
		onClickCancel(ev, visgadget, callback) {

			visgadget.target.forEach(function (v, i) {
				v.canvasObject.cancel();
			})

			if (callback) {
				callback();
			}
		}

		/** 对象合并 */
		static Extend(o, n, override) {
			for (let key in n) {
				if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
					o[key] = n[key];
				}
			}
			return o;
		}

		/** 获取滚动轴高度 */
		static GetScrollTop() {
			var scroll_top = 0;
			if (document.documentElement && document.documentElement.scrollTop) {
				scroll_top = document.documentElement.scrollTop;
			} else if (document.body) {
				scroll_top = document.body.scrollTop;
			}
			return scroll_top;
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
	}

	VisGadget.defaults = {
		targetId: [],
		view: {
			title: 'VisGadget v0.1', //标题
			width: null, //宽度
			height: null, //高度
			rows: 4, //按钮行
			columns: 3, //按钮列
			button: [], //按钮列表
			defaultButtonColor: '#33475F', //默认按钮颜色
			defaultButton: [{
					name: 'Pointer',
					svgStr: '<g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M101.7,4985.9c8.4-19.6,649.3-2225,1427.3-4900.5C2307.1-2593,2945.2-4787.2,2950.8-4790c2.8-5.6,433.8,1130.7,954.4,2518.8l948.8,2527.3l2527.2,948.8c1388.2,520.6,2524.5,951.6,2518.8,954.4c-2.8,5.6-2197,643.7-4875.3,1421.7c-2675.6,778-4881,1418.9-4900.6,1427.3C104.5,5013.9,96.1,5005.5,101.7,4985.9z" /></g></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						console.info('clickPointer');
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.pointerMode();
						})

						if (callback) {
							//callback();
						}

					},
					callback: null
				}, {
					name: 'Rect',
					svgStr: '<g><path d="M908.3,859.3H91.7c-45.1,0-81.7-36.6-81.7-81.7V222.3c0-45.1,36.6-81.7,81.7-81.7h816.7c45.1,0,81.7,36.6,81.7,81.7v555.3C990,822.8,953.4,859.3,908.3,859.3z M892,255c0-12.3-5.5-16.3-16.3-16.3H124.3c-12.3,0-16.3,4.1-16.3,16.3v490c0,13.7,2.7,16.3,16.3,16.3h751.3c13.7,0,16.3-4.1,16.3-16.3V255z"/></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.rectSelect();
						})

						if (callback) {
							//callback();
						}
					},
					callback: function () {
						console.log('Got It !');
					}
				},
				{
					name: 'Ellipse',
					svgStr: '<g><path d="M500,832.3c235.6,0,427.3-149.1,427.3-332.3c0-183.2-191.7-332.2-427.3-332.2c-235.6,0-427.2,149-427.2,332.2C72.8,683.2,264.4,832.3,500,832.3 M500,895C229.3,895,10,718.2,10,500c0-218.1,219.3-395,490-395s490,176.9,490,395C990,718.2,770.7,895,500,895L500,895L500,895z"/></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.ellipseSelect();
						})

						if (callback) {
							//callback();
						}
					},

				},
				{
					name: 'Lasso',
					svgStr: '<g><g transform="matrix(1 0 0 -1 0 1920)"><path d="M226.2,1153.2c-23.7,0-46.5,4.6-68.2,13.9c-21.8,9.3-40.5,21.8-56.3,37.5s-28.3,34.5-37.5,56.3c-9.3,21.8-13.9,44.5-13.9,68.2c0,23.7,4.6,46.5,13.9,68.2c9.3,21.8,21.8,40.5,37.5,56.3s34.5,28.3,56.3,37.5c21.8,9.3,44.5,13.9,68.2,13.9c21.9,0,42.8-3.9,62.7-11.7c19.9-7.8,37.6-18.6,53-32.4c15.4-13.8,28-29.8,37.9-48.1c48,6,94.7,13.5,140.3,22.5c45.6,9,90,19.9,133.1,32.8c43.1,12.9,80.7,26.8,112.8,41.8c32.1,15,57.9,31.9,77.4,50.8c19.5,18.9,29.3,38.5,29.3,58.8c0,31-10.6,54.9-31.7,71.5c-30.8,24.2-81.2,36.4-151.3,36.4c-57.9,0-123.3-8.5-196.2-25.4c-59.9-14.1-113.6-34-161.1-59.8c-47.4-25.8-87.8-54.9-121.2-87.2c-46.4-3.1-87.8-19-124.3-47.5c-36.5-28.5-61.9-64.6-76.2-108.1c0,0.8-0.1,2.4-0.4,4.9c-0.3,2.5-0.4,4.4-0.4,5.7c0,24,4.8,49.2,14.3,75.6c9.5,26.5,23.2,52.8,41,79.2c17.9,26.3,40.3,52.3,67.4,77.8c27.1,25.5,57.1,49.2,90.1,70.9c33,21.8,70.4,41.6,112.4,59.6c42,18,85.9,32.3,131.7,43c82.6,19.3,156.8,28.9,222.4,28.9c97.2,0,172-20.7,224.4-62.2c25-19.8,44-43.6,56.9-71.3c12.9-27.8,19.3-58.4,19.3-92.1c0-64.6-32-120.8-96-168.5c-64-47.7-159.3-86.5-285.9-116.5c-19.8-4.7-43.1-9.6-70-14.9c-16.7,14.1-35.2,27-55.7,38.9c-20.5,11.9-39.2,21.4-56.1,28.7c-16.9,7.3-34.3,13.8-52.2,19.5c-17.9,5.7-31.6,9.8-41.2,12.1c-9.6,2.3-18.4,4.3-26.2,5.9c-7.3,1.3-14.6,2-21.9,2c-28.1,0-53.1-9-74.9-27c-21.8-18-35.2-40.8-40.5-68.4c-1.3-7.3-2-14.6-2-21.9c0-27.9,8.9-52.7,26.8-74.5c17.9-21.8,40.7-35.4,68.6-40.8c15.4-2.9,33.2-8.2,53.6-16C288.6,1161.5,258.5,1153.2,226.2,1153.2z M520.1,994.9c-5.5,0-10.9,0.8-16.4,2.3c-12.5,3.6-22.7,10.8-30.5,21.3c-7.8,10.6-11.7,22.2-11.7,35c0,5.5,0.8,10.9,2.3,16.4c3.6,12.2,5.5,23.7,5.5,34.4c0,16.7-4.4,32.2-13.1,46.5c-8.7,14.3-21.6,27.8-38.7,40.5s-35.1,23-53.9,31.1c-18.9,8.1-35.8,14.5-50.8,19.3c-15,4.8-27.9,8.3-38.9,10.4c-13.8,2.6-25.2,9.3-34.2,20.1c-9,10.8-13.5,23.3-13.5,37.3c0,16.7,5.8,30.6,17.4,41.8c11.6,11.2,25.3,16.8,41.2,16.8c3.6,0,7.3-0.4,10.9-1.2c5-0.8,10.6-1.9,17-3.3c6.4-1.4,16.5-4.2,30.5-8.4c13.9-4.2,27.6-8.8,40.8-13.9c13.3-5.1,28.5-11.9,45.5-20.5s32.8-17.9,47.3-27.8c14.5-9.9,28.9-21.9,43.2-36c14.3-14.1,26.3-29.1,36-45c20.3-33.1,30.5-69.1,30.5-107.9c0-22.2-3.4-44.6-10.2-67.2c-3.6-12.8-10.7-23-21.1-30.7S533.2,994.9,520.1,994.9z"/></g></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.lassoSelect();
						})

						if (callback) {
							//callback();
						}
					},

				},
				{
					name: 'Straight',
					svgStr: '<g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M7800,3960V2910h1050h1050v1050v1050H8850H7800V3960z"/><path d="M4748.4,350.6L2407.8-1990l247.2-245l245-247.2l2345,2345L7592.2,2210l-240.6,240.6c-131.3,131.3-245,240.6-251.6,240.6S6034.7,1639.1,4748.4,350.6z"/><path d="M100-3740v-1050h1050h1050v1050v1050H1150H100V-3740z"/></g></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.straightSelect();
						})

						if (callback) {
							//callback();
						}
					},

				},
				{
					name: 'Polyline',
					svgStr: '<g><path d="M880.7,314.1L713.3,733.1c15.3,20.2,24.7,45.1,24.7,72.4c0,66.3-53.4,120-119.3,120c-65.9,0-119.3-53.7-119.3-120c0-18,4.2-35,11.3-50.3l-119-199.3c-4.8,0.6-9.5,1.5-14.4,1.5c-3.2,0-6.2-0.7-9.3-0.9l-124.2,193c8.8,17.2,14.3,36.3,14.3,57c0,68.9-55.5,124.8-124.1,124.8C65.5,931.2,10,875.3,10,806.4c0-68.9,55.5-124.8,124.1-124.8c2.4,0,4.6,0.6,6.9,0.7l125.2-194.5c-8.5-17-13.8-35.9-13.8-56.2c0-69.4,56-125.7,125-125.7c69,0,125,56.3,125,125.7c0,18.3-4.1,35.6-11.1,51.3L605,673.3l163.4-408.9c-14.7-20.3-23.6-45.2-23.6-72.2c0-68.1,54.9-123.3,122.6-123.3S990,124,990,192.1C990,255.7,942.1,307.4,880.7,314.1z"/></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.polylineSelect();
						})

						if (callback) {
							//callback();
						}
					},

				},
				{
					name: 'FreeSlect',
					svgStr: '<g><path d="M952.6,30.6C893.8,30.6,842.2,49.2,799,86c-36.8,31.3-67,75.1-92.4,133.7c-44.4,102.4-65.7,230.7-86.2,354.7C594.3,731.8,567.3,894.6,500,894.6c-24.3,0-60.5-10.5-94.2-101.6c-26.3-71.2-41.6-166-56.4-257.8C337,457.9,325.2,384.9,307.3,329c-10.5-32.8-22.5-57.5-36.6-75.4c-24.8-31.5-53-38.1-72.4-38.1c-27.9,0-54.2,11.6-76.2,33.6c-17.3,17.3-32.1,40.7-45.4,71.5c-20.1,46.8-36,111.1-47.4,190.9C10.2,644.7,10,775.4,10,780.9h0c0,0.2,0,0.3,0,0.5c0,20.7,16.8,37.4,37.4,37.4c20.7,0,37.4-16.8,37.4-37.4c0-0.5,0-1,0-1.5c0.1-12.6,1.1-136.5,18.6-258.3c10.5-73.2,24.7-131,42.1-171.6c9.6-22.3,29.1-59.6,52.8-59.6c1.7,0,6.2,0,13.7,9.5c8.4,10.7,16.5,28.1,24.2,52c16.2,50.5,27.5,120.8,39.5,195.3c15.3,95.3,31.2,193.8,60.1,271.8c16.7,45.2,36.2,79.2,59.6,103.8c29.4,31,64.7,46.7,104.7,46.7c34.4,0,64.5-13.7,89.5-40.8c19.5-21.2,35.9-50.6,49.9-90c24.2-67.8,39.1-157.3,54.8-252c19.8-119.5,40.3-243.2,81.1-337.2c42.4-97.8,98.4-143.6,176.1-144c0.4,0,0.8,0,1.2,0c20.7,0,37.4-16.8,37.4-37.4C990,47.4,973.3,30.6,952.6,30.6z"/></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.freeSelect();
						})

						if (callback) {
							//callback();
						}
					},


				},
				{
					name: 'Zoom',
					svgStr: '<g><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M1419.6,4984.8c-672.1-143.6-1192.9-710.4-1302-1411.2c-13.4-86.2-19.1-503.6-15.3-1185.2c5.7-1053.1,5.7-1053.1,49.8-1150.8c55.5-122.5,195.3-260.4,319.8-317.8c134-59.4,344.7-59.4,478.7,0c124.5,57.4,264.2,195.3,319.8,317.8c44,95.7,44,109.1,49.8,880.8l5.8,785l1056.9-1055C3378.4,854.7,3445.4,791.5,3543.1,760.9c74.7-24.9,141.7-30.6,248.9-24.9c225.9,13.4,382.9,111,492.1,306.4c51.7,93.8,55.5,116.8,55.5,292.9c0,164.7-5.7,204.9-44,277.6c-30.6,57.4-388.7,428.9-1091.4,1133.5L2158.7,3793.8l794.6,5.8l792.7,5.7l120.6,65.1c134,72.8,193.4,134,268.1,277.6c42.1,82.3,49.8,122.5,49.8,260.4c1.9,139.8-5.7,176.2-49.8,260.4c-76.6,145.5-134,204.9-268.1,277.6l-120.6,65.1l-1081.8,3.8C1680,5019.2,1567.1,5015.4,1419.6,4984.8z"/><path d="M6149,4988.6c-365.7-126.4-524.6-528.5-344.7-865.5c70.8-132.1,130.2-189.6,275.7-266.1l97.6-51.7l790.8-9.6l792.7-9.6L6717.7,2733C5735.5,1739.3,5674.2,1672.3,5634,1565c-36.4-93.8-42.1-141.7-36.4-260.4c13.4-245.1,135.9-428.9,358.1-530.4c134-63.2,321.7-68.9,480.6-15.3c120.6,42.1,178.1,95.7,1489.7,1399.7l750.6,746.7v-760.2c0-731.4,1.9-764,42.1-871.2c51.7-141.7,193.4-293,327.4-352.3c137.9-61.3,348.5-61.3,482.5-1.9c124.5,57.4,264.2,195.3,319.8,317.8c44,97.7,44,99.6,49.8,1131.6c3.8,685.5-1.9,1083.7-15.3,1181.4c-101.5,704.6-656.7,1286.7-1369,1434.1c-157,32.5-271.9,36.4-1225.4,34.5C6380.7,5019.2,6223.7,5015.4,6149,4988.6z"/><path d="M3568-541.2c-44-13.4-105.3-38.3-134-57.4c-28.7-17.2-515.1-497.8-1079.9-1068.4L1325.8-2704.8l-1.9,758.2c0,626.1-5.7,773.6-28.7,855.9c-42.1,139.8-168.5,287.2-306.4,358.1c-99.6,49.8-132.1,57.4-277.6,57.4s-178.1-7.7-277.6-57.4c-141.7-72.8-264.2-218.3-306.4-361.9c-26.8-91.9-30.6-245.1-24.9-1202.5c7.7-1064.6,7.7-1101,49.8-1250.3c158.9-570.6,570.6-993.8,1143.1-1171.8l172.3-53.6h1139.3H3746l120.6,65.1c134,72.8,191.5,132.1,268.1,277.6c44,84.2,51.7,120.6,51.7,260.4c0,149.3-5.7,172.3-65.1,283.4c-72.8,134-132.1,191.5-277.6,268.1l-97.7,51.7l-790.8,9.6l-788.9,9.6l1035.9,1034C3972-1743.6,4249.6-1454.5,4286-1383.7c95.7,185.7,74.7,444.2-49.8,616.5C4090.7-566.1,3801.6-468.4,3568-541.2z"/><path d="M6061-529.7c-174.3-42.1-325.5-162.8-411.7-331.3c-63.2-124.5-70.8-335.1-17.2-484.4c40.2-111,80.4-155.1,1097.1-1162.3L7786.1-3555l-804.2-5.7l-804.2-5.7l-95.7-47.9c-122.5-59.3-237.4-174.2-296.8-296.8c-38.3-78.5-47.9-124.5-47.9-258.5c0-139.8,7.7-176.2,51.7-260.4c76.6-145.5,134-204.9,268.1-277.6l120.6-65.1l1062.7-5.7c689.3-3.8,1108.7,1.9,1194.8,15.3c342.7,53.6,683.5,220.2,934.4,457.6c235.5,220.2,394.4,480.6,478.7,781.2c42.1,143.6,42.1,183.8,49.8,1236.9c5.7,1235,7.7,1219.7-135.9,1395.8c-227.9,281.5-645.3,304.4-899.9,49.8c-178.1-178.1-174.3-160.8-185.7-1062.7l-9.6-790.8l-526.6,522.7c-289.1,285.3-767.8,758.2-1062.7,1049.3l-536.1,530.4l-132.1,40.2C6277.3-512.5,6168.2-504.8,6061-529.7z"/></g></g>',
					class: null,
					onclick: null,

				},
				{
					name: 'Rotate',
					svgStr: '<g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M2724.5,4831.7c-70.4-96.8-129.8-189.3-132-204.7c-2.2-15.4,85.8-92.4,193.7-171.7c173.9-127.7,189.3-143.1,143-154c-442.3-94.6-710.8-191.5-994.7-358.7c-471-275.1-893.5-726.2-1135.6-1212.6c-158.5-316.9-288.3-825.3-288.3-1131.2v-127.6h239.9h237.7l13.2,182.7c30.8,385.1,189.3,831.9,411.5,1159.8c270.7,398.3,721.8,741.7,1186.2,900.1c143,48.4,424.7,114.4,437.9,101.2c4.4-2.2-57.2-94.6-136.4-204.7c-79.2-107.8-145.2-204.7-145.2-215.7c2.2-22,343.3-272.9,374.1-272.9c19.8,0,805.5,1078.4,801.1,1100.4c-2.2,8.8-369.7,279.5-988.1,724l-88,63.8L2724.5,4831.7z"/><path d="M2777.3,183.8v-2255.7H5044h2266.7V183.8v2255.7H5044H2777.3V183.8z"/><path d="M8998.7-1471.1c-66-972.7-798.8-1844.2-1762.8-2095.1c-176.1-46.2-255.3-57.2-255.3-33c0,6.6,63.8,101.3,143,211.3l143.1,198.1l-193.7,138.6c-147.5,107.8-198.1,134.3-217.9,114.4c-52.8-50.6-774.6-1060.8-774.6-1082.8c0-22,1001.3-750.4,1058.6-770.3c17.6-4.4,83.6,68.2,162.8,182.7l136.5,191.5l-209.1,151.9L7020.3-4112l193.7,39.6C8345.1-3843.5,9260.6-2901.6,9454.3-1766c19.8,114.5,35.2,270.7,35.2,347.7v138.6h-239.9h-237.7L8998.7-1471.1z"/></g></g>',
					class: null,
					onclick: null,

				},
				{
					name: 'Annotate',
					svgStr: '<g><path d="M972.5,76.7c6.4,8,11.6,18.4,15.6,31.2c4,12.8,1.6,26.4-7.2,40.8c-4,7.2-8,13.6-12,19.2c-4,5.6-7.2,10.4-9.6,14.4c-3.2,4.8-6,9.2-8.4,13.2L781.7,92.3c4.8-6.4,10.4-14.4,16.8-24c6.4-9.6,11.6-17.2,15.6-22.8c11.2-14.4,24.4-22.6,39.6-24.6c15.2-2,28-1.8,38.4,0.6c11.2,2.4,24.8,8.8,40.8,19.2C948.9,51.1,962.1,63.1,972.5,76.7z M492.5,568.8c2.4-3.2,7.6-11.6,15.6-25.2c8-13.6,18-30.4,30-50.4c12-20,25.4-42,40.2-66c14.8-24,29.8-48.4,45-73.2c35.2-57.6,74.4-122.4,117.6-194.4l169.2,103.2c-43.2,72-82.4,136.8-117.6,194.4c-15.2,24.8-30,49.2-44.4,73.2c-14.4,24-27.4,45.6-39,64.8c-11.6,19.2-21.4,35-29.4,47.4c-8,12.4-12.4,19.8-13.2,22.2c-4,5.6-8.4,11.8-13.2,18.6c-4.8,6.8-10.4,12.2-16.8,16.2c-7.2,4.8-16.8,10.8-28.8,18c-12,7.2-24.6,14.4-37.8,21.6c-13.2,7.2-25.6,14.2-37.2,21c-11.6,6.8-20.6,11.8-27,15c-12,5.6-21.6,6.6-28.8,3c-7.2-3.6-10-12.2-8.4-25.8c0.8-7.2,1.4-17.6,1.8-31.2c0.4-13.6,0.8-27.6,1.2-42c0.4-14.4,1-28,1.8-40.8c0.8-12.8,2-21.6,3.6-26.4c1.6-8,3.4-15.2,5.4-21.6C484.3,584,487.7,576.8,492.5,568.8L492.5,568.8z M769.7,601.2c32,16,58.4,36.6,79.2,61.8c20.8,25.2,31.2,53,31.2,83.4c0,32-11.2,62.2-33.6,90.6c-22.4,28.4-53.4,53.2-93,74.4c-39.6,21.2-86,38-139.2,50.4c-53.2,12.4-111,18.6-173.4,18.6c-64,0-122.4-6-175.2-18c-52.8-12-98-28.4-135.6-49.2C92.4,892.4,63,868,41.8,840C20.6,812,10,782,10,750c0-32,10.2-62.6,30.6-91.8c20.4-29.2,49.8-54.8,88.2-76.8c38.4-22,85.2-39.2,140.4-51.6c55.2-12.4,117.6-18.2,187.2-17.4l-37.2,76.8c-40,1.6-77,7-111,16.2c-34,9.2-63.2,21.4-87.6,36.6c-24.4,15.2-43.2,32-56.4,50.4c-13.2,18.4-19,37.2-17.4,56.4c1.6,20.8,11.2,39.4,28.8,55.8c17.6,16.4,40.2,30.2,67.8,41.4c27.6,11.2,59,19.6,94.2,25.2c35.2,5.6,71.2,8.4,108,8.4c48,0.8,91.4-2.8,130.2-10.8c38.8-8,71.8-18.8,99-32.4c27.2-13.6,48.2-29,63-46.2s22.2-35,22.2-53.4c0-14.4-3.6-26.4-10.8-36c-7.2-9.6-15.6-17.6-25.2-24L769.7,601.2z"/></g>',
					class: null,
					onclick: null,

				},

				{
					name: 'Lens',
					svgStr: '<g><path d="M500,893.3c107.3,0,199.7-38.7,277.2-116.2S893.3,607.3,893.3,500s-38.7-199.7-116.2-277.2C699.7,145.4,607.3,106.7,500,106.7c-107.3,0-199.7,38.7-277.2,116.2C145.4,300.3,106.7,392.7,106.7,500s38.7,199.7,116.2,277.2S392.7,893.3,500,893.3z M500,10c135,0,250.4,47.9,346.2,143.8C942.1,249.6,990,365,990,500v393.4c0,26.1-9.6,48.7-28.8,67.9c-19.2,19.2-41.8,28.8-67.9,28.8H500c-135,0-250.4-47.9-346.2-143.8C57.9,750.4,10,635,10,500c0-135,47.9-250.4,143.8-346.2C249.6,57.9,365,10,500,10L500,10z M548.3,253.8v197.8h197.8v96.6H548.3v197.8h-96.6V548.2H253.8v-96.6h197.8V253.8H548.3z"/></g>',
					class: null,
					onclick: null,

				},
				{
					name: 'Cancel',
					svgStr: '<g><path d="M670.5,500l283.8-283.8c47.6-47.6,47.4-123.7,0.3-170.8C907.2-2,831.1-1.6,783.8,45.7L500,329.5L216.2,45.7C168.9-1.6,92.8-2,45.4,45.4C-1.7,92.4-2,168.5,45.7,216.2L329.5,500L45.7,783.8C-2,831.5-1.7,907.6,45.4,954.6c47.4,47.4,123.5,46.9,170.8-0.3L500,670.5l283.8,283.8c47.2,47.2,123.4,47.7,170.8,0.3c47.1-47.1,47.3-123.2-0.3-170.8L670.5,500z"/></g>',
					class: null,
					onclick: function (ev, visgadget, callback) {
						visgadget.monitors.forEach(function (monitor, i) {
							monitor.cancel();
						})

						if (callback) {
							callback();
						}
					},
					callback: null

				}
			]
		}
	}




	// 将插件对象暴露给全局对象
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