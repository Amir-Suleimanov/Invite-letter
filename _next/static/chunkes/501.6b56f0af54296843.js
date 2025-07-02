"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[501], {
    93738: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(57437)
          , o = n(17923);
        function i(e) {
            let {map: t, iframeProps: n, overlayStyleYandex: i, overlayType: l} = e
              , a = (0,
            o.Z)("max", 1024)
              , s = function(e) {
                if (!e)
                    return;
                let {t, d: n} = e
                  , r = n.scale || 11;
                if ("G" === t && n.address)
                    return {
                        src: "https://www.google.com/maps/embed/v1/place?key=".concat("AIzaSyBPhVoskBKDNhwXAFXuAtgmi1dDBhbQiPo", "&q=").concat(encodeURIComponent(n.address), "&zoom=").concat(r),
                        type: "G",
                        query: "key=".concat("AIzaSyBPhVoskBKDNhwXAFXuAtgmi1dDBhbQiPo", "&q=").concat(encodeURIComponent(n.address), "&zoom=").concat(r)
                    };
                if ("Y" === t && n.coords) {
                    let e = (e => {
                        let t = e.split(",").map(Number);
                        return 2 !== t.length || isNaN(t[0]) || isNaN(t[1]) ? null : t.reverse().join(",")
                    }
                    )(n.coords);
                    if (e)
                        return {
                            src: "https://yandex.ru/map-widget/v1/?z=".concat(r, "&l=map,trf&pt=").concat(e, "&scroll=false"),
                            type: "Y",
                            query: "z=".concat(r, "&l=map,trf&pt=").concat(e, "&scroll=false")
                        }
                }
            }(t)
              , u = "https://eventrix.pro";
            if (!s)
                return (0,
                r.jsx)("iframe", {
                    src: u + "/map/empty",
                    ...n
                });
            if ("Y" === s.type) {
                var c, d, f, p, m, v, h, g;
                if (!a)
                    return (0,
                    r.jsx)("iframe", {
                        src: s.src,
                        ...n
                    });
                let e = u + "/map/yandex?" + new URLSearchParams({
                    query: s.query,
                    lock: a + "",
                    ovT: l,
                    ovH: (null == i ? void 0 : null === (c = i.text) || void 0 === c ? void 0 : c.height) || "",
                    ovFS: (null == i ? void 0 : null === (d = i.text) || void 0 === d ? void 0 : d.fontSize) || "",
                    ovO: (null == i ? void 0 : null === (f = i.text) || void 0 === f ? void 0 : f.opacity) || "",
                    ovC: (null == i ? void 0 : null === (p = i.text) || void 0 === p ? void 0 : p.color) || "",
                    ovCBG: (null == i ? void 0 : null === (m = i.text) || void 0 === m ? void 0 : m.colorBG) || "",
                    ovLH: (null == i ? void 0 : null === (v = i.text) || void 0 === v ? void 0 : v.lineHeight) || "",
                    ovBSC: (null == i ? void 0 : null === (h = i.bubble) || void 0 === h ? void 0 : h.boxSizeContainer) || "",
                    ovBSS: (null == i ? void 0 : null === (g = i.bubble) || void 0 === g ? void 0 : g.boxSizeSvg) || ""
                }).toString();
                return (0,
                r.jsx)("iframe", {
                    src: e,
                    ...n
                })
            }
            return (0,
            r.jsx)("iframe", {
                src: s.src,
                ...n
            })
        }
    },
    15328: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(57437)
          , o = n(2265)
          , i = n(34344);
        function l(e) {
            let {text: t, tag: n} = e;
            if (!t)
                return null;
            let l = t.split("\n");
            if (!n)
                return (0,
                i.Z)(t, "DesignLink");
            switch (n) {
            case "br":
                return (0,
                r.jsx)(r.Fragment, {
                    children: l.map( (e, t) => {
                        let n = (0,
                        i.Z)(e, "DesignLink");
                        return (0,
                        r.jsxs)(o.Fragment, {
                            children: [n, t !== l.length - 1 && (0,
                            r.jsx)("br", {})]
                        }, t)
                    }
                    )
                });
            case "p":
                return (0,
                r.jsx)(r.Fragment, {
                    children: l.map( (e, t) => {
                        let n = (0,
                        i.Z)(e, "DesignLink");
                        return (0,
                        r.jsx)("p", {
                            children: n
                        }, t)
                    }
                    )
                });
            default:
                return (0,
                r.jsx)(r.Fragment, {
                    children: l.map( (e, t) => {
                        let o = (0,
                        i.Z)(e, "DesignLink");
                        return (0,
                        r.jsx)(n, {
                            children: o
                        }, t)
                    }
                    )
                })
            }
        }
    },
    16989: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(12761)
          , o = n(4090)
          , i = n(66886);
        function l(e) {
            let {contacts: t, blockId: n, imagesData: l} = e;
            if (!t || !n)
                return [];
            let a = 0;
            return t.map(e => {
                let t, s = "/images/placeholders/photo_placeholder.svg";
                l && e.photo && (e.photo.length < 1 ? l.imagesLinks && l.imagesLinks[a] && (s = l.imagesLinks[a]) : (s = (0,
                r.Z)(e.photo[0], l.inviteUID, "".concat(n, "_").concat(e.id)),
                t = (0,
                o.Z)(e.photo[0])),
                a += 1);
                let u = "Без имени";
                e.name ? (u = e.name,
                e.role && (u = "".concat(e.name, " (").concat(e.role, ")"))) : e.role && (u = e.role);
                let c = "Без имени";
                e.name ? c = e.name : e.role && (c = e.role);
                let d = []
                  , f = []
                  , p = []
                  , m = [];
                return e.links.forEach(e => {
                    let t = (0,
                    i.FY)(e.d)[e.t]
                      , n = i.JD[e.t]
                      , r = {
                        title: e.t,
                        data: e.d,
                        url: t.link,
                        icon: n
                    };
                    "Phone" === e.t ? f.push(r) : "Email" === e.t ? p.push(r) : m.push(r),
                    d.push(r)
                }
                ),
                {
                    ...e,
                    image: {
                        url: s,
                        filter: t
                    },
                    nameAndRole: u,
                    nameOrRole: c,
                    linksProcessed: {
                        all: d,
                        phones: f,
                        emails: p,
                        others: m
                    }
                }
            }
            )
        }
    },
    60111: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        function r(e, t, n) {
            if (!n)
                return;
            let r = n.blocks[e];
            if (r && r.type === t)
                return r ? r.data : void 0
        }
    },
    24942: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(60111);
        function o(e, t, n) {
            let o = (0,
            r.Z)(e, "date", t);
            return o && o.utc ? o.utc : n
        }
    },
    55099: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(12761)
          , o = n(4090);
        function i(e) {
            let {events: t, blockId: n, imagesData: i} = e;
            return t && n ? t.map(e => {
                let t, l = "/images/placeholders/photo_placeholder.svg";
                return i ? ("string" != typeof e.id && i.imagesLinks[e.id] && (l = i.imagesLinks[e.id]),
                e.imgCustom && e.imgCustom.length && (l = (0,
                r.Z)(e.imgCustom[0], i.inviteUID, "".concat(n, "_").concat(e.id)),
                t = (0,
                o.Z)(e.imgCustom[0])),
                {
                    ...e,
                    url: l,
                    filter: t
                }) : {
                    ...e,
                    url: "",
                    filter: void 0
                }
            }
            ) : []
        }
    },
    70205: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(12761)
          , o = n(4090);
        function i(e) {
            let {inviteUID: t, items: n, blockId: i, imagesLinks: l} = e;
            if (!n || !i)
                return [];
            let a = 0;
            return n.map(e => {
                let n, s = "/images/placeholders/photo_placeholder.svg";
                return "img" === e.t && (e.v.length < 1 ? l && l[a] && (s = l[a],
                a += 1) : (s = (0,
                r.Z)(e.v[0], t, "".concat(i, "_").concat(e.id)),
                n = (0,
                o.Z)(e.v[0]))),
                {
                    ...e,
                    url: s,
                    filter: n,
                    style: {
                        backgroundColor: "color" === e.t ? e.v : void 0,
                        backgroundImage: "img" === e.t ? "url('".concat(s, "')") : void 0,
                        filter: "img" === e.t ? n : void 0,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }
                }
            }
            )
        }
    },
    51677: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(12761)
          , o = n(4090);
        function i(e, t, n, i) {
            if (!i)
                return "single" === n ? {
                    url: "",
                    filter: ""
                } : [];
            let l = i.blocks[e];
            if (!l || "file" !== l.type)
                return "single" === n ? {
                    url: "",
                    filter: ""
                } : [];
            let a = l.data.map(n => ({
                url: (0,
                r.Z)(n, t, "".concat(i.id, "_").concat(e)),
                filter: (0,
                o.Z)(n)
            }));
            return "single" === n ? a.length > 0 ? a[0] : {
                url: "",
                filter: ""
            } : a
        }
    },
    43621: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        function r() {
            let e = document.getElementById("audio_file_music");
            if (e)
                return e.paused ? (e.play(),
                !0) : (e.pause(),
                !1)
        }
    },
    31085: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(12761)
          , o = n(81551);
        function i(e, t, n) {
            if (!n)
                return;
            let i = n.blocks[e];
            if (!i || "music" !== i.type)
                return;
            if ("custom" !== i.data.v) {
                var l;
                return null === (l = o.g.find(e => e.value === i.data.v)) || void 0 === l ? void 0 : l.file
            }
            let {f: a} = i.data;
            if (a && !(a.length < 1))
                return (0,
                r.Z)(a[0], t, "".concat(n.id, "_").concat(e))
        }
    },
    59362: function(e, t, n) {
        var r = n(2265);
        let o = (e, t, n) => {
            let r = e - new Date().getTime()
              , o = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                labels: {
                    days: "",
                    hours: "",
                    minutes: "",
                    seconds: ""
                },
                padded: {
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                }
            };
            if (r > 0) {
                let e = Math.floor(r / 1e3 % 60)
                  , i = Math.floor(r / 1e3 / 60 % 60)
                  , l = Math.floor(r / 36e5 % 24)
                  , a = Math.floor(r / 864e5);
                if (o.seconds = e,
                o.minutes = i,
                o.hours = l,
                o.days = a,
                o.padded.seconds = e.toString().padStart(2, "0"),
                o.padded.minutes = i.toString().padStart(2, "0"),
                o.padded.hours = l.toString().padStart(2, "0"),
                o.padded.days = a.toString().padStart(2, "0"),
                o.labels.seconds = n.seconds[1 === e ? 0 : 1],
                o.labels.minutes = n.minutes[1 === i ? 0 : 1],
                o.labels.hours = n.hours[1 === l ? 0 : 1],
                o.labels.days = n.days[1 === a ? 0 : 1],
                t.weeks) {
                    let e = Math.floor(a / 7);
                    o.weeks = e,
                    o.days = a % 7,
                    o.padded.days = (a % 7).toString().padStart(2, "0"),
                    o.labels.weeks = n.weeks[1 === e ? 0 : 1]
                }
                if (t.months) {
                    let e = Math.floor(a / 30);
                    o.months = e,
                    o.days = a % 30,
                    o.padded.days = (a % 30).toString().padStart(2, "0"),
                    o.labels.months = n.months[1 === e ? 0 : 1]
                }
                if (t.years) {
                    let e = Math.floor(a / 365);
                    o.years = e,
                    o.days = a % 365,
                    o.padded.days = (a % 365).toString().padStart(2, "0"),
                    o.labels.years = n.years[1 === e ? 0 : 1]
                }
            } else
                o.labels.seconds = n.seconds[1],
                o.labels.minutes = n.minutes[1],
                o.labels.hours = n.hours[1],
                o.labels.days = n.days[1];
            return o
        }
        ;
        t.Z = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0
              , [i,l] = (0,
            r.useState)(o(e, t, n));
            return (0,
            r.useEffect)( () => {
                let r = setInterval( () => {
                    l(o(e, t, n))
                }
                , 1e3);
                return () => clearInterval(r)
            }
            , [e, t, n]),
            i
        }
    },
    5565: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(36760)
          , o = n.n(r)
          , i = n(75565)
          , l = n(2265);
        function a(e, t) {
            return (0,
            l.useMemo)( () => (n, r) => (function(e, t, n, r) {
                let l = e.blocks.find(e => e.id === n)
                  , a = e => o()(e, "c_block_".concat(n), "DesignBlock")
                  , s = t ? e => {
                    e.stopPropagation(),
                    (0,
                    i.Z)(n)
                }
                : void 0
                  , u = {
                    "data-scrolloffset": r ? r.offset : 30,
                    "data-scrollblink": !!r && r.isBlink
                }
                  , c = {
                    ...u,
                    onClick: s
                };
                return l ? {
                    ...l,
                    generateClassName: a,
                    onClickBlock: s,
                    attrsNoOnClick: u,
                    attrs: c
                } : {
                    blocks: {},
                    isOn: !0,
                    title: "CEDT",
                    variant: "v1",
                    id: n,
                    generateClassName: a,
                    onClickBlock: s,
                    attrsNoOnClick: u,
                    attrs: c
                }
            }
            )(e, t, n, r), [e, t])
        }
    },
    62168: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(2265)
          , o = n(35695)
          , i = n(36289)
          , l = n(5396);
        function a(e, t) {
            let n = t
              , r = !0;
            return e.map(e => {
                let t = e.value;
                t || (t = "checkbox" === e.type ? [] : "");
                let o = {
                    ...e,
                    isReadOnly: n,
                    isVisible: r,
                    value: t
                };
                return "radio" === o.type && o.soi && o.answers.includes(o.soi) && r ? o.value ? (n = o.value !== o.soi,
                r = o.value === o.soi) : (n = !0,
                r = !0) : "checkbox" === o.type && o.max && Array.isArray(o.value) && (o.isReadOnlyCheckboxes = o.value.length >= o.max),
                o
            }
            )
        }
        function s(e, t, n) {
            let s = (0,
            r.useMemo)( () => Date.now() >= n, [n])
              , [u,c] = (0,
            r.useState)(s ? "end" : "idle")
              , [d,f] = (0,
            r.useState)( () => a(e, s));
            (0,
            r.useEffect)( () => {
                f(a(e, s))
            }
            , [e, s]);
            let p = (0,
            r.useCallback)( (e, t) => {
                f(n => a(n.map( (n, r) => {
                    if (r !== e)
                        return n;
                    if ("input" === n.type || "radio" === n.type)
                        return {
                            ...n,
                            value: t
                        };
                    if ("checkbox" === n.type) {
                        let e = Array.isArray(n.value) ? n.value : []
                          , r = e.includes(t) ? e.filter(e => e !== t) : [...e, t];
                        return {
                            ...n,
                            value: r
                        }
                    }
                    return n
                }
                ), s))
            }
            , [s])
              , m = (0,
            r.useCallback)( () => {
                let e = [];
                for (let t of d) {
                    if (t.isVisible && !t.isReadOnly && t.isReq && t.value.length < 1)
                        return (0,
                        o.A)({
                            title: "Не все обязательные поля заполнены",
                            status: "warning"
                        }),
                        null;
                    let n = t.value;
                    n || (n = "checkbox" === t.type ? [] : ""),
                    (!t.isVisible || t.isReadOnly) && (n = "checkbox" === t.type ? [] : ""),
                    e.push({
                        title: t.question,
                        type: t.type,
                        answer: n
                    })
                }
                return e
            }
            , [d]);
            return {
                questions: d,
                handleAnswerChange: p,
                onSubmit: (0,
                r.useCallback)(e => {
                    if (e.preventDefault(),
                    "idle" !== u)
                        return;
                    if (new URLSearchParams(document.location.search).get("type")) {
                        (0,
                        o.A)({
                            title: "В режиме просмотра нельзя отправить ответ",
                            status: "warning"
                        });
                        return
                    }
                    let n = m();
                    n && (c("loading"),
                    (0,
                    i.Z)({
                        method: "post",
                        url: "/api/quiz/add",
                        data: {
                            uid: t,
                            questions: n
                        }
                    }).then(e => {
                        e.isData && e.data.success ? (c("finished"),
                        (0,
                        l.Z)()) : c("idle")
                    }
                    ))
                }
                , [u, m, t]),
                status: u
            }
        }
    }
}]);
