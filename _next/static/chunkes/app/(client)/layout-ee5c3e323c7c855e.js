(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8496], {
    78876: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 46963)),
        Promise.resolve().then(n.t.bind(n, 40848, 23)),
        Promise.resolve().then(n.bind(n, 89988))
    },
    40257: function(e, t, n) {
        "use strict";
        var o, r;
        e.exports = (null == (o = n.g.process) ? void 0 : o.env) && "object" == typeof (null == (r = n.g.process) ? void 0 : r.env) ? n.g.process : n(44227)
    },
    44227: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, n, o, r = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function u() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function l(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (n) {
                            try {
                                return t.call(null, e, 0)
                            } catch (n) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : i
                        } catch (e) {
                            t = i
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : u
                        } catch (e) {
                            n = u
                        }
                    }();
                    var c = []
                      , s = !1
                      , f = -1;
                    function a() {
                        s && o && (s = !1,
                        o.length ? c = o.concat(c) : f = -1,
                        c.length && d())
                    }
                    function d() {
                        if (!s) {
                            var e = l(a);
                            s = !0;
                            for (var t = c.length; t; ) {
                                for (o = c,
                                c = []; ++f < t; )
                                    o && o[f].run();
                                f = -1,
                                t = c.length
                            }
                            o = null,
                            s = !1,
                            function(e) {
                                if (n === clearTimeout)
                                    return clearTimeout(e);
                                if ((n === u || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function p(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function y() {}
                    r.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        c.push(new p(e,t)),
                        1 !== c.length || s || l(d)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = y,
                    r.addListener = y,
                    r.once = y,
                    r.off = y,
                    r.removeListener = y,
                    r.removeAllListeners = y,
                    r.emit = y,
                    r.prependListener = y,
                    r.prependOnceListener = y,
                    r.listeners = function(e) {
                        return []
                    }
                    ,
                    r.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function o(e) {
                var r = n[e];
                if (void 0 !== r)
                    return r.exports;
                var i = n[e] = {
                    exports: {}
                }
                  , u = !0;
                try {
                    t[e](i, i.exports, o),
                    u = !1
                } finally {
                    u && delete n[e]
                }
                return i.exports
            }
            o.ab = "//";
            var r = o(229);
            e.exports = r
        }()
    },
    46963: function(e, t, n) {
        "use strict";
        n.d(t, {
            Chakra: function() {
                return l
            }
        });
        var o = n(57437)
          , r = n(78734)
          , i = n(74646);
        n(2265);
        let u = (0,
        n(64248).B1)({
            config: {
                initialColorMode: "light",
                useSystemColorMode: !1
            },
            colors: {
                transparent: "transparent",
                black: "#000",
                white: "#fff"
            },
            components: {
                Button: {
                    baseStyle: {
                        _focus: {
                            boxShadow: "none"
                        }
                    }
                }
            }
        });
        function l(e) {
            let {children: t} = e;
            return (0,
            o.jsx)(r.n, {
                children: (0,
                o.jsx)(i.x, {
                    theme: u,
                    children: t
                })
            })
        }
    },
    61859: function(e, t, n) {
        "use strict";
        n.d(t, {
            BL: function() {
                return r
            },
            Bs: function() {
                return c
            },
            JB: function() {
                return u
            },
            R0: function() {
                return i
            },
            Yg: function() {
                return l
            }
        });
        let o = (0,
        n(97281).oM)({
            name: "@@easyMode",
            initialState: !1,
            reducers: {
                updateEasyMode: (e, t) => t.payload,
                toggleEasyMode: (e, t) => !e,
                resetEasyMode: () => !1
            }
        })
          , {updateEasyMode: r, toggleEasyMode: i, resetEasyMode: u} = o.actions
          , l = o.reducer
          , c = e => e.easyMode
    },
    80960: function(e, t, n) {
        "use strict";
        n.d(t, {
            $W: function() {
                return p
            },
            DE: function() {
                return g
            },
            DS: function() {
                return c
            },
            G1: function() {
                return h
            },
            GW: function() {
                return s
            },
            JI: function() {
                return d
            },
            NG: function() {
                return u
            },
            PI: function() {
                return M
            },
            X1: function() {
                return m
            },
            Xf: function() {
                return k
            },
            _Q: function() {
                return b
            },
            hZ: function() {
                return y
            },
            jZ: function() {
                return l
            },
            oK: function() {
                return a
            },
            q3: function() {
                return v
            },
            tF: function() {
                return f
            }
        });
        var o = n(97281);
        let r = {
            blocks: [],
            tools: [],
            folder: null,
            isEditMobileMode: !1
        }
          , i = (0,
        o.oM)({
            name: "@@openBlock",
            initialState: r,
            reducers: {
                addBlockToOpen: (e, t) => {
                    e.blocks.includes(t.payload) || (e.blocks = [t.payload])
                }
                ,
                addBlockToolsToOpen: (e, t) => {
                    e.tools.includes(t.payload) || (e.tools = [t.payload])
                }
                ,
                openFolder: (e, t) => {
                    e.folder = t.payload
                }
                ,
                deleteBlockFromOpen: (e, t) => {
                    e.blocks = e.blocks.filter(e => {
                        if (e !== t.payload)
                            return e
                    }
                    )
                }
                ,
                deleteAllBlocksFromOpen: (e, t) => {
                    e.blocks = []
                }
                ,
                closeAllFolders: (e, t) => {
                    e.folder = null
                }
                ,
                deleteBlockToolsFromOpen: (e, t) => {
                    e.tools = e.tools.filter(e => {
                        if (e !== t.payload)
                            return e
                    }
                    )
                }
                ,
                deleteAllBlockToolsFromOpen: (e, t) => {
                    e.tools = []
                }
                ,
                setIsEditMobileMode: (e, t) => {
                    e.isEditMobileMode = t.payload
                }
                ,
                toggleIsEditMobileMode: (e, t) => {
                    e.isEditMobileMode = !e.isEditMobileMode
                }
                ,
                resetOpenBlocks: () => r
            }
        })
          , {addBlockToOpen: u, resetOpenBlocks: l, deleteBlockFromOpen: c, addBlockToolsToOpen: s, deleteBlockToolsFromOpen: f, deleteAllBlocksFromOpen: a, deleteAllBlockToolsFromOpen: d, openFolder: p, closeAllFolders: y, setIsEditMobileMode: m, toggleIsEditMobileMode: b} = i.actions
          , h = i.reducer
          , v = e => e.openBlocks.blocks
          , k = e => e.openBlocks.tools
          , g = e => e.openBlocks.folder
          , M = e => e.openBlocks.isEditMobileMode
    },
    89988: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return d
            }
        });
        var o = n(57437)
          , r = n(56722)
          , i = n(97281)
          , u = n(27699)
          , l = n(80960)
          , c = n(61859);
        let s = (0,
        r.UY)({
            currentInvite: u.OA,
            openBlocks: l.G1,
            easyMode: c.Yg
        })
          , f = (0,
        i.xC)({
            reducer: s,
            devTools: !1,
            middleware: e => e({
                thunk: {
                    extraArgument: {}
                },
                serializableCheck: !1
            })
        });
        var a = n(36520);
        function d(e) {
            let {children: t} = e;
            return (0,
            o.jsx)(a.Ji, {
                store: f,
                children: t
            })
        }
        n(2265)
    },
    40848: function() {},
    56127: function(e, t, n) {
        "use strict";
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function r(e, t, n) {
            var r;
            return (r = function(e, t) {
                if ("object" != o(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != o(r))
                        return r;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(t, "string"),
            (t = "symbol" == o(r) ? r : r + "")in e) ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    }
}, function(e) {
    e.O(0, [9003, 3665, 1779, 7259, 9956, 6305, 5706, 5968, 8885, 7336, 1362, 865, 3147, 7204, 3649, 4311, 2971, 2117, 1744], function() {
        return e(e.s = 78876)
    }),
    _N_E = e.O()
}
]);
