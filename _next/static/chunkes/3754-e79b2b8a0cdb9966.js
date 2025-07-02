"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3754, 4311], {
    54283: function(e, t, i) {
        i.d(t, {
            G: function() {
                return a
            }
        });
        var n = i(57437)
          , o = i(10883);
        i(2265);
        let a = e => (0,
        n.jsx)(o.I, {
            _hover: {
                boxShadow: "none",
                borderColor: "inherit"
            },
            _focus: {
                boxShadow: "none",
                borderColor: "inherit"
            },
            ...e
        })
    },
    35695: function(e, t, i) {
        i.d(t, {
            A: function() {
                return a
            }
        });
        var n = i(2661)
          , o = i(97048);
        let a = (e, t) => {
            let {positionMobile: i, ...a} = e
              , {toast: r} = (0,
            n.I)()
              , l = {
                duration: 3e3,
                isClosable: !0,
                position: "top-right",
                containerStyle: {
                    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    maxWidth: "400px",
                    ...t
                },
                ...a
            };
            o.tq && (a.hasOwnProperty("position") || (l.position = "top"),
            i && (l.position = i));
            let s = r(l);
            return {
                close: () => r.close(s)
            }
        }
    },
    79065: function(e, t, i) {
        i.d(t, {
            L: function() {
                return a
            },
            S: function() {
                return r
            }
        });
        var n = i(71318)
          , o = i.n(n);
        let a = o().start
          , r = o().done
    },
    10311: function(e, t, i) {
        i.d(t, {
            N: function() {
                return o
            },
            x: function() {
                return n
            }
        });
        let n = [{
            id: 0,
            name: "Без фильтра",
            filter: void 0
        }, {
            id: 1,
            name: "Ч/Б",
            filter: "grayscale(100%)"
        }, {
            id: 2,
            name: "Ч/Б контраст",
            filter: "grayscale(100%) contrast(130%)"
        }, {
            id: 3,
            name: "Ч/Б яркость",
            filter: "grayscale(100%) brightness(130%)"
        }, {
            id: 4,
            name: "Ч/Б насыщ.",
            filter: "grayscale(100%) contrast(150%)"
        }, {
            id: 5,
            name: "Хром",
            filter: "grayscale(0%) contrast(115%) brightness(105%) sepia(15%)"
        }, {
            id: 6,
            name: "Блеклый",
            filter: "contrast(90%) brightness(110%)"
        }, {
            id: 7,
            name: "Теплый",
            filter: "contrast(90%) brightness(110%) sepia(25%)"
        }, {
            id: 8,
            name: "Сепия",
            filter: "sepia(100%)"
        }, {
            id: 9,
            name: "Ч/Б сепия",
            filter: "grayscale(50%) sepia(50%)"
        }, {
            id: 10,
            name: "Контр. сепия",
            filter: "contrast(130%) sepia(50%)"
        }, {
            id: 11,
            name: "Ржавчина",
            filter: "sepia(100%) hue-rotate(320deg)"
        }, {
            id: 12,
            name: "Яркость",
            filter: "brightness(130%)"
        }, {
            id: 13,
            name: "Контраст",
            filter: "contrast(130%)"
        }, {
            id: 14,
            name: "Ярк. контр.",
            filter: "brightness(120%) contrast(120%)"
        }, {
            id: 15,
            name: "Насыщен.",
            filter: "saturate(130%)"
        }, {
            id: 16,
            name: "Размытие",
            filter: "blur(1px)"
        }, {
            id: 17,
            name: "Размытие 2х",
            filter: "blur(2px)"
        }, {
            id: 18,
            name: "Яркое разм.",
            filter: "blur(1px) brightness(130%)"
        }]
          , o = e => {
            if (!e)
                return;
            let t = n.find(t => t.id === e);
            return t ? t.filter : void 0
        }
    },
    87801: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 7,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 17
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Ждём вас:",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 4 : 9,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "amadeus",
                text: "{{date_full_month}}",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 25 : 47,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.20",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 0 : 12,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                title: "Calendar",
                variant: "v1"
            }]
        }
    },
    7466: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return a
            }
        });
        var n = i(6887)
          , o = i(75208);
        function a(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "Программа дня",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "Программа дня",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 28 : 40,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.15",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 12 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                title: "DayProgram",
                variant: "v1",
                events: (0,
                o.Z)(!1)
            }]
        }
    },
    75480: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "Дресс-код",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "Дресс-код",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 25 : 40,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.15",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 7 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Нам будет очень приятно,\nесли Вы поддержите цветовую\nгамму торжества и выберете\nнаряды в соответствии\nс цветовой палитрой\nнашей свадьбы",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 7 : 10,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Мужчины - чёрный низ, белый верх",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 7 : 10,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                title: "DressCode",
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
                }],
                variant: "v1"
            }]
        }
    },
    38724: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Будем рады видеть\nВас на нашем празднике!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 13 : 20,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.30",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 10 : 20,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "{{names_end}}",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 32 : 45,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.30",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 15 : 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !e,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                photo: e ? ["{{{photo}}}"] : [],
                title: "Photo",
                variant: "v1",
                isCircle: !0
            }, {
                id: (0,
                n.Z)(),
                space: e ? 10 : 20,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "See you soon",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 32 : 45,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.30",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 0 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }]
        }
    },
    83084: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "Дорогие родные и друзья!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 23 : 45,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.15",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 8 : 18,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 17
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Вы получили это приглашение,\nа значит мы спешим сообщить Вам,\nважную новость!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 11 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 5 : 10,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "Мы женимся!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 23 : 45,
                isItalic: !1,
                autoScale: !1,
                lineHeight: 1.5,
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 5 : 10,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Приглашаем Вас разделить\nс нами радость особенного\nдля нас события и\nстать частью нашей\nсемейной истории!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 11 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }]
        }
    },
    26101: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "Карта",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: "Как добраться?",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 22 : 40,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.15",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 7 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Для Вашего удобства\nмы подготовили карту.\nНадеемся, что вы легко\nнайдете место проведения\nсвадьбы и порадуете\nнас своим присутствием!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 9 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                size: e ? "micro" : "big",
                title: "YMaps",
                coords: "{{coords}}",
                address: "{{address}}",
                variant: "v1",
                scale: e ? 9 : 11
            }]
        }
    },
    24716: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return a
            }
        });
        var n = i(6887)
          , o = i(46775);
        function a(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "Обратная связь",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Подтвердите, пожалуйста,\nсвоё присутствие\nна нашем торжестве!",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 15 : 20,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.35",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 10 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                title: "Quiz",
                variant: "v1",
                questions: o.Z
            }]
        }
    },
    67655: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "{{place}}",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 15 : 20,
                isItalic: !0,
                autoScale: !1,
                lineHeight: 1.5,
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: 5,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "По адресу:\n{{address}}",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.60",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 5 : 10,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "Сбор гостей в {{time}}",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: 1.5,
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 5 : 10,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                title: "Carousel",
                photos: e ? ["{{{photos_restaurant}}}"] : [],
                variant: "v1"
            }]
        }
    },
    85813: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6887);
        function o(e) {
            return [{
                id: (0,
                n.Z)(),
                space: 50,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !0,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "annabelle",
                text: '"All you\nneed is love"',
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 28 : 40,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.15",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 6 : 12,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "amadeus",
                text: "{{date_full_month}}",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 28 : 40,
                isItalic: !1,
                autoScale: !1,
                lineHeight: "1.20",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 4 : 6,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                bold: !1,
                font: "rubik",
                text: "До свадьбы осталось",
                align: "center",
                color: "#5a5a5a",
                title: "Text",
                variant: "v1",
                fontSize: e ? 12 : 17,
                isItalic: !0,
                autoScale: !1,
                lineHeight: "1.25",
                isUnderline: !1
            }, {
                id: (0,
                n.Z)(),
                space: e ? 6 : 15,
                title: "FreeSpace",
                variant: "v1",
                anchorName: "",
                showDivider: !1,
                widthDivider: 15
            }, {
                id: (0,
                n.Z)(),
                date: "{{date_time}}",
                title: "Timer",
                variant: "v1",
                timestampUTC: "{{timestampUTC}}"
            }]
        }
    },
    6887: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(73619);
        function o() {
            return (0,
            n.x0)(10)
        }
    },
    6193: function(e, t, i) {
        i.d(t, {
            Eo: function() {
                return o
            },
            Kx: function() {
                return c
            },
            YA: function() {
                return d
            }
        });
        var n, o, a = i(73619), r = i(95106), l = i(20681);
        function s(e, t) {
            return (0,
            l.e)(r.ou.fromObject(e), t, void 0, ["time"]).formatted[0]
        }
        function c(e, t) {
            return {
                id: (0,
                a.x0)(7),
                time: s({
                    hour: 0,
                    minute: 0
                }, t),
                name: "Свое событие",
                title: "Название события",
                desc: "Описание своего события",
                isCustomEvent: !0,
                ...e ? {
                    time2: ""
                } : {}
            }
        }
        function d(e, t) {
            return [{
                id: 1,
                time: s({
                    hour: 16,
                    minute: 0
                }, t),
                name: "Сбор гостей",
                title: "Сбор гостей, фуршет",
                desc: "Собираясь на мероприятие, просим взять с собой ваши прекрасные улыбки и хорошее настроение",
                ...e ? {
                    time2: s({
                        hour: 16,
                        minute: 10
                    }, t)
                } : {}
            }, {
                id: 2,
                time: s({
                    hour: 16,
                    minute: 10
                }, t),
                name: "Церемония",
                title: "Церемония бракосочетания",
                desc: "На всякий случай приготовьте платочки для трогательного момента",
                ...e ? {
                    time2: s({
                        hour: 16,
                        minute: 40
                    }, t)
                } : {}
            }, {
                id: 3,
                time: s({
                    hour: 16,
                    minute: 40
                }, t),
                name: "Фотосессия",
                title: "Фотосессия",
                desc: "Время, для создания совместных фотографий молодоженов и их гостей",
                ...e ? {
                    time2: s({
                        hour: 17,
                        minute: 0
                    }, t)
                } : {}
            }, {
                id: 4,
                time: s({
                    hour: 17,
                    minute: 0
                }, t),
                name: "Банкет",
                title: "Начало банкета",
                desc: "Время вкусной еды, танцев и развлечений",
                ...e ? {
                    time2: ""
                } : {}
            }, {
                id: 12,
                time: s({
                    hour: 18,
                    minute: 0
                }, t),
                name: "Иллюзионист",
                title: "Выступление иллюзиониста",
                desc: "Поразительное шоу иллюзий, которое удивит и порадует всех гостей",
                ...e ? {
                    time2: s({
                        hour: 18,
                        minute: 30
                    }, t)
                } : {}
            }, {
                id: 5,
                time: s({
                    hour: 18,
                    minute: 30
                }, t),
                name: "Поздравления",
                title: "Тосты, поздравления, подарки",
                desc: "Гости выражают свои пожелания, тостуют за счастье молодоженов и дарят им подарки",
                ...e ? {
                    time2: ""
                } : {}
            }, {
                id: 6,
                time: s({
                    hour: 20,
                    minute: 0
                }, t),
                name: "Первый танец",
                title: "Первый танец молодоженов",
                desc: "Молодожены исполняют свой первый совместный танец",
                ...e ? {
                    time2: s({
                        hour: 20,
                        minute: 10
                    }, t)
                } : {}
            }, {
                id: 7,
                time: s({
                    hour: 20,
                    minute: 30
                }, t),
                name: "Танец с папой",
                title: "Танец невесты с папой",
                desc: "Одна из самых красивых и трогательных традиций свадебного мероприятия",
                ...e ? {
                    time2: s({
                        hour: 20,
                        minute: 40
                    }, t)
                } : {}
            }, {
                id: 8,
                time: s({
                    hour: 21,
                    minute: 30
                }, t),
                name: "Торт",
                title: "Свадебный торт",
                desc: "Сладкая традиция, которую мы не можем обойти стороной",
                ...e ? {
                    time2: s({
                        hour: 22,
                        minute: 0
                    }, t)
                } : {}
            }, {
                id: 9,
                time: s({
                    hour: 22,
                    minute: 30
                }, t),
                name: "Фаер-шоу",
                title: "Фаер-шоу",
                desc: "Яркое и красочное шоу с огнем, которое придаёт особую атмосферу празднику",
                ...e ? {
                    time2: s({
                        hour: 22,
                        minute: 45
                    }, t)
                } : {}
            }, {
                id: 10,
                time: s({
                    hour: 22,
                    minute: 50
                }, t),
                name: "Фейерверк",
                title: "Фейерверк",
                desc: "Незабываемое завершение этого волшебного дня",
                ...e ? {
                    time2: s({
                        hour: 23,
                        minute: 0
                    }, t)
                } : {}
            }, {
                id: 11,
                time: s({
                    hour: 23,
                    minute: 0
                }, t),
                name: "Финал",
                title: "Окончание вечера",
                desc: "К сожалению, даже такой прекрасный вечер может закончится",
                ...e ? {
                    time2: ""
                } : {}
            }]
        }
        (n = o || (o = {}))[n.GuestGathering = 1] = "GuestGathering",
        n[n.Ceremony = 2] = "Ceremony",
        n[n.PhotoSession = 3] = "PhotoSession",
        n[n.Banquet = 4] = "Banquet",
        n[n.Illusionist = 12] = "Illusionist",
        n[n.Congratulations = 5] = "Congratulations",
        n[n.FirstDance = 6] = "FirstDance",
        n[n.DanceWithFather = 7] = "DanceWithFather",
        n[n.Cake = 8] = "Cake",
        n[n.FireShow = 9] = "FireShow",
        n[n.Fireworks = 10] = "Fireworks",
        n[n.Finale = 11] = "Finale"
    },
    75208: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(6193);
        function o(e) {
            return [{
                id: n.Eo.GuestGathering,
                desc: "Собираясь на мероприятие, просим взять с собой ваши прекрасные улыбки и хорошее настроение",
                name: "Сбор гостей",
                time: "{{time}}",
                title: "Сбор гостей, фуршет",
                ...e ? {
                    time2: "{{dpTime2}}"
                } : {}
            }, {
                id: n.Eo.Ceremony,
                desc: "На всякий случай приготовьте платочки для трогательного момента",
                name: "Церемония",
                time: "{{dpTime2}}",
                title: "Церемония бракосочетания",
                ...e ? {
                    time2: "{{dpTime3}}"
                } : {}
            }, {
                id: n.Eo.Banquet,
                desc: "Время вкусной еды, танцев и развлечений",
                name: "Банкет",
                time: "{{dpTime3}}",
                title: "Начало банкета",
                ...e ? {
                    time2: ""
                } : {}
            }, {
                id: n.Eo.Cake,
                desc: "Сладкая традиция, которую мы не можем обойти стороной",
                name: "Торт",
                time: "{{dpTime4}}",
                title: "Свадебный торт",
                ...e ? {
                    time2: "{{dpTime5}}"
                } : {}
            }, {
                id: n.Eo.Fireworks,
                desc: "Незабываемое завершение этого волшебного дня",
                name: "Фейерверк",
                time: "{{dpTime6}}",
                title: "Фейерверк",
                ...e ? {
                    time2: "{{dpTime7}}"
                } : {}
            }, {
                id: n.Eo.Finale,
                desc: "К сожалению, даже такой прекрасный вечер может закончится",
                name: "Финал",
                time: "{{dpTime7}}",
                title: "Окончание вечера",
                ...e ? {
                    time2: ""
                } : {}
            }]
        }
    },
    46775: function(e, t) {
        t.Z = [{
            type: "input",
            isReq: !0,
            question: "Введите Ваше имя и фамилию"
        }, {
            type: "radio",
            isReq: !0,
            soi: "Я с удовольствием приду",
            answers: ["Я с удовольствием приду", "К сожалению, не смогу присутствовать"],
            question: "Присутствие"
        }, {
            type: "checkbox",
            isReq: !1,
            max: 5,
            answers: ["Шампанское", "Красное сухое вино", "Красное полусладкое вино", "Белое полусладкое вино", "Белое сухое вино", "Виски", "Коньяк", "Водка", "Ром", "Джин", "Текила", "Безалкогольные напитки"],
            question: "Мы хотим, чтобы свадьба прошла весело, поэтому просим Вас выбрать алкоголь, который Вы предпочитаете:"
        }, {
            type: "checkbox",
            isReq: !1,
            answers: ["Мясо", "Рыба"],
            question: "Так же уточните Ваши предпочтения в горячих блюдах:"
        }, {
            type: "input",
            isReq: !1,
            question: "Музыкальные композиции, которые хотели бы услышать на празднике"
        }]
    },
    27522: function(e, t, i) {
        i.d(t, {
            PM: function() {
                return c
            },
            tI: function() {
                return u
            },
            w4: function() {
                return d
            }
        });
        var n = i(37996)
          , o = i(32768)
          , a = i(63400)
          , r = i(85130)
          , l = i(11140)
          , s = i(76417);
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
          , d = {
            Menu: {
                name: "Меню",
                icon: {
                    icon: l.Ps6,
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
                    icon: l.yAi,
                    size: "20px"
                }
            },
            Intro: {
                name: "Вступление",
                icon: {
                    icon: l.J1t,
                    size: "20px"
                }
            },
            LStory: {
                name: "История любви",
                icon: {
                    icon: l.sF8,
                    size: "19px"
                }
            },
            Calendar: {
                name: "Календарь",
                icon: {
                    icon: l.bbP,
                    size: "20px"
                }
            },
            Place: {
                name: "Место проведения",
                icon: {
                    icon: l.GhS,
                    size: "20px"
                }
            },
            Map: {
                name: "Карта",
                icon: {
                    icon: l.bbv,
                    size: "20px"
                }
            },
            DayProgram: {
                name: "Программа дня",
                icon: {
                    icon: l.SoK,
                    size: "20px"
                }
            },
            DressCode: {
                name: "Дресс-код",
                icon: {
                    icon: l.tPK,
                    size: "20px"
                }
            },
            Timer: {
                name: "Таймер",
                icon: {
                    icon: l.lN8,
                    size: "20px"
                }
            },
            Quiz: {
                name: "Вопросы для гостей",
                icon: {
                    icon: l.kjE,
                    size: "20px"
                }
            },
            Contacts: {
                name: "Контакты",
                icon: {
                    icon: l.w7k,
                    size: "20px"
                }
            },
            Group: {
                name: "Общая группа",
                icon: {
                    icon: o.P4D,
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
                    icon: l.Nsb,
                    size: "20px"
                }
            }
        }
          , u = {
            NavBar: {
                name: "Меню",
                icon: {
                    icon: n.cur,
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
                    icon: o.plg,
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
                    icon: o.V8q,
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
                    icon: o.qKA,
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
                    icon: a.RLq,
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
                    icon: o.tpQ,
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
                    icon: o.Dxo,
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
                    icon: n.i63,
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
                    icon: n.i63,
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
                    icon: r.HE5,
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
                    icon: l.T$w,
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
                    icon: o.ufm,
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
                    icon: o.Lk,
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
                    icon: l.Jq1,
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
                    icon: l.G3K,
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
                    icon: l.Jq1,
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
                    icon: l.Jq1,
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
    71724: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return d
            }
        });
        var n = i(57437)
          , o = i(22053)
          , a = i(90480)
          , r = i(2265)
          , l = i(42336);
        function s(e) {
            let {props: t} = e
              , i = (0,
            r.useRef)(null)
              , o = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => (document.fonts.ready.then( () => {
                setTimeout( () => {
                    i.current && (o.current && o.current.unsubscribe(),
                    o.current = (0,
                    l.Z)(i.current, {
                        minSize: 5
                    }))
                }
                , 500)
            }
            ),
            () => {
                o.current && o.current.unsubscribe()
            }
            ), [t.text, t.font, t.bold, t.autoScale]),
            (0,
            n.jsx)("div", {
                ref: i,
                children: t.text
            })
        }
        var c = i(34344);
        function d(e) {
            let t;
            let i = e.font ? e.font : "default"
              , l = a.R[i]
              , d = e.fontSize ? e.fontSize : "2.5rem"
              , u = e.lineHeight ? e.lineHeight : 1.5
              , f = e.color ? e.color : "#5a5a5a";
            return (e.bold && (t = "boolean" == typeof e.bold ? e.bold ? "bold" : void 0 : e.bold),
            e.testFonts) ? (0,
            n.jsx)(o.xu, {
                position: "fixed",
                top: 0,
                left: 0,
                w: "fit-content",
                h: "100vh",
                overflow: "auto",
                bg: "#ffffff",
                pl: "3px",
                children: Object.keys(a.R).map( (t, i) => {
                    let r = a.R[t];
                    return (0,
                    n.jsx)(o.xu, {
                        fontSize: d,
                        className: r.className,
                        style: {
                            fontFamily: r.fontFamily
                        },
                        children: t + ": " + e.text
                    }, i)
                }
                )
            }) : (0,
            n.jsxs)(o.xu, {
                className: l.className,
                color: f,
                fontSize: d,
                textAlign: e.align,
                lineHeight: u,
                style: {
                    fontFamily: l.fontFamily,
                    fontWeight: t,
                    fontStyle: e.isItalic ? "italic" : void 0,
                    textDecoration: e.isUnderline ? "underline" : void 0,
                    maxWidth: e.maxWidthWithHidden ? e.maxWidthWithHidden : void 0,
                    overflow: e.maxWidthWithHidden ? "hidden" : void 0,
                    textOverflow: e.maxWidthWithHidden ? "ellipsis" : void 0,
                    whiteSpace: e.noWrap ? "nowrap" : void 0
                },
                ...e.BoxProps,
                children: [!e.noWrap && !e.autoScale && e.text && e.text.split("\n").map( (e, t, i) => {
                    let o = (0,
                    c.Z)(e);
                    return (0,
                    n.jsxs)(r.Fragment, {
                        children: [o, i.length - 1 !== t && (0,
                        n.jsx)("br", {})]
                    }, t)
                }
                ), e.noWrap && !e.autoScale && e.text, e.autoScale && (0,
                n.jsx)(s, {
                    props: e
                })]
            })
        }
    },
    17073: function(e, t, i) {
        let n = {
            text: "",
            fontSize: 25,
            bold: !1,
            color: i(60490).Z[0],
            font: "default",
            lineHeight: 1.5,
            align: "left",
            isItalic: !1,
            isUnderline: !1,
            autoScale: !1
        };
        t.Z = n
    },
    60490: function(e, t) {
        t.Z = ["#5a5a5a", "#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"]
    },
    49369: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return a
            }
        });
        var n = i(73619)
          , o = i(2265);
        function a(e) {
            let {dataItems: t, dataColors: i} = e;
            return (0,
            o.useMemo)( () => {
                let e = [];
                return t ? e = t : i && (e = i.map(e => ({
                    t: "color",
                    v: e,
                    id: (0,
                    n.x0)(7)
                }))),
                e
            }
            , [i, t])
        }
    },
    77431: function(e, t) {
        t.Z = e => {
            if (!window.iframePreviewRef)
                return;
            let t = {
                type: "currentInvite",
                message: {
                    currentInvite: e = JSON.parse(JSON.stringify(e))
                }
            };
            setTimeout( () => {
                var e, i;
                null === (i = window.iframePreviewRef.current) || void 0 === i || null === (e = i.contentWindow) || void 0 === e || e.postMessage(t, "*")
            }
            , 150)
        }
    },
    60139: function(e, t) {
        t.Z = (e, t) => {
            if (!window.iframePreviewRef)
                return;
            let i = {
                type: "clickedByBlock",
                blockId: e,
                settings: t
            };
            setTimeout( () => {
                var e, t;
                null === (t = window.iframePreviewRef.current) || void 0 === t || null === (e = t.contentWindow) || void 0 === e || e.postMessage(i, "*")
            }
            , 150)
        }
    },
    90480: function(e, t, i) {
        i.d(t, {
            R: function() {
                return V
            }
        });
        var n = i(12271)
          , o = i.n(n)
          , a = i(58983)
          , r = i.n(a)
          , l = i(57444)
          , s = i.n(l)
          , c = i(78300)
          , d = i.n(c)
          , u = i(99974)
          , f = i.n(u)
          , m = i(7203)
          , v = i.n(m)
          , p = i(74265)
          , h = i.n(p)
          , b = i(65197)
          , w = i.n(b)
          , g = i(31139)
          , x = i.n(g)
          , y = i(91066)
          , k = i.n(y)
          , S = i(78550)
          , N = i.n(S)
          , Z = i(70311)
          , I = i.n(Z)
          , D = i(77913)
          , C = i.n(D)
          , F = i(79456)
          , z = i.n(F)
          , T = i(39219)
          , E = i.n(T)
          , B = i(40653)
          , P = i.n(B)
          , M = i(89835)
          , H = i.n(M)
          , U = i(63164)
          , R = i.n(U)
          , q = i(80883)
          , O = i.n(q)
          , _ = i(47909)
          , W = i.n(_)
          , G = i(18308)
          , A = i.n(G)
          , j = i(91807)
          , L = i.n(j)
          , Y = i(37670)
          , Q = i.n(Y)
          , J = i(85502)
          , K = i.n(J);
        let V = {
            default: {
                fontFamily: "var(--chakra-fonts-body)",
                weight: []
            },
            nautilus: {
                className: r().className,
                weight: []
            },
            czizh: {
                className: s().className,
                weight: []
            },
            amadeus: {
                className: d().className,
                weight: []
            },
            lora: {
                className: f().className,
                weight: ["400", "500", "600", "700"]
            },
            annabelle: {
                className: o().className,
                weight: []
            },
            pacifico: {
                className: v().className,
                weight: ["400"]
            },
            great_vibes: {
                className: Q().className,
                weight: ["400"]
            },
            roboto: {
                className: A().className,
                weight: ["100", "300", "400", "500", "700", "900"]
            },
            nunito: {
                className: h().className,
                weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
            },
            merriweather: {
                className: w().className,
                weight: ["300", "400", "700", "900"]
            },
            playfair_display: {
                className: L().className,
                weight: ["400", "500", "600", "700", "800", "900"]
            },
            rubik: {
                className: x().className,
                weight: ["300", "400", "500", "600", "700", "800", "900"]
            },
            noto_serif: {
                className: k().className,
                weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
            },
            manrope: {
                className: N().className,
                weight: ["200", "300", "400", "500", "600", "700", "800"]
            },
            lobster: {
                className: I().className,
                weight: ["400"]
            },
            caveat: {
                className: C().className,
                weight: ["400", "500", "600", "700"]
            },
            comfortaa: {
                className: z().className,
                weight: ["300", "400", "500", "600", "700"]
            },
            vollkorn: {
                className: E().className,
                weight: ["400", "500", "600", "700", "800", "900"]
            },
            marck_script: {
                className: P().className,
                weight: ["400"]
            },
            bad_script: {
                className: H().className,
                weight: ["400"]
            },
            kurale: {
                className: R().className,
                weight: ["400"]
            },
            marmelad: {
                className: O().className,
                weight: ["400"]
            },
            balsamiq_sans: {
                className: W().className,
                weight: ["400", "700"]
            },
            open_sans: {
                className: K().className,
                weight: ["400", "500", "600", "700", "800", "900"]
            }
        }
    },
    12761: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(79786);
        function o(e, t, i) {
            if ("string" == typeof e)
                return e;
            if (e.keyS3)
                return "https://9268df75-4885-4132-b667-ca646c5df3ec.selstorage.ru/" + e.keyS3;
            let o = {
                type: e.type,
                index: e.index,
                inviteUID: t,
                idBlock: i
            };
            return "/api/files/get?" + (0,
            n.Z)(o)
        }
    },
    4090: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(10311);
        function o(e) {
            if ("string" != typeof e && e.filter)
                return (0,
                n.N)(e.filter)
        }
    },
    81551: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            },
            g: function() {
                return n
            }
        });
        let n = [{
            title: "Музыка №1",
            file: "/music/1.mp3",
            value: "1"
        }, {
            title: "Музыка №2",
            file: "/music/2.mp3",
            value: "2"
        }, {
            title: "Музыка №3",
            file: "/music/3.mp3",
            value: "3"
        }, {
            title: "Музыка №4",
            file: "/music/4.mp3",
            value: "4"
        }];
        function o(e) {
            for (let t = 0; t < n.length; t++)
                if (n[t].value === e)
                    return n[t];
            return "false" === e ? {
                title: "Не нужна",
                file: "",
                value: "false"
            } : "custom" === e ? {
                title: "Моя музыка",
                file: "",
                value: "custom"
            } : {
                title: "Не нужна",
                file: "",
                value: "false"
            }
        }
    },
    98670: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return a
            }
        });
        var n = i(73619)
          , o = i(17073);
        function a() {
            let e = (0,
            n.x0)(10);
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
                        namesHeroes: o.Z,
                        date: o.Z,
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
                        ...o.Z,
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
    75288: function(e, t, i) {
        i.d(t, {
            S: function() {
                return r
            },
            i: function() {
                return l
            }
        });
        var n = i(36520)
          , o = i(27699)
          , a = i(27522);
        function r(e) {
            return l(e, (0,
            n.CG)(o.DQ))
        }
        function l(e, t) {
            let i = a.tI[e].allowNumberInserts;
            return 0 === i || function t(n) {
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                for (let a = 0; a < n.length; a++) {
                    let r = n[a];
                    if (r.title === e) {
                        if (++o >= i)
                            break
                    } else if ("Folder" === r.title && r.blocks && (o = t(r.blocks, o)) >= i)
                        break
                }
                return o
            }(t) < i
        }
    },
    27699: function(e, t, i) {
        i.d(t, {
            U6: function() {
                return p
            },
            PX: function() {
                return N
            },
            Jf: function() {
                return Z
            },
            gI: function() {
                return I
            },
            mt: function() {
                return k
            },
            qm: function() {
                return g
            },
            uz: function() {
                return y
            },
            oR: function() {
                return x
            },
            Kf: function() {
                return S
            },
            OA: function() {
                return D
            },
            Gc: function() {
                return h
            },
            Qk: function() {
                return b
            },
            B4: function() {
                return w
            },
            DQ: function() {
                return F
            },
            Pb: function() {
                return C
            },
            RE: function() {
                return z
            },
            fh: function() {
                return m
            },
            HR: function() {
                return v
            }
        });
        var n = i(97281)
          , o = i(27522)
          , a = i(77431)
          , r = i(75288);
        function l(e, t, i) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , o = e.splice(t, 1)[0]
              , a = t;
            "up" === i && (a -= 1),
            "down" === i && (a += 1),
            "top" === i && (a = n),
            "bottom" === i && (a = e.length),
            e.splice(a, 0, o)
        }
        var s = i(98670)
          , c = i(73619)
          , d = i(60139);
        let u = {
            type: "",
            kind: null,
            variant: null,
            date: null,
            msTimeDelete: 0,
            data: {
                address: "",
                UTC: 0,
                timezone: (0,
                i(24737).iT)(),
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
        n.oM)({
            name: "@@currentInvite",
            initialState: u,
            reducers: {
                updateCurrentInvite: function(e, t) {
                    return (0,
                    a.Z)(t.payload),
                    t.payload
                },
                updateInviteData: function(e, t) {
                    e.data = t.payload,
                    (0,
                    a.Z)(e)
                },
                resetCurrentInvite: () => u,
                updateAllBlocks: function(e, t) {
                    e.blocks = t.payload,
                    (0,
                    a.Z)(e)
                },
                addBlock: function(e, t) {
                    if (!(0,
                    r.i)(t.payload.block.title, e.blocks))
                        return;
                    let i = [];
                    for (let t = 0; t < e.blocks.length; t++)
                        i.push(e.blocks[t].title);
                    let n = o.tI[t.payload.block.title].fixedPosition
                      , l = e => {
                        if (n.number < 0)
                            e.push(t.payload.block);
                        else if (n.follows.length)
                            for (let o = 0; o < n.follows.length; o++) {
                                let a = 0;
                                i.includes(n.follows[o]) || (a += 1),
                                e.splice(n.number - a, 0, t.payload.block)
                            }
                        else
                            e.splice(n.number, 0, t.payload.block)
                    }
                    ;
                    if (null === t.payload.idFolder)
                        l(e.blocks);
                    else {
                        let i = e.blocks.find(e => "Folder" === e.title && e.id === t.payload.idFolder);
                        i && i.blocks ? l(i.blocks) : console.error("Folder with id ".concat(t.payload.idFolder, " not found or folder does not have blocks property"))
                    }
                    (0,
                    a.Z)(e)
                },
                deleteBlock: function(e, t) {
                    let i = e => e.filter(e => e.id !== t.payload && ("Folder" === e.title && e.blocks && (e.blocks = i(e.blocks)),
                    !0));
                    e.blocks = i(e.blocks),
                    (0,
                    a.Z)(e)
                },
                editBlock: function(e, t) {
                    (function e(t, i) {
                        for (let n = 0; n < t.length; n++) {
                            let o = t[n];
                            if (o.id === i.payload.id && o.title === i.payload.title) {
                                let e = Object.keys(i.payload.data);
                                for (let t = 0; t < e.length; t++)
                                    o[e[t]] = i.payload.data[e[t]];
                                return !0
                            }
                            if ("Folder" === o.title && o.blocks && e(o.blocks, i))
                                return !0
                        }
                        return !1
                    }
                    )(e.blocks, t) && (0,
                    a.Z)(e)
                },
                changePositionBlocks: function(e, t) {
                    let i;
                    let n = 0
                      , r = null;
                    for (let a = 0; a < e.blocks.length; a++) {
                        let l = e.blocks[a];
                        if (o.tI[l.title].fixedPosition.number > -1 && (n += 1),
                        "Folder" === l.title) {
                            let e = l.blocks;
                            for (let n = 0; n < e.length; n++)
                                if (e[n].id === t.payload.idBLock) {
                                    i = n,
                                    r = l;
                                    break
                                }
                        } else if (l.id === t.payload.idBLock) {
                            i = a;
                            break
                        }
                        if (void 0 !== i)
                            break
                    }
                    if (void 0 !== i) {
                        if (r)
                            l(r.blocks, i, t.payload.offset);
                        else {
                            let o = i - n;
                            if (("up" === t.payload.offset || "top" === t.payload.offset) && 0 === o || ("down" === t.payload.offset || "bottom" === t.payload.offset) && o === e.blocks.length - 1)
                                return;
                            l(e.blocks, i, t.payload.offset, n)
                        }
                        (0,
                        a.Z)(e)
                    }
                },
                changeVariantBlock: function(e, t) {
                    let {idBlock: i, titleBlock: n, currentVariant: o, variants: r} = t.payload
                      , {block: l, index: c, indexInFolder: d} = (e => {
                        for (let t = 0; t < e.length; t++) {
                            let o = e[t];
                            if (o.id === i && o.title === n)
                                return {
                                    block: o,
                                    index: t,
                                    indexInFolder: -1
                                };
                            if ("Folder" === o.title && o.blocks) {
                                for (let e = 0; e < o.blocks.length; e++)
                                    if (o.blocks[e].id === i && o.blocks[e].title === n)
                                        return {
                                            block: o.blocks[e],
                                            index: t,
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
                    if (!l) {
                        console.error("Not found current block in store");
                        return
                    }
                    let u = parseInt(o.substr(1, 1)) + 1;
                    u > r.length && (u = 1);
                    let f = "v".concat(u)
                      , m = (0,
                    s.Z)()[n][f];
                    if (!m) {
                        console.error("Not found initial state for current block");
                        return
                    }
                    let v = {
                        ...m
                    };
                    Object.keys(v).forEach(e => {
                        "variant" !== e && void 0 !== l[e] && (v[e] = l[e])
                    }
                    ),
                    d > -1 ? e.blocks[c].blocks[d] = v : e.blocks[c] = v,
                    (0,
                    a.Z)(e)
                },
                changeSettingsInvite: function(e, t) {
                    e.settings = {
                        ...e.settings,
                        ...t.payload
                    },
                    (0,
                    a.Z)(e)
                },
                changeInviteUrl: function(e, t) {
                    e.url = t.payload
                },
                copyBlock: function(e, t) {
                    let {idBlock: i, newIdBlock: n} = t.payload;
                    (function e(t, i, n) {
                        for (let o = 0; o < t.length; o++) {
                            let a = t[o];
                            if (a.id === i && "Folder" !== a.title && "CEDT" !== a.title) {
                                let e = n || (0,
                                c.x0)(10)
                                  , i = {
                                    ...a,
                                    id: e
                                };
                                if (!(0,
                                r.i)(i.title, t))
                                    return !1;
                                return t.splice(o + 1, 0, i),
                                !0
                            }
                            if ("Folder" === a.title && a.blocks && e(a.blocks, i, n))
                                return !0
                        }
                        return !1
                    }
                    )(e.blocks, i, n) && (0,
                    a.Z)(e)
                },
                changeFolderTemplate: function(e, t) {
                    (function(e, t) {
                        let i = e.findIndex(e => e.id === t.payload.folderId && "Folder" === e.title);
                        return !(i < 0) && (e[i].blocks = t.payload.blocks,
                        !0)
                    }
                    )(e.blocks, t) && ((0,
                    a.Z)(e),
                    setTimeout( () => (0,
                    d.Z)(t.payload.folderId), 150))
                },
                changeInviteDomain: function(e, t) {
                    e.domain = t.payload
                },
                changeInviteShareResults: function(e, t) {
                    e.shareResults = t.payload
                }
            }
        })
          , {updateCurrentInvite: m, updateInviteData: v, addBlock: p, deleteBlock: h, editBlock: b, resetCurrentInvite: w, changePositionBlocks: g, changeVariantBlock: x, changeSettingsInvite: y, changeInviteUrl: k, copyBlock: S, changeFolderTemplate: N, changeInviteDomain: Z, changeInviteShareResults: I} = f.actions
          , D = f.reducer
          , C = e => e.currentInvite
          , F = e => e.currentInvite.blocks
          , z = e => e.currentInvite.kind
    },
    84983: function(e, t) {
        t.Z = {
            widthWrapperWindow: 450,
            widthWrapperWindowLongerHD: 500,
            maxWidthConstructWhenDesktop: 1e3
        }
    },
    36289: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return l
            }
        });
        var n = i(83464)
          , o = i(46220)
          , a = i(35695)
          , r = i(79065);
        async function l(e, t, i, l) {
            (t = void 0 !== t && t) && (0,
            r.L)();
            let s = await function(e) {
                let t = o.operation({
                    retries: 3
                });
                return new Promise( (i, o) => {
                    t.attempt(async o => {
                        try {
                            let o;
                            if (o = "file"in e || "files[]"in e ? await n.Z.postForm(e.url, {
                                file: e.file,
                                "files[]": e["files[]"]
                            }) : await (0,
                            n.Z)(e),
                            200 !== o.status) {
                                if (t.retry())
                                    return;
                                return i({
                                    error: !0,
                                    message: {
                                        title: "Сервис временно не доступен",
                                        description: "Пожалуйста, повторите попытку немного позже"
                                    }
                                })
                            }
                            return o.data.error,
                            i(o.data)
                        } catch (n) {
                            if (t.retry(n))
                                return;
                            if (e.errorMessageConnect)
                                return i({
                                    error: !0,
                                    message: {
                                        title: e.errorMessageConnect.title,
                                        description: e.errorMessageConnect.description
                                    }
                                });
                            return i({
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
            if (s.redirectUrl && !i)
                return window.location.replace(s.redirectUrl),
                {
                    isData: !1,
                    reason: "REDIRECT"
                };
            if (s.error) {
                if (l)
                    return {
                        isData: !1,
                        reason: "ERROR"
                    };
                let e = {
                    status: "error",
                    title: "",
                    duration: 5e3
                };
                return s.message.title || s.message.description || (e.title = "Возникла ошибка",
                e.description = "Попробуйте ещё раз"),
                s.message.title && (e.title = s.message.title),
                s.message.description && (e.description = s.message.description),
                t && (0,
                r.S)(),
                (0,
                a.A)(e),
                {
                    isData: !1,
                    reason: "ERROR"
                }
            }
            return t && (0,
            r.S)(),
            {
                isData: !0,
                data: i ? s : s.data
            }
        }
    },
    98536: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return n
            }
        });
        function n(e) {
            let t = document.getElementById(e);
            if (t)
                return t;
            let i = document.getElementsByClassName(e);
            return i.length > 0 ? i[0] : null
        }
    },
    34344: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(77562);
        function o(e, t) {
            let i = "text-decoration: underline;";
            return e = (e = e.replace(/\[([^\]]+)\]\((https?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])\)/ig, (e, n, o) => '<a href="'.concat(o, '" target="_blank" class="').concat(t, '" style="').concat(i, '">').concat(n, "</a>"))).replace(/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|](?![^<]*>))/ig, e => '<a href="'.concat(e, '" target="_blank" class="').concat(t, '" style="').concat(i, '">').concat(e, "</a>")),
            (0,
            n.ZP)(e)
        }
    },
    79786: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return n
            }
        });
        function n(e) {
            let t = "";
            for (let i in e)
                "" != t && (t += "&"),
                t += i + "=" + encodeURIComponent(e[i]);
            return t
        }
    },
    3274: function(e, t, i) {
        i.d(t, {
            k: function() {
                return a
            },
            u: function() {
                return o
            }
        });
        var n = i(98536);
        let o = e => {
            let t;
            let i = e.parentEl ? document.getElementById(e.parentEl) : window
              , o = e.scrollEl ? document.getElementById(e.scrollEl) : document.body
              , a = null;
            if (e.targetEl && (a = "string" == typeof e.targetEl ? (0,
            n.Z)(e.targetEl) : e.targetEl),
            !i || !a || !o)
                return;
            let r = e.offset ? e.offset : 0
              , l = a.getBoundingClientRect().top - o.getBoundingClientRect().top - r;
            l < 0 && (l = 0),
            i instanceof HTMLElement ? t = o.scrollHeight - i.clientHeight : t = o.scrollHeight - window.innerHeight,
            l > t && (l = t),
            i.scrollTo({
                top: l,
                behavior: e.behavior ? e.behavior : "smooth"
            })
        }
          , a = e => {
            window.scrollTo({
                top: 0,
                behavior: e ? "instant" : "smooth"
            })
        }
    },
    36520: function(e, t, i) {
        i.d(t, {
            CG: function() {
                return a
            },
            Ji: function() {
                return r
            },
            TL: function() {
                return o
            }
        });
        var n = i(32603);
        let o = () => (0,
        n.I0)()
          , a = n.v9
          , r = n.zt
    }
}]);
