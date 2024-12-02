/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
document.addEventListener('DOMContentLoaded', function () {
    const editor = grapesjs.init({
        container: '#gjs',
        // Additional configuration options
    });
});

(() => {
    var GE = Object.create;
    var Pn = Object.defineProperty;
    var XE = Object.getOwnPropertyDescriptor;
    var VE = Object.getOwnPropertyNames;
    var kE = Object.getPrototypeOf,
        UE = Object.prototype.hasOwnProperty;
    var de = (e, t) => () => (e && (t = e(e = 0)), t);
    var f = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Le = (e, t) => {
            for (var n in t) Pn(e, n, {
                get: t[n],
                enumerable: !0
            })
        },
        ca = (e, t, n, r) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of VE(t)) !UE.call(e, i) && i !== n && Pn(e, i, {
                    get: () => t[i],
                    enumerable: !(r = XE(t, i)) || r.enumerable
                });
            return e
        };
    var oe = (e, t, n) => (n = e != null ? GE(kE(e)) : {}, ca(t || !e || !e.__esModule ? Pn(n, "default", {
            value: e,
            enumerable: !0
        }) : n, e)),
        je = e => ca(Pn({}, "__esModule", {
            value: !0
        }), e);
    var zr = f(() => {
        "use strict";
        window.tram = function(e) {
            function t(c, y) {
                var m = new Ee.Bare;
                return m.init(c, y)
            }

            function n(c) {
                return c.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }

            function r(c) {
                var y = parseInt(c.slice(1), 16),
                    m = y >> 16 & 255,
                    S = y >> 8 & 255,
                    L = 255 & y;
                return [m, S, L]
            }

            function i(c, y, m) {
                return "#" + (1 << 24 | c << 16 | y << 8 | m).toString(16).slice(1)
            }

            function o() {}

            function a(c, y) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y)
            }

            function s(c, y, m) {
                l("Units do not match [" + c + "]: " + y + ", " + m)
            }

            function u(c, y, m) {
                if (y !== void 0 && (m = y), c === void 0) return m;
                var S = m;
                return Jt.test(c) || !gt.test(c) ? S = parseInt(c, 10) : gt.test(c) && (S = 1e3 * parseFloat(c)), 0 > S && (S = 0), S === S ? S : m
            }

            function l(c) {
                re.debug && window && window.console.warn(c)
            }

            function E(c) {
                for (var y = -1, m = c ? c.length : 0, S = []; ++y < m;) {
                    var L = c[y];
                    L && S.push(L)
                }
                return S
            }
            var g = function(c, y, m) {
                    function S(J) {
                        return typeof J == "object"
                    }

                    function L(J) {
                        return typeof J == "function"
                    }

                    function C() {}

                    function z(J, fe) {
                        function q() {
                            var Se = new ee;
                            return L(Se.init) && Se.init.apply(Se, arguments), Se
                        }

                        function ee() {}
                        fe === m && (fe = J, J = Object), q.Bare = ee;
                        var ne, ye = C[c] = J[c],
                            Ke = ee[c] = q[c] = new C;
                        return Ke.constructor = q, q.mixin = function(Se) {
                            return ee[c] = q[c] = z(q, Se)[c], q
                        }, q.open = function(Se) {
                            if (ne = {}, L(Se) ? ne = Se.call(q, Ke, ye, q, J) : S(Se) && (ne = Se), S(ne))
                                for (var en in ne) y.call(ne, en) && (Ke[en] = ne[en]);
                            return L(Ke.init) || (Ke.init = J), q
                        }, q.open(fe)
                    }
                    return z
                }("prototype", {}.hasOwnProperty),
                d = {
                    ease: ["ease", function(c, y, m, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return y + m * (-2.75 * C * L + 11 * L * L + -15.5 * C + 8 * L + .25 * c)
                    }],
                    "ease-in": ["ease-in", function(c, y, m, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return y + m * (-1 * C * L + 3 * L * L + -3 * C + 2 * L)
                    }],
                    "ease-out": ["ease-out", function(c, y, m, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return y + m * (.3 * C * L + -1.6 * L * L + 2.2 * C + -1.8 * L + 1.9 * c)
                    }],
                    "ease-in-out": ["ease-in-out", function(c, y, m, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return y + m * (2 * C * L + -5 * L * L + 2 * C + 2 * L)
                    }],
                    linear: ["linear", function(c, y, m, S) {
                        return m * c / S + y
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, y, m, S) {
                        return m * (c /= S) * c + y
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, y, m, S) {
                        return -m * (c /= S) * (c - 2) + y
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, y, m, S) {
                        return (c /= S / 2) < 1 ? m / 2 * c * c + y : -m / 2 * (--c * (c - 2) - 1) + y
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, y, m, S) {
                        return m * (c /= S) * c * c + y
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, y, m, S) {
                        return m * ((c = c / S - 1) * c * c + 1) + y
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, y, m, S) {
                        return (c /= S / 2) < 1 ? m / 2 * c * c * c + y : m / 2 * ((c -= 2) * c * c + 2) + y
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, y, m, S) {
                        return m * (c /= S) * c * c * c + y
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, y, m, S) {
                        return -m * ((c = c / S - 1) * c * c * c - 1) + y
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, y, m, S) {
                        return (c /= S / 2) < 1 ? m / 2 * c * c * c * c + y : -m / 2 * ((c -= 2) * c * c * c - 2) + y
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, y, m, S) {
                        return m * (c /= S) * c * c * c * c + y
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, y, m, S) {
                        return m * ((c = c / S - 1) * c * c * c * c + 1) + y
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, y, m, S) {
                        return (c /= S / 2) < 1 ? m / 2 * c * c * c * c * c + y : m / 2 * ((c -= 2) * c * c * c * c + 2) + y
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, y, m, S) {
                        return -m * Math.cos(c / S * (Math.PI / 2)) + m + y
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, y, m, S) {
                        return m * Math.sin(c / S * (Math.PI / 2)) + y
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, y, m, S) {
                        return -m / 2 * (Math.cos(Math.PI * c / S) - 1) + y
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, y, m, S) {
                        return c === 0 ? y : m * Math.pow(2, 10 * (c / S - 1)) + y
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, y, m, S) {
                        return c === S ? y + m : m * (-Math.pow(2, -10 * c / S) + 1) + y
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, y, m, S) {
                        return c === 0 ? y : c === S ? y + m : (c /= S / 2) < 1 ? m / 2 * Math.pow(2, 10 * (c - 1)) + y : m / 2 * (-Math.pow(2, -10 * --c) + 2) + y
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, y, m, S) {
                        return -m * (Math.sqrt(1 - (c /= S) * c) - 1) + y
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, y, m, S) {
                        return m * Math.sqrt(1 - (c = c / S - 1) * c) + y
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, y, m, S) {
                        return (c /= S / 2) < 1 ? -m / 2 * (Math.sqrt(1 - c * c) - 1) + y : m / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + y
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, y, m, S, L) {
                        return L === void 0 && (L = 1.70158), m * (c /= S) * c * ((L + 1) * c - L) + y
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, y, m, S, L) {
                        return L === void 0 && (L = 1.70158), m * ((c = c / S - 1) * c * ((L + 1) * c + L) + 1) + y
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, y, m, S, L) {
                        return L === void 0 && (L = 1.70158), (c /= S / 2) < 1 ? m / 2 * c * c * (((L *= 1.525) + 1) * c - L) + y : m / 2 * ((c -= 2) * c * (((L *= 1.525) + 1) * c + L) + 2) + y
                    }]
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                I = document,
                _ = window,
                O = "bkwld-tram",
                v = /[\-\.0-9]/g,
                x = /[A-Z]/,
                A = "number",
                w = /^(rgb|#)/,
                P = /(em|cm|mm|in|pt|pc|px)$/,
                R = /(em|cm|mm|in|pt|pc|px|%)$/,
                X = /(deg|rad|turn)$/,
                V = "unitless",
                H = /(all|none) 0s ease 0s/,
                W = /^(width|height)$/,
                j = " ",
                N = I.createElement("a"),
                T = ["Webkit", "Moz", "O", "ms"],
                D = ["-webkit-", "-moz-", "-o-", "-ms-"],
                U = function(c) {
                    if (c in N.style) return {
                        dom: c,
                        css: c
                    };
                    var y, m, S = "",
                        L = c.split("-");
                    for (y = 0; y < L.length; y++) S += L[y].charAt(0).toUpperCase() + L[y].slice(1);
                    for (y = 0; y < T.length; y++)
                        if (m = T[y] + S, m in N.style) return {
                            dom: m,
                            css: D[y] + c
                        }
                },
                G = t.support = {
                    bind: Function.prototype.bind,
                    transform: U("transform"),
                    transition: U("transition"),
                    backface: U("backface-visibility"),
                    timing: U("transition-timing-function")
                };
            if (G.transition) {
                var Y = G.timing.dom;
                if (N.style[Y] = d["ease-in-back"][0], !N.style[Y])
                    for (var Q in h) d[Q][0] = h[Q]
            }
            var ae = t.frame = function() {
                    var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return c && G.bind ? c.bind(_) : function(y) {
                        _.setTimeout(y, 16)
                    }
                }(),
                me = t.now = function() {
                    var c = _.performance,
                        y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                    return y && G.bind ? y.bind(c) : Date.now || function() {
                        return +new Date
                    }
                }(),
                Ae = g(function(c) {
                    function y(K, ie) {
                        var ge = E(("" + K).split(j)),
                            se = ge[0];
                        ie = ie || {};
                        var we = k[se];
                        if (!we) return l("Unsupported property: " + se);
                        if (!ie.weak || !this.props[se]) {
                            var Ge = we[0],
                                Pe = this.props[se];
                            return Pe || (Pe = this.props[se] = new Ge.Bare), Pe.init(this.$el, ge, we, ie), Pe
                        }
                    }

                    function m(K, ie, ge) {
                        if (K) {
                            var se = typeof K;
                            if (ie || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), se == "number" && ie) return this.timer = new le({
                                duration: K,
                                context: this,
                                complete: C
                            }), void(this.active = !0);
                            if (se == "string" && ie) {
                                switch (K) {
                                    case "hide":
                                        q.call(this);
                                        break;
                                    case "stop":
                                        z.call(this);
                                        break;
                                    case "redraw":
                                        ee.call(this);
                                        break;
                                    default:
                                        y.call(this, K, ge && ge[1])
                                }
                                return C.call(this)
                            }
                            if (se == "function") return void K.call(this, this);
                            if (se == "object") {
                                var we = 0;
                                Ke.call(this, K, function(ve, qE) {
                                    ve.span > we && (we = ve.span), ve.stop(), ve.animate(qE)
                                }, function(ve) {
                                    "wait" in ve && (we = u(ve.wait, 0))
                                }), ye.call(this), we > 0 && (this.timer = new le({
                                    duration: we,
                                    context: this
                                }), this.active = !0, ie && (this.timer.complete = C));
                                var Ge = this,
                                    Pe = !1,
                                    Cn = {};
                                ae(function() {
                                    Ke.call(Ge, K, function(ve) {
                                        ve.active && (Pe = !0, Cn[ve.name] = ve.nextStyle)
                                    }), Pe && Ge.$el.css(Cn)
                                })
                            }
                        }
                    }

                    function S(K) {
                        K = u(K, 0), this.active ? this.queue.push({
                            options: K
                        }) : (this.timer = new le({
                            duration: K,
                            context: this,
                            complete: C
                        }), this.active = !0)
                    }

                    function L(K) {
                        return this.active ? (this.queue.push({
                            options: K,
                            args: arguments
                        }), void(this.timer.complete = C)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function C() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var K = this.queue.shift();
                            m.call(this, K.options, !0, K.args)
                        }
                    }

                    function z(K) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ie;
                        typeof K == "string" ? (ie = {}, ie[K] = 1) : ie = typeof K == "object" && K != null ? K : this.props, Ke.call(this, ie, Se), ye.call(this)
                    }

                    function J(K) {
                        z.call(this, K), Ke.call(this, K, en, ME)
                    }

                    function fe(K) {
                        typeof K != "string" && (K = "block"), this.el.style.display = K
                    }

                    function q() {
                        z.call(this), this.el.style.display = "none"
                    }

                    function ee() {
                        this.el.offsetHeight
                    }

                    function ne() {
                        z.call(this), e.removeData(this.el, O), this.$el = this.el = null
                    }

                    function ye() {
                        var K, ie, ge = [];
                        this.upstream && ge.push(this.upstream);
                        for (K in this.props) ie = this.props[K], ie.active && ge.push(ie.string);
                        ge = ge.join(","), this.style !== ge && (this.style = ge, this.el.style[G.transition.dom] = ge)
                    }

                    function Ke(K, ie, ge) {
                        var se, we, Ge, Pe, Cn = ie !== Se,
                            ve = {};
                        for (se in K) Ge = K[se], se in pe ? (ve.transform || (ve.transform = {}), ve.transform[se] = Ge) : (x.test(se) && (se = n(se)), se in k ? ve[se] = Ge : (Pe || (Pe = {}), Pe[se] = Ge));
                        for (se in ve) {
                            if (Ge = ve[se], we = this.props[se], !we) {
                                if (!Cn) continue;
                                we = y.call(this, se)
                            }
                            ie.call(this, we, Ge)
                        }
                        ge && Pe && ge.call(this, Pe)
                    }

                    function Se(K) {
                        K.stop()
                    }

                    function en(K, ie) {
                        K.set(ie)
                    }

                    function ME(K) {
                        this.$el.css(K)
                    }

                    function qe(K, ie) {
                        c[K] = function() {
                            return this.children ? FE.call(this, ie, arguments) : (this.el && ie.apply(this, arguments), this)
                        }
                    }

                    function FE(K, ie) {
                        var ge, se = this.children.length;
                        for (ge = 0; se > ge; ge++) K.apply(this.children[ge], ie);
                        return this
                    }
                    c.init = function(K) {
                        if (this.$el = e(K), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, re.keepInherited && !re.fallback) {
                            var ie = M(this.el, "transition");
                            ie && !H.test(ie) && (this.upstream = ie)
                        }
                        G.backface && re.hideBackface && p(this.el, G.backface.css, "hidden")
                    }, qe("add", y), qe("start", m), qe("wait", S), qe("then", L), qe("next", C), qe("stop", z), qe("set", J), qe("show", fe), qe("hide", q), qe("redraw", ee), qe("destroy", ne)
                }),
                Ee = g(Ae, function(c) {
                    function y(m, S) {
                        var L = e.data(m, O) || e.data(m, O, new Ae.Bare);
                        return L.el || L.init(m), S ? L.start(S) : L
                    }
                    c.init = function(m, S) {
                        var L = e(m);
                        if (!L.length) return this;
                        if (L.length === 1) return y(L[0], S);
                        var C = [];
                        return L.each(function(z, J) {
                            C.push(y(J, S))
                        }), this.children = C, this
                    }
                }),
                $ = g(function(c) {
                    function y() {
                        var C = this.get();
                        this.update("auto");
                        var z = this.get();
                        return this.update(C), z
                    }

                    function m(C, z, J) {
                        return z !== void 0 && (J = z), C in d ? C : J
                    }

                    function S(C) {
                        var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
                        return (z ? i(z[1], z[2], z[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var L = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    c.init = function(C, z, J, fe) {
                        this.$el = C, this.el = C[0];
                        var q = z[0];
                        J[2] && (q = J[2]), B[q] && (q = B[q]), this.name = q, this.type = J[1], this.duration = u(z[1], this.duration, L.duration), this.ease = m(z[2], this.ease, L.ease), this.delay = u(z[3], this.delay, L.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = W.test(this.name), this.unit = fe.unit || this.unit || re.defaultUnit, this.angle = fe.angle || this.angle || re.defaultAngle, re.fallback || fe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + j + this.duration + "ms" + (this.ease != "ease" ? j + d[this.ease][0] : "") + (this.delay ? j + this.delay + "ms" : ""))
                    }, c.set = function(C) {
                        C = this.convert(C, this.type), this.update(C), this.redraw()
                    }, c.transition = function(C) {
                        this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = y.call(this))), this.nextStyle = C
                    }, c.fallback = function(C) {
                        var z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        C = this.convert(C, this.type), this.auto && (z == "auto" && (z = this.convert(this.get(), this.type)), C == "auto" && (C = y.call(this))), this.tween = new F({
                            from: z,
                            to: C,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.get = function() {
                        return M(this.el, this.name)
                    }, c.update = function(C) {
                        p(this.el, this.name, C)
                    }, c.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, p(this.el, this.name, this.get()));
                        var C = this.tween;
                        C && C.context && C.destroy()
                    }, c.convert = function(C, z) {
                        if (C == "auto" && this.auto) return C;
                        var J, fe = typeof C == "number",
                            q = typeof C == "string";
                        switch (z) {
                            case A:
                                if (fe) return C;
                                if (q && C.replace(v, "") === "") return +C;
                                J = "number(unitless)";
                                break;
                            case w:
                                if (q) {
                                    if (C === "" && this.original) return this.original;
                                    if (z.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : S(C)
                                }
                                J = "hex or rgb string";
                                break;
                            case P:
                                if (fe) return C + this.unit;
                                if (q && z.test(C)) return C;
                                J = "number(px) or string(unit)";
                                break;
                            case R:
                                if (fe) return C + this.unit;
                                if (q && z.test(C)) return C;
                                J = "number(px) or string(unit or %)";
                                break;
                            case X:
                                if (fe) return C + this.angle;
                                if (q && z.test(C)) return C;
                                J = "number(deg) or string(angle)";
                                break;
                            case V:
                                if (fe || q && R.test(C)) return C;
                                J = "number(unitless) or string(unit or %)"
                        }
                        return a(J, C), C
                    }, c.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                b = g($, function(c, y) {
                    c.init = function() {
                        y.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w))
                    }
                }),
                Z = g($, function(c, y) {
                    c.init = function() {
                        y.init.apply(this, arguments), this.animate = this.fallback
                    }, c.get = function() {
                        return this.$el[this.name]()
                    }, c.update = function(m) {
                        this.$el[this.name](m)
                    }
                }),
                te = g($, function(c, y) {
                    function m(S, L) {
                        var C, z, J, fe, q;
                        for (C in S) fe = pe[C], J = fe[0], z = fe[1] || C, q = this.convert(S[C], J), L.call(this, z, q, J)
                    }
                    c.init = function() {
                        y.init.apply(this, arguments), this.current || (this.current = {}, pe.perspective && re.perspective && (this.current.perspective = re.perspective, p(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, c.set = function(S) {
                        m.call(this, S, function(L, C) {
                            this.current[L] = C
                        }), p(this.el, this.name, this.style(this.current)), this.redraw()
                    }, c.transition = function(S) {
                        var L = this.values(S);
                        this.tween = new Ie({
                            current: this.current,
                            values: L,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var C, z = {};
                        for (C in this.current) z[C] = C in L ? L[C] : this.current[C];
                        this.active = !0, this.nextStyle = this.style(z)
                    }, c.fallback = function(S) {
                        var L = this.values(S);
                        this.tween = new Ie({
                            current: this.current,
                            values: L,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.update = function() {
                        p(this.el, this.name, this.style(this.current))
                    }, c.style = function(S) {
                        var L, C = "";
                        for (L in S) C += L + "(" + S[L] + ") ";
                        return C
                    }, c.values = function(S) {
                        var L, C = {};
                        return m.call(this, S, function(z, J, fe) {
                            C[z] = J, this.current[z] === void 0 && (L = 0, ~z.indexOf("scale") && (L = 1), this.current[z] = this.convert(L, fe))
                        }), C
                    }
                }),
                F = g(function(c) {
                    function y(q) {
                        J.push(q) === 1 && ae(m)
                    }

                    function m() {
                        var q, ee, ne, ye = J.length;
                        if (ye)
                            for (ae(m), ee = me(), q = ye; q--;) ne = J[q], ne && ne.render(ee)
                    }

                    function S(q) {
                        var ee, ne = e.inArray(q, J);
                        ne >= 0 && (ee = J.slice(ne + 1), J.length = ne, ee.length && (J = J.concat(ee)))
                    }

                    function L(q) {
                        return Math.round(q * fe) / fe
                    }

                    function C(q, ee, ne) {
                        return i(q[0] + ne * (ee[0] - q[0]), q[1] + ne * (ee[1] - q[1]), q[2] + ne * (ee[2] - q[2]))
                    }
                    var z = {
                        ease: d.ease[1],
                        from: 0,
                        to: 1
                    };
                    c.init = function(q) {
                        this.duration = q.duration || 0, this.delay = q.delay || 0;
                        var ee = q.ease || z.ease;
                        d[ee] && (ee = d[ee][1]), typeof ee != "function" && (ee = z.ease), this.ease = ee, this.update = q.update || o, this.complete = q.complete || o, this.context = q.context || this, this.name = q.name;
                        var ne = q.from,
                            ye = q.to;
                        ne === void 0 && (ne = z.from), ye === void 0 && (ye = z.to), this.unit = q.unit || "", typeof ne == "number" && typeof ye == "number" ? (this.begin = ne, this.change = ye - ne) : this.format(ye, ne), this.value = this.begin + this.unit, this.start = me(), q.autoplay !== !1 && this.play()
                    }, c.play = function() {
                        this.active || (this.start || (this.start = me()), this.active = !0, y(this))
                    }, c.stop = function() {
                        this.active && (this.active = !1, S(this))
                    }, c.render = function(q) {
                        var ee, ne = q - this.start;
                        if (this.delay) {
                            if (ne <= this.delay) return;
                            ne -= this.delay
                        }
                        if (ne < this.duration) {
                            var ye = this.ease(ne, 0, 1, this.duration);
                            return ee = this.startRGB ? C(this.startRGB, this.endRGB, ye) : L(this.begin + ye * this.change), this.value = ee + this.unit, void this.update.call(this.context, this.value)
                        }
                        ee = this.endHex || this.begin + this.change, this.value = ee + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, c.format = function(q, ee) {
                        if (ee += "", q += "", q.charAt(0) == "#") return this.startRGB = r(ee), this.endRGB = r(q), this.endHex = q, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ne = ee.replace(v, ""),
                                ye = q.replace(v, "");
                            ne !== ye && s("tween", ee, q), this.unit = ne
                        }
                        ee = parseFloat(ee), q = parseFloat(q), this.begin = this.value = ee, this.change = q - ee
                    }, c.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var J = [],
                        fe = 1e3
                }),
                le = g(F, function(c) {
                    c.init = function(y) {
                        this.duration = y.duration || 0, this.complete = y.complete || o, this.context = y.context, this.play()
                    }, c.render = function(y) {
                        var m = y - this.start;
                        m < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Ie = g(F, function(c, y) {
                    c.init = function(m) {
                        this.context = m.context, this.update = m.update, this.tweens = [], this.current = m.current;
                        var S, L;
                        for (S in m.values) L = m.values[S], this.current[S] !== L && this.tweens.push(new F({
                            name: S,
                            from: this.current[S],
                            to: L,
                            duration: m.duration,
                            delay: m.delay,
                            ease: m.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, c.render = function(m) {
                        var S, L, C = this.tweens.length,
                            z = !1;
                        for (S = C; S--;) L = this.tweens[S], L.context && (L.render(m), this.current[L.name] = L.value, z = !0);
                        return z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, c.destroy = function() {
                        if (y.destroy.call(this), this.tweens) {
                            var m, S = this.tweens.length;
                            for (m = S; m--;) this.tweens[m].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                re = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !G.transition,
                    agentTests: []
                };
            t.fallback = function(c) {
                if (!G.transition) return re.fallback = !0;
                re.agentTests.push("(" + c + ")");
                var y = new RegExp(re.agentTests.join("|"), "i");
                re.fallback = y.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(c) {
                return new F(c)
            }, t.delay = function(c, y, m) {
                return new le({
                    complete: y,
                    duration: c,
                    context: m
                })
            }, e.fn.tram = function(c) {
                return t.call(null, this, c)
            };
            var p = e.style,
                M = e.css,
                B = {
                    transform: G.transform && G.transform.css
                },
                k = {
                    color: [b, w],
                    background: [b, w, "background-color"],
                    "outline-color": [b, w],
                    "border-color": [b, w],
                    "border-top-color": [b, w],
                    "border-right-color": [b, w],
                    "border-bottom-color": [b, w],
                    "border-left-color": [b, w],
                    "border-width": [$, P],
                    "border-top-width": [$, P],
                    "border-right-width": [$, P],
                    "border-bottom-width": [$, P],
                    "border-left-width": [$, P],
                    "border-spacing": [$, P],
                    "letter-spacing": [$, P],
                    margin: [$, P],
                    "margin-top": [$, P],
                    "margin-right": [$, P],
                    "margin-bottom": [$, P],
                    "margin-left": [$, P],
                    padding: [$, P],
                    "padding-top": [$, P],
                    "padding-right": [$, P],
                    "padding-bottom": [$, P],
                    "padding-left": [$, P],
                    "outline-width": [$, P],
                    opacity: [$, A],
                    top: [$, R],
                    right: [$, R],
                    bottom: [$, R],
                    left: [$, R],
                    "font-size": [$, R],
                    "text-indent": [$, R],
                    "word-spacing": [$, R],
                    width: [$, R],
                    "min-width": [$, R],
                    "max-width": [$, R],
                    height: [$, R],
                    "min-height": [$, R],
                    "max-height": [$, R],
                    "line-height": [$, V],
                    "scroll-top": [Z, A, "scrollTop"],
                    "scroll-left": [Z, A, "scrollLeft"]
                },
                pe = {};
            G.transform && (k.transform = [te], pe = {
                x: [R, "translateX"],
                y: [R, "translateY"],
                rotate: [X],
                rotateX: [X],
                rotateY: [X],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [X],
                skewX: [X],
                skewY: [X]
            }), G.transform && G.backface && (pe.z = [R, "translateZ"], pe.rotateZ = [X], pe.scaleZ = [A], pe.perspective = [P]);
            var Jt = /ms/,
                gt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var fa = f((bF, la) => {
        "use strict";
        var HE = window.$,
            BE = zr() && HE.tram;
        la.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                n = Array.prototype,
                r = Object.prototype,
                i = Function.prototype,
                o = n.push,
                a = n.slice,
                s = n.concat,
                u = r.toString,
                l = r.hasOwnProperty,
                E = n.forEach,
                g = n.map,
                d = n.reduce,
                h = n.reduceRight,
                I = n.filter,
                _ = n.every,
                O = n.some,
                v = n.indexOf,
                x = n.lastIndexOf,
                A = Array.isArray,
                w = Object.keys,
                P = i.bind,
                R = e.each = e.forEach = function(T, D, U) {
                    if (T == null) return T;
                    if (E && T.forEach === E) T.forEach(D, U);
                    else if (T.length === +T.length) {
                        for (var G = 0, Y = T.length; G < Y; G++)
                            if (D.call(U, T[G], G, T) === t) return
                    } else
                        for (var Q = e.keys(T), G = 0, Y = Q.length; G < Y; G++)
                            if (D.call(U, T[Q[G]], Q[G], T) === t) return;
                    return T
                };
            e.map = e.collect = function(T, D, U) {
                var G = [];
                return T == null ? G : g && T.map === g ? T.map(D, U) : (R(T, function(Y, Q, ae) {
                    G.push(D.call(U, Y, Q, ae))
                }), G)
            }, e.find = e.detect = function(T, D, U) {
                var G;
                return X(T, function(Y, Q, ae) {
                    if (D.call(U, Y, Q, ae)) return G = Y, !0
                }), G
            }, e.filter = e.select = function(T, D, U) {
                var G = [];
                return T == null ? G : I && T.filter === I ? T.filter(D, U) : (R(T, function(Y, Q, ae) {
                    D.call(U, Y, Q, ae) && G.push(Y)
                }), G)
            };
            var X = e.some = e.any = function(T, D, U) {
                D || (D = e.identity);
                var G = !1;
                return T == null ? G : O && T.some === O ? T.some(D, U) : (R(T, function(Y, Q, ae) {
                    if (G || (G = D.call(U, Y, Q, ae))) return t
                }), !!G)
            };
            e.contains = e.include = function(T, D) {
                return T == null ? !1 : v && T.indexOf === v ? T.indexOf(D) != -1 : X(T, function(U) {
                    return U === D
                })
            }, e.delay = function(T, D) {
                var U = a.call(arguments, 2);
                return setTimeout(function() {
                    return T.apply(null, U)
                }, D)
            }, e.defer = function(T) {
                return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(T) {
                var D, U, G;
                return function() {
                    D || (D = !0, U = arguments, G = this, BE.frame(function() {
                        D = !1, T.apply(G, U)
                    }))
                }
            }, e.debounce = function(T, D, U) {
                var G, Y, Q, ae, me, Ae = function() {
                    var Ee = e.now() - ae;
                    Ee < D ? G = setTimeout(Ae, D - Ee) : (G = null, U || (me = T.apply(Q, Y), Q = Y = null))
                };
                return function() {
                    Q = this, Y = arguments, ae = e.now();
                    var Ee = U && !G;
                    return G || (G = setTimeout(Ae, D)), Ee && (me = T.apply(Q, Y), Q = Y = null), me
                }
            }, e.defaults = function(T) {
                if (!e.isObject(T)) return T;
                for (var D = 1, U = arguments.length; D < U; D++) {
                    var G = arguments[D];
                    for (var Y in G) T[Y] === void 0 && (T[Y] = G[Y])
                }
                return T
            }, e.keys = function(T) {
                if (!e.isObject(T)) return [];
                if (w) return w(T);
                var D = [];
                for (var U in T) e.has(T, U) && D.push(U);
                return D
            }, e.has = function(T, D) {
                return l.call(T, D)
            }, e.isObject = function(T) {
                return T === Object(T)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var V = /(.)^/,
                H = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                W = /\\|'|\r|\n|\u2028|\u2029/g,
                j = function(T) {
                    return "\\" + H[T]
                },
                N = /^\s*(\w|\$)+\s*$/;
            return e.template = function(T, D, U) {
                !D && U && (D = U), D = e.defaults({}, D, e.templateSettings);
                var G = RegExp([(D.escape || V).source, (D.interpolate || V).source, (D.evaluate || V).source].join("|") + "|$", "g"),
                    Y = 0,
                    Q = "__p+='";
                T.replace(G, function(Ee, $, b, Z, te) {
                    return Q += T.slice(Y, te).replace(W, j), Y = te + Ee.length, $ ? Q += `'+
((__t=(` + $ + `))==null?'':_.escape(__t))+
'` : b ? Q += `'+
((__t=(` + b + `))==null?'':__t)+
'` : Z && (Q += `';
` + Z + `
__p+='`), Ee
                }), Q += `';
`;
                var ae = D.variable;
                if (ae) {
                    if (!N.test(ae)) throw new Error("variable is not a bare identifier: " + ae)
                } else Q = `with(obj||{}){
` + Q + `}
`, ae = "obj";
                Q = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + Q + `return __p;
`;
                var me;
                try {
                    me = new Function(D.variable || "obj", "_", Q)
                } catch (Ee) {
                    throw Ee.source = Q, Ee
                }
                var Ae = function(Ee) {
                    return me.call(this, Ee, e)
                };
                return Ae.source = "function(" + ae + `){
` + Q + "}", Ae
            }, e
        }()
    });
    var ke = f((AF, ma) => {
        "use strict";
        var ue = {},
            At = {},
            Ot = [],
            jr = window.Webflow || [],
            st = window.jQuery,
            Ve = st(window),
            WE = st(document),
            Ye = st.isFunction,
            Xe = ue._ = fa(),
            pa = ue.tram = zr() && st.tram,
            Nn = !1,
            Yr = !1;
        pa.config.hideBackface = !1;
        pa.config.keepInherited = !0;
        ue.define = function(e, t, n) {
            At[e] && ha(At[e]);
            var r = At[e] = t(st, Xe, n) || {};
            return ga(r), r
        };
        ue.require = function(e) {
            return At[e]
        };

        function ga(e) {
            ue.env() && (Ye(e.design) && Ve.on("__wf_design", e.design), Ye(e.preview) && Ve.on("__wf_preview", e.preview)), Ye(e.destroy) && Ve.on("__wf_destroy", e.destroy), e.ready && Ye(e.ready) && zE(e)
        }

        function zE(e) {
            if (Nn) {
                e.ready();
                return
            }
            Xe.contains(Ot, e.ready) || Ot.push(e.ready)
        }

        function ha(e) {
            Ye(e.design) && Ve.off("__wf_design", e.design), Ye(e.preview) && Ve.off("__wf_preview", e.preview), Ye(e.destroy) && Ve.off("__wf_destroy", e.destroy), e.ready && Ye(e.ready) && KE(e)
        }

        function KE(e) {
            Ot = Xe.filter(Ot, function(t) {
                return t !== e.ready
            })
        }
        ue.push = function(e) {
            if (Nn) {
                Ye(e) && e();
                return
            }
            jr.push(e)
        };
        ue.env = function(e) {
            var t = window.__wf_design,
                n = typeof t < "u";
            if (!e) return n;
            if (e === "design") return n && t;
            if (e === "preview") return n && !t;
            if (e === "slug") return n && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Ln = navigator.userAgent.toLowerCase(),
            Ea = ue.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            jE = ue.env.chrome = /chrome/.test(Ln) && /Google/.test(navigator.vendor) && parseInt(Ln.match(/chrome\/(\d+)\./)[1], 10),
            YE = ue.env.ios = /(ipod|iphone|ipad)/.test(Ln);
        ue.env.safari = /safari/.test(Ln) && !jE && !YE;
        var Kr;
        Ea && WE.on("touchstart mousedown", function(e) {
            Kr = e.target
        });
        ue.validClick = Ea ? function(e) {
            return e === Kr || st.contains(e, Kr)
        } : function() {
            return !0
        };
        var ya = "resize.webflow orientationchange.webflow load.webflow",
            QE = "scroll.webflow " + ya;
        ue.resize = Qr(Ve, ya);
        ue.scroll = Qr(Ve, QE);
        ue.redraw = Qr();

        function Qr(e, t) {
            var n = [],
                r = {};
            return r.up = Xe.throttle(function(i) {
                Xe.each(n, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, r.up), r.on = function(i) {
                typeof i == "function" && (Xe.contains(n, i) || n.push(i))
            }, r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = Xe.filter(n, function(o) {
                    return o !== i
                })
            }, r
        }
        ue.location = function(e) {
            window.location = e
        };
        ue.env() && (ue.location = function() {});
        ue.ready = function() {
            Nn = !0, Yr ? $E() : Xe.each(Ot, da), Xe.each(jr, da), ue.resize.up()
        };

        function da(e) {
            Ye(e) && e()
        }

        function $E() {
            Yr = !1, Xe.each(At, ga)
        }
        var ht;
        ue.load = function(e) {
            ht.then(e)
        };

        function va() {
            ht && (ht.reject(), Ve.off("load", ht.resolve)), ht = new st.Deferred, Ve.on("load", ht.resolve)
        }
        ue.destroy = function(e) {
            e = e || {}, Yr = !0, Ve.triggerHandler("__wf_destroy"), e.domready != null && (Nn = e.domready), Xe.each(At, ha), ue.resize.off(), ue.scroll.off(), ue.redraw.off(), Ot = [], jr = [], ht.state() === "pending" && va()
        };
        st(ue.ready);
        va();
        ma.exports = window.Webflow = ue
    });
    var Ta = f((OF, Ia) => {
        "use strict";
        var _a = ke();
        _a.define("brand", Ia.exports = function() {}, function(e) {
            var t = {},
                n = document,
                r = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var h = r.attr("data-wf-status"),
                    I = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(I) && a.hostname !== I && (h = !0), h && !s && (l = l || g(), d(), setTimeout(d, 500), e(n).off(u, E).on(u, E))
            };

            function E() {
                var h = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(l).attr("style", h ? "display: none !important;" : "")
            }

            function g() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    I = e("<img>").attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(I, _), h[0]
            }

            function d() {
                var h = i.children(o),
                    I = h.length && h.get(0) === l,
                    _ = _a.env("editor");
                if (I) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(), _ || i.append(l)
            }
            return t
        })
    });
    var Aa = f((SF, ba) => {
        "use strict";
        var $r = ke();
        $r.define("edit", ba.exports = function(e, t, n) {
            if (n = n || {}, ($r.env("test") || $r.env("frame")) && !n.fixture && !ZE()) return {
                exit: 1
            };
            var r = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, l = n.load || d,
                E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, g).triggerHandler(s);

            function g() {
                u || /\?edit/.test(a.hash) && l()
            }

            function d() {
                u = !0, window.WebflowEditor = !0, i.off(s, g), x(function(w) {
                    e.ajax({
                        url: v("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(w)
                    })
                })
            }

            function h(w) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = w, I(O(P.scriptPath), function() {
                        window.WebflowEditor(P)
                    })
                }
            }

            function I(w, P) {
                e.ajax({
                    type: "GET",
                    url: w,
                    dataType: "script",
                    cache: !0
                }).then(P, _)
            }

            function _(w, P, R) {
                throw console.error("Could not load editor script: " + P), R
            }

            function O(w) {
                return w.indexOf("//") >= 0 ? w : v("https://editor-api.webflow.com" + w)
            }

            function v(w) {
                return w.replace(/([^:])\/\//g, "$1/")
            }

            function x(w) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html", P.style.display = "none", P.sandbox = "allow-scripts allow-same-origin";
                var R = function(X) {
                    X.data === "WF_third_party_cookies_unsupported" ? (A(P, R), w(!1)) : X.data === "WF_third_party_cookies_supported" && (A(P, R), w(!0))
                };
                P.onerror = function() {
                    A(P, R), w(!1)
                }, window.addEventListener("message", R, !1), window.document.body.appendChild(P)
            }

            function A(w, P) {
                window.removeEventListener("message", P, !1), w.remove()
            }
            return r
        });

        function ZE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Sa = f((wF, Oa) => {
        "use strict";
        var JE = ke();
        JE.define("focus-visible", Oa.exports = function() {
            function e(n) {
                var r = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function u(A) {
                    var w = A.type,
                        P = A.tagName;
                    return !!(P === "INPUT" && a[w] && !A.readOnly || P === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function l(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function E(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function g(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (s(n.activeElement) && l(n.activeElement), r = !0)
                }

                function d() {
                    r = !1
                }

                function h(A) {
                    s(A.target) && (r || u(A.target)) && l(A.target)
                }

                function I(A) {
                    s(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), E(A.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (r = !0), O())
                }

                function O() {
                    document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
                }

                function v() {
                    document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
                }

                function x(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (r = !1, v())
                }
                document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", _, !0), O(), n.addEventListener("focus", h, !0), n.addEventListener("blur", I, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Ra = f((xF, xa) => {
        "use strict";
        var wa = ke();
        wa.define("focus", xa.exports = function() {
            var e = [],
                t = !1;

            function n(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function r(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                r(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && wa.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        })
    });
    var La = f((RF, Pa) => {
        "use strict";
        var Zr = window.jQuery,
            Qe = {},
            Dn = [],
            Ca = ".w-ix",
            Mn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Zr(t).triggerHandler(Qe.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Zr(t).triggerHandler(Qe.types.OUTRO))
                }
            };
        Qe.triggers = {};
        Qe.types = {
            INTRO: "w-ix-intro" + Ca,
            OUTRO: "w-ix-outro" + Ca
        };
        Qe.init = function() {
            for (var e = Dn.length, t = 0; t < e; t++) {
                var n = Dn[t];
                n[0](0, n[1])
            }
            Dn = [], Zr.extend(Qe.triggers, Mn)
        };
        Qe.async = function() {
            for (var e in Mn) {
                var t = Mn[e];
                Mn.hasOwnProperty(e) && (Qe.triggers[e] = function(n, r) {
                    Dn.push([t, r])
                })
            }
        };
        Qe.async();
        Pa.exports = Qe
    });
    var qn = f((CF, Ma) => {
        "use strict";
        var Jr = La();

        function Na(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
        }
        var ey = window.jQuery,
            Fn = {},
            Da = ".w-ix",
            ty = {
                reset: function(e, t) {
                    Jr.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Jr.triggers.intro(e, t), Na(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Jr.triggers.outro(e, t), Na(t, "COMPONENT_INACTIVE")
                }
            };
        Fn.triggers = {};
        Fn.types = {
            INTRO: "w-ix-intro" + Da,
            OUTRO: "w-ix-outro" + Da
        };
        ey.extend(Fn.triggers, ty);
        Ma.exports = Fn
    });
    var ei = f((PF, Fa) => {
        var ny = typeof global == "object" && global && global.Object === Object && global;
        Fa.exports = ny
    });
    var Ue = f((LF, qa) => {
        var ry = ei(),
            iy = typeof self == "object" && self && self.Object === Object && self,
            oy = ry || iy || Function("return this")();
        qa.exports = oy
    });
    var St = f((NF, Ga) => {
        var ay = Ue(),
            sy = ay.Symbol;
        Ga.exports = sy
    });
    var Ua = f((DF, ka) => {
        var Xa = St(),
            Va = Object.prototype,
            uy = Va.hasOwnProperty,
            cy = Va.toString,
            tn = Xa ? Xa.toStringTag : void 0;

        function ly(e) {
            var t = uy.call(e, tn),
                n = e[tn];
            try {
                e[tn] = void 0;
                var r = !0
            } catch {}
            var i = cy.call(e);
            return r && (t ? e[tn] = n : delete e[tn]), i
        }
        ka.exports = ly
    });
    var Ba = f((MF, Ha) => {
        var fy = Object.prototype,
            dy = fy.toString;

        function py(e) {
            return dy.call(e)
        }
        Ha.exports = py
    });
    var ut = f((FF, Ka) => {
        var Wa = St(),
            gy = Ua(),
            hy = Ba(),
            Ey = "[object Null]",
            yy = "[object Undefined]",
            za = Wa ? Wa.toStringTag : void 0;

        function vy(e) {
            return e == null ? e === void 0 ? yy : Ey : za && za in Object(e) ? gy(e) : hy(e)
        }
        Ka.exports = vy
    });
    var ti = f((qF, ja) => {
        function my(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        ja.exports = my
    });
    var ni = f((GF, Ya) => {
        var _y = ti(),
            Iy = _y(Object.getPrototypeOf, Object);
        Ya.exports = Iy
    });
    var nt = f((XF, Qa) => {
        function Ty(e) {
            return e != null && typeof e == "object"
        }
        Qa.exports = Ty
    });
    var ri = f((VF, Za) => {
        var by = ut(),
            Ay = ni(),
            Oy = nt(),
            Sy = "[object Object]",
            wy = Function.prototype,
            xy = Object.prototype,
            $a = wy.toString,
            Ry = xy.hasOwnProperty,
            Cy = $a.call(Object);

        function Py(e) {
            if (!Oy(e) || by(e) != Sy) return !1;
            var t = Ay(e);
            if (t === null) return !0;
            var n = Ry.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && $a.call(n) == Cy
        }
        Za.exports = Py
    });
    var Ja = f(ii => {
        "use strict";
        Object.defineProperty(ii, "__esModule", {
            value: !0
        });
        ii.default = Ly;

        function Ly(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
        }
    });
    var es = f((ai, oi) => {
        "use strict";
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        var Ny = Ja(),
            Dy = My(Ny);

        function My(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var wt;
        typeof self < "u" ? wt = self : typeof window < "u" ? wt = window : typeof global < "u" ? wt = global : typeof oi < "u" ? wt = oi : wt = Function("return this")();
        var Fy = (0, Dy.default)(wt);
        ai.default = Fy
    });
    var si = f(nn => {
        "use strict";
        nn.__esModule = !0;
        nn.ActionTypes = void 0;
        nn.default = is;
        var qy = ri(),
            Gy = rs(qy),
            Xy = es(),
            ts = rs(Xy);

        function rs(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var ns = nn.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function is(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
                if (typeof n != "function") throw new Error("Expected the enhancer to be a function.");
                return n(is)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function l() {
                s === a && (s = a.slice())
            }

            function E() {
                return o
            }

            function g(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var O = !0;
                return l(), s.push(_),
                    function() {
                        if (O) {
                            O = !1, l();
                            var x = s.indexOf(_);
                            s.splice(x, 1)
                        }
                    }
            }

            function d(_) {
                if (!(0, Gy.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var O = a = s, v = 0; v < O.length; v++) O[v]();
                return _
            }

            function h(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, d({
                    type: ns.INIT
                })
            }

            function I() {
                var _, O = g;
                return _ = {
                    subscribe: function(x) {
                        if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");

                        function A() {
                            x.next && x.next(E())
                        }
                        A();
                        var w = O(A);
                        return {
                            unsubscribe: w
                        }
                    }
                }, _[ts.default] = function() {
                    return this
                }, _
            }
            return d({
                type: ns.INIT
            }), r = {
                dispatch: d,
                subscribe: g,
                getState: E,
                replaceReducer: h
            }, r[ts.default] = I, r
        }
    });
    var ci = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = Vy;

        function Vy(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var ss = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = Wy;
        var os = si(),
            ky = ri(),
            BF = as(ky),
            Uy = ci(),
            WF = as(Uy);

        function as(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Hy(e, t) {
            var n = t && t.type,
                r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function By(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t],
                    r = n(void 0, {
                        type: os.ActionTypes.INIT
                    });
                if (typeof r > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + os.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Wy(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1) var a;
            var s;
            try {
                By(n)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    E = arguments[1];
                if (s) throw s;
                if (!1) var g;
                for (var d = !1, h = {}, I = 0; I < o.length; I++) {
                    var _ = o[I],
                        O = n[_],
                        v = l[_],
                        x = O(v, E);
                    if (typeof x > "u") {
                        var A = Hy(_, E);
                        throw new Error(A)
                    }
                    h[_] = x, d = d || x !== v
                }
                return d ? h : l
            }
        }
    });
    var cs = f(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = zy;

        function us(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function zy(e, t) {
            if (typeof e == "function") return us(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i],
                    a = e[o];
                typeof a == "function" && (r[o] = us(a, t))
            }
            return r
        }
    });
    var pi = f(di => {
        "use strict";
        di.__esModule = !0;
        di.default = Ky;

        function Ky() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var r = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, r.apply(void 0, arguments))
            }
        }
    });
    var ls = f(gi => {
        "use strict";
        gi.__esModule = !0;
        var jy = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        gi.default = Zy;
        var Yy = pi(),
            Qy = $y(Yy);

        function $y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Zy() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(r) {
                return function(i, o, a) {
                    var s = r(i, o, a),
                        u = s.dispatch,
                        l = [],
                        E = {
                            getState: s.getState,
                            dispatch: function(d) {
                                return u(d)
                            }
                        };
                    return l = t.map(function(g) {
                        return g(E)
                    }), u = Qy.default.apply(void 0, l)(s.dispatch), jy({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var hi = f(Fe => {
        "use strict";
        Fe.__esModule = !0;
        Fe.compose = Fe.applyMiddleware = Fe.bindActionCreators = Fe.combineReducers = Fe.createStore = void 0;
        var Jy = si(),
            ev = xt(Jy),
            tv = ss(),
            nv = xt(tv),
            rv = cs(),
            iv = xt(rv),
            ov = ls(),
            av = xt(ov),
            sv = pi(),
            uv = xt(sv),
            cv = ci(),
            QF = xt(cv);

        function xt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Fe.createStore = ev.default;
        Fe.combineReducers = nv.default;
        Fe.bindActionCreators = iv.default;
        Fe.applyMiddleware = av.default;
        Fe.compose = uv.default
    });
    var He, Ei, $e, lv, fv, Gn, dv, yi = de(() => {
        "use strict";
        He = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Ei = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, $e = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, lv = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, fv = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Gn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, dv = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var xe, pv, Xn = de(() => {
        "use strict";
        xe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, pv = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var gv, fs = de(() => {
        "use strict";
        gv = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var hv, Ev, yv, vv, mv, _v, Iv, vi, ds = de(() => {
        "use strict";
        Xn();
        ({
            TRANSFORM_MOVE: hv,
            TRANSFORM_SCALE: Ev,
            TRANSFORM_ROTATE: yv,
            TRANSFORM_SKEW: vv,
            STYLE_SIZE: mv,
            STYLE_FILTER: _v,
            STYLE_FONT_VARIATION: Iv
        } = xe), vi = {
            [hv]: !0,
            [Ev]: !0,
            [yv]: !0,
            [vv]: !0,
            [mv]: !0,
            [_v]: !0,
            [Iv]: !0
        }
    });
    var _e = {};
    Le(_e, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Gv,
        IX2_ANIMATION_FRAME_CHANGED: () => Lv,
        IX2_CLEAR_REQUESTED: () => Rv,
        IX2_ELEMENT_STATE_CHANGED: () => qv,
        IX2_EVENT_LISTENER_ADDED: () => Cv,
        IX2_EVENT_STATE_CHANGED: () => Pv,
        IX2_INSTANCE_ADDED: () => Dv,
        IX2_INSTANCE_REMOVED: () => Fv,
        IX2_INSTANCE_STARTED: () => Mv,
        IX2_MEDIA_QUERIES_DEFINED: () => Vv,
        IX2_PARAMETER_CHANGED: () => Nv,
        IX2_PLAYBACK_REQUESTED: () => wv,
        IX2_PREVIEW_REQUESTED: () => Sv,
        IX2_RAW_DATA_IMPORTED: () => Tv,
        IX2_SESSION_INITIALIZED: () => bv,
        IX2_SESSION_STARTED: () => Av,
        IX2_SESSION_STOPPED: () => Ov,
        IX2_STOP_REQUESTED: () => xv,
        IX2_TEST_FRAME_RENDERED: () => kv,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Xv
    });
    var Tv, bv, Av, Ov, Sv, wv, xv, Rv, Cv, Pv, Lv, Nv, Dv, Mv, Fv, qv, Gv, Xv, Vv, kv, ps = de(() => {
        "use strict";
        Tv = "IX2_RAW_DATA_IMPORTED", bv = "IX2_SESSION_INITIALIZED", Av = "IX2_SESSION_STARTED", Ov = "IX2_SESSION_STOPPED", Sv = "IX2_PREVIEW_REQUESTED", wv = "IX2_PLAYBACK_REQUESTED", xv = "IX2_STOP_REQUESTED", Rv = "IX2_CLEAR_REQUESTED", Cv = "IX2_EVENT_LISTENER_ADDED", Pv = "IX2_EVENT_STATE_CHANGED", Lv = "IX2_ANIMATION_FRAME_CHANGED", Nv = "IX2_PARAMETER_CHANGED", Dv = "IX2_INSTANCE_ADDED", Mv = "IX2_INSTANCE_STARTED", Fv = "IX2_INSTANCE_REMOVED", qv = "IX2_ELEMENT_STATE_CHANGED", Gv = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Xv = "IX2_VIEWPORT_WIDTH_CHANGED", Vv = "IX2_MEDIA_QUERIES_DEFINED", kv = "IX2_TEST_FRAME_RENDERED"
    });
    var Oe = {};
    Le(Oe, {
        ABSTRACT_NODE: () => Xm,
        AUTO: () => xm,
        BACKGROUND: () => Tm,
        BACKGROUND_COLOR: () => Im,
        BAR_DELIMITER: () => Pm,
        BORDER_COLOR: () => bm,
        BOUNDARY_SELECTOR: () => zv,
        CHILDREN: () => Lm,
        COLON_DELIMITER: () => Cm,
        COLOR: () => Am,
        COMMA_DELIMITER: () => Rm,
        CONFIG_UNIT: () => em,
        CONFIG_VALUE: () => Qv,
        CONFIG_X_UNIT: () => $v,
        CONFIG_X_VALUE: () => Kv,
        CONFIG_Y_UNIT: () => Zv,
        CONFIG_Y_VALUE: () => jv,
        CONFIG_Z_UNIT: () => Jv,
        CONFIG_Z_VALUE: () => Yv,
        DISPLAY: () => Om,
        FILTER: () => ym,
        FLEX: () => Sm,
        FONT_VARIATION_SETTINGS: () => vm,
        HEIGHT: () => _m,
        HTML_ELEMENT: () => qm,
        IMMEDIATE_CHILDREN: () => Nm,
        IX2_ID_DELIMITER: () => Uv,
        OPACITY: () => Em,
        PARENT: () => Mm,
        PLAIN_OBJECT: () => Gm,
        PRESERVE_3D: () => Fm,
        RENDER_GENERAL: () => km,
        RENDER_PLUGIN: () => Hm,
        RENDER_STYLE: () => Um,
        RENDER_TRANSFORM: () => Vm,
        ROTATE_X: () => lm,
        ROTATE_Y: () => fm,
        ROTATE_Z: () => dm,
        SCALE_3D: () => cm,
        SCALE_X: () => am,
        SCALE_Y: () => sm,
        SCALE_Z: () => um,
        SIBLINGS: () => Dm,
        SKEW: () => pm,
        SKEW_X: () => gm,
        SKEW_Y: () => hm,
        TRANSFORM: () => tm,
        TRANSLATE_3D: () => om,
        TRANSLATE_X: () => nm,
        TRANSLATE_Y: () => rm,
        TRANSLATE_Z: () => im,
        WF_PAGE: () => Hv,
        WIDTH: () => mm,
        WILL_CHANGE: () => wm,
        W_MOD_IX: () => Wv,
        W_MOD_JS: () => Bv
    });
    var Uv, Hv, Bv, Wv, zv, Kv, jv, Yv, Qv, $v, Zv, Jv, em, tm, nm, rm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, Em, ym, vm, mm, _m, Im, Tm, bm, Am, Om, Sm, wm, xm, Rm, Cm, Pm, Lm, Nm, Dm, Mm, Fm, qm, Gm, Xm, Vm, km, Um, Hm, gs = de(() => {
        "use strict";
        Uv = "|", Hv = "data-wf-page", Bv = "w-mod-js", Wv = "w-mod-ix", zv = ".w-dyn-item", Kv = "xValue", jv = "yValue", Yv = "zValue", Qv = "value", $v = "xUnit", Zv = "yUnit", Jv = "zUnit", em = "unit", tm = "transform", nm = "translateX", rm = "translateY", im = "translateZ", om = "translate3d", am = "scaleX", sm = "scaleY", um = "scaleZ", cm = "scale3d", lm = "rotateX", fm = "rotateY", dm = "rotateZ", pm = "skew", gm = "skewX", hm = "skewY", Em = "opacity", ym = "filter", vm = "font-variation-settings", mm = "width", _m = "height", Im = "backgroundColor", Tm = "background", bm = "borderColor", Am = "color", Om = "display", Sm = "flex", wm = "willChange", xm = "AUTO", Rm = ",", Cm = ":", Pm = "|", Lm = "CHILDREN", Nm = "IMMEDIATE_CHILDREN", Dm = "SIBLINGS", Mm = "PARENT", Fm = "preserve-3d", qm = "HTML_ELEMENT", Gm = "PLAIN_OBJECT", Xm = "ABSTRACT_NODE", Vm = "RENDER_TRANSFORM", km = "RENDER_GENERAL", Um = "RENDER_STYLE", Hm = "RENDER_PLUGIN"
    });
    var hs = {};
    Le(hs, {
        ActionAppliesTo: () => pv,
        ActionTypeConsts: () => xe,
        EventAppliesTo: () => Ei,
        EventBasedOn: () => $e,
        EventContinuousMouseAxes: () => lv,
        EventLimitAffectedElements: () => fv,
        EventTypeConsts: () => He,
        IX2EngineActionTypes: () => _e,
        IX2EngineConstants: () => Oe,
        InteractionTypeConsts: () => gv,
        QuickEffectDirectionConsts: () => dv,
        QuickEffectIds: () => Gn,
        ReducedMotionTypes: () => vi
    });
    var Ne = de(() => {
        "use strict";
        yi();
        Xn();
        fs();
        ds();
        ps();
        gs();
        Xn();
        yi()
    });
    var Bm, Es, ys = de(() => {
        "use strict";
        Ne();
        ({
            IX2_RAW_DATA_IMPORTED: Bm
        } = _e), Es = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Bm:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Rt = f(he => {
        "use strict";
        Object.defineProperty(he, "__esModule", {
            value: !0
        });
        var Wm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        he.clone = kn;
        he.addLast = _s;
        he.addFirst = Is;
        he.removeLast = Ts;
        he.removeFirst = bs;
        he.insert = As;
        he.removeAt = Os;
        he.replaceAt = Ss;
        he.getIn = Un;
        he.set = Hn;
        he.setIn = Bn;
        he.update = xs;
        he.updateIn = Rs;
        he.merge = Cs;
        he.mergeDeep = Ps;
        he.mergeIn = Ls;
        he.omit = Ns;
        he.addDefaults = Ds;
        var vs = "INVALID_ARGS";

        function ms(e) {
            throw new Error(e)
        }

        function mi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var zm = {}.hasOwnProperty;

        function kn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = mi(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }

        function De(e, t, n) {
            var r = n;
            r == null && ms(vs);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var E = mi(l);
                    if (E.length)
                        for (var g = 0; g <= E.length; g++) {
                            var d = E[g];
                            if (!(e && r[d] !== void 0)) {
                                var h = l[d];
                                t && Vn(r[d]) && Vn(h) && (h = De(e, t, r[d], h)), !(h === void 0 || h === r[d]) && (i || (i = !0, r = kn(r)), r[d] = h)
                            }
                        }
                }
            }
            return r
        }

        function Vn(e) {
            var t = typeof e > "u" ? "undefined" : Wm(e);
            return e != null && (t === "object" || t === "function")
        }

        function _s(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Is(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Ts(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function bs(e) {
            return e.length ? e.slice(1) : e
        }

        function As(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }

        function Os(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Ss(e, t, n) {
            if (e[t] === n) return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
            return i[t] = n, i
        }

        function Un(e, t) {
            if (!Array.isArray(t) && ms(vs), e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n?.[i], n === void 0) return n
                }
                return n
            }
        }

        function Hn(e, t, n) {
            var r = typeof t == "number" ? [] : {},
                i = e ?? r;
            if (i[t] === n) return i;
            var o = kn(i);
            return o[t] = n, o
        }

        function ws(e, t, n, r) {
            var i = void 0,
                o = t[r];
            if (r === t.length - 1) i = n;
            else {
                var a = Vn(e) && Vn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = ws(a, t, n, r + 1)
            }
            return Hn(e, o, i)
        }

        function Bn(e, t, n) {
            return t.length ? ws(e, t, n, 0) : n
        }

        function xs(e, t, n) {
            var r = e?.[t],
                i = n(r);
            return Hn(e, t, i)
        }

        function Rs(e, t, n) {
            var r = Un(e, t),
                i = n(r);
            return Bn(e, t, i)
        }

        function Cs(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(s)) : De(!1, !1, e, t, n, r, i, o)
        }

        function Ps(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(s)) : De(!1, !0, e, t, n, r, i, o)
        }

        function Ls(e, t, n, r, i, o, a) {
            var s = Un(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, E = Array(l > 7 ? l - 7 : 0), g = 7; g < l; g++) E[g - 7] = arguments[g];
            return E.length ? u = De.call.apply(De, [null, !1, !1, s, n, r, i, o, a].concat(E)) : u = De(!1, !1, s, n, r, i, o, a), Bn(e, t, u)
        }

        function Ns(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (zm.call(e, n[i])) {
                    r = !0;
                    break
                } if (!r) return e;
            for (var o = {}, a = mi(e), s = 0; s < a.length; s++) {
                var u = a[s];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Ds(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(s)) : De(!0, !1, e, t, n, r, i, o)
        }
        var Km = {
            clone: kn,
            addLast: _s,
            addFirst: Is,
            removeLast: Ts,
            removeFirst: bs,
            insert: As,
            removeAt: Os,
            replaceAt: Ss,
            getIn: Un,
            set: Hn,
            setIn: Bn,
            update: xs,
            updateIn: Rs,
            merge: Cs,
            mergeDeep: Ps,
            mergeIn: Ls,
            omit: Ns,
            addDefaults: Ds
        };
        he.default = Km
    });
    var Fs, jm, Ym, Qm, $m, Zm, Ms, qs, Gs = de(() => {
        "use strict";
        Ne();
        Fs = oe(Rt()), {
            IX2_PREVIEW_REQUESTED: jm,
            IX2_PLAYBACK_REQUESTED: Ym,
            IX2_STOP_REQUESTED: Qm,
            IX2_CLEAR_REQUESTED: $m
        } = _e, Zm = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Ms = Object.create(null, {
            [jm]: {
                value: "preview"
            },
            [Ym]: {
                value: "playback"
            },
            [Qm]: {
                value: "stop"
            },
            [$m]: {
                value: "clear"
            }
        }), qs = (e = Zm, t) => {
            if (t.type in Ms) {
                let n = [Ms[t.type]];
                return (0, Fs.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    });
    var Re, Jm, e_, t_, n_, r_, i_, o_, a_, s_, u_, Xs, c_, Vs, ks = de(() => {
        "use strict";
        Ne();
        Re = oe(Rt()), {
            IX2_SESSION_INITIALIZED: Jm,
            IX2_SESSION_STARTED: e_,
            IX2_TEST_FRAME_RENDERED: t_,
            IX2_SESSION_STOPPED: n_,
            IX2_EVENT_LISTENER_ADDED: r_,
            IX2_EVENT_STATE_CHANGED: i_,
            IX2_ANIMATION_FRAME_CHANGED: o_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: a_,
            IX2_VIEWPORT_WIDTH_CHANGED: s_,
            IX2_MEDIA_QUERIES_DEFINED: u_
        } = _e, Xs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, c_ = 20, Vs = (e = Xs, t) => {
            switch (t.type) {
                case Jm: {
                    let {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    } = t.payload;
                    return (0, Re.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    })
                }
                case e_:
                    return (0, Re.set)(e, "active", !0);
                case t_: {
                    let {
                        payload: {
                            step: n = c_
                        }
                    } = t;
                    return (0, Re.set)(e, "tick", e.tick + n)
                }
                case n_:
                    return Xs;
                case o_: {
                    let {
                        payload: {
                            now: n
                        }
                    } = t;
                    return (0, Re.set)(e, "tick", n)
                }
                case r_: {
                    let n = (0, Re.addLast)(e.eventListeners, t.payload);
                    return (0, Re.set)(e, "eventListeners", n)
                }
                case i_: {
                    let {
                        stateKey: n,
                        newState: r
                    } = t.payload;
                    return (0, Re.setIn)(e, ["eventState", n], r)
                }
                case a_: {
                    let {
                        actionListId: n,
                        isPlaying: r
                    } = t.payload;
                    return (0, Re.setIn)(e, ["playbackState", n], r)
                }
                case s_: {
                    let {
                        width: n,
                        mediaQueries: r
                    } = t.payload, i = r.length, o = null;
                    for (let a = 0; a < i; a++) {
                        let {
                            key: s,
                            min: u,
                            max: l
                        } = r[a];
                        if (n >= u && n <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0, Re.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: o
                    })
                }
                case u_:
                    return (0, Re.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Hs = f((E2, Us) => {
        function l_() {
            this.__data__ = [], this.size = 0
        }
        Us.exports = l_
    });
    var Wn = f((y2, Bs) => {
        function f_(e, t) {
            return e === t || e !== e && t !== t
        }
        Bs.exports = f_
    });
    var rn = f((v2, Ws) => {
        var d_ = Wn();

        function p_(e, t) {
            for (var n = e.length; n--;)
                if (d_(e[n][0], t)) return n;
            return -1
        }
        Ws.exports = p_
    });
    var Ks = f((m2, zs) => {
        var g_ = rn(),
            h_ = Array.prototype,
            E_ = h_.splice;

        function y_(e) {
            var t = this.__data__,
                n = g_(t, e);
            if (n < 0) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : E_.call(t, n, 1), --this.size, !0
        }
        zs.exports = y_
    });
    var Ys = f((_2, js) => {
        var v_ = rn();

        function m_(e) {
            var t = this.__data__,
                n = v_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        js.exports = m_
    });
    var $s = f((I2, Qs) => {
        var __ = rn();

        function I_(e) {
            return __(this.__data__, e) > -1
        }
        Qs.exports = I_
    });
    var Js = f((T2, Zs) => {
        var T_ = rn();

        function b_(e, t) {
            var n = this.__data__,
                r = T_(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }
        Zs.exports = b_
    });
    var on = f((b2, eu) => {
        var A_ = Hs(),
            O_ = Ks(),
            S_ = Ys(),
            w_ = $s(),
            x_ = Js();

        function Ct(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Ct.prototype.clear = A_;
        Ct.prototype.delete = O_;
        Ct.prototype.get = S_;
        Ct.prototype.has = w_;
        Ct.prototype.set = x_;
        eu.exports = Ct
    });
    var nu = f((A2, tu) => {
        var R_ = on();

        function C_() {
            this.__data__ = new R_, this.size = 0
        }
        tu.exports = C_
    });
    var iu = f((O2, ru) => {
        function P_(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
        ru.exports = P_
    });
    var au = f((S2, ou) => {
        function L_(e) {
            return this.__data__.get(e)
        }
        ou.exports = L_
    });
    var uu = f((w2, su) => {
        function N_(e) {
            return this.__data__.has(e)
        }
        su.exports = N_
    });
    var Ze = f((x2, cu) => {
        function D_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        cu.exports = D_
    });
    var _i = f((R2, lu) => {
        var M_ = ut(),
            F_ = Ze(),
            q_ = "[object AsyncFunction]",
            G_ = "[object Function]",
            X_ = "[object GeneratorFunction]",
            V_ = "[object Proxy]";

        function k_(e) {
            if (!F_(e)) return !1;
            var t = M_(e);
            return t == G_ || t == X_ || t == q_ || t == V_
        }
        lu.exports = k_
    });
    var du = f((C2, fu) => {
        var U_ = Ue(),
            H_ = U_["__core-js_shared__"];
        fu.exports = H_
    });
    var hu = f((P2, gu) => {
        var Ii = du(),
            pu = function() {
                var e = /[^.]+$/.exec(Ii && Ii.keys && Ii.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function B_(e) {
            return !!pu && pu in e
        }
        gu.exports = B_
    });
    var Ti = f((L2, Eu) => {
        var W_ = Function.prototype,
            z_ = W_.toString;

        function K_(e) {
            if (e != null) {
                try {
                    return z_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Eu.exports = K_
    });
    var vu = f((N2, yu) => {
        var j_ = _i(),
            Y_ = hu(),
            Q_ = Ze(),
            $_ = Ti(),
            Z_ = /[\\^$.*+?()[\]{}|]/g,
            J_ = /^\[object .+?Constructor\]$/,
            eI = Function.prototype,
            tI = Object.prototype,
            nI = eI.toString,
            rI = tI.hasOwnProperty,
            iI = RegExp("^" + nI.call(rI).replace(Z_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function oI(e) {
            if (!Q_(e) || Y_(e)) return !1;
            var t = j_(e) ? iI : J_;
            return t.test($_(e))
        }
        yu.exports = oI
    });
    var _u = f((D2, mu) => {
        function aI(e, t) {
            return e?.[t]
        }
        mu.exports = aI
    });
    var ct = f((M2, Iu) => {
        var sI = vu(),
            uI = _u();

        function cI(e, t) {
            var n = uI(e, t);
            return sI(n) ? n : void 0
        }
        Iu.exports = cI
    });
    var zn = f((F2, Tu) => {
        var lI = ct(),
            fI = Ue(),
            dI = lI(fI, "Map");
        Tu.exports = dI
    });
    var an = f((q2, bu) => {
        var pI = ct(),
            gI = pI(Object, "create");
        bu.exports = gI
    });
    var Su = f((G2, Ou) => {
        var Au = an();

        function hI() {
            this.__data__ = Au ? Au(null) : {}, this.size = 0
        }
        Ou.exports = hI
    });
    var xu = f((X2, wu) => {
        function EI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        wu.exports = EI
    });
    var Cu = f((V2, Ru) => {
        var yI = an(),
            vI = "__lodash_hash_undefined__",
            mI = Object.prototype,
            _I = mI.hasOwnProperty;

        function II(e) {
            var t = this.__data__;
            if (yI) {
                var n = t[e];
                return n === vI ? void 0 : n
            }
            return _I.call(t, e) ? t[e] : void 0
        }
        Ru.exports = II
    });
    var Lu = f((k2, Pu) => {
        var TI = an(),
            bI = Object.prototype,
            AI = bI.hasOwnProperty;

        function OI(e) {
            var t = this.__data__;
            return TI ? t[e] !== void 0 : AI.call(t, e)
        }
        Pu.exports = OI
    });
    var Du = f((U2, Nu) => {
        var SI = an(),
            wI = "__lodash_hash_undefined__";

        function xI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = SI && t === void 0 ? wI : t, this
        }
        Nu.exports = xI
    });
    var Fu = f((H2, Mu) => {
        var RI = Su(),
            CI = xu(),
            PI = Cu(),
            LI = Lu(),
            NI = Du();

        function Pt(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Pt.prototype.clear = RI;
        Pt.prototype.delete = CI;
        Pt.prototype.get = PI;
        Pt.prototype.has = LI;
        Pt.prototype.set = NI;
        Mu.exports = Pt
    });
    var Xu = f((B2, Gu) => {
        var qu = Fu(),
            DI = on(),
            MI = zn();

        function FI() {
            this.size = 0, this.__data__ = {
                hash: new qu,
                map: new(MI || DI),
                string: new qu
            }
        }
        Gu.exports = FI
    });
    var ku = f((W2, Vu) => {
        function qI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Vu.exports = qI
    });
    var sn = f((z2, Uu) => {
        var GI = ku();

        function XI(e, t) {
            var n = e.__data__;
            return GI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        Uu.exports = XI
    });
    var Bu = f((K2, Hu) => {
        var VI = sn();

        function kI(e) {
            var t = VI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Hu.exports = kI
    });
    var zu = f((j2, Wu) => {
        var UI = sn();

        function HI(e) {
            return UI(this, e).get(e)
        }
        Wu.exports = HI
    });
    var ju = f((Y2, Ku) => {
        var BI = sn();

        function WI(e) {
            return BI(this, e).has(e)
        }
        Ku.exports = WI
    });
    var Qu = f((Q2, Yu) => {
        var zI = sn();

        function KI(e, t) {
            var n = zI(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }
        Yu.exports = KI
    });
    var Kn = f(($2, $u) => {
        var jI = Xu(),
            YI = Bu(),
            QI = zu(),
            $I = ju(),
            ZI = Qu();

        function Lt(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Lt.prototype.clear = jI;
        Lt.prototype.delete = YI;
        Lt.prototype.get = QI;
        Lt.prototype.has = $I;
        Lt.prototype.set = ZI;
        $u.exports = Lt
    });
    var Ju = f((Z2, Zu) => {
        var JI = on(),
            eT = zn(),
            tT = Kn(),
            nT = 200;

        function rT(e, t) {
            var n = this.__data__;
            if (n instanceof JI) {
                var r = n.__data__;
                if (!eT || r.length < nT - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new tT(r)
            }
            return n.set(e, t), this.size = n.size, this
        }
        Zu.exports = rT
    });
    var bi = f((J2, ec) => {
        var iT = on(),
            oT = nu(),
            aT = iu(),
            sT = au(),
            uT = uu(),
            cT = Ju();

        function Nt(e) {
            var t = this.__data__ = new iT(e);
            this.size = t.size
        }
        Nt.prototype.clear = oT;
        Nt.prototype.delete = aT;
        Nt.prototype.get = sT;
        Nt.prototype.has = uT;
        Nt.prototype.set = cT;
        ec.exports = Nt
    });
    var nc = f((eq, tc) => {
        var lT = "__lodash_hash_undefined__";

        function fT(e) {
            return this.__data__.set(e, lT), this
        }
        tc.exports = fT
    });
    var ic = f((tq, rc) => {
        function dT(e) {
            return this.__data__.has(e)
        }
        rc.exports = dT
    });
    var ac = f((nq, oc) => {
        var pT = Kn(),
            gT = nc(),
            hT = ic();

        function jn(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.__data__ = new pT; ++t < n;) this.add(e[t])
        }
        jn.prototype.add = jn.prototype.push = gT;
        jn.prototype.has = hT;
        oc.exports = jn
    });
    var uc = f((rq, sc) => {
        function ET(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        sc.exports = ET
    });
    var lc = f((iq, cc) => {
        function yT(e, t) {
            return e.has(t)
        }
        cc.exports = yT
    });
    var Ai = f((oq, fc) => {
        var vT = ac(),
            mT = uc(),
            _T = lc(),
            IT = 1,
            TT = 2;

        function bT(e, t, n, r, i, o) {
            var a = n & IT,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var l = o.get(e),
                E = o.get(t);
            if (l && E) return l == t && E == e;
            var g = -1,
                d = !0,
                h = n & TT ? new vT : void 0;
            for (o.set(e, t), o.set(t, e); ++g < s;) {
                var I = e[g],
                    _ = t[g];
                if (r) var O = a ? r(_, I, g, t, e, o) : r(I, _, g, e, t, o);
                if (O !== void 0) {
                    if (O) continue;
                    d = !1;
                    break
                }
                if (h) {
                    if (!mT(t, function(v, x) {
                            if (!_T(h, x) && (I === v || i(I, v, n, r, o))) return h.push(x)
                        })) {
                        d = !1;
                        break
                    }
                } else if (!(I === _ || i(I, _, n, r, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), d
        }
        fc.exports = bT
    });
    var pc = f((aq, dc) => {
        var AT = Ue(),
            OT = AT.Uint8Array;
        dc.exports = OT
    });
    var hc = f((sq, gc) => {
        function ST(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }), n
        }
        gc.exports = ST
    });
    var yc = f((uq, Ec) => {
        function wT(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }), n
        }
        Ec.exports = wT
    });
    var Tc = f((cq, Ic) => {
        var vc = St(),
            mc = pc(),
            xT = Wn(),
            RT = Ai(),
            CT = hc(),
            PT = yc(),
            LT = 1,
            NT = 2,
            DT = "[object Boolean]",
            MT = "[object Date]",
            FT = "[object Error]",
            qT = "[object Map]",
            GT = "[object Number]",
            XT = "[object RegExp]",
            VT = "[object Set]",
            kT = "[object String]",
            UT = "[object Symbol]",
            HT = "[object ArrayBuffer]",
            BT = "[object DataView]",
            _c = vc ? vc.prototype : void 0,
            Oi = _c ? _c.valueOf : void 0;

        function WT(e, t, n, r, i, o, a) {
            switch (n) {
                case BT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case HT:
                    return !(e.byteLength != t.byteLength || !o(new mc(e), new mc(t)));
                case DT:
                case MT:
                case GT:
                    return xT(+e, +t);
                case FT:
                    return e.name == t.name && e.message == t.message;
                case XT:
                case kT:
                    return e == t + "";
                case qT:
                    var s = CT;
                case VT:
                    var u = r & LT;
                    if (s || (s = PT), e.size != t.size && !u) return !1;
                    var l = a.get(e);
                    if (l) return l == t;
                    r |= NT, a.set(e, t);
                    var E = RT(s(e), s(t), r, i, o, a);
                    return a.delete(e), E;
                case UT:
                    if (Oi) return Oi.call(e) == Oi.call(t)
            }
            return !1
        }
        Ic.exports = WT
    });
    var Yn = f((lq, bc) => {
        function zT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
        bc.exports = zT
    });
    var Te = f((fq, Ac) => {
        var KT = Array.isArray;
        Ac.exports = KT
    });
    var Si = f((dq, Oc) => {
        var jT = Yn(),
            YT = Te();

        function QT(e, t, n) {
            var r = t(e);
            return YT(e) ? r : jT(r, n(e))
        }
        Oc.exports = QT
    });
    var wc = f((pq, Sc) => {
        function $T(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }
        Sc.exports = $T
    });
    var wi = f((gq, xc) => {
        function ZT() {
            return []
        }
        xc.exports = ZT
    });
    var xi = f((hq, Cc) => {
        var JT = wc(),
            eb = wi(),
            tb = Object.prototype,
            nb = tb.propertyIsEnumerable,
            Rc = Object.getOwnPropertySymbols,
            rb = Rc ? function(e) {
                return e == null ? [] : (e = Object(e), JT(Rc(e), function(t) {
                    return nb.call(e, t)
                }))
            } : eb;
        Cc.exports = rb
    });
    var Lc = f((Eq, Pc) => {
        function ib(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        Pc.exports = ib
    });
    var Dc = f((yq, Nc) => {
        var ob = ut(),
            ab = nt(),
            sb = "[object Arguments]";

        function ub(e) {
            return ab(e) && ob(e) == sb
        }
        Nc.exports = ub
    });
    var un = f((vq, qc) => {
        var Mc = Dc(),
            cb = nt(),
            Fc = Object.prototype,
            lb = Fc.hasOwnProperty,
            fb = Fc.propertyIsEnumerable,
            db = Mc(function() {
                return arguments
            }()) ? Mc : function(e) {
                return cb(e) && lb.call(e, "callee") && !fb.call(e, "callee")
            };
        qc.exports = db
    });
    var Xc = f((mq, Gc) => {
        function pb() {
            return !1
        }
        Gc.exports = pb
    });
    var Qn = f((cn, Dt) => {
        var gb = Ue(),
            hb = Xc(),
            Uc = typeof cn == "object" && cn && !cn.nodeType && cn,
            Vc = Uc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
            Eb = Vc && Vc.exports === Uc,
            kc = Eb ? gb.Buffer : void 0,
            yb = kc ? kc.isBuffer : void 0,
            vb = yb || hb;
        Dt.exports = vb
    });
    var $n = f((_q, Hc) => {
        var mb = 9007199254740991,
            _b = /^(?:0|[1-9]\d*)$/;

        function Ib(e, t) {
            var n = typeof e;
            return t = t ?? mb, !!t && (n == "number" || n != "symbol" && _b.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Hc.exports = Ib
    });
    var Zn = f((Iq, Bc) => {
        var Tb = 9007199254740991;

        function bb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tb
        }
        Bc.exports = bb
    });
    var zc = f((Tq, Wc) => {
        var Ab = ut(),
            Ob = Zn(),
            Sb = nt(),
            wb = "[object Arguments]",
            xb = "[object Array]",
            Rb = "[object Boolean]",
            Cb = "[object Date]",
            Pb = "[object Error]",
            Lb = "[object Function]",
            Nb = "[object Map]",
            Db = "[object Number]",
            Mb = "[object Object]",
            Fb = "[object RegExp]",
            qb = "[object Set]",
            Gb = "[object String]",
            Xb = "[object WeakMap]",
            Vb = "[object ArrayBuffer]",
            kb = "[object DataView]",
            Ub = "[object Float32Array]",
            Hb = "[object Float64Array]",
            Bb = "[object Int8Array]",
            Wb = "[object Int16Array]",
            zb = "[object Int32Array]",
            Kb = "[object Uint8Array]",
            jb = "[object Uint8ClampedArray]",
            Yb = "[object Uint16Array]",
            Qb = "[object Uint32Array]",
            ce = {};
        ce[Ub] = ce[Hb] = ce[Bb] = ce[Wb] = ce[zb] = ce[Kb] = ce[jb] = ce[Yb] = ce[Qb] = !0;
        ce[wb] = ce[xb] = ce[Vb] = ce[Rb] = ce[kb] = ce[Cb] = ce[Pb] = ce[Lb] = ce[Nb] = ce[Db] = ce[Mb] = ce[Fb] = ce[qb] = ce[Gb] = ce[Xb] = !1;

        function $b(e) {
            return Sb(e) && Ob(e.length) && !!ce[Ab(e)]
        }
        Wc.exports = $b
    });
    var jc = f((bq, Kc) => {
        function Zb(e) {
            return function(t) {
                return e(t)
            }
        }
        Kc.exports = Zb
    });
    var Qc = f((ln, Mt) => {
        var Jb = ei(),
            Yc = typeof ln == "object" && ln && !ln.nodeType && ln,
            fn = Yc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
            eA = fn && fn.exports === Yc,
            Ri = eA && Jb.process,
            tA = function() {
                try {
                    var e = fn && fn.require && fn.require("util").types;
                    return e || Ri && Ri.binding && Ri.binding("util")
                } catch {}
            }();
        Mt.exports = tA
    });
    var Jn = f((Aq, Jc) => {
        var nA = zc(),
            rA = jc(),
            $c = Qc(),
            Zc = $c && $c.isTypedArray,
            iA = Zc ? rA(Zc) : nA;
        Jc.exports = iA
    });
    var Ci = f((Oq, el) => {
        var oA = Lc(),
            aA = un(),
            sA = Te(),
            uA = Qn(),
            cA = $n(),
            lA = Jn(),
            fA = Object.prototype,
            dA = fA.hasOwnProperty;

        function pA(e, t) {
            var n = sA(e),
                r = !n && aA(e),
                i = !n && !r && uA(e),
                o = !n && !r && !i && lA(e),
                a = n || r || i || o,
                s = a ? oA(e.length, String) : [],
                u = s.length;
            for (var l in e)(t || dA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || cA(l, u))) && s.push(l);
            return s
        }
        el.exports = pA
    });
    var er = f((Sq, tl) => {
        var gA = Object.prototype;

        function hA(e) {
            var t = e && e.constructor,
                n = typeof t == "function" && t.prototype || gA;
            return e === n
        }
        tl.exports = hA
    });
    var rl = f((wq, nl) => {
        var EA = ti(),
            yA = EA(Object.keys, Object);
        nl.exports = yA
    });
    var tr = f((xq, il) => {
        var vA = er(),
            mA = rl(),
            _A = Object.prototype,
            IA = _A.hasOwnProperty;

        function TA(e) {
            if (!vA(e)) return mA(e);
            var t = [];
            for (var n in Object(e)) IA.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        il.exports = TA
    });
    var Et = f((Rq, ol) => {
        var bA = _i(),
            AA = Zn();

        function OA(e) {
            return e != null && AA(e.length) && !bA(e)
        }
        ol.exports = OA
    });
    var dn = f((Cq, al) => {
        var SA = Ci(),
            wA = tr(),
            xA = Et();

        function RA(e) {
            return xA(e) ? SA(e) : wA(e)
        }
        al.exports = RA
    });
    var ul = f((Pq, sl) => {
        var CA = Si(),
            PA = xi(),
            LA = dn();

        function NA(e) {
            return CA(e, LA, PA)
        }
        sl.exports = NA
    });
    var fl = f((Lq, ll) => {
        var cl = ul(),
            DA = 1,
            MA = Object.prototype,
            FA = MA.hasOwnProperty;

        function qA(e, t, n, r, i, o) {
            var a = n & DA,
                s = cl(e),
                u = s.length,
                l = cl(t),
                E = l.length;
            if (u != E && !a) return !1;
            for (var g = u; g--;) {
                var d = s[g];
                if (!(a ? d in t : FA.call(t, d))) return !1
            }
            var h = o.get(e),
                I = o.get(t);
            if (h && I) return h == t && I == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var O = a; ++g < u;) {
                d = s[g];
                var v = e[d],
                    x = t[d];
                if (r) var A = a ? r(x, v, d, t, e, o) : r(v, x, d, e, t, o);
                if (!(A === void 0 ? v === x || i(v, x, n, r, o) : A)) {
                    _ = !1;
                    break
                }
                O || (O = d == "constructor")
            }
            if (_ && !O) {
                var w = e.constructor,
                    P = t.constructor;
                w != P && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof P == "function" && P instanceof P) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        ll.exports = qA
    });
    var pl = f((Nq, dl) => {
        var GA = ct(),
            XA = Ue(),
            VA = GA(XA, "DataView");
        dl.exports = VA
    });
    var hl = f((Dq, gl) => {
        var kA = ct(),
            UA = Ue(),
            HA = kA(UA, "Promise");
        gl.exports = HA
    });
    var yl = f((Mq, El) => {
        var BA = ct(),
            WA = Ue(),
            zA = BA(WA, "Set");
        El.exports = zA
    });
    var Pi = f((Fq, vl) => {
        var KA = ct(),
            jA = Ue(),
            YA = KA(jA, "WeakMap");
        vl.exports = YA
    });
    var nr = f((qq, Ol) => {
        var Li = pl(),
            Ni = zn(),
            Di = hl(),
            Mi = yl(),
            Fi = Pi(),
            Al = ut(),
            Ft = Ti(),
            ml = "[object Map]",
            QA = "[object Object]",
            _l = "[object Promise]",
            Il = "[object Set]",
            Tl = "[object WeakMap]",
            bl = "[object DataView]",
            $A = Ft(Li),
            ZA = Ft(Ni),
            JA = Ft(Di),
            e0 = Ft(Mi),
            t0 = Ft(Fi),
            yt = Al;
        (Li && yt(new Li(new ArrayBuffer(1))) != bl || Ni && yt(new Ni) != ml || Di && yt(Di.resolve()) != _l || Mi && yt(new Mi) != Il || Fi && yt(new Fi) != Tl) && (yt = function(e) {
            var t = Al(e),
                n = t == QA ? e.constructor : void 0,
                r = n ? Ft(n) : "";
            if (r) switch (r) {
                case $A:
                    return bl;
                case ZA:
                    return ml;
                case JA:
                    return _l;
                case e0:
                    return Il;
                case t0:
                    return Tl
            }
            return t
        });
        Ol.exports = yt
    });
    var Nl = f((Gq, Ll) => {
        var qi = bi(),
            n0 = Ai(),
            r0 = Tc(),
            i0 = fl(),
            Sl = nr(),
            wl = Te(),
            xl = Qn(),
            o0 = Jn(),
            a0 = 1,
            Rl = "[object Arguments]",
            Cl = "[object Array]",
            rr = "[object Object]",
            s0 = Object.prototype,
            Pl = s0.hasOwnProperty;

        function u0(e, t, n, r, i, o) {
            var a = wl(e),
                s = wl(t),
                u = a ? Cl : Sl(e),
                l = s ? Cl : Sl(t);
            u = u == Rl ? rr : u, l = l == Rl ? rr : l;
            var E = u == rr,
                g = l == rr,
                d = u == l;
            if (d && xl(e)) {
                if (!xl(t)) return !1;
                a = !0, E = !1
            }
            if (d && !E) return o || (o = new qi), a || o0(e) ? n0(e, t, n, r, i, o) : r0(e, t, u, n, r, i, o);
            if (!(n & a0)) {
                var h = E && Pl.call(e, "__wrapped__"),
                    I = g && Pl.call(t, "__wrapped__");
                if (h || I) {
                    var _ = h ? e.value() : e,
                        O = I ? t.value() : t;
                    return o || (o = new qi), i(_, O, n, r, o)
                }
            }
            return d ? (o || (o = new qi), i0(e, t, n, r, i, o)) : !1
        }
        Ll.exports = u0
    });
    var Gi = f((Xq, Fl) => {
        var c0 = Nl(),
            Dl = nt();

        function Ml(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !Dl(e) && !Dl(t) ? e !== e && t !== t : c0(e, t, n, r, Ml, i)
        }
        Fl.exports = Ml
    });
    var Gl = f((Vq, ql) => {
        var l0 = bi(),
            f0 = Gi(),
            d0 = 1,
            p0 = 2;

        function g0(e, t, n, r) {
            var i = n.length,
                o = i,
                a = !r;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = n[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = n[i];
                var u = s[0],
                    l = e[u],
                    E = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var g = new l0;
                    if (r) var d = r(l, E, u, e, t, g);
                    if (!(d === void 0 ? f0(E, l, d0 | p0, r, g) : d)) return !1
                }
            }
            return !0
        }
        ql.exports = g0
    });
    var Xi = f((kq, Xl) => {
        var h0 = Ze();

        function E0(e) {
            return e === e && !h0(e)
        }
        Xl.exports = E0
    });
    var kl = f((Uq, Vl) => {
        var y0 = Xi(),
            v0 = dn();

        function m0(e) {
            for (var t = v0(e), n = t.length; n--;) {
                var r = t[n],
                    i = e[r];
                t[n] = [r, i, y0(i)]
            }
            return t
        }
        Vl.exports = m0
    });
    var Vi = f((Hq, Ul) => {
        function _0(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        Ul.exports = _0
    });
    var Bl = f((Bq, Hl) => {
        var I0 = Gl(),
            T0 = kl(),
            b0 = Vi();

        function A0(e) {
            var t = T0(e);
            return t.length == 1 && t[0][2] ? b0(t[0][0], t[0][1]) : function(n) {
                return n === e || I0(n, e, t)
            }
        }
        Hl.exports = A0
    });
    var pn = f((Wq, Wl) => {
        var O0 = ut(),
            S0 = nt(),
            w0 = "[object Symbol]";

        function x0(e) {
            return typeof e == "symbol" || S0(e) && O0(e) == w0
        }
        Wl.exports = x0
    });
    var ir = f((zq, zl) => {
        var R0 = Te(),
            C0 = pn(),
            P0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            L0 = /^\w*$/;

        function N0(e, t) {
            if (R0(e)) return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || C0(e) ? !0 : L0.test(e) || !P0.test(e) || t != null && e in Object(t)
        }
        zl.exports = N0
    });
    var Yl = f((Kq, jl) => {
        var Kl = Kn(),
            D0 = "Expected a function";

        function ki(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(D0);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o, a
            };
            return n.cache = new(ki.Cache || Kl), n
        }
        ki.Cache = Kl;
        jl.exports = ki
    });
    var $l = f((jq, Ql) => {
        var M0 = Yl(),
            F0 = 500;

        function q0(e) {
            var t = M0(e, function(r) {
                    return n.size === F0 && n.clear(), r
                }),
                n = t.cache;
            return t
        }
        Ql.exports = q0
    });
    var Jl = f((Yq, Zl) => {
        var G0 = $l(),
            X0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            V0 = /\\(\\)?/g,
            k0 = G0(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(X0, function(n, r, i, o) {
                    t.push(i ? o.replace(V0, "$1") : r || n)
                }), t
            });
        Zl.exports = k0
    });
    var Ui = f((Qq, ef) => {
        function U0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
        ef.exports = U0
    });
    var sf = f(($q, af) => {
        var tf = St(),
            H0 = Ui(),
            B0 = Te(),
            W0 = pn(),
            z0 = 1 / 0,
            nf = tf ? tf.prototype : void 0,
            rf = nf ? nf.toString : void 0;

        function of(e) {
            if (typeof e == "string") return e;
            if (B0(e)) return H0(e, of) + "";
            if (W0(e)) return rf ? rf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -z0 ? "-0" : t
        }
        af.exports = of
    });
    var cf = f((Zq, uf) => {
        var K0 = sf();

        function j0(e) {
            return e == null ? "" : K0(e)
        }
        uf.exports = j0
    });
    var gn = f((Jq, lf) => {
        var Y0 = Te(),
            Q0 = ir(),
            $0 = Jl(),
            Z0 = cf();

        function J0(e, t) {
            return Y0(e) ? e : Q0(e, t) ? [e] : $0(Z0(e))
        }
        lf.exports = J0
    });
    var qt = f((e1, ff) => {
        var eO = pn(),
            tO = 1 / 0;

        function nO(e) {
            if (typeof e == "string" || eO(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -tO ? "-0" : t
        }
        ff.exports = nO
    });
    var or = f((t1, df) => {
        var rO = gn(),
            iO = qt();

        function oO(e, t) {
            t = rO(t, e);
            for (var n = 0, r = t.length; e != null && n < r;) e = e[iO(t[n++])];
            return n && n == r ? e : void 0
        }
        df.exports = oO
    });
    var ar = f((n1, pf) => {
        var aO = or();

        function sO(e, t, n) {
            var r = e == null ? void 0 : aO(e, t);
            return r === void 0 ? n : r
        }
        pf.exports = sO
    });
    var hf = f((r1, gf) => {
        function uO(e, t) {
            return e != null && t in Object(e)
        }
        gf.exports = uO
    });
    var yf = f((i1, Ef) => {
        var cO = gn(),
            lO = un(),
            fO = Te(),
            dO = $n(),
            pO = Zn(),
            gO = qt();

        function hO(e, t, n) {
            t = cO(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i;) {
                var a = gO(t[r]);
                if (!(o = e != null && n(e, a))) break;
                e = e[a]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && pO(i) && dO(a, i) && (fO(e) || lO(e)))
        }
        Ef.exports = hO
    });
    var mf = f((o1, vf) => {
        var EO = hf(),
            yO = yf();

        function vO(e, t) {
            return e != null && yO(e, t, EO)
        }
        vf.exports = vO
    });
    var If = f((a1, _f) => {
        var mO = Gi(),
            _O = ar(),
            IO = mf(),
            TO = ir(),
            bO = Xi(),
            AO = Vi(),
            OO = qt(),
            SO = 1,
            wO = 2;

        function xO(e, t) {
            return TO(e) && bO(t) ? AO(OO(e), t) : function(n) {
                var r = _O(n, e);
                return r === void 0 && r === t ? IO(n, e) : mO(t, r, SO | wO)
            }
        }
        _f.exports = xO
    });
    var sr = f((s1, Tf) => {
        function RO(e) {
            return e
        }
        Tf.exports = RO
    });
    var Hi = f((u1, bf) => {
        function CO(e) {
            return function(t) {
                return t?.[e]
            }
        }
        bf.exports = CO
    });
    var Of = f((c1, Af) => {
        var PO = or();

        function LO(e) {
            return function(t) {
                return PO(t, e)
            }
        }
        Af.exports = LO
    });
    var wf = f((l1, Sf) => {
        var NO = Hi(),
            DO = Of(),
            MO = ir(),
            FO = qt();

        function qO(e) {
            return MO(e) ? NO(FO(e)) : DO(e)
        }
        Sf.exports = qO
    });
    var lt = f((f1, xf) => {
        var GO = Bl(),
            XO = If(),
            VO = sr(),
            kO = Te(),
            UO = wf();

        function HO(e) {
            return typeof e == "function" ? e : e == null ? VO : typeof e == "object" ? kO(e) ? XO(e[0], e[1]) : GO(e) : UO(e)
        }
        xf.exports = HO
    });
    var Bi = f((d1, Rf) => {
        var BO = lt(),
            WO = Et(),
            zO = dn();

        function KO(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!WO(t)) {
                    var o = BO(n, 3);
                    t = zO(t), n = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Rf.exports = KO
    });
    var Wi = f((p1, Cf) => {
        function jO(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Cf.exports = jO
    });
    var Lf = f((g1, Pf) => {
        var YO = /\s/;

        function QO(e) {
            for (var t = e.length; t-- && YO.test(e.charAt(t)););
            return t
        }
        Pf.exports = QO
    });
    var Df = f((h1, Nf) => {
        var $O = Lf(),
            ZO = /^\s+/;

        function JO(e) {
            return e && e.slice(0, $O(e) + 1).replace(ZO, "")
        }
        Nf.exports = JO
    });
    var ur = f((E1, qf) => {
        var eS = Df(),
            Mf = Ze(),
            tS = pn(),
            Ff = 0 / 0,
            nS = /^[-+]0x[0-9a-f]+$/i,
            rS = /^0b[01]+$/i,
            iS = /^0o[0-7]+$/i,
            oS = parseInt;

        function aS(e) {
            if (typeof e == "number") return e;
            if (tS(e)) return Ff;
            if (Mf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Mf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = eS(e);
            var n = rS.test(e);
            return n || iS.test(e) ? oS(e.slice(2), n ? 2 : 8) : nS.test(e) ? Ff : +e
        }
        qf.exports = aS
    });
    var Vf = f((y1, Xf) => {
        var sS = ur(),
            Gf = 1 / 0,
            uS = 17976931348623157e292;

        function cS(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = sS(e), e === Gf || e === -Gf) {
                var t = e < 0 ? -1 : 1;
                return t * uS
            }
            return e === e ? e : 0
        }
        Xf.exports = cS
    });
    var zi = f((v1, kf) => {
        var lS = Vf();

        function fS(e) {
            var t = lS(e),
                n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        kf.exports = fS
    });
    var Hf = f((m1, Uf) => {
        var dS = Wi(),
            pS = lt(),
            gS = zi(),
            hS = Math.max;

        function ES(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) return -1;
            var i = n == null ? 0 : gS(n);
            return i < 0 && (i = hS(r + i, 0)), dS(e, pS(t, 3), i)
        }
        Uf.exports = ES
    });
    var Ki = f((_1, Bf) => {
        var yS = Bi(),
            vS = Hf(),
            mS = yS(vS);
        Bf.exports = mS
    });
    var Kf = {};
    Le(Kf, {
        ELEMENT_MATCHES: () => _S,
        FLEX_PREFIXED: () => ji,
        IS_BROWSER_ENV: () => Be,
        TRANSFORM_PREFIXED: () => ft,
        TRANSFORM_STYLE_PREFIXED: () => lr,
        withBrowser: () => cr
    });
    var zf, Be, cr, _S, ji, ft, Wf, lr, fr = de(() => {
        "use strict";
        zf = oe(Ki()), Be = typeof window < "u", cr = (e, t) => Be ? e() : t, _S = cr(() => (0, zf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), ji = cr(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                n = "";
            try {
                let {
                    length: r
                } = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return n
            } catch {
                return n
            }
        }, "flex"), ft = cr(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    n = "Transform",
                    {
                        length: r
                    } = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Wf = ft.split("transform")[0], lr = Wf ? Wf + "TransformStyle" : "transformStyle"
    });
    var Yi = f((I1, Zf) => {
        var IS = 4,
            TS = .001,
            bS = 1e-7,
            AS = 10,
            hn = 11,
            dr = 1 / (hn - 1),
            OS = typeof Float32Array == "function";

        function jf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Yf(e, t) {
            return 3 * t - 6 * e
        }

        function Qf(e) {
            return 3 * e
        }

        function pr(e, t, n) {
            return ((jf(t, n) * e + Yf(t, n)) * e + Qf(t)) * e
        }

        function $f(e, t, n) {
            return 3 * jf(t, n) * e * e + 2 * Yf(t, n) * e + Qf(t)
        }

        function SS(e, t, n, r, i) {
            var o, a, s = 0;
            do a = t + (n - t) / 2, o = pr(a, r, i) - e, o > 0 ? n = a : t = a; while (Math.abs(o) > bS && ++s < AS);
            return a
        }

        function wS(e, t, n, r) {
            for (var i = 0; i < IS; ++i) {
                var o = $f(t, n, r);
                if (o === 0) return t;
                var a = pr(t, n, r) - e;
                t -= a / o
            }
            return t
        }
        Zf.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = OS ? new Float32Array(hn) : new Array(hn);
            if (t !== n || r !== i)
                for (var a = 0; a < hn; ++a) o[a] = pr(a * dr, t, r);

            function s(u) {
                for (var l = 0, E = 1, g = hn - 1; E !== g && o[E] <= u; ++E) l += dr;
                --E;
                var d = (u - o[E]) / (o[E + 1] - o[E]),
                    h = l + d * dr,
                    I = $f(h, t, r);
                return I >= TS ? wS(u, h, t, r) : I === 0 ? h : SS(u, l, l + dr, t, r)
            }
            return function(l) {
                return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : pr(s(l), n, i)
            }
        }
    });
    var yn = {};
    Le(yn, {
        bounce: () => cw,
        bouncePast: () => lw,
        ease: () => xS,
        easeIn: () => RS,
        easeInOut: () => PS,
        easeOut: () => CS,
        inBack: () => ew,
        inCirc: () => QS,
        inCubic: () => MS,
        inElastic: () => rw,
        inExpo: () => KS,
        inOutBack: () => nw,
        inOutCirc: () => ZS,
        inOutCubic: () => qS,
        inOutElastic: () => ow,
        inOutExpo: () => YS,
        inOutQuad: () => DS,
        inOutQuart: () => VS,
        inOutQuint: () => HS,
        inOutSine: () => zS,
        inQuad: () => LS,
        inQuart: () => GS,
        inQuint: () => kS,
        inSine: () => BS,
        outBack: () => tw,
        outBounce: () => JS,
        outCirc: () => $S,
        outCubic: () => FS,
        outElastic: () => iw,
        outExpo: () => jS,
        outQuad: () => NS,
        outQuart: () => XS,
        outQuint: () => US,
        outSine: () => WS,
        swingFrom: () => sw,
        swingFromTo: () => aw,
        swingTo: () => uw
    });

    function LS(e) {
        return Math.pow(e, 2)
    }

    function NS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function DS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function MS(e) {
        return Math.pow(e, 3)
    }

    function FS(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function qS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function GS(e) {
        return Math.pow(e, 4)
    }

    function XS(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function VS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function kS(e) {
        return Math.pow(e, 5)
    }

    function US(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function HS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function BS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function WS(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function zS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function KS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function jS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function YS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function QS(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function $S(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function ZS(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function JS(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function ew(e) {
        let t = rt;
        return e * e * ((t + 1) * e - t)
    }

    function tw(e) {
        let t = rt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function nw(e) {
        let t = rt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function rw(e) {
        let t = rt,
            n = 0,
            r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }

    function iw(e) {
        let t = rt,
            n = 0,
            r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }

    function ow(e) {
        let t = rt,
            n = 0,
            r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }

    function aw(e) {
        let t = rt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function sw(e) {
        let t = rt;
        return e * e * ((t + 1) * e - t)
    }

    function uw(e) {
        let t = rt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function cw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function lw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var En, rt, xS, RS, CS, PS, Qi = de(() => {
        "use strict";
        En = oe(Yi()), rt = 1.70158, xS = (0, En.default)(.25, .1, .25, 1), RS = (0, En.default)(.42, 0, 1, 1), CS = (0, En.default)(0, 0, .58, 1), PS = (0, En.default)(.42, 0, .58, 1)
    });
    var ed = {};
    Le(ed, {
        applyEasing: () => dw,
        createBezierEasing: () => fw,
        optimizeFloat: () => vn
    });

    function vn(e, t = 5, n = 10) {
        let r = Math.pow(n, t),
            i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function fw(e) {
        return (0, Jf.default)(...e)
    }

    function dw(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : vn(n ? t > 0 ? n(t) : t : t > 0 && e && yn[e] ? yn[e](t) : t)
    }
    var Jf, $i = de(() => {
        "use strict";
        Qi();
        Jf = oe(Yi())
    });
    var rd = {};
    Le(rd, {
        createElementState: () => nd,
        ixElements: () => Sw,
        mergeActionState: () => Zi
    });

    function nd(e, t, n, r, i) {
        let o = n === pw ? (0, Gt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Gt.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }

    function Zi(e, t, n, r, i) {
        let o = xw(i);
        return (0, Gt.mergeIn)(e, [t, Ow, n], r, o)
    }

    function xw(e) {
        let {
            config: t
        } = e;
        return ww.reduce((n, r) => {
            let i = r[0],
                o = r[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (n[o] = s), n
        }, {})
    }
    var Gt, b1, pw, A1, gw, hw, Ew, yw, vw, mw, _w, Iw, Tw, bw, Aw, td, Ow, Sw, ww, id = de(() => {
        "use strict";
        Gt = oe(Rt());
        Ne();
        ({
            HTML_ELEMENT: b1,
            PLAIN_OBJECT: pw,
            ABSTRACT_NODE: A1,
            CONFIG_X_VALUE: gw,
            CONFIG_Y_VALUE: hw,
            CONFIG_Z_VALUE: Ew,
            CONFIG_VALUE: yw,
            CONFIG_X_UNIT: vw,
            CONFIG_Y_UNIT: mw,
            CONFIG_Z_UNIT: _w,
            CONFIG_UNIT: Iw
        } = Oe), {
            IX2_SESSION_STOPPED: Tw,
            IX2_INSTANCE_ADDED: bw,
            IX2_ELEMENT_STATE_CHANGED: Aw
        } = _e, td = {}, Ow = "refState", Sw = (e = td, t = {}) => {
            switch (t.type) {
                case Tw:
                    return td;
                case bw: {
                    let {
                        elementId: n,
                        element: r,
                        origin: i,
                        actionItem: o,
                        refType: a
                    } = t.payload, {
                        actionTypeId: s
                    } = o, u = e;
                    return (0, Gt.getIn)(u, [n, r]) !== r && (u = nd(u, r, a, n, o)), Zi(u, n, s, i, o)
                }
                case Aw: {
                    let {
                        elementId: n,
                        actionTypeId: r,
                        current: i,
                        actionItem: o
                    } = t.payload;
                    return Zi(e, n, r, i, o)
                }
                default:
                    return e
            }
        };
        ww = [
            [gw, vw],
            [hw, mw],
            [Ew, _w],
            [yw, Iw]
        ]
    });
    var od = f(Ji => {
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });

        function Rw(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        Rw(Ji, {
            clearPlugin: function() {
                return Fw
            },
            createPluginInstance: function() {
                return Dw
            },
            getPluginConfig: function() {
                return Cw
            },
            getPluginDestination: function() {
                return Nw
            },
            getPluginDuration: function() {
                return Pw
            },
            getPluginOrigin: function() {
                return Lw
            },
            renderPlugin: function() {
                return Mw
            }
        });
        var Cw = e => e.value,
            Pw = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let n = parseFloat(e.getAttribute("data-duration"));
                return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            Lw = e => e || {
                value: 0
            },
            Nw = e => ({
                value: e.value
            }),
            Dw = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            Mw = (e, t, n) => {
                if (!e) return;
                let r = t[n.actionTypeId].value / 100;
                e.goToFrame(e.frames * r)
            },
            Fw = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var sd = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });

        function qw(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        qw(eo, {
            clearPlugin: function() {
                return Kw
            },
            createPluginInstance: function() {
                return Ww
            },
            getPluginConfig: function() {
                return kw
            },
            getPluginDestination: function() {
                return Bw
            },
            getPluginDuration: function() {
                return Uw
            },
            getPluginOrigin: function() {
                return Hw
            },
            renderPlugin: function() {
                return zw
            }
        });
        var Gw = e => document.querySelector(`[data-w-id="${e}"]`),
            Xw = () => window.Webflow.require("spline"),
            Vw = (e, t) => e.filter(n => !t.includes(n)),
            kw = (e, t) => e.value[t],
            Uw = () => null,
            ad = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            Hw = (e, t) => {
                let n = t.config.value,
                    r = Object.keys(n);
                if (e) {
                    let o = Object.keys(e),
                        a = Vw(r, o);
                    return a.length ? a.reduce((u, l) => (u[l] = ad[l], u), e) : e
                }
                return r.reduce((o, a) => (o[a] = ad[a], o), {})
            },
            Bw = e => e.value,
            Ww = (e, t) => {
                let n = t?.config?.target?.pluginElement;
                return n ? Gw(n) : null
            },
            zw = (e, t, n) => {
                let r = Xw(),
                    i = r.getInstance(e),
                    o = n.config.target.objectId,
                    a = s => {
                        if (!s) throw new Error("Invalid spline app passed to renderSpline");
                        let u = o && s.findObjectById(o);
                        if (!u) return;
                        let {
                            PLUGIN_SPLINE: l
                        } = t;
                        l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                    };
                i ? a(i.spline) : r.setLoadHandler(e, a)
            },
            Kw = () => null
    });
    var ud = f(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });

        function jw(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        jw(ro, {
            clearPlugin: function() {
                return rx
            },
            createPluginInstance: function() {
                return tx
            },
            getPluginConfig: function() {
                return $w
            },
            getPluginDestination: function() {
                return ex
            },
            getPluginDuration: function() {
                return Zw
            },
            getPluginOrigin: function() {
                return Jw
            },
            renderPlugin: function() {
                return nx
            }
        });
        var to = "--wf-rive-fit",
            no = "--wf-rive-alignment",
            Yw = e => document.querySelector(`[data-w-id="${e}"]`),
            Qw = () => window.Webflow.require("rive"),
            $w = (e, t) => e.value.inputs[t],
            Zw = () => null,
            Jw = (e, t) => {
                if (e) return e;
                let n = {},
                    {
                        inputs: r = {}
                    } = t.config.value;
                for (let i in r) r[i] == null && (n[i] = 0);
                return n
            },
            ex = e => e.value.inputs ?? {},
            tx = (e, t) => {
                if ((t.config?.target?.selectorGuids || []).length > 0) return e;
                let r = t?.config?.target?.pluginElement;
                return r ? Yw(r) : null
            },
            nx = (e, {
                PLUGIN_RIVE: t
            }, n) => {
                let r = Qw(),
                    i = r.getInstance(e),
                    o = r.rive.StateMachineInputType,
                    {
                        name: a,
                        inputs: s = {}
                    } = n.config.value || {};

                function u(l) {
                    if (l.loaded) E();
                    else {
                        let g = () => {
                            E(), l?.off("load", g)
                        };
                        l?.on("load", g)
                    }

                    function E() {
                        let g = l.stateMachineInputs(a);
                        if (g != null) {
                            if (l.isPlaying || l.play(a, !1), to in s || no in s) {
                                let d = l.layout,
                                    h = s[to] ?? d.fit,
                                    I = s[no] ?? d.alignment;
                                (h !== d.fit || I !== d.alignment) && (l.layout = d.copyWith({
                                    fit: h,
                                    alignment: I
                                }))
                            }
                            for (let d in s) {
                                if (d === to || d === no) continue;
                                let h = g.find(I => I.name === d);
                                if (h != null) switch (h.type) {
                                    case o.Boolean: {
                                        if (s[d] != null) {
                                            let I = !!s[d];
                                            h.value = I
                                        }
                                        break
                                    }
                                    case o.Number: {
                                        let I = t[d];
                                        I != null && (h.value = I);
                                        break
                                    }
                                    case o.Trigger: {
                                        s[d] && h.fire();
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                i?.rive ? u(i.rive) : r.setLoadHandler(e, u)
            },
            rx = (e, t) => null
    });
    var oo = f(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });
        Object.defineProperty(io, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return ix
            }
        });
        var cd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function ix(e) {
            let t, n, r, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof cd[o] == "string" ? cd[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), n = parseInt(u[1] + u[1], 16), r = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), n = parseInt(u.substring(2, 4), 16), r = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100,
                    g = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * g - 1)) * E,
                    h = d * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = g - d / 2,
                    _, O, v;
                l >= 0 && l < 60 ? (_ = d, O = h, v = 0) : l >= 60 && l < 120 ? (_ = h, O = d, v = 0) : l >= 120 && l < 180 ? (_ = 0, O = d, v = h) : l >= 180 && l < 240 ? (_ = 0, O = h, v = d) : l >= 240 && l < 300 ? (_ = h, O = 0, v = d) : (_ = d, O = 0, v = h), t = Math.round((_ + I) * 255), n = Math.round((O + I) * 255), r = Math.round((v + I) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100,
                    g = parseFloat(u[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * g - 1)) * E,
                    h = d * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = g - d / 2,
                    _, O, v;
                l >= 0 && l < 60 ? (_ = d, O = h, v = 0) : l >= 60 && l < 120 ? (_ = h, O = d, v = 0) : l >= 120 && l < 180 ? (_ = 0, O = d, v = h) : l >= 180 && l < 240 ? (_ = 0, O = h, v = d) : l >= 240 && l < 300 ? (_ = h, O = 0, v = d) : (_ = d, O = 0, v = h), t = Math.round((_ + I) * 255), n = Math.round((O + I) * 255), r = Math.round((v + I) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    });
    var ld = f(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });

        function ox(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        ox(ao, {
            clearPlugin: function() {
                return gx
            },
            createPluginInstance: function() {
                return fx
            },
            getPluginConfig: function() {
                return sx
            },
            getPluginDestination: function() {
                return lx
            },
            getPluginDuration: function() {
                return ux
            },
            getPluginOrigin: function() {
                return cx
            },
            renderPlugin: function() {
                return px
            }
        });
        var ax = oo(),
            sx = (e, t) => e.value[t],
            ux = () => null,
            cx = (e, t) => {
                if (e) return e;
                let n = t.config.value,
                    r = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(r);
                if (n.size != null) return {
                    size: parseInt(i, 10)
                };
                if (n.unit === "%" || n.unit === "-") return {
                    size: parseFloat(i)
                };
                if (n.red != null && n.green != null && n.blue != null) return (0, ax.normalizeColor)(i)
            },
            lx = e => e.value,
            fx = () => null,
            dx = {
                color: {
                    match: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r
                    }) => [e, t, n, r].every(i => i != null),
                    getValue: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r
                    }) => `rgba(${e}, ${t}, ${n}, ${r})`
                },
                size: {
                    match: ({
                        size: e
                    }) => e != null,
                    getValue: ({
                        size: e
                    }, t) => {
                        switch (t) {
                            case "-":
                                return e;
                            default:
                                return `${e}${t}`
                        }
                    }
                }
            },
            px = (e, t, n) => {
                let {
                    target: {
                        objectId: r
                    },
                    value: {
                        unit: i
                    }
                } = n.config, o = t.PLUGIN_VARIABLE, a = Object.values(dx).find(s => s.match(o, i));
                a && document.documentElement.style.setProperty(r, a.getValue(o, i))
            },
            gx = (e, t) => {
                let n = t.config.target.objectId;
                document.documentElement.style.removeProperty(n)
            }
    });
    var dd = f(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        Object.defineProperty(so, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return mx
            }
        });
        var gr = (Ne(), je(hs)),
            hx = hr(od()),
            Ex = hr(sd()),
            yx = hr(ud()),
            vx = hr(ld());

        function fd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (fd = function(r) {
                return r ? n : t
            })(e)
        }

        function hr(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = fd(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                } return r.default = e, n && n.set(e, r), r
        }
        var mx = new Map([
            [gr.ActionTypeConsts.PLUGIN_LOTTIE, {
                ...hx
            }],
            [gr.ActionTypeConsts.PLUGIN_SPLINE, {
                ...Ex
            }],
            [gr.ActionTypeConsts.PLUGIN_RIVE, {
                ...yx
            }],
            [gr.ActionTypeConsts.PLUGIN_VARIABLE, {
                ...vx
            }]
        ])
    });
    var pd = {};
    Le(pd, {
        clearPlugin: () => go,
        createPluginInstance: () => Ix,
        getPluginConfig: () => co,
        getPluginDestination: () => fo,
        getPluginDuration: () => _x,
        getPluginOrigin: () => lo,
        isPluginType: () => vt,
        renderPlugin: () => po
    });

    function vt(e) {
        return uo.pluginMethodMap.has(e)
    }
    var uo, mt, co, lo, _x, fo, Ix, po, go, ho = de(() => {
        "use strict";
        fr();
        uo = oe(dd());
        mt = e => t => {
            if (!Be) return () => null;
            let n = uo.pluginMethodMap.get(t);
            if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }, co = mt("getPluginConfig"), lo = mt("getPluginOrigin"), _x = mt("getPluginDuration"), fo = mt("getPluginDestination"), Ix = mt("createPluginInstance"), po = mt("renderPlugin"), go = mt("clearPlugin")
    });
    var hd = f((L1, gd) => {
        function Tx(e, t) {
            return e == null || e !== e ? t : e
        }
        gd.exports = Tx
    });
    var yd = f((N1, Ed) => {
        function bx(e, t, n, r) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
            return n
        }
        Ed.exports = bx
    });
    var md = f((D1, vd) => {
        function Ax(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (n(o[u], u, o) === !1) break
                }
                return t
            }
        }
        vd.exports = Ax
    });
    var Id = f((M1, _d) => {
        var Ox = md(),
            Sx = Ox();
        _d.exports = Sx
    });
    var Eo = f((F1, Td) => {
        var wx = Id(),
            xx = dn();

        function Rx(e, t) {
            return e && wx(e, t, xx)
        }
        Td.exports = Rx
    });
    var Ad = f((q1, bd) => {
        var Cx = Et();

        function Px(e, t) {
            return function(n, r) {
                if (n == null) return n;
                if (!Cx(n)) return e(n, r);
                for (var i = n.length, o = t ? i : -1, a = Object(n);
                    (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                return n
            }
        }
        bd.exports = Px
    });
    var yo = f((G1, Od) => {
        var Lx = Eo(),
            Nx = Ad(),
            Dx = Nx(Lx);
        Od.exports = Dx
    });
    var wd = f((X1, Sd) => {
        function Mx(e, t, n, r, i) {
            return i(e, function(o, a, s) {
                n = r ? (r = !1, o) : t(n, o, a, s)
            }), n
        }
        Sd.exports = Mx
    });
    var Rd = f((V1, xd) => {
        var Fx = yd(),
            qx = yo(),
            Gx = lt(),
            Xx = wd(),
            Vx = Te();

        function kx(e, t, n) {
            var r = Vx(e) ? Fx : Xx,
                i = arguments.length < 3;
            return r(e, Gx(t, 4), n, i, qx)
        }
        xd.exports = kx
    });
    var Pd = f((k1, Cd) => {
        var Ux = Wi(),
            Hx = lt(),
            Bx = zi(),
            Wx = Math.max,
            zx = Math.min;

        function Kx(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) return -1;
            var i = r - 1;
            return n !== void 0 && (i = Bx(n), i = n < 0 ? Wx(r + i, 0) : zx(i, r - 1)), Ux(e, Hx(t, 3), i, !0)
        }
        Cd.exports = Kx
    });
    var Nd = f((U1, Ld) => {
        var jx = Bi(),
            Yx = Pd(),
            Qx = jx(Yx);
        Ld.exports = Qx
    });

    function Dd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function $x(e, t) {
        if (Dd(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !Dd(e[n[i]], t[n[i]])) return !1;
        return !0
    }
    var vo, Md = de(() => {
        "use strict";
        vo = $x
    });
    var Jd = {};
    Le(Jd, {
        cleanupHTMLElement: () => jR,
        clearAllStyles: () => KR,
        clearObjectCache: () => gR,
        getActionListProgress: () => QR,
        getAffectedElements: () => bo,
        getComputedStyle: () => TR,
        getDestinationValues: () => RR,
        getElementId: () => vR,
        getInstanceId: () => ER,
        getInstanceOrigin: () => OR,
        getItemConfigByKey: () => xR,
        getMaxDurationItemIndex: () => Zd,
        getNamespacedParameterId: () => JR,
        getRenderType: () => Yd,
        getStyleProp: () => CR,
        mediaQueriesEqual: () => tC,
        observeStore: () => IR,
        reduceListToGroup: () => $R,
        reifyState: () => mR,
        renderHTMLElement: () => PR,
        shallowEqual: () => vo,
        shouldAllowMediaQuery: () => eC,
        shouldNamespaceEventParameter: () => ZR,
        stringifyTarget: () => nC
    });

    function gR() {
        Er.clear()
    }

    function ER() {
        return "i" + hR++
    }

    function vR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t) return r.id
        }
        return "e" + yR++
    }

    function mR({
        events: e,
        actionLists: t,
        site: n
    } = {}) {
        let r = (0, _r.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = n && n.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function IR({
        store: e,
        select: t,
        onChange: n,
        comparator: r = _R
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            r(l, s) || (s = l, n(s, e))
        }
        return a
    }

    function Gd(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function bo({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: r,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((N, T) => N.concat(bo({
            config: {
                target: T
            },
            event: t,
            eventTarget: n,
            elementRoot: r,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: E,
            matchSelector: g,
            elementContains: d,
            isSiblingNode: h
        } = i, {
            target: I
        } = e;
        if (!I) return [];
        let {
            id: _,
            objectId: O,
            selector: v,
            selectorGuids: x,
            appliesTo: A,
            useEventTarget: w
        } = Gd(I);
        if (O) return [Er.has(O) ? Er.get(O) : Er.set(O, {}).get(O)];
        if (A === Ei.PAGE) {
            let N = a(_);
            return N ? [N] : []
        }
        let R = (t?.action?.config?.affectedElements ?? {})[_ || v] || {},
            X = !!(R.id || R.selector),
            V, H, W, j = t && s(Gd(t.target));
        if (X ? (V = R.limitAffectedElements, H = j, W = s(R)) : H = W = s({
                id: _,
                selector: v,
                selectorGuids: x
            }), t && w) {
            let N = n && (W || w === !0) ? [n] : u(j);
            if (W) {
                if (w === fR) return u(W).filter(T => N.some(D => d(T, D)));
                if (w === Fd) return u(W).filter(T => N.some(D => d(D, T)));
                if (w === qd) return u(W).filter(T => N.some(D => h(D, T)))
            }
            return N
        }
        return H == null || W == null ? [] : Be && r ? u(W).filter(N => r.contains(N)) : V === Fd ? u(H, W) : V === lR ? l(u(H)).filter(g(W)) : V === qd ? E(u(H)).filter(g(W)) : u(W)
    }

    function TR({
        element: e,
        actionItem: t
    }) {
        if (!Be) return {};
        let {
            actionTypeId: n
        } = t;
        switch (n) {
            case Ht:
            case Bt:
            case Wt:
            case zt:
            case Tr:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function OR(e, t = {}, n = {}, r, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = r;
        if (vt(a)) return lo(a)(t[a], r);
        switch (r.actionTypeId) {
            case Vt:
            case kt:
            case Ut:
            case Tn:
                return t[r.actionTypeId] || Ao[r.actionTypeId];
            case bn:
                return bR(t[r.actionTypeId], r.config.filters);
            case An:
                return AR(t[r.actionTypeId], r.config.fontVariations);
            case zd:
                return {
                    value: (0, it.default)(parseFloat(o(e, vr)), 1)
                };
            case Ht: {
                let s = o(e, Je),
                    u = o(e, et),
                    l, E;
                return r.config.widthUnit === dt ? l = Xd.test(s) ? parseFloat(s) : parseFloat(n.width) : l = (0, it.default)(parseFloat(s), parseFloat(n.width)), r.config.heightUnit === dt ? E = Xd.test(u) ? parseFloat(u) : parseFloat(n.height) : E = (0, it.default)(parseFloat(u), parseFloat(n.height)), {
                    widthValue: l,
                    heightValue: E
                }
            }
            case Bt:
            case Wt:
            case zt:
                return BR({
                    element: e,
                    actionTypeId: r.actionTypeId,
                    computedStyle: n,
                    getStyle: o
                });
            case Tr:
                return {
                    value: (0, it.default)(o(e, mr), n.display)
                };
            case pR:
                return t[r.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function RR({
        element: e,
        actionItem: t,
        elementApi: n
    }) {
        if (vt(t.actionTypeId)) return fo(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Vt:
            case kt:
            case Ut:
            case Tn: {
                let {
                    xValue: r,
                    yValue: i,
                    zValue: o
                } = t.config;
                return {
                    xValue: r,
                    yValue: i,
                    zValue: o
                }
            }
            case Ht: {
                let {
                    getStyle: r,
                    setStyle: i,
                    getProperty: o
                } = n, {
                    widthUnit: a,
                    heightUnit: s
                } = t.config, {
                    widthValue: u,
                    heightValue: l
                } = t.config;
                if (!Be) return {
                    widthValue: u,
                    heightValue: l
                };
                if (a === dt) {
                    let E = r(e, Je);
                    i(e, Je, ""), u = o(e, "offsetWidth"), i(e, Je, E)
                }
                if (s === dt) {
                    let E = r(e, et);
                    i(e, et, ""), l = o(e, "offsetHeight"), i(e, et, E)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
            case Bt:
            case Wt:
            case zt: {
                let {
                    rValue: r,
                    gValue: i,
                    bValue: o,
                    aValue: a,
                    globalSwatchId: s
                } = t.config;
                if (s && s.startsWith("--")) {
                    let {
                        getStyle: u
                    } = n, l = u(e, s), E = (0, Ud.normalizeColor)(l);
                    return {
                        rValue: E.red,
                        gValue: E.green,
                        bValue: E.blue,
                        aValue: E.alpha
                    }
                }
                return {
                    rValue: r,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
            case bn:
                return t.config.filters.reduce(SR, {});
            case An:
                return t.config.fontVariations.reduce(wR, {});
            default: {
                let {
                    value: r
                } = t.config;
                return {
                    value: r
                }
            }
        }
    }

    function Yd(e) {
        if (/^TRANSFORM_/.test(e)) return Bd;
        if (/^STYLE_/.test(e)) return Io;
        if (/^GENERAL_/.test(e)) return _o;
        if (/^PLUGIN_/.test(e)) return Wd
    }

    function CR(e, t) {
        return e === Io ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function PR(e, t, n, r, i, o, a, s, u) {
        switch (s) {
            case Bd:
                return FR(e, t, n, i, a);
            case Io:
                return WR(e, t, n, i, o, a);
            case _o:
                return zR(e, i, a);
            case Wd: {
                let {
                    actionTypeId: l
                } = i;
                if (vt(l)) return po(l)(u, t, i)
            }
        }
    }

    function FR(e, t, n, r, i) {
        let o = MR.map(s => {
                let u = Ao[s],
                    {
                        xValue: l = u.xValue,
                        yValue: E = u.yValue,
                        zValue: g = u.zValue,
                        xUnit: d = "",
                        yUnit: h = "",
                        zUnit: I = ""
                    } = t[s] || {};
                switch (s) {
                    case Vt:
                        return `${eR}(${l}${d}, ${E}${h}, ${g}${I})`;
                    case kt:
                        return `${tR}(${l}${d}, ${E}${h}, ${g}${I})`;
                    case Ut:
                        return `${nR}(${l}${d}) ${rR}(${E}${h}) ${iR}(${g}${I})`;
                    case Tn:
                        return `${oR}(${l}${d}, ${E}${h})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        _t(e, ft, i), a(e, ft, o), XR(r, n) && a(e, lr, aR)
    }

    function qR(e, t, n, r) {
        let i = (0, _r.default)(t, (a, s, u) => `${a} ${u}(${s}${DR(u,n)})`, ""),
            {
                setStyle: o
            } = r;
        _t(e, mn, r), o(e, mn, i)
    }

    function GR(e, t, n, r) {
        let i = (0, _r.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = r;
        _t(e, _n, r), o(e, _n, i)
    }

    function XR({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: n,
        zValue: r
    }) {
        return e === Vt && r !== void 0 || e === kt && r !== void 0 || e === Ut && (t !== void 0 || n !== void 0)
    }

    function HR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }

    function BR({
        element: e,
        actionTypeId: t,
        computedStyle: n,
        getStyle: r
    }) {
        let i = To[t],
            o = r(e, i),
            a = kR.test(o) ? o : n[i],
            s = HR(UR, a).split(In);
        return {
            rValue: (0, it.default)(parseInt(s[0], 10), 255),
            gValue: (0, it.default)(parseInt(s[1], 10), 255),
            bValue: (0, it.default)(parseInt(s[2], 10), 255),
            aValue: (0, it.default)(parseFloat(s[3]), 1)
        }
    }

    function WR(e, t, n, r, i, o) {
        let {
            setStyle: a
        } = o;
        switch (r.actionTypeId) {
            case Ht: {
                let {
                    widthUnit: s = "",
                    heightUnit: u = ""
                } = r.config, {
                    widthValue: l,
                    heightValue: E
                } = n;
                l !== void 0 && (s === dt && (s = "px"), _t(e, Je, o), a(e, Je, l + s)), E !== void 0 && (u === dt && (u = "px"), _t(e, et, o), a(e, et, E + u));
                break
            }
            case bn: {
                qR(e, n, r.config, o);
                break
            }
            case An: {
                GR(e, n, r.config, o);
                break
            }
            case Bt:
            case Wt:
            case zt: {
                let s = To[r.actionTypeId],
                    u = Math.round(n.rValue),
                    l = Math.round(n.gValue),
                    E = Math.round(n.bValue),
                    g = n.aValue;
                _t(e, s, o), a(e, s, g >= 1 ? `rgb(${u},${l},${E})` : `rgba(${u},${l},${E},${g})`);
                break
            }
            default: {
                let {
                    unit: s = ""
                } = r.config;
                _t(e, i, o), a(e, i, n.value + s);
                break
            }
        }
    }

    function zR(e, t, n) {
        let {
            setStyle: r
        } = n;
        switch (t.actionTypeId) {
            case Tr: {
                let {
                    value: i
                } = t.config;
                i === sR && Be ? r(e, mr, ji) : r(e, mr, i);
                return
            }
        }
    }

    function _t(e, t, n) {
        if (!Be) return;
        let r = jd[t];
        if (!r) return;
        let {
            getStyle: i,
            setStyle: o
        } = n, a = i(e, Xt);
        if (!a) {
            o(e, Xt, r);
            return
        }
        let s = a.split(In).map(Kd);
        s.indexOf(r) === -1 && o(e, Xt, s.concat(r).join(In))
    }

    function Qd(e, t, n) {
        if (!Be) return;
        let r = jd[t];
        if (!r) return;
        let {
            getStyle: i,
            setStyle: o
        } = n, a = i(e, Xt);
        !a || a.indexOf(r) === -1 || o(e, Xt, a.split(In).map(Kd).filter(s => s !== r).join(In))
    }

    function KR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: n
        } = e.getState(), {
            events: r = {},
            actionLists: i = {}
        } = n;
        Object.keys(r).forEach(o => {
            let a = r[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                l = i[u];
            l && Vd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Vd({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Vd({
        actionList: e = {},
        event: t,
        elementApi: n
    }) {
        let {
            actionItemGroups: r,
            continuousParameterGroups: i
        } = e;
        r && r.forEach(o => {
            kd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                kd({
                    actionGroup: s,
                    event: t,
                    elementApi: n
                })
            })
        })
    }

    function kd({
        actionGroup: e,
        event: t,
        elementApi: n
    }) {
        let {
            actionItems: r
        } = e;
        r.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            vt(o) ? s = u => go(o)(u, i) : s = $d({
                effect: YR,
                actionTypeId: o,
                elementApi: n
            }), bo({
                config: a,
                event: t,
                elementApi: n
            }).forEach(s)
        })
    }

    function jR(e, t, n) {
        let {
            setStyle: r,
            getStyle: i
        } = n, {
            actionTypeId: o
        } = t;
        if (o === Ht) {
            let {
                config: a
            } = t;
            a.widthUnit === dt && r(e, Je, ""), a.heightUnit === dt && r(e, et, "")
        }
        i(e, Xt) && $d({
            effect: Qd,
            actionTypeId: o,
            elementApi: n
        })(e)
    }

    function YR(e, t, n) {
        let {
            setStyle: r
        } = n;
        Qd(e, t, n), r(e, t, ""), t === ft && r(e, lr, "")
    }

    function Zd(e) {
        let t = 0,
            n = 0;
        return e.forEach((r, i) => {
            let {
                config: o
            } = r, a = o.delay + o.duration;
            a >= t && (t = a, n = i)
        }), n
    }

    function QR(e, t) {
        let {
            actionItemGroups: n,
            useFirstGroupAsInitialState: r
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return n.forEach((u, l) => {
            if (r && l === 0) return;
            let {
                actionItems: E
            } = u, g = E[Zd(E)], {
                config: d,
                actionTypeId: h
            } = g;
            i.id === g.id && (s = a + o);
            let I = Yd(h) === _o ? 0 : d.duration;
            a += d.delay + I
        }), a > 0 ? vn(s / a) : 0
    }

    function $R({
        actionList: e,
        actionItemId: t,
        rawData: n
    }) {
        let {
            actionItemGroups: r,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, Ir.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return r && r.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: l
            }) => l.some(a))
        }), (0, Ir.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function ZR(e, {
        basedOn: t
    }) {
        return e === He.SCROLLING_IN_VIEW && (t === $e.ELEMENT || t == null) || e === He.MOUSE_MOVE && t === $e.ELEMENT
    }

    function JR(e, t) {
        return e + dR + t
    }

    function eC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function tC(e, t) {
        return vo(e && e.sort(), t && t.sort())
    }

    function nC(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + mo + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: n = "",
            useEventTarget: r = ""
        } = e;
        return t + mo + n + mo + r
    }
    var it, _r, yr, Ir, Ud, Zx, Jx, eR, tR, nR, rR, iR, oR, aR, sR, vr, mn, _n, Je, et, Hd, uR, cR, Fd, lR, qd, fR, mr, Xt, dt, In, dR, mo, Bd, _o, Io, Wd, Vt, kt, Ut, Tn, zd, bn, An, Ht, Bt, Wt, zt, Tr, pR, Kd, To, jd, Er, hR, yR, _R, Xd, bR, AR, SR, wR, xR, Ao, LR, NR, DR, MR, VR, kR, UR, $d, ep = de(() => {
        "use strict";
        it = oe(hd()), _r = oe(Rd()), yr = oe(Nd()), Ir = oe(Rt());
        Ne();
        Md();
        $i();
        Ud = oe(oo());
        ho();
        fr();
        ({
            BACKGROUND: Zx,
            TRANSFORM: Jx,
            TRANSLATE_3D: eR,
            SCALE_3D: tR,
            ROTATE_X: nR,
            ROTATE_Y: rR,
            ROTATE_Z: iR,
            SKEW: oR,
            PRESERVE_3D: aR,
            FLEX: sR,
            OPACITY: vr,
            FILTER: mn,
            FONT_VARIATION_SETTINGS: _n,
            WIDTH: Je,
            HEIGHT: et,
            BACKGROUND_COLOR: Hd,
            BORDER_COLOR: uR,
            COLOR: cR,
            CHILDREN: Fd,
            IMMEDIATE_CHILDREN: lR,
            SIBLINGS: qd,
            PARENT: fR,
            DISPLAY: mr,
            WILL_CHANGE: Xt,
            AUTO: dt,
            COMMA_DELIMITER: In,
            COLON_DELIMITER: dR,
            BAR_DELIMITER: mo,
            RENDER_TRANSFORM: Bd,
            RENDER_GENERAL: _o,
            RENDER_STYLE: Io,
            RENDER_PLUGIN: Wd
        } = Oe), {
            TRANSFORM_MOVE: Vt,
            TRANSFORM_SCALE: kt,
            TRANSFORM_ROTATE: Ut,
            TRANSFORM_SKEW: Tn,
            STYLE_OPACITY: zd,
            STYLE_FILTER: bn,
            STYLE_FONT_VARIATION: An,
            STYLE_SIZE: Ht,
            STYLE_BACKGROUND_COLOR: Bt,
            STYLE_BORDER: Wt,
            STYLE_TEXT_COLOR: zt,
            GENERAL_DISPLAY: Tr,
            OBJECT_VALUE: pR
        } = xe, Kd = e => e.trim(), To = Object.freeze({
            [Bt]: Hd,
            [Wt]: uR,
            [zt]: cR
        }), jd = Object.freeze({
            [ft]: Jx,
            [Hd]: Zx,
            [vr]: vr,
            [mn]: mn,
            [Je]: Je,
            [et]: et,
            [_n]: _n
        }), Er = new Map;
        hR = 1;
        yR = 1;
        _R = (e, t) => e === t;
        Xd = /px/, bR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = LR[r.type]), n), e || {}), AR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = NR[r.type] || r.defaultValue || 0), n), e || {});
        SR = (e, t) => (t && (e[t.type] = t.value || 0), e), wR = (e, t) => (t && (e[t.type] = t.value || 0), e), xR = (e, t, n) => {
            if (vt(e)) return co(e)(n, t);
            switch (e) {
                case bn: {
                    let r = (0, yr.default)(n.filters, ({
                        type: i
                    }) => i === t);
                    return r ? r.value : 0
                }
                case An: {
                    let r = (0, yr.default)(n.fontVariations, ({
                        type: i
                    }) => i === t);
                    return r ? r.value : 0
                }
                default:
                    return n[t]
            }
        };
        Ao = {
            [Vt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [kt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Ut]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Tn]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, LR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), NR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), DR = (e, t) => {
            let n = (0, yr.default)(t.filters, ({
                type: r
            }) => r === e);
            if (n && n.unit) return n.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, MR = Object.keys(Ao);
        VR = "\\(([^)]+)\\)", kR = /^rgb/, UR = RegExp(`rgba?${VR}`);
        $d = ({
            effect: e,
            actionTypeId: t,
            elementApi: n
        }) => r => {
            switch (t) {
                case Vt:
                case kt:
                case Ut:
                case Tn:
                    e(r, ft, n);
                    break;
                case bn:
                    e(r, mn, n);
                    break;
                case An:
                    e(r, _n, n);
                    break;
                case zd:
                    e(r, vr, n);
                    break;
                case Ht:
                    e(r, Je, n), e(r, et, n);
                    break;
                case Bt:
                case Wt:
                case zt:
                    e(r, To[t], n);
                    break;
                case Tr:
                    e(r, mr, n);
                    break
            }
        }
    });
    var It = f(Oo => {
        "use strict";
        Object.defineProperty(Oo, "__esModule", {
            value: !0
        });

        function rC(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        rC(Oo, {
            IX2BrowserSupport: function() {
                return iC
            },
            IX2EasingUtils: function() {
                return aC
            },
            IX2Easings: function() {
                return oC
            },
            IX2ElementsReducer: function() {
                return sC
            },
            IX2VanillaPlugins: function() {
                return uC
            },
            IX2VanillaUtils: function() {
                return cC
            }
        });
        var iC = Kt((fr(), je(Kf))),
            oC = Kt((Qi(), je(yn))),
            aC = Kt(($i(), je(ed))),
            sC = Kt((id(), je(rd))),
            uC = Kt((ho(), je(pd))),
            cC = Kt((ep(), je(Jd)));

        function tp(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (tp = function(r) {
                return r ? n : t
            })(e)
        }

        function Kt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = tp(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                } return r.default = e, n && n.set(e, r), r
        }
    });
    var Ar, ot, lC, fC, dC, pC, gC, hC, br, np, EC, yC, So, vC, mC, _C, IC, rp, ip = de(() => {
        "use strict";
        Ne();
        Ar = oe(It()), ot = oe(Rt()), {
            IX2_RAW_DATA_IMPORTED: lC,
            IX2_SESSION_STOPPED: fC,
            IX2_INSTANCE_ADDED: dC,
            IX2_INSTANCE_STARTED: pC,
            IX2_INSTANCE_REMOVED: gC,
            IX2_ANIMATION_FRAME_CHANGED: hC
        } = _e, {
            optimizeFloat: br,
            applyEasing: np,
            createBezierEasing: EC
        } = Ar.IX2EasingUtils, {
            RENDER_GENERAL: yC
        } = Oe, {
            getItemConfigByKey: So,
            getRenderType: vC,
            getStyleProp: mC
        } = Ar.IX2VanillaUtils, _C = (e, t) => {
            let {
                position: n,
                parameterId: r,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: E,
                skipToValue: g
            } = e, {
                parameters: d
            } = t.payload, h = Math.max(1 - a, .01), I = d[r];
            I == null && (h = 1, I = s);
            let _ = Math.max(I, 0) || 0,
                O = br(_ - n),
                v = E ? g : br(n + O * h),
                x = v * 100;
            if (v === n && e.current) return e;
            let A, w, P, R;
            for (let V = 0, {
                    length: H
                } = i; V < H; V++) {
                let {
                    keyframe: W,
                    actionItems: j
                } = i[V];
                if (V === 0 && (A = j[0]), x >= W) {
                    A = j[0];
                    let N = i[V + 1],
                        T = N && x !== W;
                    w = T ? N.actionItems[0] : null, T && (P = W / 100, R = (N.keyframe - W) / 100)
                }
            }
            let X = {};
            if (A && !w)
                for (let V = 0, {
                        length: H
                    } = o; V < H; V++) {
                    let W = o[V];
                    X[W] = So(u, W, A.config)
                } else if (A && w && P !== void 0 && R !== void 0) {
                    let V = (v - P) / R,
                        H = A.config.easing,
                        W = np(H, V, l);
                    for (let j = 0, {
                            length: N
                        } = o; j < N; j++) {
                        let T = o[j],
                            D = So(u, T, A.config),
                            Y = (So(u, T, w.config) - D) * W + D;
                        X[T] = Y
                    }
                } return (0, ot.merge)(e, {
                position: v,
                current: X
            })
        }, IC = (e, t) => {
            let {
                active: n,
                origin: r,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: l,
                destinationKeys: E,
                pluginDuration: g,
                instanceDelay: d,
                customEasingFn: h,
                skipMotion: I
            } = e, _ = u.config.easing, {
                duration: O,
                delay: v
            } = u.config;
            g != null && (O = g), v = d ?? v, a === yC ? O = 0 : (o || I) && (O = v = 0);
            let {
                now: x
            } = t.payload;
            if (n && r) {
                let A = x - (i + v);
                if (s) {
                    let V = x - i,
                        H = O + v,
                        W = br(Math.min(Math.max(0, V / H), 1));
                    e = (0, ot.set)(e, "verboseTimeElapsed", H * W)
                }
                if (A < 0) return e;
                let w = br(Math.min(Math.max(0, A / O), 1)),
                    P = np(_, w, h),
                    R = {},
                    X = null;
                return E.length && (X = E.reduce((V, H) => {
                    let W = l[H],
                        j = parseFloat(r[H]) || 0,
                        T = (parseFloat(W) - j) * P + j;
                    return V[H] = T, V
                }, {})), R.current = X, R.position = w, w === 1 && (R.active = !1, R.complete = !0), (0, ot.merge)(e, R)
            }
            return e
        }, rp = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case lC:
                    return t.payload.ixInstances || Object.freeze({});
                case fC:
                    return Object.freeze({});
                case dC: {
                    let {
                        instanceId: n,
                        elementId: r,
                        actionItem: i,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        isCarrier: E,
                        origin: g,
                        destination: d,
                        immediate: h,
                        verbose: I,
                        continuous: _,
                        parameterId: O,
                        actionGroups: v,
                        smoothing: x,
                        restingValue: A,
                        pluginInstance: w,
                        pluginDuration: P,
                        instanceDelay: R,
                        skipMotion: X,
                        skipToValue: V
                    } = t.payload, {
                        actionTypeId: H
                    } = i, W = vC(H), j = mC(W, H), N = Object.keys(d).filter(D => d[D] != null && typeof d[D] != "string"), {
                        easing: T
                    } = i.config;
                    return (0, ot.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: g,
                        destination: d,
                        destinationKeys: N,
                        immediate: h,
                        verbose: I,
                        current: null,
                        actionItem: i,
                        actionTypeId: H,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: W,
                        isCarrier: E,
                        styleProp: j,
                        continuous: _,
                        parameterId: O,
                        actionGroups: v,
                        smoothing: x,
                        restingValue: A,
                        pluginInstance: w,
                        pluginDuration: P,
                        instanceDelay: R,
                        skipMotion: X,
                        skipToValue: V,
                        customEasingFn: Array.isArray(T) && T.length === 4 ? EC(T) : void 0
                    })
                }
                case pC: {
                    let {
                        instanceId: n,
                        time: r
                    } = t.payload;
                    return (0, ot.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: r
                    })
                }
                case gC: {
                    let {
                        instanceId: n
                    } = t.payload;
                    if (!e[n]) return e;
                    let r = {},
                        i = Object.keys(e),
                        {
                            length: o
                        } = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== n && (r[s] = e[s])
                    }
                    return r
                }
                case hC: {
                    let n = e,
                        r = Object.keys(e),
                        {
                            length: i
                        } = r;
                    for (let o = 0; o < i; o++) {
                        let a = r[o],
                            s = e[a],
                            u = s.continuous ? _C : IC;
                        n = (0, ot.set)(n, a, u(s, t))
                    }
                    return n
                }
                default:
                    return e
            }
        }
    });
    var TC, bC, AC, op, ap = de(() => {
        "use strict";
        Ne();
        ({
            IX2_RAW_DATA_IMPORTED: TC,
            IX2_SESSION_STOPPED: bC,
            IX2_PARAMETER_CHANGED: AC
        } = _e), op = (e = {}, t) => {
            switch (t.type) {
                case TC:
                    return t.payload.ixParameters || {};
                case bC:
                    return {};
                case AC: {
                    let {
                        key: n,
                        value: r
                    } = t.payload;
                    return e[n] = r, e
                }
                default:
                    return e
            }
        }
    });
    var cp = {};
    Le(cp, {
        default: () => SC
    });
    var sp, up, OC, SC, lp = de(() => {
        "use strict";
        sp = oe(hi());
        ys();
        Gs();
        ks();
        up = oe(It());
        ip();
        ap();
        ({
            ixElements: OC
        } = up.IX2ElementsReducer), SC = (0, sp.combineReducers)({
            ixData: Es,
            ixRequest: qs,
            ixSession: Vs,
            ixElements: OC,
            ixInstances: rp,
            ixParameters: op
        })
    });
    var dp = f((aG, fp) => {
        var wC = ut(),
            xC = Te(),
            RC = nt(),
            CC = "[object String]";

        function PC(e) {
            return typeof e == "string" || !xC(e) && RC(e) && wC(e) == CC
        }
        fp.exports = PC
    });
    var gp = f((sG, pp) => {
        var LC = Hi(),
            NC = LC("length");
        pp.exports = NC
    });
    var Ep = f((uG, hp) => {
        var DC = "\\ud800-\\udfff",
            MC = "\\u0300-\\u036f",
            FC = "\\ufe20-\\ufe2f",
            qC = "\\u20d0-\\u20ff",
            GC = MC + FC + qC,
            XC = "\\ufe0e\\ufe0f",
            VC = "\\u200d",
            kC = RegExp("[" + VC + DC + GC + XC + "]");

        function UC(e) {
            return kC.test(e)
        }
        hp.exports = UC
    });
    var Op = f((cG, Ap) => {
        var vp = "\\ud800-\\udfff",
            HC = "\\u0300-\\u036f",
            BC = "\\ufe20-\\ufe2f",
            WC = "\\u20d0-\\u20ff",
            zC = HC + BC + WC,
            KC = "\\ufe0e\\ufe0f",
            jC = "[" + vp + "]",
            wo = "[" + zC + "]",
            xo = "\\ud83c[\\udffb-\\udfff]",
            YC = "(?:" + wo + "|" + xo + ")",
            mp = "[^" + vp + "]",
            _p = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ip = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            QC = "\\u200d",
            Tp = YC + "?",
            bp = "[" + KC + "]?",
            $C = "(?:" + QC + "(?:" + [mp, _p, Ip].join("|") + ")" + bp + Tp + ")*",
            ZC = bp + Tp + $C,
            JC = "(?:" + [mp + wo + "?", wo, _p, Ip, jC].join("|") + ")",
            yp = RegExp(xo + "(?=" + xo + ")|" + JC + ZC, "g");

        function eP(e) {
            for (var t = yp.lastIndex = 0; yp.test(e);) ++t;
            return t
        }
        Ap.exports = eP
    });
    var wp = f((lG, Sp) => {
        var tP = gp(),
            nP = Ep(),
            rP = Op();

        function iP(e) {
            return nP(e) ? rP(e) : tP(e)
        }
        Sp.exports = iP
    });
    var Rp = f((fG, xp) => {
        var oP = tr(),
            aP = nr(),
            sP = Et(),
            uP = dp(),
            cP = wp(),
            lP = "[object Map]",
            fP = "[object Set]";

        function dP(e) {
            if (e == null) return 0;
            if (sP(e)) return uP(e) ? cP(e) : e.length;
            var t = aP(e);
            return t == lP || t == fP ? e.size : oP(e).length
        }
        xp.exports = dP
    });
    var Pp = f((dG, Cp) => {
        var pP = "Expected a function";

        function gP(e) {
            if (typeof e != "function") throw new TypeError(pP);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Cp.exports = gP
    });
    var Ro = f((pG, Lp) => {
        var hP = ct(),
            EP = function() {
                try {
                    var e = hP(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Lp.exports = EP
    });
    var Co = f((gG, Dp) => {
        var Np = Ro();

        function yP(e, t, n) {
            t == "__proto__" && Np ? Np(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        Dp.exports = yP
    });
    var Fp = f((hG, Mp) => {
        var vP = Co(),
            mP = Wn(),
            _P = Object.prototype,
            IP = _P.hasOwnProperty;

        function TP(e, t, n) {
            var r = e[t];
            (!(IP.call(e, t) && mP(r, n)) || n === void 0 && !(t in e)) && vP(e, t, n)
        }
        Mp.exports = TP
    });
    var Xp = f((EG, Gp) => {
        var bP = Fp(),
            AP = gn(),
            OP = $n(),
            qp = Ze(),
            SP = qt();

        function wP(e, t, n, r) {
            if (!qp(e)) return e;
            t = AP(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = SP(t[i]),
                    l = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var E = s[u];
                    l = r ? r(E, u, s) : void 0, l === void 0 && (l = qp(E) ? E : OP(t[i + 1]) ? [] : {})
                }
                bP(s, u, l), s = s[u]
            }
            return e
        }
        Gp.exports = wP
    });
    var kp = f((yG, Vp) => {
        var xP = or(),
            RP = Xp(),
            CP = gn();

        function PP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i;) {
                var a = t[r],
                    s = xP(e, a);
                n(s, a) && RP(o, CP(a, e), s)
            }
            return o
        }
        Vp.exports = PP
    });
    var Hp = f((vG, Up) => {
        var LP = Yn(),
            NP = ni(),
            DP = xi(),
            MP = wi(),
            FP = Object.getOwnPropertySymbols,
            qP = FP ? function(e) {
                for (var t = []; e;) LP(t, DP(e)), e = NP(e);
                return t
            } : MP;
        Up.exports = qP
    });
    var Wp = f((mG, Bp) => {
        function GP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e)) t.push(n);
            return t
        }
        Bp.exports = GP
    });
    var Kp = f((_G, zp) => {
        var XP = Ze(),
            VP = er(),
            kP = Wp(),
            UP = Object.prototype,
            HP = UP.hasOwnProperty;

        function BP(e) {
            if (!XP(e)) return kP(e);
            var t = VP(e),
                n = [];
            for (var r in e) r == "constructor" && (t || !HP.call(e, r)) || n.push(r);
            return n
        }
        zp.exports = BP
    });
    var Yp = f((IG, jp) => {
        var WP = Ci(),
            zP = Kp(),
            KP = Et();

        function jP(e) {
            return KP(e) ? WP(e, !0) : zP(e)
        }
        jp.exports = jP
    });
    var $p = f((TG, Qp) => {
        var YP = Si(),
            QP = Hp(),
            $P = Yp();

        function ZP(e) {
            return YP(e, $P, QP)
        }
        Qp.exports = ZP
    });
    var Jp = f((bG, Zp) => {
        var JP = Ui(),
            eL = lt(),
            tL = kp(),
            nL = $p();

        function rL(e, t) {
            if (e == null) return {};
            var n = JP(nL(e), function(r) {
                return [r]
            });
            return t = eL(t), tL(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        Zp.exports = rL
    });
    var tg = f((AG, eg) => {
        var iL = lt(),
            oL = Pp(),
            aL = Jp();

        function sL(e, t) {
            return aL(e, oL(iL(t)))
        }
        eg.exports = sL
    });
    var rg = f((OG, ng) => {
        var uL = tr(),
            cL = nr(),
            lL = un(),
            fL = Te(),
            dL = Et(),
            pL = Qn(),
            gL = er(),
            hL = Jn(),
            EL = "[object Map]",
            yL = "[object Set]",
            vL = Object.prototype,
            mL = vL.hasOwnProperty;

        function _L(e) {
            if (e == null) return !0;
            if (dL(e) && (fL(e) || typeof e == "string" || typeof e.splice == "function" || pL(e) || hL(e) || lL(e))) return !e.length;
            var t = cL(e);
            if (t == EL || t == yL) return !e.size;
            if (gL(e)) return !uL(e).length;
            for (var n in e)
                if (mL.call(e, n)) return !1;
            return !0
        }
        ng.exports = _L
    });
    var og = f((SG, ig) => {
        var IL = Co(),
            TL = Eo(),
            bL = lt();

        function AL(e, t) {
            var n = {};
            return t = bL(t, 3), TL(e, function(r, i, o) {
                IL(n, i, t(r, i, o))
            }), n
        }
        ig.exports = AL
    });
    var sg = f((wG, ag) => {
        function OL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
            return e
        }
        ag.exports = OL
    });
    var cg = f((xG, ug) => {
        var SL = sr();

        function wL(e) {
            return typeof e == "function" ? e : SL
        }
        ug.exports = wL
    });
    var fg = f((RG, lg) => {
        var xL = sg(),
            RL = yo(),
            CL = cg(),
            PL = Te();

        function LL(e, t) {
            var n = PL(e) ? xL : RL;
            return n(e, CL(t))
        }
        lg.exports = LL
    });
    var pg = f((CG, dg) => {
        var NL = Ue(),
            DL = function() {
                return NL.Date.now()
            };
        dg.exports = DL
    });
    var Eg = f((PG, hg) => {
        var ML = Ze(),
            Po = pg(),
            gg = ur(),
            FL = "Expected a function",
            qL = Math.max,
            GL = Math.min;

        function XL(e, t, n) {
            var r, i, o, a, s, u, l = 0,
                E = !1,
                g = !1,
                d = !0;
            if (typeof e != "function") throw new TypeError(FL);
            t = gg(t) || 0, ML(n) && (E = !!n.leading, g = "maxWait" in n, o = g ? qL(gg(n.maxWait) || 0, t) : o, d = "trailing" in n ? !!n.trailing : d);

            function h(R) {
                var X = r,
                    V = i;
                return r = i = void 0, l = R, a = e.apply(V, X), a
            }

            function I(R) {
                return l = R, s = setTimeout(v, t), E ? h(R) : a
            }

            function _(R) {
                var X = R - u,
                    V = R - l,
                    H = t - X;
                return g ? GL(H, o - V) : H
            }

            function O(R) {
                var X = R - u,
                    V = R - l;
                return u === void 0 || X >= t || X < 0 || g && V >= o
            }

            function v() {
                var R = Po();
                if (O(R)) return x(R);
                s = setTimeout(v, _(R))
            }

            function x(R) {
                return s = void 0, d && r ? h(R) : (r = i = void 0, a)
            }

            function A() {
                s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0
            }

            function w() {
                return s === void 0 ? a : x(Po())
            }

            function P() {
                var R = Po(),
                    X = O(R);
                if (r = arguments, i = this, u = R, X) {
                    if (s === void 0) return I(u);
                    if (g) return clearTimeout(s), s = setTimeout(v, t), h(u)
                }
                return s === void 0 && (s = setTimeout(v, t)), a
            }
            return P.cancel = A, P.flush = w, P
        }
        hg.exports = XL
    });
    var vg = f((LG, yg) => {
        var VL = Eg(),
            kL = Ze(),
            UL = "Expected a function";

        function HL(e, t, n) {
            var r = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(UL);
            return kL(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), VL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        yg.exports = HL
    });
    var _g = {};
    Le(_g, {
        actionListPlaybackChanged: () => Yt,
        animationFrameChanged: () => Sr,
        clearRequested: () => gN,
        elementStateChanged: () => Xo,
        eventListenerAdded: () => Or,
        eventStateChanged: () => Fo,
        instanceAdded: () => qo,
        instanceRemoved: () => Go,
        instanceStarted: () => wr,
        mediaQueriesDefined: () => ko,
        parameterChanged: () => jt,
        playbackRequested: () => dN,
        previewRequested: () => fN,
        rawDataImported: () => Lo,
        sessionInitialized: () => No,
        sessionStarted: () => Do,
        sessionStopped: () => Mo,
        stopRequested: () => pN,
        testFrameRendered: () => hN,
        viewportWidthChanged: () => Vo
    });
    var mg, BL, WL, zL, KL, jL, YL, QL, $L, ZL, JL, eN, tN, nN, rN, iN, oN, aN, sN, uN, cN, lN, Lo, No, Do, Mo, fN, dN, pN, gN, Or, hN, Fo, Sr, jt, qo, wr, Go, Xo, Yt, Vo, ko, xr = de(() => {
        "use strict";
        Ne();
        mg = oe(It()), {
            IX2_RAW_DATA_IMPORTED: BL,
            IX2_SESSION_INITIALIZED: WL,
            IX2_SESSION_STARTED: zL,
            IX2_SESSION_STOPPED: KL,
            IX2_PREVIEW_REQUESTED: jL,
            IX2_PLAYBACK_REQUESTED: YL,
            IX2_STOP_REQUESTED: QL,
            IX2_CLEAR_REQUESTED: $L,
            IX2_EVENT_LISTENER_ADDED: ZL,
            IX2_TEST_FRAME_RENDERED: JL,
            IX2_EVENT_STATE_CHANGED: eN,
            IX2_ANIMATION_FRAME_CHANGED: tN,
            IX2_PARAMETER_CHANGED: nN,
            IX2_INSTANCE_ADDED: rN,
            IX2_INSTANCE_STARTED: iN,
            IX2_INSTANCE_REMOVED: oN,
            IX2_ELEMENT_STATE_CHANGED: aN,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: sN,
            IX2_VIEWPORT_WIDTH_CHANGED: uN,
            IX2_MEDIA_QUERIES_DEFINED: cN
        } = _e, {
            reifyState: lN
        } = mg.IX2VanillaUtils, Lo = e => ({
            type: BL,
            payload: {
                ...lN(e)
            }
        }), No = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: WL,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Do = () => ({
            type: zL
        }), Mo = () => ({
            type: KL
        }), fN = ({
            rawData: e,
            defer: t
        }) => ({
            type: jL,
            payload: {
                defer: t,
                rawData: e
            }
        }), dN = ({
            actionTypeId: e = xe.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: r,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: YL,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: a,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), pN = e => ({
            type: QL,
            payload: {
                actionListId: e
            }
        }), gN = () => ({
            type: $L
        }), Or = (e, t) => ({
            type: ZL,
            payload: {
                target: e,
                listenerParams: t
            }
        }), hN = (e = 1) => ({
            type: JL,
            payload: {
                step: e
            }
        }), Fo = (e, t) => ({
            type: eN,
            payload: {
                stateKey: e,
                newState: t
            }
        }), Sr = (e, t) => ({
            type: tN,
            payload: {
                now: e,
                parameters: t
            }
        }), jt = (e, t) => ({
            type: nN,
            payload: {
                key: e,
                value: t
            }
        }), qo = e => ({
            type: rN,
            payload: {
                ...e
            }
        }), wr = (e, t) => ({
            type: iN,
            payload: {
                instanceId: e,
                time: t
            }
        }), Go = e => ({
            type: oN,
            payload: {
                instanceId: e
            }
        }), Xo = (e, t, n, r) => ({
            type: aN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }), Yt = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: sN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Vo = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: uN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ko = () => ({
            type: cN
        })
    });
    var Ce = {};
    Le(Ce, {
        elementContains: () => Bo,
        getChildElements: () => ON,
        getClosestElement: () => On,
        getProperty: () => _N,
        getQuerySelector: () => Ho,
        getRefType: () => Wo,
        getSiblingElements: () => SN,
        getStyle: () => mN,
        getValidDocument: () => TN,
        isSiblingNode: () => AN,
        matchSelector: () => IN,
        queryDocument: () => bN,
        setStyle: () => vN
    });

    function vN(e, t, n) {
        e.style[t] = n
    }

    function mN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function _N(e, t) {
        return e[t]
    }

    function IN(e) {
        return t => t[Uo](e)
    }

    function Ho({
        id: e,
        selector: t
    }) {
        if (e) {
            let n = e;
            if (e.indexOf(Ig) !== -1) {
                let r = e.split(Ig),
                    i = r[0];
                if (n = r[1], i !== document.documentElement.getAttribute(bg)) return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }

    function TN(e) {
        return e == null || e === document.documentElement.getAttribute(bg) ? document : null
    }

    function bN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Bo(e, t) {
        return e.contains(t)
    }

    function AN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function ON(e) {
        let t = [];
        for (let n = 0, {
                length: r
            } = e || []; n < r; n++) {
            let {
                children: i
            } = e[n], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function SN(e = []) {
        let t = [],
            n = [];
        for (let r = 0, {
                length: i
            } = e; r < i; r++) {
            let {
                parentNode: o
            } = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) continue;
            n.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function Wo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? EN : yN : null
    }
    var Tg, Uo, Ig, EN, yN, bg, On, Ag = de(() => {
        "use strict";
        Tg = oe(It());
        Ne();
        ({
            ELEMENT_MATCHES: Uo
        } = Tg.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Ig,
            HTML_ELEMENT: EN,
            PLAIN_OBJECT: yN,
            WF_PAGE: bg
        } = Oe;
        On = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
                if (n[Uo] && n[Uo](t)) return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    });
    var zo = f((MG, Sg) => {
        var wN = Ze(),
            Og = Object.create,
            xN = function() {
                function e() {}
                return function(t) {
                    if (!wN(t)) return {};
                    if (Og) return Og(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n
                }
            }();
        Sg.exports = xN
    });
    var Rr = f((FG, wg) => {
        function RN() {}
        wg.exports = RN
    });
    var Pr = f((qG, xg) => {
        var CN = zo(),
            PN = Rr();

        function Cr(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        Cr.prototype = CN(PN.prototype);
        Cr.prototype.constructor = Cr;
        xg.exports = Cr
    });
    var Lg = f((GG, Pg) => {
        var Rg = St(),
            LN = un(),
            NN = Te(),
            Cg = Rg ? Rg.isConcatSpreadable : void 0;

        function DN(e) {
            return NN(e) || LN(e) || !!(Cg && e && e[Cg])
        }
        Pg.exports = DN
    });
    var Mg = f((XG, Dg) => {
        var MN = Yn(),
            FN = Lg();

        function Ng(e, t, n, r, i) {
            var o = -1,
                a = e.length;
            for (n || (n = FN), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && n(s) ? t > 1 ? Ng(s, t - 1, n, r, i) : MN(i, s) : r || (i[i.length] = s)
            }
            return i
        }
        Dg.exports = Ng
    });
    var qg = f((VG, Fg) => {
        var qN = Mg();

        function GN(e) {
            var t = e == null ? 0 : e.length;
            return t ? qN(e, 1) : []
        }
        Fg.exports = GN
    });
    var Xg = f((kG, Gg) => {
        function XN(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        Gg.exports = XN
    });
    var Ug = f((UG, kg) => {
        var VN = Xg(),
            Vg = Math.max;

        function kN(e, t, n) {
            return t = Vg(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, i = -1, o = Vg(r.length - t, 0), a = Array(o); ++i < o;) a[i] = r[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
                    return s[t] = n(a), VN(e, this, s)
                }
        }
        kg.exports = kN
    });
    var Bg = f((HG, Hg) => {
        function UN(e) {
            return function() {
                return e
            }
        }
        Hg.exports = UN
    });
    var Kg = f((BG, zg) => {
        var HN = Bg(),
            Wg = Ro(),
            BN = sr(),
            WN = Wg ? function(e, t) {
                return Wg(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: HN(t),
                    writable: !0
                })
            } : BN;
        zg.exports = WN
    });
    var Yg = f((WG, jg) => {
        var zN = 800,
            KN = 16,
            jN = Date.now;

        function YN(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = jN(),
                    i = KN - (r - n);
                if (n = r, i > 0) {
                    if (++t >= zN) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        jg.exports = YN
    });
    var $g = f((zG, Qg) => {
        var QN = Kg(),
            $N = Yg(),
            ZN = $N(QN);
        Qg.exports = ZN
    });
    var Jg = f((KG, Zg) => {
        var JN = qg(),
            eD = Ug(),
            tD = $g();

        function nD(e) {
            return tD(eD(e, void 0, JN), e + "")
        }
        Zg.exports = nD
    });
    var nh = f((jG, th) => {
        var eh = Pi(),
            rD = eh && new eh;
        th.exports = rD
    });
    var ih = f((YG, rh) => {
        function iD() {}
        rh.exports = iD
    });
    var Ko = f((QG, ah) => {
        var oh = nh(),
            oD = ih(),
            aD = oh ? function(e) {
                return oh.get(e)
            } : oD;
        ah.exports = aD
    });
    var uh = f(($G, sh) => {
        var sD = {};
        sh.exports = sD
    });
    var jo = f((ZG, lh) => {
        var ch = uh(),
            uD = Object.prototype,
            cD = uD.hasOwnProperty;

        function lD(e) {
            for (var t = e.name + "", n = ch[t], r = cD.call(ch, t) ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        lh.exports = lD
    });
    var Nr = f((JG, fh) => {
        var fD = zo(),
            dD = Rr(),
            pD = 4294967295;

        function Lr(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = pD, this.__views__ = []
        }
        Lr.prototype = fD(dD.prototype);
        Lr.prototype.constructor = Lr;
        fh.exports = Lr
    });
    var ph = f((eX, dh) => {
        function gD(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        dh.exports = gD
    });
    var hh = f((tX, gh) => {
        var hD = Nr(),
            ED = Pr(),
            yD = ph();

        function vD(e) {
            if (e instanceof hD) return e.clone();
            var t = new ED(e.__wrapped__, e.__chain__);
            return t.__actions__ = yD(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        gh.exports = vD
    });
    var vh = f((nX, yh) => {
        var mD = Nr(),
            Eh = Pr(),
            _D = Rr(),
            ID = Te(),
            TD = nt(),
            bD = hh(),
            AD = Object.prototype,
            OD = AD.hasOwnProperty;

        function Dr(e) {
            if (TD(e) && !ID(e) && !(e instanceof mD)) {
                if (e instanceof Eh) return e;
                if (OD.call(e, "__wrapped__")) return bD(e)
            }
            return new Eh(e)
        }
        Dr.prototype = _D.prototype;
        Dr.prototype.constructor = Dr;
        yh.exports = Dr
    });
    var _h = f((rX, mh) => {
        var SD = Nr(),
            wD = Ko(),
            xD = jo(),
            RD = vh();

        function CD(e) {
            var t = xD(e),
                n = RD[t];
            if (typeof n != "function" || !(t in SD.prototype)) return !1;
            if (e === n) return !0;
            var r = wD(n);
            return !!r && e === r[0]
        }
        mh.exports = CD
    });
    var Ah = f((iX, bh) => {
        var Ih = Pr(),
            PD = Jg(),
            LD = Ko(),
            Yo = jo(),
            ND = Te(),
            Th = _h(),
            DD = "Expected a function",
            MD = 8,
            FD = 32,
            qD = 128,
            GD = 256;

        function XD(e) {
            return PD(function(t) {
                var n = t.length,
                    r = n,
                    i = Ih.prototype.thru;
                for (e && t.reverse(); r--;) {
                    var o = t[r];
                    if (typeof o != "function") throw new TypeError(DD);
                    if (i && !a && Yo(o) == "wrapper") var a = new Ih([], !0)
                }
                for (r = a ? r : n; ++r < n;) {
                    o = t[r];
                    var s = Yo(o),
                        u = s == "wrapper" ? LD(o) : void 0;
                    u && Th(u[0]) && u[1] == (qD | MD | FD | GD) && !u[4].length && u[9] == 1 ? a = a[Yo(u[0])].apply(a, u[3]) : a = o.length == 1 && Th(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments,
                        E = l[0];
                    if (a && l.length == 1 && ND(E)) return a.plant(E).value();
                    for (var g = 0, d = n ? t[g].apply(this, l) : E; ++g < n;) d = t[g].call(this, d);
                    return d
                }
            })
        }
        bh.exports = XD
    });
    var Sh = f((oX, Oh) => {
        var VD = Ah(),
            kD = VD();
        Oh.exports = kD
    });
    var xh = f((aX, wh) => {
        function UD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
        }
        wh.exports = UD
    });
    var Ch = f((sX, Rh) => {
        var HD = xh(),
            Qo = ur();

        function BD(e, t, n) {
            return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = Qo(n), n = n === n ? n : 0), t !== void 0 && (t = Qo(t), t = t === t ? t : 0), HD(Qo(e), t, n)
        }
        Rh.exports = BD
    });
    var Xh, Vh, kh, Uh, WD, zD, KD, jD, YD, QD, $D, ZD, JD, eM, tM, nM, rM, iM, oM, Hh, Bh, aM, sM, uM, Wh, cM, lM, zh, fM, $o, Kh, Ph, Lh, jh, wn, dM, tt, Yh, pM, Me, We, xn, Qh, Zo, Nh, Jo, gM, Sn, hM, EM, yM, $h, Dh, vM, Mh, mM, _M, IM, Fh, Mr, Fr, qh, Gh, Zh, Jh = de(() => {
        "use strict";
        Xh = oe(Sh()), Vh = oe(ar()), kh = oe(Ch());
        Ne();
        ea();
        xr();
        Uh = oe(It()), {
            MOUSE_CLICK: WD,
            MOUSE_SECOND_CLICK: zD,
            MOUSE_DOWN: KD,
            MOUSE_UP: jD,
            MOUSE_OVER: YD,
            MOUSE_OUT: QD,
            DROPDOWN_CLOSE: $D,
            DROPDOWN_OPEN: ZD,
            SLIDER_ACTIVE: JD,
            SLIDER_INACTIVE: eM,
            TAB_ACTIVE: tM,
            TAB_INACTIVE: nM,
            NAVBAR_CLOSE: rM,
            NAVBAR_OPEN: iM,
            MOUSE_MOVE: oM,
            PAGE_SCROLL_DOWN: Hh,
            SCROLL_INTO_VIEW: Bh,
            SCROLL_OUT_OF_VIEW: aM,
            PAGE_SCROLL_UP: sM,
            SCROLLING_IN_VIEW: uM,
            PAGE_FINISH: Wh,
            ECOMMERCE_CART_CLOSE: cM,
            ECOMMERCE_CART_OPEN: lM,
            PAGE_START: zh,
            PAGE_SCROLL: fM
        } = He, $o = "COMPONENT_ACTIVE", Kh = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Ph
        } = Oe, {
            getNamespacedParameterId: Lh
        } = Uh.IX2VanillaUtils, jh = e => t => typeof t == "object" && e(t) ? !0 : t, wn = jh(({
            element: e,
            nativeEvent: t
        }) => e === t.target), dM = jh(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), tt = (0, Xh.default)([wn, dM]), Yh = (e, t) => {
            if (t) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: r
                } = n, i = r[t];
                if (i && !gM[i.eventTypeId]) return i
            }
            return null
        }, pM = ({
            store: e,
            event: t
        }) => {
            let {
                action: n
            } = t, {
                autoStopEventId: r
            } = n.config;
            return !!Yh(e, r)
        }, Me = ({
            store: e,
            event: t,
            element: n,
            eventStateKey: r
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, l = Yh(e, u);
            return l && Qt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Ph + r.split(Ph)[1],
                actionListId: (0, Vh.default)(l, "action.config.actionListId")
            }), Qt({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }), Rn({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }), i
        }, We = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r, xn = {
            handler: We(tt, Me)
        }, Qh = {
            ...xn,
            types: [$o, Kh].join(" ")
        }, Zo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Nh = "mouseover mouseout", Jo = {
            types: Zo
        }, gM = {
            PAGE_START: zh,
            PAGE_FINISH: Wh
        }, Sn = (() => {
            let e = window.pageXOffset !== void 0,
                n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0, kh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), hM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), EM = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: n,
                target: r,
                relatedTarget: i
            } = t, o = e.contains(r);
            if (n === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(n === "mouseout" && o && a)
        }, yM = e => {
            let {
                element: t,
                event: {
                    config: n
                }
            } = e, {
                clientWidth: r,
                clientHeight: i
            } = Sn(), o = n.scrollOffsetValue, u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return hM(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: r,
                bottom: i - u
            })
        }, $h = e => (t, n) => {
            let {
                type: r
            } = t.nativeEvent, i = [$o, Kh].indexOf(r) !== -1 ? r === $o : n.isActive, o = {
                ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }, Dh = e => (t, n) => {
            let r = {
                elementHovered: EM(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }, vM = e => (t, n) => {
            let r = {
                ...n,
                elementVisible: yM(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }, Mh = e => (t, n = {}) => {
            let {
                stiffScrollTop: r,
                scrollHeight: i,
                innerHeight: o
            } = Sn(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = a, E = l === "PX", g = i - o, d = Number((r / g).toFixed(2));
            if (n && n.percentTop === d) return n;
            let h = (E ? u : o * (u || 0) / 100) / g,
                I, _, O = 0;
            n && (I = d > n.percentTop, _ = n.scrollingDown !== I, O = _ ? d : n.anchorTop);
            let v = s === Hh ? d >= O + h : d <= O - h,
                x = {
                    ...n,
                    percentTop: d,
                    inBounds: v,
                    anchorTop: O,
                    scrollingDown: I
                };
            return n && v && (_ || x.inBounds !== n.inBounds) && e(t, x) || x
        }, mM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, _M = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t), r
        }, IM = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t), r
        }, Fh = e => (t, n = {
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }, Mr = (e = !0) => ({
            ...Qh,
            handler: We(e ? tt : wn, $h((t, n) => n.isActive ? xn.handler(t, n) : n))
        }), Fr = (e = !0) => ({
            ...Qh,
            handler: We(e ? tt : wn, $h((t, n) => n.isActive ? n : xn.handler(t, n)))
        }), qh = {
            ...Jo,
            handler: vM((e, t) => {
                let {
                    elementVisible: n
                } = t, {
                    event: r,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === Bh === n ? (Me(e), {
                    ...t,
                    triggered: !0
                }) : t
            })
        }, Gh = .05, Zh = {
            [JD]: Mr(),
            [eM]: Fr(),
            [ZD]: Mr(),
            [$D]: Fr(),
            [iM]: Mr(!1),
            [rM]: Fr(!1),
            [tM]: Mr(),
            [nM]: Fr(),
            [lM]: {
                types: "ecommerce-cart-open",
                handler: We(tt, Me)
            },
            [cM]: {
                types: "ecommerce-cart-close",
                handler: We(tt, Me)
            },
            [WD]: {
                types: "click",
                handler: We(tt, Fh((e, {
                    clickCount: t
                }) => {
                    pM(e) ? t === 1 && Me(e) : Me(e)
                }))
            },
            [zD]: {
                types: "click",
                handler: We(tt, Fh((e, {
                    clickCount: t
                }) => {
                    t === 2 && Me(e)
                }))
            },
            [KD]: {
                ...xn,
                types: "mousedown"
            },
            [jD]: {
                ...xn,
                types: "mouseup"
            },
            [YD]: {
                types: Nh,
                handler: We(tt, Dh((e, t) => {
                    t.elementHovered && Me(e)
                }))
            },
            [QD]: {
                types: Nh,
                handler: We(tt, Dh((e, t) => {
                    t.elementHovered || Me(e)
                }))
            },
            [oM]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: n,
                    nativeEvent: r,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: E = 0
                    } = n, {
                        clientX: g = o.clientX,
                        clientY: d = o.clientY,
                        pageX: h = o.pageX,
                        pageY: I = o.pageY
                    } = r, _ = s === "X_AXIS", O = r.type === "mouseout", v = E / 100, x = u, A = !1;
                    switch (a) {
                        case $e.VIEWPORT: {
                            v = _ ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                            break
                        }
                        case $e.PAGE: {
                            let {
                                scrollLeft: w,
                                scrollTop: P,
                                scrollWidth: R,
                                scrollHeight: X
                            } = Sn();
                            v = _ ? Math.min(w + h, R) / R : Math.min(P + I, X) / X;
                            break
                        }
                        case $e.ELEMENT:
                        default: {
                            x = Lh(i, u);
                            let w = r.type.indexOf("mouse") === 0;
                            if (w && tt({
                                    element: t,
                                    nativeEvent: r
                                }) !== !0) break;
                            let P = t.getBoundingClientRect(),
                                {
                                    left: R,
                                    top: X,
                                    width: V,
                                    height: H
                                } = P;
                            if (!w && !mM({
                                    left: g,
                                    top: d
                                }, P)) break;
                            A = !0, v = _ ? (g - R) / V : (d - X) / H;
                            break
                        }
                    }
                    return O && (v > 1 - Gh || v < Gh) && (v = Math.round(v)), (a !== $e.ELEMENT || A || A !== o.elementHovered) && (v = l ? 1 - v : v, e.dispatch(jt(x, v))), {
                        elementHovered: A,
                        clientX: g,
                        clientY: d,
                        pageX: h,
                        pageY: I
                    }
                }
            },
            [fM]: {
                types: Zo,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: n,
                        reverse: r
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = Sn(), s = i / (o - a);
                    s = r ? 1 - s : s, e.dispatch(jt(n, s))
                }
            },
            [uM]: {
                types: Zo,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: n,
                    eventStateKey: r
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: l
                    } = Sn(), {
                        basedOn: E,
                        selectedAxis: g,
                        continuousParameterGroupId: d,
                        startsEntering: h,
                        startsExiting: I,
                        addEndOffset: _,
                        addStartOffset: O,
                        addOffsetValue: v = 0,
                        endOffsetValue: x = 0
                    } = n, A = g === "X_AXIS";
                    if (E === $e.VIEWPORT) {
                        let w = A ? o / s : a / u;
                        return w !== i.scrollPercent && t.dispatch(jt(d, w)), {
                            scrollPercent: w
                        }
                    } else {
                        let w = Lh(r, d),
                            P = e.getBoundingClientRect(),
                            R = (O ? v : 0) / 100,
                            X = (_ ? x : 0) / 100;
                        R = h ? R : 1 - R, X = I ? X : 1 - X;
                        let V = P.top + Math.min(P.height * R, l),
                            W = P.top + P.height * X - V,
                            j = Math.min(l + W, u),
                            T = Math.min(Math.max(0, l - V), j) / j;
                        return T !== i.scrollPercent && t.dispatch(jt(w, T)), {
                            scrollPercent: T
                        }
                    }
                }
            },
            [Bh]: qh,
            [aM]: qh,
            [Hh]: {
                ...Jo,
                handler: Mh((e, t) => {
                    t.scrollingDown && Me(e)
                })
            },
            [sM]: {
                ...Jo,
                handler: Mh((e, t) => {
                    t.scrollingDown || Me(e)
                })
            },
            [Wh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: We(wn, _M(Me))
            },
            [zh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: We(wn, IM(Me))
            }
        }
    });
    var EE = {};
    Le(EE, {
        observeRequests: () => kM,
        startActionGroup: () => Rn,
        startEngine: () => Ur,
        stopActionGroup: () => Qt,
        stopAllActionGroups: () => pE,
        stopEngine: () => Hr
    });

    function kM(e) {
        Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: BM
        }), Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: WM
        }), Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: zM
        }), Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: KM
        })
    }

    function UM(e) {
        Tt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Hr(e), cE({
                    store: e,
                    elementApi: Ce
                }), Ur({
                    store: e,
                    allowEvents: !0
                }), lE()
            }
        })
    }

    function HM(e, t) {
        let n = Tt({
            store: e,
            select: ({
                ixSession: r
            }) => r.tick,
            onChange: r => {
                t(r), n()
            }
        })
    }

    function BM({
        rawData: e,
        defer: t
    }, n) {
        let r = () => {
            Ur({
                store: n,
                rawData: e,
                allowEvents: !0
            }), lE()
        };
        t ? setTimeout(r, 0) : r()
    }

    function lE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function WM(e, t) {
        let {
            actionTypeId: n,
            actionListId: r,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: E
        } = e;
        if (r && i && E && s) {
            let g = E.actionLists[r];
            g && (E = CM({
                actionList: g,
                actionItemId: i,
                rawData: E
            }))
        }
        if (Ur({
                store: t,
                rawData: E,
                allowEvents: a,
                testManual: u
            }), r && n === xe.GENERAL_START_ACTION || ta(n)) {
            Qt({
                store: t,
                actionListId: r
            }), dE({
                store: t,
                actionListId: r,
                eventId: o
            });
            let g = Rn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: s,
                verbose: l
            });
            l && g && t.dispatch(Yt({
                actionListId: r,
                isPlaying: !s
            }))
        }
    }

    function zM({
        actionListId: e
    }, t) {
        e ? Qt({
            store: t,
            actionListId: e
        }) : pE({
            store: t
        }), Hr(t)
    }

    function KM(e, t) {
        Hr(t), cE({
            store: t,
            elementApi: Ce
        })
    }

    function Ur({
        store: e,
        rawData: t,
        allowEvents: n,
        testManual: r
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Lo(t)), i.active || (e.dispatch(No({
            hasBoundaryNodes: !!document.querySelector(Gr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), n && (JM(e), jM(), e.getState().ixSession.hasDefinedMediaQueries && UM(e)), e.dispatch(Do()), YM(e, r))
    }

    function jM() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(eE) === -1 && (e.className += ` ${eE}`)
    }

    function YM(e, t) {
        let n = r => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(Sr(r, o)), t ? HM(e, n) : requestAnimationFrame(n))
        };
        n(window.performance.now())
    }

    function Hr(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: n
            } = t;
            n.forEach(QM), DM(), e.dispatch(Mo())
        }
    }

    function QM({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function $M({
        store: e,
        eventStateKey: t,
        eventTarget: n,
        eventId: r,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: E
        } = e.getState(), {
            events: g
        } = l, d = g[r], {
            eventTypeId: h
        } = d, I = {}, _ = {}, O = [], {
            continuousActionGroups: v
        } = a, {
            id: x
        } = a;
        PM(h, i) && (x = LM(t, x));
        let A = E.hasBoundaryNodes && n ? On(n, Gr) : null;
        v.forEach(w => {
            let {
                keyframe: P,
                actionItems: R
            } = w;
            R.forEach(X => {
                let {
                    actionTypeId: V
                } = X, {
                    target: H
                } = X.config;
                if (!H) return;
                let W = H.boundaryMode ? A : null,
                    j = MM(H) + na + V;
                if (_[j] = ZM(_[j], P, X), !I[j]) {
                    I[j] = !0;
                    let {
                        config: N
                    } = X;
                    Xr({
                        config: N,
                        event: d,
                        eventTarget: n,
                        elementRoot: W,
                        elementApi: Ce
                    }).forEach(T => {
                        O.push({
                            element: T,
                            key: j
                        })
                    })
                }
            })
        }), O.forEach(({
            element: w,
            key: P
        }) => {
            let R = _[P],
                X = (0, at.default)(R, "[0].actionItems[0]", {}),
                {
                    actionTypeId: V
                } = X,
                W = (V === xe.PLUGIN_RIVE ? (X.config?.target?.selectorGuids || []).length === 0 : kr(V)) ? ia(V)(w, X) : null,
                j = ra({
                    element: w,
                    actionItem: X,
                    elementApi: Ce
                }, W);
            oa({
                store: e,
                element: w,
                eventId: r,
                actionListId: o,
                actionItem: X,
                destination: j,
                continuous: !0,
                parameterId: x,
                actionGroups: R,
                smoothing: s,
                restingValue: u,
                pluginInstance: W
            })
        })
    }

    function ZM(e = [], t, n) {
        let r = [...e],
            i;
        return r.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = r.length, r.push({
            keyframe: t,
            actionItems: []
        })), r[i].actionItems.push(n), r
    }

    function JM(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: n
        } = t;
        fE(e), (0, $t.default)(n, (i, o) => {
            let a = Zh[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            oF({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: r
        } = e.getState();
        r.eventListeners.length && tF(e)
    }

    function tF(e) {
        let t = () => {
            fE(e)
        };
        eF.forEach(n => {
            window.addEventListener(n, t), e.dispatch(Or(window, [n, t]))
        }), t()
    }

    function fE(e) {
        let {
            ixSession: t,
            ixData: n
        } = e.getState(), r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = n;
            e.dispatch(Vo({
                width: r,
                mediaQueries: i
            }))
        }
    }

    function oF({
        logic: e,
        store: t,
        events: n
    }) {
        aF(n);
        let {
            types: r,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = nF(n, iF);
        if (!(0, rE.default)(s)) return;
        (0, $t.default)(s, (g, d) => {
            let h = n[d],
                {
                    action: I,
                    id: _,
                    mediaQueries: O = o.mediaQueryKeys
                } = h,
                {
                    actionListId: v
                } = I.config;
            FM(O, o.mediaQueryKeys) || t.dispatch(ko()), I.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(A => {
                let {
                    continuousParameterGroupId: w
                } = A, P = (0, at.default)(a, `${v}.continuousParameterGroups`, []), R = (0, nE.default)(P, ({
                    id: H
                }) => H === w), X = (A.smoothing || 0) / 100, V = (A.restingState || 0) / 100;
                R && g.forEach((H, W) => {
                    let j = _ + na + W;
                    $M({
                        store: t,
                        eventStateKey: j,
                        eventTarget: H,
                        eventId: _,
                        eventConfig: A,
                        actionListId: v,
                        parameterGroup: R,
                        smoothing: X,
                        restingValue: V
                    })
                })
            }), (I.actionTypeId === xe.GENERAL_START_ACTION || ta(I.actionTypeId)) && dE({
                store: t,
                actionListId: v,
                eventId: _
            })
        });
        let u = g => {
                let {
                    ixSession: d
                } = t.getState();
                rF(s, (h, I, _) => {
                    let O = n[I],
                        v = d.eventState[_],
                        {
                            action: x,
                            mediaQueries: A = o.mediaQueryKeys
                        } = O;
                    if (!Vr(A, d.mediaQueryKey)) return;
                    let w = (P = {}) => {
                        let R = i({
                            store: t,
                            element: h,
                            event: O,
                            eventConfig: P,
                            nativeEvent: g,
                            eventStateKey: _
                        }, v);
                        qM(R, v) || t.dispatch(Fo(_, R))
                    };
                    x.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(w) : w()
                })
            },
            l = (0, sE.default)(u, VM),
            E = ({
                target: g = document,
                types: d,
                throttle: h
            }) => {
                d.split(" ").filter(Boolean).forEach(I => {
                    let _ = h ? l : u;
                    g.addEventListener(I, _), t.dispatch(Or(g, [I, _]))
                })
            };
        Array.isArray(r) ? r.forEach(E) : typeof r == "string" && E(e)
    }

    function aF(e) {
        if (!XM) return;
        let t = {},
            n = "";
        for (let r in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[r], a = Ho(o);
            t[a] || (i === He.MOUSE_CLICK || i === He.MOUSE_SECOND_CLICK) && (t[a] = !0, n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n, document.body.appendChild(r)
        }
    }

    function dE({
        store: e,
        actionListId: t,
        eventId: n
    }) {
        let {
            ixData: r,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = r, s = a[n], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, at.default)(u, "actionItemGroups[0].actionItems", []),
                E = (0, at.default)(s, "mediaQueries", r.mediaQueryKeys);
            if (!Vr(E, i.mediaQueryKey)) return;
            l.forEach(g => {
                let {
                    config: d,
                    actionTypeId: h
                } = g, I = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : d, _ = Xr({
                    config: I,
                    event: s,
                    elementApi: Ce
                }), O = kr(h);
                _.forEach(v => {
                    let x = O ? ia(h)(v, g) : null;
                    oa({
                        destination: ra({
                            element: v,
                            actionItem: g,
                            elementApi: Ce
                        }, x),
                        immediate: !0,
                        store: e,
                        element: v,
                        eventId: n,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: x
                    })
                })
            })
        }
    }

    function pE({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, $t.default)(t, n => {
            if (!n.continuous) {
                let {
                    actionListId: r,
                    verbose: i
                } = n;
                aa(n, e), i && e.dispatch(Yt({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        })
    }

    function Qt({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && n ? On(n, Gr) : null;
        (0, $t.default)(o, u => {
            let l = (0, at.default)(u, "actionItem.config.target.boundaryMode"),
                E = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (s && l && !Bo(s, u.element)) return;
                aa(u, e), u.verbose && e.dispatch(Yt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Rn({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: E
        } = u, g = E[t] || {}, {
            mediaQueries: d = u.mediaQueryKeys
        } = g, h = (0, at.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: I,
            useFirstGroupAsInitialState: _
        } = h;
        if (!I || !I.length) return !1;
        o >= I.length && (0, at.default)(g, "config.loop") && (o = 0), o === 0 && _ && o++;
        let v = (o === 0 || o === 1 && _) && ta(g.action?.actionTypeId) ? g.config.delay : void 0,
            x = (0, at.default)(I, [o, "actionItems"], []);
        if (!x.length || !Vr(d, l.mediaQueryKey)) return !1;
        let A = l.hasBoundaryNodes && n ? On(n, Gr) : null,
            w = wM(x),
            P = !1;
        return x.forEach((R, X) => {
            let {
                config: V,
                actionTypeId: H
            } = R, W = kr(H), {
                target: j
            } = V;
            if (!j) return;
            let N = j.boundaryMode ? A : null;
            Xr({
                config: V,
                event: g,
                eventTarget: n,
                elementRoot: N,
                elementApi: Ce
            }).forEach((D, U) => {
                let G = W ? ia(H)(D, R) : null,
                    Y = W ? GM(H)(D, R) : null;
                P = !0;
                let Q = w === X && U === 0,
                    ae = xM({
                        element: D,
                        actionItem: R
                    }),
                    me = ra({
                        element: D,
                        actionItem: R,
                        elementApi: Ce
                    }, G);
                oa({
                    store: e,
                    element: D,
                    actionItem: R,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: Q,
                    computedStyle: ae,
                    destination: me,
                    immediate: a,
                    verbose: s,
                    pluginInstance: G,
                    pluginDuration: Y,
                    instanceDelay: v
                })
            })
        }), P
    }

    function oa(e) {
        let {
            store: t,
            computedStyle: n,
            ...r
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: l,
            eventId: E
        } = r, g = !u, d = OM(), {
            ixElements: h,
            ixSession: I,
            ixData: _
        } = t.getState(), O = AM(h, i), {
            refState: v
        } = h[O] || {}, x = Wo(i), A = I.reducedMotion && vi[o.actionTypeId], w;
        if (A && u) switch (_.events[E]?.eventTypeId) {
            case He.MOUSE_MOVE:
            case He.MOUSE_MOVE_IN_VIEWPORT:
                w = l;
                break;
            default:
                w = .5;
                break
        }
        let P = RM(i, v, n, o, Ce, s);
        if (t.dispatch(qo({
                instanceId: d,
                elementId: O,
                origin: P,
                refType: x,
                skipMotion: A,
                skipToValue: w,
                ...r
            })), gE(document.body, "ix2-animation-started", d), a) {
            sF(t, d);
            return
        }
        Tt({
            store: t,
            select: ({
                ixInstances: R
            }) => R[d],
            onChange: hE
        }), g && t.dispatch(wr(d, I.tick))
    }

    function aa(e, t) {
        gE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: n,
            actionItem: r
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[n] || {};
        a === uE && NM(o, r, Ce), t.dispatch(Go(e.id))
    }

    function gE(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
    }

    function sF(e, t) {
        let {
            ixParameters: n
        } = e.getState();
        e.dispatch(wr(t, 0)), e.dispatch(Sr(performance.now(), n));
        let {
            ixInstances: r
        } = e.getState();
        hE(r[t], e)
    }

    function hE(e, t) {
        let {
            active: n,
            continuous: r,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: l,
            groupIndex: E,
            eventId: g,
            eventTarget: d,
            eventStateKey: h,
            actionListId: I,
            isCarrier: _,
            styleProp: O,
            verbose: v,
            pluginInstance: x
        } = e, {
            ixData: A,
            ixSession: w
        } = t.getState(), {
            events: P
        } = A, R = P && P[g] ? P[g] : {}, {
            mediaQueries: X = A.mediaQueryKeys
        } = R;
        if (Vr(X, w.mediaQueryKey) && (r || n || i)) {
            if (l || u === bM && i) {
                t.dispatch(Xo(o, s, l, a));
                let {
                    ixElements: V
                } = t.getState(), {
                    ref: H,
                    refType: W,
                    refState: j
                } = V[o] || {}, N = j && j[s];
                (W === uE || kr(s)) && SM(H, j, N, g, a, O, Ce, u, x)
            }
            if (i) {
                if (_) {
                    let V = Rn({
                        store: t,
                        eventId: g,
                        eventTarget: d,
                        eventStateKey: h,
                        actionListId: I,
                        groupIndex: E + 1,
                        verbose: v
                    });
                    v && !V && t.dispatch(Yt({
                        actionListId: I,
                        isPlaying: !1
                    }))
                }
                aa(e, t)
            }
        }
    }
    var nE, at, rE, iE, oE, aE, $t, sE, qr, TM, ta, na, Gr, uE, bM, eE, Xr, AM, ra, Tt, OM, SM, cE, wM, xM, RM, CM, PM, LM, Vr, NM, DM, MM, FM, qM, kr, ia, GM, tE, XM, VM, eF, nF, rF, iF, ea = de(() => {
        "use strict";
        nE = oe(Ki()), at = oe(ar()), rE = oe(Rp()), iE = oe(tg()), oE = oe(rg()), aE = oe(og()), $t = oe(fg()), sE = oe(vg());
        Ne();
        qr = oe(It());
        xr();
        Ag();
        Jh();
        TM = Object.keys(Gn), ta = e => TM.includes(e), {
            COLON_DELIMITER: na,
            BOUNDARY_SELECTOR: Gr,
            HTML_ELEMENT: uE,
            RENDER_GENERAL: bM,
            W_MOD_IX: eE
        } = Oe, {
            getAffectedElements: Xr,
            getElementId: AM,
            getDestinationValues: ra,
            observeStore: Tt,
            getInstanceId: OM,
            renderHTMLElement: SM,
            clearAllStyles: cE,
            getMaxDurationItemIndex: wM,
            getComputedStyle: xM,
            getInstanceOrigin: RM,
            reduceListToGroup: CM,
            shouldNamespaceEventParameter: PM,
            getNamespacedParameterId: LM,
            shouldAllowMediaQuery: Vr,
            cleanupHTMLElement: NM,
            clearObjectCache: DM,
            stringifyTarget: MM,
            mediaQueriesEqual: FM,
            shallowEqual: qM
        } = qr.IX2VanillaUtils, {
            isPluginType: kr,
            createPluginInstance: ia,
            getPluginDuration: GM
        } = qr.IX2VanillaPlugins, tE = navigator.userAgent, XM = tE.match(/iPad/i) || tE.match(/iPhone/), VM = 12;
        eF = ["resize", "orientationchange"];
        nF = (e, t) => (0, iE.default)((0, aE.default)(e, t), oE.default), rF = (e, t) => {
            (0, $t.default)(e, (n, r) => {
                n.forEach((i, o) => {
                    let a = r + na + o;
                    t(i, r, a)
                })
            })
        }, iF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Xr({
                config: t,
                elementApi: Ce
            })
        }
    });
    var mE = f(ua => {
        "use strict";
        Object.defineProperty(ua, "__esModule", {
            value: !0
        });

        function uF(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        uF(ua, {
            actions: function() {
                return fF
            },
            destroy: function() {
                return vE
            },
            init: function() {
                return hF
            },
            setEnv: function() {
                return gF
            },
            store: function() {
                return Br
            }
        });
        var cF = hi(),
            lF = dF((lp(), je(cp))),
            sa = (ea(), je(EE)),
            fF = pF((xr(), je(_g)));

        function dF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function yE(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (yE = function(r) {
                return r ? n : t
            })(e)
        }

        function pF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = yE(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                } return r.default = e, n && n.set(e, r), r
        }
        var Br = (0, cF.createStore)(lF.default);

        function gF(e) {
            e() && (0, sa.observeRequests)(Br)
        }

        function hF(e) {
            vE(), (0, sa.startEngine)({
                store: Br,
                rawData: e,
                allowEvents: !0
            })
        }

        function vE() {
            (0, sa.stopEngine)(Br)
        }
    });
    var bE = f((yX, TE) => {
        "use strict";
        var _E = ke(),
            IE = mE();
        IE.setEnv(_E.env);
        _E.define("ix2", TE.exports = function() {
            return IE
        })
    });
    var OE = f((vX, AE) => {
        "use strict";
        var Zt = ke();
        Zt.define("links", AE.exports = function(e, t) {
            var n = {},
                r = e(window),
                i, o = Zt.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                E = /\/$/,
                g, d;
            n.ready = n.design = n.preview = h;

            function h() {
                i = o && Zt.env("design"), d = Zt.env("slug") || a.pathname || "", Zt.scroll.off(_), g = [];
                for (var v = document.links, x = 0; x < v.length; ++x) I(v[x]);
                g.length && (Zt.scroll.on(_), _())
            }

            function I(v) {
                if (!v.getAttribute("hreflang")) {
                    var x = i && v.getAttribute("href-disabled") || v.getAttribute("href");
                    if (s.href = x, !(x.indexOf(":") >= 0)) {
                        var A = e(v);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var w = e(s.hash);
                            w.length && g.push({
                                link: A,
                                sec: w,
                                active: !1
                            });
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var P = s.href === a.href || x === d || l.test(x) && E.test(d);
                            O(A, u, P)
                        }
                    }
                }
            }

            function _() {
                var v = r.scrollTop(),
                    x = r.height();
                t.each(g, function(A) {
                    if (!A.link.attr("hreflang")) {
                        var w = A.link,
                            P = A.sec,
                            R = P.offset().top,
                            X = P.outerHeight(),
                            V = x * .5,
                            H = P.is(":visible") && R + X - V >= v && R + V <= v + x;
                        A.active !== H && (A.active = H, O(w, u, H))
                    }
                })
            }

            function O(v, x, A) {
                var w = v.hasClass(x);
                A && w || !A && !w || (A ? v.addClass(x) : v.removeClass(x))
            }
            return n
        })
    });
    var wE = f((mX, SE) => {
        "use strict";
        var Wr = ke();
        Wr.define("scroll", SE.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                n = window.location,
                r = I() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(N) {
                    window.setTimeout(N, 15)
                },
                u = Wr.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                E = 'a[href="#"]',
                g = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
                d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                h = document.createElement("style");
            h.appendChild(document.createTextNode(d));

            function I() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function O(N) {
                return _.test(N.hash) && N.host + N.pathname === n.host + n.pathname
            }
            let v = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || v.matches
            }

            function A(N, T) {
                var D;
                switch (T) {
                    case "add":
                        D = N.attr("tabindex"), D ? N.attr("data-wf-tabindex-swap", D) : N.attr("tabindex", "-1");
                        break;
                    case "remove":
                        D = N.attr("data-wf-tabindex-swap"), D ? (N.attr("tabindex", D), N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                        break
                }
                N.toggleClass("wf-force-outline-none", T === "add")
            }

            function w(N) {
                var T = N.currentTarget;
                if (!(Wr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))) {
                    var D = O(T) ? T.hash : "";
                    if (D !== "") {
                        var U = e(D);
                        U.length && (N && (N.preventDefault(), N.stopPropagation()), P(D, N), window.setTimeout(function() {
                            R(U, function() {
                                A(U, "add"), U.get(0).focus({
                                    preventScroll: !0
                                }), A(U, "remove")
                            })
                        }, N ? 0 : 300))
                    }
                }
            }

            function P(N) {
                if (n.hash !== N && r && r.pushState && !(Wr.env.chrome && n.protocol === "file:")) {
                    var T = r.state && r.state.hash;
                    T !== N && r.pushState({
                        hash: N
                    }, "", N)
                }
            }

            function R(N, T) {
                var D = i.scrollTop(),
                    U = X(N);
                if (D !== U) {
                    var G = V(N, D, U),
                        Y = Date.now(),
                        Q = function() {
                            var ae = Date.now() - Y;
                            window.scroll(0, H(D, U, ae, G)), ae <= G ? s(Q) : typeof T == "function" && T()
                        };
                    s(Q)
                }
            }

            function X(N) {
                var T = e(l),
                    D = T.css("position") === "fixed" ? T.outerHeight() : 0,
                    U = N.offset().top - D;
                if (N.data("scroll") === "mid") {
                    var G = i.height() - D,
                        Y = N.outerHeight();
                    Y < G && (U -= Math.round((G - Y) / 2))
                }
                return U
            }

            function V(N, T, D) {
                if (x()) return 0;
                var U = 1;
                return a.add(N).each(function(G, Y) {
                    var Q = parseFloat(Y.getAttribute("data-scroll-time"));
                    !isNaN(Q) && Q >= 0 && (U = Q)
                }), (472.143 * Math.log(Math.abs(T - D) + 125) - 2e3) * U
            }

            function H(N, T, D, U) {
                return D > U ? T : N + (T - N) * W(D / U)
            }

            function W(N) {
                return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
            }

            function j() {
                var {
                    WF_CLICK_EMPTY: N,
                    WF_CLICK_SCROLL: T
                } = t;
                o.on(T, g, w), o.on(N, E, function(D) {
                    D.preventDefault()
                }), document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: j
            }
        })
    });
    var RE = f((_X, xE) => {
        "use strict";
        var EF = ke();
        EF.define("touch", xE.exports = function(e) {
            var t = {},
                n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new r(o) : null
            };

            function r(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, E;
                o.addEventListener("touchstart", g, !1), o.addEventListener("touchmove", d, !1), o.addEventListener("touchend", h, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", g, !1), o.addEventListener("mousemove", d, !1), o.addEventListener("mouseup", h, !1), o.addEventListener("mouseout", I, !1);

                function g(O) {
                    var v = O.touches;
                    v && v.length > 1 || (a = !0, v ? (s = !0, l = v[0].clientX) : l = O.clientX, E = l)
                }

                function d(O) {
                    if (a) {
                        if (s && O.type === "mousemove") {
                            O.preventDefault(), O.stopPropagation();
                            return
                        }
                        var v = O.touches,
                            x = v ? v[0].clientX : O.clientX,
                            A = x - E;
                        E = x, Math.abs(A) > u && n && String(n()) === "" && (i("swipe", O, {
                            direction: A > 0 ? "right" : "left"
                        }), I())
                    }
                }

                function h(O) {
                    if (a && (a = !1, s && O.type === "mouseup")) {
                        O.preventDefault(), O.stopPropagation(), s = !1;
                        return
                    }
                }

                function I() {
                    a = !1
                }

                function _() {
                    o.removeEventListener("touchstart", g, !1), o.removeEventListener("touchmove", d, !1), o.removeEventListener("touchend", h, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", g, !1), o.removeEventListener("mousemove", d, !1), o.removeEventListener("mouseup", h, !1), o.removeEventListener("mouseout", I, !1), o = null
                }
                this.destroy = _
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var LE = f((IX, PE) => {
        "use strict";
        var bt = ke(),
            yF = qn(),
            ze = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            CE = !0,
            vF = /^#[a-zA-Z0-9\-_]+$/;
        bt.define("dropdown", PE.exports = function(e, t) {
            var n = t.debounce,
                r = {},
                i = bt.env(),
                o = !1,
                a, s = bt.env.touch,
                u = ".w-dropdown",
                l = "w--open",
                E = yF.triggers,
                g = 900,
                d = "focusout" + u,
                h = "keydown" + u,
                I = "mouseenter" + u,
                _ = "mousemove" + u,
                O = "mouseleave" + u,
                v = (s ? "click" : "mouseup") + u,
                x = "w-close" + u,
                A = "setting" + u,
                w = e(document),
                P;
            r.ready = R, r.design = function() {
                o && T(), o = !1, R()
            }, r.preview = function() {
                o = !0, R()
            };

            function R() {
                a = i && bt.env("design"), P = w.find(u), P.each(X)
            }

            function X(b, Z) {
                var te = e(Z),
                    F = e.data(Z, u);
                F || (F = e.data(Z, u, {
                    open: !1,
                    el: te,
                    config: {},
                    selectedIdx: -1
                })), F.toggle = F.el.children(".w-dropdown-toggle"), F.list = F.el.children(".w-dropdown-list"), F.links = F.list.find("a:not(.w-dropdown .w-dropdown a)"), F.complete = G(F), F.mouseLeave = Q(F), F.mouseUpOutside = U(F), F.mouseMoveOutside = ae(F), V(F);
                var le = F.toggle.attr("id"),
                    Ie = F.list.attr("id");
                le || (le = "w-dropdown-toggle-" + b), Ie || (Ie = "w-dropdown-list-" + b), F.toggle.attr("id", le), F.toggle.attr("aria-controls", Ie), F.toggle.attr("aria-haspopup", "menu"), F.toggle.attr("aria-expanded", "false"), F.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), F.toggle.prop("tagName") !== "BUTTON" && (F.toggle.attr("role", "button"), F.toggle.attr("tabindex") || F.toggle.attr("tabindex", "0")), F.list.attr("id", Ie), F.list.attr("aria-labelledby", le), F.links.each(function(p, M) {
                    M.hasAttribute("tabindex") || M.setAttribute("tabindex", "0"), vF.test(M.hash) && M.addEventListener("click", N.bind(null, F))
                }), F.el.off(u), F.toggle.off(u), F.nav && F.nav.off(u);
                var re = W(F, CE);
                a && F.el.on(A, H(F)), a || (i && (F.hovering = !1, N(F)), F.config.hover && F.toggle.on(I, Y(F)), F.el.on(x, re), F.el.on(h, me(F)), F.el.on(d, $(F)), F.toggle.on(v, re), F.toggle.on(h, Ee(F)), F.nav = F.el.closest(".w-nav"), F.nav.on(x, re))
            }

            function V(b) {
                var Z = Number(b.el.css("z-index"));
                b.manageZ = Z === g || Z === g + 1, b.config = {
                    hover: b.el.attr("data-hover") === "true" && !s,
                    delay: b.el.attr("data-delay")
                }
            }

            function H(b) {
                return function(Z, te) {
                    te = te || {}, V(b), te.open === !0 && j(b), te.open === !1 && N(b, {
                        immediate: !0
                    })
                }
            }

            function W(b, Z) {
                return n(function(te) {
                    if (b.open || te && te.type === "w-close") return N(b, {
                        forceClose: Z
                    });
                    j(b)
                })
            }

            function j(b) {
                if (!b.open) {
                    D(b), b.open = !0, b.list.addClass(l), b.toggle.addClass(l), b.toggle.attr("aria-expanded", "true"), E.intro(0, b.el[0]), bt.redraw.up(), b.manageZ && b.el.css("z-index", g + 1);
                    var Z = bt.env("editor");
                    a || w.on(v, b.mouseUpOutside), b.hovering && !Z && b.el.on(O, b.mouseLeave), b.hovering && Z && w.on(_, b.mouseMoveOutside), window.clearTimeout(b.delayId)
                }
            }

            function N(b, {
                immediate: Z,
                forceClose: te
            } = {}) {
                if (b.open && !(b.config.hover && b.hovering && !te)) {
                    b.toggle.attr("aria-expanded", "false"), b.open = !1;
                    var F = b.config;
                    if (E.outro(0, b.el[0]), w.off(v, b.mouseUpOutside), w.off(_, b.mouseMoveOutside), b.el.off(O, b.mouseLeave), window.clearTimeout(b.delayId), !F.delay || Z) return b.complete();
                    b.delayId = window.setTimeout(b.complete, F.delay)
                }
            }

            function T() {
                w.find(u).each(function(b, Z) {
                    e(Z).triggerHandler(x)
                })
            }

            function D(b) {
                var Z = b.el[0];
                P.each(function(te, F) {
                    var le = e(F);
                    le.is(Z) || le.has(Z).length || le.triggerHandler(x)
                })
            }

            function U(b) {
                return b.mouseUpOutside && w.off(v, b.mouseUpOutside), n(function(Z) {
                    if (b.open) {
                        var te = e(Z.target);
                        if (!te.closest(".w-dropdown-toggle").length) {
                            var F = e.inArray(b.el[0], te.parents(u)) === -1,
                                le = bt.env("editor");
                            if (F) {
                                if (le) {
                                    var Ie = te.parents().length === 1 && te.parents("svg").length === 1,
                                        re = te.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (Ie || re) return
                                }
                                N(b)
                            }
                        }
                    }
                })
            }

            function G(b) {
                return function() {
                    b.list.removeClass(l), b.toggle.removeClass(l), b.manageZ && b.el.css("z-index", "")
                }
            }

            function Y(b) {
                return function() {
                    b.hovering = !0, j(b)
                }
            }

            function Q(b) {
                return function() {
                    b.hovering = !1, b.links.is(":focus") || N(b)
                }
            }

            function ae(b) {
                return n(function(Z) {
                    if (b.open) {
                        var te = e(Z.target),
                            F = e.inArray(b.el[0], te.parents(u)) === -1;
                        if (F) {
                            var le = te.parents(".w-editor-bem-EditorHoverControls").length,
                                Ie = te.parents(".w-editor-bem-RTToolbar").length,
                                re = e(".w-editor-bem-EditorOverlay"),
                                p = re.find(".w-editor-edit-outline").length || re.find(".w-editor-bem-RTToolbar").length;
                            if (le || Ie || p) return;
                            b.hovering = !1, N(b)
                        }
                    }
                })
            }

            function me(b) {
                return function(Z) {
                    if (!(a || !b.open)) switch (b.selectedIdx = b.links.index(document.activeElement), Z.keyCode) {
                        case ze.HOME:
                            return b.open ? (b.selectedIdx = 0, Ae(b), Z.preventDefault()) : void 0;
                        case ze.END:
                            return b.open ? (b.selectedIdx = b.links.length - 1, Ae(b), Z.preventDefault()) : void 0;
                        case ze.ESCAPE:
                            return N(b), b.toggle.focus(), Z.stopPropagation();
                        case ze.ARROW_RIGHT:
                        case ze.ARROW_DOWN:
                            return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1), Ae(b), Z.preventDefault();
                        case ze.ARROW_LEFT:
                        case ze.ARROW_UP:
                            return b.selectedIdx = Math.max(-1, b.selectedIdx - 1), Ae(b), Z.preventDefault()
                    }
                }
            }

            function Ae(b) {
                b.links[b.selectedIdx] && b.links[b.selectedIdx].focus()
            }

            function Ee(b) {
                var Z = W(b, CE);
                return function(te) {
                    if (!a) {
                        if (!b.open) switch (te.keyCode) {
                            case ze.ARROW_UP:
                            case ze.ARROW_DOWN:
                                return te.stopPropagation()
                        }
                        switch (te.keyCode) {
                            case ze.SPACE:
                            case ze.ENTER:
                                return Z(), te.stopPropagation(), te.preventDefault()
                        }
                    }
                }
            }

            function $(b) {
                return n(function(Z) {
                    var {
                        relatedTarget: te,
                        target: F
                    } = Z, le = b.el[0], Ie = le.contains(te) || le.contains(F);
                    return Ie || N(b), Z.stopPropagation()
                })
            }
            return r
        })
    });
    var DE = f((TX, NE) => {
        "use strict";
        var pt = ke(),
            mF = qn(),
            be = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        pt.define("navbar", NE.exports = function(e, t) {
            var n = {},
                r = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, l, E, g = pt.env(),
                d = '<div class="w-nav-overlay" data-wf-ignore />',
                h = ".w-nav",
                I = "w--open",
                _ = "w--nav-dropdown-open",
                O = "w--nav-dropdown-toggle-open",
                v = "w--nav-dropdown-list-open",
                x = "w--nav-link-open",
                A = mF.triggers,
                w = e();
            n.ready = n.design = n.preview = P, n.destroy = function() {
                w = e(), R(), u && u.length && u.each(W)
            };

            function P() {
                l = g && pt.env("design"), E = pt.env("editor"), s = e(document.body), u = o.find(h), u.length && (u.each(H), R(), X())
            }

            function R() {
                pt.resize.off(V)
            }

            function X() {
                pt.resize.on(V)
            }

            function V() {
                u.each($)
            }

            function H(p, M) {
                var B = e(M),
                    k = e.data(M, h);
                k || (k = e.data(M, h, {
                    open: !1,
                    el: B,
                    config: {},
                    selectedIdx: -1
                })), k.menu = B.find(".w-nav-menu"), k.links = k.menu.find(".w-nav-link"), k.dropdowns = k.menu.find(".w-dropdown"), k.dropdownToggle = k.menu.find(".w-dropdown-toggle"), k.dropdownList = k.menu.find(".w-dropdown-list"), k.button = B.find(".w-nav-button"), k.container = B.find(".w-container"), k.overlayContainerId = "w-nav-overlay-" + p, k.outside = Ae(k);
                var pe = B.find(".w-nav-brand");
                pe && pe.attr("href") === "/" && pe.attr("aria-label") == null && pe.attr("aria-label", "home"), k.button.attr("style", "-webkit-user-select: text;"), k.button.attr("aria-label") == null && k.button.attr("aria-label", "menu"), k.button.attr("role", "button"), k.button.attr("tabindex", "0"), k.button.attr("aria-controls", k.overlayContainerId), k.button.attr("aria-haspopup", "menu"), k.button.attr("aria-expanded", "false"), k.el.off(h), k.button.off(h), k.menu.off(h), T(k), l ? (j(k), k.el.on("setting" + h, D(k))) : (N(k), k.button.on("click" + h, ae(k)), k.menu.on("click" + h, "a", me(k)), k.button.on("keydown" + h, U(k)), k.el.on("keydown" + h, G(k))), $(p, M)
            }

            function W(p, M) {
                var B = e.data(M, h);
                B && (j(B), e.removeData(M, h))
            }

            function j(p) {
                p.overlay && (re(p, !0), p.overlay.remove(), p.overlay = null)
            }

            function N(p) {
                p.overlay || (p.overlay = e(d).appendTo(p.el), p.overlay.attr("id", p.overlayContainerId), p.parent = p.menu.parent(), re(p, !0))
            }

            function T(p) {
                var M = {},
                    B = p.config || {},
                    k = M.animation = p.el.attr("data-animation") || "default";
                M.animOver = /^over/.test(k), M.animDirect = /left$/.test(k) ? -1 : 1, B.animation !== k && p.open && t.defer(Q, p), M.easing = p.el.attr("data-easing") || "ease", M.easing2 = p.el.attr("data-easing2") || "ease";
                var pe = p.el.attr("data-duration");
                M.duration = pe != null ? Number(pe) : 400, M.docHeight = p.el.attr("data-doc-height"), p.config = M
            }

            function D(p) {
                return function(M, B) {
                    B = B || {};
                    var k = i.width();
                    T(p), B.open === !0 && le(p, !0), B.open === !1 && re(p, !0), p.open && t.defer(function() {
                        k !== i.width() && Q(p)
                    })
                }
            }

            function U(p) {
                return function(M) {
                    switch (M.keyCode) {
                        case be.SPACE:
                        case be.ENTER:
                            return ae(p)(), M.preventDefault(), M.stopPropagation();
                        case be.ESCAPE:
                            return re(p), M.preventDefault(), M.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                        case be.HOME:
                        case be.END:
                            return p.open ? (M.keyCode === be.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0, Y(p), M.preventDefault(), M.stopPropagation()) : (M.preventDefault(), M.stopPropagation())
                    }
                }
            }

            function G(p) {
                return function(M) {
                    if (p.open) switch (p.selectedIdx = p.links.index(document.activeElement), M.keyCode) {
                        case be.HOME:
                        case be.END:
                            return M.keyCode === be.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0, Y(p), M.preventDefault(), M.stopPropagation();
                        case be.ESCAPE:
                            return re(p), p.button.focus(), M.preventDefault(), M.stopPropagation();
                        case be.ARROW_LEFT:
                        case be.ARROW_UP:
                            return p.selectedIdx = Math.max(-1, p.selectedIdx - 1), Y(p), M.preventDefault(), M.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                            return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1), Y(p), M.preventDefault(), M.stopPropagation()
                    }
                }
            }

            function Y(p) {
                if (p.links[p.selectedIdx]) {
                    var M = p.links[p.selectedIdx];
                    M.focus(), me(M)
                }
            }

            function Q(p) {
                p.open && (re(p, !0), le(p, !0))
            }

            function ae(p) {
                return a(function() {
                    p.open ? re(p) : le(p)
                })
            }

            function me(p) {
                return function(M) {
                    var B = e(this),
                        k = B.attr("href");
                    if (!pt.validClick(M.currentTarget)) {
                        M.preventDefault();
                        return
                    }
                    k && k.indexOf("#") === 0 && p.open && re(p)
                }
            }

            function Ae(p) {
                return p.outside && o.off("click" + h, p.outside),
                    function(M) {
                        var B = e(M.target);
                        E && B.closest(".w-editor-bem-EditorOverlay").length || Ee(p, B)
                    }
            }
            var Ee = a(function(p, M) {
                if (p.open) {
                    var B = M.closest(".w-nav-menu");
                    p.menu.is(B) || re(p)
                }
            });

            function $(p, M) {
                var B = e.data(M, h),
                    k = B.collapsed = B.button.css("display") !== "none";
                if (B.open && !k && !l && re(B, !0), B.container.length) {
                    var pe = Z(B);
                    B.links.each(pe), B.dropdowns.each(pe)
                }
                B.open && Ie(B)
            }
            var b = "max-width";

            function Z(p) {
                var M = p.container.css(b);
                return M === "none" && (M = ""),
                    function(B, k) {
                        k = e(k), k.css(b, ""), k.css(b) === "none" && k.css(b, M)
                    }
            }

            function te(p, M) {
                M.setAttribute("data-nav-menu-open", "")
            }

            function F(p, M) {
                M.removeAttribute("data-nav-menu-open")
            }

            function le(p, M) {
                if (p.open) return;
                p.open = !0, p.menu.each(te), p.links.addClass(x), p.dropdowns.addClass(_), p.dropdownToggle.addClass(O), p.dropdownList.addClass(v), p.button.addClass(I);
                var B = p.config,
                    k = B.animation;
                (k === "none" || !r.support.transform || B.duration <= 0) && (M = !0);
                var pe = Ie(p),
                    Jt = p.menu.outerHeight(!0),
                    gt = p.menu.outerWidth(!0),
                    c = p.el.height(),
                    y = p.el[0];
                if ($(0, y), A.intro(0, y), pt.redraw.up(), l || o.on("click" + h, p.outside), M) {
                    L();
                    return
                }
                var m = "transform " + B.duration + "ms " + B.easing;
                if (p.overlay && (w = p.menu.prev(), p.overlay.show().append(p.menu)), B.animOver) {
                    r(p.menu).add(m).set({
                        x: B.animDirect * gt,
                        height: pe
                    }).start({
                        x: 0
                    }).then(L), p.overlay && p.overlay.width(gt);
                    return
                }
                var S = c + Jt;
                r(p.menu).add(m).set({
                    y: -S
                }).start({
                    y: 0
                }).then(L);

                function L() {
                    p.button.attr("aria-expanded", "true")
                }
            }

            function Ie(p) {
                var M = p.config,
                    B = M.docHeight ? o.height() : s.height();
                return M.animOver ? p.menu.height(B) : p.el.css("position") !== "fixed" && (B -= p.el.outerHeight(!0)), p.overlay && p.overlay.height(B), B
            }

            function re(p, M) {
                if (!p.open) return;
                p.open = !1, p.button.removeClass(I);
                var B = p.config;
                if ((B.animation === "none" || !r.support.transform || B.duration <= 0) && (M = !0), A.outro(0, p.el[0]), o.off("click" + h, p.outside), M) {
                    r(p.menu).stop(), y();
                    return
                }
                var k = "transform " + B.duration + "ms " + B.easing2,
                    pe = p.menu.outerHeight(!0),
                    Jt = p.menu.outerWidth(!0),
                    gt = p.el.height();
                if (B.animOver) {
                    r(p.menu).add(k).start({
                        x: Jt * B.animDirect
                    }).then(y);
                    return
                }
                var c = gt + pe;
                r(p.menu).add(k).start({
                    y: -c
                }).then(y);

                function y() {
                    p.menu.height(""), r(p.menu).set({
                        x: 0,
                        y: 0
                    }), p.menu.each(F), p.links.removeClass(x), p.dropdowns.removeClass(_), p.dropdownToggle.removeClass(O), p.dropdownList.removeClass(v), p.overlay && p.overlay.children().length && (w.length ? p.menu.insertAfter(w) : p.menu.prependTo(p.parent), p.overlay.attr("style", "").hide()), p.el.triggerHandler("w-close"), p.button.attr("aria-expanded", "false")
                }
            }
            return n
        })
    });
    Ta();
    Aa();
    Sa();
    Ra();
    qn();
    bE();
    OE();
    wE();
    RE();
    LE();
    DE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-block-5",
                "originalId": "92ceb79c-6963-a363-2559-3e886ef87211",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block-5",
                "originalId": "92ceb79c-6963-a363-2559-3e886ef87211",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688399748266
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "92ceb79c-6963-a363-2559-3e886ef8720e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "92ceb79c-6963-a363-2559-3e886ef8720e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688400852623
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497ea77202d925b042c6655|398ae8a7-f252-1ee2-8182-99c8ac32a61b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497ea77202d925b042c6655|398ae8a7-f252-1ee2-8182-99c8ac32a61b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1689953502973
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497ea77202d925b042c6655|defab46b-5229-7840-8bea-ea9923fab4f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497ea77202d925b042c6655|defab46b-5229-7840-8bea-ea9923fab4f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1689953506642
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497ea77202d925b042c6655",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497ea77202d925b042c6655",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691660259261
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497ea77202d925b042c6655",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497ea77202d925b042c6655",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691660259264
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691668578064
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691668578065
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691670595592
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691670595704
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691670727459
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691670727459
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|3bfc9a9d-497e-a3cf-71d1-9a10e01385bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|3bfc9a9d-497e-a3cf-71d1-9a10e01385bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691857128236
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|614dde95-4e99-e2da-c2e5-997790bc79c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|614dde95-4e99-e2da-c2e5-997790bc79c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691857205443
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|224209f8-4fe5-2939-1cc9-e486af5715b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|224209f8-4fe5-2939-1cc9-e486af5715b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691864089445
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|217ec182-8a16-fad1-51c9-b9c1498b1c83",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|217ec182-8a16-fad1-51c9-b9c1498b1c83",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691864600373
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691867169485
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497ea77202d925b042c6655",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497ea77202d925b042c6655",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691867273691
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|a82aa955-75bd-6b5d-d8dc-a154ae0529be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|a82aa955-75bd-6b5d-d8dc-a154ae0529be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 40,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 40
            }],
            "createdOn": 1692894851966
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695729405024
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d4b799d60ebaf810aa2fea|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d4b799d60ebaf810aa2fea|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695729438847
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695729713448
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695729866022
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695729866105
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|2f010bb5-bd9f-27bc-6f7e-6a5b02d42b96",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|2f010bb5-bd9f-27bc-6f7e-6a5b02d42b96",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 20,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 51,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 0
            }],
            "createdOn": 1695995747261
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|a1e56d53-8860-0452-3d08-4b372eee289d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|a1e56d53-8860-0452-3d08-4b372eee289d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696330830624
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|a1e56d53-8860-0452-3d08-4b372eee289d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|a1e56d53-8860-0452-3d08-4b372eee289d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696330830624
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696508169461
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696508169464
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|b9757433-7aa0-1655-fbbc-127093b48a64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|b9757433-7aa0-1655-fbbc-127093b48a64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1696612116767
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|b2986d38-fce6-685d-2cbb-a93736e0d900",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|b2986d38-fce6-685d-2cbb-a93736e0d900",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1696612332155
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|415ca40d-80f6-c934-89c3-829e03925b5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|415ca40d-80f6-c934-89c3-829e03925b5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1696612389835
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|e8a7df11-daf7-625d-6e78-87f2dfe48d5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|e8a7df11-daf7-625d-6e78-87f2dfe48d5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1696612738206
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|94401a6d-9665-c2af-846b-670525741466",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|94401a6d-9665-c2af-846b-670525741466",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1696612754508
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960158137
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960158139
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960211742
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960694838
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960694840
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960829630
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "7b52af93-812d-7c23-21d7-72fd47b70da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7b52af93-812d-7c23-21d7-72fd47b70da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960829632
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|efd43989-3b5a-f3f5-ee03-69ab2dfd6c59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|efd43989-3b5a-f3f5-ee03-69ab2dfd6c59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699968148947
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|efd43989-3b5a-f3f5-ee03-69ab2dfd6c59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|efd43989-3b5a-f3f5-ee03-69ab2dfd6c59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699968148951
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|bfd2aa88-fa4d-a2bf-a59d-9687595e49b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|bfd2aa88-fa4d-a2bf-a59d-9687595e49b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969738844
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|bfd2aa88-fa4d-a2bf-a59d-9687595e49b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|bfd2aa88-fa4d-a2bf-a59d-9687595e49b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969738850
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|6c46b512-ec4c-5aeb-b54a-b617c5c611c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|6c46b512-ec4c-5aeb-b54a-b617c5c611c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969765141
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|6c46b512-ec4c-5aeb-b54a-b617c5c611c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|6c46b512-ec4c-5aeb-b54a-b617c5c611c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969765146
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|3c049269-95f2-2715-c08d-f3eb60f408a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|3c049269-95f2-2715-c08d-f3eb60f408a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969783868
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|3c049269-95f2-2715-c08d-f3eb60f408a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|3c049269-95f2-2715-c08d-f3eb60f408a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969784148
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|efd43989-3b5a-f3f5-ee03-69ab2dfd6c59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|efd43989-3b5a-f3f5-ee03-69ab2dfd6c59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969961382
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971091036
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971091036
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971256806
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971256806
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-191"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|3c049269-95f2-2715-c08d-f3eb60f408a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|3c049269-95f2-2715-c08d-f3eb60f408a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699980734791
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|6c46b512-ec4c-5aeb-b54a-b617c5c611c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|6c46b512-ec4c-5aeb-b54a-b617c5c611c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699982383691
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497ea77202d925b042c6655|72859403-0116-413c-dd37-b09876f6112e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497ea77202d925b042c6655|72859403-0116-413c-dd37-b09876f6112e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700856781875
        },
        "e-202": {
            "id": "e-202",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|91656b20-cd13-e1f5-f115-3b2eeedd3042",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|91656b20-cd13-e1f5-f115-3b2eeedd3042",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 100
            }, {
                "continuousParameterGroupId": "a-40-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 100
            }],
            "createdOn": 1701365348299
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "f24d9d5a-b717-2301-aa75-b2ba31ab62cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f24d9d5a-b717-2301-aa75-b2ba31ab62cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702143031296
        },
        "e-208": {
            "id": "e-208",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-207"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "f24d9d5a-b717-2301-aa75-b2ba31ab62cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f24d9d5a-b717-2301-aa75-b2ba31ab62cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702143031300
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "72859403-0116-413c-dd37-b09876f6112c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "72859403-0116-413c-dd37-b09876f6112c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702144600285
        },
        "e-210": {
            "id": "e-210",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-209"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "72859403-0116-413c-dd37-b09876f6112c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "72859403-0116-413c-dd37-b09876f6112c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702144600288
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "72859403-0116-413c-dd37-b09876f6112e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "72859403-0116-413c-dd37-b09876f6112e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702144711121
        },
        "e-212": {
            "id": "e-212",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-211"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "72859403-0116-413c-dd37-b09876f6112e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "72859403-0116-413c-dd37-b09876f6112e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702144711125
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303faf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303faf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-213"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303faf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303faf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-216"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-217": {
            "id": "e-217",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-220": {
            "id": "e-220",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afc3aab4-1492-ac4c-a7c6-592e27303fac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702145868174
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-222"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-222": {
            "id": "e-222",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-221"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-224": {
            "id": "e-224",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-223"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-226": {
            "id": "e-226",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-225"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|e9655953-aaa1-1c5d-0ecf-f11123feab8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|7cfce72a-5661-a9c4-0c30-7e156a661281",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717406770018
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae99508782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae99508782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723293814124
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae995087831",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae995087831",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723293814124
        },
        "e-246": {
            "id": "e-246",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae995087833",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae995087833",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723293814124
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae995087835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "665d8c312f3a5c3dbb5167ec|878021c4-03c6-7012-9b4f-fae995087835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723293814124
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|ecab729a-a4f3-89ac-0234-9e146253df6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|ecab729a-a4f3-89ac-0234-9e146253df6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1729339182272
        },
        "e-251": {
            "id": "e-251",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-250"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|ecab729a-a4f3-89ac-0234-9e146253df6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|ecab729a-a4f3-89ac-0234-9e146253df6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1729339182272
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|ac9a3894-1436-3c3c-5ec7-43658e49195e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|ac9a3894-1436-3c3c-5ec7-43658e49195e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1729339428795
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-252"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6512baec2594faeecb9f3c26|ac9a3894-1436-3c3c-5ec7-43658e49195e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6512baec2594faeecb9f3c26|ac9a3894-1436-3c3c-5ec7-43658e49195e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1729339428795
        }
    },
    "actionLists": {
        "a-24": {
            "id": "a-24",
            "title": "Link to black BG",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".body",
                            "selectorGuids": ["a155fb31-ba40-14a9-d1e0-80d565f6bd74"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 400,
                        "target": {},
                        "globalSwatchId": "ea512b73",
                        "rValue": 10,
                        "bValue": 11,
                        "gValue": 10,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691660631166
        },
        "a-18": {
            "id": "a-18",
            "title": "Photo guide scroll",
            "continuousParameterGroups": [{
                "id": "a-18-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-18-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "0f820daf-8b4f-0916-f960-1489c1c4551c"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-18-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "0f820daf-8b4f-0916-f960-1489c1c4551c"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-18-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "0f820daf-8b4f-0916-f960-1489c1c4551c"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-18-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "0f820daf-8b4f-0916-f960-1489c1c4551c"
                            },
                            "yValue": -7.25,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-18-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "0f820daf-8b4f-0916-f960-1489c1c4551c"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-18-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "0f820daf-8b4f-0916-f960-1489c1c4551c"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1689952649949
        },
        "a-23": {
            "id": "a-23",
            "title": "Logo opacity",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-41",
                            "selectorGuids": ["0db008cf-b91b-b6f5-98cd-2f2e9f558cc3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".homepage-link-div",
                            "selectorGuids": ["ed53a2e8-c9e9-0d05-a083-066d14d8a90a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691660149475
        },
        "a-22": {
            "id": "a-22",
            "title": "Logo transparency",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-41",
                            "selectorGuids": ["0db008cf-b91b-b6f5-98cd-2f2e9f558cc3"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".homepage-link-div",
                            "selectorGuids": ["ed53a2e8-c9e9-0d05-a083-066d14d8a90a"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691660149475
        },
        "a-20": {
            "id": "a-20",
            "title": "Nav button on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "b5c6f2c2-4ba8-5d1d-1ab4-09f622472d98"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "b5c6f2c2-4ba8-5d1d-1ab4-09f622472d98"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691658653642
        },
        "a-21": {
            "id": "a-21",
            "title": "Nav button off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "f24d9d5a-b717-2301-aa75-b2ba31ab62c9"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691658653642
        },
        "a-29": {
            "id": "a-29",
            "title": "L to S1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".image-18",
                            "selectorGuids": ["e093b2f5-db60-77d6-9a33-4138edb2425e"]
                        },
                        "xValue": 0,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.right._1",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "3912e8e3-516e-f806-762d-0b5eed588385", "fbdbe76b-bf65-7914-c2bf-81c2e65e6561"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.right._2",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "3912e8e3-516e-f806-762d-0b5eed588385", "e6f64b3b-95f6-097c-b525-8bbd92e40da4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d4b799d60ebaf810aa2fea|3bfc9a9d-497e-a3cf-71d1-9a10e01385bb"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691865371820
        },
        "a-27": {
            "id": "a-27",
            "title": "R to S2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.right._2",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "3912e8e3-516e-f806-762d-0b5eed588385", "e6f64b3b-95f6-097c-b525-8bbd92e40da4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.left._1",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "e6d09b3f-b654-3a8a-8b41-c12595bd7c79", "ac46c21e-956f-9d7b-4e9d-402986aa6f0b"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.left._2",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "e6d09b3f-b654-3a8a-8b41-c12595bd7c79", "32f111ec-2d58-8f27-fa08-7093be9a1ecb"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d4b799d60ebaf810aa2fea|614dde95-4e99-e2da-c2e5-997790bc79c4"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.right._2",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "3912e8e3-516e-f806-762d-0b5eed588385", "e6f64b3b-95f6-097c-b525-8bbd92e40da4"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-27-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.left._1",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "e6d09b3f-b654-3a8a-8b41-c12595bd7c79", "ac46c21e-956f-9d7b-4e9d-402986aa6f0b"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".image-18",
                            "selectorGuids": ["e093b2f5-db60-77d6-9a33-4138edb2425e"]
                        },
                        "xValue": -54.5,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691865110511
        },
        "a-30": {
            "id": "a-30",
            "title": "L to S2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d4b799d60ebaf810aa2fea|224209f8-4fe5-2939-1cc9-e486af5715b9"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.right._2",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "3912e8e3-516e-f806-762d-0b5eed588385", "e6f64b3b-95f6-097c-b525-8bbd92e40da4"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.left._1",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "e6d09b3f-b654-3a8a-8b41-c12595bd7c79", "ac46c21e-956f-9d7b-4e9d-402986aa6f0b"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".image-18",
                            "selectorGuids": ["e093b2f5-db60-77d6-9a33-4138edb2425e"]
                        },
                        "xValue": -54.5,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691866642420
        },
        "a-28": {
            "id": "a-28",
            "title": "R to S3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".image-18",
                            "selectorGuids": ["e093b2f5-db60-77d6-9a33-4138edb2425e"]
                        },
                        "xValue": -109,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d4b799d60ebaf810aa2fea|217ec182-8a16-fad1-51c9-b9c1498b1c83"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.left._2",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "e6d09b3f-b654-3a8a-8b41-c12595bd7c79", "32f111ec-2d58-8f27-fa08-7093be9a1ecb"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-28-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".slider-btn.left._1",
                            "selectorGuids": ["82450881-a1a0-8d4e-95dd-373105bbb24f", "e6d09b3f-b654-3a8a-8b41-c12595bd7c79", "ac46c21e-956f-9d7b-4e9d-402986aa6f0b"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691865237944
        },
        "a-31": {
            "id": "a-31",
            "title": "Page loaded",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".body",
                            "selectorGuids": ["a155fb31-ba40-14a9-d1e0-80d565f6bd74"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".body",
                            "selectorGuids": ["a155fb31-ba40-14a9-d1e0-80d565f6bd74"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691867192882
        },
        "a-32": {
            "id": "a-32",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-32-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-32-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|a1bd9b47-b215-72eb-63c3-ad237e026ec3"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 23,
                    "actionItems": [{
                        "id": "a-32-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|a1bd9b47-b215-72eb-63c3-ad237e026ec3"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-32-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|a64db129-4e93-dbf6-1776-5465546350ec"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|388e968e-6cd6-6a96-ab14-a7bb598ba195"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|9479b421-1d5b-aa72-f652-882b999f1704"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 49,
                    "actionItems": [{
                        "id": "a-32-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|a64db129-4e93-dbf6-1776-5465546350ec"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|388e968e-6cd6-6a96-ab14-a7bb598ba195"
                            },
                            "value": 0.3,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|9479b421-1d5b-aa72-f652-882b999f1704"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 51,
                    "actionItems": [{
                        "id": "a-32-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|6f8c1a95-9fbc-9880-55f7-9ddfcc76c8b8"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|035ebecc-a072-a5e3-a7f9-8910c2684aa1"
                            },
                            "value": 0.3,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|388e968e-6cd6-6a96-ab14-a7bb598ba197"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 64,
                    "actionItems": [{
                        "id": "a-32-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|6f8c1a95-9fbc-9880-55f7-9ddfcc76c8b8"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|035ebecc-a072-a5e3-a7f9-8910c2684aa1"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-32-n-12",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|388e968e-6cd6-6a96-ab14-a7bb598ba197"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 77,
                    "actionItems": [{
                        "id": "a-32-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|e89be682-8f85-4332-9480-0e2b60211b5e"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-32-n-16",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "64d4b799d60ebaf810aa2fea|e89be682-8f85-4332-9480-0e2b60211b5e"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1692894998932
        },
        "a-39": {
            "id": "a-39",
            "title": "Scrolling numbers",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-39-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c5"
                            },
                            "value": 0.3,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c3"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 35,
                    "actionItems": [{
                        "id": "a-39-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c5"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c3"
                            },
                            "value": 0.3,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-39-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c7"
                            },
                            "value": 0.3,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c5"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 65,
                    "actionItems": [{
                        "id": "a-39-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c7"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6512baec2594faeecb9f3c26|f6cb8ba0-ce35-3d7d-bc68-2511a0ee60c5"
                            },
                            "value": 0.3,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1692894998932
        },
        "a-41": {
            "id": "a-41",
            "title": "Target Button Opacity",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|a1e56d53-8860-0452-3d08-4b372eee289d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1696508233381
        },
        "a-42": {
            "id": "a-42",
            "title": "Target Button Transparency",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|a1e56d53-8860-0452-3d08-4b372eee289d"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1696508233381
        },
        "a-43": {
            "id": "a-43",
            "title": "Scrolling benefits mobile",
            "continuousParameterGroups": [{
                "id": "a-43-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 35,
                    "actionItems": [{
                        "id": "a-43-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".normal-text",
                                "selectorGuids": ["8ad74aa1-f6bd-0949-75ad-38a98c1fc9fb"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-43-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".normal-text",
                                "selectorGuids": ["8ad74aa1-f6bd-0949-75ad-38a98c1fc9fb"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1696612134402
        },
        "a-46": {
            "id": "a-46",
            "title": "Nav button on 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6512baec2594faeecb9f3c26|54d48e68-f112-0362-3f6d-b438d747adb4"
                        },
                        "value": 0.35,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "6512baec2594faeecb9f3c26|54d48e68-f112-0362-3f6d-b438d747adb4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691658653642
        },
        "a-47": {
            "id": "a-47",
            "title": "Nav button off 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-47-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "6512baec2594faeecb9f3c26|54d48e68-f112-0362-3f6d-b438d747adb6"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691658653642
        },
        "a-44": {
            "id": "a-44",
            "title": "Menu on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-44-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-44-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-link",
                            "selectorGuids": ["cc4bcf80-8afe-1ee3-1ac7-726e643029e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1696957177233
        },
        "a-45": {
            "id": "a-45",
            "title": "Menu off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-link",
                            "selectorGuids": ["cc4bcf80-8afe-1ee3-1ac7-726e643029e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1696957177233
        },
        "a-54": {
            "id": "a-54",
            "title": "Click on Max",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef2"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-54-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-54-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699981500460
        },
        "a-52": {
            "id": "a-52",
            "title": "Click on Avantstay",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-52-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-52-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-52-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-52-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-52-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-52-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef2"
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef2"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699981500460
        },
        "a-53": {
            "id": "a-53",
            "title": "Click on Ildessimo",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|363a0e6d-952a-6463-992b-b19287560815"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|68cec5e1-27ed-f245-af2d-02517f528ef2"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-53-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "6512baec2594faeecb9f3c26|82d36fbb-983a-d506-5ac9-9be9f0ac2e6a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699981500460
        },
        "a-40": {
            "id": "a-40",
            "title": "Focus animation (hero)",
            "continuousParameterGroups": [{
                "id": "a-40-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-40-n-26",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "b9c9",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-29",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "efc7",
                                "value": 0.75,
                                "unit": "vw"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-40-n-25",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "4374",
                                "value": 0.5,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-30",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "7034",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-40-n-37",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "c349",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-39",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "412b",
                                "value": 0.5,
                                "unit": "vw"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-40-n-38",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "0215",
                                "value": 0.75,
                                "unit": "px"
                            }]
                        }
                    }, {
                        "id": "a-40-n-40",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "e434",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }]
                }]
            }, {
                "id": "a-40-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 15,
                    "actionItems": [{
                        "id": "a-40-n-28",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "d650",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-31",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "b594",
                                "value": 0.75,
                                "unit": "vw"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-40-n-27",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "1b20",
                                "value": 0.5,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-32",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "eb99",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-40-n-33",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "e3d8",
                                "value": 0.5,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-35",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "d336",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-40-n-34",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|5be4437d-1d90-546b-2fff-64d79d37ba5d"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "982f",
                                "value": 0,
                                "unit": "vw"
                            }]
                        }
                    }, {
                        "id": "a-40-n-36",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6512baec2594faeecb9f3c26|c9bd1b3a-9e24-b4db-8358-057171ba08a3"
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "c956",
                                "value": 0.75,
                                "unit": "vw"
                            }]
                        }
                    }]
                }]
            }],
            "createdOn": 1696329677007
        },
        "a-56": {
            "id": "a-56",
            "title": "Nav button on 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6497ea77202d925b042c6655|54d48e68-f112-0362-3f6d-b438d747adb4"
                        },
                        "value": 0.35,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "6497ea77202d925b042c6655|54d48e68-f112-0362-3f6d-b438d747adb4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-56-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691658653642
        },
        "a-57": {
            "id": "a-57",
            "title": "Nav button off 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-narrow",
                            "selectorGuids": ["107103f3-c0cd-d4ad-e811-774bcdb488f5"]
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "6497ea77202d925b042c6655|54d48e68-f112-0362-3f6d-b438d747adb6"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691658653642
        },
        "a-58": {
            "id": "a-58",
            "title": "Link to black BG 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".body",
                            "selectorGuids": ["a155fb31-ba40-14a9-d1e0-80d565f6bd74"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-58-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 400,
                        "target": {},
                        "globalSwatchId": "ea512b73",
                        "rValue": 10,
                        "bValue": 11,
                        "gValue": 10,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691660631166
        },
        "a-59": {
            "id": "a-59",
            "title": "Menu on 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-59-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-link",
                            "selectorGuids": ["cc4bcf80-8afe-1ee3-1ac7-726e643029e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1696957177233
        },
        "a-60": {
            "id": "a-60",
            "title": "Menu off 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-link",
                            "selectorGuids": ["cc4bcf80-8afe-1ee3-1ac7-726e643029e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["18be038f-7f22-739d-da40-5824a9f45fc7"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1696957177233
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
