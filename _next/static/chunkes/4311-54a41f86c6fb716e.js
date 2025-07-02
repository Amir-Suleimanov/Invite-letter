"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4311], {
    27522: function(e, o, n) {
        n.d(o, {
            PM: function() {
                return c
            },
            tI: function() {
                return d
            },
            w4: function() {
                return u
            }
        });
        var i = n(37996)
          , t = n(32768)
          , l = n(63400)
          , a = n(85130)
          , r = n(11140)
          , s = n(76417);
        let c = [{
            name: "Основное",
            blocks: ["NavBar", "Main"]
        }, {
            name: "Медиа",
            blocks: ["YouTube", "Photo", "Carousel"]
        }, {
            name: "Карты",
            blocks: ["YMaps", "GMaps"]
        }, {
            name: "Дата и время",
            blocks: ["Calendar", "DayProgram", "Timer"]
        }, {
            name: "Прочее",
            blocks: ["Quiz", "DressCode", "Text", "FreeSpace"]
        }]
          , u = {
            Menu: {
                name: "Меню",
                icon: {
                    icon: r.Ps6,
                    size: "21px"
                }
            },
            Music: {
                name: "Музыка",
                icon: {
                    icon: s.DXC,
                    size: "21px"
                }
            },
            Main: {
                name: "Приветствие",
                icon: {
                    icon: r.yAi,
                    size: "20px"
                }
            },
            Intro: {
                name: "Вступление",
                icon: {
                    icon: r.J1t,
                    size: "20px"
                }
            },
            LStory: {
                name: "История любви",
                icon: {
                    icon: r.sF8,
                    size: "19px"
                }
            },
            Calendar: {
                name: "Календарь",
                icon: {
                    icon: r.bbP,
                    size: "20px"
                }
            },
            Place: {
                name: "Место проведения",
                icon: {
                    icon: r.GhS,
                    size: "20px"
                }
            },
            Map: {
                name: "Карта",
                icon: {
                    icon: r.bbv,
                    size: "20px"
                }
            },
            DayProgram: {
                name: "Программа дня",
                icon: {
                    icon: r.SoK,
                    size: "20px"
                }
            },
            DressCode: {
                name: "Дресс-код",
                icon: {
                    icon: r.tPK,
                    size: "20px"
                }
            },
            Timer: {
                name: "Таймер",
                icon: {
                    icon: r.lN8,
                    size: "20px"
                }
            },
            Quiz: {
                name: "Вопросы для гостей",
                icon: {
                    icon: r.kjE,
                    size: "20px"
                }
            },
            Contacts: {
                name: "Контакты",
                icon: {
                    icon: r.w7k,
                    size: "20px"
                }
            },
            Group: {
                name: "Общая группа",
                icon: {
                    icon: t.P4D,
                    size: "21px"
                }
            },
            Wishes: {
                name: "Пожелания гостям",
                icon: {
                    icon: s.zF$,
                    size: "21px"
                }
            },
            Final: {
                name: "Заключение",
                icon: {
                    icon: r.Nsb,
                    size: "20px"
                }
            }
        }
          , d = {
            NavBar: {
                name: "Меню",
                icon: {
                    icon: i.cur,
                    size: "17px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: 0,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !1
            },
            Main: {
                name: "Приветствие",
                icon: {
                    icon: t.plg,
                    size: "18px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: 1,
                    follows: ["NavBar"]
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            },
            Text: {
                name: "Текст",
                icon: {
                    icon: t.V8q,
                    size: "19px"
                },
                allowNumberInserts: 0,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !1,
                openByClick: !0
            },
            Calendar: {
                name: "Календарь",
                icon: {
                    icon: t.qKA,
                    size: "20px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !1,
                openByClick: !0
            },
            YouTube: {
                name: "YouTube",
                icon: {
                    icon: l.RLq,
                    size: "20px"
                },
                allowNumberInserts: 0,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            },
            Photo: {
                name: "Фото",
                icon: {
                    icon: t.tpQ,
                    size: "20px"
                },
                allowNumberInserts: 7,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            },
            Carousel: {
                name: "Карусель",
                icon: {
                    icon: t.Dxo,
                    size: "20px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !1
            },
            YMaps: {
                name: "Я.Карты",
                icon: {
                    icon: i.i63,
                    size: "19px"
                },
                allowNumberInserts: 0,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !1,
                showInEasyMode: !0,
                openByClick: !1,
                runInBackground: !0
            },
            GMaps: {
                name: "Google Карты",
                icon: {
                    icon: i.i63,
                    size: "19px"
                },
                allowNumberInserts: 0,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !1,
                showInEasyMode: !0,
                openByClick: !1
            },
            DayProgram: {
                name: "План дня",
                fullName: "Программа дня",
                icon: {
                    icon: a.HE5,
                    size: "22px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            },
            FreeSpace: {
                name: "Отступ",
                icon: {
                    icon: r.T$w,
                    size: "18px"
                },
                allowNumberInserts: 0,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !1,
                openByClick: !0
            },
            Timer: {
                name: "Таймер",
                icon: {
                    icon: t.ufm,
                    size: "22px"
                },
                allowNumberInserts: 0,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            },
            DressCode: {
                name: "Дресс-код",
                icon: {
                    icon: t.Lk,
                    size: "22px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            },
            Quiz: {
                name: "Опрос",
                icon: {
                    icon: r.Jq1,
                    size: "20px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !1
            },
            Folder: {
                name: "Папка",
                icon: {
                    icon: r.G3K,
                    size: "20px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !1,
                showInEasyMode: !0,
                openByClick: !0
            },
            CEDT: {
                name: "Элемент",
                icon: {
                    icon: r.Jq1,
                    size: "20px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !1,
                showInEasyMode: !0,
                openByClick: !0
            },
            Info: {
                name: "Информация",
                icon: {
                    icon: r.Jq1,
                    size: "20px"
                },
                allowNumberInserts: 1,
                fixedPosition: {
                    number: -1,
                    follows: []
                },
                unmountOnCollapse: !0,
                showInEasyMode: !0,
                openByClick: !0
            }
        }
    },
    17073: function(e, o, n) {
        let i = {
            text: "",
            fontSize: 25,
            bold: !1,
            color: n(60490).Z[0],
            font: "default",
            lineHeight: 1.5,
            align: "left",
            isItalic: !1,
            isUnderline: !1,
            autoScale: !1
        };
        o.Z = i
    },
    60490: function(e, o) {
        o.Z = ["#5a5a5a", "#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"]
    },
    77431: function(e, o) {
        o.Z = e => {
            if (!window.iframePreviewRef)
                return;
            let o = {
                type: "currentInvite",
                message: {
                    currentInvite: e = JSON.parse(JSON.stringify(e))
                }
            };
            setTimeout( () => {
                var e, n;
                null === (n = window.iframePreviewRef.current) || void 0 === n || null === (e = n.contentWindow) || void 0 === e || e.postMessage(o, "*")
            }
            , 150)
        }
    },
    60139: function(e, o) {
        o.Z = (e, o) => {
            if (!window.iframePreviewRef)
                return;
            let n = {
                type: "clickedByBlock",
                blockId: e,
                settings: o
            };
            setTimeout( () => {
                var e, o;
                null === (o = window.iframePreviewRef.current) || void 0 === o || null === (e = o.contentWindow) || void 0 === e || e.postMessage(n, "*")
            }
            , 150)
        }
    },
    98670: function(e, o, n) {
        n.d(o, {
            Z: function() {
                return l
            }
        });
        var i = n(73619)
          , t = n(17073);
        function l() {
            let e = (0,
            i.x0)(10);
            return {
                NavBar: {
                    v1: {
                        title: "NavBar",
                        variant: "v1",
                        height: "55px",
                        id: e,
                        music: {
                            is: !0,
                            value: "1"
                        },
                        isFixed: !0,
                        isShowHamburger: !0,
                        reverseItems: !1
                    }
                },
                Main: {
                    v1: {
                        title: "Main",
                        variant: "v1",
                        id: e,
                        isFullHeight: !0,
                        namesHeroes: t.Z,
                        date: t.Z,
                        photo: []
                    },
                    v2: {
                        title: "Main",
                        variant: "v2",
                        id: e,
                        photo: [],
                        names: []
                    },
                    v3: {
                        title: "Main",
                        variant: "v3",
                        photo: [],
                        id: e,
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
                    },
                    v4: {
                        title: "Main",
                        variant: "v4",
                        photo: [],
                        isFullHeight: !0,
                        id: e
                    },
                    v5: {
                        title: "Main",
                        variant: "v5",
                        photo: [],
                        id: e,
                        names: [],
                        tText: "С РАДОСТЬЮ ПРИГЛАШАЕМ ВАС\nНА ПРАЗДНОВАНИЕ НАШЕЙ СВАДЬБЫ",
                        bText: ""
                    }
                },
                Text: {
                    v1: {
                        title: "Text",
                        variant: "v1",
                        id: e,
                        ...t.Z,
                        text: "Пример текста и ссылки\n[Eventrix](https://eventrix.pro)"
                    }
                },
                Calendar: {
                    v1: {
                        title: "Calendar",
                        variant: "v1",
                        id: e
                    },
                    v2: {
                        title: "Calendar",
                        variant: "v2",
                        id: e
                    }
                },
                YouTube: {
                    v1: {
                        title: "YouTube",
                        variant: "v1",
                        id: e,
                        idVideo: "",
                        link: ""
                    }
                },
                Photo: {
                    v1: {
                        title: "Photo",
                        variant: "v1",
                        id: e,
                        photo: [],
                        isCircle: !1
                    }
                },
                Carousel: {
                    v1: {
                        title: "Carousel",
                        variant: "v1",
                        id: e,
                        photos: []
                    }
                },
                YMaps: {
                    v1: {
                        title: "YMaps",
                        variant: "v1",
                        id: e,
                        coords: "",
                        address: "",
                        size: "big",
                        scale: 11
                    }
                },
                GMaps: {
                    v1: {
                        title: "GMaps",
                        variant: "v1",
                        id: e,
                        coords: "",
                        address: "",
                        size: "big",
                        scale: 11
                    }
                },
                DayProgram: {
                    v1: {
                        title: "DayProgram",
                        variant: "v1",
                        id: e,
                        events: [],
                        radius: 100,
                        font: "default"
                    }
                },
                FreeSpace: {
                    v1: {
                        title: "FreeSpace",
                        variant: "v1",
                        id: e,
                        space: 50,
                        widthDivider: 15,
                        anchorName: "",
                        showDivider: !0
                    }
                },
                Timer: {
                    v1: {
                        title: "Timer",
                        variant: "v1",
                        id: e,
                        date: "",
                        timestampUTC: 0
                    },
                    v2: {
                        title: "Timer",
                        variant: "v2",
                        id: e,
                        date: "",
                        timestampUTC: 0,
                        type: "flip"
                    }
                },
                DressCode: {
                    v1: {
                        title: "DressCode",
                        variant: "v1",
                        id: e,
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#f9efe6"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#ece2d9"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#f9ddd2"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#ecbab9"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a29086"
                        }, {
                            id: "6",
                            t: "color",
                            v: "#dedfe1"
                        }, {
                            id: "7",
                            t: "color",
                            v: "#b7a7b1"
                        }, {
                            id: "8",
                            t: "color",
                            v: "#9baabf"
                        }, {
                            id: "9",
                            t: "color",
                            v: "#a18168"
                        }, {
                            id: "10",
                            t: "color",
                            v: "#000000"
                        }]
                    },
                    v2: {
                        title: "DressCode",
                        variant: "v2",
                        id: e,
                        items: [{
                            id: "1",
                            t: "color",
                            v: "#f9efe6"
                        }, {
                            id: "2",
                            t: "color",
                            v: "#ece2d9"
                        }, {
                            id: "3",
                            t: "color",
                            v: "#f9ddd2"
                        }, {
                            id: "4",
                            t: "color",
                            v: "#ecbab9"
                        }, {
                            id: "5",
                            t: "color",
                            v: "#a29086"
                        }, {
                            id: "6",
                            t: "color",
                            v: "#dedfe1"
                        }, {
                            id: "7",
                            t: "color",
                            v: "#b7a7b1"
                        }, {
                            id: "8",
                            t: "color",
                            v: "#9baabf"
                        }, {
                            id: "9",
                            t: "color",
                            v: "#a18168"
                        }, {
                            id: "10",
                            t: "color",
                            v: "#000000"
                        }]
                    }
                },
                Quiz: {
                    v1: {
                        title: "Quiz",
                        variant: "v1",
                        id: e,
                        questions: [{
                            type: "input",
                            isReq: !0,
                            question: "Введите Ваше имя и фамилию"
                        }, {
                            type: "radio",
                            isReq: !0,
                            question: "Присутствие",
                            answers: ["Я с удовольствием приду", "К сожалению, не смогу присутствовать"]
                        }, {
                            type: "checkbox",
                            isReq: !1,
                            question: "Мы хотим, чтобы свадьбы прошла весело, поэтому просим Вас выбрать алкоголь, который Вы предпочитаете:",
                            answers: ["Шампанское", "Красное сухое вино", "Красное полусладкое вино", "Белое полусладкое вино", "Белое сухое вино", "Виски", "Коньяк", "Водка", "Ром", "Джин", "Текила", "Безалкогольные напитки"]
                        }, {
                            type: "checkbox",
                            isReq: !1,
                            question: "Так же уточните Ваши предпочтения в горячих блюдах:",
                            answers: ["Мясо", "Рыба"]
                        }, {
                            type: "input",
                            isReq: !1,
                            question: "Музыкальные композиции, которые хотели бы услышать на празднике"
                        }]
                    }
                },
                Folder: {
                    v1: {
                        title: "Folder",
                        variant: "v1",
                        id: "Intro",
                        blocks: [],
                        isOn: !0
                    }
                },
                CEDT: {
                    v1: {
                        title: "CEDT",
                        variant: "v1",
                        id: "Intro",
                        isOn: !0,
                        name: "",
                        blocks: {}
                    }
                },
                Info: {
                    v1: {
                        title: "Info",
                        variant: "v1",
                        id: e,
                        icon: {
                            icon: null,
                            size: "20px"
                        },
                        header: "Информация",
                        node: null
                    }
                }
            }
        }
    },
    75288: function(e, o, n) {
        n.d(o, {
            S: function() {
                return a
            },
            i: function() {
                return r
            }
        });
        var i = n(36520)
          , t = n(27699)
          , l = n(27522);
        function a(e) {
            return r(e, (0,
            i.CG)(t.DQ))
        }
        function r(e, o) {
            let n = l.tI[e].allowNumberInserts;
            return 0 === n || function o(i) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                for (let l = 0; l < i.length; l++) {
                    let a = i[l];
                    if (a.title === e) {
                        if (++t >= n)
                            break
                    } else if ("Folder" === a.title && a.blocks && (t = o(a.blocks, t)) >= n)
                        break
                }
                return t
            }(o) < n
        }
    },
    27699: function(e, o, n) {
        n.d(o, {
            U6: function() {
                return v
            },
            PX: function() {
                return g
            },
            Jf: function() {
                return z
            },
            gI: function() {
                return B
            },
            mt: function() {
                return I
            },
            qm: function() {
                return h
            },
            uz: function() {
                return x
            },
            oR: function() {
                return w
            },
            Kf: function() {
                return C
            },
            OA: function() {
                return M
            },
            Gc: function() {
                return b
            },
            Qk: function() {
                return k
            },
            B4: function() {
                return y
            },
            DQ: function() {
                return F
            },
            Pb: function() {
                return P
            },
            RE: function() {
                return E
            },
            fh: function() {
                return p
            },
            HR: function() {
                return m
            }
        });
        var i = n(97281)
          , t = n(27522)
          , l = n(77431)
          , a = n(75288);
        function r(e, o, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , t = e.splice(o, 1)[0]
              , l = o;
            "up" === n && (l -= 1),
            "down" === n && (l += 1),
            "top" === n && (l = i),
            "bottom" === n && (l = e.length),
            e.splice(l, 0, t)
        }
        var s = n(98670)
          , c = n(73619)
          , u = n(60139);
        let d = {
            type: "",
            kind: null,
            variant: null,
            date: null,
            msTimeDelete: 0,
            data: {
                address: "",
                UTC: 0,
                timezone: (0,
                n(24737).iT)(),
                locale: navigator.language,
                date: "",
                place: ""
            },
            uid: "",
            url: "",
            blocks: [],
            settings: {
                theme: {
                    background: {
                        type: "none"
                    }
                }
            },
            published: !1,
            purchased: !1,
            templateId: null,
            allowEdit: !1,
            domain: null,
            shareResults: null
        }
          , f = (0,
        i.oM)({
            name: "@@currentInvite",
            initialState: d,
            reducers: {
                updateCurrentInvite: function(e, o) {
                    return (0,
                    l.Z)(o.payload),
                    o.payload
                },
                updateInviteData: function(e, o) {
                    e.data = o.payload,
                    (0,
                    l.Z)(e)
                },
                resetCurrentInvite: () => d,
                updateAllBlocks: function(e, o) {
                    e.blocks = o.payload,
                    (0,
                    l.Z)(e)
                },
                addBlock: function(e, o) {
                    if (!(0,
                    a.i)(o.payload.block.title, e.blocks))
                        return;
                    let n = [];
                    for (let o = 0; o < e.blocks.length; o++)
                        n.push(e.blocks[o].title);
                    let i = t.tI[o.payload.block.title].fixedPosition
                      , r = e => {
                        if (i.number < 0)
                            e.push(o.payload.block);
                        else if (i.follows.length)
                            for (let t = 0; t < i.follows.length; t++) {
                                let l = 0;
                                n.includes(i.follows[t]) || (l += 1),
                                e.splice(i.number - l, 0, o.payload.block)
                            }
                        else
                            e.splice(i.number, 0, o.payload.block)
                    }
                    ;
                    if (null === o.payload.idFolder)
                        r(e.blocks);
                    else {
                        let n = e.blocks.find(e => "Folder" === e.title && e.id === o.payload.idFolder);
                        n && n.blocks ? r(n.blocks) : console.error("Folder with id ".concat(o.payload.idFolder, " not found or folder does not have blocks property"))
                    }
                    (0,
                    l.Z)(e)
                },
                deleteBlock: function(e, o) {
                    let n = e => e.filter(e => e.id !== o.payload && ("Folder" === e.title && e.blocks && (e.blocks = n(e.blocks)),
                    !0));
                    e.blocks = n(e.blocks),
                    (0,
                    l.Z)(e)
                },
                editBlock: function(e, o) {
                    (function e(o, n) {
                        for (let i = 0; i < o.length; i++) {
                            let t = o[i];
                            if (t.id === n.payload.id && t.title === n.payload.title) {
                                let e = Object.keys(n.payload.data);
                                for (let o = 0; o < e.length; o++)
                                    t[e[o]] = n.payload.data[e[o]];
                                return !0
                            }
                            if ("Folder" === t.title && t.blocks && e(t.blocks, n))
                                return !0
                        }
                        return !1
                    }
                    )(e.blocks, o) && (0,
                    l.Z)(e)
                },
                changePositionBlocks: function(e, o) {
                    let n;
                    let i = 0
                      , a = null;
                    for (let l = 0; l < e.blocks.length; l++) {
                        let r = e.blocks[l];
                        if (t.tI[r.title].fixedPosition.number > -1 && (i += 1),
                        "Folder" === r.title) {
                            let e = r.blocks;
                            for (let i = 0; i < e.length; i++)
                                if (e[i].id === o.payload.idBLock) {
                                    n = i,
                                    a = r;
                                    break
                                }
                        } else if (r.id === o.payload.idBLock) {
                            n = l;
                            break
                        }
                        if (void 0 !== n)
                            break
                    }
                    if (void 0 !== n) {
                        if (a)
                            r(a.blocks, n, o.payload.offset);
                        else {
                            let t = n - i;
                            if (("up" === o.payload.offset || "top" === o.payload.offset) && 0 === t || ("down" === o.payload.offset || "bottom" === o.payload.offset) && t === e.blocks.length - 1)
                                return;
                            r(e.blocks, n, o.payload.offset, i)
                        }
                        (0,
                        l.Z)(e)
                    }
                },
                changeVariantBlock: function(e, o) {
                    let {idBlock: n, titleBlock: i, currentVariant: t, variants: a} = o.payload
                      , {block: r, index: c, indexInFolder: u} = (e => {
                        for (let o = 0; o < e.length; o++) {
                            let t = e[o];
                            if (t.id === n && t.title === i)
                                return {
                                    block: t,
                                    index: o,
                                    indexInFolder: -1
                                };
                            if ("Folder" === t.title && t.blocks) {
                                for (let e = 0; e < t.blocks.length; e++)
                                    if (t.blocks[e].id === n && t.blocks[e].title === i)
                                        return {
                                            block: t.blocks[e],
                                            index: o,
                                            indexInFolder: e
                                        }
                            }
                        }
                        return {
                            block: null,
                            index: -1,
                            indexInFolder: -1
                        }
                    }
                    )(e.blocks);
                    if (!r) {
                        console.error("Not found current block in store");
                        return
                    }
                    let d = parseInt(t.substr(1, 1)) + 1;
                    d > a.length && (d = 1);
                    let f = "v".concat(d)
                      , p = (0,
                    s.Z)()[i][f];
                    if (!p) {
                        console.error("Not found initial state for current block");
                        return
                    }
                    let m = {
                        ...p
                    };
                    Object.keys(m).forEach(e => {
                        "variant" !== e && void 0 !== r[e] && (m[e] = r[e])
                    }
                    ),
                    u > -1 ? e.blocks[c].blocks[u] = m : e.blocks[c] = m,
                    (0,
                    l.Z)(e)
                },
                changeSettingsInvite: function(e, o) {
                    e.settings = {
                        ...e.settings,
                        ...o.payload
                    },
                    (0,
                    l.Z)(e)
                },
                changeInviteUrl: function(e, o) {
                    e.url = o.payload
                },
                copyBlock: function(e, o) {
                    let {idBlock: n, newIdBlock: i} = o.payload;
                    (function e(o, n, i) {
                        for (let t = 0; t < o.length; t++) {
                            let l = o[t];
                            if (l.id === n && "Folder" !== l.title && "CEDT" !== l.title) {
                                let e = i || (0,
                                c.x0)(10)
                                  , n = {
                                    ...l,
                                    id: e
                                };
                                if (!(0,
                                a.i)(n.title, o))
                                    return !1;
                                return o.splice(t + 1, 0, n),
                                !0
                            }
                            if ("Folder" === l.title && l.blocks && e(l.blocks, n, i))
                                return !0
                        }
                        return !1
                    }
                    )(e.blocks, n, i) && (0,
                    l.Z)(e)
                },
                changeFolderTemplate: function(e, o) {
                    (function(e, o) {
                        let n = e.findIndex(e => e.id === o.payload.folderId && "Folder" === e.title);
                        return !(n < 0) && (e[n].blocks = o.payload.blocks,
                        !0)
                    }
                    )(e.blocks, o) && ((0,
                    l.Z)(e),
                    setTimeout( () => (0,
                    u.Z)(o.payload.folderId), 150))
                },
                changeInviteDomain: function(e, o) {
                    e.domain = o.payload
                },
                changeInviteShareResults: function(e, o) {
                    e.shareResults = o.payload
                }
            }
        })
          , {updateCurrentInvite: p, updateInviteData: m, addBlock: v, deleteBlock: b, editBlock: k, resetCurrentInvite: y, changePositionBlocks: h, changeVariantBlock: w, changeSettingsInvite: x, changeInviteUrl: I, copyBlock: C, changeFolderTemplate: g, changeInviteDomain: z, changeInviteShareResults: B} = f.actions
          , M = f.reducer
          , P = e => e.currentInvite
          , F = e => e.currentInvite.blocks
          , E = e => e.currentInvite.kind
    },
    36520: function(e, o, n) {
        n.d(o, {
            CG: function() {
                return l
            },
            Ji: function() {
                return a
            },
            TL: function() {
                return t
            }
        });
        var i = n(32603);
        let t = () => (0,
        i.I0)()
          , l = i.v9
          , a = i.zt
    }
}]);
