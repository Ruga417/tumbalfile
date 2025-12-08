var sh = t=>{
    throw TypeError(t)
}
;
var _l = (t,e,r)=>e.has(t) || sh("Cannot " + r);
var T = (t,e,r)=>(_l(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , te = (t,e,r)=>e.has(t) ? sh("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , H = (t,e,r,n)=>(_l(t, e, "write to private field"),
n ? n.call(t, r) : e.set(t, r),
r)
  , Ne = (t,e,r)=>(_l(t, e, "access private method"),
r);
var oo = (t,e,r,n)=>({
    set _(s) {
        H(t, e, s, r)
    },
    get _() {
        return T(t, e, n)
    }
});
function Lp(t, e) {
    for (var r = 0; r < e.length; r++) {
        const n = e[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const s in n)
                if (s !== "default" && !(s in t)) {
                    const i = Object.getOwnPropertyDescriptor(n, s);
                    i && Object.defineProperty(t, s, i.get ? i : {
                        enumerable: !0,
                        get: ()=>n[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s=>{
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = r(s);
        fetch(s.href, i)
    }
}
)();
function Up(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function Wy(t) {
    if (t.__esModule)
        return t;
    var e = t.default;
    if (typeof e == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        r.prototype = e.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(t).forEach(function(n) {
        var s = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(r, n, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }),
    r
}
var Dp = {
    exports: {}
}
  , Ma = {}
  , Mp = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi = Symbol.for("react.element")
  , Hy = Symbol.for("react.portal")
  , qy = Symbol.for("react.fragment")
  , Ky = Symbol.for("react.strict_mode")
  , Gy = Symbol.for("react.profiler")
  , Qy = Symbol.for("react.provider")
  , Jy = Symbol.for("react.context")
  , Yy = Symbol.for("react.forward_ref")
  , Xy = Symbol.for("react.suspense")
  , Zy = Symbol.for("react.memo")
  , ew = Symbol.for("react.lazy")
  , ih = Symbol.iterator;
function tw(t) {
    return t === null || typeof t != "object" ? null : (t = ih && t[ih] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Fp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Bp = Object.assign
  , zp = {};
function Us(t, e, r) {
    this.props = t,
    this.context = e,
    this.refs = zp,
    this.updater = r || Fp
}
Us.prototype.isReactComponent = {};
Us.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Us.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Vp() {}
Vp.prototype = Us.prototype;
function jc(t, e, r) {
    this.props = t,
    this.context = e,
    this.refs = zp,
    this.updater = r || Fp
}
var Ac = jc.prototype = new Vp;
Ac.constructor = jc;
Bp(Ac, Us.prototype);
Ac.isPureReactComponent = !0;
var oh = Array.isArray
  , Wp = Object.prototype.hasOwnProperty
  , Nc = {
    current: null
}
  , Hp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function qp(t, e, r) {
    var n, s = {}, i = null, o = null;
    if (e != null)
        for (n in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e)
            Wp.call(e, n) && !Hp.hasOwnProperty(n) && (s[n] = e[n]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = r;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (t && t.defaultProps)
        for (n in a = t.defaultProps,
        a)
            s[n] === void 0 && (s[n] = a[n]);
    return {
        $$typeof: Gi,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: Nc.current
    }
}
function rw(t, e) {
    return {
        $$typeof: Gi,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function Ic(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Gi
}
function nw(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(r) {
        return e[r]
    })
}
var ah = /\/+/g;
function xl(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? nw("" + t.key) : e.toString(36)
}
function Bo(t, e, r, n, s) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Gi:
            case Hy:
                o = !0
            }
        }
    if (o)
        return o = t,
        s = s(o),
        t = n === "" ? "." + xl(o, 0) : n,
        oh(s) ? (r = "",
        t != null && (r = t.replace(ah, "$&/") + "/"),
        Bo(s, e, r, "", function(u) {
            return u
        })) : s != null && (Ic(s) && (s = rw(s, r + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(ah, "$&/") + "/") + t)),
        e.push(s)),
        1;
    if (o = 0,
    n = n === "" ? "." : n + ":",
    oh(t))
        for (var a = 0; a < t.length; a++) {
            i = t[a];
            var l = n + xl(i, a);
            o += Bo(i, e, r, l, s)
        }
    else if (l = tw(t),
    typeof l == "function")
        for (t = l.call(t),
        a = 0; !(i = t.next()).done; )
            i = i.value,
            l = n + xl(i, a++),
            o += Bo(i, e, r, l, s);
    else if (i === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ao(t, e, r) {
    if (t == null)
        return t;
    var n = []
      , s = 0;
    return Bo(t, n, "", "", function(i) {
        return e.call(r, i, s++)
    }),
    n
}
function sw(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(r) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = r)
        }, function(r) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = r)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var We = {
    current: null
}
  , zo = {
    transition: null
}
  , iw = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: zo,
    ReactCurrentOwner: Nc
};
function Kp() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: ao,
    forEach: function(t, e, r) {
        ao(t, function() {
            e.apply(this, arguments)
        }, r)
    },
    count: function(t) {
        var e = 0;
        return ao(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return ao(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Ic(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
Y.Component = Us;
Y.Fragment = qy;
Y.Profiler = Gy;
Y.PureComponent = jc;
Y.StrictMode = Ky;
Y.Suspense = Xy;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iw;
Y.act = Kp;
Y.cloneElement = function(t, e, r) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var n = Bp({}, t.props)
      , s = t.key
      , i = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (i = e.ref,
        o = Nc.current),
        e.key !== void 0 && (s = "" + e.key),
        t.type && t.type.defaultProps)
            var a = t.type.defaultProps;
        for (l in e)
            Wp.call(e, l) && !Hp.hasOwnProperty(l) && (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        n.children = a
    }
    return {
        $$typeof: Gi,
        type: t.type,
        key: s,
        ref: i,
        props: n,
        _owner: o
    }
}
;
Y.createContext = function(t) {
    return t = {
        $$typeof: Jy,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: Qy,
        _context: t
    },
    t.Consumer = t
}
;
Y.createElement = qp;
Y.createFactory = function(t) {
    var e = qp.bind(null, t);
    return e.type = t,
    e
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(t) {
    return {
        $$typeof: Yy,
        render: t
    }
}
;
Y.isValidElement = Ic;
Y.lazy = function(t) {
    return {
        $$typeof: ew,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: sw
    }
}
;
Y.memo = function(t, e) {
    return {
        $$typeof: Zy,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
Y.startTransition = function(t) {
    var e = zo.transition;
    zo.transition = {};
    try {
        t()
    } finally {
        zo.transition = e
    }
}
;
Y.unstable_act = Kp;
Y.useCallback = function(t, e) {
    return We.current.useCallback(t, e)
}
;
Y.useContext = function(t) {
    return We.current.useContext(t)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(t) {
    return We.current.useDeferredValue(t)
}
;
Y.useEffect = function(t, e) {
    return We.current.useEffect(t, e)
}
;
Y.useId = function() {
    return We.current.useId()
}
;
Y.useImperativeHandle = function(t, e, r) {
    return We.current.useImperativeHandle(t, e, r)
}
;
Y.useInsertionEffect = function(t, e) {
    return We.current.useInsertionEffect(t, e)
}
;
Y.useLayoutEffect = function(t, e) {
    return We.current.useLayoutEffect(t, e)
}
;
Y.useMemo = function(t, e) {
    return We.current.useMemo(t, e)
}
;
Y.useReducer = function(t, e, r) {
    return We.current.useReducer(t, e, r)
}
;
Y.useRef = function(t) {
    return We.current.useRef(t)
}
;
Y.useState = function(t) {
    return We.current.useState(t)
}
;
Y.useSyncExternalStore = function(t, e, r) {
    return We.current.useSyncExternalStore(t, e, r)
}
;
Y.useTransition = function() {
    return We.current.useTransition()
}
;
Y.version = "18.3.1";
Mp.exports = Y;
var b = Mp.exports;
const A = Up(b)
  , Gp = Lp({
    __proto__: null,
    default: A
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ow = b
  , aw = Symbol.for("react.element")
  , lw = Symbol.for("react.fragment")
  , uw = Object.prototype.hasOwnProperty
  , cw = ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , dw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Qp(t, e, r) {
    var n, s = {}, i = null, o = null;
    r !== void 0 && (i = "" + r),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (n in e)
        uw.call(e, n) && !dw.hasOwnProperty(n) && (s[n] = e[n]);
    if (t && t.defaultProps)
        for (n in e = t.defaultProps,
        e)
            s[n] === void 0 && (s[n] = e[n]);
    return {
        $$typeof: aw,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: cw.current
    }
}
Ma.Fragment = lw;
Ma.jsx = Qp;
Ma.jsxs = Qp;
Dp.exports = Ma;
var x = Dp.exports
  , Jp = {
    exports: {}
}
  , ut = {}
  , Yp = {
    exports: {}
}
  , Xp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(C, O) {
        var $ = C.length;
        C.push(O);
        e: for (; 0 < $; ) {
            var K = $ - 1 >>> 1
              , F = C[K];
            if (0 < s(F, O))
                C[K] = O,
                C[$] = F,
                $ = K;
            else
                break e
        }
    }
    function r(C) {
        return C.length === 0 ? null : C[0]
    }
    function n(C) {
        if (C.length === 0)
            return null;
        var O = C[0]
          , $ = C.pop();
        if ($ !== O) {
            C[0] = $;
            e: for (var K = 0, F = C.length, J = F >>> 1; K < J; ) {
                var Z = 2 * (K + 1) - 1
                  , we = C[Z]
                  , Ae = Z + 1
                  , re = C[Ae];
                if (0 > s(we, $))
                    Ae < F && 0 > s(re, we) ? (C[K] = re,
                    C[Ae] = $,
                    K = Ae) : (C[K] = we,
                    C[Z] = $,
                    K = Z);
                else if (Ae < F && 0 > s(re, $))
                    C[K] = re,
                    C[Ae] = $,
                    K = Ae;
                else
                    break e
            }
        }
        return O
    }
    function s(C, O) {
        var $ = C.sortIndex - O.sortIndex;
        return $ !== 0 ? $ : C.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        t.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        t.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , h = null
      , f = 3
      , d = !1
      , y = !1
      , m = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(C) {
        for (var O = r(u); O !== null; ) {
            if (O.callback === null)
                n(u);
            else if (O.startTime <= C)
                n(u),
                O.sortIndex = O.expirationTime,
                e(l, O);
            else
                break;
            O = r(u)
        }
    }
    function _(C) {
        if (m = !1,
        v(C),
        !y)
            if (r(l) !== null)
                y = !0,
                V(E);
            else {
                var O = r(u);
                O !== null && q(_, O.startTime - C)
            }
    }
    function E(C, O) {
        y = !1,
        m && (m = !1,
        g(P),
        P = -1),
        d = !0;
        var $ = f;
        try {
            for (v(O),
            h = r(l); h !== null && (!(h.expirationTime > O) || C && !z()); ) {
                var K = h.callback;
                if (typeof K == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var F = K(h.expirationTime <= O);
                    O = t.unstable_now(),
                    typeof F == "function" ? h.callback = F : h === r(l) && n(l),
                    v(O)
                } else
                    n(l);
                h = r(l)
            }
            if (h !== null)
                var J = !0;
            else {
                var Z = r(u);
                Z !== null && q(_, Z.startTime - O),
                J = !1
            }
            return J
        } finally {
            h = null,
            f = $,
            d = !1
        }
    }
    var S = !1
      , k = null
      , P = -1
      , j = 5
      , N = -1;
    function z() {
        return !(t.unstable_now() - N < j)
    }
    function D() {
        if (k !== null) {
            var C = t.unstable_now();
            N = C;
            var O = !0;
            try {
                O = k(!0, C)
            } finally {
                O ? Q() : (S = !1,
                k = null)
            }
        } else
            S = !1
    }
    var Q;
    if (typeof p == "function")
        Q = function() {
            p(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , X = I.port2;
        I.port1.onmessage = D,
        Q = function() {
            X.postMessage(null)
        }
    } else
        Q = function() {
            w(D, 0)
        }
        ;
    function V(C) {
        k = C,
        S || (S = !0,
        Q())
    }
    function q(C, O) {
        P = w(function() {
            C(t.unstable_now())
        }, O)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        y || d || (y = !0,
        V(E))
    }
    ,
    t.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    t.unstable_next = function(C) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = f
        }
        var $ = f;
        f = O;
        try {
            return C()
        } finally {
            f = $
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(C, O) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var $ = f;
        f = C;
        try {
            return O()
        } finally {
            f = $
        }
    }
    ,
    t.unstable_scheduleCallback = function(C, O, $) {
        var K = t.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
        $ = typeof $ == "number" && 0 < $ ? K + $ : K) : $ = K,
        C) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = $ + F,
        C = {
            id: c++,
            callback: O,
            priorityLevel: C,
            startTime: $,
            expirationTime: F,
            sortIndex: -1
        },
        $ > K ? (C.sortIndex = $,
        e(u, C),
        r(l) === null && C === r(u) && (m ? (g(P),
        P = -1) : m = !0,
        q(_, $ - K))) : (C.sortIndex = F,
        e(l, C),
        y || d || (y = !0,
        V(E))),
        C
    }
    ,
    t.unstable_shouldYield = z,
    t.unstable_wrapCallback = function(C) {
        var O = f;
        return function() {
            var $ = f;
            f = O;
            try {
                return C.apply(this, arguments)
            } finally {
                f = $
            }
        }
    }
}
)(Xp);
Yp.exports = Xp;
var hw = Yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fw = b
  , lt = hw;
function R(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++)
        e += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Zp = new Set
  , _i = {};
function Nn(t, e) {
    Cs(t, e),
    Cs(t + "Capture", e)
}
function Cs(t, e) {
    for (_i[t] = e,
    t = 0; t < e.length; t++)
        Zp.add(e[t])
}
var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , cu = Object.prototype.hasOwnProperty
  , pw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , lh = {}
  , uh = {};
function mw(t) {
    return cu.call(uh, t) ? !0 : cu.call(lh, t) ? !1 : pw.test(t) ? uh[t] = !0 : (lh[t] = !0,
    !1)
}
function gw(t, e, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function vw(t, e, r, n) {
    if (e === null || typeof e > "u" || gw(t, e, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function He(t, e, r, n, s, i, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = n,
    this.attributeNamespace = s,
    this.mustUseProperty = r,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    je[t] = new He(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    je[e] = new He(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    je[t] = new He(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    je[t] = new He(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    je[t] = new He(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    je[t] = new He(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    je[t] = new He(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    je[t] = new He(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    je[t] = new He(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var $c = /[\-:]([a-z])/g;
function Lc(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace($c, Lc);
    je[e] = new He(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace($c, Lc);
    je[e] = new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace($c, Lc);
    je[e] = new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    je[t] = new He(t,1,!1,t.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    je[t] = new He(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function Uc(t, e, r, n) {
    var s = je.hasOwnProperty(e) ? je[e] : null;
    (s !== null ? s.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (vw(e, r, s, n) && (r = null),
    n || s === null ? mw(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r)) : s.mustUseProperty ? t[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (e = s.attributeName,
    n = s.attributeNamespace,
    r === null ? t.removeAttribute(e) : (s = s.type,
    r = s === 3 || s === 4 && r === !0 ? "" : "" + r,
    n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))))
}
var fr = fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , lo = Symbol.for("react.element")
  , Jn = Symbol.for("react.portal")
  , Yn = Symbol.for("react.fragment")
  , Dc = Symbol.for("react.strict_mode")
  , du = Symbol.for("react.profiler")
  , em = Symbol.for("react.provider")
  , tm = Symbol.for("react.context")
  , Mc = Symbol.for("react.forward_ref")
  , hu = Symbol.for("react.suspense")
  , fu = Symbol.for("react.suspense_list")
  , Fc = Symbol.for("react.memo")
  , kr = Symbol.for("react.lazy")
  , rm = Symbol.for("react.offscreen")
  , ch = Symbol.iterator;
function Gs(t) {
    return t === null || typeof t != "object" ? null : (t = ch && t[ch] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var me = Object.assign, El;
function si(t) {
    if (El === void 0)
        try {
            throw Error()
        } catch (r) {
            var e = r.stack.trim().match(/\n( *(at )?)/);
            El = e && e[1] || ""
        }
    return `
` + El + t
}
var Sl = !1;
function kl(t, e) {
    if (!t || Sl)
        return "";
    Sl = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    n = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            t()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = n.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Sl = !1,
        Error.prepareStackTrace = r
    }
    return (t = t ? t.displayName || t.name : "") ? si(t) : ""
}
function yw(t) {
    switch (t.tag) {
    case 5:
        return si(t.type);
    case 16:
        return si("Lazy");
    case 13:
        return si("Suspense");
    case 19:
        return si("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = kl(t.type, !1),
        t;
    case 11:
        return t = kl(t.type.render, !1),
        t;
    case 1:
        return t = kl(t.type, !0),
        t;
    default:
        return ""
    }
}
function pu(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case Yn:
        return "Fragment";
    case Jn:
        return "Portal";
    case du:
        return "Profiler";
    case Dc:
        return "StrictMode";
    case hu:
        return "Suspense";
    case fu:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case tm:
            return (t.displayName || "Context") + ".Consumer";
        case em:
            return (t._context.displayName || "Context") + ".Provider";
        case Mc:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Fc:
            return e = t.displayName || null,
            e !== null ? e : pu(t.type) || "Memo";
        case kr:
            e = t._payload,
            t = t._init;
            try {
                return pu(t(e))
            } catch {}
        }
    return null
}
function ww(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return pu(e);
    case 8:
        return e === Dc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function Kr(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function nm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function bw(t) {
    var e = nm(t) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , n = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var s = r.get
          , i = r.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                n = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(o) {
                n = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function uo(t) {
    t._valueTracker || (t._valueTracker = bw(t))
}
function sm(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var r = e.getValue()
      , n = "";
    return t && (n = nm(t) ? t.checked ? "true" : "false" : t.value),
    t = n,
    t !== r ? (e.setValue(t),
    !0) : !1
}
function ra(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function mu(t, e) {
    var r = e.checked;
    return me({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? t._wrapperState.initialChecked
    })
}
function dh(t, e) {
    var r = e.defaultValue == null ? "" : e.defaultValue
      , n = e.checked != null ? e.checked : e.defaultChecked;
    r = Kr(e.value != null ? e.value : r),
    t._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function im(t, e) {
    e = e.checked,
    e != null && Uc(t, "checked", e, !1)
}
function gu(t, e) {
    im(t, e);
    var r = Kr(e.value)
      , n = e.type;
    if (r != null)
        n === "number" ? (r === 0 && t.value === "" || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
    else if (n === "submit" || n === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? vu(t, e.type, r) : e.hasOwnProperty("defaultValue") && vu(t, e.type, Kr(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function hh(t, e, r) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var n = e.type;
        if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        r || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    r = t.name,
    r !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    r !== "" && (t.name = r)
}
function vu(t, e, r) {
    (e !== "number" || ra(t.ownerDocument) !== t) && (r == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + r && (t.defaultValue = "" + r))
}
var ii = Array.isArray;
function ls(t, e, r, n) {
    if (t = t.options,
    e) {
        e = {};
        for (var s = 0; s < r.length; s++)
            e["$" + r[s]] = !0;
        for (r = 0; r < t.length; r++)
            s = e.hasOwnProperty("$" + t[r].value),
            t[r].selected !== s && (t[r].selected = s),
            s && n && (t[r].defaultSelected = !0)
    } else {
        for (r = "" + Kr(r),
        e = null,
        s = 0; s < t.length; s++) {
            if (t[s].value === r) {
                t[s].selected = !0,
                n && (t[s].defaultSelected = !0);
                return
            }
            e !== null || t[s].disabled || (e = t[s])
        }
        e !== null && (e.selected = !0)
    }
}
function yu(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return me({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function fh(t, e) {
    var r = e.value;
    if (r == null) {
        if (r = e.children,
        e = e.defaultValue,
        r != null) {
            if (e != null)
                throw Error(R(92));
            if (ii(r)) {
                if (1 < r.length)
                    throw Error(R(93));
                r = r[0]
            }
            e = r
        }
        e == null && (e = ""),
        r = e
    }
    t._wrapperState = {
        initialValue: Kr(r)
    }
}
function om(t, e) {
    var r = Kr(e.value)
      , n = Kr(e.defaultValue);
    r != null && (r = "" + r,
    r !== t.value && (t.value = r),
    e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)),
    n != null && (t.defaultValue = "" + n)
}
function ph(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function am(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function wu(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? am(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var co, lm = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, r, n, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, r, n, s)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (co = co || document.createElement("div"),
        co.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = co.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function xi(t, e) {
    if (e) {
        var r = t.firstChild;
        if (r && r === t.lastChild && r.nodeType === 3) {
            r.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , _w = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function(t) {
    _w.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        ui[e] = ui[t]
    })
});
function um(t, e, r) {
    return e == null || typeof e == "boolean" || e === "" ? "" : r || typeof e != "number" || e === 0 || ui.hasOwnProperty(t) && ui[t] ? ("" + e).trim() : e + "px"
}
function cm(t, e) {
    t = t.style;
    for (var r in e)
        if (e.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , s = um(r, e[r], n);
            r === "float" && (r = "cssFloat"),
            n ? t.setProperty(r, s) : t[r] = s
        }
}
var xw = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function bu(t, e) {
    if (e) {
        if (xw[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(R(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(R(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(R(62))
    }
}
function _u(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var xu = null;
function Bc(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Eu = null
  , us = null
  , cs = null;
function mh(t) {
    if (t = Yi(t)) {
        if (typeof Eu != "function")
            throw Error(R(280));
        var e = t.stateNode;
        e && (e = Wa(e),
        Eu(t.stateNode, t.type, e))
    }
}
function dm(t) {
    us ? cs ? cs.push(t) : cs = [t] : us = t
}
function hm() {
    if (us) {
        var t = us
          , e = cs;
        if (cs = us = null,
        mh(t),
        e)
            for (t = 0; t < e.length; t++)
                mh(e[t])
    }
}
function fm(t, e) {
    return t(e)
}
function pm() {}
var Tl = !1;
function mm(t, e, r) {
    if (Tl)
        return t(e, r);
    Tl = !0;
    try {
        return fm(t, e, r)
    } finally {
        Tl = !1,
        (us !== null || cs !== null) && (pm(),
        hm())
    }
}
function Ei(t, e) {
    var r = t.stateNode;
    if (r === null)
        return null;
    var n = Wa(r);
    if (n === null)
        return null;
    r = n[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (t = t.type,
        n = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !n;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (r && typeof r != "function")
        throw Error(R(231, e, typeof r));
    return r
}
var Su = !1;
if (ar)
    try {
        var Qs = {};
        Object.defineProperty(Qs, "passive", {
            get: function() {
                Su = !0
            }
        }),
        window.addEventListener("test", Qs, Qs),
        window.removeEventListener("test", Qs, Qs)
    } catch {
        Su = !1
    }
function Ew(t, e, r, n, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(r, u)
    } catch (c) {
        this.onError(c)
    }
}
var ci = !1
  , na = null
  , sa = !1
  , ku = null
  , Sw = {
    onError: function(t) {
        ci = !0,
        na = t
    }
};
function kw(t, e, r, n, s, i, o, a, l) {
    ci = !1,
    na = null,
    Ew.apply(Sw, arguments)
}
function Tw(t, e, r, n, s, i, o, a, l) {
    if (kw.apply(this, arguments),
    ci) {
        if (ci) {
            var u = na;
            ci = !1,
            na = null
        } else
            throw Error(R(198));
        sa || (sa = !0,
        ku = u)
    }
}
function In(t) {
    var e = t
      , r = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (r = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? r : null
}
function gm(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function gh(t) {
    if (In(t) !== t)
        throw Error(R(188))
}
function Cw(t) {
    var e = t.alternate;
    if (!e) {
        if (e = In(t),
        e === null)
            throw Error(R(188));
        return e !== t ? null : t
    }
    for (var r = t, n = e; ; ) {
        var s = r.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (n = s.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === r)
                    return gh(s),
                    t;
                if (i === n)
                    return gh(s),
                    e;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (r.return !== n.return)
            r = s,
            n = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(R(189))
            }
        }
        if (r.alternate !== n)
            throw Error(R(190))
    }
    if (r.tag !== 3)
        throw Error(R(188));
    return r.stateNode.current === r ? t : e
}
function vm(t) {
    return t = Cw(t),
    t !== null ? ym(t) : null
}
function ym(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = ym(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var wm = lt.unstable_scheduleCallback
  , vh = lt.unstable_cancelCallback
  , Pw = lt.unstable_shouldYield
  , Ow = lt.unstable_requestPaint
  , ye = lt.unstable_now
  , Rw = lt.unstable_getCurrentPriorityLevel
  , zc = lt.unstable_ImmediatePriority
  , bm = lt.unstable_UserBlockingPriority
  , ia = lt.unstable_NormalPriority
  , jw = lt.unstable_LowPriority
  , _m = lt.unstable_IdlePriority
  , Fa = null
  , Kt = null;
function Aw(t) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
            Kt.onCommitFiberRoot(Fa, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : $w
  , Nw = Math.log
  , Iw = Math.LN2;
function $w(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (Nw(t) / Iw | 0) | 0
}
var ho = 64
  , fo = 4194304;
function oi(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function oa(t, e) {
    var r = t.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , s = t.suspendedLanes
      , i = t.pingedLanes
      , o = r & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? n = oi(a) : (i &= o,
        i !== 0 && (n = oi(i)))
    } else
        o = r & ~s,
        o !== 0 ? n = oi(o) : i !== 0 && (n = oi(i));
    if (n === 0)
        return 0;
    if (e !== 0 && e !== n && !(e & s) && (s = n & -n,
    i = e & -e,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return e;
    if (n & 4 && (n |= r & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= n; 0 < e; )
            r = 31 - Nt(e),
            s = 1 << r,
            n |= t[r],
            e &= ~s;
    return n
}
function Lw(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Uw(t, e) {
    for (var r = t.suspendedLanes, n = t.pingedLanes, s = t.expirationTimes, i = t.pendingLanes; 0 < i; ) {
        var o = 31 - Nt(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & r) || a & n) && (s[o] = Lw(a, e)) : l <= e && (t.expiredLanes |= a),
        i &= ~a
    }
}
function Tu(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function xm() {
    var t = ho;
    return ho <<= 1,
    !(ho & 4194240) && (ho = 64),
    t
}
function Cl(t) {
    for (var e = [], r = 0; 31 > r; r++)
        e.push(t);
    return e
}
function Qi(t, e, r) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - Nt(e),
    t[e] = r
}
function Dw(t, e) {
    var r = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var n = t.eventTimes;
    for (t = t.expirationTimes; 0 < r; ) {
        var s = 31 - Nt(r)
          , i = 1 << s;
        e[s] = 0,
        n[s] = -1,
        t[s] = -1,
        r &= ~i
    }
}
function Vc(t, e) {
    var r = t.entangledLanes |= e;
    for (t = t.entanglements; r; ) {
        var n = 31 - Nt(r)
          , s = 1 << n;
        s & e | t[n] & e && (t[n] |= e),
        r &= ~s
    }
}
var ne = 0;
function Em(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Sm, Wc, km, Tm, Cm, Cu = !1, po = [], Mr = null, Fr = null, Br = null, Si = new Map, ki = new Map, Cr = [], Mw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function yh(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Mr = null;
        break;
    case "dragenter":
    case "dragleave":
        Fr = null;
        break;
    case "mouseover":
    case "mouseout":
        Br = null;
        break;
    case "pointerover":
    case "pointerout":
        Si.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ki.delete(e.pointerId)
    }
}
function Js(t, e, r, n, s, i) {
    return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s]
    },
    e !== null && (e = Yi(e),
    e !== null && Wc(e)),
    t) : (t.eventSystemFlags |= n,
    e = t.targetContainers,
    s !== null && e.indexOf(s) === -1 && e.push(s),
    t)
}
function Fw(t, e, r, n, s) {
    switch (e) {
    case "focusin":
        return Mr = Js(Mr, t, e, r, n, s),
        !0;
    case "dragenter":
        return Fr = Js(Fr, t, e, r, n, s),
        !0;
    case "mouseover":
        return Br = Js(Br, t, e, r, n, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Si.set(i, Js(Si.get(i) || null, t, e, r, n, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        ki.set(i, Js(ki.get(i) || null, t, e, r, n, s)),
        !0
    }
    return !1
}
function Pm(t) {
    var e = mn(t.target);
    if (e !== null) {
        var r = In(e);
        if (r !== null) {
            if (e = r.tag,
            e === 13) {
                if (e = gm(r),
                e !== null) {
                    t.blockedOn = e,
                    Cm(t.priority, function() {
                        km(r)
                    });
                    return
                }
            } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function Vo(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var r = Pu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (r === null) {
            r = t.nativeEvent;
            var n = new r.constructor(r.type,r);
            xu = n,
            r.target.dispatchEvent(n),
            xu = null
        } else
            return e = Yi(r),
            e !== null && Wc(e),
            t.blockedOn = r,
            !1;
        e.shift()
    }
    return !0
}
function wh(t, e, r) {
    Vo(t) && r.delete(e)
}
function Bw() {
    Cu = !1,
    Mr !== null && Vo(Mr) && (Mr = null),
    Fr !== null && Vo(Fr) && (Fr = null),
    Br !== null && Vo(Br) && (Br = null),
    Si.forEach(wh),
    ki.forEach(wh)
}
function Ys(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Cu || (Cu = !0,
    lt.unstable_scheduleCallback(lt.unstable_NormalPriority, Bw)))
}
function Ti(t) {
    function e(s) {
        return Ys(s, t)
    }
    if (0 < po.length) {
        Ys(po[0], t);
        for (var r = 1; r < po.length; r++) {
            var n = po[r];
            n.blockedOn === t && (n.blockedOn = null)
        }
    }
    for (Mr !== null && Ys(Mr, t),
    Fr !== null && Ys(Fr, t),
    Br !== null && Ys(Br, t),
    Si.forEach(e),
    ki.forEach(e),
    r = 0; r < Cr.length; r++)
        n = Cr[r],
        n.blockedOn === t && (n.blockedOn = null);
    for (; 0 < Cr.length && (r = Cr[0],
    r.blockedOn === null); )
        Pm(r),
        r.blockedOn === null && Cr.shift()
}
var ds = fr.ReactCurrentBatchConfig
  , aa = !0;
function zw(t, e, r, n) {
    var s = ne
      , i = ds.transition;
    ds.transition = null;
    try {
        ne = 1,
        Hc(t, e, r, n)
    } finally {
        ne = s,
        ds.transition = i
    }
}
function Vw(t, e, r, n) {
    var s = ne
      , i = ds.transition;
    ds.transition = null;
    try {
        ne = 4,
        Hc(t, e, r, n)
    } finally {
        ne = s,
        ds.transition = i
    }
}
function Hc(t, e, r, n) {
    if (aa) {
        var s = Pu(t, e, r, n);
        if (s === null)
            Ul(t, e, n, la, r),
            yh(t, n);
        else if (Fw(s, t, e, r, n))
            n.stopPropagation();
        else if (yh(t, n),
        e & 4 && -1 < Mw.indexOf(t)) {
            for (; s !== null; ) {
                var i = Yi(s);
                if (i !== null && Sm(i),
                i = Pu(t, e, r, n),
                i === null && Ul(t, e, n, la, r),
                i === s)
                    break;
                s = i
            }
            s !== null && n.stopPropagation()
        } else
            Ul(t, e, n, null, r)
    }
}
var la = null;
function Pu(t, e, r, n) {
    if (la = null,
    t = Bc(n),
    t = mn(t),
    t !== null)
        if (e = In(t),
        e === null)
            t = null;
        else if (r = e.tag,
        r === 13) {
            if (t = gm(e),
            t !== null)
                return t;
            t = null
        } else if (r === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return la = t,
    null
}
function Om(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Rw()) {
        case zc:
            return 1;
        case bm:
            return 4;
        case ia:
        case jw:
            return 16;
        case _m:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Lr = null
  , qc = null
  , Wo = null;
function Rm() {
    if (Wo)
        return Wo;
    var t, e = qc, r = e.length, n, s = "value"in Lr ? Lr.value : Lr.textContent, i = s.length;
    for (t = 0; t < r && e[t] === s[t]; t++)
        ;
    var o = r - t;
    for (n = 1; n <= o && e[r - n] === s[i - n]; n++)
        ;
    return Wo = s.slice(t, 1 < n ? 1 - n : void 0)
}
function Ho(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function mo() {
    return !0
}
function bh() {
    return !1
}
function ct(t) {
    function e(r, n, s, i, o) {
        this._reactName = r,
        this._targetInst = s,
        this.type = n,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in t)
            t.hasOwnProperty(a) && (r = t[a],
            this[a] = r ? r(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mo : bh,
        this.isPropagationStopped = bh,
        this
    }
    return me(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = mo)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = mo)
        },
        persist: function() {},
        isPersistent: mo
    }),
    e
}
var Ds = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Kc = ct(Ds), Ji = me({}, Ds, {
    view: 0,
    detail: 0
}), Ww = ct(Ji), Pl, Ol, Xs, Ba = me({}, Ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== Xs && (Xs && t.type === "mousemove" ? (Pl = t.screenX - Xs.screenX,
        Ol = t.screenY - Xs.screenY) : Ol = Pl = 0,
        Xs = t),
        Pl)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Ol
    }
}), _h = ct(Ba), Hw = me({}, Ba, {
    dataTransfer: 0
}), qw = ct(Hw), Kw = me({}, Ji, {
    relatedTarget: 0
}), Rl = ct(Kw), Gw = me({}, Ds, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Qw = ct(Gw), Jw = me({}, Ds, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), Yw = ct(Jw), Xw = me({}, Ds, {
    data: 0
}), xh = ct(Xw), Zw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, eb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, tb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function rb(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = tb[t]) ? !!e[t] : !1
}
function Gc() {
    return rb
}
var nb = me({}, Ji, {
    key: function(t) {
        if (t.key) {
            var e = Zw[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = Ho(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? eb[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gc,
    charCode: function(t) {
        return t.type === "keypress" ? Ho(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? Ho(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , sb = ct(nb)
  , ib = me({}, Ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Eh = ct(ib)
  , ob = me({}, Ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gc
})
  , ab = ct(ob)
  , lb = me({}, Ds, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ub = ct(lb)
  , cb = me({}, Ba, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , db = ct(cb)
  , hb = [9, 13, 27, 32]
  , Qc = ar && "CompositionEvent"in window
  , di = null;
ar && "documentMode"in document && (di = document.documentMode);
var fb = ar && "TextEvent"in window && !di
  , jm = ar && (!Qc || di && 8 < di && 11 >= di)
  , Sh = " "
  , kh = !1;
function Am(t, e) {
    switch (t) {
    case "keyup":
        return hb.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Nm(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var Xn = !1;
function pb(t, e) {
    switch (t) {
    case "compositionend":
        return Nm(e);
    case "keypress":
        return e.which !== 32 ? null : (kh = !0,
        Sh);
    case "textInput":
        return t = e.data,
        t === Sh && kh ? null : t;
    default:
        return null
    }
}
function mb(t, e) {
    if (Xn)
        return t === "compositionend" || !Qc && Am(t, e) ? (t = Rm(),
        Wo = qc = Lr = null,
        Xn = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return jm && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var gb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Th(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!gb[t.type] : e === "textarea"
}
function Im(t, e, r, n) {
    dm(n),
    e = ua(e, "onChange"),
    0 < e.length && (r = new Kc("onChange","change",null,r,n),
    t.push({
        event: r,
        listeners: e
    }))
}
var hi = null
  , Ci = null;
function vb(t) {
    Hm(t, 0)
}
function za(t) {
    var e = ts(t);
    if (sm(e))
        return t
}
function yb(t, e) {
    if (t === "change")
        return e
}
var $m = !1;
if (ar) {
    var jl;
    if (ar) {
        var Al = "oninput"in document;
        if (!Al) {
            var Ch = document.createElement("div");
            Ch.setAttribute("oninput", "return;"),
            Al = typeof Ch.oninput == "function"
        }
        jl = Al
    } else
        jl = !1;
    $m = jl && (!document.documentMode || 9 < document.documentMode)
}
function Ph() {
    hi && (hi.detachEvent("onpropertychange", Lm),
    Ci = hi = null)
}
function Lm(t) {
    if (t.propertyName === "value" && za(Ci)) {
        var e = [];
        Im(e, Ci, t, Bc(t)),
        mm(vb, e)
    }
}
function wb(t, e, r) {
    t === "focusin" ? (Ph(),
    hi = e,
    Ci = r,
    hi.attachEvent("onpropertychange", Lm)) : t === "focusout" && Ph()
}
function bb(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return za(Ci)
}
function _b(t, e) {
    if (t === "click")
        return za(e)
}
function xb(t, e) {
    if (t === "input" || t === "change")
        return za(e)
}
function Eb(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var $t = typeof Object.is == "function" ? Object.is : Eb;
function Pi(t, e) {
    if ($t(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var r = Object.keys(t)
      , n = Object.keys(e);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!cu.call(e, s) || !$t(t[s], e[s]))
            return !1
    }
    return !0
}
function Oh(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Rh(t, e) {
    var r = Oh(t);
    t = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = t + r.textContent.length,
            t <= e && n >= e)
                return {
                    node: r,
                    offset: e - t
                };
            t = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Oh(r)
    }
}
function Um(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Um(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Dm() {
    for (var t = window, e = ra(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var r = typeof e.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            t = e.contentWindow;
        else
            break;
        e = ra(t.document)
    }
    return e
}
function Jc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function Sb(t) {
    var e = Dm()
      , r = t.focusedElem
      , n = t.selectionRange;
    if (e !== r && r && r.ownerDocument && Um(r.ownerDocument.documentElement, r)) {
        if (n !== null && Jc(r)) {
            if (e = n.start,
            t = n.end,
            t === void 0 && (t = e),
            "selectionStart"in r)
                r.selectionStart = e,
                r.selectionEnd = Math.min(t, r.value.length);
            else if (t = (e = r.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var s = r.textContent.length
                  , i = Math.min(n.start, s);
                n = n.end === void 0 ? i : Math.min(n.end, s),
                !t.extend && i > n && (s = n,
                n = i,
                i = s),
                s = Rh(r, i);
                var o = Rh(r, n);
                s && o && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(s.node, s.offset),
                t.removeAllRanges(),
                i > n ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = r; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < e.length; r++)
            t = e[r],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var kb = ar && "documentMode"in document && 11 >= document.documentMode
  , Zn = null
  , Ou = null
  , fi = null
  , Ru = !1;
function jh(t, e, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ru || Zn == null || Zn !== ra(n) || (n = Zn,
    "selectionStart"in n && Jc(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    fi && Pi(fi, n) || (fi = n,
    n = ua(Ou, "onSelect"),
    0 < n.length && (e = new Kc("onSelect","select",null,e,r),
    t.push({
        event: e,
        listeners: n
    }),
    e.target = Zn)))
}
function go(t, e) {
    var r = {};
    return r[t.toLowerCase()] = e.toLowerCase(),
    r["Webkit" + t] = "webkit" + e,
    r["Moz" + t] = "moz" + e,
    r
}
var es = {
    animationend: go("Animation", "AnimationEnd"),
    animationiteration: go("Animation", "AnimationIteration"),
    animationstart: go("Animation", "AnimationStart"),
    transitionend: go("Transition", "TransitionEnd")
}
  , Nl = {}
  , Mm = {};
ar && (Mm = document.createElement("div").style,
"AnimationEvent"in window || (delete es.animationend.animation,
delete es.animationiteration.animation,
delete es.animationstart.animation),
"TransitionEvent"in window || delete es.transitionend.transition);
function Va(t) {
    if (Nl[t])
        return Nl[t];
    if (!es[t])
        return t;
    var e = es[t], r;
    for (r in e)
        if (e.hasOwnProperty(r) && r in Mm)
            return Nl[t] = e[r];
    return t
}
var Fm = Va("animationend")
  , Bm = Va("animationiteration")
  , zm = Va("animationstart")
  , Vm = Va("transitionend")
  , Wm = new Map
  , Ah = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zr(t, e) {
    Wm.set(t, e),
    Nn(e, [t])
}
for (var Il = 0; Il < Ah.length; Il++) {
    var $l = Ah[Il]
      , Tb = $l.toLowerCase()
      , Cb = $l[0].toUpperCase() + $l.slice(1);
    Zr(Tb, "on" + Cb)
}
Zr(Fm, "onAnimationEnd");
Zr(Bm, "onAnimationIteration");
Zr(zm, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(Vm, "onTransitionEnd");
Cs("onMouseEnter", ["mouseout", "mouseover"]);
Cs("onMouseLeave", ["mouseout", "mouseover"]);
Cs("onPointerEnter", ["pointerout", "pointerover"]);
Cs("onPointerLeave", ["pointerout", "pointerover"]);
Nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Pb = new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));
function Nh(t, e, r) {
    var n = t.type || "unknown-event";
    t.currentTarget = r,
    Tw(n, e, void 0, t),
    t.currentTarget = null
}
function Hm(t, e) {
    e = (e & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
        var n = t[r]
          , s = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (e)
                for (var o = n.length - 1; 0 <= o; o--) {
                    var a = n[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Nh(s, a, u),
                    i = l
                }
            else
                for (o = 0; o < n.length; o++) {
                    if (a = n[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Nh(s, a, u),
                    i = l
                }
        }
    }
    if (sa)
        throw t = ku,
        sa = !1,
        ku = null,
        t
}
function le(t, e) {
    var r = e[$u];
    r === void 0 && (r = e[$u] = new Set);
    var n = t + "__bubble";
    r.has(n) || (qm(e, t, 2, !1),
    r.add(n))
}
function Ll(t, e, r) {
    var n = 0;
    e && (n |= 4),
    qm(r, t, n, e)
}
var vo = "_reactListening" + Math.random().toString(36).slice(2);
function Oi(t) {
    if (!t[vo]) {
        t[vo] = !0,
        Zp.forEach(function(r) {
            r !== "selectionchange" && (Pb.has(r) || Ll(r, !1, t),
            Ll(r, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[vo] || (e[vo] = !0,
        Ll("selectionchange", !1, e))
    }
}
function qm(t, e, r, n) {
    switch (Om(e)) {
    case 1:
        var s = zw;
        break;
    case 4:
        s = Vw;
        break;
    default:
        s = Hc
    }
    r = s.bind(null, e, r, t),
    s = void 0,
    !Su || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
    n ? s !== void 0 ? t.addEventListener(e, r, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, r, !0) : s !== void 0 ? t.addEventListener(e, r, {
        passive: s
    }) : t.addEventListener(e, r, !1)
}
function Ul(t, e, r, n, s) {
    var i = n;
    if (!(e & 1) && !(e & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var o = n.tag;
            if (o === 3 || o === 4) {
                var a = n.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = n.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = mn(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        n = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            n = n.return
        }
    mm(function() {
        var u = i
          , c = Bc(r)
          , h = [];
        e: {
            var f = Wm.get(t);
            if (f !== void 0) {
                var d = Kc
                  , y = t;
                switch (t) {
                case "keypress":
                    if (Ho(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    d = sb;
                    break;
                case "focusin":
                    y = "focus",
                    d = Rl;
                    break;
                case "focusout":
                    y = "blur",
                    d = Rl;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = Rl;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = _h;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = qw;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = ab;
                    break;
                case Fm:
                case Bm:
                case zm:
                    d = Qw;
                    break;
                case Vm:
                    d = ub;
                    break;
                case "scroll":
                    d = Ww;
                    break;
                case "wheel":
                    d = db;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = Yw;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = Eh
                }
                var m = (e & 4) !== 0
                  , w = !m && t === "scroll"
                  , g = m ? f !== null ? f + "Capture" : null : f;
                m = [];
                for (var p = u, v; p !== null; ) {
                    v = p;
                    var _ = v.stateNode;
                    if (v.tag === 5 && _ !== null && (v = _,
                    g !== null && (_ = Ei(p, g),
                    _ != null && m.push(Ri(p, _, v)))),
                    w)
                        break;
                    p = p.return
                }
                0 < m.length && (f = new d(f,y,null,r,c),
                h.push({
                    event: f,
                    listeners: m
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (f = t === "mouseover" || t === "pointerover",
                d = t === "mouseout" || t === "pointerout",
                f && r !== xu && (y = r.relatedTarget || r.fromElement) && (mn(y) || y[lr]))
                    break e;
                if ((d || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                d ? (y = r.relatedTarget || r.toElement,
                d = u,
                y = y ? mn(y) : null,
                y !== null && (w = In(y),
                y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (d = null,
                y = u),
                d !== y)) {
                    if (m = _h,
                    _ = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (t === "pointerout" || t === "pointerover") && (m = Eh,
                    _ = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    w = d == null ? f : ts(d),
                    v = y == null ? f : ts(y),
                    f = new m(_,p + "leave",d,r,c),
                    f.target = w,
                    f.relatedTarget = v,
                    _ = null,
                    mn(c) === u && (m = new m(g,p + "enter",y,r,c),
                    m.target = v,
                    m.relatedTarget = w,
                    _ = m),
                    w = _,
                    d && y)
                        t: {
                            for (m = d,
                            g = y,
                            p = 0,
                            v = m; v; v = Bn(v))
                                p++;
                            for (v = 0,
                            _ = g; _; _ = Bn(_))
                                v++;
                            for (; 0 < p - v; )
                                m = Bn(m),
                                p--;
                            for (; 0 < v - p; )
                                g = Bn(g),
                                v--;
                            for (; p--; ) {
                                if (m === g || g !== null && m === g.alternate)
                                    break t;
                                m = Bn(m),
                                g = Bn(g)
                            }
                            m = null
                        }
                    else
                        m = null;
                    d !== null && Ih(h, f, d, m, !1),
                    y !== null && w !== null && Ih(h, w, y, m, !0)
                }
            }
            e: {
                if (f = u ? ts(u) : window,
                d = f.nodeName && f.nodeName.toLowerCase(),
                d === "select" || d === "input" && f.type === "file")
                    var E = yb;
                else if (Th(f))
                    if ($m)
                        E = xb;
                    else {
                        E = bb;
                        var S = wb
                    }
                else
                    (d = f.nodeName) && d.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = _b);
                if (E && (E = E(t, u))) {
                    Im(h, E, r, c);
                    break e
                }
                S && S(t, f, u),
                t === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && vu(f, "number", f.value)
            }
            switch (S = u ? ts(u) : window,
            t) {
            case "focusin":
                (Th(S) || S.contentEditable === "true") && (Zn = S,
                Ou = u,
                fi = null);
                break;
            case "focusout":
                fi = Ou = Zn = null;
                break;
            case "mousedown":
                Ru = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ru = !1,
                jh(h, r, c);
                break;
            case "selectionchange":
                if (kb)
                    break;
            case "keydown":
            case "keyup":
                jh(h, r, c)
            }
            var k;
            if (Qc)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Xn ? Am(t, r) && (P = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (P = "onCompositionStart");
            P && (jm && r.locale !== "ko" && (Xn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Xn && (k = Rm()) : (Lr = c,
            qc = "value"in Lr ? Lr.value : Lr.textContent,
            Xn = !0)),
            S = ua(u, P),
            0 < S.length && (P = new xh(P,t,null,r,c),
            h.push({
                event: P,
                listeners: S
            }),
            k ? P.data = k : (k = Nm(r),
            k !== null && (P.data = k)))),
            (k = fb ? pb(t, r) : mb(t, r)) && (u = ua(u, "onBeforeInput"),
            0 < u.length && (c = new xh("onBeforeInput","beforeinput",null,r,c),
            h.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        Hm(h, e)
    })
}
function Ri(t, e, r) {
    return {
        instance: t,
        listener: e,
        currentTarget: r
    }
}
function ua(t, e) {
    for (var r = e + "Capture", n = []; t !== null; ) {
        var s = t
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Ei(t, r),
        i != null && n.unshift(Ri(t, i, s)),
        i = Ei(t, e),
        i != null && n.push(Ri(t, i, s))),
        t = t.return
    }
    return n
}
function Bn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Ih(t, e, r, n, s) {
    for (var i = e._reactName, o = []; r !== null && r !== n; ) {
        var a = r
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === n)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = Ei(r, i),
        l != null && o.unshift(Ri(r, l, a))) : s || (l = Ei(r, i),
        l != null && o.push(Ri(r, l, a)))),
        r = r.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var Ob = /\r\n?/g
  , Rb = /\u0000|\uFFFD/g;
function $h(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ob, `
`).replace(Rb, "")
}
function yo(t, e, r) {
    if (e = $h(e),
    $h(t) !== e && r)
        throw Error(R(425))
}
function ca() {}
var ju = null
  , Au = null;
function Nu(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Iu = typeof setTimeout == "function" ? setTimeout : void 0
  , jb = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Lh = typeof Promise == "function" ? Promise : void 0
  , Ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lh < "u" ? function(t) {
    return Lh.resolve(null).then(t).catch(Nb)
}
: Iu;
function Nb(t) {
    setTimeout(function() {
        throw t
    })
}
function Dl(t, e) {
    var r = e
      , n = 0;
    do {
        var s = r.nextSibling;
        if (t.removeChild(r),
        s && s.nodeType === 8)
            if (r = s.data,
            r === "/$") {
                if (n === 0) {
                    t.removeChild(s),
                    Ti(e);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    Ti(e)
}
function zr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Uh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var r = t.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                r === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Ms = Math.random().toString(36).slice(2)
  , Ht = "__reactFiber$" + Ms
  , ji = "__reactProps$" + Ms
  , lr = "__reactContainer$" + Ms
  , $u = "__reactEvents$" + Ms
  , Ib = "__reactListeners$" + Ms
  , $b = "__reactHandles$" + Ms;
function mn(t) {
    var e = t[Ht];
    if (e)
        return e;
    for (var r = t.parentNode; r; ) {
        if (e = r[lr] || r[Ht]) {
            if (r = e.alternate,
            e.child !== null || r !== null && r.child !== null)
                for (t = Uh(t); t !== null; ) {
                    if (r = t[Ht])
                        return r;
                    t = Uh(t)
                }
            return e
        }
        t = r,
        r = t.parentNode
    }
    return null
}
function Yi(t) {
    return t = t[Ht] || t[lr],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function ts(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(R(33))
}
function Wa(t) {
    return t[ji] || null
}
var Lu = []
  , rs = -1;
function en(t) {
    return {
        current: t
    }
}
function ue(t) {
    0 > rs || (t.current = Lu[rs],
    Lu[rs] = null,
    rs--)
}
function oe(t, e) {
    rs++,
    Lu[rs] = t.current,
    t.current = e
}
var Gr = {}
  , De = en(Gr)
  , Qe = en(!1)
  , Cn = Gr;
function Ps(t, e) {
    var r = t.type.contextTypes;
    if (!r)
        return Gr;
    var n = t.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
        return n.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in r)
        s[i] = e[i];
    return n && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function Je(t) {
    return t = t.childContextTypes,
    t != null
}
function da() {
    ue(Qe),
    ue(De)
}
function Dh(t, e, r) {
    if (De.current !== Gr)
        throw Error(R(168));
    oe(De, e),
    oe(Qe, r)
}
function Km(t, e, r) {
    var n = t.stateNode;
    if (e = e.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in e))
            throw Error(R(108, ww(t) || "Unknown", s));
    return me({}, r, n)
}
function ha(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Gr,
    Cn = De.current,
    oe(De, t),
    oe(Qe, Qe.current),
    !0
}
function Mh(t, e, r) {
    var n = t.stateNode;
    if (!n)
        throw Error(R(169));
    r ? (t = Km(t, e, Cn),
    n.__reactInternalMemoizedMergedChildContext = t,
    ue(Qe),
    ue(De),
    oe(De, t)) : ue(Qe),
    oe(Qe, r)
}
var rr = null
  , Ha = !1
  , Ml = !1;
function Gm(t) {
    rr === null ? rr = [t] : rr.push(t)
}
function Lb(t) {
    Ha = !0,
    Gm(t)
}
function tn() {
    if (!Ml && rr !== null) {
        Ml = !0;
        var t = 0
          , e = ne;
        try {
            var r = rr;
            for (ne = 1; t < r.length; t++) {
                var n = r[t];
                do
                    n = n(!0);
                while (n !== null)
            }
            rr = null,
            Ha = !1
        } catch (s) {
            throw rr !== null && (rr = rr.slice(t + 1)),
            wm(zc, tn),
            s
        } finally {
            ne = e,
            Ml = !1
        }
    }
    return null
}
var ns = []
  , ss = 0
  , fa = null
  , pa = 0
  , ft = []
  , pt = 0
  , Pn = null
  , sr = 1
  , ir = "";
function un(t, e) {
    ns[ss++] = pa,
    ns[ss++] = fa,
    fa = t,
    pa = e
}
function Qm(t, e, r) {
    ft[pt++] = sr,
    ft[pt++] = ir,
    ft[pt++] = Pn,
    Pn = t;
    var n = sr;
    t = ir;
    var s = 32 - Nt(n) - 1;
    n &= ~(1 << s),
    r += 1;
    var i = 32 - Nt(e) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (n & (1 << o) - 1).toString(32),
        n >>= o,
        s -= o,
        sr = 1 << 32 - Nt(e) + s | r << s | n,
        ir = i + t
    } else
        sr = 1 << i | r << s | n,
        ir = t
}
function Yc(t) {
    t.return !== null && (un(t, 1),
    Qm(t, 1, 0))
}
function Xc(t) {
    for (; t === fa; )
        fa = ns[--ss],
        ns[ss] = null,
        pa = ns[--ss],
        ns[ss] = null;
    for (; t === Pn; )
        Pn = ft[--pt],
        ft[pt] = null,
        ir = ft[--pt],
        ft[pt] = null,
        sr = ft[--pt],
        ft[pt] = null
}
var ot = null
  , it = null
  , de = !1
  , At = null;
function Jm(t, e) {
    var r = mt(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = e,
    r.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [r],
    t.flags |= 16) : e.push(r)
}
function Fh(t, e) {
    switch (t.tag) {
    case 5:
        var r = t.type;
        return e = e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        ot = t,
        it = zr(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        ot = t,
        it = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (r = Pn !== null ? {
            id: sr,
            overflow: ir
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: r,
            retryLane: 1073741824
        },
        r = mt(18, null, null, 0),
        r.stateNode = e,
        r.return = t,
        t.child = r,
        ot = t,
        it = null,
        !0) : !1;
    default:
        return !1
    }
}
function Uu(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Du(t) {
    if (de) {
        var e = it;
        if (e) {
            var r = e;
            if (!Fh(t, e)) {
                if (Uu(t))
                    throw Error(R(418));
                e = zr(r.nextSibling);
                var n = ot;
                e && Fh(t, e) ? Jm(n, r) : (t.flags = t.flags & -4097 | 2,
                de = !1,
                ot = t)
            }
        } else {
            if (Uu(t))
                throw Error(R(418));
            t.flags = t.flags & -4097 | 2,
            de = !1,
            ot = t
        }
    }
}
function Bh(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    ot = t
}
function wo(t) {
    if (t !== ot)
        return !1;
    if (!de)
        return Bh(t),
        de = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Nu(t.type, t.memoizedProps)),
    e && (e = it)) {
        if (Uu(t))
            throw Ym(),
            Error(R(418));
        for (; e; )
            Jm(t, e),
            e = zr(e.nextSibling)
    }
    if (Bh(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(R(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var r = t.data;
                    if (r === "/$") {
                        if (e === 0) {
                            it = zr(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || e++
                }
                t = t.nextSibling
            }
            it = null
        }
    } else
        it = ot ? zr(t.stateNode.nextSibling) : null;
    return !0
}
function Ym() {
    for (var t = it; t; )
        t = zr(t.nextSibling)
}
function Os() {
    it = ot = null,
    de = !1
}
function Zc(t) {
    At === null ? At = [t] : At.push(t)
}
var Ub = fr.ReactCurrentBatchConfig;
function Zs(t, e, r) {
    if (t = r.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(R(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(R(147, t));
            var s = n
              , i = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            e._stringRef = i,
            e)
        }
        if (typeof t != "string")
            throw Error(R(284));
        if (!r._owner)
            throw Error(R(290, t))
    }
    return t
}
function bo(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(R(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function zh(t) {
    var e = t._init;
    return e(t._payload)
}
function Xm(t) {
    function e(g, p) {
        if (t) {
            var v = g.deletions;
            v === null ? (g.deletions = [p],
            g.flags |= 16) : v.push(p)
        }
    }
    function r(g, p) {
        if (!t)
            return null;
        for (; p !== null; )
            e(g, p),
            p = p.sibling;
        return null
    }
    function n(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function s(g, p) {
        return g = qr(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, p, v) {
        return g.index = v,
        t ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < p ? (g.flags |= 2,
        p) : v) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, p, v, _) {
        return p === null || p.tag !== 6 ? (p = ql(v, g.mode, _),
        p.return = g,
        p) : (p = s(p, v),
        p.return = g,
        p)
    }
    function l(g, p, v, _) {
        var E = v.type;
        return E === Yn ? c(g, p, v.props.children, _, v.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === kr && zh(E) === p.type) ? (_ = s(p, v.props),
        _.ref = Zs(g, p, v),
        _.return = g,
        _) : (_ = Xo(v.type, v.key, v.props, null, g.mode, _),
        _.ref = Zs(g, p, v),
        _.return = g,
        _)
    }
    function u(g, p, v, _) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Kl(v, g.mode, _),
        p.return = g,
        p) : (p = s(p, v.children || []),
        p.return = g,
        p)
    }
    function c(g, p, v, _, E) {
        return p === null || p.tag !== 7 ? (p = Tn(v, g.mode, _, E),
        p.return = g,
        p) : (p = s(p, v),
        p.return = g,
        p)
    }
    function h(g, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = ql("" + p, g.mode, v),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case lo:
                return v = Xo(p.type, p.key, p.props, null, g.mode, v),
                v.ref = Zs(g, null, p),
                v.return = g,
                v;
            case Jn:
                return p = Kl(p, g.mode, v),
                p.return = g,
                p;
            case kr:
                var _ = p._init;
                return h(g, _(p._payload), v)
            }
            if (ii(p) || Gs(p))
                return p = Tn(p, g.mode, v, null),
                p.return = g,
                p;
            bo(g, p)
        }
        return null
    }
    function f(g, p, v, _) {
        var E = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return E !== null ? null : a(g, p, "" + v, _);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case lo:
                return v.key === E ? l(g, p, v, _) : null;
            case Jn:
                return v.key === E ? u(g, p, v, _) : null;
            case kr:
                return E = v._init,
                f(g, p, E(v._payload), _)
            }
            if (ii(v) || Gs(v))
                return E !== null ? null : c(g, p, v, _, null);
            bo(g, v)
        }
        return null
    }
    function d(g, p, v, _, E) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return g = g.get(v) || null,
            a(p, g, "" + _, E);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case lo:
                return g = g.get(_.key === null ? v : _.key) || null,
                l(p, g, _, E);
            case Jn:
                return g = g.get(_.key === null ? v : _.key) || null,
                u(p, g, _, E);
            case kr:
                var S = _._init;
                return d(g, p, v, S(_._payload), E)
            }
            if (ii(_) || Gs(_))
                return g = g.get(v) || null,
                c(p, g, _, E, null);
            bo(p, _)
        }
        return null
    }
    function y(g, p, v, _) {
        for (var E = null, S = null, k = p, P = p = 0, j = null; k !== null && P < v.length; P++) {
            k.index > P ? (j = k,
            k = null) : j = k.sibling;
            var N = f(g, k, v[P], _);
            if (N === null) {
                k === null && (k = j);
                break
            }
            t && k && N.alternate === null && e(g, k),
            p = i(N, p, P),
            S === null ? E = N : S.sibling = N,
            S = N,
            k = j
        }
        if (P === v.length)
            return r(g, k),
            de && un(g, P),
            E;
        if (k === null) {
            for (; P < v.length; P++)
                k = h(g, v[P], _),
                k !== null && (p = i(k, p, P),
                S === null ? E = k : S.sibling = k,
                S = k);
            return de && un(g, P),
            E
        }
        for (k = n(g, k); P < v.length; P++)
            j = d(k, g, P, v[P], _),
            j !== null && (t && j.alternate !== null && k.delete(j.key === null ? P : j.key),
            p = i(j, p, P),
            S === null ? E = j : S.sibling = j,
            S = j);
        return t && k.forEach(function(z) {
            return e(g, z)
        }),
        de && un(g, P),
        E
    }
    function m(g, p, v, _) {
        var E = Gs(v);
        if (typeof E != "function")
            throw Error(R(150));
        if (v = E.call(v),
        v == null)
            throw Error(R(151));
        for (var S = E = null, k = p, P = p = 0, j = null, N = v.next(); k !== null && !N.done; P++,
        N = v.next()) {
            k.index > P ? (j = k,
            k = null) : j = k.sibling;
            var z = f(g, k, N.value, _);
            if (z === null) {
                k === null && (k = j);
                break
            }
            t && k && z.alternate === null && e(g, k),
            p = i(z, p, P),
            S === null ? E = z : S.sibling = z,
            S = z,
            k = j
        }
        if (N.done)
            return r(g, k),
            de && un(g, P),
            E;
        if (k === null) {
            for (; !N.done; P++,
            N = v.next())
                N = h(g, N.value, _),
                N !== null && (p = i(N, p, P),
                S === null ? E = N : S.sibling = N,
                S = N);
            return de && un(g, P),
            E
        }
        for (k = n(g, k); !N.done; P++,
        N = v.next())
            N = d(k, g, P, N.value, _),
            N !== null && (t && N.alternate !== null && k.delete(N.key === null ? P : N.key),
            p = i(N, p, P),
            S === null ? E = N : S.sibling = N,
            S = N);
        return t && k.forEach(function(D) {
            return e(g, D)
        }),
        de && un(g, P),
        E
    }
    function w(g, p, v, _) {
        if (typeof v == "object" && v !== null && v.type === Yn && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case lo:
                e: {
                    for (var E = v.key, S = p; S !== null; ) {
                        if (S.key === E) {
                            if (E = v.type,
                            E === Yn) {
                                if (S.tag === 7) {
                                    r(g, S.sibling),
                                    p = s(S, v.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (S.elementType === E || typeof E == "object" && E !== null && E.$$typeof === kr && zh(E) === S.type) {
                                r(g, S.sibling),
                                p = s(S, v.props),
                                p.ref = Zs(g, S, v),
                                p.return = g,
                                g = p;
                                break e
                            }
                            r(g, S);
                            break
                        } else
                            e(g, S);
                        S = S.sibling
                    }
                    v.type === Yn ? (p = Tn(v.props.children, g.mode, _, v.key),
                    p.return = g,
                    g = p) : (_ = Xo(v.type, v.key, v.props, null, g.mode, _),
                    _.ref = Zs(g, p, v),
                    _.return = g,
                    g = _)
                }
                return o(g);
            case Jn:
                e: {
                    for (S = v.key; p !== null; ) {
                        if (p.key === S)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                r(g, p.sibling),
                                p = s(p, v.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                r(g, p);
                                break
                            }
                        else
                            e(g, p);
                        p = p.sibling
                    }
                    p = Kl(v, g.mode, _),
                    p.return = g,
                    g = p
                }
                return o(g);
            case kr:
                return S = v._init,
                w(g, p, S(v._payload), _)
            }
            if (ii(v))
                return y(g, p, v, _);
            if (Gs(v))
                return m(g, p, v, _);
            bo(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (r(g, p.sibling),
        p = s(p, v),
        p.return = g,
        g = p) : (r(g, p),
        p = ql(v, g.mode, _),
        p.return = g,
        g = p),
        o(g)) : r(g, p)
    }
    return w
}
var Rs = Xm(!0)
  , Zm = Xm(!1)
  , ma = en(null)
  , ga = null
  , is = null
  , ed = null;
function td() {
    ed = is = ga = null
}
function rd(t) {
    var e = ma.current;
    ue(ma),
    t._currentValue = e
}
function Mu(t, e, r) {
    for (; t !== null; ) {
        var n = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === r)
            break;
        t = t.return
    }
}
function hs(t, e) {
    ga = t,
    ed = is = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Ge = !0),
    t.firstContext = null)
}
function vt(t) {
    var e = t._currentValue;
    if (ed !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        is === null) {
            if (ga === null)
                throw Error(R(308));
            is = t,
            ga.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            is = is.next = t;
    return e
}
var gn = null;
function nd(t) {
    gn === null ? gn = [t] : gn.push(t)
}
function e0(t, e, r, n) {
    var s = e.interleaved;
    return s === null ? (r.next = r,
    nd(e)) : (r.next = s.next,
    s.next = r),
    e.interleaved = r,
    ur(t, n)
}
function ur(t, e) {
    t.lanes |= e;
    var r = t.alternate;
    for (r !== null && (r.lanes |= e),
    r = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        r = t.alternate,
        r !== null && (r.childLanes |= e),
        r = t,
        t = t.return;
    return r.tag === 3 ? r.stateNode : null
}
var Tr = !1;
function sd(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function t0(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function or(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Vr(t, e, r) {
    var n = t.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    ee & 2) {
        var s = n.pending;
        return s === null ? e.next = e : (e.next = s.next,
        s.next = e),
        n.pending = e,
        ur(t, r)
    }
    return s = n.interleaved,
    s === null ? (e.next = e,
    nd(n)) : (e.next = s.next,
    s.next = e),
    n.interleaved = e,
    ur(t, r)
}
function qo(t, e, r) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (r & 4194240) !== 0)) {
        var n = e.lanes;
        n &= t.pendingLanes,
        r |= n,
        e.lanes = r,
        Vc(t, r)
    }
}
function Vh(t, e) {
    var r = t.updateQueue
      , n = t.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var s = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                r = r.next
            } while (r !== null);
            i === null ? s = i = e : i = i.next = e
        } else
            s = i = e;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        },
        t.updateQueue = r;
        return
    }
    t = r.lastBaseUpdate,
    t === null ? r.firstBaseUpdate = e : t.next = e,
    r.lastBaseUpdate = e
}
function va(t, e, r, n) {
    var s = t.updateQueue;
    Tr = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? i = u : o.next = u,
        o = l;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var h = s.baseState;
        o = 0,
        c = u = l = null,
        a = i;
        do {
            var f = a.lane
              , d = a.eventTime;
            if ((n & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = t
                      , m = a;
                    switch (f = e,
                    d = r,
                    m.tag) {
                    case 1:
                        if (y = m.payload,
                        typeof y == "function") {
                            h = y.call(d, h, f);
                            break e
                        }
                        h = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = m.payload,
                        f = typeof y == "function" ? y.call(d, h, f) : y,
                        f == null)
                            break e;
                        h = me({}, h, f);
                        break e;
                    case 2:
                        Tr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                d = {
                    eventTime: d,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = d,
                l = h) : c = c.next = d,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = h),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = c,
        e = s.shared.interleaved,
        e !== null) {
            s = e;
            do
                o |= s.lane,
                s = s.next;
            while (s !== e)
        } else
            i === null && (s.shared.lanes = 0);
        Rn |= o,
        t.lanes = o,
        t.memoizedState = h
    }
}
function Wh(t, e, r) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var n = t[e]
              , s = n.callback;
            if (s !== null) {
                if (n.callback = null,
                n = r,
                typeof s != "function")
                    throw Error(R(191, s));
                s.call(n)
            }
        }
}
var Xi = {}
  , Gt = en(Xi)
  , Ai = en(Xi)
  , Ni = en(Xi);
function vn(t) {
    if (t === Xi)
        throw Error(R(174));
    return t
}
function id(t, e) {
    switch (oe(Ni, e),
    oe(Ai, t),
    oe(Gt, Xi),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : wu(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = wu(e, t)
    }
    ue(Gt),
    oe(Gt, e)
}
function js() {
    ue(Gt),
    ue(Ai),
    ue(Ni)
}
function r0(t) {
    vn(Ni.current);
    var e = vn(Gt.current)
      , r = wu(e, t.type);
    e !== r && (oe(Ai, t),
    oe(Gt, r))
}
function od(t) {
    Ai.current === t && (ue(Gt),
    ue(Ai))
}
var fe = en(0);
function ya(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var r = e.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Fl = [];
function ad() {
    for (var t = 0; t < Fl.length; t++)
        Fl[t]._workInProgressVersionPrimary = null;
    Fl.length = 0
}
var Ko = fr.ReactCurrentDispatcher
  , Bl = fr.ReactCurrentBatchConfig
  , On = 0
  , pe = null
  , Ee = null
  , Te = null
  , wa = !1
  , pi = !1
  , Ii = 0
  , Db = 0;
function Ie() {
    throw Error(R(321))
}
function ld(t, e) {
    if (e === null)
        return !1;
    for (var r = 0; r < e.length && r < t.length; r++)
        if (!$t(t[r], e[r]))
            return !1;
    return !0
}
function ud(t, e, r, n, s, i) {
    if (On = i,
    pe = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    Ko.current = t === null || t.memoizedState === null ? zb : Vb,
    t = r(n, s),
    pi) {
        i = 0;
        do {
            if (pi = !1,
            Ii = 0,
            25 <= i)
                throw Error(R(301));
            i += 1,
            Te = Ee = null,
            e.updateQueue = null,
            Ko.current = Wb,
            t = r(n, s)
        } while (pi)
    }
    if (Ko.current = ba,
    e = Ee !== null && Ee.next !== null,
    On = 0,
    Te = Ee = pe = null,
    wa = !1,
    e)
        throw Error(R(300));
    return t
}
function cd() {
    var t = Ii !== 0;
    return Ii = 0,
    t
}
function Bt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Te === null ? pe.memoizedState = Te = t : Te = Te.next = t,
    Te
}
function yt() {
    if (Ee === null) {
        var t = pe.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = Ee.next;
    var e = Te === null ? pe.memoizedState : Te.next;
    if (e !== null)
        Te = e,
        Ee = t;
    else {
        if (t === null)
            throw Error(R(310));
        Ee = t,
        t = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        Te === null ? pe.memoizedState = Te = t : Te = Te.next = t
    }
    return Te
}
function $i(t, e) {
    return typeof e == "function" ? e(t) : e
}
function zl(t) {
    var e = yt()
      , r = e.queue;
    if (r === null)
        throw Error(R(311));
    r.lastRenderedReducer = t;
    var n = Ee
      , s = n.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        n.baseQueue = s = i,
        r.pending = null
    }
    if (s !== null) {
        i = s.next,
        n = n.baseState;
        var a = o = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((On & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                n = u.hasEagerState ? u.eagerState : t(n, u.action);
            else {
                var h = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = h,
                o = n) : l = l.next = h,
                pe.lanes |= c,
                Rn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = n : l.next = a,
        $t(n, e.memoizedState) || (Ge = !0),
        e.memoizedState = n,
        e.baseState = o,
        e.baseQueue = l,
        r.lastRenderedState = n
    }
    if (t = r.interleaved,
    t !== null) {
        s = t;
        do
            i = s.lane,
            pe.lanes |= i,
            Rn |= i,
            s = s.next;
        while (s !== t)
    } else
        s === null && (r.lanes = 0);
    return [e.memoizedState, r.dispatch]
}
function Vl(t) {
    var e = yt()
      , r = e.queue;
    if (r === null)
        throw Error(R(311));
    r.lastRenderedReducer = t;
    var n = r.dispatch
      , s = r.pending
      , i = e.memoizedState;
    if (s !== null) {
        r.pending = null;
        var o = s = s.next;
        do
            i = t(i, o.action),
            o = o.next;
        while (o !== s);
        $t(i, e.memoizedState) || (Ge = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function n0() {}
function s0(t, e) {
    var r = pe
      , n = yt()
      , s = e()
      , i = !$t(n.memoizedState, s);
    if (i && (n.memoizedState = s,
    Ge = !0),
    n = n.queue,
    dd(a0.bind(null, r, n, t), [t]),
    n.getSnapshot !== e || i || Te !== null && Te.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        Li(9, o0.bind(null, r, n, s, e), void 0, null),
        Ce === null)
            throw Error(R(349));
        On & 30 || i0(r, e, s)
    }
    return s
}
function i0(t, e, r) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: r
    },
    e = pe.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = e,
    e.stores = [t]) : (r = e.stores,
    r === null ? e.stores = [t] : r.push(t))
}
function o0(t, e, r, n) {
    e.value = r,
    e.getSnapshot = n,
    l0(e) && u0(t)
}
function a0(t, e, r) {
    return r(function() {
        l0(e) && u0(t)
    })
}
function l0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var r = e();
        return !$t(t, r)
    } catch {
        return !0
    }
}
function u0(t) {
    var e = ur(t, 1);
    e !== null && It(e, t, 1, -1)
}
function Hh(t) {
    var e = Bt();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $i,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Bb.bind(null, pe, t),
    [e.memoizedState, t]
}
function Li(t, e, r, n) {
    return t = {
        tag: t,
        create: e,
        destroy: r,
        deps: n,
        next: null
    },
    e = pe.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = e,
    e.lastEffect = t.next = t) : (r = e.lastEffect,
    r === null ? e.lastEffect = t.next = t : (n = r.next,
    r.next = t,
    t.next = n,
    e.lastEffect = t)),
    t
}
function c0() {
    return yt().memoizedState
}
function Go(t, e, r, n) {
    var s = Bt();
    pe.flags |= t,
    s.memoizedState = Li(1 | e, r, void 0, n === void 0 ? null : n)
}
function qa(t, e, r, n) {
    var s = yt();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (Ee !== null) {
        var o = Ee.memoizedState;
        if (i = o.destroy,
        n !== null && ld(n, o.deps)) {
            s.memoizedState = Li(e, r, i, n);
            return
        }
    }
    pe.flags |= t,
    s.memoizedState = Li(1 | e, r, i, n)
}
function qh(t, e) {
    return Go(8390656, 8, t, e)
}
function dd(t, e) {
    return qa(2048, 8, t, e)
}
function d0(t, e) {
    return qa(4, 2, t, e)
}
function h0(t, e) {
    return qa(4, 4, t, e)
}
function f0(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function p0(t, e, r) {
    return r = r != null ? r.concat([t]) : null,
    qa(4, 4, f0.bind(null, e, t), r)
}
function hd() {}
function m0(t, e) {
    var r = yt();
    e = e === void 0 ? null : e;
    var n = r.memoizedState;
    return n !== null && e !== null && ld(e, n[1]) ? n[0] : (r.memoizedState = [t, e],
    t)
}
function g0(t, e) {
    var r = yt();
    e = e === void 0 ? null : e;
    var n = r.memoizedState;
    return n !== null && e !== null && ld(e, n[1]) ? n[0] : (t = t(),
    r.memoizedState = [t, e],
    t)
}
function v0(t, e, r) {
    return On & 21 ? ($t(r, e) || (r = xm(),
    pe.lanes |= r,
    Rn |= r,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Ge = !0),
    t.memoizedState = r)
}
function Mb(t, e) {
    var r = ne;
    ne = r !== 0 && 4 > r ? r : 4,
    t(!0);
    var n = Bl.transition;
    Bl.transition = {};
    try {
        t(!1),
        e()
    } finally {
        ne = r,
        Bl.transition = n
    }
}
function y0() {
    return yt().memoizedState
}
function Fb(t, e, r) {
    var n = Hr(t);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    w0(t))
        b0(e, r);
    else if (r = e0(t, e, r, n),
    r !== null) {
        var s = Ve();
        It(r, t, n, s),
        _0(r, e, n)
    }
}
function Bb(t, e, r) {
    var n = Hr(t)
      , s = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (w0(t))
        b0(e, s);
    else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
            try {
                var o = e.lastRenderedState
                  , a = i(o, r);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                $t(a, o)) {
                    var l = e.interleaved;
                    l === null ? (s.next = s,
                    nd(e)) : (s.next = l.next,
                    l.next = s),
                    e.interleaved = s;
                    return
                }
            } catch {} finally {}
        r = e0(t, e, s, n),
        r !== null && (s = Ve(),
        It(r, t, n, s),
        _0(r, e, n))
    }
}
function w0(t) {
    var e = t.alternate;
    return t === pe || e !== null && e === pe
}
function b0(t, e) {
    pi = wa = !0;
    var r = t.pending;
    r === null ? e.next = e : (e.next = r.next,
    r.next = e),
    t.pending = e
}
function _0(t, e, r) {
    if (r & 4194240) {
        var n = e.lanes;
        n &= t.pendingLanes,
        r |= n,
        e.lanes = r,
        Vc(t, r)
    }
}
var ba = {
    readContext: vt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1
}
  , zb = {
    readContext: vt,
    useCallback: function(t, e) {
        return Bt().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: vt,
    useEffect: qh,
    useImperativeHandle: function(t, e, r) {
        return r = r != null ? r.concat([t]) : null,
        Go(4194308, 4, f0.bind(null, e, t), r)
    },
    useLayoutEffect: function(t, e) {
        return Go(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Go(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var r = Bt();
        return e = e === void 0 ? null : e,
        t = t(),
        r.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, r) {
        var n = Bt();
        return e = r !== void 0 ? r(e) : e,
        n.memoizedState = n.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        n.queue = t,
        t = t.dispatch = Fb.bind(null, pe, t),
        [n.memoizedState, t]
    },
    useRef: function(t) {
        var e = Bt();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: Hh,
    useDebugValue: hd,
    useDeferredValue: function(t) {
        return Bt().memoizedState = t
    },
    useTransition: function() {
        var t = Hh(!1)
          , e = t[0];
        return t = Mb.bind(null, t[1]),
        Bt().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, r) {
        var n = pe
          , s = Bt();
        if (de) {
            if (r === void 0)
                throw Error(R(407));
            r = r()
        } else {
            if (r = e(),
            Ce === null)
                throw Error(R(349));
            On & 30 || i0(n, e, r)
        }
        s.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: e
        };
        return s.queue = i,
        qh(a0.bind(null, n, i, t), [t]),
        n.flags |= 2048,
        Li(9, o0.bind(null, n, i, r, e), void 0, null),
        r
    },
    useId: function() {
        var t = Bt()
          , e = Ce.identifierPrefix;
        if (de) {
            var r = ir
              , n = sr;
            r = (n & ~(1 << 32 - Nt(n) - 1)).toString(32) + r,
            e = ":" + e + "R" + r,
            r = Ii++,
            0 < r && (e += "H" + r.toString(32)),
            e += ":"
        } else
            r = Db++,
            e = ":" + e + "r" + r.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , Vb = {
    readContext: vt,
    useCallback: m0,
    useContext: vt,
    useEffect: dd,
    useImperativeHandle: p0,
    useInsertionEffect: d0,
    useLayoutEffect: h0,
    useMemo: g0,
    useReducer: zl,
    useRef: c0,
    useState: function() {
        return zl($i)
    },
    useDebugValue: hd,
    useDeferredValue: function(t) {
        var e = yt();
        return v0(e, Ee.memoizedState, t)
    },
    useTransition: function() {
        var t = zl($i)[0]
          , e = yt().memoizedState;
        return [t, e]
    },
    useMutableSource: n0,
    useSyncExternalStore: s0,
    useId: y0,
    unstable_isNewReconciler: !1
}
  , Wb = {
    readContext: vt,
    useCallback: m0,
    useContext: vt,
    useEffect: dd,
    useImperativeHandle: p0,
    useInsertionEffect: d0,
    useLayoutEffect: h0,
    useMemo: g0,
    useReducer: Vl,
    useRef: c0,
    useState: function() {
        return Vl($i)
    },
    useDebugValue: hd,
    useDeferredValue: function(t) {
        var e = yt();
        return Ee === null ? e.memoizedState = t : v0(e, Ee.memoizedState, t)
    },
    useTransition: function() {
        var t = Vl($i)[0]
          , e = yt().memoizedState;
        return [t, e]
    },
    useMutableSource: n0,
    useSyncExternalStore: s0,
    useId: y0,
    unstable_isNewReconciler: !1
};
function kt(t, e) {
    if (t && t.defaultProps) {
        e = me({}, e),
        t = t.defaultProps;
        for (var r in t)
            e[r] === void 0 && (e[r] = t[r]);
        return e
    }
    return e
}
function Fu(t, e, r, n) {
    e = t.memoizedState,
    r = r(n, e),
    r = r == null ? e : me({}, e, r),
    t.memoizedState = r,
    t.lanes === 0 && (t.updateQueue.baseState = r)
}
var Ka = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? In(t) === t : !1
    },
    enqueueSetState: function(t, e, r) {
        t = t._reactInternals;
        var n = Ve()
          , s = Hr(t)
          , i = or(n, s);
        i.payload = e,
        r != null && (i.callback = r),
        e = Vr(t, i, s),
        e !== null && (It(e, t, s, n),
        qo(e, t, s))
    },
    enqueueReplaceState: function(t, e, r) {
        t = t._reactInternals;
        var n = Ve()
          , s = Hr(t)
          , i = or(n, s);
        i.tag = 1,
        i.payload = e,
        r != null && (i.callback = r),
        e = Vr(t, i, s),
        e !== null && (It(e, t, s, n),
        qo(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var r = Ve()
          , n = Hr(t)
          , s = or(r, n);
        s.tag = 2,
        e != null && (s.callback = e),
        e = Vr(t, s, n),
        e !== null && (It(e, t, n, r),
        qo(e, t, n))
    }
};
function Kh(t, e, r, n, s, i, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Pi(r, n) || !Pi(s, i) : !0
}
function x0(t, e, r) {
    var n = !1
      , s = Gr
      , i = e.contextType;
    return typeof i == "object" && i !== null ? i = vt(i) : (s = Je(e) ? Cn : De.current,
    n = e.contextTypes,
    i = (n = n != null) ? Ps(t, s) : Gr),
    e = new e(r,i),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = Ka,
    t.stateNode = e,
    e._reactInternals = t,
    n && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = s,
    t.__reactInternalMemoizedMaskedChildContext = i),
    e
}
function Gh(t, e, r, n) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, n),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, n),
    e.state !== t && Ka.enqueueReplaceState(e, e.state, null)
}
function Bu(t, e, r, n) {
    var s = t.stateNode;
    s.props = r,
    s.state = t.memoizedState,
    s.refs = {},
    sd(t);
    var i = e.contextType;
    typeof i == "object" && i !== null ? s.context = vt(i) : (i = Je(e) ? Cn : De.current,
    s.context = Ps(t, i)),
    s.state = t.memoizedState,
    i = e.getDerivedStateFromProps,
    typeof i == "function" && (Fu(t, e, i, r),
    s.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    e !== s.state && Ka.enqueueReplaceState(s, s.state, null),
    va(t, r, s, n),
    s.state = t.memoizedState),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}
function As(t, e) {
    try {
        var r = ""
          , n = e;
        do
            r += yw(n),
            n = n.return;
        while (n);
        var s = r
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: t,
        source: e,
        stack: s,
        digest: null
    }
}
function Wl(t, e, r) {
    return {
        value: t,
        source: null,
        stack: r ?? null,
        digest: e ?? null
    }
}
function zu(t, e) {
    try {
        console.error(e.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Hb = typeof WeakMap == "function" ? WeakMap : Map;
function E0(t, e, r) {
    r = or(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = e.value;
    return r.callback = function() {
        xa || (xa = !0,
        Xu = n),
        zu(t, e)
    }
    ,
    r
}
function S0(t, e, r) {
    r = or(-1, r),
    r.tag = 3;
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = e.value;
        r.payload = function() {
            return n(s)
        }
        ,
        r.callback = function() {
            zu(t, e)
        }
    }
    var i = t.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        zu(t, e),
        typeof n != "function" && (Wr === null ? Wr = new Set([this]) : Wr.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    r
}
function Qh(t, e, r) {
    var n = t.pingCache;
    if (n === null) {
        n = t.pingCache = new Hb;
        var s = new Set;
        n.set(e, s)
    } else
        s = n.get(e),
        s === void 0 && (s = new Set,
        n.set(e, s));
    s.has(r) || (s.add(r),
    t = i_.bind(null, t, e, r),
    e.then(t, t))
}
function Jh(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function Yh(t, e, r, n, s) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = s,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (e = or(-1, 1),
    e.tag = 2,
    Vr(r, e, 1))),
    r.lanes |= 1),
    t)
}
var qb = fr.ReactCurrentOwner
  , Ge = !1;
function Fe(t, e, r, n) {
    e.child = t === null ? Zm(e, null, r, n) : Rs(e, t.child, r, n)
}
function Xh(t, e, r, n, s) {
    r = r.render;
    var i = e.ref;
    return hs(e, s),
    n = ud(t, e, r, n, i, s),
    r = cd(),
    t !== null && !Ge ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    cr(t, e, s)) : (de && r && Yc(e),
    e.flags |= 1,
    Fe(t, e, n, s),
    e.child)
}
function Zh(t, e, r, n, s) {
    if (t === null) {
        var i = r.type;
        return typeof i == "function" && !bd(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (e.tag = 15,
        e.type = i,
        k0(t, e, i, n, s)) : (t = Xo(r.type, null, n, e, e.mode, s),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (i = t.child,
    !(t.lanes & s)) {
        var o = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Pi,
        r(o, n) && t.ref === e.ref)
            return cr(t, e, s)
    }
    return e.flags |= 1,
    t = qr(i, n),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function k0(t, e, r, n, s) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (Pi(i, n) && t.ref === e.ref)
            if (Ge = !1,
            e.pendingProps = n = i,
            (t.lanes & s) !== 0)
                t.flags & 131072 && (Ge = !0);
            else
                return e.lanes = t.lanes,
                cr(t, e, s)
    }
    return Vu(t, e, r, n, s)
}
function T0(t, e, r) {
    var n = e.pendingProps
      , s = n.children
      , i = t !== null ? t.memoizedState : null;
    if (n.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            oe(as, tt),
            tt |= r;
        else {
            if (!(r & 1073741824))
                return t = i !== null ? i.baseLanes | r : r,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                oe(as, tt),
                tt |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            oe(as, tt),
            tt |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        e.memoizedState = null) : n = r,
        oe(as, tt),
        tt |= n;
    return Fe(t, e, s, r),
    e.child
}
function C0(t, e) {
    var r = e.ref;
    (t === null && r !== null || t !== null && t.ref !== r) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Vu(t, e, r, n, s) {
    var i = Je(r) ? Cn : De.current;
    return i = Ps(e, i),
    hs(e, s),
    r = ud(t, e, r, n, i, s),
    n = cd(),
    t !== null && !Ge ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    cr(t, e, s)) : (de && n && Yc(e),
    e.flags |= 1,
    Fe(t, e, r, s),
    e.child)
}
function ef(t, e, r, n, s) {
    if (Je(r)) {
        var i = !0;
        ha(e)
    } else
        i = !1;
    if (hs(e, s),
    e.stateNode === null)
        Qo(t, e),
        x0(e, r, n),
        Bu(e, r, n, s),
        n = !0;
    else if (t === null) {
        var o = e.stateNode
          , a = e.memoizedProps;
        o.props = a;
        var l = o.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = vt(u) : (u = Je(r) ? Cn : De.current,
        u = Ps(e, u));
        var c = r.getDerivedStateFromProps
          , h = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && Gh(e, o, n, u),
        Tr = !1;
        var f = e.memoizedState;
        o.state = f,
        va(e, n, o, s),
        l = e.memoizedState,
        a !== n || f !== l || Qe.current || Tr ? (typeof c == "function" && (Fu(e, r, c, n),
        l = e.memoizedState),
        (a = Tr || Kh(e, r, a, n, f, l, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = n,
        e.memoizedState = l),
        o.props = n,
        o.state = l,
        o.context = u,
        n = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        n = !1)
    } else {
        o = e.stateNode,
        t0(t, e),
        a = e.memoizedProps,
        u = e.type === e.elementType ? a : kt(e.type, a),
        o.props = u,
        h = e.pendingProps,
        f = o.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = vt(l) : (l = Je(r) ? Cn : De.current,
        l = Ps(e, l));
        var d = r.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || f !== l) && Gh(e, o, n, l),
        Tr = !1,
        f = e.memoizedState,
        o.state = f,
        va(e, n, o, s);
        var y = e.memoizedState;
        a !== h || f !== y || Qe.current || Tr ? (typeof d == "function" && (Fu(e, r, d, n),
        y = e.memoizedState),
        (u = Tr || Kh(e, r, u, n, f, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, l)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = n,
        e.memoizedState = y),
        o.props = n,
        o.state = y,
        o.context = l,
        n = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        n = !1)
    }
    return Wu(t, e, r, n, i, s)
}
function Wu(t, e, r, n, s, i) {
    C0(t, e);
    var o = (e.flags & 128) !== 0;
    if (!n && !o)
        return s && Mh(e, r, !1),
        cr(t, e, i);
    n = e.stateNode,
    qb.current = e;
    var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = Rs(e, t.child, null, i),
    e.child = Rs(e, null, a, i)) : Fe(t, e, a, i),
    e.memoizedState = n.state,
    s && Mh(e, r, !0),
    e.child
}
function P0(t) {
    var e = t.stateNode;
    e.pendingContext ? Dh(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Dh(t, e.context, !1),
    id(t, e.containerInfo)
}
function tf(t, e, r, n, s) {
    return Os(),
    Zc(s),
    e.flags |= 256,
    Fe(t, e, r, n),
    e.child
}
var Hu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function qu(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function O0(t, e, r) {
    var n = e.pendingProps, s = fe.current, i = !1, o = (e.flags & 128) !== 0, a;
    if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1),
    oe(fe, s & 1),
    t === null)
        return Du(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = n.children,
        t = n.fallback,
        i ? (n = e.mode,
        i = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(n & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Ja(o, n, 0, null),
        t = Tn(t, n, r, null),
        i.return = e,
        t.return = e,
        i.sibling = t,
        e.child = i,
        e.child.memoizedState = qu(r),
        e.memoizedState = Hu,
        t) : fd(e, o));
    if (s = t.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return Kb(t, e, o, n, a, s, r);
    if (i) {
        i = n.fallback,
        o = e.mode,
        s = t.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(o & 1) && e.child !== s ? (n = e.child,
        n.childLanes = 0,
        n.pendingProps = l,
        e.deletions = null) : (n = qr(s, l),
        n.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = qr(a, i) : (i = Tn(i, o, r, null),
        i.flags |= 2),
        i.return = e,
        n.return = e,
        n.sibling = i,
        e.child = n,
        n = i,
        i = e.child,
        o = t.child.memoizedState,
        o = o === null ? qu(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = t.childLanes & ~r,
        e.memoizedState = Hu,
        n
    }
    return i = t.child,
    t = i.sibling,
    n = qr(i, {
        mode: "visible",
        children: n.children
    }),
    !(e.mode & 1) && (n.lanes = r),
    n.return = e,
    n.sibling = null,
    t !== null && (r = e.deletions,
    r === null ? (e.deletions = [t],
    e.flags |= 16) : r.push(t)),
    e.child = n,
    e.memoizedState = null,
    n
}
function fd(t, e) {
    return e = Ja({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function _o(t, e, r, n) {
    return n !== null && Zc(n),
    Rs(e, t.child, null, r),
    t = fd(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Kb(t, e, r, n, s, i, o) {
    if (r)
        return e.flags & 256 ? (e.flags &= -257,
        n = Wl(Error(R(422))),
        _o(t, e, o, n)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (i = n.fallback,
        s = e.mode,
        n = Ja({
            mode: "visible",
            children: n.children
        }, s, 0, null),
        i = Tn(i, s, o, null),
        i.flags |= 2,
        n.return = e,
        i.return = e,
        n.sibling = i,
        e.child = n,
        e.mode & 1 && Rs(e, t.child, null, o),
        e.child.memoizedState = qu(o),
        e.memoizedState = Hu,
        i);
    if (!(e.mode & 1))
        return _o(t, e, o, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset,
        n)
            var a = n.dgst;
        return n = a,
        i = Error(R(419)),
        n = Wl(i, n, void 0),
        _o(t, e, o, n)
    }
    if (a = (o & t.childLanes) !== 0,
    Ge || a) {
        if (n = Ce,
        n !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (n.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            ur(t, s),
            It(n, t, s, -1))
        }
        return wd(),
        n = Wl(Error(R(421))),
        _o(t, e, o, n)
    }
    return s.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = o_.bind(null, t),
    s._reactRetry = e,
    null) : (t = i.treeContext,
    it = zr(s.nextSibling),
    ot = e,
    de = !0,
    At = null,
    t !== null && (ft[pt++] = sr,
    ft[pt++] = ir,
    ft[pt++] = Pn,
    sr = t.id,
    ir = t.overflow,
    Pn = e),
    e = fd(e, n.children),
    e.flags |= 4096,
    e)
}
function rf(t, e, r) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e),
    Mu(t.return, e, r)
}
function Hl(t, e, r, n, s) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s
    } : (i.isBackwards = e,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = n,
    i.tail = r,
    i.tailMode = s)
}
function R0(t, e, r) {
    var n = e.pendingProps
      , s = n.revealOrder
      , i = n.tail;
    if (Fe(t, e, n.children, r),
    n = fe.current,
    n & 2)
        n = n & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && rf(t, r, e);
                else if (t.tag === 19)
                    rf(t, r, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        n &= 1
    }
    if (oe(fe, n),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (r = e.child,
            s = null; r !== null; )
                t = r.alternate,
                t !== null && ya(t) === null && (s = r),
                r = r.sibling;
            r = s,
            r === null ? (s = e.child,
            e.child = null) : (s = r.sibling,
            r.sibling = null),
            Hl(e, !1, s, r, i);
            break;
        case "backwards":
            for (r = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && ya(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = r,
                r = s,
                s = t
            }
            Hl(e, !0, r, null, i);
            break;
        case "together":
            Hl(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Qo(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function cr(t, e, r) {
    if (t !== null && (e.dependencies = t.dependencies),
    Rn |= e.lanes,
    !(r & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(R(153));
    if (e.child !== null) {
        for (t = e.child,
        r = qr(t, t.pendingProps),
        e.child = r,
        r.return = e; t.sibling !== null; )
            t = t.sibling,
            r = r.sibling = qr(t, t.pendingProps),
            r.return = e;
        r.sibling = null
    }
    return e.child
}
function Gb(t, e, r) {
    switch (e.tag) {
    case 3:
        P0(e),
        Os();
        break;
    case 5:
        r0(e);
        break;
    case 1:
        Je(e.type) && ha(e);
        break;
    case 4:
        id(e, e.stateNode.containerInfo);
        break;
    case 10:
        var n = e.type._context
          , s = e.memoizedProps.value;
        oe(ma, n._currentValue),
        n._currentValue = s;
        break;
    case 13:
        if (n = e.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (oe(fe, fe.current & 1),
            e.flags |= 128,
            null) : r & e.child.childLanes ? O0(t, e, r) : (oe(fe, fe.current & 1),
            t = cr(t, e, r),
            t !== null ? t.sibling : null);
        oe(fe, fe.current & 1);
        break;
    case 19:
        if (n = (r & e.childLanes) !== 0,
        t.flags & 128) {
            if (n)
                return R0(t, e, r);
            e.flags |= 128
        }
        if (s = e.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        oe(fe, fe.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        T0(t, e, r)
    }
    return cr(t, e, r)
}
var j0, Ku, A0, N0;
j0 = function(t, e) {
    for (var r = e.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            t.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === e)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === e)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
Ku = function() {}
;
A0 = function(t, e, r, n) {
    var s = t.memoizedProps;
    if (s !== n) {
        t = e.stateNode,
        vn(Gt.current);
        var i = null;
        switch (r) {
        case "input":
            s = mu(t, s),
            n = mu(t, n),
            i = [];
            break;
        case "select":
            s = me({}, s, {
                value: void 0
            }),
            n = me({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = yu(t, s),
            n = yu(t, n),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof n.onClick == "function" && (t.onclick = ca)
        }
        bu(r, n);
        var o;
        r = null;
        for (u in s)
            if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (r || (r = {}),
                        r[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (_i.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var l = n[u];
            if (a = s != null ? s[u] : void 0,
            n.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}),
                            r[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}),
                            r[o] = l[o])
                    } else
                        r || (i || (i = []),
                        i.push(u, r)),
                        r = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (_i.hasOwnProperty(u) ? (l != null && u === "onScroll" && le("scroll", t),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
N0 = function(t, e, r, n) {
    r !== n && (e.flags |= 4)
}
;
function ei(t, e) {
    if (!de)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var r = null; e !== null; )
                e.alternate !== null && (r = e),
                e = e.sibling;
            r === null ? t.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = t.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null
        }
}
function $e(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , r = 0
      , n = 0;
    if (e)
        for (var s = t.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags & 14680064,
            n |= s.flags & 14680064,
            s.return = t,
            s = s.sibling;
    else
        for (s = t.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags,
            n |= s.flags,
            s.return = t,
            s = s.sibling;
    return t.subtreeFlags |= n,
    t.childLanes = r,
    e
}
function Qb(t, e, r) {
    var n = e.pendingProps;
    switch (Xc(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return $e(e),
        null;
    case 1:
        return Je(e.type) && da(),
        $e(e),
        null;
    case 3:
        return n = e.stateNode,
        js(),
        ue(Qe),
        ue(De),
        ad(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (t === null || t.child === null) && (wo(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        At !== null && (tc(At),
        At = null))),
        Ku(t, e),
        $e(e),
        null;
    case 5:
        od(e);
        var s = vn(Ni.current);
        if (r = e.type,
        t !== null && e.stateNode != null)
            A0(t, e, r, n, s),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!n) {
                if (e.stateNode === null)
                    throw Error(R(166));
                return $e(e),
                null
            }
            if (t = vn(Gt.current),
            wo(e)) {
                n = e.stateNode,
                r = e.type;
                var i = e.memoizedProps;
                switch (n[Ht] = e,
                n[ji] = i,
                t = (e.mode & 1) !== 0,
                r) {
                case "dialog":
                    le("cancel", n),
                    le("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    le("load", n);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < ai.length; s++)
                        le(ai[s], n);
                    break;
                case "source":
                    le("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    le("error", n),
                    le("load", n);
                    break;
                case "details":
                    le("toggle", n);
                    break;
                case "input":
                    dh(n, i),
                    le("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    le("invalid", n);
                    break;
                case "textarea":
                    fh(n, i),
                    le("invalid", n)
                }
                bu(r, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && yo(n.textContent, a, t),
                        s = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && yo(n.textContent, a, t),
                        s = ["children", "" + a]) : _i.hasOwnProperty(o) && a != null && o === "onScroll" && le("scroll", n)
                    }
                switch (r) {
                case "input":
                    uo(n),
                    hh(n, i, !0);
                    break;
                case "textarea":
                    uo(n),
                    ph(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = ca)
                }
                n = s,
                e.updateQueue = n,
                n !== null && (e.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = am(r)),
                t === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof n.is == "string" ? t = o.createElement(r, {
                    is: n.is
                }) : (t = o.createElement(r),
                r === "select" && (o = t,
                n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : t = o.createElementNS(t, r),
                t[Ht] = e,
                t[ji] = n,
                j0(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = _u(r, n),
                    r) {
                    case "dialog":
                        le("cancel", t),
                        le("close", t),
                        s = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        le("load", t),
                        s = n;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < ai.length; s++)
                            le(ai[s], t);
                        s = n;
                        break;
                    case "source":
                        le("error", t),
                        s = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        le("error", t),
                        le("load", t),
                        s = n;
                        break;
                    case "details":
                        le("toggle", t),
                        s = n;
                        break;
                    case "input":
                        dh(t, n),
                        s = mu(t, n),
                        le("invalid", t);
                        break;
                    case "option":
                        s = n;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        s = me({}, n, {
                            value: void 0
                        }),
                        le("invalid", t);
                        break;
                    case "textarea":
                        fh(t, n),
                        s = yu(t, n),
                        le("invalid", t);
                        break;
                    default:
                        s = n
                    }
                    bu(r, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? cm(t, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && lm(t, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && xi(t, l) : typeof l == "number" && xi(t, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (_i.hasOwnProperty(i) ? l != null && i === "onScroll" && le("scroll", t) : l != null && Uc(t, i, l, o))
                        }
                    switch (r) {
                    case "input":
                        uo(t),
                        hh(t, n, !1);
                        break;
                    case "textarea":
                        uo(t),
                        ph(t);
                        break;
                    case "option":
                        n.value != null && t.setAttribute("value", "" + Kr(n.value));
                        break;
                    case "select":
                        t.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? ls(t, !!n.multiple, i, !1) : n.defaultValue != null && ls(t, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (t.onclick = ca)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return $e(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            N0(t, e, t.memoizedProps, n);
        else {
            if (typeof n != "string" && e.stateNode === null)
                throw Error(R(166));
            if (r = vn(Ni.current),
            vn(Gt.current),
            wo(e)) {
                if (n = e.stateNode,
                r = e.memoizedProps,
                n[Ht] = e,
                (i = n.nodeValue !== r) && (t = ot,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        yo(n.nodeValue, r, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && yo(n.nodeValue, r, (t.mode & 1) !== 0)
                    }
                i && (e.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Ht] = e,
                e.stateNode = n
        }
        return $e(e),
        null;
    case 13:
        if (ue(fe),
        n = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (de && it !== null && e.mode & 1 && !(e.flags & 128))
                Ym(),
                Os(),
                e.flags |= 98560,
                i = !1;
            else if (i = wo(e),
            n !== null && n.dehydrated !== null) {
                if (t === null) {
                    if (!i)
                        throw Error(R(318));
                    if (i = e.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(R(317));
                    i[Ht] = e
                } else
                    Os(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                $e(e),
                i = !1
            } else
                At !== null && (tc(At),
                At = null),
                i = !0;
            if (!i)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = r,
        e) : (n = n !== null,
        n !== (t !== null && t.memoizedState !== null) && n && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || fe.current & 1 ? ke === 0 && (ke = 3) : wd())),
        e.updateQueue !== null && (e.flags |= 4),
        $e(e),
        null);
    case 4:
        return js(),
        Ku(t, e),
        t === null && Oi(e.stateNode.containerInfo),
        $e(e),
        null;
    case 10:
        return rd(e.type._context),
        $e(e),
        null;
    case 17:
        return Je(e.type) && da(),
        $e(e),
        null;
    case 19:
        if (ue(fe),
        i = e.memoizedState,
        i === null)
            return $e(e),
            null;
        if (n = (e.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (n)
                ei(i, !1);
            else {
                if (ke !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = ya(t),
                        o !== null) {
                            for (e.flags |= 128,
                            ei(i, !1),
                            n = o.updateQueue,
                            n !== null && (e.updateQueue = n,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            n = r,
                            r = e.child; r !== null; )
                                i = r,
                                t = n,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = t,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                t = o.dependencies,
                                i.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                r = r.sibling;
                            return oe(fe, fe.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                i.tail !== null && ye() > Ns && (e.flags |= 128,
                n = !0,
                ei(i, !1),
                e.lanes = 4194304)
            }
        else {
            if (!n)
                if (t = ya(o),
                t !== null) {
                    if (e.flags |= 128,
                    n = !0,
                    r = t.updateQueue,
                    r !== null && (e.updateQueue = r,
                    e.flags |= 4),
                    ei(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !de)
                        return $e(e),
                        null
                } else
                    2 * ye() - i.renderingStartTime > Ns && r !== 1073741824 && (e.flags |= 128,
                    n = !0,
                    ei(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (o.sibling = e.child,
            e.child = o) : (r = i.last,
            r !== null ? r.sibling = o : e.child = o,
            i.last = o)
        }
        return i.tail !== null ? (e = i.tail,
        i.rendering = e,
        i.tail = e.sibling,
        i.renderingStartTime = ye(),
        e.sibling = null,
        r = fe.current,
        oe(fe, n ? r & 1 | 2 : r & 1),
        e) : ($e(e),
        null);
    case 22:
    case 23:
        return yd(),
        n = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== n && (e.flags |= 8192),
        n && e.mode & 1 ? tt & 1073741824 && ($e(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : $e(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, e.tag))
}
function Jb(t, e) {
    switch (Xc(e),
    e.tag) {
    case 1:
        return Je(e.type) && da(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return js(),
        ue(Qe),
        ue(De),
        ad(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return od(e),
        null;
    case 13:
        if (ue(fe),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(R(340));
            Os()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return ue(fe),
        null;
    case 4:
        return js(),
        null;
    case 10:
        return rd(e.type._context),
        null;
    case 22:
    case 23:
        return yd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var xo = !1
  , Ue = !1
  , Yb = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function os(t, e) {
    var r = t.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                ve(t, e, n)
            }
        else
            r.current = null
}
function Gu(t, e, r) {
    try {
        r()
    } catch (n) {
        ve(t, e, n)
    }
}
var nf = !1;
function Xb(t, e) {
    if (ju = aa,
    t = Dm(),
    Jc(t)) {
        if ("selectionStart"in t)
            var r = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                r = (r = t.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var s = n.anchorOffset
                      , i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , h = t
                      , f = null;
                    t: for (; ; ) {
                        for (var d; h !== r || s !== 0 && h.nodeType !== 3 || (a = o + s),
                        h !== i || n !== 0 && h.nodeType !== 3 || (l = o + n),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (d = h.firstChild) !== null; )
                            f = h,
                            h = d;
                        for (; ; ) {
                            if (h === t)
                                break t;
                            if (f === r && ++u === s && (a = o),
                            f === i && ++c === n && (l = o),
                            (d = h.nextSibling) !== null)
                                break;
                            h = f,
                            f = h.parentNode
                        }
                        h = d
                    }
                    r = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (Au = {
        focusedElem: t,
        selectionRange: r
    },
    aa = !1,
    L = e; L !== null; )
        if (e = L,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            L = t;
        else
            for (; L !== null; ) {
                e = L;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var m = y.memoizedProps
                                  , w = y.memoizedState
                                  , g = e.stateNode
                                  , p = g.getSnapshotBeforeUpdate(e.elementType === e.type ? m : kt(e.type, m), w);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (_) {
                    ve(e, e.return, _)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    L = t;
                    break
                }
                L = e.return
            }
    return y = nf,
    nf = !1,
    y
}
function mi(t, e, r) {
    var n = e.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & t) === t) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Gu(e, r, i)
            }
            s = s.next
        } while (s !== n)
    }
}
function Ga(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var r = e = e.next;
        do {
            if ((r.tag & t) === t) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== e)
    }
}
function Qu(t) {
    var e = t.ref;
    if (e !== null) {
        var r = t.stateNode;
        switch (t.tag) {
        case 5:
            t = r;
            break;
        default:
            t = r
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function I0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    I0(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[Ht],
    delete e[ji],
    delete e[$u],
    delete e[Ib],
    delete e[$b])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function $0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function sf(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || $0(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Ju(t, e, r) {
    var n = t.tag;
    if (n === 5 || n === 6)
        t = t.stateNode,
        e ? r.nodeType === 8 ? r.parentNode.insertBefore(t, e) : r.insertBefore(t, e) : (r.nodeType === 8 ? (e = r.parentNode,
        e.insertBefore(t, r)) : (e = r,
        e.appendChild(t)),
        r = r._reactRootContainer,
        r != null || e.onclick !== null || (e.onclick = ca));
    else if (n !== 4 && (t = t.child,
    t !== null))
        for (Ju(t, e, r),
        t = t.sibling; t !== null; )
            Ju(t, e, r),
            t = t.sibling
}
function Yu(t, e, r) {
    var n = t.tag;
    if (n === 5 || n === 6)
        t = t.stateNode,
        e ? r.insertBefore(t, e) : r.appendChild(t);
    else if (n !== 4 && (t = t.child,
    t !== null))
        for (Yu(t, e, r),
        t = t.sibling; t !== null; )
            Yu(t, e, r),
            t = t.sibling
}
var Oe = null
  , Rt = !1;
function br(t, e, r) {
    for (r = r.child; r !== null; )
        L0(t, e, r),
        r = r.sibling
}
function L0(t, e, r) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
            Kt.onCommitFiberUnmount(Fa, r)
        } catch {}
    switch (r.tag) {
    case 5:
        Ue || os(r, e);
    case 6:
        var n = Oe
          , s = Rt;
        Oe = null,
        br(t, e, r),
        Oe = n,
        Rt = s,
        Oe !== null && (Rt ? (t = Oe,
        r = r.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r)) : Oe.removeChild(r.stateNode));
        break;
    case 18:
        Oe !== null && (Rt ? (t = Oe,
        r = r.stateNode,
        t.nodeType === 8 ? Dl(t.parentNode, r) : t.nodeType === 1 && Dl(t, r),
        Ti(t)) : Dl(Oe, r.stateNode));
        break;
    case 4:
        n = Oe,
        s = Rt,
        Oe = r.stateNode.containerInfo,
        Rt = !0,
        br(t, e, r),
        Oe = n,
        Rt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ue && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            s = n = n.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Gu(r, e, o),
                s = s.next
            } while (s !== n)
        }
        br(t, e, r);
        break;
    case 1:
        if (!Ue && (os(r, e),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (a) {
                ve(r, e, a)
            }
        br(t, e, r);
        break;
    case 21:
        br(t, e, r);
        break;
    case 22:
        r.mode & 1 ? (Ue = (n = Ue) || r.memoizedState !== null,
        br(t, e, r),
        Ue = n) : br(t, e, r);
        break;
    default:
        br(t, e, r)
    }
}
function of(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var r = t.stateNode;
        r === null && (r = t.stateNode = new Yb),
        e.forEach(function(n) {
            var s = a_.bind(null, t, n);
            r.has(n) || (r.add(n),
            n.then(s, s))
        })
    }
}
function xt(t, e) {
    var r = e.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            try {
                var i = t
                  , o = e
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Oe = a.stateNode,
                        Rt = !1;
                        break e;
                    case 3:
                        Oe = a.stateNode.containerInfo,
                        Rt = !0;
                        break e;
                    case 4:
                        Oe = a.stateNode.containerInfo,
                        Rt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Oe === null)
                    throw Error(R(160));
                L0(i, o, s),
                Oe = null,
                Rt = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                ve(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            U0(e, t),
            e = e.sibling
}
function U0(t, e) {
    var r = t.alternate
      , n = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (xt(e, t),
        Ft(t),
        n & 4) {
            try {
                mi(3, t, t.return),
                Ga(3, t)
            } catch (m) {
                ve(t, t.return, m)
            }
            try {
                mi(5, t, t.return)
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        break;
    case 1:
        xt(e, t),
        Ft(t),
        n & 512 && r !== null && os(r, r.return);
        break;
    case 5:
        if (xt(e, t),
        Ft(t),
        n & 512 && r !== null && os(r, r.return),
        t.flags & 32) {
            var s = t.stateNode;
            try {
                xi(s, "")
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        if (n & 4 && (s = t.stateNode,
        s != null)) {
            var i = t.memoizedProps
              , o = r !== null ? r.memoizedProps : i
              , a = t.type
              , l = t.updateQueue;
            if (t.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && im(s, i),
                    _u(a, o);
                    var u = _u(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , h = l[o + 1];
                        c === "style" ? cm(s, h) : c === "dangerouslySetInnerHTML" ? lm(s, h) : c === "children" ? xi(s, h) : Uc(s, c, h, u)
                    }
                    switch (a) {
                    case "input":
                        gu(s, i);
                        break;
                    case "textarea":
                        om(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var d = i.value;
                        d != null ? ls(s, !!i.multiple, d, !1) : f !== !!i.multiple && (i.defaultValue != null ? ls(s, !!i.multiple, i.defaultValue, !0) : ls(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[ji] = i
                } catch (m) {
                    ve(t, t.return, m)
                }
        }
        break;
    case 6:
        if (xt(e, t),
        Ft(t),
        n & 4) {
            if (t.stateNode === null)
                throw Error(R(162));
            s = t.stateNode,
            i = t.memoizedProps;
            try {
                s.nodeValue = i
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        break;
    case 3:
        if (xt(e, t),
        Ft(t),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Ti(e.containerInfo)
            } catch (m) {
                ve(t, t.return, m)
            }
        break;
    case 4:
        xt(e, t),
        Ft(t);
        break;
    case 13:
        xt(e, t),
        Ft(t),
        s = t.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (gd = ye())),
        n & 4 && of(t);
        break;
    case 22:
        if (c = r !== null && r.memoizedState !== null,
        t.mode & 1 ? (Ue = (u = Ue) || c,
        xt(e, t),
        Ue = u) : xt(e, t),
        Ft(t),
        n & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (L = t,
                c = t.child; c !== null; ) {
                    for (h = L = c; L !== null; ) {
                        switch (f = L,
                        d = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            mi(4, f, f.return);
                            break;
                        case 1:
                            os(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                n = f,
                                r = f.return;
                                try {
                                    e = n,
                                    y.props = e.memoizedProps,
                                    y.state = e.memoizedState,
                                    y.componentWillUnmount()
                                } catch (m) {
                                    ve(n, r, m)
                                }
                            }
                            break;
                        case 5:
                            os(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                lf(h);
                                continue
                            }
                        }
                        d !== null ? (d.return = f,
                        L = d) : lf(h)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            h = t; ; ) {
                if (h.tag === 5) {
                    if (c === null) {
                        c = h;
                        try {
                            s = h.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = h.stateNode,
                            l = h.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = um("display", o))
                        } catch (m) {
                            ve(t, t.return, m)
                        }
                    }
                } else if (h.tag === 6) {
                    if (c === null)
                        try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (m) {
                            ve(t, t.return, m)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === t) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === t)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === t)
                        break e;
                    c === h && (c = null),
                    h = h.return
                }
                c === h && (c = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        xt(e, t),
        Ft(t),
        n & 4 && of(t);
        break;
    case 21:
        break;
    default:
        xt(e, t),
        Ft(t)
    }
}
function Ft(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var r = t.return; r !== null; ) {
                    if ($0(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(R(160))
            }
            switch (n.tag) {
            case 5:
                var s = n.stateNode;
                n.flags & 32 && (xi(s, ""),
                n.flags &= -33);
                var i = sf(t);
                Yu(t, i, s);
                break;
            case 3:
            case 4:
                var o = n.stateNode.containerInfo
                  , a = sf(t);
                Ju(t, a, o);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function Zb(t, e, r) {
    L = t,
    D0(t)
}
function D0(t, e, r) {
    for (var n = (t.mode & 1) !== 0; L !== null; ) {
        var s = L
          , i = s.child;
        if (s.tag === 22 && n) {
            var o = s.memoizedState !== null || xo;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || Ue;
                a = xo;
                var u = Ue;
                if (xo = o,
                (Ue = l) && !u)
                    for (L = s; L !== null; )
                        o = L,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? uf(s) : l !== null ? (l.return = o,
                        L = l) : uf(s);
                for (; i !== null; )
                    L = i,
                    D0(i),
                    i = i.sibling;
                L = s,
                xo = a,
                Ue = u
            }
            af(t)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            L = i) : af(t)
    }
}
function af(t) {
    for (; L !== null; ) {
        var e = L;
        if (e.flags & 8772) {
            var r = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ue || Ga(5, e);
                        break;
                    case 1:
                        var n = e.stateNode;
                        if (e.flags & 4 && !Ue)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? r.memoizedProps : kt(e.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = e.updateQueue;
                        i !== null && Wh(e, i, n);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (r = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    r = e.child.stateNode;
                                    break;
                                case 1:
                                    r = e.child.stateNode
                                }
                            Wh(e, o, r)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (r === null && e.flags & 4) {
                            r = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var h = c.dehydrated;
                                    h !== null && Ti(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Ue || e.flags & 512 && Qu(e)
            } catch (f) {
                ve(e, e.return, f)
            }
        }
        if (e === t) {
            L = null;
            break
        }
        if (r = e.sibling,
        r !== null) {
            r.return = e.return,
            L = r;
            break
        }
        L = e.return
    }
}
function lf(t) {
    for (; L !== null; ) {
        var e = L;
        if (e === t) {
            L = null;
            break
        }
        var r = e.sibling;
        if (r !== null) {
            r.return = e.return,
            L = r;
            break
        }
        L = e.return
    }
}
function uf(t) {
    for (; L !== null; ) {
        var e = L;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var r = e.return;
                try {
                    Ga(4, e)
                } catch (l) {
                    ve(e, r, l)
                }
                break;
            case 1:
                var n = e.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var s = e.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        ve(e, s, l)
                    }
                }
                var i = e.return;
                try {
                    Qu(e)
                } catch (l) {
                    ve(e, i, l)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Qu(e)
                } catch (l) {
                    ve(e, o, l)
                }
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        if (e === t) {
            L = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return,
            L = a;
            break
        }
        L = e.return
    }
}
var e_ = Math.ceil
  , _a = fr.ReactCurrentDispatcher
  , pd = fr.ReactCurrentOwner
  , gt = fr.ReactCurrentBatchConfig
  , ee = 0
  , Ce = null
  , _e = null
  , Re = 0
  , tt = 0
  , as = en(0)
  , ke = 0
  , Ui = null
  , Rn = 0
  , Qa = 0
  , md = 0
  , gi = null
  , Ke = null
  , gd = 0
  , Ns = 1 / 0
  , er = null
  , xa = !1
  , Xu = null
  , Wr = null
  , Eo = !1
  , Ur = null
  , Ea = 0
  , vi = 0
  , Zu = null
  , Jo = -1
  , Yo = 0;
function Ve() {
    return ee & 6 ? ye() : Jo !== -1 ? Jo : Jo = ye()
}
function Hr(t) {
    return t.mode & 1 ? ee & 2 && Re !== 0 ? Re & -Re : Ub.transition !== null ? (Yo === 0 && (Yo = xm()),
    Yo) : (t = ne,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : Om(t.type)),
    t) : 1
}
function It(t, e, r, n) {
    if (50 < vi)
        throw vi = 0,
        Zu = null,
        Error(R(185));
    Qi(t, r, n),
    (!(ee & 2) || t !== Ce) && (t === Ce && (!(ee & 2) && (Qa |= r),
    ke === 4 && Pr(t, Re)),
    Ye(t, n),
    r === 1 && ee === 0 && !(e.mode & 1) && (Ns = ye() + 500,
    Ha && tn()))
}
function Ye(t, e) {
    var r = t.callbackNode;
    Uw(t, e);
    var n = oa(t, t === Ce ? Re : 0);
    if (n === 0)
        r !== null && vh(r),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = n & -n,
    t.callbackPriority !== e) {
        if (r != null && vh(r),
        e === 1)
            t.tag === 0 ? Lb(cf.bind(null, t)) : Gm(cf.bind(null, t)),
            Ab(function() {
                !(ee & 6) && tn()
            }),
            r = null;
        else {
            switch (Em(n)) {
            case 1:
                r = zc;
                break;
            case 4:
                r = bm;
                break;
            case 16:
                r = ia;
                break;
            case 536870912:
                r = _m;
                break;
            default:
                r = ia
            }
            r = q0(r, M0.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = r
    }
}
function M0(t, e) {
    if (Jo = -1,
    Yo = 0,
    ee & 6)
        throw Error(R(327));
    var r = t.callbackNode;
    if (fs() && t.callbackNode !== r)
        return null;
    var n = oa(t, t === Ce ? Re : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & t.expiredLanes || e)
        e = Sa(t, n);
    else {
        e = n;
        var s = ee;
        ee |= 2;
        var i = B0();
        (Ce !== t || Re !== e) && (er = null,
        Ns = ye() + 500,
        kn(t, e));
        do
            try {
                n_();
                break
            } catch (a) {
                F0(t, a)
            }
        while (!0);
        td(),
        _a.current = i,
        ee = s,
        _e !== null ? e = 0 : (Ce = null,
        Re = 0,
        e = ke)
    }
    if (e !== 0) {
        if (e === 2 && (s = Tu(t),
        s !== 0 && (n = s,
        e = ec(t, s))),
        e === 1)
            throw r = Ui,
            kn(t, 0),
            Pr(t, n),
            Ye(t, ye()),
            r;
        if (e === 6)
            Pr(t, n);
        else {
            if (s = t.current.alternate,
            !(n & 30) && !t_(s) && (e = Sa(t, n),
            e === 2 && (i = Tu(t),
            i !== 0 && (n = i,
            e = ec(t, i))),
            e === 1))
                throw r = Ui,
                kn(t, 0),
                Pr(t, n),
                Ye(t, ye()),
                r;
            switch (t.finishedWork = s,
            t.finishedLanes = n,
            e) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                cn(t, Ke, er);
                break;
            case 3:
                if (Pr(t, n),
                (n & 130023424) === n && (e = gd + 500 - ye(),
                10 < e)) {
                    if (oa(t, 0) !== 0)
                        break;
                    if (s = t.suspendedLanes,
                    (s & n) !== n) {
                        Ve(),
                        t.pingedLanes |= t.suspendedLanes & s;
                        break
                    }
                    t.timeoutHandle = Iu(cn.bind(null, t, Ke, er), e);
                    break
                }
                cn(t, Ke, er);
                break;
            case 4:
                if (Pr(t, n),
                (n & 4194240) === n)
                    break;
                for (e = t.eventTimes,
                s = -1; 0 < n; ) {
                    var o = 31 - Nt(n);
                    i = 1 << o,
                    o = e[o],
                    o > s && (s = o),
                    n &= ~i
                }
                if (n = s,
                n = ye() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * e_(n / 1960)) - n,
                10 < n) {
                    t.timeoutHandle = Iu(cn.bind(null, t, Ke, er), n);
                    break
                }
                cn(t, Ke, er);
                break;
            case 5:
                cn(t, Ke, er);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return Ye(t, ye()),
    t.callbackNode === r ? M0.bind(null, t) : null
}
function ec(t, e) {
    var r = gi;
    return t.current.memoizedState.isDehydrated && (kn(t, e).flags |= 256),
    t = Sa(t, e),
    t !== 2 && (e = Ke,
    Ke = r,
    e !== null && tc(e)),
    t
}
function tc(t) {
    Ke === null ? Ke = t : Ke.push.apply(Ke, t)
}
function t_(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var r = e.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var s = r[n]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!$t(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = e.child,
        e.subtreeFlags & 16384 && r !== null)
            r.return = e,
            e = r;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Pr(t, e) {
    for (e &= ~md,
    e &= ~Qa,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var r = 31 - Nt(e)
          , n = 1 << r;
        t[r] = -1,
        e &= ~n
    }
}
function cf(t) {
    if (ee & 6)
        throw Error(R(327));
    fs();
    var e = oa(t, 0);
    if (!(e & 1))
        return Ye(t, ye()),
        null;
    var r = Sa(t, e);
    if (t.tag !== 0 && r === 2) {
        var n = Tu(t);
        n !== 0 && (e = n,
        r = ec(t, n))
    }
    if (r === 1)
        throw r = Ui,
        kn(t, 0),
        Pr(t, e),
        Ye(t, ye()),
        r;
    if (r === 6)
        throw Error(R(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    cn(t, Ke, er),
    Ye(t, ye()),
    null
}
function vd(t, e) {
    var r = ee;
    ee |= 1;
    try {
        return t(e)
    } finally {
        ee = r,
        ee === 0 && (Ns = ye() + 500,
        Ha && tn())
    }
}
function jn(t) {
    Ur !== null && Ur.tag === 0 && !(ee & 6) && fs();
    var e = ee;
    ee |= 1;
    var r = gt.transition
      , n = ne;
    try {
        if (gt.transition = null,
        ne = 1,
        t)
            return t()
    } finally {
        ne = n,
        gt.transition = r,
        ee = e,
        !(ee & 6) && tn()
    }
}
function yd() {
    tt = as.current,
    ue(as)
}
function kn(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var r = t.timeoutHandle;
    if (r !== -1 && (t.timeoutHandle = -1,
    jb(r)),
    _e !== null)
        for (r = _e.return; r !== null; ) {
            var n = r;
            switch (Xc(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && da();
                break;
            case 3:
                js(),
                ue(Qe),
                ue(De),
                ad();
                break;
            case 5:
                od(n);
                break;
            case 4:
                js();
                break;
            case 13:
                ue(fe);
                break;
            case 19:
                ue(fe);
                break;
            case 10:
                rd(n.type._context);
                break;
            case 22:
            case 23:
                yd()
            }
            r = r.return
        }
    if (Ce = t,
    _e = t = qr(t.current, null),
    Re = tt = e,
    ke = 0,
    Ui = null,
    md = Qa = Rn = 0,
    Ke = gi = null,
    gn !== null) {
        for (e = 0; e < gn.length; e++)
            if (r = gn[e],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var s = n.next
                  , i = r.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    n.next = o
                }
                r.pending = n
            }
        gn = null
    }
    return t
}
function F0(t, e) {
    do {
        var r = _e;
        try {
            if (td(),
            Ko.current = ba,
            wa) {
                for (var n = pe.memoizedState; n !== null; ) {
                    var s = n.queue;
                    s !== null && (s.pending = null),
                    n = n.next
                }
                wa = !1
            }
            if (On = 0,
            Te = Ee = pe = null,
            pi = !1,
            Ii = 0,
            pd.current = null,
            r === null || r.return === null) {
                ke = 1,
                Ui = e,
                _e = null;
                break
            }
            e: {
                var i = t
                  , o = r.return
                  , a = r
                  , l = e;
                if (e = Re,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , h = c.tag;
                    if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var d = Jh(o);
                    if (d !== null) {
                        d.flags &= -257,
                        Yh(d, o, a, i, e),
                        d.mode & 1 && Qh(i, u, e),
                        e = d,
                        l = u;
                        var y = e.updateQueue;
                        if (y === null) {
                            var m = new Set;
                            m.add(l),
                            e.updateQueue = m
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            Qh(i, u, e),
                            wd();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (de && a.mode & 1) {
                    var w = Jh(o);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Yh(w, o, a, i, e),
                        Zc(As(l, a));
                        break e
                    }
                }
                i = l = As(l, a),
                ke !== 4 && (ke = 2),
                gi === null ? gi = [i] : gi.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        e &= -e,
                        i.lanes |= e;
                        var g = E0(i, l, e);
                        Vh(i, g);
                        break e;
                    case 1:
                        a = l;
                        var p = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Wr === null || !Wr.has(v)))) {
                            i.flags |= 65536,
                            e &= -e,
                            i.lanes |= e;
                            var _ = S0(i, a, e);
                            Vh(i, _);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            V0(r)
        } catch (E) {
            e = E,
            _e === r && r !== null && (_e = r = r.return);
            continue
        }
        break
    } while (!0)
}
function B0() {
    var t = _a.current;
    return _a.current = ba,
    t === null ? ba : t
}
function wd() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ce === null || !(Rn & 268435455) && !(Qa & 268435455) || Pr(Ce, Re)
}
function Sa(t, e) {
    var r = ee;
    ee |= 2;
    var n = B0();
    (Ce !== t || Re !== e) && (er = null,
    kn(t, e));
    do
        try {
            r_();
            break
        } catch (s) {
            F0(t, s)
        }
    while (!0);
    if (td(),
    ee = r,
    _a.current = n,
    _e !== null)
        throw Error(R(261));
    return Ce = null,
    Re = 0,
    ke
}
function r_() {
    for (; _e !== null; )
        z0(_e)
}
function n_() {
    for (; _e !== null && !Pw(); )
        z0(_e)
}
function z0(t) {
    var e = H0(t.alternate, t, tt);
    t.memoizedProps = t.pendingProps,
    e === null ? V0(t) : _e = e,
    pd.current = null
}
function V0(t) {
    var e = t;
    do {
        var r = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (r = Jb(r, e),
            r !== null) {
                r.flags &= 32767,
                _e = r;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                ke = 6,
                _e = null;
                return
            }
        } else if (r = Qb(r, e, tt),
        r !== null) {
            _e = r;
            return
        }
        if (e = e.sibling,
        e !== null) {
            _e = e;
            return
        }
        _e = e = t
    } while (e !== null);
    ke === 0 && (ke = 5)
}
function cn(t, e, r) {
    var n = ne
      , s = gt.transition;
    try {
        gt.transition = null,
        ne = 1,
        s_(t, e, r, n)
    } finally {
        gt.transition = s,
        ne = n
    }
    return null
}
function s_(t, e, r, n) {
    do
        fs();
    while (Ur !== null);
    if (ee & 6)
        throw Error(R(327));
    r = t.finishedWork;
    var s = t.finishedLanes;
    if (r === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    r === t.current)
        throw Error(R(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Dw(t, i),
    t === Ce && (_e = Ce = null,
    Re = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Eo || (Eo = !0,
    q0(ia, function() {
        return fs(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = gt.transition,
        gt.transition = null;
        var o = ne;
        ne = 1;
        var a = ee;
        ee |= 4,
        pd.current = null,
        Xb(t, r),
        U0(r, t),
        Sb(Au),
        aa = !!ju,
        Au = ju = null,
        t.current = r,
        Zb(r),
        Ow(),
        ee = a,
        ne = o,
        gt.transition = i
    } else
        t.current = r;
    if (Eo && (Eo = !1,
    Ur = t,
    Ea = s),
    i = t.pendingLanes,
    i === 0 && (Wr = null),
    Aw(r.stateNode),
    Ye(t, ye()),
    e !== null)
        for (n = t.onRecoverableError,
        r = 0; r < e.length; r++)
            s = e[r],
            n(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (xa)
        throw xa = !1,
        t = Xu,
        Xu = null,
        t;
    return Ea & 1 && t.tag !== 0 && fs(),
    i = t.pendingLanes,
    i & 1 ? t === Zu ? vi++ : (vi = 0,
    Zu = t) : vi = 0,
    tn(),
    null
}
function fs() {
    if (Ur !== null) {
        var t = Em(Ea)
          , e = gt.transition
          , r = ne;
        try {
            if (gt.transition = null,
            ne = 16 > t ? 16 : t,
            Ur === null)
                var n = !1;
            else {
                if (t = Ur,
                Ur = null,
                Ea = 0,
                ee & 6)
                    throw Error(R(331));
                var s = ee;
                for (ee |= 4,
                L = t.current; L !== null; ) {
                    var i = L
                      , o = i.child;
                    if (L.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        mi(8, c, i)
                                    }
                                    var h = c.child;
                                    if (h !== null)
                                        h.return = c,
                                        L = h;
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var f = c.sibling
                                              , d = c.return;
                                            if (I0(c),
                                            c === u) {
                                                L = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = d,
                                                L = f;
                                                break
                                            }
                                            L = d
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var m = y.child;
                                if (m !== null) {
                                    y.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null,
                                        m = w
                                    } while (m !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        L = o;
                    else
                        e: for (; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    mi(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                L = g;
                                break e
                            }
                            L = i.return
                        }
                }
                var p = t.current;
                for (L = p; L !== null; ) {
                    o = L;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                        L = v;
                    else
                        e: for (o = p; L !== null; ) {
                            if (a = L,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ga(9, a)
                                    }
                                } catch (E) {
                                    ve(a, a.return, E)
                                }
                            if (a === o) {
                                L = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                L = _;
                                break e
                            }
                            L = a.return
                        }
                }
                if (ee = s,
                tn(),
                Kt && typeof Kt.onPostCommitFiberRoot == "function")
                    try {
                        Kt.onPostCommitFiberRoot(Fa, t)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            ne = r,
            gt.transition = e
        }
    }
    return !1
}
function df(t, e, r) {
    e = As(r, e),
    e = E0(t, e, 1),
    t = Vr(t, e, 1),
    e = Ve(),
    t !== null && (Qi(t, 1, e),
    Ye(t, e))
}
function ve(t, e, r) {
    if (t.tag === 3)
        df(t, t, r);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                df(e, t, r);
                break
            } else if (e.tag === 1) {
                var n = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Wr === null || !Wr.has(n))) {
                    t = As(r, t),
                    t = S0(e, t, 1),
                    e = Vr(e, t, 1),
                    t = Ve(),
                    e !== null && (Qi(e, 1, t),
                    Ye(e, t));
                    break
                }
            }
            e = e.return
        }
}
function i_(t, e, r) {
    var n = t.pingCache;
    n !== null && n.delete(e),
    e = Ve(),
    t.pingedLanes |= t.suspendedLanes & r,
    Ce === t && (Re & r) === r && (ke === 4 || ke === 3 && (Re & 130023424) === Re && 500 > ye() - gd ? kn(t, 0) : md |= r),
    Ye(t, e)
}
function W0(t, e) {
    e === 0 && (t.mode & 1 ? (e = fo,
    fo <<= 1,
    !(fo & 130023424) && (fo = 4194304)) : e = 1);
    var r = Ve();
    t = ur(t, e),
    t !== null && (Qi(t, e, r),
    Ye(t, r))
}
function o_(t) {
    var e = t.memoizedState
      , r = 0;
    e !== null && (r = e.retryLane),
    W0(t, r)
}
function a_(t, e) {
    var r = 0;
    switch (t.tag) {
    case 13:
        var n = t.stateNode
          , s = t.memoizedState;
        s !== null && (r = s.retryLane);
        break;
    case 19:
        n = t.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    n !== null && n.delete(e),
    W0(t, r)
}
var H0;
H0 = function(t, e, r) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Qe.current)
            Ge = !0;
        else {
            if (!(t.lanes & r) && !(e.flags & 128))
                return Ge = !1,
                Gb(t, e, r);
            Ge = !!(t.flags & 131072)
        }
    else
        Ge = !1,
        de && e.flags & 1048576 && Qm(e, pa, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var n = e.type;
        Qo(t, e),
        t = e.pendingProps;
        var s = Ps(e, De.current);
        hs(e, r),
        s = ud(null, e, n, t, s, r);
        var i = cd();
        return e.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Je(n) ? (i = !0,
        ha(e)) : i = !1,
        e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        sd(e),
        s.updater = Ka,
        e.stateNode = s,
        s._reactInternals = e,
        Bu(e, n, t, r),
        e = Wu(null, e, n, !0, i, r)) : (e.tag = 0,
        de && i && Yc(e),
        Fe(null, e, s, r),
        e = e.child),
        e;
    case 16:
        n = e.elementType;
        e: {
            switch (Qo(t, e),
            t = e.pendingProps,
            s = n._init,
            n = s(n._payload),
            e.type = n,
            s = e.tag = u_(n),
            t = kt(n, t),
            s) {
            case 0:
                e = Vu(null, e, n, t, r);
                break e;
            case 1:
                e = ef(null, e, n, t, r);
                break e;
            case 11:
                e = Xh(null, e, n, t, r);
                break e;
            case 14:
                e = Zh(null, e, n, kt(n.type, t), r);
                break e
            }
            throw Error(R(306, n, ""))
        }
        return e;
    case 0:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : kt(n, s),
        Vu(t, e, n, s, r);
    case 1:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : kt(n, s),
        ef(t, e, n, s, r);
    case 3:
        e: {
            if (P0(e),
            t === null)
                throw Error(R(387));
            n = e.pendingProps,
            i = e.memoizedState,
            s = i.element,
            t0(t, e),
            va(e, n, null, r);
            var o = e.memoizedState;
            if (n = o.element,
            i.isDehydrated)
                if (i = {
                    element: n,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = i,
                e.memoizedState = i,
                e.flags & 256) {
                    s = As(Error(R(423)), e),
                    e = tf(t, e, n, r, s);
                    break e
                } else if (n !== s) {
                    s = As(Error(R(424)), e),
                    e = tf(t, e, n, r, s);
                    break e
                } else
                    for (it = zr(e.stateNode.containerInfo.firstChild),
                    ot = e,
                    de = !0,
                    At = null,
                    r = Zm(e, null, n, r),
                    e.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Os(),
                n === s) {
                    e = cr(t, e, r);
                    break e
                }
                Fe(t, e, n, r)
            }
            e = e.child
        }
        return e;
    case 5:
        return r0(e),
        t === null && Du(e),
        n = e.type,
        s = e.pendingProps,
        i = t !== null ? t.memoizedProps : null,
        o = s.children,
        Nu(n, s) ? o = null : i !== null && Nu(n, i) && (e.flags |= 32),
        C0(t, e),
        Fe(t, e, o, r),
        e.child;
    case 6:
        return t === null && Du(e),
        null;
    case 13:
        return O0(t, e, r);
    case 4:
        return id(e, e.stateNode.containerInfo),
        n = e.pendingProps,
        t === null ? e.child = Rs(e, null, n, r) : Fe(t, e, n, r),
        e.child;
    case 11:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : kt(n, s),
        Xh(t, e, n, s, r);
    case 7:
        return Fe(t, e, e.pendingProps, r),
        e.child;
    case 8:
        return Fe(t, e, e.pendingProps.children, r),
        e.child;
    case 12:
        return Fe(t, e, e.pendingProps.children, r),
        e.child;
    case 10:
        e: {
            if (n = e.type._context,
            s = e.pendingProps,
            i = e.memoizedProps,
            o = s.value,
            oe(ma, n._currentValue),
            n._currentValue = o,
            i !== null)
                if ($t(i.value, o)) {
                    if (i.children === s.children && !Qe.current) {
                        e = cr(t, e, r);
                        break e
                    }
                } else
                    for (i = e.child,
                    i !== null && (i.return = e); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === n) {
                                    if (i.tag === 1) {
                                        l = or(-1, r & -r),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    Mu(i.return, r, e),
                                    a.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === e.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(R(341));
                            o.lanes |= r,
                            a = o.alternate,
                            a !== null && (a.lanes |= r),
                            Mu(o, r, e),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Fe(t, e, s.children, r),
            e = e.child
        }
        return e;
    case 9:
        return s = e.type,
        n = e.pendingProps.children,
        hs(e, r),
        s = vt(s),
        n = n(s),
        e.flags |= 1,
        Fe(t, e, n, r),
        e.child;
    case 14:
        return n = e.type,
        s = kt(n, e.pendingProps),
        s = kt(n.type, s),
        Zh(t, e, n, s, r);
    case 15:
        return k0(t, e, e.type, e.pendingProps, r);
    case 17:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : kt(n, s),
        Qo(t, e),
        e.tag = 1,
        Je(n) ? (t = !0,
        ha(e)) : t = !1,
        hs(e, r),
        x0(e, n, s),
        Bu(e, n, s, r),
        Wu(null, e, n, !0, t, r);
    case 19:
        return R0(t, e, r);
    case 22:
        return T0(t, e, r)
    }
    throw Error(R(156, e.tag))
}
;
function q0(t, e) {
    return wm(t, e)
}
function l_(t, e, r, n) {
    this.tag = t,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function mt(t, e, r, n) {
    return new l_(t,e,r,n)
}
function bd(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function u_(t) {
    if (typeof t == "function")
        return bd(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Mc)
            return 11;
        if (t === Fc)
            return 14
    }
    return 2
}
function qr(t, e) {
    var r = t.alternate;
    return r === null ? (r = mt(t.tag, e, t.key, t.mode),
    r.elementType = t.elementType,
    r.type = t.type,
    r.stateNode = t.stateNode,
    r.alternate = t,
    t.alternate = r) : (r.pendingProps = e,
    r.type = t.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = t.flags & 14680064,
    r.childLanes = t.childLanes,
    r.lanes = t.lanes,
    r.child = t.child,
    r.memoizedProps = t.memoizedProps,
    r.memoizedState = t.memoizedState,
    r.updateQueue = t.updateQueue,
    e = t.dependencies,
    r.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    r.sibling = t.sibling,
    r.index = t.index,
    r.ref = t.ref,
    r
}
function Xo(t, e, r, n, s, i) {
    var o = 2;
    if (n = t,
    typeof t == "function")
        bd(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case Yn:
            return Tn(r.children, s, i, e);
        case Dc:
            o = 8,
            s |= 8;
            break;
        case du:
            return t = mt(12, r, e, s | 2),
            t.elementType = du,
            t.lanes = i,
            t;
        case hu:
            return t = mt(13, r, e, s),
            t.elementType = hu,
            t.lanes = i,
            t;
        case fu:
            return t = mt(19, r, e, s),
            t.elementType = fu,
            t.lanes = i,
            t;
        case rm:
            return Ja(r, s, i, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case em:
                    o = 10;
                    break e;
                case tm:
                    o = 9;
                    break e;
                case Mc:
                    o = 11;
                    break e;
                case Fc:
                    o = 14;
                    break e;
                case kr:
                    o = 16,
                    n = null;
                    break e
                }
            throw Error(R(130, t == null ? t : typeof t, ""))
        }
    return e = mt(o, r, e, s),
    e.elementType = t,
    e.type = n,
    e.lanes = i,
    e
}
function Tn(t, e, r, n) {
    return t = mt(7, t, n, e),
    t.lanes = r,
    t
}
function Ja(t, e, r, n) {
    return t = mt(22, t, n, e),
    t.elementType = rm,
    t.lanes = r,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function ql(t, e, r) {
    return t = mt(6, t, null, e),
    t.lanes = r,
    t
}
function Kl(t, e, r) {
    return e = mt(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = r,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function c_(t, e, r, n, s) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Cl(0),
    this.expirationTimes = Cl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Cl(0),
    this.identifierPrefix = n,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function _d(t, e, r, n, s, i, o, a, l) {
    return t = new c_(t,e,r,a,l),
    e === 1 ? (e = 1,
    i === !0 && (e |= 8)) : e = 0,
    i = mt(3, null, null, e),
    t.current = i,
    i.stateNode = t,
    i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    sd(i),
    t
}
function d_(t, e, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Jn,
        key: n == null ? null : "" + n,
        children: t,
        containerInfo: e,
        implementation: r
    }
}
function K0(t) {
    if (!t)
        return Gr;
    t = t._reactInternals;
    e: {
        if (In(t) !== t || t.tag !== 1)
            throw Error(R(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Je(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(R(171))
    }
    if (t.tag === 1) {
        var r = t.type;
        if (Je(r))
            return Km(t, r, e)
    }
    return e
}
function G0(t, e, r, n, s, i, o, a, l) {
    return t = _d(r, n, !0, t, s, i, o, a, l),
    t.context = K0(null),
    r = t.current,
    n = Ve(),
    s = Hr(r),
    i = or(n, s),
    i.callback = e ?? null,
    Vr(r, i, s),
    t.current.lanes = s,
    Qi(t, s, n),
    Ye(t, n),
    t
}
function Ya(t, e, r, n) {
    var s = e.current
      , i = Ve()
      , o = Hr(s);
    return r = K0(r),
    e.context === null ? e.context = r : e.pendingContext = r,
    e = or(i, o),
    e.payload = {
        element: t
    },
    n = n === void 0 ? null : n,
    n !== null && (e.callback = n),
    t = Vr(s, e, o),
    t !== null && (It(t, s, o, i),
    qo(t, s, o)),
    o
}
function ka(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function hf(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var r = t.retryLane;
        t.retryLane = r !== 0 && r < e ? r : e
    }
}
function xd(t, e) {
    hf(t, e),
    (t = t.alternate) && hf(t, e)
}
function h_() {
    return null
}
var Q0 = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function Ed(t) {
    this._internalRoot = t
}
Xa.prototype.render = Ed.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(R(409));
    Ya(t, e, null, null)
}
;
Xa.prototype.unmount = Ed.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        jn(function() {
            Ya(null, t, null, null)
        }),
        e[lr] = null
    }
}
;
function Xa(t) {
    this._internalRoot = t
}
Xa.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Tm();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var r = 0; r < Cr.length && e !== 0 && e < Cr[r].priority; r++)
            ;
        Cr.splice(r, 0, t),
        r === 0 && Pm(t)
    }
}
;
function Sd(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Za(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function ff() {}
function f_(t, e, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = ka(o);
                i.call(u)
            }
        }
        var o = G0(e, n, t, 0, null, !1, !1, "", ff);
        return t._reactRootContainer = o,
        t[lr] = o.current,
        Oi(t.nodeType === 8 ? t.parentNode : t),
        jn(),
        o
    }
    for (; s = t.lastChild; )
        t.removeChild(s);
    if (typeof n == "function") {
        var a = n;
        n = function() {
            var u = ka(l);
            a.call(u)
        }
    }
    var l = _d(t, 0, !1, null, null, !1, !1, "", ff);
    return t._reactRootContainer = l,
    t[lr] = l.current,
    Oi(t.nodeType === 8 ? t.parentNode : t),
    jn(function() {
        Ya(e, l, r, n)
    }),
    l
}
function el(t, e, r, n, s) {
    var i = r._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = ka(o);
                a.call(l)
            }
        }
        Ya(e, o, t, s)
    } else
        o = f_(r, e, t, s, n);
    return ka(o)
}
Sm = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var r = oi(e.pendingLanes);
            r !== 0 && (Vc(e, r | 1),
            Ye(e, ye()),
            !(ee & 6) && (Ns = ye() + 500,
            tn()))
        }
        break;
    case 13:
        jn(function() {
            var n = ur(t, 1);
            if (n !== null) {
                var s = Ve();
                It(n, t, 1, s)
            }
        }),
        xd(t, 1)
    }
}
;
Wc = function(t) {
    if (t.tag === 13) {
        var e = ur(t, 134217728);
        if (e !== null) {
            var r = Ve();
            It(e, t, 134217728, r)
        }
        xd(t, 134217728)
    }
}
;
km = function(t) {
    if (t.tag === 13) {
        var e = Hr(t)
          , r = ur(t, e);
        if (r !== null) {
            var n = Ve();
            It(r, t, e, n)
        }
        xd(t, e)
    }
}
;
Tm = function() {
    return ne
}
;
Cm = function(t, e) {
    var r = ne;
    try {
        return ne = t,
        e()
    } finally {
        ne = r
    }
}
;
Eu = function(t, e, r) {
    switch (e) {
    case "input":
        if (gu(t, r),
        e = r.name,
        r.type === "radio" && e != null) {
            for (r = t; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < r.length; e++) {
                var n = r[e];
                if (n !== t && n.form === t.form) {
                    var s = Wa(n);
                    if (!s)
                        throw Error(R(90));
                    sm(n),
                    gu(n, s)
                }
            }
        }
        break;
    case "textarea":
        om(t, r);
        break;
    case "select":
        e = r.value,
        e != null && ls(t, !!r.multiple, e, !1)
    }
}
;
fm = vd;
pm = jn;
var p_ = {
    usingClientEntryPoint: !1,
    Events: [Yi, ts, Wa, dm, hm, vd]
}
  , ti = {
    findFiberByHostInstance: mn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , m_ = {
    bundleType: ti.bundleType,
    version: ti.version,
    rendererPackageName: ti.rendererPackageName,
    rendererConfig: ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = vm(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: ti.findFiberByHostInstance || h_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!So.isDisabled && So.supportsFiber)
        try {
            Fa = So.inject(m_),
            Kt = So
        } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p_;
ut.createPortal = function(t, e) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sd(e))
        throw Error(R(200));
    return d_(t, e, null, r)
}
;
ut.createRoot = function(t, e) {
    if (!Sd(t))
        throw Error(R(299));
    var r = !1
      , n = ""
      , s = Q0;
    return e != null && (e.unstable_strictMode === !0 && (r = !0),
    e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    e = _d(t, 1, !1, null, null, r, !1, n, s),
    t[lr] = e.current,
    Oi(t.nodeType === 8 ? t.parentNode : t),
    new Ed(e)
}
;
ut.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(R(188)) : (t = Object.keys(t).join(","),
        Error(R(268, t)));
    return t = vm(e),
    t = t === null ? null : t.stateNode,
    t
}
;
ut.flushSync = function(t) {
    return jn(t)
}
;
ut.hydrate = function(t, e, r) {
    if (!Za(e))
        throw Error(R(200));
    return el(null, t, e, !0, r)
}
;
ut.hydrateRoot = function(t, e, r) {
    if (!Sd(t))
        throw Error(R(405));
    var n = r != null && r.hydratedSources || null
      , s = !1
      , i = ""
      , o = Q0;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    e = G0(e, null, t, 1, r ?? null, s, !1, i, o),
    t[lr] = e.current,
    Oi(t),
    n)
        for (t = 0; t < n.length; t++)
            r = n[t],
            s = r._getVersion,
            s = s(r._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [r, s] : e.mutableSourceEagerHydrationData.push(r, s);
    return new Xa(e)
}
;
ut.render = function(t, e, r) {
    if (!Za(e))
        throw Error(R(200));
    return el(null, t, e, !1, r)
}
;
ut.unmountComponentAtNode = function(t) {
    if (!Za(t))
        throw Error(R(40));
    return t._reactRootContainer ? (jn(function() {
        el(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[lr] = null
        })
    }),
    !0) : !1
}
;
ut.unstable_batchedUpdates = vd;
ut.unstable_renderSubtreeIntoContainer = function(t, e, r, n) {
    if (!Za(r))
        throw Error(R(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(R(38));
    return el(t, e, r, !1, n)
}
;
ut.version = "18.3.1-next-f1338f8080-20240426";
function J0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)
        } catch (t) {
            console.error(t)
        }
}
J0(),
Jp.exports = ut;
var Zi = Jp.exports;
const Y0 = Up(Zi);
var X0, pf = Zi;
X0 = pf.createRoot,
pf.hydrateRoot;
const g_ = "modulepreload"
  , v_ = function(t) {
    return "/" + t
}
  , mf = {}
  , y_ = function(e, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(r.map(l=>{
            if (l = v_(l),
            l in mf)
                return;
            mf[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const h = document.createElement("link");
            if (h.rel = u ? "stylesheet" : g_,
            u || (h.as = "script"),
            h.crossOrigin = "",
            h.href = l,
            a && h.setAttribute("nonce", a),
            document.head.appendChild(h),
            u)
                return new Promise((f,d)=>{
                    h.addEventListener("load", f),
                    h.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return s.then(o=>{
        for (const a of o || [])
            a.status === "rejected" && i(a.reason);
        return e().catch(i)
    }
    )
}
  , w_ = 1
  , b_ = 1e6;
let Gl = 0;
function __() {
    return Gl = (Gl + 1) % Number.MAX_SAFE_INTEGER,
    Gl.toString()
}
const Ql = new Map
  , gf = t=>{
    if (Ql.has(t))
        return;
    const e = setTimeout(()=>{
        Ql.delete(t),
        yi({
            type: "REMOVE_TOAST",
            toastId: t
        })
    }
    , b_);
    Ql.set(t, e)
}
  , x_ = (t,e)=>{
    switch (e.type) {
    case "ADD_TOAST":
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, w_)
        };
    case "UPDATE_TOAST":
        return {
            ...t,
            toasts: t.toasts.map(r=>r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = e;
            return r ? gf(r) : t.toasts.forEach(n=>{
                gf(n.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(n=>n.id === r || r === void 0 ? {
                    ...n,
                    open: !1
                } : n)
            }
        }
    case "REMOVE_TOAST":
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r=>r.id !== e.toastId)
        }
    }
}
  , Zo = [];
let ea = {
    toasts: []
};
function yi(t) {
    ea = x_(ea, t),
    Zo.forEach(e=>{
        e(ea)
    }
    )
}
function Or({...t}) {
    const e = __()
      , r = s=>yi({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: e
        }
    })
      , n = ()=>yi({
        type: "DISMISS_TOAST",
        toastId: e
    });
    return yi({
        type: "ADD_TOAST",
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: s=>{
                s || n()
            }
        }
    }),
    {
        id: e,
        dismiss: n,
        update: r
    }
}
function E_() {
    const [t,e] = b.useState(ea);
    return b.useEffect(()=>(Zo.push(e),
    ()=>{
        const r = Zo.indexOf(e);
        r > -1 && Zo.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: Or,
        dismiss: r=>yi({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
function Se(t, e, {checkForDefaultPrevented: r=!0}={}) {
    return function(s) {
        if (t == null || t(s),
        r === !1 || !s.defaultPrevented)
            return e == null ? void 0 : e(s)
    }
}
function vf(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function Z0(...t) {
    return e=>{
        let r = !1;
        const n = t.map(s=>{
            const i = vf(s, e);
            return !r && typeof i == "function" && (r = !0),
            i
        }
        );
        if (r)
            return ()=>{
                for (let s = 0; s < n.length; s++) {
                    const i = n[s];
                    typeof i == "function" ? i() : vf(t[s], null)
                }
            }
    }
}
function Lt(...t) {
    return b.useCallback(Z0(...t), t)
}
function tl(t, e=[]) {
    let r = [];
    function n(i, o) {
        const a = b.createContext(o)
          , l = r.length;
        r = [...r, o];
        const u = h=>{
            var g;
            const {scope: f, children: d, ...y} = h
              , m = ((g = f == null ? void 0 : f[t]) == null ? void 0 : g[l]) || a
              , w = b.useMemo(()=>y, Object.values(y));
            return x.jsx(m.Provider, {
                value: w,
                children: d
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(h, f) {
            var m;
            const d = ((m = f == null ? void 0 : f[t]) == null ? void 0 : m[l]) || a
              , y = b.useContext(d);
            if (y)
                return y;
            if (o !== void 0)
                return o;
            throw new Error(`\`${h}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const s = ()=>{
        const i = r.map(o=>b.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[t]) || i;
            return b.useMemo(()=>({
                [`__scope ${t}`]: {
                    ...a,
                    [t]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = t,
    [n, S_(s, ...e)]
}
function S_(...t) {
    const e = t[0];
    if (t.length === 1)
        return e;
    const r = ()=>{
        const n = t.map(s=>({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(i) {
            const o = n.reduce((a,{useScope: l, scopeName: u})=>{
                const h = l(i)[`__scope ${u}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return b.useMemo(()=>({
                [`__scope ${e.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return r.scopeName = e.scopeName,
    r
}
function Ta(t) {
    const e = T_(t)
      , r = b.forwardRef((n,s)=>{
        const {children: i, ...o} = n
          , a = b.Children.toArray(i)
          , l = a.find(P_);
        if (l) {
            const u = l.props.children
              , c = a.map(h=>h === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : h);
            return x.jsx(e, {
                ...o,
                ref: s,
                children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
            })
        }
        return x.jsx(e, {
            ...o,
            ref: s,
            children: i
        })
    }
    );
    return r.displayName = `${t}.Slot`,
    r
}
var k_ = Ta("Slot");
function T_(t) {
    const e = b.forwardRef((r,n)=>{
        const {children: s, ...i} = r;
        if (b.isValidElement(s)) {
            const o = R_(s)
              , a = O_(i, s.props);
            return s.type !== b.Fragment && (a.ref = n ? Z0(n, o) : o),
            b.cloneElement(s, a)
        }
        return b.Children.count(s) > 1 ? b.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var eg = Symbol("radix.slottable");
function C_(t) {
    const e = ({children: r})=>x.jsx(x.Fragment, {
        children: r
    });
    return e.displayName = `${t}.Slottable`,
    e.__radixId = eg,
    e
}
function P_(t) {
    return b.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === eg
}
function O_(t, e) {
    const r = {
        ...e
    };
    for (const n in e) {
        const s = t[n]
          , i = e[n];
        /^on[A-Z]/.test(n) ? s && i ? r[n] = (...a)=>{
            const l = i(...a);
            return s(...a),
            l
        }
        : s && (r[n] = s) : n === "style" ? r[n] = {
            ...s,
            ...i
        } : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...r
    }
}
function R_(t) {
    var n, s;
    let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get
      , r = e && "isReactWarning"in e && e.isReactWarning;
    return r ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get,
    r = e && "isReactWarning"in e && e.isReactWarning,
    r ? t.props.ref : t.props.ref || t.ref)
}
function j_(t) {
    const e = t + "CollectionProvider"
      , [r,n] = tl(e)
      , [s,i] = r(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = m=>{
        const {scope: w, children: g} = m
          , p = A.useRef(null)
          , v = A.useRef(new Map).current;
        return x.jsx(s, {
            scope: w,
            itemMap: v,
            collectionRef: p,
            children: g
        })
    }
    ;
    o.displayName = e;
    const a = t + "CollectionSlot"
      , l = Ta(a)
      , u = A.forwardRef((m,w)=>{
        const {scope: g, children: p} = m
          , v = i(a, g)
          , _ = Lt(w, v.collectionRef);
        return x.jsx(l, {
            ref: _,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = t + "CollectionItemSlot"
      , h = "data-radix-collection-item"
      , f = Ta(c)
      , d = A.forwardRef((m,w)=>{
        const {scope: g, children: p, ...v} = m
          , _ = A.useRef(null)
          , E = Lt(w, _)
          , S = i(c, g);
        return A.useEffect(()=>(S.itemMap.set(_, {
            ref: _,
            ...v
        }),
        ()=>void S.itemMap.delete(_))),
        x.jsx(f, {
            [h]: "",
            ref: E,
            children: p
        })
    }
    );
    d.displayName = c;
    function y(m) {
        const w = i(t + "CollectionConsumer", m);
        return A.useCallback(()=>{
            const p = w.collectionRef.current;
            if (!p)
                return [];
            const v = Array.from(p.querySelectorAll(`[${h}]`));
            return Array.from(w.itemMap.values()).sort((S,k)=>v.indexOf(S.ref.current) - v.indexOf(k.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: d
    }, y, n]
}
var A_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Ze = A_.reduce((t,e)=>{
    const r = Ta(`Primitive.${e}`)
      , n = b.forwardRef((s,i)=>{
        const {asChild: o, ...a} = s
          , l = o ? r : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return n.displayName = `Primitive.${e}`,
    {
        ...t,
        [e]: n
    }
}
, {});
function tg(t, e) {
    t && Zi.flushSync(()=>t.dispatchEvent(e))
}
function Qr(t) {
    const e = b.useRef(t);
    return b.useEffect(()=>{
        e.current = t
    }
    ),
    b.useMemo(()=>(...r)=>{
        var n;
        return (n = e.current) == null ? void 0 : n.call(e, ...r)
    }
    , [])
}
function N_(t, e=globalThis == null ? void 0 : globalThis.document) {
    const r = Qr(t);
    b.useEffect(()=>{
        const n = s=>{
            s.key === "Escape" && r(s)
        }
        ;
        return e.addEventListener("keydown", n, {
            capture: !0
        }),
        ()=>e.removeEventListener("keydown", n, {
            capture: !0
        })
    }
    , [r, e])
}
var I_ = "DismissableLayer", rc = "dismissableLayer.update", $_ = "dismissableLayer.pointerDownOutside", L_ = "dismissableLayer.focusOutside", yf, rg = b.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), kd = b.forwardRef((t,e)=>{
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: s, onFocusOutside: i, onInteractOutside: o, onDismiss: a, ...l} = t
      , u = b.useContext(rg)
      , [c,h] = b.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,d] = b.useState({})
      , y = Lt(e, k=>h(k))
      , m = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = m.indexOf(w)
      , p = c ? m.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , _ = p >= g
      , E = D_(k=>{
        const P = k.target
          , j = [...u.branches].some(N=>N.contains(P));
        !_ || j || (s == null || s(k),
        o == null || o(k),
        k.defaultPrevented || a == null || a())
    }
    , f)
      , S = M_(k=>{
        const P = k.target;
        [...u.branches].some(N=>N.contains(P)) || (i == null || i(k),
        o == null || o(k),
        k.defaultPrevented || a == null || a())
    }
    , f);
    return N_(k=>{
        p === u.layers.size - 1 && (n == null || n(k),
        !k.defaultPrevented && a && (k.preventDefault(),
        a()))
    }
    , f),
    b.useEffect(()=>{
        if (c)
            return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (yf = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            wf(),
            ()=>{
                r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = yf)
            }
    }
    , [c, f, r, u]),
    b.useEffect(()=>()=>{
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        wf())
    }
    , [c, u]),
    b.useEffect(()=>{
        const k = ()=>d({});
        return document.addEventListener(rc, k),
        ()=>document.removeEventListener(rc, k)
    }
    , []),
    x.jsx(Ze.div, {
        ...l,
        ref: y,
        style: {
            pointerEvents: v ? _ ? "auto" : "none" : void 0,
            ...t.style
        },
        onFocusCapture: Se(t.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Se(t.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Se(t.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
kd.displayName = I_;
var U_ = "DismissableLayerBranch"
  , ng = b.forwardRef((t,e)=>{
    const r = b.useContext(rg)
      , n = b.useRef(null)
      , s = Lt(e, n);
    return b.useEffect(()=>{
        const i = n.current;
        if (i)
            return r.branches.add(i),
            ()=>{
                r.branches.delete(i)
            }
    }
    , [r.branches]),
    x.jsx(Ze.div, {
        ...t,
        ref: s
    })
}
);
ng.displayName = U_;
function D_(t, e=globalThis == null ? void 0 : globalThis.document) {
    const r = Qr(t)
      , n = b.useRef(!1)
      , s = b.useRef(()=>{}
    );
    return b.useEffect(()=>{
        const i = a=>{
            if (a.target && !n.current) {
                let l = function() {
                    sg($_, r, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (e.removeEventListener("click", s.current),
                s.current = l,
                e.addEventListener("click", s.current, {
                    once: !0
                })) : l()
            } else
                e.removeEventListener("click", s.current);
            n.current = !1
        }
          , o = window.setTimeout(()=>{
            e.addEventListener("pointerdown", i)
        }
        , 0);
        return ()=>{
            window.clearTimeout(o),
            e.removeEventListener("pointerdown", i),
            e.removeEventListener("click", s.current)
        }
    }
    , [e, r]),
    {
        onPointerDownCapture: ()=>n.current = !0
    }
}
function M_(t, e=globalThis == null ? void 0 : globalThis.document) {
    const r = Qr(t)
      , n = b.useRef(!1);
    return b.useEffect(()=>{
        const s = i=>{
            i.target && !n.current && sg(L_, r, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return e.addEventListener("focusin", s),
        ()=>e.removeEventListener("focusin", s)
    }
    , [e, r]),
    {
        onFocusCapture: ()=>n.current = !0,
        onBlurCapture: ()=>n.current = !1
    }
}
function wf() {
    const t = new CustomEvent(rc);
    document.dispatchEvent(t)
}
function sg(t, e, r, {discrete: n}) {
    const s = r.originalEvent.target
      , i = new CustomEvent(t,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    e && s.addEventListener(t, e, {
        once: !0
    }),
    n ? tg(s, i) : s.dispatchEvent(i)
}
var F_ = kd
  , B_ = ng
  , Jr = globalThis != null && globalThis.document ? b.useLayoutEffect : ()=>{}
  , z_ = "Portal"
  , ig = b.forwardRef((t,e)=>{
    var a;
    const {container: r, ...n} = t
      , [s,i] = b.useState(!1);
    Jr(()=>i(!0), []);
    const o = r || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? Y0.createPortal(x.jsx(Ze.div, {
        ...n,
        ref: e
    }), o) : null
}
);
ig.displayName = z_;
function V_(t, e) {
    return b.useReducer((r,n)=>e[r][n] ?? r, t)
}
var Td = t=>{
    const {present: e, children: r} = t
      , n = W_(e)
      , s = typeof r == "function" ? r({
        present: n.isPresent
    }) : b.Children.only(r)
      , i = Lt(n.ref, H_(s));
    return typeof r == "function" || n.isPresent ? b.cloneElement(s, {
        ref: i
    }) : null
}
;
Td.displayName = "Presence";
function W_(t) {
    const [e,r] = b.useState()
      , n = b.useRef(null)
      , s = b.useRef(t)
      , i = b.useRef("none")
      , o = t ? "mounted" : "unmounted"
      , [a,l] = V_(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return b.useEffect(()=>{
        const u = ko(n.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Jr(()=>{
        const u = n.current
          , c = s.current;
        if (c !== t) {
            const f = i.current
              , d = ko(u);
            t ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== d ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = t
        }
    }
    , [t, l]),
    Jr(()=>{
        if (e) {
            let u;
            const c = e.ownerDocument.defaultView ?? window
              , h = d=>{
                const m = ko(n.current).includes(d.animationName);
                if (d.target === e && m && (l("ANIMATION_END"),
                !s.current)) {
                    const w = e.style.animationFillMode;
                    e.style.animationFillMode = "forwards",
                    u = c.setTimeout(()=>{
                        e.style.animationFillMode === "forwards" && (e.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = d=>{
                d.target === e && (i.current = ko(n.current))
            }
            ;
            return e.addEventListener("animationstart", f),
            e.addEventListener("animationcancel", h),
            e.addEventListener("animationend", h),
            ()=>{
                c.clearTimeout(u),
                e.removeEventListener("animationstart", f),
                e.removeEventListener("animationcancel", h),
                e.removeEventListener("animationend", h)
            }
        } else
            l("ANIMATION_END")
    }
    , [e, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: b.useCallback(u=>{
            n.current = u ? getComputedStyle(u) : null,
            r(u)
        }
        , [])
    }
}
function ko(t) {
    return (t == null ? void 0 : t.animationName) || "none"
}
function H_(t) {
    var n, s;
    let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get
      , r = e && "isReactWarning"in e && e.isReactWarning;
    return r ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get,
    r = e && "isReactWarning"in e && e.isReactWarning,
    r ? t.props.ref : t.props.ref || t.ref)
}
var q_ = Gp[" useInsertionEffect ".trim().toString()] || Jr;
function K_({prop: t, defaultProp: e, onChange: r=()=>{}
, caller: n}) {
    const [s,i,o] = G_({
        defaultProp: e,
        onChange: r
    })
      , a = t !== void 0
      , l = a ? t : s;
    {
        const c = b.useRef(t !== void 0);
        b.useEffect(()=>{
            const h = c.current;
            h !== a && console.warn(`${n} is changing from ${h ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, n])
    }
    const u = b.useCallback(c=>{
        var h;
        if (a) {
            const f = Q_(c) ? c(t) : c;
            f !== t && ((h = o.current) == null || h.call(o, f))
        } else
            i(c)
    }
    , [a, t, i, o]);
    return [l, u]
}
function G_({defaultProp: t, onChange: e}) {
    const [r,n] = b.useState(t)
      , s = b.useRef(r)
      , i = b.useRef(e);
    return q_(()=>{
        i.current = e
    }
    , [e]),
    b.useEffect(()=>{
        var o;
        s.current !== r && ((o = i.current) == null || o.call(i, r),
        s.current = r)
    }
    , [r, s]),
    [r, n, i]
}
function Q_(t) {
    return typeof t == "function"
}
var J_ = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Y_ = "VisuallyHidden"
  , rl = b.forwardRef((t,e)=>x.jsx(Ze.span, {
    ...t,
    ref: e,
    style: {
        ...J_,
        ...t.style
    }
}));
rl.displayName = Y_;
var X_ = rl
  , Cd = "ToastProvider"
  , [Pd,Z_,ex] = j_("Toast")
  , [og,bP] = tl("Toast", [ex])
  , [tx,nl] = og(Cd)
  , ag = t=>{
    const {__scopeToast: e, label: r="Notification", duration: n=5e3, swipeDirection: s="right", swipeThreshold: i=50, children: o} = t
      , [a,l] = b.useState(null)
      , [u,c] = b.useState(0)
      , h = b.useRef(!1)
      , f = b.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Cd}\`. Expected non-empty \`string\`.`),
    x.jsx(Pd.Provider, {
        scope: e,
        children: x.jsx(tx, {
            scope: e,
            label: r,
            duration: n,
            swipeDirection: s,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: b.useCallback(()=>c(d=>d + 1), []),
            onToastRemove: b.useCallback(()=>c(d=>d - 1), []),
            isFocusedToastEscapeKeyDownRef: h,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
ag.displayName = Cd;
var lg = "ToastViewport"
  , rx = ["F8"]
  , nc = "toast.viewportPause"
  , sc = "toast.viewportResume"
  , ug = b.forwardRef((t,e)=>{
    const {__scopeToast: r, hotkey: n=rx, label: s="Notifications ({hotkey})", ...i} = t
      , o = nl(lg, r)
      , a = Z_(r)
      , l = b.useRef(null)
      , u = b.useRef(null)
      , c = b.useRef(null)
      , h = b.useRef(null)
      , f = Lt(e, h, o.onViewportChange)
      , d = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , y = o.toastCount > 0;
    b.useEffect(()=>{
        const w = g=>{
            var v;
            n.length !== 0 && n.every(_=>g[_] || g.code === _) && ((v = h.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        ()=>document.removeEventListener("keydown", w)
    }
    , [n]),
    b.useEffect(()=>{
        const w = l.current
          , g = h.current;
        if (y && w && g) {
            const p = ()=>{
                if (!o.isClosePausedRef.current) {
                    const S = new CustomEvent(nc);
                    g.dispatchEvent(S),
                    o.isClosePausedRef.current = !0
                }
            }
              , v = ()=>{
                if (o.isClosePausedRef.current) {
                    const S = new CustomEvent(sc);
                    g.dispatchEvent(S),
                    o.isClosePausedRef.current = !1
                }
            }
              , _ = S=>{
                !w.contains(S.relatedTarget) && v()
            }
              , E = ()=>{
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", p),
            w.addEventListener("focusout", _),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            ()=>{
                w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", _),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [y, o.isClosePausedRef]);
    const m = b.useCallback(({tabbingDirection: w})=>{
        const p = a().map(v=>{
            const _ = v.ref.current
              , E = [_, ...mx(_)];
            return w === "forwards" ? E : E.reverse()
        }
        );
        return (w === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return b.useEffect(()=>{
        const w = h.current;
        if (w) {
            const g = p=>{
                var E, S, k;
                const v = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !v) {
                    const P = document.activeElement
                      , j = p.shiftKey;
                    if (p.target === w && j) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const D = m({
                        tabbingDirection: j ? "backwards" : "forwards"
                    })
                      , Q = D.findIndex(I=>I === P);
                    Jl(D.slice(Q + 1)) ? p.preventDefault() : j ? (S = u.current) == null || S.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            ()=>w.removeEventListener("keydown", g)
        }
    }
    , [a, m]),
    x.jsxs(B_, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", d),
        tabIndex: -1,
        style: {
            pointerEvents: y ? void 0 : "none"
        },
        children: [y && x.jsx(ic, {
            ref: u,
            onFocusFromOutsideViewport: ()=>{
                const w = m({
                    tabbingDirection: "forwards"
                });
                Jl(w)
            }
        }), x.jsx(Pd.Slot, {
            scope: r,
            children: x.jsx(Ze.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), y && x.jsx(ic, {
            ref: c,
            onFocusFromOutsideViewport: ()=>{
                const w = m({
                    tabbingDirection: "backwards"
                });
                Jl(w)
            }
        })]
    })
}
);
ug.displayName = lg;
var cg = "ToastFocusProxy"
  , ic = b.forwardRef((t,e)=>{
    const {__scopeToast: r, onFocusFromOutsideViewport: n, ...s} = t
      , i = nl(cg, r);
    return x.jsx(rl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: e,
        style: {
            position: "fixed"
        },
        onFocus: o=>{
            var u;
            const a = o.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && n()
        }
    })
}
);
ic.displayName = cg;
var eo = "Toast"
  , nx = "toast.swipeStart"
  , sx = "toast.swipeMove"
  , ix = "toast.swipeCancel"
  , ox = "toast.swipeEnd"
  , dg = b.forwardRef((t,e)=>{
    const {forceMount: r, open: n, defaultOpen: s, onOpenChange: i, ...o} = t
      , [a,l] = K_({
        prop: n,
        defaultProp: s ?? !0,
        onChange: i,
        caller: eo
    });
    return x.jsx(Td, {
        present: r || a,
        children: x.jsx(ux, {
            open: a,
            ...o,
            ref: e,
            onClose: ()=>l(!1),
            onPause: Qr(t.onPause),
            onResume: Qr(t.onResume),
            onSwipeStart: Se(t.onSwipeStart, u=>{
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Se(t.onSwipeMove, u=>{
                const {x: c, y: h} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${h}px`)
            }
            ),
            onSwipeCancel: Se(t.onSwipeCancel, u=>{
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Se(t.onSwipeEnd, u=>{
                const {x: c, y: h} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${h}px`),
                l(!1)
            }
            )
        })
    })
}
);
dg.displayName = eo;
var [ax,lx] = og(eo, {
    onClose() {}
})
  , ux = b.forwardRef((t,e)=>{
    const {__scopeToast: r, type: n="foreground", duration: s, open: i, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: h, onSwipeCancel: f, onSwipeEnd: d, ...y} = t
      , m = nl(eo, r)
      , [w,g] = b.useState(null)
      , p = Lt(e, I=>g(I))
      , v = b.useRef(null)
      , _ = b.useRef(null)
      , E = s || m.duration
      , S = b.useRef(0)
      , k = b.useRef(E)
      , P = b.useRef(0)
      , {onToastAdd: j, onToastRemove: N} = m
      , z = Qr(()=>{
        var X;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((X = m.viewport) == null || X.focus()),
        o()
    }
    )
      , D = b.useCallback(I=>{
        !I || I === 1 / 0 || (window.clearTimeout(P.current),
        S.current = new Date().getTime(),
        P.current = window.setTimeout(z, I))
    }
    , [z]);
    b.useEffect(()=>{
        const I = m.viewport;
        if (I) {
            const X = ()=>{
                D(k.current),
                u == null || u()
            }
              , V = ()=>{
                const q = new Date().getTime() - S.current;
                k.current = k.current - q,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return I.addEventListener(nc, V),
            I.addEventListener(sc, X),
            ()=>{
                I.removeEventListener(nc, V),
                I.removeEventListener(sc, X)
            }
        }
    }
    , [m.viewport, E, l, u, D]),
    b.useEffect(()=>{
        i && !m.isClosePausedRef.current && D(E)
    }
    , [i, E, m.isClosePausedRef, D]),
    b.useEffect(()=>(j(),
    ()=>N()), [j, N]);
    const Q = b.useMemo(()=>w ? yg(w) : null, [w]);
    return m.viewport ? x.jsxs(x.Fragment, {
        children: [Q && x.jsx(cx, {
            __scopeToast: r,
            role: "status",
            "aria-live": n === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), x.jsx(ax, {
            scope: r,
            onClose: z,
            children: Zi.createPortal(x.jsx(Pd.ItemSlot, {
                scope: r,
                children: x.jsx(F_, {
                    asChild: !0,
                    onEscapeKeyDown: Se(a, ()=>{
                        m.isFocusedToastEscapeKeyDownRef.current || z(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: x.jsx(Ze.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...y,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...t.style
                        },
                        onKeyDown: Se(t.onKeyDown, I=>{
                            I.key === "Escape" && (a == null || a(I.nativeEvent),
                            I.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: Se(t.onPointerDown, I=>{
                            I.button === 0 && (v.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }
                        ),
                        onPointerMove: Se(t.onPointerMove, I=>{
                            if (!v.current)
                                return;
                            const X = I.clientX - v.current.x
                              , V = I.clientY - v.current.y
                              , q = !!_.current
                              , C = ["left", "right"].includes(m.swipeDirection)
                              , O = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , $ = C ? O(0, X) : 0
                              , K = C ? 0 : O(0, V)
                              , F = I.pointerType === "touch" ? 10 : 2
                              , J = {
                                x: $,
                                y: K
                            }
                              , Z = {
                                originalEvent: I,
                                delta: J
                            };
                            q ? (_.current = J,
                            To(sx, h, Z, {
                                discrete: !1
                            })) : bf(J, m.swipeDirection, F) ? (_.current = J,
                            To(nx, c, Z, {
                                discrete: !1
                            }),
                            I.target.setPointerCapture(I.pointerId)) : (Math.abs(X) > F || Math.abs(V) > F) && (v.current = null)
                        }
                        ),
                        onPointerUp: Se(t.onPointerUp, I=>{
                            const X = _.current
                              , V = I.target;
                            if (V.hasPointerCapture(I.pointerId) && V.releasePointerCapture(I.pointerId),
                            _.current = null,
                            v.current = null,
                            X) {
                                const q = I.currentTarget
                                  , C = {
                                    originalEvent: I,
                                    delta: X
                                };
                                bf(X, m.swipeDirection, m.swipeThreshold) ? To(ox, d, C, {
                                    discrete: !0
                                }) : To(ix, f, C, {
                                    discrete: !0
                                }),
                                q.addEventListener("click", O=>O.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , cx = t=>{
    const {__scopeToast: e, children: r, ...n} = t
      , s = nl(eo, e)
      , [i,o] = b.useState(!1)
      , [a,l] = b.useState(!1);
    return fx(()=>o(!0)),
    b.useEffect(()=>{
        const u = window.setTimeout(()=>l(!0), 1e3);
        return ()=>window.clearTimeout(u)
    }
    , []),
    a ? null : x.jsx(ig, {
        asChild: !0,
        children: x.jsx(rl, {
            ...n,
            children: i && x.jsxs(x.Fragment, {
                children: [s.label, " ", r]
            })
        })
    })
}
  , dx = "ToastTitle"
  , hg = b.forwardRef((t,e)=>{
    const {__scopeToast: r, ...n} = t;
    return x.jsx(Ze.div, {
        ...n,
        ref: e
    })
}
);
hg.displayName = dx;
var hx = "ToastDescription"
  , fg = b.forwardRef((t,e)=>{
    const {__scopeToast: r, ...n} = t;
    return x.jsx(Ze.div, {
        ...n,
        ref: e
    })
}
);
fg.displayName = hx;
var pg = "ToastAction"
  , mg = b.forwardRef((t,e)=>{
    const {altText: r, ...n} = t;
    return r.trim() ? x.jsx(vg, {
        altText: r,
        asChild: !0,
        children: x.jsx(Od, {
            ...n,
            ref: e
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${pg}\`. Expected non-empty \`string\`.`),
    null)
}
);
mg.displayName = pg;
var gg = "ToastClose"
  , Od = b.forwardRef((t,e)=>{
    const {__scopeToast: r, ...n} = t
      , s = lx(gg, r);
    return x.jsx(vg, {
        asChild: !0,
        children: x.jsx(Ze.button, {
            type: "button",
            ...n,
            ref: e,
            onClick: Se(t.onClick, s.onClose)
        })
    })
}
);
Od.displayName = gg;
var vg = b.forwardRef((t,e)=>{
    const {__scopeToast: r, altText: n, ...s} = t;
    return x.jsx(Ze.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": n || void 0,
        ...s,
        ref: e
    })
}
);
function yg(t) {
    const e = [];
    return Array.from(t.childNodes).forEach(n=>{
        if (n.nodeType === n.TEXT_NODE && n.textContent && e.push(n.textContent),
        px(n)) {
            const s = n.ariaHidden || n.hidden || n.style.display === "none"
              , i = n.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (i) {
                    const o = n.dataset.radixToastAnnounceAlt;
                    o && e.push(o)
                } else
                    e.push(...yg(n))
        }
    }
    ),
    e
}
function To(t, e, r, {discrete: n}) {
    const s = r.originalEvent.currentTarget
      , i = new CustomEvent(t,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    e && s.addEventListener(t, e, {
        once: !0
    }),
    n ? tg(s, i) : s.dispatchEvent(i)
}
var bf = (t,e,r=0)=>{
    const n = Math.abs(t.x)
      , s = Math.abs(t.y)
      , i = n > s;
    return e === "left" || e === "right" ? i && n > r : !i && s > r
}
;
function fx(t=()=>{}
) {
    const e = Qr(t);
    Jr(()=>{
        let r = 0
          , n = 0;
        return r = window.requestAnimationFrame(()=>n = window.requestAnimationFrame(e)),
        ()=>{
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(n)
        }
    }
    , [e])
}
function px(t) {
    return t.nodeType === t.ELEMENT_NODE
}
function mx(t) {
    const e = []
      , r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n=>{
            const s = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        e.push(r.currentNode);
    return e
}
function Jl(t) {
    const e = document.activeElement;
    return t.some(r=>r === e ? !0 : (r.focus(),
    document.activeElement !== e))
}
var gx = ag
  , wg = ug
  , bg = dg
  , _g = hg
  , xg = fg
  , Eg = mg
  , Sg = Od;
function kg(t) {
    var e, r, n = "";
    if (typeof t == "string" || typeof t == "number")
        n += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var s = t.length;
            for (e = 0; e < s; e++)
                t[e] && (r = kg(t[e])) && (n && (n += " "),
                n += r)
        } else
            for (r in t)
                t[r] && (n && (n += " "),
                n += r);
    return n
}
function Tg() {
    for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++)
        (t = arguments[r]) && (e = kg(t)) && (n && (n += " "),
        n += e);
    return n
}
const _f = t=>typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , xf = Tg
  , Cg = (t,e)=>r=>{
    var n;
    if ((e == null ? void 0 : e.variants) == null)
        return xf(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: s, defaultVariants: i} = e
      , o = Object.keys(s).map(u=>{
        const c = r == null ? void 0 : r[u]
          , h = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const f = _f(c) || _f(h);
        return s[u][f]
    }
    )
      , a = r && Object.entries(r).reduce((u,c)=>{
        let[h,f] = c;
        return f === void 0 || (u[h] = f),
        u
    }
    , {})
      , l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u,c)=>{
        let {class: h, className: f, ...d} = c;
        return Object.entries(d).every(y=>{
            let[m,w] = y;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...a
            }[m]) : {
                ...i,
                ...a
            }[m] === w
        }
        ) ? [...u, h, f] : u
    }
    , []);
    return xf(t, o, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = t=>t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Pg = (...t)=>t.filter((e,r,n)=>!!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = b.forwardRef(({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: n, className: s="", children: i, iconNode: o, ...a},l)=>b.createElement("svg", {
    ref: l,
    ...yx,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: n ? Number(r) * 24 / Number(e) : r,
    className: Pg("lucide", s),
    ...a
}, [...o.map(([u,c])=>b.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = (t,e)=>{
    const r = b.forwardRef(({className: n, ...s},i)=>b.createElement(wx, {
        ref: i,
        iconNode: e,
        className: Pg(`lucide-${vx(t)}`, n),
        ...s
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = bx("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Rd = "-"
  , xx = t=>{
    const e = Sx(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = t;
    return {
        getClassGroupId: o=>{
            const a = o.split(Rd);
            return a[0] === "" && a.length !== 1 && a.shift(),
            Og(a, e) || Ex(o)
        }
        ,
        getConflictingClassGroupIds: (o,a)=>{
            const l = r[o] || [];
            return a && n[o] ? [...l, ...n[o]] : l
        }
    }
}
  , Og = (t,e)=>{
    var o;
    if (t.length === 0)
        return e.classGroupId;
    const r = t[0]
      , n = e.nextPart.get(r)
      , s = n ? Og(t.slice(1), n) : void 0;
    if (s)
        return s;
    if (e.validators.length === 0)
        return;
    const i = t.join(Rd);
    return (o = e.validators.find(({validator: a})=>a(i))) == null ? void 0 : o.classGroupId
}
  , Ef = /^\[(.+)\]$/
  , Ex = t=>{
    if (Ef.test(t)) {
        const e = Ef.exec(t)[1]
          , r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , Sx = t=>{
    const {theme: e, prefix: r} = t
      , n = {
        nextPart: new Map,
        validators: []
    };
    return Tx(Object.entries(t.classGroups), r).forEach(([i,o])=>{
        oc(o, n, i, e)
    }
    ),
    n
}
  , oc = (t,e,r,n)=>{
    t.forEach(s=>{
        if (typeof s == "string") {
            const i = s === "" ? e : Sf(e, s);
            i.classGroupId = r;
            return
        }
        if (typeof s == "function") {
            if (kx(s)) {
                oc(s(n), e, r, n);
                return
            }
            e.validators.push({
                validator: s,
                classGroupId: r
            });
            return
        }
        Object.entries(s).forEach(([i,o])=>{
            oc(o, Sf(e, i), r, n)
        }
        )
    }
    )
}
  , Sf = (t,e)=>{
    let r = t;
    return e.split(Rd).forEach(n=>{
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , kx = t=>t.isThemeGetter
  , Tx = (t,e)=>e ? t.map(([r,n])=>{
    const s = n.map(i=>typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o,a])=>[e + o, a])) : i);
    return [r, s]
}
) : t
  , Cx = t=>{
    if (t < 1)
        return {
            get: ()=>{}
            ,
            set: ()=>{}
        };
    let e = 0
      , r = new Map
      , n = new Map;
    const s = (i,o)=>{
        r.set(i, o),
        e++,
        e > t && (e = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(i) {
            let o = r.get(i);
            if (o !== void 0)
                return o;
            if ((o = n.get(i)) !== void 0)
                return s(i, o),
                o
        },
        set(i, o) {
            r.has(i) ? r.set(i, o) : s(i, o)
        }
    }
}
  , Rg = "!"
  , Px = t=>{
    const {separator: e, experimentalParseClassName: r} = t
      , n = e.length === 1
      , s = e[0]
      , i = e.length
      , o = a=>{
        const l = [];
        let u = 0, c = 0, h;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (u === 0) {
                if (g === s && (n || a.slice(w, w + i) === e)) {
                    l.push(a.slice(c, w)),
                    c = w + i;
                    continue
                }
                if (g === "/") {
                    h = w;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , d = f.startsWith(Rg)
          , y = d ? f.substring(1) : f
          , m = h && h > c ? h - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: d,
            baseClassName: y,
            maybePostfixModifierPosition: m
        }
    }
    ;
    return r ? a=>r({
        className: a,
        parseClassName: o
    }) : o
}
  , Ox = t=>{
    if (t.length <= 1)
        return t;
    const e = [];
    let r = [];
    return t.forEach(n=>{
        n[0] === "[" ? (e.push(...r.sort(), n),
        r = []) : r.push(n)
    }
    ),
    e.push(...r.sort()),
    e
}
  , Rx = t=>({
    cache: Cx(t.cacheSize),
    parseClassName: Px(t),
    ...xx(t)
})
  , jx = /\s+/
  , Ax = (t,e)=>{
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: s} = e
      , i = []
      , o = t.trim().split(jx);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: h, baseClassName: f, maybePostfixModifierPosition: d} = r(u);
        let y = !!d
          , m = n(y ? f.substring(0, d) : f);
        if (!m) {
            if (!y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (m = n(f),
            !m) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            y = !1
        }
        const w = Ox(c).join(":")
          , g = h ? w + Rg : w
          , p = g + m;
        if (i.includes(p))
            continue;
        i.push(p);
        const v = s(m, y);
        for (let _ = 0; _ < v.length; ++_) {
            const E = v[_];
            i.push(g + E)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Nx() {
    let t = 0, e, r, n = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (r = jg(e)) && (n && (n += " "),
        n += r);
    return n
}
const jg = t=>{
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let n = 0; n < t.length; n++)
        t[n] && (e = jg(t[n])) && (r && (r += " "),
        r += e);
    return r
}
;
function Ix(t, ...e) {
    let r, n, s, i = o;
    function o(l) {
        const u = e.reduce((c,h)=>h(c), t());
        return r = Rx(u),
        n = r.cache.get,
        s = r.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = n(l);
        if (u)
            return u;
        const c = Ax(l, r);
        return s(l, c),
        c
    }
    return function() {
        return i(Nx.apply(null, arguments))
    }
}
const ae = t=>{
    const e = r=>r[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , Ag = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , $x = /^\d+\/\d+$/
  , Lx = new Set(["px", "full", "screen"])
  , Ux = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Dx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Mx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Fx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Bx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Xt = t=>ps(t) || Lx.has(t) || $x.test(t)
  , _r = t=>Fs(t, "length", Qx)
  , ps = t=>!!t && !Number.isNaN(Number(t))
  , Yl = t=>Fs(t, "number", ps)
  , ri = t=>!!t && Number.isInteger(Number(t))
  , zx = t=>t.endsWith("%") && ps(t.slice(0, -1))
  , G = t=>Ag.test(t)
  , xr = t=>Ux.test(t)
  , Vx = new Set(["length", "size", "percentage"])
  , Wx = t=>Fs(t, Vx, Ng)
  , Hx = t=>Fs(t, "position", Ng)
  , qx = new Set(["image", "url"])
  , Kx = t=>Fs(t, qx, Yx)
  , Gx = t=>Fs(t, "", Jx)
  , ni = ()=>!0
  , Fs = (t,e,r)=>{
    const n = Ag.exec(t);
    return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1
}
  , Qx = t=>Dx.test(t) && !Mx.test(t)
  , Ng = ()=>!1
  , Jx = t=>Fx.test(t)
  , Yx = t=>Bx.test(t)
  , Xx = ()=>{
    const t = ae("colors")
      , e = ae("spacing")
      , r = ae("blur")
      , n = ae("brightness")
      , s = ae("borderColor")
      , i = ae("borderRadius")
      , o = ae("borderSpacing")
      , a = ae("borderWidth")
      , l = ae("contrast")
      , u = ae("grayscale")
      , c = ae("hueRotate")
      , h = ae("invert")
      , f = ae("gap")
      , d = ae("gradientColorStops")
      , y = ae("gradientColorStopPositions")
      , m = ae("inset")
      , w = ae("margin")
      , g = ae("opacity")
      , p = ae("padding")
      , v = ae("saturate")
      , _ = ae("scale")
      , E = ae("sepia")
      , S = ae("skew")
      , k = ae("space")
      , P = ae("translate")
      , j = ()=>["auto", "contain", "none"]
      , N = ()=>["auto", "hidden", "clip", "visible", "scroll"]
      , z = ()=>["auto", G, e]
      , D = ()=>[G, e]
      , Q = ()=>["", Xt, _r]
      , I = ()=>["auto", ps, G]
      , X = ()=>["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , V = ()=>["solid", "dashed", "dotted", "double", "none"]
      , q = ()=>["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , C = ()=>["start", "end", "center", "between", "around", "evenly", "stretch"]
      , O = ()=>["", "0", G]
      , $ = ()=>["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = ()=>[ps, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ni],
            spacing: [Xt, _r],
            blur: ["none", "", xr, G],
            brightness: K(),
            borderColor: [t],
            borderRadius: ["none", "", "full", xr, G],
            borderSpacing: D(),
            borderWidth: Q(),
            contrast: K(),
            grayscale: O(),
            hueRotate: K(),
            invert: O(),
            gap: D(),
            gradientColorStops: [t],
            gradientColorStopPositions: [zx, _r],
            inset: z(),
            margin: z(),
            opacity: K(),
            padding: D(),
            saturate: K(),
            scale: K(),
            sepia: O(),
            skew: K(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [xr]
            }],
            "break-after": [{
                "break-after": $()
            }],
            "break-before": [{
                "break-before": $()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...X(), G]
            }],
            overflow: [{
                overflow: N()
            }],
            "overflow-x": [{
                "overflow-x": N()
            }],
            "overflow-y": [{
                "overflow-y": N()
            }],
            overscroll: [{
                overscroll: j()
            }],
            "overscroll-x": [{
                "overscroll-x": j()
            }],
            "overscroll-y": [{
                "overscroll-y": j()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [m]
            }],
            "inset-x": [{
                "inset-x": [m]
            }],
            "inset-y": [{
                "inset-y": [m]
            }],
            start: [{
                start: [m]
            }],
            end: [{
                end: [m]
            }],
            top: [{
                top: [m]
            }],
            right: [{
                right: [m]
            }],
            bottom: [{
                bottom: [m]
            }],
            left: [{
                left: [m]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ri, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: O()
            }],
            shrink: [{
                shrink: O()
            }],
            order: [{
                order: ["first", "last", "none", ri, G]
            }],
            "grid-cols": [{
                "grid-cols": [ni]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ri, G]
                }, G]
            }],
            "col-start": [{
                "col-start": I()
            }],
            "col-end": [{
                "col-end": I()
            }],
            "grid-rows": [{
                "grid-rows": [ni]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ri, G]
                }, G]
            }],
            "row-start": [{
                "row-start": I()
            }],
            "row-end": [{
                "row-end": I()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...C()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...C(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...C(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, e]
            }],
            "min-w": [{
                "min-w": [G, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [xr]
                }, xr]
            }],
            h: [{
                h: [G, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", xr, _r]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Yl]
            }],
            "font-family": [{
                font: [ni]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", ps, Yl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xt, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [t]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [t]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...V(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Xt, _r]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Xt, G]
            }],
            "text-decoration-color": [{
                decoration: [t]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...X(), Hx]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Wx]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Kx]
            }],
            "bg-color": [{
                bg: [t]
            }],
            "gradient-from-pos": [{
                from: [y]
            }],
            "gradient-via-pos": [{
                via: [y]
            }],
            "gradient-to-pos": [{
                to: [y]
            }],
            "gradient-from": [{
                from: [d]
            }],
            "gradient-via": [{
                via: [d]
            }],
            "gradient-to": [{
                to: [d]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...V(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: V()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...V()]
            }],
            "outline-offset": [{
                "outline-offset": [Xt, G]
            }],
            "outline-w": [{
                outline: [Xt, _r]
            }],
            "outline-color": [{
                outline: [t]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [t]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [Xt, _r]
            }],
            "ring-offset-color": [{
                "ring-offset": [t]
            }],
            shadow: [{
                shadow: ["", "inner", "none", xr, Gx]
            }],
            "shadow-color": [{
                shadow: [ni]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", xr, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [h]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [h]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [ri, G]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [S]
            }],
            "skew-y": [{
                "skew-y": [S]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", t]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [t]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [t, "none"]
            }],
            "stroke-w": [{
                stroke: [Xt, _r, Yl]
            }],
            stroke: [{
                stroke: [t, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Zx = Ix(Xx);
function Mt(...t) {
    return Zx(Tg(t))
}
const e1 = gx
  , Ig = b.forwardRef(({className: t, ...e},r)=>x.jsx(wg, {
    ref: r,
    className: Mt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
}));
Ig.displayName = wg.displayName;
const t1 = Cg("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , $g = b.forwardRef(({className: t, variant: e, ...r},n)=>x.jsx(bg, {
    ref: n,
    className: Mt(t1({
        variant: e
    }), t),
    ...r
}));
$g.displayName = bg.displayName;
const r1 = b.forwardRef(({className: t, ...e},r)=>x.jsx(Eg, {
    ref: r,
    className: Mt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
}));
r1.displayName = Eg.displayName;
const Lg = b.forwardRef(({className: t, ...e},r)=>x.jsx(Sg, {
    ref: r,
    className: Mt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: x.jsx(_x, {
        className: "h-4 w-4"
    })
}));
Lg.displayName = Sg.displayName;
const Ug = b.forwardRef(({className: t, ...e},r)=>x.jsx(_g, {
    ref: r,
    className: Mt("text-sm font-semibold", t),
    ...e
}));
Ug.displayName = _g.displayName;
const Dg = b.forwardRef(({className: t, ...e},r)=>x.jsx(xg, {
    ref: r,
    className: Mt("text-sm opacity-90", t),
    ...e
}));
Dg.displayName = xg.displayName;
function n1() {
    const {toasts: t} = E_();
    return x.jsxs(e1, {
        children: [t.map(function({id: e, title: r, description: n, action: s, ...i}) {
            return x.jsxs($g, {
                ...i,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && x.jsx(Ug, {
                        children: r
                    }), n && x.jsx(Dg, {
                        children: n
                    })]
                }), s, x.jsx(Lg, {})]
            }, e)
        }), x.jsx(Ig, {})]
    })
}
var kf = ["light", "dark"]
  , s1 = "(prefers-color-scheme: dark)"
  , i1 = b.createContext(void 0)
  , o1 = {
    setTheme: t=>{}
    ,
    themes: []
}
  , a1 = ()=>{
    var t;
    return (t = b.useContext(i1)) != null ? t : o1
}
;
b.memo(({forcedTheme: t, storageKey: e, attribute: r, enableSystem: n, enableColorScheme: s, defaultTheme: i, value: o, attrs: a, nonce: l})=>{
    let u = i === "system"
      , c = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(y=>`'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`
      , h = s ? kf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (y,m=!1,w=!0)=>{
        let g = o ? o[y] : y
          , p = m ? y + "|| ''" : `'${g}'`
          , v = "";
        return s && w && !m && kf.includes(y) && (v += `d.style.colorScheme = '${y}';`),
        r === "class" ? m || g ? v += `c.add(${p})` : v += "null" : g && (v += `d[s](n,${p})`),
        v
    }
      , d = t ? `!function(){${c}${f(t)}}()` : n ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${s1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${h}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${h}}catch(t){}}();`;
    return b.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: d
        }
    })
}
);
var l1 = t=>{
    switch (t) {
    case "success":
        return d1;
    case "info":
        return f1;
    case "warning":
        return h1;
    case "error":
        return p1;
    default:
        return null
    }
}
  , u1 = Array(12).fill(0)
  , c1 = ({visible: t, className: e})=>A.createElement("div", {
    className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
    "data-visible": t
}, A.createElement("div", {
    className: "sonner-spinner"
}, u1.map((r,n)=>A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , d1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , h1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , f1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , p1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , m1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, A.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), A.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , g1 = ()=>{
    let[t,e] = A.useState(document.hidden);
    return A.useEffect(()=>{
        let r = ()=>{
            e(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", r),
        ()=>window.removeEventListener("visibilitychange", r)
    }
    , []),
    t
}
  , ac = 1
  , v1 = class {
    constructor() {
        this.subscribe = t=>(this.subscribers.push(t),
        ()=>{
            let e = this.subscribers.indexOf(t);
            this.subscribers.splice(e, 1)
        }
        ),
        this.publish = t=>{
            this.subscribers.forEach(e=>e(t))
        }
        ,
        this.addToast = t=>{
            this.publish(t),
            this.toasts = [...this.toasts, t]
        }
        ,
        this.create = t=>{
            var e;
            let {message: r, ...n} = t
              , s = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : ac++
              , i = this.toasts.find(a=>a.id === s)
              , o = t.dismissible === void 0 ? !0 : t.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i ? this.toasts = this.toasts.map(a=>a.id === s ? (this.publish({
                ...a,
                ...t,
                id: s,
                title: r
            }),
            {
                ...a,
                ...t,
                id: s,
                dismissible: o,
                title: r
            }) : a) : this.addToast({
                title: r,
                ...n,
                dismissible: o,
                id: s
            }),
            s
        }
        ,
        this.dismiss = t=>(this.dismissedToasts.add(t),
        t || this.toasts.forEach(e=>{
            this.subscribers.forEach(r=>r({
                id: e.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(e=>e({
            id: t,
            dismiss: !0
        })),
        t),
        this.message = (t,e)=>this.create({
            ...e,
            message: t
        }),
        this.error = (t,e)=>this.create({
            ...e,
            message: t,
            type: "error"
        }),
        this.success = (t,e)=>this.create({
            ...e,
            type: "success",
            message: t
        }),
        this.info = (t,e)=>this.create({
            ...e,
            type: "info",
            message: t
        }),
        this.warning = (t,e)=>this.create({
            ...e,
            type: "warning",
            message: t
        }),
        this.loading = (t,e)=>this.create({
            ...e,
            type: "loading",
            message: t
        }),
        this.promise = (t,e)=>{
            if (!e)
                return;
            let r;
            e.loading !== void 0 && (r = this.create({
                ...e,
                promise: t,
                type: "loading",
                message: e.loading,
                description: typeof e.description != "function" ? e.description : void 0
            }));
            let n = t instanceof Promise ? t : t(), s = r !== void 0, i, o = n.then(async l=>{
                if (i = ["resolve", l],
                A.isValidElement(l))
                    s = !1,
                    this.create({
                        id: r,
                        type: "default",
                        message: l
                    });
                else if (w1(l) && !l.ok) {
                    s = !1;
                    let u = typeof e.error == "function" ? await e.error(`HTTP error! status: ${l.status}`) : e.error
                      , c = typeof e.description == "function" ? await e.description(`HTTP error! status: ${l.status}`) : e.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (e.success !== void 0) {
                    s = !1;
                    let u = typeof e.success == "function" ? await e.success(l) : e.success
                      , c = typeof e.description == "function" ? await e.description(l) : e.description;
                    this.create({
                        id: r,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l=>{
                if (i = ["reject", l],
                e.error !== void 0) {
                    s = !1;
                    let u = typeof e.error == "function" ? await e.error(l) : e.error
                      , c = typeof e.description == "function" ? await e.description(l) : e.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally(()=>{
                var l;
                s && (this.dismiss(r),
                r = void 0),
                (l = e.finally) == null || l.call(e)
            }
            ), a = ()=>new Promise((l,u)=>o.then(()=>i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof r != "string" && typeof r != "number" ? {
                unwrap: a
            } : Object.assign(r, {
                unwrap: a
            })
        }
        ,
        this.custom = (t,e)=>{
            let r = (e == null ? void 0 : e.id) || ac++;
            return this.create({
                jsx: t(r),
                id: r,
                ...e
            }),
            r
        }
        ,
        this.getActiveToasts = ()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , qe = new v1
  , y1 = (t,e)=>{
    let r = (e == null ? void 0 : e.id) || ac++;
    return qe.addToast({
        title: t,
        ...e,
        id: r
    }),
    r
}
  , w1 = t=>t && typeof t == "object" && "ok"in t && typeof t.ok == "boolean" && "status"in t && typeof t.status == "number"
  , b1 = y1
  , _1 = ()=>qe.toasts
  , x1 = ()=>qe.getActiveToasts();
Object.assign(b1, {
    success: qe.success,
    info: qe.info,
    warning: qe.warning,
    error: qe.error,
    custom: qe.custom,
    message: qe.message,
    promise: qe.promise,
    dismiss: qe.dismiss,
    loading: qe.loading
}, {
    getHistory: _1,
    getToasts: x1
});
function E1(t, {insertAt: e}={}) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    e === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t))
}
E1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Co(t) {
    return t.label !== void 0
}
var S1 = 3
  , k1 = "32px"
  , T1 = "16px"
  , Tf = 4e3
  , C1 = 356
  , P1 = 14
  , O1 = 20
  , R1 = 200;
function Et(...t) {
    return t.filter(Boolean).join(" ")
}
function j1(t) {
    let[e,r] = t.split("-")
      , n = [];
    return e && n.push(e),
    r && n.push(r),
    n
}
var A1 = t=>{
    var e, r, n, s, i, o, a, l, u, c, h;
    let {invert: f, toast: d, unstyled: y, interacting: m, setHeights: w, visibleToasts: g, heights: p, index: v, toasts: _, expanded: E, removeToast: S, defaultRichColors: k, closeButton: P, style: j, cancelButtonStyle: N, actionButtonStyle: z, className: D="", descriptionClassName: Q="", duration: I, position: X, gap: V, loadingIcon: q, expandByDefault: C, classNames: O, icons: $, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: F} = t
      , [J,Z] = A.useState(null)
      , [we,Ae] = A.useState(null)
      , [re,$n] = A.useState(!1)
      , [pr,nn] = A.useState(!1)
      , [mr,Ln] = A.useState(!1)
      , [gr,no] = A.useState(!1)
      , [vl,so] = A.useState(!1)
      , [yl,qs] = A.useState(0)
      , [Un,Xd] = A.useState(0)
      , Ks = A.useRef(d.duration || I || Tf)
      , Zd = A.useRef(null)
      , sn = A.useRef(null)
      , $y = v === 0
      , Ly = v + 1 <= g
      , dt = d.type
      , Dn = d.dismissible !== !1
      , Uy = d.className || ""
      , Dy = d.descriptionClassName || ""
      , io = A.useMemo(()=>p.findIndex(W=>W.toastId === d.id) || 0, [p, d.id])
      , My = A.useMemo(()=>{
        var W;
        return (W = d.closeButton) != null ? W : P
    }
    , [d.closeButton, P])
      , eh = A.useMemo(()=>d.duration || I || Tf, [d.duration, I])
      , wl = A.useRef(0)
      , Mn = A.useRef(0)
      , th = A.useRef(0)
      , Fn = A.useRef(null)
      , [Fy,By] = X.split("-")
      , rh = A.useMemo(()=>p.reduce((W,se,ce)=>ce >= io ? W : W + se.height, 0), [p, io])
      , nh = g1()
      , zy = d.invert || f
      , bl = dt === "loading";
    Mn.current = A.useMemo(()=>io * V + rh, [io, rh]),
    A.useEffect(()=>{
        Ks.current = eh
    }
    , [eh]),
    A.useEffect(()=>{
        $n(!0)
    }
    , []),
    A.useEffect(()=>{
        let W = sn.current;
        if (W) {
            let se = W.getBoundingClientRect().height;
            return Xd(se),
            w(ce=>[{
                toastId: d.id,
                height: se,
                position: d.position
            }, ...ce]),
            ()=>w(ce=>ce.filter(wt=>wt.toastId !== d.id))
        }
    }
    , [w, d.id]),
    A.useLayoutEffect(()=>{
        if (!re)
            return;
        let W = sn.current
          , se = W.style.height;
        W.style.height = "auto";
        let ce = W.getBoundingClientRect().height;
        W.style.height = se,
        Xd(ce),
        w(wt=>wt.find(bt=>bt.toastId === d.id) ? wt.map(bt=>bt.toastId === d.id ? {
            ...bt,
            height: ce
        } : bt) : [{
            toastId: d.id,
            height: ce,
            position: d.position
        }, ...wt])
    }
    , [re, d.title, d.description, w, d.id]);
    let vr = A.useCallback(()=>{
        nn(!0),
        qs(Mn.current),
        w(W=>W.filter(se=>se.toastId !== d.id)),
        setTimeout(()=>{
            S(d)
        }
        , R1)
    }
    , [d, S, w, Mn]);
    A.useEffect(()=>{
        if (d.promise && dt === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let W;
        return E || m || F && nh ? (()=>{
            if (th.current < wl.current) {
                let se = new Date().getTime() - wl.current;
                Ks.current = Ks.current - se
            }
            th.current = new Date().getTime()
        }
        )() : Ks.current !== 1 / 0 && (wl.current = new Date().getTime(),
        W = setTimeout(()=>{
            var se;
            (se = d.onAutoClose) == null || se.call(d, d),
            vr()
        }
        , Ks.current)),
        ()=>clearTimeout(W)
    }
    , [E, m, d, dt, F, nh, vr]),
    A.useEffect(()=>{
        d.delete && vr()
    }
    , [vr, d.delete]);
    function Vy() {
        var W, se, ce;
        return $ != null && $.loading ? A.createElement("div", {
            className: Et(O == null ? void 0 : O.loader, (W = d == null ? void 0 : d.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, $.loading) : q ? A.createElement("div", {
            className: Et(O == null ? void 0 : O.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, q) : A.createElement(c1, {
            className: Et(O == null ? void 0 : O.loader, (ce = d == null ? void 0 : d.classNames) == null ? void 0 : ce.loader),
            visible: dt === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: sn,
        className: Et(D, Uy, O == null ? void 0 : O.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, O == null ? void 0 : O.default, O == null ? void 0 : O[dt], (r = d == null ? void 0 : d.classNames) == null ? void 0 : r[dt]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = d.richColors) != null ? n : k,
        "data-styled": !(d.jsx || d.unstyled || y),
        "data-mounted": re,
        "data-promise": !!d.promise,
        "data-swiped": vl,
        "data-removed": pr,
        "data-visible": Ly,
        "data-y-position": Fy,
        "data-x-position": By,
        "data-index": v,
        "data-front": $y,
        "data-swiping": mr,
        "data-dismissible": Dn,
        "data-type": dt,
        "data-invert": zy,
        "data-swipe-out": gr,
        "data-swipe-direction": we,
        "data-expanded": !!(E || C && re),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": _.length - v,
            "--offset": `${pr ? yl : Mn.current}px`,
            "--initial-height": C ? "auto" : `${Un}px`,
            ...j,
            ...d.style
        },
        onDragEnd: ()=>{
            Ln(!1),
            Z(null),
            Fn.current = null
        }
        ,
        onPointerDown: W=>{
            bl || !Dn || (Zd.current = new Date,
            qs(Mn.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Ln(!0),
            Fn.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: ()=>{
            var W, se, ce, wt;
            if (gr || !Dn)
                return;
            Fn.current = null;
            let bt = Number(((W = sn.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , yr = Number(((se = sn.current) == null ? void 0 : se.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , on = new Date().getTime() - ((ce = Zd.current) == null ? void 0 : ce.getTime())
              , _t = J === "x" ? bt : yr
              , wr = Math.abs(_t) / on;
            if (Math.abs(_t) >= O1 || wr > .11) {
                qs(Mn.current),
                (wt = d.onDismiss) == null || wt.call(d, d),
                Ae(J === "x" ? bt > 0 ? "right" : "left" : yr > 0 ? "down" : "up"),
                vr(),
                no(!0),
                so(!1);
                return
            }
            Ln(!1),
            Z(null)
        }
        ,
        onPointerMove: W=>{
            var se, ce, wt, bt;
            if (!Fn.current || !Dn || ((se = window.getSelection()) == null ? void 0 : se.toString().length) > 0)
                return;
            let yr = W.clientY - Fn.current.y
              , on = W.clientX - Fn.current.x
              , _t = (ce = t.swipeDirections) != null ? ce : j1(X);
            !J && (Math.abs(on) > 1 || Math.abs(yr) > 1) && Z(Math.abs(on) > Math.abs(yr) ? "x" : "y");
            let wr = {
                x: 0,
                y: 0
            };
            J === "y" ? (_t.includes("top") || _t.includes("bottom")) && (_t.includes("top") && yr < 0 || _t.includes("bottom") && yr > 0) && (wr.y = yr) : J === "x" && (_t.includes("left") || _t.includes("right")) && (_t.includes("left") && on < 0 || _t.includes("right") && on > 0) && (wr.x = on),
            (Math.abs(wr.x) > 0 || Math.abs(wr.y) > 0) && so(!0),
            (wt = sn.current) == null || wt.style.setProperty("--swipe-amount-x", `${wr.x}px`),
            (bt = sn.current) == null || bt.style.setProperty("--swipe-amount-y", `${wr.y}px`)
        }
    }, My && !d.jsx ? A.createElement("button", {
        "aria-label": K,
        "data-disabled": bl,
        "data-close-button": !0,
        onClick: bl || !Dn ? ()=>{}
        : ()=>{
            var W;
            vr(),
            (W = d.onDismiss) == null || W.call(d, d)
        }
        ,
        className: Et(O == null ? void 0 : O.closeButton, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.closeButton)
    }, (i = $ == null ? void 0 : $.close) != null ? i : m1) : null, d.jsx || b.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : A.createElement(A.Fragment, null, dt || d.icon || d.promise ? A.createElement("div", {
        "data-icon": "",
        className: Et(O == null ? void 0 : O.icon, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Vy() : null, d.type !== "loading" ? d.icon || ($ == null ? void 0 : $[dt]) || l1(dt) : null) : null, A.createElement("div", {
        "data-content": "",
        className: Et(O == null ? void 0 : O.content, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.content)
    }, A.createElement("div", {
        "data-title": "",
        className: Et(O == null ? void 0 : O.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? A.createElement("div", {
        "data-description": "",
        className: Et(Q, Dy, O == null ? void 0 : O.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), b.isValidElement(d.cancel) ? d.cancel : d.cancel && Co(d.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || N,
        onClick: W=>{
            var se, ce;
            Co(d.cancel) && Dn && ((ce = (se = d.cancel).onClick) == null || ce.call(se, W),
            vr())
        }
        ,
        className: Et(O == null ? void 0 : O.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, b.isValidElement(d.action) ? d.action : d.action && Co(d.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || z,
        onClick: W=>{
            var se, ce;
            Co(d.action) && ((ce = (se = d.action).onClick) == null || ce.call(se, W),
            !W.defaultPrevented && vr())
        }
        ,
        className: Et(O == null ? void 0 : O.actionButton, (h = d == null ? void 0 : d.classNames) == null ? void 0 : h.actionButton)
    }, d.action.label) : null))
}
;
function Cf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}
function N1(t, e) {
    let r = {};
    return [t, e].forEach((n,s)=>{
        let i = s === 1
          , o = i ? "--mobile-offset" : "--offset"
          , a = i ? T1 : k1;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c=>{
                r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach(u=>{
            n[u] === void 0 ? r[`${o}-${u}`] = a : r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u]
        }
        ) : l(a)
    }
    ),
    r
}
var I1 = b.forwardRef(function(t, e) {
    let {invert: r, position: n="bottom-right", hotkey: s=["altKey", "KeyT"], expand: i, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: h, duration: f, style: d, visibleToasts: y=S1, toastOptions: m, dir: w=Cf(), gap: g=P1, loadingIcon: p, icons: v, containerAriaLabel: _="Notifications", pauseWhenPageIsHidden: E} = t
      , [S,k] = A.useState([])
      , P = A.useMemo(()=>Array.from(new Set([n].concat(S.filter(F=>F.position).map(F=>F.position)))), [S, n])
      , [j,N] = A.useState([])
      , [z,D] = A.useState(!1)
      , [Q,I] = A.useState(!1)
      , [X,V] = A.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , q = A.useRef(null)
      , C = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , O = A.useRef(null)
      , $ = A.useRef(!1)
      , K = A.useCallback(F=>{
        k(J=>{
            var Z;
            return (Z = J.find(we=>we.id === F.id)) != null && Z.delete || qe.dismiss(F.id),
            J.filter(({id: we})=>we !== F.id)
        }
        )
    }
    , []);
    return A.useEffect(()=>qe.subscribe(F=>{
        if (F.dismiss) {
            k(J=>J.map(Z=>Z.id === F.id ? {
                ...Z,
                delete: !0
            } : Z));
            return
        }
        setTimeout(()=>{
            Y0.flushSync(()=>{
                k(J=>{
                    let Z = J.findIndex(we=>we.id === F.id);
                    return Z !== -1 ? [...J.slice(0, Z), {
                        ...J[Z],
                        ...F
                    }, ...J.slice(Z + 1)] : [F, ...J]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect(()=>{
        if (c !== "system") {
            V(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? V("dark") : V("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: J})=>{
                V(J ? "dark" : "light")
            }
            )
        } catch {
            F.addListener(({matches: Z})=>{
                try {
                    V(Z ? "dark" : "light")
                } catch (we) {
                    console.error(we)
                }
            }
            )
        }
    }
    , [c]),
    A.useEffect(()=>{
        S.length <= 1 && D(!1)
    }
    , [S]),
    A.useEffect(()=>{
        let F = J=>{
            var Z, we;
            s.every(Ae=>J[Ae] || J.code === Ae) && (D(!0),
            (Z = q.current) == null || Z.focus()),
            J.code === "Escape" && (document.activeElement === q.current || (we = q.current) != null && we.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        ()=>document.removeEventListener("keydown", F)
    }
    , [s]),
    A.useEffect(()=>{
        if (q.current)
            return ()=>{
                O.current && (O.current.focus({
                    preventScroll: !0
                }),
                O.current = null,
                $.current = !1)
            }
    }
    , [q.current]),
    A.createElement("section", {
        ref: e,
        "aria-label": `${_} ${C}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map((F,J)=>{
        var Z;
        let[we,Ae] = F.split("-");
        return S.length ? A.createElement("ol", {
            key: F,
            dir: w === "auto" ? Cf() : w,
            tabIndex: -1,
            ref: q,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": X,
            "data-y-position": we,
            "data-lifted": z && S.length > 1 && !i,
            "data-x-position": Ae,
            style: {
                "--front-toast-height": `${((Z = j[0]) == null ? void 0 : Z.height) || 0}px`,
                "--width": `${C1}px`,
                "--gap": `${g}px`,
                ...d,
                ...N1(l, u)
            },
            onBlur: re=>{
                $.current && !re.currentTarget.contains(re.relatedTarget) && ($.current = !1,
                O.current && (O.current.focus({
                    preventScroll: !0
                }),
                O.current = null))
            }
            ,
            onFocus: re=>{
                re.target instanceof HTMLElement && re.target.dataset.dismissible === "false" || $.current || ($.current = !0,
                O.current = re.relatedTarget)
            }
            ,
            onMouseEnter: ()=>D(!0),
            onMouseMove: ()=>D(!0),
            onMouseLeave: ()=>{
                Q || D(!1)
            }
            ,
            onDragEnd: ()=>D(!1),
            onPointerDown: re=>{
                re.target instanceof HTMLElement && re.target.dataset.dismissible === "false" || I(!0)
            }
            ,
            onPointerUp: ()=>I(!1)
        }, S.filter(re=>!re.position && J === 0 || re.position === F).map((re,$n)=>{
            var pr, nn;
            return A.createElement(A1, {
                key: re.id,
                icons: v,
                index: $n,
                toast: re,
                defaultRichColors: h,
                duration: (pr = m == null ? void 0 : m.duration) != null ? pr : f,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: r,
                visibleToasts: y,
                closeButton: (nn = m == null ? void 0 : m.closeButton) != null ? nn : o,
                interacting: Q,
                position: F,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: K,
                toasts: S.filter(mr=>mr.position == re.position),
                heights: j.filter(mr=>mr.position == re.position),
                setHeights: N,
                expandByDefault: i,
                gap: g,
                loadingIcon: p,
                expanded: z,
                pauseWhenPageIsHidden: E,
                swipeDirections: t.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const $1 = ({...t})=>{
    const {theme: e="system"} = a1();
    return x.jsx(I1, {
        theme: e,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...t
    })
}
  , L1 = ["top", "right", "bottom", "left"]
  , Yr = Math.min
  , rt = Math.max
  , Ca = Math.round
  , Po = Math.floor
  , Qt = t=>({
    x: t,
    y: t
})
  , U1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , D1 = {
    start: "end",
    end: "start"
};
function lc(t, e, r) {
    return rt(t, Yr(e, r))
}
function dr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function hr(t) {
    return t.split("-")[0]
}
function Bs(t) {
    return t.split("-")[1]
}
function jd(t) {
    return t === "x" ? "y" : "x"
}
function Ad(t) {
    return t === "y" ? "height" : "width"
}
const M1 = new Set(["top", "bottom"]);
function qt(t) {
    return M1.has(hr(t)) ? "y" : "x"
}
function Nd(t) {
    return jd(qt(t))
}
function F1(t, e, r) {
    r === void 0 && (r = !1);
    const n = Bs(t)
      , s = Nd(t)
      , i = Ad(s);
    let o = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return e.reference[i] > e.floating[i] && (o = Pa(o)),
    [o, Pa(o)]
}
function B1(t) {
    const e = Pa(t);
    return [uc(t), e, uc(e)]
}
function uc(t) {
    return t.replace(/start|end/g, e=>D1[e])
}
const Pf = ["left", "right"]
  , Of = ["right", "left"]
  , z1 = ["top", "bottom"]
  , V1 = ["bottom", "top"];
function W1(t, e, r) {
    switch (t) {
    case "top":
    case "bottom":
        return r ? e ? Of : Pf : e ? Pf : Of;
    case "left":
    case "right":
        return e ? z1 : V1;
    default:
        return []
    }
}
function H1(t, e, r, n) {
    const s = Bs(t);
    let i = W1(hr(t), r === "start", n);
    return s && (i = i.map(o=>o + "-" + s),
    e && (i = i.concat(i.map(uc)))),
    i
}
function Pa(t) {
    return t.replace(/left|right|bottom|top/g, e=>U1[e])
}
function q1(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function Mg(t) {
    return typeof t != "number" ? q1(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function Oa(t) {
    const {x: e, y: r, width: n, height: s} = t;
    return {
        width: n,
        height: s,
        top: r,
        left: e,
        right: e + n,
        bottom: r + s,
        x: e,
        y: r
    }
}
function Rf(t, e, r) {
    let {reference: n, floating: s} = t;
    const i = qt(e)
      , o = Nd(e)
      , a = Ad(o)
      , l = hr(e)
      , u = i === "y"
      , c = n.x + n.width / 2 - s.width / 2
      , h = n.y + n.height / 2 - s.height / 2
      , f = n[a] / 2 - s[a] / 2;
    let d;
    switch (l) {
    case "top":
        d = {
            x: c,
            y: n.y - s.height
        };
        break;
    case "bottom":
        d = {
            x: c,
            y: n.y + n.height
        };
        break;
    case "right":
        d = {
            x: n.x + n.width,
            y: h
        };
        break;
    case "left":
        d = {
            x: n.x - s.width,
            y: h
        };
        break;
    default:
        d = {
            x: n.x,
            y: n.y
        }
    }
    switch (Bs(e)) {
    case "start":
        d[o] -= f * (r && u ? -1 : 1);
        break;
    case "end":
        d[o] += f * (r && u ? -1 : 1);
        break
    }
    return d
}
const K1 = async(t,e,r)=>{
    const {placement: n="bottom", strategy: s="absolute", middleware: i=[], platform: o} = r
      , a = i.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let u = await o.getElementRects({
        reference: t,
        floating: e,
        strategy: s
    })
      , {x: c, y: h} = Rf(u, n, l)
      , f = n
      , d = {}
      , y = 0;
    for (let m = 0; m < a.length; m++) {
        const {name: w, fn: g} = a[m]
          , {x: p, y: v, data: _, reset: E} = await g({
            x: c,
            y: h,
            initialPlacement: n,
            placement: f,
            strategy: s,
            middlewareData: d,
            rects: u,
            platform: o,
            elements: {
                reference: t,
                floating: e
            }
        });
        c = p ?? c,
        h = v ?? h,
        d = {
            ...d,
            [w]: {
                ...d[w],
                ..._
            }
        },
        E && y <= 50 && (y++,
        typeof E == "object" && (E.placement && (f = E.placement),
        E.rects && (u = E.rects === !0 ? await o.getElementRects({
            reference: t,
            floating: e,
            strategy: s
        }) : E.rects),
        {x: c, y: h} = Rf(u, f, l)),
        m = -1)
    }
    return {
        x: c,
        y: h,
        placement: f,
        strategy: s,
        middlewareData: d
    }
}
;
async function Di(t, e) {
    var r;
    e === void 0 && (e = {});
    const {x: n, y: s, platform: i, rects: o, elements: a, strategy: l} = t
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: h="floating", altBoundary: f=!1, padding: d=0} = dr(e, t)
      , y = Mg(d)
      , w = a[f ? h === "floating" ? "reference" : "floating" : h]
      , g = Oa(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(w))) == null || r ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = h === "floating" ? {
        x: n,
        y: s,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , _ = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Oa(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: v,
        strategy: l
    }) : p);
    return {
        top: (g.top - E.top + y.top) / _.y,
        bottom: (E.bottom - g.bottom + y.bottom) / _.y,
        left: (g.left - E.left + y.left) / _.x,
        right: (E.right - g.right + y.right) / _.x
    }
}
const G1 = t=>({
    name: "arrow",
    options: t,
    async fn(e) {
        const {x: r, y: n, placement: s, rects: i, platform: o, elements: a, middlewareData: l} = e
          , {element: u, padding: c=0} = dr(t, e) || {};
        if (u == null)
            return {};
        const h = Mg(c)
          , f = {
            x: r,
            y: n
        }
          , d = Nd(s)
          , y = Ad(d)
          , m = await o.getDimensions(u)
          , w = d === "y"
          , g = w ? "top" : "left"
          , p = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , _ = i.reference[y] + i.reference[d] - f[d] - i.floating[y]
          , E = f[d] - i.reference[d]
          , S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let k = S ? S[v] : 0;
        (!k || !await (o.isElement == null ? void 0 : o.isElement(S))) && (k = a.floating[v] || i.floating[y]);
        const P = _ / 2 - E / 2
          , j = k / 2 - m[y] / 2 - 1
          , N = Yr(h[g], j)
          , z = Yr(h[p], j)
          , D = N
          , Q = k - m[y] - z
          , I = k / 2 - m[y] / 2 + P
          , X = lc(D, I, Q)
          , V = !l.arrow && Bs(s) != null && I !== X && i.reference[y] / 2 - (I < D ? N : z) - m[y] / 2 < 0
          , q = V ? I < D ? I - D : I - Q : 0;
        return {
            [d]: f[d] + q,
            data: {
                [d]: X,
                centerOffset: I - X - q,
                ...V && {
                    alignmentOffset: q
                }
            },
            reset: V
        }
    }
})
  , Q1 = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var r, n;
            const {placement: s, middlewareData: i, rects: o, initialPlacement: a, platform: l, elements: u} = e
              , {mainAxis: c=!0, crossAxis: h=!0, fallbackPlacements: f, fallbackStrategy: d="bestFit", fallbackAxisSideDirection: y="none", flipAlignment: m=!0, ...w} = dr(t, e);
            if ((r = i.arrow) != null && r.alignmentOffset)
                return {};
            const g = hr(s)
              , p = qt(a)
              , v = hr(a) === a
              , _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = f || (v || !m ? [Pa(a)] : B1(a))
              , S = y !== "none";
            !f && S && E.push(...H1(a, m, y, _));
            const k = [a, ...E]
              , P = await Di(e, w)
              , j = [];
            let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
            if (c && j.push(P[g]),
            h) {
                const I = F1(s, o, _);
                j.push(P[I[0]], P[I[1]])
            }
            if (N = [...N, {
                placement: s,
                overflows: j
            }],
            !j.every(I=>I <= 0)) {
                var z, D;
                const I = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1
                  , X = k[I];
                if (X && (!(h === "alignment" ? p !== qt(X) : !1) || N.every(C=>C.overflows[0] > 0 && qt(C.placement) === p)))
                    return {
                        data: {
                            index: I,
                            overflows: N
                        },
                        reset: {
                            placement: X
                        }
                    };
                let V = (D = N.filter(q=>q.overflows[0] <= 0).sort((q,C)=>q.overflows[1] - C.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!V)
                    switch (d) {
                    case "bestFit":
                        {
                            var Q;
                            const q = (Q = N.filter(C=>{
                                if (S) {
                                    const O = qt(C.placement);
                                    return O === p || O === "y"
                                }
                                return !0
                            }
                            ).map(C=>[C.placement, C.overflows.filter(O=>O > 0).reduce((O,$)=>O + $, 0)]).sort((C,O)=>C[1] - O[1])[0]) == null ? void 0 : Q[0];
                            q && (V = q);
                            break
                        }
                    case "initialPlacement":
                        V = a;
                        break
                    }
                if (s !== V)
                    return {
                        reset: {
                            placement: V
                        }
                    }
            }
            return {}
        }
    }
};
function jf(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}
function Af(t) {
    return L1.some(e=>t[e] >= 0)
}
const J1 = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "hide",
        options: t,
        async fn(e) {
            const {rects: r} = e
              , {strategy: n="referenceHidden", ...s} = dr(t, e);
            switch (n) {
            case "referenceHidden":
                {
                    const i = await Di(e, {
                        ...s,
                        elementContext: "reference"
                    })
                      , o = jf(i, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: Af(o)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Di(e, {
                        ...s,
                        altBoundary: !0
                    })
                      , o = jf(i, r.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: Af(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Fg = new Set(["left", "top"]);
async function Y1(t, e) {
    const {placement: r, platform: n, elements: s} = t
      , i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating))
      , o = hr(r)
      , a = Bs(r)
      , l = qt(r) === "y"
      , u = Fg.has(o) ? -1 : 1
      , c = i && l ? -1 : 1
      , h = dr(e, t);
    let {mainAxis: f, crossAxis: d, alignmentAxis: y} = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis
    };
    return a && typeof y == "number" && (d = a === "end" ? y * -1 : y),
    l ? {
        x: d * c,
        y: f * u
    } : {
        x: f * u,
        y: d * c
    }
}
const X1 = function(t) {
    return t === void 0 && (t = 0),
    {
        name: "offset",
        options: t,
        async fn(e) {
            var r, n;
            const {x: s, y: i, placement: o, middlewareData: a} = e
              , l = await Y1(e, t);
            return o === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
                x: s + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , Z1 = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: r, y: n, placement: s} = e
              , {mainAxis: i=!0, crossAxis: o=!1, limiter: a={
                fn: w=>{
                    let {x: g, y: p} = w;
                    return {
                        x: g,
                        y: p
                    }
                }
            }, ...l} = dr(t, e)
              , u = {
                x: r,
                y: n
            }
              , c = await Di(e, l)
              , h = qt(hr(s))
              , f = jd(h);
            let d = u[f]
              , y = u[h];
            if (i) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , p = d + c[w]
                  , v = d - c[g];
                d = lc(p, d, v)
            }
            if (o) {
                const w = h === "y" ? "top" : "left"
                  , g = h === "y" ? "bottom" : "right"
                  , p = y + c[w]
                  , v = y - c[g];
                y = lc(p, y, v)
            }
            const m = a.fn({
                ...e,
                [f]: d,
                [h]: y
            });
            return {
                ...m,
                data: {
                    x: m.x - r,
                    y: m.y - n,
                    enabled: {
                        [f]: i,
                        [h]: o
                    }
                }
            }
        }
    }
}
  , eE = function(t) {
    return t === void 0 && (t = {}),
    {
        options: t,
        fn(e) {
            const {x: r, y: n, placement: s, rects: i, middlewareData: o} = e
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = dr(t, e)
              , c = {
                x: r,
                y: n
            }
              , h = qt(s)
              , f = jd(h);
            let d = c[f]
              , y = c[h];
            const m = dr(a, e)
              , w = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const v = f === "y" ? "height" : "width"
                  , _ = i.reference[f] - i.floating[v] + w.mainAxis
                  , E = i.reference[f] + i.reference[v] - w.mainAxis;
                d < _ ? d = _ : d > E && (d = E)
            }
            if (u) {
                var g, p;
                const v = f === "y" ? "width" : "height"
                  , _ = Fg.has(hr(s))
                  , E = i.reference[h] - i.floating[v] + (_ && ((g = o.offset) == null ? void 0 : g[h]) || 0) + (_ ? 0 : w.crossAxis)
                  , S = i.reference[h] + i.reference[v] + (_ ? 0 : ((p = o.offset) == null ? void 0 : p[h]) || 0) - (_ ? w.crossAxis : 0);
                y < E ? y = E : y > S && (y = S)
            }
            return {
                [f]: d,
                [h]: y
            }
        }
    }
}
  , tE = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "size",
        options: t,
        async fn(e) {
            var r, n;
            const {placement: s, rects: i, platform: o, elements: a} = e
              , {apply: l=()=>{}
            , ...u} = dr(t, e)
              , c = await Di(e, u)
              , h = hr(s)
              , f = Bs(s)
              , d = qt(s) === "y"
              , {width: y, height: m} = i.floating;
            let w, g;
            h === "top" || h === "bottom" ? (w = h,
            g = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = h,
            w = f === "end" ? "top" : "bottom");
            const p = m - c.top - c.bottom
              , v = y - c.left - c.right
              , _ = Yr(m - c[w], p)
              , E = Yr(y - c[g], v)
              , S = !e.middlewareData.shift;
            let k = _
              , P = E;
            if ((r = e.middlewareData.shift) != null && r.enabled.x && (P = v),
            (n = e.middlewareData.shift) != null && n.enabled.y && (k = p),
            S && !f) {
                const N = rt(c.left, 0)
                  , z = rt(c.right, 0)
                  , D = rt(c.top, 0)
                  , Q = rt(c.bottom, 0);
                d ? P = y - 2 * (N !== 0 || z !== 0 ? N + z : rt(c.left, c.right)) : k = m - 2 * (D !== 0 || Q !== 0 ? D + Q : rt(c.top, c.bottom))
            }
            await l({
                ...e,
                availableWidth: P,
                availableHeight: k
            });
            const j = await o.getDimensions(a.floating);
            return y !== j.width || m !== j.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function sl() {
    return typeof window < "u"
}
function zs(t) {
    return Bg(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function at(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function Yt(t) {
    var e;
    return (e = (Bg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function Bg(t) {
    return sl() ? t instanceof Node || t instanceof at(t).Node : !1
}
function Ut(t) {
    return sl() ? t instanceof Element || t instanceof at(t).Element : !1
}
function Jt(t) {
    return sl() ? t instanceof HTMLElement || t instanceof at(t).HTMLElement : !1
}
function Nf(t) {
    return !sl() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof at(t).ShadowRoot
}
const rE = new Set(["inline", "contents"]);
function to(t) {
    const {overflow: e, overflowX: r, overflowY: n, display: s} = Dt(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !rE.has(s)
}
const nE = new Set(["table", "td", "th"]);
function sE(t) {
    return nE.has(zs(t))
}
const iE = [":popover-open", ":modal"];
function il(t) {
    return iE.some(e=>{
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
const oE = ["transform", "translate", "scale", "rotate", "perspective"]
  , aE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , lE = ["paint", "layout", "strict", "content"];
function Id(t) {
    const e = $d()
      , r = Ut(t) ? Dt(t) : t;
    return oE.some(n=>r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || aE.some(n=>(r.willChange || "").includes(n)) || lE.some(n=>(r.contain || "").includes(n))
}
function uE(t) {
    let e = Xr(t);
    for (; Jt(e) && !Is(e); ) {
        if (Id(e))
            return e;
        if (il(e))
            return null;
        e = Xr(e)
    }
    return null
}
function $d() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const cE = new Set(["html", "body", "#document"]);
function Is(t) {
    return cE.has(zs(t))
}
function Dt(t) {
    return at(t).getComputedStyle(t)
}
function ol(t) {
    return Ut(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}
function Xr(t) {
    if (zs(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || Nf(t) && t.host || Yt(t);
    return Nf(e) ? e.host : e
}
function zg(t) {
    const e = Xr(t);
    return Is(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Jt(e) && to(e) ? e : zg(e)
}
function Mi(t, e, r) {
    var n;
    e === void 0 && (e = []),
    r === void 0 && (r = !0);
    const s = zg(t)
      , i = s === ((n = t.ownerDocument) == null ? void 0 : n.body)
      , o = at(s);
    if (i) {
        const a = cc(o);
        return e.concat(o, o.visualViewport || [], to(s) ? s : [], a && r ? Mi(a) : [])
    }
    return e.concat(s, Mi(s, [], r))
}
function cc(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
function Vg(t) {
    const e = Dt(t);
    let r = parseFloat(e.width) || 0
      , n = parseFloat(e.height) || 0;
    const s = Jt(t)
      , i = s ? t.offsetWidth : r
      , o = s ? t.offsetHeight : n
      , a = Ca(r) !== i || Ca(n) !== o;
    return a && (r = i,
    n = o),
    {
        width: r,
        height: n,
        $: a
    }
}
function Ld(t) {
    return Ut(t) ? t : t.contextElement
}
function ms(t) {
    const e = Ld(t);
    if (!Jt(e))
        return Qt(1);
    const r = e.getBoundingClientRect()
      , {width: n, height: s, $: i} = Vg(e);
    let o = (i ? Ca(r.width) : r.width) / n
      , a = (i ? Ca(r.height) : r.height) / s;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const dE = Qt(0);
function Wg(t) {
    const e = at(t);
    return !$d() || !e.visualViewport ? dE : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function hE(t, e, r) {
    return e === void 0 && (e = !1),
    !r || e && r !== at(t) ? !1 : e
}
function An(t, e, r, n) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !1);
    const s = t.getBoundingClientRect()
      , i = Ld(t);
    let o = Qt(1);
    e && (n ? Ut(n) && (o = ms(n)) : o = ms(t));
    const a = hE(i, r, n) ? Wg(i) : Qt(0);
    let l = (s.left + a.x) / o.x
      , u = (s.top + a.y) / o.y
      , c = s.width / o.x
      , h = s.height / o.y;
    if (i) {
        const f = at(i)
          , d = n && Ut(n) ? at(n) : n;
        let y = f
          , m = cc(y);
        for (; m && n && d !== y; ) {
            const w = ms(m)
              , g = m.getBoundingClientRect()
              , p = Dt(m)
              , v = g.left + (m.clientLeft + parseFloat(p.paddingLeft)) * w.x
              , _ = g.top + (m.clientTop + parseFloat(p.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            h *= w.y,
            l += v,
            u += _,
            y = at(m),
            m = cc(y)
        }
    }
    return Oa({
        width: c,
        height: h,
        x: l,
        y: u
    })
}
function Ud(t, e) {
    const r = ol(t).scrollLeft;
    return e ? e.left + r : An(Yt(t)).left + r
}
function Hg(t, e, r) {
    r === void 0 && (r = !1);
    const n = t.getBoundingClientRect()
      , s = n.left + e.scrollLeft - (r ? 0 : Ud(t, n))
      , i = n.top + e.scrollTop;
    return {
        x: s,
        y: i
    }
}
function fE(t) {
    let {elements: e, rect: r, offsetParent: n, strategy: s} = t;
    const i = s === "fixed"
      , o = Yt(n)
      , a = e ? il(e.floating) : !1;
    if (n === o || a && i)
        return r;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Qt(1);
    const c = Qt(0)
      , h = Jt(n);
    if ((h || !h && !i) && ((zs(n) !== "body" || to(o)) && (l = ol(n)),
    Jt(n))) {
        const d = An(n);
        u = ms(n),
        c.x = d.x + n.clientLeft,
        c.y = d.y + n.clientTop
    }
    const f = o && !h && !i ? Hg(o, l, !0) : Qt(0);
    return {
        width: r.width * u.x,
        height: r.height * u.y,
        x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: r.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function pE(t) {
    return Array.from(t.getClientRects())
}
function mE(t) {
    const e = Yt(t)
      , r = ol(t)
      , n = t.ownerDocument.body
      , s = rt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth)
      , i = rt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
    let o = -r.scrollLeft + Ud(t);
    const a = -r.scrollTop;
    return Dt(n).direction === "rtl" && (o += rt(e.clientWidth, n.clientWidth) - s),
    {
        width: s,
        height: i,
        x: o,
        y: a
    }
}
function gE(t, e) {
    const r = at(t)
      , n = Yt(t)
      , s = r.visualViewport;
    let i = n.clientWidth
      , o = n.clientHeight
      , a = 0
      , l = 0;
    if (s) {
        i = s.width,
        o = s.height;
        const u = $d();
        (!u || u && e === "fixed") && (a = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: i,
        height: o,
        x: a,
        y: l
    }
}
const vE = new Set(["absolute", "fixed"]);
function yE(t, e) {
    const r = An(t, !0, e === "fixed")
      , n = r.top + t.clientTop
      , s = r.left + t.clientLeft
      , i = Jt(t) ? ms(t) : Qt(1)
      , o = t.clientWidth * i.x
      , a = t.clientHeight * i.y
      , l = s * i.x
      , u = n * i.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function If(t, e, r) {
    let n;
    if (e === "viewport")
        n = gE(t, r);
    else if (e === "document")
        n = mE(Yt(t));
    else if (Ut(e))
        n = yE(e, r);
    else {
        const s = Wg(t);
        n = {
            x: e.x - s.x,
            y: e.y - s.y,
            width: e.width,
            height: e.height
        }
    }
    return Oa(n)
}
function qg(t, e) {
    const r = Xr(t);
    return r === e || !Ut(r) || Is(r) ? !1 : Dt(r).position === "fixed" || qg(r, e)
}
function wE(t, e) {
    const r = e.get(t);
    if (r)
        return r;
    let n = Mi(t, [], !1).filter(a=>Ut(a) && zs(a) !== "body")
      , s = null;
    const i = Dt(t).position === "fixed";
    let o = i ? Xr(t) : t;
    for (; Ut(o) && !Is(o); ) {
        const a = Dt(o)
          , l = Id(o);
        !l && a.position === "fixed" && (s = null),
        (i ? !l && !s : !l && a.position === "static" && !!s && vE.has(s.position) || to(o) && !l && qg(t, o)) ? n = n.filter(c=>c !== o) : s = a,
        o = Xr(o)
    }
    return e.set(t, n),
    n
}
function bE(t) {
    let {element: e, boundary: r, rootBoundary: n, strategy: s} = t;
    const o = [...r === "clippingAncestors" ? il(e) ? [] : wE(e, this._c) : [].concat(r), n]
      , a = o[0]
      , l = o.reduce((u,c)=>{
        const h = If(e, c, s);
        return u.top = rt(h.top, u.top),
        u.right = Yr(h.right, u.right),
        u.bottom = Yr(h.bottom, u.bottom),
        u.left = rt(h.left, u.left),
        u
    }
    , If(e, a, s));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function _E(t) {
    const {width: e, height: r} = Vg(t);
    return {
        width: e,
        height: r
    }
}
function xE(t, e, r) {
    const n = Jt(e)
      , s = Yt(e)
      , i = r === "fixed"
      , o = An(t, !0, i, e);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Qt(0);
    function u() {
        l.x = Ud(s)
    }
    if (n || !n && !i)
        if ((zs(e) !== "body" || to(s)) && (a = ol(e)),
        n) {
            const d = An(e, !0, i, e);
            l.x = d.x + e.clientLeft,
            l.y = d.y + e.clientTop
        } else
            s && u();
    i && !n && s && u();
    const c = s && !n && !i ? Hg(s, a) : Qt(0)
      , h = o.left + a.scrollLeft - l.x - c.x
      , f = o.top + a.scrollTop - l.y - c.y;
    return {
        x: h,
        y: f,
        width: o.width,
        height: o.height
    }
}
function Xl(t) {
    return Dt(t).position === "static"
}
function $f(t, e) {
    if (!Jt(t) || Dt(t).position === "fixed")
        return null;
    if (e)
        return e(t);
    let r = t.offsetParent;
    return Yt(t) === r && (r = r.ownerDocument.body),
    r
}
function Kg(t, e) {
    const r = at(t);
    if (il(t))
        return r;
    if (!Jt(t)) {
        let s = Xr(t);
        for (; s && !Is(s); ) {
            if (Ut(s) && !Xl(s))
                return s;
            s = Xr(s)
        }
        return r
    }
    let n = $f(t, e);
    for (; n && sE(n) && Xl(n); )
        n = $f(n, e);
    return n && Is(n) && Xl(n) && !Id(n) ? r : n || uE(t) || r
}
const EE = async function(t) {
    const e = this.getOffsetParent || Kg
      , r = this.getDimensions
      , n = await r(t.floating);
    return {
        reference: xE(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function SE(t) {
    return Dt(t).direction === "rtl"
}
const kE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: fE,
    getDocumentElement: Yt,
    getClippingRect: bE,
    getOffsetParent: Kg,
    getElementRects: EE,
    getClientRects: pE,
    getDimensions: _E,
    getScale: ms,
    isElement: Ut,
    isRTL: SE
};
function Gg(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}
function TE(t, e) {
    let r = null, n;
    const s = Yt(t);
    function i() {
        var a;
        clearTimeout(n),
        (a = r) == null || a.disconnect(),
        r = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = t.getBoundingClientRect()
          , {left: c, top: h, width: f, height: d} = u;
        if (a || e(),
        !f || !d)
            return;
        const y = Po(h)
          , m = Po(s.clientWidth - (c + f))
          , w = Po(s.clientHeight - (h + d))
          , g = Po(c)
          , v = {
            rootMargin: -y + "px " + -m + "px " + -w + "px " + -g + "px",
            threshold: rt(0, Yr(1, l)) || 1
        };
        let _ = !0;
        function E(S) {
            const k = S[0].intersectionRatio;
            if (k !== l) {
                if (!_)
                    return o();
                k ? o(!1, k) : n = setTimeout(()=>{
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !Gg(u, t.getBoundingClientRect()) && o(),
            _ = !1
        }
        try {
            r = new IntersectionObserver(E,{
                ...v,
                root: s.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(E,v)
        }
        r.observe(t)
    }
    return o(!0),
    i
}
function CE(t, e, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: s=!0, ancestorResize: i=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = n
      , u = Ld(t)
      , c = s || i ? [...u ? Mi(u) : [], ...Mi(e)] : [];
    c.forEach(g=>{
        s && g.addEventListener("scroll", r, {
            passive: !0
        }),
        i && g.addEventListener("resize", r)
    }
    );
    const h = u && a ? TE(u, r) : null;
    let f = -1
      , d = null;
    o && (d = new ResizeObserver(g=>{
        let[p] = g;
        p && p.target === u && d && (d.unobserve(e),
        cancelAnimationFrame(f),
        f = requestAnimationFrame(()=>{
            var v;
            (v = d) == null || v.observe(e)
        }
        )),
        r()
    }
    ),
    u && !l && d.observe(u),
    d.observe(e));
    let y, m = l ? An(t) : null;
    l && w();
    function w() {
        const g = An(t);
        m && !Gg(m, g) && r(),
        m = g,
        y = requestAnimationFrame(w)
    }
    return r(),
    ()=>{
        var g;
        c.forEach(p=>{
            s && p.removeEventListener("scroll", r),
            i && p.removeEventListener("resize", r)
        }
        ),
        h == null || h(),
        (g = d) == null || g.disconnect(),
        d = null,
        l && cancelAnimationFrame(y)
    }
}
const PE = X1
  , OE = Z1
  , RE = Q1
  , jE = tE
  , AE = J1
  , Lf = G1
  , NE = eE
  , IE = (t,e,r)=>{
    const n = new Map
      , s = {
        platform: kE,
        ...r
    }
      , i = {
        ...s.platform,
        _c: n
    };
    return K1(t, e, {
        ...s,
        platform: i
    })
}
;
var $E = typeof document < "u"
  , LE = function() {}
  , ta = $E ? b.useLayoutEffect : LE;
function Ra(t, e) {
    if (t === e)
        return !0;
    if (typeof t != typeof e)
        return !1;
    if (typeof t == "function" && t.toString() === e.toString())
        return !0;
    let r, n, s;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (r = t.length,
            r !== e.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!Ra(t[n], e[n]))
                    return !1;
            return !0
        }
        if (s = Object.keys(t),
        r = s.length,
        r !== Object.keys(e).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!{}.hasOwnProperty.call(e, s[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const i = s[n];
            if (!(i === "_owner" && t.$$typeof) && !Ra(t[i], e[i]))
                return !1
        }
        return !0
    }
    return t !== t && e !== e
}
function Qg(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Uf(t, e) {
    const r = Qg(t);
    return Math.round(e * r) / r
}
function Zl(t) {
    const e = b.useRef(t);
    return ta(()=>{
        e.current = t
    }
    ),
    e
}
function UE(t) {
    t === void 0 && (t = {});
    const {placement: e="bottom", strategy: r="absolute", middleware: n=[], platform: s, elements: {reference: i, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = t
      , [c,h] = b.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,d] = b.useState(n);
    Ra(f, n) || d(n);
    const [y,m] = b.useState(null)
      , [w,g] = b.useState(null)
      , p = b.useCallback(C=>{
        C !== S.current && (S.current = C,
        m(C))
    }
    , [])
      , v = b.useCallback(C=>{
        C !== k.current && (k.current = C,
        g(C))
    }
    , [])
      , _ = i || y
      , E = o || w
      , S = b.useRef(null)
      , k = b.useRef(null)
      , P = b.useRef(c)
      , j = l != null
      , N = Zl(l)
      , z = Zl(s)
      , D = Zl(u)
      , Q = b.useCallback(()=>{
        if (!S.current || !k.current)
            return;
        const C = {
            placement: e,
            strategy: r,
            middleware: f
        };
        z.current && (C.platform = z.current),
        IE(S.current, k.current, C).then(O=>{
            const $ = {
                ...O,
                isPositioned: D.current !== !1
            };
            I.current && !Ra(P.current, $) && (P.current = $,
            Zi.flushSync(()=>{
                h($)
            }
            ))
        }
        )
    }
    , [f, e, r, z, D]);
    ta(()=>{
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        h(C=>({
            ...C,
            isPositioned: !1
        })))
    }
    , [u]);
    const I = b.useRef(!1);
    ta(()=>(I.current = !0,
    ()=>{
        I.current = !1
    }
    ), []),
    ta(()=>{
        if (_ && (S.current = _),
        E && (k.current = E),
        _ && E) {
            if (N.current)
                return N.current(_, E, Q);
            Q()
        }
    }
    , [_, E, Q, N, j]);
    const X = b.useMemo(()=>({
        reference: S,
        floating: k,
        setReference: p,
        setFloating: v
    }), [p, v])
      , V = b.useMemo(()=>({
        reference: _,
        floating: E
    }), [_, E])
      , q = b.useMemo(()=>{
        const C = {
            position: r,
            left: 0,
            top: 0
        };
        if (!V.floating)
            return C;
        const O = Uf(V.floating, c.x)
          , $ = Uf(V.floating, c.y);
        return a ? {
            ...C,
            transform: "translate(" + O + "px, " + $ + "px)",
            ...Qg(V.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: O,
            top: $
        }
    }
    , [r, a, V.floating, c.x, c.y]);
    return b.useMemo(()=>({
        ...c,
        update: Q,
        refs: X,
        elements: V,
        floatingStyles: q
    }), [c, Q, X, V, q])
}
const DE = t=>{
    function e(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: t,
        fn(r) {
            const {element: n, padding: s} = typeof t == "function" ? t(r) : t;
            return n && e(n) ? n.current != null ? Lf({
                element: n.current,
                padding: s
            }).fn(r) : {} : n ? Lf({
                element: n,
                padding: s
            }).fn(r) : {}
        }
    }
}
  , ME = (t,e)=>({
    ...PE(t),
    options: [t, e]
})
  , FE = (t,e)=>({
    ...OE(t),
    options: [t, e]
})
  , BE = (t,e)=>({
    ...NE(t),
    options: [t, e]
})
  , zE = (t,e)=>({
    ...RE(t),
    options: [t, e]
})
  , VE = (t,e)=>({
    ...jE(t),
    options: [t, e]
})
  , WE = (t,e)=>({
    ...AE(t),
    options: [t, e]
})
  , HE = (t,e)=>({
    ...DE(t),
    options: [t, e]
});
var qE = "Arrow"
  , Jg = b.forwardRef((t,e)=>{
    const {children: r, width: n=10, height: s=5, ...i} = t;
    return x.jsx(Ze.svg, {
        ...i,
        ref: e,
        width: n,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? r : x.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Jg.displayName = qE;
var KE = Jg;
function GE(t) {
    const [e,r] = b.useState(void 0);
    return Jr(()=>{
        if (t) {
            r({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            const n = new ResizeObserver(s=>{
                if (!Array.isArray(s) || !s.length)
                    return;
                const i = s[0];
                let o, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = t.offsetWidth,
                    a = t.offsetHeight;
                r({
                    width: o,
                    height: a
                })
            }
            );
            return n.observe(t, {
                box: "border-box"
            }),
            ()=>n.unobserve(t)
        } else
            r(void 0)
    }
    , [t]),
    e
}
var Yg = "Popper"
  , [Xg,Zg] = tl(Yg)
  , [_P,ev] = Xg(Yg)
  , tv = "PopperAnchor"
  , rv = b.forwardRef((t,e)=>{
    const {__scopePopper: r, virtualRef: n, ...s} = t
      , i = ev(tv, r)
      , o = b.useRef(null)
      , a = Lt(e, o);
    return b.useEffect(()=>{
        i.onAnchorChange((n == null ? void 0 : n.current) || o.current)
    }
    ),
    n ? null : x.jsx(Ze.div, {
        ...s,
        ref: a
    })
}
);
rv.displayName = tv;
var Dd = "PopperContent"
  , [QE,JE] = Xg(Dd)
  , nv = b.forwardRef((t,e)=>{
    var re, $n, pr, nn, mr, Ln;
    const {__scopePopper: r, side: n="bottom", sideOffset: s=0, align: i="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: h="partial", hideWhenDetached: f=!1, updatePositionStrategy: d="optimized", onPlaced: y, ...m} = t
      , w = ev(Dd, r)
      , [g,p] = b.useState(null)
      , v = Lt(e, gr=>p(gr))
      , [_,E] = b.useState(null)
      , S = GE(_)
      , k = (S == null ? void 0 : S.width) ?? 0
      , P = (S == null ? void 0 : S.height) ?? 0
      , j = n + (i !== "center" ? "-" + i : "")
      , N = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , D = z.length > 0
      , Q = {
        padding: N,
        boundary: z.filter(XE),
        altBoundary: D
    }
      , {refs: I, floatingStyles: X, placement: V, isPositioned: q, middlewareData: C} = UE({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...gr)=>CE(...gr, {
            animationFrame: d === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [ME({
            mainAxis: s + P,
            alignmentAxis: o
        }), l && FE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: h === "partial" ? BE() : void 0,
            ...Q
        }), l && zE({
            ...Q
        }), VE({
            ...Q,
            apply: ({elements: gr, rects: no, availableWidth: vl, availableHeight: so})=>{
                const {width: yl, height: qs} = no.reference
                  , Un = gr.floating.style;
                Un.setProperty("--radix-popper-available-width", `${vl}px`),
                Un.setProperty("--radix-popper-available-height", `${so}px`),
                Un.setProperty("--radix-popper-anchor-width", `${yl}px`),
                Un.setProperty("--radix-popper-anchor-height", `${qs}px`)
            }
        }), _ && HE({
            element: _,
            padding: a
        }), ZE({
            arrowWidth: k,
            arrowHeight: P
        }), f && WE({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [O,$] = ov(V)
      , K = Qr(y);
    Jr(()=>{
        q && (K == null || K())
    }
    , [q, K]);
    const F = (re = C.arrow) == null ? void 0 : re.x
      , J = ($n = C.arrow) == null ? void 0 : $n.y
      , Z = ((pr = C.arrow) == null ? void 0 : pr.centerOffset) !== 0
      , [we,Ae] = b.useState();
    return Jr(()=>{
        g && Ae(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    x.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...X,
            transform: q ? X.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [(nn = C.transformOrigin) == null ? void 0 : nn.x, (mr = C.transformOrigin) == null ? void 0 : mr.y].join(" "),
            ...((Ln = C.hide) == null ? void 0 : Ln.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: t.dir,
        children: x.jsx(QE, {
            scope: r,
            placedSide: O,
            onArrowChange: E,
            arrowX: F,
            arrowY: J,
            shouldHideArrow: Z,
            children: x.jsx(Ze.div, {
                "data-side": O,
                "data-align": $,
                ...m,
                ref: v,
                style: {
                    ...m.style,
                    animation: q ? void 0 : "none"
                }
            })
        })
    })
}
);
nv.displayName = Dd;
var sv = "PopperArrow"
  , YE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , iv = b.forwardRef(function(e, r) {
    const {__scopePopper: n, ...s} = e
      , i = JE(sv, n)
      , o = YE[i.placedSide];
    return x.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: x.jsx(KE, {
            ...s,
            ref: r,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
iv.displayName = sv;
function XE(t) {
    return t !== null
}
var ZE = t=>({
    name: "transformOrigin",
    options: t,
    fn(e) {
        var w, g, p;
        const {placement: r, rects: n, middlewareData: s} = e
          , o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = o ? 0 : t.arrowWidth
          , l = o ? 0 : t.arrowHeight
          , [u,c] = ov(r)
          , h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , d = (((p = s.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let y = ""
          , m = "";
        return u === "bottom" ? (y = o ? h : `${f}px`,
        m = `${-l}px`) : u === "top" ? (y = o ? h : `${f}px`,
        m = `${n.floating.height + l}px`) : u === "right" ? (y = `${-l}px`,
        m = o ? h : `${d}px`) : u === "left" && (y = `${n.floating.width + l}px`,
        m = o ? h : `${d}px`),
        {
            data: {
                x: y,
                y: m
            }
        }
    }
});
function ov(t) {
    const [e,r="center"] = t.split("-");
    return [e, r]
}
var eS = rv
  , tS = nv
  , rS = iv
  , [al,xP] = tl("Tooltip", [Zg])
  , Md = Zg()
  , av = "TooltipProvider"
  , nS = 700
  , Df = "tooltip.open"
  , [sS,lv] = al(av)
  , uv = t=>{
    const {__scopeTooltip: e, delayDuration: r=nS, skipDelayDuration: n=300, disableHoverableContent: s=!1, children: i} = t
      , o = b.useRef(!0)
      , a = b.useRef(!1)
      , l = b.useRef(0);
    return b.useEffect(()=>{
        const u = l.current;
        return ()=>window.clearTimeout(u)
    }
    , []),
    x.jsx(sS, {
        scope: e,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: b.useCallback(()=>{
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: b.useCallback(()=>{
            window.clearTimeout(l.current),
            l.current = window.setTimeout(()=>o.current = !0, n)
        }
        , [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback(u=>{
            a.current = u
        }
        , []),
        disableHoverableContent: s,
        children: i
    })
}
;
uv.displayName = av;
var cv = "Tooltip"
  , [EP,ll] = al(cv)
  , dc = "TooltipTrigger"
  , iS = b.forwardRef((t,e)=>{
    const {__scopeTooltip: r, ...n} = t
      , s = ll(dc, r)
      , i = lv(dc, r)
      , o = Md(r)
      , a = b.useRef(null)
      , l = Lt(e, a, s.onTriggerChange)
      , u = b.useRef(!1)
      , c = b.useRef(!1)
      , h = b.useCallback(()=>u.current = !1, []);
    return b.useEffect(()=>()=>document.removeEventListener("pointerup", h), [h]),
    x.jsx(eS, {
        asChild: !0,
        ...o,
        children: x.jsx(Ze.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...n,
            ref: l,
            onPointerMove: Se(t.onPointerMove, f=>{
                f.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Se(t.onPointerLeave, ()=>{
                s.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Se(t.onPointerDown, ()=>{
                s.open && s.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", h, {
                    once: !0
                })
            }
            ),
            onFocus: Se(t.onFocus, ()=>{
                u.current || s.onOpen()
            }
            ),
            onBlur: Se(t.onBlur, s.onClose),
            onClick: Se(t.onClick, s.onClose)
        })
    })
}
);
iS.displayName = dc;
var oS = "TooltipPortal"
  , [SP,aS] = al(oS, {
    forceMount: void 0
})
  , $s = "TooltipContent"
  , dv = b.forwardRef((t,e)=>{
    const r = aS($s, t.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: s="top", ...i} = t
      , o = ll($s, t.__scopeTooltip);
    return x.jsx(Td, {
        present: n || o.open,
        children: o.disableHoverableContent ? x.jsx(hv, {
            side: s,
            ...i,
            ref: e
        }) : x.jsx(lS, {
            side: s,
            ...i,
            ref: e
        })
    })
}
)
  , lS = b.forwardRef((t,e)=>{
    const r = ll($s, t.__scopeTooltip)
      , n = lv($s, t.__scopeTooltip)
      , s = b.useRef(null)
      , i = Lt(e, s)
      , [o,a] = b.useState(null)
      , {trigger: l, onClose: u} = r
      , c = s.current
      , {onPointerInTransitChange: h} = n
      , f = b.useCallback(()=>{
        a(null),
        h(!1)
    }
    , [h])
      , d = b.useCallback((y,m)=>{
        const w = y.currentTarget
          , g = {
            x: y.clientX,
            y: y.clientY
        }
          , p = fS(g, w.getBoundingClientRect())
          , v = pS(g, p)
          , _ = mS(m.getBoundingClientRect())
          , E = vS([...v, ..._]);
        a(E),
        h(!0)
    }
    , [h]);
    return b.useEffect(()=>()=>f(), [f]),
    b.useEffect(()=>{
        if (l && c) {
            const y = w=>d(w, c)
              , m = w=>d(w, l);
            return l.addEventListener("pointerleave", y),
            c.addEventListener("pointerleave", m),
            ()=>{
                l.removeEventListener("pointerleave", y),
                c.removeEventListener("pointerleave", m)
            }
        }
    }
    , [l, c, d, f]),
    b.useEffect(()=>{
        if (o) {
            const y = m=>{
                const w = m.target
                  , g = {
                    x: m.clientX,
                    y: m.clientY
                }
                  , p = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !gS(g, o);
                p ? f() : v && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", y),
            ()=>document.removeEventListener("pointermove", y)
        }
    }
    , [l, c, o, u, f]),
    x.jsx(hv, {
        ...t,
        ref: i
    })
}
)
  , [uS,cS] = al(cv, {
    isInside: !1
})
  , dS = C_("TooltipContent")
  , hv = b.forwardRef((t,e)=>{
    const {__scopeTooltip: r, children: n, "aria-label": s, onEscapeKeyDown: i, onPointerDownOutside: o, ...a} = t
      , l = ll($s, r)
      , u = Md(r)
      , {onClose: c} = l;
    return b.useEffect(()=>(document.addEventListener(Df, c),
    ()=>document.removeEventListener(Df, c)), [c]),
    b.useEffect(()=>{
        if (l.trigger) {
            const h = f=>{
                const d = f.target;
                d != null && d.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", h, {
                capture: !0
            }),
            ()=>window.removeEventListener("scroll", h, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    x.jsx(kd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: h=>h.preventDefault(),
        onDismiss: c,
        children: x.jsxs(tS, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: e,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [x.jsx(dS, {
                children: n
            }), x.jsx(uS, {
                scope: r,
                isInside: !0,
                children: x.jsx(X_, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || n
                })
            })]
        })
    })
}
);
dv.displayName = $s;
var fv = "TooltipArrow"
  , hS = b.forwardRef((t,e)=>{
    const {__scopeTooltip: r, ...n} = t
      , s = Md(r);
    return cS(fv, r).isInside ? null : x.jsx(rS, {
        ...s,
        ...n,
        ref: e
    })
}
);
hS.displayName = fv;
function fS(t, e) {
    const r = Math.abs(e.top - t.y)
      , n = Math.abs(e.bottom - t.y)
      , s = Math.abs(e.right - t.x)
      , i = Math.abs(e.left - t.x);
    switch (Math.min(r, n, s, i)) {
    case i:
        return "left";
    case s:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function pS(t, e, r=5) {
    const n = [];
    switch (e) {
    case "top":
        n.push({
            x: t.x - r,
            y: t.y + r
        }, {
            x: t.x + r,
            y: t.y + r
        });
        break;
    case "bottom":
        n.push({
            x: t.x - r,
            y: t.y - r
        }, {
            x: t.x + r,
            y: t.y - r
        });
        break;
    case "left":
        n.push({
            x: t.x + r,
            y: t.y - r
        }, {
            x: t.x + r,
            y: t.y + r
        });
        break;
    case "right":
        n.push({
            x: t.x - r,
            y: t.y - r
        }, {
            x: t.x - r,
            y: t.y + r
        });
        break
    }
    return n
}
function mS(t) {
    const {top: e, right: r, bottom: n, left: s} = t;
    return [{
        x: s,
        y: e
    }, {
        x: r,
        y: e
    }, {
        x: r,
        y: n
    }, {
        x: s,
        y: n
    }]
}
function gS(t, e) {
    const {x: r, y: n} = t;
    let s = !1;
    for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
        const a = e[i]
          , l = e[o]
          , u = a.x
          , c = a.y
          , h = l.x
          , f = l.y;
        c > n != f > n && r < (h - u) * (n - c) / (f - c) + u && (s = !s)
    }
    return s
}
function vS(t) {
    const e = t.slice();
    return e.sort((r,n)=>r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    yS(e)
}
function yS(t) {
    if (t.length <= 1)
        return t.slice();
    const e = [];
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        for (; e.length >= 2; ) {
            const i = e[e.length - 1]
              , o = e[e.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                e.pop();
            else
                break
        }
        e.push(s)
    }
    e.pop();
    const r = [];
    for (let n = t.length - 1; n >= 0; n--) {
        const s = t[n];
        for (; r.length >= 2; ) {
            const i = r[r.length - 1]
              , o = r[r.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                r.pop();
            else
                break
        }
        r.push(s)
    }
    return r.pop(),
    e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r)
}
var wS = uv
  , pv = dv;
const bS = wS
  , _S = b.forwardRef(({className: t, sideOffset: e=4, ...r},n)=>x.jsx(pv, {
    ref: n,
    sideOffset: e,
    className: Mt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
    ...r
}));
_S.displayName = pv.displayName;
var ul = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        ()=>{
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , cl = typeof window > "u" || "Deno"in globalThis;
function Tt() {}
function xS(t, e) {
    return typeof t == "function" ? t(e) : t
}
function ES(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function SS(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function hc(t, e) {
    return typeof t == "function" ? t(e) : t
}
function kS(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Mf(t, e) {
    const {type: r="all", exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: a} = t;
    if (o) {
        if (n) {
            if (e.queryHash !== Fd(o, e.options))
                return !1
        } else if (!Bi(e.queryKey, o))
            return !1
    }
    if (r !== "all") {
        const l = e.isActive();
        if (r === "active" && !l || r === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && e.isStale() !== a || s && s !== e.state.fetchStatus || i && !i(e))
}
function Ff(t, e) {
    const {exact: r, status: n, predicate: s, mutationKey: i} = t;
    if (i) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (Fi(e.options.mutationKey) !== Fi(i))
                return !1
        } else if (!Bi(e.options.mutationKey, i))
            return !1
    }
    return !(n && e.state.status !== n || s && !s(e))
}
function Fd(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || Fi)(t)
}
function Fi(t) {
    return JSON.stringify(t, (e,r)=>fc(r) ? Object.keys(r).sort().reduce((n,s)=>(n[s] = r[s],
    n), {}) : r)
}
function Bi(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r=>Bi(t[r], e[r])) : !1
}
function mv(t, e) {
    if (t === e)
        return t;
    const r = Bf(t) && Bf(e);
    if (r || fc(t) && fc(e)) {
        const n = r ? t : Object.keys(t)
          , s = n.length
          , i = r ? e : Object.keys(e)
          , o = i.length
          , a = r ? [] : {}
          , l = new Set(n);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const h = r ? c : i[c];
            (!r && l.has(h) || r) && t[h] === void 0 && e[h] === void 0 ? (a[h] = void 0,
            u++) : (a[h] = mv(t[h], e[h]),
            a[h] === t[h] && t[h] !== void 0 && u++)
        }
        return s === o && u === s ? t : a
    }
    return e
}
function Bf(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function fc(t) {
    if (!zf(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!zf(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function zf(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function TS(t) {
    return new Promise(e=>{
        setTimeout(e, t)
    }
    )
}
function CS(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? mv(t, e) : e
}
function PS(t, e, r=0) {
    const n = [...t, e];
    return r && n.length > r ? n.slice(1) : n
}
function OS(t, e, r=0) {
    const n = [e, ...t];
    return r && n.length > r ? n.slice(0, -1) : n
}
var Bd = Symbol();
function gv(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? ()=>e.initialPromise : !t.queryFn || t.queryFn === Bd ? ()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var wn, jr, ws, Pp, RS = (Pp = class extends ul {
    constructor() {
        super();
        te(this, wn);
        te(this, jr);
        te(this, ws);
        H(this, ws, e=>{
            if (!cl && window.addEventListener) {
                const r = ()=>e();
                return window.addEventListener("visibilitychange", r, !1),
                ()=>{
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, jr) || this.setEventListener(T(this, ws))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = T(this, jr)) == null || e.call(this),
        H(this, jr, void 0))
    }
    setEventListener(e) {
        var r;
        H(this, ws, e),
        (r = T(this, jr)) == null || r.call(this),
        H(this, jr, e(n=>{
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        T(this, wn) !== e && (H(this, wn, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r=>{
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof T(this, wn) == "boolean" ? T(this, wn) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
wn = new WeakMap,
jr = new WeakMap,
ws = new WeakMap,
Pp), vv = new RS, bs, Ar, _s, Op, jS = (Op = class extends ul {
    constructor() {
        super();
        te(this, bs, !0);
        te(this, Ar);
        te(this, _s);
        H(this, _s, e=>{
            if (!cl && window.addEventListener) {
                const r = ()=>e(!0)
                  , n = ()=>e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                ()=>{
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, Ar) || this.setEventListener(T(this, _s))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = T(this, Ar)) == null || e.call(this),
        H(this, Ar, void 0))
    }
    setEventListener(e) {
        var r;
        H(this, _s, e),
        (r = T(this, Ar)) == null || r.call(this),
        H(this, Ar, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        T(this, bs) !== e && (H(this, bs, e),
        this.listeners.forEach(n=>{
            n(e)
        }
        ))
    }
    isOnline() {
        return T(this, bs)
    }
}
,
bs = new WeakMap,
Ar = new WeakMap,
_s = new WeakMap,
Op), ja = new jS;
function AS() {
    let t, e;
    const r = new Promise((s,i)=>{
        t = s,
        e = i
    }
    );
    r.status = "pending",
    r.catch(()=>{}
    );
    function n(s) {
        Object.assign(r, s),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = s=>{
        n({
            status: "fulfilled",
            value: s
        }),
        t(s)
    }
    ,
    r.reject = s=>{
        n({
            status: "rejected",
            reason: s
        }),
        e(s)
    }
    ,
    r
}
function NS(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function yv(t) {
    return (t ?? "online") === "online" ? ja.isOnline() : !0
}
var wv = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function eu(t) {
    return t instanceof wv
}
function bv(t) {
    let e = !1, r = 0, n = !1, s;
    const i = AS()
      , o = m=>{
        var w;
        n || (f(new wv(m)),
        (w = t.abort) == null || w.call(t))
    }
      , a = ()=>{
        e = !0
    }
      , l = ()=>{
        e = !1
    }
      , u = ()=>vv.isFocused() && (t.networkMode === "always" || ja.isOnline()) && t.canRun()
      , c = ()=>yv(t.networkMode) && t.canRun()
      , h = m=>{
        var w;
        n || (n = !0,
        (w = t.onSuccess) == null || w.call(t, m),
        s == null || s(),
        i.resolve(m))
    }
      , f = m=>{
        var w;
        n || (n = !0,
        (w = t.onError) == null || w.call(t, m),
        s == null || s(),
        i.reject(m))
    }
      , d = ()=>new Promise(m=>{
        var w;
        s = g=>{
            (n || u()) && m(g)
        }
        ,
        (w = t.onPause) == null || w.call(t)
    }
    ).then(()=>{
        var m;
        s = void 0,
        n || (m = t.onContinue) == null || m.call(t)
    }
    )
      , y = ()=>{
        if (n)
            return;
        let m;
        const w = r === 0 ? t.initialPromise : void 0;
        try {
            m = w ?? t.fn()
        } catch (g) {
            m = Promise.reject(g)
        }
        Promise.resolve(m).then(h).catch(g=>{
            var S;
            if (n)
                return;
            const p = t.retry ?? (cl ? 0 : 3)
              , v = t.retryDelay ?? NS
              , _ = typeof v == "function" ? v(r, g) : v
              , E = p === !0 || typeof p == "number" && r < p || typeof p == "function" && p(r, g);
            if (e || !E) {
                f(g);
                return
            }
            r++,
            (S = t.onFail) == null || S.call(t, r, g),
            TS(_).then(()=>u() ? void 0 : d()).then(()=>{
                e ? f(g) : y()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: o,
        continue: ()=>(s == null || s(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: ()=>(c() ? y() : d().then(y),
        i)
    }
}
var IS = t=>setTimeout(t, 0);
function $S() {
    let t = []
      , e = 0
      , r = a=>{
        a()
    }
      , n = a=>{
        a()
    }
      , s = IS;
    const i = a=>{
        e ? t.push(a) : s(()=>{
            r(a)
        }
        )
    }
      , o = ()=>{
        const a = t;
        t = [],
        a.length && s(()=>{
            n(()=>{
                a.forEach(l=>{
                    r(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a=>{
            let l;
            e++;
            try {
                l = a()
            } finally {
                e--,
                e || o()
            }
            return l
        }
        ,
        batchCalls: a=>(...l)=>{
            i(()=>{
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a=>{
            r = a
        }
        ,
        setBatchNotifyFunction: a=>{
            n = a
        }
        ,
        setScheduler: a=>{
            s = a
        }
    }
}
var Be = $S(), bn, Rp, _v = (Rp = class {
    constructor() {
        te(this, bn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        ES(this.gcTime) && H(this, bn, setTimeout(()=>{
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (cl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        T(this, bn) && (clearTimeout(T(this, bn)),
        H(this, bn, void 0))
    }
}
,
bn = new WeakMap,
Rp), xs, _n, ht, xn, Le, qi, En, Pt, Zt, jp, LS = (jp = class extends _v {
    constructor(e) {
        super();
        te(this, Pt);
        te(this, xs);
        te(this, _n);
        te(this, ht);
        te(this, xn);
        te(this, Le);
        te(this, qi);
        te(this, En);
        H(this, En, !1),
        H(this, qi, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        H(this, xn, e.client),
        H(this, ht, T(this, xn).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        H(this, xs, DS(this.options)),
        this.state = e.state ?? T(this, xs),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = T(this, Le)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        this.options = {
            ...T(this, qi),
            ...e
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && T(this, ht).remove(this)
    }
    setData(e, r) {
        const n = CS(this.state.data, e, this.options);
        return Ne(this, Pt, Zt).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(e, r) {
        Ne(this, Pt, Zt).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var n, s;
        const r = (n = T(this, Le)) == null ? void 0 : n.promise;
        return (s = T(this, Le)) == null || s.cancel(e),
        r ? r.then(Tt).catch(Tt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(T(this, xs))
    }
    isActive() {
        return this.observers.some(e=>kS(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Bd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e=>hc(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e=>e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !SS(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(n=>n.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = T(this, Le)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(n=>n.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = T(this, Le)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        T(this, ht).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r=>r !== e),
        this.observers.length || (T(this, Le) && (T(this, En) ? T(this, Le).cancel({
            revert: !0
        }) : T(this, Le).cancelRetry()),
        this.scheduleGc()),
        T(this, ht).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, Pt, Zt).call(this, {
            type: "invalidate"
        })
    }
    fetch(e, r) {
        var u, c, h;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (T(this, Le))
                return T(this, Le).continueRetry(),
                T(this, Le).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const f = this.observers.find(d=>d.options.queryFn);
            f && this.setOptions(f.options)
        }
        const n = new AbortController
          , s = f=>{
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: ()=>(H(this, En, !0),
                n.signal)
            })
        }
          , i = ()=>{
            const f = gv(this.options, r)
              , y = (()=>{
                const m = {
                    client: T(this, xn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(m),
                m
            }
            )();
            return H(this, En, !1),
            this.options.persister ? this.options.persister(f, y, this) : f(y)
        }
          , a = (()=>{
            const f = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: T(this, xn),
                state: this.state,
                fetchFn: i
            };
            return s(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, _n, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Ne(this, Pt, Zt).call(this, {
            type: "fetch",
            meta: (h = a.fetchOptions) == null ? void 0 : h.meta
        });
        const l = f=>{
            var d, y, m, w;
            eu(f) && f.silent || Ne(this, Pt, Zt).call(this, {
                type: "error",
                error: f
            }),
            eu(f) || ((y = (d = T(this, ht).config).onError) == null || y.call(d, f, this),
            (w = (m = T(this, ht).config).onSettled) == null || w.call(m, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Le, bv({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: a.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: f=>{
                var d, y, m, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (g) {
                    l(g);
                    return
                }
                (y = (d = T(this, ht).config).onSuccess) == null || y.call(d, f, this),
                (w = (m = T(this, ht).config).onSettled) == null || w.call(m, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f,d)=>{
                Ne(this, Pt, Zt).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: d
                })
            }
            ,
            onPause: ()=>{
                Ne(this, Pt, Zt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: ()=>{
                Ne(this, Pt, Zt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: ()=>!0
        })),
        T(this, Le).start()
    }
}
,
xs = new WeakMap,
_n = new WeakMap,
ht = new WeakMap,
xn = new WeakMap,
Le = new WeakMap,
qi = new WeakMap,
En = new WeakMap,
Pt = new WeakSet,
Zt = function(e) {
    const r = n=>{
        switch (e.type) {
        case "failed":
            return {
                ...n,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...n,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...n,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...n,
                ...US(n.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            return H(this, _n, void 0),
            {
                ...n,
                data: e.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = e.error;
            return eu(s) && s.revert && T(this, _n) ? {
                ...T(this, _n),
                fetchStatus: "idle"
            } : {
                ...n,
                error: s,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...n,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...n,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    Be.batch(()=>{
        this.observers.forEach(n=>{
            n.onQueryUpdate()
        }
        ),
        T(this, ht).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
jp);
function US(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: yv(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function DS(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var zt, Ap, MS = (Ap = class extends ul {
    constructor(e={}) {
        super();
        te(this, zt);
        this.config = e,
        H(this, zt, new Map)
    }
    build(e, r, n) {
        const s = r.queryKey
          , i = r.queryHash ?? Fd(s, r);
        let o = this.get(i);
        return o || (o = new LS({
            client: e,
            queryKey: s,
            queryHash: i,
            options: e.defaultQueryOptions(r),
            state: n,
            defaultOptions: e.getQueryDefaults(s)
        }),
        this.add(o)),
        o
    }
    add(e) {
        T(this, zt).has(e.queryHash) || (T(this, zt).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = T(this, zt).get(e.queryHash);
        r && (e.destroy(),
        r === e && T(this, zt).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        Be.batch(()=>{
            this.getAll().forEach(e=>{
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return T(this, zt).get(e)
    }
    getAll() {
        return [...T(this, zt).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(n=>Mf(r, n))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(n=>Mf(e, n)) : r
    }
    notify(e) {
        Be.batch(()=>{
            this.listeners.forEach(r=>{
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        Be.batch(()=>{
            this.getAll().forEach(e=>{
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Be.batch(()=>{
            this.getAll().forEach(e=>{
                e.onOnline()
            }
            )
        }
        )
    }
}
,
zt = new WeakMap,
Ap), Vt, Me, Sn, Wt, Sr, Np, FS = (Np = class extends _v {
    constructor(e) {
        super();
        te(this, Wt);
        te(this, Vt);
        te(this, Me);
        te(this, Sn);
        this.mutationId = e.mutationId,
        H(this, Me, e.mutationCache),
        H(this, Vt, []),
        this.state = e.state || BS(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        T(this, Vt).includes(e) || (T(this, Vt).push(e),
        this.clearGcTimeout(),
        T(this, Me).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        H(this, Vt, T(this, Vt).filter(r=>r !== e)),
        this.scheduleGc(),
        T(this, Me).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        T(this, Vt).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, Me).remove(this))
    }
    continue() {
        var e;
        return ((e = T(this, Sn)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var i, o, a, l, u, c, h, f, d, y, m, w, g, p, v, _, E, S, k, P;
        const r = ()=>{
            Ne(this, Wt, Sr).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Sn, bv({
            fn: ()=>this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j,N)=>{
                Ne(this, Wt, Sr).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: N
                })
            }
            ,
            onPause: ()=>{
                Ne(this, Wt, Sr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>T(this, Me).canRun(this)
        }));
        const n = this.state.status === "pending"
          , s = !T(this, Sn).canStart();
        try {
            if (n)
                r();
            else {
                Ne(this, Wt, Sr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: s
                }),
                await ((o = (i = T(this, Me).config).onMutate) == null ? void 0 : o.call(i, e, this));
                const N = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, e));
                N !== this.state.context && Ne(this, Wt, Sr).call(this, {
                    type: "pending",
                    context: N,
                    variables: e,
                    isPaused: s
                })
            }
            const j = await T(this, Sn).start();
            return await ((c = (u = T(this, Me).config).onSuccess) == null ? void 0 : c.call(u, j, e, this.state.context, this)),
            await ((f = (h = this.options).onSuccess) == null ? void 0 : f.call(h, j, e, this.state.context)),
            await ((y = (d = T(this, Me).config).onSettled) == null ? void 0 : y.call(d, j, null, this.state.variables, this.state.context, this)),
            await ((w = (m = this.options).onSettled) == null ? void 0 : w.call(m, j, null, e, this.state.context)),
            Ne(this, Wt, Sr).call(this, {
                type: "success",
                data: j
            }),
            j
        } catch (j) {
            try {
                throw await ((p = (g = T(this, Me).config).onError) == null ? void 0 : p.call(g, j, e, this.state.context, this)),
                await ((_ = (v = this.options).onError) == null ? void 0 : _.call(v, j, e, this.state.context)),
                await ((S = (E = T(this, Me).config).onSettled) == null ? void 0 : S.call(E, void 0, j, this.state.variables, this.state.context, this)),
                await ((P = (k = this.options).onSettled) == null ? void 0 : P.call(k, void 0, j, e, this.state.context)),
                j
            } finally {
                Ne(this, Wt, Sr).call(this, {
                    type: "error",
                    error: j
                })
            }
        } finally {
            T(this, Me).runNext(this)
        }
    }
}
,
Vt = new WeakMap,
Me = new WeakMap,
Sn = new WeakMap,
Wt = new WeakSet,
Sr = function(e) {
    const r = n=>{
        switch (e.type) {
        case "failed":
            return {
                ...n,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...n,
                isPaused: !0
            };
        case "continue":
            return {
                ...n,
                isPaused: !1
            };
        case "pending":
            return {
                ...n,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...n,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...n,
                data: void 0,
                error: e.error,
                failureCount: n.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    Be.batch(()=>{
        T(this, Vt).forEach(n=>{
            n.onMutationUpdate(e)
        }
        ),
        T(this, Me).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
Np);
function BS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var nr, Ot, Ki, Ip, zS = (Ip = class extends ul {
    constructor(e={}) {
        super();
        te(this, nr);
        te(this, Ot);
        te(this, Ki);
        this.config = e,
        H(this, nr, new Set),
        H(this, Ot, new Map),
        H(this, Ki, 0)
    }
    build(e, r, n) {
        const s = new FS({
            mutationCache: this,
            mutationId: ++oo(this, Ki)._,
            options: e.defaultMutationOptions(r),
            state: n
        });
        return this.add(s),
        s
    }
    add(e) {
        T(this, nr).add(e);
        const r = Oo(e);
        if (typeof r == "string") {
            const n = T(this, Ot).get(r);
            n ? n.push(e) : T(this, Ot).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (T(this, nr).delete(e)) {
            const r = Oo(e);
            if (typeof r == "string") {
                const n = T(this, Ot).get(r);
                if (n)
                    if (n.length > 1) {
                        const s = n.indexOf(e);
                        s !== -1 && n.splice(s, 1)
                    } else
                        n[0] === e && T(this, Ot).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Oo(e);
        if (typeof r == "string") {
            const n = T(this, Ot).get(r)
              , s = n == null ? void 0 : n.find(i=>i.state.status === "pending");
            return !s || s === e
        } else
            return !0
    }
    runNext(e) {
        var n;
        const r = Oo(e);
        if (typeof r == "string") {
            const s = (n = T(this, Ot).get(r)) == null ? void 0 : n.find(i=>i !== e && i.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Be.batch(()=>{
            T(this, nr).forEach(e=>{
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            T(this, nr).clear(),
            T(this, Ot).clear()
        }
        )
    }
    getAll() {
        return Array.from(T(this, nr))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(n=>Ff(r, n))
    }
    findAll(e={}) {
        return this.getAll().filter(r=>Ff(e, r))
    }
    notify(e) {
        Be.batch(()=>{
            this.listeners.forEach(r=>{
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r=>r.state.isPaused);
        return Be.batch(()=>Promise.all(e.map(r=>r.continue().catch(Tt))))
    }
}
,
nr = new WeakMap,
Ot = new WeakMap,
Ki = new WeakMap,
Ip);
function Oo(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
function Vf(t) {
    return {
        onFetch: (e,r)=>{
            var c, h, f, d, y;
            const n = e.options
              , s = (f = (h = (c = e.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : f.direction
              , i = ((d = e.state.data) == null ? void 0 : d.pages) || []
              , o = ((y = e.state.data) == null ? void 0 : y.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async()=>{
                let m = !1;
                const w = v=>{
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: ()=>(e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", ()=>{
                            m = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , g = gv(e.options, e.fetchOptions)
                  , p = async(v,_,E)=>{
                    if (m)
                        return Promise.reject();
                    if (_ == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = (()=>{
                        const z = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: _,
                            direction: E ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , P = await g(k)
                      , {maxPages: j} = e.options
                      , N = E ? OS : PS;
                    return {
                        pages: N(v.pages, P, j),
                        pageParams: N(v.pageParams, _, j)
                    }
                }
                ;
                if (s && i.length) {
                    const v = s === "backward"
                      , _ = v ? VS : Wf
                      , E = {
                        pages: i,
                        pageParams: o
                    }
                      , S = _(n, E);
                    a = await p(E, S, v)
                } else {
                    const v = t ?? i.length;
                    do {
                        const _ = l === 0 ? o[0] ?? n.initialPageParam : Wf(n, a);
                        if (l > 0 && _ == null)
                            break;
                        a = await p(a, _),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            e.options.persister ? e.fetchFn = ()=>{
                var m, w;
                return (w = (m = e.options).persister) == null ? void 0 : w.call(m, u, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = u
        }
    }
}
function Wf(t, {pages: e, pageParams: r}) {
    const n = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[n], e, r[n], r) : void 0
}
function VS(t, {pages: e, pageParams: r}) {
    var n;
    return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, r[0], r) : void 0
}
var ge, Nr, Ir, Es, Ss, $r, ks, Ts, $p, WS = ($p = class {
    constructor(t={}) {
        te(this, ge);
        te(this, Nr);
        te(this, Ir);
        te(this, Es);
        te(this, Ss);
        te(this, $r);
        te(this, ks);
        te(this, Ts);
        H(this, ge, t.queryCache || new MS),
        H(this, Nr, t.mutationCache || new zS),
        H(this, Ir, t.defaultOptions || {}),
        H(this, Es, new Map),
        H(this, Ss, new Map),
        H(this, $r, 0)
    }
    mount() {
        oo(this, $r)._++,
        T(this, $r) === 1 && (H(this, ks, vv.subscribe(async t=>{
            t && (await this.resumePausedMutations(),
            T(this, ge).onFocus())
        }
        )),
        H(this, Ts, ja.subscribe(async t=>{
            t && (await this.resumePausedMutations(),
            T(this, ge).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        oo(this, $r)._--,
        T(this, $r) === 0 && ((t = T(this, ks)) == null || t.call(this),
        H(this, ks, void 0),
        (e = T(this, Ts)) == null || e.call(this),
        H(this, Ts, void 0))
    }
    isFetching(t) {
        return T(this, ge).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return T(this, Nr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = T(this, ge).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = T(this, ge).build(this, e)
          , n = r.state.data;
        return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(hc(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(n))
    }
    getQueriesData(t) {
        return T(this, ge).findAll(t).map(({queryKey: e, state: r})=>{
            const n = r.data;
            return [e, n]
        }
        )
    }
    setQueryData(t, e, r) {
        const n = this.defaultQueryOptions({
            queryKey: t
        })
          , s = T(this, ge).get(n.queryHash)
          , i = s == null ? void 0 : s.state.data
          , o = xS(e, i);
        if (o !== void 0)
            return T(this, ge).build(this, n).setData(o, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return Be.batch(()=>T(this, ge).findAll(t).map(({queryKey: n})=>[n, this.setQueryData(n, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = T(this, ge).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = T(this, ge);
        Be.batch(()=>{
            e.findAll(t).forEach(r=>{
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = T(this, ge);
        return Be.batch(()=>(r.findAll(t).forEach(n=>{
            n.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , n = Be.batch(()=>T(this, ge).findAll(t).map(s=>s.cancel(r)));
        return Promise.all(n).then(Tt).catch(Tt)
    }
    invalidateQueries(t, e={}) {
        return Be.batch(()=>(T(this, ge).findAll(t).forEach(r=>{
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , n = Be.batch(()=>T(this, ge).findAll(t).filter(s=>!s.isDisabled() && !s.isStatic()).map(s=>{
            let i = s.fetch(void 0, r);
            return r.throwOnError || (i = i.catch(Tt)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(n).then(Tt)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = T(this, ge).build(this, e);
        return r.isStaleByTime(hc(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Tt).catch(Tt)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Vf(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Tt).catch(Tt)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Vf(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return ja.isOnline() ? T(this, Nr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return T(this, ge)
    }
    getMutationCache() {
        return T(this, Nr)
    }
    getDefaultOptions() {
        return T(this, Ir)
    }
    setDefaultOptions(t) {
        H(this, Ir, t)
    }
    setQueryDefaults(t, e) {
        T(this, Es).set(Fi(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...T(this, Es).values()]
          , r = {};
        return e.forEach(n=>{
            Bi(t, n.queryKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        T(this, Ss).set(Fi(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...T(this, Ss).values()]
          , r = {};
        return e.forEach(n=>{
            Bi(t, n.mutationKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...T(this, Ir).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = Fd(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Bd && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...T(this, Ir).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        T(this, ge).clear(),
        T(this, Nr).clear()
    }
}
,
ge = new WeakMap,
Nr = new WeakMap,
Ir = new WeakMap,
Es = new WeakMap,
Ss = new WeakMap,
$r = new WeakMap,
ks = new WeakMap,
Ts = new WeakMap,
$p), HS = b.createContext(void 0), qS = ({client: t, children: e})=>(b.useEffect(()=>(t.mount(),
()=>{
    t.unmount()
}
), [t]),
x.jsx(HS.Provider, {
    value: t,
    children: e
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Aa() {
    return Aa = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }
    ,
    Aa.apply(this, arguments)
}
var Dr;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Dr || (Dr = {}));
const Hf = "popstate";
function KS(t) {
    t === void 0 && (t = {});
    function e(n, s) {
        let {pathname: i, search: o, hash: a} = n.location;
        return pc("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function r(n, s) {
        return typeof s == "string" ? s : Ev(s)
    }
    return QS(e, r, null, t)
}
function Xe(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function xv(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function GS() {
    return Math.random().toString(36).substr(2, 8)
}
function qf(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function pc(t, e, r, n) {
    return r === void 0 && (r = null),
    Aa({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? dl(e) : e, {
        state: r,
        key: e && e.key || n || GS()
    })
}
function Ev(t) {
    let {pathname: e="/", search: r="", hash: n=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
}
function dl(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let n = t.indexOf("?");
        n >= 0 && (e.search = t.substr(n),
        t = t.substr(0, n)),
        t && (e.pathname = t)
    }
    return e
}
function QS(t, e, r, n) {
    n === void 0 && (n = {});
    let {window: s=document.defaultView, v5Compat: i=!1} = n
      , o = s.history
      , a = Dr.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(Aa({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        a = Dr.Pop;
        let w = c()
          , g = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: m.location,
            delta: g
        })
    }
    function f(w, g) {
        a = Dr.Push;
        let p = pc(m.location, w, g);
        u = c() + 1;
        let v = qf(p, u)
          , _ = m.createHref(p);
        try {
            o.pushState(v, "", _)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            s.location.assign(_)
        }
        i && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function d(w, g) {
        a = Dr.Replace;
        let p = pc(m.location, w, g);
        u = c();
        let v = qf(p, u)
          , _ = m.createHref(p);
        o.replaceState(v, "", _),
        i && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }
    function y(w) {
        let g = s.location.origin !== "null" ? s.location.origin : s.location.href
          , p = typeof w == "string" ? w : Ev(w);
        return p = p.replace(/ $/, "%20"),
        Xe(g, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,g)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return t(s, o)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(Hf, h),
            l = w,
            ()=>{
                s.removeEventListener(Hf, h),
                l = null
            }
        },
        createHref(w) {
            return e(s, w)
        },
        createURL: y,
        encodeLocation(w) {
            let g = y(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: d,
        go(w) {
            return o.go(w)
        }
    };
    return m
}
var Kf;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Kf || (Kf = {}));
function JS(t, e, r) {
    return r === void 0 && (r = "/"),
    YS(t, e, r, !1)
}
function YS(t, e, r, n) {
    let s = typeof e == "string" ? dl(e) : e
      , i = Tv(s.pathname || "/", r);
    if (i == null)
        return null;
    let o = Sv(t);
    XS(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = uk(i);
        a = ak(o[l], u, n)
    }
    return a
}
function Sv(t, e, r, n) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let s = (i,o,a)=>{
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        l.relativePath.startsWith("/") && (Xe(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let u = gs([n, l.relativePath])
          , c = r.concat(l);
        i.children && i.children.length > 0 && (Xe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Sv(i.children, e, c, u)),
        !(i.path == null && !i.index) && e.push({
            path: u,
            score: ik(u, i.index),
            routesMeta: c
        })
    }
    ;
    return t.forEach((i,o)=>{
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
        else
            for (let l of kv(i.path))
                s(i, o, l)
    }
    ),
    e
}
function kv(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...n] = e
      , s = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (n.length === 0)
        return s ? [i, ""] : [i];
    let o = kv(n.join("/"))
      , a = [];
    return a.push(...o.map(l=>l === "" ? i : [i, l].join("/"))),
    s && a.push(...o),
    a.map(l=>t.startsWith("/") && l === "" ? "/" : l)
}
function XS(t) {
    t.sort((e,r)=>e.score !== r.score ? r.score - e.score : ok(e.routesMeta.map(n=>n.childrenIndex), r.routesMeta.map(n=>n.childrenIndex)))
}
const ZS = /^:[\w-]+$/
  , ek = 3
  , tk = 2
  , rk = 1
  , nk = 10
  , sk = -2
  , Gf = t=>t === "*";
function ik(t, e) {
    let r = t.split("/")
      , n = r.length;
    return r.some(Gf) && (n += sk),
    e && (n += tk),
    r.filter(s=>!Gf(s)).reduce((s,i)=>s + (ZS.test(i) ? ek : i === "" ? rk : nk), n)
}
function ok(t, e) {
    return t.length === e.length && t.slice(0, -1).every((n,s)=>n === e[s]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function ak(t, e, r) {
    let {routesMeta: n} = t
      , s = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < n.length; ++a) {
        let l = n[a]
          , u = a === n.length - 1
          , c = i === "/" ? e : e.slice(i.length) || "/"
          , h = Qf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!h && u && r && !n[n.length - 1].route.index && (h = Qf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !h)
            return null;
        Object.assign(s, h.params),
        o.push({
            params: s,
            pathname: gs([i, h.pathname]),
            pathnameBase: ck(gs([i, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (i = gs([i, h.pathnameBase]))
    }
    return o
}
function Qf(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = lk(t.path, t.caseSensitive, t.end)
      , s = e.match(r);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: n.reduce((u,c,h)=>{
            let {paramName: f, isOptional: d} = c;
            if (f === "*") {
                let m = a[h] || "";
                o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[h];
            return d && !y ? u[f] = void 0 : u[f] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: t
    }
}
function lk(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    xv(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let n = []
      , s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o,a,l)=>(n.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,e ? void 0 : "i"), n]
}
function uk(t) {
    try {
        return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return xv(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Tv(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , n = t.charAt(r);
    return n && n !== "/" ? null : t.slice(r) || "/"
}
const gs = t=>t.join("/").replace(/\/\/+/g, "/")
  , ck = t=>t.replace(/\/+$/, "").replace(/^\/*/, "/");
function dk(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Cv = ["post", "put", "patch", "delete"];
new Set(Cv);
const hk = ["get", ...Cv];
new Set(hk);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Na() {
    return Na = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }
    ,
    Na.apply(this, arguments)
}
const fk = b.createContext(null)
  , pk = b.createContext(null)
  , Pv = b.createContext(null)
  , hl = b.createContext(null)
  , fl = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Ov = b.createContext(null);
function zd() {
    return b.useContext(hl) != null
}
function mk() {
    return zd() || Xe(!1),
    b.useContext(hl).location
}
function gk(t, e) {
    return vk(t, e)
}
function vk(t, e, r, n) {
    zd() || Xe(!1);
    let {navigator: s} = b.useContext(Pv)
      , {matches: i} = b.useContext(fl)
      , o = i[i.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = mk(), c;
    if (e) {
        var h;
        let w = typeof e == "string" ? dl(e) : e;
        l === "/" || (h = w.pathname) != null && h.startsWith(l) || Xe(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , d = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        d = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let y = JS(t, {
        pathname: d
    })
      , m = xk(y && y.map(w=>Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: gs([l, s.encodeLocation ? s.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : gs([l, s.encodeLocation ? s.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, r, n);
    return e && m ? b.createElement(hl.Provider, {
        value: {
            location: Na({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Dr.Pop
        }
    }, m) : m
}
function yk() {
    let t = Tk()
      , e = dk(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? b.createElement("pre", {
        style: s
    }, r) : null, null)
}
const wk = b.createElement(yk, null);
class bk extends b.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(fl.Provider, {
            value: this.props.routeContext
        }, b.createElement(Ov.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function _k(t) {
    let {routeContext: e, match: r, children: n} = t
      , s = b.useContext(fk);
    return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(fl.Provider, {
        value: e
    }, n)
}
function xk(t, e, r, n) {
    var s;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    t == null) {
        var i;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((i = n) != null && i.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let o = t
      , a = (s = r) == null ? void 0 : s.errors;
    if (a != null) {
        let c = o.findIndex(h=>h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
        c >= 0 || Xe(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (r && n && n.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let h = o[c];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c),
            h.route.id) {
                let {loaderData: f, errors: d} = r
                  , y = h.route.loader && f[h.route.id] === void 0 && (!d || d[h.route.id] === void 0);
                if (h.route.lazy || y) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((c,h,f)=>{
        let d, y = !1, m = null, w = null;
        r && (d = a && h.route.id ? a[h.route.id] : void 0,
        m = h.route.errorElement || wk,
        l && (u < 0 && f === 0 ? (y = !0,
        w = null) : u === f && (y = !0,
        w = h.route.hydrateFallbackElement || null)));
        let g = e.concat(o.slice(0, f + 1))
          , p = ()=>{
            let v;
            return d ? v = m : y ? v = w : h.route.Component ? v = b.createElement(h.route.Component, null) : h.route.element ? v = h.route.element : v = c,
            b.createElement(_k, {
                match: h,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: r != null
                },
                children: v
            })
        }
        ;
        return r && (h.route.ErrorBoundary || h.route.errorElement || f === 0) ? b.createElement(bk, {
            location: r.location,
            revalidation: r.revalidation,
            component: m,
            error: d,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var mc = function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}(mc || {});
function Ek(t) {
    let e = b.useContext(pk);
    return e || Xe(!1),
    e
}
function Sk(t) {
    let e = b.useContext(fl);
    return e || Xe(!1),
    e
}
function kk(t) {
    let e = Sk()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || Xe(!1),
    r.route.id
}
function Tk() {
    var t;
    let e = b.useContext(Ov)
      , r = Ek(mc.UseRouteError)
      , n = kk(mc.UseRouteError);
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[n]
}
function Ck(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function gc(t) {
    Xe(!1)
}
function Pk(t) {
    let {basename: e="/", children: r=null, location: n, navigationType: s=Dr.Pop, navigator: i, static: o=!1, future: a} = t;
    zd() && Xe(!1);
    let l = e.replace(/^\/*/, "/")
      , u = b.useMemo(()=>({
        basename: l,
        navigator: i,
        static: o,
        future: Na({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof n == "string" && (n = dl(n));
    let {pathname: c="/", search: h="", hash: f="", state: d=null, key: y="default"} = n
      , m = b.useMemo(()=>{
        let w = Tv(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: h,
                hash: f,
                state: d,
                key: y
            },
            navigationType: s
        }
    }
    , [l, c, h, f, d, y, s]);
    return m == null ? null : b.createElement(Pv.Provider, {
        value: u
    }, b.createElement(hl.Provider, {
        children: r,
        value: m
    }))
}
function Ok(t) {
    let {children: e, location: r} = t;
    return gk(vc(e), r)
}
new Promise(()=>{}
);
function vc(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return b.Children.forEach(t, (n,s)=>{
        if (!b.isValidElement(n))
            return;
        let i = [...e, s];
        if (n.type === b.Fragment) {
            r.push.apply(r, vc(n.props.children, i));
            return
        }
        n.type !== gc && Xe(!1),
        !n.props.index || !n.props.children || Xe(!1);
        let o = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (o.children = vc(n.props.children, i)),
        r.push(o)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Rk = "6";
try {
    window.__reactRouterVersion = Rk
} catch {}
const jk = "startTransition"
  , Jf = Gp[jk];
function Ak(t) {
    let {basename: e, children: r, future: n, window: s} = t
      , i = b.useRef();
    i.current == null && (i.current = KS({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
      , [a,l] = b.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = n || {}
      , c = b.useCallback(h=>{
        u && Jf ? Jf(()=>l(h)) : l(h)
    }
    , [l, u]);
    return b.useLayoutEffect(()=>o.listen(c), [o, c]),
    b.useEffect(()=>Ck(n), [n]),
    b.createElement(Pk, {
        basename: e,
        children: r,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: n
    })
}
var Yf;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Yf || (Yf = {}));
var Xf;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Xf || (Xf = {}));
const Nk = ({className: t})=>x.jsxs("div", {
 className: Mt("text-center", t),
 children: [x.jsxs("h1", {
 className: "font-orbitron text-4xl md:text-6xl font-black tracking-wider animate-float",
 children: [x.jsx("span", {
 className: "text-gradient ",
 children: "BIGBULL"
 }), x.jsx("br", {}), x.jsx("span", {
 className: "text-primary ",
 children: "X ZESTY"
 }), x.jsx("br", {}), x.jsx("span", {
 className: "text-primary ",
 children: "CHEATS"
 })]
 }), x.jsx("div", {
 className: "mt-4 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-shimmer"
 })]
})
 , Ik = ({className: t})=>x.jsxs("div", {
 className: Mt("flex flex-col sm:flex-row gap-4 justify-center items-center", t),
 children: [x.jsxs("a", {
 href: "https://t.me/mr_panel_live",
 target: "_blank",
 rel: "noopener noreferrer",
 className: "flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0088cc]/20 to-[#0088cc]/10 border border-[#0088cc]/50 hover:border-[#0088cc] hover:shadow-[0_0_20px_#0088cc50] transition-all duration-300 group",
 children: [x.jsx("svg", {
 className: "w-6 h-6 text-[#0088cc] group-hover:scale-110 transition-transform",
 viewBox: "0 0 24 24",
 fill: "currentColor",
 children: x.jsx("path", {
 d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
 })
 }), x.jsx("span", {
 className: "font-rajdhani font-semibold text-[#0088cc]",
 children: "Telegram Channel"
 })]
 }), x.jsxs("a", {
 href: "https://youtube.com/@mr_proxy_live?si=dLZUCTxFB5kCeoXK",
 target: "_blank",
 rel: "noopener noreferrer",
 className: "flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff0000]/20 to-[#ff0000]/10 border border-[#ff0000]/50 hover:border-[#ff0000] hover:shadow-[0_0_20px_#ff000050] transition-all duration-300 group",
 children: [x.jsx("svg", {
 className: "w-6 h-6 text-[#ff0000] group-hover:scale-110 transition-transform",
 viewBox: "0 0 24 24",
 fill: "currentColor",
 children: x.jsx("path", {
 d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
 })
 }), x.jsx("span", {
 className: "font-rajdhani font-semibold text-[#ff0000]",
 children: "YouTube Channel"
 })]
 })]
})
 , $k = Cg("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-rajdhani uppercase tracking-wider", {
 variants: {
 variant: {
 default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.5)]",
 destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
 outline: "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_hsl(180_100%_50%/0.3)]",
 secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[0_0_20px_hsl(280_100%_60%/0.5)]",
 ghost: "hover:bg-accent hover:text-accent-foreground",
 link: "text-primary underline-offset-4 hover:underline",
 neon: "relative bg-gradient-to-r from-[hsl(180,100%,50%)] via-[hsl(280,100%,60%)] to-[hsl(320,100%,60%)] text-[hsl(240,20%,4%)] font-bold hover:shadow-[0_0_30px_hsl(180_100%_50%/0.6),0_0_60px_hsl(280_100%_60%/0.4)]",
 glow: "bg-white border border-primary/50 text-foreground hover:border-primary hover:shadow-[0_0_25px_hsl(180_100%_50%/0.5)] hover:text-primary"
 },
 size: {
 default: "h-10 px-4 py-2",
 sm: "h-9 rounded-md px-3",
 lg: "h-12 rounded-lg px-8 text-base",
 xl: "h-14 rounded-xl px-10 text-lg",
 icon: "h-10 w-10"
 }
 },
 defaultVariants: {
 variant: "default",
 size: "default"
 }
})
 , Vd = b.forwardRef(({className: t, variant: e, size: r, asChild: n=!1, ...s},i)=>{
 const o = n ? k_ : "button";
 return x.jsx(o, {
 className: Mt($k({
 variant: e,
 size: r,
 className: t
 })),
 ref: i,
 ...s
 })
}
);
Vd.displayName = "Button";
const vs = b.forwardRef(({className: t, type: e, ...r},n)=>x.jsx("input", {
 type: e,
 className: Mt("flex h-12 w-full rounded-lg border border-primary/40/50 bg-input px-4 py-2 text-base font-rajdhani text-foreground placeholder:text-foreground transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(180_100%_50%/0.3)] disabled:cursor-not-allowed disabled:opacity-50", t),
 ref: n,
 ...r
}));
vs.displayName = "Input";
const Lk = ({onLogin: t})=>{
 const [e,r] = b.useState("")
 , [n,s] = b.useState("")
 , [i,o] = b.useState(!1)
 , a = async l=>{
 if (l.preventDefault(),
 !e.trim() || !n.trim()) {
 Or({
 title: "Error",
 description: "Please enter both ID and Password",
 variant: "destructive"
 });
 return
 }
 o(!0),
 setTimeout(()=>{
 o(!1),
 Or({
 title: "Login Successful! 🎮",
 description: "Welcome to ANANT EMOTE WEB"
 }),
 t()
 }
 , 1e3)
 }
 ;
 return x.jsxs("form", {
 onSubmit: a,
 className: "space-y-6",
 children: [x.jsxs("div", {
 className: "space-y-2",
 children: [x.jsx("label", {
 className: "block text-sm font-semibold text-primary uppercase tracking-wider",
 children: "User ID"
 }), x.jsx(vs, {
 type: "text",
 placeholder: "Enter your ID",
 value: e,
 onChange: l=>r(l.target.value),
 className: "bg-white"
 })]
 }), x.jsxs("div", {
 className: "space-y-2",
 children: [x.jsx("label", {
 className: "block text-sm font-semibold text-primary uppercase tracking-wider",
 children: "Password"
 }), x.jsx(vs, {
 type: "password",
 placeholder: "Enter your Password",
 value: n,
 onChange: l=>s(l.target.value),
 className: "bg-white"
 })]
 }), x.jsx(Vd, {
 type: "submit",
 variant: "default",
 size: "xl",
 className: "w-full",
 disabled: i,
 children: i ? x.jsxs("span", {
 className: "flex items-center gap-2",
 children: [x.jsxs("svg", {
 className: "animate-spin h-5 w-5",
 viewBox: "0 0 24 24",
 children: [x.jsx("circle", {
 className: "opacity-25",
 cx: "12",
 cy: "12",
 r: "10",
 stroke: "currentColor",
 strokeWidth: "4",
 fill: "none"
 }), x.jsx("path", {
 className: "opacity-75",
 fill: "currentColor",
 d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
 })]
 }), "Logging In..."]
 }) : "LOGIN"
 })]
 })
}
;
var yc = function(t, e) {
 return yc = Object.setPrototypeOf || {
 __proto__: []
 }instanceof Array && function(r, n) {
 r.__proto__ = n
 }
 || function(r, n) {
 for (var s in n)
 Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s])
 }
 ,
 yc(t, e)
};
function Rv(t, e) {
 if (typeof e != "function" && e !== null)
 throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
 yc(t, e);
 function r() {
 this.constructor = t
 }
 t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype,
 new r)
}
var Ia = function() {
 return Ia = Object.assign || function(e) {
 for (var r, n = 1, s = arguments.length; n < s; n++) {
 r = arguments[n];
 for (var i in r)
 Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
 }
 return e
 }
 ,
 Ia.apply(this, arguments)
};
function Vs(t, e) {
 var r = {};
 for (var n in t)
 Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
 if (t != null && typeof Object.getOwnPropertySymbols == "function")
 for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
 e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
 return r
}
function jv(t, e, r, n) {
 var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 i = Reflect.decorate(t, e, r, n);
 else
 for (var a = t.length - 1; a >= 0; a--)
 (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
 return s > 3 && i && Object.defineProperty(e, r, i),
 i
}
function Av(t, e) {
 return function(r, n) {
 e(r, n, t)
 }
}
function Nv(t, e, r, n, s, i) {
 function o(g) {
 if (g !== void 0 && typeof g != "function")
 throw new TypeError("Function expected");
 return g
 }
 for (var a = n.kind, l = a === "getter" ? "get" : a === "setter" ? "set" : "value", u = !e && t ? n.static ? t : t.prototype : null, c = e || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), h, f = !1, d = r.length - 1; d >= 0; d--) {
 var y = {};
 for (var m in n)
 y[m] = m === "access" ? {} : n[m];
 for (var m in n.access)
 y.access[m] = n.access[m];
 y.addInitializer = function(g) {
 if (f)
 throw new TypeError("Cannot add initializers after decoration has completed");
 i.push(o(g || null))
 }
 ;
 var w = (0,
 r[d])(a === "accessor" ? {
 get: c.get,
 set: c.set
 } : c[l], y);
 if (a === "accessor") {
 if (w === void 0)
 continue;
 if (w === null || typeof w != "object")
 throw new TypeError("Object expected");
 (h = o(w.get)) && (c.get = h),
 (h = o(w.set)) && (c.set = h),
 (h = o(w.init)) && s.unshift(h)
 } else
 (h = o(w)) && (a === "field" ? s.unshift(h) : c[l] = h)
 }
 u && Object.defineProperty(u, n.name, c),
 f = !0
}
function Iv(t, e, r) {
 for (var n = arguments.length > 2, s = 0; s < e.length; s++)
 r = n ? e[s].call(t, r) : e[s].call(t);
 return n ? r : void 0
}
function $v(t) {
 return typeof t == "symbol" ? t : "".concat(t)
}
function Lv(t, e, r) {
 return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""),
 Object.defineProperty(t, "name", {
 configurable: !0,
 value: r ? "".concat(r, " ", e) : e
 })
}
function Uv(t, e) {
 if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
 return Reflect.metadata(t, e)
}
function U(t, e, r, n) {
 function s(i) {
 return i instanceof r ? i : new r(function(o) {
 o(i)
 }
 )
 }
 return new (r || (r = Promise))(function(i, o) {
 function a(c) {
 try {
 u(n.next(c))
 } catch (h) {
 o(h)
 }
 }
 function l(c) {
 try {
 u(n.throw(c))
 } catch (h) {
 o(h)
 }
 }
 function u(c) {
 c.done ? i(c.value) : s(c.value).then(a, l)
 }
 u((n = n.apply(t, e || [])).next())
 }
 )
}
function Dv(t, e) {
 var r = {
 label: 0,
 sent: function() {
 if (i[0] & 1)
 throw i[1];
 return i[1]
 },
 trys: [],
 ops: []
 }, n, s, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
 return o.next = a(0),
 o.throw = a(1),
 o.return = a(2),
 typeof Symbol == "function" && (o[Symbol.iterator] = function() {
 return this
 }
 ),
 o;
 function a(u) {
 return function(c) {
 return l([u, c])
 }
 }
 function l(u) {
 if (n)
 throw new TypeError("Generator is already executing.");
 for (; o && (o = 0,
 u[0] && (r = 0)),
 r; )
 try {
 if (n = 1,
 s && (i = u[0] & 2 ? s.return : u[0] ? s.throw || ((i = s.return) && i.call(s),
 0) : s.next) && !(i = i.call(s, u[1])).done)
 return i;
 switch (s = 0,
 i && (u = [u[0] & 2, i.value]),
 u[0]) {
 case 0:
 case 1:
 i = u;
 break;
 case 4:
 return r.label++,
 {
 value: u[1],
 done: !1
 };
 case 5:
 r.label++,
 s = u[1],
 u = [0];
 continue;
 case 7:
 u = r.ops.pop(),
 r.trys.pop();
 continue;
 default:
 if (i = r.trys,
 !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
 r = 0;
 continue
 }
 if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
 r.label = u[1];
 break
 }
 if (u[0] === 6 && r.label < i[1]) {
 r.label = i[1],
 i = u;
 break
 }
 if (i && r.label < i[2]) {
 r.label = i[2],
 r.ops.push(u);
 break
 }
 i[2] && r.ops.pop(),
 r.trys.pop();
 continue
 }
 u = e.call(t, r)
 } catch (c) {
 u = [6, c],
 s = 0
 } finally {
 n = i = 0
 }
 if (u[0] & 5)
 throw u[1];
 return {
 value: u[0] ? u[1] : void 0,
 done: !0
 }
 }
}
var pl = Object.create ? function(t, e, r, n) {
 n === void 0 && (n = r);
 var s = Object.getOwnPropertyDescriptor(e, r);
 (!s || ("get"in s ? !e.__esModule : s.writable || s.configurable)) && (s = {
 enumerable: !0,
 get: function() {
 return e[r]
 }
 }),
 Object.defineProperty(t, n, s)
}
: function(t, e, r, n) {
 n === void 0 && (n = r),
 t[n] = e[r]
}
;
function Mv(t, e) {
 for (var r in t)
 r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && pl(e, t, r)
}
function $a(t) {
 var e = typeof Symbol == "function" && Symbol.iterator
 , r = e && t[e]
 , n = 0;
 if (r)
 return r.call(t);
 if (t && typeof t.length == "number")
 return {
 next: function() {
 return t && n >= t.length && (t = void 0),
 {
 value: t && t[n++],
 done: !t
 }
 }
 };
 throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function Wd(t, e) {
 var r = typeof Symbol == "function" && t[Symbol.iterator];
 if (!r)
 return t;
 var n = r.call(t), s, i = [], o;
 try {
 for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
 i.push(s.value)
 } catch (a) {
 o = {
 error: a
 }
 } finally {
 try {
 s && !s.done && (r = n.return) && r.call(n)
 } finally {
 if (o)
 throw o.error
 }
 }
 return i
}
function Fv() {
 for (var t = [], e = 0; e < arguments.length; e++)
 t = t.concat(Wd(arguments[e]));
 return t
}
function Bv() {
 for (var t = 0, e = 0, r = arguments.length; e < r; e++)
 t += arguments[e].length;
 for (var n = Array(t), s = 0, e = 0; e < r; e++)
 for (var i = arguments[e], o = 0, a = i.length; o < a; o++,
 s++)
 n[s] = i[o];
 return n
}
function zv(t, e, r) {
 if (r || arguments.length === 2)
 for (var n = 0, s = e.length, i; n < s; n++)
 (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)),
 i[n] = e[n]);
 return t.concat(i || Array.prototype.slice.call(e))
}
function Ls(t) {
 return this instanceof Ls ? (this.v = t,
 this) : new Ls(t)
}
function Vv(t, e, r) {
 if (!Symbol.asyncIterator)
 throw new TypeError("Symbol.asyncIterator is not defined.");
 var n = r.apply(t, e || []), s, i = [];
 return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
 a("next"),
 a("throw"),
 a("return", o),
 s[Symbol.asyncIterator] = function() {
 return this
 }
 ,
 s;
 function o(d) {
 return function(y) {
 return Promise.resolve(y).then(d, h)
 }
 }
 function a(d, y) {
 n[d] && (s[d] = function(m) {
 return new Promise(function(w, g) {
 i.push([d, m, w, g]) > 1 || l(d, m)
 }
 )
 }
 ,
 y && (s[d] = y(s[d])))
 }
 function l(d, y) {
 try {
 u(n[d](y))
 } catch (m) {
 f(i[0][3], m)
 }
 }
 function u(d) {
 d.value instanceof Ls ? Promise.resolve(d.value.v).then(c, h) : f(i[0][2], d)
 }
 function c(d) {
 l("next", d)
 }
 function h(d) {
 l("throw", d)
 }
 function f(d, y) {
 d(y),
 i.shift(),
 i.length && l(i[0][0], i[0][1])
 }
}
function Wv(t) {
 var e, r;
 return e = {},
 n("next"),
 n("throw", function(s) {
 throw s
 }),
 n("return"),
 e[Symbol.iterator] = function() {
 return this
 }
 ,
 e;
 function n(s, i) {
 e[s] = t[s] ? function(o) {
 return (r = !r) ? {
 value: Ls(t[s](o)),
 done: !1
 } : i ? i(o) : o
 }
 : i
 }
}
function Hv(t) {
 if (!Symbol.asyncIterator)
 throw new TypeError("Symbol.asyncIterator is not defined.");
 var e = t[Symbol.asyncIterator], r;
 return e ? e.call(t) : (t = typeof $a == "function" ? $a(t) : t[Symbol.iterator](),
 r = {},
 n("next"),
 n("throw"),
 n("return"),
 r[Symbol.asyncIterator] = function() {
 return this
 }
 ,
 r);
 function n(i) {
 r[i] = t[i] && function(o) {
 return new Promise(function(a, l) {
 o = t[i](o),
 s(a, l, o.done, o.value)
 }
 )
 }
 }
 function s(i, o, a, l) {
 Promise.resolve(l).then(function(u) {
 i({
 value: u,
 done: a
 })
 }, o)
 }
}
function qv(t, e) {
 return Object.defineProperty ? Object.defineProperty(t, "raw", {
 value: e
 }) : t.raw = e,
 t
}
var Uk = Object.create ? function(t, e) {
 Object.defineProperty(t, "default", {
 enumerable: !0,
 value: e
 })
}
: function(t, e) {
 t.default = e
}
 , wc = function(t) {
 return wc = Object.getOwnPropertyNames || function(e) {
 var r = [];
 for (var n in e)
 Object.prototype.hasOwnProperty.call(e, n) && (r[r.length] = n);
 return r
 }
 ,
 wc(t)
};
function Kv(t) {
 if (t && t.__esModule)
 return t;
 var e = {};
 if (t != null)
 for (var r = wc(t), n = 0; n < r.length; n++)
 r[n] !== "default" && pl(e, t, r[n]);
 return Uk(e, t),
 e
}
function Gv(t) {
 return t && t.__esModule ? t : {
 default: t
 }
}
function Qv(t, e, r, n) {
 if (r === "a" && !n)
 throw new TypeError("Private accessor was defined without a getter");
 if (typeof e == "function" ? t !== e || !n : !e.has(t))
 throw new TypeError("Cannot read private member from an object whose class did not declare it");
 return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t)
}
function Jv(t, e, r, n, s) {
 if (n === "m")
 throw new TypeError("Private method is not writable");
 if (n === "a" && !s)
 throw new TypeError("Private accessor was defined without a setter");
 if (typeof e == "function" ? t !== e || !s : !e.has(t))
 throw new TypeError("Cannot write private member to an object whose class did not declare it");
 return n === "a" ? s.call(t, r) : s ? s.value = r : e.set(t, r),
 r
}
function Yv(t, e) {
 if (e === null || typeof e != "object" && typeof e != "function")
 throw new TypeError("Cannot use 'in' operator on non-object");
 return typeof t == "function" ? e === t : t.has(e)
}
function Xv(t, e, r) {
 if (e != null) {
 if (typeof e != "object" && typeof e != "function")
 throw new TypeError("Object expected.");
 var n, s;
 if (r) {
 if (!Symbol.asyncDispose)
 throw new TypeError("Symbol.asyncDispose is not defined.");
 n = e[Symbol.asyncDispose]
 }
 if (n === void 0) {
 if (!Symbol.dispose)
 throw new TypeError("Symbol.dispose is not defined.");
 n = e[Symbol.dispose],
 r && (s = n)
 }
 if (typeof n != "function")
 throw new TypeError("Object not disposable.");
 s && (n = function() {
 try {
 s.call(this)
 } catch (i) {
 return Promise.reject(i)
 }
 }
 ),
 t.stack.push({
 value: e,
 dispose: n,
 async: r
 })
 } else
 r && t.stack.push({
 async: !0
 });
 return e
}
var Dk = typeof SuppressedError == "function" ? SuppressedError : function(t, e, r) {
 var n = new Error(r);
 return n.name = "SuppressedError",
 n.error = t,
 n.suppressed = e,
 n
}
;
function Zv(t) {
 function e(i) {
 t.error = t.hasError ? new Dk(i,t.error,"An error was suppressed during disposal.") : i,
 t.hasError = !0
 }
 var r, n = 0;
 function s() {
 for (; r = t.stack.pop(); )
 try {
 if (!r.async && n === 1)
 return n = 0,
 t.stack.push(r),
 Promise.resolve().then(s);
 if (r.dispose) {
 var i = r.dispose.call(r.value);
 if (r.async)
 return n |= 2,
 Promise.resolve(i).then(s, function(o) {
 return e(o),
 s()
 })
 } else
 n |= 1
 } catch (o) {
 e(o)
 }
 if (n === 1)
 return t.hasError ? Promise.reject(t.error) : Promise.resolve();
 if (t.hasError)
 throw t.error
 }
 return s()
}
function ey(t, e) {
 return typeof t == "string" && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, s, i, o) {
 return n ? e ? ".jsx" : ".js" : s && (!i || !o) ? r : s + i + "." + o.toLowerCase() + "js"
 }) : t
}
const Mk = {
 __extends: Rv,
 __assign: Ia,
 __rest: Vs,
 __decorate: jv,
 __param: Av,
 __esDecorate: Nv,
 __runInitializers: Iv,
 __propKey: $v,
 __setFunctionName: Lv,
 __metadata: Uv,
 __awaiter: U,
 __generator: Dv,
 __createBinding: pl,
 __exportStar: Mv,
 __values: $a,
 __read: Wd,
 __spread: Fv,
 __spreadArrays: Bv,
 __spreadArray: zv,
 __await: Ls,
 __asyncGenerator: Vv,
 __asyncDelegator: Wv,
 __asyncValues: Hv,
 __makeTemplateObject: qv,
 __importStar: Kv,
 __importDefault: Gv,
 __classPrivateFieldGet: Qv,
 __classPrivateFieldSet: Jv,
 __classPrivateFieldIn: Yv,
 __addDisposableResource: Xv,
 __disposeResources: Zv,
 __rewriteRelativeImportExtension: ey
}
 , Fk = Object.freeze(Object.defineProperty({
 __proto__: null,
 __addDisposableResource: Xv,
 get __assign() {
 return Ia
 },
 __asyncDelegator: Wv,
 __asyncGenerator: Vv,
 __asyncValues: Hv,
 __await: Ls,
 __awaiter: U,
 __classPrivateFieldGet: Qv,
 __classPrivateFieldIn: Yv,
 __classPrivateFieldSet: Jv,
 __createBinding: pl,
 __decorate: jv,
 __disposeResources: Zv,
 __esDecorate: Nv,
 __exportStar: Mv,
 __extends: Rv,
 __generator: Dv,
 __importDefault: Gv,
 __importStar: Kv,
 __makeTemplateObject: qv,
 __metadata: Uv,
 __param: Av,
 __propKey: $v,
 __read: Wd,
 __rest: Vs,
 __rewriteRelativeImportExtension: ey,
 __runInitializers: Iv,
 __setFunctionName: Lv,
 __spread: Fv,
 __spreadArray: zv,
 __spreadArrays: Bv,
 __values: $a,
 default: Mk
}, Symbol.toStringTag, {
 value: "Module"
}))
 , Bk = t=>t ? (...e)=>t(...e) : (...e)=>fetch(...e);
class Hd extends Error {
 constructor(e, r="FunctionsError", n) {
 super(e),
 this.name = r,
 this.context = n
 }
}
class zk extends Hd {
 constructor(e) {
 super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
 }
}
class Zf extends Hd {
 constructor(e) {
 super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
 }
}
class ep extends Hd {
 constructor(e) {
 super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
 }
}
var bc;
(function(t) {
 t.Any = "any",
 t.ApNortheast1 = "ap-northeast-1",
 t.ApNortheast2 = "ap-northeast-2",
 t.ApSouth1 = "ap-south-1",
 t.ApSoutheast1 = "ap-southeast-1",
 t.ApSoutheast2 = "ap-southeast-2",
 t.CaCentral1 = "ca-central-1",
 t.EuCentral1 = "eu-central-1",
 t.EuWest1 = "eu-west-1",
 t.EuWest2 = "eu-west-2",
 t.EuWest3 = "eu-west-3",
 t.SaEast1 = "sa-east-1",
 t.UsEast1 = "us-east-1",
 t.UsWest1 = "us-west-1",
 t.UsWest2 = "us-west-2"
}
)(bc || (bc = {}));
class Vk {
 constructor(e, {headers: r={}, customFetch: n, region: s=bc.Any}={}) {
 this.url = e,
 this.headers = r,
 this.region = s,
 this.fetch = Bk(n)
 }
 setAuth(e) {
 this.headers.Authorization = `Bearer ${e}`
 }
 invoke(e) {
 return U(this, arguments, void 0, function*(r, n={}) {
 var s;
 let i, o;
 try {
 const {headers: a, method: l, body: u, signal: c, timeout: h} = n;
 let f = {}
 , {region: d} = n;
 d || (d = this.region);
 const y = new URL(`${this.url}/${r}`);
 d && d !== "any" && (f["x-region"] = d,
 y.searchParams.set("forceFunctionRegion", d));
 let m;
 u && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream",
 m = u) : typeof u == "string" ? (f["Content-Type"] = "text/plain",
 m = u) : typeof FormData < "u" && u instanceof FormData ? m = u : (f["Content-Type"] = "application/json",
 m = JSON.stringify(u)) : m = u;
 let w = c;
 h && (o = new AbortController,
 i = setTimeout(()=>o.abort(), h),
 c ? (w = o.signal,
 c.addEventListener("abort", ()=>o.abort())) : w = o.signal);
 const g = yield this.fetch(y.toString(), {
 method: l || "POST",
 headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), a),
 body: m,
 signal: w
 }).catch(E=>{
 throw new zk(E)
 }
 )
 , p = g.headers.get("x-relay-error");
 if (p && p === "true")
 throw new Zf(g);
 if (!g.ok)
 throw new ep(g);
 let v = ((s = g.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), _;
 return v === "application/json" ? _ = yield g.json() : v === "application/octet-stream" || v === "application/pdf" ? _ = yield g.blob() : v === "text/event-stream" ? _ = g : v === "multipart/form-data" ? _ = yield g.formData() : _ = yield g.text(),
 {
 data: _,
 error: null,
 response: g
 }
 } catch (a) {
 return {
 data: null,
 error: a,
 response: a instanceof ep || a instanceof Zf ? a.context : void 0
 }
 } finally {
 i && clearTimeout(i)
 }
 })
 }
}
var ze = {};
const Ws = Wy(Fk);
var Ro = {}, jo = {}, Ao = {}, No = {}, Io = {}, $o = {}, tp;
function ty() {
 if (tp)
 return $o;
 tp = 1,
 Object.defineProperty($o, "__esModule", {
 value: !0
 });
 class t extends Error {
 constructor(r) {
 super(r.message),
 this.name = "PostgrestError",
 this.details = r.details,
 this.hint = r.hint,
 this.code = r.code
 }
 }
 return $o.default = t,
 $o
}
var rp;
function ry() {
 if (rp)
 return Io;
 rp = 1,
 Object.defineProperty(Io, "__esModule", {
 value: !0
 });
 const e = Ws.__importDefault(ty());
 class r {
 constructor(s) {
 var i, o;
 this.shouldThrowOnError = !1,
 this.method = s.method,
 this.url = s.url,
 this.headers = new Headers(s.headers),
 this.schema = s.schema,
 this.body = s.body,
 this.shouldThrowOnError = (i = s.shouldThrowOnError) !== null && i !== void 0 ? i : !1,
 this.signal = s.signal,
 this.isMaybeSingle = (o = s.isMaybeSingle) !== null && o !== void 0 ? o : !1,
 s.fetch ? this.fetch = s.fetch : this.fetch = fetch
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 setHeader(s, i) {
 return this.headers = new Headers(this.headers),
 this.headers.set(s, i),
 this
 }
 then(s, i) {
 this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
 this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
 const o = this.fetch;
 let a = o(this.url.toString(), {
 method: this.method,
 headers: this.headers,
 body: JSON.stringify(this.body),
 signal: this.signal
 }).then(async l=>{
 var u, c, h, f;
 let d = null
 , y = null
 , m = null
 , w = l.status
 , g = l.statusText;
 if (l.ok) {
 if (this.method !== "HEAD") {
 const E = await l.text();
 E === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((u = this.headers.get("Accept")) === null || u === void 0) && u.includes("application/vnd.pgrst.plan+text")) ? y = E : y = JSON.parse(E))
 }
 const v = (c = this.headers.get("Prefer")) === null || c === void 0 ? void 0 : c.match(/count=(exact|planned|estimated)/)
 , _ = (h = l.headers.get("content-range")) === null || h === void 0 ? void 0 : h.split("/");
 v && _ && _.length > 1 && (m = parseInt(_[1])),
 this.isMaybeSingle && this.method === "GET" && Array.isArray(y) && (y.length > 1 ? (d = {
 code: "PGRST116",
 details: `Results contain ${y.length} rows, application/vnd.pgrst.object+json requires 1 row`,
 hint: null,
 message: "JSON object requested, multiple (or no) rows returned"
 },
 y = null,
 m = null,
 w = 406,
 g = "Not Acceptable") : y.length === 1 ? y = y[0] : y = null)
 } else {
 const v = await l.text();
 try {
 d = JSON.parse(v),
 Array.isArray(d) && l.status === 404 && (y = [],
 d = null,
 w = 200,
 g = "OK")
 } catch {
 l.status === 404 && v === "" ? (w = 204,
 g = "No Content") : d = {
 message: v
 }
 }
 if (d && this.isMaybeSingle && (!((f = d == null ? void 0 : d.details) === null || f === void 0) && f.includes("0 rows")) && (d = null,
 w = 200,
 g = "OK"),
 d && this.shouldThrowOnError)
 throw new e.default(d)
 }
 return {
 error: d,
 data: y,
 count: m,
 status: w,
 statusText: g
 }
 }
 );
 return this.shouldThrowOnError || (a = a.catch(l=>{
 var u, c, h, f, d, y;
 let m = "";
 const w = l == null ? void 0 : l.cause;
 if (w) {
 const g = (u = w == null ? void 0 : w.message) !== null && u !== void 0 ? u : ""
 , p = (c = w == null ? void 0 : w.code) !== null && c !== void 0 ? c : "";
 m = `${(h = l == null ? void 0 : l.name) !== null && h !== void 0 ? h : "FetchError"}: ${l == null ? void 0 : l.message}`,
 m += `

Caused by: ${(f = w == null ? void 0 : w.name) !== null && f !== void 0 ? f : "Error"}: ${g}`,
 p && (m += ` (${p})`),
 w != null && w.stack && (m += `
${w.stack}`)
 } else
 m = (d = l == null ? void 0 : l.stack) !== null && d !== void 0 ? d : "";
 return {
 error: {
 message: `${(y = l == null ? void 0 : l.name) !== null && y !== void 0 ? y : "FetchError"}: ${l == null ? void 0 : l.message}`,
 details: m,
 hint: "",
 code: ""
 },
 data: null,
 count: null,
 status: 0,
 statusText: ""
 }
 }
 )),
 a.then(s, i)
 }
 returns() {
 return this
 }
 overrideTypes() {
 return this
 }
 }
 return Io.default = r,
 Io
}
var np;
function ny() {
 if (np)
 return No;
 np = 1,
 Object.defineProperty(No, "__esModule", {
 value: !0
 });
 const e = Ws.__importDefault(ry());
 class r extends e.default {
 select(s) {
 let i = !1;
 const o = (s ?? "*").split("").map(a=>/\s/.test(a) && !i ? "" : (a === '"' && (i = !i),
 a)).join("");
 return this.url.searchParams.set("select", o),
 this.headers.append("Prefer", "return=representation"),
 this
 }
 order(s, {ascending: i=!0, nullsFirst: o, foreignTable: a, referencedTable: l=a}={}) {
 const u = l ? `${l}.order` : "order"
 , c = this.url.searchParams.get(u);
 return this.url.searchParams.set(u, `${c ? `${c},` : ""}${s}.${i ? "asc" : "desc"}${o === void 0 ? "" : o ? ".nullsfirst" : ".nullslast"}`),
 this
 }
 limit(s, {foreignTable: i, referencedTable: o=i}={}) {
 const a = typeof o > "u" ? "limit" : `${o}.limit`;
 return this.url.searchParams.set(a, `${s}`),
 this
 }
 range(s, i, {foreignTable: o, referencedTable: a=o}={}) {
 const l = typeof a > "u" ? "offset" : `${a}.offset`
 , u = typeof a > "u" ? "limit" : `${a}.limit`;
 return this.url.searchParams.set(l, `${s}`),
 this.url.searchParams.set(u, `${i - s + 1}`),
 this
 }
 abortSignal(s) {
 return this.signal = s,
 this
 }
 single() {
 return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
 this
 }
 maybeSingle() {
 return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
 this.isMaybeSingle = !0,
 this
 }
 csv() {
 return this.headers.set("Accept", "text/csv"),
 this
 }
 geojson() {
 return this.headers.set("Accept", "application/geo+json"),
 this
 }
 explain({analyze: s=!1, verbose: i=!1, settings: o=!1, buffers: a=!1, wal: l=!1, format: u="text"}={}) {
 var c;
 const h = [s ? "analyze" : null, i ? "verbose" : null, o ? "settings" : null, a ? "buffers" : null, l ? "wal" : null].filter(Boolean).join("|")
 , f = (c = this.headers.get("Accept")) !== null && c !== void 0 ? c : "application/json";
 return this.headers.set("Accept", `application/vnd.pgrst.plan+${u}; for="${f}"; options=${h};`),
 u === "json" ? this : this
 }
 rollback() {
 return this.headers.append("Prefer", "tx=rollback"),
 this
 }
 returns() {
 return this
 }
 maxAffected(s) {
 return this.headers.append("Prefer", "handling=strict"),
 this.headers.append("Prefer", `max-affected=${s}`),
 this
 }
 }
 return No.default = r,
 No
}
var sp;
function qd() {
 if (sp)
 return Ao;
 sp = 1,
 Object.defineProperty(Ao, "__esModule", {
 value: !0
 });
 const e = Ws.__importDefault(ny())
 , r = new RegExp("[,()]");
 class n extends e.default {
 eq(i, o) {
 return this.url.searchParams.append(i, `eq.${o}`),
 this
 }
 neq(i, o) {
 return this.url.searchParams.append(i, `neq.${o}`),
 this
 }
 gt(i, o) {
 return this.url.searchParams.append(i, `gt.${o}`),
 this
 }
 gte(i, o) {
 return this.url.searchParams.append(i, `gte.${o}`),
 this
 }
 lt(i, o) {
 return this.url.searchParams.append(i, `lt.${o}`),
 this
 }
 lte(i, o) {
 return this.url.searchParams.append(i, `lte.${o}`),
 this
 }
 like(i, o) {
 return this.url.searchParams.append(i, `like.${o}`),
 this
 }
 likeAllOf(i, o) {
 return this.url.searchParams.append(i, `like(all).{${o.join(",")}}`),
 this
 }
 likeAnyOf(i, o) {
 return this.url.searchParams.append(i, `like(any).{${o.join(",")}}`),
 this
 }
 ilike(i, o) {
 return this.url.searchParams.append(i, `ilike.${o}`),
 this
 }
 ilikeAllOf(i, o) {
 return this.url.searchParams.append(i, `ilike(all).{${o.join(",")}}`),
 this
 }
 ilikeAnyOf(i, o) {
 return this.url.searchParams.append(i, `ilike(any).{${o.join(",")}}`),
 this
 }
 regexMatch(i, o) {
 return this.url.searchParams.append(i, `match.${o}`),
 this
 }
 regexIMatch(i, o) {
 return this.url.searchParams.append(i, `imatch.${o}`),
 this
 }
 is(i, o) {
 return this.url.searchParams.append(i, `is.${o}`),
 this
 }
 isDistinct(i, o) {
 return this.url.searchParams.append(i, `isdistinct.${o}`),
 this
 }
 in(i, o) {
 const a = Array.from(new Set(o)).map(l=>typeof l == "string" && r.test(l) ? `"${l}"` : `${l}`).join(",");
 return this.url.searchParams.append(i, `in.(${a})`),
 this
 }
 contains(i, o) {
 return typeof o == "string" ? this.url.searchParams.append(i, `cs.${o}`) : Array.isArray(o) ? this.url.searchParams.append(i, `cs.{${o.join(",")}}`) : this.url.searchParams.append(i, `cs.${JSON.stringify(o)}`),
 this
 }
 containedBy(i, o) {
 return typeof o == "string" ? this.url.searchParams.append(i, `cd.${o}`) : Array.isArray(o) ? this.url.searchParams.append(i, `cd.{${o.join(",")}}`) : this.url.searchParams.append(i, `cd.${JSON.stringify(o)}`),
 this
 }
 rangeGt(i, o) {
 return this.url.searchParams.append(i, `sr.${o}`),
 this
 }
 rangeGte(i, o) {
 return this.url.searchParams.append(i, `nxl.${o}`),
 this
 }
 rangeLt(i, o) {
 return this.url.searchParams.append(i, `sl.${o}`),
 this
 }
 rangeLte(i, o) {
 return this.url.searchParams.append(i, `nxr.${o}`),
 this
 }
 rangeAdjacent(i, o) {
 return this.url.searchParams.append(i, `adj.${o}`),
 this
 }
 overlaps(i, o) {
 return typeof o == "string" ? this.url.searchParams.append(i, `ov.${o}`) : this.url.searchParams.append(i, `ov.{${o.join(",")}}`),
 this
 }
 textSearch(i, o, {config: a, type: l}={}) {
 let u = "";
 l === "plain" ? u = "pl" : l === "phrase" ? u = "ph" : l === "websearch" && (u = "w");
 const c = a === void 0 ? "" : `(${a})`;
 return this.url.searchParams.append(i, `${u}fts ${c}.${o}`),
 this
 }
 match(i) {
 return Object.entries(i).forEach(([o,a])=>{
 this.url.searchParams.append(o, `eq.${a}`)
 }
 ),
 this
 }
 not(i, o, a) {
 return this.url.searchParams.append(i, `not.${o}.${a}`),
 this
 }
 or(i, {foreignTable: o, referencedTable: a=o}={}) {
 const l = a ? `${a}.or` : "or";
 return this.url.searchParams.append(l, `(${i})`),
 this
 }
 filter(i, o, a) {
 return this.url.searchParams.append(i, `${o}.${a}`),
 this
 }
 }
 return Ao.default = n,
 Ao
}
var ip;
function sy() {
 if (ip)
 return jo;
 ip = 1,
 Object.defineProperty(jo, "__esModule", {
 value: !0
 });
 const e = Ws.__importDefault(qd());
 class r {
 constructor(s, {headers: i={}, schema: o, fetch: a}) {
 this.url = s,
 this.headers = new Headers(i),
 this.schema = o,
 this.fetch = a
 }
 select(s, i) {
 const {head: o=!1, count: a} = i ?? {}
 , l = o ? "HEAD" : "GET";
 let u = !1;
 const c = (s ?? "*").split("").map(h=>/\s/.test(h) && !u ? "" : (h === '"' && (u = !u),
 h)).join("");
 return this.url.searchParams.set("select", c),
 a && this.headers.append("Prefer", `count=${a}`),
 new e.default({
 method: l,
 url: this.url,
 headers: this.headers,
 schema: this.schema,
 fetch: this.fetch
 })
 }
 insert(s, {count: i, defaultToNull: o=!0}={}) {
 var a;
 const l = "POST";
 if (i && this.headers.append("Prefer", `count=${i}`),
 o || this.headers.append("Prefer", "missing=default"),
 Array.isArray(s)) {
 const u = s.reduce((c,h)=>c.concat(Object.keys(h)), []);
 if (u.length > 0) {
 const c = [...new Set(u)].map(h=>`"${h}"`);
 this.url.searchParams.set("columns", c.join(","))
 }
 }
 return new e.default({
 method: l,
 url: this.url,
 headers: this.headers,
 schema: this.schema,
 body: s,
 fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
 })
 }
 upsert(s, {onConflict: i, ignoreDuplicates: o=!1, count: a, defaultToNull: l=!0}={}) {
 var u;
 const c = "POST";
 if (this.headers.append("Prefer", `resolution=${o ? "ignore" : "merge"}-duplicates`),
 i !== void 0 && this.url.searchParams.set("on_conflict", i),
 a && this.headers.append("Prefer", `count=${a}`),
 l || this.headers.append("Prefer", "missing=default"),
 Array.isArray(s)) {
 const h = s.reduce((f,d)=>f.concat(Object.keys(d)), []);
 if (h.length > 0) {
 const f = [...new Set(h)].map(d=>`"${d}"`);
 this.url.searchParams.set("columns", f.join(","))
 }
 }
 return new e.default({
 method: c,
 url: this.url,
 headers: this.headers,
 schema: this.schema,
 body: s,
 fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch
 })
 }
 update(s, {count: i}={}) {
 var o;
 const a = "PATCH";
 return i && this.headers.append("Prefer", `count=${i}`),
 new e.default({
 method: a,
 url: this.url,
 headers: this.headers,
 schema: this.schema,
 body: s,
 fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
 })
 }
 delete({count: s}={}) {
 var i;
 const o = "DELETE";
 return s && this.headers.append("Prefer", `count=${s}`),
 new e.default({
 method: o,
 url: this.url,
 headers: this.headers,
 schema: this.schema,
 fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
 })
 }
 }
 return jo.default = r,
 jo
}
var op;
function Wk() {
 if (op)
 return Ro;
 op = 1,
 Object.defineProperty(Ro, "__esModule", {
 value: !0
 });
 const t = Ws
 , e = t.__importDefault(sy())
 , r = t.__importDefault(qd());
 class n {
 constructor(i, {headers: o={}, schema: a, fetch: l}={}) {
 this.url = i,
 this.headers = new Headers(o),
 this.schemaName = a,
 this.fetch = l
 }
 from(i) {
 if (!i || typeof i != "string" || i.trim() === "")
 throw new Error("Invalid relation name: relation must be a non-empty string.");
 const o = new URL(`${this.url}/${i}`);
 return new e.default(o,{
 headers: new Headers(this.headers),
 schema: this.schemaName,
 fetch: this.fetch
 })
 }
 schema(i) {
 return new n(this.url,{
 headers: this.headers,
 schema: i,
 fetch: this.fetch
 })
 }
 rpc(i, o={}, {head: a=!1, get: l=!1, count: u}={}) {
 var c;
 let h;
 const f = new URL(`${this.url}/rpc/${i}`);
 let d;
 a || l ? (h = a ? "HEAD" : "GET",
 Object.entries(o).filter(([m,w])=>w !== void 0).map(([m,w])=>[m, Array.isArray(w) ? `{${w.join(",")}}` : `${w}`]).forEach(([m,w])=>{
 f.searchParams.append(m, w)
 }
 )) : (h = "POST",
 d = o);
 const y = new Headers(this.headers);
 return u && y.set("Prefer", `count=${u}`),
 new r.default({
 method: h,
 url: f,
 headers: y,
 schema: this.schemaName,
 body: d,
 fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch
 })
 }
 }
 return Ro.default = n,
 Ro
}
Object.defineProperty(ze, "__esModule", {
 value: !0
});
var iy = ze.PostgrestError = my = ze.PostgrestBuilder = fy = ze.PostgrestTransformBuilder = dy = ze.PostgrestFilterBuilder = uy = ze.PostgrestQueryBuilder = ay = ze.PostgrestClient = void 0;
const Hs = Ws
 , oy = Hs.__importDefault(Wk());
var ay = ze.PostgrestClient = oy.default;
const ly = Hs.__importDefault(sy());
var uy = ze.PostgrestQueryBuilder = ly.default;
const cy = Hs.__importDefault(qd());
var dy = ze.PostgrestFilterBuilder = cy.default;
const hy = Hs.__importDefault(ny());
var fy = ze.PostgrestTransformBuilder = hy.default;
const py = Hs.__importDefault(ry());
var my = ze.PostgrestBuilder = py.default;
const gy = Hs.__importDefault(ty());
iy = ze.PostgrestError = gy.default;
var vy = ze.default = {
 PostgrestClient: oy.default,
 PostgrestQueryBuilder: ly.default,
 PostgrestFilterBuilder: cy.default,
 PostgrestTransformBuilder: hy.default,
 PostgrestBuilder: py.default,
 PostgrestError: gy.default
};
const Hk = Lp({
 __proto__: null,
 get PostgrestBuilder() {
 return my
 },
 get PostgrestClient() {
 return ay
 },
 get PostgrestError() {
 return iy
 },
 get PostgrestFilterBuilder() {
 return dy
 },
 get PostgrestQueryBuilder() {
 return uy
 },
 get PostgrestTransformBuilder() {
 return fy
 },
 default: vy
}, [ze])
 , {PostgrestClient: qk, PostgrestQueryBuilder: kP, PostgrestFilterBuilder: TP, PostgrestTransformBuilder: CP, PostgrestBuilder: PP, PostgrestError: OP} = vy || Hk;
class Kk {
 constructor() {}
 static detectEnvironment() {
 var e;
 if (typeof WebSocket < "u")
 return {
 type: "native",
 constructor: WebSocket
 };
 if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
 return {
 type: "native",
 constructor: globalThis.WebSocket
 };
 if (typeof global < "u" && typeof global.WebSocket < "u")
 return {
 type: "native",
 constructor: global.WebSocket
 };
 if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
 return {
 type: "cloudflare",
 error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
 workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
 };
 if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
 return {
 type: "unsupported",
 error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
 workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
 };
 if (typeof process < "u") {
 const r = process.versions;
 if (r && r.node) {
 const n = r.node
 , s = parseInt(n.replace(/^v/, "").split(".")[0]);
 return s >= 22 ? typeof globalThis.WebSocket < "u" ? {
 type: "native",
 constructor: globalThis.WebSocket
 } : {
 type: "unsupported",
 error: `Node.js ${s} detected but native WebSocket not found.`,
 workaround: "Provide a WebSocket implementation via the transport option."
 } : {
 type: "unsupported",
 error: `Node.js ${s} detected without native WebSocket support.`,
 workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
 }
 }
 }
 return {
 type: "unsupported",
 error: "Unknown JavaScript runtime without WebSocket support.",
 workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
 }
 }
 static getWebSocketConstructor() {
 const e = this.detectEnvironment();
 if (e.constructor)
 return e.constructor;
 let r = e.error || "WebSocket not supported in this environment.";
 throw e.workaround && (r += `

Suggested solution: ${e.workaround}`),
 new Error(r)
 }
 static createWebSocket(e, r) {
 const n = this.getWebSocketConstructor();
 return new n(e,r)
 }
 static isWebSocketSupported() {
 try {
 const e = this.detectEnvironment();
 return e.type === "native" || e.type === "ws"
 } catch {
 return !1
 }
 }
}
const Gk = "2.86.0"
 , Qk = `realtime-js/${Gk}`
 , yy = "1.0.0"
 , Jk = "2.0.0"
 , ap = yy
 , _c = 1e4
 , Yk = 1e3
 , Xk = 100;
var hn;
(function(t) {
 t[t.connecting = 0] = "connecting",
 t[t.open = 1] = "open",
 t[t.closing = 2] = "closing",
 t[t.closed = 3] = "closed"
}
)(hn || (hn = {}));
var xe;
(function(t) {
 t.closed = "closed",
 t.errored = "errored",
 t.joined = "joined",
 t.joining = "joining",
 t.leaving = "leaving"
}
)(xe || (xe = {}));
var jt;
(function(t) {
 t.close = "phx_close",
 t.error = "phx_error",
 t.join = "phx_join",
 t.reply = "phx_reply",
 t.leave = "phx_leave",
 t.access_token = "access_token"
}
)(jt || (jt = {}));
var xc;
(function(t) {
 t.websocket = "websocket"
}
)(xc || (xc = {}));
var fn;
(function(t) {
 t.Connecting = "connecting",
 t.Open = "open",
 t.Closing = "closing",
 t.Closed = "closed"
}
)(fn || (fn = {}));
class Zk {
 constructor(e) {
 this.HEADER_LENGTH = 1,
 this.USER_BROADCAST_PUSH_META_LENGTH = 6,
 this.KINDS = {
 userBroadcastPush: 3,
 userBroadcast: 4
 },
 this.BINARY_ENCODING = 0,
 this.JSON_ENCODING = 1,
 this.BROADCAST_EVENT = "broadcast",
 this.allowedMetadataKeys = [],
 this.allowedMetadataKeys = e ?? []
 }
 encode(e, r) {
 if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
 return r(this._binaryEncodeUserBroadcastPush(e));
 let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
 return r(JSON.stringify(n))
 }
 _binaryEncodeUserBroadcastPush(e) {
 var r;
 return this._isArrayBuffer((r = e.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e)
 }
 _encodeBinaryUserBroadcastPush(e) {
 var r, n;
 const s = (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
 return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s)
 }
 _encodeJsonUserBroadcastPush(e) {
 var r, n;
 const s = (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}
 , o = new TextEncoder().encode(JSON.stringify(s)).buffer;
 return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o)
 }
 _encodeUserBroadcastPush(e, r, n) {
 var s, i;
 const o = e.topic
 , a = (s = e.ref) !== null && s !== void 0 ? s : ""
 , l = (i = e.join_ref) !== null && i !== void 0 ? i : ""
 , u = e.payload.event
 , c = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}
 , h = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
 if (l.length > 255)
 throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
 if (a.length > 255)
 throw new Error(`ref length ${a.length} exceeds maximum of 255`);
 if (o.length > 255)
 throw new Error(`topic length ${o.length} exceeds maximum of 255`);
 if (u.length > 255)
 throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
 if (h.length > 255)
 throw new Error(`metadata length ${h.length} exceeds maximum of 255`);
 const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + u.length + h.length
 , d = new ArrayBuffer(this.HEADER_LENGTH + f);
 let y = new DataView(d)
 , m = 0;
 y.setUint8(m++, this.KINDS.userBroadcastPush),
 y.setUint8(m++, l.length),
 y.setUint8(m++, a.length),
 y.setUint8(m++, o.length),
 y.setUint8(m++, u.length),
 y.setUint8(m++, h.length),
 y.setUint8(m++, r),
 Array.from(l, g=>y.setUint8(m++, g.charCodeAt(0))),
 Array.from(a, g=>y.setUint8(m++, g.charCodeAt(0))),
 Array.from(o, g=>y.setUint8(m++, g.charCodeAt(0))),
 Array.from(u, g=>y.setUint8(m++, g.charCodeAt(0))),
 Array.from(h, g=>y.setUint8(m++, g.charCodeAt(0)));
 var w = new Uint8Array(d.byteLength + n.byteLength);
 return w.set(new Uint8Array(d), 0),
 w.set(new Uint8Array(n), d.byteLength),
 w.buffer
 }
 decode(e, r) {
 if (this._isArrayBuffer(e)) {
 let n = this._binaryDecode(e);
 return r(n)
 }
 if (typeof e == "string") {
 const n = JSON.parse(e)
 , [s,i,o,a,l] = n;
 return r({
 join_ref: s,
 ref: i,
 topic: o,
 event: a,
 payload: l
 })
 }
 return r({})
 }
 _binaryDecode(e) {
 const r = new DataView(e)
 , n = r.getUint8(0)
 , s = new TextDecoder;
 switch (n) {
 case this.KINDS.userBroadcast:
 return this._decodeUserBroadcast(e, r, s)
 }
 }
 _decodeUserBroadcast(e, r, n) {
 const s = r.getUint8(1)
 , i = r.getUint8(2)
 , o = r.getUint8(3)
 , a = r.getUint8(4);
 let l = this.HEADER_LENGTH + 4;
 const u = n.decode(e.slice(l, l + s));
 l = l + s;
 const c = n.decode(e.slice(l, l + i));
 l = l + i;
 const h = n.decode(e.slice(l, l + o));
 l = l + o;
 const f = e.slice(l, e.byteLength)
 , d = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f
 , y = {
 type: this.BROADCAST_EVENT,
 event: c,
 payload: d
 };
 return o > 0 && (y.meta = JSON.parse(h)),
 {
 join_ref: null,
 ref: null,
 topic: u,
 event: this.BROADCAST_EVENT,
 payload: y
 }
 }
 _isArrayBuffer(e) {
 var r;
 return e instanceof ArrayBuffer || ((r = e == null ? void 0 : e.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer"
 }
 _pick(e, r) {
 return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([n])=>r.includes(n)))
 }
}
class wy {
 constructor(e, r) {
 this.callback = e,
 this.timerCalc = r,
 this.timer = void 0,
 this.tries = 0,
 this.callback = e,
 this.timerCalc = r
 }
 reset() {
 this.tries = 0,
 clearTimeout(this.timer),
 this.timer = void 0
 }
 scheduleTimeout() {
 clearTimeout(this.timer),
 this.timer = setTimeout(()=>{
 this.tries = this.tries + 1,
 this.callback()
 }
 , this.timerCalc(this.tries + 1))
 }
}
var ie;
(function(t) {
 t.abstime = "abstime",
 t.bool = "bool",
 t.date = "date",
 t.daterange = "daterange",
 t.float4 = "float4",
 t.float8 = "float8",
 t.int2 = "int2",
 t.int4 = "int4",
 t.int4range = "int4range",
 t.int8 = "int8",
 t.int8range = "int8range",
 t.json = "json",
 t.jsonb = "jsonb",
 t.money = "money",
 t.numeric = "numeric",
 t.oid = "oid",
 t.reltime = "reltime",
 t.text = "text",
 t.time = "time",
 t.timestamp = "timestamp",
 t.timestamptz = "timestamptz",
 t.timetz = "timetz",
 t.tsrange = "tsrange",
 t.tstzrange = "tstzrange"
}
)(ie || (ie = {}));
const lp = (t,e,r={})=>{
 var n;
 const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
 return e ? Object.keys(e).reduce((i,o)=>(i[o] = eT(o, t, e, s),
 i), {}) : {}
}
 , eT = (t,e,r,n)=>{
 const s = e.find(a=>a.name === t)
 , i = s == null ? void 0 : s.type
 , o = r[t];
 return i && !n.includes(i) ? by(i, o) : Ec(o)
}
 , by = (t,e)=>{
 if (t.charAt(0) === "_") {
 const r = t.slice(1, t.length);
 return sT(e, r)
 }
 switch (t) {
 case ie.bool:
 return tT(e);
 case ie.float4:
 case ie.float8:
 case ie.int2:
 case ie.int4:
 case ie.int8:
 case ie.numeric:
 case ie.oid:
 return rT(e);
 case ie.json:
 case ie.jsonb:
 return nT(e);
 case ie.timestamp:
 return iT(e);
 case ie.abstime:
 case ie.date:
 case ie.daterange:
 case ie.int4range:
 case ie.int8range:
 case ie.money:
 case ie.reltime:
 case ie.text:
 case ie.time:
 case ie.timestamptz:
 case ie.timetz:
 case ie.tsrange:
 case ie.tstzrange:
 return Ec(e);
 default:
 return Ec(e)
 }
}
 , Ec = t=>t
 , tT = t=>{
 switch (t) {
 case "t":
 return !0;
 case "f":
 return !1;
 default:
 return t
 }
}
 , rT = t=>{
 if (typeof t == "string") {
 const e = parseFloat(t);
 if (!Number.isNaN(e))
 return e
 }
 return t
}
 , nT = t=>{
 if (typeof t == "string")
 try {
 return JSON.parse(t)
 } catch (e) {
 return console.log(`JSON parse error: ${e}`),
 t
 }
 return t
}
 , sT = (t,e)=>{
 if (typeof t != "string")
 return t;
 const r = t.length - 1
 , n = t[r];
 if (t[0] === "{" && n === "}") {
 let i;
 const o = t.slice(1, r);
 try {
 i = JSON.parse("[" + o + "]")
 } catch {
 i = o ? o.split(",") : []
 }
 return i.map(a=>by(e, a))
 }
 return t
}
 , iT = t=>typeof t == "string" ? t.replace(" ", "T") : t
 , _y = t=>{
 const e = new URL(t);
 return e.protocol = e.protocol.replace(/^ws/i, "http"),
 e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""),
 e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast",
 e.href
}
;
class tu {
 constructor(e, r, n={}, s=_c) {
 this.channel = e,
 this.event = r,
 this.payload = n,
 this.timeout = s,
 this.sent = !1,
 this.timeoutTimer = void 0,
 this.ref = "",
 this.receivedResp = null,
 this.recHooks = [],
 this.refEvent = null
 }
 resend(e) {
 this.timeout = e,
 this._cancelRefEvent(),
 this.ref = "",
 this.refEvent = null,
 this.receivedResp = null,
 this.sent = !1,
 this.send()
 }
 send() {
 this._hasReceived("timeout") || (this.startTimeout(),
 this.sent = !0,
 this.channel.socket.push({
 topic: this.channel.topic,
 event: this.event,
 payload: this.payload,
 ref: this.ref,
 join_ref: this.channel._joinRef()
 }))
 }
 updatePayload(e) {
 this.payload = Object.assign(Object.assign({}, this.payload), e)
 }
 receive(e, r) {
 var n;
 return this._hasReceived(e) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response),
 this.recHooks.push({
 status: e,
 callback: r
 }),
 this
 }
 startTimeout() {
 if (this.timeoutTimer)
 return;
 this.ref = this.channel.socket._makeRef(),
 this.refEvent = this.channel._replyEventName(this.ref);
 const e = r=>{
 this._cancelRefEvent(),
 this._cancelTimeout(),
 this.receivedResp = r,
 this._matchReceive(r)
 }
 ;
 this.channel._on(this.refEvent, {}, e),
 this.timeoutTimer = setTimeout(()=>{
 this.trigger("timeout", {})
 }
 , this.timeout)
 }
 trigger(e, r) {
 this.refEvent && this.channel._trigger(this.refEvent, {
 status: e,
 response: r
 })
 }
 destroy() {
 this._cancelRefEvent(),
 this._cancelTimeout()
 }
 _cancelRefEvent() {
 this.refEvent && this.channel._off(this.refEvent, {})
 }
 _cancelTimeout() {
 clearTimeout(this.timeoutTimer),
 this.timeoutTimer = void 0
 }
 _matchReceive({status: e, response: r}) {
 this.recHooks.filter(n=>n.status === e).forEach(n=>n.callback(r))
 }
 _hasReceived(e) {
 return this.receivedResp && this.receivedResp.status === e
 }
}
var up;
(function(t) {
 t.SYNC = "sync",
 t.JOIN = "join",
 t.LEAVE = "leave"
}
)(up || (up = {}));
class wi {
 constructor(e, r) {
 this.channel = e,
 this.state = {},
 this.pendingDiffs = [],
 this.joinRef = null,
 this.enabled = !1,
 this.caller = {
 onJoin: ()=>{}
 ,
 onLeave: ()=>{}
 ,
 onSync: ()=>{}
 };
 const n = (r == null ? void 0 : r.events) || {
 state: "presence_state",
 diff: "presence_diff"
 };
 this.channel._on(n.state, {}, s=>{
 const {onJoin: i, onLeave: o, onSync: a} = this.caller;
 this.joinRef = this.channel._joinRef(),
 this.state = wi.syncState(this.state, s, i, o),
 this.pendingDiffs.forEach(l=>{
 this.state = wi.syncDiff(this.state, l, i, o)
 }
 ),
 this.pendingDiffs = [],
 a()
 }
 ),
 this.channel._on(n.diff, {}, s=>{
 const {onJoin: i, onLeave: o, onSync: a} = this.caller;
 this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = wi.syncDiff(this.state, s, i, o),
 a())
 }
 ),
 this.onJoin((s,i,o)=>{
 this.channel._trigger("presence", {
 event: "join",
 key: s,
 currentPresences: i,
 newPresences: o
 })
 }
 ),
 this.onLeave((s,i,o)=>{
 this.channel._trigger("presence", {
 event: "leave",
 key: s,
 currentPresences: i,
 leftPresences: o
 })
 }
 ),
 this.onSync(()=>{
 this.channel._trigger("presence", {
 event: "sync"
 })
 }
 )
 }
 static syncState(e, r, n, s) {
 const i = this.cloneDeep(e)
 , o = this.transformState(r)
 , a = {}
 , l = {};
 return this.map(i, (u,c)=>{
 o[u] || (l[u] = c)
 }
 ),
 this.map(o, (u,c)=>{
 const h = i[u];
 if (h) {
 const f = c.map(w=>w.presence_ref)
 , d = h.map(w=>w.presence_ref)
 , y = c.filter(w=>d.indexOf(w.presence_ref) < 0)
 , m = h.filter(w=>f.indexOf(w.presence_ref) < 0);
 y.length > 0 && (a[u] = y),
 m.length > 0 && (l[u] = m)
 } else
 a[u] = c
 }
 ),
 this.syncDiff(i, {
 joins: a,
 leaves: l
 }, n, s)
 }
 static syncDiff(e, r, n, s) {
 const {joins: i, leaves: o} = {
 joins: this.transformState(r.joins),
 leaves: this.transformState(r.leaves)
 };
 return n || (n = ()=>{}
 ),
 s || (s = ()=>{}
 ),
 this.map(i, (a,l)=>{
 var u;
 const c = (u = e[a]) !== null && u !== void 0 ? u : [];
 if (e[a] = this.cloneDeep(l),
 c.length > 0) {
 const h = e[a].map(d=>d.presence_ref)
 , f = c.filter(d=>h.indexOf(d.presence_ref) < 0);
 e[a].unshift(...f)
 }
 n(a, c, l)
 }
 ),
 this.map(o, (a,l)=>{
 let u = e[a];
 if (!u)
 return;
 const c = l.map(h=>h.presence_ref);
 u = u.filter(h=>c.indexOf(h.presence_ref) < 0),
 e[a] = u,
 s(a, u, l),
 u.length === 0 && delete e[a]
 }
 ),
 e
 }
 static map(e, r) {
 return Object.getOwnPropertyNames(e).map(n=>r(n, e[n]))
 }
 static transformState(e) {
 return e = this.cloneDeep(e),
 Object.getOwnPropertyNames(e).reduce((r,n)=>{
 const s = e[n];
 return "metas"in s ? r[n] = s.metas.map(i=>(i.presence_ref = i.phx_ref,
 delete i.phx_ref,
 delete i.phx_ref_prev,
 i)) : r[n] = s,
 r
 }
 , {})
 }
 static cloneDeep(e) {
 return JSON.parse(JSON.stringify(e))
 }
 onJoin(e) {
 this.caller.onJoin = e
 }
 onLeave(e) {
 this.caller.onLeave = e
 }
 onSync(e) {
 this.caller.onSync = e
 }
 inPendingSyncState() {
 return !this.joinRef || this.joinRef !== this.channel._joinRef()
 }
}
var cp;
(function(t) {
 t.ALL = "*",
 t.INSERT = "INSERT",
 t.UPDATE = "UPDATE",
 t.DELETE = "DELETE"
}
)(cp || (cp = {}));
var bi;
(function(t) {
 t.BROADCAST = "broadcast",
 t.PRESENCE = "presence",
 t.POSTGRES_CHANGES = "postgres_changes",
 t.SYSTEM = "system"
}
)(bi || (bi = {}));
var tr;
(function(t) {
 t.SUBSCRIBED = "SUBSCRIBED",
 t.TIMED_OUT = "TIMED_OUT",
 t.CLOSED = "CLOSED",
 t.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(tr || (tr = {}));
class Kd {
 constructor(e, r={
 config: {}
 }, n) {
 var s, i;
 if (this.topic = e,
 this.params = r,
 this.socket = n,
 this.bindings = {},
 this.state = xe.closed,
 this.joinedOnce = !1,
 this.pushBuffer = [],
 this.subTopic = e.replace(/^realtime:/i, ""),
 this.params.config = Object.assign({
 broadcast: {
 ack: !1,
 self: !1
 },
 presence: {
 key: "",
 enabled: !1
 },
 private: !1
 }, r.config),
 this.timeout = this.socket.timeout,
 this.joinPush = new tu(this,jt.join,this.params,this.timeout),
 this.rejoinTimer = new wy(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
 this.joinPush.receive("ok", ()=>{
 this.state = xe.joined,
 this.rejoinTimer.reset(),
 this.pushBuffer.forEach(o=>o.send()),
 this.pushBuffer = []
 }
 ),
 this._onClose(()=>{
 this.rejoinTimer.reset(),
 this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
 this.state = xe.closed,
 this.socket._remove(this)
 }
 ),
 this._onError(o=>{
 this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o),
 this.state = xe.errored,
 this.rejoinTimer.scheduleTimeout())
 }
 ),
 this.joinPush.receive("timeout", ()=>{
 this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
 this.state = xe.errored,
 this.rejoinTimer.scheduleTimeout())
 }
 ),
 this.joinPush.receive("error", o=>{
 this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o),
 this.state = xe.errored,
 this.rejoinTimer.scheduleTimeout())
 }
 ),
 this._on(jt.reply, {}, (o,a)=>{
 this._trigger(this._replyEventName(a), o)
 }
 ),
 this.presence = new wi(this),
 this.broadcastEndpointURL = _y(this.socket.endPoint),
 this.private = this.params.config.private || !1,
 !this.private && (!((i = (s = this.params.config) === null || s === void 0 ? void 0 : s.broadcast) === null || i === void 0) && i.replay))
 throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`
 }
 subscribe(e, r=this.timeout) {
 var n, s, i;
 if (this.socket.isConnected() || this.socket.connect(),
 this.state == xe.closed) {
 const {config: {broadcast: o, presence: a, private: l}} = this.params
 , u = (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(d=>d.filter)) !== null && s !== void 0 ? s : []
 , c = !!this.bindings[bi.PRESENCE] && this.bindings[bi.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0
 , h = {}
 , f = {
 broadcast: o,
 presence: Object.assign(Object.assign({}, a), {
 enabled: c
 }),
 postgres_changes: u,
 private: l
 };
 this.socket.accessTokenValue && (h.access_token = this.socket.accessTokenValue),
 this._onError(d=>e == null ? void 0 : e(tr.CHANNEL_ERROR, d)),
 this._onClose(()=>e == null ? void 0 : e(tr.CLOSED)),
 this.updateJoinPayload(Object.assign({
 config: f
 }, h)),
 this.joinedOnce = !0,
 this._rejoin(r),
 this.joinPush.receive("ok", async({postgres_changes: d})=>{
 var y;
 if (this.socket.setAuth(),
 d === void 0) {
 e == null || e(tr.SUBSCRIBED);
 return
 } else {
 const m = this.bindings.postgres_changes
 , w = (y = m == null ? void 0 : m.length) !== null && y !== void 0 ? y : 0
 , g = [];
 for (let p = 0; p < w; p++) {
 const v = m[p]
 , {filter: {event: _, schema: E, table: S, filter: k}} = v
 , P = d && d[p];
 if (P && P.event === _ && P.schema === E && P.table === S && P.filter === k)
 g.push(Object.assign(Object.assign({}, v), {
 id: P.id
 }));
 else {
 this.unsubscribe(),
 this.state = xe.errored,
 e == null || e(tr.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
 return
 }
 }
 this.bindings.postgres_changes = g,
 e && e(tr.SUBSCRIBED);
 return
 }
 }
 ).receive("error", d=>{
 this.state = xe.errored,
 e == null || e(tr.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")))
 }
 ).receive("timeout", ()=>{
 e == null || e(tr.TIMED_OUT)
 }
 )
 }
 return this
 }
 presenceState() {
 return this.presence.state
 }
 async track(e, r={}) {
 return await this.send({
 type: "presence",
 event: "track",
 payload: e
 }, r.timeout || this.timeout)
 }
 async untrack(e={}) {
 return await this.send({
 type: "presence",
 event: "untrack"
 }, e)
 }
 on(e, r, n) {
 return this.state === xe.joined && e === bi.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
 this.unsubscribe().then(()=>this.subscribe())),
 this._on(e, r, n)
 }
 async httpSend(e, r, n={}) {
 var s;
 const i = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
 if (r == null)
 return Promise.reject("Payload is required for httpSend()");
 const o = {
 method: "POST",
 headers: {
 Authorization: i,
 apikey: this.socket.apiKey ? this.socket.apiKey : "",
 "Content-Type": "application/json"
 },
 body: JSON.stringify({
 messages: [{
 topic: this.subTopic,
 event: e,
 payload: r,
 private: this.private
 }]
 })
 }
 , a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (s = n.timeout) !== null && s !== void 0 ? s : this.timeout);
 if (a.status === 202)
 return {
 success: !0
 };
 let l = a.statusText;
 try {
 const u = await a.json();
 l = u.error || u.message || l
 } catch {}
 return Promise.reject(new Error(l))
 }
 async send(e, r={}) {
 var n, s;
 if (!this._canPush() && e.type === "broadcast") {
 console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
 const {event: i, payload: o} = e
 , l = {
 method: "POST",
 headers: {
 Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
 apikey: this.socket.apiKey ? this.socket.apiKey : "",
 "Content-Type": "application/json"
 },
 body: JSON.stringify({
 messages: [{
 topic: this.subTopic,
 event: i,
 payload: o,
 private: this.private
 }]
 })
 };
 try {
 const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
 return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
 u.ok ? "ok" : "error"
 } catch (u) {
 return u.name === "AbortError" ? "timed out" : "error"
 }
 } else
 return new Promise(i=>{
 var o, a, l;
 const u = this._push(e.type, e, r.timeout || this.timeout);
 e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"),
 u.receive("ok", ()=>i("ok")),
 u.receive("error", ()=>i("error")),
 u.receive("timeout", ()=>i("timed out"))
 }
 )
 }
 updateJoinPayload(e) {
 this.joinPush.updatePayload(e)
 }
 unsubscribe(e=this.timeout) {
 this.state = xe.leaving;
 const r = ()=>{
 this.socket.log("channel", `leave ${this.topic}`),
 this._trigger(jt.close, "leave", this._joinRef())
 }
 ;
 this.joinPush.destroy();
 let n = null;
 return new Promise(s=>{
 n = new tu(this,jt.leave,{},e),
 n.receive("ok", ()=>{
 r(),
 s("ok")
 }
 ).receive("timeout", ()=>{
 r(),
 s("timed out")
 }
 ).receive("error", ()=>{
 s("error")
 }
 ),
 n.send(),
 this._canPush() || n.trigger("ok", {})
 }
 ).finally(()=>{
 n == null || n.destroy()
 }
 )
 }
 teardown() {
 this.pushBuffer.forEach(e=>e.destroy()),
 this.pushBuffer = [],
 this.rejoinTimer.reset(),
 this.joinPush.destroy(),
 this.state = xe.closed,
 this.bindings = {}
 }
 async _fetchWithTimeout(e, r, n) {
 const s = new AbortController
 , i = setTimeout(()=>s.abort(), n)
 , o = await this.socket.fetch(e, Object.assign(Object.assign({}, r), {
 signal: s.signal
 }));
 return clearTimeout(i),
 o
 }
 _push(e, r, n=this.timeout) {
 if (!this.joinedOnce)
 throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
 let s = new tu(this,e,r,n);
 return this._canPush() ? s.send() : this._addToPushBuffer(s),
 s
 }
 _addToPushBuffer(e) {
 if (e.startTimeout(),
 this.pushBuffer.push(e),
 this.pushBuffer.length > Xk) {
 const r = this.pushBuffer.shift();
 r && (r.destroy(),
 this.socket.log("channel", `discarded push due to buffer overflow: ${r.event}`, r.payload))
 }
 }
 _onMessage(e, r, n) {
 return r
 }
 _isMember(e) {
 return this.topic === e
 }
 _joinRef() {
 return this.joinPush.ref
 }
 _trigger(e, r, n) {
 var s, i;
 const o = e.toLocaleLowerCase()
 , {close: a, error: l, leave: u, join: c} = jt;
 if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef())
 return;
 let f = this._onMessage(o, r, n);
 if (r && !f)
 throw "channel onMessage callbacks must return the payload, modified or unmodified";
 ["insert", "update", "delete"].includes(o) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(d=>{
 var y, m, w;
 return ((y = d.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((w = (m = d.filter) === null || m === void 0 ? void 0 : m.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase()) === o
 }
 ).map(d=>d.callback(f, n)) : (i = this.bindings[o]) === null || i === void 0 || i.filter(d=>{
 var y, m, w, g, p, v;
 if (["broadcast", "presence", "postgres_changes"].includes(o))
 if ("id"in d) {
 const _ = d.id
 , E = (y = d.filter) === null || y === void 0 ? void 0 : y.event;
 return _ && ((m = r.ids) === null || m === void 0 ? void 0 : m.includes(_)) && (E === "*" || (E == null ? void 0 : E.toLocaleLowerCase()) === ((w = r.data) === null || w === void 0 ? void 0 : w.type.toLocaleLowerCase()))
 } else {
 const _ = (p = (g = d == null ? void 0 : d.filter) === null || g === void 0 ? void 0 : g.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase();
 return _ === "*" || _ === ((v = r == null ? void 0 : r.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase())
 }
 else
 return d.type.toLocaleLowerCase() === o
 }
 ).map(d=>{
 if (typeof f == "object" && "ids"in f) {
 const y = f.data
 , {schema: m, table: w, commit_timestamp: g, type: p, errors: v} = y;
 f = Object.assign(Object.assign({}, {
 schema: m,
 table: w,
 commit_timestamp: g,
 eventType: p,
 new: {},
 old: {},
 errors: v
 }), this._getPayloadRecords(y))
 }
 d.callback(f, n)
 }
 )
 }
 _isClosed() {
 return this.state === xe.closed
 }
 _isJoined() {
 return this.state === xe.joined
 }
 _isJoining() {
 return this.state === xe.joining
 }
 _isLeaving() {
 return this.state === xe.leaving
 }
 _replyEventName(e) {
 return `chan_reply_ ${e}`
 }
 _on(e, r, n) {
 const s = e.toLocaleLowerCase()
 , i = {
 type: s,
 filter: r,
 callback: n
 };
 return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i],
 this
 }
 _off(e, r) {
 const n = e.toLocaleLowerCase();
 return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter(s=>{
 var i;
 return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === n && Kd.isEqual(s.filter, r))
 }
 )),
 this
 }
 static isEqual(e, r) {
 if (Object.keys(e).length !== Object.keys(r).length)
 return !1;
 for (const n in e)
 if (e[n] !== r[n])
 return !1;
 return !0
 }
 _rejoinUntilConnected() {
 this.rejoinTimer.scheduleTimeout(),
 this.socket.isConnected() && this._rejoin()
 }
 _onClose(e) {
 this._on(jt.close, {}, e)
 }
 _onError(e) {
 this._on(jt.error, {}, r=>e(r))
 }
 _canPush() {
 return this.socket.isConnected() && this._isJoined()
 }
 _rejoin(e=this.timeout) {
 this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
 this.state = xe.joining,
 this.joinPush.resend(e))
 }
 _getPayloadRecords(e) {
 const r = {
 new: {},
 old: {}
 };
 return (e.type === "INSERT" || e.type === "UPDATE") && (r.new = lp(e.columns, e.record)),
 (e.type === "UPDATE" || e.type === "DELETE") && (r.old = lp(e.columns, e.old_record)),
 r
 }
}
const ru = ()=>{}
 , Lo = {
 HEARTBEAT_INTERVAL: 25e3,
 RECONNECT_DELAY: 10,
 HEARTBEAT_TIMEOUT_FALLBACK: 100
}
 , oT = [1e3, 2e3, 5e3, 1e4]
 , aT = 1e4
 , lT = `
 addEventListener("message", (e) => {
 if (e.data.event === "start") {
 setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
 }
 });`;
class uT {
 constructor(e, r) {
 var n;
 if (this.accessTokenValue = null,
 this.apiKey = null,
 this.channels = new Array,
 this.endPoint = "",
 this.httpEndpoint = "",
 this.headers = {},
 this.params = {},
 this.timeout = _c,
 this.transport = null,
 this.heartbeatIntervalMs = Lo.HEARTBEAT_INTERVAL,
 this.heartbeatTimer = void 0,
 this.pendingHeartbeatRef = null,
 this.heartbeatCallback = ru,
 this.ref = 0,
 this.reconnectTimer = null,
 this.vsn = ap,
 this.logger = ru,
 this.conn = null,
 this.sendBuffer = [],
 this.serializer = new Zk,
 this.stateChangeCallbacks = {
 open: [],
 close: [],
 error: [],
 message: []
 },
 this.accessToken = null,
 this._connectionState = "disconnected",
 this._wasManualDisconnect = !1,
 this._authPromise = null,
 this._resolveFetch = s=>s ? (...i)=>s(...i) : (...i)=>fetch(...i),
 !(!((n = r == null ? void 0 : r.params) === null || n === void 0) && n.apikey))
 throw new Error("API key is required to connect to Realtime");
 this.apiKey = r.params.apikey,
 this.endPoint = `${e}/${xc.websocket}`,
 this.httpEndpoint = _y(e),
 this._initializeOptions(r),
 this._setupReconnectionTimer(),
 this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)
 }
 connect() {
 if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
 if (this._setConnectionState("connecting"),
 this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
 this.transport)
 this.conn = new this.transport(this.endpointURL());
 else
 try {
 this.conn = Kk.createWebSocket(this.endpointURL())
 } catch (e) {
 this._setConnectionState("disconnected");
 const r = e.message;
 throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

 npm install ws

 import ws from "ws"
 const client = new RealtimeClient(url, {
 ...options,
 transport: ws
 })`) : new Error(`WebSocket not available: ${r}`)
 }
 this._setupConnectionHandlers()
 }
 }
 endpointURL() {
 return this._appendParams(this.endPoint, Object.assign({}, this.params, {
 vsn: this.vsn
 }))
 }
 disconnect(e, r) {
 if (!this.isDisconnecting())
 if (this._setConnectionState("disconnecting", !0),
 this.conn) {
 const n = setTimeout(()=>{
 this._setConnectionState("disconnected")
 }
 , 100);
 this.conn.onclose = ()=>{
 clearTimeout(n),
 this._setConnectionState("disconnected")
 }
 ,
 typeof this.conn.close == "function" && (e ? this.conn.close(e, r ?? "") : this.conn.close()),
 this._teardownConnection()
 } else
 this._setConnectionState("disconnected")
 }
 getChannels() {
 return this.channels
 }
 async removeChannel(e) {
 const r = await e.unsubscribe();
 return this.channels.length === 0 && this.disconnect(),
 r
 }
 async removeAllChannels() {
 const e = await Promise.all(this.channels.map(r=>r.unsubscribe()));
 return this.channels = [],
 this.disconnect(),
 e
 }
 log(e, r, n) {
 this.logger(e, r, n)
 }
 connectionState() {
 switch (this.conn && this.conn.readyState) {
 case hn.connecting:
 return fn.Connecting;
 case hn.open:
 return fn.Open;
 case hn.closing:
 return fn.Closing;
 default:
 return fn.Closed
 }
 }
 isConnected() {
 return this.connectionState() === fn.Open
 }
 isConnecting() {
 return this._connectionState === "connecting"
 }
 isDisconnecting() {
 return this._connectionState === "disconnecting"
 }
 channel(e, r={
 config: {}
 }) {
 const n = `realtime:${e}`
 , s = this.getChannels().find(i=>i.topic === n);
 if (s)
 return s;
 {
 const i = new Kd(`realtime:${e}`,r,this);
 return this.channels.push(i),
 i
 }
 }
 push(e) {
 const {topic: r, event: n, payload: s, ref: i} = e
 , o = ()=>{
 this.encode(e, a=>{
 var l;
 (l = this.conn) === null || l === void 0 || l.send(a)
 }
 )
 }
 ;
 this.log("push", `${r} ${n} (${i})`, s),
 this.isConnected() ? o() : this.sendBuffer.push(o)
 }
 async setAuth(e=null) {
 this._authPromise = this._performAuth(e);
 try {
 await this._authPromise
 } finally {
 this._authPromise = null
 }
 }
 async sendHeartbeat() {
 var e;
 if (!this.isConnected()) {
 try {
 this.heartbeatCallback("disconnected")
 } catch (r) {
 this.log("error", "error in heartbeat callback", r)
 }
 return
 }
 if (this.pendingHeartbeatRef) {
 this.pendingHeartbeatRef = null,
 this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
 try {
 this.heartbeatCallback("timeout")
 } catch (r) {
 this.log("error", "error in heartbeat callback", r)
 }
 this._wasManualDisconnect = !1,
 (e = this.conn) === null || e === void 0 || e.close(Yk, "heartbeat timeout"),
 setTimeout(()=>{
 var r;
 this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout()
 }
 , Lo.HEARTBEAT_TIMEOUT_FALLBACK);
 return
 }
 this.pendingHeartbeatRef = this._makeRef(),
 this.push({
 topic: "phoenix",
 event: "heartbeat",
 payload: {},
 ref: this.pendingHeartbeatRef
 });
 try {
 this.heartbeatCallback("sent")
 } catch (r) {
 this.log("error", "error in heartbeat callback", r)
 }
 this._setAuthSafely("heartbeat")
 }
 onHeartbeat(e) {
 this.heartbeatCallback = e
 }
 flushSendBuffer() {
 this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e=>e()),
 this.sendBuffer = [])
 }
 _makeRef() {
 let e = this.ref + 1;
 return e === this.ref ? this.ref = 0 : this.ref = e,
 this.ref.toString()
 }
 _leaveOpenTopic(e) {
 let r = this.channels.find(n=>n.topic === e && (n._isJoined() || n._isJoining()));
 r && (this.log("transport", `leaving duplicate topic "${e}"`),
 r.unsubscribe())
 }
 _remove(e) {
 this.channels = this.channels.filter(r=>r.topic !== e.topic)
 }
 _onConnMessage(e) {
 this.decode(e.data, r=>{
 if (r.topic === "phoenix" && r.event === "phx_reply")
 try {
 this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error")
 } catch (u) {
 this.log("error", "error in heartbeat callback", u)
 }
 r.ref && r.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
 const {topic: n, event: s, payload: i, ref: o} = r
 , a = o ? `(${o})` : ""
 , l = i.status || "";
 this.log("receive", `${l} ${n} ${s} ${a}`.trim(), i),
 this.channels.filter(u=>u._isMember(n)).forEach(u=>u._trigger(s, i, o)),
 this._triggerStateCallbacks("message", r)
 }
 )
 }
 _clearTimer(e) {
 var r;
 e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer),
 this.heartbeatTimer = void 0) : e === "reconnect" && ((r = this.reconnectTimer) === null || r === void 0 || r.reset())
 }
 _clearAllTimers() {
 this._clearTimer("heartbeat"),
 this._clearTimer("reconnect")
 }
 _setupConnectionHandlers() {
 this.conn && ("binaryType"in this.conn && (this.conn.binaryType = "arraybuffer"),
 this.conn.onopen = ()=>this._onConnOpen(),
 this.conn.onerror = e=>this._onConnError(e),
 this.conn.onmessage = e=>this._onConnMessage(e),
 this.conn.onclose = e=>this._onConnClose(e))
 }
 _teardownConnection() {
 if (this.conn) {
 if (this.conn.readyState === hn.open || this.conn.readyState === hn.connecting)
 try {
 this.conn.close()
 } catch (e) {
 this.log("error", "Error closing connection", e)
 }
 this.conn.onopen = null,
 this.conn.onerror = null,
 this.conn.onmessage = null,
 this.conn.onclose = null,
 this.conn = null
 }
 this._clearAllTimers(),
 this.channels.forEach(e=>e.teardown())
 }
 _onConnOpen() {
 this._setConnectionState("connected"),
 this.log("transport", `connected to ${this.endpointURL()}`),
 (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(()=>{
 this.flushSendBuffer()
 }
 ).catch(r=>{
 this.log("error", "error waiting for auth on connect", r),
 this.flushSendBuffer()
 }
 ),
 this._clearTimer("reconnect"),
 this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
 this._triggerStateCallbacks("open")
 }
 _startHeartbeat() {
 this.heartbeatTimer && clearInterval(this.heartbeatTimer),
 this.heartbeatTimer = setInterval(()=>this.sendHeartbeat(), this.heartbeatIntervalMs)
 }
 _startWorkerHeartbeat() {
 this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
 const e = this._workerObjectUrl(this.workerUrl);
 this.workerRef = new Worker(e),
 this.workerRef.onerror = r=>{
 this.log("worker", "worker error", r.message),
 this.workerRef.terminate()
 }
 ,
 this.workerRef.onmessage = r=>{
 r.data.event === "keepAlive" && this.sendHeartbeat()
 }
 ,
 this.workerRef.postMessage({
 event: "start",
 interval: this.heartbeatIntervalMs
 })
 }
 _onConnClose(e) {
 var r;
 this._setConnectionState("disconnected"),
 this.log("transport", "close", e),
 this._triggerChanError(),
 this._clearTimer("heartbeat"),
 this._wasManualDisconnect || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout(),
 this._triggerStateCallbacks("close", e)
 }
 _onConnError(e) {
 this._setConnectionState("disconnected"),
 this.log("transport", `${e}`),
 this._triggerChanError(),
 this._triggerStateCallbacks("error", e)
 }
 _triggerChanError() {
 this.channels.forEach(e=>e._trigger(jt.error))
 }
 _appendParams(e, r) {
 if (Object.keys(r).length === 0)
 return e;
 const n = e.match(/\?/) ? "&" : "?"
 , s = new URLSearchParams(r);
 return `${e}${n}${s}`
 }
 _workerObjectUrl(e) {
 let r;
 if (e)
 r = e;
 else {
 const n = new Blob([lT],{
 type: "application/javascript"
 });
 r = URL.createObjectURL(n)
 }
 return r
 }
 _setConnectionState(e, r=!1) {
 this._connectionState = e,
 e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = r)
 }
 async _performAuth(e=null) {
 let r;
 e ? r = e : this.accessToken ? r = await this.accessToken() : r = this.accessTokenValue,
 this.accessTokenValue != r && (this.accessTokenValue = r,
 this.channels.forEach(n=>{
 const s = {
 access_token: r,
 version: Qk
 };
 r && n.updateJoinPayload(s),
 n.joinedOnce && n._isJoined() && n._push(jt.access_token, {
 access_token: r
 })
 }
 ))
 }
 async _waitForAuthIfNeeded() {
 this._authPromise && await this._authPromise
 }
 _setAuthSafely(e="general") {
 this.setAuth().catch(r=>{
 this.log("error", `error setting auth in ${e}`, r)
 }
 )
 }
 _triggerStateCallbacks(e, r) {
 try {
 this.stateChangeCallbacks[e].forEach(n=>{
 try {
 n(r)
 } catch (s) {
 this.log("error", `error in ${e} callback`, s)
 }
 }
 )
 } catch (n) {
 this.log("error", `error triggering ${e} callbacks`, n)
 }
 }
 _setupReconnectionTimer() {
 this.reconnectTimer = new wy(async()=>{
 setTimeout(async()=>{
 await this._waitForAuthIfNeeded(),
 this.isConnected() || this.connect()
 }
 , Lo.RECONNECT_DELAY)
 }
 ,this.reconnectAfterMs)
 }
 _initializeOptions(e) {
 var r, n, s, i, o, a, l, u, c, h, f, d;
 switch (this.transport = (r = e == null ? void 0 : e.transport) !== null && r !== void 0 ? r : null,
 this.timeout = (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : _c,
 this.heartbeatIntervalMs = (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : Lo.HEARTBEAT_INTERVAL,
 this.worker = (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1,
 this.accessToken = (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0 ? o : null,
 this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : ru,
 this.vsn = (l = e == null ? void 0 : e.vsn) !== null && l !== void 0 ? l : ap,
 e != null && e.params && (this.params = e.params),
 e != null && e.logger && (this.logger = e.logger),
 (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level,
 this.params = Object.assign(Object.assign({}, this.params), {
 log_level: this.logLevel
 })),
 this.reconnectAfterMs = (u = e == null ? void 0 : e.reconnectAfterMs) !== null && u !== void 0 ? u : y=>oT[y - 1] || aT,
 this.vsn) {
 case yy:
 this.encode = (c = e == null ? void 0 : e.encode) !== null && c !== void 0 ? c : (y,m)=>m(JSON.stringify(y)),
 this.decode = (h = e == null ? void 0 : e.decode) !== null && h !== void 0 ? h : (y,m)=>m(JSON.parse(y));
 break;
 case Jk:
 this.encode = (f = e == null ? void 0 : e.encode) !== null && f !== void 0 ? f : this.serializer.encode.bind(this.serializer),
 this.decode = (d = e == null ? void 0 : e.decode) !== null && d !== void 0 ? d : this.serializer.decode.bind(this.serializer);
 break;
 default:
 throw new Error(`Unsupported serializer version: ${this.vsn}`)
 }
 if (this.worker) {
 if (typeof window < "u" && !window.Worker)
 throw new Error("Web Worker is not supported");
 this.workerUrl = e == null ? void 0 : e.workerUrl
 }
 }
}
class ml extends Error {
 constructor(e) {
 super(e),
 this.__isStorageError = !0,
 this.name = "StorageError"
 }
}
function he(t) {
 return typeof t == "object" && t !== null && "__isStorageError"in t
}
class cT extends ml {
 constructor(e, r, n) {
 super(e),
 this.name = "StorageApiError",
 this.status = r,
 this.statusCode = n
 }
 toJSON() {
 return {
 name: this.name,
 message: this.message,
 status: this.status,
 statusCode: this.statusCode
 }
 }
}
class Sc extends ml {
 constructor(e, r) {
 super(e),
 this.name = "StorageUnknownError",
 this.originalError = r
 }
}
const Gd = t=>t ? (...e)=>t(...e) : (...e)=>fetch(...e)
 , dT = ()=>Response
 , kc = t=>{
 if (Array.isArray(t))
 return t.map(r=>kc(r));
 if (typeof t == "function" || t !== Object(t))
 return t;
 const e = {};
 return Object.entries(t).forEach(([r,n])=>{
 const s = r.replace(/([-_][a-z])/gi, i=>i.toUpperCase().replace(/[-_]/g, ""));
 e[s] = kc(n)
 }
 ),
 e
}
 , hT = t=>{
 if (typeof t != "object" || t === null)
 return !1;
 const e = Object.getPrototypeOf(t);
 return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
 , fT = t=>!t || typeof t != "string" || t.length === 0 || t.length > 100 || t.trim() !== t || t.includes("/") || t.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t)
 , nu = t=>{
 var e;
 return t.msg || t.message || t.error_description || (typeof t.error == "string" ? t.error : (e = t.error) === null || e === void 0 ? void 0 : e.message) || JSON.stringify(t)
}
 , pT = (t,e,r)=>U(void 0, void 0, void 0, function*() {
 const n = yield dT();
 t instanceof n && !(r != null && r.noResolveJson) ? t.json().then(s=>{
 const i = t.status || 500
 , o = (s == null ? void 0 : s.statusCode) || i + "";
 e(new cT(nu(s),i,o))
 }
 ).catch(s=>{
 e(new Sc(nu(s),s))
 }
 ) : e(new Sc(nu(t),t))
})
 , mT = (t,e,r,n)=>{
 const s = {
 method: t,
 headers: (e == null ? void 0 : e.headers) || {}
 };
 return t === "GET" || !n ? s : (hT(n) ? (s.headers = Object.assign({
 "Content-Type": "application/json"
 }, e == null ? void 0 : e.headers),
 s.body = JSON.stringify(n)) : s.body = n,
 e != null && e.duplex && (s.duplex = e.duplex),
 Object.assign(Object.assign({}, s), r))
}
;
function ro(t, e, r, n, s, i) {
 return U(this, void 0, void 0, function*() {
 return new Promise((o,a)=>{
 t(r, mT(e, n, s, i)).then(l=>{
 if (!l.ok)
 throw l;
 return n != null && n.noResolveJson ? l : l.json()
 }
 ).then(l=>o(l)).catch(l=>pT(l, a, n))
 }
 )
 })
}
function zi(t, e, r, n) {
 return U(this, void 0, void 0, function*() {
 return ro(t, "GET", e, r, n)
 })
}
function Ct(t, e, r, n, s) {
 return U(this, void 0, void 0, function*() {
 return ro(t, "POST", e, n, s, r)
 })
}
function Tc(t, e, r, n, s) {
 return U(this, void 0, void 0, function*() {
 return ro(t, "PUT", e, n, s, r)
 })
}
function gT(t, e, r, n) {
 return U(this, void 0, void 0, function*() {
 return ro(t, "HEAD", e, Object.assign(Object.assign({}, r), {
 noResolveJson: !0
 }), n)
 })
}
function Qd(t, e, r, n, s) {
 return U(this, void 0, void 0, function*() {
 return ro(t, "DELETE", e, n, s, r)
 })
}
class vT {
 constructor(e, r) {
 this.downloadFn = e,
 this.shouldThrowOnError = r
 }
 then(e, r) {
 return this.execute().then(e, r)
 }
 execute() {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: (yield this.downloadFn()).body,
 error: null
 }
 } catch (e) {
 if (this.shouldThrowOnError)
 throw e;
 if (he(e))
 return {
 data: null,
 error: e
 };
 throw e
 }
 })
 }
}
var xy;
class yT {
 constructor(e, r) {
 this.downloadFn = e,
 this.shouldThrowOnError = r,
 this[xy] = "BlobDownloadBuilder",
 this.promise = null
 }
 asStream() {
 return new vT(this.downloadFn,this.shouldThrowOnError)
 }
 then(e, r) {
 return this.getPromise().then(e, r)
 }
 catch(e) {
 return this.getPromise().catch(e)
 }
 finally(e) {
 return this.getPromise().finally(e)
 }
 getPromise() {
 return this.promise || (this.promise = this.execute()),
 this.promise
 }
 execute() {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield(yield this.downloadFn()).blob(),
 error: null
 }
 } catch (e) {
 if (this.shouldThrowOnError)
 throw e;
 if (he(e))
 return {
 data: null,
 error: e
 };
 throw e
 }
 })
 }
}
xy = Symbol.toStringTag;
const wT = {
 limit: 100,
 offset: 0,
 sortBy: {
 column: "name",
 order: "asc"
 }
}
 , dp = {
 cacheControl: "3600",
 contentType: "text/plain;charset=UTF-8",
 upsert: !1
};
class bT {
 constructor(e, r={}, n, s) {
 this.shouldThrowOnError = !1,
 this.url = e,
 this.headers = r,
 this.bucketId = n,
 this.fetch = Gd(s)
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 uploadOrUpdate(e, r, n, s) {
 return U(this, void 0, void 0, function*() {
 try {
 let i;
 const o = Object.assign(Object.assign({}, dp), s);
 let a = Object.assign(Object.assign({}, this.headers), e === "POST" && {
 "x-upsert": String(o.upsert)
 });
 const l = o.metadata;
 typeof Blob < "u" && n instanceof Blob ? (i = new FormData,
 i.append("cacheControl", o.cacheControl),
 l && i.append("metadata", this.encodeMetadata(l)),
 i.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (i = n,
 i.has("cacheControl") || i.append("cacheControl", o.cacheControl),
 l && !i.has("metadata") && i.append("metadata", this.encodeMetadata(l))) : (i = n,
 a["cache-control"] = `max-age=${o.cacheControl}`,
 a["content-type"] = o.contentType,
 l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l))),
 (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe"in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")),
 s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
 const u = this._removeEmptyFolders(r)
 , c = this._getFinalPath(u)
 , h = yield(e == "PUT" ? Tc : Ct)(this.fetch, `${this.url}/object/${c}`, i, Object.assign({
 headers: a
 }, o != null && o.duplex ? {
 duplex: o.duplex
 } : {}));
 return {
 data: {
 path: u,
 id: h.Id,
 fullPath: h.Key
 },
 error: null
 }
 } catch (i) {
 if (this.shouldThrowOnError)
 throw i;
 if (he(i))
 return {
 data: null,
 error: i
 };
 throw i
 }
 })
 }
 upload(e, r, n) {
 return U(this, void 0, void 0, function*() {
 return this.uploadOrUpdate("POST", e, r, n)
 })
 }
 uploadToSignedUrl(e, r, n, s) {
 return U(this, void 0, void 0, function*() {
 const i = this._removeEmptyFolders(e)
 , o = this._getFinalPath(i)
 , a = new URL(this.url + `/object/upload/sign/${o}`);
 a.searchParams.set("token", r);
 try {
 let l;
 const u = Object.assign({
 upsert: dp.upsert
 }, s)
 , c = Object.assign(Object.assign({}, this.headers), {
 "x-upsert": String(u.upsert)
 });
 typeof Blob < "u" && n instanceof Blob ? (l = new FormData,
 l.append("cacheControl", u.cacheControl),
 l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n,
 l.append("cacheControl", u.cacheControl)) : (l = n,
 c["cache-control"] = `max-age=${u.cacheControl}`,
 c["content-type"] = u.contentType);
 const h = yield Tc(this.fetch, a.toString(), l, {
 headers: c
 });
 return {
 data: {
 path: i,
 fullPath: h.Key
 },
 error: null
 }
 } catch (l) {
 if (this.shouldThrowOnError)
 throw l;
 if (he(l))
 return {
 data: null,
 error: l
 };
 throw l
 }
 })
 }
 createSignedUploadUrl(e, r) {
 return U(this, void 0, void 0, function*() {
 try {
 let n = this._getFinalPath(e);
 const s = Object.assign({}, this.headers);
 r != null && r.upsert && (s["x-upsert"] = "true");
 const i = yield Ct(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, {
 headers: s
 })
 , o = new URL(this.url + i.url)
 , a = o.searchParams.get("token");
 if (!a)
 throw new ml("No token returned by API");
 return {
 data: {
 signedUrl: o.toString(),
 path: e,
 token: a
 },
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (he(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 })
 }
 update(e, r, n) {
 return U(this, void 0, void 0, function*() {
 return this.uploadOrUpdate("PUT", e, r, n)
 })
 }
 move(e, r, n) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Ct(this.fetch, `${this.url}/object/move`, {
 bucketId: this.bucketId,
 sourceKey: e,
 destinationKey: r,
 destinationBucket: n == null ? void 0 : n.destinationBucket
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (s) {
 if (this.shouldThrowOnError)
 throw s;
 if (he(s))
 return {
 data: null,
 error: s
 };
 throw s
 }
 })
 }
 copy(e, r, n) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: {
 path: (yield Ct(this.fetch, `${this.url}/object/copy`, {
 bucketId: this.bucketId,
 sourceKey: e,
 destinationKey: r,
 destinationBucket: n == null ? void 0 : n.destinationBucket
 }, {
 headers: this.headers
 })).Key
 },
 error: null
 }
 } catch (s) {
 if (this.shouldThrowOnError)
 throw s;
 if (he(s))
 return {
 data: null,
 error: s
 };
 throw s
 }
 })
 }
 createSignedUrl(e, r, n) {
 return U(this, void 0, void 0, function*() {
 try {
 let s = this._getFinalPath(e)
 , i = yield Ct(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
 expiresIn: r
 }, n != null && n.transform ? {
 transform: n.transform
 } : {}), {
 headers: this.headers
 });
 const o = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
 return i = {
 signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`)
 },
 {
 data: i,
 error: null
 }
 } catch (s) {
 if (this.shouldThrowOnError)
 throw s;
 if (he(s))
 return {
 data: null,
 error: s
 };
 throw s
 }
 })
 }
 createSignedUrls(e, r, n) {
 return U(this, void 0, void 0, function*() {
 try {
 const s = yield Ct(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
 expiresIn: r,
 paths: e
 }, {
 headers: this.headers
 })
 , i = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
 return {
 data: s.map(o=>Object.assign(Object.assign({}, o), {
 signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null
 })),
 error: null
 }
 } catch (s) {
 if (this.shouldThrowOnError)
 throw s;
 if (he(s))
 return {
 data: null,
 error: s
 };
 throw s
 }
 })
 }
 download(e, r) {
 const s = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image/authenticated" : "object"
 , i = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {})
 , o = i ? `?${i}` : ""
 , a = this._getFinalPath(e)
 , l = ()=>zi(this.fetch, `${this.url}/${s}/${a}${o}`, {
 headers: this.headers,
 noResolveJson: !0
 });
 return new yT(l,this.shouldThrowOnError)
 }
 info(e) {
 return U(this, void 0, void 0, function*() {
 const r = this._getFinalPath(e);
 try {
 const n = yield zi(this.fetch, `${this.url}/object/info/${r}`, {
 headers: this.headers
 });
 return {
 data: kc(n),
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (he(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 })
 }
 exists(e) {
 return U(this, void 0, void 0, function*() {
 const r = this._getFinalPath(e);
 try {
 return yield gT(this.fetch, `${this.url}/object/${r}`, {
 headers: this.headers
 }),
 {
 data: !0,
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (he(n) && n instanceof Sc) {
 const s = n.originalError;
 if ([400, 404].includes(s == null ? void 0 : s.status))
 return {
 data: !1,
 error: n
 }
 }
 throw n
 }
 })
 }
 getPublicUrl(e, r) {
 const n = this._getFinalPath(e)
 , s = []
 , i = r != null && r.download ? `download=${r.download === !0 ? "" : r.download}` : "";
 i !== "" && s.push(i);
 const a = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image" : "object"
 , l = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {});
 l !== "" && s.push(l);
 let u = s.join("&");
 return u !== "" && (u = `?${u}`),
 {
 data: {
 publicUrl: encodeURI(`${this.url}/${a}/public/${n}${u}`)
 }
 }
 }
 remove(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Qd(this.fetch, `${this.url}/object/${this.bucketId}`, {
 prefixes: e
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 list(e, r, n) {
 return U(this, void 0, void 0, function*() {
 try {
 const s = Object.assign(Object.assign(Object.assign({}, wT), r), {
 prefix: e || ""
 });
 return {
 data: yield Ct(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
 headers: this.headers
 }, n),
 error: null
 }
 } catch (s) {
 if (this.shouldThrowOnError)
 throw s;
 if (he(s))
 return {
 data: null,
 error: s
 };
 throw s
 }
 })
 }
 listV2(e, r) {
 return U(this, void 0, void 0, function*() {
 try {
 const n = Object.assign({}, e);
 return {
 data: yield Ct(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, {
 headers: this.headers
 }, r),
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (he(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 })
 }
 encodeMetadata(e) {
 return JSON.stringify(e)
 }
 toBase64(e) {
 return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e)
 }
 _getFinalPath(e) {
 return `${this.bucketId}/${e.replace(/^\/+/, "")}`
 }
 _removeEmptyFolders(e) {
 return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
 }
 transformOptsToQueryString(e) {
 const r = [];
 return e.width && r.push(`width=${e.width}`),
 e.height && r.push(`height=${e.height}`),
 e.resize && r.push(`resize=${e.resize}`),
 e.format && r.push(`format=${e.format}`),
 e.quality && r.push(`quality=${e.quality}`),
 r.join("&")
 }
}
const Ey = "2.86.0"
 , Sy = {
 "X-Client-Info": `storage-js/${Ey}`
};
class _T {
 constructor(e, r={}, n, s) {
 this.shouldThrowOnError = !1;
 const i = new URL(e);
 s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")),
 this.url = i.href.replace(/\/$/, ""),
 this.headers = Object.assign(Object.assign({}, Sy), r),
 this.fetch = Gd(n)
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 listBuckets(e) {
 return U(this, void 0, void 0, function*() {
 try {
 const r = this.listBucketOptionsToQueryString(e);
 return {
 data: yield zi(this.fetch, `${this.url}/bucket ${r}`, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 getBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield zi(this.fetch, `${this.url}/bucket/${e}`, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 createBucket(e) {
 return U(this, arguments, void 0, function*(r, n={
 public: !1
 }) {
 try {
 return {
 data: yield Ct(this.fetch, `${this.url}/bucket`, {
 id: r,
 name: r,
 type: n.type,
 public: n.public,
 file_size_limit: n.fileSizeLimit,
 allowed_mime_types: n.allowedMimeTypes
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (s) {
 if (this.shouldThrowOnError)
 throw s;
 if (he(s))
 return {
 data: null,
 error: s
 };
 throw s
 }
 })
 }
 updateBucket(e, r) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Tc(this.fetch, `${this.url}/bucket/${e}`, {
 id: e,
 name: e,
 public: r.public,
 file_size_limit: r.fileSizeLimit,
 allowed_mime_types: r.allowedMimeTypes
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (he(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 })
 }
 emptyBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Ct(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 deleteBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Qd(this.fetch, `${this.url}/bucket/${e}`, {}, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 listBucketOptionsToQueryString(e) {
 const r = {};
 return e && ("limit"in e && (r.limit = String(e.limit)),
 "offset"in e && (r.offset = String(e.offset)),
 e.search && (r.search = e.search),
 e.sortColumn && (r.sortColumn = e.sortColumn),
 e.sortOrder && (r.sortOrder = e.sortOrder)),
 Object.keys(r).length > 0 ? "?" + new URLSearchParams(r).toString() : ""
 }
}
var Vi = class extends Error {
 constructor(t, e) {
 var r;
 super(t),
 this.name = "IcebergError",
 this.status = e.status,
 this.icebergType = e.icebergType,
 this.icebergCode = e.icebergCode,
 this.details = e.details,
 this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && ((r = e.icebergType) == null ? void 0 : r.includes("CommitState")) === !0
 }
 isNotFound() {
 return this.status === 404
 }
 isConflict() {
 return this.status === 409
 }
 isAuthenticationTimeout() {
 return this.status === 419
 }
}
;
function xT(t, e, r) {
 const n = new URL(e,t);
 if (r)
 for (const [s,i] of Object.entries(r))
 i !== void 0 && n.searchParams.set(s, i);
 return n.toString()
}
async function ET(t) {
 return !t || t.type === "none" ? {} : t.type === "bearer" ? {
 Authorization: `Bearer ${t.token}`
 } : t.type === "header" ? {
 [t.name]: t.value
 } : t.type === "custom" ? await t.getHeaders() : {}
}
function ST(t) {
 const e = t.fetchImpl ?? globalThis.fetch;
 return {
 async request({method: r, path: n, query: s, body: i, headers: o}) {
 const a = xT(t.baseUrl, n, s)
 , l = await ET(t.auth)
 , u = await e(a, {
 method: r,
 headers: {
 ...i ? {
 "Content-Type": "application/json"
 } : {},
 ...l,
 ...o
 },
 body: i ? JSON.stringify(i) : void 0
 })
 , c = await u.text()
 , h = (u.headers.get("content-type") || "").includes("application/json")
 , f = h && c ? JSON.parse(c) : c;
 if (!u.ok) {
 const d = h ? f : void 0
 , y = d == null ? void 0 : d.error;
 throw new Vi((y == null ? void 0 : y.message) ?? `Request failed with status ${u.status}`,{
 status: u.status,
 icebergType: y == null ? void 0 : y.type,
 icebergCode: y == null ? void 0 : y.code,
 details: d
 })
 }
 return {
 status: u.status,
 headers: u.headers,
 data: f
 }
 }
 }
}
function Uo(t) {
 return t.join("")
}
var kT = class {
 constructor(t, e="") {
 this.client = t,
 this.prefix = e
 }
 async listNamespaces(t) {
 const e = t ? {
 parent: Uo(t.namespace)
 } : void 0;
 return (await this.client.request({
 method: "GET",
 path: `${this.prefix}/namespaces`,
 query: e
 })).data.namespaces.map(n=>({
 namespace: n
 }))
 }
 async createNamespace(t, e) {
 const r = {
 namespace: t.namespace,
 properties: e == null ? void 0 : e.properties
 };
 return (await this.client.request({
 method: "POST",
 path: `${this.prefix}/namespaces`,
 body: r
 })).data
 }
 async dropNamespace(t) {
 await this.client.request({
 method: "DELETE",
 path: `${this.prefix}/namespaces/${Uo(t.namespace)}`
 })
 }
 async loadNamespaceMetadata(t) {
 return {
 properties: (await this.client.request({
 method: "GET",
 path: `${this.prefix}/namespaces/${Uo(t.namespace)}`
 })).data.properties
 }
 }
 async namespaceExists(t) {
 try {
 return await this.client.request({
 method: "HEAD",
 path: `${this.prefix}/namespaces/${Uo(t.namespace)}`
 }),
 !0
 } catch (e) {
 if (e instanceof Vi && e.status === 404)
 return !1;
 throw e
 }
 }
 async createNamespaceIfNotExists(t, e) {
 try {
 return await this.createNamespace(t, e)
 } catch (r) {
 if (r instanceof Vi && r.status === 409)
 return;
 throw r
 }
 }
}
;
function zn(t) {
 return t.join("")
}
var TT = class {
 constructor(t, e="", r) {
 this.client = t,
 this.prefix = e,
 this.accessDelegation = r
 }
 async listTables(t) {
 return (await this.client.request({
 method: "GET",
 path: `${this.prefix}/namespaces/${zn(t.namespace)}/tables`
 })).data.identifiers
 }
 async createTable(t, e) {
 const r = {};
 return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
 (await this.client.request({
 method: "POST",
 path: `${this.prefix}/namespaces/${zn(t.namespace)}/tables`,
 body: e,
 headers: r
 })).data.metadata
 }
 async updateTable(t, e) {
 const r = await this.client.request({
 method: "POST",
 path: `${this.prefix}/namespaces/${zn(t.namespace)}/tables/${t.name}`,
 body: e
 });
 return {
 "metadata-location": r.data["metadata-location"],
 metadata: r.data.metadata
 }
 }
 async dropTable(t, e) {
 await this.client.request({
 method: "DELETE",
 path: `${this.prefix}/namespaces/${zn(t.namespace)}/tables/${t.name}`,
 query: {
 purgeRequested: String((e == null ? void 0 : e.purge) ?? !1)
 }
 })
 }
 async loadTable(t) {
 const e = {};
 return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
 (await this.client.request({
 method: "GET",
 path: `${this.prefix}/namespaces/${zn(t.namespace)}/tables/${t.name}`,
 headers: e
 })).data.metadata
 }
 async tableExists(t) {
 const e = {};
 this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
 try {
 return await this.client.request({
 method: "HEAD",
 path: `${this.prefix}/namespaces/${zn(t.namespace)}/tables/${t.name}`,
 headers: e
 }),
 !0
 } catch (r) {
 if (r instanceof Vi && r.status === 404)
 return !1;
 throw r
 }
 }
 async createTableIfNotExists(t, e) {
 try {
 return await this.createTable(t, e)
 } catch (r) {
 if (r instanceof Vi && r.status === 409)
 return await this.loadTable({
 namespace: t.namespace,
 name: e.name
 });
 throw r
 }
 }
}
 , CT = class {
 constructor(t) {
 var n;
 let e = "v1";
 t.catalogName && (e += `/${t.catalogName}`);
 const r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
 this.client = ST({
 baseUrl: r,
 auth: t.auth,
 fetchImpl: t.fetch
 }),
 this.accessDelegation = (n = t.accessDelegation) == null ? void 0 : n.join(","),
 this.namespaceOps = new kT(this.client,e),
 this.tableOps = new TT(this.client,e,this.accessDelegation)
 }
 async listNamespaces(t) {
 return this.namespaceOps.listNamespaces(t)
 }
 async createNamespace(t, e) {
 return this.namespaceOps.createNamespace(t, e)
 }
 async dropNamespace(t) {
 await this.namespaceOps.dropNamespace(t)
 }
 async loadNamespaceMetadata(t) {
 return this.namespaceOps.loadNamespaceMetadata(t)
 }
 async listTables(t) {
 return this.tableOps.listTables(t)
 }
 async createTable(t, e) {
 return this.tableOps.createTable(t, e)
 }
 async updateTable(t, e) {
 return this.tableOps.updateTable(t, e)
 }
 async dropTable(t, e) {
 await this.tableOps.dropTable(t, e)
 }
 async loadTable(t) {
 return this.tableOps.loadTable(t)
 }
 async namespaceExists(t) {
 return this.namespaceOps.namespaceExists(t)
 }
 async tableExists(t) {
 return this.tableOps.tableExists(t)
 }
 async createNamespaceIfNotExists(t, e) {
 return this.namespaceOps.createNamespaceIfNotExists(t, e)
 }
 async createTableIfNotExists(t, e) {
 return this.tableOps.createTableIfNotExists(t, e)
 }
}
;
class PT {
 constructor(e, r={}, n) {
 this.shouldThrowOnError = !1,
 this.url = e.replace(/\/$/, ""),
 this.headers = Object.assign(Object.assign({}, Sy), r),
 this.fetch = Gd(n)
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 createBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Ct(this.fetch, `${this.url}/bucket`, {
 name: e
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 listBuckets(e) {
 return U(this, void 0, void 0, function*() {
 try {
 const r = new URLSearchParams;
 (e == null ? void 0 : e.limit) !== void 0 && r.set("limit", e.limit.toString()),
 (e == null ? void 0 : e.offset) !== void 0 && r.set("offset", e.offset.toString()),
 e != null && e.sortColumn && r.set("sortColumn", e.sortColumn),
 e != null && e.sortOrder && r.set("sortOrder", e.sortOrder),
 e != null && e.search && r.set("search", e.search);
 const n = r.toString()
 , s = n ? `${this.url}/bucket?${n}` : `${this.url}/bucket`;
 return {
 data: yield zi(this.fetch, s, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 deleteBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield Qd(this.fetch, `${this.url}/bucket/${e}`, {}, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (he(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 from(e) {
 if (!fT(e))
 throw new ml("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
 return new CT({
 baseUrl: this.url,
 catalogName: e,
 auth: {
 type: "custom",
 getHeaders: ()=>U(this, void 0, void 0, function*() {
 return this.headers
 })
 },
 fetch: this.fetch
 })
 }
}
const Jd = {
 "X-Client-Info": `storage-js/${Ey}`,
 "Content-Type": "application/json"
};
class ky extends Error {
 constructor(e) {
 super(e),
 this.__isStorageVectorsError = !0,
 this.name = "StorageVectorsError"
 }
}
function nt(t) {
 return typeof t == "object" && t !== null && "__isStorageVectorsError"in t
}
class su extends ky {
 constructor(e, r, n) {
 super(e),
 this.name = "StorageVectorsApiError",
 this.status = r,
 this.statusCode = n
 }
 toJSON() {
 return {
 name: this.name,
 message: this.message,
 status: this.status,
 statusCode: this.statusCode
 }
 }
}
class OT extends ky {
 constructor(e, r) {
 super(e),
 this.name = "StorageVectorsUnknownError",
 this.originalError = r
 }
}
var hp;
(function(t) {
 t.InternalError = "InternalError",
 t.S3VectorConflictException = "S3VectorConflictException",
 t.S3VectorNotFoundException = "S3VectorNotFoundException",
 t.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty",
 t.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded",
 t.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded"
}
)(hp || (hp = {}));
const Yd = t=>t ? (...e)=>t(...e) : (...e)=>fetch(...e)
 , RT = t=>{
 if (typeof t != "object" || t === null)
 return !1;
 const e = Object.getPrototypeOf(t);
 return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
 , fp = t=>t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
 , jT = (t,e,r)=>U(void 0, void 0, void 0, function*() {
 if (t && typeof t == "object" && "status"in t && "ok"in t && typeof t.status == "number" && !(r != null && r.noResolveJson)) {
 const s = t.status || 500
 , i = t;
 if (typeof i.json == "function")
 i.json().then(o=>{
 const a = (o == null ? void 0 : o.statusCode) || (o == null ? void 0 : o.code) || s + "";
 e(new su(fp(o),s,a))
 }
 ).catch(()=>{
 const o = s + ""
 , a = i.statusText || `HTTP ${s} error`;
 e(new su(a,s,o))
 }
 );
 else {
 const o = s + ""
 , a = i.statusText || `HTTP ${s} error`;
 e(new su(a,s,o))
 }
 } else
 e(new OT(fp(t),t))
})
 , AT = (t,e,r,n)=>{
 const s = {
 method: t,
 headers: (e == null ? void 0 : e.headers) || {}
 };
 return n ? (RT(n) ? (s.headers = Object.assign({
 "Content-Type": "application/json"
 }, e == null ? void 0 : e.headers),
 s.body = JSON.stringify(n)) : s.body = n,
 Object.assign(Object.assign({}, s), r)) : s
}
;
function NT(t, e, r, n, s, i) {
 return U(this, void 0, void 0, function*() {
 return new Promise((o,a)=>{
 t(r, AT(e, n, s, i)).then(l=>{
 if (!l.ok)
 throw l;
 if (n != null && n.noResolveJson)
 return l;
 const u = l.headers.get("content-type");
 return !u || !u.includes("application/json") ? {} : l.json()
 }
 ).then(l=>o(l)).catch(l=>jT(l, a, n))
 }
 )
 })
}
function st(t, e, r, n, s) {
 return U(this, void 0, void 0, function*() {
 return NT(t, "POST", e, n, s, r)
 })
}
class IT {
 constructor(e, r={}, n) {
 this.shouldThrowOnError = !1,
 this.url = e.replace(/\/$/, ""),
 this.headers = Object.assign(Object.assign({}, Jd), r),
 this.fetch = Yd(n)
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 createIndex(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: (yield st(this.fetch, `${this.url}/CreateIndex`, e, {
 headers: this.headers
 })) || {},
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 getIndex(e, r) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield st(this.fetch, `${this.url}/GetIndex`, {
 vectorBucketName: e,
 indexName: r
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (nt(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 })
 }
 listIndexes(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield st(this.fetch, `${this.url}/ListIndexes`, e, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 deleteIndex(e, r) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: (yield st(this.fetch, `${this.url}/DeleteIndex`, {
 vectorBucketName: e,
 indexName: r
 }, {
 headers: this.headers
 })) || {},
 error: null
 }
 } catch (n) {
 if (this.shouldThrowOnError)
 throw n;
 if (nt(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 })
 }
}
class $T {
 constructor(e, r={}, n) {
 this.shouldThrowOnError = !1,
 this.url = e.replace(/\/$/, ""),
 this.headers = Object.assign(Object.assign({}, Jd), r),
 this.fetch = Yd(n)
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 putVectors(e) {
 return U(this, void 0, void 0, function*() {
 try {
 if (e.vectors.length < 1 || e.vectors.length > 500)
 throw new Error("Vector batch size must be between 1 and 500 items");
 return {
 data: (yield st(this.fetch, `${this.url}/PutVectors`, e, {
 headers: this.headers
 })) || {},
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 getVectors(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield st(this.fetch, `${this.url}/GetVectors`, e, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 listVectors(e) {
 return U(this, void 0, void 0, function*() {
 try {
 if (e.segmentCount !== void 0) {
 if (e.segmentCount < 1 || e.segmentCount > 16)
 throw new Error("segmentCount must be between 1 and 16");
 if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
 throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`)
 }
 return {
 data: yield st(this.fetch, `${this.url}/ListVectors`, e, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 queryVectors(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield st(this.fetch, `${this.url}/QueryVectors`, e, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 deleteVectors(e) {
 return U(this, void 0, void 0, function*() {
 try {
 if (e.keys.length < 1 || e.keys.length > 500)
 throw new Error("Keys batch size must be between 1 and 500 items");
 return {
 data: (yield st(this.fetch, `${this.url}/DeleteVectors`, e, {
 headers: this.headers
 })) || {},
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
}
class LT {
 constructor(e, r={}, n) {
 this.shouldThrowOnError = !1,
 this.url = e.replace(/\/$/, ""),
 this.headers = Object.assign(Object.assign({}, Jd), r),
 this.fetch = Yd(n)
 }
 throwOnError() {
 return this.shouldThrowOnError = !0,
 this
 }
 createBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: (yield st(this.fetch, `${this.url}/CreateVectorBucket`, {
 vectorBucketName: e
 }, {
 headers: this.headers
 })) || {},
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 getBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: yield st(this.fetch, `${this.url}/GetVectorBucket`, {
 vectorBucketName: e
 }, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 listBuckets() {
 return U(this, arguments, void 0, function*(e={}) {
 try {
 return {
 data: yield st(this.fetch, `${this.url}/ListVectorBuckets`, e, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
 deleteBucket(e) {
 return U(this, void 0, void 0, function*() {
 try {
 return {
 data: (yield st(this.fetch, `${this.url}/DeleteVectorBucket`, {
 vectorBucketName: e
 }, {
 headers: this.headers
 })) || {},
 error: null
 }
 } catch (r) {
 if (this.shouldThrowOnError)
 throw r;
 if (nt(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 })
 }
}
class UT extends LT {
 constructor(e, r={}) {
 super(e, r.headers || {}, r.fetch)
 }
 from(e) {
 return new DT(this.url,this.headers,e,this.fetch)
 }
 createBucket(e) {
 const r = Object.create(null, {
 createBucket: {
 get: ()=>super.createBucket
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.createBucket.call(this, e)
 })
 }
 getBucket(e) {
 const r = Object.create(null, {
 getBucket: {
 get: ()=>super.getBucket
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.getBucket.call(this, e)
 })
 }
 listBuckets() {
 const e = Object.create(null, {
 listBuckets: {
 get: ()=>super.listBuckets
 }
 });
 return U(this, arguments, void 0, function*(r={}) {
 return e.listBuckets.call(this, r)
 })
 }
 deleteBucket(e) {
 const r = Object.create(null, {
 deleteBucket: {
 get: ()=>super.deleteBucket
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.deleteBucket.call(this, e)
 })
 }
}
class DT extends IT {
 constructor(e, r, n, s) {
 super(e, r, s),
 this.vectorBucketName = n
 }
 createIndex(e) {
 const r = Object.create(null, {
 createIndex: {
 get: ()=>super.createIndex
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.createIndex.call(this, Object.assign(Object.assign({}, e), {
 vectorBucketName: this.vectorBucketName
 }))
 })
 }
 listIndexes() {
 const e = Object.create(null, {
 listIndexes: {
 get: ()=>super.listIndexes
 }
 });
 return U(this, arguments, void 0, function*(r={}) {
 return e.listIndexes.call(this, Object.assign(Object.assign({}, r), {
 vectorBucketName: this.vectorBucketName
 }))
 })
 }
 getIndex(e) {
 const r = Object.create(null, {
 getIndex: {
 get: ()=>super.getIndex
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.getIndex.call(this, this.vectorBucketName, e)
 })
 }
 deleteIndex(e) {
 const r = Object.create(null, {
 deleteIndex: {
 get: ()=>super.deleteIndex
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.deleteIndex.call(this, this.vectorBucketName, e)
 })
 }
 index(e) {
 return new MT(this.url,this.headers,this.vectorBucketName,e,this.fetch)
 }
}
class MT extends $T {
 constructor(e, r, n, s, i) {
 super(e, r, i),
 this.vectorBucketName = n,
 this.indexName = s
 }
 putVectors(e) {
 const r = Object.create(null, {
 putVectors: {
 get: ()=>super.putVectors
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.putVectors.call(this, Object.assign(Object.assign({}, e), {
 vectorBucketName: this.vectorBucketName,
 indexName: this.indexName
 }))
 })
 }
 getVectors(e) {
 const r = Object.create(null, {
 getVectors: {
 get: ()=>super.getVectors
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.getVectors.call(this, Object.assign(Object.assign({}, e), {
 vectorBucketName: this.vectorBucketName,
 indexName: this.indexName
 }))
 })
 }
 listVectors() {
 const e = Object.create(null, {
 listVectors: {
 get: ()=>super.listVectors
 }
 });
 return U(this, arguments, void 0, function*(r={}) {
 return e.listVectors.call(this, Object.assign(Object.assign({}, r), {
 vectorBucketName: this.vectorBucketName,
 indexName: this.indexName
 }))
 })
 }
 queryVectors(e) {
 const r = Object.create(null, {
 queryVectors: {
 get: ()=>super.queryVectors
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.queryVectors.call(this, Object.assign(Object.assign({}, e), {
 vectorBucketName: this.vectorBucketName,
 indexName: this.indexName
 }))
 })
 }
 deleteVectors(e) {
 const r = Object.create(null, {
 deleteVectors: {
 get: ()=>super.deleteVectors
 }
 });
 return U(this, void 0, void 0, function*() {
 return r.deleteVectors.call(this, Object.assign(Object.assign({}, e), {
 vectorBucketName: this.vectorBucketName,
 indexName: this.indexName
 }))
 })
 }
}
class FT extends _T {
 constructor(e, r={}, n, s) {
 super(e, r, n, s)
 }
 from(e) {
 return new bT(this.url,this.headers,e,this.fetch)
 }
 get vectors() {
 return new UT(this.url + "/vector",{
 headers: this.headers,
 fetch: this.fetch
 })
 }
 get analytics() {
 return new PT(this.url + "/iceberg",this.headers,this.fetch)
 }
}
const BT = "2.86.0";
let li = "";
typeof Deno < "u" ? li = "deno" : typeof document < "u" ? li = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? li = "react-native" : li = "node";
const zT = {
 "X-Client-Info": `supabase-js-${li}/${BT}`
}
 , VT = {
 headers: zT
}
 , WT = {
 schema: "public"
}
 , HT = {
 autoRefreshToken: !0,
 persistSession: !0,
 detectSessionInUrl: !0,
 flowType: "implicit"
}
 , qT = {}
 , KT = t=>t ? (...e)=>t(...e) : (...e)=>fetch(...e)
 , GT = ()=>Headers
 , QT = (t,e,r)=>{
 const n = KT(r)
 , s = GT();
 return async(i,o)=>{
 var a;
 const l = (a = await e()) !== null && a !== void 0 ? a : t;
 let u = new s(o == null ? void 0 : o.headers);
 return u.has("apikey") || u.set("apikey", t),
 u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
 n(i, Object.assign(Object.assign({}, o), {
 headers: u
 }))
 }
}
;
function JT(t) {
 return t.endsWith("/") ? t : t + "/"
}
function YT(t, e) {
 var r, n;
 const {db: s, auth: i, realtime: o, global: a} = t
 , {db: l, auth: u, realtime: c, global: h} = e
 , f = {
 db: Object.assign(Object.assign({}, l), s),
 auth: Object.assign(Object.assign({}, u), i),
 realtime: Object.assign(Object.assign({}, c), o),
 storage: {},
 global: Object.assign(Object.assign(Object.assign({}, h), a), {
 headers: Object.assign(Object.assign({}, (r = h == null ? void 0 : h.headers) !== null && r !== void 0 ? r : {}), (n = a == null ? void 0 : a.headers) !== null && n !== void 0 ? n : {})
 }),
 accessToken: async()=>""
 };
 return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken,
 f
}
function XT(t) {
 const e = t == null ? void 0 : t.trim();
 if (!e)
 throw new Error("supabaseUrl is required.");
 if (!e.match(/^https?:\/\//i))
 throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
 try {
 return new URL(JT(e))
 } catch {
 throw Error("Invalid supabaseUrl: Provided URL is malformed.")
 }
}
const Ty = "2.86.0"
 , Gn = 30 * 1e3
 , Cc = 3
 , iu = Cc * Gn
 , ZT = "http://localhost:9999"
 , eC = "supabase.auth.token"
 , tC = {
 "X-Client-Info": `gotrue-js/${Ty}`
}
 , Pc = "X-Supabase-Api-Version"
 , Cy = {
 "2024-01-01": {
 timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
 name: "2024-01-01"
 }
}
 , rC = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
 , nC = 10 * 60 * 1e3;
class Wi extends Error {
 constructor(e, r, n) {
 super(e),
 this.__isAuthError = !0,
 this.name = "AuthError",
 this.status = r,
 this.code = n
 }
}
function M(t) {
 return typeof t == "object" && t !== null && "__isAuthError"in t
}
class sC extends Wi {
 constructor(e, r, n) {
 super(e, r, n),
 this.name = "AuthApiError",
 this.status = r,
 this.code = n
 }
}
function iC(t) {
 return M(t) && t.name === "AuthApiError"
}
class pn extends Wi {
 constructor(e, r) {
 super(e),
 this.name = "AuthUnknownError",
 this.originalError = r
 }
}
class rn extends Wi {
 constructor(e, r, n, s) {
 super(e, n, s),
 this.name = r,
 this.status = n
 }
}
class et extends rn {
 constructor() {
 super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
 }
}
function oC(t) {
 return M(t) && t.name === "AuthSessionMissingError"
}
class Vn extends rn {
 constructor() {
 super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
 }
}
class Do extends rn {
 constructor(e) {
 super(e, "AuthInvalidCredentialsError", 400, void 0)
 }
}
class Mo extends rn {
 constructor(e, r=null) {
 super(e, "AuthImplicitGrantRedirectError", 500, void 0),
 this.details = null,
 this.details = r
 }
 toJSON() {
 return {
 name: this.name,
 message: this.message,
 status: this.status,
 details: this.details
 }
 }
}
function aC(t) {
 return M(t) && t.name === "AuthImplicitGrantRedirectError"
}
class pp extends rn {
 constructor(e, r=null) {
 super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
 this.details = null,
 this.details = r
 }
 toJSON() {
 return {
 name: this.name,
 message: this.message,
 status: this.status,
 details: this.details
 }
 }
}
class Oc extends rn {
 constructor(e, r) {
 super(e, "AuthRetryableFetchError", r, void 0)
 }
}
function ou(t) {
 return M(t) && t.name === "AuthRetryableFetchError"
}
class mp extends rn {
 constructor(e, r, n) {
 super(e, "AuthWeakPasswordError", r, "weak_password"),
 this.reasons = n
 }
}
class Rc extends rn {
 constructor(e) {
 super(e, "AuthInvalidJwtError", 400, "invalid_jwt")
 }
}
const La = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
 , gp = ` 	
\r=`.split("")
 , lC = (()=>{
 const t = new Array(128);
 for (let e = 0; e < t.length; e += 1)
 t[e] = -1;
 for (let e = 0; e < gp.length; e += 1)
 t[gp[e].charCodeAt(0)] = -2;
 for (let e = 0; e < La.length; e += 1)
 t[La[e].charCodeAt(0)] = e;
 return t
}
)();
function vp(t, e, r) {
 if (t !== null)
 for (e.queue = e.queue << 8 | t,
 e.queuedBits += 8; e.queuedBits >= 6; ) {
 const n = e.queue >> e.queuedBits - 6 & 63;
 r(La[n]),
 e.queuedBits -= 6
 }
 else if (e.queuedBits > 0)
 for (e.queue = e.queue << 6 - e.queuedBits,
 e.queuedBits = 6; e.queuedBits >= 6; ) {
 const n = e.queue >> e.queuedBits - 6 & 63;
 r(La[n]),
 e.queuedBits -= 6
 }
}
function Py(t, e, r) {
 const n = lC[t];
 if (n > -1)
 for (e.queue = e.queue << 6 | n,
 e.queuedBits += 6; e.queuedBits >= 8; )
 r(e.queue >> e.queuedBits - 8 & 255),
 e.queuedBits -= 8;
 else {
 if (n === -2)
 return;
 throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)
 }
}
function yp(t) {
 const e = []
 , r = o=>{
 e.push(String.fromCodePoint(o))
 }
 , n = {
 utf8seq: 0,
 codepoint: 0
 }
 , s = {
 queue: 0,
 queuedBits: 0
 }
 , i = o=>{
 dC(o, n, r)
 }
 ;
 for (let o = 0; o < t.length; o += 1)
 Py(t.charCodeAt(o), s, i);
 return e.join("")
}
function uC(t, e) {
 if (t <= 127) {
 e(t);
 return
 } else if (t <= 2047) {
 e(192 | t >> 6),
 e(128 | t & 63);
 return
 } else if (t <= 65535) {
 e(224 | t >> 12),
 e(128 | t >> 6 & 63),
 e(128 | t & 63);
 return
 } else if (t <= 1114111) {
 e(240 | t >> 18),
 e(128 | t >> 12 & 63),
 e(128 | t >> 6 & 63),
 e(128 | t & 63);
 return
 }
 throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)
}
function cC(t, e) {
 for (let r = 0; r < t.length; r += 1) {
 let n = t.charCodeAt(r);
 if (n > 55295 && n <= 56319) {
 const s = (n - 55296) * 1024 & 65535;
 n = (t.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536,
 r += 1
 }
 uC(n, e)
 }
}
function dC(t, e, r) {
 if (e.utf8seq === 0) {
 if (t <= 127) {
 r(t);
 return
 }
 for (let n = 1; n < 6; n += 1)
 if (!(t >> 7 - n & 1)) {
 e.utf8seq = n;
 break
 }
 if (e.utf8seq === 2)
 e.codepoint = t & 31;
 else if (e.utf8seq === 3)
 e.codepoint = t & 15;
 else if (e.utf8seq === 4)
 e.codepoint = t & 7;
 else
 throw new Error("Invalid UTF-8 sequence");
 e.utf8seq -= 1
 } else if (e.utf8seq > 0) {
 if (t <= 127)
 throw new Error("Invalid UTF-8 sequence");
 e.codepoint = e.codepoint << 6 | t & 63,
 e.utf8seq -= 1,
 e.utf8seq === 0 && r(e.codepoint)
 }
}
function ys(t) {
 const e = []
 , r = {
 queue: 0,
 queuedBits: 0
 }
 , n = s=>{
 e.push(s)
 }
 ;
 for (let s = 0; s < t.length; s += 1)
 Py(t.charCodeAt(s), r, n);
 return new Uint8Array(e)
}
function hC(t) {
 const e = [];
 return cC(t, r=>e.push(r)),
 new Uint8Array(e)
}
function yn(t) {
 const e = []
 , r = {
 queue: 0,
 queuedBits: 0
 }
 , n = s=>{
 e.push(s)
 }
 ;
 return t.forEach(s=>vp(s, r, n)),
 vp(null, r, n),
 e.join("")
}
function fC(t) {
 return Math.round(Date.now() / 1e3) + t
}
function pC() {
 return Symbol("auth-callback")
}
const Pe = ()=>typeof window < "u" && typeof document < "u"
 , an = {
 tested: !1,
 writable: !1
}
 , Oy = ()=>{
 if (!Pe())
 return !1;
 try {
 if (typeof globalThis.localStorage != "object")
 return !1
 } catch {
 return !1
 }
 if (an.tested)
 return an.writable;
 const t = `lswt-${Math.random()}${Math.random()}`;
 try {
 globalThis.localStorage.setItem(t, t),
 globalThis.localStorage.removeItem(t),
 an.tested = !0,
 an.writable = !0
 } catch {
 an.tested = !0,
 an.writable = !1
 }
 return an.writable
}
;
function mC(t) {
 const e = {}
 , r = new URL(t);
 if (r.hash && r.hash[0] === "#")
 try {
 new URLSearchParams(r.hash.substring(1)).forEach((s,i)=>{
 e[i] = s
 }
 )
 } catch {}
 return r.searchParams.forEach((n,s)=>{
 e[s] = n
 }
 ),
 e
}
const Ry = t=>t ? (...e)=>t(...e) : (...e)=>fetch(...e)
 , gC = t=>typeof t == "object" && t !== null && "status"in t && "ok"in t && "json"in t && typeof t.json == "function"
 , Qn = async(t,e,r)=>{
 await t.setItem(e, JSON.stringify(r))
}
 , ln = async(t,e)=>{
 const r = await t.getItem(e);
 if (!r)
 return null;
 try {
 return JSON.parse(r)
 } catch {
 return r
 }
}
 , Er = async(t,e)=>{
 await t.removeItem(e)
}
;
class gl {
 constructor() {
 this.promise = new gl.promiseConstructor((e,r)=>{
 this.resolve = e,
 this.reject = r
 }
 )
 }
}
gl.promiseConstructor = Promise;
function au(t) {
 const e = t.split(".");
 if (e.length !== 3)
 throw new Rc("Invalid JWT structure");
 for (let n = 0; n < e.length; n++)
 if (!rC.test(e[n]))
 throw new Rc("JWT not in base64url format");
 return {
 header: JSON.parse(yp(e[0])),
 payload: JSON.parse(yp(e[1])),
 signature: ys(e[2]),
 raw: {
 header: e[0],
 payload: e[1]
 }
 }
}
async function vC(t) {
 return await new Promise(e=>{
 setTimeout(()=>e(null), t)
 }
 )
}
function yC(t, e) {
 return new Promise((n,s)=>{
 (async()=>{
 for (let i = 0; i < 1 / 0; i++)
 try {
 const o = await t(i);
 if (!e(i, null, o)) {
 n(o);
 return
 }
 } catch (o) {
 if (!e(i, o)) {
 s(o);
 return
 }
 }
 }
 )()
 }
 )
}
function wC(t) {
 return ("0" + t.toString(16)).substr(-2)
}
function bC() {
 const e = new Uint32Array(56);
 if (typeof crypto > "u") {
 const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
 , n = r.length;
 let s = "";
 for (let i = 0; i < 56; i++)
 s += r.charAt(Math.floor(Math.random() * n));
 return s
 }
 return crypto.getRandomValues(e),
 Array.from(e, wC).join("")
}
async function _C(t) {
 const r = new TextEncoder().encode(t)
 , n = await crypto.subtle.digest("SHA-256", r)
 , s = new Uint8Array(n);
 return Array.from(s).map(i=>String.fromCharCode(i)).join("")
}
async function xC(t) {
 if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
 return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
 t;
 const r = await _C(t);
 return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function Wn(t, e, r=!1) {
 const n = bC();
 let s = n;
 r && (s += "/PASSWORD_RECOVERY"),
 await Qn(t, `${e}-code-verifier`, s);
 const i = await xC(n);
 return [i, n === i ? "plain" : "s256"]
}
const EC = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function SC(t) {
 const e = t.headers.get(Pc);
 if (!e || !e.match(EC))
 return null;
 try {
 return new Date(`${e}T00:00:00.0Z`)
 } catch {
 return null
 }
}
function kC(t) {
 if (!t)
 throw new Error("Missing exp claim");
 const e = Math.floor(Date.now() / 1e3);
 if (t <= e)
 throw new Error("JWT has expired")
}
function TC(t) {
 switch (t) {
 case "RS256":
 return {
 name: "RSASSA-PKCS1-v1_5",
 hash: {
 name: "SHA-256"
 }
 };
 case "ES256":
 return {
 name: "ECDSA",
 namedCurve: "P-256",
 hash: {
 name: "SHA-256"
 }
 };
 default:
 throw new Error("Invalid alg claim")
 }
}
const CC = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Hn(t) {
 if (!CC.test(t))
 throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function lu() {
 const t = {};
 return new Proxy(t,{
 get: (e,r)=>{
 if (r === "__isUserNotAvailableProxy")
 return !0;
 if (typeof r == "symbol") {
 const n = r.toString();
 if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
 return
 }
 throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)
 }
 ,
 set: (e,r)=>{
 throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
 }
 ,
 deleteProperty: (e,r)=>{
 throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
 }
 })
}
function PC(t, e) {
 return new Proxy(t,{
 get: (r,n,s)=>{
 if (n === "__isInsecureUserWarningProxy")
 return !0;
 if (typeof n == "symbol") {
 const i = n.toString();
 if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
 return Reflect.get(r, n, s)
 }
 return !e.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
 e.value = !0),
 Reflect.get(r, n, s)
 }
 })
}
function wp(t) {
 return JSON.parse(JSON.stringify(t))
}
const dn = t=>t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
 , OC = [502, 503, 504];
async function bp(t) {
 var e;
 if (!gC(t))
 throw new Oc(dn(t),0);
 if (OC.includes(t.status))
 throw new Oc(dn(t),t.status);
 let r;
 try {
 r = await t.json()
 } catch (i) {
 throw new pn(dn(i),i)
 }
 let n;
 const s = SC(t);
 if (s && s.getTime() >= Cy["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code),
 n) {
 if (n === "weak_password")
 throw new mp(dn(r),t.status,((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
 if (n === "session_not_found")
 throw new et
 } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((i,o)=>i && typeof o == "string", !0))
 throw new mp(dn(r),t.status,r.weak_password.reasons);
 throw new sC(dn(r),t.status || 500,n)
}
const RC = (t,e,r,n)=>{
 const s = {
 method: t,
 headers: (e == null ? void 0 : e.headers) || {}
 };
 return t === "GET" ? s : (s.headers = Object.assign({
 "Content-Type": "application/json;charset=UTF-8"
 }, e == null ? void 0 : e.headers),
 s.body = JSON.stringify(n),
 Object.assign(Object.assign({}, s), r))
}
;
async function B(t, e, r, n) {
 var s;
 const i = Object.assign({}, n == null ? void 0 : n.headers);
 i[Pc] || (i[Pc] = Cy["2024-01-01"].name),
 n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
 const o = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
 n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
 const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
 , l = await jC(t, e, r + a, {
 headers: i,
 noResolveJson: n == null ? void 0 : n.noResolveJson
 }, {}, n == null ? void 0 : n.body);
 return n != null && n.xform ? n == null ? void 0 : n.xform(l) : {
 data: Object.assign({}, l),
 error: null
 }
}
async function jC(t, e, r, n, s, i) {
 const o = RC(e, n, s, i);
 let a;
 try {
 a = await t(r, Object.assign({}, o))
 } catch (l) {
 throw console.error(l),
 new Oc(dn(l),0)
 }
 if (a.ok || await bp(a),
 n != null && n.noResolveJson)
 return a;
 try {
 return await a.json()
 } catch (l) {
 await bp(l)
 }
}
function St(t) {
 var e;
 let r = null;
 IC(t) && (r = Object.assign({}, t),
 t.expires_at || (r.expires_at = fC(t.expires_in)));
 const n = (e = t.user) !== null && e !== void 0 ? e : t;
 return {
 data: {
 session: r,
 user: n
 },
 error: null
 }
}
function _p(t) {
 const e = St(t);
 return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((r,n)=>r && typeof n == "string", !0) && (e.data.weak_password = t.weak_password),
 e
}
function Rr(t) {
 var e;
 return {
 data: {
 user: (e = t.user) !== null && e !== void 0 ? e : t
 },
 error: null
 }
}
function AC(t) {
 return {
 data: t,
 error: null
 }
}
function NC(t) {
 const {action_link: e, email_otp: r, hashed_token: n, redirect_to: s, verification_type: i} = t
 , o = Vs(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
 , a = {
 action_link: e,
 email_otp: r,
 hashed_token: n,
 redirect_to: s,
 verification_type: i
 }
 , l = Object.assign({}, o);
 return {
 data: {
 properties: a,
 user: l
 },
 error: null
 }
}
function xp(t) {
 return t
}
function IC(t) {
 return t.access_token && t.refresh_token && t.expires_in
}
const uu = ["global", "local", "others"];
class $C {
 constructor({url: e="", headers: r={}, fetch: n}) {
 this.url = e,
 this.headers = r,
 this.fetch = Ry(n),
 this.mfa = {
 listFactors: this._listFactors.bind(this),
 deleteFactor: this._deleteFactor.bind(this)
 },
 this.oauth = {
 listClients: this._listOAuthClients.bind(this),
 createClient: this._createOAuthClient.bind(this),
 getClient: this._getOAuthClient.bind(this),
 updateClient: this._updateOAuthClient.bind(this),
 deleteClient: this._deleteOAuthClient.bind(this),
 regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
 }
 }
 async signOut(e, r=uu[0]) {
 if (uu.indexOf(r) < 0)
 throw new Error(`@supabase/auth-js: Parameter scope must be one of ${uu.join(", ")}`);
 try {
 return await B(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
 headers: this.headers,
 jwt: e,
 noResolveJson: !0
 }),
 {
 data: null,
 error: null
 }
 } catch (n) {
 if (M(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 }
 async inviteUserByEmail(e, r={}) {
 try {
 return await B(this.fetch, "POST", `${this.url}/invite`, {
 body: {
 email: e,
 data: r.data
 },
 headers: this.headers,
 redirectTo: r.redirectTo,
 xform: Rr
 })
 } catch (n) {
 if (M(n))
 return {
 data: {
 user: null
 },
 error: n
 };
 throw n
 }
 }
 async generateLink(e) {
 try {
 const {options: r} = e
 , n = Vs(e, ["options"])
 , s = Object.assign(Object.assign({}, n), r);
 return "newEmail"in n && (s.new_email = n == null ? void 0 : n.newEmail,
 delete s.newEmail),
 await B(this.fetch, "POST", `${this.url}/admin/generate_link`, {
 body: s,
 headers: this.headers,
 xform: NC,
 redirectTo: r == null ? void 0 : r.redirectTo
 })
 } catch (r) {
 if (M(r))
 return {
 data: {
 properties: null,
 user: null
 },
 error: r
 };
 throw r
 }
 }
 async createUser(e) {
 try {
 return await B(this.fetch, "POST", `${this.url}/admin/users`, {
 body: e,
 headers: this.headers,
 xform: Rr
 })
 } catch (r) {
 if (M(r))
 return {
 data: {
 user: null
 },
 error: r
 };
 throw r
 }
 }
 async listUsers(e) {
 var r, n, s, i, o, a, l;
 try {
 const u = {
 nextPage: null,
 lastPage: 0,
 total: 0
 }
 , c = await B(this.fetch, "GET", `${this.url}/admin/users`, {
 headers: this.headers,
 noResolveJson: !0,
 query: {
 page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
 per_page: (i = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
 },
 xform: xp
 });
 if (c.error)
 throw c.error;
 const h = await c.json()
 , f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
 , d = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
 return d.length > 0 && (d.forEach(y=>{
 const m = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
 , w = JSON.parse(y.split(";")[1].split("=")[1]);
 u[`${w}Page`] = m
 }
 ),
 u.total = parseInt(f)),
 {
 data: Object.assign(Object.assign({}, h), u),
 error: null
 }
 } catch (u) {
 if (M(u))
 return {
 data: {
 users: []
 },
 error: u
 };
 throw u
 }
 }
 async getUserById(e) {
 Hn(e);
 try {
 return await B(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
 headers: this.headers,
 xform: Rr
 })
 } catch (r) {
 if (M(r))
 return {
 data: {
 user: null
 },
 error: r
 };
 throw r
 }
 }
 async updateUserById(e, r) {
 Hn(e);
 try {
 return await B(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
 body: r,
 headers: this.headers,
 xform: Rr
 })
 } catch (n) {
 if (M(n))
 return {
 data: {
 user: null
 },
 error: n
 };
 throw n
 }
 }
 async deleteUser(e, r=!1) {
 Hn(e);
 try {
 return await B(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
 headers: this.headers,
 body: {
 should_soft_delete: r
 },
 xform: Rr
 })
 } catch (n) {
 if (M(n))
 return {
 data: {
 user: null
 },
 error: n
 };
 throw n
 }
 }
 async _listFactors(e) {
 Hn(e.userId);
 try {
 const {data: r, error: n} = await B(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
 headers: this.headers,
 xform: s=>({
 data: {
 factors: s
 },
 error: null
 })
 });
 return {
 data: r,
 error: n
 }
 } catch (r) {
 if (M(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 }
 async _deleteFactor(e) {
 Hn(e.userId),
 Hn(e.id);
 try {
 return {
 data: await B(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
 headers: this.headers
 }),
 error: null
 }
 } catch (r) {
 if (M(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 }
 async _listOAuthClients(e) {
 var r, n, s, i, o, a, l;
 try {
 const u = {
 nextPage: null,
 lastPage: 0,
 total: 0
 }
 , c = await B(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
 headers: this.headers,
 noResolveJson: !0,
 query: {
 page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
 per_page: (i = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
 },
 xform: xp
 });
 if (c.error)
 throw c.error;
 const h = await c.json()
 , f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
 , d = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
 return d.length > 0 && (d.forEach(y=>{
 const m = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
 , w = JSON.parse(y.split(";")[1].split("=")[1]);
 u[`${w}Page`] = m
 }
 ),
 u.total = parseInt(f)),
 {
 data: Object.assign(Object.assign({}, h), u),
 error: null
 }
 } catch (u) {
 if (M(u))
 return {
 data: {
 clients: []
 },
 error: u
 };
 throw u
 }
 }
 async _createOAuthClient(e) {
 try {
 return await B(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
 body: e,
 headers: this.headers,
 xform: r=>({
 data: r,
 error: null
 })
 })
 } catch (r) {
 if (M(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 }
 async _getOAuthClient(e) {
 try {
 return await B(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
 headers: this.headers,
 xform: r=>({
 data: r,
 error: null
 })
 })
 } catch (r) {
 if (M(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 }
 async _updateOAuthClient(e, r) {
 try {
 return await B(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
 body: r,
 headers: this.headers,
 xform: n=>({
 data: n,
 error: null
 })
 })
 } catch (n) {
 if (M(n))
 return {
 data: null,
 error: n
 };
 throw n
 }
 }
 async _deleteOAuthClient(e) {
 try {
 return await B(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
 headers: this.headers,
 noResolveJson: !0
 }),
 {
 data: null,
 error: null
 }
 } catch (r) {
 if (M(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 }
 async _regenerateOAuthClientSecret(e) {
 try {
 return await B(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
 headers: this.headers,
 xform: r=>({
 data: r,
 error: null
 })
 })
 } catch (r) {
 if (M(r))
 return {
 data: null,
 error: r
 };
 throw r
 }
 }
}
function Ep(t={}) {
 return {
 getItem: e=>t[e] || null,
 setItem: (e,r)=>{
 t[e] = r
 }
 ,
 removeItem: e=>{
 delete t[e]
 }
 }
}
const qn = {
 debug: !!(globalThis && Oy() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class jy extends Error {
 constructor(e) {
 super(e),
 this.isAcquireTimeout = !0
 }
}
class LC extends jy {
}
async function UC(t, e, r) {
 qn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
 const n = new globalThis.AbortController;
 return e > 0 && setTimeout(()=>{
 n.abort(),
 qn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t)
 }
 , e),
 await Promise.resolve().then(()=>globalThis.navigator.locks.request(t, e === 0 ? {
 mode: "exclusive",
 ifAvailable: !0
 } : {
 mode: "exclusive",
 signal: n.signal
 }, async s=>{
 if (s) {
 qn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, s.name);
 try {
 return await r()
 } finally {
 qn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, s.name)
 }
 } else {
 if (e === 0)
 throw qn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t),
 new LC(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
 if (qn.debug)
 try {
 const i = await globalThis.navigator.locks.query();
 console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, " "))
 } catch (i) {
 console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
 }
 return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
 await r()
 }
 }
 ))
}
function DC() {
 if (typeof globalThis != "object")
 try {
 Object.defineProperty(Object.prototype, "__magic__", {
 get: function() {
 return this
 },
 configurable: !0
 }),
 __magic__.globalThis = __magic__,
 delete Object.prototype.__magic__
 } catch {
 typeof self < "u" && (self.globalThis = self)
 }
}
function Ay(t) {
 if (!/^0x[a-fA-F0-9]{40}$/.test(t))
 throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
 return t.toLowerCase()
}
function MC(t) {
 return parseInt(t, 16)
}
function FC(t) {
 const e = new TextEncoder().encode(t);
 return "0x" + Array.from(e, n=>n.toString(16).padStart(2, "0")).join("")
}
function BC(t) {
 var e;
 const {chainId: r, domain: n, expirationTime: s, issuedAt: i=new Date, nonce: o, notBefore: a, requestId: l, resources: u, scheme: c, uri: h, version: f} = t;
 {
 if (!Number.isInteger(r))
 throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
 if (!n)
 throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
 if (o && o.length < 8)
 throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
 if (!h)
 throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
 if (f !== "1")
 throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
 if (!((e = t.statement) === null || e === void 0) && e.includes(`
`))
 throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)
 }
 const d = Ay(t.address)
 , y = c ? `${c}://${n}` : n
 , m = t.statement ? `${t.statement}
` : ""
 , w = `${y} wants you to sign in with your Ethereum account:
${d}

${m}`;
 let g = `URI: ${h}
Version: ${f}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
 if (s && (g += `
Expiration Time: ${s.toISOString()}`),
 a && (g += `
Not Before: ${a.toISOString()}`),
 l && (g += `
Request ID: ${l}`),
 u) {
 let p = `
Resources:`;
 for (const v of u) {
 if (!v || typeof v != "string")
 throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);
 p += `
- ${v}`
 }
 g += p
 }
 return `${w}
${g}`
}
class be extends Error {
 constructor({message: e, code: r, cause: n, name: s}) {
 var i;
 super(e, {
 cause: n
 }),
 this.__isWebAuthnError = !0,
 this.name = (i = s ?? (n instanceof Error ? n.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error",
 this.code = r
 }
}
class Ua extends be {
 constructor(e, r) {
 super({
 code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
 cause: r,
 message: e
 }),
 this.name = "WebAuthnUnknownError",
 this.originalError = r
 }
}
function zC({error: t, options: e}) {
 var r, n, s;
 const {publicKey: i} = e;
 if (!i)
 throw Error("options was missing required publicKey property");
 if (t.name === "AbortError") {
 if (e.signal instanceof AbortSignal)
 return new be({
 message: "Registration ceremony was sent an abort signal",
 code: "ERROR_CEREMONY_ABORTED",
 cause: t
 })
 } else if (t.name === "ConstraintError") {
 if (((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
 return new be({
 message: "Discoverable credentials were required but no available authenticator supported it",
 code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
 cause: t
 });
 if (e.mediation === "conditional" && ((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
 return new be({
 message: "User verification was required during automatic registration but it could not be performed",
 code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
 cause: t
 });
 if (((s = i.authenticatorSelection) === null || s === void 0 ? void 0 : s.userVerification) === "required")
 return new be({
 message: "User verification was required but no available authenticator supported it",
 code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
 cause: t
 })
 } else {
 if (t.name === "InvalidStateError")
 return new be({
 message: "The authenticator was previously registered",
 code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
 cause: t
 });
 if (t.name === "NotAllowedError")
 return new be({
 message: t.message,
 code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
 cause: t
 });
 if (t.name === "NotSupportedError")
 return i.pubKeyCredParams.filter(a=>a.type === "public-key").length === 0 ? new be({
 message: 'No entry in pubKeyCredParams was of type "public-key"',
 code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
 cause: t
 }) : new be({
 message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
 code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
 cause: t
 });
 if (t.name === "SecurityError") {
 const o = window.location.hostname;
 if (Ny(o)) {
 if (i.rp.id !== o)
 return new be({
 message: `The RP ID "${i.rp.id}" is invalid for this domain`,
 code: "ERROR_INVALID_RP_ID",
 cause: t
 })
 } else
 return new be({
 message: `${window.location.hostname} is an invalid domain`,
 code: "ERROR_INVALID_DOMAIN",
 cause: t
 })
 } else if (t.name === "TypeError") {
 if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
 return new be({
 message: "User ID was not between 1 and 64 characters",
 code: "ERROR_INVALID_USER_ID_LENGTH",
 cause: t
 })
 } else if (t.name === "UnknownError")
 return new be({
 message: "The authenticator was unable to process the specified options, or could not create a new credential",
 code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
 cause: t
 })
 }
 return new be({
 message: "a Non-Webauthn related error has occurred",
 code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
 cause: t
 })
}
function VC({error: t, options: e}) {
 const {publicKey: r} = e;
 if (!r)
 throw Error("options was missing required publicKey property");
 if (t.name === "AbortError") {
 if (e.signal instanceof AbortSignal)
 return new be({
 message: "Authentication ceremony was sent an abort signal",
 code: "ERROR_CEREMONY_ABORTED",
 cause: t
 })
 } else {
 if (t.name === "NotAllowedError")
 return new be({
 message: t.message,
 code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
 cause: t
 });
 if (t.name === "SecurityError") {
 const n = window.location.hostname;
 if (Ny(n)) {
 if (r.rpId !== n)
 return new be({
 message: `The RP ID "${r.rpId}" is invalid for this domain`,
 code: "ERROR_INVALID_RP_ID",
 cause: t
 })
 } else
 return new be({
 message: `${window.location.hostname} is an invalid domain`,
 code: "ERROR_INVALID_DOMAIN",
 cause: t
 })
 } else if (t.name === "UnknownError")
 return new be({
 message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
 code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
 cause: t
 })
 }
 return new be({
 message: "a Non-Webauthn related error has occurred",
 code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
 cause: t
 })
}
class WC {
 createNewAbortSignal() {
 if (this.controller) {
 const r = new Error("Cancelling existing WebAuthn API call for new one");
 r.name = "AbortError",
 this.controller.abort(r)
 }
 const e = new AbortController;
 return this.controller = e,
 e.signal
 }
 cancelCeremony() {
 if (this.controller) {
 const e = new Error("Manually cancelling existing WebAuthn API call");
 e.name = "AbortError",
 this.controller.abort(e),
 this.controller = void 0
 }
 }
}
const HC = new WC;
function qC(t) {
 if (!t)
 throw new Error("Credential creation options are required");
 if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
 return PublicKeyCredential.parseCreationOptionsFromJSON(t);
 const {challenge: e, user: r, excludeCredentials: n} = t
 , s = Vs(t, ["challenge", "user", "excludeCredentials"])
 , i = ys(e).buffer
 , o = Object.assign(Object.assign({}, r), {
 id: ys(r.id).buffer
 })
 , a = Object.assign(Object.assign({}, s), {
 challenge: i,
 user: o
 });
 if (n && n.length > 0) {
 a.excludeCredentials = new Array(n.length);
 for (let l = 0; l < n.length; l++) {
 const u = n[l];
 a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
 id: ys(u.id).buffer,
 type: u.type || "public-key",
 transports: u.transports
 })
 }
 }
 return a
}
function KC(t) {
 if (!t)
 throw new Error("Credential request options are required");
 if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
 return PublicKeyCredential.parseRequestOptionsFromJSON(t);
 const {challenge: e, allowCredentials: r} = t
 , n = Vs(t, ["challenge", "allowCredentials"])
 , s = ys(e).buffer
 , i = Object.assign(Object.assign({}, n), {
 challenge: s
 });
 if (r && r.length > 0) {
 i.allowCredentials = new Array(r.length);
 for (let o = 0; o < r.length; o++) {
 const a = r[o];
 i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
 id: ys(a.id).buffer,
 type: a.type || "public-key",
 transports: a.transports
 })
 }
 }
 return i
}
function GC(t) {
 var e;
 if ("toJSON"in t && typeof t.toJSON == "function")
 return t.toJSON();
 const r = t;
 return {
 id: t.id,
 rawId: t.id,
 response: {
 attestationObject: yn(new Uint8Array(t.response.attestationObject)),
 clientDataJSON: yn(new Uint8Array(t.response.clientDataJSON))
 },
 type: "public-key",
 clientExtensionResults: t.getClientExtensionResults(),
 authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
 }
}
function QC(t) {
 var e;
 if ("toJSON"in t && typeof t.toJSON == "function")
 return t.toJSON();
 const r = t
 , n = t.getClientExtensionResults()
 , s = t.response;
 return {
 id: t.id,
 rawId: t.id,
 response: {
 authenticatorData: yn(new Uint8Array(s.authenticatorData)),
 clientDataJSON: yn(new Uint8Array(s.clientDataJSON)),
 signature: yn(new Uint8Array(s.signature)),
 userHandle: s.userHandle ? yn(new Uint8Array(s.userHandle)) : void 0
 },
 type: "public-key",
 clientExtensionResults: n,
 authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
 }
}
function Ny(t) {
 return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
}
function Sp() {
 var t, e;
 return !!(Pe() && "PublicKeyCredential"in window && window.PublicKeyCredential && "credentials"in navigator && typeof ((t = navigator == null ? void 0 : navigator.credentials) === null || t === void 0 ? void 0 : t.create) == "function" && typeof ((e = navigator == null ? void 0 : navigator.credentials) === null || e === void 0 ? void 0 : e.get) == "function")
}
async function JC(t) {
 try {
 const e = await navigator.credentials.create(t);
 return e ? e instanceof PublicKeyCredential ? {
 data: e,
 error: null
 } : {
 data: null,
 error: new Ua("Browser returned unexpected credential type",e)
 } : {
 data: null,
 error: new Ua("Empty credential response",e)
 }
 } catch (e) {
 return {
 data: null,
 error: zC({
 error: e,
 options: t
 })
 }
 }
}
async function YC(t) {
 try {
 const e = await navigator.credentials.get(t);
 return e ? e instanceof PublicKeyCredential ? {
 data: e,
 error: null
 } : {
 data: null,
 error: new Ua("Browser returned unexpected credential type",e)
 } : {
 data: null,
 error: new Ua("Empty credential response",e)
 }
 } catch (e) {
 return {
 data: null,
 error: VC({
 error: e,
 options: t
 })
 }
 }
}
const XC = {
 hints: ["security-key"],
 authenticatorSelection: {
 authenticatorAttachment: "cross-platform",
 requireResidentKey: !1,
 userVerification: "preferred",
 residentKey: "discouraged"
 },
 attestation: "direct"
}
 , ZC = {
 userVerification: "preferred",
 hints: ["security-key"],
 attestation: "direct"
};
function Da(...t) {
 const e = s=>s !== null && typeof s == "object" && !Array.isArray(s)
 , r = s=>s instanceof ArrayBuffer || ArrayBuffer.isView(s)
 , n = {};
 for (const s of t)
 if (s)
 for (const i in s) {
 const o = s[i];
 if (o !== void 0)
 if (Array.isArray(o))
 n[i] = o;
 else if (r(o))
 n[i] = o;
 else if (e(o)) {
 const a = n[i];
 e(a) ? n[i] = Da(a, o) : n[i] = Da(o)
 } else
 n[i] = o
 }
 return n
}
function eP(t, e) {
 return Da(XC, t, e || {})
}
function tP(t, e) {
 return Da(ZC, t, e || {})
}
class rP {
 constructor(e) {
 this.client = e,
 this.enroll = this._enroll.bind(this),
 this.challenge = this._challenge.bind(this),
 this.verify = this._verify.bind(this),
 this.authenticate = this._authenticate.bind(this),
 this.register = this._register.bind(this)
 }
 async _enroll(e) {
 return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
 factorType: "webauthn"
 }))
 }
 async _challenge({factorId: e, webauthn: r, friendlyName: n, signal: s}, i) {
 try {
 const {data: o, error: a} = await this.client.mfa.challenge({
 factorId: e,
 webauthn: r
 });
 if (!o)
 return {
 data: null,
 error: a
 };
 const l = s ?? HC.createNewAbortSignal();
 if (o.webauthn.type === "create") {
 const {user: u} = o.webauthn.credential_options.publicKey;
 u.name || (u.name = `${u.id}:${n}`),
 u.displayName || (u.displayName = u.name)
 }
 switch (o.webauthn.type) {
 case "create":
 {
 const u = eP(o.webauthn.credential_options.publicKey, i == null ? void 0 : i.create)
 , {data: c, error: h} = await JC({
 publicKey: u,
 signal: l
 });
 return c ? {
 data: {
 factorId: e,
 challengeId: o.id,
 webauthn: {
 type: o.webauthn.type,
 credential_response: c
 }
 },
 error: null
 } : {
 data: null,
 error: h
 }
 }
 case "request":
 {
 const u = tP(o.webauthn.credential_options.publicKey, i == null ? void 0 : i.request)
 , {data: c, error: h} = await YC(Object.assign(Object.assign({}, o.webauthn.credential_options), {
 publicKey: u,
 signal: l
 }));
 return c ? {
 data: {
 factorId: e,
 challengeId: o.id,
 webauthn: {
 type: o.webauthn.type,
 credential_response: c
 }
 },
 error: null
 } : {
 data: null,
 error: h
 }
 }
 }
 } catch (o) {
 return M(o) ? {
 data: null,
 error: o
 } : {
 data: null,
 error: new pn("Unexpected error in challenge",o)
 }
 }
 }
 async _verify({challengeId: e, factorId: r, webauthn: n}) {
 return this.client.mfa.verify({
 factorId: r,
 challengeId: e,
 webauthn: n
 })
 }
 async _authenticate({factorId: e, webauthn: {rpId: r=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n=typeof window < "u" ? [window.location.origin] : void 0, signal: s}={}}, i) {
 if (!r)
 return {
 data: null,
 error: new Wi("rpId is required for WebAuthn authentication")
 };
 try {
 if (!Sp())
 return {
 data: null,
 error: new pn("Browser does not support WebAuthn",null)
 };
 const {data: o, error: a} = await this.challenge({
 factorId: e,
 webauthn: {
 rpId: r,
 rpOrigins: n
 },
 signal: s
 }, {
 request: i
 });
 if (!o)
 return {
 data: null,
 error: a
 };
 const {webauthn: l} = o;
 return this._verify({
 factorId: e,
 challengeId: o.challengeId,
 webauthn: {
 type: l.type,
 rpId: r,
 rpOrigins: n,
 credential_response: l.credential_response
 }
 })
 } catch (o) {
 return M(o) ? {
 data: null,
 error: o
 } : {
 data: null,
 error: new pn("Unexpected error in authenticate",o)
 }
 }
 }
 async _register({friendlyName: e, webauthn: {rpId: r=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n=typeof window < "u" ? [window.location.origin] : void 0, signal: s}={}}, i) {
 if (!r)
 return {
 data: null,
 error: new Wi("rpId is required for WebAuthn registration")
 };
 try {
 if (!Sp())
 return {
 data: null,
 error: new pn("Browser does not support WebAuthn",null)
 };
 const {data: o, error: a} = await this._enroll({
 friendlyName: e
 });
 if (!o)
 return await this.client.mfa.listFactors().then(c=>{
 var h;
 return (h = c.data) === null || h === void 0 ? void 0 : h.all.find(f=>f.factor_type === "webauthn" && f.friendly_name === e && f.status !== "unverified")
 }
 ).then(c=>c ? this.client.mfa.unenroll({
 factorId: c == null ? void 0 : c.id
 }) : void 0),
 {
 data: null,
 error: a
 };
 const {data: l, error: u} = await this._challenge({
 factorId: o.id,
 friendlyName: o.friendly_name,
 webauthn: {
 rpId: r,
 rpOrigins: n
 },
 signal: s
 }, {
 create: i
 });
 return l ? this._verify({
 factorId: o.id,
 challengeId: l.challengeId,
 webauthn: {
 rpId: r,
 rpOrigins: n,
 type: l.webauthn.type,
 credential_response: l.webauthn.credential_response
 }
 }) : {
 data: null,
 error: u
 }
 } catch (o) {
 return M(o) ? {
 data: null,
 error: o
 } : {
 data: null,
 error: new pn("Unexpected error in register",o)
 }
 }
 }
}
DC();
const nP = {
 url: ZT,
 storageKey: eC,
 autoRefreshToken: !0,
 persistSession: !0,
 detectSessionInUrl: !0,
 headers: tC,
 flowType: "implicit",
 debug: !1,
 hasCustomAuthorizationHeader: !1,
 throwOnError: !1
};
async function kp(t, e, r) {
 return await r()
}
const Kn = {};
class Hi {
 get jwks() {
 var e, r;
 return (r = (e = Kn[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && r !== void 0 ? r : {
 keys: []
 }
 }
 set jwks(e) {
 Kn[this.storageKey] = Object.assign(Object.assign({}, Kn[this.storageKey]), {
 jwks: e
 })
 }
 get jwks_cached_at() {
 var e, r;
 return (r = (e = Kn[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER
 }
 set jwks_cached_at(e) {
 Kn[this.storageKey] = Object.assign(Object.assign({}, Kn[this.storageKey]), {
 cachedAt: e
 })
 }
 constructor(e) {
 var r, n, s;
 this.userStorage = null,
 this.memoryStorage = null,
 this.stateChangeEmitters = new Map,
 this.autoRefreshTicker = null,
 this.visibilityChangedCallback = null,
 this.refreshingDeferred = null,
 this.initializePromise = null,
 this.detectSessionInUrl = !0,
 this.hasCustomAuthorizationHeader = !1,
 this.suppressGetSessionWarning = !1,
 this.lockAcquired = !1,
 this.pendingInLock = [],
 this.broadcastChannel = null,
 this.logger = console.log;
 const i = Object.assign(Object.assign({}, nP), e);
 if (this.storageKey = i.storageKey,
 this.instanceID = (r = Hi.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0,
 Hi.nextInstanceID[this.storageKey] = this.instanceID + 1,
 this.logDebugMessages = !!i.debug,
 typeof i.debug == "function" && (this.logger = i.debug),
 this.instanceID > 0 && Pe()) {
 const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
 console.warn(o),
 this.logDebugMessages && console.trace(o)
 }
 if (this.persistSession = i.persistSession,
 this.autoRefreshToken = i.autoRefreshToken,
 this.admin = new $C({
 url: i.url,
 headers: i.headers,
 fetch: i.fetch
 }),
 this.url = i.url,
 this.headers = i.headers,
 this.fetch = Ry(i.fetch),
 this.lock = i.lock || kp,
 this.detectSessionInUrl = i.detectSessionInUrl,
 this.flowType = i.flowType,
 this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader,
 this.throwOnError = i.throwOnError,
 i.lock ? this.lock = i.lock : Pe() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = UC : this.lock = kp,
 this.jwks || (this.jwks = {
 keys: []
 },
 this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
 this.mfa = {
 verify: this._verify.bind(this),
 enroll: this._enroll.bind(this),
 unenroll: this._unenroll.bind(this),
 challenge: this._challenge.bind(this),
 listFactors: this._listFactors.bind(this),
 challengeAndVerify: this._challengeAndVerify.bind(this),
 getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
 webauthn: new rP(this)
 },
 this.oauth = {
 getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
 approveAuthorization: this._approveAuthorization.bind(this),
 denyAuthorization: this._denyAuthorization.bind(this),
 listGrants: this._listOAuthGrants.bind(this),
 revokeGrant: this._revokeOAuthGrant.bind(this)
 },
 this.persistSession ? (i.storage ? this.storage = i.storage : Oy() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
 this.storage = Ep(this.memoryStorage)),
 i.userStorage && (this.userStorage = i.userStorage)) : (this.memoryStorage = {},
 this.storage = Ep(this.memoryStorage)),
 Pe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
 try {
 this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
 } catch (o) {
 console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o)
 }
 (s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async o=>{
 this._debug("received broadcast notification from other tab or client", o),
 await this._notifyAllSubscribers(o.data.event, o.data.session, !1)
 }
 )
 }
 this.initialize()
 }
 isThrowOnErrorEnabled() {
 return this.throwOnError
 }
 _returnResult(e) {
 if (this.throwOnError && e && e.error)
 throw e.error;
 return e
 }
 _logPrefix() {
 return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Ty}) ${new Date().toISOString()}`
 }
 _debug(...e) {
 return this.logDebugMessages && this.logger(this._logPrefix(), ...e),
 this
 }
 async initialize() {
 return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async()=>await this._acquireLock(-1, async()=>await this._initialize()))(),
 await this.initializePromise)
 }
 async _initialize() {
 var e;
 try {
 let r = {}
 , n = "none";
 if (Pe() && (r = mC(window.location.href),
 this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")),
 Pe() && this.detectSessionInUrl && n !== "none") {
 const {data: s, error: i} = await this._getSessionFromURL(r, n);
 if (i) {
 if (this._debug("#_initialize()", "error detecting session from URL", i),
 aC(i)) {
 const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
 if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
 return {
 error: i
 }
 }
 return await this._removeSession(),
 {
 error: i
 }
 }
 const {session: o, redirectType: a} = s;
 return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a),
 await this._saveSession(o),
 setTimeout(async()=>{
 a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o)
 }
 , 0),
 {
 error: null
 }
 }
 return await this._recoverAndRefresh(),
 {
 error: null
 }
 } catch (r) {
 return M(r) ? this._returnResult({
 error: r
 }) : this._returnResult({
 error: new pn("Unexpected error during initialization",r)
 })
 } finally {
 await this._handleVisibilityChange(),
 this._debug("#_initialize()", "end")
 }
 }
 async signInAnonymously(e) {
 var r, n, s;
 try {
 const i = await B(this.fetch, "POST", `${this.url}/signup`, {
 headers: this.headers,
 body: {
 data: (n = (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
 gotrue_meta_security: {
 captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken
 }
 },
 xform: St
 })
 , {data: o, error: a} = i;
 if (a || !o)
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: a
 });
 const l = o.session
 , u = o.user;
 return o.session && (await this._saveSession(o.session),
 await this._notifyAllSubscribers("SIGNED_IN", l)),
 this._returnResult({
 data: {
 user: u,
 session: l
 },
 error: null
 })
 } catch (i) {
 if (M(i))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: i
 });
 throw i
 }
 }
 async signUp(e) {
 var r, n, s;
 try {
 let i;
 if ("email"in e) {
 const {email: c, password: h, options: f} = e;
 let d = null
 , y = null;
 this.flowType === "pkce" && ([d,y] = await Wn(this.storage, this.storageKey)),
 i = await B(this.fetch, "POST", `${this.url}/signup`, {
 headers: this.headers,
 redirectTo: f == null ? void 0 : f.emailRedirectTo,
 body: {
 email: c,
 password: h,
 data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
 gotrue_meta_security: {
 captcha_token: f == null ? void 0 : f.captchaToken
 },
 code_challenge: d,
 code_challenge_method: y
 },
 xform: St
 })
 } else if ("phone"in e) {
 const {phone: c, password: h, options: f} = e;
 i = await B(this.fetch, "POST", `${this.url}/signup`, {
 headers: this.headers,
 body: {
 phone: c,
 password: h,
 data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
 channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
 gotrue_meta_security: {
 captcha_token: f == null ? void 0 : f.captchaToken
 }
 },
 xform: St
 })
 } else
 throw new Do("You must provide either an email or phone number and a password");
 const {data: o, error: a} = i;
 if (a || !o)
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: a
 });
 const l = o.session
 , u = o.user;
 return o.session && (await this._saveSession(o.session),
 await this._notifyAllSubscribers("SIGNED_IN", l)),
 this._returnResult({
 data: {
 user: u,
 session: l
 },
 error: null
 })
 } catch (i) {
 if (M(i))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: i
 });
 throw i
 }
 }
 async signInWithPassword(e) {
 try {
 let r;
 if ("email"in e) {
 const {email: i, password: o, options: a} = e;
 r = await B(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
 headers: this.headers,
 body: {
 email: i,
 password: o,
 gotrue_meta_security: {
 captcha_token: a == null ? void 0 : a.captchaToken
 }
 },
 xform: _p
 })
 } else if ("phone"in e) {
 const {phone: i, password: o, options: a} = e;
 r = await B(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
 headers: this.headers,
 body: {
 phone: i,
 password: o,
 gotrue_meta_security: {
 captcha_token: a == null ? void 0 : a.captchaToken
 }
 },
 xform: _p
 })
 } else
 throw new Do("You must provide either an email or phone number and a password");
 const {data: n, error: s} = r;
 if (s)
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: s
 });
 if (!n || !n.session || !n.user) {
 const i = new Vn;
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: i
 })
 }
 return n.session && (await this._saveSession(n.session),
 await this._notifyAllSubscribers("SIGNED_IN", n.session)),
 this._returnResult({
 data: Object.assign({
 user: n.user,
 session: n.session
 }, n.weak_password ? {
 weakPassword: n.weak_password
 } : null),
 error: s
 })
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: r
 });
 throw r
 }
 }
 async signInWithOAuth(e) {
 var r, n, s, i;
 return await this._handleProviderSignIn(e.provider, {
 redirectTo: (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
 scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
 queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
 skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
 })
 }
 async exchangeCodeForSession(e) {
 return await this.initializePromise,
 this._acquireLock(-1, async()=>this._exchangeCodeForSession(e))
 }
 async signInWithWeb3(e) {
 const {chain: r} = e;
 switch (r) {
 case "ethereum":
 return await this.signInWithEthereum(e);
 case "solana":
 return await this.signInWithSolana(e);
 default:
 throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)
 }
 }
 async signInWithEthereum(e) {
 var r, n, s, i, o, a, l, u, c, h, f;
 let d, y;
 if ("message"in e)
 d = e.message,
 y = e.signature;
 else {
 const {chain: m, wallet: w, statement: g, options: p} = e;
 let v;
 if (Pe())
 if (typeof w == "object")
 v = w;
 else {
 const j = window;
 if ("ethereum"in j && typeof j.ethereum == "object" && "request"in j.ethereum && typeof j.ethereum.request == "function")
 v = j.ethereum;
 else
 throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
 }
 else {
 if (typeof w != "object" || !(p != null && p.url))
 throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
 v = w
 }
 const _ = new URL((r = p == null ? void 0 : p.url) !== null && r !== void 0 ? r : window.location.href)
 , E = await v.request({
 method: "eth_requestAccounts"
 }).then(j=>j).catch(()=>{
 throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")
 }
 );
 if (!E || E.length === 0)
 throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
 const S = Ay(E[0]);
 let k = (n = p == null ? void 0 : p.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
 if (!k) {
 const j = await v.request({
 method: "eth_chainId"
 });
 k = MC(j)
 }
 const P = {
 domain: _.host,
 address: S,
 statement: g,
 uri: _.href,
 version: "1",
 chainId: k,
 nonce: (s = p == null ? void 0 : p.signInWithEthereum) === null || s === void 0 ? void 0 : s.nonce,
 issuedAt: (o = (i = p == null ? void 0 : p.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : new Date,
 expirationTime: (a = p == null ? void 0 : p.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
 notBefore: (l = p == null ? void 0 : p.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
 requestId: (u = p == null ? void 0 : p.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
 resources: (c = p == null ? void 0 : p.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
 };
 d = BC(P),
 y = await v.request({
 method: "personal_sign",
 params: [FC(d), S]
 })
 }
 try {
 const {data: m, error: w} = await B(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
 headers: this.headers,
 body: Object.assign({
 chain: "ethereum",
 message: d,
 signature: y
 }, !((h = e.options) === null || h === void 0) && h.captchaToken ? {
 gotrue_meta_security: {
 captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken
 }
 } : null),
 xform: St
 });
 if (w)
 throw w;
 if (!m || !m.session || !m.user) {
 const g = new Vn;
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: g
 })
 }
 return m.session && (await this._saveSession(m.session),
 await this._notifyAllSubscribers("SIGNED_IN", m.session)),
 this._returnResult({
 data: Object.assign({}, m),
 error: w
 })
 } catch (m) {
 if (M(m))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: m
 });
 throw m
 }
 }
 async signInWithSolana(e) {
 var r, n, s, i, o, a, l, u, c, h, f, d;
 let y, m;
 if ("message"in e)
 y = e.message,
 m = e.signature;
 else {
 const {chain: w, wallet: g, statement: p, options: v} = e;
 let _;
 if (Pe())
 if (typeof g == "object")
 _ = g;
 else {
 const S = window;
 if ("solana"in S && typeof S.solana == "object" && ("signIn"in S.solana && typeof S.solana.signIn == "function" || "signMessage"in S.solana && typeof S.solana.signMessage == "function"))
 _ = S.solana;
 else
 throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
 }
 else {
 if (typeof g != "object" || !(v != null && v.url))
 throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
 _ = g
 }
 const E = new URL((r = v == null ? void 0 : v.url) !== null && r !== void 0 ? r : window.location.href);
 if ("signIn"in _ && _.signIn) {
 const S = await _.signIn(Object.assign(Object.assign(Object.assign({
 issuedAt: new Date().toISOString()
 }, v == null ? void 0 : v.signInWithSolana), {
 version: "1",
 domain: E.host,
 uri: E.href
 }), p ? {
 statement: p
 } : null));
 let k;
 if (Array.isArray(S) && S[0] && typeof S[0] == "object")
 k = S[0];
 else if (S && typeof S == "object" && "signedMessage"in S && "signature"in S)
 k = S;
 else
 throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
 if ("signedMessage"in k && "signature"in k && (typeof k.signedMessage == "string" || k.signedMessage instanceof Uint8Array) && k.signature instanceof Uint8Array)
 y = typeof k.signedMessage == "string" ? k.signedMessage : new TextDecoder().decode(k.signedMessage),
 m = k.signature;
 else
 throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
 } else {
 if (!("signMessage"in _) || typeof _.signMessage != "function" || !("publicKey"in _) || typeof _ != "object" || !_.publicKey || !("toBase58"in _.publicKey) || typeof _.publicKey.toBase58 != "function")
 throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
 y = [`${E.host} wants you to sign in with your Solana account:`, _.publicKey.toBase58(), ...p ? ["", p, ""] : [""], "Version: 1", `URI: ${E.href}`, `Issued At: ${(s = (n = v == null ? void 0 : v.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((i = v == null ? void 0 : v.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${v.signInWithSolana.notBefore}`] : [], ...!((o = v == null ? void 0 : v.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`] : [], ...!((a = v == null ? void 0 : v.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${v.signInWithSolana.chainId}`] : [], ...!((l = v == null ? void 0 : v.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${v.signInWithSolana.nonce}`] : [], ...!((u = v == null ? void 0 : v.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${v.signInWithSolana.requestId}`] : [], ...!((h = (c = v == null ? void 0 : v.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || h === void 0) && h.length ? ["Resources", ...v.signInWithSolana.resources.map(k=>`- ${k}`)] : []].join(`
`);
 const S = await _.signMessage(new TextEncoder().encode(y), "utf8");
 if (!S || !(S instanceof Uint8Array))
 throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
 m = S
 }
 }
 try {
 const {data: w, error: g} = await B(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
 headers: this.headers,
 body: Object.assign({
 chain: "solana",
 message: y,
 signature: yn(m)
 }, !((f = e.options) === null || f === void 0) && f.captchaToken ? {
 gotrue_meta_security: {
 captcha_token: (d = e.options) === null || d === void 0 ? void 0 : d.captchaToken
 }
 } : null),
 xform: St
 });
 if (g)
 throw g;
 if (!w || !w.session || !w.user) {
 const p = new Vn;
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: p
 })
 }
 return w.session && (await this._saveSession(w.session),
 await this._notifyAllSubscribers("SIGNED_IN", w.session)),
 this._returnResult({
 data: Object.assign({}, w),
 error: g
 })
 } catch (w) {
 if (M(w))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: w
 });
 throw w
 }
 }
 async _exchangeCodeForSession(e) {
 const r = await ln(this.storage, `${this.storageKey}-code-verifier`)
 , [n,s] = (r ?? "").split("/");
 try {
 const {data: i, error: o} = await B(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
 headers: this.headers,
 body: {
 auth_code: e,
 code_verifier: n
 },
 xform: St
 });
 if (await Er(this.storage, `${this.storageKey}-code-verifier`),
 o)
 throw o;
 if (!i || !i.session || !i.user) {
 const a = new Vn;
 return this._returnResult({
 data: {
 user: null,
 session: null,
 redirectType: null
 },
 error: a
 })
 }
 return i.session && (await this._saveSession(i.session),
 await this._notifyAllSubscribers("SIGNED_IN", i.session)),
 this._returnResult({
 data: Object.assign(Object.assign({}, i), {
 redirectType: s ?? null
 }),
 error: o
 })
 } catch (i) {
 if (M(i))
 return this._returnResult({
 data: {
 user: null,
 session: null,
 redirectType: null
 },
 error: i
 });
 throw i
 }
 }
 async signInWithIdToken(e) {
 try {
 const {options: r, provider: n, token: s, access_token: i, nonce: o} = e
 , a = await B(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
 headers: this.headers,
 body: {
 provider: n,
 id_token: s,
 access_token: i,
 nonce: o,
 gotrue_meta_security: {
 captcha_token: r == null ? void 0 : r.captchaToken
 }
 },
 xform: St
 })
 , {data: l, error: u} = a;
 if (u)
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: u
 });
 if (!l || !l.session || !l.user) {
 const c = new Vn;
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: c
 })
 }
 return l.session && (await this._saveSession(l.session),
 await this._notifyAllSubscribers("SIGNED_IN", l.session)),
 this._returnResult({
 data: l,
 error: u
 })
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: r
 });
 throw r
 }
 }
 async signInWithOtp(e) {
 var r, n, s, i, o;
 try {
 if ("email"in e) {
 const {email: a, options: l} = e;
 let u = null
 , c = null;
 this.flowType === "pkce" && ([u,c] = await Wn(this.storage, this.storageKey));
 const {error: h} = await B(this.fetch, "POST", `${this.url}/otp`, {
 headers: this.headers,
 body: {
 email: a,
 data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
 create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
 gotrue_meta_security: {
 captcha_token: l == null ? void 0 : l.captchaToken
 },
 code_challenge: u,
 code_challenge_method: c
 },
 redirectTo: l == null ? void 0 : l.emailRedirectTo
 });
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: h
 })
 }
 if ("phone"in e) {
 const {phone: a, options: l} = e
 , {data: u, error: c} = await B(this.fetch, "POST", `${this.url}/otp`, {
 headers: this.headers,
 body: {
 phone: a,
 data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
 create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
 gotrue_meta_security: {
 captcha_token: l == null ? void 0 : l.captchaToken
 },
 channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
 }
 });
 return this._returnResult({
 data: {
 user: null,
 session: null,
 messageId: u == null ? void 0 : u.message_id
 },
 error: c
 })
 }
 throw new Do("You must provide either an email or phone number.")
 } catch (a) {
 if (M(a))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: a
 });
 throw a
 }
 }
 async verifyOtp(e) {
 var r, n;
 try {
 let s, i;
 "options"in e && (s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
 i = (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken);
 const {data: o, error: a} = await B(this.fetch, "POST", `${this.url}/verify`, {
 headers: this.headers,
 body: Object.assign(Object.assign({}, e), {
 gotrue_meta_security: {
 captcha_token: i
 }
 }),
 redirectTo: s,
 xform: St
 });
 if (a)
 throw a;
 if (!o)
 throw new Error("An error occurred on token verification.");
 const l = o.session
 , u = o.user;
 return l != null && l.access_token && (await this._saveSession(l),
 await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
 this._returnResult({
 data: {
 user: u,
 session: l
 },
 error: null
 })
 } catch (s) {
 if (M(s))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: s
 });
 throw s
 }
 }
 async signInWithSSO(e) {
 var r, n, s, i, o;
 try {
 let a = null
 , l = null;
 this.flowType === "pkce" && ([a,l] = await Wn(this.storage, this.storageKey));
 const u = await B(this.fetch, "POST", `${this.url}/sso`, {
 body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in e ? {
 provider_id: e.providerId
 } : null), "domain"in e ? {
 domain: e.domain
 } : null), {
 redirect_to: (n = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
 }), !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken ? {
 gotrue_meta_security: {
 captcha_token: e.options.captchaToken
 }
 } : null), {
 skip_http_redirect: !0,
 code_challenge: a,
 code_challenge_method: l
 }),
 headers: this.headers,
 xform: AC
 });
 return !((i = u.data) === null || i === void 0) && i.url && Pe() && !(!((o = e.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url),
 this._returnResult(u)
 } catch (a) {
 if (M(a))
 return this._returnResult({
 data: null,
 error: a
 });
 throw a
 }
 }
 async reauthenticate() {
 return await this.initializePromise,
 await this._acquireLock(-1, async()=>await this._reauthenticate())
 }
 async _reauthenticate() {
 try {
 return await this._useSession(async e=>{
 const {data: {session: r}, error: n} = e;
 if (n)
 throw n;
 if (!r)
 throw new et;
 const {error: s} = await B(this.fetch, "GET", `${this.url}/reauthenticate`, {
 headers: this.headers,
 jwt: r.access_token
 });
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: s
 })
 }
 )
 } catch (e) {
 if (M(e))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: e
 });
 throw e
 }
 }
 async resend(e) {
 try {
 const r = `${this.url}/resend`;
 if ("email"in e) {
 const {email: n, type: s, options: i} = e
 , {error: o} = await B(this.fetch, "POST", r, {
 headers: this.headers,
 body: {
 email: n,
 type: s,
 gotrue_meta_security: {
 captcha_token: i == null ? void 0 : i.captchaToken
 }
 },
 redirectTo: i == null ? void 0 : i.emailRedirectTo
 });
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: o
 })
 } else if ("phone"in e) {
 const {phone: n, type: s, options: i} = e
 , {data: o, error: a} = await B(this.fetch, "POST", r, {
 headers: this.headers,
 body: {
 phone: n,
 type: s,
 gotrue_meta_security: {
 captcha_token: i == null ? void 0 : i.captchaToken
 }
 }
 });
 return this._returnResult({
 data: {
 user: null,
 session: null,
 messageId: o == null ? void 0 : o.message_id
 },
 error: a
 })
 }
 throw new Do("You must provide either an email or phone number and a type")
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: r
 });
 throw r
 }
 }
 async getSession() {
 return await this.initializePromise,
 await this._acquireLock(-1, async()=>this._useSession(async r=>r))
 }
 async _acquireLock(e, r) {
 this._debug("#_acquireLock", "begin", e);
 try {
 if (this.lockAcquired) {
 const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
 , s = (async()=>(await n,
 await r()))();
 return this.pendingInLock.push((async()=>{
 try {
 await s
 } catch {}
 }
 )()),
 s
 }
 return await this.lock(`lock:${this.storageKey}`, e, async()=>{
 this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
 try {
 this.lockAcquired = !0;
 const n = r();
 for (this.pendingInLock.push((async()=>{
 try {
 await n
 } catch {}
 }
 )()),
 await n; this.pendingInLock.length; ) {
 const s = [...this.pendingInLock];
 await Promise.all(s),
 this.pendingInLock.splice(0, s.length)
 }
 return await n
 } finally {
 this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
 this.lockAcquired = !1
 }
 }
 )
 } finally {
 this._debug("#_acquireLock", "end")
 }
 }
 async _useSession(e) {
 this._debug("#_useSession", "begin");
 try {
 const r = await this.__loadSession();
 return await e(r)
 } finally {
 this._debug("#_useSession", "end")
 }
 }
 async __loadSession() {
 this._debug("#__loadSession()", "begin"),
 this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
 try {
 let e = null;
 const r = await ln(this.storage, this.storageKey);
 if (this._debug("#getSession()", "session from storage", r),
 r !== null && (this._isValidSession(r) ? e = r : (this._debug("#getSession()", "session from storage is not valid"),
 await this._removeSession())),
 !e)
 return {
 data: {
 session: null
 },
 error: null
 };
 const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < iu : !1;
 if (this._debug("#__loadSession()", `session has ${n ? "" : " not"} expired`, "expires_at", e.expires_at),
 !n) {
 if (this.userStorage) {
 const o = await ln(this.userStorage, this.storageKey + "-user");
 o != null && o.user ? e.user = o.user : e.user = lu()
 }
 if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
 const o = {
 value: this.suppressGetSessionWarning
 };
 e.user = PC(e.user, o),
 o.value && (this.suppressGetSessionWarning = !0)
 }
 return {
 data: {
 session: e
 },
 error: null
 }
 }
 const {data: s, error: i} = await this._callRefreshToken(e.refresh_token);
 return i ? this._returnResult({
 data: {
 session: null
 },
 error: i
 }) : this._returnResult({
 data: {
 session: s
 },
 error: null
 })
 } finally {
 this._debug("#__loadSession()", "end")
 }
 }
 async getUser(e) {
 return e ? await this._getUser(e) : (await this.initializePromise,
 await this._acquireLock(-1, async()=>await this._getUser()))
 }
 async _getUser(e) {
 try {
 return e ? await B(this.fetch, "GET", `${this.url}/user`, {
 headers: this.headers,
 jwt: e,
 xform: Rr
 }) : await this._useSession(async r=>{
 var n, s, i;
 const {data: o, error: a} = r;
 if (a)
 throw a;
 return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
 data: {
 user: null
 },
 error: new et
 } : await B(this.fetch, "GET", `${this.url}/user`, {
 headers: this.headers,
 jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
 xform: Rr
 })
 }
 )
 } catch (r) {
 if (M(r))
 return oC(r) && (await this._removeSession(),
 await Er(this.storage, `${this.storageKey}-code-verifier`)),
 this._returnResult({
 data: {
 user: null
 },
 error: r
 });
 throw r
 }
 }
 async updateUser(e, r={}) {
 return await this.initializePromise,
 await this._acquireLock(-1, async()=>await this._updateUser(e, r))
 }
 async _updateUser(e, r={}) {
 try {
 return await this._useSession(async n=>{
 const {data: s, error: i} = n;
 if (i)
 throw i;
 if (!s.session)
 throw new et;
 const o = s.session;
 let a = null
 , l = null;
 this.flowType === "pkce" && e.email != null && ([a,l] = await Wn(this.storage, this.storageKey));
 const {data: u, error: c} = await B(this.fetch, "PUT", `${this.url}/user`, {
 headers: this.headers,
 redirectTo: r == null ? void 0 : r.emailRedirectTo,
 body: Object.assign(Object.assign({}, e), {
 code_challenge: a,
 code_challenge_method: l
 }),
 jwt: o.access_token,
 xform: Rr
 });
 if (c)
 throw c;
 return o.user = u.user,
 await this._saveSession(o),
 await this._notifyAllSubscribers("USER_UPDATED", o),
 this._returnResult({
 data: {
 user: o.user
 },
 error: null
 })
 }
 )
 } catch (n) {
 if (M(n))
 return this._returnResult({
 data: {
 user: null
 },
 error: n
 });
 throw n
 }
 }
 async setSession(e) {
 return await this.initializePromise,
 await this._acquireLock(-1, async()=>await this._setSession(e))
 }
 async _setSession(e) {
 try {
 if (!e.access_token || !e.refresh_token)
 throw new et;
 const r = Date.now() / 1e3;
 let n = r
 , s = !0
 , i = null;
 const {payload: o} = au(e.access_token);
 if (o.exp && (n = o.exp,
 s = n <= r),
 s) {
 const {data: a, error: l} = await this._callRefreshToken(e.refresh_token);
 if (l)
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: l
 });
 if (!a)
 return {
 data: {
 user: null,
 session: null
 },
 error: null
 };
 i = a
 } else {
 const {data: a, error: l} = await this._getUser(e.access_token);
 if (l)
 throw l;
 i = {
 access_token: e.access_token,
 refresh_token: e.refresh_token,
 user: a.user,
 token_type: "bearer",
 expires_in: n - r,
 expires_at: n
 },
 await this._saveSession(i),
 await this._notifyAllSubscribers("SIGNED_IN", i)
 }
 return this._returnResult({
 data: {
 user: i.user,
 session: i
 },
 error: null
 })
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: {
 session: null,
 user: null
 },
 error: r
 });
 throw r
 }
 }
 async refreshSession(e) {
 return await this.initializePromise,
 await this._acquireLock(-1, async()=>await this._refreshSession(e))
 }
 async _refreshSession(e) {
 try {
 return await this._useSession(async r=>{
 var n;
 if (!e) {
 const {data: o, error: a} = r;
 if (a)
 throw a;
 e = (n = o.session) !== null && n !== void 0 ? n : void 0
 }
 if (!(e != null && e.refresh_token))
 throw new et;
 const {data: s, error: i} = await this._callRefreshToken(e.refresh_token);
 return i ? this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: i
 }) : s ? this._returnResult({
 data: {
 user: s.user,
 session: s
 },
 error: null
 }) : this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: null
 })
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: r
 });
 throw r
 }
 }
 async _getSessionFromURL(e, r) {
 try {
 if (!Pe())
 throw new Mo("No browser detected.");
 if (e.error || e.error_description || e.error_code)
 throw new Mo(e.error_description || "Error in URL with unspecified error_description",{
 error: e.error || "unspecified_error",
 code: e.error_code || "unspecified_code"
 });
 switch (r) {
 case "implicit":
 if (this.flowType === "pkce")
 throw new pp("Not a valid PKCE flow url.");
 break;
 case "pkce":
 if (this.flowType === "implicit")
 throw new Mo("Not a valid implicit grant flow url.");
 break;
 default:
 }
 if (r === "pkce") {
 if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
 !e.code)
 throw new pp("No code detected.");
 const {data: p, error: v} = await this._exchangeCodeForSession(e.code);
 if (v)
 throw v;
 const _ = new URL(window.location.href);
 return _.searchParams.delete("code"),
 window.history.replaceState(window.history.state, "", _.toString()),
 {
 data: {
 session: p.session,
 redirectType: null
 },
 error: null
 }
 }
 const {provider_token: n, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: u} = e;
 if (!i || !a || !o || !u)
 throw new Mo("No session defined in URL");
 const c = Math.round(Date.now() / 1e3)
 , h = parseInt(a);
 let f = c + h;
 l && (f = parseInt(l));
 const d = f - c;
 d * 1e3 <= Gn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${h}s`);
 const y = f - h;
 c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, c);
 const {data: m, error: w} = await this._getUser(i);
 if (w)
 throw w;
 const g = {
 provider_token: n,
 provider_refresh_token: s,
 access_token: i,
 expires_in: h,
 expires_at: f,
 refresh_token: o,
 token_type: u,
 user: m.user
 };
 return window.location.hash = "",
 this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
 this._returnResult({
 data: {
 session: g,
 redirectType: e.type
 },
 error: null
 })
 } catch (n) {
 if (M(n))
 return this._returnResult({
 data: {
 session: null,
 redirectType: null
 },
 error: n
 });
 throw n
 }
 }
 _isImplicitGrantCallback(e) {
 return !!(e.access_token || e.error_description)
 }
 async _isPKCECallback(e) {
 const r = await ln(this.storage, `${this.storageKey}-code-verifier`);
 return !!(e.code && r)
 }
 async signOut(e={
 scope: "global"
 }) {
 return await this.initializePromise,
 await this._acquireLock(-1, async()=>await this._signOut(e))
 }
 async _signOut({scope: e}={
 scope: "global"
 }) {
 return await this._useSession(async r=>{
 var n;
 const {data: s, error: i} = r;
 if (i)
 return this._returnResult({
 error: i
 });
 const o = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
 if (o) {
 const {error: a} = await this.admin.signOut(o, e);
 if (a && !(iC(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
 return this._returnResult({
 error: a
 })
 }
 return e !== "others" && (await this._removeSession(),
 await Er(this.storage, `${this.storageKey}-code-verifier`)),
 this._returnResult({
 error: null
 })
 }
 )
 }
 onAuthStateChange(e) {
 const r = pC()
 , n = {
 id: r,
 callback: e,
 unsubscribe: ()=>{
 this._debug("#unsubscribe()", "state change callback with id removed", r),
 this.stateChangeEmitters.delete(r)
 }
 };
 return this._debug("#onAuthStateChange()", "registered callback with id", r),
 this.stateChangeEmitters.set(r, n),
 (async()=>(await this.initializePromise,
 await this._acquireLock(-1, async()=>{
 this._emitInitialSession(r)
 }
 )))(),
 {
 data: {
 subscription: n
 }
 }
 }
 async _emitInitialSession(e) {
 return await this._useSession(async r=>{
 var n, s;
 try {
 const {data: {session: i}, error: o} = r;
 if (o)
 throw o;
 await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)),
 this._debug("INITIAL_SESSION", "callback id", e, "session", i)
 } catch (i) {
 await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
 this._debug("INITIAL_SESSION", "callback id", e, "error", i),
 console.error(i)
 }
 }
 )
 }
 async resetPasswordForEmail(e, r={}) {
 let n = null
 , s = null;
 this.flowType === "pkce" && ([n,s] = await Wn(this.storage, this.storageKey, !0));
 try {
 return await B(this.fetch, "POST", `${this.url}/recover`, {
 body: {
 email: e,
 code_challenge: n,
 code_challenge_method: s,
 gotrue_meta_security: {
 captcha_token: r.captchaToken
 }
 },
 headers: this.headers,
 redirectTo: r.redirectTo
 })
 } catch (i) {
 if (M(i))
 return this._returnResult({
 data: null,
 error: i
 });
 throw i
 }
 }
 async getUserIdentities() {
 var e;
 try {
 const {data: r, error: n} = await this.getUser();
 if (n)
 throw n;
 return this._returnResult({
 data: {
 identities: (e = r.user.identities) !== null && e !== void 0 ? e : []
 },
 error: null
 })
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 async linkIdentity(e) {
 return "token"in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e)
 }
 async linkIdentityOAuth(e) {
 var r;
 try {
 const {data: n, error: s} = await this._useSession(async i=>{
 var o, a, l, u, c;
 const {data: h, error: f} = i;
 if (f)
 throw f;
 const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
 redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
 scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
 queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
 skipBrowserRedirect: !0
 });
 return await B(this.fetch, "GET", d, {
 headers: this.headers,
 jwt: (c = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
 })
 }
 );
 if (s)
 throw s;
 return Pe() && !(!((r = e.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url),
 this._returnResult({
 data: {
 provider: e.provider,
 url: n == null ? void 0 : n.url
 },
 error: null
 })
 } catch (n) {
 if (M(n))
 return this._returnResult({
 data: {
 provider: e.provider,
 url: null
 },
 error: n
 });
 throw n
 }
 }
 async linkIdentityIdToken(e) {
 return await this._useSession(async r=>{
 var n;
 try {
 const {error: s, data: {session: i}} = r;
 if (s)
 throw s;
 const {options: o, provider: a, token: l, access_token: u, nonce: c} = e
 , h = await B(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
 headers: this.headers,
 jwt: (n = i == null ? void 0 : i.access_token) !== null && n !== void 0 ? n : void 0,
 body: {
 provider: a,
 id_token: l,
 access_token: u,
 nonce: c,
 link_identity: !0,
 gotrue_meta_security: {
 captcha_token: o == null ? void 0 : o.captchaToken
 }
 },
 xform: St
 })
 , {data: f, error: d} = h;
 return d ? this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: d
 }) : !f || !f.session || !f.user ? this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: new Vn
 }) : (f.session && (await this._saveSession(f.session),
 await this._notifyAllSubscribers("USER_UPDATED", f.session)),
 this._returnResult({
 data: f,
 error: d
 }))
 } catch (s) {
 if (M(s))
 return this._returnResult({
 data: {
 user: null,
 session: null
 },
 error: s
 });
 throw s
 }
 }
 )
 }
 async unlinkIdentity(e) {
 try {
 return await this._useSession(async r=>{
 var n, s;
 const {data: i, error: o} = r;
 if (o)
 throw o;
 return await B(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
 headers: this.headers,
 jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
 })
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 async _refreshAccessToken(e) {
 const r = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
 this._debug(r, "begin");
 try {
 const n = Date.now();
 return await yC(async s=>(s > 0 && await vC(200 * Math.pow(2, s - 1)),
 this._debug(r, "refreshing attempt", s),
 await B(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
 body: {
 refresh_token: e
 },
 headers: this.headers,
 xform: St
 })), (s,i)=>{
 const o = 200 * Math.pow(2, s);
 return i && ou(i) && Date.now() + o - n < Gn
 }
 )
 } catch (n) {
 if (this._debug(r, "error", n),
 M(n))
 return this._returnResult({
 data: {
 session: null,
 user: null
 },
 error: n
 });
 throw n
 } finally {
 this._debug(r, "end")
 }
 }
 _isValidSession(e) {
 return typeof e == "object" && e !== null && "access_token"in e && "refresh_token"in e && "expires_at"in e
 }
 async _handleProviderSignIn(e, r) {
 const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
 redirectTo: r.redirectTo,
 scopes: r.scopes,
 queryParams: r.queryParams
 });
 return this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", n),
 Pe() && !r.skipBrowserRedirect && window.location.assign(n),
 {
 data: {
 provider: e,
 url: n
 },
 error: null
 }
 }
 async _recoverAndRefresh() {
 var e, r;
 const n = "#_recoverAndRefresh()";
 this._debug(n, "begin");
 try {
 const s = await ln(this.storage, this.storageKey);
 if (s && this.userStorage) {
 let o = await ln(this.userStorage, this.storageKey + "-user");
 !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = {
 user: s.user
 },
 await Qn(this.userStorage, this.storageKey + "-user", o)),
 s.user = (e = o == null ? void 0 : o.user) !== null && e !== void 0 ? e : lu()
 } else if (s && !s.user && !s.user) {
 const o = await ln(this.storage, this.storageKey + "-user");
 o && (o != null && o.user) ? (s.user = o.user,
 await Er(this.storage, this.storageKey + "-user"),
 await Qn(this.storage, this.storageKey, s)) : s.user = lu()
 }
 if (this._debug(n, "session from storage", s),
 !this._isValidSession(s)) {
 this._debug(n, "session is not valid"),
 s !== null && await this._removeSession();
 return
 }
 const i = ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < iu;
 if (this._debug(n, `session has ${i ? "" : " not"} expired with margin of ${iu}s`),
 i) {
 if (this.autoRefreshToken && s.refresh_token) {
 const {error: o} = await this._callRefreshToken(s.refresh_token);
 o && (console.error(o),
 ou(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o),
 await this._removeSession()))
 }
 } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
 try {
 const {data: o, error: a} = await this._getUser(s.access_token);
 !a && (o != null && o.user) ? (s.user = o.user,
 await this._saveSession(s),
 await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification")
 } catch (o) {
 console.error("Error getting user data:", o),
 this._debug(n, "error getting user data, skipping SIGNED_IN notification", o)
 }
 else
 await this._notifyAllSubscribers("SIGNED_IN", s)
 } catch (s) {
 this._debug(n, "error", s),
 console.error(s);
 return
 } finally {
 this._debug(n, "end")
 }
 }
 async _callRefreshToken(e) {
 var r, n;
 if (!e)
 throw new et;
 if (this.refreshingDeferred)
 return this.refreshingDeferred.promise;
 const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
 this._debug(s, "begin");
 try {
 this.refreshingDeferred = new gl;
 const {data: i, error: o} = await this._refreshAccessToken(e);
 if (o)
 throw o;
 if (!i.session)
 throw new et;
 await this._saveSession(i.session),
 await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
 const a = {
 data: i.session,
 error: null
 };
 return this.refreshingDeferred.resolve(a),
 a
 } catch (i) {
 if (this._debug(s, "error", i),
 M(i)) {
 const o = {
 data: null,
 error: i
 };
 return ou(i) || await this._removeSession(),
 (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o),
 o
 }
 throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
 i
 } finally {
 this.refreshingDeferred = null,
 this._debug(s, "end")
 }
 }
 async _notifyAllSubscribers(e, r, n=!0) {
 const s = `#_notifyAllSubscribers(${e})`;
 this._debug(s, "begin", r, `broadcast = ${n}`);
 try {
 this.broadcastChannel && n && this.broadcastChannel.postMessage({
 event: e,
 session: r
 });
 const i = []
 , o = Array.from(this.stateChangeEmitters.values()).map(async a=>{
 try {
 await a.callback(e, r)
 } catch (l) {
 i.push(l)
 }
 }
 );
 if (await Promise.all(o),
 i.length > 0) {
 for (let a = 0; a < i.length; a += 1)
 console.error(i[a]);
 throw i[0]
 }
 } finally {
 this._debug(s, "end")
 }
 }
 async _saveSession(e) {
 this._debug("#_saveSession()", e),
 this.suppressGetSessionWarning = !0;
 const r = Object.assign({}, e)
 , n = r.user && r.user.__isUserNotAvailableProxy === !0;
 if (this.userStorage) {
 !n && r.user && await Qn(this.userStorage, this.storageKey + "-user", {
 user: r.user
 });
 const s = Object.assign({}, r);
 delete s.user;
 const i = wp(s);
 await Qn(this.storage, this.storageKey, i)
 } else {
 const s = wp(r);
 await Qn(this.storage, this.storageKey, s)
 }
 }
 async _removeSession() {
 this._debug("#_removeSession()"),
 await Er(this.storage, this.storageKey),
 await Er(this.storage, this.storageKey + "-code-verifier"),
 await Er(this.storage, this.storageKey + "-user"),
 this.userStorage && await Er(this.userStorage, this.storageKey + "-user"),
 await this._notifyAllSubscribers("SIGNED_OUT", null)
 }
 _removeVisibilityChangedCallback() {
 this._debug("#_removeVisibilityChangedCallback()");
 const e = this.visibilityChangedCallback;
 this.visibilityChangedCallback = null;
 try {
 e && Pe() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e)
 } catch (r) {
 console.error("removing visibilitychange callback failed", r)
 }
 }
 async _startAutoRefresh() {
 await this._stopAutoRefresh(),
 this._debug("#_startAutoRefresh()");
 const e = setInterval(()=>this._autoRefreshTokenTick(), Gn);
 this.autoRefreshTicker = e,
 e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e),
 setTimeout(async()=>{
 await this.initializePromise,
 await this._autoRefreshTokenTick()
 }
 , 0)
 }
 async _stopAutoRefresh() {
 this._debug("#_stopAutoRefresh()");
 const e = this.autoRefreshTicker;
 this.autoRefreshTicker = null,
 e && clearInterval(e)
 }
 async startAutoRefresh() {
 this._removeVisibilityChangedCallback(),
 await this._startAutoRefresh()
 }
 async stopAutoRefresh() {
 this._removeVisibilityChangedCallback(),
 await this._stopAutoRefresh()
 }
 async _autoRefreshTokenTick() {
 this._debug("#_autoRefreshTokenTick()", "begin");
 try {
 await this._acquireLock(0, async()=>{
 try {
 const e = Date.now();
 try {
 return await this._useSession(async r=>{
 const {data: {session: n}} = r;
 if (!n || !n.refresh_token || !n.expires_at) {
 this._debug("#_autoRefreshTokenTick()", "no session");
 return
 }
 const s = Math.floor((n.expires_at * 1e3 - e) / Gn);
 this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${Gn}ms, refresh threshold is ${Cc} ticks`),
 s <= Cc && await this._callRefreshToken(n.refresh_token)
 }
 )
 } catch (r) {
 console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
 }
 } finally {
 this._debug("#_autoRefreshTokenTick()", "end")
 }
 }
 )
 } catch (e) {
 if (e.isAcquireTimeout || e instanceof jy)
 this._debug("auto refresh token tick lock not available");
 else
 throw e
 }
 }
 async _handleVisibilityChange() {
 if (this._debug("#_handleVisibilityChange()"),
 !Pe() || !(window != null && window.addEventListener))
 return this.autoRefreshToken && this.startAutoRefresh(),
 !1;
 try {
 this.visibilityChangedCallback = async()=>await this._onVisibilityChanged(!1),
 window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
 await this._onVisibilityChanged(!0)
 } catch (e) {
 console.error("_handleVisibilityChange", e)
 }
 }
 async _onVisibilityChanged(e) {
 const r = `#_onVisibilityChanged(${e})`;
 this._debug(r, "visibilityState", document.visibilityState),
 document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
 e || (await this.initializePromise,
 await this._acquireLock(-1, async()=>{
 if (document.visibilityState !== "visible") {
 this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
 return
 }
 await this._recoverAndRefresh()
 }
 ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
 }
 async _getUrlForProvider(e, r, n) {
 const s = [`provider=${encodeURIComponent(r)}`];
 if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
 n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
 this.flowType === "pkce") {
 const [i,o] = await Wn(this.storage, this.storageKey)
 , a = new URLSearchParams({
 code_challenge: `${encodeURIComponent(i)}`,
 code_challenge_method: `${encodeURIComponent(o)}`
 });
 s.push(a.toString())
 }
 if (n != null && n.queryParams) {
 const i = new URLSearchParams(n.queryParams);
 s.push(i.toString())
 }
 return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
 `${e}?${s.join("&")}`
 }
 async _unenroll(e) {
 try {
 return await this._useSession(async r=>{
 var n;
 const {data: s, error: i} = r;
 return i ? this._returnResult({
 data: null,
 error: i
 }) : await B(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
 headers: this.headers,
 jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
 })
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 async _enroll(e) {
 try {
 return await this._useSession(async r=>{
 var n, s;
 const {data: i, error: o} = r;
 if (o)
 return this._returnResult({
 data: null,
 error: o
 });
 const a = Object.assign({
 friendly_name: e.friendlyName,
 factor_type: e.factorType
 }, e.factorType === "phone" ? {
 phone: e.phone
 } : e.factorType === "totp" ? {
 issuer: e.issuer
 } : {})
 , {data: l, error: u} = await B(this.fetch, "POST", `${this.url}/factors`, {
 body: a,
 headers: this.headers,
 jwt: (n = i == null ? void 0 : i.session) === null || n === void 0 ? void 0 : n.access_token
 });
 return u ? this._returnResult({
 data: null,
 error: u
 }) : (e.factorType === "totp" && l.type === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
 this._returnResult({
 data: l,
 error: null
 }))
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 async _verify(e) {
 return this._acquireLock(-1, async()=>{
 try {
 return await this._useSession(async r=>{
 var n;
 const {data: s, error: i} = r;
 if (i)
 return this._returnResult({
 data: null,
 error: i
 });
 const o = Object.assign({
 challenge_id: e.challengeId
 }, "webauthn"in e ? {
 webauthn: Object.assign(Object.assign({}, e.webauthn), {
 credential_response: e.webauthn.type === "create" ? GC(e.webauthn.credential_response) : QC(e.webauthn.credential_response)
 })
 } : {
 code: e.code
 })
 , {data: a, error: l} = await B(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
 body: o,
 headers: this.headers,
 jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
 });
 return l ? this._returnResult({
 data: null,
 error: l
 }) : (await this._saveSession(Object.assign({
 expires_at: Math.round(Date.now() / 1e3) + a.expires_in
 }, a)),
 await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
 this._returnResult({
 data: a,
 error: l
 }))
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 )
 }
 async _challenge(e) {
 return this._acquireLock(-1, async()=>{
 try {
 return await this._useSession(async r=>{
 var n;
 const {data: s, error: i} = r;
 if (i)
 return this._returnResult({
 data: null,
 error: i
 });
 const o = await B(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
 body: e,
 headers: this.headers,
 jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
 });
 if (o.error)
 return o;
 const {data: a} = o;
 if (a.type !== "webauthn")
 return {
 data: a,
 error: null
 };
 switch (a.webauthn.type) {
 case "create":
 return {
 data: Object.assign(Object.assign({}, a), {
 webauthn: Object.assign(Object.assign({}, a.webauthn), {
 credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
 publicKey: qC(a.webauthn.credential_options.publicKey)
 })
 })
 }),
 error: null
 };
 case "request":
 return {
 data: Object.assign(Object.assign({}, a), {
 webauthn: Object.assign(Object.assign({}, a.webauthn), {
 credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
 publicKey: KC(a.webauthn.credential_options.publicKey)
 })
 })
 }),
 error: null
 }
 }
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 )
 }
 async _challengeAndVerify(e) {
 const {data: r, error: n} = await this._challenge({
 factorId: e.factorId
 });
 return n ? this._returnResult({
 data: null,
 error: n
 }) : await this._verify({
 factorId: e.factorId,
 challengeId: r.id,
 code: e.code
 })
 }
 async _listFactors() {
 var e;
 const {data: {user: r}, error: n} = await this.getUser();
 if (n)
 return {
 data: null,
 error: n
 };
 const s = {
 all: [],
 phone: [],
 totp: [],
 webauthn: []
 };
 for (const i of (e = r == null ? void 0 : r.factors) !== null && e !== void 0 ? e : [])
 s.all.push(i),
 i.status === "verified" && s[i.factor_type].push(i);
 return {
 data: s,
 error: null
 }
 }
 async _getAuthenticatorAssuranceLevel() {
 var e, r;
 const {data: {session: n}, error: s} = await this.getSession();
 if (s)
 return this._returnResult({
 data: null,
 error: s
 });
 if (!n)
 return {
 data: {
 currentLevel: null,
 nextLevel: null,
 currentAuthenticationMethods: []
 },
 error: null
 };
 const {payload: i} = au(n.access_token);
 let o = null;
 i.aal && (o = i.aal);
 let a = o;
 ((r = (e = n.user.factors) === null || e === void 0 ? void 0 : e.filter(c=>c.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (a = "aal2");
 const u = i.amr || [];
 return {
 data: {
 currentLevel: o,
 nextLevel: a,
 currentAuthenticationMethods: u
 },
 error: null
 }
 }
 async _getAuthorizationDetails(e) {
 try {
 return await this._useSession(async r=>{
 const {data: {session: n}, error: s} = r;
 return s ? this._returnResult({
 data: null,
 error: s
 }) : n ? await B(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
 headers: this.headers,
 jwt: n.access_token,
 xform: i=>({
 data: i,
 error: null
 })
 }) : this._returnResult({
 data: null,
 error: new et
 })
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 async _approveAuthorization(e, r) {
 try {
 return await this._useSession(async n=>{
 const {data: {session: s}, error: i} = n;
 if (i)
 return this._returnResult({
 data: null,
 error: i
 });
 if (!s)
 return this._returnResult({
 data: null,
 error: new et
 });
 const o = await B(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
 headers: this.headers,
 jwt: s.access_token,
 body: {
 action: "approve"
 },
 xform: a=>({
 data: a,
 error: null
 })
 });
 return o.data && o.data.redirect_url && Pe() && !(r != null && r.skipBrowserRedirect) && window.location.assign(o.data.redirect_url),
 o
 }
 )
 } catch (n) {
 if (M(n))
 return this._returnResult({
 data: null,
 error: n
 });
 throw n
 }
 }
 async _denyAuthorization(e, r) {
 try {
 return await this._useSession(async n=>{
 const {data: {session: s}, error: i} = n;
 if (i)
 return this._returnResult({
 data: null,
 error: i
 });
 if (!s)
 return this._returnResult({
 data: null,
 error: new et
 });
 const o = await B(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
 headers: this.headers,
 jwt: s.access_token,
 body: {
 action: "deny"
 },
 xform: a=>({
 data: a,
 error: null
 })
 });
 return o.data && o.data.redirect_url && Pe() && !(r != null && r.skipBrowserRedirect) && window.location.assign(o.data.redirect_url),
 o
 }
 )
 } catch (n) {
 if (M(n))
 return this._returnResult({
 data: null,
 error: n
 });
 throw n
 }
 }
 async _listOAuthGrants() {
 try {
 return await this._useSession(async e=>{
 const {data: {session: r}, error: n} = e;
 return n ? this._returnResult({
 data: null,
 error: n
 }) : r ? await B(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
 headers: this.headers,
 jwt: r.access_token,
 xform: s=>({
 data: s,
 error: null
 })
 }) : this._returnResult({
 data: null,
 error: new et
 })
 }
 )
 } catch (e) {
 if (M(e))
 return this._returnResult({
 data: null,
 error: e
 });
 throw e
 }
 }
 async _revokeOAuthGrant(e) {
 try {
 return await this._useSession(async r=>{
 const {data: {session: n}, error: s} = r;
 return s ? this._returnResult({
 data: null,
 error: s
 }) : n ? (await B(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
 headers: this.headers,
 jwt: n.access_token,
 query: {
 client_id: e.clientId
 },
 noResolveJson: !0
 }),
 {
 data: {},
 error: null
 }) : this._returnResult({
 data: null,
 error: new et
 })
 }
 )
 } catch (r) {
 if (M(r))
 return this._returnResult({
 data: null,
 error: r
 });
 throw r
 }
 }
 async fetchJwk(e, r={
 keys: []
 }) {
 let n = r.keys.find(a=>a.kid === e);
 if (n)
 return n;
 const s = Date.now();
 if (n = this.jwks.keys.find(a=>a.kid === e),
 n && this.jwks_cached_at + nC > s)
 return n;
 const {data: i, error: o} = await B(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
 headers: this.headers
 });
 if (o)
 throw o;
 return !i.keys || i.keys.length === 0 || (this.jwks = i,
 this.jwks_cached_at = s,
 n = i.keys.find(a=>a.kid === e),
 !n) ? null : n
 }
 async getClaims(e, r={}) {
 try {
 let n = e;
 if (!n) {
 const {data: d, error: y} = await this.getSession();
 if (y || !d.session)
 return this._returnResult({
 data: null,
 error: y
 });
 n = d.session.access_token
 }
 const {header: s, payload: i, signature: o, raw: {header: a, payload: l}} = au(n);
 r != null && r.allowExpired || kC(i.exp);
 const u = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(s.kid, r != null && r.keys ? {
 keys: r.keys
 } : r == null ? void 0 : r.jwks);
 if (!u) {
 const {error: d} = await this.getUser(n);
 if (d)
 throw d;
 return {
 data: {
 claims: i,
 header: s,
 signature: o
 },
 error: null
 }
 }
 const c = TC(s.alg)
 , h = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
 if (!await crypto.subtle.verify(c, h, o, hC(`${a}.${l}`)))
 throw new Rc("Invalid JWT signature");
 return {
 data: {
 claims: i,
 header: s,
 signature: o
 },
 error: null
 }
 } catch (n) {
 if (M(n))
 return this._returnResult({
 data: null,
 error: n
 });
 throw n
 }
 }
}
Hi.nextInstanceID = {};
const sP = Hi;
class iP extends sP {
 constructor(e) {
 super(e)
 }
}
class oP {
 constructor(e, r, n) {
 var s, i, o;
 this.supabaseUrl = e,
 this.supabaseKey = r;
 const a = XT(e);
 if (!r)
 throw new Error("supabaseKey is required.");
 this.realtimeUrl = new URL("realtime/v1",a),
 this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
 this.authUrl = new URL("auth/v1",a),
 this.storageUrl = new URL("storage/v1",a),
 this.functionsUrl = new URL("functions/v1",a);
 const l = `sb-${a.hostname.split(".")[0]}-auth-token`
 , u = {
 db: WT,
 realtime: qT,
 auth: Object.assign(Object.assign({}, HT), {
 storageKey: l
 }),
 global: VT
 }
 , c = YT(n ?? {}, u);
 this.storageKey = (s = c.auth.storageKey) !== null && s !== void 0 ? s : "",
 this.headers = (i = c.global.headers) !== null && i !== void 0 ? i : {},
 c.accessToken ? (this.accessToken = c.accessToken,
 this.auth = new Proxy({},{
 get: (h,f)=>{
 throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)
 }
 })) : this.auth = this._initSupabaseAuthClient((o = c.auth) !== null && o !== void 0 ? o : {}, this.headers, c.global.fetch),
 this.fetch = QT(r, this._getAccessToken.bind(this), c.global.fetch),
 this.realtime = this._initRealtimeClient(Object.assign({
 headers: this.headers,
 accessToken: this._getAccessToken.bind(this)
 }, c.realtime)),
 this.accessToken && this.accessToken().then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:", h)),
 this.rest = new qk(new URL("rest/v1",a).href,{
 headers: this.headers,
 schema: c.db.schema,
 fetch: this.fetch
 }),
 this.storage = new FT(this.storageUrl.href,this.headers,this.fetch,n == null ? void 0 : n.storage),
 c.accessToken || this._listenForAuthEvents()
 }
 get functions() {
 return new Vk(this.functionsUrl.href,{
 headers: this.headers,
 customFetch: this.fetch
 })
 }
 from(e) {
 return this.rest.from(e)
 }
 schema(e) {
 return this.rest.schema(e)
 }
 rpc(e, r={}, n={
 head: !1,
 get: !1,
 count: void 0
 }) {
 return this.rest.rpc(e, r, n)
 }
 channel(e, r={
 config: {}
 }) {
 return this.realtime.channel(e, r)
 }
 getChannels() {
 return this.realtime.getChannels()
 }
 removeChannel(e) {
 return this.realtime.removeChannel(e)
 }
 removeAllChannels() {
 return this.realtime.removeAllChannels()
 }
 async _getAccessToken() {
 var e, r;
 if (this.accessToken)
 return await this.accessToken();
 const {data: n} = await this.auth.getSession();
 return (r = (e = n.session) === null || e === void 0 ? void 0 : e.access_token) !== null && r !== void 0 ? r : this.supabaseKey
 }
 _initSupabaseAuthClient({autoRefreshToken: e, persistSession: r, detectSessionInUrl: n, storage: s, userStorage: i, storageKey: o, flowType: a, lock: l, debug: u, throwOnError: c}, h, f) {
 const d = {
 Authorization: `Bearer ${this.supabaseKey}`,
 apikey: `${this.supabaseKey}`
 };
 return new iP({
 url: this.authUrl.href,
 headers: Object.assign(Object.assign({}, d), h),
 storageKey: o,
 autoRefreshToken: e,
 persistSession: r,
 detectSessionInUrl: n,
 storage: s,
 userStorage: i,
 flowType: a,
 lock: l,
 debug: u,
 throwOnError: c,
 fetch: f,
 hasCustomAuthorizationHeader: Object.keys(this.headers).some(y=>y.toLowerCase() === "authorization")
 })
 }
 _initRealtimeClient(e) {
 return new uT(this.realtimeUrl.href,Object.assign(Object.assign({}, e), {
 params: Object.assign({
 apikey: this.supabaseKey
 }, e == null ? void 0 : e.params)
 }))
 }
 _listenForAuthEvents() {
 return this.auth.onAuthStateChange((r,n)=>{
 this._handleTokenChanged(r, "CLIENT", n == null ? void 0 : n.access_token)
 }
 )
 }
 _handleTokenChanged(e, r, n) {
 (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n,
 this.realtime.setAuth(n)) : e === "SIGNED_OUT" && (this.realtime.setAuth(),
 r == "STORAGE" && this.auth.signOut(),
 this.changedAccessToken = void 0)
 }
}
const aP = (t,e,r)=>new oP(t,e,r);
function lP() {
 if (typeof window < "u" || typeof process > "u")
 return !1;
 const t = process.version;
 if (t == null)
 return !1;
 const e = t.match(/^v(\d+)\./);
 return e ? parseInt(e[1], 10) <= 18 : !1
}
lP() && console.warn("⚠️ Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const uP = "https://xoyslyiawgrtbjloajxo.supabase.co"
 , cP = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhveXNseWlhd2dydGJqbG9hanhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NDAxMzMsImV4cCI6MjA4MDMxNjEzM30.SWY18LDfnnqZpvAJN-74mdj3wL3pfbvcTRJ26-_-PJ0"
 , dP = aP(uP, cP, {
 auth: {
 storage: localStorage,
 persistSession: !0,
 autoRefreshToken: !0
 }
})
 , Iy = b.memo(({emote: t, onSelect: e, isProcessing: r, variant: n})=>x.jsxs("button", {
 onClick: ()=>e(t.id),
 disabled: r,
 className: `px-2 py-2 text-xs font-medium rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed active:opacity-80 ${n === "ob51" ? "bg-orange-600/80 border-orange-400/50 text-white" : "bg-purple-600/80 border-purple-400/50 text-white"}`,
 children: [x.jsx("img", {
 src: t.imageUrl,
 alt: "",
 className: "w-12 h-12 mx-auto mb-1 object-contain",
 loading: "lazy",
 decoding: "async"
 }), x.jsx("div", {
 className: `text-[10px] ${n === "ob51" ? "text-orange-200" : "text-purple-200"}`,
 children: t.id
 })]
}));
Iy.displayName = "EmoteButton";
const Tp = [{
 id: "909000001",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000001"
}, {
 id: "909000002",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000002"
}, {
 id: "909000003",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000003"
}, {
 id: "909000004",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000004"
}, {
 id: "909000005",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000005"
}, {
 id: "909000006",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000006"
}, {
 id: "909000007",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000007"
}, {
 id: "909000008",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000008"
}, {
 id: "909000009",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000009"
}, {
 id: "909000010",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000010"
}, {
 id: "909000011",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000011"
}, {
 id: "909000012",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000012"
}, {
 id: "909000013",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000013"
}, {
 id: "909000014",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000014"
}, {
 id: "909000015",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000015"
}, {
 id: "909000016",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000016"
}, {
 id: "909000017",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000017"
}, {
 id: "909000018",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000018"
}, {
 id: "909000019",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000019"
}, {
 id: "909000020",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000020"
}, {
 id: "909000021",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000021"
}, {
 id: "909000022",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000022"
}, {
 id: "909000023",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000023"
}, {
 id: "909000024",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000024"
}, {
 id: "909000025",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000025"
}, {
 id: "909000026",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000026"
}, {
 id: "909000027",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000027"
}, {
 id: "909000028",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000028"
}, {
 id: "909000029",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000029"
}, {
 id: "909000031",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000031"
}, {
 id: "909000032",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000032"
}, {
 id: "909000033",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000033"
}, {
 id: "909000034",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000034"
}, {
 id: "909000036",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000036"
}, {
 id: "909000037",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000037"
}, {
 id: "909000038",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000038"
}, {
 id: "909000039",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000039"
}, {
 id: "909000040",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000040"
}, {
 id: "909000041",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000041"
}, {
 id: "909000042",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000042"
}, {
 id: "909000043",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000043"
}, {
 id: "909000044",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000044"
}, {
 id: "909000045",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000045"
}, {
 id: "909000046",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000046"
}, {
 id: "909000047",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000047"
}, {
 id: "909000048",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000048"
}, {
 id: "909000049",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000049"
}, {
 id: "909000051",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000051"
}, {
 id: "909000052",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000052"
}, {
 id: "909000053",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000053"
}, {
 id: "909000054",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000054"
}, {
 id: "909000055",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000055"
}, {
 id: "909000056",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000056"
}, {
 id: "909000057",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000057"
}, {
 id: "909000058",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000058"
}, {
 id: "909000059",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000059"
}, {
 id: "909000060",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000060"
}, {
 id: "909000061",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000061"
}, {
 id: "909000062",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000062"
}, {
 id: "909000063",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000063"
}, {
 id: "909000064",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000064"
}, {
 id: "909000065",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000065"
}, {
 id: "909000066",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000066"
}, {
 id: "909000067",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000067"
}, {
 id: "909000068",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000068"
}, {
 id: "909000069",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000069"
}, {
 id: "909000070",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000070"
}, {
 id: "909000071",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000071"
}, {
 id: "909000072",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000072"
}, {
 id: "909000073",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000073"
}, {
 id: "909000074",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000074"
}, {
 id: "909000075",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000075"
}, {
 id: "909000076",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000076"
}, {
 id: "909000077",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000077"
}, {
 id: "909000078",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000078"
}, {
 id: "909000079",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000079"
}, {
 id: "909000080",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000080"
}, {
 id: "909000081",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000081"
}, {
 id: "909000082",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000082"
}, {
 id: "909000083",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000083"
}, {
 id: "909000084",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000084"
}, {
 id: "909000085",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000085"
}, {
 id: "909000086",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000086"
}, {
 id: "909000087",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000087"
}, {
 id: "909000088",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000088"
}, {
 id: "909000089",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000089"
}, {
 id: "909000090",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000090"
}, {
 id: "909000091",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000091"
}, {
 id: "909000092",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000092"
}, {
 id: "909000093",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000093"
}, {
 id: "909000094",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000094"
}, {
 id: "909000095",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000095"
}, {
 id: "909000096",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000096"
}, {
 id: "909000097",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000097"
}, {
 id: "909000098",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000098"
}, {
 id: "909000099",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000099"
}, {
 id: "909000121",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000121"
}, {
 id: "909000122",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000122"
}, {
 id: "909000123",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000123"
}, {
 id: "909000124",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000124"
}, {
 id: "909000125",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909000125"
}]
 , Cp = [{
 id: "909051001",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051001"
}, {
 id: "909051002",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051002"
}, {
 id: "909051003",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051003"
}, {
 id: "909051004",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051004"
}, {
 id: "909051005",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051005"
}, {
 id: "909051006",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051006"
}, {
 id: "909051007",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051007"
}, {
 id: "909051008",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051008"
}, {
 id: "909051009",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051009"
}, {
 id: "909051010",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051010"
}, {
 id: "909051011",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051011"
}, {
 id: "909051012",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051012"
}, {
 id: "909051013",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051013"
}, {
 id: "909051014",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051014"
}, {
 id: "909051015",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051015"
}, {
 id: "909051016",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051016"
}, {
 id: "909051017",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051017"
}, {
 id: "909051018",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051018"
}, {
 id: "909051019",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051019"
}, {
 id: "909051020",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909051020"
}]
 , Fo = {
 id: "909042007",
 imageUrl: "https://godjexaremoteweb.vercel.app/image?itemid=909042007",
 name: "100lv"
}
 , hP = ({onSelectEmote: t, isProcessing: e})=>{
 const [r,n] = b.useState("all")
 , s = r === "all" ? Tp : Cp;
 return x.jsxs("div", {
 className: "space-y-4",
 children: [x.jsxs("div", {
 className: "mb-4",
 children: [x.jsxs("h3", {
 className: "text-sm font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-2 mb-2",
 children: [x.jsx("span", {
 className: "w-2 h-2 bg-yellow-400 rounded-full "
 }), "Special Emote"]
 }), x.jsxs("button", {
 onClick: ()=>t(Fo.id),
 disabled: e,
 className: "px-4 py-3 font-bold rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed bg-yellow-500 border-yellow-400 text-white active:opacity-80",
 children: [x.jsx("img", {
 src: Fo.imageUrl,
 alt: "",
 className: "w-16 h-16 mx-auto mb-2 object-contain"
 }), x.jsx("div", {
 className: "text-sm font-bold text-yellow-100",
 children: Fo.name
 }), x.jsx("div", {
 className: "text-[10px] text-yellow-200/80",
 children: Fo.id
 })]
 })]
 }), x.jsxs("div", {
 className: "flex gap-2 mb-4",
 children: [x.jsxs("button", {
 onClick: ()=>n("all"),
 className: `px-4 py-2 text-sm font-bold rounded-lg border ${r === "all" ? "bg-primary text-black border-primary" : "bg-white text-foreground border-primary/40"}`,
 children: ["ALL (", Tp.length, ")"]
 }), x.jsxs("button", {
 onClick: ()=>n("ob51"),
 className: `px-4 py-2 text-sm font-bold rounded-lg border ${r === "ob51" ? "bg-orange-500 text-white border-orange-400" : "bg-white text-foreground border-primary/40"}`,
 children: ["OB51 (", Cp.length, ")"]
 })]
 }), x.jsxs("h3", {
 className: "text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2",
 children: [x.jsx("span", {
 className: "w-2 h-2 bg-primary rounded-full "
 }), r === "all" ? "Emotes" : "OB51 Emotes", " (", s.length, ")"]
 }), x.jsx("div", {
 className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2",
 children: s.map(i=>x.jsx(Iy, {
 emote: i,
 onSelect: t,
 isProcessing: e,
 variant: r
 }, i.id))
 })]
 })
}
 , fP = b.memo(hP)
 , pP = ()=>{
 const [t,e] = b.useState("")
 , [r,n] = b.useState({
 uid1: "",
 uid2: "",
 uid3: "",
 uid4: "",
 uid5: "",
 uid6: ""
 })
 , [s,i] = b.useState("")
 , [o,a] = b.useState(!1)
 , l = (f,d)=>{
 n(y=>({
 ...y,
 [f]: d
 }))
 }
 , u = async f=>{
 if (!t.trim()) {
 Or({
 title: "Error",
 description: "Please enter Team Code",
 variant: "destructive"
 });
 return
 }
 if (!r.uid1.trim()) {
 Or({
 title: "Error",
 description: "Please enter at least UID1",
 variant: "destructive"
 });
 return
 }
 if (!f.trim()) {
 Or({
 title: "Error",
 description: "Please select or enter Emote ID",
 variant: "destructive"
 });
 return
 }
 a(!0);
 try {
 const {data: d, error: y} = await dP.functions.invoke("process-emote", {
 body: {
 teamCode: t,
 uid1: r.uid1,
 uid2: r.uid2,
 uid3: r.uid3,
 uid4: r.uid4,
 uid5: r.uid5,
 uid6: r.uid6,
 emoteId: f
 }
 });
 if (y)
 throw new Error(y.message);
 if (d != null && d.success)
 Or({
 title: "Emote Sent! 🎉",
 description: "Your emote has been processed successfully!"
 }),
 console.log("API Response:", d);
 else
 throw new Error((d == null ? void 0 : d.error) || "Failed to process emote")
 } catch (d) {
 Or({
 title: "Error",
 description: d instanceof Error ? d.message : "Failed to process emote. Please try again.",
 variant: "destructive"
 }),
 console.error("API Error:", d)
 } finally {
 a(!1)
 }
 }
 , c = f=>{
 i(f),
 u(f)
 }
 , h = ()=>{
 u(s)
 }
 ;
 return x.jsxs("div", {
 className: "space-y-6",
 children: [x.jsxs("div", {
 className: "space-y-2",
 children: [x.jsxs("label", {
 className: "block text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2",
 children: [x.jsx("span", {
 className: "w-2 h-2 bg-primary rounded-full "
 }), "Team Code"]
 }), x.jsx(vs, {
 type: "text",
 placeholder: "Enter Team Code",
 value: t,
 onChange: f=>e(f.target.value),
 className: "bg-white border-primary/30 focus:border-primary"
 })]
 }), x.jsxs("div", {
 className: "space-y-4",
 children: [x.jsxs("h3", {
 className: "text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2",
 children: [x.jsx("span", {
 className: "w-2 h-2 bg-primary rounded-full "
 }), "Player UIDs"]
 }), x.jsx("div", {
 className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
 children: Object.entries(r).map(([f,d],y)=>x.jsxs("div", {
 className: "space-y-1",
 children: [x.jsxs("label", {
 className: "text-xs text-foreground uppercase",
 children: [f.toUpperCase(), " ", y === 0 && x.jsx("span", {
 className: "text-destructive",
 children: "*"
 })]
 }), x.jsx(vs, {
 type: "text",
 placeholder: `Enter ${f.toUpperCase()}`,
 value: d,
 onChange: m=>l(f, m.target.value),
 className: "bg-white border-primary/30 focus:border-primary"
 })]
 }, f))
 })]
 }), x.jsx(fP, {
 onSelectEmote: c,
 isProcessing: o
 }), x.jsxs("div", {
 className: "space-y-2",
 children: [x.jsxs("label", {
 className: "block text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2",
 children: [x.jsx("span", {
 className: "w-2 h-2 bg-primary rounded-full "
 }), "Or Enter Emote ID Manually"]
 }), x.jsx(vs, {
 type: "text",
 placeholder: "Enter Emote ID",
 value: s,
 onChange: f=>i(f.target.value),
 className: "bg-white border-primary/30 focus:border-primary"
 })]
 }), x.jsx(Vd, {
 onClick: h,
 variant: "default",
 size: "xl",
 className: "w-full mt-8",
 disabled: o,
 children: o ? x.jsxs("span", {
 className: "flex items-center gap-2",
 children: [x.jsxs("svg", {
 className: "animate-spin h-5 w-5",
 viewBox: "0 0 24 24",
 children: [x.jsx("circle", {
 className: "opacity-25",
 cx: "12",
 cy: "12",
 r: "10",
 stroke: "currentColor",
 strokeWidth: "4",
 fill: "none"
 }), x.jsx("path", {
 className: "opacity-75",
 fill: "currentColor",
 d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
 })]
 }), "Processing Emote..."]
 }) : x.jsxs(x.Fragment, {
 children: [x.jsx("span", {
 children: "🎮"
 }), "PROCESS EMOTE", x.jsx("span", {
 children: "🎮"
 })]
 })
 })]
 })
}
 , mP = ()=>{
 const [t,e] = b.useState(!1);
 return x.jsxs("div", {
 className: "min-h-screen py-8 px-4",
 children: [x.jsxs("div", {
 className: "fixed inset-0 overflow-hidden pointer-events-none",
 children: [x.jsx("div", {
 className: "absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl "
 }), x.jsx("div", {
 className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl ",
 style: {
 animationDelay: "1s"
 }
 }), x.jsx("div", {
 className: "absolute top-1/2 left-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl ",
 style: {
 animationDelay: "2s"
 }
 })]
 }), x.jsxs("div", {
 className: "relative z-10 max-w-lg mx-auto",
 children: [x.jsx(Nk, {
 className: "mb-8"
 }), x.jsx("div", {
 className: "glass-card rounded-2xl p-6 md:p-8 border-primary animate-border",
 children: t ? x.jsxs(x.Fragment, {
 children: [x.jsxs("h2", {
 className: "text-xl font-orbitron font-bold text-center text-foreground mb-6",
 children: [x.jsx("span", {
 className: "text-primary ",
 children: "●"
 }), " EMOTE PANEL"]
 }), x.jsx(pP, {})]
 }) : x.jsxs(x.Fragment, {
 children: [x.jsxs("h2", {
 className: "text-xl font-orbitron font-bold text-center text-foreground mb-6",
 children: [x.jsx("span", {
 className: "text-primary",
 children: "●"
 }), " LOGIN TO CONTINUE"]
 }), x.jsx(Lk, {
 onLogin: ()=>e(!0)
 })]
 })
 }), x.jsxs("div", {
 className: "mt-8",
 children: [x.jsx("p", {
 className: "text-center text-foreground text-sm mb-4 uppercase tracking-wider",
 children: "Follow Us"
 }), x.jsx(Ik, {})]
 }), x.jsx("footer", {
 className: "mt-12 text-center",
 children: x.jsxs("p", {
 className: "text-xs text-foreground",
 children: ["© 2024 ", x.jsx("span", {
 className: "text-primary",
 children: "ANANT EMOTE WEB"
 }), " | All Rights Reserved"]
 })
 })]
 })]
 })
}
 , gP = b.lazy(()=>y_(()=>import("./NotFound-ByT-zV6z.js"), []))
 , vP = new WS
 , yP = ()=>x.jsx(qS, {
 client: vP,
 children: x.jsxs(bS, {
 children: [x.jsx(n1, {}), x.jsx($1, {}), x.jsx(Ak, {
 children: x.jsxs(Ok, {
 children: [x.jsx(gc, {
 path: "/",
 element: x.jsx(mP, {})
 }), x.jsx(gc, {
 path: "*",
 element: x.jsx(b.Suspense, {
 fallback: x.jsx("div", {
 children: "Loading..."
 }),
 children: x.jsx(gP, {})
 })
 })]
 })
 })]
 })
});
X0(document.getElementById("root")).render(x.jsx(yP, {}));
export {x as j, b as r, mk as u};
