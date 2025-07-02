"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7336], {
    82993: function(t, e, n) {
        n.d(e, {
            D: function() {
                return o
            }
        });
        var i = n(87493)
          , r = n(94357)
          , s = n(35726);
        function o(t, e, n) {
            let o = (0,
            i.i)(t) ? t : (0,
            r.BX)(t);
            return o.start((0,
            s.v)("", o, e, n)),
            o.animation
        }
    },
    35726: function(t, e, n) {
        n.d(e, {
            v: function() {
                return v
            }
        });
        var i = n(25551)
          , r = n(26147)
          , s = n(28441)
          , o = n(91687)
          , a = n(29711)
          , u = n(21457);
        let l = t => null !== t;
        var h = n(56440);
        let c = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , d = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , f = {
            type: "keyframes",
            duration: .8
        }
          , p = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , m = (t, {keyframes: e}) => e.length > 2 ? f : h.G.has(t) ? t.startsWith("scale") ? d(e[1]) : c : p
          , v = (t, e, n, h={}, c, d) => f => {
            let p = (0,
            i.e)(h, t) || {}
              , v = p.delay || h.delay || 0
              , {elapsed: g=0} = h;
            g -= (0,
            a.w)(v);
            let y = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...p,
                delay: -g,
                onUpdate: t => {
                    e.set(t),
                    p.onUpdate && p.onUpdate(t)
                }
                ,
                onComplete: () => {
                    f(),
                    p.onComplete && p.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: d ? void 0 : c
            };
            !function({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: u, elapsed: l, ...h}) {
                return !!Object.keys(h).length
            }(p) && Object.assign(y, m(t, y)),
            y.duration && (y.duration = (0,
            a.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0,
            a.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
            let x = !1;
            if (!1 !== y.type && (0 !== y.duration || y.repeatDelay) || (y.duration = 0,
            0 !== y.delay || (x = !0)),
            (u.c.instantAnimations || u.c.skipAnimations) && (x = !0,
            y.duration = 0,
            y.delay = 0),
            y.allowFlatten = !p.type && !p.ease,
            x && !d && void 0 !== e.get()) {
                let t = function(t, {repeat: e, repeatType: n="loop"}, i) {
                    let r = t.filter(l)
                      , s = e && "loop" !== n && e % 2 == 1 ? 0 : r.length - 1;
                    return r[s]
                }(y.keyframes, p);
                if (void 0 !== t) {
                    r.Wi.update( () => {
                        y.onUpdate(t),
                        y.onComplete()
                    }
                    );
                    return
                }
            }
            return p.isSync ? new s.L(y) : new o.$(y)
        }
    },
    28500: function(t, e, n) {
        n.d(e, {
            w: function() {
                return h
            }
        });
        var i = n(25551)
          , r = n(26147)
          , s = n(14151)
          , o = n(48771)
          , a = n(1327)
          , u = n(34005)
          , l = n(35726);
        function h(t, e, {delay: n=0, transitionOverride: h, type: c}={}) {
            let {transition: d=t.getDefaultTransition(), transitionEnd: f, ...p} = e;
            h && (d = h);
            let m = []
              , v = c && t.animationState && t.animationState.getState()[c];
            for (let e in p) {
                let o = t.getValue(e, t.latestValues[e] ?? null)
                  , h = p[e];
                if (void 0 === h || v && function({protectedKeys: t, needsAnimating: e}, n) {
                    let i = t.hasOwnProperty(n) && !0 !== e[n];
                    return e[n] = !1,
                    i
                }(v, e))
                    continue;
                let c = {
                    delay: n,
                    ...(0,
                    i.e)(d || {}, e)
                }
                  , f = o.get();
                if (void 0 !== f && !o.isAnimating && !Array.isArray(h) && h === f && !c.velocity)
                    continue;
                let g = !1;
                if (window.MotionHandoffAnimation) {
                    let n = (0,
                    u.s)(t);
                    if (n) {
                        let t = window.MotionHandoffAnimation(n, e, r.Wi);
                        null !== t && (c.startTime = t,
                        g = !0)
                    }
                }
                (0,
                a.K)(t, e),
                o.start((0,
                l.v)(e, o, h, t.shouldReduceMotion && s.z.has(e) ? {
                    type: !1
                } : c, t, g));
                let y = o.animation;
                y && m.push(y)
            }
            return f && Promise.all(m).then( () => {
                r.Wi.update( () => {
                    f && (0,
                    o.C)(t, f)
                }
                )
            }
            ),
            m
        }
    },
    63466: function(t, e, n) {
        n.d(e, {
            d: function() {
                return a
            }
        });
        var i = n(67043)
          , r = n(28500);
        function s(t, e, n={}) {
            let a = (0,
            i.x)(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0)
              , {transition: u=t.getDefaultTransition() || {}} = a || {};
            n.transitionOverride && (u = n.transitionOverride);
            let l = a ? () => Promise.all((0,
            r.w)(t, a, n)) : () => Promise.resolve()
              , h = t.variantChildren && t.variantChildren.size ? (i=0) => {
                let {delayChildren: r=0, staggerChildren: a, staggerDirection: l} = u;
                return function(t, e, n=0, i=0, r=1, a) {
                    let u = []
                      , l = (t.variantChildren.size - 1) * i
                      , h = 1 === r ? (t=0) => t * i : (t=0) => l - t * i;
                    return Array.from(t.variantChildren).sort(o).forEach( (t, i) => {
                        t.notify("AnimationStart", e),
                        u.push(s(t, e, {
                            ...a,
                            delay: n + h(i)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(u)
                }(t, e, r + i, a, l, n)
            }
            : () => Promise.resolve()
              , {when: c} = u;
            if (!c)
                return Promise.all([l(), h(n.delay)]);
            {
                let[t,e] = "beforeChildren" === c ? [l, h] : [h, l];
                return t().then( () => e())
            }
        }
        function o(t, e) {
            return t.sortNodePosition(e)
        }
        function a(t, e, n={}) {
            let o;
            if (t.notify("AnimationStart", e),
            Array.isArray(e))
                o = Promise.all(e.map(e => s(t, e, n)));
            else if ("string" == typeof e)
                o = s(t, e, n);
            else {
                let s = "function" == typeof e ? (0,
                i.x)(t, e, n.custom) : e;
                o = Promise.all((0,
                r.w)(t, s, n))
            }
            return o.then( () => {
                t.notify("AnimationComplete", e)
            }
            )
        }
    },
    61750: function(t, e, n) {
        n.d(e, {
            M: function() {
                return s
            },
            t: function() {
                return r
            }
        });
        var i = n(17444);
        let r = "framerAppearId"
          , s = "data-" + (0,
        i.D)(r)
    },
    34005: function(t, e, n) {
        n.d(e, {
            s: function() {
                return r
            }
        });
        var i = n(61750);
        function r(t) {
            return t.props[i.M]
        }
    },
    20569: function(t, e, n) {
        n.d(e, {
            H: function() {
                return i
            }
        });
        function i(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
    },
    44944: function(t, e, n) {
        n.d(e, {
            C: function() {
                return i
            }
        });
        let i = t => Array.isArray(t)
    },
    49637: function(t, e, n) {
        n.d(e, {
            hO: function() {
                return o
            },
            oO: function() {
                return s
            }
        });
        var i = n(2265)
          , r = n(64252);
        function s(t=!0) {
            let e = (0,
            i.useContext)(r.O);
            if (null === e)
                return [!0, null];
            let {isPresent: n, onExitComplete: s, register: o} = e
              , a = (0,
            i.useId)();
            (0,
            i.useEffect)( () => {
                if (t)
                    return o(a)
            }
            , [t]);
            let u = (0,
            i.useCallback)( () => t && s && s(a), [a, s, t]);
            return !n && s ? [!1, u] : [!0]
        }
        function o() {
            var t;
            return null === (t = (0,
            i.useContext)(r.O)) || t.isPresent
        }
    },
    58881: function(t, e, n) {
        n.d(e, {
            p: function() {
                return i
            }
        });
        let i = (0,
        n(2265).createContext)({})
    },
    47337: function(t, e, n) {
        n.d(e, {
            u: function() {
                return i
            }
        });
        let i = (0,
        n(2265).createContext)({
            strict: !1
        })
    },
    45750: function(t, e, n) {
        n.d(e, {
            _: function() {
                return i
            }
        });
        let i = (0,
        n(2265).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    56961: function(t, e, n) {
        n.d(e, {
            v: function() {
                return i
            }
        });
        let i = (0,
        n(2265).createContext)({})
    },
    64252: function(t, e, n) {
        n.d(e, {
            O: function() {
                return i
            }
        });
        let i = (0,
        n(2265).createContext)(null)
    },
    29913: function(t, e, n) {
        n.d(e, {
            g: function() {
                return i
            }
        });
        let i = (0,
        n(2265).createContext)({})
    },
    34969: function(t, e, n) {
        n.d(e, {
            E: function() {
                return i
            }
        });
        function i(t, e, n, i={
            passive: !0
        }) {
            return t.addEventListener(e, n, i),
            () => t.removeEventListener(e, n)
        }
    },
    97883: function(t, e, n) {
        n.d(e, {
            a: function() {
                return s
            }
        });
        var i = n(34969)
          , r = n(43490);
        function s(t, e, n, s) {
            return (0,
            i.E)(t, e, (0,
            r.s)(n), s)
        }
    },
    43490: function(t, e, n) {
        n.d(e, {
            Q: function() {
                return r
            },
            s: function() {
                return s
            }
        });
        var i = n(25602);
        function r(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let s = t => e => (0,
        i.D)(e) && t(e, r(e))
    },
    80063: function(t, e, n) {
        n.d(e, {
            L: function() {
                return i
            }
        });
        class i {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
    },
    76940: function(t, e, n) {
        n.d(e, {
            s: function() {
                return x
            }
        });
        var i = n(20569)
          , r = n(63466)
          , s = n(44944);
        function o(t, e) {
            if (!Array.isArray(e))
                return !1;
            let n = e.length;
            if (n !== t.length)
                return !1;
            for (let i = 0; i < n; i++)
                if (e[i] !== t[i])
                    return !1;
            return !0
        }
        var a = n(74115)
          , u = n(72589);
        let l = u.V.length;
        var h = n(67043);
        let c = [...u.e].reverse()
          , d = u.e.length;
        function f(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function p() {
            return {
                animate: f(!0),
                whileInView: f(),
                whileHover: f(),
                whileTap: f(),
                whileDrag: f(),
                whileFocus: f(),
                exit: f()
            }
        }
        var m = n(80063);
        class v extends m.L {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: n}) => (0,
                    r.d)(t, e, n)))
                      , n = p()
                      , f = !0
                      , m = e => (n, i) => {
                        let r = (0,
                        h.x)(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
                        if (r) {
                            let {transition: t, transitionEnd: e, ...i} = r;
                            n = {
                                ...n,
                                ...i,
                                ...e
                            }
                        }
                        return n
                    }
                    ;
                    function v(r) {
                        let {props: p} = t
                          , v = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let n = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (n.initial = e.props.initial),
                                n
                            }
                            let n = {};
                            for (let t = 0; t < l; t++) {
                                let i = u.V[t]
                                  , r = e.props[i];
                                ((0,
                                a.$)(r) || !1 === r) && (n[i] = r)
                            }
                            return n
                        }(t.parent) || {}
                          , g = []
                          , y = new Set
                          , x = {}
                          , w = 1 / 0;
                        for (let e = 0; e < d; e++) {
                            var T;
                            let u = c[e]
                              , l = n[u]
                              , h = void 0 !== p[u] ? p[u] : v[u]
                              , d = (0,
                            a.$)(h)
                              , P = u === r ? l.isActive : null;
                            !1 === P && (w = e);
                            let b = h === v[u] && h !== p[u] && d;
                            if (b && f && t.manuallyAnimateOnMount && (b = !1),
                            l.protectedKeys = {
                                ...x
                            },
                            !l.isActive && null === P || !h && !l.prevProp || (0,
                            i.H)(h) || "boolean" == typeof h)
                                continue;
                            let S = (T = l.prevProp,
                            "string" == typeof h ? h !== T : !!Array.isArray(h) && !o(h, T))
                              , A = S || u === r && l.isActive && !b && d || e > w && d
                              , V = !1
                              , M = Array.isArray(h) ? h : [h]
                              , D = M.reduce(m(u), {});
                            !1 === P && (D = {});
                            let {prevResolvedValues: E={}} = l
                              , C = {
                                ...E,
                                ...D
                            }
                              , R = e => {
                                A = !0,
                                y.has(e) && (V = !0,
                                y.delete(e)),
                                l.needsAnimating[e] = !0;
                                let n = t.getValue(e);
                                n && (n.liveStyle = !1)
                            }
                            ;
                            for (let t in C) {
                                let e = D[t]
                                  , n = E[t];
                                if (!x.hasOwnProperty(t))
                                    ((0,
                                    s.C)(e) && (0,
                                    s.C)(n) ? o(e, n) : e === n) ? void 0 !== e && y.has(t) ? R(t) : l.protectedKeys[t] = !0 : null != e ? R(t) : y.add(t)
                            }
                            l.prevProp = h,
                            l.prevResolvedValues = D,
                            l.isActive && (x = {
                                ...x,
                                ...D
                            }),
                            f && t.blockInitialAnimation && (A = !1);
                            let k = !(b && S) || V;
                            A && k && g.push(...M.map(t => ({
                                animation: t,
                                options: {
                                    type: u
                                }
                            })))
                        }
                        if (y.size) {
                            let e = {};
                            if ("boolean" != typeof p.initial) {
                                let n = (0,
                                h.x)(t, Array.isArray(p.initial) ? p.initial[0] : p.initial);
                                n && n.transition && (e.transition = n.transition)
                            }
                            y.forEach(n => {
                                let i = t.getBaseTarget(n)
                                  , r = t.getValue(n);
                                r && (r.liveStyle = !0),
                                e[n] = i ?? null
                            }
                            ),
                            g.push({
                                animation: e
                            })
                        }
                        let P = !!g.length;
                        return f && (!1 === p.initial || p.initial === p.animate) && !t.manuallyAnimateOnMount && (P = !1),
                        f = !1,
                        P ? e(g) : Promise.resolve()
                    }
                    return {
                        animateChanges: v,
                        setActive: function(e, i) {
                            if (n[e].isActive === i)
                                return Promise.resolve();
                            t.variantChildren?.forEach(t => t.animationState?.setActive(e, i)),
                            n[e].isActive = i;
                            let r = v(e);
                            for (let t in n)
                                n[t].protectedKeys = {};
                            return r
                        },
                        setAnimateFunction: function(n) {
                            e = n(t)
                        },
                        getState: () => n,
                        reset: () => {
                            n = p(),
                            f = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                (0,
                i.H)(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                this.node.animationState.reset(),
                this.unmountControls?.()
            }
        }
        let g = 0;
        class y extends m.L {
            constructor() {
                super(...arguments),
                this.id = g++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n)
                    return;
                let i = this.node.animationState.setActive("exit", !t);
                e && !t && i.then( () => {
                    e(this.id)
                }
                )
            }
            mount() {
                let {register: t, onExitComplete: e} = this.node.presenceContext || {};
                e && e(this.id),
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let x = {
            animation: {
                Feature: v
            },
            exit: {
                Feature: y
            }
        }
    },
    35938: function(t, e, n) {
        n.d(e, {
            featureDefinitions: function() {
                return r
            }
        });
        let i = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , r = {};
        for (let t in i)
            r[t] = {
                isEnabled: e => i[t].some(t => !!e[t])
            }
    },
    71926: function(t, e, n) {
        n.d(e, {
            o: function() {
                return Y
            }
        });
        var i = n(80063)
          , r = n(56277)
          , s = n(97159)
          , o = n(92854)
          , a = n(26147)
          , u = n(33811)
          , l = n(62035)
          , h = n(35726)
          , c = n(34969)
          , d = n(97883)
          , f = n(43490)
          , p = n(82063)
          , m = n(25549)
          , v = n(96674)
          , g = n(65255)
          , y = n(50813);
        let x = ({current: t}) => t ? t.ownerDocument.defaultView : null;
        var w = n(34006)
          , T = n(1327)
          , P = n(25602)
          , b = n(24750)
          , S = n(29711)
          , A = n(41440);
        class V {
            constructor(t, e, {transformPagePoint: n, contextWindow: i, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = E(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , n = (0,
                    A.y)(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !n)
                        return;
                    let {point: i} = t
                      , {timestamp: r} = a.frameData;
                    this.history.push({
                        ...i,
                        timestamp: r
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = M(e, this.transformPagePoint),
                    a.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: n, onSessionEnd: i, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = E("pointercancel" === t.type ? this.lastMoveEventInfo : M(e, this.transformPagePoint), this.history);
                    this.startEvent && n && n(t, s),
                    i && i(t, s)
                }
                ,
                !(0,
                P.D)(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = n,
                this.contextWindow = i || window;
                let s = M((0,
                f.Q)(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: u} = a.frameData;
                this.history = [{
                    ...o,
                    timestamp: u
                }];
                let {onSessionStart: l} = e;
                l && l(t, E(s, this.history)),
                this.removeListeners = (0,
                b.z)((0,
                d.a)(this.contextWindow, "pointermove", this.handlePointerMove), (0,
                d.a)(this.contextWindow, "pointerup", this.handlePointerUp), (0,
                d.a)(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                a.Pn)(this.updatePoint)
            }
        }
        function M(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function D(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function E({point: t}, e) {
            return {
                point: t,
                delta: D(t, C(e)),
                offset: D(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = t.length - 1
                      , i = null
                      , r = C(t);
                    for (; n >= 0 && (i = t[n],
                    !(r.timestamp - i.timestamp > (0,
                    S.w)(.1))); )
                        n--;
                    if (!i)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = (0,
                    S.X)(r.timestamp - i.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - i.x) / s,
                        y: (r.y - i.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function C(t) {
            return t[t.length - 1]
        }
        var R = n(81645)
          , k = n(21865);
        function L(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function j(t, e) {
            let n = e.min - t.min
              , i = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
            {
                min: n,
                max: i
            }
        }
        function O(t, e, n) {
            return {
                min: B(t, e),
                max: B(t, n)
            }
        }
        function B(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let F = new WeakMap;
        class $ {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = (0,
                v.dO)(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: n} = this.visualElement;
                if (n && !1 === n.isPresent)
                    return;
                let {dragSnapToOrigin: i} = this.getProps();
                this.panSession = new V(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: n} = this.getProps();
                        n ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor((0,
                        f.Q)(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: n, dragPropagation: i, onDragStart: r} = this.getProps();
                        if (n && !i && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = (0,
                        s.K)(n),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        (0,
                        g.U)(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (o.aQ.test(e)) {
                                let {projection: n} = this.visualElement;
                                if (n && n.layout) {
                                    let i = n.layout.layoutBox[t];
                                    if (i) {
                                        let t = (0,
                                        m.JO)(i);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && a.Wi.postRender( () => r(t, e)),
                        (0,
                        T.K)(this.visualElement, "transform");
                        let {animationState: u} = this.visualElement;
                        u && u.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: n, dragDirectionLock: i, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!n && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (i && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let n = null;
                                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
                                n
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => (0,
                    g.U)(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play())
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: i,
                    contextWindow: x(this.visualElement)
                })
            }
            stop(t, e) {
                let n = this.isDragging;
                if (this.cancel(),
                !n)
                    return;
                let {velocity: i} = e;
                this.startAnimation(i);
                let {onDragEnd: r} = this.getProps();
                r && a.Wi.postRender( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, n) {
                let {drag: i} = this.getProps();
                if (!n || !I(t, i, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + n[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: n}, i) {
                    return void 0 !== e && t < e ? t = i ? (0,
                    u.t)(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? (0,
                    u.t)(n, t, i.max) : Math.min(t, n)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                let {dragConstraints: t, dragElastic: e} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
                  , i = this.constraints;
                t && (0,
                w.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {top: e, left: n, bottom: i, right: r}) {
                    return {
                        x: L(t.x, n, r),
                        y: L(t.y, e, i)
                    }
                }(n.layoutBox, t) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: O(t, "left", "right"),
                        y: O(t, "top", "bottom")
                    }
                }(e),
                i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && (0,
                g.U)(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min),
                        void 0 !== e.max && (n.max = e.max - t.min),
                        n
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
                if (!e || !(0,
                w.I)(e))
                    return !1;
                let i = e.current;
                (0,
                l.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = (0,
                y.z)(i, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: j((t = r.layout.layoutBox).x, s.x),
                    y: j(t.y, s.y)
                };
                if (n) {
                    let t = n((0,
                    p.z2)(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = (0,
                    p.i8)(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: n, dragElastic: i, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all((0,
                g.U)(o => {
                    if (!I(o, e, this.currentDirection))
                        return;
                    let u = a && a[o] || {};
                    s && (u = {
                        min: 0,
                        max: 0
                    });
                    let l = {
                        type: "inertia",
                        velocity: n ? t[o] : 0,
                        bounceStiffness: i ? 200 : 1e6,
                        bounceDamping: i ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...u
                    };
                    return this.startAxisValueAnimation(o, l)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let n = this.getAxisMotionValue(t);
                return (0,
                T.K)(this.visualElement, t),
                n.start((0,
                h.v)(t, n, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                (0,
                g.U)(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                (0,
                g.U)(t => this.getAxisMotionValue(t).animation?.pause())
            }
            getAnimationState(t) {
                return this.getAxisMotionValue(t).animation?.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , n = this.visualElement.getProps();
                return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                (0,
                g.U)(e => {
                    let {drag: n} = this.getProps();
                    if (!I(e, n, this.currentDirection))
                        return;
                    let {projection: i} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (i && i.layout) {
                        let {min: n, max: s} = i.layout.layoutBox[e];
                        r.set(t[e] - (0,
                        u.t)(n, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: n} = this.visualElement;
                if (!(0,
                w.I)(e) || !n || !this.constraints)
                    return;
                this.stopAnimation();
                let i = {
                    x: 0,
                    y: 0
                };
                (0,
                g.U)(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let n = e.get();
                        i[t] = function(t, e) {
                            let n = .5
                              , i = (0,
                            m.JO)(t)
                              , r = (0,
                            m.JO)(e);
                            return r > i ? n = (0,
                            R.Y)(e.min, e.max - i, t.min) : i > r && (n = (0,
                            R.Y)(t.min, t.max - r, e.min)),
                            (0,
                            k.u)(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                (0,
                g.U)(e => {
                    if (!I(e, t, null))
                        return;
                    let n = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    n.set((0,
                    u.t)(r, s, i[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                F.set(this.visualElement, this);
                let t = this.visualElement.current
                  , e = (0,
                d.a)(t, "pointerdown", t => {
                    let {drag: e, dragListener: n=!0} = this.getProps();
                    e && n && this.start(t)
                }
                )
                  , n = () => {
                    let {dragConstraints: t} = this.getProps();
                    (0,
                    w.I)(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , r = i.addEventListener("measure", n);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                a.Wi.read(n);
                let s = (0,
                c.E)(window, "resize", () => this.scalePositionWithinConstraints())
                  , o = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && ((0,
                    g.U)(e => {
                        let n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate,
                        n.set(n.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    s(),
                    e(),
                    r(),
                    o && o()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: i=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: n,
                    dragPropagation: i,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function I(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        class U extends i.L {
            constructor(t) {
                super(t),
                this.removeGroupControls = r.Z,
                this.removeListeners = r.Z,
                this.controls = new $(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || r.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let W = t => (e, n) => {
            t && a.Wi.postRender( () => t(e, n))
        }
        ;
        class X extends i.L {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = r.Z
            }
            onPointerDown(t) {
                this.session = new V(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: x(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: n, onPanEnd: i} = this.node.getProps();
                return {
                    onSessionStart: W(t),
                    onStart: W(e),
                    onMove: n,
                    onEnd: (t, e) => {
                        delete this.session,
                        i && a.Wi.postRender( () => i(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = (0,
                d.a)(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var N = n(58920);
        let Y = {
            pan: {
                Feature: X
            },
            drag: {
                Feature: U,
                ProjectionNode: n(81369).u,
                MeasureLayout: N.q
            }
        }
    },
    77225: function(t, e, n) {
        n.d(e, {
            E: function() {
                return T
            }
        });
        var i = n(26147)
          , r = n(33320)
          , s = n(43490)
          , o = n(80063);
        function a(t, e, n) {
            let {props: r} = t;
            t.animationState && r.whileHover && t.animationState.setActive("whileHover", "Start" === n);
            let o = r["onHover" + n];
            o && i.Wi.postRender( () => o(e, (0,
            s.Q)(e)))
        }
        class u extends o.L {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = (0,
                r.M)(t, (t, e) => (a(this.node, e, "Start"),
                t => a(this.node, t, "End"))))
            }
            unmount() {}
        }
        var l = n(24750)
          , h = n(34969);
        class c extends o.L {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = (0,
                l.z)((0,
                h.E)(this.node.current, "focus", () => this.onFocus()), (0,
                h.E)(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        var d = n(42257);
        function f(t, e, n) {
            let {props: r} = t;
            if (t.current instanceof HTMLButtonElement && t.current.disabled)
                return;
            t.animationState && r.whileTap && t.animationState.setActive("whileTap", "Start" === n);
            let o = r["onTap" + ("End" === n ? "" : n)];
            o && i.Wi.postRender( () => o(e, (0,
            s.Q)(e)))
        }
        class p extends o.L {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = (0,
                d.O)(t, (t, e) => (f(this.node, e, "Start"),
                (t, {success: e}) => f(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let m = new WeakMap
          , v = new WeakMap
          , g = t => {
            let e = m.get(t.target);
            e && e(t)
        }
          , y = t => {
            t.forEach(g)
        }
          , x = {
            some: 0,
            all: 1
        };
        class w extends o.L {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: n, amount: i="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof i ? i : x[i]
                };
                return function(t, e, n) {
                    let i = function({root: t, ...e}) {
                        let n = t || document;
                        v.has(n) || v.set(n, {});
                        let i = v.get(n)
                          , r = JSON.stringify(e);
                        return i[r] || (i[r] = new IntersectionObserver(y,{
                            root: t,
                            ...e
                        })),
                        i[r]
                    }(e);
                    return m.set(t, n),
                    i.observe(t),
                    () => {
                        m.delete(t),
                        i.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: n, onViewportLeave: i} = this.node.getProps()
                      , s = e ? n : i;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return n => t[n] !== e[n]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let T = {
            inView: {
                Feature: w
            },
            tap: {
                Feature: p
            },
            focus: {
                Feature: c
            },
            hover: {
                Feature: u
            }
        }
    },
    82760: function(t, e, n) {
        n.d(e, {
            b: function() {
                return s
            }
        });
        var i = n(81369)
          , r = n(58920);
        let s = {
            layout: {
                ProjectionNode: i.u,
                MeasureLayout: r.q
            }
        }
    },
    58920: function(t, e, n) {
        n.d(e, {
            q: function() {
                return y
            }
        });
        var i = n(57437)
          , r = n(26147)
          , s = n(3697)
          , o = n(2265)
          , a = n(49637)
          , u = n(58881)
          , l = n(29913)
          , h = n(50215)
          , c = n(92854);
        function d(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let f = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!c.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let n = d(t, e.target.x)
                  , i = d(t, e.target.y);
                return `${n}% ${i}%`
            }
        };
        var p = n(65050)
          , m = n(33811)
          , v = n(98639);
        class g extends o.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: i} = this.props
                  , {projection: r} = t;
                (0,
                v.B)(x),
                r && (e.group && e.group.add(r),
                n && n.register && i && n.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                h.V.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: n, drag: i, isPresent: s} = this.props
                  , {projection: o} = n;
                return o && (o.isPresent = s,
                i || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
                t.isPresent === s || (s ? o.promote() : o.relegate() || r.Wi.postRender( () => {
                    let t = o.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                s.g.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
                  , {projection: i} = t;
                i && (i.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(i),
                n && n.deregister && n.deregister(i))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function y(t) {
            let[e,n] = (0,
            a.oO)()
              , r = (0,
            o.useContext)(u.p);
            return (0,
            i.jsx)(g, {
                ...t,
                layoutGroup: r,
                switchLayoutGroup: (0,
                o.useContext)(l.g),
                isPresent: e,
                safeToRemove: n
            })
        }
        let x = {
            borderRadius: {
                ...f,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: f,
            borderTopRightRadius: f,
            borderBottomLeftRadius: f,
            borderBottomRightRadius: f,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: n}) => {
                    let i = p.P.parse(t);
                    if (i.length > 5)
                        return t;
                    let r = p.P.createTransformer(t)
                      , s = "number" != typeof i[0] ? 1 : 0
                      , o = n.x.scale * e.x
                      , a = n.y.scale * e.y;
                    i[0 + s] /= o,
                    i[1 + s] /= a;
                    let u = (0,
                    m.t)(o, a, .5);
                    return "number" == typeof i[2 + s] && (i[2 + s] /= u),
                    "number" == typeof i[3 + s] && (i[3 + s] /= u),
                    r(i)
                }
            }
        }
    },
    24470: function(t, e, n) {
        n.d(e, {
            K: function() {
                return r
            }
        });
        var i = n(35938);
        function r(t) {
            for (let e in t)
                i.featureDefinitions[e] = {
                    ...i.featureDefinitions[e],
                    ...t[e]
                }
        }
    },
    61774: function(t, e, n) {
        n.d(e, {
            B: function() {
                return P
            }
        });
        var i = n(57437)
          , r = n(2265)
          , s = n(58881)
          , o = n(47337)
          , a = n(45750)
          , u = n(56961)
          , l = n(17743)
          , h = n(74115);
        function c(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var d = n(44563)
          , f = n(35938)
          , p = n(24470)
          , m = n(29960)
          , v = n(34006)
          , g = n(3697)
          , y = n(61750)
          , x = n(64252)
          , w = n(29913)
          , T = n(11534);
        function P(t) {
            var e, n;
            let {preloadedFeatures: P, createVisualElement: b, useRender: S, useVisualState: A, Component: V} = t;
            function M(t, e) {
                var n;
                let p;
                let m = {
                    ...(0,
                    r.useContext)(a._),
                    ...t,
                    layoutId: function(t) {
                        let {layoutId: e} = t
                          , n = (0,
                        r.useContext)(s.p).id;
                        return n && void 0 !== e ? n + "-" + e : e
                    }(t)
                }
                  , {isStatic: P} = m
                  , M = function(t) {
                    let {initial: e, animate: n} = function(t, e) {
                        if ((0,
                        l.G)(t)) {
                            let {initial: e, animate: n} = t;
                            return {
                                initial: !1 === e || (0,
                                h.$)(e) ? e : void 0,
                                animate: (0,
                                h.$)(n) ? n : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0,
                    r.useContext)(u.v));
                    return (0,
                    r.useMemo)( () => ({
                        initial: e,
                        animate: n
                    }), [c(e), c(n)])
                }(t)
                  , D = A(t, P);
                if (!P && d.j) {
                    (0,
                    r.useContext)(o.u).strict;
                    let t = function(t) {
                        let {drag: e, layout: n} = f.featureDefinitions;
                        if (!e && !n)
                            return {};
                        let i = {
                            ...e,
                            ...n
                        };
                        return {
                            MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == n ? void 0 : n.isEnabled(t)) ? i.MeasureLayout : void 0,
                            ProjectionNode: i.ProjectionNode
                        }
                    }(m);
                    p = t.MeasureLayout,
                    M.visualElement = function(t, e, n, i, s) {
                        let {visualElement: l} = (0,
                        r.useContext)(u.v)
                          , h = (0,
                        r.useContext)(o.u)
                          , c = (0,
                        r.useContext)(x.O)
                          , d = (0,
                        r.useContext)(a._).reducedMotion
                          , f = (0,
                        r.useRef)(null);
                        i = i || h.renderer,
                        !f.current && i && (f.current = i(t, {
                            visualState: e,
                            parent: l,
                            props: n,
                            presenceContext: c,
                            blockInitialAnimation: !!c && !1 === c.initial,
                            reducedMotionConfig: d
                        }));
                        let p = f.current
                          , m = (0,
                        r.useContext)(w.g);
                        p && !p.projection && s && ("html" === p.type || "svg" === p.type) && function(t, e, n, i) {
                            let {layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: u, layoutRoot: l, layoutCrossfade: h} = e;
                            t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                if (e)
                                    return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                            }(t.parent)),
                            t.projection.setOptions({
                                layoutId: r,
                                layout: s,
                                alwaysMeasureLayout: !!o || a && (0,
                                v.I)(a),
                                visualElement: t,
                                animationType: "string" == typeof s ? s : "both",
                                initialPromotionConfig: i,
                                crossfade: h,
                                layoutScroll: u,
                                layoutRoot: l
                            })
                        }(f.current, n, s, m);
                        let P = (0,
                        r.useRef)(!1);
                        (0,
                        r.useInsertionEffect)( () => {
                            p && P.current && p.update(n, c)
                        }
                        );
                        let b = n[y.M]
                          , S = (0,
                        r.useRef)(!!b && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
                        return (0,
                        T.L)( () => {
                            p && (P.current = !0,
                            window.MotionIsMounted = !0,
                            p.updateFeatures(),
                            g.g.render(p.render),
                            S.current && p.animationState && p.animationState.animateChanges())
                        }
                        ),
                        (0,
                        r.useEffect)( () => {
                            p && (!S.current && p.animationState && p.animationState.animateChanges(),
                            S.current && (queueMicrotask( () => {
                                window.MotionHandoffMarkAsComplete?.(b)
                            }
                            ),
                            S.current = !1))
                        }
                        ),
                        p
                    }(V, D, m, b, t.ProjectionNode)
                }
                return (0,
                i.jsxs)(u.v.Provider, {
                    value: M,
                    children: [p && M.visualElement ? (0,
                    i.jsx)(p, {
                        visualElement: M.visualElement,
                        ...m
                    }) : null, S(V, t, (n = M.visualElement,
                    (0,
                    r.useCallback)(t => {
                        t && D.onMount && D.onMount(t),
                        n && (t ? n.mount(t) : n.unmount()),
                        e && ("function" == typeof e ? e(t) : (0,
                        v.I)(e) && (e.current = t))
                    }
                    , [n])), D, P, M.visualElement)]
                })
            }
            P && (0,
            p.K)(P),
            M.displayName = "motion.".concat("string" == typeof V ? V : "create(".concat(null !== (n = null !== (e = V.displayName) && void 0 !== e ? e : V.name) && void 0 !== n ? n : "", ")"));
            let D = (0,
            r.forwardRef)(M);
            return D[m.a] = V,
            D
        }
    },
    77556: function(t, e, n) {
        n.d(e, {
            j: function() {
                return s
            }
        });
        var i = n(56440)
          , r = n(98639);
        function s(t, {layout: e, layoutId: n}) {
            return i.G.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!r.P[t] || "opacity" === t)
        }
    },
    29960: function(t, e, n) {
        n.d(e, {
            a: function() {
                return i
            }
        });
        let i = Symbol.for("motionComponentSymbol")
    },
    74935: function(t, e, n) {
        n.d(e, {
            t: function() {
                return c
            }
        });
        var i = n(2265)
          , r = n(20569)
          , s = n(56961)
          , o = n(64252)
          , a = n(17743)
          , u = n(31297)
          , l = n(53576)
          , h = n(84364);
        let c = t => (e, n) => {
            let c = (0,
            i.useContext)(s.v)
              , d = (0,
            i.useContext)(o.O)
              , f = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e}, n, i, s) {
                return {
                    latestValues: function(t, e, n, i) {
                        let s = {}
                          , o = i(t, {});
                        for (let t in o)
                            s[t] = (0,
                            h.b)(o[t]);
                        let {initial: l, animate: c} = t
                          , d = (0,
                        a.G)(t)
                          , f = (0,
                        a.M)(t);
                        e && f && !d && !1 !== t.inherit && (void 0 === l && (l = e.initial),
                        void 0 === c && (c = e.animate));
                        let p = !!n && !1 === n.initial
                          , m = (p = p || !1 === l) ? c : l;
                        if (m && "boolean" != typeof m && !(0,
                        r.H)(m)) {
                            let e = Array.isArray(m) ? m : [m];
                            for (let n = 0; n < e.length; n++) {
                                let i = (0,
                                u.o)(t, e[n]);
                                if (i) {
                                    let {transitionEnd: t, transition: e, ...n} = i;
                                    for (let t in n) {
                                        let e = n[t];
                                        if (Array.isArray(e)) {
                                            let t = p ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t)
                                        s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(n, i, s, t),
                    renderState: e()
                }
            }
            )(t, e, c, d);
            return n ? f() : (0,
            l.h)(f)
        }
    },
    35998: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        let i = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function r(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || i.has(t)
        }
    },
    82063: function(t, e, n) {
        function i({top: t, left: e, right: n, bottom: i}) {
            return {
                x: {
                    min: e,
                    max: n
                },
                y: {
                    min: t,
                    max: i
                }
            }
        }
        function r({x: t, y: e}) {
            return {
                top: e.min,
                right: t.max,
                bottom: e.max,
                left: t.min
            }
        }
        function s(t, e) {
            if (!e)
                return t;
            let n = e({
                x: t.left,
                y: t.top
            })
              , i = e({
                x: t.right,
                y: t.bottom
            });
            return {
                top: n.y,
                left: n.x,
                bottom: i.y,
                right: i.x
            }
        }
        n.d(e, {
            d7: function() {
                return s
            },
            i8: function() {
                return i
            },
            z2: function() {
                return r
            }
        })
    },
    47227: function(t, e, n) {
        n.d(e, {
            D2: function() {
                return d
            },
            YY: function() {
                return l
            },
            am: function() {
                return h
            },
            o2: function() {
                return u
            },
            q2: function() {
                return s
            }
        });
        var i = n(33811)
          , r = n(12787);
        function s(t, e, n) {
            return n + e * (t - n)
        }
        function o(t, e, n, i, r) {
            return void 0 !== r && (t = i + r * (t - i)),
            i + n * (t - i) + e
        }
        function a(t, e=0, n=1, i, r) {
            t.min = o(t.min, e, n, i, r),
            t.max = o(t.max, e, n, i, r)
        }
        function u(t, {x: e, y: n}) {
            a(t.x, e.translate, e.scale, e.originPoint),
            a(t.y, n.translate, n.scale, n.originPoint)
        }
        function l(t, e, n, i=!1) {
            let s, o;
            let a = n.length;
            if (a) {
                e.x = e.y = 1;
                for (let l = 0; l < a; l++) {
                    o = (s = n[l]).projectionDelta;
                    let {visualElement: a} = s.options;
                    (!a || !a.props.style || "contents" !== a.props.style.display) && (i && s.options.layoutScroll && s.scroll && s !== s.root && d(t, {
                        x: -s.scroll.offset.x,
                        y: -s.scroll.offset.y
                    }),
                    o && (e.x *= o.x.scale,
                    e.y *= o.y.scale,
                    u(t, o)),
                    i && (0,
                    r.ud)(s.latestValues) && d(t, s.latestValues))
                }
                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
            }
        }
        function h(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function c(t, e, n, r, s=.5) {
            let o = (0,
            i.t)(t.min, t.max, s);
            a(t, e, n, o, r)
        }
        function d(t, e) {
            c(t.x, e.x, e.scaleX, e.scale, e.originX),
            c(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
    },
    25549: function(t, e, n) {
        n.d(e, {
            JO: function() {
                return r
            },
            b3: function() {
                return c
            },
            tf: function() {
                return l
            },
            wS: function() {
                return s
            },
            y$: function() {
                return a
            }
        });
        var i = n(33811);
        function r(t) {
            return t.max - t.min
        }
        function s(t, e, n) {
            return Math.abs(t - e) <= n
        }
        function o(t, e, n, s=.5) {
            t.origin = s,
            t.originPoint = (0,
            i.t)(e.min, e.max, t.origin),
            t.scale = r(n) / r(e),
            t.translate = (0,
            i.t)(n.min, n.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function a(t, e, n, i) {
            o(t.x, e.x, n.x, i ? i.originX : void 0),
            o(t.y, e.y, n.y, i ? i.originY : void 0)
        }
        function u(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + r(e)
        }
        function l(t, e, n) {
            u(t.x, e.x, n.x),
            u(t.y, e.y, n.y)
        }
        function h(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + r(e)
        }
        function c(t, e, n) {
            h(t.x, e.x, n.x),
            h(t.y, e.y, n.y)
        }
    },
    96674: function(t, e, n) {
        n.d(e, {
            dO: function() {
                return o
            },
            wc: function() {
                return r
            }
        });
        let i = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , r = () => ({
            x: i(),
            y: i()
        })
          , s = () => ({
            min: 0,
            max: 0
        })
          , o = () => ({
            x: s(),
            y: s()
        })
    },
    81369: function(t, e, n) {
        n.d(e, {
            u: function() {
                return tL
            },
            J: function() {
                return tk
            }
        });
        var i = n(26147)
          , r = n(20557)
          , s = n(51413)
          , o = n(89582)
          , a = n(25551)
          , u = n(41927)
          , l = n(3697)
          , h = n(35818)
          , c = n(94357)
          , d = n(33811)
          , f = n(94513)
          , p = n(21865)
          , m = n(56277)
          , v = n(82993)
          , g = n(34005)
          , y = n(44023)
          , x = n(2227)
          , w = n(84364)
          , T = n(92854)
          , P = n(52927)
          , b = n(81645);
        let S = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , A = S.length
          , V = t => "string" == typeof t ? parseFloat(t) : t
          , M = t => "number" == typeof t || T.px.test(t);
        function D(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let E = R(0, .5, P.Bn)
          , C = R(.5, .95, m.Z);
        function R(t, e, n) {
            return i => i < t ? 0 : i > e ? 1 : n((0,
            b.Y)(t, e, i))
        }
        function k(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function L(t, e) {
            k(t.x, e.x),
            k(t.y, e.y)
        }
        function j(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        var O = n(47227)
          , B = n(25549);
        function F(t, e, n, i, r) {
            return t -= e,
            t = (0,
            O.q2)(t, 1 / n, i),
            void 0 !== r && (t = (0,
            O.q2)(t, 1 / r, i)),
            t
        }
        function $(t, e, [n,i,r], s, o) {
            !function(t, e=0, n=1, i=.5, r, s=t, o=t) {
                if (T.aQ.test(e) && (e = parseFloat(e),
                e = (0,
                d.t)(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = (0,
                d.t)(s.min, s.max, i);
                t === s && (a -= e),
                t.min = F(t.min, e, n, a, r),
                t.max = F(t.max, e, n, a, r)
            }(t, e[n], e[i], e[r], e.scale, s, o)
        }
        let I = ["x", "scaleX", "originX"]
          , U = ["y", "scaleY", "originY"];
        function W(t, e, n, i) {
            $(t.x, e, I, n ? n.x : void 0, i ? i.x : void 0),
            $(t.y, e, U, n ? n.y : void 0, i ? i.y : void 0)
        }
        var X = n(96674);
        function N(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function Y(t) {
            return N(t.x) && N(t.y)
        }
        function q(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function K(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function z(t, e) {
            return K(t.x, e.x) && K(t.y, e.y)
        }
        function Z(t) {
            return (0,
            B.JO)(t.x) / (0,
            B.JO)(t.y)
        }
        function _(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        var H = n(98425);
        class G {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                H.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                H.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let n = this.members.findIndex(e => t === e);
                if (0 === n)
                    return !1;
                for (let t = n; t >= 0; t--) {
                    let n = this.members[t];
                    if (!1 !== n.isPresent) {
                        e = n;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let n = this.lead;
                if (t !== n && (this.prevLead = n,
                this.lead = t,
                t.show(),
                n)) {
                    n.instance && n.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = n,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    n.snapshot && (t.snapshot = n.snapshot,
                    t.snapshot.latestValues = n.animationValues || n.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: i} = t.options;
                    !1 === i && n.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: n} = t;
                    e.onExitComplete && e.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        var J = n(98639)
          , Q = n(65255)
          , tt = n(12787)
          , te = n(50215);
        let tn = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , ti = ["", "X", "Y", "Z"]
          , tr = {
            visibility: "hidden"
        }
          , ts = 0;
        function to(t, e, n, i) {
            let {latestValues: r} = e;
            r[t] && (n[t] = r[t],
            e.setStaticValue(t, 0),
            i && (i[t] = 0))
        }
        function ta({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: m, resetTransform: P}) {
            return class {
                constructor(t={}, n=e?.()) {
                    this.id = ts++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        r.statsBuffer.value && (tn.nodes = tn.calculatedTargetDeltas = tn.calculatedProjections = 0),
                        this.nodes.forEach(th),
                        this.nodes.forEach(tg),
                        this.nodes.forEach(ty),
                        this.nodes.forEach(tc),
                        r.statsBuffer.addProjectionMetrics && r.statsBuffer.addProjectionMetrics(tn)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = n ? n.root || n : this,
                    this.path = n ? [...n.path, n] : [],
                    this.parent = n,
                    this.depth = n ? n.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new y.E)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new f.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let n = this.eventHandlers.get(t);
                    n && n.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e) {
                    if (this.instance)
                        return;
                    this.isSVG = (0,
                    s.v)(e) && !(0,
                    o.r)(e),
                    this.instance = e;
                    let {layoutId: n, layout: i, visualElement: r} = this.options;
                    if (r && !r.current && r.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    this.root.hasTreeAnimated && (i || n) && (this.isLayoutDirty = !0),
                    t) {
                        let n;
                        let i = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = (0,
                            x.g)(i, 250),
                            te.V.hasAnimatedSinceResize && (te.V.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(tv))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && r && (n || i) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: n, layout: i}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let s = this.options.transition || r.getDefaultTransition() || tS
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: u} = r.getProps()
                          , l = !this.targetLayout || !z(this.targetLayout, i)
                          , h = !e && n;
                        if (this.options.layoutRoot || this.resumeFrom || h || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0);
                            let e = {
                                ...(0,
                                a.e)(s, "layout"),
                                onPlay: o,
                                onComplete: u
                            };
                            (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e),
                            this.setAnimationOrigin(t, h)
                        } else
                            e || tv(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = i
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    this.eventHandlers.clear(),
                    (0,
                    i.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(tx),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: n} = e.options;
                        if (!n)
                            return;
                        let r = (0,
                        g.s)(n);
                        if (window.MotionHasOptimisedAnimation(r, "transform")) {
                            let {layout: t, layoutId: n} = e.options;
                            window.MotionCancelOptimisedAnimation(r, "transform", i.Wi, !(t || n))
                        }
                        let {parent: s} = e;
                        s && !s.hasCheckedOptimisedAppear && t(s)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: n} = this.options;
                    if (void 0 === e && !n)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(tf);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(tp),
                    this.isUpdating = !1,
                    this.nodes.forEach(tm),
                    this.nodes.forEach(tu),
                    this.nodes.forEach(tl),
                    this.clearAllSnapshots();
                    let t = u.X.now();
                    i.frameData.delta = (0,
                    p.u)(0, 1e3 / 60, t - i.frameData.timestamp),
                    i.frameData.timestamp = t,
                    i.frameData.isProcessing = !0,
                    i.yL.update.process(i.frameData),
                    i.yL.preRender.process(i.frameData),
                    i.yL.render.process(i.frameData),
                    i.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    l.g.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(td),
                    this.sharedNodes.forEach(tw)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    i.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    i.Wi.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    this.snapshot || !this.instance || (this.snapshot = this.measure(),
                    !this.snapshot || (0,
                    B.JO)(this.snapshot.measuredBox.x) || (0,
                    B.JO)(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = (0,
                    X.dO)(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && this.instance) {
                        let e = m(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: n(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!P)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !Y(this.projectionDelta)
                      , n = this.getTransformTemplate()
                      , i = n ? n(this.latestValues, "") : void 0
                      , r = i !== this.prevTransformTemplateValue;
                    t && this.instance && (e || (0,
                    tt.ud)(this.latestValues) || r) && (P(this.instance, i),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let n = this.measurePageBox()
                      , i = this.removeElementScroll(n);
                    return t && (i = this.removeTransform(i)),
                    tM((e = i).x),
                    tM(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: i,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return (0,
                        X.dO)();
                    let e = t.measureViewportBox();
                    if (!(this.scroll?.wasRoot || this.path.some(tE))) {
                        let {scroll: t} = this.root;
                        t && ((0,
                        O.am)(e.x, t.offset.x),
                        (0,
                        O.am)(e.y, t.offset.y))
                    }
                    return e
                }
                removeElementScroll(t) {
                    let e = (0,
                    X.dO)();
                    if (L(e, t),
                    this.scroll?.wasRoot)
                        return e;
                    for (let n = 0; n < this.path.length; n++) {
                        let i = this.path[n]
                          , {scroll: r, options: s} = i;
                        i !== this.root && r && s.layoutScroll && (r.wasRoot && L(e, t),
                        (0,
                        O.am)(e.x, r.offset.x),
                        (0,
                        O.am)(e.y, r.offset.y))
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let n = (0,
                    X.dO)();
                    L(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        !e && i.options.layoutScroll && i.scroll && i !== i.root && (0,
                        O.D2)(n, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }),
                        (0,
                        tt.ud)(i.latestValues) && (0,
                        O.D2)(n, i.latestValues)
                    }
                    return (0,
                    tt.ud)(this.latestValues) && (0,
                    O.D2)(n, this.latestValues),
                    n
                }
                removeTransform(t) {
                    let e = (0,
                    X.dO)();
                    L(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        if (!n.instance || !(0,
                        tt.ud)(n.latestValues))
                            continue;
                        (0,
                        tt.Lj)(n.latestValues) && n.updateSnapshot();
                        let i = (0,
                        X.dO)();
                        L(i, n.measurePageBox()),
                        W(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, i)
                    }
                    return (0,
                    tt.ud)(this.latestValues) && W(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== i.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    let e = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                    let n = !!this.resumingFrom || this !== e;
                    if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: s, layoutId: o} = this.options;
                    if (this.layout && (s || o)) {
                        if (this.resolvedRelativeTargetAt = i.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = (0,
                            X.dO)(),
                            this.relativeTargetOrigin = (0,
                            X.dO)(),
                            (0,
                            B.b3)(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            L(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if (this.target || (this.target = (0,
                            X.dO)(),
                            this.targetWithTransforms = (0,
                            X.dO)()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                            (0,
                            B.tf)(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : L(this.target, this.layout.layoutBox),
                            (0,
                            O.o2)(this.target, this.targetDelta)) : L(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = (0,
                                X.dO)(),
                                this.relativeTargetOrigin = (0,
                                X.dO)(),
                                (0,
                                B.b3)(this.relativeTargetOrigin, this.target, t.target),
                                L(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            r.statsBuffer.value && tn.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || (0,
                    tt.Lj)(this.parent.latestValues) || (0,
                    tt.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    let t = this.getLead()
                      , e = !!this.resumingFrom || this !== t
                      , n = !0;
                    if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
                    e && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === i.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: s, layoutId: o} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(s || o))
                        return;
                    L(this.layoutCorrected, this.layout.layoutBox);
                    let a = this.treeScale.x
                      , u = this.treeScale.y;
                    (0,
                    O.YY)(this.layoutCorrected, this.treeScale, this.path, e),
                    t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox,
                    t.targetWithTransforms = (0,
                    X.dO)());
                    let {target: l} = t;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (j(this.prevProjectionDelta.x, this.projectionDelta.x),
                    j(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    (0,
                    B.y$)(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === a && this.treeScale.y === u && _(this.projectionDelta.x, this.prevProjectionDelta.x) && _(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    r.statsBuffer.value && tn.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.visualElement?.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = (0,
                    X.wc)(),
                    this.projectionDelta = (0,
                    X.wc)(),
                    this.projectionDeltaWithTransform = (0,
                    X.wc)()
                }
                setAnimationOrigin(t, e=!1) {
                    let n;
                    let i = this.snapshot
                      , r = i ? i.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = (0,
                    X.wc)();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = (0,
                    X.dO)()
                      , u = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , l = this.getStack()
                      , h = !l || l.members.length <= 1
                      , c = !!(u && !h && !0 === this.options.crossfade && !this.path.some(tb));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let i = e / 1e3;
                        if (tT(o.x, t.x, i),
                        tT(o.y, t.y, i),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var l, f, p, m;
                            (0,
                            B.b3)(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            tP(p.x, m.x, a.x, i),
                            tP(p.y, m.y, a.y, i),
                            n && (l = this.relativeTarget,
                            f = n,
                            q(l.x, f.x) && q(l.y, f.y)) && (this.isProjectionDirty = !1),
                            n || (n = (0,
                            X.dO)()),
                            L(n, this.relativeTarget)
                        }
                        u && (this.animationValues = s,
                        function(t, e, n, i, r, s) {
                            r ? (t.opacity = (0,
                            d.t)(0, n.opacity ?? 1, E(i)),
                            t.opacityExit = (0,
                            d.t)(e.opacity ?? 1, 0, C(i))) : s && (t.opacity = (0,
                            d.t)(e.opacity ?? 1, n.opacity ?? 1, i));
                            for (let r = 0; r < A; r++) {
                                let s = `border${S[r]}Radius`
                                  , o = D(e, s)
                                  , a = D(n, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || M(o) === M(a) ? (t[s] = Math.max((0,
                                d.t)(V(o), V(a), i), 0),
                                (T.aQ.test(a) || T.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || n.rotate) && (t.rotate = (0,
                            d.t)(e.rotate || 0, n.rotate || 0, i))
                        }(s, r, this.latestValues, i, c, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = i
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation?.stop(),
                    this.resumingFrom?.currentAnimation?.stop(),
                    this.pendingAnimation && ((0,
                    i.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = i.Wi.update( () => {
                        te.V.hasAnimatedSinceResize = !0,
                        h.P.layout++,
                        this.motionValue || (this.motionValue = (0,
                        c.BX)(0)),
                        this.currentAnimation = (0,
                        v.D)(this.motionValue, [0, 1e3], {
                            ...t,
                            isSync: !0,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onStop: () => {
                                h.P.layout--
                            }
                            ,
                            onComplete: () => {
                                h.P.layout--,
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: n, layout: i, latestValues: r} = t;
                    if (e && n && i) {
                        if (this !== t && this.layout && i && tD(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                            n = this.target || (0,
                            X.dO)();
                            let e = (0,
                            B.JO)(this.layout.layoutBox.x);
                            n.x.min = t.target.x.min,
                            n.x.max = n.x.min + e;
                            let i = (0,
                            B.JO)(this.layout.layoutBox.y);
                            n.y.min = t.target.y.min,
                            n.y.max = n.y.min + i
                        }
                        L(e, n),
                        (0,
                        O.D2)(e, r),
                        (0,
                        B.y$)(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new G),
                    this.sharedNodes.get(t).add(e);
                    let n = e.options.initialPromotionConfig;
                    e.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    let {layoutId: t} = this.options;
                    return t && this.getStack()?.lead || this
                }
                getPrevLead() {
                    let {layoutId: t} = this.options;
                    return t ? this.getStack()?.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
                    let i = this.getStack();
                    i && i.promote(this, n),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: n} = t;
                    if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0),
                    !e)
                        return;
                    let i = {};
                    n.z && to("z", t, i, this.animationValues);
                    for (let e = 0; e < ti.length; e++)
                        to(`rotate${ti[e]}`, t, i, this.animationValues),
                        to(`skew${ti[e]}`, t, i, this.animationValues);
                    for (let e in t.render(),
                    i)
                        t.setStaticValue(e, i[e]),
                        this.animationValues && (this.animationValues[e] = i[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return tr;
                    let e = {
                        visibility: ""
                    }
                      , n = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        e.opacity = "",
                        e.pointerEvents = (0,
                        w.b)(t?.pointerEvents) || "",
                        e.transform = n ? n(this.latestValues, "") : "none",
                        e;
                    let i = this.getLead();
                    if (!this.projectionDelta || !this.layout || !i.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = (0,
                        w.b)(t?.pointerEvents) || ""),
                        this.hasProjected && !(0,
                        tt.ud)(this.latestValues) && (e.transform = n ? n({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let r = i.animationValues || i.latestValues;
                    this.applyTransformsToTarget(),
                    e.transform = function(t, e, n) {
                        let i = ""
                          , r = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = n?.z || 0;
                        if ((r || s || o) && (i = `translate3d(${r}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                        n) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = n;
                            t && (i = `perspective(${t}px) ${i}`),
                            e && (i += `rotate(${e}deg) `),
                            r && (i += `rotateX(${r}deg) `),
                            s && (i += `rotateY(${s}deg) `),
                            o && (i += `skewX(${o}deg) `),
                            a && (i += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , u = t.y.scale * e.y;
                        return (1 !== a || 1 !== u) && (i += `scale(${a}, ${u})`),
                        i || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, r),
                    n && (e.transform = n(r, e.transform));
                    let {x: s, y: o} = this.projectionDelta;
                    for (let t in e.transformOrigin = `${100 * s.origin}% ${100 * o.origin}% 0`,
                    i.animationValues ? e.opacity = i === this ? r.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : e.opacity = i === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0,
                    J.P) {
                        if (void 0 === r[t])
                            continue;
                        let {correct: n, applyTo: s, isCSSVariable: o} = J.P[t]
                          , a = "none" === e.transform ? r[t] : n(r[t], i);
                        if (s) {
                            let t = s.length;
                            for (let n = 0; n < t; n++)
                                e[s[n]] = a
                        } else
                            o ? this.options.visualElement.renderState.vars[t] = a : e[t] = a
                    }
                    return this.options.layoutId && (e.pointerEvents = i === this ? (0,
                    w.b)(t?.pointerEvents) || "" : "none"),
                    e
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => t.currentAnimation?.stop()),
                    this.root.nodes.forEach(tf),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function tu(t) {
            t.updateLayout()
        }
        function tl(t) {
            let e = t.resumeFrom?.snapshot || t.snapshot;
            if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
                let {layoutBox: n, measuredBox: i} = t.layout
                  , {animationType: r} = t.options
                  , s = e.source !== t.layout.source;
                "size" === r ? (0,
                Q.U)(t => {
                    let i = s ? e.measuredBox[t] : e.layoutBox[t]
                      , r = (0,
                    B.JO)(i);
                    i.min = n[t].min,
                    i.max = i.min + r
                }
                ) : tD(r, e.layoutBox, n) && (0,
                Q.U)(i => {
                    let r = s ? e.measuredBox[i] : e.layoutBox[i]
                      , o = (0,
                    B.JO)(n[i]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[i].max = t.relativeTarget[i].min + o)
                }
                );
                let o = (0,
                X.wc)();
                (0,
                B.y$)(o, n, e.layoutBox);
                let a = (0,
                X.wc)();
                s ? (0,
                B.y$)(a, t.applyTransform(i, !0), e.measuredBox) : (0,
                B.y$)(a, n, e.layoutBox);
                let u = !Y(o)
                  , l = !1;
                if (!t.resumeFrom) {
                    let i = t.getClosestProjectingParent();
                    if (i && !i.resumeFrom) {
                        let {snapshot: r, layout: s} = i;
                        if (r && s) {
                            let o = (0,
                            X.dO)();
                            (0,
                            B.b3)(o, e.layoutBox, r.layoutBox);
                            let a = (0,
                            X.dO)();
                            (0,
                            B.b3)(a, n, s.layoutBox),
                            z(o, a) || (l = !0),
                            i.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = i)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: n,
                    snapshot: e,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: u,
                    hasRelativeLayoutChanged: l
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function th(t) {
            r.statsBuffer.value && tn.nodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function tc(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function td(t) {
            t.clearSnapshot()
        }
        function tf(t) {
            t.clearMeasurements()
        }
        function tp(t) {
            t.isLayoutDirty = !1
        }
        function tm(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function tv(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function tg(t) {
            t.resolveTargetDelta()
        }
        function ty(t) {
            t.calcProjection()
        }
        function tx(t) {
            t.resetSkewAndRotation()
        }
        function tw(t) {
            t.removeLeadSnapshot()
        }
        function tT(t, e, n) {
            t.translate = (0,
            d.t)(e.translate, 0, n),
            t.scale = (0,
            d.t)(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function tP(t, e, n, i) {
            t.min = (0,
            d.t)(e.min, n.min, i),
            t.max = (0,
            d.t)(e.max, n.max, i)
        }
        function tb(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let tS = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , tA = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , tV = tA("applewebkit/") && !tA("chrome/") ? Math.round : m.Z;
        function tM(t) {
            t.min = tV(t.min),
            t.max = tV(t.max)
        }
        function tD(t, e, n) {
            return "position" === t || "preserve-aspect" === t && !(0,
            B.wS)(Z(e), Z(n), .2)
        }
        function tE(t) {
            return t !== t.root && t.scroll?.wasRoot
        }
        var tC = n(34969);
        let tR = ta({
            attachResizeListener: (t, e) => (0,
            tC.E)(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , tk = {
            current: void 0
        }
          , tL = ta({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!tk.current) {
                    let t = new tR({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    tk.current = t
                }
                return tk.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        })
    },
    50215: function(t, e, n) {
        n.d(e, {
            V: function() {
                return i
            }
        });
        let i = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        }
    },
    98639: function(t, e, n) {
        n.d(e, {
            B: function() {
                return s
            },
            P: function() {
                return r
            }
        });
        var i = n(38596);
        let r = {};
        function s(t) {
            for (let e in t)
                r[e] = t[e],
                (0,
                i.f)(e) && (r[e].isCSSVariable = !0)
        }
    },
    65255: function(t, e, n) {
        n.d(e, {
            U: function() {
                return i
            }
        });
        function i(t) {
            return [t("x"), t("y")]
        }
    },
    12787: function(t, e, n) {
        function i(t) {
            return void 0 === t || 1 === t
        }
        function r({scale: t, scaleX: e, scaleY: n}) {
            return !i(t) || !i(e) || !i(n)
        }
        function s(t) {
            return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function o(t) {
            var e, n;
            return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
        }
        n.d(e, {
            D_: function() {
                return o
            },
            Lj: function() {
                return r
            },
            ud: function() {
                return s
            }
        })
    },
    50813: function(t, e, n) {
        n.d(e, {
            J: function() {
                return s
            },
            z: function() {
                return o
            }
        });
        var i = n(82063)
          , r = n(47227);
        function s(t, e) {
            return (0,
            i.i8)((0,
            i.d7)(t.getBoundingClientRect(), e))
        }
        function o(t, e, n) {
            let i = s(t, n)
              , {scroll: o} = e;
            return o && ((0,
            r.am)(i.x, o.offset.x),
            (0,
            r.am)(i.y, o.offset.y)),
            i
        }
    },
    56614: function(t, e, n) {
        n.d(e, {
            l: function() {
                return b
            }
        });
        var i = n(74827)
          , r = n(41927)
          , s = n(26147)
          , o = n(87493)
          , a = n(56440)
          , u = n(94357)
          , l = n(87576)
          , h = n(65050)
          , c = n(22442)
          , d = n(51141)
          , f = n(82476)
          , p = n(94513)
          , m = n(35938)
          , v = n(96674)
          , g = n(75957)
          , y = n(14004)
          , x = n(37003)
          , w = n(17743)
          , T = n(31297);
        let P = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class b {
            scrapeMotionValuesFromProps(t, e, n) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: n, reducedMotionConfig: a, blockInitialAnimation: u, visualState: l}, h={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = i.e,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = r.X.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    s.Wi.render(this.render, !1, !0))
                }
                ;
                let {latestValues: c, renderState: d} = l;
                this.latestValues = c,
                this.baseTarget = {
                    ...c
                },
                this.initialValues = e.initial ? {
                    ...c
                } : {},
                this.renderState = d,
                this.parent = t,
                this.props = e,
                this.presenceContext = n,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = a,
                this.options = h,
                this.blockInitialAnimation = !!u,
                this.isControllingVariants = (0,
                w.G)(e),
                this.isVariantNode = (0,
                w.M)(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: f, ...p} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in p) {
                    let e = p[t];
                    void 0 !== c[t] && (0,
                    o.i)(e) && e.set(c[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                x.R.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                y.O.current || (0,
                g.A)(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || y.n.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in this.projection && this.projection.unmount(),
                (0,
                s.Pn)(this.notifyUpdate),
                (0,
                s.Pn)(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let n;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let i = a.G.has(t);
                i && this.onBindTransform && this.onBindTransform();
                let r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && s.Wi.preRender(this.notifyUpdate),
                    i && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , o = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    r(),
                    o(),
                    n && n(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in m.featureDefinitions) {
                    let e = m.featureDefinitions[t];
                    if (!e)
                        continue;
                    let {isEnabled: n, Feature: i} = e;
                    if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0,
                v.dO)()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < P.length; e++) {
                    let n = P[e];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                    delete this.propEventSubscriptions[n]);
                    let i = t["on" + n];
                    i && (this.propEventSubscriptions[n] = this.on(n, i))
                }
                this.prevMotionValues = function(t, e, n) {
                    for (let i in e) {
                        let r = e[i]
                          , s = n[i];
                        if ((0,
                        o.i)(r))
                            t.addValue(i, r);
                        else if ((0,
                        o.i)(s))
                            t.addValue(i, (0,
                            u.BX)(r, {
                                owner: t
                            }));
                        else if (s !== r) {
                            if (t.hasValue(i)) {
                                let e = t.getValue(i);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(i);
                                t.addValue(i, (0,
                                u.BX)(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let i in n)
                        void 0 === e[i] && t.removeValue(i);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let n = this.values.get(t);
                e !== n && (n && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let n = this.values.get(t);
                return void 0 === n && void 0 !== e && (n = (0,
                u.BX)(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, n)),
                n
            }
            readValue(t, e) {
                let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && ((0,
                d.P)(n) || (0,
                f.W)(n)) ? n = parseFloat(n) : !(0,
                l.c)(n) && h.P.test(e) && (n = (0,
                c.T)(t, e)),
                this.setBaseTarget(t, (0,
                o.i)(n) ? n.get() : n)),
                (0,
                o.i)(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                let e;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let i = (0,
                    T.o)(this.props, n, this.presenceContext?.custom);
                    i && (e = i[t])
                }
                if (n && void 0 !== e)
                    return e;
                let i = this.getBaseTargetFromProps(this.props, t);
                return void 0 === i || (0,
                o.i)(i) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : i
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new p.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
    },
    32529: function(t, e, n) {
        n.d(e, {
            x: function() {
                return w
            }
        });
        var i = n(61774)
          , r = n(87493)
          , s = n(2265)
          , o = n(77556)
          , a = n(18830);
        let u = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function l(t, e, n) {
            for (let i in e)
                (0,
                r.i)(e[i]) || (0,
                o.j)(i, n) || (t[i] = e[i])
        }
        var h = n(59944);
        let c = () => ({
            ...u(),
            attrs: {}
        });
        var d = n(37380)
          , f = n(82973)
          , p = n(64044)
          , m = n(74935)
          , v = n(67971);
        let g = {
            useVisualState: (0,
            m.t)({
                scrapeMotionValuesFromProps: v.U,
                createRenderState: u
            })
        };
        var y = n(67098);
        let x = {
            useVisualState: (0,
            m.t)({
                scrapeMotionValuesFromProps: y.U,
                createRenderState: c
            })
        };
        function w(t, e) {
            return function(n, {forwardMotionProps: o}={
                forwardMotionProps: !1
            }) {
                let m = {
                    ...(0,
                    p.q)(n) ? x : g,
                    preloadedFeatures: t,
                    useRender: function(t=!1) {
                        return (e, n, i, {latestValues: o}, m) => {
                            let v = ((0,
                            p.q)(e) ? function(t, e, n, i) {
                                let r = (0,
                                s.useMemo)( () => {
                                    let n = c();
                                    return (0,
                                    h.i)(n, e, (0,
                                    d.a)(i), t.transformTemplate, t.style),
                                    {
                                        ...n.attrs,
                                        style: {
                                            ...n.style
                                        }
                                    }
                                }
                                , [e]);
                                if (t.style) {
                                    let e = {};
                                    l(e, t.style, t),
                                    r.style = {
                                        ...e,
                                        ...r.style
                                    }
                                }
                                return r
                            }
                            : function(t, e) {
                                let n = {}
                                  , i = function(t, e) {
                                    let n = t.style || {}
                                      , i = {};
                                    return l(i, n, t),
                                    Object.assign(i, function({transformTemplate: t}, e) {
                                        return (0,
                                        s.useMemo)( () => {
                                            let n = u();
                                            return (0,
                                            a.r)(n, e, t),
                                            Object.assign({}, n.vars, n.style)
                                        }
                                        , [e])
                                    }(t, e)),
                                    i
                                }(t, e);
                                return t.drag && !1 !== t.dragListener && (n.draggable = !1,
                                i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
                                i.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                                void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
                                n.style = i,
                                n
                            }
                            )(n, o, m, e)
                              , g = (0,
                            f.L)(n, "string" == typeof e, t)
                              , y = e !== s.Fragment ? {
                                ...g,
                                ...v,
                                ref: i
                            } : {}
                              , {children: x} = n
                              , w = (0,
                            s.useMemo)( () => (0,
                            r.i)(x) ? x.get() : x, [x]);
                            return (0,
                            s.createElement)(e, {
                                ...y,
                                children: w
                            })
                        }
                    }(o),
                    createVisualElement: e,
                    Component: n
                };
                return (0,
                i.B)(m)
            }
        }
    },
    85407: function(t, e, n) {
        n.d(e, {
            c: function() {
                return i
            }
        });
        function i(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (n, i) => "create" === i ? t : (e.has(i) || e.set(i, t(i)),
                e.get(i))
            })
        }
    },
    7336: function(t, e, n) {
        n.d(e, {
            E: function() {
                return c
            }
        });
        var i = n(85407)
          , r = n(76940)
          , s = n(71926)
          , o = n(77225)
          , a = n(82760)
          , u = n(32529)
          , l = n(86283);
        let h = (0,
        u.x)({
            ...r.s,
            ...o.E,
            ...s.o,
            ...a.b
        }, l.b)
          , c = (0,
        i.c)(h)
    },
    57511: function(t, e, n) {
        n.d(e, {
            J: function() {
                return o
            }
        });
        var i = n(98486)
          , r = n(87493)
          , s = n(56614);
        class o extends s.l {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = i.s
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: n}) {
                delete e[t],
                delete n[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                (0,
                r.i)(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
    },
    86283: function(t, e, n) {
        n.d(e, {
            b: function() {
                return a
            }
        });
        var i = n(2265)
          , r = n(59282)
          , s = n(89256)
          , o = n(64044);
        let a = (t, e) => (0,
        o.q)(t) ? new s.e(e) : new r.W(e,{
            allowProjection: t !== i.Fragment
        })
    },
    17444: function(t, e, n) {
        n.d(e, {
            D: function() {
                return i
            }
        });
        let i = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
    },
    82973: function(t, e, n) {
        n.d(e, {
            K: function() {
                return s
            },
            L: function() {
                return o
            }
        });
        var i = n(35998);
        let r = t => !(0,
        i.Z)(t);
        function s(t) {
            t && (r = e => e.startsWith("on") ? !(0,
            i.Z)(e) : t(e))
        }
        try {
            s(require("@emotion/is-prop-valid").default)
        } catch {}
        function o(t, e, n) {
            let s = {};
            for (let o in t)
                ("values" !== o || "object" != typeof t.values) && (r(o) || !0 === n && (0,
                i.Z)(o) || !e && !(0,
                i.Z)(o) || t.draggable && o.startsWith("onDrag")) && (s[o] = t[o]);
            return s
        }
    },
    64044: function(t, e, n) {
        n.d(e, {
            q: function() {
                return r
            }
        });
        let i = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function r(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (i.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
    },
    59282: function(t, e, n) {
        n.d(e, {
            W: function() {
                return c
            }
        });
        var i = n(56440)
          , r = n(1806)
          , s = n(38596)
          , o = n(50813)
          , a = n(57511)
          , u = n(18830)
          , l = n(1125)
          , h = n(67971);
        class c extends a.J {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = l.N
            }
            readValueFromInstance(t, e) {
                if (i.G.has(e))
                    return this.projection?.isProjecting ? (0,
                    r.E$)(e) : (0,
                    r.RT)(t, e);
                {
                    let n = window.getComputedStyle(t)
                      , i = ((0,
                    s.f)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                    return "string" == typeof i ? i.trim() : i
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return (0,
                o.J)(t, e)
            }
            build(t, e, n) {
                (0,
                u.r)(t, e, n.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, n) {
                return (0,
                h.U)(t, e, n)
            }
        }
    },
    18830: function(t, e, n) {
        n.d(e, {
            r: function() {
                return u
            }
        });
        var i = n(56440)
          , r = n(38596)
          , s = n(95297)
          , o = n(44558)
          , a = n(21756);
        function u(t, e, n) {
            let {style: u, vars: l, transformOrigin: h} = t
              , c = !1
              , d = !1;
            for (let t in e) {
                let n = e[t];
                if (i.G.has(t)) {
                    c = !0;
                    continue
                }
                if ((0,
                r.f)(t)) {
                    l[t] = n;
                    continue
                }
                {
                    let e = (0,
                    s.Q)(n, o.j[t]);
                    t.startsWith("origin") ? (d = !0,
                    h[t] = e) : u[t] = e
                }
            }
            if (!e.transform && (c || n ? u.transform = (0,
            a.P)(e, t.transform, n) : u.transform && (u.transform = "none")),
            d) {
                let {originX: t="50%", originY: e="50%", originZ: n=0} = h;
                u.transformOrigin = `${t} ${e} ${n}`
            }
        }
    },
    21756: function(t, e, n) {
        n.d(e, {
            P: function() {
                return u
            }
        });
        var i = n(56440)
          , r = n(95297)
          , s = n(44558);
        let o = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , a = i._.length;
        function u(t, e, n) {
            let u = ""
              , l = !0;
            for (let h = 0; h < a; h++) {
                let a = i._[h]
                  , c = t[a];
                if (void 0 === c)
                    continue;
                let d = !0;
                if (!(d = "number" == typeof c ? c === (a.startsWith("scale") ? 1 : 0) : 0 === parseFloat(c)) || n) {
                    let t = (0,
                    r.Q)(c, s.j[a]);
                    if (!d) {
                        l = !1;
                        let e = o[a] || a;
                        u += `${e}(${t}) `
                    }
                    n && (e[a] = t)
                }
            }
            return u = u.trim(),
            n ? u = n(e, l ? "" : u) : l && (u = "none"),
            u
        }
    },
    1125: function(t, e, n) {
        n.d(e, {
            N: function() {
                return i
            }
        });
        function i(t, {style: e, vars: n}, i, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(i)),
            n)
                t.style.setProperty(s, n[s])
        }
    },
    67971: function(t, e, n) {
        n.d(e, {
            U: function() {
                return s
            }
        });
        var i = n(87493)
          , r = n(77556);
        function s(t, e, n) {
            let {style: s} = t
              , o = {};
            for (let a in s)
                ((0,
                i.i)(s[a]) || e.style && (0,
                i.i)(e.style[a]) || (0,
                r.j)(a, t) || n?.getValue(a)?.liveStyle !== void 0) && (o[a] = s[a]);
            return o
        }
    },
    37003: function(t, e, n) {
        n.d(e, {
            R: function() {
                return i
            }
        });
        let i = new WeakMap
    },
    89256: function(t, e, n) {
        n.d(e, {
            e: function() {
                return f
            }
        });
        var i = n(56440)
          , r = n(72361)
          , s = n(96674)
          , o = n(57511)
          , a = n(17444)
          , u = n(59944);
        let l = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        var h = n(37380)
          , c = n(1125)
          , d = n(67098);
        class f extends o.J {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = s.dO
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (i.G.has(e)) {
                    let t = (0,
                    r.A)(e);
                    return t && t.default || 0
                }
                return e = l.has(e) ? e : (0,
                a.D)(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, n) {
                return (0,
                d.U)(t, e, n)
            }
            build(t, e, n) {
                (0,
                u.i)(t, e, this.isSVGTag, n.transformTemplate, n.style)
            }
            renderInstance(t, e, n, i) {
                !function(t, e, n, i) {
                    for (let n in (0,
                    c.N)(t, e, void 0, i),
                    e.attrs)
                        t.setAttribute(l.has(n) ? n : (0,
                        a.D)(n), e.attrs[n])
                }(t, e, 0, i)
            }
            mount(t) {
                this.isSVGTag = (0,
                h.a)(t.tagName),
                super.mount(t)
            }
        }
    },
    59944: function(t, e, n) {
        n.d(e, {
            i: function() {
                return a
            }
        });
        var i = n(18830)
          , r = n(92854);
        let s = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , o = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function a(t, {attrX: e, attrY: n, attrScale: a, pathLength: u, pathSpacing: l=1, pathOffset: h=0, ...c}, d, f, p) {
            if ((0,
            i.r)(t, c, f),
            d) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: m, style: v} = t;
            m.transform && (v.transform = m.transform,
            delete m.transform),
            (v.transform || m.transformOrigin) && (v.transformOrigin = m.transformOrigin ?? "50% 50%",
            delete m.transformOrigin),
            v.transform && (v.transformBox = p?.transformBox ?? "fill-box",
            delete m.transformBox),
            void 0 !== e && (m.x = e),
            void 0 !== n && (m.y = n),
            void 0 !== a && (m.scale = a),
            void 0 !== u && function(t, e, n=1, i=0, a=!0) {
                t.pathLength = 1;
                let u = a ? s : o;
                t[u.offset] = r.px.transform(-i);
                let l = r.px.transform(e)
                  , h = r.px.transform(n);
                t[u.array] = `${l} ${h}`
            }(m, u, l, h, !1)
        }
    },
    37380: function(t, e, n) {
        n.d(e, {
            a: function() {
                return i
            }
        });
        let i = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    67098: function(t, e, n) {
        n.d(e, {
            U: function() {
                return o
            }
        });
        var i = n(87493)
          , r = n(56440)
          , s = n(67971);
        function o(t, e, n) {
            let o = (0,
            s.U)(t, e, n);
            for (let n in t)
                ((0,
                i.i)(t[n]) || (0,
                i.i)(e[n])) && (o[-1 !== r._.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
            return o
        }
    },
    44023: function(t, e, n) {
        n.d(e, {
            E: function() {
                return s
            }
        });
        var i = n(98425);
        let r = (t, e) => t.depth - e.depth;
        class s {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                i.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                i.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(r),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
    },
    17743: function(t, e, n) {
        n.d(e, {
            G: function() {
                return o
            },
            M: function() {
                return a
            }
        });
        var i = n(20569)
          , r = n(74115)
          , s = n(72589);
        function o(t) {
            return (0,
            i.H)(t.animate) || s.V.some(e => (0,
            r.$)(t[e]))
        }
        function a(t) {
            return !!(o(t) || t.variants)
        }
    },
    74115: function(t, e, n) {
        n.d(e, {
            $: function() {
                return i
            }
        });
        function i(t) {
            return "string" == typeof t || Array.isArray(t)
        }
    },
    67043: function(t, e, n) {
        n.d(e, {
            x: function() {
                return r
            }
        });
        var i = n(31297);
        function r(t, e, n) {
            let r = t.getProps();
            return (0,
            i.o)(r, e, void 0 !== n ? n : r.custom, t)
        }
    },
    31297: function(t, e, n) {
        function i(t) {
            let e = [{}, {}];
            return t?.values.forEach( (t, n) => {
                e[0][n] = t.get(),
                e[1][n] = t.getVelocity()
            }
            ),
            e
        }
        function r(t, e, n, r) {
            if ("function" == typeof e) {
                let[s,o] = i(r);
                e = e(void 0 !== n ? n : t.custom, s, o)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e) {
                let[s,o] = i(r);
                e = e(void 0 !== n ? n : t.custom, s, o)
            }
            return e
        }
        n.d(e, {
            o: function() {
                return r
            }
        })
    },
    48771: function(t, e, n) {
        n.d(e, {
            C: function() {
                return o
            }
        });
        var i = n(94357)
          , r = n(44944)
          , s = n(67043);
        function o(t, e) {
            let {transitionEnd: n={}, transition: o={}, ...a} = (0,
            s.x)(t, e) || {};
            for (let e in a = {
                ...a,
                ...n
            }) {
                var u;
                let n = (u = a[e],
                (0,
                r.C)(u) ? u[u.length - 1] || 0 : u);
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0,
                i.BX)(n))
            }
        }
    },
    72589: function(t, e, n) {
        n.d(e, {
            V: function() {
                return r
            },
            e: function() {
                return i
            }
        });
        let i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , r = ["initial", ...i]
    },
    2227: function(t, e, n) {
        n.d(e, {
            g: function() {
                return s
            }
        });
        var i = n(41927)
          , r = n(26147);
        function s(t, e) {
            let n = i.X.now()
              , s = ({timestamp: i}) => {
                let o = i - n;
                o >= e && ((0,
                r.Pn)(s),
                t(o - e))
            }
            ;
            return r.Wi.setup(s, !0),
            () => (0,
            r.Pn)(s)
        }
    },
    41440: function(t, e, n) {
        n.d(e, {
            T: function() {
                return i
            },
            y: function() {
                return r
            }
        });
        let i = (t, e) => Math.abs(t - e);
        function r(t, e) {
            return Math.sqrt(i(t.x, e.x) ** 2 + i(t.y, e.y) ** 2)
        }
    },
    44563: function(t, e, n) {
        n.d(e, {
            j: function() {
                return i
            }
        });
        let i = "undefined" != typeof window
    },
    34006: function(t, e, n) {
        n.d(e, {
            I: function() {
                return i
            }
        });
        function i(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
    },
    75957: function(t, e, n) {
        n.d(e, {
            A: function() {
                return s
            }
        });
        var i = n(44563)
          , r = n(14004);
        function s() {
            if (r.O.current = !0,
            i.j) {
                if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)")
                      , e = () => r.n.current = t.matches;
                    t.addListener(e),
                    e()
                } else
                    r.n.current = !1
            }
        }
    },
    14004: function(t, e, n) {
        n.d(e, {
            O: function() {
                return r
            },
            n: function() {
                return i
            }
        });
        let i = {
            current: null
        }
          , r = {
            current: !1
        }
    },
    53576: function(t, e, n) {
        n.d(e, {
            h: function() {
                return r
            }
        });
        var i = n(2265);
        function r(t) {
            let e = (0,
            i.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    11534: function(t, e, n) {
        n.d(e, {
            L: function() {
                return r
            }
        });
        var i = n(2265);
        let r = n(44563).j ? i.useLayoutEffect : i.useEffect
    },
    1327: function(t, e, n) {
        n.d(e, {
            K: function() {
                return s
            }
        });
        var i = n(21457)
          , r = n(87493);
        function s(t, e) {
            let n = t.getValue("willChange");
            if ((0,
            r.i)(n) && n.add)
                return n.add(e);
            if (!n && i.c.WillChange) {
                let n = new i.c.WillChange("auto");
                t.addValue("willChange", n),
                n.add(e)
            }
        }
    },
    84364: function(t, e, n) {
        n.d(e, {
            b: function() {
                return r
            }
        });
        var i = n(87493);
        function r(t) {
            return (0,
            i.i)(t) ? t.get() : t
        }
    },
    91687: function(t, e, n) {
        n.d(e, {
            $: function() {
                return v
            }
        });
        var i = n(21457)
          , r = n(56277)
          , s = n(41927)
          , o = n(28441)
          , a = n(69118)
          , u = n(74827)
          , l = n(83939)
          , h = n(62035)
          , c = n(50721)
          , d = n(65050);
        let f = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (d.P.test(t) || "0" === t) && !t.startsWith("url("));
        var p = n(9868)
          , m = n(9657);
        class v extends p.T {
            constructor({autoplay: t=!0, delay: e=0, type: n="keyframes", repeat: i=0, repeatDelay: r=0, repeatType: o="loop", keyframes: a, name: l, motionValue: h, element: c, ...d}) {
                super(),
                this.stop = () => {
                    this._animation && (this._animation.stop(),
                    this.stopTimeline?.()),
                    this.keyframeResolver?.cancel()
                }
                ,
                this.createdAt = s.X.now();
                let f = {
                    autoplay: t,
                    delay: e,
                    type: n,
                    repeat: i,
                    repeatDelay: r,
                    repeatType: o,
                    name: l,
                    motionValue: h,
                    element: c,
                    ...d
                }
                  , p = c?.KeyframeResolver || u.e;
                this.keyframeResolver = new p(a, (t, e, n) => this.onKeyframesResolved(t, e, f, !n),l,h,c),
                this.keyframeResolver?.scheduleResolve()
            }
            onKeyframesResolved(t, e, n, u) {
                this.keyframeResolver = void 0;
                let {name: d, type: p, velocity: v, delay: g, isHandoff: y, onUpdate: x} = n;
                this.resolvedAt = s.X.now(),
                !function(t, e, n, i) {
                    let r = t[0];
                    if (null === r)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = f(r, e)
                      , a = f(s, e);
                    return (0,
                    h.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let n = 0; n < t.length; n++)
                            if (t[n] !== e)
                                return !0
                    }(t) || ("spring" === n || (0,
                    c.x)(n)) && i)
                }(t, d, p, v) && ((i.c.instantAnimations || !g) && x?.(a.$(t, n, e)),
                t[0] = t[t.length - 1],
                n.duration = 0,
                n.repeat = 0);
                let w = {
                    startTime: u ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: e,
                    ...n,
                    keyframes: t
                }
                  , T = !y && (0,
                m.I)(w) ? new l.n({
                    ...w,
                    element: w.motionValue.owner.current
                }) : new o.L(w);
                T.finished.then( () => this.notifyFinished()).catch(r.Z),
                this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline),
                this.pendingTimeline = void 0),
                this._animation = T
            }
            get finished() {
                return this._animation ? this.animation.finished : this._finished
            }
            then(t, e) {
                return this.finished.finally(t).then( () => {}
                )
            }
            get animation() {
                return this._animation || (this.keyframeResolver?.resume(),
                (0,
                u.m)()),
                this._animation
            }
            get duration() {
                return this.animation.duration
            }
            get time() {
                return this.animation.time
            }
            set time(t) {
                this.animation.time = t
            }
            get speed() {
                return this.animation.speed
            }
            get state() {
                return this.animation.state
            }
            set speed(t) {
                this.animation.speed = t
            }
            get startTime() {
                return this.animation.startTime
            }
            attachTimeline(t) {
                return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
                () => this.stop()
            }
            play() {
                this.animation.play()
            }
            pause() {
                this.animation.pause()
            }
            complete() {
                this.animation.complete()
            }
            cancel() {
                this._animation && this.animation.cancel(),
                this.keyframeResolver?.cancel()
            }
        }
    },
    28441: function(t, e, n) {
        n.d(e, {
            L: function() {
                return y
            },
            y: function() {
                return x
            }
        });
        var i = n(24750)
          , r = n(21865)
          , s = n(29711)
          , o = n(41927)
          , a = n(35818)
          , u = n(86096)
          , l = n(26147);
        let h = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: (t=!0) => l.Wi.update(e, t),
                stop: () => (0,
                l.Pn)(e),
                now: () => l.frameData.isProcessing ? l.frameData.timestamp : o.X.now()
            }
        }
        ;
        var c = n(85898)
          , d = n(30876)
          , f = n(44013)
          , p = n(69118)
          , m = n(98133)
          , v = n(9868);
        let g = t => t / 100;
        class y extends v.T {
            constructor(t) {
                super(),
                this.state = "idle",
                this.startTime = null,
                this.isStopped = !1,
                this.currentTime = 0,
                this.holdTime = null,
                this.playbackSpeed = 1,
                this.stop = () => {
                    let {motionValue: t} = this.options;
                    t && t.updatedAt !== o.X.now() && this.tick(o.X.now()),
                    this.isStopped = !0,
                    "idle" !== this.state && (this.teardown(),
                    this.options.onStop?.())
                }
                ,
                a.P.mainThread++,
                this.options = t,
                this.initAnimation(),
                this.play(),
                !1 === t.autoplay && this.pause()
            }
            initAnimation() {
                let {options: t} = this;
                (0,
                m.f)(t);
                let {type: e=d.F, repeat: n=0, repeatDelay: r=0, repeatType: s, velocity: o=0} = t
                  , {keyframes: a} = t
                  , l = e || d.F;
                l !== d.F && "number" != typeof a[0] && (this.mixKeyframes = (0,
                i.z)(g, (0,
                u.C)(a[0], a[1])),
                a = [0, 100]);
                let h = l({
                    ...t,
                    keyframes: a
                });
                "mirror" === s && (this.mirroredGenerator = l({
                    ...t,
                    keyframes: [...a].reverse(),
                    velocity: -o
                })),
                null === h.calculatedDuration && (h.calculatedDuration = (0,
                f.i)(h));
                let {calculatedDuration: c} = h;
                this.calculatedDuration = c,
                this.resolvedDuration = c + r,
                this.totalDuration = this.resolvedDuration * (n + 1) - r,
                this.generator = h
            }
            updateTime(t) {
                let e = Math.round(t - this.startTime) * this.playbackSpeed;
                null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
            }
            tick(t, e=!1) {
                let {generator: n, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: u} = this;
                if (null === this.startTime)
                    return n.next(0);
                let {delay: l=0, keyframes: h, repeat: d, repeatType: f, repeatDelay: m, type: v, onUpdate: g, finalKeyframe: y} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
                e ? this.currentTime = t : this.updateTime(t);
                let x = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1)
                  , w = this.playbackSpeed >= 0 ? x < 0 : x > i;
                this.currentTime = Math.max(x, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = i);
                let T = this.currentTime
                  , P = n;
                if (d) {
                    let t = Math.min(this.currentTime, i) / a
                      , e = Math.floor(t)
                      , n = t % 1;
                    !n && t >= 1 && (n = 1),
                    1 === n && e--,
                    (e = Math.min(e, d + 1)) % 2 && ("reverse" === f ? (n = 1 - n,
                    m && (n -= m / a)) : "mirror" === f && (P = o)),
                    T = (0,
                    r.u)(0, 1, n) * a
                }
                let b = w ? {
                    done: !1,
                    value: h[0]
                } : P.next(T);
                s && (b.value = s(b.value));
                let {done: S} = b;
                w || null === u || (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
                let A = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
                return A && v !== c.I && (b.value = (0,
                p.$)(h, this.options, y, this.speed)),
                g && g(b.value),
                A && this.finish(),
                b
            }
            then(t, e) {
                return this.finished.then(t, e)
            }
            get duration() {
                return (0,
                s.X)(this.calculatedDuration)
            }
            get time() {
                return (0,
                s.X)(this.currentTime)
            }
            set time(t) {
                t = (0,
                s.w)(t),
                this.currentTime = t,
                null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
                this.driver?.start(!1)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                this.updateTime(o.X.now());
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = (0,
                s.X)(this.currentTime))
            }
            play() {
                if (this.isStopped)
                    return;
                let {driver: t=h, startTime: e} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                this.options.onPlay?.();
                let n = this.driver.now();
                "finished" === this.state ? (this.updateFinished(),
                this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n),
                "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                this.state = "paused",
                this.updateTime(o.X.now()),
                this.holdTime = this.currentTime
            }
            complete() {
                "running" !== this.state && this.play(),
                this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.notifyFinished(),
                this.teardown(),
                this.state = "finished",
                this.options.onComplete?.()
            }
            cancel() {
                this.holdTime = null,
                this.startTime = 0,
                this.tick(0),
                this.teardown(),
                this.options.onCancel?.()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.startTime = this.holdTime = null,
                a.P.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
            attachTimeline(t) {
                return this.options.allowFlatten && (this.options.type = "keyframes",
                this.options.ease = "linear",
                this.initAnimation()),
                this.driver?.stop(),
                t.observe(this)
            }
        }
        function x(t) {
            return new y(t)
        }
    },
    94177: function(t, e, n) {
        n.d(e, {
            _: function() {
                return d
            }
        });
        var i = n(62035)
          , r = n(29711)
          , s = n(56277)
          , o = n(32554)
          , a = n(9339)
          , u = n(69118)
          , l = n(9868)
          , h = n(29112)
          , c = n(24088);
        class d extends l.T {
            constructor(t) {
                if (super(),
                this.finishedTime = null,
                this.isStopped = !1,
                !t)
                    return;
                let {element: e, name: n, keyframes: r, pseudoElement: s, allowFlatten: a=!1, finalKeyframe: l, onComplete: d} = t;
                this.isPseudoElement = !!s,
                this.allowFlatten = a,
                this.options = t,
                (0,
                i.k)("string" != typeof t.type, 'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?');
                let f = (0,
                c.q)(t);
                this.animation = (0,
                h.h)(e, n, r, f, s),
                !1 === f.autoplay && this.animation.pause(),
                this.animation.onfinish = () => {
                    if (this.finishedTime = this.time,
                    !s) {
                        let t = (0,
                        u.$)(r, this.options, l, this.speed);
                        this.updateMotionValue ? this.updateMotionValue(t) : (0,
                        o.A)(e, n, t),
                        this.animation.cancel()
                    }
                    d?.(),
                    this.notifyFinished()
                }
            }
            play() {
                this.isStopped || (this.animation.play(),
                "finished" === this.state && this.updateFinished())
            }
            pause() {
                this.animation.pause()
            }
            complete() {
                this.animation.finish?.()
            }
            cancel() {
                try {
                    this.animation.cancel()
                } catch (t) {}
            }
            stop() {
                if (this.isStopped)
                    return;
                this.isStopped = !0;
                let {state: t} = this;
                "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
                this.isPseudoElement || this.cancel())
            }
            commitStyles() {
                this.isPseudoElement || this.animation.commitStyles?.()
            }
            get duration() {
                let t = this.animation.effect?.getComputedTiming?.().duration || 0;
                return (0,
                r.X)(Number(t))
            }
            get time() {
                return (0,
                r.X)(Number(this.animation.currentTime) || 0)
            }
            set time(t) {
                this.finishedTime = null,
                this.animation.currentTime = (0,
                r.w)(t)
            }
            get speed() {
                return this.animation.playbackRate
            }
            set speed(t) {
                t < 0 && (this.finishedTime = null),
                this.animation.playbackRate = t
            }
            get state() {
                return null !== this.finishedTime ? "finished" : this.animation.playState
            }
            get startTime() {
                return Number(this.animation.startTime)
            }
            set startTime(t) {
                this.animation.startTime = t
            }
            attachTimeline({timeline: t, observe: e}) {
                return (this.allowFlatten && this.animation.effect?.updateTiming({
                    easing: "linear"
                }),
                this.animation.onfinish = null,
                t && (0,
                a.t)()) ? (this.animation.timeline = t,
                s.Z) : e(this)
            }
        }
    },
    83939: function(t, e, n) {
        n.d(e, {
            n: function() {
                return c
            }
        });
        var i = n(29711)
          , r = n(28441)
          , s = n(94177)
          , o = n(98133)
          , a = n(43273)
          , u = n(75567)
          , l = n(52927);
        let h = {
            anticipate: a.L,
            backInOut: u.XL,
            circInOut: l.X7
        };
        class c extends s._ {
            constructor(t) {
                "string" == typeof t.ease && t.ease in h && (t.ease = h[t.ease]),
                (0,
                o.f)(t),
                super(t),
                t.startTime && (this.startTime = t.startTime),
                this.options = t
            }
            updateMotionValue(t) {
                let {motionValue: e, onUpdate: n, onComplete: s, element: o, ...a} = this.options;
                if (!e)
                    return;
                if (void 0 !== t) {
                    e.set(t);
                    return
                }
                let u = new r.L({
                    ...a,
                    autoplay: !1
                })
                  , l = (0,
                i.w)(this.finishedTime ?? this.time);
                e.setWithVelocity(u.sample(l - 10).value, u.sample(l).value, 10),
                u.stop()
            }
        }
    },
    85898: function(t, e, n) {
        n.d(e, {
            I: function() {
                return s
            }
        });
        var i = n(58485)
          , r = n(59989);
        function s({keyframes: t, velocity: e=0, power: n=.8, timeConstant: s=325, bounceDamping: o=10, bounceStiffness: a=500, modifyTarget: u, min: l, max: h, restDelta: c=.5, restSpeed: d}) {
            let f, p;
            let m = t[0]
              , v = {
                done: !1,
                value: m
            }
              , g = t => void 0 !== l && t < l || void 0 !== h && t > h
              , y = t => void 0 === l ? h : void 0 === h ? l : Math.abs(l - t) < Math.abs(h - t) ? l : h
              , x = n * e
              , w = m + x
              , T = void 0 === u ? w : u(w);
            T !== w && (x = T - m);
            let P = t => -x * Math.exp(-t / s)
              , b = t => T + P(t)
              , S = t => {
                let e = P(t)
                  , n = b(t);
                v.done = Math.abs(e) <= c,
                v.value = v.done ? T : n
            }
              , A = t => {
                g(v.value) && (f = t,
                p = (0,
                i.S)({
                    keyframes: [v.value, y(v.value)],
                    velocity: (0,
                    r.P)(b, t, v.value),
                    damping: o,
                    stiffness: a,
                    restDelta: c,
                    restSpeed: d
                }))
            }
            ;
            return A(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (p || void 0 !== f || (e = !0,
                    S(t),
                    A(t)),
                    void 0 !== f && t >= f) ? p.next(t - f) : (e || S(t),
                    v)
                }
            }
        }
    },
    30876: function(t, e, n) {
        n.d(e, {
            F: function() {
                return h
            },
            g: function() {
                return l
            }
        });
        var i = n(94943)
          , r = n(15331)
          , s = n(48934)
          , o = n(28460)
          , a = n(25921)
          , u = n(87591);
        function l(t, e) {
            return t.map( () => e || i.mZ).splice(0, t.length - 1)
        }
        function h({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
            let h = (0,
            r.N)(i) ? i.map(s.R) : (0,
            s.R)(i)
              , c = {
                done: !1,
                value: e[0]
            }
              , d = (0,
            u.q)(n && n.length === e.length ? n : (0,
            a.Y)(e), t)
              , f = (0,
            o.s)(d, e, {
                ease: Array.isArray(h) ? h : l(e, h)
            });
            return {
                calculatedDuration: t,
                next: e => (c.value = f(e),
                c.done = e >= t,
                c)
            }
        }
    },
    58485: function(t, e, n) {
        n.d(e, {
            S: function() {
                return m
            }
        });
        var i = n(21865)
          , r = n(29711)
          , s = n(96092)
          , o = n(44013)
          , a = n(64587)
          , u = n(59989);
        let l = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        var h = n(62035);
        function c(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let d = ["duration", "bounce"]
          , f = ["stiffness", "damping", "mass"];
        function p(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function m(t=l.visualDuration, e=l.bounce) {
            let n;
            let a = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: m, restDelta: v} = a
              , g = a.keyframes[0]
              , y = a.keyframes[a.keyframes.length - 1]
              , x = {
                done: !1,
                value: g
            }
              , {stiffness: w, damping: T, mass: P, duration: b, velocity: S, isResolvedFromDuration: A} = function(t) {
                let e = {
                    velocity: l.velocity,
                    stiffness: l.stiffness,
                    damping: l.damping,
                    mass: l.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!p(t, f) && p(t, d)) {
                    if (t.visualDuration) {
                        let n = 2 * Math.PI / (1.2 * t.visualDuration)
                          , r = n * n
                          , s = 2 * (0,
                        i.u)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                        e = {
                            ...e,
                            mass: l.mass,
                            stiffness: r,
                            damping: s
                        }
                    } else {
                        let n = function({duration: t=l.duration, bounce: e=l.bounce, velocity: n=l.velocity, mass: s=l.mass}) {
                            let o, a;
                            (0,
                            h.K)(t <= (0,
                            r.w)(l.maxDuration), "Spring duration must be 10 seconds or less");
                            let u = 1 - e;
                            u = (0,
                            i.u)(l.minDamping, l.maxDamping, u),
                            t = (0,
                            i.u)(l.minDuration, l.maxDuration, (0,
                            r.X)(t)),
                            u < 1 ? (o = e => {
                                let i = e * u
                                  , r = i * t;
                                return .001 - (i - n) / c(e, u) * Math.exp(-r)
                            }
                            ,
                            a = e => {
                                let i = e * u * t
                                  , r = Math.pow(u, 2) * Math.pow(e, 2) * t
                                  , s = c(Math.pow(e, 2), u);
                                return (i * n + n - r) * Math.exp(-i) * (-o(e) + .001 > 0 ? -1 : 1) / s
                            }
                            ) : (o = e => -.001 + Math.exp(-e * t) * ((e - n) * t + 1),
                            a = e => t * t * (n - e) * Math.exp(-e * t));
                            let d = function(t, e, n) {
                                let i = n;
                                for (let n = 1; n < 12; n++)
                                    i -= t(i) / e(i);
                                return i
                            }(o, a, 5 / t);
                            if (t = (0,
                            r.w)(t),
                            isNaN(d))
                                return {
                                    stiffness: l.stiffness,
                                    damping: l.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(d, 2) * s;
                                return {
                                    stiffness: e,
                                    damping: 2 * u * Math.sqrt(s * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...n,
                            mass: l.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...a,
                velocity: -(0,
                r.X)(a.velocity || 0)
            })
              , V = S || 0
              , M = T / (2 * Math.sqrt(w * P))
              , D = y - g
              , E = (0,
            r.X)(Math.sqrt(w / P))
              , C = 5 > Math.abs(D);
            if (m || (m = C ? l.restSpeed.granular : l.restSpeed.default),
            v || (v = C ? l.restDelta.granular : l.restDelta.default),
            M < 1) {
                let t = c(E, M);
                n = e => y - Math.exp(-M * E * e) * ((V + M * E * D) / t * Math.sin(t * e) + D * Math.cos(t * e))
            } else if (1 === M)
                n = t => y - Math.exp(-E * t) * (D + (V + E * D) * t);
            else {
                let t = E * Math.sqrt(M * M - 1);
                n = e => {
                    let n = Math.exp(-M * E * e)
                      , i = Math.min(t * e, 300);
                    return y - n * ((V + M * E * D) * Math.sinh(i) + t * D * Math.cosh(i)) / t
                }
            }
            let R = {
                calculatedDuration: A && b || null,
                next: t => {
                    let e = n(t);
                    if (A)
                        x.done = t >= b;
                    else {
                        let i = 0 === t ? V : 0;
                        M < 1 && (i = 0 === t ? (0,
                        r.w)(V) : (0,
                        u.P)(n, t, e));
                        let s = Math.abs(i) <= m
                          , o = Math.abs(y - e) <= v;
                        x.done = s && o
                    }
                    return x.value = x.done ? y : e,
                    x
                }
                ,
                toString: () => {
                    let t = Math.min((0,
                    o.i)(R), o.E)
                      , e = (0,
                    s.w)(e => R.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
                ,
                toTransition: () => {}
            };
            return R
        }
        m.applyToOptions = t => {
            let e = (0,
            a.S)(t, 100, m);
            return t.ease = e.ease,
            t.duration = (0,
            r.w)(e.duration),
            t.type = "keyframes",
            t
        }
    },
    44013: function(t, e, n) {
        n.d(e, {
            E: function() {
                return i
            },
            i: function() {
                return r
            }
        });
        let i = 2e4;
        function r(t) {
            let e = 0
              , n = t.next(e);
            for (; !n.done && e < i; )
                e += 50,
                n = t.next(e);
            return e >= i ? 1 / 0 : e
        }
    },
    64587: function(t, e, n) {
        n.d(e, {
            S: function() {
                return s
            }
        });
        var i = n(29711)
          , r = n(44013);
        function s(t, e=100, n) {
            let s = n({
                ...t,
                keyframes: [0, e]
            })
              , o = Math.min((0,
            r.i)(s), r.E);
            return {
                type: "keyframes",
                ease: t => s.next(o * t).value / e,
                duration: (0,
                i.X)(o)
            }
        }
    },
    50721: function(t, e, n) {
        n.d(e, {
            x: function() {
                return i
            }
        });
        function i(t) {
            return "function" == typeof t && "applyToOptions"in t
        }
    },
    59989: function(t, e, n) {
        n.d(e, {
            P: function() {
                return r
            }
        });
        var i = n(88294);
        function r(t, e, n) {
            let r = Math.max(e - 5, 0);
            return (0,
            i.R)(n - t(r), e - r)
        }
    },
    98486: function(t, e, n) {
        n.d(e, {
            s: function() {
                return f
            }
        });
        var i = n(14151)
          , r = n(71272)
          , s = n(49802)
          , o = n(38596)
          , a = n(74827)
          , u = n(82476)
          , l = n(65050)
          , h = n(22442);
        let c = new Set(["auto", "none", "0"]);
        var d = n(71152);
        class f extends a.e {
            constructor(t, e, n, i, r) {
                super(t, e, n, i, r, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: n} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    if ("string" == typeof i && (i = i.trim(),
                    (0,
                    o.t)(i))) {
                        let r = (0,
                        s.V)(i, e.current);
                        void 0 !== r && (t[n] = r),
                        n === t.length - 1 && (this.finalKeyframe = i)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !i.z.has(n) || 2 !== t.length)
                    return;
                let[a,u] = t
                  , l = (0,
                r.C)(a)
                  , h = (0,
                r.C)(u);
                if (l !== h) {
                    if ((0,
                    d.mP)(l) && (0,
                    d.mP)(h))
                        for (let e = 0; e < t.length; e++) {
                            let n = t[e];
                            "string" == typeof n && (t[e] = parseFloat(n))
                        }
                    else
                        d.lw[n] && (this.needsMeasurement = !0)
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , n = [];
                for (let e = 0; e < t.length; e++) {
                    var i;
                    (null === t[e] || ("number" == typeof (i = t[e]) ? 0 === i : null === i || "none" === i || "0" === i || (0,
                    u.W)(i))) && n.push(e)
                }
                n.length && function(t, e, n) {
                    let i, r = 0;
                    for (; r < t.length && !i; ) {
                        let e = t[r];
                        "string" == typeof e && !c.has(e) && (0,
                        l.V)(e).values.length && (i = t[r]),
                        r++
                    }
                    if (i && n)
                        for (let r of e)
                            t[r] = (0,
                            h.T)(n, i)
                }(t, n, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: n} = this;
                if (!t || !t.current)
                    return;
                "height" === n && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = d.lw[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let i = e[e.length - 1];
                void 0 !== i && t.getValue(n, i).jump(i, !1)
            }
            measureEndState() {
                let {element: t, name: e, unresolvedKeyframes: n} = this;
                if (!t || !t.current)
                    return;
                let i = t.getValue(e);
                i && i.jump(this.measuredOrigin, !1);
                let r = n.length - 1
                  , s = n[r];
                n[r] = d.lw[e](t.measureViewportBox(), window.getComputedStyle(t.current)),
                null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
                this.removedTransforms?.length && this.removedTransforms.forEach( ([e,n]) => {
                    t.getValue(e).set(n)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
    },
    74827: function(t, e, n) {
        n.d(e, {
            e: function() {
                return f
            },
            m: function() {
                return d
            }
        });
        var i = n(4178)
          , r = n(71152)
          , s = n(26147);
        let o = new Set
          , a = !1
          , u = !1
          , l = !1;
        function h() {
            if (u) {
                let t = Array.from(o).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , n = new Map;
                e.forEach(t => {
                    let e = (0,
                    r.Ei)(t);
                    e.length && (n.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = n.get(t);
                    e && e.forEach( ([e,n]) => {
                        t.getValue(e)?.set(n)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            u = !1,
            a = !1,
            o.forEach(t => t.complete(l)),
            o.clear()
        }
        function c() {
            o.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (u = !0)
            }
            )
        }
        function d() {
            l = !0,
            c(),
            h(),
            l = !1
        }
        class f {
            constructor(t, e, n, i, r, s=!1) {
                this.state = "pending",
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = n,
                this.motionValue = i,
                this.element = r,
                this.isAsync = s
            }
            scheduleResolve() {
                this.state = "scheduled",
                this.isAsync ? (o.add(this),
                a || (a = !0,
                s.Wi.read(c),
                s.Wi.resolveKeyframes(h))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: n, motionValue: r} = this;
                if (null === t[0]) {
                    let i = r?.get()
                      , s = t[t.length - 1];
                    if (void 0 !== i)
                        t[0] = i;
                    else if (n && e) {
                        let i = n.readValue(e, s);
                        null != i && (t[0] = i)
                    }
                    void 0 === t[0] && (t[0] = s),
                    r && void 0 === i && r.set(t[0])
                }
                (0,
                i.q)(t)
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete(t=!1) {
                this.state = "complete",
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
                o.delete(this)
            }
            cancel() {
                "scheduled" === this.state && (o.delete(this),
                this.state = "pending")
            }
            resume() {
                "pending" === this.state && this.scheduleResolve()
            }
        }
    },
    69118: function(t, e, n) {
        n.d(e, {
            $: function() {
                return r
            }
        });
        let i = t => null !== t;
        function r(t, {repeat: e, repeatType: n="loop"}, r, s=1) {
            let o = t.filter(i)
              , a = s < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : o.length - 1;
            return a && void 0 !== r ? r : o[a]
        }
    },
    25921: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return r
            }
        });
        var i = n(14534);
        function r(t) {
            let e = [0];
            return (0,
            i.c)(e, t.length - 1),
            e
        }
    },
    14534: function(t, e, n) {
        n.d(e, {
            c: function() {
                return s
            }
        });
        var i = n(81645)
          , r = n(33811);
        function s(t, e) {
            let n = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
                let o = (0,
                i.Y)(0, e, s);
                t.push((0,
                r.t)(n, 1, o))
            }
        }
    },
    87591: function(t, e, n) {
        n.d(e, {
            q: function() {
                return i
            }
        });
        function i(t, e) {
            return t.map(t => t * e)
        }
    },
    4178: function(t, e, n) {
        n.d(e, {
            q: function() {
                return i
            }
        });
        function i(t) {
            for (let e = 1; e < t.length; e++)
                t[e] ?? (t[e] = t[e - 1])
        }
    },
    71152: function(t, e, n) {
        n.d(e, {
            Ei: function() {
                return h
            },
            lw: function() {
                return c
            },
            mP: function() {
                return a
            }
        });
        var i = n(1806)
          , r = n(56440)
          , s = n(61799)
          , o = n(92854);
        let a = t => t === s.Rx || t === o.px
          , u = new Set(["x", "y", "z"])
          , l = r._.filter(t => !u.has(t));
        function h(t) {
            let e = [];
            return l.forEach(n => {
                let i = t.getValue(n);
                void 0 !== i && (e.push([n, i.get()]),
                i.set(n.startsWith("scale") ? 1 : 0))
            }
            ),
            e
        }
        let c = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: (t, {transform: e}) => (0,
            i.WK)(e, "x"),
            y: (t, {transform: e}) => (0,
            i.WK)(e, "y")
        };
        c.translateX = c.x,
        c.translateY = c.y
    },
    9868: function(t, e, n) {
        n.d(e, {
            T: function() {
                return i
            }
        });
        class i {
            constructor() {
                this.updateFinished()
            }
            get finished() {
                return this._finished
            }
            updateFinished() {
                this._finished = new Promise(t => {
                    this.resolve = t
                }
                )
            }
            notifyFinished() {
                this.resolve()
            }
            then(t, e) {
                return this.finished.then(t, e)
            }
        }
    },
    49802: function(t, e, n) {
        n.d(e, {
            V: function() {
                return function t(e, n, o=1) {
                    (0,
                    i.k)(o <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                    let[u,l] = a(e);
                    if (!u)
                        return;
                    let h = window.getComputedStyle(n).getPropertyValue(u);
                    if (h) {
                        let t = h.trim();
                        return (0,
                        r.P)(t) ? parseFloat(t) : t
                    }
                    return (0,
                    s.t)(l) ? t(l, n, o + 1) : l
                }
            },
            a: function() {
                return a
            }
        });
        var i = n(62035)
          , r = n(51141)
          , s = n(38596);
        let o = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
        function a(t) {
            let e = o.exec(t);
            if (!e)
                return [, ];
            let[,n,i,r] = e;
            return [`--${n ?? i}`, r]
        }
    },
    25551: function(t, e, n) {
        n.d(e, {
            e: function() {
                return i
            }
        });
        function i(t, e) {
            return t?.[e] ?? t?.default ?? t
        }
    },
    38596: function(t, e, n) {
        n.d(e, {
            f: function() {
                return r
            },
            t: function() {
                return o
            }
        });
        let i = t => e => "string" == typeof e && e.startsWith(t)
          , r = i("--")
          , s = i("var(--")
          , o = t => !!s(t) && a.test(t.split("/*")[0].trim())
          , a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    },
    98133: function(t, e, n) {
        n.d(e, {
            f: function() {
                return a
            }
        });
        var i = n(85898)
          , r = n(30876)
          , s = n(58485);
        let o = {
            decay: i.I,
            inertia: i.I,
            tween: r.F,
            keyframes: r.F,
            spring: s.S
        };
        function a(t) {
            "string" == typeof t.type && (t.type = o[t.type])
        }
    },
    21710: function(t, e, n) {
        n.d(e, {
            x: function() {
                return i
            }
        });
        let i = ([t,e,n,i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`
    },
    80033: function(t, e, n) {
        n.d(e, {
            e: function() {
                return function t(e, n) {
                    if (e)
                        return "function" == typeof e ? (0,
                        r.V)() ? (0,
                        s.w)(e, n) : "ease-out" : (0,
                        i.q)(e) ? (0,
                        o.x)(e) : Array.isArray(e) ? e.map(e => t(e, n) || a._.easeOut) : a._[e]
                }
            }
        });
        var i = n(53857)
          , r = n(62355)
          , s = n(96092)
          , o = n(21710)
          , a = n(59953)
    },
    59953: function(t, e, n) {
        n.d(e, {
            _: function() {
                return r
            }
        });
        var i = n(21710);
        let r = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: (0,
            i.x)([0, .65, .55, 1]),
            circOut: (0,
            i.x)([.55, 0, 1, .45]),
            backIn: (0,
            i.x)([.31, .01, .66, -.59]),
            backOut: (0,
            i.x)([.33, 1.53, .69, .99])
        }
    },
    29112: function(t, e, n) {
        n.d(e, {
            h: function() {
                return o
            }
        });
        var i = n(35818)
          , r = n(20557)
          , s = n(80033);
        function o(t, e, n, {delay: o=0, duration: a=300, repeat: u=0, repeatType: l="loop", ease: h="easeOut", times: c}={}, d) {
            let f = {
                [e]: n
            };
            c && (f.offset = c);
            let p = (0,
            s.e)(h, a);
            Array.isArray(p) && (f.easing = p),
            r.statsBuffer.value && i.P.waapi++;
            let m = {
                delay: o,
                duration: a,
                easing: Array.isArray(p) ? "linear" : p,
                fill: "both",
                iterations: u + 1,
                direction: "reverse" === l ? "alternate" : "normal"
            };
            d && (m.pseudoElement = d);
            let v = t.animate(f, m);
            return r.statsBuffer.value && v.finished.finally( () => {
                i.P.waapi--
            }
            ),
            v
        }
    },
    9657: function(t, e, n) {
        n.d(e, {
            I: function() {
                return a
            }
        });
        var i = n(90107)
          , r = n(13537);
        let s = new Set(["opacity", "clipPath", "filter", "transform"])
          , o = (0,
        i.X)( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
        function a(t) {
            let {motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: u, type: l} = t;
            if (!(0,
            r.R)(e?.owner?.current))
                return !1;
            let {onUpdate: h, transformTemplate: c} = e.owner.getProps();
            return o() && n && s.has(n) && ("transform" !== n || !c) && !h && !i && "mirror" !== a && 0 !== u && "inertia" !== l
        }
    },
    24088: function(t, e, n) {
        n.d(e, {
            q: function() {
                return s
            }
        });
        var i = n(62355)
          , r = n(50721);
        function s({type: t, ...e}) {
            return (0,
            r.x)(t) && (0,
            i.V)() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300),
            e.ease ?? (e.ease = "easeOut"),
            e)
        }
    },
    96092: function(t, e, n) {
        n.d(e, {
            w: function() {
                return i
            }
        });
        let i = (t, e, n=10) => {
            let i = ""
              , r = Math.max(Math.round(e / n), 2);
            for (let e = 0; e < r; e++)
                i += t(e / (r - 1)) + ", ";
            return `linear(${i.substring(0, i.length - 2)})`
        }
    },
    89265: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return o
            }
        });
        var i = n(21457)
          , r = n(72945)
          , s = n(20557);
        function o(t, e) {
            let n = !1
              , o = !0
              , a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , u = () => n = !0
              , l = r.B.reduce( (t, n) => (t[n] = function(t, e) {
                let n = new Set
                  , i = new Set
                  , r = !1
                  , o = !1
                  , a = new WeakSet
                  , u = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , l = 0;
                function h(e) {
                    a.has(e) && (c.schedule(e),
                    t()),
                    l++,
                    e(u)
                }
                let c = {
                    schedule: (t, e=!1, s=!1) => {
                        let o = s && r ? n : i;
                        return e && a.add(t),
                        o.has(t) || o.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        i.delete(t),
                        a.delete(t)
                    }
                    ,
                    process: t => {
                        if (u = t,
                        r) {
                            o = !0;
                            return
                        }
                        r = !0,
                        [n,i] = [i, n],
                        n.forEach(h),
                        e && s.statsBuffer.value && s.statsBuffer.value.frameloop[e].push(l),
                        l = 0,
                        n.clear(),
                        r = !1,
                        o && (o = !1,
                        c.process(t))
                    }
                };
                return c
            }(u, e ? n : void 0),
            t), {})
              , {setup: h, read: c, resolveKeyframes: d, preUpdate: f, update: p, preRender: m, render: v, postRender: g} = l
              , y = () => {
                let r = i.c.useManualTiming ? a.timestamp : performance.now();
                n = !1,
                i.c.useManualTiming || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(r - a.timestamp, 40), 1)),
                a.timestamp = r,
                a.isProcessing = !0,
                h.process(a),
                c.process(a),
                d.process(a),
                f.process(a),
                p.process(a),
                m.process(a),
                v.process(a),
                g.process(a),
                a.isProcessing = !1,
                n && e && (o = !1,
                t(y))
            }
              , x = () => {
                n = !0,
                o = !0,
                a.isProcessing || t(y)
            }
            ;
            return {
                schedule: r.B.reduce( (t, e) => {
                    let i = l[e];
                    return t[e] = (t, e=!1, r=!1) => (n || x(),
                    i.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < r.B.length; e++)
                        l[r.B[e]].cancel(t)
                }
                ,
                state: a,
                steps: l
            }
        }
    },
    26147: function(t, e, n) {
        n.d(e, {
            Pn: function() {
                return s
            },
            Wi: function() {
                return r
            },
            frameData: function() {
                return o
            },
            yL: function() {
                return a
            }
        });
        var i = n(56277);
        let {schedule: r, cancel: s, state: o, steps: a} = (0,
        n(89265).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : i.Z, !0)
    },
    3697: function(t, e, n) {
        n.d(e, {
            $: function() {
                return r
            },
            g: function() {
                return i
            }
        });
        let {schedule: i, cancel: r} = (0,
        n(89265).Z)(queueMicrotask, !1)
    },
    72945: function(t, e, n) {
        n.d(e, {
            B: function() {
                return i
            }
        });
        let i = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
    },
    41927: function(t, e, n) {
        let i;
        n.d(e, {
            X: function() {
                return a
            }
        });
        var r = n(21457)
          , s = n(26147);
        function o() {
            i = void 0
        }
        let a = {
            now: () => (void 0 === i && a.set(s.frameData.isProcessing || r.c.useManualTiming ? s.frameData.timestamp : performance.now()),
            i),
            set: t => {
                i = t,
                queueMicrotask(o)
            }
        }
    },
    25888: function(t, e, n) {
        n.d(e, {
            g: function() {
                return r
            },
            r: function() {
                return i
            }
        });
        let i = {
            x: !1,
            y: !1
        };
        function r() {
            return i.x || i.y
        }
    },
    97159: function(t, e, n) {
        n.d(e, {
            K: function() {
                return r
            }
        });
        var i = n(25888);
        function r(t) {
            return "x" === t || "y" === t ? i.r[t] ? null : (i.r[t] = !0,
            () => {
                i.r[t] = !1
            }
            ) : i.r.x || i.r.y ? null : (i.r.x = i.r.y = !0,
            () => {
                i.r.x = i.r.y = !1
            }
            )
        }
    },
    33320: function(t, e, n) {
        n.d(e, {
            M: function() {
                return o
            }
        });
        var i = n(25888)
          , r = n(95317);
        function s(t) {
            return !("touch" === t.pointerType || (0,
            i.g)())
        }
        function o(t, e, n={}) {
            let[i,o,a] = (0,
            r.R)(t, n)
              , u = t => {
                if (!s(t))
                    return;
                let {target: n} = t
                  , i = e(n, t);
                if ("function" != typeof i || !n)
                    return;
                let r = t => {
                    s(t) && (i(t),
                    n.removeEventListener("pointerleave", r))
                }
                ;
                n.addEventListener("pointerleave", r, o)
            }
            ;
            return i.forEach(t => {
                t.addEventListener("pointerenter", u, o)
            }
            ),
            a
        }
    },
    42257: function(t, e, n) {
        n.d(e, {
            O: function() {
                return p
            }
        });
        var i = n(13537)
          , r = n(25888)
          , s = n(53365)
          , o = n(25602)
          , a = n(95317);
        let u = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , l = new WeakSet;
        function h(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function c(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let d = (t, e) => {
            let n = t.currentTarget;
            if (!n)
                return;
            let i = h( () => {
                if (l.has(n))
                    return;
                c(n, "down");
                let t = h( () => {
                    c(n, "up")
                }
                );
                n.addEventListener("keyup", t, e),
                n.addEventListener("blur", () => c(n, "cancel"), e)
            }
            );
            n.addEventListener("keydown", i, e),
            n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
        }
        ;
        function f(t) {
            return (0,
            o.D)(t) && !(0,
            r.g)()
        }
        function p(t, e, n={}) {
            let[r,o,h] = (0,
            a.R)(t, n)
              , c = t => {
                let i = t.currentTarget;
                if (!f(t))
                    return;
                l.add(i);
                let r = e(i, t)
                  , a = (t, e) => {
                    window.removeEventListener("pointerup", u),
                    window.removeEventListener("pointercancel", h),
                    l.has(i) && l.delete(i),
                    f(t) && "function" == typeof r && r(t, {
                        success: e
                    })
                }
                  , u = t => {
                    a(t, i === window || i === document || n.useGlobalTarget || (0,
                    s.r)(i, t.target))
                }
                  , h = t => {
                    a(t, !1)
                }
                ;
                window.addEventListener("pointerup", u, o),
                window.addEventListener("pointercancel", h, o)
            }
            ;
            return r.forEach(t => {
                (n.useGlobalTarget ? window : t).addEventListener("pointerdown", c, o),
                (0,
                i.R)(t) && (t.addEventListener("focus", t => d(t, o)),
                u.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
            }
            ),
            h
        }
    },
    53365: function(t, e, n) {
        n.d(e, {
            r: function() {
                return i
            }
        });
        let i = (t, e) => !!e && (t === e || i(t, e.parentElement))
    },
    25602: function(t, e, n) {
        n.d(e, {
            D: function() {
                return i
            }
        });
        let i = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
    },
    95317: function(t, e, n) {
        n.d(e, {
            R: function() {
                return r
            }
        });
        var i = n(59960);
        function r(t, e) {
            let n = (0,
            i.I)(t)
              , r = new AbortController;
            return [n, {
                passive: !0,
                ...e,
                signal: r.signal
            }, () => r.abort()]
        }
    },
    12972: function(t, e, n) {
        n.d(e, {
            S: function() {
                return i
            }
        });
        let i = t => t.startsWith("--")
    },
    1806: function(t, e, n) {
        n.d(e, {
            E$: function() {
                return h
            },
            RT: function() {
                return d
            },
            WK: function() {
                return c
            }
        });
        let i = t => 180 * t / Math.PI
          , r = t => o(i(Math.atan2(t[1], t[0])))
          , s = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
            rotate: r,
            rotateZ: r,
            skewX: t => i(Math.atan(t[1])),
            skewY: t => i(Math.atan(t[2])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        }
          , o = t => ((t %= 360) < 0 && (t += 360),
        t)
          , a = t => Math.sqrt(t[0] * t[0] + t[1] * t[1])
          , u = t => Math.sqrt(t[4] * t[4] + t[5] * t[5])
          , l = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: a,
            scaleY: u,
            scale: t => (a(t) + u(t)) / 2,
            rotateX: t => o(i(Math.atan2(t[6], t[5]))),
            rotateY: t => o(i(Math.atan2(-t[2], t[0]))),
            rotateZ: r,
            rotate: r,
            skewX: t => i(Math.atan(t[4])),
            skewY: t => i(Math.atan(t[1])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };
        function h(t) {
            return t.includes("scale") ? 1 : 0
        }
        function c(t, e) {
            let n, i;
            if (!t || "none" === t)
                return h(e);
            let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
            if (r)
                n = l,
                i = r;
            else {
                let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                n = s,
                i = e
            }
            if (!i)
                return h(e);
            let o = n[e]
              , a = i[1].split(",").map(f);
            return "function" == typeof o ? o(a) : a[o]
        }
        let d = (t, e) => {
            let {transform: n="none"} = getComputedStyle(t);
            return c(n, e)
        }
        ;
        function f(t) {
            return parseFloat(t.trim())
        }
    },
    32554: function(t, e, n) {
        n.d(e, {
            A: function() {
                return r
            }
        });
        var i = n(12972);
        function r(t, e, n) {
            (0,
            i.S)(e) ? t.style.setProperty(e, n) : t.style[e] = n
        }
    },
    14151: function(t, e, n) {
        n.d(e, {
            z: function() {
                return i
            }
        });
        let i = new Set(["width", "height", "top", "left", "right", "bottom", ...n(56440)._])
    },
    56440: function(t, e, n) {
        n.d(e, {
            G: function() {
                return r
            },
            _: function() {
                return i
            }
        });
        let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , r = new Set(i)
    },
    35818: function(t, e, n) {
        n.d(e, {
            P: function() {
                return i
            }
        });
        let i = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        }
    },
    20557: function(t, e, n) {
        n.d(e, {
            statsBuffer: function() {
                return i
            }
        });
        let i = {
            value: null,
            addProjectionMetrics: null
        }
    },
    28460: function(t, e, n) {
        n.d(e, {
            s: function() {
                return h
            }
        });
        var i = n(21457)
          , r = n(56277)
          , s = n(24750)
          , o = n(62035)
          , a = n(81645)
          , u = n(21865)
          , l = n(86096);
        function h(t, e, {clamp: n=!0, ease: h, mixer: c}={}) {
            let d = t.length;
            if ((0,
            o.k)(d === e.length, "Both input and output ranges must be the same length"),
            1 === d)
                return () => e[0];
            if (2 === d && e[0] === e[1])
                return () => e[1];
            let f = t[0] === t[1];
            t[0] > t[d - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let p = function(t, e, n) {
                let o = []
                  , a = n || i.c.mix || l.C
                  , u = t.length - 1;
                for (let n = 0; n < u; n++) {
                    let i = a(t[n], t[n + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[n] || r.Z : e;
                        i = (0,
                        s.z)(t, i)
                    }
                    o.push(i)
                }
                return o
            }(e, h, c)
              , m = p.length
              , v = n => {
                if (f && n < t[0])
                    return e[0];
                let i = 0;
                if (m > 1)
                    for (; i < t.length - 2 && !(n < t[i + 1]); i++)
                        ;
                let r = (0,
                a.Y)(t[i], t[i + 1], n);
                return p[i](r)
            }
            ;
            return n ? e => v((0,
            u.u)(t[0], t[d - 1], e)) : v
        }
    },
    13537: function(t, e, n) {
        n.d(e, {
            R: function() {
                return r
            }
        });
        var i = n(41464);
        function r(t) {
            return (0,
            i.K)(t) && "offsetHeight"in t
        }
    },
    51413: function(t, e, n) {
        n.d(e, {
            v: function() {
                return r
            }
        });
        var i = n(41464);
        function r(t) {
            return (0,
            i.K)(t) && "ownerSVGElement"in t
        }
    },
    89582: function(t, e, n) {
        n.d(e, {
            r: function() {
                return r
            }
        });
        var i = n(51413);
        function r(t) {
            return (0,
            i.v)(t) && "svg" === t.tagName
        }
    },
    68167: function(t, e, n) {
        n.d(e, {
            E: function() {
                return h
            },
            R: function() {
                return p
            }
        });
        var i = n(62035)
          , r = n(31664)
          , s = n(32017)
          , o = n(26719)
          , a = n(80230)
          , u = n(37058)
          , l = n(33811);
        let h = (t, e, n) => {
            let i = t * t
              , r = n * (e * e - i) + i;
            return r < 0 ? 0 : Math.sqrt(r)
        }
          , c = [r.$, a.m, s.J]
          , d = t => c.find(e => e.test(t));
        function f(t) {
            let e = d(t);
            if ((0,
            i.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let n = e.parse(t);
            return e === s.J && (n = (0,
            o.Y)(n)),
            n
        }
        let p = (t, e) => {
            let n = f(t)
              , i = f(e);
            if (!n || !i)
                return (0,
                u.S)(t, e);
            let r = {
                ...n
            };
            return t => (r.red = h(n.red, i.red, t),
            r.green = h(n.green, i.green, t),
            r.blue = h(n.blue, i.blue, t),
            r.alpha = (0,
            l.t)(n.alpha, i.alpha, t),
            a.m.transform(r))
        }
    },
    87974: function(t, e, n) {
        n.d(e, {
            $E: function() {
                return p
            },
            iP: function() {
                return v
            },
            qL: function() {
                return f
            },
            qN: function() {
                return m
            }
        });
        var i = n(24750)
          , r = n(62035)
          , s = n(38596)
          , o = n(7537)
          , a = n(65050)
          , u = n(68167)
          , l = n(37058)
          , h = n(33811)
          , c = n(87463);
        function d(t, e) {
            return n => (0,
            h.t)(t, e, n)
        }
        function f(t) {
            return "number" == typeof t ? d : "string" == typeof t ? (0,
            s.t)(t) ? l.S : o.$.test(t) ? u.R : v : Array.isArray(t) ? p : "object" == typeof t ? o.$.test(t) ? u.R : m : l.S
        }
        function p(t, e) {
            let n = [...t]
              , i = n.length
              , r = t.map( (t, n) => f(t)(t, e[n]));
            return t => {
                for (let e = 0; e < i; e++)
                    n[e] = r[e](t);
                return n
            }
        }
        function m(t, e) {
            let n = {
                ...t,
                ...e
            }
              , i = {};
            for (let r in n)
                void 0 !== t[r] && void 0 !== e[r] && (i[r] = f(t[r])(t[r], e[r]));
            return t => {
                for (let e in i)
                    n[e] = i[e](t);
                return n
            }
        }
        let v = (t, e) => {
            let n = a.P.createTransformer(e)
              , s = (0,
            a.V)(t)
              , o = (0,
            a.V)(e);
            return s.indexes.var.length === o.indexes.var.length && s.indexes.color.length === o.indexes.color.length && s.indexes.number.length >= o.indexes.number.length ? c.Z.has(t) && !o.values.length || c.Z.has(e) && !s.values.length ? (0,
            c.n)(t, e) : (0,
            i.z)(p(function(t, e) {
                let n = []
                  , i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let r = 0; r < e.values.length; r++) {
                    let s = e.types[r]
                      , o = t.indexes[s][i[s]]
                      , a = t.values[o] ?? 0;
                    n[r] = a,
                    i[s]++
                }
                return n
            }(s, o), o.values), n) : ((0,
            r.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            (0,
            l.S)(t, e))
        }
    },
    37058: function(t, e, n) {
        n.d(e, {
            S: function() {
                return i
            }
        });
        function i(t, e) {
            return n => n > 0 ? e : t
        }
    },
    86096: function(t, e, n) {
        n.d(e, {
            C: function() {
                return s
            }
        });
        var i = n(87974)
          , r = n(33811);
        function s(t, e, n) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof n ? (0,
            r.t)(t, e, n) : (0,
            i.qL)(t)(t, e)
        }
    },
    33811: function(t, e, n) {
        n.d(e, {
            t: function() {
                return i
            }
        });
        let i = (t, e, n) => t + (e - t) * n
    },
    87463: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return i
            },
            n: function() {
                return r
            }
        });
        let i = new Set(["none", "hidden"]);
        function r(t, e) {
            return i.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
        }
    },
    59960: function(t, e, n) {
        n.d(e, {
            I: function() {
                return i
            }
        });
        function i(t, e, n) {
            if (t instanceof EventTarget)
                return [t];
            if ("string" == typeof t) {
                let i = document;
                e && (i = e.current);
                let r = n?.[t] ?? i.querySelectorAll(t);
                return r ? Array.from(r) : []
            }
            return Array.from(t)
        }
    },
    53558: function(t, e, n) {
        n.d(e, {
            O: function() {
                return i
            }
        });
        let i = {}
    },
    62355: function(t, e, n) {
        n.d(e, {
            V: function() {
                return s
            }
        });
        var i = n(90107)
          , r = n(53558);
        let s = function(t, e) {
            let n = (0,
            i.X)(t);
            return () => r.O[e] ?? n()
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
    },
    9339: function(t, e, n) {
        n.d(e, {
            t: function() {
                return i
            }
        });
        let i = (0,
        n(90107).X)( () => void 0 !== window.ScrollTimeline)
    },
    94357: function(t, e, n) {
        n.d(e, {
            BX: function() {
                return h
            },
            Hg: function() {
                return l
            },
            S1: function() {
                return u
            }
        });
        var i = n(94513)
          , r = n(88294)
          , s = n(41927)
          , o = n(26147);
        let a = t => !isNaN(parseFloat(t))
          , u = {
            current: void 0
        };
        class l {
            constructor(t, e={}) {
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let n = s.X.now();
                    if (this.updatedAt !== n && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && (this.events.change?.notify(this.current),
                    this.dependents))
                        for (let t of this.dependents)
                            t.dirty();
                    e && this.events.renderRequest?.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = s.X.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new i.L);
                let n = this.events[t].add(e);
                return "change" === t ? () => {
                    n(),
                    o.Wi.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : n
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, n) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - n
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            dirty() {
                this.events.change?.notify(this.current)
            }
            addDependent(t) {
                this.dependents || (this.dependents = new Set),
                this.dependents.add(t)
            }
            removeDependent(t) {
                this.dependents && this.dependents.delete(t)
            }
            get() {
                return u.current && u.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let t = s.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                r.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.dependents?.clear(),
                this.events.destroy?.notify(),
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function h(t, e) {
            return new l(t,e)
        }
    },
    31664: function(t, e, n) {
        n.d(e, {
            $: function() {
                return r
            }
        });
        var i = n(80230);
        let r = {
            test: (0,
            n(48017).i)("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , i = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                n = t.substring(3, 5),
                i = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                n = t.substring(2, 3),
                i = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                n += n,
                i += i,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(i, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: i.m.transform
        }
    },
    26719: function(t, e, n) {
        function i(t, e, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        function r({hue: t, saturation: e, lightness: n, alpha: r}) {
            t /= 360,
            n /= 100;
            let s = 0
              , o = 0
              , a = 0;
            if (e /= 100) {
                let r = n < .5 ? n * (1 + e) : n + e - n * e
                  , u = 2 * n - r;
                s = i(u, r, t + 1 / 3),
                o = i(u, r, t),
                a = i(u, r, t - 1 / 3)
            } else
                s = o = a = n;
            return {
                red: Math.round(255 * s),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r
            }
        }
        n.d(e, {
            Y: function() {
                return r
            }
        })
    },
    32017: function(t, e, n) {
        n.d(e, {
            J: function() {
                return a
            }
        });
        var i = n(61799)
          , r = n(92854)
          , s = n(51224)
          , o = n(48017);
        let a = {
            test: (0,
            o.i)("hsl", "hue"),
            parse: (0,
            o.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: o=1}) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0,
            s.N)(e)) + ", " + r.aQ.transform((0,
            s.N)(n)) + ", " + (0,
            s.N)(i.Fq.transform(o)) + ")"
        }
    },
    7537: function(t, e, n) {
        n.d(e, {
            $: function() {
                return o
            }
        });
        var i = n(31664)
          , r = n(32017)
          , s = n(80230);
        let o = {
            test: t => s.m.test(t) || i.$.test(t) || r.J.test(t),
            parse: t => s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : i.$.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.m.transform(t) : r.J.transform(t)
        }
    },
    80230: function(t, e, n) {
        n.d(e, {
            g: function() {
                return u
            },
            m: function() {
                return l
            }
        });
        var i = n(21865)
          , r = n(61799)
          , s = n(51224)
          , o = n(48017);
        let a = t => (0,
        i.u)(0, 255, t)
          , u = {
            ...r.Rx,
            transform: t => Math.round(a(t))
        }
          , l = {
            test: (0,
            o.i)("rgb", "red"),
            parse: (0,
            o.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: i=1}) => "rgba(" + u.transform(t) + ", " + u.transform(e) + ", " + u.transform(n) + ", " + (0,
            s.N)(r.Fq.transform(i)) + ")"
        }
    },
    48017: function(t, e, n) {
        n.d(e, {
            i: function() {
                return s
            },
            d: function() {
                return o
            }
        });
        var i = n(3855);
        let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , s = (t, e) => n => !!("string" == typeof n && r.test(n) && n.startsWith(t) || e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          , o = (t, e, n) => r => {
            if ("string" != typeof r)
                return r;
            let[s,o,a,u] = r.match(i.K);
            return {
                [t]: parseFloat(s),
                [e]: parseFloat(o),
                [n]: parseFloat(a),
                alpha: void 0 !== u ? parseFloat(u) : 1
            }
        }
    },
    59290: function(t, e, n) {
        n.d(e, {
            h: function() {
                return u
            }
        });
        var i = n(65050)
          , r = n(3855);
        let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function o(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[i] = n.match(r.K) || [];
            if (!i)
                return t;
            let o = n.replace(i, "")
              , a = s.has(e) ? 1 : 0;
            return i !== n && (a *= 100),
            e + "(" + a + o + ")"
        }
        let a = /\b([a-z-]*)\(.*?\)/gu
          , u = {
            ...i.P,
            getAnimatableNone: t => {
                let e = t.match(a);
                return e ? e.map(o).join(" ") : t
            }
        }
    },
    65050: function(t, e, n) {
        n.d(e, {
            V: function() {
                return h
            },
            P: function() {
                return p
            }
        });
        var i = n(7537);
        let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
        var s = n(3855)
          , o = n(51224);
        let a = "number"
          , u = "color"
          , l = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function h(t) {
            let e = t.toString()
              , n = []
              , r = {
                color: [],
                number: [],
                var: []
            }
              , s = []
              , o = 0
              , h = e.replace(l, t => (i.$.test(t) ? (r.color.push(o),
            s.push(u),
            n.push(i.$.parse(t))) : t.startsWith("var(") ? (r.var.push(o),
            s.push("var"),
            n.push(t)) : (r.number.push(o),
            s.push(a),
            n.push(parseFloat(t))),
            ++o,
            "${}")).split("${}");
            return {
                values: n,
                split: h,
                indexes: r,
                types: s
            }
        }
        function c(t) {
            return h(t).values
        }
        function d(t) {
            let {split: e, types: n} = h(t)
              , r = e.length;
            return t => {
                let s = "";
                for (let l = 0; l < r; l++)
                    if (s += e[l],
                    void 0 !== t[l]) {
                        let e = n[l];
                        e === a ? s += (0,
                        o.N)(t[l]) : e === u ? s += i.$.transform(t[l]) : s += t[l]
                    }
                return s
            }
        }
        let f = t => "number" == typeof t ? 0 : t
          , p = {
            test: function(t) {
                return isNaN(t) && "string" == typeof t && (t.match(s.K)?.length || 0) + (t.match(r)?.length || 0) > 0
            },
            parse: c,
            createTransformer: d,
            getAnimatableNone: function(t) {
                let e = c(t);
                return d(t)(e.map(f))
            }
        }
    },
    71272: function(t, e, n) {
        n.d(e, {
            $: function() {
                return o
            },
            C: function() {
                return a
            }
        });
        var i = n(61799)
          , r = n(92854)
          , s = n(20363);
        let o = [i.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , a = t => o.find((0,
        s.l)(t))
    },
    72361: function(t, e, n) {
        n.d(e, {
            A: function() {
                return o
            },
            Q: function() {
                return s
            }
        });
        var i = n(7537)
          , r = n(59290);
        let s = {
            ...n(44558).j,
            color: i.$,
            backgroundColor: i.$,
            outlineColor: i.$,
            fill: i.$,
            stroke: i.$,
            borderColor: i.$,
            borderTopColor: i.$,
            borderRightColor: i.$,
            borderBottomColor: i.$,
            borderLeftColor: i.$,
            filter: r.h,
            WebkitFilter: r.h
        }
          , o = t => s[t]
    },
    44558: function(t, e, n) {
        n.d(e, {
            j: function() {
                return a
            }
        });
        var i = n(61799);
        let r = {
            ...i.Rx,
            transform: Math.round
        };
        var s = n(92854)
          , o = n(33299);
        let a = {
            borderWidth: s.px,
            borderTopWidth: s.px,
            borderRightWidth: s.px,
            borderBottomWidth: s.px,
            borderLeftWidth: s.px,
            borderRadius: s.px,
            radius: s.px,
            borderTopLeftRadius: s.px,
            borderTopRightRadius: s.px,
            borderBottomRightRadius: s.px,
            borderBottomLeftRadius: s.px,
            width: s.px,
            maxWidth: s.px,
            height: s.px,
            maxHeight: s.px,
            top: s.px,
            right: s.px,
            bottom: s.px,
            left: s.px,
            padding: s.px,
            paddingTop: s.px,
            paddingRight: s.px,
            paddingBottom: s.px,
            paddingLeft: s.px,
            margin: s.px,
            marginTop: s.px,
            marginRight: s.px,
            marginBottom: s.px,
            marginLeft: s.px,
            backgroundPositionX: s.px,
            backgroundPositionY: s.px,
            ...o.h,
            zIndex: r,
            fillOpacity: i.Fq,
            strokeOpacity: i.Fq,
            numOctaves: r
        }
    },
    33299: function(t, e, n) {
        n.d(e, {
            h: function() {
                return s
            }
        });
        var i = n(61799)
          , r = n(92854);
        let s = {
            rotate: r.RW,
            rotateX: r.RW,
            rotateY: r.RW,
            rotateZ: r.RW,
            scale: i.bA,
            scaleX: i.bA,
            scaleY: i.bA,
            scaleZ: i.bA,
            skew: r.RW,
            skewX: r.RW,
            skewY: r.RW,
            distance: r.px,
            translateX: r.px,
            translateY: r.px,
            translateZ: r.px,
            x: r.px,
            y: r.px,
            z: r.px,
            perspective: r.px,
            transformPerspective: r.px,
            opacity: i.Fq,
            originX: r.$C,
            originY: r.$C,
            originZ: r.px
        }
    },
    61799: function(t, e, n) {
        n.d(e, {
            Fq: function() {
                return s
            },
            Rx: function() {
                return r
            },
            bA: function() {
                return o
            }
        });
        var i = n(21865);
        let r = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , s = {
            ...r,
            transform: t => (0,
            i.u)(0, 1, t)
        }
          , o = {
            ...r,
            default: 1
        }
    },
    92854: function(t, e, n) {
        n.d(e, {
            $C: function() {
                return l
            },
            RW: function() {
                return r
            },
            aQ: function() {
                return s
            },
            px: function() {
                return o
            },
            vh: function() {
                return a
            },
            vw: function() {
                return u
            }
        });
        let i = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , r = i("deg")
          , s = i("%")
          , o = i("px")
          , a = i("vh")
          , u = i("vw")
          , l = {
            ...s,
            parse: t => s.parse(t) / 100,
            transform: t => s.transform(100 * t)
        }
    },
    20363: function(t, e, n) {
        n.d(e, {
            l: function() {
                return i
            }
        });
        let i = t => e => e.test(t)
    },
    22442: function(t, e, n) {
        n.d(e, {
            T: function() {
                return o
            }
        });
        var i = n(65050)
          , r = n(59290)
          , s = n(72361);
        function o(t, e) {
            let n = (0,
            s.A)(t);
            return n !== r.h && (n = i.P),
            n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        }
    },
    87576: function(t, e, n) {
        n.d(e, {
            c: function() {
                return u
            }
        });
        var i = n(7537)
          , r = n(65050)
          , s = n(71272)
          , o = n(20363);
        let a = [...s.$, i.$, r.P]
          , u = t => a.find((0,
        o.l)(t))
    },
    3855: function(t, e, n) {
        n.d(e, {
            K: function() {
                return i
            }
        });
        let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
    },
    95297: function(t, e, n) {
        n.d(e, {
            Q: function() {
                return i
            }
        });
        let i = (t, e) => e && "number" == typeof t ? e.transform(t) : t
    },
    51224: function(t, e, n) {
        n.d(e, {
            N: function() {
                return i
            }
        });
        let i = t => Math.round(1e5 * t) / 1e5
    },
    87493: function(t, e, n) {
        n.d(e, {
            i: function() {
                return i
            }
        });
        let i = t => !!(t && t.getVelocity)
    },
    98425: function(t, e, n) {
        function i(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function r(t, e) {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        function s([...t], e, n) {
            let i = e < 0 ? t.length + e : e;
            if (i >= 0 && i < t.length) {
                let i = n < 0 ? t.length + n : n
                  , [r] = t.splice(e, 1);
                t.splice(i, 0, r)
            }
            return t
        }
        n.d(e, {
            cl: function() {
                return r
            },
            uo: function() {
                return s
            },
            y4: function() {
                return i
            }
        })
    },
    21865: function(t, e, n) {
        n.d(e, {
            u: function() {
                return i
            }
        });
        let i = (t, e, n) => n > e ? e : n < t ? t : n
    },
    43273: function(t, e, n) {
        n.d(e, {
            L: function() {
                return r
            }
        });
        var i = n(75567);
        let r = t => (t *= 2) < 1 ? .5 * (0,
        i.G2)(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
    },
    75567: function(t, e, n) {
        n.d(e, {
            CG: function() {
                return o
            },
            G2: function() {
                return a
            },
            XL: function() {
                return u
            }
        });
        var i = n(60068)
          , r = n(52333)
          , s = n(79015);
        let o = (0,
        i._)(.33, 1.53, .69, .99)
          , a = (0,
        s.M)(o)
          , u = (0,
        r.o)(a)
    },
    52927: function(t, e, n) {
        n.d(e, {
            Bn: function() {
                return o
            },
            X7: function() {
                return a
            },
            Z7: function() {
                return s
            }
        });
        var i = n(52333)
          , r = n(79015);
        let s = t => 1 - Math.sin(Math.acos(t))
          , o = (0,
        r.M)(s)
          , a = (0,
        i.o)(s)
    },
    60068: function(t, e, n) {
        n.d(e, {
            _: function() {
                return s
            }
        });
        var i = n(56277);
        let r = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        function s(t, e, n, s) {
            if (t === e && n === s)
                return i.Z;
            let o = e => (function(t, e, n, i, s) {
                let o, a;
                let u = 0;
                do
                    (o = r(a = e + (n - e) / 2, i, s) - t) > 0 ? n = a : e = a;
                while (Math.abs(o) > 1e-7 && ++u < 12);
                return a
            }
            )(e, 0, 1, t, n);
            return t => 0 === t || 1 === t ? t : r(o(t), e, s)
        }
    },
    94943: function(t, e, n) {
        n.d(e, {
            Vv: function() {
                return s
            },
            YQ: function() {
                return r
            },
            mZ: function() {
                return o
            }
        });
        var i = n(60068);
        let r = (0,
        i._)(.42, 0, 1, 1)
          , s = (0,
        i._)(0, 0, .58, 1)
          , o = (0,
        i._)(.42, 0, .58, 1)
    },
    52333: function(t, e, n) {
        n.d(e, {
            o: function() {
                return i
            }
        });
        let i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    79015: function(t, e, n) {
        n.d(e, {
            M: function() {
                return i
            }
        });
        let i = t => e => 1 - t(1 - e)
    },
    53857: function(t, e, n) {
        n.d(e, {
            q: function() {
                return i
            }
        });
        let i = t => Array.isArray(t) && "number" == typeof t[0]
    },
    15331: function(t, e, n) {
        n.d(e, {
            N: function() {
                return i
            }
        });
        let i = t => Array.isArray(t) && "number" != typeof t[0]
    },
    48934: function(t, e, n) {
        n.d(e, {
            R: function() {
                return f
            }
        });
        var i = n(62035)
          , r = n(56277)
          , s = n(43273)
          , o = n(75567)
          , a = n(52927)
          , u = n(60068)
          , l = n(94943)
          , h = n(53857);
        let c = {
            linear: r.Z,
            easeIn: l.YQ,
            easeInOut: l.mZ,
            easeOut: l.Vv,
            circIn: a.Z7,
            circInOut: a.X7,
            circOut: a.Bn,
            backIn: o.G2,
            backInOut: o.XL,
            backOut: o.CG,
            anticipate: s.L
        }
          , d = t => "string" == typeof t
          , f = t => {
            if ((0,
            h.q)(t)) {
                (0,
                i.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,n,r,s] = t;
                return (0,
                u._)(e, n, r, s)
            }
            return d(t) ? ((0,
            i.k)(void 0 !== c[t], `Invalid easing type '${t}'`),
            c[t]) : t
        }
    },
    62035: function(t, e, n) {
        n.d(e, {
            K: function() {
                return i
            },
            k: function() {
                return r
            }
        });
        let i = () => {}
          , r = () => {}
    },
    21457: function(t, e, n) {
        n.d(e, {
            c: function() {
                return i
            }
        });
        let i = {}
    },
    51141: function(t, e, n) {
        n.d(e, {
            P: function() {
                return i
            }
        });
        let i = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
    },
    41464: function(t, e, n) {
        n.d(e, {
            K: function() {
                return i
            }
        });
        function i(t) {
            return "object" == typeof t && null !== t
        }
    },
    82476: function(t, e, n) {
        n.d(e, {
            W: function() {
                return i
            }
        });
        let i = t => /^0[^.\s]+$/u.test(t)
    },
    90107: function(t, e, n) {
        n.d(e, {
            X: function() {
                return i
            }
        });
        function i(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
    },
    56277: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return i
            }
        });
        let i = t => t
    },
    24750: function(t, e, n) {
        n.d(e, {
            z: function() {
                return r
            }
        });
        let i = (t, e) => n => e(t(n))
          , r = (...t) => t.reduce(i)
    },
    81645: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return i
            }
        });
        let i = (t, e, n) => {
            let i = e - t;
            return 0 === i ? 1 : (n - t) / i
        }
    },
    94513: function(t, e, n) {
        n.d(e, {
            L: function() {
                return r
            }
        });
        var i = n(98425);
        class r {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                i.y4)(this.subscriptions, t),
                () => (0,
                i.cl)(this.subscriptions, t)
            }
            notify(t, e, n) {
                let i = this.subscriptions.length;
                if (i) {
                    if (1 === i)
                        this.subscriptions[0](t, e, n);
                    else
                        for (let r = 0; r < i; r++) {
                            let i = this.subscriptions[r];
                            i && i(t, e, n)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    29711: function(t, e, n) {
        n.d(e, {
            X: function() {
                return r
            },
            w: function() {
                return i
            }
        });
        let i = t => 1e3 * t
          , r = t => t / 1e3
    },
    88294: function(t, e, n) {
        n.d(e, {
            R: function() {
                return i
            }
        });
        function i(t, e) {
            return e ? 1e3 / e * t : 0
        }
    }
}]);
