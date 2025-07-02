(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8885], {
    1314: function(r, t, e) {
        r = e.nmd(r);
        var o, n, a, i, l, d, s, c, u, p, f, h = "__lodash_hash_undefined__", g = "[object Arguments]", b = "[object Function]", v = "[object Object]", m = /^\[object .+?Constructor\]$/, y = /^(?:0|[1-9]\d*)$/, k = {};
        k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0,
        k[g] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object Boolean]"] = k["[object DataView]"] = k["[object Date]"] = k["[object Error]"] = k[b] = k["[object Map]"] = k["[object Number]"] = k[v] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object WeakMap]"] = !1;
        var S = "object" == typeof e.g && e.g && e.g.Object === Object && e.g
          , _ = "object" == typeof self && self && self.Object === Object && self
          , R = S || _ || Function("return this")()
          , w = t && !t.nodeType && t
          , T = w && r && !r.nodeType && r
          , B = T && T.exports === w
          , x = B && S.process
          , j = function() {
            try {
                var r = T && T.require && T.require("util").types;
                if (r)
                    return r;
                return x && x.binding && x.binding("util")
            } catch (r) {}
        }()
          , I = j && j.isTypedArray
          , E = Array.prototype
          , $ = Function.prototype
          , C = Object.prototype
          , z = R["__core-js_shared__"]
          , O = $.toString
          , W = C.hasOwnProperty
          , P = (s = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : ""
          , A = C.toString
          , L = O.call(Object)
          , M = RegExp("^" + O.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , F = B ? R.Buffer : void 0
          , D = R.Symbol
          , Y = R.Uint8Array
          , X = F ? F.allocUnsafe : void 0
          , H = (c = Object.getPrototypeOf,
        u = Object,
        function(r) {
            return c(u(r))
        }
        )
          , G = Object.create
          , V = C.propertyIsEnumerable
          , K = E.splice
          , U = D ? D.toStringTag : void 0
          , N = function() {
            try {
                var r = rf(Object, "defineProperty");
                return r({}, "", {}),
                r
            } catch (r) {}
        }()
          , Z = F ? F.isBuffer : void 0
          , Q = Math.max
          , q = Date.now
          , J = rf(R, "Map")
          , rr = rf(Object, "create")
          , rt = function() {
            function r() {}
            return function(t) {
                if (!rT(t))
                    return {};
                if (G)
                    return G(t);
                r.prototype = t;
                var e = new r;
                return r.prototype = void 0,
                e
            }
        }();
        function re(r) {
            var t = -1
              , e = null == r ? 0 : r.length;
            for (this.clear(); ++t < e; ) {
                var o = r[t];
                this.set(o[0], o[1])
            }
        }
        function ro(r) {
            var t = -1
              , e = null == r ? 0 : r.length;
            for (this.clear(); ++t < e; ) {
                var o = r[t];
                this.set(o[0], o[1])
            }
        }
        function rn(r) {
            var t = -1
              , e = null == r ? 0 : r.length;
            for (this.clear(); ++t < e; ) {
                var o = r[t];
                this.set(o[0], o[1])
            }
        }
        function ra(r) {
            var t = this.__data__ = new ro(r);
            this.size = t.size
        }
        function ri(r, t, e) {
            (void 0 === e || rm(r[t], e)) && (void 0 !== e || t in r) || rd(r, t, e)
        }
        function rl(r, t) {
            for (var e = r.length; e--; )
                if (rm(r[e][0], t))
                    return e;
            return -1
        }
        function rd(r, t, e) {
            "__proto__" == t && N ? N(r, t, {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0
            }) : r[t] = e
        }
        re.prototype.clear = function() {
            this.__data__ = rr ? rr(null) : {},
            this.size = 0
        }
        ,
        re.prototype.delete = function(r) {
            var t = this.has(r) && delete this.__data__[r];
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        re.prototype.get = function(r) {
            var t = this.__data__;
            if (rr) {
                var e = t[r];
                return e === h ? void 0 : e
            }
            return W.call(t, r) ? t[r] : void 0
        }
        ,
        re.prototype.has = function(r) {
            var t = this.__data__;
            return rr ? void 0 !== t[r] : W.call(t, r)
        }
        ,
        re.prototype.set = function(r, t) {
            var e = this.__data__;
            return this.size += this.has(r) ? 0 : 1,
            e[r] = rr && void 0 === t ? h : t,
            this
        }
        ,
        ro.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        ro.prototype.delete = function(r) {
            var t = this.__data__
              , e = rl(t, r);
            return !(e < 0) && (e == t.length - 1 ? t.pop() : K.call(t, e, 1),
            --this.size,
            !0)
        }
        ,
        ro.prototype.get = function(r) {
            var t = this.__data__
              , e = rl(t, r);
            return e < 0 ? void 0 : t[e][1]
        }
        ,
        ro.prototype.has = function(r) {
            return rl(this.__data__, r) > -1
        }
        ,
        ro.prototype.set = function(r, t) {
            var e = this.__data__
              , o = rl(e, r);
            return o < 0 ? (++this.size,
            e.push([r, t])) : e[o][1] = t,
            this
        }
        ,
        rn.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new re,
                map: new (J || ro),
                string: new re
            }
        }
        ,
        rn.prototype.delete = function(r) {
            var t = rp(this, r).delete(r);
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        rn.prototype.get = function(r) {
            return rp(this, r).get(r)
        }
        ,
        rn.prototype.has = function(r) {
            return rp(this, r).has(r)
        }
        ,
        rn.prototype.set = function(r, t) {
            var e = rp(this, r)
              , o = e.size;
            return e.set(r, t),
            this.size += e.size == o ? 0 : 1,
            this
        }
        ,
        ra.prototype.clear = function() {
            this.__data__ = new ro,
            this.size = 0
        }
        ,
        ra.prototype.delete = function(r) {
            var t = this.__data__
              , e = t.delete(r);
            return this.size = t.size,
            e
        }
        ,
        ra.prototype.get = function(r) {
            return this.__data__.get(r)
        }
        ,
        ra.prototype.has = function(r) {
            return this.__data__.has(r)
        }
        ,
        ra.prototype.set = function(r, t) {
            var e = this.__data__;
            if (e instanceof ro) {
                var o = e.__data__;
                if (!J || o.length < 199)
                    return o.push([r, t]),
                    this.size = ++e.size,
                    this;
                e = this.__data__ = new rn(o)
            }
            return e.set(r, t),
            this.size = e.size,
            this
        }
        ;
        var rs = function(r, t, e) {
            for (var o = -1, n = Object(r), a = e(r), i = a.length; i--; ) {
                var l = a[++o];
                if (!1 === t(n[l], l, n))
                    break
            }
            return r
        };
        function rc(r) {
            return null == r ? void 0 === r ? "[object Undefined]" : "[object Null]" : U && U in Object(r) ? function(r) {
                var t = W.call(r, U)
                  , e = r[U];
                try {
                    r[U] = void 0;
                    var o = !0
                } catch (r) {}
                var n = A.call(r);
                return o && (t ? r[U] = e : delete r[U]),
                n
            }(r) : A.call(r)
        }
        function ru(r) {
            return rB(r) && rc(r) == g
        }
        function rp(r, t) {
            var e, o = r.__data__;
            return ("string" == (e = typeof t) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? o["string" == typeof t ? "string" : "hash"] : o.map
        }
        function rf(r, t) {
            var e = null == r ? void 0 : r[t];
            return !(!rT(e) || P && P in e) && (rR(e) ? M : m).test(function(r) {
                if (null != r) {
                    try {
                        return O.call(r)
                    } catch (r) {}
                    try {
                        return r + ""
                    } catch (r) {}
                }
                return ""
            }(e)) ? e : void 0
        }
        function rh(r, t) {
            var e = typeof r;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == e || "symbol" != e && y.test(r)) && r > -1 && r % 1 == 0 && r < t
        }
        function rg(r) {
            var t = r && r.constructor;
            return r === ("function" == typeof t && t.prototype || C)
        }
        function rb(r, t) {
            if (("constructor" !== t || "function" != typeof r[t]) && "__proto__" != t)
                return r[t]
        }
        var rv = (o = N ? function(r, t) {
            return N(r, "toString", {
                configurable: !0,
                enumerable: !1,
                value: function() {
                    return t
                },
                writable: !0
            })
        }
        : rE,
        n = 0,
        a = 0,
        function() {
            var r = q()
              , t = 16 - (r - a);
            if (a = r,
            t > 0) {
                if (++n >= 800)
                    return arguments[0]
            } else
                n = 0;
            return o.apply(void 0, arguments)
        }
        );
        function rm(r, t) {
            return r === t || r != r && t != t
        }
        var ry = ru(function() {
            return arguments
        }()) ? ru : function(r) {
            return rB(r) && W.call(r, "callee") && !V.call(r, "callee")
        }
          , rk = Array.isArray;
        function rS(r) {
            return null != r && rw(r.length) && !rR(r)
        }
        var r_ = Z || function() {
            return !1
        }
        ;
        function rR(r) {
            if (!rT(r))
                return !1;
            var t = rc(r);
            return t == b || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
        function rw(r) {
            return "number" == typeof r && r > -1 && r % 1 == 0 && r <= 9007199254740991
        }
        function rT(r) {
            var t = typeof r;
            return null != r && ("object" == t || "function" == t)
        }
        function rB(r) {
            return null != r && "object" == typeof r
        }
        var rx = I ? function(r) {
            return I(r)
        }
        : function(r) {
            return rB(r) && rw(r.length) && !!k[rc(r)]
        }
        ;
        function rj(r) {
            return rS(r) ? function(r, t) {
                var e = rk(r)
                  , o = !e && ry(r)
                  , n = !e && !o && r_(r)
                  , a = !e && !o && !n && rx(r)
                  , i = e || o || n || a
                  , l = i ? function(r, t) {
                    for (var e = -1, o = Array(r); ++e < r; )
                        o[e] = t(e);
                    return o
                }(r.length, String) : []
                  , d = l.length;
                for (var s in r)
                    (t || W.call(r, s)) && !(i && ("length" == s || n && ("offset" == s || "parent" == s) || a && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || rh(s, d))) && l.push(s);
                return l
            }(r, !0) : function(r) {
                if (!rT(r))
                    return function(r) {
                        var t = [];
                        if (null != r)
                            for (var e in Object(r))
                                t.push(e);
                        return t
                    }(r);
                var t = rg(r)
                  , e = [];
                for (var o in r)
                    "constructor" == o && (t || !W.call(r, o)) || e.push(o);
                return e
            }(r)
        }
        var rI = (p = function(r, t, e, o) {
            !function r(t, e, o, n, a) {
                t !== e && rs(e, function(i, l) {
                    if (a || (a = new ra),
                    rT(i))
                        (function(r, t, e, o, n, a, i) {
                            var l = rb(r, e)
                              , d = rb(t, e)
                              , s = i.get(d);
                            if (s) {
                                ri(r, e, s);
                                return
                            }
                            var c = a ? a(l, d, e + "", r, t, i) : void 0
                              , u = void 0 === c;
                            if (u) {
                                var p, f, h, g = rk(d), b = !g && r_(d), m = !g && !b && rx(d);
                                c = d,
                                g || b || m ? rk(l) ? c = l : rB(l) && rS(l) ? c = function(r, t) {
                                    var e = -1
                                      , o = r.length;
                                    for (t || (t = Array(o)); ++e < o; )
                                        t[e] = r[e];
                                    return t
                                }(l) : b ? (u = !1,
                                c = function(r, t) {
                                    if (t)
                                        return r.slice();
                                    var e = r.length
                                      , o = X ? X(e) : new r.constructor(e);
                                    return r.copy(o),
                                    o
                                }(d, !0)) : m ? (u = !1,
                                new Y(f = new (p = d.buffer).constructor(p.byteLength)).set(new Y(p)),
                                h = f,
                                c = new d.constructor(h,d.byteOffset,d.length)) : c = [] : function(r) {
                                    if (!rB(r) || rc(r) != v)
                                        return !1;
                                    var t = H(r);
                                    if (null === t)
                                        return !0;
                                    var e = W.call(t, "constructor") && t.constructor;
                                    return "function" == typeof e && e instanceof e && O.call(e) == L
                                }(d) || ry(d) ? (c = l,
                                ry(l) ? c = function(r, t, e, o) {
                                    var n = !e;
                                    e || (e = {});
                                    for (var a = -1, i = t.length; ++a < i; ) {
                                        var l = t[a]
                                          , d = void 0;
                                        void 0 === d && (d = r[l]),
                                        n ? rd(e, l, d) : function(r, t, e) {
                                            var o = r[t];
                                            W.call(r, t) && rm(o, e) && (void 0 !== e || t in r) || rd(r, t, e)
                                        }(e, l, d)
                                    }
                                    return e
                                }(l, rj(l)) : (!rT(l) || rR(l)) && (c = "function" != typeof d.constructor || rg(d) ? {} : rt(H(d)))) : u = !1
                            }
                            u && (i.set(d, c),
                            n(c, d, o, a, i),
                            i.delete(d)),
                            ri(r, e, c)
                        }
                        )(t, e, l, o, r, n, a);
                    else {
                        var d = n ? n(rb(t, l), i, l + "", t, e, a) : void 0;
                        void 0 === d && (d = i),
                        ri(t, l, d)
                    }
                }, rj)
            }(r, t, e, o)
        }
        ,
        rv((i = f = function(r, t) {
            var e = -1
              , o = t.length
              , n = o > 1 ? t[o - 1] : void 0
              , a = o > 2 ? t[2] : void 0;
            for (n = p.length > 3 && "function" == typeof n ? (o--,
            n) : void 0,
            a && function(r, t, e) {
                if (!rT(e))
                    return !1;
                var o = typeof t;
                return ("number" == o ? !!(rS(e) && rh(t, e.length)) : "string" == o && (t in e)) && rm(e[t], r)
            }(t[0], t[1], a) && (n = o < 3 ? void 0 : n,
            o = 1),
            r = Object(r); ++e < o; ) {
                var i = t[e];
                i && p(r, i, e, n)
            }
            return r
        }
        ,
        l = void 0,
        d = rE,
        l = Q(void 0 === l ? i.length - 1 : l, 0),
        function() {
            for (var r = arguments, t = -1, e = Q(r.length - l, 0), o = Array(e); ++t < e; )
                o[t] = r[l + t];
            t = -1;
            for (var n = Array(l + 1); ++t < l; )
                n[t] = r[t];
            return n[l] = d(o),
            function(r, t, e) {
                switch (e.length) {
                case 0:
                    return r.call(t);
                case 1:
                    return r.call(t, e[0]);
                case 2:
                    return r.call(t, e[0], e[1]);
                case 3:
                    return r.call(t, e[0], e[1], e[2])
                }
                return r.apply(t, e)
            }(i, this, n)
        }
        ), f + ""));
        function rE(r) {
            return r
        }
        r.exports = rI
    },
    14123: function(r, t, e) {
        "use strict";
        e.d(t, {
            If: function() {
                return a
            },
            ff: function() {
                return i
            },
            kc: function() {
                return n
            }
        });
        var o = e(2265)
          , n = (0,
        o.createContext)({});
        function a() {
            let r = (0,
            o.useContext)(n);
            if (void 0 === r)
                throw Error("useColorMode must be used within a ColorModeProvider");
            return r
        }
        function i(r, t) {
            let {colorMode: e} = a();
            return "dark" === e ? t : r
        }
        n.displayName = "ColorModeContext"
    },
    14096: function(r, t, e) {
        "use strict";
        e.d(t, {
            Kn: function() {
                return n
            },
            PB: function() {
                return d
            },
            PP: function() {
                return u
            },
            Pu: function() {
                return i
            },
            Qm: function() {
                return s
            },
            ZK: function() {
                return a
            },
            cx: function() {
                return o
            },
            v0: function() {
                return c
            }
        });
        var o = (...r) => r.filter(Boolean).join(" ");
        function n(r) {
            let t = typeof r;
            return null != r && ("object" === t || "function" === t) && !Array.isArray(r)
        }
        var a = r => {
            let {condition: t, message: e} = r
        }
        ;
        function i(r, ...t) {
            return l(r) ? r(...t) : r
        }
        var l = r => "function" == typeof r
          , d = r => r ? "" : void 0
          , s = r => !!r || void 0;
        function c(...r) {
            return function(t) {
                r.some(r => (null == r || r(t),
                null == t ? void 0 : t.defaultPrevented))
            }
        }
        function u(...r) {
            return function(t) {
                r.forEach(r => {
                    null == r || r(t)
                }
                )
            }
        }
    },
    83707: function(r, t, e) {
        "use strict";
        e.d(t, {
            D: function() {
                return rL
            },
            K1: function() {
                return rF
            },
            Lr: function() {
                return rD
            },
            Ud: function() {
                return rM
            },
            ZR: function() {
                return r$
            },
            _6: function() {
                return re
            },
            c0: function() {
                return rB
            },
            cC: function() {
                return rI
            },
            fj: function() {
                return rA
            },
            gJ: function() {
                return rt
            },
            iv: function() {
                return rW
            },
            k0: function() {
                return rP
            },
            oE: function() {
                return rj
            }
        });
        var o = e(14096)
          , n = e(1314)
          , a = r => /!(important)?$/.test(r)
          , i = r => "string" == typeof r ? r.replace(/!(important)?$/, "").trim() : r
          , l = (r, t) => e => {
            let n = String(t)
              , l = a(n)
              , d = i(n)
              , s = r ? `${r}.${d}` : d
              , c = (0,
            o.Kn)(e.__cssMap) && s in e.__cssMap ? e.__cssMap[s].varRef : t;
            return c = i(c),
            l ? `${c} !important` : c
        }
        ;
        function d(r) {
            let {scale: t, transform: e, compose: o} = r;
            return (r, n) => {
                var a;
                let i = l(t, r)(n)
                  , d = null != (a = null == e ? void 0 : e(i, n)) ? a : i;
                return o && (d = o(d, n)),
                d
            }
        }
        var s = (...r) => t => r.reduce( (r, t) => t(r), t);
        function c(r, t) {
            return e => {
                let o = {
                    property: e,
                    scale: r
                };
                return o.transform = d({
                    scale: r,
                    transform: t
                }),
                o
            }
        }
        var u = ({rtl: r, ltr: t}) => e => "rtl" === e.direction ? r : t
          , p = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"]
          , f = {
            "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
            filter: "var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)"
        }
          , h = {
            backdropFilter: "var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)",
            "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
        }
          , g = {
            "row-reverse": {
                space: "--chakra-space-x-reverse",
                divide: "--chakra-divide-x-reverse"
            },
            "column-reverse": {
                space: "--chakra-space-y-reverse",
                divide: "--chakra-divide-y-reverse"
            }
        }
          , b = {
            "to-t": "to top",
            "to-tr": "to top right",
            "to-r": "to right",
            "to-br": "to bottom right",
            "to-b": "to bottom",
            "to-bl": "to bottom left",
            "to-l": "to left",
            "to-tl": "to top left"
        }
          , v = new Set(Object.values(b))
          , m = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"])
          , y = r => r.trim()
          , k = r => "string" == typeof r && r.includes("(") && r.includes(")")
          , S = r => {
            let t = parseFloat(r.toString())
              , e = r.toString().replace(String(t), "");
            return {
                unitless: !e,
                value: t,
                unit: e
            }
        }
          , _ = r => t => `${r}(${t})`
          , R = {
            filter: r => "auto" !== r ? r : f,
            backdropFilter: r => "auto" !== r ? r : h,
            ring: r => ({
                "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
                "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
                "--chakra-ring-width": R.px(r),
                boxShadow: "var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)"
            }),
            bgClip: r => "text" === r ? {
                color: "transparent",
                backgroundClip: "text"
            } : {
                backgroundClip: r
            },
            transform: r => "auto" === r ? ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...p].join(" ") : "auto-gpu" === r ? ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...p].join(" ") : r,
            vh: r => "$100vh" === r ? "var(--chakra-vh)" : r,
            px(r) {
                if (null == r)
                    return r;
                let {unitless: t} = S(r);
                return t || "number" == typeof r ? `${r}px` : r
            },
            fraction: r => "number" != typeof r || r > 1 ? r : `${100 * r}%`,
            float: (r, t) => "rtl" === t.direction ? ({
                left: "right",
                right: "left"
            })[r] : r,
            degree(r) {
                if (/^var\(--.+\)$/.test(r) || null == r)
                    return r;
                let t = "string" == typeof r && !r.endsWith("deg");
                return "number" == typeof r || t ? `${r}deg` : r
            },
            gradient: (r, t) => (function(r, t) {
                if (null == r || m.has(r))
                    return r;
                if (!(k(r) || m.has(r)))
                    return `url('${r}')`;
                let e = /(^[a-z-A-Z]+)\((.*)\)/g.exec(r)
                  , o = null == e ? void 0 : e[1]
                  , n = null == e ? void 0 : e[2];
                if (!o || !n)
                    return r;
                let a = o.includes("-gradient") ? o : `${o}-gradient`
                  , [i,...l] = n.split(",").map(y).filter(Boolean);
                if ((null == l ? void 0 : l.length) === 0)
                    return r;
                let d = i in b ? b[i] : i;
                l.unshift(d);
                let s = l.map(r => {
                    if (v.has(r))
                        return r;
                    let e = r.indexOf(" ")
                      , [o,n] = -1 !== e ? [r.substr(0, e), r.substr(e + 1)] : [r]
                      , a = k(n) ? n : n && n.split(" ")
                      , i = `colors.${o}`
                      , l = i in t.__cssMap ? t.__cssMap[i].varRef : o;
                    return a ? [l, ...Array.isArray(a) ? a : [a]].join(" ") : l
                }
                );
                return `${a}(${s.join(", ")})`
            }
            )(r, null != t ? t : {}),
            blur: _("blur"),
            opacity: _("opacity"),
            brightness: _("brightness"),
            contrast: _("contrast"),
            dropShadow: _("drop-shadow"),
            grayscale: _("grayscale"),
            hueRotate: _("hue-rotate"),
            invert: _("invert"),
            saturate: _("saturate"),
            sepia: _("sepia"),
            bgImage: r => null == r ? r : k(r) || m.has(r) ? r : `url(${r})`,
            outline(r) {
                let t = "0" === String(r) || "none" === String(r);
                return null !== r && t ? {
                    outline: "2px solid transparent",
                    outlineOffset: "2px"
                } : {
                    outline: r
                }
            },
            flexDirection(r) {
                var t;
                let {space: e, divide: o} = null != (t = g[r]) ? t : {}
                  , n = {
                    flexDirection: r
                };
                return e && (n[e] = 1),
                o && (n[o] = 1),
                n
            }
        }
          , w = {
            borderWidths: c("borderWidths"),
            borderStyles: c("borderStyles"),
            colors: c("colors"),
            borders: c("borders"),
            gradients: c("gradients", R.gradient),
            radii: c("radii", R.px),
            space: c("space", s(R.vh, R.px)),
            spaceT: c("space", s(R.vh, R.px)),
            degreeT: r => ({
                property: r,
                transform: R.degree
            }),
            prop: (r, t, e) => ({
                property: r,
                scale: t,
                ...t && {
                    transform: d({
                        scale: t,
                        transform: e
                    })
                }
            }),
            propT: (r, t) => ({
                property: r,
                transform: t
            }),
            sizes: c("sizes", s(R.vh, R.px)),
            sizesT: c("sizes", s(R.vh, R.fraction)),
            shadows: c("shadows"),
            logical: function(r) {
                let {property: t, scale: e, transform: o} = r;
                return {
                    scale: e,
                    property: u(t),
                    transform: e ? d({
                        scale: e,
                        compose: o
                    }) : o
                }
            },
            blur: c("blur", R.blur)
        }
          , T = {
            background: w.colors("background"),
            backgroundColor: w.colors("backgroundColor"),
            backgroundImage: w.gradients("backgroundImage"),
            backgroundSize: !0,
            backgroundPosition: !0,
            backgroundRepeat: !0,
            backgroundAttachment: !0,
            backgroundClip: {
                transform: R.bgClip
            },
            bgSize: w.prop("backgroundSize"),
            bgPosition: w.prop("backgroundPosition"),
            bg: w.colors("background"),
            bgColor: w.colors("backgroundColor"),
            bgPos: w.prop("backgroundPosition"),
            bgRepeat: w.prop("backgroundRepeat"),
            bgAttachment: w.prop("backgroundAttachment"),
            bgGradient: w.gradients("backgroundImage"),
            bgClip: {
                transform: R.bgClip
            }
        };
        Object.assign(T, {
            bgImage: T.backgroundImage,
            bgImg: T.backgroundImage
        });
        var B = {
            border: w.borders("border"),
            borderWidth: w.borderWidths("borderWidth"),
            borderStyle: w.borderStyles("borderStyle"),
            borderColor: w.colors("borderColor"),
            borderRadius: w.radii("borderRadius"),
            borderTop: w.borders("borderTop"),
            borderBlockStart: w.borders("borderBlockStart"),
            borderTopLeftRadius: w.radii("borderTopLeftRadius"),
            borderStartStartRadius: w.logical({
                scale: "radii",
                property: {
                    ltr: "borderTopLeftRadius",
                    rtl: "borderTopRightRadius"
                }
            }),
            borderEndStartRadius: w.logical({
                scale: "radii",
                property: {
                    ltr: "borderBottomLeftRadius",
                    rtl: "borderBottomRightRadius"
                }
            }),
            borderTopRightRadius: w.radii("borderTopRightRadius"),
            borderStartEndRadius: w.logical({
                scale: "radii",
                property: {
                    ltr: "borderTopRightRadius",
                    rtl: "borderTopLeftRadius"
                }
            }),
            borderEndEndRadius: w.logical({
                scale: "radii",
                property: {
                    ltr: "borderBottomRightRadius",
                    rtl: "borderBottomLeftRadius"
                }
            }),
            borderRight: w.borders("borderRight"),
            borderInlineEnd: w.borders("borderInlineEnd"),
            borderBottom: w.borders("borderBottom"),
            borderBlockEnd: w.borders("borderBlockEnd"),
            borderBottomLeftRadius: w.radii("borderBottomLeftRadius"),
            borderBottomRightRadius: w.radii("borderBottomRightRadius"),
            borderLeft: w.borders("borderLeft"),
            borderInlineStart: {
                property: "borderInlineStart",
                scale: "borders"
            },
            borderInlineStartRadius: w.logical({
                scale: "radii",
                property: {
                    ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
                    rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
                }
            }),
            borderInlineEndRadius: w.logical({
                scale: "radii",
                property: {
                    ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
                    rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
                }
            }),
            borderX: w.borders(["borderLeft", "borderRight"]),
            borderInline: w.borders("borderInline"),
            borderY: w.borders(["borderTop", "borderBottom"]),
            borderBlock: w.borders("borderBlock"),
            borderTopWidth: w.borderWidths("borderTopWidth"),
            borderBlockStartWidth: w.borderWidths("borderBlockStartWidth"),
            borderTopColor: w.colors("borderTopColor"),
            borderBlockStartColor: w.colors("borderBlockStartColor"),
            borderTopStyle: w.borderStyles("borderTopStyle"),
            borderBlockStartStyle: w.borderStyles("borderBlockStartStyle"),
            borderBottomWidth: w.borderWidths("borderBottomWidth"),
            borderBlockEndWidth: w.borderWidths("borderBlockEndWidth"),
            borderBottomColor: w.colors("borderBottomColor"),
            borderBlockEndColor: w.colors("borderBlockEndColor"),
            borderBottomStyle: w.borderStyles("borderBottomStyle"),
            borderBlockEndStyle: w.borderStyles("borderBlockEndStyle"),
            borderLeftWidth: w.borderWidths("borderLeftWidth"),
            borderInlineStartWidth: w.borderWidths("borderInlineStartWidth"),
            borderLeftColor: w.colors("borderLeftColor"),
            borderInlineStartColor: w.colors("borderInlineStartColor"),
            borderLeftStyle: w.borderStyles("borderLeftStyle"),
            borderInlineStartStyle: w.borderStyles("borderInlineStartStyle"),
            borderRightWidth: w.borderWidths("borderRightWidth"),
            borderInlineEndWidth: w.borderWidths("borderInlineEndWidth"),
            borderRightColor: w.colors("borderRightColor"),
            borderInlineEndColor: w.colors("borderInlineEndColor"),
            borderRightStyle: w.borderStyles("borderRightStyle"),
            borderInlineEndStyle: w.borderStyles("borderInlineEndStyle"),
            borderTopRadius: w.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
            borderBottomRadius: w.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
            borderLeftRadius: w.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
            borderRightRadius: w.radii(["borderTopRightRadius", "borderBottomRightRadius"])
        };
        Object.assign(B, {
            rounded: B.borderRadius,
            roundedTop: B.borderTopRadius,
            roundedTopLeft: B.borderTopLeftRadius,
            roundedTopRight: B.borderTopRightRadius,
            roundedTopStart: B.borderStartStartRadius,
            roundedTopEnd: B.borderStartEndRadius,
            roundedBottom: B.borderBottomRadius,
            roundedBottomLeft: B.borderBottomLeftRadius,
            roundedBottomRight: B.borderBottomRightRadius,
            roundedBottomStart: B.borderEndStartRadius,
            roundedBottomEnd: B.borderEndEndRadius,
            roundedLeft: B.borderLeftRadius,
            roundedRight: B.borderRightRadius,
            roundedStart: B.borderInlineStartRadius,
            roundedEnd: B.borderInlineEndRadius,
            borderStart: B.borderInlineStart,
            borderEnd: B.borderInlineEnd,
            borderTopStartRadius: B.borderStartStartRadius,
            borderTopEndRadius: B.borderStartEndRadius,
            borderBottomStartRadius: B.borderEndStartRadius,
            borderBottomEndRadius: B.borderEndEndRadius,
            borderStartRadius: B.borderInlineStartRadius,
            borderEndRadius: B.borderInlineEndRadius,
            borderStartWidth: B.borderInlineStartWidth,
            borderEndWidth: B.borderInlineEndWidth,
            borderStartColor: B.borderInlineStartColor,
            borderEndColor: B.borderInlineEndColor,
            borderStartStyle: B.borderInlineStartStyle,
            borderEndStyle: B.borderInlineEndStyle
        });
        var x = {
            color: w.colors("color"),
            textColor: w.colors("color"),
            fill: w.colors("fill"),
            stroke: w.colors("stroke")
        }
          , j = {
            boxShadow: w.shadows("boxShadow"),
            mixBlendMode: !0,
            blendMode: w.prop("mixBlendMode"),
            backgroundBlendMode: !0,
            bgBlendMode: w.prop("backgroundBlendMode"),
            opacity: !0
        };
        Object.assign(j, {
            shadow: j.boxShadow
        });
        var I = {
            filter: {
                transform: R.filter
            },
            blur: w.blur("--chakra-blur"),
            brightness: w.propT("--chakra-brightness", R.brightness),
            contrast: w.propT("--chakra-contrast", R.contrast),
            hueRotate: w.degreeT("--chakra-hue-rotate"),
            invert: w.propT("--chakra-invert", R.invert),
            saturate: w.propT("--chakra-saturate", R.saturate),
            dropShadow: w.propT("--chakra-drop-shadow", R.dropShadow),
            backdropFilter: {
                transform: R.backdropFilter
            },
            backdropBlur: w.blur("--chakra-backdrop-blur"),
            backdropBrightness: w.propT("--chakra-backdrop-brightness", R.brightness),
            backdropContrast: w.propT("--chakra-backdrop-contrast", R.contrast),
            backdropHueRotate: w.degreeT("--chakra-backdrop-hue-rotate"),
            backdropInvert: w.propT("--chakra-backdrop-invert", R.invert),
            backdropSaturate: w.propT("--chakra-backdrop-saturate", R.saturate)
        }
          , E = {
            alignItems: !0,
            alignContent: !0,
            justifyItems: !0,
            justifyContent: !0,
            flexWrap: !0,
            flexDirection: {
                transform: R.flexDirection
            },
            flex: !0,
            flexFlow: !0,
            flexGrow: !0,
            flexShrink: !0,
            flexBasis: w.sizes("flexBasis"),
            justifySelf: !0,
            alignSelf: !0,
            order: !0,
            placeItems: !0,
            placeContent: !0,
            placeSelf: !0,
            gap: w.space("gap"),
            rowGap: w.space("rowGap"),
            columnGap: w.space("columnGap")
        };
        Object.assign(E, {
            flexDir: E.flexDirection
        });
        var $ = {
            gridGap: w.space("gridGap"),
            gridColumnGap: w.space("gridColumnGap"),
            gridRowGap: w.space("gridRowGap"),
            gridColumn: !0,
            gridRow: !0,
            gridAutoFlow: !0,
            gridAutoColumns: !0,
            gridColumnStart: !0,
            gridColumnEnd: !0,
            gridRowStart: !0,
            gridRowEnd: !0,
            gridAutoRows: !0,
            gridTemplate: !0,
            gridTemplateColumns: !0,
            gridTemplateRows: !0,
            gridTemplateAreas: !0,
            gridArea: !0
        }
          , C = {
            appearance: !0,
            cursor: !0,
            resize: !0,
            userSelect: !0,
            pointerEvents: !0,
            outline: {
                transform: R.outline
            },
            outlineOffset: !0,
            outlineColor: w.colors("outlineColor")
        }
          , z = {
            width: w.sizesT("width"),
            inlineSize: w.sizesT("inlineSize"),
            height: w.sizes("height"),
            blockSize: w.sizes("blockSize"),
            boxSize: w.sizes(["width", "height"]),
            minWidth: w.sizes("minWidth"),
            minInlineSize: w.sizes("minInlineSize"),
            minHeight: w.sizes("minHeight"),
            minBlockSize: w.sizes("minBlockSize"),
            maxWidth: w.sizes("maxWidth"),
            maxInlineSize: w.sizes("maxInlineSize"),
            maxHeight: w.sizes("maxHeight"),
            maxBlockSize: w.sizes("maxBlockSize"),
            overflow: !0,
            overflowX: !0,
            overflowY: !0,
            overscrollBehavior: !0,
            overscrollBehaviorX: !0,
            overscrollBehaviorY: !0,
            display: !0,
            aspectRatio: !0,
            hideFrom: {
                scale: "breakpoints",
                transform: (r, t) => {
                    var e, o, n;
                    let a = null != (n = null == (o = null == (e = t.__breakpoints) ? void 0 : e.get(r)) ? void 0 : o.minW) ? n : r;
                    return {
                        [`@media screen and (min-width: ${a})`]: {
                            display: "none"
                        }
                    }
                }
            },
            hideBelow: {
                scale: "breakpoints",
                transform: (r, t) => {
                    var e, o, n;
                    let a = null != (n = null == (o = null == (e = t.__breakpoints) ? void 0 : e.get(r)) ? void 0 : o._minW) ? n : r;
                    return {
                        [`@media screen and (max-width: ${a})`]: {
                            display: "none"
                        }
                    }
                }
            },
            verticalAlign: !0,
            boxSizing: !0,
            boxDecorationBreak: !0,
            float: w.propT("float", R.float),
            objectFit: !0,
            objectPosition: !0,
            visibility: !0,
            isolation: !0
        };
        Object.assign(z, {
            w: z.width,
            h: z.height,
            minW: z.minWidth,
            maxW: z.maxWidth,
            minH: z.minHeight,
            maxH: z.maxHeight,
            overscroll: z.overscrollBehavior,
            overscrollX: z.overscrollBehaviorX,
            overscrollY: z.overscrollBehaviorY
        });
        var O = {
            listStyleType: !0,
            listStylePosition: !0,
            listStylePos: w.prop("listStylePosition"),
            listStyleImage: !0,
            listStyleImg: w.prop("listStyleImage")
        }
          , W = (r => {
            let t = new WeakMap;
            return (e, o, n, a) => {
                if (void 0 === e)
                    return r(e, o, n);
                t.has(e) || t.set(e, new Map);
                let i = t.get(e);
                if (i.has(o))
                    return i.get(o);
                let l = r(e, o, n, a);
                return i.set(o, l),
                l
            }
        }
        )(function(r, t, e, o) {
            let n = "string" == typeof t ? t.split(".") : [t];
            for (o = 0; o < n.length && r; o += 1)
                r = r[n[o]];
            return void 0 === r ? e : r
        })
          , P = {
            border: "0px",
            clip: "rect(0, 0, 0, 0)",
            width: "1px",
            height: "1px",
            margin: "-1px",
            padding: "0px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "absolute"
        }
          , A = {
            position: "static",
            width: "auto",
            height: "auto",
            clip: "auto",
            padding: "0",
            margin: "0",
            overflow: "visible",
            whiteSpace: "normal"
        }
          , L = (r, t, e) => {
            let o = {}
              , n = W(r, t, {});
            for (let r in n)
                r in e && null != e[r] || (o[r] = n[r]);
            return o
        }
          , M = {
            position: !0,
            pos: w.prop("position"),
            zIndex: w.prop("zIndex", "zIndices"),
            inset: w.spaceT("inset"),
            insetX: w.spaceT(["left", "right"]),
            insetInline: w.spaceT("insetInline"),
            insetY: w.spaceT(["top", "bottom"]),
            insetBlock: w.spaceT("insetBlock"),
            top: w.spaceT("top"),
            insetBlockStart: w.spaceT("insetBlockStart"),
            bottom: w.spaceT("bottom"),
            insetBlockEnd: w.spaceT("insetBlockEnd"),
            left: w.spaceT("left"),
            insetInlineStart: w.logical({
                scale: "space",
                property: {
                    ltr: "left",
                    rtl: "right"
                }
            }),
            right: w.spaceT("right"),
            insetInlineEnd: w.logical({
                scale: "space",
                property: {
                    ltr: "right",
                    rtl: "left"
                }
            })
        };
        Object.assign(M, {
            insetStart: M.insetInlineStart,
            insetEnd: M.insetInlineEnd
        });
        var F = {
            ring: {
                transform: R.ring
            },
            ringColor: w.colors("--chakra-ring-color"),
            ringOffset: w.prop("--chakra-ring-offset-width"),
            ringOffsetColor: w.colors("--chakra-ring-offset-color"),
            ringInset: w.prop("--chakra-ring-inset")
        }
          , D = {
            margin: w.spaceT("margin"),
            marginTop: w.spaceT("marginTop"),
            marginBlockStart: w.spaceT("marginBlockStart"),
            marginRight: w.spaceT("marginRight"),
            marginInlineEnd: w.spaceT("marginInlineEnd"),
            marginBottom: w.spaceT("marginBottom"),
            marginBlockEnd: w.spaceT("marginBlockEnd"),
            marginLeft: w.spaceT("marginLeft"),
            marginInlineStart: w.spaceT("marginInlineStart"),
            marginX: w.spaceT(["marginInlineStart", "marginInlineEnd"]),
            marginInline: w.spaceT("marginInline"),
            marginY: w.spaceT(["marginTop", "marginBottom"]),
            marginBlock: w.spaceT("marginBlock"),
            padding: w.space("padding"),
            paddingTop: w.space("paddingTop"),
            paddingBlockStart: w.space("paddingBlockStart"),
            paddingRight: w.space("paddingRight"),
            paddingBottom: w.space("paddingBottom"),
            paddingBlockEnd: w.space("paddingBlockEnd"),
            paddingLeft: w.space("paddingLeft"),
            paddingInlineStart: w.space("paddingInlineStart"),
            paddingInlineEnd: w.space("paddingInlineEnd"),
            paddingX: w.space(["paddingInlineStart", "paddingInlineEnd"]),
            paddingInline: w.space("paddingInline"),
            paddingY: w.space(["paddingTop", "paddingBottom"]),
            paddingBlock: w.space("paddingBlock")
        };
        Object.assign(D, {
            m: D.margin,
            mt: D.marginTop,
            mr: D.marginRight,
            me: D.marginInlineEnd,
            marginEnd: D.marginInlineEnd,
            mb: D.marginBottom,
            ml: D.marginLeft,
            ms: D.marginInlineStart,
            marginStart: D.marginInlineStart,
            mx: D.marginX,
            my: D.marginY,
            p: D.padding,
            pt: D.paddingTop,
            py: D.paddingY,
            px: D.paddingX,
            pb: D.paddingBottom,
            pl: D.paddingLeft,
            ps: D.paddingInlineStart,
            paddingStart: D.paddingInlineStart,
            pr: D.paddingRight,
            pe: D.paddingInlineEnd,
            paddingEnd: D.paddingInlineEnd
        });
        var Y = {
            textDecorationColor: w.colors("textDecorationColor"),
            textDecoration: !0,
            textDecor: {
                property: "textDecoration"
            },
            textDecorationLine: !0,
            textDecorationStyle: !0,
            textDecorationThickness: !0,
            textUnderlineOffset: !0,
            textShadow: w.shadows("textShadow")
        }
          , X = {
            clipPath: !0,
            transform: w.propT("transform", R.transform),
            transformOrigin: !0,
            translateX: w.spaceT("--chakra-translate-x"),
            translateY: w.spaceT("--chakra-translate-y"),
            skewX: w.degreeT("--chakra-skew-x"),
            skewY: w.degreeT("--chakra-skew-y"),
            scaleX: w.prop("--chakra-scale-x"),
            scaleY: w.prop("--chakra-scale-y"),
            scale: w.prop(["--chakra-scale-x", "--chakra-scale-y"]),
            rotate: w.degreeT("--chakra-rotate")
        }
          , H = {
            transition: !0,
            transitionDelay: !0,
            animation: !0,
            willChange: !0,
            transitionDuration: w.prop("transitionDuration", "transition.duration"),
            transitionProperty: w.prop("transitionProperty", "transition.property"),
            transitionTimingFunction: w.prop("transitionTimingFunction", "transition.easing")
        }
          , G = {
            fontFamily: w.prop("fontFamily", "fonts"),
            fontSize: w.prop("fontSize", "fontSizes", R.px),
            fontWeight: w.prop("fontWeight", "fontWeights"),
            lineHeight: w.prop("lineHeight", "lineHeights"),
            letterSpacing: w.prop("letterSpacing", "letterSpacings"),
            textAlign: !0,
            fontStyle: !0,
            textIndent: !0,
            wordBreak: !0,
            overflowWrap: !0,
            textOverflow: !0,
            textTransform: !0,
            whiteSpace: !0,
            isTruncated: {
                transform(r) {
                    if (!0 === r)
                        return {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }
                }
            },
            noOfLines: {
                static: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "var(--chakra-line-clamp)"
                },
                property: "--chakra-line-clamp"
            }
        }
          , V = {
            scrollBehavior: !0,
            scrollSnapAlign: !0,
            scrollSnapStop: !0,
            scrollSnapType: !0,
            scrollMargin: w.spaceT("scrollMargin"),
            scrollMarginTop: w.spaceT("scrollMarginTop"),
            scrollMarginBottom: w.spaceT("scrollMarginBottom"),
            scrollMarginLeft: w.spaceT("scrollMarginLeft"),
            scrollMarginRight: w.spaceT("scrollMarginRight"),
            scrollMarginX: w.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
            scrollMarginY: w.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
            scrollPadding: w.spaceT("scrollPadding"),
            scrollPaddingTop: w.spaceT("scrollPaddingTop"),
            scrollPaddingBottom: w.spaceT("scrollPaddingBottom"),
            scrollPaddingLeft: w.spaceT("scrollPaddingLeft"),
            scrollPaddingRight: w.spaceT("scrollPaddingRight"),
            scrollPaddingX: w.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
            scrollPaddingY: w.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
        };
        function K(r) {
            return (0,
            o.Kn)(r) && r.reference ? r.reference : String(r)
        }
        var U = (r, ...t) => t.map(K).join(` ${r} `).replace(/calc/g, "")
          , N = (...r) => `calc(${U("+", ...r)})`
          , Z = (...r) => `calc(${U("-", ...r)})`
          , Q = (...r) => `calc(${U("*", ...r)})`
          , q = (...r) => `calc(${U("/", ...r)})`
          , J = r => {
            let t = K(r);
            return null == t || Number.isNaN(parseFloat(t)) ? Q(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : `-${t}`
        }
          , rr = Object.assign(r => ({
            add: (...t) => rr(N(r, ...t)),
            subtract: (...t) => rr(Z(r, ...t)),
            multiply: (...t) => rr(Q(r, ...t)),
            divide: (...t) => rr(q(r, ...t)),
            negate: () => rr(J(r)),
            toString: () => r.toString()
        }), {
            add: N,
            subtract: Z,
            multiply: Q,
            divide: q,
            negate: J
        });
        function rt(r, t, e) {
            let o = function(r, t="") {
                var e;
                return ((e = function(r, t="-") {
                    return r.replace(/\s+/g, t)
                }(`--${(function(r, t="") {
                    return [t, r].filter(Boolean).join("-")
                }
                )(r, t)}`.toString())).includes("\\.") ? e : Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.")).replace(/[!-,/:-@[-^`{-~]/g, "\\$&")
            }(r, e);
            return {
                variable: o,
                reference: `var(${o}${t ? `, ${t}` : ""})`
            }
        }
        function re(r, t) {
            let e = {};
            for (let o of t) {
                if (Array.isArray(o)) {
                    let[t,n] = o;
                    e[t] = rt(`${r}-${t}`, n);
                    continue
                }
                e[o] = rt(`${r}-${o}`)
            }
            return e
        }
        function ro(r) {
            if (null == r)
                return r;
            let {unitless: t} = function(r) {
                let t = parseFloat(r.toString())
                  , e = r.toString().replace(String(t), "");
                return {
                    unitless: !e,
                    value: t,
                    unit: e
                }
            }(r);
            return t || "number" == typeof r ? `${r}px` : r
        }
        var rn = (r, t) => parseInt(r[1], 10) > parseInt(t[1], 10) ? 1 : -1
          , ra = r => Object.fromEntries(Object.entries(r).sort(rn));
        function ri(r) {
            let t = ra(r);
            return Object.assign(Object.values(t), t)
        }
        function rl(r) {
            var t;
            return r ? "number" == typeof (r = null != (t = ro(r)) ? t : r) ? `${r + -.02}` : r.replace(/(\d+\.?\d*)/u, r => `${parseFloat(r) + -.02}`) : r
        }
        function rd(r, t) {
            let e = ["@media screen"];
            return r && e.push("and", `(min-width: ${ro(r)})`),
            t && e.push("and", `(max-width: ${ro(t)})`),
            e.join(" ")
        }
        var rs = (r, t) => `${r}:hover ${t}, ${r}[data-hover] ${t}`
          , rc = (r, t) => `${r}:focus ${t}, ${r}[data-focus] ${t}`
          , ru = (r, t) => `${r}:focus-visible ${t}`
          , rp = (r, t) => `${r}:focus-within ${t}`
          , rf = (r, t) => `${r}:active ${t}, ${r}[data-active] ${t}`
          , rh = (r, t) => `${r}:disabled ${t}, ${r}[data-disabled] ${t}`
          , rg = (r, t) => `${r}:invalid ${t}, ${r}[data-invalid] ${t}`
          , rb = (r, t) => `${r}:checked ${t}, ${r}[data-checked] ${t}`
          , rv = r => ry(t => r(t, "&"), "[role=group]", "[data-group]", ".group")
          , rm = r => ry(t => r(t, "~ &"), "[data-peer]", ".peer")
          , ry = (r, ...t) => t.map(r).join(", ")
          , rk = {
            _hover: "&:hover, &[data-hover]",
            _active: "&:active, &[data-active]",
            _focus: "&:focus, &[data-focus]",
            _highlighted: "&[data-highlighted]",
            _focusWithin: "&:focus-within",
            _focusVisible: "&:focus-visible, &[data-focus-visible]",
            _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
            _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
            _before: "&::before",
            _after: "&::after",
            _empty: "&:empty",
            _expanded: "&[aria-expanded=true], &[data-expanded]",
            _checked: "&[aria-checked=true], &[data-checked]",
            _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
            _pressed: "&[aria-pressed=true], &[data-pressed]",
            _invalid: "&[aria-invalid=true], &[data-invalid]",
            _valid: "&[data-valid], &[data-state=valid]",
            _loading: "&[data-loading], &[aria-busy=true]",
            _selected: "&[aria-selected=true], &[data-selected]",
            _hidden: "&[hidden], &[data-hidden]",
            _autofill: "&:-webkit-autofill",
            _even: "&:nth-of-type(even)",
            _odd: "&:nth-of-type(odd)",
            _first: "&:first-of-type",
            _firstLetter: "&::first-letter",
            _last: "&:last-of-type",
            _notFirst: "&:not(:first-of-type)",
            _notLast: "&:not(:last-of-type)",
            _visited: "&:visited",
            _activeLink: "&[aria-current=page]",
            _activeStep: "&[aria-current=step]",
            _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
            _groupHover: rv(rs),
            _peerHover: rm(rs),
            _groupFocus: rv(rc),
            _peerFocus: rm(rc),
            _groupFocusVisible: rv(ru),
            _peerFocusVisible: rm(ru),
            _groupActive: rv(rf),
            _peerActive: rm(rf),
            _groupDisabled: rv(rh),
            _peerDisabled: rm(rh),
            _groupInvalid: rv(rg),
            _peerInvalid: rm(rg),
            _groupChecked: rv(rb),
            _peerChecked: rm(rb),
            _groupFocusWithin: rv(rp),
            _peerFocusWithin: rm(rp),
            _peerPlaceholderShown: rm( (r, t) => `${r}:placeholder-shown ${t}`),
            _placeholder: "&::placeholder",
            _placeholderShown: "&:placeholder-shown",
            _fullScreen: "&:fullscreen",
            _selection: "&::selection",
            _rtl: "[dir=rtl] &, &[dir=rtl]",
            _ltr: "[dir=ltr] &, &[dir=ltr]",
            _mediaDark: "@media (prefers-color-scheme: dark)",
            _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
            _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
            _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
            _horizontal: "&[data-orientation=horizontal]",
            _vertical: "&[data-orientation=vertical]"
        }
          , rS = Object.keys(rk);
        function r_(r, t) {
            return rt(String(r).replace(/\./g, "-"), void 0, t)
        }
        function rR(r, t, e={}) {
            let {stop: o, getKey: n} = e;
            return function r(e, a=[]) {
                var i;
                if ("object" == typeof e && null != e && !Array.isArray(e) || Array.isArray(e)) {
                    let l = {};
                    for (let[d,s] of Object.entries(e)) {
                        let c = null != (i = null == n ? void 0 : n(d)) ? i : d
                          , u = [...a, c];
                        if (null == o ? void 0 : o(e, u))
                            return t(e, a);
                        l[c] = r(s, u)
                    }
                    return l
                }
                return t(e, a)
            }(r)
        }
        var rw = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "gradients", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur", "breakpoints"]
          , rT = r => rS.includes(r) || "default" === r;
        function rB(r) {
            var t;
            let e = function(r) {
                let {__cssMap: t, __cssVars: e, __breakpoints: o, ...n} = r;
                return n
            }(r)
              , {cssMap: a, cssVars: i} = function(r, t) {
                let e = {}
                  , a = {};
                for (let[i,l] of Object.entries(r)) {
                    let {isSemantic: d, value: s} = l
                      , {variable: c, reference: u} = r_(i, null == t ? void 0 : t.cssVarPrefix);
                    if (!d) {
                        if (i.startsWith("space")) {
                            let[r,...t] = i.split(".")
                              , e = `${r}.-${t.join(".")}`
                              , o = rr.negate(s)
                              , n = rr.negate(u);
                            a[e] = {
                                value: o,
                                var: c,
                                varRef: n
                            }
                        }
                        e[c] = s,
                        a[i] = {
                            value: s,
                            var: c,
                            varRef: u
                        };
                        continue
                    }
                    let p = e => {
                        let o = [String(i).split(".")[0], e].join(".");
                        if (!r[o])
                            return e;
                        let {reference: n} = r_(o, null == t ? void 0 : t.cssVarPrefix);
                        return n
                    }
                    ;
                    e = n(e, Object.entries((0,
                    o.Kn)(s) ? s : {
                        default: s
                    }).reduce( (r, [t,e]) => {
                        var o;
                        if (!e)
                            return r;
                        let n = p(`${e}`);
                        return "default" === t ? r[c] = n : r[null != (o = null == rk ? void 0 : rk[t]) ? o : t] = {
                            [c]: n
                        },
                        r
                    }
                    , {})),
                    a[i] = {
                        value: u,
                        var: c,
                        varRef: u
                    }
                }
                return {
                    cssVars: e,
                    cssMap: a
                }
            }(function({tokens: r, semanticTokens: t}) {
                let e = {};
                return rR(r, (r, t) => {
                    null != r && (e[t.join(".")] = {
                        isSemantic: !1,
                        value: r
                    })
                }
                ),
                rR(t, (r, t) => {
                    null != r && (e[t.join(".")] = {
                        isSemantic: !0,
                        value: r
                    })
                }
                , {
                    stop: r => Object.keys(r).every(rT)
                }),
                e
            }({
                tokens: function(r, t) {
                    let e = {};
                    for (let o of t)
                        o in r && (e[o] = r[o]);
                    return e
                }(e, rw),
                semanticTokens: e.semanticTokens
            }), {
                cssVarPrefix: null == (t = e.config) ? void 0 : t.cssVarPrefix
            });
            return Object.assign(e, {
                __cssVars: {
                    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
                    "--chakra-ring-offset-width": "0px",
                    "--chakra-ring-offset-color": "#fff",
                    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
                    "--chakra-ring-offset-shadow": "0 0 #0000",
                    "--chakra-ring-shadow": "0 0 #0000",
                    "--chakra-space-x-reverse": "0",
                    "--chakra-space-y-reverse": "0",
                    ...i
                },
                __cssMap: a,
                __breakpoints: function(r) {
                    var t;
                    if (!r)
                        return null;
                    r.base = null != (t = r.base) ? t : "0px";
                    let e = ri(r)
                      , n = Object.entries(r).sort(rn).map( ([r,t], e, o) => {
                        var n;
                        let[,a] = null != (n = o[e + 1]) ? n : [];
                        return a = parseFloat(a) > 0 ? rl(a) : void 0,
                        {
                            _minW: rl(t),
                            breakpoint: r,
                            minW: t,
                            maxW: a,
                            maxWQuery: rd(null, a),
                            minWQuery: rd(t),
                            minMaxQuery: rd(t, a)
                        }
                    }
                    )
                      , a = new Set(Object.keys(ra(r)))
                      , i = Array.from(a.values());
                    return {
                        keys: a,
                        normalized: e,
                        isResponsive(r) {
                            let t = Object.keys(r);
                            return t.length > 0 && t.every(r => a.has(r))
                        },
                        asObject: ra(r),
                        asArray: ri(r),
                        details: n,
                        get: r => n.find(t => t.breakpoint === r),
                        media: [null, ...e.map(r => rd(r)).slice(1)],
                        toArrayValue(r) {
                            if (!(0,
                            o.Kn)(r))
                                throw Error("toArrayValue: value must be an object");
                            let t = i.map(t => {
                                var e;
                                return null != (e = r[t]) ? e : null
                            }
                            );
                            for (; null === function(r) {
                                let t = null == r ? 0 : r.length;
                                return t ? r[t - 1] : void 0
                            }(t); )
                                t.pop();
                            return t
                        },
                        toObjectValue(r) {
                            if (!Array.isArray(r))
                                throw Error("toObjectValue: value must be an array");
                            return r.reduce( (r, t, e) => {
                                let o = i[e];
                                return null != o && null != t && (r[o] = t),
                                r
                            }
                            , {})
                        }
                    }
                }(e.breakpoints)
            }),
            e
        }
        var rx = n({}, T, B, x, E, z, I, F, C, $, {
            srOnly: {
                transform: r => !0 === r ? P : "focusable" === r ? A : {}
            },
            layerStyle: {
                processResult: !0,
                transform: (r, t, e) => L(t, `layerStyles.${r}`, e)
            },
            textStyle: {
                processResult: !0,
                transform: (r, t, e) => L(t, `textStyles.${r}`, e)
            },
            apply: {
                processResult: !0,
                transform: (r, t, e) => L(t, r, e)
            }
        }, M, j, D, V, G, Y, X, O, H)
          , rj = Object.keys(Object.assign({}, D, z, E, $, M))
          , rI = [...Object.keys(rx), ...rS]
          , rE = {
            ...rx,
            ...rk
        }
          , r$ = r => r in rE
          , rC = r => t => {
            if (!t.__breakpoints)
                return r;
            let {isResponsive: e, toArrayValue: n, media: a} = t.__breakpoints
              , i = {};
            for (let l in r) {
                let d = (0,
                o.Pu)(r[l], t);
                if (null == d)
                    continue;
                if (!Array.isArray(d = (0,
                o.Kn)(d) && e(d) ? n(d) : d)) {
                    i[l] = d;
                    continue
                }
                let s = d.slice(0, a.length).length;
                for (let r = 0; r < s; r += 1) {
                    let t = null == a ? void 0 : a[r];
                    if (!t) {
                        i[l] = d[r];
                        continue
                    }
                    i[t] = i[t] || {},
                    null != d[r] && (i[t][l] = d[r])
                }
            }
            return i
        }
          , rz = (r, t) => r.startsWith("--") && "string" == typeof t && !/^var\(--.+\)$/.test(t)
          , rO = (r, t) => {
            var e, o;
            if (null == t)
                return t;
            let n = t => {
                var e, o;
                return null == (o = null == (e = r.__cssMap) ? void 0 : e[t]) ? void 0 : o.varRef
            }
              , a = r => {
                var t;
                return null != (t = n(r)) ? t : r
            }
              , [i,l] = function(r) {
                let t = []
                  , e = ""
                  , o = !1;
                for (let n = 0; n < r.length; n++) {
                    let a = r[n];
                    "(" === a ? (o = !0,
                    e += a) : ")" === a ? (o = !1,
                    e += a) : "," !== a || o ? e += a : (t.push(e),
                    e = "")
                }
                return (e = e.trim()) && t.push(e),
                t
            }(t);
            return t = null != (o = null != (e = n(i)) ? e : a(l)) ? o : a(t)
        }
          , rW = r => t => (function(r) {
            let {configs: t={}, pseudos: e={}, theme: a} = r
              , i = (r, l=!1) => {
                var d, s, c;
                let u = (0,
                o.Pu)(r, a)
                  , p = rC(u)(a)
                  , f = {};
                for (let r in p) {
                    let h = p[r]
                      , g = (0,
                    o.Pu)(h, a);
                    r in e && (r = e[r]),
                    rz(r, g) && (g = rO(a, g));
                    let b = t[r];
                    if (!0 === b && (b = {
                        property: r
                    }),
                    (0,
                    o.Kn)(g)) {
                        f[r] = null != (d = f[r]) ? d : {},
                        f[r] = n({}, f[r], i(g, !0));
                        continue
                    }
                    let v = null != (c = null == (s = null == b ? void 0 : b.transform) ? void 0 : s.call(b, g, a, u)) ? c : g;
                    v = (null == b ? void 0 : b.processResult) ? i(v, !0) : v;
                    let m = (0,
                    o.Pu)(null == b ? void 0 : b.property, a);
                    if (!l && (null == b ? void 0 : b.static) && (f = n({}, f, (0,
                    o.Pu)(b.static, a))),
                    m && Array.isArray(m)) {
                        for (let r of m)
                            f[r] = v;
                        continue
                    }
                    if (m) {
                        "&" === m && (0,
                        o.Kn)(v) ? f = n({}, f, v) : f[m] = v;
                        continue
                    }
                    if ((0,
                    o.Kn)(v)) {
                        f = n({}, f, v);
                        continue
                    }
                    f[r] = v
                }
                return f
            }
            ;
            return i
        }
        )({
            theme: t,
            pseudos: rk,
            configs: rx
        })(r);
        function rP(r) {
            return r
        }
        function rA(r) {
            return r
        }
        function rL(r) {
            return {
                definePartsStyle: r => r,
                defineMultiStyleConfig: t => ({
                    parts: r,
                    ...t
                })
            }
        }
        function rM(r) {
            return t => {
                var e;
                let {variant: a, size: i, theme: l} = t
                  , d = function(r) {
                    let t = r.__breakpoints;
                    return function(r, e, a, i) {
                        var l, d, s;
                        if (!t)
                            return;
                        let c = {}
                          , u = (s = t.toArrayValue,
                        Array.isArray(a) ? a : (0,
                        o.Kn)(a) ? s(a) : null != a ? [a] : void 0);
                        if (!u)
                            return c;
                        let p = u.length
                          , f = 1 === p
                          , h = !!r.parts;
                        for (let a = 0; a < p; a++) {
                            let s = t.details[a]
                              , p = t.details[function(r, t) {
                                for (let e = t + 1; e < r.length; e++)
                                    if (null != r[e])
                                        return e;
                                return -1
                            }(u, a)]
                              , g = rd(s.minW, null == p ? void 0 : p._minW)
                              , b = (0,
                            o.Pu)(null == (l = r[e]) ? void 0 : l[u[a]], i);
                            if (b) {
                                if (h) {
                                    null == (d = r.parts) || d.forEach(r => {
                                        n(c, {
                                            [r]: f ? b[r] : {
                                                [g]: b[r]
                                            }
                                        })
                                    }
                                    );
                                    continue
                                }
                                if (!h) {
                                    f ? n(c, b) : c[g] = b;
                                    continue
                                }
                                c[g] = b
                            }
                        }
                        return c
                    }
                }(l);
                return n({}, (0,
                o.Pu)(null != (e = r.baseStyle) ? e : {}, t), d(r, "sizes", i, t), d(r, "variants", a, t))
            }
        }
        function rF(r, t, e) {
            var o, n, a;
            return null != (a = null == (n = null == (o = r.__cssMap) ? void 0 : o[`${t}.${e}`]) ? void 0 : n.varRef) ? a : e
        }
        function rD(r) {
            return function(r, t=[]) {
                let e = Object.assign({}, r);
                for (let r of t)
                    r in e && delete e[r];
                return e
            }(r, ["styleConfig", "size", "variant", "colorScheme"])
        }
    },
    61193: function(r, t, e) {
        "use strict";
        e.d(t, {
            m: function() {
                return b
            }
        });
        var o, n = e(83707), a = new Set([...n.cC, "textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]), i = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
        function l(r) {
            return i.has(r) || !a.has(r)
        }
        var d = e(14123)
          , s = e(62626)
          , c = e(99708)
          , u = e(85968)
          , p = e(2265)
          , f = null != (o = u.Z.default) ? o : u.Z
          , h = r => {
            let {baseStyle: t} = r;
            return r => {
                let {theme: e, css: o, __css: a, sx: i, ...l} = r
                  , d = (0,
                s.lw)(l, (r, t) => (0,
                n.ZR)(t))
                  , u = function(r, ...t) {
                    if (null == r)
                        throw TypeError("Cannot convert undefined or null to object");
                    let e = {
                        ...r
                    };
                    for (let r of t)
                        if (null != r)
                            for (let t in r)
                                Object.prototype.hasOwnProperty.call(r, t) && (t in e && delete e[t],
                                e[t] = r[t]);
                    return e
                }({}, a, (0,
                c.Pu)(t, r), (0,
                s.YU)(d), i)
                  , p = (0,
                n.iv)(u)(r.theme);
                return o ? [p, o] : p
            }
        }
        ;
        function g(r, t) {
            let {baseStyle: e, ...o} = null != t ? t : {};
            o.shouldForwardProp || (o.shouldForwardProp = l);
            let n = h({
                baseStyle: e
            })
              , a = f(r, o)(n);
            return p.forwardRef(function(r, t) {
                let {colorMode: e, forced: o} = (0,
                d.If)();
                return p.createElement(a, {
                    ref: t,
                    "data-theme": o ? e : void 0,
                    ...r
                })
            })
        }
        var b = function() {
            let r = new Map;
            return new Proxy(g,{
                apply: (r, t, e) => g(...e),
                get: (t, e) => (r.has(e) || r.set(e, g(e)),
                r.get(e))
            })
        }()
    },
    68973: function(r, t, e) {
        "use strict";
        e.d(t, {
            G: function() {
                return n
            }
        });
        var o = e(2265);
        function n(r) {
            return (0,
            o.forwardRef)(r)
        }
    },
    99708: function(r, t, e) {
        "use strict";
        function o(r, ...t) {
            return "function" == typeof r ? r(...t) : r
        }
        function n(...r) {
            return function(t) {
                r.some(r => (null == r || r(t),
                null == t ? void 0 : t.defaultPrevented))
            }
        }
        e.d(t, {
            v0: function() {
                return n
            },
            Pu: function() {
                return o
            }
        })
    },
    62626: function(r, t, e) {
        "use strict";
        function o(r, t) {
            let e = {};
            return Object.keys(r).forEach(o => {
                t.includes(o) || (e[o] = r[o])
            }
            ),
            e
        }
        e.d(t, {
            CE: function() {
                return o
            },
            Wf: function() {
                return n
            },
            YU: function() {
                return i
            },
            lw: function() {
                return a
            }
        }),
        e(1314);
        var n = (r => {
            let t = new WeakMap;
            return (e, o, n, a) => {
                if (void 0 === e)
                    return r(e, o, n);
                t.has(e) || t.set(e, new Map);
                let i = t.get(e);
                if (i.has(o))
                    return i.get(o);
                let l = r(e, o, n, a);
                return i.set(o, l),
                l
            }
        }
        )(function(r, t, e, o) {
            let n = "string" == typeof t ? t.split(".") : [t];
            for (o = 0; o < n.length && r; o += 1)
                r = r[n[o]];
            return void 0 === r ? e : r
        });
        function a(r, t) {
            let e = {};
            return Object.keys(r).forEach(o => {
                let n = r[o];
                t(n, o, r) && (e[o] = n)
            }
            ),
            e
        }
        var i = r => a(r, r => null != r)
    }
}]);
