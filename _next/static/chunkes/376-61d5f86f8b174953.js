"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[376], {
    10376: function(e, a, r) {
        r.r(a),
        r.d(a, {
            default: function() {
                return y
            }
        });
        var t = r(57437)
          , s = r(2265)
          , n = r(36389)
          , i = r(86827)
          , o = r(72760)
          , l = r(26262)
          , c = r(16595)
          , m = r(4360)
          , d = r(25810)
          , u = r(44060)
          , h = r(93085)
          , f = r(37979)
          , g = r(49386)
          , p = r(10875)
          , x = r(57793)
          , N = r(68686)
          , w = r(71956)
          , b = r(95162)
          , j = r(46963)
          , k = r(90480)
          , S = r(62179)
          , v = r(54189);
        function y(e) {
            let {error: a, reset: r, isGlobal: y} = e
              , [C,E] = (0,
            s.useState)(!0)
              , [_,R] = (0,
            s.useState)(!1);
            (0,
            s.useEffect)( () => {
                a.message && (a.message.includes("Loading chunk") || a.message.includes("Loading CSS chunk")) ? ((0,
                b.Z)({
                    type: "info",
                    msg: {
                        msg: "Reloading page due to a chunk loading error",
                        err: a.message
                    }
                }, !0),
                setTimeout( () => {
                    window.location.reload()
                }
                , 1500)) : ((0,
                b.Z)({
                    type: "error",
                    error: a,
                    msg: {
                        page: y ? "GlobalError" : "ErrorPage"
                    }
                }),
                E(!1))
            }
            , [a]);
            let Z = (0,
            s.useCallback)( () => {
                R(!0),
                window.location.reload()
            }
            , [])
              , {isOpen: z, onOpen: O, onClose: M} = (0,
            n.q)()
              , I = (0,
            S.Z)();
            return C ? (0,
            t.jsx)(j.Chakra, {
                children: (0,
                t.jsx)(i.M, {
                    w: "100vw",
                    h: "100vh",
                    bg: v.Z.light.background,
                    children: (0,
                    t.jsx)(o.$, {
                        size: "md"
                    })
                })
            }) : (0,
            t.jsxs)(j.Chakra, {
                children: [(0,
                t.jsxs)(l.g, {
                    w: "100%",
                    h: "100vh",
                    bg: v.Z.light.background,
                    flexDirection: "column",
                    justifyContent: "center",
                    children: [(0,
                    t.jsx)(c.E, {
                        src: "/icons/error.png",
                        alt: "Ошибка",
                        maxW: "150px"
                    }), (0,
                    t.jsxs)(l.g, {
                        mt: "12px",
                        textAlign: "center",
                        color: "#f8595f",
                        className: k.R.comfortaa.className,
                        maxW: "300px",
                        children: [(0,
                        t.jsx)(m.x, {
                            fontSize: "1.3rem",
                            children: "Возникла ошибка"
                        }), (0,
                        t.jsx)(m.x, {
                            fontSize: "1rem",
                            children: "Если ошибка появится снова, пожалуйста, обратитесь в службу поддержки"
                        }), (0,
                        t.jsxs)(l.g, {
                            w: "100%",
                            maxW: "230px",
                            padding: "0 5px",
                            children: [(0,
                            t.jsx)(d.z, {
                                w: "100%",
                                isLoading: _,
                                border: "1px solid #f8595f",
                                pt: "2px",
                                mt: "7px",
                                borderRadius: "8px",
                                onClick: Z,
                                colorScheme: "red",
                                variant: "outline",
                                children: (0,
                                t.jsx)(m.x, {
                                    fontSize: "1rem",
                                    color: "#f8595f",
                                    children: "Обновить страницу"
                                })
                            }), (0,
                            t.jsx)(d.z, {
                                w: "100%",
                                isLoading: z || _,
                                colorScheme: "blue",
                                pt: "2px",
                                variant: "outline",
                                borderRadius: "8px",
                                onClick: O,
                                children: (0,
                                t.jsx)(m.x, {
                                    fontSize: "1rem",
                                    children: "Служба поддержки"
                                })
                            })]
                        })]
                    })]
                }), (0,
                t.jsxs)(u.u_, {
                    blockScrollOnMount: !1,
                    isOpen: z,
                    onClose: M,
                    isCentered: !0,
                    children: [(0,
                    t.jsx)(h.Z, {}), (0,
                    t.jsxs)(f.h, {
                        containerProps: {
                            padding: "0 8px"
                        },
                        children: [(0,
                        t.jsx)(g.x, {
                            children: "Служба поддержки"
                        }), (0,
                        t.jsx)(p.o, {}), (0,
                        t.jsxs)(x.f, {
                            children: [(0,
                            t.jsxs)(m.x, {
                                children: ["Telegram: ", (0,
                                t.jsx)(N.r, {
                                    href: "https://t.me/EventrixBot",
                                    target: "_blank",
                                    color: "blue.500",
                                    children: "@EventrixBot"
                                })]
                            }), (0,
                            t.jsxs)(m.x, {
                                children: ["Почта: ", (0,
                                t.jsx)(N.r, {
                                    href: "mailto:support@eventrix.pro",
                                    color: "blue.500",
                                    children: "support@eventrix.pro"
                                })]
                            }), I && (0,
                            t.jsxs)(m.x, {
                                children: ["Онлайн-консультант: ", (0,
                                t.jsx)(N.r, {
                                    href: "#",
                                    color: "blue.500",
                                    onClick: () => I.toggle("open"),
                                    children: "Открыть"
                                })]
                            })]
                        }), (0,
                        t.jsx)(w.m, {
                            children: (0,
                            t.jsx)(d.z, {
                                colorScheme: "blue",
                                onClick: M,
                                children: "Закрыть"
                            })
                        })]
                    })]
                })]
            })
        }
    },
    46963: function(e, a, r) {
        r.d(a, {
            Chakra: function() {
                return o
            }
        });
        var t = r(57437)
          , s = r(78734)
          , n = r(74646);
        r(2265);
        let i = (0,
        r(64248).B1)({
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
        function o(e) {
            let {children: a} = e;
            return (0,
            t.jsx)(s.n, {
                children: (0,
                t.jsx)(n.x, {
                    theme: i,
                    children: a
                })
            })
        }
    },
    35695: function(e, a, r) {
        r.d(a, {
            A: function() {
                return n
            }
        });
        var t = r(2661)
          , s = r(97048);
        let n = (e, a) => {
            let {positionMobile: r, ...n} = e
              , {toast: i} = (0,
            t.I)()
              , o = {
                duration: 3e3,
                isClosable: !0,
                position: "top-right",
                containerStyle: {
                    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    maxWidth: "400px",
                    ...a
                },
                ...n
            };
            s.tq && (n.hasOwnProperty("position") || (o.position = "top"),
            r && (o.position = r));
            let l = i(o);
            return {
                close: () => i.close(l)
            }
        }
    },
    79065: function(e, a, r) {
        r.d(a, {
            L: function() {
                return n
            },
            S: function() {
                return i
            }
        });
        var t = r(71318)
          , s = r.n(t);
        let n = s().start
          , i = s().done
    },
    90480: function(e, a, r) {
        r.d(a, {
            R: function() {
                return V
            }
        });
        var t = r(12271)
          , s = r.n(t)
          , n = r(58983)
          , i = r.n(n)
          , o = r(57444)
          , l = r.n(o)
          , c = r(78300)
          , m = r.n(c)
          , d = r(99974)
          , u = r.n(d)
          , h = r(7203)
          , f = r.n(h)
          , g = r(74265)
          , p = r.n(g)
          , x = r(65197)
          , N = r.n(x)
          , w = r(31139)
          , b = r.n(w)
          , j = r(91066)
          , k = r.n(j)
          , S = r(78550)
          , v = r.n(S)
          , y = r(70311)
          , C = r.n(y)
          , E = r(77913)
          , _ = r.n(E)
          , R = r(79456)
          , Z = r.n(R)
          , z = r(39219)
          , O = r.n(z)
          , M = r(40653)
          , I = r.n(M)
          , L = r(89835)
          , D = r.n(L)
          , A = r(63164)
          , B = r.n(A)
          , P = r(80883)
          , U = r.n(P)
          , F = r(47909)
          , W = r.n(F)
          , q = r(18308)
          , T = r.n(q)
          , J = r(91807)
          , $ = r.n(J)
          , G = r(37670)
          , H = r.n(G)
          , K = r(85502)
          , Q = r.n(K);
        let V = {
            default: {
                fontFamily: "var(--chakra-fonts-body)",
                weight: []
            },
            nautilus: {
                className: i().className,
                weight: []
            },
            czizh: {
                className: l().className,
                weight: []
            },
            amadeus: {
                className: m().className,
                weight: []
            },
            lora: {
                className: u().className,
                weight: ["400", "500", "600", "700"]
            },
            annabelle: {
                className: s().className,
                weight: []
            },
            pacifico: {
                className: f().className,
                weight: ["400"]
            },
            great_vibes: {
                className: H().className,
                weight: ["400"]
            },
            roboto: {
                className: T().className,
                weight: ["100", "300", "400", "500", "700", "900"]
            },
            nunito: {
                className: p().className,
                weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
            },
            merriweather: {
                className: N().className,
                weight: ["300", "400", "700", "900"]
            },
            playfair_display: {
                className: $().className,
                weight: ["400", "500", "600", "700", "800", "900"]
            },
            rubik: {
                className: b().className,
                weight: ["300", "400", "500", "600", "700", "800", "900"]
            },
            noto_serif: {
                className: k().className,
                weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
            },
            manrope: {
                className: v().className,
                weight: ["200", "300", "400", "500", "600", "700", "800"]
            },
            lobster: {
                className: C().className,
                weight: ["400"]
            },
            caveat: {
                className: _().className,
                weight: ["400", "500", "600", "700"]
            },
            comfortaa: {
                className: Z().className,
                weight: ["300", "400", "500", "600", "700"]
            },
            vollkorn: {
                className: O().className,
                weight: ["400", "500", "600", "700", "800", "900"]
            },
            marck_script: {
                className: I().className,
                weight: ["400"]
            },
            bad_script: {
                className: D().className,
                weight: ["400"]
            },
            kurale: {
                className: B().className,
                weight: ["400"]
            },
            marmelad: {
                className: U().className,
                weight: ["400"]
            },
            balsamiq_sans: {
                className: W().className,
                weight: ["400", "700"]
            },
            open_sans: {
                className: Q().className,
                weight: ["400", "500", "600", "700", "800", "900"]
            }
        }
    },
    54189: function(e, a) {
        a.Z = {
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
    95162: function(e, a, r) {
        r.d(a, {
            Z: function() {
                return s
            }
        });
        var t = r(36289);
        function s(e, a) {
            if (a && console[e.type](e),
            e.error && e.error instanceof Error) {
                var r;
                e.error = JSON.parse(JSON.stringify(r = e.error, Object.getOwnPropertyNames(r)))
            }
            (0,
            t.Z)({
                method: "post",
                url: "/api/logs/create",
                data: {
                    log: e,
                    path: window.location.href
                }
            }, !1, !1, !0).then(e => {}
            )
        }
    },
    36289: function(e, a, r) {
        r.d(a, {
            Z: function() {
                return o
            }
        });
        var t = r(83464)
          , s = r(46220)
          , n = r(35695)
          , i = r(79065);
        async function o(e, a, r, o) {
            (a = void 0 !== a && a) && (0,
            i.L)();
            let l = await function(e) {
                let a = s.operation({
                    retries: 3
                });
                return new Promise( (r, s) => {
                    a.attempt(async s => {
                        try {
                            let s;
                            if (s = "file"in e || "files[]"in e ? await t.Z.postForm(e.url, {
                                file: e.file,
                                "files[]": e["files[]"]
                            }) : await (0,
                            t.Z)(e),
                            200 !== s.status) {
                                if (a.retry())
                                    return;
                                return r({
                                    error: !0,
                                    message: {
                                        title: "Сервис временно не доступен",
                                        description: "Пожалуйста, повторите попытку немного позже"
                                    }
                                })
                            }
                            return s.data.error,
                            r(s.data)
                        } catch (t) {
                            if (a.retry(t))
                                return;
                            if (e.errorMessageConnect)
                                return r({
                                    error: !0,
                                    message: {
                                        title: e.errorMessageConnect.title,
                                        description: e.errorMessageConnect.description
                                    }
                                });
                            return r({
                                error: !0,
                                message: {
                                    title: "Произошла ошибка при подключении",
                                    description: "Пожалуйста, проверьте подключение к интернету или повторите попытку немного позже"
                                }
                            })
                        }
                    }
                    )
                }
                )
            }(e);
            if (l.redirectUrl && !r)
                return window.location.replace(l.redirectUrl),
                {
                    isData: !1,
                    reason: "REDIRECT"
                };
            if (l.error) {
                if (o)
                    return {
                        isData: !1,
                        reason: "ERROR"
                    };
                let e = {
                    status: "error",
                    title: "",
                    duration: 5e3
                };
                return l.message.title || l.message.description || (e.title = "Возникла ошибка",
                e.description = "Попробуйте ещё раз"),
                l.message.title && (e.title = l.message.title),
                l.message.description && (e.description = l.message.description),
                a && (0,
                i.S)(),
                (0,
                n.A)(e),
                {
                    isData: !1,
                    reason: "ERROR"
                }
            }
            return a && (0,
            i.S)(),
            {
                isData: !0,
                data: r ? l : l.data
            }
        }
    },
    62179: function(e, a, r) {
        r.d(a, {
            Z: function() {
                return s
            }
        });
        var t = r(2265);
        function s() {
            let[e,a] = (0,
            t.useState)(null);
            return (0,
            t.useEffect)( () => {
                let e = setInterval( () => {
                    let r = window.$chatwoot;
                    r && r.hasLoaded && (a(r),
                    clearInterval(e))
                }
                )
            }
            , []),
            e
        }
    }
}]);
