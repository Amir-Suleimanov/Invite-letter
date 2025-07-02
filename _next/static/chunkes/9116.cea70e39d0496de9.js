"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9116], {
    7667: function(e, s, t) {
        t.d(s, {
            x: function() {
                return l
            }
        });
        var i = t(95106)
          , a = t(20681);
        function l(e) {
            let s = e || ("undefined" != typeof navigator ? navigator.language : "en-US")
              , t = i.ou.fromObject({
                year: 2023,
                month: 11,
                day: 18
            }, {
                zone: "UTC"
            })
              , l = (0,
            a.e)(t, s, "UTC", ["date", "time"]);
            if (!l.formatted[0])
                return {
                    dateFormat: ["month", "day", "year"],
                    dateSeparate: "/",
                    timeFormat: "12"
                };
            let[n,c] = l.formatted;
            return {
                dateSeparate: n.includes(".") ? "." : n.includes("-") ? "-" : "/",
                timeFormat: (null == c ? void 0 : c.toLowerCase().match(/am|pm|a\.m\.|p\.m\./)) ? "12" : "24",
                dateFormat: function(e) {
                    let s = e.split(/[./-]/).map(e => parseInt(e.replace(/\D/g, ""), 10))
                      , t = [];
                    return s.forEach( (e, s) => {
                        2023 === e ? t[s] = "year" : 18 === e ? t[s] = "day" : 11 === e && (t[s] = "month")
                    }
                    ),
                    3 === t.length ? t : ["month", "day", "year"]
                }(n)
            }
        }
    },
    29116: function(e, s, t) {
        t.r(s),
        t.d(s, {
            default: function() {
                return E
            }
        });
        var i = t(57437)
          , a = t(5565)
          , l = t(2265)
          , n = t(60111)
          , c = t(26444)
          , r = t(31085)
          , o = t(43621)
          , d = t(51677)
          , m = t(7667);
        let u = e => {
            var s;
            switch (null === (s = e.split(".").pop()) || void 0 === s ? void 0 : s.toLowerCase()) {
            case "png":
                return "image/png";
            case "jpg":
            case "jpeg":
                return "image/jpeg";
            default:
                return "image/webp"
            }
        }
        ;
        function _(e) {
            let {musicBlock: s, mainBlock: t, inviteUID: a, firstName: c, secondName: _, DateInfo: h, AO: x, locale: v} = e
              , p = (0,
            l.useMemo)( () => (0,
            r.Z)("music", a, s), [a, s])
              , j = (0,
            l.useMemo)( () => (0,
            d.Z)("photos", a, "multiple", t), [a, t])
              , N = (0,
            l.useMemo)( () => (0,
            n.Z)("bg", "slider", t), [t])
              , g = (0,
            l.useMemo)( () => {
                let[e,s] = j;
                if (e && s)
                    return [e, s];
                if (e || s) {
                    let t = e || s;
                    return [t, t]
                }
                return [{
                    url: "/templates/design/wedding/v4/images/hero-background-mobile.webp",
                    filter: void 0
                }, {
                    url: "/templates/design/wedding/v4/images/hero-background.webp",
                    filter: void 0
                }]
            }
            , [j]);
            (0,
            l.useEffect)( () => {
                document.documentElement.classList.remove("play")
            }
            , [p]);
            let f = (0,
            l.useCallback)(e => {
                e.stopPropagation();
                let s = document.documentElement;
                (0,
                o.Z)() ? s.classList.add("play") : s.classList.remove("play")
            }
            , [])
              , b = (0,
            l.useMemo)( () => (0,
            m.x)(v).dateFormat.filter(e => "year" !== e), [v]);
            return (0,
            i.jsxs)(l.Fragment, {
                children: [s.isOn && p && (0,
                i.jsx)("audio", {
                    className: "audio",
                    id: "audio_file_music",
                    src: p
                }), (0,
                i.jsxs)(x.m.section, {
                    className: t.generateClassName("hero"),
                    ...t.attrs,
                    ...x.mainBlock,
                    children: [(0,
                    i.jsx)("div", {
                        className: "hero__container",
                        children: (0,
                        i.jsxs)("div", {
                            className: "hero__block",
                            children: [(0,
                            i.jsxs)(x.m.div, {
                                className: "hero__content",
                                ...x.childMainBlock,
                                children: [(0,
                                i.jsx)("div", {
                                    className: "hero__sub-title",
                                    children: "day" !== b[0] ? h.infoDateParty.otherFormats[0] : h.infoDateParty.otherFormats[0].toLowerCase()
                                }), (0,
                                i.jsxs)("h1", {
                                    className: "hero__title",
                                    children: [c, " & ", _]
                                })]
                            }), s.isOn && (0,
                            i.jsx)("button", {
                                type: "button",
                                onClick: f,
                                className: s.generateClassName("hero__button"),
                                ...s.attrsNoOnClick,
                                children: (0,
                                i.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0,
                                    i.jsx)("path", {
                                        className: "music-icon",
                                        d: "M1.66667 4.99999C0.7475 4.99999 0 5.74749 0 6.66666V13.3333C0 14.2525 0.7475 15 1.66667 15H3.87L10 20.0108V0.0308228L3.87167 4.99999H1.66667ZM8.33333 3.52749V16.4958L4.46333 13.3333H1.66667V6.66666H4.46167L8.33333 3.52749Z",
                                        fill: "white"
                                    }), (0,
                                    i.jsx)("path", {
                                        className: "cross-icon",
                                        d: "M17.0325 9.99999L19.7767 12.7442L18.5983 13.9225L15.8542 11.1783L13.11 13.9225L11.9317 12.7442L14.6758 9.99999L11.9317 7.25582L13.11 6.07749L15.8542 8.82166L18.5983 6.07749L19.7767 7.25582L17.0325 9.99999Z",
                                        fill: "white"
                                    })]
                                })
                            })]
                        })
                    }), (0,
                    i.jsxs)("div", {
                        className: "hero__background",
                        children: [(0,
                        i.jsxs)("picture", {
                            children: [(0,
                            i.jsx)("source", {
                                media: "(min-width: 768px)",
                                srcSet: g[1].url,
                                style: {
                                    filter: g[1].filter
                                },
                                type: u(g[1].url)
                            }), (0,
                            i.jsx)("img", {
                                src: g[0].url,
                                alt: c + " и " + _,
                                style: {
                                    filter: g[0].filter
                                }
                            })]
                        }), (0,
                        i.jsx)("div", {
                            style: {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                background: "linear-gradient(180.00deg, rgba(230, 230, 230, 0) ".concat(void 0 !== N ? 100 - N : 50, "%,rgb(230, 230, 230) 100%)")
                            }
                        })]
                    })]
                })]
            })
        }
        var h = t(15328);
        function x(e) {
            let {introductionBlock: s, AO: t} = e
              , a = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "textarea", s), [s])
              , c = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "textarea", s), [s])
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("text", "textarea", s), [s]);
            return (0,
            i.jsx)(t.m.section, {
                className: s.generateClassName("about"),
                ...s.attrs,
                ...t.block,
                children: (0,
                i.jsxs)("div", {
                    className: "about__container",
                    children: [(0,
                    i.jsx)("h2", {
                        className: "about__title title",
                        children: (0,
                        i.jsx)(h.Z, {
                            text: a,
                            tag: "br"
                        })
                    }), (0,
                    i.jsxs)("div", {
                        className: "about__block",
                        children: [(0,
                        i.jsx)("div", {
                            className: "about__sub-title",
                            children: (0,
                            i.jsx)(h.Z, {
                                text: c,
                                tag: "br"
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: "about__text",
                            children: (0,
                            i.jsx)(h.Z, {
                                text: r,
                                tag: "p"
                            })
                        })]
                    })]
                })
            })
        }
        function v(e) {
            let {loveBlock: s, inviteUID: t, introductionBlockIsOn: a, AO: c} = e
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , m = (0,
            l.useMemo)( () => (0,
            n.Z)("text", "textarea", s), [s])
              , u = (0,
            l.useMemo)( () => (0,
            d.Z)("photo", t, "single", s), [t, s]);
            return (0,
            i.jsx)(c.m.section, {
                className: s.generateClassName("story"),
                style: {
                    marginTop: a ? void 0 : 0
                },
                ...s.attrs,
                ...c.block,
                children: (0,
                i.jsxs)("div", {
                    className: "story__container",
                    children: [(0,
                    i.jsxs)("div", {
                        className: "story__content",
                        children: [(0,
                        i.jsx)("h2", {
                            className: "story__title title title_white",
                            children: r
                        }), (0,
                        i.jsx)("div", {
                            className: "story__sub-title",
                            children: o
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "story__block",
                        children: [(0,
                        i.jsx)(c.m.div, {
                            className: "story__image",
                            ...c.child,
                            children: (0,
                            i.jsx)("img", {
                                src: u.url ? u.url : "/templates/design/wedding/v4/images/story-image.webp",
                                style: {
                                    filter: u.filter
                                },
                                alt: "История любви"
                            })
                        }), (0,
                        i.jsx)(c.m.div, {
                            className: "story__text",
                            ...c.child,
                            children: (0,
                            i.jsx)(h.Z, {
                                text: m,
                                tag: "p"
                            })
                        })]
                    })]
                })
            })
        }
        var p = t(36760)
          , j = t.n(p);
        function N(e) {
            let {DateInfo: s, calendarBlock: t, AO: a, locale: c} = e
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", t), [t])
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", t), [t])
              , d = (0,
            l.useMemo)( () => (0,
            m.x)(c), [c]);
            return (0,
            i.jsx)(a.m.section, {
                className: t.generateClassName("date"),
                ...t.attrs,
                ...a.block,
                children: (0,
                i.jsxs)("div", {
                    className: "date__container",
                    children: [(0,
                    i.jsxs)("div", {
                        className: "date__content date__content_mobile",
                        children: [(0,
                        i.jsx)("h2", {
                            className: "date__title title",
                            children: r
                        }), (0,
                        i.jsx)("div", {
                            className: "date__sub-title",
                            children: o
                        })]
                    }), (0,
                    i.jsx)("div", {
                        className: "date__value",
                        children: d.dateFormat.map( (e, t) => "day" === e ? (0,
                        i.jsxs)(l.Fragment, {
                            children: [s.day.withLeadingZero, (0,
                            i.jsx)("br", {})]
                        }, e + t) : "month" === e ? (0,
                        i.jsxs)(l.Fragment, {
                            children: [s.month.withLeadingZero, (0,
                            i.jsx)("br", {})]
                        }, e + t) : "year" === e ? (0,
                        i.jsxs)(l.Fragment, {
                            children: [s.year.short, (0,
                            i.jsx)("br", {})]
                        }, e + t) : null)
                    }), (0,
                    i.jsxs)("div", {
                        className: "date__block",
                        children: [(0,
                        i.jsx)("div", {
                            className: "date__calendar",
                            children: (0,
                            i.jsxs)("table", {
                                className: "date__table",
                                children: [(0,
                                i.jsx)("thead", {
                                    children: (0,
                                    i.jsx)("tr", {
                                        children: s.weekDaysNames.localized.map( (e, s) => (0,
                                        i.jsx)("th", {
                                            children: e
                                        }, s))
                                    })
                                }), (0,
                                i.jsx)("tbody", {
                                    children: s.calendar.map( (e, s) => (0,
                                    i.jsx)("tr", {
                                        children: e.map( (e, s) => (0,
                                        i.jsx)("td", {
                                            className: j()({
                                                date__target: e.isEventDay,
                                                date__current: e.isToday
                                            }),
                                            children: e.day
                                        }, s))
                                    }, s))
                                })]
                            })
                        }), (0,
                        i.jsxs)("div", {
                            className: "date__content date__content_pc",
                            children: [(0,
                            i.jsx)("h2", {
                                className: "date__title title",
                                children: r
                            }), (0,
                            i.jsx)("div", {
                                className: "date__sub-title",
                                children: o
                            })]
                        })]
                    })]
                })
            })
        }
        var g = t(93738);
        function f(e) {
            let {placeBlock: s, mapBlock: t, AO: a} = e
              , c = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("time", "input", s), [s])
              , d = (0,
            l.useMemo)( () => (0,
            n.Z)("text", "textarea", s), [s])
              , m = (0,
            l.useMemo)( () => (0,
            n.Z)("map", "map", t), [t])
              , u = (0,
            l.useMemo)( () => (0,
            n.Z)("isB", "switch", t), [t])
              , _ = (0,
            l.useMemo)( () => (0,
            n.Z)("address", "input", s), [s])
              , x = (0,
            l.useMemo)( () => _ || ((null == m ? void 0 : m.d.address) ? m.d.address : ""), [_, null == m ? void 0 : m.d.address]);
            return (0,
            i.jsxs)(a.m.section, {
                className: s.generateClassName("place"),
                ...s.attrs,
                ...a.block,
                children: [(0,
                i.jsx)("div", {
                    className: "place__container",
                    children: (0,
                    i.jsxs)("div", {
                        className: "place__content",
                        children: [(0,
                        i.jsx)("h2", {
                            className: "place__title title",
                            children: c
                        }), (0,
                        i.jsx)("div", {
                            className: "place__sub-title",
                            children: r
                        }), (0,
                        i.jsx)("div", {
                            className: "place__time",
                            children: o
                        }), (0,
                        i.jsx)("div", {
                            className: "place__city",
                            children: x
                        }), (0,
                        i.jsx)("div", {
                            className: "place__text",
                            children: (0,
                            i.jsx)(h.Z, {
                                text: d,
                                tag: "p"
                            })
                        })]
                    })
                }), (0,
                i.jsx)("div", {
                    className: t.generateClassName("place__map"),
                    ...t.attrs,
                    children: (0,
                    i.jsx)(g.Z, {
                        map: m,
                        withLock: !0,
                        overlayType: "text",
                        overlayStyleYandex: {
                            text: {
                                height: "55px",
                                lineHeight: "1.3rem",
                                fontSize: "0.85rem"
                            }
                        },
                        iframeProps: {
                            style: {
                                filter: !1 === u ? "none" : void 0
                            }
                        }
                    })
                })]
            })
        }
        var b = t(55099)
          , y = t(56302);
        function k(e) {
            let {dayProgramBlock: s, AO: t} = e
              , a = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , c = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("DP", "DP", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            b.Z)({
                events: null == r ? void 0 : r.events,
                blockId: s.id,
                imagesData: null
            }), [s.id, null == r ? void 0 : r.events])
              , d = (0,
            l.useRef)(null)
              , m = (0,
            y.Y)(d, {
                once: !0
            });
            return (0,
            i.jsx)(t.m.section, {
                ref: d,
                className: s.generateClassName("program"),
                ...s.attrs,
                ...t.block,
                whileInView: void 0,
                animate: m ? "visible" : "hidden",
                children: (0,
                i.jsxs)("div", {
                    className: "program__container",
                    children: [(0,
                    i.jsx)("h2", {
                        className: "program__title title",
                        children: a
                    }), (0,
                    i.jsxs)("div", {
                        className: "program__block",
                        children: [(0,
                        i.jsx)("div", {
                            className: "program__sub-title",
                            children: c
                        }), (0,
                        i.jsx)("div", {
                            className: "program__body",
                            children: o.map(e => (0,
                            i.jsxs)(t.m.div, {
                                className: "program__item",
                                ...t.child,
                                children: [(0,
                                i.jsx)("div", {
                                    className: "program__value",
                                    children: e.time
                                }), (0,
                                i.jsx)("div", {
                                    className: "program__caption",
                                    children: e.title
                                }), (0,
                                i.jsx)("div", {
                                    className: "program__text",
                                    children: (0,
                                    i.jsx)("p", {
                                        children: e.desc
                                    })
                                })]
                            }, e.id))
                        })]
                    })]
                })
            })
        }
        var w = t(70205);
        function Z(e) {
            let {dressCodeBlock: s, inviteUID: t, AO: a} = e
              , c = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("text", "textarea", s), [s])
              , m = (0,
            l.useMemo)( () => (0,
            d.Z)("photo", t, "single", s), [t, s])
              , u = (0,
            l.useMemo)( () => (0,
            n.Z)("DS", "DS", s), [s])
              , _ = (0,
            l.useMemo)( () => (0,
            w.Z)({
                items: null == u ? void 0 : u.items,
                blockId: s.id,
                inviteUID: t
            }).slice(-6), [s.id, null == u ? void 0 : u.items, t])
              , x = (0,
            l.useRef)(null)
              , v = (0,
            y.Y)(x, {
                once: !0
            });
            return (0,
            i.jsx)(a.m.section, {
                ref: x,
                className: s.generateClassName("dress-code"),
                ...s.attrs,
                ...a.block,
                whileInView: void 0,
                animate: v ? "visible" : "hidden",
                children: (0,
                i.jsxs)("div", {
                    className: "dress-code__container",
                    children: [(0,
                    i.jsx)("h2", {
                        className: "dress-code__title title title_white",
                        children: c
                    }), (0,
                    i.jsxs)("div", {
                        className: "dress-code__row",
                        children: [(0,
                        i.jsx)("div", {
                            className: "dress-code__sub-title",
                            children: r
                        }), (0,
                        i.jsx)("div", {
                            className: "dress-code__text",
                            children: (0,
                            i.jsx)(h.Z, {
                                text: o,
                                tag: "p"
                            })
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "dress-code__body",
                        children: [(0,
                        i.jsx)("div", {
                            className: "dress-code__items",
                            children: _.slice(0, 4).map( (e, s) => (0,
                            i.jsx)(a.m.div, {
                                className: "dress-code__item ".concat(3 === s ? "dress-code__item_mobile" : ""),
                                style: e.style,
                                ...a.child
                            }, e.id))
                        }), (0,
                        i.jsx)("div", {
                            className: "dress-code__image",
                            children: (0,
                            i.jsx)("img", {
                                src: m.url ? m.url : "/templates/design/wedding/v4/images/dress-code-image.webp",
                                style: {
                                    filter: m.filter
                                },
                                alt: "Дресс-код"
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: j()("dress-code__items", {
                                full__code_mobile: 2 === _.slice(3).length
                            }),
                            children: _.slice(3).map( (e, s, t) => (0,
                            i.jsx)(a.m.div, {
                                className: j()("dress-code__item", {
                                    "dress-code__item_pc": 0 === s
                                }),
                                style: e.style,
                                ...a.child
                            }, e.id))
                        })]
                    })]
                })
            })
        }
        var M = t(24942)
          , C = t(59362);
        function O(e) {
            let {timerBlock: s, inviteData: t, AO: a} = e
              , c = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            M.Z)("date", s, t.UTC), [t.UTC, s])
              , d = (0,
            C.Z)(o, {
                years: !1,
                months: !1,
                weeks: !1
            }, {
                years: ["год", "лет"],
                months: ["месяц", "месяцев"],
                weeks: ["неделя", "недель"],
                days: ["день", "дней"],
                hours: ["час", "часов"],
                minutes: ["минута", "минут"],
                seconds: ["секунда", "секунд"]
            });
            return (0,
            i.jsx)(a.m.section, {
                className: s.generateClassName("time"),
                ...s.attrs,
                ...a.block,
                children: (0,
                i.jsxs)("div", {
                    className: "time__container",
                    children: [(0,
                    i.jsxs)(a.m.div, {
                        className: "time__content",
                        ...a.child,
                        children: [(0,
                        i.jsx)("h2", {
                            className: "time__title title",
                            children: c
                        }), (0,
                        i.jsx)("div", {
                            className: "time__sub-title",
                            children: r
                        })]
                    }), (0,
                    i.jsxs)(a.m.div, {
                        className: "time__timer timer",
                        ...a.child,
                        children: [(0,
                        i.jsxs)("div", {
                            className: "timer__column",
                            children: [(0,
                            i.jsx)("div", {
                                className: "timer__value timer__value_1",
                                children: d.padded.days
                            }), (0,
                            i.jsx)("div", {
                                className: "timer__points",
                                children: ":"
                            }), (0,
                            i.jsx)("div", {
                                className: "timer__value timer__value_2",
                                children: d.padded.hours
                            })]
                        }), (0,
                        i.jsx)("div", {
                            className: "timer__points timer__points_mobile-none",
                            children: ":"
                        }), (0,
                        i.jsxs)("div", {
                            className: "timer__column",
                            children: [(0,
                            i.jsx)("div", {
                                className: "timer__value timer__value_3",
                                children: d.padded.minutes
                            }), (0,
                            i.jsx)("div", {
                                className: "timer__points",
                                children: ":"
                            }), (0,
                            i.jsx)("div", {
                                className: "timer__value timer__value_4",
                                children: d.padded.seconds
                            })]
                        })]
                    })]
                })
            })
        }
        var B = t(62168)
          , q = t(35695)
          , I = t(86827)
          , L = t(72760);
        function D(e) {
            let {quizBlock: s, inviteData: t, inviteUID: a, AO: c} = e
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , d = (0,
            l.useMemo)( () => (0,
            n.Z)("quiz", "quiz", s), [s])
              , {questions: m, handleAnswerChange: u, onSubmit: _, status: h} = (0,
            B.Z)((null == d ? void 0 : d.questions) || [], a, t.UTC)
              , x = e => {
                let {forPC: s} = e;
                return (0,
                i.jsxs)("button", {
                    type: "submit",
                    className: "questions__submit questions__submit_".concat(s ? "pc" : "mobile"),
                    onClick: _,
                    children: [(0,
                    i.jsxs)("span", {
                        style: {
                            visibility: "loading" === h ? "hidden" : void 0
                        },
                        children: ["idle" === h && "Отправить", "finished" === h && "Отправлено", "end" === h && "Приём ответов завершен"]
                    }), "loading" === h && (0,
                    i.jsx)(I.M, {
                        w: "100%",
                        h: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        children: (0,
                        i.jsx)(L.$, {})
                    })]
                })
            }
            ;
            return (0,
            i.jsx)(c.m.section, {
                className: s.generateClassName("questions"),
                ...s.attrsNoOnClick,
                ...c.block,
                children: (0,
                i.jsxs)("form", {
                    id: "form",
                    action: "#",
                    className: "questions__container",
                    children: [(0,
                    i.jsxs)("div", {
                        className: "questions__block",
                        children: [(0,
                        i.jsx)("h2", {
                            className: "questions__title title",
                            children: r
                        }), (0,
                        i.jsx)("div", {
                            className: "questions__sub-title",
                            children: o
                        }), (0,
                        i.jsx)(x, {
                            forPC: !0
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "questions__content",
                        children: [m.map( (e, s) => {
                            if (!e.isVisible)
                                return null;
                            let t = e.isReadOnly || "idle" !== h
                              , a = e.isReadOnly && "idle" === h ? () => {
                                (0,
                                q.A)({
                                    status: "info",
                                    title: "Сначала ответьте на обязательные вопросы выше"
                                })
                            }
                            : void 0;
                            return "input" === e.type ? (0,
                            i.jsxs)("div", {
                                className: "questions__item",
                                style: {
                                    opacity: t ? .6 : void 0
                                },
                                children: [(0,
                                i.jsx)("label", {
                                    htmlFor: "input_".concat(s),
                                    className: "questions__label",
                                    children: e.question
                                }), (0,
                                i.jsx)("input", {
                                    id: "input_".concat(s),
                                    readOnly: t,
                                    value: e.value,
                                    onChange: e => u(s, e.target.value),
                                    onClick: a,
                                    type: "text",
                                    className: "questions__input",
                                    placeholder: e.question
                                }), e.isReq && (0,
                                i.jsx)("div", {
                                    className: "questions__required",
                                    children: "*"
                                })]
                            }, "input" + s) : "radio" === e.type ? (0,
                            i.jsxs)("div", {
                                className: "questions__item",
                                style: {
                                    opacity: t ? .6 : void 0
                                },
                                children: [(0,
                                i.jsx)("div", {
                                    className: "questions__label",
                                    children: e.question + (e.isReq ? " *" : "")
                                }), (0,
                                i.jsx)("div", {
                                    className: "options",
                                    children: e.answers.map( (l, n) => (0,
                                    i.jsxs)("div", {
                                        className: "options__item",
                                        children: [(0,
                                        i.jsx)("input", {
                                            hidden: !0,
                                            id: "radio_".concat(s, "_").concat(n),
                                            className: "options__input",
                                            value: l,
                                            readOnly: t,
                                            disabled: t,
                                            checked: e.value === l,
                                            onChange: e => u(s, e.target.value),
                                            type: "radio"
                                        }), (0,
                                        i.jsx)("label", {
                                            htmlFor: "radio_".concat(s, "_").concat(n),
                                            className: "options__label",
                                            onClick: a,
                                            children: (0,
                                            i.jsx)("span", {
                                                className: "options__text",
                                                children: l
                                            })
                                        })]
                                    }, n))
                                })]
                            }, "radio" + s) : "checkbox" === e.type ? (0,
                            i.jsxs)("div", {
                                className: "questions__item",
                                style: {
                                    opacity: t ? .6 : void 0
                                },
                                children: [(0,
                                i.jsx)("div", {
                                    className: "questions__label",
                                    children: e.question + (e.isReq ? "*" : "")
                                }), e.answers.map( (l, n) => {
                                    var c, r;
                                    let o = e.isReadOnlyCheckboxes && !(null === (c = e.value) || void 0 === c ? void 0 : c.includes(l));
                                    return (0,
                                    i.jsxs)("div", {
                                        className: "checkbox",
                                        style: {
                                            opacity: o ? "0.6" : void 0
                                        },
                                        children: [(0,
                                        i.jsx)("input", {
                                            id: "checkbox_v4_".concat(s, "_").concat(n),
                                            className: "checkbox__input",
                                            type: "checkbox",
                                            value: l,
                                            checked: null === (r = e.value) || void 0 === r ? void 0 : r.includes(l),
                                            readOnly: t || o,
                                            disabled: t || o,
                                            onChange: e => u(s, e.target.value)
                                        }), (0,
                                        i.jsx)("label", {
                                            htmlFor: "checkbox_v4_".concat(s, "_").concat(n),
                                            className: "checkbox__label",
                                            onClick: a,
                                            children: (0,
                                            i.jsx)("span", {
                                                className: "checkbox__text",
                                                children: l
                                            })
                                        })]
                                    }, n)
                                }
                                )]
                            }, "checkbox_v4_" + s) : void 0
                        }
                        ), (0,
                        i.jsx)(x, {
                            forPC: !1
                        })]
                    })]
                })
            })
        }
        var F = t(16989);
        function P(e) {
            let {contactsBlock: s, inviteUID: t, groupBlock: a, AO: c} = e
              , r = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", s), [s])
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("subtitle", "input", s), [s])
              , d = (0,
            l.useMemo)( () => (0,
            n.Z)("cts", "CT", s), [s])
              , m = (0,
            F.Z)({
                contacts: null == d ? void 0 : d.cts,
                blockId: s.id,
                imagesData: {
                    inviteUID: t,
                    imagesLinks: ["/templates/design/wedding/v4/images/contacts-image2.webp", "/templates/design/wedding/v4/images/contacts-image3.webp", "/templates/design/wedding/v4/images/contacts-image1.webp"]
                }
            })
              , u = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "input", a), [a])
              , _ = (0,
            l.useMemo)( () => (0,
            n.Z)("link", "input", a), [a])
              , x = (0,
            l.useMemo)( () => (0,
            n.Z)("text", "textarea", a), [a]);
            return s.isOn || a.isOn ? (0,
            i.jsx)(c.m.section, {
                className: s.generateClassName("contacts"),
                ...s.attrs,
                ...c.block,
                children: (0,
                i.jsxs)("div", {
                    className: "contacts__container",
                    children: [s.isOn && (0,
                    i.jsxs)(l.Fragment, {
                        children: [(0,
                        i.jsx)("h2", {
                            className: "contacts__title title",
                            children: r
                        }), (0,
                        i.jsx)("div", {
                            className: "contacts__sub-title",
                            children: o
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "contacts__body",
                        children: [s.isOn && m.map( (e, s) => (0,
                        i.jsxs)(c.m.div, {
                            className: "contacts__item",
                            style: {
                                borderBottom: a.isOn || m.length - 1 !== s ? void 0 : "none"
                            },
                            ...c.childContactItem,
                            children: [(0,
                            i.jsx)("div", {
                                className: "contacts__image",
                                children: (0,
                                i.jsx)("img", {
                                    src: e.image.url,
                                    style: {
                                        filter: e.image.filter
                                    },
                                    alt: e.role
                                })
                            }), (0,
                            i.jsx)("div", {
                                className: "contacts__caption",
                                children: e.name + (e.role ? " (".concat(e.role, ")") : "")
                            }), (0,
                            i.jsxs)("div", {
                                className: "contacts__links",
                                children: [e.linksProcessed.phones.length > 0 ? (0,
                                i.jsx)("a", {
                                    href: e.linksProcessed.phones[0].url,
                                    className: "contacts__link",
                                    children: e.linksProcessed.phones[0].data
                                }) : null, e.linksProcessed.emails.length > 0 ? (0,
                                i.jsx)("a", {
                                    href: e.linksProcessed.emails[0].url,
                                    className: "contacts__link",
                                    children: e.linksProcessed.emails[0].data
                                }) : null]
                            }), (0,
                            i.jsx)("div", {
                                className: "contacts__social",
                                children: e.linksProcessed.others.map( (e, s) => (0,
                                i.jsx)("a", {
                                    href: e.url,
                                    target: "_blank",
                                    className: "contacts__item-social",
                                    children: (0,
                                    i.jsx)(e.icon, {
                                        w: "100%",
                                        isColor: !0,
                                        color: "#ffffff"
                                    })
                                }, s))
                            })]
                        }, e.id)), a.isOn && (0,
                        i.jsxs)(c.m.div, {
                            className: a.generateClassName("contacts__block"),
                            ...a.attrs,
                            ...c.block,
                            children: [(0,
                            i.jsxs)("div", {
                                className: "contacts__content",
                                children: [(0,
                                i.jsx)("div", {
                                    className: "contacts__heading",
                                    children: u
                                }), (0,
                                i.jsx)("a", {
                                    href: _,
                                    target: "_blank",
                                    className: "contacts__button",
                                    children: "Вступить"
                                })]
                            }), (0,
                            i.jsx)("div", {
                                className: "contacts__text",
                                children: (0,
                                i.jsx)(h.Z, {
                                    text: x,
                                    tag: "p"
                                })
                            })]
                        })]
                    })]
                })
            }) : null
        }
        function U(e) {
            let {finalBlock: s, inviteUID: t, firstName: a, secondName: c, AO: r} = e
              , o = (0,
            l.useMemo)( () => (0,
            n.Z)("title", "textarea", s), [s])
              , m = (0,
            l.useMemo)( () => (0,
            d.Z)("photo", t, "single", s), [t, s]);
            return (0,
            i.jsxs)(r.m.footer, {
                className: s.generateClassName("footer"),
                ...s.attrs,
                ...r.block,
                children: [(0,
                i.jsxs)("div", {
                    className: "footer__container",
                    children: [(0,
                    i.jsx)("div", {
                        className: "footer__sub-title",
                        children: (0,
                        i.jsx)(h.Z, {
                            text: o
                        })
                    }), (0,
                    i.jsxs)("h2", {
                        className: "footer__title",
                        children: [a, " & ", c]
                    })]
                }), (0,
                i.jsx)("div", {
                    className: "footer__background",
                    children: (0,
                    i.jsx)("img", {
                        src: m.url ? m.url : "/templates/design/wedding/v4/images/footer-image.webp",
                        style: {
                            filter: m.filter
                        },
                        alt: a + " и " + c
                    })
                })]
            })
        }
        var A = t(7336);
        function E(e) {
            let {invite: s, isIframe: t, isWaitForAnimate: r, isLoading: o} = e
              , d = (0,
            a.Z)(s, t)
              , m = d("Music", {
                offset: 20,
                isBlink: !1
            })
              , u = d("Main", {
                offset: 0,
                isBlink: !1
            })
              , h = d("Intro", {
                offset: -100,
                isBlink: !1
            })
              , p = d("LStory", {
                offset: 0,
                isBlink: !1
            })
              , j = d("Calendar", {
                offset: -100,
                isBlink: !1
            })
              , g = d("Place", {
                offset: -50,
                isBlink: !1
            })
              , b = d("Map", {
                offset: 20,
                isBlink: !1
            })
              , y = d("DayProgram", {
                offset: 0,
                isBlink: !1
            })
              , w = d("DressCode", {
                offset: 0,
                isBlink: !1
            })
              , M = d("Timer", {
                offset: -80,
                isBlink: !1
            })
              , C = d("Quiz", {
                offset: 0,
                isBlink: !1
            })
              , B = d("Contacts", {
                offset: 0,
                isBlink: !1
            })
              , q = d("Group", {
                offset: 0,
                isBlink: !1
            })
              , I = d("Final", {
                offset: 0,
                isBlink: !1
            })
              , L = (0,
            l.useMemo)( () => (0,
            n.Z)("oneName", "input", u), [u])
              , F = (0,
            l.useMemo)( () => (0,
            n.Z)("twoName", "input", u), [u])
              , E = (0,
            l.useMemo)( () => (0,
            c.Z)(s.data, !1, ["dateFullMonthGenitive"]), [s.data])
              , V = {
                header: {
                    initial: "hidden",
                    whileInView: r ? "hidden" : "visible",
                    viewport: {
                        once: !0
                    },
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: -10
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .4,
                                delay: .5
                            }
                        }
                    }
                },
                mainBlock: {
                    initial: "hidden",
                    whileInView: r ? "hidden" : "visible",
                    viewport: {
                        once: !0
                    },
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                delay: .2,
                                staggerChildren: .5
                            }
                        }
                    }
                },
                block: {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                delay: .3,
                                staggerChildren: .5
                            }
                        }
                    }
                },
                child: {
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                staggerChildren: .4
                            }
                        }
                    }
                },
                childContactItem: {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                staggerChildren: .4
                            }
                        }
                    }
                },
                childMainBlock: {
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                staggerChildren: .4,
                                delay: .2
                            }
                        }
                    }
                },
                m: A.E
            };
            return (0,
            i.jsxs)("div", {
                className: "wrapper",
                children: [(0,
                i.jsxs)("main", {
                    children: [(0,
                    i.jsx)(_, {
                        musicBlock: m,
                        mainBlock: u,
                        inviteUID: s.uid,
                        firstName: L,
                        secondName: F,
                        locale: s.data.locale,
                        DateInfo: E,
                        AO: V
                    }), h.isOn && (0,
                    i.jsx)(x, {
                        introductionBlock: h,
                        AO: V
                    }), p.isOn && (0,
                    i.jsx)(v, {
                        loveBlock: p,
                        inviteUID: s.uid,
                        introductionBlockIsOn: h.isOn,
                        AO: V
                    }), j.isOn && (0,
                    i.jsx)(N, {
                        DateInfo: E,
                        calendarBlock: j,
                        AO: V,
                        locale: s.data.locale
                    }), g.isOn && (0,
                    i.jsx)(f, {
                        placeBlock: g,
                        mapBlock: b,
                        AO: V
                    }), y.isOn && (0,
                    i.jsx)(k, {
                        dayProgramBlock: y,
                        AO: V
                    }), w.isOn && (0,
                    i.jsx)(Z, {
                        dressCodeBlock: w,
                        inviteUID: s.uid,
                        AO: V
                    }), M.isOn && (0,
                    i.jsx)(O, {
                        timerBlock: M,
                        inviteData: s.data,
                        AO: V
                    }), C.isOn && (0,
                    i.jsx)(D, {
                        quizBlock: C,
                        inviteData: s.data,
                        inviteUID: s.uid,
                        AO: V
                    }), (0,
                    i.jsx)(P, {
                        contactsBlock: B,
                        inviteUID: s.uid,
                        groupBlock: q,
                        AO: V
                    })]
                }), I.isOn ? (0,
                i.jsx)(U, {
                    inviteUID: s.uid,
                    finalBlock: I,
                    firstName: L,
                    secondName: F,
                    AO: V
                }) : (0,
                i.jsx)("div", {
                    style: {
                        padding: "1rem 0"
                    }
                })]
            })
        }
    },
    36741: function(e, s, t) {
        t.d(s, {
            j: function() {
                return l
            }
        });
        var i = t(59960);
        let a = {
            some: 0,
            all: 1
        };
        function l(e, s, {root: t, margin: l, amount: n="some"}={}) {
            let c = (0,
            i.I)(e)
              , r = new WeakMap
              , o = new IntersectionObserver(e => {
                e.forEach(e => {
                    let t = r.get(e.target);
                    if (!!t !== e.isIntersecting) {
                        if (e.isIntersecting) {
                            let t = s(e.target, e);
                            "function" == typeof t ? r.set(e.target, t) : o.unobserve(e.target)
                        } else
                            "function" == typeof t && (t(e),
                            r.delete(e.target))
                    }
                }
                )
            }
            ,{
                root: t,
                rootMargin: l,
                threshold: "number" == typeof n ? n : a[n]
            });
            return c.forEach(e => o.observe(e)),
            () => o.disconnect()
        }
    },
    56302: function(e, s, t) {
        t.d(s, {
            Y: function() {
                return l
            }
        });
        var i = t(2265)
          , a = t(36741);
        function l(e, {root: s, margin: t, amount: l, once: n=!1, initial: c=!1}={}) {
            let[r,o] = (0,
            i.useState)(c);
            return (0,
            i.useEffect)( () => {
                if (!e.current || n && r)
                    return;
                let i = {
                    root: s && s.current || void 0,
                    margin: t,
                    amount: l
                };
                return (0,
                a.j)(e.current, () => (o(!0),
                n ? void 0 : () => o(!1)), i)
            }
            , [s, e, t, n, l]),
            r
        }
    }
}]);
