

let initZrenter = function () {
    ! function (t, e) {
        e(t.zrender = {})
    }(this, function (t) {
        "use strict";

        function e(t) {
            if (null == t || "object" != typeof t) return t;
            var i = t,
                r = Hr.call(t);
            if ("[object Array]" === r) {
                if (!k(t)) {
                    i = [];
                    for (var n = 0, a = t.length; n < a; n++) i[n] = e(t[n])
                }
            } else if (Er[r]) {
                if (!k(t)) {
                    var o = t.constructor;
                    if (t.constructor.from) i = o.from(t);
                    else {
                        i = new o(t.length);
                        for (var n = 0, a = t.length; n < a; n++) i[n] = e(t[n])
                    }
                }
            } else if (!Fr[r] && !k(t) && !y(t)) {
                i = {};
                for (var s in t) t.hasOwnProperty(s) && (i[s] = e(t[s]))
            }
            return i
        }

        function i(t, r, n) {
            if (!v(r) || !v(t)) return n ? e(r) : t;
            for (var a in r)
                if (r.hasOwnProperty(a)) {
                    var o = t[a],
                        s = r[a];
                    !v(s) || !v(o) || d(s) || d(o) || y(s) || y(o) || _(s) || _(o) || k(s) || k(o) ? !n && a in t || (t[a] = e(r[a], !0)) : i(o, s, n)
                } return t
        }

        function r(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function n(t, e, i) {
            for (var r in e) e.hasOwnProperty(r) && (i ? null != e[r] : null == t[r]) && (t[r] = e[r]);
            return t
        }

        function a() {
            return Gr || (Gr = Ur().getContext("2d")), Gr
        }

        function o(t, e) {
            if (t) {
                if (t.indexOf) return t.indexOf(e);
                for (var i = 0, r = t.length; i < r; i++)
                    if (t[i] === e) return i
            }
            return -1
        }

        function s(t, e) {
            function i() {}
            var r = t.prototype;
            i.prototype = e.prototype, t.prototype = new i;
            for (var n in r) t.prototype[n] = r[n];
            t.prototype.constructor = t, t.superClass = e
        }

        function h(t, e, i) {
            n(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, i)
        }

        function l(t) {
            if (t) return "string" != typeof t && "number" == typeof t.length
        }

        function u(t, e, i) {
            if (t && e)
                if (t.forEach && t.forEach === Nr) t.forEach(e, i);
                else if (t.length === +t.length)
                for (var r = 0, n = t.length; r < n; r++) e.call(i, t[r], r, t);
            else
                for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
        }

        function c(t, e, i) {
            if (t && e) {
                if (t.map && t.map === jr) return t.map(e, i);
                for (var r = [], n = 0, a = t.length; n < a; n++) r.push(e.call(i, t[n], n, t));
                return r
            }
        }

        function f(t, e) {
            var i = qr.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(qr.call(arguments)))
            }
        }

        function d(t) {
            return "[object Array]" === Hr.call(t)
        }

        function p(t) {
            return "function" == typeof t
        }

        function g(t) {
            return "[object String]" === Hr.call(t)
        }

        function v(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" == e
        }

        function _(t) {
            return !!Fr[Hr.call(t)]
        }

        function y(t) {
            return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
        }

        function m(t, e) {
            return null != t ? t : e
        }

        function x(t, e, i) {
            return null != t ? t : null != e ? e : i
        }

        function w(t) {
            if ("number" == typeof t) return [t, t, t, t];
            var e = t.length;
            return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }

        function b(t) {
            return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }

        function k(t) {
            return t[Zr]
        }

        function T(t) {
            function e(t, e) {
                i ? r.set(t, e) : r.set(e, t)
            }
            var i = d(t);
            this.data = {};
            var r = this;
            t instanceof T ? t.each(e) : t && u(t, e)
        }

        function S(t, e) {
            var i = new $r(2);
            return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i
        }

        function M(t) {
            var e = new $r(2);
            return e[0] = t[0], e[1] = t[1], e
        }

        function C(t, e, i) {
            return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
        }

        function A(t, e, i) {
            return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
        }

        function P(t) {
            return Math.sqrt(L(t))
        }

        function L(t) {
            return t[0] * t[0] + t[1] * t[1]
        }

        function z(t, e, i) {
            return t[0] = e[0] * i, t[1] = e[1] * i, t
        }

        function D(t, e) {
            var i = P(e);
            return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
        }

        function B(t, e) {
            return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
        }

        function I(t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        }

        function R(t, e, i) {
            var r = e[0],
                n = e[1];
            return t[0] = i[0] * r + i[2] * n + i[4], t[1] = i[1] * r + i[3] * n + i[5], t
        }

        function O(t, e, i) {
            return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
        }

        function F(t, e, i) {
            return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
        }

        function E() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
        }

        function H(t, e) {
            return {
                target: t,
                topTarget: e && e.topTarget
            }
        }

        function W(t, e) {
            var i = t._$eventProcessor;
            return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e
        }

        function N(t) {
            return t.getBoundingClientRect ? t.getBoundingClientRect() : {
                left: 0,
                top: 0
            }
        }

        function V(t, e, i, r) {
            return i = i || {}, r || !Or.canvasSupported ? q(t, e, i) : Or.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : q(t, e, i), i
        }

        function q(t, e, i) {
            var r = N(t);
            i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top
        }

        function j(t, e, i) {
            if (null != (e = e || window.event).zrX) return e;
            var r = e.type;
            if (r && r.indexOf("touch") >= 0) {
                var n = "touchend" != r ? e.targetTouches[0] : e.changedTouches[0];
                n && V(t, n, e, i)
            } else V(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
            var a = e.button;
            return null == e.which && void 0 !== a && sn.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
        }

        function X(t, e, i) {
            on ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
        }

        function Y(t, e, i) {
            on ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
        }

        function U(t, e, i) {
            return {
                type: t,
                event: i,
                target: e.target,
                topTarget: e.topTarget,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta,
                zrByTouch: i.zrByTouch,
                which: i.which,
                stop: G
            }
        }

        function G(t) {
            hn(this.event)
        }

        function Z() {}

        function Q(t, e, i) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                for (var r, n = t; n;) {
                    if (n.clipPath && !n.clipPath.contain(e, i)) return !1;
                    n.silent && (r = !0), n = n.parent
                }
                return !r || ln
            }
            return !1
        }

        function $() {
            var t = new fn(6);
            return K(t), t
        }

        function K(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }

        function J(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
        }

        function tt(t, e, i) {
            var r = e[0] * i[0] + e[2] * i[1],
                n = e[1] * i[0] + e[3] * i[1],
                a = e[0] * i[2] + e[2] * i[3],
                o = e[1] * i[2] + e[3] * i[3],
                s = e[0] * i[4] + e[2] * i[5] + e[4],
                h = e[1] * i[4] + e[3] * i[5] + e[5];
            return t[0] = r, t[1] = n, t[2] = a, t[3] = o, t[4] = s, t[5] = h, t
        }

        function et(t, e, i) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
        }

        function it(t, e, i) {
            var r = e[0],
                n = e[2],
                a = e[4],
                o = e[1],
                s = e[3],
                h = e[5],
                l = Math.sin(i),
                u = Math.cos(i);
            return t[0] = r * u + o * l, t[1] = -r * l + o * u, t[2] = n * u + s * l, t[3] = -n * l + u * s, t[4] = u * a + l * h, t[5] = u * h - l * a, t
        }

        function rt(t, e, i) {
            var r = i[0],
                n = i[1];
            return t[0] = e[0] * r, t[1] = e[1] * n, t[2] = e[2] * r, t[3] = e[3] * n, t[4] = e[4] * r, t[5] = e[5] * n, t
        }

        function nt(t, e) {
            var i = e[0],
                r = e[2],
                n = e[4],
                a = e[1],
                o = e[3],
                s = e[5],
                h = i * o - a * r;
            return h ? (h = 1 / h, t[0] = o * h, t[1] = -a * h, t[2] = -r * h, t[3] = i * h, t[4] = (r * s - o * n) * h, t[5] = (a * n - i * s) * h, t) : null
        }

        function at(t) {
            return t > gn || t < -gn
        }

        function ot(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
        }

        function st(t) {
            return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
        }

        function ht(t) {
            return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
        }

        function lt(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }

        function ut(t) {
            return st(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function ct(t) {
            return lt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function ft(t, e, i) {
            return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function dt(t, e, i) {
            return t + (e - t) * i
        }

        function pt(t, e, i, r, n) {
            return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t
        }

        function gt(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
        }

        function vt(t, e) {
            Pn && gt(Pn, e), Pn = An.put(t, Pn || e.slice())
        }

        function _t(t, e) {
            if (t) {
                e = e || [];
                var i = An.get(t);
                if (i) return gt(e, i);
                var r = (t += "").replace(/ /g, "").toLowerCase();
                if (r in Cn) return gt(e, Cn[r]), vt(t, e), e;
                if ("#" !== r.charAt(0)) {
                    var n = r.indexOf("("),
                        a = r.indexOf(")");
                    if (-1 !== n && a + 1 === r.length) {
                        var o = r.substr(0, n),
                            s = r.substr(n + 1, a - (n + 1)).split(","),
                            h = 1;
                        switch (o) {
                            case "rgba":
                                if (4 !== s.length) return void pt(e, 0, 0, 0, 1);
                                h = ct(s.pop());
                            case "rgb":
                                return 3 !== s.length ? void pt(e, 0, 0, 0, 1) : (pt(e, ut(s[0]), ut(s[1]), ut(s[2]), h), vt(t, e), e);
                            case "hsla":
                                return 4 !== s.length ? void pt(e, 0, 0, 0, 1) : (s[3] = ct(s[3]), yt(s, e), vt(t, e), e);
                            case "hsl":
                                return 3 !== s.length ? void pt(e, 0, 0, 0, 1) : (yt(s, e), vt(t, e), e);
                            default:
                                return
                        }
                    }
                    pt(e, 0, 0, 0, 1)
                } else {
                    if (4 === r.length) return (l = parseInt(r.substr(1), 16)) >= 0 && l <= 4095 ? (pt(e, (3840 & l) >> 4 | (3840 & l) >> 8, 240 & l | (240 & l) >> 4, 15 & l | (15 & l) << 4, 1), vt(t, e), e) : void pt(e, 0, 0, 0, 1);
                    if (7 === r.length) {
                        var l = parseInt(r.substr(1), 16);
                        return l >= 0 && l <= 16777215 ? (pt(e, (16711680 & l) >> 16, (65280 & l) >> 8, 255 & l, 1), vt(t, e), e) : void pt(e, 0, 0, 0, 1)
                    }
                }
            }
        }

        function yt(t, e) {
            var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
                r = ct(t[1]),
                n = ct(t[2]),
                a = n <= .5 ? n * (r + 1) : n + r - n * r,
                o = 2 * n - a;
            return e = e || [], pt(e, st(255 * ft(o, a, i + 1 / 3)), st(255 * ft(o, a, i)), st(255 * ft(o, a, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
        }

        function mt(t) {
            if (t) {
                var e, i, r = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255,
                    o = Math.min(r, n, a),
                    s = Math.max(r, n, a),
                    h = s - o,
                    l = (s + o) / 2;
                if (0 === h) e = 0, i = 0;
                else {
                    i = l < .5 ? h / (s + o) : h / (2 - s - o);
                    var u = ((s - r) / 6 + h / 2) / h,
                        c = ((s - n) / 6 + h / 2) / h,
                        f = ((s - a) / 6 + h / 2) / h;
                    r === s ? e = f - c : n === s ? e = 1 / 3 + u - f : a === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
                }
                var d = [360 * e, i, l];
                return null != t[3] && d.push(t[3]), d
            }
        }

        function xt(t, e, i) {
            if (e && e.length && t >= 0 && t <= 1) {
                i = i || [];
                var r = t * (e.length - 1),
                    n = Math.floor(r),
                    a = Math.ceil(r),
                    o = e[n],
                    s = e[a],
                    h = r - n;
                return i[0] = st(dt(o[0], s[0], h)), i[1] = st(dt(o[1], s[1], h)), i[2] = st(dt(o[2], s[2], h)), i[3] = lt(dt(o[3], s[3], h)), i
            }
        }

        function wt(t, e, i) {
            if (e && e.length && t >= 0 && t <= 1) {
                var r = t * (e.length - 1),
                    n = Math.floor(r),
                    a = Math.ceil(r),
                    o = _t(e[n]),
                    s = _t(e[a]),
                    h = r - n,
                    l = bt([st(dt(o[0], s[0], h)), st(dt(o[1], s[1], h)), st(dt(o[2], s[2], h)), lt(dt(o[3], s[3], h))], "rgba");
                return i ? {
                    color: l,
                    leftIndex: n,
                    rightIndex: a,
                    value: r
                } : l
            }
        }

        function bt(t, e) {
            if (t && t.length) {
                var i = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
            }
        }

        function kt(t, e) {
            return t[e]
        }

        function Tt(t, e, i) {
            t[e] = i
        }

        function St(t, e, i) {
            return (e - t) * i + t
        }

        function Mt(t, e, i) {
            return i > .5 ? e : t
        }

        function Ct(t, e, i, r, n) {
            var a = t.length;
            if (1 == n)
                for (s = 0; s < a; s++) r[s] = St(t[s], e[s], i);
            else
                for (var o = a && t[0].length, s = 0; s < a; s++)
                    for (var h = 0; h < o; h++) r[s][h] = St(t[s][h], e[s][h], i)
        }

        function At(t, e, i) {
            var r = t.length,
                n = e.length;
            if (r !== n)
                if (r > n) t.length = n;
                else
                    for (o = r; o < n; o++) t.push(1 === i ? e[o] : Bn.call(e[o]));
            for (var a = t[0] && t[0].length, o = 0; o < t.length; o++)
                if (1 === i) isNaN(t[o]) && (t[o] = e[o]);
                else
                    for (var s = 0; s < a; s++) isNaN(t[o][s]) && (t[o][s] = e[o][s])
        }

        function Pt(t, e, i) {
            if (t === e) return !0;
            var r = t.length;
            if (r !== e.length) return !1;
            if (1 === i) {
                for (a = 0; a < r; a++)
                    if (t[a] !== e[a]) return !1
            } else
                for (var n = t[0].length, a = 0; a < r; a++)
                    for (var o = 0; o < n; o++)
                        if (t[a][o] !== e[a][o]) return !1;
            return !0
        }

        function Lt(t, e, i, r, n, a, o, s, h) {
            var l = t.length;
            if (1 == h)
                for (c = 0; c < l; c++) s[c] = zt(t[c], e[c], i[c], r[c], n, a, o);
            else
                for (var u = t[0].length, c = 0; c < l; c++)
                    for (var f = 0; f < u; f++) s[c][f] = zt(t[c][f], e[c][f], i[c][f], r[c][f], n, a, o)
        }

        function zt(t, e, i, r, n, a, o) {
            var s = .5 * (i - t),
                h = .5 * (r - e);
            return (2 * (e - i) + s + h) * o + (-3 * (e - i) - 2 * s - h) * a + s * n + e
        }

        function Dt(t) {
            if (l(t)) {
                var e = t.length;
                if (l(t[0])) {
                    for (var i = [], r = 0; r < e; r++) i.push(Bn.call(t[r]));
                    return i
                }
                return Bn.call(t)
            }
            return t
        }

        function Bt(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function It(t) {
            var e = t[t.length - 1].value;
            return l(e && e[0]) ? 2 : 1
        }

        function Rt(t, e, i, r, n, a) {
            var o = t._getter,
                s = t._setter,
                h = "spline" === e,
                u = r.length;
            if (u) {
                var c, f = l(r[0].value),
                    d = !1,
                    p = !1,
                    g = f ? It(r) : 0;
                r.sort(function (t, e) {
                    return t.time - e.time
                }), c = r[u - 1].time;
                for (var v = [], _ = [], y = r[0].value, m = !0, x = 0; x < u; x++) {
                    v.push(r[x].time / c);
                    var w = r[x].value;
                    if (f && Pt(w, y, g) || !f && w === y || (m = !1), y = w, "string" == typeof w) {
                        var b = _t(w);
                        b ? (w = b, d = !0) : p = !0
                    }
                    _.push(w)
                }
                if (a || !m) {
                    for (var k = _[u - 1], x = 0; x < u - 1; x++) f ? At(_[x], k, g) : !isNaN(_[x]) || isNaN(k) || p || d || (_[x] = k);
                    f && At(o(t._target, n), k, g);
                    var T, S, M, C, A, P, L = 0,
                        z = 0;
                    if (d) var D = [0, 0, 0, 0];
                    var B = new ot({
                        target: t._target,
                        life: c,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: function (t, e) {
                            var i;
                            if (e < 0) i = 0;
                            else if (e < z) {
                                for (i = T = Math.min(L + 1, u - 1); i >= 0 && !(v[i] <= e); i--);
                                i = Math.min(i, u - 2)
                            } else {
                                for (i = L; i < u && !(v[i] > e); i++);
                                i = Math.min(i - 1, u - 2)
                            }
                            L = i, z = e;
                            var r = v[i + 1] - v[i];
                            if (0 !== r)
                                if (S = (e - v[i]) / r, h)
                                    if (C = _[i], M = _[0 === i ? i : i - 1], A = _[i > u - 2 ? u - 1 : i + 1], P = _[i > u - 3 ? u - 1 : i + 2], f) Lt(M, C, A, P, S, S * S, S * S * S, o(t, n), g);
                                    else {
                                        if (d) a = Lt(M, C, A, P, S, S * S, S * S * S, D, 1), a = Bt(D);
                                        else {
                                            if (p) return Mt(C, A, S);
                                            a = zt(M, C, A, P, S, S * S, S * S * S)
                                        }
                                        s(t, n, a)
                                    }
                            else if (f) Ct(_[i], _[i + 1], S, o(t, n), g);
                            else {
                                var a;
                                if (d) Ct(_[i], _[i + 1], S, D, 1), a = Bt(D);
                                else {
                                    if (p) return Mt(_[i], _[i + 1], S);
                                    a = St(_[i], _[i + 1], S)
                                }
                                s(t, n, a)
                            }
                        },
                        ondestroy: i
                    });
                    return e && "spline" !== e && (B.easing = e), B
                }
            }
        }

        function Ot(t, e, i, r, n, a, o, s) {
            g(r) ? (a = n, n = r, r = 0) : p(n) ? (a = n, n = "linear", r = 0) : p(r) ? (a = r, r = 0) : p(i) ? (a = i, i = 500) : i || (i = 500), t.stopAnimation(), Ft(t, "", t, e, i, r, s);
            var h = t.animators.slice(),
                l = h.length;
            l || a && a();
            for (var u = 0; u < h.length; u++) h[u].done(function () {
                --l || a && a()
            }).start(n, o)
        }

        function Ft(t, e, i, r, n, a, o) {
            var s = {},
                h = 0;
            for (var u in r) r.hasOwnProperty(u) && (null != i[u] ? v(r[u]) && !l(r[u]) ? Ft(t, e ? e + "." + u : u, i[u], r[u], n, a, o) : (o ? (s[u] = i[u], Et(t, e, u, r[u])) : s[u] = r[u], h++) : null == r[u] || o || Et(t, e, u, r[u]));
            h > 0 && t.animate(e, !1).when(null == n ? 500 : n, s).delay(a || 0)
        }

        function Et(t, e, i, r) {
            if (e) {
                var n = {};
                n[e] = {}, n[e][i] = r, t.attr(n)
            } else t.attr(i, r)
        }

        function Ht(t, e, i, r) {
            i < 0 && (t += i, i = -i), r < 0 && (e += r, r = -r), this.x = t, this.y = e, this.width = i, this.height = r
        }

        function Wt(t) {
            for (var e = 0; t >= Xn;) e |= 1 & t, t >>= 1;
            return t + e
        }

        function Nt(t, e, i, r) {
            var n = e + 1;
            if (n === i) return 1;
            if (r(t[n++], t[e]) < 0) {
                for (; n < i && r(t[n], t[n - 1]) < 0;) n++;
                Vt(t, e, n)
            } else
                for (; n < i && r(t[n], t[n - 1]) >= 0;) n++;
            return n - e
        }

        function Vt(t, e, i) {
            for (i--; e < i;) {
                var r = t[e];
                t[e++] = t[i], t[i--] = r
            }
        }

        function qt(t, e, i, r, n) {
            for (r === e && r++; r < i; r++) {
                for (var a, o = t[r], s = e, h = r; s < h;) n(o, t[a = s + h >>> 1]) < 0 ? h = a : s = a + 1;
                var l = r - s;
                switch (l) {
                    case 3:
                        t[s + 3] = t[s + 2];
                    case 2:
                        t[s + 2] = t[s + 1];
                    case 1:
                        t[s + 1] = t[s];
                        break;
                    default:
                        for (; l > 0;) t[s + l] = t[s + l - 1], l--
                }
                t[s] = o
            }
        }

        function jt(t, e, i, r, n, a) {
            var o = 0,
                s = 0,
                h = 1;
            if (a(t, e[i + n]) > 0) {
                for (s = r - n; h < s && a(t, e[i + n + h]) > 0;) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s), o += n, h += n
            } else {
                for (s = n + 1; h < s && a(t, e[i + n - h]) <= 0;) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s);
                var l = o;
                o = n - h, h = n - l
            }
            for (o++; o < h;) {
                var u = o + (h - o >>> 1);
                a(t, e[i + u]) > 0 ? o = u + 1 : h = u
            }
            return h
        }

        function Xt(t, e, i, r, n, a) {
            var o = 0,
                s = 0,
                h = 1;
            if (a(t, e[i + n]) < 0) {
                for (s = n + 1; h < s && a(t, e[i + n - h]) < 0;) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s);
                var l = o;
                o = n - h, h = n - l
            } else {
                for (s = r - n; h < s && a(t, e[i + n + h]) >= 0;) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s), o += n, h += n
            }
            for (o++; o < h;) {
                var u = o + (h - o >>> 1);
                a(t, e[i + u]) < 0 ? h = u : o = u + 1
            }
            return h
        }

        function Yt(t, e) {
            function i(i) {
                var s = a[i],
                    l = o[i],
                    u = a[i + 1],
                    c = o[i + 1];
                o[i] = l + c, i === h - 3 && (a[i + 1] = a[i + 2], o[i + 1] = o[i + 2]), h--;
                var f = Xt(t[u], t, s, l, 0, e);
                s += f, 0 !== (l -= f) && 0 !== (c = jt(t[s + l - 1], t, u, c, c - 1, e)) && (l <= c ? r(s, l, u, c) : n(s, l, u, c))
            }

            function r(i, r, n, a) {
                var o = 0;
                for (o = 0; o < r; o++) l[o] = t[i + o];
                var h = 0,
                    u = n,
                    c = i;
                if (t[c++] = t[u++], 0 != --a)
                    if (1 !== r) {
                        for (var f, d, p, g = s;;) {
                            f = 0, d = 0, p = !1;
                            do {
                                if (e(t[u], l[h]) < 0) {
                                    if (t[c++] = t[u++], d++, f = 0, 0 == --a) {
                                        p = !0;
                                        break
                                    }
                                } else if (t[c++] = l[h++], f++, d = 0, 1 == --r) {
                                    p = !0;
                                    break
                                }
                            } while ((f | d) < g);
                            if (p) break;
                            do {
                                if (0 !== (f = Xt(t[u], l, h, r, 0, e))) {
                                    for (o = 0; o < f; o++) t[c + o] = l[h + o];
                                    if (c += f, h += f, (r -= f) <= 1) {
                                        p = !0;
                                        break
                                    }
                                }
                                if (t[c++] = t[u++], 0 == --a) {
                                    p = !0;
                                    break
                                }
                                if (0 !== (d = jt(l[h], t, u, a, 0, e))) {
                                    for (o = 0; o < d; o++) t[c + o] = t[u + o];
                                    if (c += d, u += d, 0 === (a -= d)) {
                                        p = !0;
                                        break
                                    }
                                }
                                if (t[c++] = l[h++], 1 == --r) {
                                    p = !0;
                                    break
                                }
                                g--
                            } while (f >= Yn || d >= Yn);
                            if (p) break;
                            g < 0 && (g = 0), g += 2
                        }
                        if ((s = g) < 1 && (s = 1), 1 === r) {
                            for (o = 0; o < a; o++) t[c + o] = t[u + o];
                            t[c + a] = l[h]
                        } else {
                            if (0 === r) throw new Error;
                            for (o = 0; o < r; o++) t[c + o] = l[h + o]
                        }
                    } else {
                        for (o = 0; o < a; o++) t[c + o] = t[u + o];
                        t[c + a] = l[h]
                    }
                else
                    for (o = 0; o < r; o++) t[c + o] = l[h + o]
            }

            function n(i, r, n, a) {
                var o = 0;
                for (o = 0; o < a; o++) l[o] = t[n + o];
                var h = i + r - 1,
                    u = a - 1,
                    c = n + a - 1,
                    f = 0,
                    d = 0;
                if (t[c--] = t[h--], 0 != --r)
                    if (1 !== a) {
                        for (var p = s;;) {
                            var g = 0,
                                v = 0,
                                _ = !1;
                            do {
                                if (e(l[u], t[h]) < 0) {
                                    if (t[c--] = t[h--], g++, v = 0, 0 == --r) {
                                        _ = !0;
                                        break
                                    }
                                } else if (t[c--] = l[u--], v++, g = 0, 1 == --a) {
                                    _ = !0;
                                    break
                                }
                            } while ((g | v) < p);
                            if (_) break;
                            do {
                                if (0 != (g = r - Xt(l[u], t, i, r, r - 1, e))) {
                                    for (r -= g, d = (c -= g) + 1, f = (h -= g) + 1, o = g - 1; o >= 0; o--) t[d + o] = t[f + o];
                                    if (0 === r) {
                                        _ = !0;
                                        break
                                    }
                                }
                                if (t[c--] = l[u--], 1 == --a) {
                                    _ = !0;
                                    break
                                }
                                if (0 != (v = a - jt(t[h], l, 0, a, a - 1, e))) {
                                    for (a -= v, d = (c -= v) + 1, f = (u -= v) + 1, o = 0; o < v; o++) t[d + o] = l[f + o];
                                    if (a <= 1) {
                                        _ = !0;
                                        break
                                    }
                                }
                                if (t[c--] = t[h--], 0 == --r) {
                                    _ = !0;
                                    break
                                }
                                p--
                            } while (g >= Yn || v >= Yn);
                            if (_) break;
                            p < 0 && (p = 0), p += 2
                        }
                        if ((s = p) < 1 && (s = 1), 1 === a) {
                            for (d = (c -= r) + 1, f = (h -= r) + 1, o = r - 1; o >= 0; o--) t[d + o] = t[f + o];
                            t[c] = l[u]
                        } else {
                            if (0 === a) throw new Error;
                            for (f = c - (a - 1), o = 0; o < a; o++) t[f + o] = l[o]
                        }
                    } else {
                        for (d = (c -= r) + 1, f = (h -= r) + 1, o = r - 1; o >= 0; o--) t[d + o] = t[f + o];
                        t[c] = l[u]
                    }
                else
                    for (f = c - (a - 1), o = 0; o < a; o++) t[f + o] = l[o]
            }
            var a, o, s = Yn,
                h = 0,
                l = [];
            a = [], o = [], this.mergeRuns = function () {
                for (; h > 1;) {
                    var t = h - 2;
                    if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1]) o[t - 1] < o[t + 1] && t--;
                    else if (o[t] > o[t + 1]) break;
                    i(t)
                }
            }, this.forceMergeRuns = function () {
                for (; h > 1;) {
                    var t = h - 2;
                    t > 0 && o[t - 1] < o[t + 1] && t--, i(t)
                }
            }, this.pushRun = function (t, e) {
                a[h] = t, o[h] = e, h += 1
            }
        }

        function Ut(t, e, i, r) {
            i || (i = 0), r || (r = t.length);
            var n = r - i;
            if (!(n < 2)) {
                var a = 0;
                if (n < Xn) return a = Nt(t, i, r, e), void qt(t, i, r, i + a, e);
                var o = new Yt(t, e),
                    s = Wt(n);
                do {
                    if ((a = Nt(t, i, r, e)) < s) {
                        var h = n;
                        h > s && (h = s), qt(t, i, i + h, i + a, e), a = h
                    }
                    o.pushRun(i, a), o.mergeRuns(), n -= a, i += a
                } while (0 !== n);
                o.forceMergeRuns()
            }
        }

        function Gt(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }

        function Zt(t, e, i) {
            var r = null == e.x ? 0 : e.x,
                n = null == e.x2 ? 1 : e.x2,
                a = null == e.y ? 0 : e.y,
                o = null == e.y2 ? 0 : e.y2;
            return e.global || (r = r * i.width + i.x, n = n * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), r = isNaN(r) ? 0 : r, n = isNaN(n) ? 1 : n, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, t.createLinearGradient(r, a, n, o)
        }

        function Qt(t, e, i) {
            var r = i.width,
                n = i.height,
                a = Math.min(r, n),
                o = null == e.x ? .5 : e.x,
                s = null == e.y ? .5 : e.y,
                h = null == e.r ? .5 : e.r;
            return e.global || (o = o * r + i.x, s = s * n + i.y, h *= a), t.createRadialGradient(o, s, 0, o, s, h)
        }

        function $t() {
            return !1
        }

        function Kt(t, e, i) {
            var r = Ur(),
                n = e.getWidth(),
                a = e.getHeight(),
                o = r.style;
            return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = n + "px", o.height = a + "px", r.setAttribute("data-zr-dom-id", t)), r.width = n * i, r.height = a * i, r
        }

        function Jt(t) {
            if ("string" == typeof t) {
                var e = na.get(t);
                return e && e.image
            }
            return t
        }

        function te(t, e, i, r, n) {
            if (t) {
                if ("string" == typeof t) {
                    if (e && e.__zrImageSrc === t || !i) return e;
                    var a = na.get(t),
                        o = {
                            hostEl: i,
                            cb: r,
                            cbPayload: n
                        };
                    return a ? !ie(e = a.image) && a.pending.push(o) : (!e && (e = new Image), e.onload = e.onerror = ee, na.put(t, e.__cachedImgObj = {
                        image: e,
                        pending: [o]
                    }), e.src = e.__zrImageSrc = t), e
                }
                return t
            }
            return e
        }

        function ee() {
            var t = this.__cachedImgObj;
            this.onload = this.onerror = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var i = t.pending[e],
                    r = i.cb;
                r && r(this, i.cbPayload), i.hostEl.dirty()
            }
            t.pending.length = 0
        }

        function ie(t) {
            return t && t.width && t.height
        }

        function re(t, e) {
            var i = t + ":" + (e = e || la);
            if (aa[i]) return aa[i];
            for (var r = (t + "").split("\n"), n = 0, a = 0, o = r.length; a < o; a++) n = Math.max(ge(r[a], e).width, n);
            return oa > sa && (oa = 0, aa = {}), oa++, aa[i] = n, n
        }

        function ne(t, e, i, r, n, a, o) {
            return a ? oe(t, e, i, r, n, a, o) : ae(t, e, i, r, n, o)
        }

        function ae(t, e, i, r, n, a) {
            var o = ve(t, e, n, a),
                s = re(t, e);
            n && (s += n[1] + n[3]);
            var h = o.outerHeight,
                l = new Ht(se(0, s, i), he(0, h, r), s, h);
            return l.lineHeight = o.lineHeight, l
        }

        function oe(t, e, i, r, n, a, o) {
            var s = _e(t, {
                    rich: a,
                    truncate: o,
                    font: e,
                    textAlign: i,
                    textPadding: n
                }),
                h = s.outerWidth,
                l = s.outerHeight;
            return new Ht(se(0, h, i), he(0, l, r), h, l)
        }

        function se(t, e, i) {
            return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
        }

        function he(t, e, i) {
            return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t
        }

        function le(t, e, i) {
            var r = e.x,
                n = e.y,
                a = e.height,
                o = e.width,
                s = a / 2,
                h = "left",
                l = "top";
            switch (t) {
                case "left":
                    r -= i, n += s, h = "right", l = "middle";
                    break;
                case "right":
                    r += i + o, n += s, l = "middle";
                    break;
                case "top":
                    r += o / 2, n -= i, h = "center", l = "bottom";
                    break;
                case "bottom":
                    r += o / 2, n += a + i, h = "center";
                    break;
                case "inside":
                    r += o / 2, n += s, h = "center", l = "middle";
                    break;
                case "insideLeft":
                    r += i, n += s, l = "middle";
                    break;
                case "insideRight":
                    r += o - i, n += s, h = "right", l = "middle";
                    break;
                case "insideTop":
                    r += o / 2, n += i, h = "center";
                    break;
                case "insideBottom":
                    r += o / 2, n += a - i, h = "center", l = "bottom";
                    break;
                case "insideTopLeft":
                    r += i, n += i;
                    break;
                case "insideTopRight":
                    r += o - i, n += i, h = "right";
                    break;
                case "insideBottomLeft":
                    r += i, n += a - i, l = "bottom";
                    break;
                case "insideBottomRight":
                    r += o - i, n += a - i, h = "right", l = "bottom"
            }
            return {
                x: r,
                y: n,
                textAlign: h,
                textVerticalAlign: l
            }
        }

        function ue(t, e, i, r, n) {
            if (!e) return "";
            var a = (t + "").split("\n");
            n = ce(e, i, r, n);
            for (var o = 0, s = a.length; o < s; o++) a[o] = fe(a[o], n);
            return a.join("\n")
        }

        function ce(t, e, i, n) {
            (n = r({}, n)).font = e;
            var i = m(i, "...");
            n.maxIterations = m(n.maxIterations, 2);
            var a = n.minChar = m(n.minChar, 0);
            n.cnCharWidth = re("鍥�", e);
            var o = n.ascCharWidth = re("a", e);
            n.placeholder = m(n.placeholder, "");
            for (var s = t = Math.max(0, t - 1), h = 0; h < a && s >= o; h++) s -= o;
            var l = re(i);
            return l > s && (i = "", l = 0), s = t - l, n.ellipsis = i, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = t, n
        }

        function fe(t, e) {
            var i = e.containerWidth,
                r = e.font,
                n = e.contentWidth;
            if (!i) return "";
            var a = re(t, r);
            if (a <= i) return t;
            for (var o = 0;; o++) {
                if (a <= n || o >= e.maxIterations) {
                    t += e.ellipsis;
                    break
                }
                var s = 0 === o ? de(t, n, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * n / a) : 0;
                a = re(t = t.substr(0, s), r)
            }
            return "" === t && (t = e.placeholder), t
        }

        function de(t, e, i, r) {
            for (var n = 0, a = 0, o = t.length; a < o && n < e; a++) {
                var s = t.charCodeAt(a);
                n += 0 <= s && s <= 127 ? i : r
            }
            return a
        }

        function pe(t) {
            return re("鍥�", t)
        }

        function ge(t, e) {
            return ua.measureText(t, e)
        }

        function ve(t, e, i, r) {
            null != t && (t += "");
            var n = pe(e),
                a = t ? t.split("\n") : [],
                o = a.length * n,
                s = o;
            if (i && (s += i[0] + i[2]), t && r) {
                var h = r.outerHeight,
                    l = r.outerWidth;
                if (null != h && s > h) t = "", a = [];
                else if (null != l)
                    for (var u = ce(l - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
                            minChar: r.minChar,
                            placeholder: r.placeholder
                        }), c = 0, f = a.length; c < f; c++) a[c] = fe(a[c], u)
            }
            return {
                lines: a,
                height: o,
                outerHeight: s,
                lineHeight: n
            }
        }

        function _e(t, e) {
            var i = {
                lines: [],
                width: 0,
                height: 0
            };
            if (null != t && (t += ""), !t) return i;
            for (var r, n = ha.lastIndex = 0; null != (r = ha.exec(t));) {
                var a = r.index;
                a > n && ye(i, t.substring(n, a)), ye(i, r[2], r[1]), n = ha.lastIndex
            }
            n < t.length && ye(i, t.substring(n, t.length));
            var o = i.lines,
                s = 0,
                h = 0,
                l = [],
                u = e.textPadding,
                c = e.truncate,
                f = c && c.outerWidth,
                d = c && c.outerHeight;
            u && (null != f && (f -= u[1] + u[3]), null != d && (d -= u[0] + u[2]));
            for (L = 0; L < o.length; L++) {
                for (var p = o[L], g = 0, v = 0, _ = 0; _ < p.tokens.length; _++) {
                    var y = (z = p.tokens[_]).styleName && e.rich[z.styleName] || {},
                        w = z.textPadding = y.textPadding,
                        b = z.font = y.font || e.font,
                        k = z.textHeight = m(y.textHeight, pe(b));
                    if (w && (k += w[0] + w[2]), z.height = k, z.lineHeight = x(y.textLineHeight, e.textLineHeight, k), z.textAlign = y && y.textAlign || e.textAlign, z.textVerticalAlign = y && y.textVerticalAlign || "middle", null != d && s + z.lineHeight > d) return {
                        lines: [],
                        width: 0,
                        height: 0
                    };
                    z.textWidth = re(z.text, b);
                    var T = y.textWidth,
                        S = null == T || "auto" === T;
                    if ("string" == typeof T && "%" === T.charAt(T.length - 1)) z.percentWidth = T, l.push(z), T = 0;
                    else {
                        if (S) {
                            T = z.textWidth;
                            var M = y.textBackgroundColor,
                                C = M && M.image;
                            C && ie(C = Jt(C)) && (T = Math.max(T, C.width * k / C.height))
                        }
                        var A = w ? w[1] + w[3] : 0;
                        T += A;
                        var P = null != f ? f - v : null;
                        null != P && P < T && (!S || P < A ? (z.text = "", z.textWidth = T = 0) : (z.text = ue(z.text, P - A, b, c.ellipsis, {
                            minChar: c.minChar
                        }), z.textWidth = re(z.text, b), T = z.textWidth + A))
                    }
                    v += z.width = T, y && (g = Math.max(g, z.lineHeight))
                }
                p.width = v, p.lineHeight = g, s += g, h = Math.max(h, v)
            }
            i.outerWidth = i.width = m(e.textWidth, h), i.outerHeight = i.height = m(e.textHeight, s), u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);
            for (var L = 0; L < l.length; L++) {
                var z = l[L],
                    D = z.percentWidth;
                z.width = parseInt(D, 10) / 100 * h
            }
            return i
        }

        function ye(t, e, i) {
            for (var r = "" === e, n = e.split("\n"), a = t.lines, o = 0; o < n.length; o++) {
                var s = n[o],
                    h = {
                        styleName: i,
                        text: s,
                        isLineHolder: !s && !r
                    };
                if (o) a.push({
                    tokens: [h]
                });
                else {
                    var l = (a[a.length - 1] || (a[0] = {
                            tokens: []
                        })).tokens,
                        u = l.length;
                    1 === u && l[0].isLineHolder ? l[0] = h : (s || !u || r) && l.push(h)
                }
            }
        }

        function me(t) {
            var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
            return e && b(e) || t.textFont || t.font
        }

        function xe(t, e) {
            var i, r, n, a, o = e.x,
                s = e.y,
                h = e.width,
                l = e.height,
                u = e.r;
            h < 0 && (o += h, h = -h), l < 0 && (s += l, l = -l), "number" == typeof u ? i = r = n = a = u : u instanceof Array ? 1 === u.length ? i = r = n = a = u[0] : 2 === u.length ? (i = n = u[0], r = a = u[1]) : 3 === u.length ? (i = u[0], r = a = u[1], n = u[2]) : (i = u[0], r = u[1], n = u[2], a = u[3]) : i = r = n = a = 0;
            var c;
            i + r > h && (i *= h / (c = i + r), r *= h / c), n + a > h && (n *= h / (c = n + a), a *= h / c), r + n > l && (r *= l / (c = r + n), n *= l / c), i + a > l && (i *= l / (c = i + a), a *= l / c), t.moveTo(o + i, s), t.lineTo(o + h - r, s), 0 !== r && t.arc(o + h - r, s + r, r, -Math.PI / 2, 0), t.lineTo(o + h, s + l - n), 0 !== n && t.arc(o + h - n, s + l - n, n, 0, Math.PI / 2), t.lineTo(o + a, s + l), 0 !== a && t.arc(o + a, s + l - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + i), 0 !== i && t.arc(o + i, s + i, i, Math.PI, 1.5 * Math.PI)
        }

        function we(t) {
            return be(t), u(t.rich, be), t
        }

        function be(t) {
            if (t) {
                t.font = me(t);
                var e = t.textAlign;
                "middle" === e && (e = "center"), t.textAlign = null == e || ca[e] ? e : "left";
                var i = t.textVerticalAlign || t.textBaseline;
                "center" === i && (i = "middle"), t.textVerticalAlign = null == i || fa[i] ? i : "top", t.textPadding && (t.textPadding = w(t.textPadding))
            }
        }

        function ke(t, e, i, r, n, a) {
            r.rich ? Se(t, e, i, r, n) : Te(t, e, i, r, n, a)
        }

        function Te(t, e, i, r, n, a) {
            var o = a && a.style,
                s = o && "text" === a.type,
                h = r.font || la;
            s && h === (o.font || la) || (e.font = h);
            var l = t.__computedFont;
            t.__styleFont !== h && (t.__styleFont = h, l = t.__computedFont = e.font);
            var u = r.textPadding,
                c = t.__textCotentBlock;
            c && !t.__dirtyText || (c = t.__textCotentBlock = ve(i, l, u, r.truncate));
            var f = c.outerHeight,
                d = c.lines,
                p = c.lineHeight,
                g = De(f, r, n),
                v = g.baseX,
                _ = g.baseY,
                y = g.textAlign || "left",
                m = g.textVerticalAlign;
            Ce(e, r, n, v, _);
            var x = he(_, f, m),
                w = v,
                b = x,
                k = Pe(r);
            if (k || u) {
                var T = re(i, l);
                u && (T += u[1] + u[3]);
                var S = se(v, T, y);
                k && Le(t, e, r, S, x, T, f), u && (w = Fe(v, y, u), b += u[0])
            }
            e.textAlign = y, e.textBaseline = "middle";
            for (O = 0; O < da.length; O++) {
                var M = da[O],
                    C = M[0],
                    A = M[1],
                    P = r[C];
                s && P === o[C] || (e[A] = Zn(e, A, P || M[2]))
            }
            b += p / 2;
            var L = r.textStrokeWidth,
                z = s ? o.textStrokeWidth : null,
                D = !s || L !== z,
                B = !s || D || r.textStroke !== o.textStroke,
                I = Ie(r.textStroke, L),
                R = Re(r.textFill);
            if (I && (D && (e.lineWidth = L), B && (e.strokeStyle = I)), R && (s && r.textFill === o.textFill && !o.textBackgroundColor || (e.fillStyle = R)), 1 === d.length) I && e.strokeText(d[0], w, b), R && e.fillText(d[0], w, b);
            else
                for (var O = 0; O < d.length; O++) I && e.strokeText(d[O], w, b), R && e.fillText(d[O], w, b), b += p
        }

        function Se(t, e, i, r, n) {
            var a = t.__textCotentBlock;
            a && !t.__dirtyText || (a = t.__textCotentBlock = _e(i, r)), Me(t, e, a, r, n)
        }

        function Me(t, e, i, r, n) {
            var a = i.width,
                o = i.outerWidth,
                s = i.outerHeight,
                h = r.textPadding,
                l = De(s, r, n),
                u = l.baseX,
                c = l.baseY,
                f = l.textAlign,
                d = l.textVerticalAlign;
            Ce(e, r, n, u, c);
            var p = se(u, o, f),
                g = he(c, s, d),
                v = p,
                _ = g;
            h && (v += h[3], _ += h[0]);
            var y = v + a;
            Pe(r) && Le(t, e, r, p, g, o, s);
            for (var m = 0; m < i.lines.length; m++) {
                for (var x, w = i.lines[m], b = w.tokens, k = b.length, T = w.lineHeight, S = w.width, M = 0, C = v, A = y, P = k - 1; M < k && (!(x = b[M]).textAlign || "left" === x.textAlign);) Ae(t, e, x, r, T, _, C, "left"), S -= x.width, C += x.width, M++;
                for (; P >= 0 && "right" === (x = b[P]).textAlign;) Ae(t, e, x, r, T, _, A, "right"), S -= x.width, A -= x.width, P--;
                for (C += (a - (C - v) - (y - A) - S) / 2; M <= P;) Ae(t, e, x = b[M], r, T, _, C + x.width / 2, "center"), C += x.width, M++;
                _ += T
            }
        }

        function Ce(t, e, i, r, n) {
            if (i && e.textRotation) {
                var a = e.textOrigin;
                "center" === a ? (r = i.width / 2 + i.x, n = i.height / 2 + i.y) : a && (r = a[0] + i.x, n = a[1] + i.y), t.translate(r, n), t.rotate(-e.textRotation), t.translate(-r, -n)
            }
        }

        function Ae(t, e, i, r, n, a, o, s) {
            var h = r.rich[i.styleName] || {};
            h.text = i.text;
            var l = i.textVerticalAlign,
                u = a + n / 2;
            "top" === l ? u = a + i.height / 2 : "bottom" === l && (u = a + n - i.height / 2), !i.isLineHolder && Pe(h) && Le(t, e, h, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, u - i.height / 2, i.width, i.height);
            var c = i.textPadding;
            c && (o = Fe(o, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), Be(e, "shadowBlur", x(h.textShadowBlur, r.textShadowBlur, 0)), Be(e, "shadowColor", h.textShadowColor || r.textShadowColor || "transparent"), Be(e, "shadowOffsetX", x(h.textShadowOffsetX, r.textShadowOffsetX, 0)), Be(e, "shadowOffsetY", x(h.textShadowOffsetY, r.textShadowOffsetY, 0)), Be(e, "textAlign", s), Be(e, "textBaseline", "middle"), Be(e, "font", i.font || la);
            var f = Ie(h.textStroke || r.textStroke, p),
                d = Re(h.textFill || r.textFill),
                p = m(h.textStrokeWidth, r.textStrokeWidth);
            f && (Be(e, "lineWidth", p), Be(e, "strokeStyle", f), e.strokeText(i.text, o, u)), d && (Be(e, "fillStyle", d), e.fillText(i.text, o, u))
        }

        function Pe(t) {
            return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
        }

        function Le(t, e, i, r, n, a, o) {
            var s = i.textBackgroundColor,
                h = i.textBorderWidth,
                l = i.textBorderColor,
                u = g(s);
            if (Be(e, "shadowBlur", i.textBoxShadowBlur || 0), Be(e, "shadowColor", i.textBoxShadowColor || "transparent"), Be(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), Be(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || h && l) {
                e.beginPath();
                var c = i.textBorderRadius;
                c ? xe(e, {
                    x: r,
                    y: n,
                    width: a,
                    height: o,
                    r: c
                }) : e.rect(r, n, a, o), e.closePath()
            }
            if (u)
                if (Be(e, "fillStyle", s), null != i.fillOpacity) {
                    d = e.globalAlpha;
                    e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = d
                } else e.fill();
            else if (p(s)) Be(e, "fillStyle", s(i)), e.fill();
            else if (v(s)) {
                var f = s.image;
                (f = te(f, null, t, ze, s)) && ie(f) && e.drawImage(f, r, n, a, o)
            }
            if (h && l)
                if (Be(e, "lineWidth", h), Be(e, "strokeStyle", l), null != i.strokeOpacity) {
                    var d = e.globalAlpha;
                    e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = d
                } else e.stroke()
        }

        function ze(t, e) {
            e.image = t
        }

        function De(t, e, i) {
            var r = e.x || 0,
                n = e.y || 0,
                a = e.textAlign,
                o = e.textVerticalAlign;
            if (i) {
                var s = e.textPosition;
                if (s instanceof Array) r = i.x + Oe(s[0], i.width), n = i.y + Oe(s[1], i.height);
                else {
                    var h = le(s, i, e.textDistance);
                    r = h.x, n = h.y, a = a || h.textAlign, o = o || h.textVerticalAlign
                }
                var l = e.textOffset;
                l && (r += l[0], n += l[1])
            }
            return {
                baseX: r,
                baseY: n,
                textAlign: a,
                textVerticalAlign: o
            }
        }

        function Be(t, e, i) {
            return t[e] = Zn(t, e, i), t[e]
        }

        function Ie(t, e) {
            return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }

        function Re(t) {
            return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }

        function Oe(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        function Fe(t, e, i) {
            return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
        }

        function Ee(t, e) {
            return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
        }

        function He(t) {
            t = t || {}, Wn.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new $n(t.style, this), this._rect = null, this.__clipPaths = []
        }

        function We(t) {
            He.call(this, t)
        }

        function Ne(t) {
            return parseInt(t, 10)
        }

        function Ve(t) {
            return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
        }

        function qe(t, e, i) {
            return va.copy(t.getBoundingRect()), t.transform && va.applyTransform(t.transform), _a.width = e, _a.height = i, !va.intersect(_a)
        }

        function je(t, e) {
            if (t == e) return !1;
            if (!t || !e || t.length !== e.length) return !0;
            for (var i = 0; i < t.length; i++)
                if (t[i] !== e[i]) return !0
        }

        function Xe(t, e) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.setTransform(e), e.beginPath(), r.buildPath(e, r.shape), e.clip(), r.restoreTransform(e)
            }
        }

        function Ye(t, e) {
            var i = document.createElement("div");
            return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
        }

        function Ue(t) {
            var e = t[1][0] - t[0][0],
                i = t[1][1] - t[0][1];
            return Math.sqrt(e * e + i * i)
        }

        function Ge(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        function Ze(t) {
            return "mousewheel" === t && Or.browser.firefox ? "DOMMouseScroll" : t
        }

        function Qe(t, e, i) {
            var r = t._gestureMgr;
            "start" === i && r.clear();
            var n = r.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
            if ("end" === i && r.clear(), n) {
                var a = n.type;
                e.gestureEvent = a, t.handler.dispatchToElement({
                    target: n.target
                }, a, n.event)
            }
        }

        function $e(t) {
            t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                t._touching = !1
            }, 700)
        }

        function Ke(t) {
            var e = t.pointerType;
            return "pen" === e || "touch" === e
        }

        function Je(t) {
            function e(t, e) {
                return function () {
                    if (!e._touching) return t.apply(e, arguments)
                }
            }
            u(ka, function (e) {
                t._handlers[e] = f(Ma[e], t)
            }), u(Sa, function (e) {
                t._handlers[e] = f(Ma[e], t)
            }), u(ba, function (i) {
                t._handlers[i] = e(Ma[i], t)
            })
        }

        function ti(t) {
            function e(e, i) {
                u(e, function (e) {
                    X(t, Ze(e), i._handlers[e])
                }, i)
            }
            an.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new xa, this._handlers = {}, Je(this), Or.pointerEventsSupported ? e(Sa, this) : (Or.touchEventsSupported && e(ka, this), e(ba, this))
        }

        function ei(t, e) {
            Pa[t] = e
        }

        function ii(t) {
            delete La[t]
        }

        function ri(t) {
            return t > -Ia && t < Ia
        }

        function ni(t) {
            return t > Ia || t < -Ia
        }

        function ai(t, e, i, r, n) {
            var a = 1 - n;
            return a * a * (a * t + 3 * n * e) + n * n * (n * r + 3 * a * i)
        }

        function oi(t, e, i, r, n) {
            var a = 1 - n;
            return 3 * (((e - t) * a + 2 * (i - e) * n) * a + (r - i) * n * n)
        }

        function si(t, e, i, r, n, a) {
            var o = r + 3 * (e - i) - t,
                s = 3 * (i - 2 * e + t),
                h = 3 * (e - t),
                l = t - n,
                u = s * s - 3 * o * h,
                c = s * h - 9 * o * l,
                f = h * h - 3 * s * l,
                d = 0;
            if (ri(u) && ri(c)) ri(s) ? a[0] = 0 : (T = -h / s) >= 0 && T <= 1 && (a[d++] = T);
            else {
                var p = c * c - 4 * u * f;
                if (ri(p)) {
                    var g = c / u,
                        v = -g / 2;
                    (T = -s / o + g) >= 0 && T <= 1 && (a[d++] = T), v >= 0 && v <= 1 && (a[d++] = v)
                } else if (p > 0) {
                    var _ = Ba(p),
                        y = u * s + 1.5 * o * (-c + _),
                        m = u * s + 1.5 * o * (-c - _);
                    (T = (-s - ((y = y < 0 ? -Da(-y, Fa) : Da(y, Fa)) + (m = m < 0 ? -Da(-m, Fa) : Da(m, Fa)))) / (3 * o)) >= 0 && T <= 1 && (a[d++] = T)
                } else {
                    var x = (2 * u * s - 3 * o * c) / (2 * Ba(u * u * u)),
                        w = Math.acos(x) / 3,
                        b = Ba(u),
                        k = Math.cos(w),
                        T = (-s - 2 * b * k) / (3 * o),
                        v = (-s + b * (k + Oa * Math.sin(w))) / (3 * o),
                        S = (-s + b * (k - Oa * Math.sin(w))) / (3 * o);
                    T >= 0 && T <= 1 && (a[d++] = T), v >= 0 && v <= 1 && (a[d++] = v), S >= 0 && S <= 1 && (a[d++] = S)
                }
            }
            return d
        }

        function hi(t, e, i, r, n) {
            var a = 6 * i - 12 * e + 6 * t,
                o = 9 * e + 3 * r - 3 * t - 9 * i,
                s = 3 * e - 3 * t,
                h = 0;
            if (ri(o)) ni(a) && (c = -s / a) >= 0 && c <= 1 && (n[h++] = c);
            else {
                var l = a * a - 4 * o * s;
                if (ri(l)) n[0] = -a / (2 * o);
                else if (l > 0) {
                    var u = Ba(l),
                        c = (-a + u) / (2 * o),
                        f = (-a - u) / (2 * o);
                    c >= 0 && c <= 1 && (n[h++] = c), f >= 0 && f <= 1 && (n[h++] = f)
                }
            }
            return h
        }

        function li(t, e, i, r, n, a) {
            var o = (e - t) * n + t,
                s = (i - e) * n + e,
                h = (r - i) * n + i,
                l = (s - o) * n + o,
                u = (h - s) * n + s,
                c = (u - l) * n + l;
            a[0] = t, a[1] = o, a[2] = l, a[3] = c, a[4] = c, a[5] = u, a[6] = h, a[7] = r
        }

        function ui(t, e, i, r, n, a, o, s, h, l, u) {
            var c, f, d, p, g, v = .005,
                _ = 1 / 0;
            Ea[0] = h, Ea[1] = l;
            for (var y = 0; y < 1; y += .05) Ha[0] = ai(t, i, n, o, y), Ha[1] = ai(e, r, a, s, y), (p = en(Ea, Ha)) < _ && (c = y, _ = p);
            _ = 1 / 0;
            for (var m = 0; m < 32 && !(v < Ra); m++) f = c - v, d = c + v, Ha[0] = ai(t, i, n, o, f), Ha[1] = ai(e, r, a, s, f), p = en(Ha, Ea), f >= 0 && p < _ ? (c = f, _ = p) : (Wa[0] = ai(t, i, n, o, d), Wa[1] = ai(e, r, a, s, d), g = en(Wa, Ea), d <= 1 && g < _ ? (c = d, _ = g) : v *= .5);
            return u && (u[0] = ai(t, i, n, o, c), u[1] = ai(e, r, a, s, c)), Ba(_)
        }

        function ci(t, e, i, r) {
            var n = 1 - r;
            return n * (n * t + 2 * r * e) + r * r * i
        }

        function fi(t, e, i, r) {
            return 2 * ((1 - r) * (e - t) + r * (i - e))
        }

        function di(t, e, i, r, n) {
            var a = t - 2 * e + i,
                o = 2 * (e - t),
                s = t - r,
                h = 0;
            if (ri(a)) ni(o) && (c = -s / o) >= 0 && c <= 1 && (n[h++] = c);
            else {
                var l = o * o - 4 * a * s;
                if (ri(l))(c = -o / (2 * a)) >= 0 && c <= 1 && (n[h++] = c);
                else if (l > 0) {
                    var u = Ba(l),
                        c = (-o + u) / (2 * a),
                        f = (-o - u) / (2 * a);
                    c >= 0 && c <= 1 && (n[h++] = c), f >= 0 && f <= 1 && (n[h++] = f)
                }
            }
            return h
        }

        function pi(t, e, i) {
            var r = t + i - 2 * e;
            return 0 === r ? .5 : (t - e) / r
        }

        function gi(t, e, i, r, n) {
            var a = (e - t) * r + t,
                o = (i - e) * r + e,
                s = (o - a) * r + a;
            n[0] = t, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = i
        }

        function vi(t, e, i, r, n, a, o, s, h) {
            var l, u = .005,
                c = 1 / 0;
            Ea[0] = o, Ea[1] = s;
            for (var f = 0; f < 1; f += .05) Ha[0] = ci(t, i, n, f), Ha[1] = ci(e, r, a, f), (v = en(Ea, Ha)) < c && (l = f, c = v);
            c = 1 / 0;
            for (var d = 0; d < 32 && !(u < Ra); d++) {
                var p = l - u,
                    g = l + u;
                Ha[0] = ci(t, i, n, p), Ha[1] = ci(e, r, a, p);
                var v = en(Ha, Ea);
                if (p >= 0 && v < c) l = p, c = v;
                else {
                    Wa[0] = ci(t, i, n, g), Wa[1] = ci(e, r, a, g);
                    var _ = en(Wa, Ea);
                    g <= 1 && _ < c ? (l = g, c = _) : u *= .5
                }
            }
            return h && (h[0] = ci(t, i, n, l), h[1] = ci(e, r, a, l)), Ba(c)
        }

        function _i(t, e, i, r, n, a) {
            n[0] = Na(t, i), n[1] = Na(e, r), a[0] = Va(t, i), a[1] = Va(e, r)
        }

        function yi(t, e, i, r, n, a, o, s, h, l) {
            var u, c = hi,
                f = ai,
                d = c(t, i, n, o, Za);
            for (h[0] = 1 / 0, h[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0, u = 0; u < d; u++) {
                var p = f(t, i, n, o, Za[u]);
                h[0] = Na(p, h[0]), l[0] = Va(p, l[0])
            }
            for (d = c(e, r, a, s, Qa), u = 0; u < d; u++) {
                var g = f(e, r, a, s, Qa[u]);
                h[1] = Na(g, h[1]), l[1] = Va(g, l[1])
            }
            h[0] = Na(t, h[0]), l[0] = Va(t, l[0]), h[0] = Na(o, h[0]), l[0] = Va(o, l[0]), h[1] = Na(e, h[1]), l[1] = Va(e, l[1]), h[1] = Na(s, h[1]), l[1] = Va(s, l[1])
        }

        function mi(t, e, i, r, n, a, o, s) {
            var h = pi,
                l = ci,
                u = Va(Na(h(t, i, n), 1), 0),
                c = Va(Na(h(e, r, a), 1), 0),
                f = l(t, i, n, u),
                d = l(e, r, a, c);
            o[0] = Na(t, n, f), o[1] = Na(e, a, d), s[0] = Va(t, n, f), s[1] = Va(e, a, d)
        }

        function xi(t, e, i, r, n, a, o, s, h) {
            var l = O,
                u = F,
                c = Math.abs(n - a);
            if (c % Xa < 1e-4 && c > 1e-4) return s[0] = t - i, s[1] = e - r, h[0] = t + i, void(h[1] = e + r);
            if (Ya[0] = ja(n) * i + t, Ya[1] = qa(n) * r + e, Ua[0] = ja(a) * i + t, Ua[1] = qa(a) * r + e, l(s, Ya, Ua), u(h, Ya, Ua), (n %= Xa) < 0 && (n += Xa), (a %= Xa) < 0 && (a += Xa), n > a && !o ? a += Xa : n < a && o && (n += Xa), o) {
                var f = a;
                a = n, n = f
            }
            for (var d = 0; d < a; d += Math.PI / 2) d > n && (Ga[0] = ja(d) * i + t, Ga[1] = qa(d) * r + e, l(s, Ga, s), u(h, Ga, h))
        }

        function wi(t, e, i, r, n, a, o) {
            if (0 === n) return !1;
            var s = n,
                h = 0,
                l = t;
            if (o > e + s && o > r + s || o < e - s && o < r - s || a > t + s && a > i + s || a < t - s && a < i - s) return !1;
            if (t === i) return Math.abs(a - t) <= s / 2;
            var u = (h = (e - r) / (t - i)) * a - o + (l = (t * r - i * e) / (t - i));
            return u * u / (h * h + 1) <= s / 2 * s / 2
        }

        function bi(t, e, i, r, n, a, o, s, h, l, u) {
            if (0 === h) return !1;
            var c = h;
            return !(u > e + c && u > r + c && u > a + c && u > s + c || u < e - c && u < r - c && u < a - c && u < s - c || l > t + c && l > i + c && l > n + c && l > o + c || l < t - c && l < i - c && l < n - c && l < o - c) && ui(t, e, i, r, n, a, o, s, l, u, null) <= c / 2
        }

        function ki(t, e, i, r, n, a, o, s, h) {
            if (0 === o) return !1;
            var l = o;
            return !(h > e + l && h > r + l && h > a + l || h < e - l && h < r - l && h < a - l || s > t + l && s > i + l && s > n + l || s < t - l && s < i - l && s < n - l) && vi(t, e, i, r, n, a, s, h, null) <= l / 2
        }

        function Ti(t) {
            return (t %= uo) < 0 && (t += uo), t
        }

        function Si(t, e, i, r, n, a, o, s, h) {
            if (0 === o) return !1;
            var l = o;
            s -= t, h -= e;
            var u = Math.sqrt(s * s + h * h);
            if (u - l > i || u + l < i) return !1;
            if (Math.abs(r - n) % co < 1e-4) return !0;
            if (a) {
                var c = r;
                r = Ti(n), n = Ti(c)
            } else r = Ti(r), n = Ti(n);
            r > n && (n += co);
            var f = Math.atan2(h, s);
            return f < 0 && (f += co), f >= r && f <= n || f + co >= r && f + co <= n
        }

        function Mi(t, e, i, r, n, a) {
            if (a > e && a > r || a < e && a < r) return 0;
            if (r === e) return 0;
            var o = r < e ? 1 : -1,
                s = (a - e) / (r - e);
            1 !== s && 0 !== s || (o = r < e ? .5 : -.5);
            var h = s * (i - t) + t;
            return h === n ? 1 / 0 : h > n ? o : 0
        }

        function Ci(t, e) {
            return Math.abs(t - e) < go
        }

        function Ai() {
            var t = _o[0];
            _o[0] = _o[1], _o[1] = t
        }

        function Pi(t, e, i, r, n, a, o, s, h, l) {
            if (l > e && l > r && l > a && l > s || l < e && l < r && l < a && l < s) return 0;
            var u = si(e, r, a, s, l, vo);
            if (0 === u) return 0;
            for (var c, f, d = 0, p = -1, g = 0; g < u; g++) {
                var v = vo[g],
                    _ = 0 === v || 1 === v ? .5 : 1;
                ai(t, i, n, o, v) < h || (p < 0 && (p = hi(e, r, a, s, _o), _o[1] < _o[0] && p > 1 && Ai(), c = ai(e, r, a, s, _o[0]), p > 1 && (f = ai(e, r, a, s, _o[1]))), 2 == p ? v < _o[0] ? d += c < e ? _ : -_ : v < _o[1] ? d += f < c ? _ : -_ : d += s < f ? _ : -_ : v < _o[0] ? d += c < e ? _ : -_ : d += s < c ? _ : -_)
            }
            return d
        }

        function Li(t, e, i, r, n, a, o, s) {
            if (s > e && s > r && s > a || s < e && s < r && s < a) return 0;
            var h = di(e, r, a, s, vo);
            if (0 === h) return 0;
            var l = pi(e, r, a);
            if (l >= 0 && l <= 1) {
                for (var u = 0, c = ci(e, r, a, l), f = 0; f < h; f++) {
                    d = 0 === vo[f] || 1 === vo[f] ? .5 : 1;
                    (p = ci(t, i, n, vo[f])) < o || (vo[f] < l ? u += c < e ? d : -d : u += a < c ? d : -d)
                }
                return u
            }
            var d = 0 === vo[0] || 1 === vo[0] ? .5 : 1,
                p = ci(t, i, n, vo[0]);
            return p < o ? 0 : a < e ? d : -d
        }

        function zi(t, e, i, r, n, a, o, s) {
            if ((s -= e) > i || s < -i) return 0;
            l = Math.sqrt(i * i - s * s);
            vo[0] = -l, vo[1] = l;
            var h = Math.abs(r - n);
            if (h < 1e-4) return 0;
            if (h % po < 1e-4) {
                r = 0, n = po;
                p = a ? 1 : -1;
                return o >= vo[0] + t && o <= vo[1] + t ? p : 0
            }
            if (a) {
                var l = r;
                r = Ti(n), n = Ti(l)
            } else r = Ti(r), n = Ti(n);
            r > n && (n += po);
            for (var u = 0, c = 0; c < 2; c++) {
                var f = vo[c];
                if (f + t > o) {
                    var d = Math.atan2(s, f),
                        p = a ? 1 : -1;
                    d < 0 && (d = po + d), (d >= r && d <= n || d + po >= r && d + po <= n) && (d > Math.PI / 2 && d < 1.5 * Math.PI && (p = -p), u += p)
                }
            }
            return u
        }

        function Di(t, e, i, r, n) {
            for (var a = 0, o = 0, s = 0, h = 0, l = 0, u = 0; u < t.length;) {
                var c = t[u++];
                switch (c === fo.M && u > 1 && (i || (a += Mi(o, s, h, l, r, n))), 1 == u && (h = o = t[u], l = s = t[u + 1]), c) {
                    case fo.M:
                        o = h = t[u++], s = l = t[u++];
                        break;
                    case fo.L:
                        if (i) {
                            if (wi(o, s, t[u], t[u + 1], e, r, n)) return !0
                        } else a += Mi(o, s, t[u], t[u + 1], r, n) || 0;
                        o = t[u++], s = t[u++];
                        break;
                    case fo.C:
                        if (i) {
                            if (bi(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, r, n)) return !0
                        } else a += Pi(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], r, n) || 0;
                        o = t[u++], s = t[u++];
                        break;
                    case fo.Q:
                        if (i) {
                            if (ki(o, s, t[u++], t[u++], t[u], t[u + 1], e, r, n)) return !0
                        } else a += Li(o, s, t[u++], t[u++], t[u], t[u + 1], r, n) || 0;
                        o = t[u++], s = t[u++];
                        break;
                    case fo.A:
                        var f = t[u++],
                            d = t[u++],
                            p = t[u++],
                            g = t[u++],
                            v = t[u++],
                            _ = t[u++],
                            y = (t[u++], 1 - t[u++]),
                            m = Math.cos(v) * p + f,
                            x = Math.sin(v) * g + d;
                        u > 1 ? a += Mi(o, s, m, x, r, n) : (h = m, l = x);
                        var w = (r - f) * g / p + f;
                        if (i) {
                            if (Si(f, d, g, v, v + _, y, e, w, n)) return !0
                        } else a += zi(f, d, g, v, v + _, y, w, n);
                        o = Math.cos(v + _) * p + f, s = Math.sin(v + _) * g + d;
                        break;
                    case fo.R:
                        h = o = t[u++], l = s = t[u++];
                        var m = h + t[u++],
                            x = l + t[u++];
                        if (i) {
                            if (wi(h, l, m, l, e, r, n) || wi(m, l, m, x, e, r, n) || wi(m, x, h, x, e, r, n) || wi(h, x, h, l, e, r, n)) return !0
                        } else a += Mi(m, l, m, x, r, n), a += Mi(h, x, h, l, r, n);
                        break;
                    case fo.Z:
                        if (i) {
                            if (wi(o, s, h, l, e, r, n)) return !0
                        } else a += Mi(o, s, h, l, r, n);
                        o = h, s = l
                }
            }
            return i || Ci(s, l) || (a += Mi(o, s, h, l, r, n) || 0), 0 !== a
        }

        function Bi(t, e, i) {
            return Di(t, 0, !1, e, i)
        }

        function Ii(t, e, i, r) {
            return Di(t, e, !0, i, r)
        }

        function Ri(t) {
            He.call(this, t), this.path = null
        }

        function Oi(t, e, i, r, n, a, o, s, h, l, u) {
            var c = h * (Po / 180),
                f = Ao(c) * (t - i) / 2 + Co(c) * (e - r) / 2,
                d = -1 * Co(c) * (t - i) / 2 + Ao(c) * (e - r) / 2,
                p = f * f / (o * o) + d * d / (s * s);
            p > 1 && (o *= Mo(p), s *= Mo(p));
            var g = (n === a ? -1 : 1) * Mo((o * o * (s * s) - o * o * (d * d) - s * s * (f * f)) / (o * o * (d * d) + s * s * (f * f))) || 0,
                v = g * o * d / s,
                _ = g * -s * f / o,
                y = (t + i) / 2 + Ao(c) * v - Co(c) * _,
                m = (e + r) / 2 + Co(c) * v + Ao(c) * _,
                x = Do([1, 0], [(f - v) / o, (d - _) / s]),
                w = [(f - v) / o, (d - _) / s],
                b = [(-1 * f - v) / o, (-1 * d - _) / s],
                k = Do(w, b);
            zo(w, b) <= -1 && (k = Po), zo(w, b) >= 1 && (k = 0), 0 === a && k > 0 && (k -= 2 * Po), 1 === a && k < 0 && (k += 2 * Po), u.addData(l, y, m, o, s, x, k, c, a)
        }

        function Fi(t) {
            if (!t) return new lo;
            for (var e, i = 0, r = 0, n = i, a = r, o = new lo, s = lo.CMD, h = t.match(Bo), l = 0; l < h.length; l++) {
                for (var u, c = h[l], f = c.charAt(0), d = c.match(Io) || [], p = d.length, g = 0; g < p; g++) d[g] = parseFloat(d[g]);
                for (var v = 0; v < p;) {
                    var _, y, m, x, w, b, k, T = i,
                        S = r;
                    switch (f) {
                        case "l":
                            i += d[v++], r += d[v++], u = s.L, o.addData(u, i, r);
                            break;
                        case "L":
                            i = d[v++], r = d[v++], u = s.L, o.addData(u, i, r);
                            break;
                        case "m":
                            i += d[v++], r += d[v++], u = s.M, o.addData(u, i, r), n = i, a = r, f = "l";
                            break;
                        case "M":
                            i = d[v++], r = d[v++], u = s.M, o.addData(u, i, r), n = i, a = r, f = "L";
                            break;
                        case "h":
                            i += d[v++], u = s.L, o.addData(u, i, r);
                            break;
                        case "H":
                            i = d[v++], u = s.L, o.addData(u, i, r);
                            break;
                        case "v":
                            r += d[v++], u = s.L, o.addData(u, i, r);
                            break;
                        case "V":
                            r = d[v++], u = s.L, o.addData(u, i, r);
                            break;
                        case "C":
                            u = s.C, o.addData(u, d[v++], d[v++], d[v++], d[v++], d[v++], d[v++]), i = d[v - 2], r = d[v - 1];
                            break;
                        case "c":
                            u = s.C, o.addData(u, d[v++] + i, d[v++] + r, d[v++] + i, d[v++] + r, d[v++] + i, d[v++] + r), i += d[v - 2], r += d[v - 1];
                            break;
                        case "S":
                            _ = i, y = r;
                            var M = o.len(),
                                C = o.data;
                            e === s.C && (_ += i - C[M - 4], y += r - C[M - 3]), u = s.C, T = d[v++], S = d[v++], i = d[v++], r = d[v++], o.addData(u, _, y, T, S, i, r);
                            break;
                        case "s":
                            _ = i, y = r;
                            var M = o.len(),
                                C = o.data;
                            e === s.C && (_ += i - C[M - 4], y += r - C[M - 3]), u = s.C, T = i + d[v++], S = r + d[v++], i += d[v++], r += d[v++], o.addData(u, _, y, T, S, i, r);
                            break;
                        case "Q":
                            T = d[v++], S = d[v++], i = d[v++], r = d[v++], u = s.Q, o.addData(u, T, S, i, r);
                            break;
                        case "q":
                            T = d[v++] + i, S = d[v++] + r, i += d[v++], r += d[v++], u = s.Q, o.addData(u, T, S, i, r);
                            break;
                        case "T":
                            _ = i, y = r;
                            var M = o.len(),
                                C = o.data;
                            e === s.Q && (_ += i - C[M - 4], y += r - C[M - 3]), i = d[v++], r = d[v++], u = s.Q, o.addData(u, _, y, i, r);
                            break;
                        case "t":
                            _ = i, y = r;
                            var M = o.len(),
                                C = o.data;
                            e === s.Q && (_ += i - C[M - 4], y += r - C[M - 3]), i += d[v++], r += d[v++], u = s.Q, o.addData(u, _, y, i, r);
                            break;
                        case "A":
                            m = d[v++], x = d[v++], w = d[v++], b = d[v++], k = d[v++], Oi(T = i, S = r, i = d[v++], r = d[v++], b, k, m, x, w, u = s.A, o);
                            break;
                        case "a":
                            m = d[v++], x = d[v++], w = d[v++], b = d[v++], k = d[v++], Oi(T = i, S = r, i += d[v++], r += d[v++], b, k, m, x, w, u = s.A, o)
                    }
                }
                "z" !== f && "Z" !== f || (u = s.Z, o.addData(u), i = n, r = a), e = u
            }
            return o.toStatic(), o
        }

        function Ei(t, e) {
            var i = Fi(t);
            return e = e || {}, e.buildPath = function (t) {
                if (t.setData) t.setData(i.data), (e = t.getContext()) && t.rebuildPath(e);
                else {
                    var e = t;
                    i.rebuildPath(e)
                }
            }, e.applyTransform = function (t) {
                So(i, t), this.dirty(!0)
            }, e
        }

        function Hi(t, e) {
            return new Ri(Ei(t, e))
        }

        function Wi(t, e, i, r, n, a, o) {
            var s = .5 * (i - t),
                h = .5 * (r - e);
            return (2 * (e - i) + s + h) * o + (-3 * (e - i) - 2 * s - h) * a + s * n + e
        }

        function Ni(t, e, i) {
            var r = e.points,
                n = e.smooth;
            if (r && r.length >= 2) {
                if (n && "spline" !== n) {
                    var a = Vo(r, n, i, e.smoothConstraint);
                    t.moveTo(r[0][0], r[0][1]);
                    for (var o = r.length, s = 0; s < (i ? o : o - 1); s++) {
                        var h = a[2 * s],
                            l = a[2 * s + 1],
                            u = r[(s + 1) % o];
                        t.bezierCurveTo(h[0], h[1], l[0], l[1], u[0], u[1])
                    }
                } else {
                    "spline" === n && (r = No(r, i)), t.moveTo(r[0][0], r[0][1]);
                    for (var s = 1, c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1])
                }
                i && t.closePath()
            }
        }

        function Vi(t) {
            for (g(t) && (t = (new DOMParser).parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild);
                "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
            return t
        }

        function qi() {
            this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
        }

        function ji(t, e) {
            for (var i = t.firstChild; i;) {
                if (1 === i.nodeType) {
                    var r = i.getAttribute("offset");
                    r = r.indexOf("%") > 0 ? parseInt(r, 10) / 100 : r ? parseFloat(r) : 0;
                    var n = i.getAttribute("stop-color") || "#000000";
                    e.addColorStop(r, n)
                }
                i = i.nextSibling
            }
        }

        function Xi(t, e) {
            t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), n(e.__inheritedStyle, t.__inheritedStyle))
        }

        function Yi(t) {
            for (var e = b(t).split(Uo), i = [], r = 0; r < e.length; r += 2) {
                var n = parseFloat(e[r]),
                    a = parseFloat(e[r + 1]);
                i.push([n, a])
            }
            return i
        }

        function Ui(t, e, i, n) {
            var a = e.__inheritedStyle || {},
                o = "text" === e.type;
            if (1 === t.nodeType && (Zi(t, e), r(a, Qi(t)), !n))
                for (var s in Qo)
                    if (Qo.hasOwnProperty(s)) {
                        var h = t.getAttribute(s);
                        null != h && (a[Qo[s]] = h)
                    } var l = o ? "textFill" : "fill",
                c = o ? "textStroke" : "stroke";
            e.style = e.style || new $n;
            var f = e.style;
            null != a.fill && f.set(l, Gi(a.fill, i)), null != a.stroke && f.set(c, Gi(a.stroke, i)), u(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
                var e = "lineWidth" === t && o ? "textStrokeWidth" : t;
                null != a[t] && f.set(e, parseFloat(a[t]))
            }), a.textBaseline && "auto" !== a.textBaseline || (a.textBaseline = "alphabetic"), "alphabetic" === a.textBaseline && (a.textBaseline = "bottom"), "start" === a.textAlign && (a.textAlign = "left"), "end" === a.textAlign && (a.textAlign = "right"), u(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
                null != a[t] && f.set(t, a[t])
            }), a.lineDash && (e.style.lineDash = b(a.lineDash).split(Uo)), f[c] && "none" !== f[c] && (e[c] = !0), e.__inheritedStyle = a
        }

        function Gi(t, e) {
            var i = e && t && t.match($o);
            return i ? e[b(i[1])] : t
        }

        function Zi(t, e) {
            var i = t.getAttribute("transform");
            if (i) {
                var r = null,
                    n = [];
                (i = i.replace(/,/g, " ")).replace(Ko, function (t, e, i) {
                    n.push(e, i)
                });
                for (var a = n.length - 1; a > 0; a -= 2) {
                    var o = n[a],
                        s = n[a - 1];
                    switch (r = r || $(), s) {
                        case "translate":
                            o = b(o).split(Uo), et(r, r, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                            break;
                        case "scale":
                            o = b(o).split(Uo), rt(r, r, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                            break;
                        case "rotate":
                            o = b(o).split(Uo), it(r, r, parseFloat(o[0]));
                            break;
                        case "skew":
                            o = b(o).split(Uo), console.warn("Skew transform is not supported yet");
                            break;
                        case "matrix":
                            o = b(o).split(Uo);
                            r[0] = parseFloat(o[0]), r[1] = parseFloat(o[1]), r[2] = parseFloat(o[2]), r[3] = parseFloat(o[3]), r[4] = parseFloat(o[4]), r[5] = parseFloat(o[5])
                    }
                }
            }
            e.setLocalTransform(r)
        }

        function Qi(t) {
            var e = t.getAttribute("style"),
                i = {};
            if (!e) return i;
            var r = {};
            Jo.lastIndex = 0;
            for (var n; null != (n = Jo.exec(e));) r[n[1]] = n[2];
            for (var a in Qo) Qo.hasOwnProperty(a) && null != r[a] && (i[Qo[a]] = r[a]);
            return i
        }

        function $i(t, e, i) {
            var r = e / t.width,
                n = i / t.height,
                a = Math.min(r, n);
            return {
                scale: [a, a],
                position: [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2]
            }
        }

        function Ki(t) {
            He.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
        }

        function Ji(t, e, i) {
            var r = t.cpx2,
                n = t.cpy2;
            return null === r || null === n ? [(i ? oi : ai)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? oi : ai)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? fi : ci)(t.x1, t.cpx1, t.x2, e), (i ? fi : ci)(t.y1, t.cpy1, t.y2, e)]
        }

        function tr(t) {
            return document.createElementNS(Ms, t)
        }

        function er(t) {
            return Ls(1e4 * t) / 1e4
        }

        function ir(t) {
            return t < Os && t > -Os
        }

        function rr(t, e) {
            var i = e ? t.textFill : t.fill;
            return null != i && i !== Ps
        }

        function nr(t, e) {
            var i = e ? t.textStroke : t.stroke;
            return null != i && i !== Ps
        }

        function ar(t, e) {
            e && or(t, "transform", "matrix(" + As.call(e, ",") + ")")
        }

        function or(t, e, i) {
            (!i || "linear" !== i.type && "radial" !== i.type) && ("string" == typeof i && i.indexOf("NaN") > -1 && console.log(i), t.setAttribute(e, i))
        }

        function sr(t, e, i) {
            t.setAttributeNS("http://www.w3.org/1999/xlink", e, i)
        }

        function hr(t, e, i, r) {
            if (rr(e, i)) {
                var n = i ? e.textFill : e.fill;
                n = "transparent" === n ? Ps : n, "none" !== t.getAttribute("clip-path") && n === Ps && (n = "rgba(0, 0, 0, 0.002)"), or(t, "fill", n), or(t, "fill-opacity", null != e.fillOpacity ? e.fillOpacity * e.opacity : e.opacity)
            } else or(t, "fill", Ps);
            if (nr(e, i)) {
                var a = i ? e.textStroke : e.stroke;
                or(t, "stroke", a = "transparent" === a ? Ps : a), or(t, "stroke-width", (i ? e.textStrokeWidth : e.lineWidth) / (!i && e.strokeNoScale ? r.getLineScale() : 1)), or(t, "paint-order", i ? "stroke" : "fill"), or(t, "stroke-opacity", null != e.strokeOpacity ? e.strokeOpacity : e.opacity), e.lineDash ? (or(t, "stroke-dasharray", e.lineDash.join(",")), or(t, "stroke-dashoffset", Ls(e.lineDashOffset || 0))) : or(t, "stroke-dasharray", ""), e.lineCap && or(t, "stroke-linecap", e.lineCap), e.lineJoin && or(t, "stroke-linejoin", e.lineJoin), e.miterLimit && or(t, "stroke-miterlimit", e.miterLimit)
            } else or(t, "stroke", Ps)
        }

        function lr(t) {
            for (var e = [], i = t.data, r = t.len(), n = 0; n < r;) {
                var a = "",
                    o = 0;
                switch (i[n++]) {
                    case Cs.M:
                        a = "M", o = 2;
                        break;
                    case Cs.L:
                        a = "L", o = 2;
                        break;
                    case Cs.Q:
                        a = "Q", o = 4;
                        break;
                    case Cs.C:
                        a = "C", o = 6;
                        break;
                    case Cs.A:
                        var s = i[n++],
                            h = i[n++],
                            l = i[n++],
                            u = i[n++],
                            c = i[n++],
                            f = i[n++],
                            d = i[n++],
                            p = i[n++],
                            g = Math.abs(f),
                            v = ir(g - Is) && !ir(g),
                            _ = !1;
                        _ = g >= Is || !ir(g) && (f > -Bs && f < 0 || f > Bs) == !!p;
                        var y = er(s + l * Ds(c)),
                            m = er(h + u * zs(c));
                        v && (f = p ? Is - 1e-4 : 1e-4 - Is, _ = !0, 9 === n && e.push("M", y, m));
                        var x = er(s + l * Ds(c + f)),
                            w = er(h + u * zs(c + f));
                        e.push("A", er(l), er(u), Ls(d * Rs), +_, +p, x, w);
                        break;
                    case Cs.Z:
                        a = "Z";
                        break;
                    case Cs.R:
                        var x = er(i[n++]),
                            w = er(i[n++]),
                            b = er(i[n++]),
                            k = er(i[n++]);
                        e.push("M", x, w, "L", x + b, w, "L", x + b, w + k, "L", x, w + k, "L", x, w)
                }
                a && e.push(a);
                for (var T = 0; T < o; T++) e.push(er(i[n++]))
            }
            return e.join(" ")
        }

        function ur(t) {
            return "middle" === t ? "middle" : "bottom" === t ? "after-edge" : "hanging"
        }

        function cr() {}

        function fr(t, e, i, r) {
            for (var n = 0, a = e.length, o = 0, s = 0; n < a; n++) {
                var h = e[n];
                if (h.removed) {
                    for (var l = [], u = s; u < s + h.count; u++) l.push(u);
                    h.indices = l, s += h.count
                } else {
                    for (var l = [], u = o; u < o + h.count; u++) l.push(u);
                    h.indices = l, o += h.count, h.added || (s += h.count)
                }
            }
            return e
        }

        function dr(t) {
            return {
                newPos: t.newPos,
                components: t.components.slice(0)
            }
        }

        function pr(t, e, i, r, n) {
            this._zrId = t, this._svgRoot = e, this._tagNames = "string" == typeof i ? [i] : i, this._markLabel = r, this._domName = n || "_dom", this.nextId = 0
        }

        function gr(t, e) {
            pr.call(this, t, e, ["linearGradient", "radialGradient"], "__gradient_in_use__")
        }

        function vr(t, e) {
            pr.call(this, t, e, "clipPath", "__clippath_in_use__")
        }

        function _r(t, e) {
            pr.call(this, t, e, ["filter"], "__filter_in_use__", "_shadowDom")
        }

        function yr(t) {
            return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY || t.textShadowBlur || t.textShadowOffsetX || t.textShadowOffsetY)
        }

        function mr(t) {
            return parseInt(t, 10)
        }

        function xr(t) {
            return t instanceof Ri ? Fs : t instanceof We ? Es : t instanceof Oo ? Hs : Fs
        }

        function wr(t, e) {
            return e && t && e.parentNode !== t
        }

        function br(t, e, i) {
            if (wr(t, e) && i) {
                var r = i.nextSibling;
                r ? t.insertBefore(e, r) : t.appendChild(e)
            }
        }

        function kr(t, e) {
            if (wr(t, e)) {
                var i = t.firstChild;
                i ? t.insertBefore(e, i) : t.appendChild(e)
            }
        }

        function Tr(t, e) {
            e && t && e.parentNode === t && t.removeChild(e)
        }

        function Sr(t) {
            return t.__textSvgEl
        }

        function Mr(t) {
            return t.__svgEl
        }

        function Cr(t) {
            return function () {
                En('In SVG mode painter not support method "' + t + '"')
            }
        }

        function Ar(t) {
            return Xs(t)
        }

        function Pr() {
            if (!Gs && Zs) {
                Gs = !0;
                var t = Zs.styleSheets;
                t.length < 31 ? Zs.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
            }
        }

        function Lr(t) {
            return parseInt(t, 10)
        }

        function zr(t, e) {
            Pr(), this.root = t, this.storage = e;
            var i = document.createElement("div"),
                r = document.createElement("div");
            i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", r.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = r, this._vmlViewport = i, this.resize();
            var n = e.delFromStorage,
                a = e.addToStorage;
            e.delFromStorage = function (t) {
                n.call(e, t), t && t.onRemove && t.onRemove(r)
            }, e.addToStorage = function (t) {
                t.onAdd && t.onAdd(r), a.call(e, t)
            }, this._firstPaint = !0
        }

        function Dr(t) {
            return function () {
                En('In IE8.0 VML mode painter not support method "' + t + '"')
            }
        }
        var Br = 2311,
            Ir = function () {
                return Br++
            },
            Rr = {},
            Or = Rr = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
                browser: {},
                os: {},
                node: !1,
                wxa: !0,
                canvasSupported: !0,
                svgSupported: !1,
                touchEventsSupported: !0,
                domSupported: !1
            } : "undefined" == typeof document && "undefined" != typeof self ? {
                browser: {},
                os: {},
                node: !1,
                worker: !0,
                canvasSupported: !0,
                domSupported: !1
            } : "undefined" == typeof navigator ? {
                browser: {},
                os: {},
                node: !0,
                worker: !1,
                canvasSupported: !0,
                svgSupported: !0,
                domSupported: !1
            } : function (t) {
                var e = {},
                    i = t.match(/Firefox\/([\d.]+)/),
                    r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
                    n = t.match(/Edge\/([\d.]+)/),
                    a = /micromessenger/i.test(t);
                return i && (e.firefox = !0, e.version = i[1]), r && (e.ie = !0, e.version = r[1]), n && (e.edge = !0, e.version = n[1]), a && (e.weChat = !0), {
                    browser: e,
                    os: {},
                    node: !1,
                    canvasSupported: !!document.createElement("canvas").getContext,
                    svgSupported: "undefined" != typeof SVGRect,
                    touchEventsSupported: "ontouchstart" in window && !e.ie && !e.edge,
                    pointerEventsSupported: "onpointerdown" in window && (e.edge || e.ie && e.version >= 11),
                    domSupported: "undefined" != typeof document
                }
            }(navigator.userAgent),
            Fr = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1,
                "[object Canvas]": 1
            },
            Er = {
                "[object Int8Array]": 1,
                "[object Uint8Array]": 1,
                "[object Uint8ClampedArray]": 1,
                "[object Int16Array]": 1,
                "[object Uint16Array]": 1,
                "[object Int32Array]": 1,
                "[object Uint32Array]": 1,
                "[object Float32Array]": 1,
                "[object Float64Array]": 1
            },
            Hr = Object.prototype.toString,
            Wr = Array.prototype,
            Nr = Wr.forEach,
            Vr = Wr.filter,
            qr = Wr.slice,
            jr = Wr.map,
            Xr = Wr.reduce,
            Yr = {},
            Ur = function () {
                return Yr.createCanvas()
            };
        Yr.createCanvas = function () {
            return document.createElement("canvas")
        };
        var Gr, Zr = "__ec_primitive__";
        T.prototype = {
            constructor: T,
            get: function (t) {
                return this.data.hasOwnProperty(t) ? this.data[t] : null
            },
            set: function (t, e) {
                return this.data[t] = e
            },
            each: function (t, e) {
                void 0 !== e && (t = f(t, e));
                for (var i in this.data) this.data.hasOwnProperty(i) && t(this.data[i], i)
            },
            removeKey: function (t) {
                delete this.data[t]
            }
        };
        var Qr = (Object.freeze || Object)({
                $override: function (t, e) {
                    "createCanvas" === t && (Gr = null), Yr[t] = e
                },
                clone: e,
                merge: i,
                mergeAll: function (t, e) {
                    for (var r = t[0], n = 1, a = t.length; n < a; n++) r = i(r, t[n], e);
                    return r
                },
                extend: r,
                defaults: n,
                createCanvas: Ur,
                getContext: a,
                indexOf: o,
                inherits: s,
                mixin: h,
                isArrayLike: l,
                each: u,
                map: c,
                reduce: function (t, e, i, r) {
                    if (t && e) {
                        if (t.reduce && t.reduce === Xr) return t.reduce(e, i, r);
                        for (var n = 0, a = t.length; n < a; n++) i = e.call(r, i, t[n], n, t);
                        return i
                    }
                },
                filter: function (t, e, i) {
                    if (t && e) {
                        if (t.filter && t.filter === Vr) return t.filter(e, i);
                        for (var r = [], n = 0, a = t.length; n < a; n++) e.call(i, t[n], n, t) && r.push(t[n]);
                        return r
                    }
                },
                find: function (t, e, i) {
                    if (t && e)
                        for (var r = 0, n = t.length; r < n; r++)
                            if (e.call(i, t[r], r, t)) return t[r]
                },
                bind: f,
                curry: function (t) {
                    var e = qr.call(arguments, 1);
                    return function () {
                        return t.apply(this, e.concat(qr.call(arguments)))
                    }
                },
                isArray: d,
                isFunction: p,
                isString: g,
                isObject: v,
                isBuiltInObject: _,
                isTypedArray: function (t) {
                    return !!Er[Hr.call(t)]
                },
                isDom: y,
                eqNaN: function (t) {
                    return t !== t
                },
                retrieve: function (t) {
                    for (var e = 0, i = arguments.length; e < i; e++)
                        if (null != arguments[e]) return arguments[e]
                },
                retrieve2: m,
                retrieve3: x,
                slice: function () {
                    return Function.call.apply(qr, arguments)
                },
                normalizeCssArray: w,
                assert: function (t, e) {
                    if (!t) throw new Error(e)
                },
                trim: b,
                setAsPrimitive: function (t) {
                    t[Zr] = !0
                },
                isPrimitive: k,
                createHashMap: function (t) {
                    return new T(t)
                },
                concatArray: function (t, e) {
                    for (var i = new t.constructor(t.length + e.length), r = 0; r < t.length; r++) i[r] = t[r];
                    var n = t.length;
                    for (r = 0; r < e.length; r++) i[r + n] = e[r];
                    return i
                },
                noop: function () {}
            }),
            $r = "undefined" == typeof Float32Array ? Array : Float32Array,
            Kr = P,
            Jr = L,
            tn = B,
            en = I,
            rn = (Object.freeze || Object)({
                create: S,
                copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t
                },
                clone: M,
                set: function (t, e, i) {
                    return t[0] = e, t[1] = i, t
                },
                add: C,
                scaleAndAdd: function (t, e, i, r) {
                    return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t
                },
                sub: A,
                len: P,
                length: Kr,
                lenSquare: L,
                lengthSquare: Jr,
                mul: function (t, e, i) {
                    return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
                },
                div: function (t, e, i) {
                    return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
                },
                dot: function (t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                },
                scale: z,
                normalize: D,
                distance: B,
                dist: tn,
                distanceSquare: I,
                distSquare: en,
                negate: function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t
                },
                lerp: function (t, e, i, r) {
                    return t[0] = e[0] + r * (i[0] - e[0]), t[1] = e[1] + r * (i[1] - e[1]), t
                },
                applyTransform: R,
                min: O,
                max: F
            });
        E.prototype = {
            constructor: E,
            _dragStart: function (t) {
                var e = t.target;
                e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(H(e, t), "dragstart", t.event))
            },
            _drag: function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var i = t.offsetX,
                        r = t.offsetY,
                        n = i - this._x,
                        a = r - this._y;
                    this._x = i, this._y = r, e.drift(n, a, t), this.dispatchToElement(H(e, t), "drag", t.event);
                    var o = this.findHover(i, r, e).target,
                        s = this._dropTarget;
                    this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(H(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(H(o, t), "dragenter", t.event))
                }
            },
            _dragEnd: function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.dispatchToElement(H(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(H(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }
        };
        var nn = Array.prototype.slice,
            an = function (t) {
                this._$handlers = {}, this._$eventProcessor = t
            };
        an.prototype = {
            constructor: an,
            one: function (t, e, i, r) {
                var n = this._$handlers;
                if ("function" == typeof e && (r = i, i = e, e = null), !i || !t) return this;
                e = W(this, e), n[t] || (n[t] = []);
                for (var a = 0; a < n[t].length; a++)
                    if (n[t][a].h === i) return this;
                return n[t].push({
                    h: i,
                    one: !0,
                    query: e,
                    ctx: r || this
                }), this
            },
            on: function (t, e, i, r) {
                var n = this._$handlers;
                if ("function" == typeof e && (r = i, i = e, e = null), !i || !t) return this;
                e = W(this, e), n[t] || (n[t] = []);
                for (var a = 0; a < n[t].length; a++)
                    if (n[t][a].h === i) return this;
                return n[t].push({
                    h: i,
                    one: !1,
                    query: e,
                    ctx: r || this
                }), this
            },
            isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t].length
            },
            off: function (t, e) {
                var i = this._$handlers;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (i[t]) {
                        for (var r = [], n = 0, a = i[t].length; n < a; n++) i[t][n].h !== e && r.push(i[t][n]);
                        i[t] = r
                    }
                    i[t] && 0 === i[t].length && delete i[t]
                } else delete i[t];
                return this
            },
            trigger: function (t) {
                var e = this._$handlers[t],
                    i = this._$eventProcessor;
                if (e) {
                    var r = arguments,
                        n = r.length;
                    n > 3 && (r = nn.call(r, 1));
                    for (var a = e.length, o = 0; o < a;) {
                        var s = e[o];
                        if (i && i.filter && null != s.query && !i.filter(t, s.query)) o++;
                        else {
                            switch (n) {
                                case 1:
                                    s.h.call(s.ctx);
                                    break;
                                case 2:
                                    s.h.call(s.ctx, r[1]);
                                    break;
                                case 3:
                                    s.h.call(s.ctx, r[1], r[2]);
                                    break;
                                default:
                                    s.h.apply(s.ctx, r)
                            }
                            s.one ? (e.splice(o, 1), a--) : o++
                        }
                    }
                }
                return i && i.afterTrigger && i.afterTrigger(t), this
            },
            triggerWithContext: function (t) {
                var e = this._$handlers[t],
                    i = this._$eventProcessor;
                if (e) {
                    var r = arguments,
                        n = r.length;
                    n > 4 && (r = nn.call(r, 1, r.length - 1));
                    for (var a = r[r.length - 1], o = e.length, s = 0; s < o;) {
                        var h = e[s];
                        if (i && i.filter && null != h.query && !i.filter(t, h.query)) s++;
                        else {
                            switch (n) {
                                case 1:
                                    h.h.call(a);
                                    break;
                                case 2:
                                    h.h.call(a, r[1]);
                                    break;
                                case 3:
                                    h.h.call(a, r[1], r[2]);
                                    break;
                                default:
                                    h.h.apply(a, r)
                            }
                            h.one ? (e.splice(s, 1), o--) : s++
                        }
                    }
                }
                return i && i.afterTrigger && i.afterTrigger(t), this
            }
        };
        var on = "undefined" != typeof window && !!window.addEventListener,
            sn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            hn = on ? function (t) {
                t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
            } : function (t) {
                t.returnValue = !1, t.cancelBubble = !0
            },
            ln = "silent";
        Z.prototype.dispose = function () {};
        var un = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            cn = function (t, e, i, r) {
                an.call(this), this.storage = t, this.painter = e, this.painterRoot = r, i = i || new Z, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, E.call(this), this.setHandlerProxy(i)
            };
        cn.prototype = {
            constructor: cn,
            setHandlerProxy: function (t) {
                this.proxy && this.proxy.dispose(), t && (u(un, function (e) {
                    t.on && t.on(e, this[e], this)
                }, this), t.handler = this), this.proxy = t
            },
            mousemove: function (t) {
                var e = t.zrX,
                    i = t.zrY,
                    r = this._hovered,
                    n = r.target;
                n && !n.__zr && (n = (r = this.findHover(r.x, r.y)).target);
                var a = this._hovered = this.findHover(e, i),
                    o = a.target,
                    s = this.proxy;
                s.setCursor && s.setCursor(o ? o.cursor : "default"), n && o !== n && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== n && this.dispatchToElement(a, "mouseover", t)
            },
            mouseout: function (t) {
                this.dispatchToElement(this._hovered, "mouseout", t);
                var e, i = t.toElement || t.relatedTarget;
                do {
                    i = i && i.parentNode
                } while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
                !e && this.trigger("globalout", {
                    event: t
                })
            },
            resize: function (t) {
                this._hovered = {}
            },
            dispatch: function (t, e) {
                var i = this[t];
                i && i.call(this, e)
            },
            dispose: function () {
                this.proxy.dispose(), this.storage = this.proxy = this.painter = null
            },
            setCursorStyle: function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            },
            dispatchToElement: function (t, e, i) {
                var r = (t = t || {}).target;
                if (!r || !r.silent) {
                    for (var n = "on" + e, a = U(e, t, i); r && (r[n] && (a.cancelBubble = r[n].call(r, a)), r.trigger(e, a), r = r.parent, !a.cancelBubble););
                    a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                        "function" == typeof t[n] && t[n].call(t, a), t.trigger && t.trigger(e, a)
                    }))
                }
            },
            findHover: function (t, e, i) {
                for (var r = this.storage.getDisplayList(), n = {
                        x: t,
                        y: e
                    }, a = r.length - 1; a >= 0; a--) {
                    var o;
                    if (r[a] !== i && !r[a].ignore && (o = Q(r[a], t, e)) && (!n.topTarget && (n.topTarget = r[a]), o !== ln)) {
                        n.target = r[a];
                        break
                    }
                }
                return n
            }
        }, u(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            cn.prototype[t] = function (e) {
                var i = this.findHover(e.zrX, e.zrY),
                    r = i.target;
                if ("mousedown" === t) this._downEl = r, this._downPoint = [e.zrX, e.zrY], this._upEl = r;
                else if ("mouseup" === t) this._upEl = r;
                else if ("click" === t) {
                    if (this._downEl !== this._upEl || !this._downPoint || tn(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                    this._downPoint = null
                }
                this.dispatchToElement(i, t, e)
            }
        }), h(cn, an), h(cn, E);
        var fn = "undefined" == typeof Float32Array ? Array : Float32Array,
            dn = (Object.freeze || Object)({
                create: $,
                identity: K,
                copy: J,
                mul: tt,
                translate: et,
                rotate: it,
                scale: rt,
                invert: nt,
                clone: function (t) {
                    var e = $();
                    return J(e, t), e
                }
            }),
            pn = K,
            gn = 5e-5,
            vn = function (t) {
                (t = t || {}).position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
            },
            _n = vn.prototype;
        _n.transform = null, _n.needLocalTransform = function () {
            return at(this.rotation) || at(this.position[0]) || at(this.position[1]) || at(this.scale[0] - 1) || at(this.scale[1] - 1)
        };
        var yn = [];
        _n.updateTransform = function () {
            var t = this.parent,
                e = t && t.transform,
                i = this.needLocalTransform(),
                r = this.transform;
            if (i || e) {
                r = r || $(), i ? this.getLocalTransform(r) : pn(r), e && (i ? tt(r, t.transform, r) : J(r, t.transform)), this.transform = r;
                var n = this.globalScaleRatio;
                if (null != n && 1 !== n) {
                    this.getGlobalScale(yn);
                    var a = yn[0] < 0 ? -1 : 1,
                        o = yn[1] < 0 ? -1 : 1,
                        s = ((yn[0] - a) * n + a) / yn[0] || 0,
                        h = ((yn[1] - o) * n + o) / yn[1] || 0;
                    r[0] *= s, r[1] *= s, r[2] *= h, r[3] *= h
                }
                this.invTransform = this.invTransform || $(), nt(this.invTransform, r)
            } else r && pn(r)
        }, _n.getLocalTransform = function (t) {
            return vn.getLocalTransform(this, t)
        }, _n.setTransform = function (t) {
            var e = this.transform,
                i = t.dpr || 1;
            e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
        }, _n.restoreTransform = function (t) {
            var e = t.dpr || 1;
            t.setTransform(e, 0, 0, e, 0, 0)
        };
        var mn = [],
            xn = $();
        _n.setLocalTransform = function (t) {
            if (t) {
                var e = t[0] * t[0] + t[1] * t[1],
                    i = t[2] * t[2] + t[3] * t[3],
                    r = this.position,
                    n = this.scale;
                at(e - 1) && (e = Math.sqrt(e)), at(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), r[0] = t[4], r[1] = t[5], n[0] = e, n[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e)
            }
        }, _n.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent,
                    e = this.transform;
                t && t.transform && (tt(mn, t.invTransform, e), e = mn);
                var i = this.origin;
                i && (i[0] || i[1]) && (xn[4] = i[0], xn[5] = i[1], tt(mn, e, xn), mn[4] -= i[0], mn[5] -= i[1], e = mn), this.setLocalTransform(e)
            }
        }, _n.getGlobalScale = function (t) {
            var e = this.transform;
            return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
        }, _n.transformCoordToLocal = function (t, e) {
            var i = [t, e],
                r = this.invTransform;
            return r && R(i, i, r), i
        }, _n.transformCoordToGlobal = function (t, e) {
            var i = [t, e],
                r = this.transform;
            return r && R(i, i, r), i
        }, vn.getLocalTransform = function (t, e) {
            pn(e = e || []);
            var i = t.origin,
                r = t.scale || [1, 1],
                n = t.rotation || 0,
                a = t.position || [0, 0];
            return i && (e[4] -= i[0], e[5] -= i[1]), rt(e, e, r), n && it(e, e, n), i && (e[4] += i[0], e[5] += i[1]), e[4] += a[0], e[5] += a[1], e
        };
        var wn = {
            linear: function (t) {
                return t
            },
            quadraticIn: function (t) {
                return t * t
            },
            quadraticOut: function (t) {
                return t * (2 - t)
            },
            quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            cubicIn: function (t) {
                return t * t * t
            },
            cubicOut: function (t) {
                return --t * t * t + 1
            },
            cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            quarticIn: function (t) {
                return t * t * t * t
            },
            quarticOut: function (t) {
                return 1 - --t * t * t * t
            },
            quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            quinticIn: function (t) {
                return t * t * t * t * t
            },
            quinticOut: function (t) {
                return --t * t * t * t * t + 1
            },
            quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            },
            sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            },
            exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            },
            circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            },
            circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            elasticIn: function (t) {
                var e, i = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
            },
            elasticOut: function (t) {
                var e, i = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
            },
            elasticInOut: function (t) {
                var e, i = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
            },
            backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            },
            bounceIn: function (t) {
                return 1 - wn.bounceOut(1 - t)
            },
            bounceOut: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceInOut: function (t) {
                return t < .5 ? .5 * wn.bounceIn(2 * t) : .5 * wn.bounceOut(2 * t - 1) + .5
            }
        };
        ot.prototype = {
            constructor: ot,
            step: function (t, e) {
                if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e;
                else {
                    var i = (t - this._startTime - this._pausedTime) / this._life;
                    if (!(i < 0)) {
                        i = Math.min(i, 1);
                        var r = this.easing,
                            n = "string" == typeof r ? wn[r] : r,
                            a = "function" == typeof n ? n(i) : i;
                        return this.fire("frame", a), 1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                    }
                }
            },
            restart: function (t) {
                var e = (t - this._startTime - this._pausedTime) % this._life;
                this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
            },
            fire: function (t, e) {
                this[t = "on" + t] && this[t](this._target, e)
            },
            pause: function () {
                this._paused = !0
            },
            resume: function () {
                this._paused = !1
            }
        };
        var bn = function () {
                this.head = null, this.tail = null, this._len = 0
            },
            kn = bn.prototype;
        kn.insert = function (t) {
            var e = new Tn(t);
            return this.insertEntry(e), e
        }, kn.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, kn.remove = function (t) {
            var e = t.prev,
                i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, kn.len = function () {
            return this._len
        }, kn.clear = function () {
            this.head = this.tail = null, this._len = 0
        };
        var Tn = function (t) {
                this.value = t, this.next, this.prev
            },
            Sn = function (t) {
                this._list = new bn, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
            },
            Mn = Sn.prototype;
        Mn.put = function (t, e) {
            var i = this._list,
                r = this._map,
                n = null;
            if (null == r[t]) {
                var a = i.len(),
                    o = this._lastRemovedEntry;
                if (a >= this._maxSize && a > 0) {
                    var s = i.head;
                    i.remove(s), delete r[s.key], n = s.value, this._lastRemovedEntry = s
                }
                o ? o.value = e : o = new Tn(e), o.key = t, i.insertEntry(o), r[t] = o
            }
            return n
        }, Mn.get = function (t) {
            var e = this._map[t],
                i = this._list;
            if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
        }, Mn.clear = function () {
            this._list.clear(), this._map = {}
        };
        var Cn = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            },
            An = new Sn(20),
            Pn = null,
            Ln = xt,
            zn = wt,
            Dn = (Object.freeze || Object)({
                parse: _t,
                lift: function (t, e) {
                    var i = _t(t);
                    if (i) {
                        for (var r = 0; r < 3; r++) i[r] = e < 0 ? i[r] * (1 - e) | 0 : (255 - i[r]) * e + i[r] | 0, i[r] > 255 ? i[r] = 255 : t[r] < 0 && (i[r] = 0);
                        return bt(i, 4 === i.length ? "rgba" : "rgb")
                    }
                },
                toHex: function (t) {
                    var e = _t(t);
                    if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
                },
                fastLerp: xt,
                fastMapToColor: Ln,
                lerp: wt,
                mapToColor: zn,
                modifyHSL: function (t, e, i, r) {
                    if (t = _t(t)) return t = mt(t), null != e && (t[0] = ht(e)), null != i && (t[1] = ct(i)), null != r && (t[2] = ct(r)), bt(yt(t), "rgba")
                },
                modifyAlpha: function (t, e) {
                    if ((t = _t(t)) && null != e) return t[3] = lt(e), bt(t, "rgba")
                },
                stringify: bt
            }),
            Bn = Array.prototype.slice,
            In = function (t, e, i, r) {
                this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || kt, this._setter = r || Tt, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
        In.prototype = {
            when: function (t, e) {
                var i = this._tracks;
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        if (!i[r]) {
                            i[r] = [];
                            var n = this._getter(this._target, r);
                            if (null == n) continue;
                            0 !== t && i[r].push({
                                time: 0,
                                value: Dt(n)
                            })
                        }
                        i[r].push({
                            time: t,
                            value: e[r]
                        })
                    } return this
            },
            during: function (t) {
                return this._onframeList.push(t), this
            },
            pause: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
                this._paused = !0
            },
            resume: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
                this._paused = !1
            },
            isPaused: function () {
                return !!this._paused
            },
            _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this)
            },
            start: function (t, e) {
                var i, r = this,
                    n = 0;
                for (var a in this._tracks)
                    if (this._tracks.hasOwnProperty(a)) {
                        var o = Rt(this, t, function () {
                            --n || r._doneCallback()
                        }, this._tracks[a], a, e);
                        o && (this._clipList.push(o), n++, this.animation && this.animation.addClip(o), i = o)
                    } if (i) {
                    var s = i.onframe;
                    i.onframe = function (t, e) {
                        s(t, e);
                        for (var i = 0; i < r._onframeList.length; i++) r._onframeList[i](t, e)
                    }
                }
                return n || this._doneCallback(), this
            },
            stop: function (t) {
                for (var e = this._clipList, i = this.animation, r = 0; r < e.length; r++) {
                    var n = e[r];
                    t && n.onframe(this._target, 1), i && i.removeClip(n)
                }
                e.length = 0
            },
            delay: function (t) {
                return this._delay = t, this
            },
            done: function (t) {
                return t && this._doneList.push(t), this
            },
            getClips: function () {
                return this._clipList
            }
        };
        var Rn = 1;
        "undefined" != typeof window && (Rn = Math.max(window.devicePixelRatio || 1, 1));
        var On = Rn,
            Fn = function () {},
            En = Fn,
            Hn = function () {
                this.animators = []
            };
        Hn.prototype = {
            constructor: Hn,
            animate: function (t, e) {
                var i, r = !1,
                    n = this,
                    a = this.__zr;
                if (t) {
                    var s = t.split("."),
                        h = n;
                    r = "shape" === s[0];
                    for (var l = 0, u = s.length; l < u; l++) h && (h = h[s[l]]);
                    h && (i = h)
                } else i = n;
                if (i) {
                    var c = n.animators,
                        f = new In(i, e);
                    return f.during(function (t) {
                        n.dirty(r)
                    }).done(function () {
                        c.splice(o(c, f), 1)
                    }), c.push(f), a && a.animation.addAnimator(f), f
                }
                En('Property "' + t + '" is not existed in element ' + n.id)
            },
            stopAnimation: function (t) {
                for (var e = this.animators, i = e.length, r = 0; r < i; r++) e[r].stop(t);
                return e.length = 0, this
            },
            animateTo: function (t, e, i, r, n, a) {
                Ot(this, t, e, i, r, n, a)
            },
            animateFrom: function (t, e, i, r, n, a) {
                Ot(this, t, e, i, r, n, a, !0)
            }
        };
        var Wn = function (t) {
            vn.call(this, t), an.call(this, t), Hn.call(this, t), this.id = t.id || Ir()
        };
        Wn.prototype = {
            type: "element",
            name: "",
            __zr: null,
            ignore: !1,
            clipPath: null,
            isGroup: !1,
            drift: function (t, e) {
                switch (this.draggable) {
                    case "horizontal":
                        e = 0;
                        break;
                    case "vertical":
                        t = 0
                }
                var i = this.transform;
                i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
            },
            beforeUpdate: function () {},
            afterUpdate: function () {},
            update: function () {
                this.updateTransform()
            },
            traverse: function (t, e) {},
            attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var i = this[t];
                        i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                    }
                } else this[t] = e
            },
            hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            },
            show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            },
            attr: function (t, e) {
                if ("string" == typeof t) this.attrKV(t, e);
                else if (v(t))
                    for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                return this.dirty(!1), this
            },
            setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            },
            removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            },
            addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e)
                    for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            },
            removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e)
                    for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, h(Wn, Hn), h(Wn, vn), h(Wn, an);
        var Nn = R,
            Vn = Math.min,
            qn = Math.max;
        Ht.prototype = {
            constructor: Ht,
            union: function (t) {
                var e = Vn(t.x, this.x),
                    i = Vn(t.y, this.y);
                this.width = qn(t.x + t.width, this.x + this.width) - e, this.height = qn(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
            },
            applyTransform: function () {
                var t = [],
                    e = [],
                    i = [],
                    r = [];
                return function (n) {
                    if (n) {
                        t[0] = i[0] = this.x, t[1] = r[1] = this.y, e[0] = r[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, Nn(t, t, n), Nn(e, e, n), Nn(i, i, n), Nn(r, r, n), this.x = Vn(t[0], e[0], i[0], r[0]), this.y = Vn(t[1], e[1], i[1], r[1]);
                        var a = qn(t[0], e[0], i[0], r[0]),
                            o = qn(t[1], e[1], i[1], r[1]);
                        this.width = a - this.x, this.height = o - this.y
                    }
                }
            }(),
            calculateTransform: function (t) {
                var e = this,
                    i = t.width / e.width,
                    r = t.height / e.height,
                    n = $();
                return et(n, n, [-e.x, -e.y]), rt(n, n, [i, r]), et(n, n, [t.x, t.y]), n
            },
            intersect: function (t) {
                if (!t) return !1;
                t instanceof Ht || (t = Ht.create(t));
                var e = this,
                    i = e.x,
                    r = e.x + e.width,
                    n = e.y,
                    a = e.y + e.height,
                    o = t.x,
                    s = t.x + t.width,
                    h = t.y,
                    l = t.y + t.height;
                return !(r < o || s < i || a < h || l < n)
            },
            contain: function (t, e) {
                var i = this;
                return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
            },
            clone: function () {
                return new Ht(this.x, this.y, this.width, this.height)
            },
            copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            },
            plain: function () {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            }
        }, Ht.create = function (t) {
            return new Ht(t.x, t.y, t.width, t.height)
        };
        var jn = function (t) {
            t = t || {}, Wn.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            this._children = [], this.__storage = null, this.__dirty = !0
        };
        jn.prototype = {
            constructor: jn,
            isGroup: !0,
            type: "group",
            silent: !1,
            children: function () {
                return this._children.slice()
            },
            childAt: function (t) {
                return this._children[t]
            },
            childOfName: function (t) {
                for (var e = this._children, i = 0; i < e.length; i++)
                    if (e[i].name === t) return e[i]
            },
            childCount: function () {
                return this._children.length
            },
            add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            },
            addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var i = this._children,
                        r = i.indexOf(e);
                    r >= 0 && (i.splice(r, 0, t), this._doAdd(t))
                }
                return this
            },
            _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage,
                    i = this.__zr;
                e && e !== t.__storage && (e.addToStorage(t), t instanceof jn && t.addChildrenToStorage(e)), i && i.refresh()
            },
            remove: function (t) {
                var e = this.__zr,
                    i = this.__storage,
                    r = this._children,
                    n = o(r, t);
                return n < 0 ? this : (r.splice(n, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof jn && t.delChildrenFromStorage(i)), e && e.refresh(), this)
            },
            removeAll: function () {
                var t, e, i = this._children,
                    r = this.__storage;
                for (e = 0; e < i.length; e++) t = i[e], r && (r.delFromStorage(t), t instanceof jn && t.delChildrenFromStorage(r)), t.parent = null;
                return i.length = 0, this
            },
            eachChild: function (t, e) {
                for (var i = this._children, r = 0; r < i.length; r++) {
                    var n = i[r];
                    t.call(e, n, r)
                }
                return this
            },
            traverse: function (t, e) {
                for (var i = 0; i < this._children.length; i++) {
                    var r = this._children[i];
                    t.call(e, r), "group" === r.type && r.traverse(t, e)
                }
                return this
            },
            addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.addToStorage(i), i instanceof jn && i.addChildrenToStorage(t)
                }
            },
            delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.delFromStorage(i), i instanceof jn && i.delChildrenFromStorage(t)
                }
            },
            dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            },
            getBoundingRect: function (t) {
                for (var e = null, i = new Ht(0, 0, 0, 0), r = t || this._children, n = [], a = 0; a < r.length; a++) {
                    var o = r[a];
                    if (!o.ignore && !o.invisible) {
                        var s = o.getBoundingRect(),
                            h = o.getLocalTransform(n);
                        h ? (i.copy(s), i.applyTransform(h), (e = e || i.clone()).union(i)) : (e = e || s.clone()).union(s)
                    }
                }
                return e || i
            }
        }, s(jn, Wn);
        var Xn = 32,
            Yn = 7,
            Un = function () {
                this._roots = [], this._displayList = [], this._displayListLen = 0
            };
        Un.prototype = {
            constructor: Un,
            traverse: function (t, e) {
                for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
            },
            getDisplayList: function (t, e) {
                return e = e || !1, t && this.updateDisplayList(e), this._displayList
            },
            updateDisplayList: function (t) {
                this._displayListLen = 0;
                for (var e = this._roots, i = this._displayList, r = 0, n = e.length; r < n; r++) this._updateAndAddDisplayable(e[r], null, t);
                i.length = this._displayListLen, Or.canvasSupported && Ut(i, Gt)
            },
            _updateAndAddDisplayable: function (t, e, i) {
                if (!t.ignore || i) {
                    t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                    var r = t.clipPath;
                    if (r) {
                        e = e ? e.slice() : [];
                        for (var n = r, a = t; n;) n.parent = a, n.updateTransform(), e.push(n), a = n, n = n.clipPath
                    }
                    if (t.isGroup) {
                        for (var o = t._children, s = 0; s < o.length; s++) {
                            var h = o[s];
                            t.__dirty && (h.__dirty = !0), this._updateAndAddDisplayable(h, e, i)
                        }
                        t.__dirty = !1
                    } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                }
            },
            addRoot: function (t) {
                t.__storage !== this && (t instanceof jn && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
            },
            delRoot: function (t) {
                if (null == t) {
                    for (i = 0; i < this._roots.length; i++) {
                        var e = this._roots[i];
                        e instanceof jn && e.delChildrenFromStorage(this)
                    }
                    return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                }
                if (t instanceof Array)
                    for (var i = 0, r = t.length; i < r; i++) this.delRoot(t[i]);
                else {
                    var n = o(this._roots, t);
                    n >= 0 && (this.delFromStorage(t), this._roots.splice(n, 1), t instanceof jn && t.delChildrenFromStorage(this))
                }
            },
            addToStorage: function (t) {
                return t && (t.__storage = this, t.dirty(!1)), this
            },
            delFromStorage: function (t) {
                return t && (t.__storage = null), this
            },
            dispose: function () {
                this._renderList = this._roots = null
            },
            displayableSortFunc: Gt
        };
        var Gn = {
                shadowBlur: 1,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                textShadowBlur: 1,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textBoxShadowBlur: 1,
                textBoxShadowOffsetX: 1,
                textBoxShadowOffsetY: 1
            },
            Zn = function (t, e, i) {
                return Gn.hasOwnProperty(e) ? i *= t.dpr : i
            },
            Qn = [
                ["shadowBlur", 0],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0],
                ["shadowColor", "#000"],
                ["lineCap", "butt"],
                ["lineJoin", "miter"],
                ["miterLimit", 10]
            ],
            $n = function (t) {
                this.extendFrom(t, !1)
            };
        $n.prototype = {
            constructor: $n,
            fill: "#000",
            stroke: null,
            opacity: 1,
            fillOpacity: null,
            strokeOpacity: null,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            font: null,
            textFont: null,
            fontStyle: null,
            fontWeight: null,
            fontSize: null,
            fontFamily: null,
            textTag: null,
            textFill: "#000",
            textStroke: null,
            textWidth: null,
            textHeight: null,
            textStrokeWidth: 0,
            textLineHeight: null,
            textPosition: "inside",
            textRect: null,
            textOffset: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowColor: "transparent",
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textBoxShadowColor: "transparent",
            textBoxShadowBlur: 0,
            textBoxShadowOffsetX: 0,
            textBoxShadowOffsetY: 0,
            transformText: !1,
            textRotation: 0,
            textOrigin: null,
            textBackgroundColor: null,
            textBorderColor: null,
            textBorderWidth: 0,
            textBorderRadius: 0,
            textPadding: null,
            rich: null,
            truncate: null,
            blend: null,
            bind: function (t, e, i) {
                for (var r = this, n = i && i.style, a = !n, o = 0; o < Qn.length; o++) {
                    var s = Qn[o],
                        h = s[0];
                    (a || r[h] !== n[h]) && (t[h] = Zn(t, h, r[h] || s[1]))
                }
                if ((a || r.fill !== n.fill) && (t.fillStyle = r.fill), (a || r.stroke !== n.stroke) && (t.strokeStyle = r.stroke), (a || r.opacity !== n.opacity) && (t.globalAlpha = null == r.opacity ? 1 : r.opacity), (a || r.blend !== n.blend) && (t.globalCompositeOperation = r.blend || "source-over"), this.hasStroke()) {
                    var l = r.lineWidth;
                    t.lineWidth = l / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0
            },
            extendFrom: function (t, e) {
                if (t)
                    for (var i in t) !t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (t, e, i) {
                for (var r = ("radial" === e.type ? Qt : Zt)(t, e, i), n = e.colorStops, a = 0; a < n.length; a++) r.addColorStop(n[a].offset, n[a].color);
                return r
            }
        };
        for (var Kn = $n.prototype, Jn = 0; Jn < Qn.length; Jn++) {
            var ta = Qn[Jn];
            ta[0] in Kn || (Kn[ta[0]] = ta[1])
        }
        $n.getGradient = Kn.getGradient;
        var ea = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        ea.prototype.getCanvasPattern = function (t) {
            return t.createPattern(this.image, this.repeat || "repeat")
        };
        var ia = function (t, e, i) {
            var r;
            i = i || On, "string" == typeof t ? r = Kt(t, e, i) : v(t) && (t = (r = t).id), this.id = t, this.dom = r;
            var n = r.style;
            n && (r.onselectstart = $t, n["-webkit-user-select"] = "none", n["user-select"] = "none", n["-webkit-touch-callout"] = "none", n["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", n.padding = 0, n.margin = 0, n["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
        };
        ia.prototype = {
            constructor: ia,
            __dirty: !0,
            __used: !1,
            __drawIndex: 0,
            __startIndex: 0,
            __endIndex: 0,
            incremental: !1,
            getElementCount: function () {
                return this.__endIndex - this.__startIndex
            },
            initContext: function () {
                this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
            },
            createBackBuffer: function () {
                var t = this.dpr;
                this.domBack = Kt("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
            },
            resize: function (t, e) {
                var i = this.dpr,
                    r = this.dom,
                    n = r.style,
                    a = this.domBack;
                n && (n.width = t + "px", n.height = e + "px"), r.width = t * i, r.height = e * i, a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i))
            },
            clear: function (t, e) {
                var i = this.dom,
                    r = this.ctx,
                    n = i.width,
                    a = i.height,
                    e = e || this.clearColor,
                    o = this.motionBlur && !t,
                    s = this.lastFrameAlpha,
                    h = this.dpr;
                if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i, 0, 0, n / h, a / h)), r.clearRect(0, 0, n, a), e && "transparent" !== e) {
                    var l;
                    e.colorStops ? (l = e.__canvasGradient || $n.getGradient(r, e, {
                        x: 0,
                        y: 0,
                        width: n,
                        height: a
                    }), e.__canvasGradient = l) : e.image && (l = ea.prototype.getCanvasPattern.call(e, r)), r.save(), r.fillStyle = l || e, r.fillRect(0, 0, n, a), r.restore()
                }
                if (o) {
                    var u = this.domBack;
                    r.save(), r.globalAlpha = s, r.drawImage(u, 0, 0, n, a), r.restore()
                }
            }
        };
        var ra = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
                setTimeout(t, 16)
            },
            na = new Sn(50),
            aa = {},
            oa = 0,
            sa = 5e3,
            ha = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
            la = "12px sans-serif",
            ua = {};
        ua.measureText = function (t, e) {
            var i = a();
            return i.font = e || la, i.measureText(t)
        };
        var ca = {
                left: 1,
                right: 1,
                center: 1
            },
            fa = {
                top: 1,
                bottom: 1,
                middle: 1
            },
            da = [
                ["textShadowBlur", "shadowBlur", 0],
                ["textShadowOffsetX", "shadowOffsetX", 0],
                ["textShadowOffsetY", "shadowOffsetY", 0],
                ["textShadowColor", "shadowColor", "transparent"]
            ],
            pa = new Ht,
            ga = function () {};
        ga.prototype = {
            constructor: ga,
            drawRectText: function (t, e) {
                var i = this.style;
                e = i.textRect || e, this.__dirty && we(i);
                var r = i.text;
                if (null != r && (r += ""), Ee(r, i)) {
                    t.save();
                    var n = this.transform;
                    i.transformText ? this.setTransform(t) : n && (pa.copy(e), pa.applyTransform(n), e = pa), ke(this, t, r, i, e), t.restore()
                }
            }
        }, He.prototype = {
            constructor: He,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: !1,
            incremental: !1,
            globalScaleRatio: 1,
            beforeBrush: function (t) {},
            afterBrush: function (t) {},
            brush: function (t, e) {},
            getBoundingRect: function () {},
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var i = this.transformCoordToLocal(t, e);
                return this.getBoundingRect().contain(i[0], i[1])
            },
            dirty: function () {
                this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? Wn.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new $n(t, this), this.dirty(!1), this
            }
        }, s(He, Wn), h(He, ga), We.prototype = {
            constructor: We,
            type: "image",
            brush: function (t, e) {
                var i = this.style,
                    r = i.image;
                i.bind(t, this, e);
                var n = this._image = te(r, this._image, this, this.onload);
                if (n && ie(n)) {
                    var a = i.x || 0,
                        o = i.y || 0,
                        s = i.width,
                        h = i.height,
                        l = n.width / n.height;
                    if (null == s && null != h ? s = h * l : null == h && null != s ? h = s / l : null == s && null == h && (s = n.width, h = n.height), this.setTransform(t), i.sWidth && i.sHeight) {
                        var u = i.sx || 0,
                            c = i.sy || 0;
                        t.drawImage(n, u, c, i.sWidth, i.sHeight, a, o, s, h)
                    } else if (i.sx && i.sy) {
                        var f = s - (u = i.sx),
                            d = h - (c = i.sy);
                        t.drawImage(n, u, c, f, d, a, o, s, h)
                    } else t.drawImage(n, a, o, s, h);
                    null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
                }
            },
            getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new Ht(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, s(We, He);
        var va = new Ht(0, 0, 0, 0),
            _a = new Ht(0, 0, 0, 0),
            ya = function (t, e, i) {
                this.type = "canvas";
                var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = i = r({}, i || {}), this.dpr = i.devicePixelRatio || On, this._singleCanvas = n, this.root = t;
                var a = t.style;
                a && (a["-webkit-tap-highlight-color"] = "transparent", a["-webkit-user-select"] = a["user-select"] = a["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
                var o = this._zlevelList = [],
                    s = this._layers = {};
                if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
                    var h = t.width,
                        l = t.height;
                    null != i.width && (h = i.width), null != i.height && (l = i.height), this.dpr = i.devicePixelRatio || 1, t.width = h * this.dpr, t.height = l * this.dpr, this._width = h, this._height = l;
                    var u = new ia(t, this, this.dpr);
                    u.__builtin__ = !0, u.initContext(), s[314159] = u, u.zlevel = 314159, o.push(314159), this._domRoot = t
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var c = this._domRoot = Ye(this._width, this._height);
                    t.appendChild(c)
                }
                this._hoverlayer = null, this._hoverElements = []
            };
        ya.prototype = {
            constructor: ya,
            getType: function () {
                return "canvas"
            },
            isSingleCanvas: function () {
                return this._singleCanvas
            },
            getViewportRoot: function () {
                return this._domRoot
            },
            getViewportRootOffset: function () {
                var t = this.getViewportRoot();
                if (t) return {
                    offsetLeft: t.offsetLeft || 0,
                    offsetTop: t.offsetTop || 0
                }
            },
            refresh: function (t) {
                var e = this.storage.getDisplayList(!0),
                    i = this._zlevelList;
                this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
                for (var r = 0; r < i.length; r++) {
                    var n = i[r],
                        a = this._layers[n];
                    if (!a.__builtin__ && a.refresh) {
                        var o = 0 === r ? this._backgroundColor : null;
                        a.refresh(o)
                    }
                }
                return this.refreshHover(), this
            },
            addHover: function (t, e) {
                if (!t.__hoverMir) {
                    var i = new t.constructor({
                        style: t.style,
                        shape: t.shape,
                        z: t.z,
                        z2: t.z2,
                        silent: t.silent
                    });
                    return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i
                }
            },
            removeHover: function (t) {
                var e = t.__hoverMir,
                    i = this._hoverElements,
                    r = o(i, e);
                r >= 0 && i.splice(r, 1), t.__hoverMir = null
            },
            clearHover: function (t) {
                for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                    var r = e[i].__from;
                    r && (r.__hoverMir = null)
                }
                e.length = 0
            },
            refreshHover: function () {
                var t = this._hoverElements,
                    e = t.length,
                    i = this._hoverlayer;
                if (i && i.clear(), e) {
                    Ut(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                    var r = {};
                    i.ctx.save();
                    for (var n = 0; n < e;) {
                        var a = t[n],
                            o = a.__from;
                        o && o.__zr ? (n++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, r))) : (t.splice(n, 1), o.__hoverMir = null, e--)
                    }
                    i.ctx.restore()
                }
            },
            getHoverLayer: function () {
                return this.getLayer(1e5)
            },
            _paintList: function (t, e, i) {
                if (this._redrawId === i) {
                    e = e || !1, this._updateLayerStatus(t);
                    var r = this._doPaintList(t, e);
                    if (this._needsManuallyCompositing && this._compositeManually(), !r) {
                        var n = this;
                        ra(function () {
                            n._paintList(t, e, i)
                        })
                    }
                }
            },
            _compositeManually: function () {
                var t = this.getLayer(314159).ctx,
                    e = this._domRoot.width,
                    i = this._domRoot.height;
                t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (r) {
                    r.virtual && t.drawImage(r.dom, 0, 0, e, i)
                })
            },
            _doPaintList: function (t, e) {
                for (var i = [], r = 0; r < this._zlevelList.length; r++) {
                    var n = this._zlevelList[r];
                    (s = this._layers[n]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && i.push(s)
                }
                for (var a = !0, o = 0; o < i.length; o++) {
                    var s = i[o],
                        h = s.ctx,
                        l = {};
                    h.save();
                    var c = e ? s.__startIndex : s.__drawIndex,
                        f = !e && s.incremental && Date.now,
                        d = f && Date.now(),
                        p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                    if (s.__startIndex === s.__endIndex) s.clear(!1, p);
                    else if (c === s.__startIndex) {
                        var g = t[c];
                        g.incremental && g.notClear && !e || s.clear(!1, p)
                    } - 1 === c && (console.error("For some unknown reason. drawIndex is -1"), c = s.__startIndex);
                    for (var v = c; v < s.__endIndex; v++) {
                        var _ = t[v];
                        if (this._doPaintEl(_, s, e, l), _.__dirty = _.__dirtyText = !1, f && Date.now() - d > 15) break
                    }
                    s.__drawIndex = v, s.__drawIndex < s.__endIndex && (a = !1), l.prevElClipPaths && h.restore(), h.restore()
                }
                return Or.wxa && u(this._layers, function (t) {
                    t && t.ctx && t.ctx.draw && t.ctx.draw()
                }), a
            },
            _doPaintEl: function (t, e, i, r) {
                var n = e.ctx,
                    a = t.transform;
                if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !qe(t, this._width, this._height))) {
                    var o = t.__clipPaths;
                    r.prevElClipPaths && !je(o, r.prevElClipPaths) || (r.prevElClipPaths && (e.ctx.restore(), r.prevElClipPaths = null, r.prevEl = null), o && (n.save(), Xe(o, n), r.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(n), t.brush(n, r.prevEl || null), r.prevEl = t, t.afterBrush && t.afterBrush(n)
                }
            },
            getLayer: function (t, e) {
                this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
                var r = this._layers[t];
                return r || ((r = new ia("zr_" + t, this, this.dpr)).zlevel = t, r.__builtin__ = !0, this._layerConfig[t] && i(r, this._layerConfig[t], !0), e && (r.virtual = e), this.insertLayer(t, r), r.initContext()), r
            },
            insertLayer: function (t, e) {
                var i = this._layers,
                    r = this._zlevelList,
                    n = r.length,
                    a = null,
                    o = -1,
                    s = this._domRoot;
                if (i[t]) En("ZLevel " + t + " has been used already");
                else if (Ve(e)) {
                    if (n > 0 && t > r[0]) {
                        for (o = 0; o < n - 1 && !(r[o] < t && r[o + 1] > t); o++);
                        a = i[r[o]]
                    }
                    if (r.splice(o + 1, 0, t), i[t] = e, !e.virtual)
                        if (a) {
                            var h = a.dom;
                            h.nextSibling ? s.insertBefore(e.dom, h.nextSibling) : s.appendChild(e.dom)
                        } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
                } else En("Layer of zlevel " + t + " is not valid")
            },
            eachLayer: function (t, e) {
                var i, r, n = this._zlevelList;
                for (r = 0; r < n.length; r++) i = n[r], t.call(e, this._layers[i], i)
            },
            eachBuiltinLayer: function (t, e) {
                var i, r, n, a = this._zlevelList;
                for (n = 0; n < a.length; n++) r = a[n], (i = this._layers[r]).__builtin__ && t.call(e, i, r)
            },
            eachOtherLayer: function (t, e) {
                var i, r, n, a = this._zlevelList;
                for (n = 0; n < a.length; n++) r = a[n], (i = this._layers[r]).__builtin__ || t.call(e, i, r)
            },
            getLayers: function () {
                return this._layers
            },
            _updateLayerStatus: function (t) {
                function e(t) {
                    i && (i.__endIndex !== t && (i.__dirty = !0), i.__endIndex = t)
                }
                if (this.eachBuiltinLayer(function (t, e) {
                        t.__dirty = t.__used = !1
                    }), this._singleCanvas)
                    for (n = 1; n < t.length; n++)
                        if ((o = t[n]).zlevel !== t[n - 1].zlevel || o.incremental) {
                            this._needsManuallyCompositing = !0;
                            break
                        } for (var i = null, r = 0, n = 0; n < t.length; n++) {
                    var a, o = t[n],
                        s = o.zlevel;
                    o.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, r = 1) : a = this.getLayer(s + (r > 0 ? .01 : 0), this._needsManuallyCompositing), a.__builtin__ || En("ZLevel " + s + " has been used by unkown layer " + a.id), a !== i && (a.__used = !0, a.__startIndex !== n && (a.__dirty = !0), a.__startIndex = n, a.incremental ? a.__drawIndex = -1 : a.__drawIndex = n, e(n), i = a), o.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = n))
                }
                e(n), this.eachBuiltinLayer(function (t, e) {
                    !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
                })
            },
            clear: function () {
                return this.eachBuiltinLayer(this._clearLayer), this
            },
            _clearLayer: function (t) {
                t.clear()
            },
            setBackgroundColor: function (t) {
                this._backgroundColor = t
            },
            configLayer: function (t, e) {
                if (e) {
                    var r = this._layerConfig;
                    r[t] ? i(r[t], e, !0) : r[t] = e;
                    for (var n = 0; n < this._zlevelList.length; n++) {
                        var a = this._zlevelList[n];
                        a !== t && a !== t + .01 || i(this._layers[a], r[t], !0)
                    }
                }
            },
            delLayer: function (t) {
                var e = this._layers,
                    i = this._zlevelList,
                    r = e[t];
                r && (r.dom.parentNode.removeChild(r.dom), delete e[t], i.splice(o(i, t), 1))
            },
            resize: function (t, e) {
                if (this._domRoot.style) {
                    var i = this._domRoot;
                    i.style.display = "none";
                    var r = this._opts;
                    if (null != t && (r.width = t), null != e && (r.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                        i.style.width = t + "px", i.style.height = e + "px";
                        for (var n in this._layers) this._layers.hasOwnProperty(n) && this._layers[n].resize(t, e);
                        u(this._progressiveLayers, function (i) {
                            i.resize(t, e)
                        }), this.refresh(!0)
                    }
                    this._width = t, this._height = e
                } else {
                    if (null == t || null == e) return;
                    this._width = t, this._height = e, this.getLayer(314159).resize(t, e)
                }
                return this
            },
            clearLayer: function (t) {
                var e = this._layers[t];
                e && e.clear()
            },
            dispose: function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            },
            getRenderedCanvas: function (t) {
                if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
                var e = new ia("image", this, t.pixelRatio || this.dpr);
                if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                    this.refresh();
                    var i = e.dom.width,
                        r = e.dom.height,
                        n = e.ctx;
                    this.eachLayer(function (t) {
                        t.__builtin__ ? n.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                    })
                } else
                    for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                        var h = o[s];
                        this._doPaintEl(h, e, !0, a)
                    }
                return e.dom
            },
            getWidth: function () {
                return this._width
            },
            getHeight: function () {
                return this._height
            },
            _getSize: function (t) {
                var e = this._opts,
                    i = ["width", "height"][t],
                    r = ["clientWidth", "clientHeight"][t],
                    n = ["paddingLeft", "paddingTop"][t],
                    a = ["paddingRight", "paddingBottom"][t];
                if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
                var o = this.root,
                    s = document.defaultView.getComputedStyle(o);
                return (o[r] || Ne(s[i]) || Ne(o.style[i])) - (Ne(s[n]) || 0) - (Ne(s[a]) || 0) | 0
            },
            pathToImage: function (t, e) {
                e = e || this.dpr;
                var i = document.createElement("canvas"),
                    r = i.getContext("2d"),
                    n = t.getBoundingRect(),
                    a = t.style,
                    o = a.shadowBlur * e,
                    s = a.shadowOffsetX * e,
                    h = a.shadowOffsetY * e,
                    l = a.hasStroke() ? a.lineWidth : 0,
                    u = Math.max(l / 2, -s + o),
                    c = Math.max(l / 2, s + o),
                    f = Math.max(l / 2, -h + o),
                    d = Math.max(l / 2, h + o),
                    p = n.width + u + c,
                    g = n.height + f + d;
                i.width = p * e, i.height = g * e, r.scale(e, e), r.clearRect(0, 0, p, g), r.dpr = e;
                var v = {
                    position: t.position,
                    rotation: t.rotation,
                    scale: t.scale
                };
                t.position = [u - n.x, f - n.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(r);
                var _ = new We({
                    style: {
                        x: 0,
                        y: 0,
                        image: i
                    }
                });
                return null != v.position && (_.position = t.position = v.position), null != v.rotation && (_.rotation = t.rotation = v.rotation), null != v.scale && (_.scale = t.scale = v.scale), _
            }
        };
        var ma = function (t) {
            t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, an.call(this)
        };
        ma.prototype = {
            constructor: ma,
            addClip: function (t) {
                this._clips.push(t)
            },
            addAnimator: function (t) {
                t.animation = this;
                for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
            },
            removeClip: function (t) {
                var e = o(this._clips, t);
                e >= 0 && this._clips.splice(e, 1)
            },
            removeAnimator: function (t) {
                for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
                t.animation = null
            },
            _update: function () {
                for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, r = i.length, n = [], a = [], o = 0; o < r; o++) {
                    var s = i[o],
                        h = s.step(t, e);
                    h && (n.push(h), a.push(s))
                }
                for (o = 0; o < r;) i[o]._needsRemove ? (i[o] = i[r - 1], i.pop(), r--) : o++;
                r = n.length;
                for (o = 0; o < r; o++) a[o].fire(n[o]);
                this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
            },
            _startLoop: function () {
                function t() {
                    e._running && (ra(t), !e._paused && e._update())
                }
                var e = this;
                this._running = !0, ra(t)
            },
            start: function () {
                this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
            },
            stop: function () {
                this._running = !1
            },
            pause: function () {
                this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
            },
            resume: function () {
                this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
            },
            clear: function () {
                this._clips = []
            },
            isFinished: function () {
                return !this._clips.length
            },
            animate: function (t, e) {
                var i = new In(t, (e = e || {}).loop, e.getter, e.setter);
                return this.addAnimator(i), i
            }
        }, h(ma, an);
        var xa = function () {
            this._track = []
        };
        xa.prototype = {
            constructor: xa,
            recognize: function (t, e, i) {
                return this._doTrack(t, e, i), this._recognize(t)
            },
            clear: function () {
                return this._track.length = 0, this
            },
            _doTrack: function (t, e, i) {
                var r = t.touches;
                if (r) {
                    for (var n = {
                            points: [],
                            touches: [],
                            target: e,
                            event: t
                        }, a = 0, o = r.length; a < o; a++) {
                        var s = r[a],
                            h = V(i, s, {});
                        n.points.push([h.zrX, h.zrY]), n.touches.push(s)
                    }
                    this._track.push(n)
                }
            },
            _recognize: function (t) {
                for (var e in wa)
                    if (wa.hasOwnProperty(e)) {
                        var i = wa[e](this._track, t);
                        if (i) return i
                    }
            }
        };
        var wa = {
                pinch: function (t, e) {
                    var i = t.length;
                    if (i) {
                        var r = (t[i - 1] || {}).points,
                            n = (t[i - 2] || {}).points || r;
                        if (n && n.length > 1 && r && r.length > 1) {
                            var a = Ue(r) / Ue(n);
                            !isFinite(a) && (a = 1), e.pinchScale = a;
                            var o = Ge(r);
                            return e.pinchX = o[0], e.pinchY = o[1], {
                                type: "pinch",
                                target: t[0].target,
                                event: e
                            }
                        }
                    }
                }
            },
            ba = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            ka = ["touchstart", "touchend", "touchmove"],
            Ta = {
                pointerdown: 1,
                pointerup: 1,
                pointermove: 1,
                pointerout: 1
            },
            Sa = c(ba, function (t) {
                var e = t.replace("mouse", "pointer");
                return Ta[e] ? e : t
            }),
            Ma = {
                mousemove: function (t) {
                    t = j(this.dom, t), this.trigger("mousemove", t)
                },
                mouseout: function (t) {
                    var e = (t = j(this.dom, t)).toElement || t.relatedTarget;
                    if (e != this.dom)
                        for (; e && 9 != e.nodeType;) {
                            if (e === this.dom) return;
                            e = e.parentNode
                        }
                    this.trigger("mouseout", t)
                },
                touchstart: function (t) {
                    (t = j(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date, Qe(this, t, "start"), Ma.mousemove.call(this, t), Ma.mousedown.call(this, t), $e(this)
                },
                touchmove: function (t) {
                    (t = j(this.dom, t)).zrByTouch = !0, Qe(this, t, "change"), Ma.mousemove.call(this, t), $e(this)
                },
                touchend: function (t) {
                    (t = j(this.dom, t)).zrByTouch = !0, Qe(this, t, "end"), Ma.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && Ma.click.call(this, t), $e(this)
                },
                pointerdown: function (t) {
                    Ma.mousedown.call(this, t)
                },
                pointermove: function (t) {
                    Ke(t) || Ma.mousemove.call(this, t)
                },
                pointerup: function (t) {
                    Ma.mouseup.call(this, t)
                },
                pointerout: function (t) {
                    Ke(t) || Ma.mouseout.call(this, t)
                }
            };
        u(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            Ma[t] = function (e) {
                e = j(this.dom, e), this.trigger(t, e)
            }
        });
        var Ca = ti.prototype;
        Ca.dispose = function () {
            for (var t = ba.concat(ka), e = 0; e < t.length; e++) {
                var i = t[e];
                Y(this.dom, Ze(i), this._handlers[i])
            }
        }, Ca.setCursor = function (t) {
            this.dom.style && (this.dom.style.cursor = t || "default")
        }, h(ti, an);
        var Aa = !Or.canvasSupported,
            Pa = {
                canvas: ya
            },
            La = {},
            za = function (t, e, i) {
                i = i || {}, this.dom = e, this.id = t;
                var r = this,
                    n = new Un,
                    a = i.renderer;
                if (Aa) {
                    if (!Pa.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                    a = "vml"
                } else a && Pa[a] || (a = "canvas");
                var o = new Pa[a](e, n, i, t);
                this.storage = n, this.painter = o;
                var s = Or.node || Or.worker ? null : new ti(o.getViewportRoot());
                this.handler = new cn(n, o, s, o.root), this.animation = new ma({
                    stage: {
                        update: f(this.flush, this)
                    }
                }), this.animation.start(), this._needsRefresh;
                var h = n.delFromStorage,
                    l = n.addToStorage;
                n.delFromStorage = function (t) {
                    h.call(n, t), t && t.removeSelfFromZr(r)
                }, n.addToStorage = function (t) {
                    l.call(n, t), t.addSelfToZr(r)
                }
            };
        za.prototype = {
            constructor: za,
            getId: function () {
                return this.id
            },
            add: function (t) {
                this.storage.addRoot(t), this._needsRefresh = !0
            },
            remove: function (t) {
                this.storage.delRoot(t), this._needsRefresh = !0
            },
            configLayer: function (t, e) {
                this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
            },
            setBackgroundColor: function (t) {
                this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
            },
            refreshImmediately: function () {
                this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            },
            refresh: function () {
                this._needsRefresh = !0
            },
            flush: function () {
                var t;
                this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
            },
            addHover: function (t, e) {
                if (this.painter.addHover) {
                    var i = this.painter.addHover(t, e);
                    return this.refreshHover(), i
                }
            },
            removeHover: function (t) {
                this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
            },
            clearHover: function () {
                this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
            },
            refreshHover: function () {
                this._needsRefreshHover = !0
            },
            refreshHoverImmediately: function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
            },
            resize: function (t) {
                t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
            },
            clearAnimation: function () {
                this.animation.clear()
            },
            getWidth: function () {
                return this.painter.getWidth()
            },
            getHeight: function () {
                return this.painter.getHeight()
            },
            pathToImage: function (t, e) {
                return this.painter.pathToImage(t, e)
            },
            setCursorStyle: function (t) {
                this.handler.setCursorStyle(t)
            },
            findHover: function (t, e) {
                return this.handler.findHover(t, e)
            },
            on: function (t, e, i) {
                this.handler.on(t, e, i)
            },
            off: function (t, e) {
                this.handler.off(t, e)
            },
            trigger: function (t, e) {
                this.handler.trigger(t, e)
            },
            clear: function () {
                this.storage.delRoot(), this.painter.clear()
            },
            dispose: function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, ii(this.id)
            }
        };
        var Da = Math.pow,
            Ba = Math.sqrt,
            Ia = 1e-8,
            Ra = 1e-4,
            Oa = Ba(3),
            Fa = 1 / 3,
            Ea = S(),
            Ha = S(),
            Wa = S(),
            Na = Math.min,
            Va = Math.max,
            qa = Math.sin,
            ja = Math.cos,
            Xa = 2 * Math.PI,
            Ya = S(),
            Ua = S(),
            Ga = S(),
            Za = [],
            Qa = [],
            $a = {
                M: 1,
                L: 2,
                C: 3,
                Q: 4,
                A: 5,
                Z: 6,
                R: 7
            },
            Ka = [],
            Ja = [],
            to = [],
            eo = [],
            io = Math.min,
            ro = Math.max,
            no = Math.cos,
            ao = Math.sin,
            oo = Math.sqrt,
            so = Math.abs,
            ho = "undefined" != typeof Float32Array,
            lo = function (t) {
                this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
            };
        lo.prototype = {
            constructor: lo,
            _xi: 0,
            _yi: 0,
            _x0: 0,
            _y0: 0,
            _ux: 0,
            _uy: 0,
            _len: 0,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e) {
                this._ux = so(1 / On / t) || 0, this._uy = so(1 / On / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData($a.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var i = so(t - this._xi) > this._ux || so(e - this._yi) > this._uy || this._len < 5;
                return this.addData($a.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, i, r, n, a) {
                return this.addData($a.C, t, e, i, r, n, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, r, n, a) : this._ctx.bezierCurveTo(t, e, i, r, n, a)), this._xi = n, this._yi = a, this
            },
            quadraticCurveTo: function (t, e, i, r) {
                return this.addData($a.Q, t, e, i, r), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, r) : this._ctx.quadraticCurveTo(t, e, i, r)), this._xi = i, this._yi = r, this
            },
            arc: function (t, e, i, r, n, a) {
                return this.addData($a.A, t, e, i, i, r, n - r, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, r, n, a), this._xi = no(n) * i + t, this._yi = ao(n) * i + e, this
            },
            arcTo: function (t, e, i, r, n) {
                return this._ctx && this._ctx.arcTo(t, e, i, r, n), this
            },
            rect: function (t, e, i, r) {
                return this._ctx && this._ctx.rect(t, e, i, r), this.addData($a.R, t, e, i, r), this
            },
            closePath: function () {
                this.addData($a.Z);
                var t = this._ctx,
                    e = this._x0,
                    i = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length == e || !ho || (this.data = new Float32Array(e));
                for (var i = 0; i < e; i++) this.data[i] = t[i];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, i = 0, r = this._len, n = 0; n < e; n++) i += t[n].len();
                ho && this.data instanceof Float32Array && (this.data = new Float32Array(r + i));
                for (n = 0; n < e; n++)
                    for (var a = t[n].data, o = 0; o < a.length; o++) this.data[r++] = a[o];
                this._len = r
            },
            addData: function (t) {
                if (this._saveData) {
                    var e = this.data;
                    this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                    for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                    this._prevCmd = t
                }
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var i, r, n = this._dashSum,
                    a = this._dashOffset,
                    o = this._lineDash,
                    s = this._ctx,
                    h = this._xi,
                    l = this._yi,
                    u = t - h,
                    c = e - l,
                    f = oo(u * u + c * c),
                    d = h,
                    p = l,
                    g = o.length;
                for (u /= f, c /= f, a < 0 && (a = n + a), d -= (a %= n) * u, p -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e);) d += u * (i = o[r = this._dashIdx]), p += c * i, this._dashIdx = (r + 1) % g, u > 0 && d < h || u < 0 && d > h || c > 0 && p < l || c < 0 && p > l || s[r % 2 ? "moveTo" : "lineTo"](u >= 0 ? io(d, t) : ro(d, t), c >= 0 ? io(p, e) : ro(p, e));
                u = d - t, c = p - e, this._dashOffset = -oo(u * u + c * c)
            },
            _dashedBezierTo: function (t, e, i, r, n, a) {
                var o, s, h, l, u, c = this._dashSum,
                    f = this._dashOffset,
                    d = this._lineDash,
                    p = this._ctx,
                    g = this._xi,
                    v = this._yi,
                    _ = ai,
                    y = 0,
                    m = this._dashIdx,
                    x = d.length,
                    w = 0;
                for (f < 0 && (f = c + f), f %= c, o = 0; o < 1; o += .1) s = _(g, t, i, n, o + .1) - _(g, t, i, n, o), h = _(v, e, r, a, o + .1) - _(v, e, r, a, o), y += oo(s * s + h * h);
                for (; m < x && !((w += d[m]) > f); m++);
                for (o = (w - f) / y; o <= 1;) l = _(g, t, i, n, o), u = _(v, e, r, a, o), m % 2 ? p.moveTo(l, u) : p.lineTo(l, u), o += d[m] / y, m = (m + 1) % x;
                m % 2 != 0 && p.lineTo(n, a), s = n - l, h = a - u, this._dashOffset = -oo(s * s + h * h)
            },
            _dashedQuadraticTo: function (t, e, i, r) {
                var n = i,
                    a = r;
                i = (i + 2 * t) / 3, r = (r + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, r, n, a)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, ho && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                Ka[0] = Ka[1] = to[0] = to[1] = Number.MAX_VALUE, Ja[0] = Ja[1] = eo[0] = eo[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, i = 0, r = 0, n = 0, a = 0; a < t.length;) {
                    var o = t[a++];
                    switch (1 == a && (r = e = t[a], n = i = t[a + 1]), o) {
                        case $a.M:
                            e = r = t[a++], i = n = t[a++], to[0] = r, to[1] = n, eo[0] = r, eo[1] = n;
                            break;
                        case $a.L:
                            _i(e, i, t[a], t[a + 1], to, eo), e = t[a++], i = t[a++];
                            break;
                        case $a.C:
                            yi(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], to, eo), e = t[a++], i = t[a++];
                            break;
                        case $a.Q:
                            mi(e, i, t[a++], t[a++], t[a], t[a + 1], to, eo), e = t[a++], i = t[a++];
                            break;
                        case $a.A:
                            var s = t[a++],
                                h = t[a++],
                                l = t[a++],
                                u = t[a++],
                                c = t[a++],
                                f = t[a++] + c,
                                d = (t[a++], 1 - t[a++]);
                            1 == a && (r = no(c) * l + s, n = ao(c) * u + h), xi(s, h, l, u, c, f, d, to, eo), e = no(f) * l + s, i = ao(f) * u + h;
                            break;
                        case $a.R:
                            _i(r = e = t[a++], n = i = t[a++], r + t[a++], n + t[a++], to, eo);
                            break;
                        case $a.Z:
                            e = r, i = n
                    }
                    O(Ka, Ka, to), F(Ja, Ja, eo)
                }
                return 0 === a && (Ka[0] = Ka[1] = Ja[0] = Ja[1] = 0), new Ht(Ka[0], Ka[1], Ja[0] - Ka[0], Ja[1] - Ka[1])
            },
            rebuildPath: function (t) {
                for (var e, i, r, n, a, o, s = this.data, h = this._ux, l = this._uy, u = this._len, c = 0; c < u;) {
                    var f = s[c++];
                    switch (1 == c && (e = r = s[c], i = n = s[c + 1]), f) {
                        case $a.M:
                            e = r = s[c++], i = n = s[c++], t.moveTo(r, n);
                            break;
                        case $a.L:
                            a = s[c++], o = s[c++], (so(a - r) > h || so(o - n) > l || c === u - 1) && (t.lineTo(a, o), r = a, n = o);
                            break;
                        case $a.C:
                            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), r = s[c - 2], n = s[c - 1];
                            break;
                        case $a.Q:
                            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), r = s[c - 2], n = s[c - 1];
                            break;
                        case $a.A:
                            var d = s[c++],
                                p = s[c++],
                                g = s[c++],
                                v = s[c++],
                                _ = s[c++],
                                y = s[c++],
                                m = s[c++],
                                x = s[c++],
                                w = g > v ? g : v,
                                b = g > v ? 1 : g / v,
                                k = g > v ? v / g : 1,
                                T = _ + y;
                            Math.abs(g - v) > .001 ? (t.translate(d, p), t.rotate(m), t.scale(b, k), t.arc(0, 0, w, _, T, 1 - x), t.scale(1 / b, 1 / k), t.rotate(-m), t.translate(-d, -p)) : t.arc(d, p, w, _, T, 1 - x), 1 == c && (e = no(_) * g + d, i = ao(_) * v + p), r = no(T) * g + d, n = ao(T) * v + p;
                            break;
                        case $a.R:
                            e = r = s[c], i = n = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                            break;
                        case $a.Z:
                            t.closePath(), r = e, n = i
                    }
                }
            }
        }, lo.CMD = $a;
        var uo = 2 * Math.PI,
            co = 2 * Math.PI,
            fo = lo.CMD,
            po = 2 * Math.PI,
            go = 1e-4,
            vo = [-1, -1, -1],
            _o = [-1, -1],
            yo = ea.prototype.getCanvasPattern,
            mo = Math.abs,
            xo = new lo(!0);
        Ri.prototype = {
            constructor: Ri,
            type: "path",
            __dirtyPath: !0,
            strokeContainThreshold: 5,
            brush: function (t, e) {
                var i = this.style,
                    r = this.path || xo,
                    n = i.hasStroke(),
                    a = i.hasFill(),
                    o = i.fill,
                    s = i.stroke,
                    h = a && !!o.colorStops,
                    l = n && !!s.colorStops,
                    u = a && !!o.image,
                    c = n && !!s.image;
                if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                    var f;
                    h && (f = f || this.getBoundingRect(), this._fillGradient = i.getGradient(t, o, f)), l && (f = f || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, f))
                }
                h ? t.fillStyle = this._fillGradient : u && (t.fillStyle = yo.call(o, t)), l ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = yo.call(s, t));
                var d = i.lineDash,
                    p = i.lineDashOffset,
                    g = !!t.setLineDash,
                    v = this.getGlobalScale();
                if (r.setScale(v[0], v[1]), this.__dirtyPath || d && !g && n ? (r.beginPath(t), d && !g && (r.setLineDash(d), r.setLineDashOffset(p)), this.buildPath(r, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a)
                    if (null != i.fillOpacity) {
                        _ = t.globalAlpha;
                        t.globalAlpha = i.fillOpacity * i.opacity, r.fill(t), t.globalAlpha = _
                    } else r.fill(t);
                if (d && g && (t.setLineDash(d), t.lineDashOffset = p), n)
                    if (null != i.strokeOpacity) {
                        var _ = t.globalAlpha;
                        t.globalAlpha = i.strokeOpacity * i.opacity, r.stroke(t), t.globalAlpha = _
                    } else r.stroke(t);
                d && g && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            },
            buildPath: function (t, e, i) {},
            createPathProxy: function () {
                this.path = new lo
            },
            getBoundingRect: function () {
                var t = this._rect,
                    e = this.style,
                    i = !t;
                if (i) {
                    var r = this.path;
                    r || (r = this.path = new lo), this.__dirtyPath && (r.beginPath(), this.buildPath(r, this.shape, !1)), t = r.getBoundingRect()
                }
                if (this._rect = t, e.hasStroke()) {
                    var n = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || i) {
                        n.copy(t);
                        var a = e.lineWidth,
                            o = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (n.width += a / o, n.height += a / o, n.x -= a / o / 2, n.y -= a / o / 2)
                    }
                    return n
                }
                return t
            },
            contain: function (t, e) {
                var i = this.transformCoordToLocal(t, e),
                    r = this.getBoundingRect(),
                    n = this.style;
                if (t = i[0], e = i[1], r.contain(t, e)) {
                    var a = this.path.data;
                    if (n.hasStroke()) {
                        var o = n.lineWidth,
                            s = n.strokeNoScale ? this.getLineScale() : 1;
                        if (s > 1e-10 && (n.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Ii(a, o / s, t, e))) return !0
                    }
                    if (n.hasFill()) return Bi(a, t, e)
                }
                return !1
            },
            dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            },
            animateShape: function (t) {
                return this.animate("shape", t)
            },
            attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : He.prototype.attrKV.call(this, t, e)
            },
            setShape: function (t, e) {
                var i = this.shape;
                if (i) {
                    if (v(t))
                        for (var r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
                    else i[t] = e;
                    this.dirty(!0)
                }
                return this
            },
            getLineScale: function () {
                var t = this.transform;
                return t && mo(t[0] - 1) > 1e-10 && mo(t[3] - 1) > 1e-10 ? Math.sqrt(mo(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, Ri.extend = function (t) {
            var e = function (e) {
                Ri.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var i = t.shape;
                if (i) {
                    this.shape = this.shape || {};
                    var r = this.shape;
                    for (var n in i) !r.hasOwnProperty(n) && i.hasOwnProperty(n) && (r[n] = i[n])
                }
                t.init && t.init.call(this, e)
            };
            s(e, Ri);
            for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
            return e
        }, s(Ri, He);
        var wo = lo.CMD,
            bo = [
                [],
                [],
                []
            ],
            ko = Math.sqrt,
            To = Math.atan2,
            So = function (t, e) {
                var i, r, n, a, o, s, h = t.data,
                    l = wo.M,
                    u = wo.C,
                    c = wo.L,
                    f = wo.R,
                    d = wo.A,
                    p = wo.Q;
                for (n = 0, a = 0; n < h.length;) {
                    switch (i = h[n++], a = n, r = 0, i) {
                        case l:
                        case c:
                            r = 1;
                            break;
                        case u:
                            r = 3;
                            break;
                        case p:
                            r = 2;
                            break;
                        case d:
                            var g = e[4],
                                v = e[5],
                                _ = ko(e[0] * e[0] + e[1] * e[1]),
                                y = ko(e[2] * e[2] + e[3] * e[3]),
                                m = To(-e[1] / y, e[0] / _);
                            h[n] *= _, h[n++] += g, h[n] *= y, h[n++] += v, h[n++] *= _, h[n++] *= y, h[n++] += m, h[n++] += m, a = n += 2;
                            break;
                        case f:
                            s[0] = h[n++], s[1] = h[n++], R(s, s, e), h[a++] = s[0], h[a++] = s[1], s[0] += h[n++], s[1] += h[n++], R(s, s, e), h[a++] = s[0], h[a++] = s[1]
                    }
                    for (o = 0; o < r; o++)(s = bo[o])[0] = h[n++], s[1] = h[n++], R(s, s, e), h[a++] = s[0], h[a++] = s[1]
                }
            },
            Mo = Math.sqrt,
            Co = Math.sin,
            Ao = Math.cos,
            Po = Math.PI,
            Lo = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            },
            zo = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (Lo(t) * Lo(e))
            },
            Do = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(zo(t, e))
            },
            Bo = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
            Io = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
            Ro = (Object.freeze || Object)({
                createFromString: Hi,
                extendFromString: function (t, e) {
                    return Ri.extend(Ei(t, e))
                },
                mergePath: function (t, e) {
                    for (var i = [], r = t.length, n = 0; n < r; n++) {
                        var a = t[n];
                        a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path)
                    }
                    var o = new Ri(e);
                    return o.createPathProxy(), o.buildPath = function (t) {
                        t.appendPath(i);
                        var e = t.getContext();
                        e && t.rebuildPath(e)
                    }, o
                }
            }),
            Oo = function (t) {
                He.call(this, t)
            };
        Oo.prototype = {
            constructor: Oo,
            type: "text",
            brush: function (t, e) {
                var i = this.style;
                this.__dirty && we(i), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
                var r = i.text;
                null != r && (r += ""), Ee(r, i) && (this.setTransform(t), ke(this, t, r, i, null, e), this.restoreTransform(t))
            },
            getBoundingRect: function () {
                var t = this.style;
                if (this.__dirty && we(t), !this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var i = ne(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                    if (i.x += t.x || 0, i.y += t.y || 0, Ie(t.textStroke, t.textStrokeWidth)) {
                        var r = t.textStrokeWidth;
                        i.x -= r / 2, i.y -= r / 2, i.width += r, i.height += r
                    }
                    this._rect = i
                }
                return this._rect
            }
        }, s(Oo, He);
        var Fo = Ri.extend({
                type: "circle",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0
                },
                buildPath: function (t, e, i) {
                    i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
                }
            }),
            Eo = Ri.extend({
                type: "rect",
                shape: {
                    r: 0,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.x,
                        r = e.y,
                        n = e.width,
                        a = e.height;
                    e.r ? xe(t, e) : t.rect(i, r, n, a), t.closePath()
                }
            }),
            Ho = Ri.extend({
                type: "ellipse",
                shape: {
                    cx: 0,
                    cy: 0,
                    rx: 0,
                    ry: 0
                },
                buildPath: function (t, e) {
                    var i = .5522848,
                        r = e.cx,
                        n = e.cy,
                        a = e.rx,
                        o = e.ry,
                        s = a * i,
                        h = o * i;
                    t.moveTo(r - a, n), t.bezierCurveTo(r - a, n - h, r - s, n - o, r, n - o), t.bezierCurveTo(r + s, n - o, r + a, n - h, r + a, n), t.bezierCurveTo(r + a, n + h, r + s, n + o, r, n + o), t.bezierCurveTo(r - s, n + o, r - a, n + h, r - a, n), t.closePath()
                }
            }),
            Wo = Ri.extend({
                type: "line",
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    percent: 1
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i = e.x1,
                        r = e.y1,
                        n = e.x2,
                        a = e.y2,
                        o = e.percent;
                    0 !== o && (t.moveTo(i, r), o < 1 && (n = i * (1 - o) + n * o, a = r * (1 - o) + a * o), t.lineTo(n, a))
                },
                pointAt: function (t) {
                    var e = this.shape;
                    return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
                }
            }),
            No = function (t, e) {
                for (var i = t.length, r = [], n = 0, a = 1; a < i; a++) n += B(t[a - 1], t[a]);
                var o = n / 2;
                o = o < i ? i : o;
                for (a = 0; a < o; a++) {
                    var s, h, l, u = a / (o - 1) * (e ? i : i - 1),
                        c = Math.floor(u),
                        f = u - c,
                        d = t[c % i];
                    e ? (s = t[(c - 1 + i) % i], h = t[(c + 1) % i], l = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], h = t[c > i - 2 ? i - 1 : c + 1], l = t[c > i - 3 ? i - 1 : c + 2]);
                    var p = f * f,
                        g = f * p;
                    r.push([Wi(s[0], d[0], h[0], l[0], f, p, g), Wi(s[1], d[1], h[1], l[1], f, p, g)])
                }
                return r
            },
            Vo = function (t, e, i, r) {
                var n, a, o, s, h = [],
                    l = [],
                    u = [],
                    c = [];
                if (r) {
                    o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                    for (var f = 0, d = t.length; f < d; f++) O(o, o, t[f]), F(s, s, t[f]);
                    O(o, o, r[0]), F(s, s, r[1])
                }
                for (var f = 0, d = t.length; f < d; f++) {
                    var p = t[f];
                    if (i) n = t[f ? f - 1 : d - 1], a = t[(f + 1) % d];
                    else {
                        if (0 === f || f === d - 1) {
                            h.push(M(t[f]));
                            continue
                        }
                        n = t[f - 1], a = t[f + 1]
                    }
                    A(l, a, n), z(l, l, e);
                    var g = B(p, n),
                        v = B(p, a),
                        _ = g + v;
                    0 !== _ && (g /= _, v /= _), z(u, l, -g), z(c, l, v);
                    var y = C([], p, u),
                        m = C([], p, c);
                    r && (F(y, y, o), O(y, y, s), F(m, m, o), O(m, m, s)), h.push(y), h.push(m)
                }
                return i && h.push(h.shift()), h
            },
            qo = Ri.extend({
                type: "polygon",
                shape: {
                    points: null,
                    smooth: !1,
                    smoothConstraint: null
                },
                buildPath: function (t, e) {
                    Ni(t, e, !0)
                }
            }),
            jo = Ri.extend({
                type: "polyline",
                shape: {
                    points: null,
                    smooth: !1,
                    smoothConstraint: null
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    Ni(t, e, !1)
                }
            }),
            Xo = function (t) {
                this.colorStops = t || []
            };
        Xo.prototype = {
            constructor: Xo,
            addColorStop: function (t, e) {
                this.colorStops.push({
                    offset: t,
                    color: e
                })
            }
        };
        var Yo = function (t, e, i, r, n, a) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == r ? 0 : r, this.type = "linear", this.global = a || !1, Xo.call(this, n)
        };
        Yo.prototype = {
            constructor: Yo
        }, s(Yo, Xo);
        var Uo = /[\s,]+/;
        qi.prototype.parse = function (t, e) {
            e = e || {};
            var i = Vi(t);
            if (!i) throw new Error("Illegal svg");
            var r = new jn;
            this._root = r;
            var n = i.getAttribute("viewBox") || "",
                a = parseFloat(i.getAttribute("width") || e.width),
                o = parseFloat(i.getAttribute("height") || e.height);
            isNaN(a) && (a = null), isNaN(o) && (o = null), Ui(i, r, null, !0);
            for (var s = i.firstChild; s;) this._parseNode(s, r), s = s.nextSibling;
            var h, l;
            if (n) {
                var u = b(n).split(Uo);
                u.length >= 4 && (h = {
                    x: parseFloat(u[0] || 0),
                    y: parseFloat(u[1] || 0),
                    width: parseFloat(u[2]),
                    height: parseFloat(u[3])
                })
            }
            if (h && null != a && null != o && (l = $i(h, a, o), !e.ignoreViewBox)) {
                var c = r;
                (r = new jn).add(c), c.scale = l.scale.slice(), c.position = l.position.slice()
            }
            return e.ignoreRootClip || null == a || null == o || r.setClipPath(new Eo({
                shape: {
                    x: 0,
                    y: 0,
                    width: a,
                    height: o
                }
            })), {
                root: r,
                width: a,
                height: o,
                viewBoxRect: h,
                viewBoxTransform: l
            }
        }, qi.prototype._parseNode = function (t, e) {
            var i = t.nodeName.toLowerCase();
            "defs" === i ? this._isDefine = !0 : "text" === i && (this._isText = !0);
            var r;
            if (this._isDefine) {
                if (o = Zo[i]) {
                    var n = o.call(this, t),
                        a = t.getAttribute("id");
                    a && (this._defs[a] = n)
                }
            } else {
                var o = Go[i];
                o && (r = o.call(this, t, e), e.add(r))
            }
            for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, r), 3 === s.nodeType && this._isText && this._parseText(s, r), s = s.nextSibling;
            "defs" === i ? this._isDefine = !1 : "text" === i && (this._isText = !1)
        }, qi.prototype._parseText = function (t, e) {
            if (1 === t.nodeType) {
                var i = t.getAttribute("dx") || 0,
                    r = t.getAttribute("dy") || 0;
                this._textX += parseFloat(i), this._textY += parseFloat(r)
            }
            var n = new Oo({
                style: {
                    text: t.textContent,
                    transformText: !0
                },
                position: [this._textX || 0, this._textY || 0]
            });
            Xi(e, n), Ui(t, n, this._defs);
            var a = n.style.fontSize;
            a && a < 9 && (n.style.fontSize = 9, n.scale = n.scale || [1, 1], n.scale[0] *= a / 9, n.scale[1] *= a / 9);
            var o = n.getBoundingRect();
            return this._textX += o.width, e.add(n), n
        };
        var Go = {
                g: function (t, e) {
                    var i = new jn;
                    return Xi(e, i), Ui(t, i, this._defs), i
                },
                rect: function (t, e) {
                    var i = new Eo;
                    return Xi(e, i), Ui(t, i, this._defs), i.setShape({
                        x: parseFloat(t.getAttribute("x") || 0),
                        y: parseFloat(t.getAttribute("y") || 0),
                        width: parseFloat(t.getAttribute("width") || 0),
                        height: parseFloat(t.getAttribute("height") || 0)
                    }), i
                },
                circle: function (t, e) {
                    var i = new Fo;
                    return Xi(e, i), Ui(t, i, this._defs), i.setShape({
                        cx: parseFloat(t.getAttribute("cx") || 0),
                        cy: parseFloat(t.getAttribute("cy") || 0),
                        r: parseFloat(t.getAttribute("r") || 0)
                    }), i
                },
                line: function (t, e) {
                    var i = new Wo;
                    return Xi(e, i), Ui(t, i, this._defs), i.setShape({
                        x1: parseFloat(t.getAttribute("x1") || 0),
                        y1: parseFloat(t.getAttribute("y1") || 0),
                        x2: parseFloat(t.getAttribute("x2") || 0),
                        y2: parseFloat(t.getAttribute("y2") || 0)
                    }), i
                },
                ellipse: function (t, e) {
                    var i = new Ho;
                    return Xi(e, i), Ui(t, i, this._defs), i.setShape({
                        cx: parseFloat(t.getAttribute("cx") || 0),
                        cy: parseFloat(t.getAttribute("cy") || 0),
                        rx: parseFloat(t.getAttribute("rx") || 0),
                        ry: parseFloat(t.getAttribute("ry") || 0)
                    }), i
                },
                polygon: function (t, e) {
                    var i = t.getAttribute("points");
                    i && (i = Yi(i));
                    var r = new qo({
                        shape: {
                            points: i || []
                        }
                    });
                    return Xi(e, r), Ui(t, r, this._defs), r
                },
                polyline: function (t, e) {
                    var i = new Ri;
                    Xi(e, i), Ui(t, i, this._defs);
                    var r = t.getAttribute("points");
                    return r && (r = Yi(r)), new jo({
                        shape: {
                            points: r || []
                        }
                    })
                },
                image: function (t, e) {
                    var i = new We;
                    return Xi(e, i), Ui(t, i, this._defs), i.setStyle({
                        image: t.getAttribute("xlink:href"),
                        x: t.getAttribute("x"),
                        y: t.getAttribute("y"),
                        width: t.getAttribute("width"),
                        height: t.getAttribute("height")
                    }), i
                },
                text: function (t, e) {
                    var i = t.getAttribute("x") || 0,
                        r = t.getAttribute("y") || 0,
                        n = t.getAttribute("dx") || 0,
                        a = t.getAttribute("dy") || 0;
                    this._textX = parseFloat(i) + parseFloat(n), this._textY = parseFloat(r) + parseFloat(a);
                    var o = new jn;
                    return Xi(e, o), Ui(t, o, this._defs), o
                },
                tspan: function (t, e) {
                    var i = t.getAttribute("x"),
                        r = t.getAttribute("y");
                    null != i && (this._textX = parseFloat(i)), null != r && (this._textY = parseFloat(r));
                    var n = t.getAttribute("dx") || 0,
                        a = t.getAttribute("dy") || 0,
                        o = new jn;
                    return Xi(e, o), Ui(t, o, this._defs), this._textX += n, this._textY += a, o
                },
                path: function (t, e) {
                    var i = Hi(t.getAttribute("d") || "");
                    return Xi(e, i), Ui(t, i, this._defs), i
                }
            },
            Zo = {
                lineargradient: function (t) {
                    var e = parseInt(t.getAttribute("x1") || 0, 10),
                        i = parseInt(t.getAttribute("y1") || 0, 10),
                        r = parseInt(t.getAttribute("x2") || 10, 10),
                        n = parseInt(t.getAttribute("y2") || 0, 10),
                        a = new Yo(e, i, r, n);
                    return ji(t, a), a
                },
                radialgradient: function (t) {}
            },
            Qo = {
                fill: "fill",
                stroke: "stroke",
                "stroke-width": "lineWidth",
                opacity: "opacity",
                "fill-opacity": "fillOpacity",
                "stroke-opacity": "strokeOpacity",
                "stroke-dasharray": "lineDash",
                "stroke-dashoffset": "lineDashOffset",
                "stroke-linecap": "lineCap",
                "stroke-linejoin": "lineJoin",
                "stroke-miterlimit": "miterLimit",
                "font-family": "fontFamily",
                "font-size": "fontSize",
                "font-style": "fontStyle",
                "font-weight": "fontWeight",
                "text-align": "textAlign",
                "alignment-baseline": "textBaseline"
            },
            $o = /url\(\s*#(.*?)\)/,
            Ko = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
            Jo = /([^\s:;]+)\s*:\s*([^:;]+)/g,
            ts = Ri.extend({
                type: "compound",
                shape: {
                    paths: null
                },
                _updatePathDirty: function () {
                    for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
                    this.__dirtyPath = t, this.__dirty = this.__dirty || t
                },
                beforeBrush: function () {
                    this._updatePathDirty();
                    for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1])
                },
                buildPath: function (t, e) {
                    for (var i = e.paths || [], r = 0; r < i.length; r++) i[r].buildPath(t, i[r].shape, !0)
                },
                afterBrush: function () {
                    for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
                },
                getBoundingRect: function () {
                    return this._updatePathDirty(), Ri.prototype.getBoundingRect.call(this)
                }
            });
        Ki.prototype.incremental = !0, Ki.prototype.clearDisplaybles = function () {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
        }, Ki.prototype.addDisplayable = function (t, e) {
            e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
        }, Ki.prototype.addDisplayables = function (t, e) {
            e = e || !1;
            for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e)
        }, Ki.prototype.eachPendingDisplayable = function (t) {
            for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
        }, Ki.prototype.update = function () {
            this.updateTransform();
            for (t = this._cursor; t < this._displayables.length; t++)(e = this._displayables[t]).parent = this, e.update(), e.parent = null;
            for (var t = 0; t < this._temporaryDisplayables.length; t++) {
                var e = this._temporaryDisplayables[t];
                e.parent = this, e.update(), e.parent = null
            }
        }, Ki.prototype.brush = function (t, e) {
            for (i = this._cursor; i < this._displayables.length; i++)(r = this._displayables[i]).beforeBrush && r.beforeBrush(t), r.brush(t, i === this._cursor ? null : this._displayables[i - 1]), r.afterBrush && r.afterBrush(t);
            this._cursor = i;
            for (var i = 0; i < this._temporaryDisplayables.length; i++) {
                var r = this._temporaryDisplayables[i];
                r.beforeBrush && r.beforeBrush(t), r.brush(t, 0 === i ? null : this._temporaryDisplayables[i - 1]), r.afterBrush && r.afterBrush(t)
            }
            this._temporaryDisplayables = [], this.notClear = !0
        };
        var es = [];
        Ki.prototype.getBoundingRect = function () {
            if (!this._rect) {
                for (var t = new Ht(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                    var i = this._displayables[e],
                        r = i.getBoundingRect().clone();
                    i.needLocalTransform() && r.applyTransform(i.getLocalTransform(es)), t.union(r)
                }
                this._rect = t
            }
            return this._rect
        }, Ki.prototype.contain = function (t, e) {
            var i = this.transformCoordToLocal(t, e);
            if (this.getBoundingRect().contain(i[0], i[1]))
                for (var r = 0; r < this._displayables.length; r++)
                    if (this._displayables[r].contain(t, e)) return !0;
            return !1
        }, s(Ki, He);
        var is = Ri.extend({
                type: "arc",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !0
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        r = e.cy,
                        n = Math.max(e.r, 0),
                        a = e.startAngle,
                        o = e.endAngle,
                        s = e.clockwise,
                        h = Math.cos(a),
                        l = Math.sin(a);
                    t.moveTo(h * n + i, l * n + r), t.arc(i, r, n, a, o, !s)
                }
            }),
            rs = [],
            ns = Ri.extend({
                type: "bezier-curve",
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    cpx1: 0,
                    cpy1: 0,
                    percent: 1
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i = e.x1,
                        r = e.y1,
                        n = e.x2,
                        a = e.y2,
                        o = e.cpx1,
                        s = e.cpy1,
                        h = e.cpx2,
                        l = e.cpy2,
                        u = e.percent;
                    0 !== u && (t.moveTo(i, r), null == h || null == l ? (u < 1 && (gi(i, o, n, u, rs), o = rs[1], n = rs[2], gi(r, s, a, u, rs), s = rs[1], a = rs[2]), t.quadraticCurveTo(o, s, n, a)) : (u < 1 && (li(i, o, h, n, u, rs), o = rs[1], h = rs[2], n = rs[3], li(r, s, l, a, u, rs), s = rs[1], l = rs[2], a = rs[3]), t.bezierCurveTo(o, s, h, l, n, a)))
                },
                pointAt: function (t) {
                    return Ji(this.shape, t, !1)
                },
                tangentAt: function (t) {
                    var e = Ji(this.shape, t, !0);
                    return D(e, e)
                }
            }),
            as = Ri.extend({
                type: "droplet",
                shape: {
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        r = e.cy,
                        n = e.width,
                        a = e.height;
                    t.moveTo(i, r + n), t.bezierCurveTo(i + n, r + n, i + 3 * n / 2, r - n / 3, i, r - a), t.bezierCurveTo(i - 3 * n / 2, r - n / 3, i - n, r + n, i, r + n), t.closePath()
                }
            }),
            os = Ri.extend({
                type: "heart",
                shape: {
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        r = e.cy,
                        n = e.width,
                        a = e.height;
                    t.moveTo(i, r), t.bezierCurveTo(i + n / 2, r - 2 * a / 3, i + 2 * n, r + a / 3, i, r + a), t.bezierCurveTo(i - 2 * n, r + a / 3, i - n / 2, r - 2 * a / 3, i, r)
                }
            }),
            ss = Math.PI,
            hs = Math.sin,
            ls = Math.cos,
            us = Ri.extend({
                type: "isogon",
                shape: {
                    x: 0,
                    y: 0,
                    r: 0,
                    n: 0
                },
                buildPath: function (t, e) {
                    var i = e.n;
                    if (i && !(i < 2)) {
                        var r = e.x,
                            n = e.y,
                            a = e.r,
                            o = 2 * ss / i,
                            s = -ss / 2;
                        t.moveTo(r + a * ls(s), n + a * hs(s));
                        for (var h = 0, l = i - 1; h < l; h++) s += o, t.lineTo(r + a * ls(s), n + a * hs(s));
                        t.closePath()
                    }
                }
            }),
            cs = Ri.extend({
                type: "ring",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    r0: 0
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        r = e.cy,
                        n = 2 * Math.PI;
                    t.moveTo(i + e.r, r), t.arc(i, r, e.r, 0, n, !1), t.moveTo(i + e.r0, r), t.arc(i, r, e.r0, 0, n, !0)
                }
            }),
            fs = Math.sin,
            ds = Math.cos,
            ps = Math.PI / 180,
            gs = Ri.extend({
                type: "rose",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: [],
                    k: 0,
                    n: 1
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i, r, n, a = e.r,
                        o = e.k,
                        s = e.n,
                        h = e.cx,
                        l = e.cy;
                    t.moveTo(h, l);
                    for (var u = 0, c = a.length; u < c; u++) {
                        n = a[u];
                        for (var f = 0; f <= 360 * s; f++) i = n * fs(o / s * f % 360 * ps) * ds(f * ps) + h, r = n * fs(o / s * f % 360 * ps) * fs(f * ps) + l, t.lineTo(i, r)
                    }
                }
            }),
            vs = [
                ["shadowBlur", 0],
                ["shadowColor", "#000"],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0]
            ],
            _s = Ri.extend({
                type: "sector",
                shape: {
                    cx: 0,
                    cy: 0,
                    r0: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !0
                },
                brush: function (t) {
                    return Or.browser.ie && Or.browser.version >= 11 ? function () {
                        var e, i = this.__clipPaths,
                            r = this.style;
                        if (i)
                            for (var n = 0; n < i.length; n++) {
                                var a = i[n],
                                    o = a && a.shape,
                                    s = a && a.type;
                                if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                                    for (h = 0; h < vs.length; h++) vs[h][2] = r[vs[h][0]], r[vs[h][0]] = vs[h][1];
                                    e = !0;
                                    break
                                }
                            }
                        if (t.apply(this, arguments), e)
                            for (var h = 0; h < vs.length; h++) r[vs[h][0]] = vs[h][2]
                    } : t
                }(Ri.prototype.brush),
                buildPath: function (t, e) {
                    var i = e.cx,
                        r = e.cy,
                        n = Math.max(e.r0 || 0, 0),
                        a = Math.max(e.r, 0),
                        o = e.startAngle,
                        s = e.endAngle,
                        h = e.clockwise,
                        l = Math.cos(o),
                        u = Math.sin(o);
                    t.moveTo(l * n + i, u * n + r), t.lineTo(l * a + i, u * a + r), t.arc(i, r, a, o, s, !h), t.lineTo(Math.cos(s) * n + i, Math.sin(s) * n + r), 0 !== n && t.arc(i, r, n, s, o, h), t.closePath()
                }
            }),
            ys = Math.PI,
            ms = Math.cos,
            xs = Math.sin,
            ws = Ri.extend({
                type: "star",
                shape: {
                    cx: 0,
                    cy: 0,
                    n: 3,
                    r0: null,
                    r: 0
                },
                buildPath: function (t, e) {
                    var i = e.n;
                    if (i && !(i < 2)) {
                        var r = e.cx,
                            n = e.cy,
                            a = e.r,
                            o = e.r0;
                        null == o && (o = i > 4 ? a * ms(2 * ys / i) / ms(ys / i) : a / 3);
                        var s = ys / i,
                            h = -ys / 2,
                            l = r + a * ms(h),
                            u = n + a * xs(h);
                        h += s, t.moveTo(l, u);
                        for (var c, f = 0, d = 2 * i - 1; f < d; f++) c = f % 2 == 0 ? o : a, t.lineTo(r + c * ms(h), n + c * xs(h)), h += s;
                        t.closePath()
                    }
                }
            }),
            bs = Math.cos,
            ks = Math.sin,
            Ts = Ri.extend({
                type: "trochoid",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    r0: 0,
                    d: 0,
                    location: "out"
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i, r, n, a, o = e.r,
                        s = e.r0,
                        h = e.d,
                        l = e.cx,
                        u = e.cy,
                        c = "out" == e.location ? 1 : -1;
                    if (!(e.location && o <= s)) {
                        var f, d = 0,
                            p = 1;
                        i = (o + c * s) * bs(0) - c * h * bs(0) + l, r = (o + c * s) * ks(0) - h * ks(0) + u, t.moveTo(i, r);
                        do {
                            d++
                        } while (s * d % (o + c * s) != 0);
                        do {
                            f = Math.PI / 180 * p, n = (o + c * s) * bs(f) - c * h * bs((o / s + c) * f) + l, a = (o + c * s) * ks(f) - h * ks((o / s + c) * f) + u, t.lineTo(n, a), p++
                        } while (p <= s * d / (o + c * s) * 360)
                    }
                }
            }),
            Ss = function (t, e, i, r, n) {
                this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = n || !1, Xo.call(this, r)
            };
        Ss.prototype = {
            constructor: Ss
        }, s(Ss, Xo);
        var Ms = "http://www.w3.org/2000/svg",
            Cs = lo.CMD,
            As = Array.prototype.join,
            Ps = "none",
            Ls = Math.round,
            zs = Math.sin,
            Ds = Math.cos,
            Bs = Math.PI,
            Is = 2 * Math.PI,
            Rs = 180 / Bs,
            Os = 1e-4,
            Fs = {};
        Fs.brush = function (t) {
            var e = t.style,
                i = t.__svgEl;
            i || (i = tr("path"), t.__svgEl = i), t.path || t.createPathProxy();
            var r = t.path;
            if (t.__dirtyPath) {
                r.beginPath(), t.buildPath(r, t.shape), t.__dirtyPath = !1;
                var n = lr(r);
                n.indexOf("NaN") < 0 && or(i, "d", n)
            }
            hr(i, e, !1, t), ar(i, t.transform), null != e.text && Ns(t, t.getBoundingRect())
        };
        var Es = {};
        Es.brush = function (t) {
            var e = t.style,
                i = e.image;
            if (i instanceof HTMLImageElement && (i = i.src), i) {
                var r = e.x || 0,
                    n = e.y || 0,
                    a = e.width,
                    o = e.height,
                    s = t.__svgEl;
                s || (s = tr("image"), t.__svgEl = s), i !== t.__imageSrc && (sr(s, "href", i), t.__imageSrc = i), or(s, "width", a), or(s, "height", o), or(s, "x", r), or(s, "y", n), ar(s, t.transform), null != e.text && Ns(t, t.getBoundingRect())
            }
        };
        var Hs = {},
            Ws = new Ht,
            Ns = function (t, e, i) {
                var r = t.style;
                t.__dirty && we(r);
                var n = r.text;
                if (null != n) {
                    n += "";
                    var a = t.__textSvgEl;
                    a || (a = tr("text"), t.__textSvgEl = a);
                    var o, s, h = r.textPosition,
                        l = r.textDistance,
                        u = r.textAlign || "left";
                    "number" == typeof r.fontSize && (r.fontSize += "px");
                    var c = r.font || [r.fontStyle || "", r.fontWeight || "", r.fontSize || "", r.fontFamily || ""].join(" ") || la,
                        f = ur(r.textVerticalAlign),
                        d = (i = ne(n, c, u, f)).lineHeight;
                    if (h instanceof Array) o = e.x + h[0], s = e.y + h[1];
                    else {
                        var p = le(h, e, l);
                        o = p.x, s = p.y, f = ur(p.textVerticalAlign), u = p.textAlign
                    }
                    or(a, "alignment-baseline", f), c && (a.style.font = c);
                    var g = r.textPadding;
                    if (or(a, "x", o), or(a, "y", s), hr(a, r, !0, t), t instanceof Oo || t.style.transformText) ar(a, t.transform);
                    else {
                        if (t.transform) Ws.copy(e), Ws.applyTransform(t.transform), e = Ws;
                        else {
                            var v = t.transformCoordToGlobal(e.x, e.y);
                            e.x = v[0], e.y = v[1], t.transform = K($())
                        }
                        var _ = r.textOrigin;
                        "center" === _ ? (o = i.width / 2 + o, s = i.height / 2 + s) : _ && (o = _[0] + o, s = _[1] + s);
                        var y = -r.textRotation || 0,
                            m = $();
                        it(m, m, y), et(m, m, v = [t.transform[4], t.transform[5]]), ar(a, m)
                    }
                    var x = n.split("\n"),
                        w = x.length,
                        b = u;
                    "left" === b ? (b = "start", g && (o += g[3])) : "right" === b ? (b = "end", g && (o -= g[1])) : "center" === b && (b = "middle", g && (o += (g[3] - g[1]) / 2));
                    var k = 0;
                    if ("after-edge" === f ? (k = -i.height + d, g && (k -= g[2])) : "middle" === f ? (k = (-i.height + d) / 2, g && (s += (g[0] - g[2]) / 2)) : g && (k += g[0]), t.__text !== n || t.__textFont !== c) {
                        var T = t.__tspanList || [];
                        t.__tspanList = T;
                        for (M = 0; M < w; M++)(C = T[M]) ? C.innerHTML = "" : (C = T[M] = tr("tspan"), a.appendChild(C), or(C, "alignment-baseline", f), or(C, "text-anchor", b)), or(C, "x", o), or(C, "y", s + M * d + k), C.appendChild(document.createTextNode(x[M]));
                        for (; M < T.length; M++) a.removeChild(T[M]);
                        T.length = w, t.__text = n, t.__textFont = c
                    } else if (t.__tspanList.length)
                        for (var S = t.__tspanList.length, M = 0; M < S; ++M) {
                            var C = t.__tspanList[M];
                            C && (or(C, "x", o), or(C, "y", s + M * d + k))
                        }
                }
            };
        Hs.drawRectText = Ns, Hs.brush = function (t) {
            var e = t.style;
            null != e.text && (e.textPosition = [0, 0], Ns(t, {
                x: e.x || 0,
                y: e.y || 0,
                width: 0,
                height: 0
            }, t.getBoundingRect()))
        }, cr.prototype = {
            diff: function (t, e, i) {
                i || (i = function (t, e) {
                    return t === e
                }), this.equals = i;
                var r = this;
                t = t.slice();
                var n = (e = e.slice()).length,
                    a = t.length,
                    o = 1,
                    s = n + a,
                    h = [{
                        newPos: -1,
                        components: []
                    }],
                    l = this.extractCommon(h[0], e, t, 0);
                if (h[0].newPos + 1 >= n && l + 1 >= a) {
                    for (var u = [], c = 0; c < e.length; c++) u.push(c);
                    return [{
                        indices: u,
                        count: e.length
                    }]
                }
                for (; o <= s;) {
                    var f = function () {
                        for (var i = -1 * o; i <= o; i += 2) {
                            var s, l = h[i - 1],
                                u = h[i + 1],
                                c = (u ? u.newPos : 0) - i;
                            l && (h[i - 1] = void 0);
                            var f = l && l.newPos + 1 < n,
                                d = u && 0 <= c && c < a;
                            if (f || d) {
                                if (!f || d && l.newPos < u.newPos ? (s = dr(u), r.pushComponent(s.components, void 0, !0)) : ((s = l).newPos++, r.pushComponent(s.components, !0, void 0)), c = r.extractCommon(s, e, t, i), s.newPos + 1 >= n && c + 1 >= a) return fr(0, s.components);
                                h[i] = s
                            } else h[i] = void 0
                        }
                        o++
                    }();
                    if (f) return f
                }
            },
            pushComponent: function (t, e, i) {
                var r = t[t.length - 1];
                r && r.added === e && r.removed === i ? t[t.length - 1] = {
                    count: r.count + 1,
                    added: e,
                    removed: i
                } : t.push({
                    count: 1,
                    added: e,
                    removed: i
                })
            },
            extractCommon: function (t, e, i, r) {
                for (var n = e.length, a = i.length, o = t.newPos, s = o - r, h = 0; o + 1 < n && s + 1 < a && this.equals(e[o + 1], i[s + 1]);) o++, s++, h++;
                return h && t.components.push({
                    count: h
                }), t.newPos = o, s
            },
            tokenize: function (t) {
                return t.slice()
            },
            join: function (t) {
                return t.slice()
            }
        };
        var Vs = new cr,
            qs = function (t, e, i) {
                return Vs.diff(t, e, i)
            };
        pr.prototype.createElement = tr, pr.prototype.getDefs = function (t) {
            var e = this._svgRoot,
                i = this._svgRoot.getElementsByTagName("defs");
            return 0 === i.length ? t ? ((i = e.insertBefore(this.createElement("defs"), e.firstChild)).contains || (i.contains = function (t) {
                var e = i.children;
                if (!e) return !1;
                for (var r = e.length - 1; r >= 0; --r)
                    if (e[r] === t) return !0;
                return !1
            }), i) : null : i[0]
        }, pr.prototype.update = function (t, e) {
            if (t) {
                var i = this.getDefs(!1);
                if (t[this._domName] && i.contains(t[this._domName])) "function" == typeof e && e(t);
                else {
                    var r = this.add(t);
                    r && (t[this._domName] = r)
                }
            }
        }, pr.prototype.addDom = function (t) {
            this.getDefs(!0).appendChild(t)
        }, pr.prototype.removeDom = function (t) {
            var e = this.getDefs(!1);
            e && t[this._domName] && (e.removeChild(t[this._domName]), t[this._domName] = null)
        }, pr.prototype.getDoms = function () {
            var t = this.getDefs(!1);
            if (!t) return [];
            var e = [];
            return u(this._tagNames, function (i) {
                var r = t.getElementsByTagName(i);
                e = e.concat([].slice.call(r))
            }), e
        }, pr.prototype.markAllUnused = function () {
            var t = this;
            u(this.getDoms(), function (e) {
                e[t._markLabel] = "0"
            })
        }, pr.prototype.markUsed = function (t) {
            t && (t[this._markLabel] = "1")
        }, pr.prototype.removeUnused = function () {
            var t = this.getDefs(!1);
            if (t) {
                var e = this;
                u(this.getDoms(), function (i) {
                    "1" !== i[e._markLabel] && t.removeChild(i)
                })
            }
        }, pr.prototype.getSvgProxy = function (t) {
            return t instanceof Ri ? Fs : t instanceof We ? Es : t instanceof Oo ? Hs : Fs
        }, pr.prototype.getTextSvgElement = function (t) {
            return t.__textSvgEl
        }, pr.prototype.getSvgElement = function (t) {
            return t.__svgEl
        }, s(gr, pr), gr.prototype.addWithoutUpdate = function (t, e) {
            if (e && e.style) {
                var i = this;
                u(["fill", "stroke"], function (r) {
                    if (e.style[r] && ("linear" === e.style[r].type || "radial" === e.style[r].type)) {
                        var n, a = e.style[r],
                            o = i.getDefs(!0);
                        a._dom ? (n = a._dom, o.contains(a._dom) || i.addDom(n)) : n = i.add(a), i.markUsed(e);
                        var s = n.getAttribute("id");
                        t.setAttribute(r, "url(#" + s + ")")
                    }
                })
            }
        }, gr.prototype.add = function (t) {
            var e;
            if ("linear" === t.type) e = this.createElement("linearGradient");
            else {
                if ("radial" !== t.type) return En("Illegal gradient type."), null;
                e = this.createElement("radialGradient")
            }
            return t.id = t.id || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-gradient-" + t.id), this.updateDom(t, e), this.addDom(e), e
        }, gr.prototype.update = function (t) {
            var e = this;
            pr.prototype.update.call(this, t, function () {
                var i = t.type,
                    r = t._dom.tagName;
                "linear" === i && "linearGradient" === r || "radial" === i && "radialGradient" === r ? e.updateDom(t, t._dom) : (e.removeDom(t), e.add(t))
            })
        }, gr.prototype.updateDom = function (t, e) {
            if ("linear" === t.type) e.setAttribute("x1", t.x), e.setAttribute("y1", t.y), e.setAttribute("x2", t.x2), e.setAttribute("y2", t.y2);
            else {
                if ("radial" !== t.type) return void En("Illegal gradient type.");
                e.setAttribute("cx", t.x), e.setAttribute("cy", t.y), e.setAttribute("r", t.r)
            }
            t.global ? e.setAttribute("gradientUnits", "userSpaceOnUse") : e.setAttribute("gradientUnits", "objectBoundingBox"), e.innerHTML = "";
            for (var i = t.colorStops, r = 0, n = i.length; r < n; ++r) {
                var a = this.createElement("stop");
                a.setAttribute("offset", 100 * i[r].offset + "%"), a.setAttribute("stop-color", i[r].color), e.appendChild(a)
            }
            t._dom = e
        }, gr.prototype.markUsed = function (t) {
            if (t.style) {
                var e = t.style.fill;
                e && e._dom && pr.prototype.markUsed.call(this, e._dom), (e = t.style.stroke) && e._dom && pr.prototype.markUsed.call(this, e._dom)
            }
        }, s(vr, pr), vr.prototype.update = function (t) {
            var e = this.getSvgElement(t);
            e && this.updateDom(e, t.__clipPaths, !1);
            var i = this.getTextSvgElement(t);
            i && this.updateDom(i, t.__clipPaths, !0), this.markUsed(t)
        }, vr.prototype.updateDom = function (t, e, i) {
            if (e && e.length > 0) {
                var r, n, a = this.getDefs(!0),
                    o = e[0],
                    s = i ? "_textDom" : "_dom";
                o[s] ? (n = o[s].getAttribute("id"), r = o[s], a.contains(r) || a.appendChild(r)) : (n = "zr" + this._zrId + "-clip-" + this.nextId, ++this.nextId, (r = this.createElement("clipPath")).setAttribute("id", n), a.appendChild(r), o[s] = r);
                var h = this.getSvgProxy(o);
                if (o.transform && o.parent.invTransform && !i) {
                    var l = Array.prototype.slice.call(o.transform);
                    tt(o.transform, o.parent.invTransform, o.transform), h.brush(o), o.transform = l
                } else h.brush(o);
                var u = this.getSvgElement(o);
                r.innerHTML = "", r.appendChild(u.cloneNode()), t.setAttribute("clip-path", "url(#" + n + ")"), e.length > 1 && this.updateDom(r, e.slice(1), i)
            } else t && t.setAttribute("clip-path", "none")
        }, vr.prototype.markUsed = function (t) {
            var e = this;
            t.__clipPaths && t.__clipPaths.length > 0 && u(t.__clipPaths, function (t) {
                t._dom && pr.prototype.markUsed.call(e, t._dom), t._textDom && pr.prototype.markUsed.call(e, t._textDom)
            })
        }, s(_r, pr), _r.prototype.addWithoutUpdate = function (t, e) {
            if (e && yr(e.style)) {
                var i, r = e.style;
                r._shadowDom ? (i = r._shadowDom, this.getDefs(!0).contains(r._shadowDom) || this.addDom(i)) : i = this.add(e), this.markUsed(e);
                var n = i.getAttribute("id");
                t.style.filter = "url(#" + n + ")"
            }
        }, _r.prototype.add = function (t) {
            var e = this.createElement("filter"),
                i = t.style;
            return i._shadowDomId = i._shadowDomId || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-shadow-" + i._shadowDomId), this.updateDom(t, e), this.addDom(e), e
        }, _r.prototype.update = function (t, e) {
            var i = e.style;
            if (yr(i)) {
                var r = this;
                pr.prototype.update.call(this, e, function (t) {
                    r.updateDom(e, t._shadowDom)
                })
            } else this.remove(t, i)
        }, _r.prototype.remove = function (t, e) {
            null != e._shadowDomId && (this.removeDom(e), t.style.filter = "")
        }, _r.prototype.updateDom = function (t, e) {
            var i = e.getElementsByTagName("feDropShadow");
            i = 0 === i.length ? this.createElement("feDropShadow") : i[0];
            var r, n, a, o, s = t.style,
                h = t.scale ? t.scale[0] || 1 : 1,
                l = t.scale ? t.scale[1] || 1 : 1;
            if (s.shadowBlur || s.shadowOffsetX || s.shadowOffsetY) r = s.shadowOffsetX || 0, n = s.shadowOffsetY || 0, a = s.shadowBlur, o = s.shadowColor;
            else {
                if (!s.textShadowBlur) return void this.removeDom(e, s);
                r = s.textShadowOffsetX || 0, n = s.textShadowOffsetY || 0, a = s.textShadowBlur, o = s.textShadowColor
            }
            i.setAttribute("dx", r / h), i.setAttribute("dy", n / l), i.setAttribute("flood-color", o);
            var u = a / 2 / h + " " + a / 2 / l;
            i.setAttribute("stdDeviation", u), e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", Math.ceil(a / 2 * 200) + "%"), e.setAttribute("height", Math.ceil(a / 2 * 200) + "%"), e.appendChild(i), s._shadowDom = e
        }, _r.prototype.markUsed = function (t) {
            var e = t.style;
            e && e._shadowDom && pr.prototype.markUsed.call(this, e._shadowDom)
        };
        var js = function (t, e, i, n) {
            this.root = t, this.storage = e, this._opts = i = r({}, i || {});
            var a = tr("svg");
            a.setAttribute("xmlns", "http://www.w3.org/2000/svg"), a.setAttribute("version", "1.1"), a.setAttribute("baseProfile", "full"), a.style.cssText = "user-select:none;position:absolute;left:0;top:0;", this.gradientManager = new gr(n, a), this.clipPathManager = new vr(n, a), this.shadowManager = new _r(n, a);
            var o = document.createElement("div");
            o.style.cssText = "overflow:hidden;position:relative", this._svgRoot = a, this._viewport = o, t.appendChild(o), o.appendChild(a), this.resize(i.width, i.height), this._visibleList = []
        };
        js.prototype = {
            constructor: js,
            getType: function () {
                return "svg"
            },
            getViewportRoot: function () {
                return this._viewport
            },
            getViewportRootOffset: function () {
                var t = this.getViewportRoot();
                if (t) return {
                    offsetLeft: t.offsetLeft || 0,
                    offsetTop: t.offsetTop || 0
                }
            },
            refresh: function () {
                var t = this.storage.getDisplayList(!0);
                this._paintList(t)
            },
            setBackgroundColor: function (t) {
                this._viewport.style.background = t
            },
            _paintList: function (t) {
                this.gradientManager.markAllUnused(), this.clipPathManager.markAllUnused(), this.shadowManager.markAllUnused();
                var e, i = this._svgRoot,
                    r = this._visibleList,
                    n = t.length,
                    a = [];
                for (e = 0; e < n; e++) {
                    var o = xr(d = t[e]),
                        s = Mr(d) || Sr(d);
                    d.invisible || (d.__dirty && (o && o.brush(d), this.clipPathManager.update(d), d.style && (this.gradientManager.update(d.style.fill), this.gradientManager.update(d.style.stroke), this.shadowManager.update(s, d)), d.__dirty = !1), a.push(d))
                }
                var h, l = qs(r, a);
                for (e = 0; e < l.length; e++)
                    if ((c = l[e]).removed)
                        for (f = 0; f < c.count; f++) {
                            var s = Mr(d = r[c.indices[f]]),
                                u = Sr(d);
                            Tr(i, s), Tr(i, u)
                        }
                for (e = 0; e < l.length; e++) {
                    var c = l[e];
                    if (c.added)
                        for (f = 0; f < c.count; f++) {
                            var s = Mr(d = a[c.indices[f]]),
                                u = Sr(d);
                            h ? br(i, s, h) : kr(i, s), s ? br(i, u, s) : h ? br(i, u, h) : kr(i, u), br(i, u, s), h = u || s || h, this.gradientManager.addWithoutUpdate(s, d), this.shadowManager.addWithoutUpdate(h, d), this.clipPathManager.markUsed(d)
                        } else if (!c.removed)
                            for (var f = 0; f < c.count; f++) {
                                var d = a[c.indices[f]];
                                h = s = Sr(d) || Mr(d) || h, this.gradientManager.markUsed(d), this.gradientManager.addWithoutUpdate(s, d), this.shadowManager.markUsed(d), this.shadowManager.addWithoutUpdate(s, d), this.clipPathManager.markUsed(d)
                            }
                }
                this.gradientManager.removeUnused(), this.clipPathManager.removeUnused(), this.shadowManager.removeUnused(), this._visibleList = a
            },
            _getDefs: function (t) {
                var e = this._svgRoot,
                    i = this._svgRoot.getElementsByTagName("defs");
                return 0 === i.length ? t ? ((i = e.insertBefore(tr("defs"), e.firstChild)).contains || (i.contains = function (t) {
                    var e = i.children;
                    if (!e) return !1;
                    for (var r = e.length - 1; r >= 0; --r)
                        if (e[r] === t) return !0;
                    return !1
                }), i) : null : i[0]
            },
            resize: function (t, e) {
                var i = this._viewport;
                i.style.display = "none";
                var r = this._opts;
                if (null != t && (r.width = t), null != e && (r.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width !== t || this._height !== e) {
                    this._width = t, this._height = e;
                    var n = i.style;
                    n.width = t + "px", n.height = e + "px";
                    var a = this._svgRoot;
                    a.setAttribute("width", t), a.setAttribute("height", e)
                }
            },
            getWidth: function () {
                return this._width
            },
            getHeight: function () {
                return this._height
            },
            _getSize: function (t) {
                var e = this._opts,
                    i = ["width", "height"][t],
                    r = ["clientWidth", "clientHeight"][t],
                    n = ["paddingLeft", "paddingTop"][t],
                    a = ["paddingRight", "paddingBottom"][t];
                if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
                var o = this.root,
                    s = document.defaultView.getComputedStyle(o);
                return (o[r] || mr(s[i]) || mr(o.style[i])) - (mr(s[n]) || 0) - (mr(s[a]) || 0) | 0
            },
            dispose: function () {
                this.root.innerHTML = "", this._svgRoot = this._viewport = this.storage = null
            },
            clear: function () {
                this._viewport && this.root.removeChild(this._viewport)
            },
            pathToDataUrl: function () {
                return this.refresh(), "data:image/svg+xml;charset=UTF-8," + this._svgRoot.outerHTML
            }
        }, u(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
            js.prototype[t] = Cr(t)
        }), ei("svg", js);
        var Xs, Ys = "urn:schemas-microsoft-com:vml",
            Us = "undefined" == typeof window ? null : window,
            Gs = !1,
            Zs = Us && Us.document;
        if (Zs && !Or.canvasSupported) try {
            !Zs.namespaces.zrvml && Zs.namespaces.add("zrvml", Ys), Xs = function (t) {
                return Zs.createElement("<zrvml:" + t + ' class="zrvml">')
            }
        } catch (t) {
            Xs = function (t) {
                return Zs.createElement("<" + t + ' xmlns="' + Ys + '" class="zrvml">')
            }
        }
        var Qs = lo.CMD,
            $s = Math.round,
            Ks = Math.sqrt,
            Js = Math.abs,
            th = Math.cos,
            eh = Math.sin,
            ih = Math.max;
        if (!Or.canvasSupported) {
            var rh = 21600,
                nh = rh / 2,
                ah = function (t) {
                    t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = rh + "," + rh, t.coordorigin = "0,0"
                },
                oh = function (t) {
                    return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
                },
                sh = function (t, e, i) {
                    return "rgb(" + [t, e, i].join(",") + ")"
                },
                hh = function (t, e) {
                    e && t && e.parentNode !== t && t.appendChild(e)
                },
                lh = function (t, e) {
                    e && t && e.parentNode === t && t.removeChild(e)
                },
                uh = function (t, e, i) {
                    return 1e5 * (parseFloat(t) || 0) + 1e3 * (parseFloat(e) || 0) + i
                },
                ch = function (t, e) {
                    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
                },
                fh = function (t, e, i) {
                    var r = _t(e);
                    i = +i, isNaN(i) && (i = 1), r && (t.color = sh(r[0], r[1], r[2]), t.opacity = i * r[3])
                },
                dh = function (t) {
                    var e = _t(t);
                    return [sh(e[0], e[1], e[2]), e[3]]
                },
                ph = function (t, e, i) {
                    var r = e.fill;
                    if (null != r)
                        if (r instanceof Xo) {
                            var n, a = 0,
                                o = [0, 0],
                                s = 0,
                                h = 1,
                                l = i.getBoundingRect(),
                                u = l.width,
                                c = l.height;
                            if ("linear" === r.type) {
                                n = "gradient";
                                var f = i.transform,
                                    d = [r.x * u, r.y * c],
                                    p = [r.x2 * u, r.y2 * c];
                                f && (R(d, d, f), R(p, p, f));
                                var g = p[0] - d[0],
                                    v = p[1] - d[1];
                                (a = 180 * Math.atan2(g, v) / Math.PI) < 0 && (a += 360), a < 1e-6 && (a = 0)
                            } else {
                                n = "gradientradial";
                                var d = [r.x * u, r.y * c],
                                    f = i.transform,
                                    _ = i.scale,
                                    y = u,
                                    m = c;
                                o = [(d[0] - l.x) / y, (d[1] - l.y) / m], f && R(d, d, f), y /= _[0] * rh, m /= _[1] * rh;
                                var x = ih(y, m);
                                s = 0 / x, h = 2 * r.r / x - s
                            }
                            var w = r.colorStops.slice();
                            w.sort(function (t, e) {
                                return t.offset - e.offset
                            });
                            for (var b = w.length, k = [], T = [], S = 0; S < b; S++) {
                                var M = w[S],
                                    C = dh(M.color);
                                T.push(M.offset * h + s + " " + C[0]), 0 !== S && S !== b - 1 || k.push(C)
                            }
                            if (b >= 2) {
                                var A = k[0][0],
                                    P = k[1][0],
                                    L = k[0][1] * e.opacity,
                                    z = k[1][1] * e.opacity;
                                t.type = n, t.method = "none", t.focus = "100%", t.angle = a, t.color = A, t.color2 = P, t.colors = T.join(","), t.opacity = z, t.opacity2 = L
                            }
                            "radial" === n && (t.focusposition = o.join(","))
                        } else fh(t, r, e.opacity)
                },
                gh = function (t, e) {
                    null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof Xo || fh(t, e.stroke, e.opacity)
                },
                vh = function (t, e, i, r) {
                    var n = "fill" == e,
                        a = t.getElementsByTagName(e)[0];
                    null != i[e] && "none" !== i[e] && (n || !n && i.lineWidth) ? (t[n ? "filled" : "stroked"] = "true", i[e] instanceof Xo && lh(t, a), a || (a = Ar(e)), n ? ph(a, i, r) : gh(a, i), hh(t, a)) : (t[n ? "filled" : "stroked"] = "false", lh(t, a))
                },
                _h = [
                    [],
                    [],
                    []
                ],
                yh = function (t, e) {
                    var i, r, n, a, o, s, h = Qs.M,
                        l = Qs.C,
                        u = Qs.L,
                        c = Qs.A,
                        f = Qs.Q,
                        d = [],
                        p = t.data,
                        g = t.len();
                    for (a = 0; a < g;) {
                        switch (n = p[a++], r = "", i = 0, n) {
                            case h:
                                r = " m ", i = 1, o = p[a++], s = p[a++], _h[0][0] = o, _h[0][1] = s;
                                break;
                            case u:
                                r = " l ", i = 1, o = p[a++], s = p[a++], _h[0][0] = o, _h[0][1] = s;
                                break;
                            case f:
                            case l:
                                r = " c ", i = 3;
                                var v, _, y = p[a++],
                                    m = p[a++],
                                    x = p[a++],
                                    w = p[a++];
                                n === f ? (v = x, _ = w, x = (x + 2 * y) / 3, w = (w + 2 * m) / 3, y = (o + 2 * y) / 3, m = (s + 2 * m) / 3) : (v = p[a++], _ = p[a++]), _h[0][0] = y, _h[0][1] = m, _h[1][0] = x, _h[1][1] = w, _h[2][0] = v, _h[2][1] = _, o = v, s = _;
                                break;
                            case c:
                                var b = 0,
                                    k = 0,
                                    T = 1,
                                    S = 1,
                                    M = 0;
                                e && (b = e[4], k = e[5], T = Ks(e[0] * e[0] + e[1] * e[1]), S = Ks(e[2] * e[2] + e[3] * e[3]), M = Math.atan2(-e[1] / S, e[0] / T));
                                var C = p[a++],
                                    A = p[a++],
                                    P = p[a++],
                                    L = p[a++],
                                    z = p[a++] + M,
                                    D = p[a++] + z + M;
                                a++;
                                var B = p[a++],
                                    I = C + th(z) * P,
                                    O = A + eh(z) * L,
                                    y = C + th(D) * P,
                                    m = A + eh(D) * L,
                                    F = B ? " wa " : " at ";
                                Math.abs(I - y) < 1e-4 && (Math.abs(D - z) > .01 ? B && (I += .0125) : Math.abs(O - A) < 1e-4 ? B && I < C || !B && I > C ? m -= .0125 : m += .0125 : B && O < A || !B && O > A ? y += .0125 : y -= .0125), d.push(F, $s(((C - P) * T + b) * rh - nh), ",", $s(((A - L) * S + k) * rh - nh), ",", $s(((C + P) * T + b) * rh - nh), ",", $s(((A + L) * S + k) * rh - nh), ",", $s((I * T + b) * rh - nh), ",", $s((O * S + k) * rh - nh), ",", $s((y * T + b) * rh - nh), ",", $s((m * S + k) * rh - nh)), o = y, s = m;
                                break;
                            case Qs.R:
                                var E = _h[0],
                                    H = _h[1];
                                E[0] = p[a++], E[1] = p[a++], H[0] = E[0] + p[a++], H[1] = E[1] + p[a++], e && (R(E, E, e), R(H, H, e)), E[0] = $s(E[0] * rh - nh), H[0] = $s(H[0] * rh - nh), E[1] = $s(E[1] * rh - nh), H[1] = $s(H[1] * rh - nh), d.push(" m ", E[0], ",", E[1], " l ", H[0], ",", E[1], " l ", H[0], ",", H[1], " l ", E[0], ",", H[1]);
                                break;
                            case Qs.Z:
                                d.push(" x ")
                        }
                        if (i > 0) {
                            d.push(r);
                            for (var W = 0; W < i; W++) {
                                var N = _h[W];
                                e && R(N, N, e), d.push($s(N[0] * rh - nh), ",", $s(N[1] * rh - nh), W < i - 1 ? "," : "")
                            }
                        }
                    }
                    return d.join("")
                };
            Ri.prototype.brushVML = function (t) {
                var e = this.style,
                    i = this._vmlEl;
                i || (i = Ar("shape"), ah(i), this._vmlEl = i), vh(i, "fill", e, this), vh(i, "stroke", e, this);
                var r = this.transform,
                    n = null != r,
                    a = i.getElementsByTagName("stroke")[0];
                if (a) {
                    var o = e.lineWidth;
                    if (n && !e.strokeNoScale) {
                        var s = r[0] * r[3] - r[1] * r[2];
                        o *= Ks(Js(s))
                    }
                    a.weight = o + "px"
                }
                var h = this.path || (this.path = new lo);
                this.__dirtyPath && (h.beginPath(), this.buildPath(h, this.shape), h.toStatic(), this.__dirtyPath = !1), i.path = yh(h, this.transform), i.style.zIndex = uh(this.zlevel, this.z, this.z2), hh(t, i), null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
            }, Ri.prototype.onRemove = function (t) {
                lh(t, this._vmlEl), this.removeRectText(t)
            }, Ri.prototype.onAdd = function (t) {
                hh(t, this._vmlEl), this.appendRectText(t)
            };
            var mh = function (t) {
                return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
            };
            We.prototype.brushVML = function (t) {
                var e, i, r = this.style,
                    n = r.image;
                if (mh(n)) {
                    var a = n.src;
                    if (a === this._imageSrc) e = this._imageWidth, i = this._imageHeight;
                    else {
                        var o = n.runtimeStyle,
                            s = o.width,
                            h = o.height;
                        o.width = "auto", o.height = "auto", e = n.width, i = n.height, o.width = s, o.height = h, this._imageSrc = a, this._imageWidth = e, this._imageHeight = i
                    }
                    n = a
                } else n === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
                if (n) {
                    var l = r.x || 0,
                        u = r.y || 0,
                        c = r.width,
                        f = r.height,
                        d = r.sWidth,
                        p = r.sHeight,
                        g = r.sx || 0,
                        v = r.sy || 0,
                        _ = d && p,
                        y = this._vmlEl;
                    y || (y = Zs.createElement("div"), ah(y), this._vmlEl = y);
                    var m, x = y.style,
                        w = !1,
                        b = 1,
                        k = 1;
                    if (this.transform && (m = this.transform, b = Ks(m[0] * m[0] + m[1] * m[1]), k = Ks(m[2] * m[2] + m[3] * m[3]), w = m[1] || m[2]), w) {
                        var T = [l, u],
                            S = [l + c, u],
                            M = [l, u + f],
                            C = [l + c, u + f];
                        R(T, T, m), R(S, S, m), R(M, M, m), R(C, C, m);
                        var A = ih(T[0], S[0], M[0], C[0]),
                            P = ih(T[1], S[1], M[1], C[1]),
                            L = [];
                        L.push("M11=", m[0] / b, ",", "M12=", m[2] / k, ",", "M21=", m[1] / b, ",", "M22=", m[3] / k, ",", "Dx=", $s(l * b + m[4]), ",", "Dy=", $s(u * k + m[5])), x.padding = "0 " + $s(A) + "px " + $s(P) + "px 0", x.filter = "progid:DXImageTransform.Microsoft.Matrix(" + L.join("") + ", SizingMethod=clip)"
                    } else m && (l = l * b + m[4], u = u * k + m[5]), x.filter = "", x.left = $s(l) + "px", x.top = $s(u) + "px";
                    var z = this._imageEl,
                        D = this._cropEl;
                    z || (z = Zs.createElement("div"), this._imageEl = z);
                    var B = z.style;
                    if (_) {
                        if (e && i) B.width = $s(b * e * c / d) + "px", B.height = $s(k * i * f / p) + "px";
                        else {
                            var I = new Image,
                                O = this;
                            I.onload = function () {
                                I.onload = null, e = I.width, i = I.height, B.width = $s(b * e * c / d) + "px", B.height = $s(k * i * f / p) + "px", O._imageWidth = e, O._imageHeight = i, O._imageSrc = n
                            }, I.src = n
                        }
                        D || ((D = Zs.createElement("div")).style.overflow = "hidden", this._cropEl = D);
                        var F = D.style;
                        F.width = $s((c + g * c / d) * b), F.height = $s((f + v * f / p) * k), F.filter = "progid:DXImageTransform.Microsoft.Matrix(Dx=" + -g * c / d * b + ",Dy=" + -v * f / p * k + ")", D.parentNode || y.appendChild(D), z.parentNode != D && D.appendChild(z)
                    } else B.width = $s(b * c) + "px", B.height = $s(k * f) + "px", y.appendChild(z), D && D.parentNode && (y.removeChild(D), this._cropEl = null);
                    var E = "",
                        H = r.opacity;
                    H < 1 && (E += ".Alpha(opacity=" + $s(100 * H) + ") "), E += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + n + ", SizingMethod=scale)", B.filter = E, y.style.zIndex = uh(this.zlevel, this.z, this.z2), hh(t, y), null != r.text && this.drawRectText(t, this.getBoundingRect())
                }
            }, We.prototype.onRemove = function (t) {
                lh(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
            }, We.prototype.onAdd = function (t) {
                hh(t, this._vmlEl), this.appendRectText(t)
            };
            var xh, wh = {},
                bh = 0,
                kh = document.createElement("div"),
                Th = function (t) {
                    var e = wh[t];
                    if (!e) {
                        bh > 100 && (bh = 0, wh = {});
                        var i, r = kh.style;
                        try {
                            r.font = t, i = r.fontFamily.split(",")[0]
                        } catch (t) {}
                        e = {
                            style: r.fontStyle || "normal",
                            variant: r.fontVariant || "normal",
                            weight: r.fontWeight || "normal",
                            size: 0 | parseFloat(r.fontSize || 12),
                            family: i || "Microsoft YaHei"
                        }, wh[t] = e, bh++
                    }
                    return e
                };
            ! function (t, e) {
                ua[t] = e
            }("measureText", function (t, e) {
                var i = Zs;
                xh || ((xh = i.createElement("div")).style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", Zs.body.appendChild(xh));
                try {
                    xh.style.font = e
                } catch (t) {}
                return xh.innerHTML = "", xh.appendChild(i.createTextNode(t)), {
                    width: xh.offsetWidth
                }
            });
            for (var Sh = new Ht, Mh = [ga, He, We, Ri, Oo], Ch = 0; Ch < Mh.length; Ch++) {
                var Ah = Mh[Ch].prototype;
                Ah.drawRectText = function (t, e, i, r) {
                    var n = this.style;
                    this.__dirty && we(n);
                    var a = n.text;
                    if (null != a && (a += ""), a) {
                        if (n.rich) {
                            var o = _e(a, n);
                            a = [];
                            for (var s = 0; s < o.lines.length; s++) {
                                for (var h = o.lines[s].tokens, l = [], u = 0; u < h.length; u++) l.push(h[u].text);
                                a.push(l.join(""))
                            }
                            a = a.join("\n")
                        }
                        var c, f, d = n.textAlign,
                            p = n.textVerticalAlign,
                            g = Th(n.font),
                            v = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"';
                        i = i || ne(a, v, d, p);
                        var _ = this.transform;
                        if (_ && !r && (Sh.copy(e), Sh.applyTransform(_), e = Sh), r) c = e.x, f = e.y;
                        else {
                            var y = n.textPosition,
                                m = n.textDistance;
                            if (y instanceof Array) c = e.x + ch(y[0], e.width), f = e.y + ch(y[1], e.height), d = d || "left";
                            else {
                                var x = le(y, e, m);
                                c = x.x, f = x.y, d = d || x.textAlign, p = p || x.textVerticalAlign
                            }
                        }
                        c = se(c, i.width, d), f = he(f, i.height, p), f += i.height / 2;
                        var w, b, k, T = Ar,
                            S = this._textVmlEl;
                        S ? b = (w = (k = S.firstChild).nextSibling).nextSibling : (S = T("line"), w = T("path"), b = T("textpath"), k = T("skew"), b.style["v-text-align"] = "left", ah(S), w.textpathok = !0, b.on = !0, S.from = "0 0", S.to = "1000 0.05", hh(S, k), hh(S, w), hh(S, b), this._textVmlEl = S);
                        var M = [c, f],
                            C = S.style;
                        _ && r ? (R(M, M, _), k.on = !0, k.matrix = _[0].toFixed(3) + "," + _[2].toFixed(3) + "," + _[1].toFixed(3) + "," + _[3].toFixed(3) + ",0,0", k.offset = ($s(M[0]) || 0) + "," + ($s(M[1]) || 0), k.origin = "0 0", C.left = "0px", C.top = "0px") : (k.on = !1, C.left = $s(c) + "px", C.top = $s(f) + "px"), b.string = oh(a);
                        try {
                            b.style.font = v
                        } catch (t) {}
                        vh(S, "fill", {
                            fill: n.textFill,
                            opacity: n.opacity
                        }, this), vh(S, "stroke", {
                            stroke: n.textStroke,
                            opacity: n.opacity,
                            lineDash: n.lineDash
                        }, this), S.style.zIndex = uh(this.zlevel, this.z, this.z2), hh(t, S)
                    }
                }, Ah.removeRectText = function (t) {
                    lh(t, this._textVmlEl), this._textVmlEl = null
                }, Ah.appendRectText = function (t) {
                    hh(t, this._textVmlEl)
                }
            }
            Oo.prototype.brushVML = function (t) {
                var e = this.style;
                null != e.text ? this.drawRectText(t, {
                    x: e.x || 0,
                    y: e.y || 0,
                    width: 0,
                    height: 0
                }, this.getBoundingRect(), !0) : this.removeRectText(t)
            }, Oo.prototype.onRemove = function (t) {
                this.removeRectText(t)
            }, Oo.prototype.onAdd = function (t) {
                this.appendRectText(t)
            }
        }
        zr.prototype = {
            constructor: zr,
            getType: function () {
                return "vml"
            },
            getViewportRoot: function () {
                return this._vmlViewport
            },
            getViewportRootOffset: function () {
                var t = this.getViewportRoot();
                if (t) return {
                    offsetLeft: t.offsetLeft || 0,
                    offsetTop: t.offsetTop || 0
                }
            },
            refresh: function () {
                var t = this.storage.getDisplayList(!0, !0);
                this._paintList(t)
            },
            _paintList: function (t) {
                for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.invisible || r.ignore ? (r.__alreadyNotVisible || r.onRemove(e), r.__alreadyNotVisible = !0) : (r.__alreadyNotVisible && r.onAdd(e), r.__alreadyNotVisible = !1, r.__dirty && (r.beforeBrush && r.beforeBrush(), (r.brushVML || r.brush).call(r, e), r.afterBrush && r.afterBrush())), r.__dirty = !1
                }
                this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
            },
            resize: function (t, e) {
                var t = null == t ? this._getWidth() : t,
                    e = null == e ? this._getHeight() : e;
                if (this._width != t || this._height != e) {
                    this._width = t, this._height = e;
                    var i = this._vmlViewport.style;
                    i.width = t + "px", i.height = e + "px"
                }
            },
            dispose: function () {
                this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
            },
            getWidth: function () {
                return this._width
            },
            getHeight: function () {
                return this._height
            },
            clear: function () {
                this._vmlViewport && this.root.removeChild(this._vmlViewport)
            },
            _getWidth: function () {
                var t = this.root,
                    e = t.currentStyle;
                return (t.clientWidth || Lr(e.width)) - Lr(e.paddingLeft) - Lr(e.paddingRight) | 0
            },
            _getHeight: function () {
                var t = this.root,
                    e = t.currentStyle;
                return (t.clientHeight || Lr(e.height)) - Lr(e.paddingTop) - Lr(e.paddingBottom) | 0
            }
        }, u(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
            zr.prototype[t] = Dr(t)
        }), ei("vml", zr), t.version = "4.0.5", t.init = function (t, e) {
            var i = new za(Ir(), t, e);
            return La[i.id] = i, i
        }, t.dispose = function (t) {
            if (t) t.dispose();
            else {
                for (var e in La) La.hasOwnProperty(e) && La[e].dispose();
                La = {}
            }
            return this
        }, t.getInstance = function (t) {
            return La[t]
        }, t.registerPainter = ei, t.matrix = dn, t.vector = rn, t.color = Dn, t.path = Ro, t.util = Qr, t.parseSVG = function (t, e) {
            return (new qi).parse(t, e)
        }, t.Group = jn, t.Path = Ri, t.Image = We, t.CompoundPath = ts, t.Text = Oo, t.IncrementalDisplayable = Ki, t.Arc = is, t.BezierCurve = ns, t.Circle = Fo, t.Droplet = as, t.Ellipse = Ho, t.Heart = os, t.Isogon = us, t.Line = Wo, t.Polygon = qo, t.Polyline = jo, t.Rect = Eo, t.Ring = cs, t.Rose = gs, t.Sector = _s, t.Star = ws, t.Trochoid = Ts, t.LinearGradient = Yo, t.RadialGradient = Ss, t.Pattern = ea, t.BoundingRect = Ht
    });
}.call(Monitor);
