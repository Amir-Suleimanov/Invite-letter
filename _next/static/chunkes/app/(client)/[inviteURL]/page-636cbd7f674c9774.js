(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2088, 8667], {
    35117: function(t, e, a) {
        Promise.resolve().then(a.bind(a, 69672)),
        Promise.resolve().then(a.bind(a, 1406))
    },
    30166: function(t, e, a) {
        "use strict";
        a.d(e, {
            default: function() {
                return n.a
            }
        });
        var i = a(55775)
          , n = a.n(i)
    },
    99376: function(t, e, a) {
        "use strict";
        var i = a(35475);
        a.o(i, "useParams") && a.d(e, {
            useParams: function() {
                return i.useParams
            }
        }),
        a.o(i, "usePathname") && a.d(e, {
            usePathname: function() {
                return i.usePathname
            }
        }),
        a.o(i, "useRouter") && a.d(e, {
            useRouter: function() {
                return i.useRouter
            }
        }),
        a.o(i, "useSearchParams") && a.d(e, {
            useSearchParams: function() {
                return i.useSearchParams
            }
        }),
        a.o(i, "useServerInsertedHTML") && a.d(e, {
            useServerInsertedHTML: function() {
                return i.useServerInsertedHTML
            }
        })
    },
    48667: function(t, e, a) {
        "use strict";
        a.d(e, {
            default: function() {
                return n.a
            }
        });
        var i = a(88003)
          , n = a.n(i)
    },
    8221: function(t, e) {
        "use strict";
        let a;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var a in e)
                Object.defineProperty(t, a, {
                    enumerable: !0,
                    get: e[a]
                })
        }(e, {
            DOMAttributeNames: function() {
                return i
            },
            default: function() {
                return o
            },
            isEqualNode: function() {
                return l
            }
        });
        let i = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function n(t) {
            let {type: e, props: a} = t
              , n = document.createElement(e);
            for (let t in a) {
                if (!a.hasOwnProperty(t) || "children" === t || "dangerouslySetInnerHTML" === t || void 0 === a[t])
                    continue;
                let l = i[t] || t.toLowerCase();
                "script" === e && ("async" === l || "defer" === l || "noModule" === l) ? n[l] = !!a[t] : n.setAttribute(l, a[t])
            }
            let {children: l, dangerouslySetInnerHTML: o} = a;
            return o ? n.innerHTML = o.__html || "" : l && (n.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
            n
        }
        function l(t, e) {
            if (t instanceof HTMLElement && e instanceof HTMLElement) {
                let a = e.getAttribute("nonce");
                if (a && !t.getAttribute("nonce")) {
                    let i = e.cloneNode(!0);
                    return i.setAttribute("nonce", ""),
                    i.nonce = a,
                    a === t.nonce && t.isEqualNode(i)
                }
            }
            return t.isEqualNode(e)
        }
        function o() {
            return {
                mountedInstances: new Set,
                updateHead: t => {
                    let e = {};
                    t.forEach(t => {
                        if ("link" === t.type && t.props["data-optimized-fonts"]) {
                            if (document.querySelector('style[data-href="' + t.props["data-href"] + '"]'))
                                return;
                            t.props.href = t.props["data-href"],
                            t.props["data-href"] = void 0
                        }
                        let a = e[t.type] || [];
                        a.push(t),
                        e[t.type] = a
                    }
                    );
                    let i = e.title ? e.title[0] : null
                      , n = "";
                    if (i) {
                        let {children: t} = i.props;
                        n = "string" == typeof t ? t : Array.isArray(t) ? t.join("") : ""
                    }
                    n !== document.title && (document.title = n),
                    ["meta", "base", "link", "style", "script"].forEach(t => {
                        a(t, e[t] || [])
                    }
                    )
                }
            }
        }
        a = (t, e) => {
            let a = document.getElementsByTagName("head")[0]
              , i = a.querySelector("meta[name=next-head-count]")
              , o = Number(i.content)
              , r = [];
            for (let e = 0, a = i.previousElementSibling; e < o; e++,
            a = (null == a ? void 0 : a.previousElementSibling) || null) {
                var s;
                (null == a ? void 0 : null == (s = a.tagName) ? void 0 : s.toLowerCase()) === t && r.push(a)
            }
            let d = e.map(n).filter(t => {
                for (let e = 0, a = r.length; e < a; e++)
                    if (l(r[e], t))
                        return r.splice(e, 1),
                        !1;
                return !0
            }
            );
            r.forEach(t => {
                var e;
                return null == (e = t.parentNode) ? void 0 : e.removeChild(t)
            }
            ),
            d.forEach(t => a.insertBefore(t, i)),
            i.content = (o - r.length + d.length).toString()
        }
        ,
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    63515: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var a in e)
                Object.defineProperty(t, a, {
                    enumerable: !0,
                    get: e[a]
                })
        }(e, {
            cancelIdleCallback: function() {
                return i
            },
            requestIdleCallback: function() {
                return a
            }
        });
        let a = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , i = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    88003: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var a in e)
                Object.defineProperty(t, a, {
                    enumerable: !0,
                    get: e[a]
                })
        }(e, {
            default: function() {
                return g
            },
            handleClientScriptLoad: function() {
                return y
            },
            initScriptLoader: function() {
                return f
            }
        });
        let i = a(60917)
          , n = a(52140)
          , l = a(57437)
          , o = i._(a(54887))
          , r = n._(a(2265))
          , s = a(48701)
          , d = a(8221)
          , p = a(63515)
          , c = new Map
          , u = new Set
          , b = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"]
          , m = t => {
            if (o.default.preinit) {
                t.forEach(t => {
                    o.default.preinit(t, {
                        as: "style"
                    })
                }
                );
                return
            }
            if ("undefined" != typeof window) {
                let e = document.head;
                t.forEach(t => {
                    let a = document.createElement("link");
                    a.type = "text/css",
                    a.rel = "stylesheet",
                    a.href = t,
                    e.appendChild(a)
                }
                )
            }
        }
          , v = t => {
            let {src: e, id: a, onLoad: i= () => {}
            , onReady: n=null, dangerouslySetInnerHTML: l, children: o="", strategy: r="afterInteractive", onError: s, stylesheets: p} = t
              , v = a || e;
            if (v && u.has(v))
                return;
            if (c.has(e)) {
                u.add(v),
                c.get(e).then(i, s);
                return
            }
            let y = () => {
                n && n(),
                u.add(v)
            }
              , f = document.createElement("script")
              , h = new Promise( (t, e) => {
                f.addEventListener("load", function(e) {
                    t(),
                    i && i.call(this, e),
                    y()
                }),
                f.addEventListener("error", function(t) {
                    e(t)
                })
            }
            ).catch(function(t) {
                s && s(t)
            });
            for (let[a,i] of (l ? (f.innerHTML = l.__html || "",
            y()) : o ? (f.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "",
            y()) : e && (f.src = e,
            c.set(e, h)),
            Object.entries(t))) {
                if (void 0 === i || b.includes(a))
                    continue;
                let t = d.DOMAttributeNames[a] || a.toLowerCase();
                f.setAttribute(t, i)
            }
            "worker" === r && f.setAttribute("type", "text/partytown"),
            f.setAttribute("data-nscript", r),
            p && m(p),
            document.body.appendChild(f)
        }
        ;
        function y(t) {
            let {strategy: e="afterInteractive"} = t;
            "lazyOnload" === e ? window.addEventListener("load", () => {
                (0,
                p.requestIdleCallback)( () => v(t))
            }
            ) : v(t)
        }
        function f(t) {
            t.forEach(y),
            [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(t => {
                let e = t.id || t.getAttribute("src");
                u.add(e)
            }
            )
        }
        function h(t) {
            let {id: e, src: a="", onLoad: i= () => {}
            , onReady: n=null, strategy: d="afterInteractive", onError: c, stylesheets: b, ...m} = t
              , {updateScripts: y, scripts: f, getIsSsr: h, appDir: g, nonce: k} = (0,
            r.useContext)(s.HeadManagerContext)
              , x = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)( () => {
                let t = e || a;
                x.current || (n && t && u.has(t) && n(),
                x.current = !0)
            }
            , [n, e, a]);
            let T = (0,
            r.useRef)(!1);
            if ((0,
            r.useEffect)( () => {
                !T.current && ("afterInteractive" === d ? v(t) : "lazyOnload" === d && ("complete" === document.readyState ? (0,
                p.requestIdleCallback)( () => v(t)) : window.addEventListener("load", () => {
                    (0,
                    p.requestIdleCallback)( () => v(t))
                }
                )),
                T.current = !0)
            }
            , [t, d]),
            ("beforeInteractive" === d || "worker" === d) && (y ? (f[d] = (f[d] || []).concat([{
                id: e,
                src: a,
                onLoad: i,
                onReady: n,
                onError: c,
                ...m
            }]),
            y(f)) : h && h() ? u.add(e || a) : h && !h() && v(t)),
            g) {
                if (b && b.forEach(t => {
                    o.default.preinit(t, {
                        as: "style"
                    })
                }
                ),
                "beforeInteractive" === d)
                    return a ? (o.default.preload(a, m.integrity ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: k,
                        crossOrigin: m.crossOrigin
                    } : {
                        as: "script",
                        nonce: k,
                        crossOrigin: m.crossOrigin
                    }),
                    (0,
                    l.jsx)("script", {
                        nonce: k,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([a, {
                                ...m,
                                id: e
                            }]) + ")"
                        }
                    })) : (m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html,
                    delete m.dangerouslySetInnerHTML),
                    (0,
                    l.jsx)("script", {
                        nonce: k,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...m,
                                id: e
                            }]) + ")"
                        }
                    }));
                "afterInteractive" === d && a && o.default.preload(a, m.integrity ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: k,
                    crossOrigin: m.crossOrigin
                } : {
                    as: "script",
                    nonce: k,
                    crossOrigin: m.crossOrigin
                })
            }
            return null
        }
        Object.defineProperty(h, "__nextScript", {
            value: !0
        });
        let g = h;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    55775: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let i = a(60917);
        a(57437),
        a(2265);
        let n = i._(a(15602));
        function l(t, e) {
            var a;
            let i = {
                loading: t => {
                    let {error: e, isLoading: a, pastDelay: i} = t;
                    return null
                }
            };
            "function" == typeof t && (i.loader = t);
            let l = {
                ...i,
                ...e
            };
            return (0,
            n.default)({
                ...l,
                modules: null == (a = l.loadableGenerated) ? void 0 : a.modules
            })
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    81523: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let i = a(18993);
        function n(t) {
            let {reason: e, children: a} = t;
            if ("undefined" == typeof window)
                throw new i.BailoutToCSRError(e);
            return a
        }
    },
    15602: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return d
            }
        });
        let i = a(57437)
          , n = a(2265)
          , l = a(81523)
          , o = a(70049);
        function r(t) {
            return {
                default: t && "default"in t ? t.default : t
            }
        }
        let s = {
            loader: () => Promise.resolve(r( () => null)),
            loading: null,
            ssr: !0
        }
          , d = function(t) {
            let e = {
                ...s,
                ...t
            }
              , a = (0,
            n.lazy)( () => e.loader().then(r))
              , d = e.loading;
            function p(t) {
                let r = d ? (0,
                i.jsx)(d, {
                    isLoading: !0,
                    pastDelay: !0,
                    error: null
                }) : null
                  , s = e.ssr ? (0,
                i.jsxs)(i.Fragment, {
                    children: ["undefined" == typeof window ? (0,
                    i.jsx)(o.PreloadCss, {
                        moduleIds: e.modules
                    }) : null, (0,
                    i.jsx)(a, {
                        ...t
                    })]
                }) : (0,
                i.jsx)(l.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0,
                    i.jsx)(a, {
                        ...t
                    })
                });
                return (0,
                i.jsx)(n.Suspense, {
                    fallback: r,
                    children: s
                })
            }
            return p.displayName = "LoadableComponent",
            p
        }
    },
    70049: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "PreloadCss", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let i = a(57437)
          , n = a(20544);
        function l(t) {
            let {moduleIds: e} = t;
            if ("undefined" != typeof window)
                return null;
            let a = (0,
            n.getExpectedRequestStore)("next/dynamic css")
              , l = [];
            if (a.reactLoadableManifest && e) {
                let t = a.reactLoadableManifest;
                for (let a of e) {
                    if (!t[a])
                        continue;
                    let e = t[a].files.filter(t => t.endsWith(".css"));
                    l.push(...e)
                }
            }
            return 0 === l.length ? null : (0,
            i.jsx)(i.Fragment, {
                children: l.map(t => (0,
                i.jsx)("link", {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: a.assetPrefix + "/_next/" + encodeURI(t),
                    as: "style"
                }, t))
            })
        }
    },
    71931: function(t, e, a) {
        "use strict";
        a.d(e, {
            Nr: function() {
                return r
            },
            y1: function() {
                return n
            }
        });
        var i = a(2265);
        function n(t, e, a) {
            var n = this
              , l = (0,
            i.useRef)(null)
              , o = (0,
            i.useRef)(0)
              , r = (0,
            i.useRef)(null)
              , s = (0,
            i.useRef)([])
              , d = (0,
            i.useRef)()
              , p = (0,
            i.useRef)()
              , c = (0,
            i.useRef)(t)
              , u = (0,
            i.useRef)(!0);
            (0,
            i.useEffect)(function() {
                c.current = t
            }, [t]);
            var b = !e && 0 !== e && "undefined" != typeof window;
            if ("function" != typeof t)
                throw TypeError("Expected a function");
            e = +e || 0;
            var m = !!(a = a || {}).leading
              , v = !("trailing"in a) || !!a.trailing
              , y = "maxWait"in a
              , f = y ? Math.max(+a.maxWait || 0, e) : null;
            return (0,
            i.useEffect)(function() {
                return u.current = !0,
                function() {
                    u.current = !1
                }
            }, []),
            (0,
            i.useMemo)(function() {
                var t = function(t) {
                    var e = s.current
                      , a = d.current;
                    return s.current = d.current = null,
                    o.current = t,
                    p.current = c.current.apply(a, e)
                }
                  , a = function(t, e) {
                    b && cancelAnimationFrame(r.current),
                    r.current = b ? requestAnimationFrame(t) : setTimeout(t, e)
                }
                  , i = function(t) {
                    if (!u.current)
                        return !1;
                    var a = t - l.current;
                    return !l.current || a >= e || a < 0 || y && t - o.current >= f
                }
                  , h = function(e) {
                    return r.current = null,
                    v && s.current ? t(e) : (s.current = d.current = null,
                    p.current)
                }
                  , g = function t() {
                    var n = Date.now();
                    if (i(n))
                        return h(n);
                    if (u.current) {
                        var r = e - (n - l.current);
                        a(t, y ? Math.min(r, f - (n - o.current)) : r)
                    }
                }
                  , k = function() {
                    var c = Date.now()
                      , b = i(c);
                    if (s.current = [].slice.call(arguments),
                    d.current = n,
                    l.current = c,
                    b) {
                        if (!r.current && u.current)
                            return o.current = l.current,
                            a(g, e),
                            m ? t(l.current) : p.current;
                        if (y)
                            return a(g, e),
                            t(l.current)
                    }
                    return r.current || a(g, e),
                    p.current
                };
                return k.cancel = function() {
                    r.current && (b ? cancelAnimationFrame(r.current) : clearTimeout(r.current)),
                    o.current = 0,
                    s.current = l.current = d.current = r.current = null
                }
                ,
                k.isPending = function() {
                    return !!r.current
                }
                ,
                k.flush = function() {
                    return r.current ? h(Date.now()) : p.current
                }
                ,
                k
            }, [m, y, e, f, v, b])
        }
        function l(t, e) {
            return t === e
        }
        function o(t) {
            return "function" == typeof t ? function() {
                return t
            }
            : t
        }
        function r(t, e, a) {
            var r, s, d = a && a.equalityFn || l, p = (s = (r = (0,
            i.useState)(o(t)))[1],
            [r[0], (0,
            i.useCallback)(function(t) {
                return s(o(t))
            }, [])]), c = p[0], u = p[1], b = n((0,
            i.useCallback)(function(t) {
                return u(t)
            }, [u]), e, a), m = (0,
            i.useRef)(t);
            return d(m.current, t) || (b(t),
            m.current = t),
            [c, b]
        }
    },
    69672: function(t, e, a) {
        "use strict";
        a.d(e, {
            default: function() {
                return d
            }
        });
        var i = a(57437)
          , n = a(48667)
          , l = a(2265)
          , o = a(99376)
          , r = a(80980)
          , s = a(69451);
        function d(t) {
            let {type: e} = t
              , a = (0,
            o.usePathname)()
              , d = (0,
            o.useSearchParams)()
              , p = function() {
                let[t,e] = (0,
                l.useState)(null)
                  , a = () => {
                    let t = new s.Z().getItem("BvF5BLQ2y5");
                    e(t ? JSON.parse(decodeURIComponent(atob(t))) : null)
                }
                ;
                return (0,
                l.useEffect)( () => {
                    a();
                    let t = () => {
                        a()
                    }
                    ;
                    return window.addEventListener("currentUserChanged", t),
                    () => {
                        window.removeEventListener("currentUserChanged", t)
                    }
                }
                , []),
                t
            }()
              , c = (0,
            r.Z)();
            return (0,
            l.useEffect)( () => {
                c("hit", window.location.href)
            }
            , [a, d]),
            (0,
            l.useEffect)( () => {
                c("params", {
                    type: e
                })
            }
            , [e]),
            (0,
            l.useEffect)( () => {
                if (p) {
                    let t = null == p ? void 0 : p.id;
                    t && c("userParams", {
                        userId: t
                    })
                }
            }
            , [p]),
            (0,
            i.jsxs)(l.Fragment, {
                children: [(0,
                i.jsx)(n.default, {
                    id: "yandex_metrika",
                    strategy: "afterInteractive",
                    children: '\n          <!-- Yandex.Metrika counter -->\n           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n           m[i].l=1*new Date();\n           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n           \n           ym('.concat("96422774", ', "init", {\n              defer:true,\n              clickmap:true,\n              trackLinks:true,\n              accurateTrackBounce:true,\n              webvisor:true\n           });\n          <!-- /Yandex.Metrika counter -->\n        ')
                }), (0,
                i.jsx)("noscript", {
                    children: (0,
                    i.jsx)("div", {
                        children: (0,
                        i.jsx)("img", {
                            src: "https://mc.yandex.ru/watch/96422774",
                            style: {
                                position: "absolute",
                                left: "-9999px"
                            },
                            alt: ""
                        })
                    })
                })]
            })
        }
    },
    80980: function(t, e, a) {
        "use strict";
        a.d(e, {
            Z: function() {
                return n
            }
        });
        var i = a(2265);
        function n() {
            return (0,
            i.useCallback)( (t, e) => {
                let a = "96422774";
                a && new Promise( (t, e) => {
                    let a = 0
                      , i = () => {
                        let n = window.ym;
                        n ? t(n) : a < 5 ? (a += 1,
                        setTimeout(i, 500)) : e(Error("YM not found"))
                    }
                    ;
                    i()
                }
                ).then(i => {
                    i(a, t, e)
                }
                ).catch(t => {
                    console.error(t)
                }
                )
            }
            , [])
        }
    },
    75565: function(t, e) {
        "use strict";
        e.Z = (t, e) => {
            window.parent.postMessage({
                type: "clickedByBlock",
                blockId: t,
                folderId: e
            }, "*")
        }
    },
    86237: function(t, e, a) {
        "use strict";
        a.d(e, {
            Z: function() {
                return n
            },
            r: function() {
                return i
            }
        });
        let i = [{
            path: "/templates/flexible/images/backgrounds/1.jpg",
            value: "1"
        }, {
            path: "/templates/flexible/images/backgrounds/2.jpg",
            value: "2"
        }, {
            path: "/templates/flexible/images/backgrounds/3.jpg",
            value: "3"
        }, {
            path: "/templates/flexible/images/backgrounds/4.jpg",
            value: "4"
        }, {
            path: "/templates/flexible/images/backgrounds/5.jpg",
            value: "5"
        }];
        function n(t) {
            for (let e = 0; e < i.length; e++)
                if (i[e].value === t)
                    return i[e].path;
            return ""
        }
    },
    1406: function(t, e, a) {
        "use strict";
        a.d(e, {
            default: function() {
                return tE
            }
        });
        var i = a(57437)
          , n = a(2265)
          , l = a(99376);
        a(95218),
        a(28002);
        var o = a(3659)
          , r = a(22053)
          , s = a(86827)
          , d = a(50301)
          , p = a(85968)
          , c = a(71724)
          , u = a(54189);
        function b() {
            let t = (0,
            o._)(["\n  will-change: transform;\n  transform: translateZ(0);\n  animation-name: heartBeat;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n\n  @keyframes heartBeat {\n    0% {\n      transform: scale(none);\n    }\n    20% {\n      transform: scale(1.2);\n    }\n    30% {\n      transform: scale(1.05);\n    }\n    45% {\n      transform: scale(1.25);\n    }\n    50% {\n      transform: scale(none);\n    }\n    100% {\n      transform: scale(none);\n    }\n  }\n"]);
            return b = function() {
                return t
            }
            ,
            t
        }
        function m() {
            let t = (0,
            o._)(["\n  will-change: opacity, transform;\n  transform: translateZ(0);\n  animation-name: showText;\n  animation-duration: 0.35s;\n  animation-iteration-count: 1;\n\n  @keyframes showText {\n    0% {\n      opacity: 0;\n      transform: scale(0.8);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n"]);
            return m = function() {
                return t
            }
            ,
            t
        }
        let v = (0,
        p.Z)(d.Ng)(b())
          , y = (0,
        p.Z)(r.xu)(m());
        function f(t) {
            let {themeTemplate: e, className: a} = t;
            return (0,
            n.useEffect)( () => {
                "dark" === e && (document.documentElement.style.backgroundColor = u.Z.dark.background,
                document.body.classList.add("dark-theme-template"))
            }
            , [e]),
            (0,
            i.jsxs)(s.M, {
                w: "100vw",
                h: "100vh",
                bg: "light" === e ? u.Z.light.background : u.Z.dark.background,
                flexDirection: "column",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                children: [(0,
                i.jsx)(v, {
                    boxSize: "100px",
                    myFill: "light" === e ? u.Z.light.heart : u.Z.dark.heart
                }), (0,
                i.jsx)(y, {
                    className: a,
                    children: (0,
                    i.jsx)(c.Z, {
                        text: "Загрузка приглашения...",
                        align: "center",
                        fontSize: "1.1rem",
                        color: "light" === e ? u.Z.light.text : u.Z.dark.text,
                        font: "comfortaa"
                    })
                })]
            })
        }
        var h = a(90480)
          , g = a(36520)
          , k = a(27699)
          , x = a(3274)
          , T = () => {
            window.parent.postMessage({
                type: "getDataFromParent"
            }, "*")
        }
        ;
        function C(t) {
            let e = Array.from(document.getElementsByTagName("img"))
              , a = Array.from(document.querySelectorAll('[style*="background-image"]'))
              , i = e.length + a.length
              , n = 0;
            if (!i)
                return t();
            let l = () => {
                ++n === i && t()
            }
              , o = (t, e) => {
                setTimeout(l, 1e3)
            }
              , r = (t, e) => {
                t.complete ? t.naturalWidth < 1 ? o(t, e) : l() : (t.addEventListener("load", l),
                t.addEventListener("error", () => o(t, e)))
            }
            ;
            e.forEach(t => {
                r(t)
            }
            ),
            a.forEach(t => {
                var e;
                let a = (null === (e = t.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/)) || void 0 === e ? void 0 : e[1]) || ""
                  , i = new Image;
                i.src = a,
                r(i, t)
            }
            )
        }
        function w(t, e) {
            let a = null
              , i = document.getElementById(t);
            if (!i)
                return e();
            let n = null;
            return a || (a = new MutationObserver( () => void (n && clearTimeout(n),
            n = setTimeout( () => {
                e(),
                a.disconnect(),
                a = null
            }
            , 500)))).observe(i, {
                childList: !0,
                subtree: !0
            }),
            function() {
                a && (a.disconnect(),
                a = null)
            }
        }
        var E = a(61859)
          , O = a(57704);
        function D(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
              , a = arguments.length > 2 ? arguments[2] : void 0;
            if (!t.kind || !t.type || !t.variant || "design" !== t.kind) {
                setTimeout(a, 0);
                return
            }
            let i = "/templates/".concat(t.kind, "/").concat(t.type, "/").concat(t.variant, "/css/style.min.css")
              , n = "style-".concat(t.kind, "-").concat(t.type, "-").concat(t.variant);
            if (document.getElementById(n)) {
                setTimeout(a, 0);
                return
            }
            let l = document.createElement("link");
            l.id = n,
            l.rel = "stylesheet",
            l.href = i,
            l.onload = () => {
                requestAnimationFrame( () => {
                    document.fonts.ready.then( () => {
                        setTimeout(a, e)
                    }
                    ).catch(t => {
                        console.warn("Ошибка загрузки шрифтов:", t),
                        setTimeout(a, e)
                    }
                    )
                }
                )
            }
            ,
            l.onerror = () => {
                console.error("Не удалось загрузить CSS файл:", i),
                setTimeout(a, 0)
            }
            ,
            document.head.appendChild(l)
        }
        var P = a(98536)
          , _ = (t, e, a) => {
            let i = (0,
            g.TL)()
              , l = (0,
            O.Z)();
            (0,
            n.useEffect)( () => {
                t && w("WrapperClientPage", () => {
                    D(a, 500, () => {
                        C( () => {
                            setTimeout( () => {
                                e(!1)
                            }
                            , 300)
                        }
                        )
                    }
                    )
                }
                )
            }
            , [t, a.kind]),
            (0,
            n.useEffect)( () => {
                if (t)
                    return setTimeout(T, 1e3),
                    window.addEventListener("message", t => {
                        if ("currentInvite" === t.data.type && (i((0,
                        k.fh)(t.data.message.currentInvite)),
                        t.data.message.currentInvite.blocks.length < 1 && C( () => {
                            e(!1)
                        }
                        )),
                        "clickedByBlock" === t.data.type) {
                            if ("top" === t.data.blockId)
                                (0,
                                x.k)(!0);
                            else {
                                let e = (0,
                                P.Z)("c_block_" + t.data.blockId);
                                if (e) {
                                    let a = 65
                                      , i = e.getAttribute("data-scrolloffset");
                                    i ? a = parseInt(i, 10) : t.data.settings && void 0 !== t.data.settings.offset && (a = t.data.settings.offset),
                                    (0,
                                    x.u)({
                                        targetEl: e,
                                        offset: a
                                    });
                                    let n = e.getAttribute("data-scrollblink");
                                    (n || e.classList.contains("DesignBlock")) && (!n || "true" !== n) || l(e, !0, "rgb(255 252 213 / 60%)")
                                }
                            }
                        }
                        "infoEasyMode" === t.data.type && i((0,
                        E.BL)(t.data.is))
                    }
                    ),
                    () => {
                        window.removeEventListener("message", () => {}
                        )
                    }
            }
            , [])
        }
          , z = a(36289)
          , S = a(25810);
        function Z(t) {
            let {classNameFont: e} = t
              , a = (0,
            n.useCallback)( () => {
                window.location.href = "/"
            }
            , []);
            return (0,
            i.jsxs)(s.M, {
                w: "100%",
                h: "100vh",
                bg: u.Z.light.background,
                flexDirection: "column",
                className: e,
                children: [(0,
                i.jsx)(d.aN, {
                    boxSize: "120px"
                }), (0,
                i.jsx)(r.xu, {
                    children: (0,
                    i.jsx)(c.Z, {
                        text: "Приглашение не найдено",
                        align: "center",
                        fontSize: "1.1rem",
                        color: "#f8595f",
                        font: "comfortaa"
                    })
                }), (0,
                i.jsx)(S.z, {
                    variant: "outline",
                    colorScheme: "red",
                    borderColor: "#f8595f",
                    mt: "14px",
                    color: "#f8595f",
                    onClick: a,
                    children: "На главную"
                })]
            })
        }
        var I = a(71931)
          , M = a(18010)
          , F = a(75565)
          , N = a(58055)
          , j = a(13856)
          , L = a(45168)
          , A = a(27522);
        function W(t) {
            let {children: e, block: a, folderId: l, isIframe: o, onceClickedEvent: s} = t
              , [d,p] = (0,
            n.useState)(!1)
              , c = (0,
            g.CG)(E.Bs)
              , u = A.tI[a.title]
              , b = u.showInEasyMode;
            (0,
            n.useEffect)( () => {
                d && setTimeout( () => {
                    p(!1)
                }
                , 1500)
            }
            , [d]);
            let m = {
                position: "absolute",
                right: "2px",
                bottom: 0,
                zIndex: "2",
                height: "100%",
                maxHeight: "30px",
                padding: "2px 0",
                flexDirection: "column-reverse"
            };
            return "NavBar" === a.title && (m = {
                position: "absolute",
                top: "5px",
                marginLeft: "5px",
                width: "24px",
                height: "24px",
                zIndex: "4"
            },
            a.isFixed && (m.position = "fixed")),
            (0,
            i.jsxs)(r.xu, {
                w: "100%",
                id: "c_block_" + a.id,
                position: "relative",
                _hover: o && u.openByClick ? {
                    backgroundColor: "rgb(255 252 213 / 30%)"
                } : void 0,
                onClick: o && u.openByClick ? t => {
                    let e = t.target;
                    e.closest("a") || e.closest("button") || (p(!0),
                    s(a.id, l))
                }
                : void 0,
                className: "ClientBlockWrapper",
                borderBottom: o && "fixed" !== m.position ? "1px dashed" : void 0,
                borderColor: o && "fixed" !== m.position ? "rgba(0, 0, 0, 0.08)" : void 0,
                children: [o && (!c || b) && (0,
                i.jsx)(N.U, {
                    style: m,
                    children: (0,
                    i.jsx)(S.z, {
                        isLoading: d,
                        size: "xs",
                        h: "100%",
                        maxH: "24px",
                        outline: "none",
                        outlineOffset: 0,
                        paddingInlineStart: 0,
                        paddingInlineEnd: 0,
                        padding: 0,
                        colorScheme: "blackAlpha",
                        onClick: t => {
                            t.stopPropagation(),
                            p(!0),
                            s(a.id, l)
                        }
                        ,
                        children: (0,
                        i.jsx)(j.J, {
                            as: L.EMN,
                            boxSize: "100%",
                            maxW: "15px",
                            maxH: "15px"
                        })
                    })
                }), e]
            })
        }
        function B(t) {
            let {isIframe: e, isLoadingClientPage: a, currentInvite: l} = t
              , o = (0,
            n.useCallback)( (t, a) => {
                e && (0,
                F.Z)(t, a)
            }
            , [])
              , s = (t, n) => {
                let r = M.o[t.title];
                if (!r)
                    return null;
                let s = r.variants[t.variant];
                return s ? (0,
                i.jsx)(W, {
                    onceClickedEvent: o,
                    block: t,
                    folderId: n,
                    isIframe: e,
                    children: (0,
                    i.jsx)(s, {
                        invite: l,
                        isLoadingClientPage: a,
                        data: t
                    })
                }, t.id) : null
            }
            ;
            return (0,
            i.jsx)(i.Fragment, {
                children: l && l.blocks.map(t => "Folder" === t.title ? t.isOn ? (0,
                i.jsx)(r.xu, {
                    id: "c_block_" + t.id,
                    className: "ClientFolderWrapper",
                    position: "relative",
                    children: t.blocks.map(e => s(e, t.id))
                }, t.id) : null : s(t))
            })
        }
        var q = a(86237)
          , H = a(84983)
          , R = t => {
            let {imagePath: e, filter: a} = t
              , l = (0,
            n.useRef)(null);
            return (0,
            n.useEffect)( () => {
                let t = () => {
                    var t;
                    let e = null === (t = l.current) || void 0 === t ? void 0 : t.parentElement;
                    if (l.current && e) {
                        let {width: t, height: a} = e.getBoundingClientRect();
                        l.current.style.width = "".concat(t, "px")
                    }
                }
                ;
                return window.addEventListener("resize", t),
                t(),
                () => {
                    window.removeEventListener("resize", t)
                }
            }
            , []),
            (0,
            i.jsx)(r.xu, {
                ref: l,
                position: "fixed",
                width: "100%",
                height: "100vh",
                minHeight: "100%",
                backgroundImage: "url(".concat(e, ")"),
                filter: a,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "initial",
                transform: "translate3d(0,0,0)",
                pointerEvents: "none"
            })
        }
          , U = a(12761)
          , V = a(4090);
        function K() {
            let t = (0,
            o._)(["\n  max-width: ", "px;\n  min-height: 100vh;\n  margin: 0 auto;\n\n  @media (min-width: ", "px) {\n    animation-duration: 0.35s;\n    animation-delay: 1.5s;\n    animation-fill-mode: forwards;\n\n    @keyframes showShadow {\n      0% {\n        box-shadow: none;\n      }\n\n      100% {\n        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);\n      }\n    }\n  }\n\n  @media (max-width: ", "px), (min-width: 1442px) {\n    max-width: ", "px;\n  }\n\n  @media (max-width: ", "px) {\n    animation-name: none !important;\n  }\n\n  @media (max-width: ", "px) {\n    max-width: 100%;\n    width: 100%;\n  }\n"]);
            return K = function() {
                return t
            }
            ,
            t
        }
        let G = (0,
        p.Z)(r.xu)(K(), H.Z.widthWrapperWindow, H.Z.widthWrapperWindow, H.Z.widthWrapperWindowLongerHD, H.Z.widthWrapperWindowLongerHD, H.Z.widthWrapperWindowLongerHD, H.Z.widthWrapperWindow);
        function Q(t) {
            let e, {children: a, isLoading: n, isWaitForAnimate: l, currentInvite: o, isIframe: s} = t, d = o.settings.theme ? o.settings.theme.background : {
                type: "none",
                payload: ""
            }, p = "";
            return "image" === d.type && d.payload && (p = (0,
            q.Z)(d.payload)),
            "customImage" === d.type && d.payload.length && (p = (0,
            U.Z)(d.payload[0], o.uid, "CustomImage"),
            e = (0,
            V.Z)(d.payload[0])),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(r.xu, {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    w: "100%",
                    h: "100vh",
                    style: {
                        backgroundImage: 'url("/templates/flexible/images/backgroundsDesktop/1.jpg")'
                    },
                    backgroundSize: "300px",
                    backgroundBlendMode: "luminosity",
                    zIndex: "-1"
                }), (0,
                i.jsxs)(G, {
                    id: "WrapperClientPage",
                    position: "relative",
                    visibility: n ? "hidden" : "visible",
                    backgroundColor: "color" === d.type ? d.payload : "#ffffff",
                    style: {
                        animationName: l ? "none" : "showShadow",
                        overflow: s ? "hidden" : void 0
                    },
                    children: [p && (0,
                    i.jsx)(R, {
                        imagePath: p,
                        filter: e
                    }), a]
                })]
            })
        }
        function Y(t) {
            let {isLoading: e, isWaitForAnimate: a, iframeConstructor: n, currentInvite: l, isIframe: o} = t;
            return (0,
            i.jsx)(Q, {
                isLoading: e,
                isWaitForAnimate: a,
                currentInvite: l,
                isIframe: o,
                children: (0,
                i.jsx)(B, {
                    isIframe: n,
                    isLoadingClientPage: a,
                    currentInvite: l
                })
            })
        }
        var J = a(30166)
          , X = a(75208)
          , $ = a(46775);
        let tt = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Menu",
            blocks: {}
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                isFixed: {
                    type: "switch",
                    label: "Закрепить кнопку",
                    data: !1,
                    o: 1
                },
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    },
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                bgBlack: {
                    type: "switch",
                    label: "Темный фон под текстом",
                    data: !0,
                    o: 1,
                    mb: 1
                },
                center: {
                    type: "switch",
                    label: "Отобразить имена по центру",
                    data: !1,
                    o: 2
                },
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 3
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "inviteMainPhoto",
                    label: "Ваше фото",
                    data: [],
                    filter: 1,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дорогие гости",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Вы получили это сообщение, а значит, мы спешим поделиться с вами радостной новостью – у нас скоро свадьба!\nМы приглашаем вас разделить с нами радость этого особенного события и стать частью нашей семейной истории.\nВаше присутствие сделает наш день еще более значимым и незабываемым.",
                    size: "sm",
                    h: 250,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 4,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "История любви",
                    o: 1
                },
                textOne: {
                    type: "textarea",
                    label: "Текст до изображений",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.",
                    size: "sm",
                    h: 230,
                    o: 2
                },
                textTwo: {
                    type: "textarea",
                    label: "Текст после изображений",
                    data: "С каждым годом наша любовь становилась всё сильнее, и теперь мы готовы сделать следующий шаг. Мы счастливы разделить этот особенный момент с вами и надеемся, что вы станете частью нашей дальнейшей истории.",
                    size: "sm",
                    h: 165,
                    o: 3
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto2x",
                    label: "Фотографии",
                    data: [],
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {}
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Место проведения",
                    o: 1
                },
                time: {
                    type: "input",
                    label: "Сбор гостей",
                    data: "{{time}}",
                    o: 2
                },
                address: {
                    type: "input",
                    label: "Адрес",
                    data: "{{address}}",
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото ресторана",
                    data: [],
                    filter: 1,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    data: {
                        events: (0,
                        X.Z)(!1)
                    },
                    pf: 1,
                    o: 1
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа дня",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дресс-код",
                    btn: 3,
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Нам будет очень приятно, если вы поддержите цветовую гамму торжества и выберете наряды в соответствии с цветовой палитрой нашей свадьбы.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 2
                },
                cTitle: {
                    type: "input",
                    label: "Желательные цвета",
                    data: "Нюдовые цвета",
                    btn: 3,
                    o: 3
                },
                dopt: {
                    type: "textarea",
                    label: "Дополнительное описание",
                    data: "(Здесь можно более подробно описать дресс-код или удалить этот текст)",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    mb: 1,
                    o: 4
                },
                isNeedPhoto: {
                    type: "switch",
                    label: "Показывать фото-пример",
                    data: !0,
                    btn: 3,
                    o: 5
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото пример",
                    data: [],
                    btn: 3,
                    o: 6
                },
                DS: {
                    type: "DS",
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#e4d0c9"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#caab9a"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#c29a93"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#8d858c"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a1896f"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            ndb: 'Связан с "Вопросами для гостей"',
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "До свадьбы осталось",
                    o: 1
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Вопросы\nдля гостей",
                    size: "sm",
                    h: "60px",
                    btn: 3,
                    o: 1
                },
                desc: {
                    type: "textarea",
                    label: "Описание",
                    data: "Подтвердите, пожалуйста, своё присутствие на нашем торжестве!",
                    size: "sm",
                    h: "80px",
                    btn: 3,
                    o: 2
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "Жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "Невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "3",
                            name: "",
                            role: "Ведущий",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }]
                    },
                    pf: 1
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Связаться с нами",
                    btn: 3,
                    o: 1
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Будем рады видеть Вас на нашем празднике!",
                    size: "sm",
                    h: "60px",
                    o: 1
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Ваше фото",
                    data: [],
                    o: 2
                }
            }
        }]
          , te = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Menu",
            blocks: {}
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                isB: {
                    type: "slider",
                    label: "Затемнение фона под датой",
                    data: 0,
                    min: 0,
                    max: .7,
                    step: .01,
                    mb: "3px",
                    btn: 3,
                    o: 1
                },
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 2
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 3
                },
                title: {
                    type: "input",
                    label: "Подпись под именами",
                    data: "свадебное приглашение",
                    btn: 3,
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "inviteMainPhoto3x",
                    label: "Ваше фото",
                    data: [],
                    o: 5,
                    mb: "2px"
                },
                t: {
                    type: "text",
                    data: 1,
                    o: 6,
                    mb: "5px"
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дорогие гости!",
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "свадебное приглашение",
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Вы получили это сообщение, а значит, мы спешим поделиться с вами радостной новостью – у нас скоро свадьба!\nМы приглашаем вас разделить с нами радость этого особенного события и стать частью нашей семейной истории. Ваше присутствие сделает наш день еще более значимым и незабываемым.",
                    size: "sm",
                    h: 250,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "История любви",
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "наша история любви",
                    o: 2
                },
                years: {
                    type: "input",
                    label: "Лет вместе",
                    data: "5 лет вместе",
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.",
                    size: "sm",
                    h: 230,
                    o: 4
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto3x",
                    label: "Фотографии",
                    data: [],
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Локация",
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "адрес ресторана и время сбора гостей",
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото ресторана",
                    data: [],
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дата проведения",
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "календарь мероприятия",
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    wte: !0,
                    data: {
                        events: (0,
                        X.Z)(!0)
                    },
                    o: 1
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа дня",
                    btn: 3,
                    o: 2
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "программа дня",
                    btn: 3,
                    o: 3
                },
                bgP: {
                    type: "slider",
                    label: "Затемнение фона",
                    data: .2,
                    min: 0,
                    max: .85,
                    step: .01,
                    btn: 3,
                    o: 3
                },
                bg: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото фон",
                    data: [],
                    btn: 3,
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дресс-код",
                    btn: 3,
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "дресс-код",
                    btn: 3,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Нам будет очень приятно, если вы поддержите цветовую гамму торжества и выберете наряды в соответствии с цветовой палитрой нашей свадьбы.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 3
                },
                isP: {
                    type: "switch",
                    label: "Показывать фото-пример",
                    data: !0,
                    btn: 3,
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото пример",
                    data: [],
                    btn: 3,
                    o: 5
                },
                DS: {
                    type: "DS",
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#9c6a53"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#a37a62"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#55634e"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#735e4e"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#4e3c2f"
                        }, {
                            id: "6",
                            t: "color",
                            v: "#8e8b8c"
                        }, {
                            id: "7",
                            t: "color",
                            v: "#cacacc"
                        }, {
                            id: "8",
                            t: "color",
                            v: "#201915"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            blocks: {
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "до свадьбы осталось",
                    o: 1
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 2
                },
                bgP: {
                    type: "slider",
                    label: "Затемнение фона",
                    data: .3,
                    min: 0,
                    max: .85,
                    step: .01,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото фон",
                    data: [],
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Подтвердите, пожалуйста, своё присутствие на нашем торжестве!",
                    size: "sm",
                    h: "80px",
                    btn: 3,
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Заголовок",
                    data: "вопросы для гостей",
                    btn: 3,
                    o: 2
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: ""
                            }, {
                                t: "WhatsApp",
                                d: ""
                            }, {
                                t: "VK",
                                d: ""
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: ""
                            }, {
                                t: "WhatsApp",
                                d: ""
                            }, {
                                t: "VK",
                                d: ""
                            }]
                        }, {
                            id: "3",
                            name: "Георгий",
                            role: "ведущий",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: ""
                            }, {
                                t: "WhatsApp",
                                d: ""
                            }, {
                                t: "VK",
                                d: ""
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Контакты",
                    btn: 3,
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "жениха и невесты",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Будем рады видеть Вас на нашем празднике!",
                    size: "sm",
                    h: "60px",
                    o: 1
                },
                bgP: {
                    type: "slider",
                    label: "Затемнение фона",
                    data: .3,
                    min: 0,
                    max: .85,
                    step: .01,
                    o: 2
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Ваше фото",
                    data: [],
                    o: 3
                }
            }
        }];
        var ta = a(83084)
          , ti = a(87801)
          , tn = a(67655)
          , tl = a(26101)
          , to = a(7466)
          , tr = a(75480)
          , ts = a(85813)
          , td = a(24716)
          , tp = a(38724)
          , tc = a(6887);
        let tu = [{
            id: (0,
            tc.Z)(),
            music: {
                is: !0,
                value: "1"
            },
            title: "NavBar",
            height: "55px",
            isFixed: !0,
            variant: "v1",
            reverseItems: !1,
            isShowHamburger: !0
        }, {
            id: (0,
            tc.Z)(),
            date: {
                bold: !1,
                font: "lora",
                text: "{{{date}}}",
                align: "center",
                color: "#ffffff",
                fontSize: 24,
                isItalic: !1,
                autoScale: !1,
                lineHeight: 1.5,
                isUnderline: !1
            },
            photo: [],
            title: "Main",
            variant: "v1",
            namesHeroes: {
                bold: !1,
                font: "annabelle",
                text: "{{names_main_v1_text}}",
                align: "left",
                color: "#ffffff",
                fontSize: 25,
                isItalic: !1,
                autoScale: !0,
                lineHeight: 1.5,
                isUnderline: !1
            },
            isFullHeight: !0
        }, {
            title: "Folder",
            variant: "v1",
            id: "Intro",
            isOn: !0,
            blocks: (0,
            ta.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Calendar",
            isOn: !0,
            blocks: (0,
            ti.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Place",
            isOn: !0,
            blocks: (0,
            tn.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Map",
            isOn: !0,
            blocks: (0,
            tl.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DayProgram",
            isOn: !0,
            blocks: (0,
            to.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DressCode",
            isOn: !0,
            blocks: (0,
            tr.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Timer",
            isOn: !0,
            blocks: (0,
            ts.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Quiz",
            isOn: !0,
            blocks: (0,
            td.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Final",
            isOn: !0,
            blocks: (0,
            tp.Z)(!1)
        }]
          , tb = [{
            id: (0,
            tc.Z)(),
            music: {
                is: !0,
                value: "1"
            },
            title: "NavBar",
            height: "55px",
            isFixed: !0,
            variant: "v1",
            reverseItems: !1,
            isShowHamburger: !0
        }, {
            id: (0,
            tc.Z)(),
            title: "Main",
            variant: "v2",
            names: ["{{{names_main_v2_text}}}"],
            photo: []
        }, {
            title: "Folder",
            variant: "v1",
            id: "Intro",
            isOn: !0,
            blocks: (0,
            ta.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Calendar",
            isOn: !0,
            blocks: (0,
            ti.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Place",
            isOn: !0,
            blocks: (0,
            tn.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Map",
            isOn: !0,
            blocks: (0,
            tl.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DayProgram",
            isOn: !0,
            blocks: (0,
            to.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DressCode",
            isOn: !0,
            blocks: (0,
            tr.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Timer",
            isOn: !0,
            blocks: (0,
            ts.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Quiz",
            isOn: !0,
            blocks: (0,
            td.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Final",
            isOn: !0,
            blocks: (0,
            tp.Z)(!1)
        }]
          , tm = [{
            id: (0,
            tc.Z)(),
            music: {
                is: !0,
                value: "1"
            },
            title: "NavBar",
            height: "55px",
            isFixed: !0,
            variant: "v1",
            reverseItems: !1,
            isShowHamburger: !0
        }, {
            id: (0,
            tc.Z)(),
            title: "Main",
            variant: "v3",
            photo: [],
            showLetters: !0,
            showDate: !0,
            header: {
                bold: !1,
                font: "amadeus",
                text: "Save the date",
                align: "center",
                color: "#5a5a5a",
                fontSize: "3rem",
                isItalic: !1,
                autoScale: !1,
                lineHeight: 1,
                isUnderline: !1
            }
        }, {
            title: "Folder",
            variant: "v1",
            id: "Intro",
            isOn: !0,
            blocks: (0,
            ta.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Calendar",
            isOn: !0,
            blocks: (0,
            ti.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Place",
            isOn: !0,
            blocks: (0,
            tn.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Map",
            isOn: !0,
            blocks: (0,
            tl.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DayProgram",
            isOn: !0,
            blocks: (0,
            to.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DressCode",
            isOn: !0,
            blocks: (0,
            tr.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Timer",
            isOn: !0,
            blocks: (0,
            ts.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Quiz",
            isOn: !0,
            blocks: (0,
            td.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Final",
            isOn: !0,
            blocks: (0,
            tp.Z)(!1)
        }]
          , tv = [{
            id: (0,
            tc.Z)(),
            music: {
                is: !0,
                value: "1"
            },
            title: "NavBar",
            height: "55px",
            isFixed: !0,
            variant: "v1",
            reverseItems: !1,
            isShowHamburger: !0
        }, {
            id: (0,
            tc.Z)(),
            title: "Main",
            variant: "v4",
            isFullHeight: !0,
            photo: []
        }, {
            title: "Folder",
            variant: "v1",
            id: "Intro",
            isOn: !0,
            blocks: (0,
            ta.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Calendar",
            isOn: !0,
            blocks: (0,
            ti.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Place",
            isOn: !0,
            blocks: (0,
            tn.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Map",
            isOn: !0,
            blocks: (0,
            tl.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DayProgram",
            isOn: !0,
            blocks: (0,
            to.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DressCode",
            isOn: !0,
            blocks: (0,
            tr.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Timer",
            isOn: !0,
            blocks: (0,
            ts.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Quiz",
            isOn: !0,
            blocks: (0,
            td.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Final",
            isOn: !0,
            blocks: (0,
            tp.Z)(!1)
        }]
          , ty = [{
            id: (0,
            tc.Z)(),
            music: {
                is: !0,
                value: "1"
            },
            title: "NavBar",
            height: "55px",
            isFixed: !0,
            variant: "v1",
            reverseItems: !1,
            isShowHamburger: !0
        }, {
            id: (0,
            tc.Z)(),
            title: "Main",
            variant: "v5",
            photo: [],
            names: ["{{{names_main_v2_text}}}"],
            tText: "С РАДОСТЬЮ ПРИГЛАШАЕМ ВАС\nНА ПРАЗДНОВАНИЕ НАШЕЙ СВАДЬБЫ",
            bText: "{{bottom_main_v5_text}}"
        }, {
            title: "Folder",
            variant: "v1",
            id: "Intro",
            isOn: !0,
            blocks: (0,
            ta.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Calendar",
            isOn: !0,
            blocks: (0,
            ti.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Place",
            isOn: !0,
            blocks: (0,
            tn.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Map",
            isOn: !0,
            blocks: (0,
            tl.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DayProgram",
            isOn: !0,
            blocks: (0,
            to.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "DressCode",
            isOn: !0,
            blocks: (0,
            tr.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Timer",
            isOn: !0,
            blocks: (0,
            ts.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Quiz",
            isOn: !0,
            blocks: (0,
            td.Z)(!1)
        }, {
            title: "Folder",
            variant: "v1",
            id: "Final",
            isOn: !0,
            blocks: (0,
            tp.Z)(!1)
        }]
          , tf = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Menu",
            blocks: {}
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 1
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 2
                },
                title: {
                    type: "input",
                    label: "Подпись",
                    data: "Приглашение на свадьбу",
                    btn: 5,
                    o: 3
                },
                bgP: {
                    type: "slider",
                    label: "Затемнение фона",
                    data: .08,
                    min: 0,
                    max: .85,
                    step: .01,
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "inviteMainPhoto",
                    label: "Ваше фото",
                    data: [],
                    o: 5,
                    mb: "2px"
                },
                t: {
                    type: "text",
                    data: 2,
                    o: 6,
                    mb: "5px"
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дорогие гости!",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Вы получили это сообщение, а значит, мы спешим поделиться с вами радостной новостью – у нас скоро свадьба!\nМы приглашаем вас разделить с нами радость этого особенного события и стать частью нашей семейной истории. Ваше присутствие сделает наш день еще более значимым и незабываемым.",
                    size: "sm",
                    h: 250,
                    o: 2
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Ваше фото",
                    data: [],
                    o: 3,
                    mb: "2px"
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Наша Love Story",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.",
                    size: "sm",
                    h: 230,
                    o: 2
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фотография",
                    data: [],
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дата нашей свадьбы",
                    o: 1
                },
                bgP: {
                    type: "slider",
                    label: "Затемнение фона",
                    data: .2,
                    min: 0,
                    max: .85,
                    step: .01,
                    o: 2
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фотография",
                    data: [],
                    filter: 1,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Адрес ресторана",
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Подпись",
                    data: "и место проведения",
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 3
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto4x",
                    label: "Фото ресторана",
                    data: [],
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    data: {
                        events: (0,
                        X.Z)(!1)
                    },
                    o: 1
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа дня",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Подпись",
                    data: "Поддержите цветовую гамму нашего торжества",
                    btn: 3,
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Заголовок",
                    data: "Dress Code",
                    btn: 3,
                    o: 2
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото",
                    data: [],
                    btn: 3,
                    o: 4
                },
                DS: {
                    type: "DS",
                    maxI: 8,
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#b7dcff"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#ffebb7"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#c9b7ff"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#fde2e4"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#fad2e1"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            ndb: 'Связан с "Вопросами для гостей"',
            blocks: {
                sign: {
                    type: "input",
                    label: "Заголовок",
                    data: "Обратный отсчет до мероприятия",
                    o: 1
                },
                bgP: {
                    type: "slider",
                    label: "Затемнение фона",
                    data: .3,
                    min: 0,
                    max: .85,
                    step: .01,
                    o: 2
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото фон",
                    data: [],
                    filter: 1,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Ответьте на пару вопросов:",
                    btn: 3,
                    o: 1
                },
                sign: {
                    type: "input",
                    label: "Заголовок",
                    data: "Это поможет в организации",
                    btn: 3,
                    o: 2
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    inp: !1,
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Telegram",
                                d: "https://t.me/test"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "WhatsApp",
                                d: "+7 (999) 999-99-99"
                            }]
                        }, {
                            id: "3",
                            name: "Георгий",
                            role: "ведущий",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "WhatsApp",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Telegram",
                                d: "https://t.me/test"
                            }, {
                                t: "VK",
                                d: "https://vk.com/test"
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Подпись",
                    data: "Контактная информация",
                    btn: 3,
                    o: 2
                },
                sign: {
                    type: "input",
                    label: "Заголовок",
                    data: "Остались вопросы?",
                    btn: 3,
                    o: 1
                },
                final: {
                    type: "input",
                    label: "Текст в конце",
                    data: "Будем рады видеть Вас на нашем празднике!",
                    btn: 3,
                    o: 3
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto3x",
                    label: "Ваше фото",
                    data: [],
                    btn: 3,
                    o: 4
                }
            }
        }]
          , th = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                bg: {
                    type: "slider",
                    label: "Насыщенность белого фона",
                    data: 65,
                    min: 0,
                    max: 100,
                    step: 1,
                    o: 1
                },
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 2
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 3
                },
                photos: {
                    type: "file",
                    fType: "inviteMainPhoto2x",
                    label: "Ваше фото",
                    data: [],
                    o: 4,
                    filter: 1,
                    mb: "2px"
                },
                t: {
                    type: "text",
                    data: 3,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Дорогие\nдрузья\nи родные",
                    size: "sm",
                    h: 90,
                    o: 1
                },
                subtitle: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "приглашаем вас\nна торжество по случаю\nнашей свадьбы",
                    size: "sm",
                    h: 90,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Мы с радостью приглашаем вас разделить это незабываемое событие с нами!\nВаше присутствие сделает этот день ещё более особенным, а вместе мы создадим тёплые и волшебные воспоминания. Присоединяйтесь к нам на церемонии и последующем праздновании, чтобы стать частью нашей семейной истории!",
                    size: "sm",
                    h: 250,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "История",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "нашей любви",
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.\nС каждым годом наша любовь становилась всё сильнее, и теперь мы готовы сделать следующий шаг. Мы счастливы разделить этот особенный момент с вами и надеемся, что вы станете частью нашей дальнейшей истории.",
                    size: "sm",
                    h: 230,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фотография",
                    data: [],
                    o: 4,
                    filter: 1
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дата",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "проведения свадьбы",
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Место",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "проведения",
                    o: 2
                },
                time: {
                    type: "input",
                    label: "Время",
                    data: "{{time}}",
                    o: 3
                },
                address: {
                    type: "input",
                    label: "Адрес",
                    data: "{{address}}",
                    o: 4
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                isB: {
                    type: "switch",
                    label: "Черно-белая карта",
                    data: !0,
                    mb: "2px"
                },
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    inp: !1,
                    data: {
                        events: (0,
                        X.Z)(!1)
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "дня",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дресс-код",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "Нюдовые цвета",
                    btn: 3,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Будем благодарны, если вы поддержите нашу цветовую гамму!",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фото",
                    data: [],
                    btn: 3,
                    o: 4
                },
                DS: {
                    type: "DS",
                    maxI: 6,
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#e4d0c9"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#caab9a"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#c29a93"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#8d858c"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a1896f"
                        }, {
                            id: "6",
                            t: "color",
                            v: "#967c6f"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Свадьба",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "через",
                    o: 2
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Вопросы",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "для гостей",
                    btn: 3,
                    o: 2
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    pf: 1,
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "Жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Telegram",
                                d: "https://t.me/test"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "Невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "WhatsApp",
                                d: "+7 (999) 999-99-99"
                            }]
                        }, {
                            id: "3",
                            name: "Марина",
                            role: "Ведущая",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "WhatsApp",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Telegram",
                                d: "https://t.me/test"
                            }, {
                                t: "VK",
                                d: "https://vk.com/test"
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Контакты",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "для связи",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Group",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Общая группа",
                    o: 1
                },
                link: {
                    type: "input",
                    label: "Ссылка",
                    data: "https://t.me/test",
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "Дорогие друзья! Мы создали специальную группу, где можно узнать все важные детали праздника, поделиться фотографиями и видео, а также просто пообщаться. Давайте вместе сохраним теплые воспоминания об этом чудесном дне!",
                    size: "sm",
                    h: 170,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Будем рады видеть вас на нашем празднике",
                    size: "sm",
                    h: "60px",
                    o: 1
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Ваше фото",
                    data: [],
                    filter: 1,
                    o: 2
                }
            }
        }]
          , tg = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                NL: {
                    type: "switch",
                    label: "Всегда отображать имена с новой строки",
                    data: !1,
                    mb: "2px",
                    o: 1
                },
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 2
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дорогие друзья и родные",
                    o: 1
                },
                subtitle: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "приглашаем вас на торжество по случаю нашей свадьбы",
                    size: "sm",
                    h: 90,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Мы с радостью приглашаем вас разделить это незабываемое событие с нами!\nВаше присутствие сделает этот день ещё более особенным, а вместе мы создадим тёплые и волшебные воспоминания. Присоединяйтесь к нам на церемонии и последующем праздновании, чтобы стать частью нашей семейной истории!",
                    size: "sm",
                    h: 250,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "История нашей любви",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.\nС каждым годом наша любовь становилась всё сильнее, и теперь мы готовы сделать следующий шаг. Мы счастливы разделить этот особенный момент с вами и надеемся, что вы станете частью нашей дальнейшей истории.",
                    size: "sm",
                    h: 230,
                    mb: 1,
                    o: 2
                },
                flowers: {
                    type: "switch",
                    label: "Показывать цветы на фото",
                    data: !0,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фотография",
                    data: [],
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дата",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "свадьбы",
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Место",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "проведения",
                    o: 2
                },
                time: {
                    type: "input",
                    label: "Время",
                    data: "{{time}}",
                    o: 3
                },
                address: {
                    type: "input",
                    label: "Адрес",
                    data: "{{address}}",
                    o: 4
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                isB: {
                    type: "switch",
                    label: "Черно-белая карта",
                    data: !1,
                    mb: "2px"
                },
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    inp: !1,
                    data: {
                        events: (0,
                        X.Z)(!1)
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "праздничного дня",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Поддержите",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "наш дресс-код",
                    btn: 3,
                    o: 2
                },
                cTitle: {
                    type: "input",
                    label: "Желательные цвета",
                    data: "Нюдовые цвета",
                    btn: 3,
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Нам будет очень приятно, если вы поддержите цветовую гамму торжества и выберете наряды в соответствии с цветовой палитрой нашей свадьбы.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 4
                },
                DS: {
                    type: "DS",
                    maxI: 8,
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#e4d0c9"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#caab9a"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#c29a93"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#8d858c"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a1896f"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            ndb: 'Связан с "Вопросами для гостей"',
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "До свадьбы",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "осталось всего",
                    o: 2
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Вопросы",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "для гостей",
                    btn: 3,
                    o: 2
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Group",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Мы создали для вас",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Заголовок",
                    data: "общую группу",
                    o: 2
                },
                link: {
                    type: "input",
                    label: "Ссылка",
                    data: "https://t.me/test",
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "Дорогие друзья! Мы создали специальную группу, где можно узнать все важные детали праздника, поделиться фотографиями и видео, а также просто пообщаться. Давайте вместе сохраним теплые воспоминания об этом чудесном дне!",
                    size: "sm",
                    h: 170,
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    inp: !1,
                    maxC: 3,
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "Жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "Невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "3",
                            name: "",
                            role: "Ведущий",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Контакты",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "для связи",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Будем рады видеть вас на нашем празднике",
                    size: "sm",
                    h: "60px",
                    o: 1
                }
            }
        }]
          , tk = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 1
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 2
                },
                text: {
                    type: "input",
                    label: "Текст",
                    data: "Свадебное приглашение",
                    o: 3
                },
                bg: {
                    type: "slider",
                    label: "Прозрачность фото",
                    data: .75,
                    min: 0,
                    max: 1,
                    step: .01,
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "inviteMainPhoto",
                    label: "Ваше фото (необязательно)",
                    data: [],
                    filter: 1,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Дорогие гости, мы приглаш\nаем вас",
                    size: "sm",
                    h: 90,
                    o: 1
                },
                subtitle: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "на нашу свадьбу",
                    size: "sm",
                    h: 50,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Вы получили это сообщение, а значит, мы спешим поделиться с вами радостной новостью – у нас скоро свадьба!\nМы приглашаем вас разделить с нами радость этого особенного события и стать частью нашей семейной истории. Ваше присутствие сделает наш день еще более значимым и незабываемым.",
                    size: "sm",
                    h: 250,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "История",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "любви",
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.\nС каждым годом наша любовь становилась всё сильнее, и теперь мы готовы сделать следующий шаг. Мы счастливы разделить этот особенный момент с вами и надеемся, что вы станете частью нашей дальнейшей истории.",
                    size: "sm",
                    h: 230,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фотография",
                    data: [],
                    filter: 1,
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дата проведения",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "свадьбы",
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Место",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "проведения",
                    o: 2
                },
                time: {
                    type: "input",
                    label: "Время",
                    data: "{{time}}",
                    o: 3
                },
                address: {
                    type: "input",
                    label: "Адрес",
                    data: "{{address}}",
                    o: 4
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    inp: !1,
                    data: {
                        events: (0,
                        X.Z)(!1)
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "дня",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Поддержите наш",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "дресс-код",
                    btn: 3,
                    o: 2
                },
                cTitle: {
                    type: "input",
                    label: "Желательные цвета",
                    data: "Нюдовые цвета",
                    btn: 3,
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Нам будет очень приятно, если вы поддержите цветовую гамму торжества и выберете наряды в соответствии с цветовой палитрой нашей свадьбы.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 4
                },
                DS: {
                    type: "DS",
                    maxI: 8,
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#e4d0c9"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#caab9a"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#c29a93"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#8d858c"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a1896f"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "До свадьбы",
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "осталось",
                    o: 2
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Вопросы",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "для гостей",
                    btn: 3,
                    o: 2,
                    mb: "6px"
                },
                qpc: {
                    type: "input",
                    label: "Каждый N-й вопрос - во второй колонке на компьютере",
                    data: "3",
                    btn: 3,
                    o: 3
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    inp: !1,
                    maxC: 3,
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "Жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "Невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "3",
                            name: "",
                            role: "Ведущий",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Контакты",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "для связи",
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Group",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Общая группа",
                    o: 1
                },
                link: {
                    type: "input",
                    label: "Ссылка",
                    data: "https://t.me/test",
                    o: 2
                },
                name: {
                    type: "input",
                    label: "Название кнопки",
                    data: "Вступить в группу",
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "Дорогие друзья! Мы создали специальную группу, где можно узнать все важные детали праздника, поделиться фотографиями и видео, а также просто пообщаться. Давайте вместе сохраним теплые воспоминания об этом чудесном дне!",
                    size: "sm",
                    h: 170,
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                sign: {
                    type: "textarea",
                    label: "Подпись",
                    data: "See\nyou\nsoon",
                    size: "sm",
                    h: "60px",
                    o: 1
                },
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Будем рады видеть вас на нашем празднике",
                    size: "sm",
                    h: "60px",
                    o: 2
                }
            }
        }]
          , tx = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                wrap: {
                    type: "switch",
                    label: "Имена на отдельных строках",
                    data: !1,
                    o: 1
                },
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 2
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 3
                },
                d: {
                    type: "divider",
                    data: {
                        mt: 2,
                        mb: 2,
                        line: !0,
                        width: "30%"
                    },
                    o: 4
                },
                offFourthPhoto: {
                    type: "switch",
                    label: "Скрыть 4-е фото для ПК",
                    data: !1,
                    o: 5
                },
                photos: {
                    type: "file",
                    fType: "inviteMainPhoto4x",
                    label: "Ваше фото",
                    data: [],
                    o: 6
                },
                t: {
                    type: "text",
                    data: 4,
                    o: 7,
                    mb: "5px"
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дорогие Гости",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Вы получили это сообщение, а значит, мы спешим поделиться с вами радостной новостью – у нас скоро свадьба!\nМы приглашаем вас разделить с нами радость этого особенного события и стать частью нашей семейной истории. Ваше присутствие сделает наш день еще более значимым и незабываемым.",
                    size: "sm",
                    h: 250,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "История Любви",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад, когда мы встретились на вечеринке у общих друзей. С тех пор мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.\nС каждым годом наша любовь становилась всё сильнее, и теперь мы готовы сделать следующий шаг. Мы счастливы разделить этот особенный момент с вами и надеемся, что вы станете частью нашей дальнейшей истории.",
                    size: "sm",
                    h: 230,
                    o: 2
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto3x",
                    label: "Фотография",
                    data: [],
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дата Свадьбы",
                    o: 1
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Место Проведения",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!",
                    size: "sm",
                    h: 120,
                    o: 2
                },
                time: {
                    type: "input",
                    label: "Время",
                    data: "{{time}}",
                    o: 3
                },
                address: {
                    type: "input",
                    label: "Адрес",
                    data: "{{address}}",
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                isB: {
                    type: "switch",
                    label: "Черно-белая карта",
                    data: !0,
                    mb: "2px"
                },
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    inp: !1,
                    data: {
                        events: (0,
                        X.Z)(!1)
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Программа Дня",
                    btn: 3,
                    o: 1
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дресс Код",
                    btn: 3,
                    o: 1
                },
                cTitle: {
                    type: "input",
                    label: "Желательные цвета",
                    data: "Нюдовые цвета",
                    btn: 3,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Нам будет очень приятно, если вы поддержите цветовую гамму торжества и выберете наряды в соответствии с цветовой палитрой нашей свадьбы.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 3,
                    mb: 1
                },
                isOffPhoto: {
                    type: "switch",
                    label: "Отключить изображение",
                    data: !1,
                    btn: 3,
                    o: 4
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Фотография",
                    data: [],
                    btn: 3,
                    o: 5
                },
                DS: {
                    type: "DS",
                    maxI: 8,
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#e4d0c9"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#caab9a"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#c29a93"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#8d858c"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a1896f"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Свадьба Через",
                    o: 1
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Вопросы для Гостей",
                    btn: 3,
                    o: 1
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Group",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Общая группа",
                    o: 1
                },
                link: {
                    type: "input",
                    label: "Ссылка",
                    data: "https://t.me/test",
                    o: 2
                },
                name: {
                    type: "input",
                    label: "Название кнопки",
                    data: "Вступить в группу",
                    o: 3
                },
                text: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "Дорогие друзья! Мы создали специальную группу, где можно узнать все важные детали праздника, поделиться фотографиями и видео, а также просто пообщаться. Давайте вместе сохраним теплые воспоминания об этом чудесном дне!",
                    size: "sm",
                    h: 170,
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    inp: !0,
                    maxC: 3,
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "Жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "Невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "3",
                            name: "",
                            role: "Ведущая",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Контакты",
                    btn: 3,
                    o: 1
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Будем рады видеть вас на нашем празднике",
                    size: "sm",
                    h: "60px",
                    o: 1
                },
                hideMobilePhoto: {
                    type: "switch",
                    label: "Скрыть дополнительное фото",
                    data: !1,
                    o: 2
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto2x",
                    label: "Ваше фото",
                    data: [],
                    o: 3
                }
            }
        }]
          , tT = [{
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Music",
            blocks: {
                music: {
                    type: "music",
                    data: {
                        v: "1"
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            ndb: !0,
            id: "Main",
            blocks: {
                oneName: {
                    type: "input",
                    label: "Первое имя",
                    data: "{{oneName}}",
                    o: 1
                },
                twoName: {
                    type: "input",
                    label: "Второе имя",
                    data: "{{twoName}}",
                    o: 2
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Узнаёте этих детишек?",
                    o: 3
                },
                subtitle: {
                    type: "input",
                    label: "Подзаголовок",
                    data: "Да-да, это мы",
                    o: 4
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Время летит так быстро… Мы выросли, и теперь готовы создать свою семью.\nИ нам невероятно хочется, чтобы в этот важный день рядом были те, кто был с нами в самые тёплые моменты жизни.",
                    size: "sm",
                    h: 130,
                    mb: 1,
                    o: 5
                },
                isBigPhotos: {
                    type: "switch",
                    label: "Увеличить фотографии",
                    data: !1,
                    o: 6
                },
                photos: {
                    type: "file",
                    fType: "inviteMainPhoto2x",
                    label: "Ваши фотографии",
                    data: [],
                    o: 7
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Intro",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дорогие наши!",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст вступления",
                    data: "Если вы читаете это приглашение – значит, вы часть нашей истории. Спасибо, что были с нами всё это время – рядом, мысленно, в воспоминаниях. Спасибо за тепло, за слова, за молчание, за просто быть.",
                    size: "sm",
                    h: 150,
                    o: 2
                },
                text2: {
                    type: "textarea",
                    label: "Текст под фото",
                    data: "Мы с радостью приглашаем вас стать частью нового воспоминания – нашей свадьбы.",
                    size: "sm",
                    h: 95,
                    o: 3
                },
                photo: {
                    type: "file",
                    fType: "invitePhoto",
                    label: "Ваша фотография",
                    data: [],
                    o: 4
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Calendar",
            blocks: {
                showCal: {
                    type: "switch",
                    label: "Показывать весь месяц",
                    data: !0,
                    o: 1
                },
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Отметьте в своём календаре день, когда родится новая семья",
                    size: "sm",
                    h: 50,
                    o: 2
                },
                subtitle: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "день, к которому мы шли и ждали с нетерпением",
                    size: "sm",
                    h: 50,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "LStory",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Когда всё только начиналось…",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Наша история началась пять лет назад. За это время мы прошли вместе через множество приключений и счастливых моментов. Наши отношения развивались и крепли с каждым днём. Мы вместе путешествовали, поддерживали друг друга в трудные времена и радовались общим победам.\nС каждым годом наша любовь становилась всё сильнее, и теперь мы готовы сделать следующий шаг. Мы счастливы разделить этот особенный момент с вами и надеемся, что вы станете частью нашей дальнейшей истории.",
                    size: "sm",
                    h: 230,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            sp: 3,
            id: "Place",
            blocks: {
                title: {
                    type: "textarea",
                    label: "Заголовок",
                    data: "Тёплое место, где будет ещё одно важное воспоминание",
                    size: "sm",
                    h: 50,
                    o: 1
                },
                subtitle: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Мы выбрали место, где будет уютно, красиво и особенно по-домашнему.",
                    size: "sm",
                    h: 50,
                    o: 2
                },
                textAdd: {
                    type: "input",
                    label: "Описание места",
                    data: "Ждём вас по адресу",
                    o: 3
                },
                address: {
                    type: "input",
                    label: "Адрес",
                    data: "{{address}}",
                    o: 4
                },
                textTime: {
                    type: "input",
                    label: "Описание времени",
                    data: "Сбор гостей",
                    o: 5
                },
                time: {
                    type: "input",
                    label: "Время",
                    data: "{{time}}",
                    o: 6
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Map",
            ndb: 'Связан с "Местом проведения"',
            blocks: {
                map: {
                    type: "map",
                    data: {
                        t: "Y",
                        d: {
                            coords: "{{coords}}",
                            address: "{{address}}",
                            scale: 11
                        }
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DayProgram",
            blocks: {
                DP: {
                    type: "DP",
                    inp: !1,
                    data: {
                        events: (0,
                        X.Z)(!1)
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Как пройдёт наш день",
                    btn: 3,
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Не просто план дня, а моменты, которые мы хотим разделить с вами.",
                    size: "sm",
                    h: 50,
                    btn: 3,
                    o: 2
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "DressCode",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Дресс-код",
                    btn: 3,
                    o: 1
                },
                cTitle: {
                    type: "input",
                    label: "Желательные цвета",
                    data: "Нюдовые цвета",
                    btn: 3,
                    o: 2
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "В этот день будет много красоты, и вы – её важная часть.\nЕсли вам не сложно, поддержите нашу цветовую палитру – это сделает фотографии особенно атмосферными.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 3,
                    mb: 1
                },
                DS: {
                    type: "DS",
                    maxI: 5,
                    data: {
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#A1896F"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#C4C4C4"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#8D858C"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#E4D0C9"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#C29A93"
                        }]
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Timer",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Совсем скоро…",
                    o: 1
                },
                sign: {
                    type: "textarea",
                    label: "Подпись",
                    data: "До дня, который станет началом нового \xabмы\xbb",
                    size: "sm",
                    h: 50,
                    o: 2
                },
                date: {
                    type: "date",
                    data: {
                        utc: 0
                    },
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Wishes",
            blocks: {
                WS: {
                    type: "WS",
                    inp: !1,
                    data: {
                        wishes: [{
                            id: "1",
                            text: "Если вы задумались о подарке – самым приятным для нас будет \xabбукет\xbb в конверте. Такой подарок точно не завянет и поможет воплотить наши мечты в жизнь."
                        }, {
                            id: "2",
                            text: "Формат нашего торжества не предполагает детской зоны, и мы хотим, чтобы каждый мог спокойно отдохнуть и повеселиться. Поэтому будем признательны, если мамы и папы оставят деток дома в надёжных руках."
                        }, {
                            id: "3",
                            text: "Цветы – это прекрасно, но, чтобы не переживать за их судьбу после праздника, мы будем рады, если вместо букета вы подарите бутылочку вашего любимого напитка. Это добавит ещё больше тепла нашему вечеру!"
                        }, {
                            id: "4",
                            text: "Мы знаем, как сильно эмоции переполняют в этот день, но просим воздержаться от криков \xabгорько\xbb, ведь поцелуй – это искренний знак чувств, он не бывает по заказу. Если кто-то не сдержится, будьте готовы пополнить наш семейный бюджет штрафом в размере 1000 рублей. \uD83D\uDE0A"
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Наши тёплые пожелания",
                    btn: 3,
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст описания",
                    data: "Мы хотим, чтобы этот день стал не только началом нашей семьи, но и тёплым воспоминанием для каждого из вас.",
                    size: "sm",
                    h: 120,
                    btn: 3,
                    o: 2
                },
                sign: {
                    type: "textarea",
                    label: "Подпись",
                    data: "Спасибо за понимание и поддержку! Ваше присутствие – лучший подарок для нас",
                    size: "sm",
                    h: 50,
                    btn: 3,
                    o: 3
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Quiz",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Вопросы для гостей",
                    btn: 3,
                    o: 1
                },
                quiz: {
                    type: "quiz",
                    data: {
                        questions: $.Z
                    }
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Group",
            blocks: {
                isBgColor: {
                    type: "switch",
                    label: "Цветной фон",
                    data: !0,
                    o: 1
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Наша общая группа",
                    o: 2
                },
                link: {
                    type: "input",
                    label: "Ссылка",
                    data: "https://t.me/test",
                    o: 3
                },
                name: {
                    type: "input",
                    label: "Название кнопки",
                    data: "Вступить в группу",
                    o: 4
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Чтобы мы могли остаться на связи, делиться радостью, фотографиями и просто болтать – мы создали чат.\nПрисоединяйтесь! Давайте вместе сохраним атмосферу этого дня.",
                    size: "sm",
                    h: 170,
                    o: 5
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Contacts",
            blocks: {
                cts: {
                    type: "CT",
                    inp: !0,
                    maxC: 3,
                    maxL: 5,
                    data: {
                        cts: [{
                            id: "1",
                            name: "{{oneName}}",
                            role: "Жених",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "2",
                            name: "{{twoName}}",
                            role: "Невеста",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }, {
                            id: "3",
                            name: "",
                            role: "Ведущая",
                            photo: [],
                            links: [{
                                t: "Phone",
                                d: "+7 (999) 999-99-99"
                            }, {
                                t: "Email",
                                d: "email@gmail.com"
                            }, {
                                t: "Telegram",
                                d: "Username"
                            }, {
                                t: "WhatsApp",
                                d: "+79999999999"
                            }, {
                                t: "VK",
                                d: "https://vk.com/username"
                            }]
                        }]
                    }
                },
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Если у вас остались вопросы",
                    btn: 3,
                    o: 1
                },
                subtitle: {
                    type: "textarea",
                    label: "Подзаголовок",
                    data: "Пишите, звоните, спрашивайте – мы всегда на связи!",
                    size: "sm",
                    h: 50,
                    btn: 3,
                    o: 1
                }
            }
        }, {
            title: "CEDT",
            variant: "v1",
            isOn: !0,
            id: "Final",
            blocks: {
                title: {
                    type: "input",
                    label: "Заголовок",
                    data: "Спасибо, что вы с нами",
                    o: 1
                },
                text: {
                    type: "textarea",
                    label: "Текст",
                    data: "Было бы здорово провести этот день вместе с вами.\nСпасибо, что были частью наших детских воспоминаний – и теперь будете частью взрослой сказки.",
                    size: "sm",
                    h: 125,
                    o: 2
                },
                nameOne: {
                    type: "input",
                    label: "Первое короткое имя",
                    data: "Маша",
                    o: 3
                },
                nameTwo: {
                    type: "input",
                    label: "Второе короткое имя",
                    data: "Дима",
                    o: 4
                },
                photos: {
                    type: "file",
                    fType: "invitePhoto2x",
                    label: "Ваше фото",
                    data: [],
                    o: 5
                }
            }
        }]
          , tC = {
            flexible_wedding_v1: {
                kind: "flexible",
                type: "wedding",
                variant: "v1",
                data: {
                    blocks: tu,
                    settings: {
                        theme: {
                            background: {
                                type: "image",
                                payload: "1"
                            }
                        }
                    }
                }
            },
            design_wedding_v1: {
                kind: "design",
                type: "wedding",
                variant: "v1",
                data: {
                    blocks: tt,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(8400)]).then(a.bind(a, 38400)), {
                        loadableGenerated: {
                            webpack: () => [38400]
                        }
                    })
                }
            },
            design_wedding_v2: {
                kind: "design",
                type: "wedding",
                variant: "v2",
                data: {
                    blocks: te,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(5853)]).then(a.bind(a, 85853)), {
                        loadableGenerated: {
                            webpack: () => [85853]
                        }
                    })
                }
            },
            design_wedding_v3: {
                kind: "design",
                type: "wedding",
                variant: "v3",
                data: {
                    blocks: tf,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(7066)]).then(a.bind(a, 77066)), {
                        loadableGenerated: {
                            webpack: () => [77066]
                        }
                    })
                }
            },
            design_wedding_v4: {
                kind: "design",
                type: "wedding",
                variant: "v4",
                data: {
                    blocks: th,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(9116)]).then(a.bind(a, 29116)), {
                        loadableGenerated: {
                            webpack: () => [29116]
                        }
                    })
                }
            },
            design_wedding_v5: {
                kind: "design",
                type: "wedding",
                variant: "v5",
                data: {
                    blocks: tg,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(4698)]).then(a.bind(a, 34698)), {
                        loadableGenerated: {
                            webpack: () => [34698]
                        }
                    })
                }
            },
            design_wedding_v6: {
                kind: "design",
                type: "wedding",
                variant: "v6",
                data: {
                    blocks: tk,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(9668)]).then(a.bind(a, 49668)), {
                        loadableGenerated: {
                            webpack: () => [49668]
                        }
                    })
                }
            },
            design_wedding_v7: {
                kind: "design",
                type: "wedding",
                variant: "v7",
                data: {
                    blocks: tx,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(4957)]).then(a.bind(a, 14957)), {
                        loadableGenerated: {
                            webpack: () => [14957]
                        }
                    })
                }
            },
            design_wedding_v8: {
                kind: "design",
                type: "wedding",
                variant: "v8",
                data: {
                    blocks: tT,
                    component: (0,
                    J.default)( () => Promise.all([a.e(6886), a.e(501), a.e(1781)]).then(a.bind(a, 51781)), {
                        loadableGenerated: {
                            webpack: () => [51781]
                        }
                    })
                }
            },
            flexible_wedding_v2: {
                kind: "flexible",
                type: "wedding",
                variant: "v2",
                data: {
                    blocks: tb,
                    settings: {
                        theme: {
                            background: {
                                type: "image",
                                payload: "1"
                            }
                        }
                    }
                }
            },
            flexible_wedding_v3: {
                kind: "flexible",
                type: "wedding",
                variant: "v3",
                data: {
                    blocks: tm,
                    settings: {
                        theme: {
                            background: {
                                type: "image",
                                payload: "1"
                            }
                        }
                    }
                }
            },
            flexible_wedding_v4: {
                kind: "flexible",
                type: "wedding",
                variant: "v4",
                data: {
                    blocks: tv,
                    settings: {
                        theme: {
                            background: {
                                type: "image",
                                payload: "1"
                            }
                        }
                    }
                }
            },
            flexible_wedding_v5: {
                kind: "flexible",
                type: "wedding",
                variant: "v5",
                data: {
                    blocks: ty,
                    settings: {
                        theme: {
                            background: {
                                type: "image",
                                payload: "1"
                            }
                        }
                    }
                }
            }
        };
        function tw(t) {
            var e;
            let {currentInvite: a, iframeConstructor: n, isLoading: l, isWaitForAnimate: o} = t
              , r = "flexible_wedding_v0" == (e = a.kind + "_" + a.type + "_" + a.variant) || "new" === e ? {
                type: "wedding",
                kind: "flexible",
                variant: "v0",
                data: {
                    blocks: [],
                    settings: {
                        theme: {
                            background: {
                                type: "none"
                            }
                        }
                    }
                }
            } : Object.prototype.hasOwnProperty.call(tC, e) ? tC[e] : (console.warn('Template data for kindTypeVariant "'.concat(e, '" does not exist.')),
            null);
            return r && "design" === r.kind && r.data.component ? (0,
            i.jsx)(r.data.component, {
                invite: a,
                isIframe: n,
                isLoading: l,
                isWaitForAnimate: o
            }) : (0,
            i.jsx)(i.Fragment, {})
        }
        function tE(t) {
            var e;
            let {inviteURL: a, templateId: o, themeTemplate: r} = t
              , s = (0,
            l.useSearchParams)()
              , d = "iframeConstructor" === s.get("type")
              , p = "iframeTheme" === s.get("type")
              , c = d || p
              , u = "preview" === s.get("type")
              , [b,m] = (0,
            n.useState)(!0)
              , v = (0,
            g.CG)(k.Pb);
            e = !c && !u && !v.purchased,
            (0,
            n.useEffect)( () => {
                let t = null;
                if (e && "template" !== a && !b) {
                    (t = document.createElement("div")).style.position = "fixed",
                    t.style.top = "0",
                    t.style.left = "0",
                    t.style.width = "100vw",
                    t.style.height = "100vh",
                    t.style.pointerEvents = "none",
                    t.style.display = "flex",
                    t.style.flexWrap = "wrap",
                    t.style.zIndex = "1000",
                    t.style.opacity = "0",
                    t.style.transition = "opacity 1s ease-in-out",
                    t.style.justifyContent = "space-evenly",
                    t.style.transitionDelay = "0.5s",
                    t.style.color = "#7D7D7D";
                    for (let e = 0; e < 100; e++) {
                        let e = document.createElement("div");
                        e.textContent = "Черновик",
                        e.style.font = "20px Arial",
                        e.style.opacity = "0.18",
                        e.style.transform = "rotate(-45deg)",
                        e.style.margin = "48px",
                        t.appendChild(e)
                    }
                    setTimeout( () => {
                        t && (t.style.opacity = "1")
                    }
                    , 250),
                    document.body.insertBefore(t, document.body.firstChild)
                }
                return () => {
                    t && document.body.removeChild(t)
                }
            }
            , [b]);
            let[y] = (0,
            I.Nr)(b, 150);
            return (!function(t) {
                let {isIframe: e, setLoading: a, template: i} = t;
                _(e, a, i)
            }({
                isIframe: c,
                setLoading: m,
                template: {
                    kind: v.kind,
                    type: v.type,
                    variant: v.variant
                }
            }),
            "notFound" === function(t) {
                let {isPreview: e, isIframe: a, inviteURL: i, setLoading: l, templateId: o, template: r} = t
                  , s = (0,
                g.TL)()
                  , [d,p] = (0,
                n.useState)(null);
                return (0,
                n.useEffect)( () => {
                    a || w("WrapperClientPage", () => {
                        D(r, 500, () => {
                            C( () => {
                                document.fonts.ready.then( () => {
                                    setTimeout( () => {
                                        l(!1)
                                    }
                                    , 300)
                                }
                                )
                            }
                            )
                        }
                        )
                    }
                    )
                }
                , [r.kind, a]),
                (0,
                n.useEffect)( () => {
                    if (a)
                        return;
                    let t = t => {
                        t.length < 1 && setTimeout( () => {
                            C( () => {
                                l(!1)
                            }
                            )
                        }
                        , 50)
                    }
                    ;
                    "example" === i || "example-mini" === i ? (0,
                    z.Z)({
                        method: "get",
                        url: "/api/templates/getById",
                        params: {
                            id: "example",
                            mini: ("example-mini" === i).toString()
                        }
                    }).then(e => {
                        e.isData && (e.data ? (s((0,
                        k.fh)(e.data)),
                        t(e.data.blocks)) : p("notFound"))
                    }
                    ) : "template" === i && o ? (0,
                    z.Z)({
                        method: "get",
                        url: "/api/templates/getById",
                        params: {
                            id: o
                        }
                    }).then(e => {
                        e.isData && (e.data ? (s((0,
                        k.fh)(e.data)),
                        t(e.data.blocks)) : p("notFound"))
                    }
                    ) : (0,
                    z.Z)({
                        method: "get",
                        url: "/api/invites/get/byURL",
                        params: {
                            url: i,
                            isPreview: e
                        }
                    }).then(e => {
                        e.isData && (e.data.notFound ? p("notFound") : (s((0,
                        k.fh)(e.data)),
                        t(e.data.blocks)))
                    }
                    )
                }
                , []),
                d
            }({
                isIframe: c,
                templateId: o,
                isPreview: u,
                inviteURL: a,
                setLoading: m,
                template: {
                    kind: v.kind,
                    type: v.type,
                    variant: v.variant
                }
            })) ? (0,
            i.jsx)(Z, {
                classNameFont: h.R.comfortaa.className
            }) : (0,
            i.jsxs)(i.Fragment, {
                children: [b && (0,
                i.jsx)(f, {
                    className: h.R.comfortaa.className,
                    themeTemplate: r
                }), v.kind && "flexible" !== v.kind ? (0,
                i.jsx)(tw, {
                    currentInvite: v,
                    iframeConstructor: d,
                    isLoading: b,
                    isWaitForAnimate: y
                }) : (0,
                i.jsx)(Y, {
                    isLoading: b,
                    isWaitForAnimate: y,
                    iframeConstructor: d,
                    currentInvite: v,
                    isIframe: c
                })]
            })
        }
    },
    54189: function(t, e) {
        "use strict";
        e.Z = {
            light: {
                background: "#eff0f5",
                heart: "#f8595f",
                text: "#f8595f"
            },
            dark: {
                background: "#1e1e1e",
                heart: "#f66064",
                text: "#ff7a7e"
            }
        }
    },
    61859: function(t, e, a) {
        "use strict";
        a.d(e, {
            BL: function() {
                return n
            },
            Bs: function() {
                return s
            },
            JB: function() {
                return o
            },
            R0: function() {
                return l
            },
            Yg: function() {
                return r
            }
        });
        let i = (0,
        a(97281).oM)({
            name: "@@easyMode",
            initialState: !1,
            reducers: {
                updateEasyMode: (t, e) => e.payload,
                toggleEasyMode: (t, e) => !t,
                resetEasyMode: () => !1
            }
        })
          , {updateEasyMode: n, toggleEasyMode: l, resetEasyMode: o} = i.actions
          , r = i.reducer
          , s = t => t.easyMode
    },
    57704: function(t, e, a) {
        "use strict";
        a.d(e, {
            Z: function() {
                return l
            }
        });
        var i = a(2265)
          , n = a(98536);
        function l() {
            return (0,
            i.useCallback)( (t, e, a) => {
                setTimeout( () => {
                    let i = null;
                    (i = "string" == typeof t ? (0,
                    n.Z)((e ? "c_block_" : "s_block_") + t) : t) && (i.style.transition = "background 0.2s ease-in-out",
                    i.style.background = a || "#fffcee",
                    setTimeout( () => {
                        i.style.removeProperty("background")
                    }
                    , 500))
                }
                , 400)
            }
            , [])
        }
    },
    69451: function(t, e, a) {
        "use strict";
        a.d(e, {
            Z: function() {
                return i
            }
        });
        class i {
            isLocalStorageAvailable() {
                try {
                    let t = "__test_temporary_key_data__";
                    return window.localStorage.setItem(t, t),
                    window.localStorage.removeItem(t),
                    !0
                } catch (t) {
                    return !1
                }
            }
            getItem(t) {
                return this.isLocalStorageAvailable() ? window.localStorage.getItem(t) : (console.warn("LocalStorage is not available."),
                null)
            }
            setItem(t, e) {
                this.isLocalStorageAvailable() ? window.localStorage.setItem(t, e) : console.warn("LocalStorage is not available. Item not saved.")
            }
            removeItem(t) {
                this.isLocalStorageAvailable() ? window.localStorage.removeItem(t) : console.warn("LocalStorage is not available. Item not removed.")
            }
            clear() {
                this.isLocalStorageAvailable() ? window.localStorage.clear() : console.warn("LocalStorage is not available. Storage not cleared.")
            }
        }
    },
    95218: function() {},
    28002: function() {}
}, function(t) {
    t.O(0, [7914, 7475, 6614, 4024, 606, 9824, 1878, 2895, 1021, 3665, 1779, 7259, 9956, 6305, 5706, 2376, 6950, 5280, 5968, 8885, 7336, 1362, 865, 8232, 3147, 7400, 7204, 5106, 9171, 6577, 3691, 681, 3754, 8010, 2971, 2117, 1744], function() {
        return t(t.s = 35117)
    }),
    _N_E = t.O()
}
]);
