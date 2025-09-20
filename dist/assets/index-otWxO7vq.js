(function () {
  const x = document.createElement("link").relList;
  if (x && x.supports && x.supports("modulepreload")) return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]')) s(T);
  new MutationObserver((T) => {
    for (const O of T)
      if (O.type === "childList")
        for (const H of O.addedNodes)
          H.tagName === "LINK" && H.rel === "modulepreload" && s(H);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(T) {
    const O = {};
    return (
      T.integrity && (O.integrity = T.integrity),
      T.referrerPolicy && (O.referrerPolicy = T.referrerPolicy),
      T.crossOrigin === "use-credentials"
        ? (O.credentials = "include")
        : T.crossOrigin === "anonymous"
        ? (O.credentials = "omit")
        : (O.credentials = "same-origin"),
      O
    );
  }
  function s(T) {
    if (T.ep) return;
    T.ep = !0;
    const O = b(T);
    fetch(T.href, O);
  }
})();
var of = { exports: {} },
  Rn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function Sh() {
  if (Sd) return Rn;
  Sd = 1;
  var f = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.fragment");
  function b(s, T, O) {
    var H = null;
    if (
      (O !== void 0 && (H = "" + O),
      T.key !== void 0 && (H = "" + T.key),
      "key" in T)
    ) {
      O = {};
      for (var Q in T) Q !== "key" && (O[Q] = T[Q]);
    } else O = T;
    return (
      (T = O.ref),
      { $$typeof: f, type: s, key: H, ref: T !== void 0 ? T : null, props: O }
    );
  }
  return (Rn.Fragment = x), (Rn.jsx = b), (Rn.jsxs = b), Rn;
}
var Ad;
function Ah() {
  return Ad || ((Ad = 1), (of.exports = Sh())), of.exports;
}
var h = Ah(),
  rf = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function Th() {
  if (Td) return J;
  Td = 1;
  var f = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    O = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function W(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (k && r[k]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var Sl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    cl = Object.assign,
    yl = {};
  function bl(r, M, q) {
    (this.props = r),
      (this.context = M),
      (this.refs = yl),
      (this.updater = q || Sl);
  }
  (bl.prototype.isReactComponent = {}),
    (bl.prototype.setState = function (r, M) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, r, M, "setState");
    }),
    (bl.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    });
  function Wl() {}
  Wl.prototype = bl.prototype;
  function Fl(r, M, q) {
    (this.props = r),
      (this.context = M),
      (this.refs = yl),
      (this.updater = q || Sl);
  }
  var El = (Fl.prototype = new Wl());
  (El.constructor = Fl), cl(El, bl.prototype), (El.isPureReactComponent = !0);
  var Yl = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    Ml = Object.prototype.hasOwnProperty;
  function Hl(r, M, q, R, C, ll) {
    return (
      (q = ll.ref),
      { $$typeof: f, type: r, key: M, ref: q !== void 0 ? q : null, props: ll }
    );
  }
  function X(r, M) {
    return Hl(r.type, M, void 0, void 0, void 0, r.props);
  }
  function Rl(r) {
    return typeof r == "object" && r !== null && r.$$typeof === f;
  }
  function Ht(r) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (q) {
        return M[q];
      })
    );
  }
  var mt = /\/+/g;
  function _l(r, M) {
    return typeof r == "object" && r !== null && r.key != null
      ? Ht("" + r.key)
      : M.toString(36);
  }
  function Mt() {}
  function Tt(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(Mt, Mt)
            : ((r.status = "pending"),
              r.then(
                function (M) {
                  r.status === "pending" &&
                    ((r.status = "fulfilled"), (r.value = M));
                },
                function (M) {
                  r.status === "pending" &&
                    ((r.status = "rejected"), (r.reason = M));
                }
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function Al(r, M, q, R, C) {
    var ll = typeof r;
    (ll === "undefined" || ll === "boolean") && (r = null);
    var K = !1;
    if (r === null) K = !0;
    else
      switch (ll) {
        case "bigint":
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case f:
            case x:
              K = !0;
              break;
            case D:
              return (K = r._init), Al(K(r._payload), M, q, R, C);
          }
      }
    if (K)
      return (
        (C = C(r)),
        (K = R === "" ? "." + _l(r, 0) : R),
        Yl(C)
          ? ((q = ""),
            K != null && (q = K.replace(mt, "$&/") + "/"),
            Al(C, M, q, "", function (at) {
              return at;
            }))
          : C != null &&
            (Rl(C) &&
              (C = X(
                C,
                q +
                  (C.key == null || (r && r.key === C.key)
                    ? ""
                    : ("" + C.key).replace(mt, "$&/") + "/") +
                  K
              )),
            M.push(C)),
        1
      );
    K = 0;
    var nl = R === "" ? "." : R + ":";
    if (Yl(r))
      for (var hl = 0; hl < r.length; hl++)
        (R = r[hl]), (ll = nl + _l(R, hl)), (K += Al(R, M, q, ll, C));
    else if (((hl = W(r)), typeof hl == "function"))
      for (r = hl.call(r), hl = 0; !(R = r.next()).done; )
        (R = R.value), (ll = nl + _l(R, hl++)), (K += Al(R, M, q, ll, C));
    else if (ll === "object") {
      if (typeof r.then == "function") return Al(Tt(r), M, q, R, C);
      throw (
        ((M = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return K;
  }
  function A(r, M, q) {
    if (r == null) return r;
    var R = [],
      C = 0;
    return (
      Al(r, R, "", "", function (ll) {
        return M.call(q, ll, C++);
      }),
      R
    );
  }
  function U(r) {
    if (r._status === -1) {
      var M = r._result;
      (M = M()),
        M.then(
          function (q) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 1), (r._result = q));
          },
          function (q) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 2), (r._result = q));
          }
        ),
        r._status === -1 && ((r._status = 0), (r._result = M));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var j =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var M = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof r == "object" &&
                r !== null &&
                typeof r.message == "string"
                  ? String(r.message)
                  : String(r),
              error: r,
            });
            if (!window.dispatchEvent(M)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        };
  function fl() {}
  return (
    (J.Children = {
      map: A,
      forEach: function (r, M, q) {
        A(
          r,
          function () {
            M.apply(this, arguments);
          },
          q
        );
      },
      count: function (r) {
        var M = 0;
        return (
          A(r, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (r) {
        return (
          A(r, function (M) {
            return M;
          }) || []
        );
      },
      only: function (r) {
        if (!Rl(r))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return r;
      },
    }),
    (J.Component = bl),
    (J.Fragment = b),
    (J.Profiler = T),
    (J.PureComponent = Fl),
    (J.StrictMode = s),
    (J.Suspense = _),
    (J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (J.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return $.H.useMemoCache(r);
      },
    }),
    (J.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    (J.cloneElement = function (r, M, q) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + "."
        );
      var R = cl({}, r.props),
        C = r.key,
        ll = void 0;
      if (M != null)
        for (K in (M.ref !== void 0 && (ll = void 0),
        M.key !== void 0 && (C = "" + M.key),
        M))
          !Ml.call(M, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && M.ref === void 0) ||
            (R[K] = M[K]);
      var K = arguments.length - 2;
      if (K === 1) R.children = q;
      else if (1 < K) {
        for (var nl = Array(K), hl = 0; hl < K; hl++)
          nl[hl] = arguments[hl + 2];
        R.children = nl;
      }
      return Hl(r.type, C, void 0, void 0, ll, R);
    }),
    (J.createContext = function (r) {
      return (
        (r = {
          $$typeof: H,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: O, _context: r }),
        r
      );
    }),
    (J.createElement = function (r, M, q) {
      var R,
        C = {},
        ll = null;
      if (M != null)
        for (R in (M.key !== void 0 && (ll = "" + M.key), M))
          Ml.call(M, R) &&
            R !== "key" &&
            R !== "__self" &&
            R !== "__source" &&
            (C[R] = M[R]);
      var K = arguments.length - 2;
      if (K === 1) C.children = q;
      else if (1 < K) {
        for (var nl = Array(K), hl = 0; hl < K; hl++)
          nl[hl] = arguments[hl + 2];
        C.children = nl;
      }
      if (r && r.defaultProps)
        for (R in ((K = r.defaultProps), K)) C[R] === void 0 && (C[R] = K[R]);
      return Hl(r, ll, void 0, void 0, null, C);
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (r) {
      return { $$typeof: Q, render: r };
    }),
    (J.isValidElement = Rl),
    (J.lazy = function (r) {
      return { $$typeof: D, _payload: { _status: -1, _result: r }, _init: U };
    }),
    (J.memo = function (r, M) {
      return { $$typeof: S, type: r, compare: M === void 0 ? null : M };
    }),
    (J.startTransition = function (r) {
      var M = $.T,
        q = {};
      $.T = q;
      try {
        var R = r(),
          C = $.S;
        C !== null && C(q, R),
          typeof R == "object" &&
            R !== null &&
            typeof R.then == "function" &&
            R.then(fl, j);
      } catch (ll) {
        j(ll);
      } finally {
        $.T = M;
      }
    }),
    (J.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (J.use = function (r) {
      return $.H.use(r);
    }),
    (J.useActionState = function (r, M, q) {
      return $.H.useActionState(r, M, q);
    }),
    (J.useCallback = function (r, M) {
      return $.H.useCallback(r, M);
    }),
    (J.useContext = function (r) {
      return $.H.useContext(r);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (r, M) {
      return $.H.useDeferredValue(r, M);
    }),
    (J.useEffect = function (r, M, q) {
      var R = $.H;
      if (typeof q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return R.useEffect(r, M);
    }),
    (J.useId = function () {
      return $.H.useId();
    }),
    (J.useImperativeHandle = function (r, M, q) {
      return $.H.useImperativeHandle(r, M, q);
    }),
    (J.useInsertionEffect = function (r, M) {
      return $.H.useInsertionEffect(r, M);
    }),
    (J.useLayoutEffect = function (r, M) {
      return $.H.useLayoutEffect(r, M);
    }),
    (J.useMemo = function (r, M) {
      return $.H.useMemo(r, M);
    }),
    (J.useOptimistic = function (r, M) {
      return $.H.useOptimistic(r, M);
    }),
    (J.useReducer = function (r, M, q) {
      return $.H.useReducer(r, M, q);
    }),
    (J.useRef = function (r) {
      return $.H.useRef(r);
    }),
    (J.useState = function (r) {
      return $.H.useState(r);
    }),
    (J.useSyncExternalStore = function (r, M, q) {
      return $.H.useSyncExternalStore(r, M, q);
    }),
    (J.useTransition = function () {
      return $.H.useTransition();
    }),
    (J.version = "19.1.0"),
    J
  );
}
var Ed;
function zf() {
  return Ed || ((Ed = 1), (rf.exports = Th())), rf.exports;
}
var xl = zf(),
  df = { exports: {} },
  Dn = {},
  mf = { exports: {} },
  hf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function Eh() {
  return (
    zd ||
      ((zd = 1),
      (function (f) {
        function x(A, U) {
          var j = A.length;
          A.push(U);
          l: for (; 0 < j; ) {
            var fl = (j - 1) >>> 1,
              r = A[fl];
            if (0 < T(r, U)) (A[fl] = U), (A[j] = r), (j = fl);
            else break l;
          }
        }
        function b(A) {
          return A.length === 0 ? null : A[0];
        }
        function s(A) {
          if (A.length === 0) return null;
          var U = A[0],
            j = A.pop();
          if (j !== U) {
            A[0] = j;
            l: for (var fl = 0, r = A.length, M = r >>> 1; fl < M; ) {
              var q = 2 * (fl + 1) - 1,
                R = A[q],
                C = q + 1,
                ll = A[C];
              if (0 > T(R, j))
                C < r && 0 > T(ll, R)
                  ? ((A[fl] = ll), (A[C] = j), (fl = C))
                  : ((A[fl] = R), (A[q] = j), (fl = q));
              else if (C < r && 0 > T(ll, j))
                (A[fl] = ll), (A[C] = j), (fl = C);
              else break l;
            }
          }
          return U;
        }
        function T(A, U) {
          var j = A.sortIndex - U.sortIndex;
          return j !== 0 ? j : A.id - U.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var O = performance;
          f.unstable_now = function () {
            return O.now();
          };
        } else {
          var H = Date,
            Q = H.now();
          f.unstable_now = function () {
            return H.now() - Q;
          };
        }
        var _ = [],
          S = [],
          D = 1,
          k = null,
          W = 3,
          Sl = !1,
          cl = !1,
          yl = !1,
          bl = !1,
          Wl = typeof setTimeout == "function" ? setTimeout : null,
          Fl = typeof clearTimeout == "function" ? clearTimeout : null,
          El = typeof setImmediate < "u" ? setImmediate : null;
        function Yl(A) {
          for (var U = b(S); U !== null; ) {
            if (U.callback === null) s(S);
            else if (U.startTime <= A)
              s(S), (U.sortIndex = U.expirationTime), x(_, U);
            else break;
            U = b(S);
          }
        }
        function $(A) {
          if (((yl = !1), Yl(A), !cl))
            if (b(_) !== null) (cl = !0), Ml || ((Ml = !0), _l());
            else {
              var U = b(S);
              U !== null && Al($, U.startTime - A);
            }
        }
        var Ml = !1,
          Hl = -1,
          X = 5,
          Rl = -1;
        function Ht() {
          return bl ? !0 : !(f.unstable_now() - Rl < X);
        }
        function mt() {
          if (((bl = !1), Ml)) {
            var A = f.unstable_now();
            Rl = A;
            var U = !0;
            try {
              l: {
                (cl = !1), yl && ((yl = !1), Fl(Hl), (Hl = -1)), (Sl = !0);
                var j = W;
                try {
                  t: {
                    for (
                      Yl(A), k = b(_);
                      k !== null && !(k.expirationTime > A && Ht());

                    ) {
                      var fl = k.callback;
                      if (typeof fl == "function") {
                        (k.callback = null), (W = k.priorityLevel);
                        var r = fl(k.expirationTime <= A);
                        if (((A = f.unstable_now()), typeof r == "function")) {
                          (k.callback = r), Yl(A), (U = !0);
                          break t;
                        }
                        k === b(_) && s(_), Yl(A);
                      } else s(_);
                      k = b(_);
                    }
                    if (k !== null) U = !0;
                    else {
                      var M = b(S);
                      M !== null && Al($, M.startTime - A), (U = !1);
                    }
                  }
                  break l;
                } finally {
                  (k = null), (W = j), (Sl = !1);
                }
                U = void 0;
              }
            } finally {
              U ? _l() : (Ml = !1);
            }
          }
        }
        var _l;
        if (typeof El == "function")
          _l = function () {
            El(mt);
          };
        else if (typeof MessageChannel < "u") {
          var Mt = new MessageChannel(),
            Tt = Mt.port2;
          (Mt.port1.onmessage = mt),
            (_l = function () {
              Tt.postMessage(null);
            });
        } else
          _l = function () {
            Wl(mt, 0);
          };
        function Al(A, U) {
          Hl = Wl(function () {
            A(f.unstable_now());
          }, U);
        }
        (f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (f.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (X = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return W;
          }),
          (f.unstable_next = function (A) {
            switch (W) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = W;
            }
            var j = W;
            W = U;
            try {
              return A();
            } finally {
              W = j;
            }
          }),
          (f.unstable_requestPaint = function () {
            bl = !0;
          }),
          (f.unstable_runWithPriority = function (A, U) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var j = W;
            W = A;
            try {
              return U();
            } finally {
              W = j;
            }
          }),
          (f.unstable_scheduleCallback = function (A, U, j) {
            var fl = f.unstable_now();
            switch (
              (typeof j == "object" && j !== null
                ? ((j = j.delay),
                  (j = typeof j == "number" && 0 < j ? fl + j : fl))
                : (j = fl),
              A)
            ) {
              case 1:
                var r = -1;
                break;
              case 2:
                r = 250;
                break;
              case 5:
                r = 1073741823;
                break;
              case 4:
                r = 1e4;
                break;
              default:
                r = 5e3;
            }
            return (
              (r = j + r),
              (A = {
                id: D++,
                callback: U,
                priorityLevel: A,
                startTime: j,
                expirationTime: r,
                sortIndex: -1,
              }),
              j > fl
                ? ((A.sortIndex = j),
                  x(S, A),
                  b(_) === null &&
                    A === b(S) &&
                    (yl ? (Fl(Hl), (Hl = -1)) : (yl = !0), Al($, j - fl)))
                : ((A.sortIndex = r),
                  x(_, A),
                  cl || Sl || ((cl = !0), Ml || ((Ml = !0), _l()))),
              A
            );
          }),
          (f.unstable_shouldYield = Ht),
          (f.unstable_wrapCallback = function (A) {
            var U = W;
            return function () {
              var j = W;
              W = U;
              try {
                return A.apply(this, arguments);
              } finally {
                W = j;
              }
            };
          });
      })(hf)),
    hf
  );
}
var Nd;
function zh() {
  return Nd || ((Nd = 1), (mf.exports = Eh())), mf.exports;
}
var vf = { exports: {} },
  Jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function Nh() {
  if (Md) return Jl;
  Md = 1;
  var f = zf();
  function x(_) {
    var S = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        S += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return (
      "Minified React error #" +
      _ +
      "; visit " +
      S +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b() {}
  var s = {
      d: {
        f: b,
        r: function () {
          throw Error(x(522));
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b,
      },
      p: 0,
      findDOMNode: null,
    },
    T = Symbol.for("react.portal");
  function O(_, S, D) {
    var k =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: k == null ? null : "" + k,
      children: _,
      containerInfo: S,
      implementation: D,
    };
  }
  var H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Q(_, S) {
    if (_ === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : "";
  }
  return (
    (Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Jl.createPortal = function (_, S) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(x(299));
      return O(_, S, null, D);
    }),
    (Jl.flushSync = function (_) {
      var S = H.T,
        D = s.p;
      try {
        if (((H.T = null), (s.p = 2), _)) return _();
      } finally {
        (H.T = S), (s.p = D), s.d.f();
      }
    }),
    (Jl.preconnect = function (_, S) {
      typeof _ == "string" &&
        (S
          ? ((S = S.crossOrigin),
            (S =
              typeof S == "string"
                ? S === "use-credentials"
                  ? S
                  : ""
                : void 0))
          : (S = null),
        s.d.C(_, S));
    }),
    (Jl.prefetchDNS = function (_) {
      typeof _ == "string" && s.d.D(_);
    }),
    (Jl.preinit = function (_, S) {
      if (typeof _ == "string" && S && typeof S.as == "string") {
        var D = S.as,
          k = Q(D, S.crossOrigin),
          W = typeof S.integrity == "string" ? S.integrity : void 0,
          Sl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
        D === "style"
          ? s.d.S(_, typeof S.precedence == "string" ? S.precedence : void 0, {
              crossOrigin: k,
              integrity: W,
              fetchPriority: Sl,
            })
          : D === "script" &&
            s.d.X(_, {
              crossOrigin: k,
              integrity: W,
              fetchPriority: Sl,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
      }
    }),
    (Jl.preinitModule = function (_, S) {
      if (typeof _ == "string")
        if (typeof S == "object" && S !== null) {
          if (S.as == null || S.as === "script") {
            var D = Q(S.as, S.crossOrigin);
            s.d.M(_, {
              crossOrigin: D,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
          }
        } else S == null && s.d.M(_);
    }),
    (Jl.preload = function (_, S) {
      if (
        typeof _ == "string" &&
        typeof S == "object" &&
        S !== null &&
        typeof S.as == "string"
      ) {
        var D = S.as,
          k = Q(D, S.crossOrigin);
        s.d.L(_, D, {
          crossOrigin: k,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          type: typeof S.type == "string" ? S.type : void 0,
          fetchPriority:
            typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          referrerPolicy:
            typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
          imageSrcSet:
            typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
          media: typeof S.media == "string" ? S.media : void 0,
        });
      }
    }),
    (Jl.preloadModule = function (_, S) {
      if (typeof _ == "string")
        if (S) {
          var D = Q(S.as, S.crossOrigin);
          s.d.m(_, {
            as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
            crossOrigin: D,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          });
        } else s.d.m(_);
    }),
    (Jl.requestFormReset = function (_) {
      s.d.r(_);
    }),
    (Jl.unstable_batchedUpdates = function (_, S) {
      return _(S);
    }),
    (Jl.useFormState = function (_, S, D) {
      return H.H.useFormState(_, S, D);
    }),
    (Jl.useFormStatus = function () {
      return H.H.useHostTransitionStatus();
    }),
    (Jl.version = "19.1.0"),
    Jl
  );
}
var _d;
function Mh() {
  if (_d) return vf.exports;
  _d = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (x) {
        console.error(x);
      }
  }
  return f(), (vf.exports = Nh()), vf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function _h() {
  if (Od) return Dn;
  Od = 1;
  var f = zh(),
    x = zf(),
    b = Mh();
  function s(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function T(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function O(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function H(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Q(l) {
    if (O(l) !== l) throw Error(s(188));
  }
  function _(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = O(l)), t === null)) throw Error(s(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return Q(n), l;
          if (u === a) return Q(n), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) (e = n), (a = u);
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            (i = !0), (e = n), (a = u);
            break;
          }
          if (c === a) {
            (i = !0), (a = n), (e = u);
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              (i = !0), (e = u), (a = n);
              break;
            }
            if (c === a) {
              (i = !0), (a = u), (e = n);
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t;
  }
  function S(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = S(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var D = Object.assign,
    k = Symbol.for("react.element"),
    W = Symbol.for("react.transitional.element"),
    Sl = Symbol.for("react.portal"),
    cl = Symbol.for("react.fragment"),
    yl = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    Wl = Symbol.for("react.provider"),
    Fl = Symbol.for("react.consumer"),
    El = Symbol.for("react.context"),
    Yl = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    Ml = Symbol.for("react.suspense_list"),
    Hl = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    Rl = Symbol.for("react.activity"),
    Ht = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;
  function _l(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (mt && l[mt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Mt = Symbol.for("react.client.reference");
  function Tt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Mt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case cl:
        return "Fragment";
      case bl:
        return "Profiler";
      case yl:
        return "StrictMode";
      case $:
        return "Suspense";
      case Ml:
        return "SuspenseList";
      case Rl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Sl:
          return "Portal";
        case El:
          return (l.displayName || "Context") + ".Provider";
        case Fl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Yl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Hl:
          return (
            (t = l.displayName || null), t !== null ? t : Tt(l.type) || "Memo"
          );
        case X:
          (t = l._payload), (l = l._init);
          try {
            return Tt(l(t));
          } catch {}
      }
    return null;
  }
  var Al = Array.isArray,
    A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = { pending: !1, data: null, method: null, action: null },
    fl = [],
    r = -1;
  function M(l) {
    return { current: l };
  }
  function q(l) {
    0 > r || ((l.current = fl[r]), (fl[r] = null), r--);
  }
  function R(l, t) {
    r++, (fl[r] = l.current), (l.current = t);
  }
  var C = M(null),
    ll = M(null),
    K = M(null),
    nl = M(null);
  function hl(l, t) {
    switch ((R(K, t), R(ll, l), R(C, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Wr(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Wr(t)), (l = $r(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    q(C), R(C, l);
  }
  function at() {
    q(C), q(ll), q(K);
  }
  function Ft(l) {
    l.memoizedState !== null && R(nl, l);
    var t = C.current,
      e = $r(t, l.type);
    t !== e && (R(ll, l), R(C, e));
  }
  function It(l) {
    ll.current === l && (q(C), q(ll)),
      nl.current === l && (q(nl), (Nn._currentValue = j));
  }
  var Pt = Object.prototype.hasOwnProperty,
    $u = f.unstable_scheduleCallback,
    Fu = f.unstable_cancelCallback,
    Pd = f.unstable_shouldYield,
    lm = f.unstable_requestPaint,
    _t = f.unstable_now,
    tm = f.unstable_getCurrentPriorityLevel,
    _f = f.unstable_ImmediatePriority,
    Of = f.unstable_UserBlockingPriority,
    Hn = f.unstable_NormalPriority,
    em = f.unstable_LowPriority,
    jf = f.unstable_IdlePriority,
    am = f.log,
    nm = f.unstable_setDisableYieldValue,
    Ua = null,
    nt = null;
  function le(l) {
    if (
      (typeof am == "function" && nm(l),
      nt && typeof nt.setStrictMode == "function")
    )
      try {
        nt.setStrictMode(Ua, l);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : cm,
    um = Math.log,
    im = Math.LN2;
  function cm(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((um(l) / im) | 0)) | 0;
  }
  var qn = 256,
    Cn = 4194304;
  function ze(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Bn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~u),
          a !== 0
            ? (n = ze(a))
            : ((i &= c),
              i !== 0
                ? (n = ze(i))
                : e || ((e = c & ~l), e !== 0 && (n = ze(e)))))
        : ((c = a & ~u),
          c !== 0
            ? (n = ze(c))
            : i !== 0
            ? (n = ze(i))
            : e || ((e = a & ~l), e !== 0 && (n = ze(e)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n),
          (e = t & -t),
          u >= e || (u === 32 && (e & 4194048) !== 0))
        ? t
        : n
    );
  }
  function Ha(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function fm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rf() {
    var l = qn;
    return (qn <<= 1), (qn & 4194048) === 0 && (qn = 256), l;
  }
  function Df() {
    var l = Cn;
    return (Cn <<= 1), (Cn & 62914560) === 0 && (Cn = 4194304), l;
  }
  function Iu(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function qa(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function sm(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      o = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var E = 31 - ut(e),
        N = 1 << E;
      (c[E] = 0), (o[E] = -1);
      var g = y[E];
      if (g !== null)
        for (y[E] = null, E = 0; E < g.length; E++) {
          var p = g[E];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~N;
    }
    a !== 0 && Uf(l, a, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function Uf(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - ut(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function Hf(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ut(e),
        n = 1 << a;
      (n & t) | (l[a] & t) && (l[a] |= t), (e &= ~n);
    }
  }
  function Pu(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function li(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function qf() {
    var l = U.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : vd(l.type));
  }
  function om(l, t) {
    var e = U.p;
    try {
      return (U.p = l), t();
    } finally {
      U.p = e;
    }
  }
  var te = Math.random().toString(36).slice(2),
    Kl = "__reactFiber$" + te,
    Il = "__reactProps$" + te,
    Le = "__reactContainer$" + te,
    ti = "__reactEvents$" + te,
    rm = "__reactListeners$" + te,
    dm = "__reactHandles$" + te,
    Cf = "__reactResources$" + te,
    Ca = "__reactMarker$" + te;
  function ei(l) {
    delete l[Kl], delete l[Il], delete l[ti], delete l[rm], delete l[dm];
  }
  function Ke(l) {
    var t = l[Kl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Le] || e[Kl])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = ld(l); l !== null; ) {
            if ((e = l[Kl])) return e;
            l = ld(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function ke(l) {
    if ((l = l[Kl] || l[Le])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ba(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33));
  }
  function Je(l) {
    var t = l[Cf];
    return (
      t ||
        (t = l[Cf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Gl(l) {
    l[Ca] = !0;
  }
  var Bf = new Set(),
    Yf = {};
  function Ne(l, t) {
    We(l, t), We(l + "Capture", t);
  }
  function We(l, t) {
    for (Yf[l] = t, l = 0; l < t.length; l++) Bf.add(t[l]);
  }
  var mm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Gf = {},
    wf = {};
  function hm(l) {
    return Pt.call(wf, l)
      ? !0
      : Pt.call(Gf, l)
      ? !1
      : mm.test(l)
      ? (wf[l] = !0)
      : ((Gf[l] = !0), !1);
  }
  function Yn(l, t, e) {
    if (hm(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Gn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function qt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  var ai, Xf;
  function $e(l) {
    if (ai === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (ai = (t && t[1]) || ""),
          (Xf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ai +
      l +
      Xf
    );
  }
  var ni = !1;
  function ui(l, t) {
    if (!l || ni) return "";
    ni = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (p) {
                  var g = p;
                }
                Reflect.construct(l, [], N);
              } else {
                try {
                  N.call();
                } catch (p) {
                  g = p;
                }
                l.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                g = p;
              }
              (N = l()) &&
                typeof N.catch == "function" &&
                N.catch(function () {});
            }
          } catch (p) {
            if (p && g && typeof p.stack == "string") return [p.stack, g.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        c = u[1];
      if (i && c) {
        var o = i.split(`
`),
          y = c.split(`
`);
        for (
          n = a = 0;
          a < o.length && !o[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === o.length || n === y.length)
          for (
            a = o.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && o[a] !== y[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (o[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || o[a] !== y[n])) {
                  var E =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      E.includes("<anonymous>") &&
                      (E = E.replace("<anonymous>", l.displayName)),
                    E
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (ni = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? $e(e) : "";
  }
  function vm(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return $e(l.type);
      case 16:
        return $e("Lazy");
      case 13:
        return $e("Suspense");
      case 19:
        return $e("SuspenseList");
      case 0:
      case 15:
        return ui(l.type, !1);
      case 11:
        return ui(l.type.render, !1);
      case 1:
        return ui(l.type, !0);
      case 31:
        return $e("Activity");
      default:
        return "";
    }
  }
  function Qf(l) {
    try {
      var t = "";
      do (t += vm(l)), (l = l.return);
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function ht(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Zf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ym(l) {
    var t = Zf(l) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var n = e.get,
        u = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            (a = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function wn(l) {
    l._valueTracker || (l._valueTracker = ym(l));
  }
  function Vf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = Zf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Xn(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var gm = /[\n"\\]/g;
  function vt(l) {
    return l.replace(gm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ii(l, t, e, a, n, u, i, c) {
    (l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ht(t))
          : l.value !== "" + ht(t) && (l.value = "" + ht(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ci(l, i, ht(t))
        : e != null
        ? ci(l, i, ht(e))
        : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + ht(c))
        : l.removeAttribute("name");
  }
  function Lf(l, t, e, a, n, u, i, c) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      t != null || e != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (e = e != null ? "" + ht(e) : ""),
        (t = t != null ? "" + ht(t) : e),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i);
  }
  function ci(l, t, e) {
    (t === "number" && Xn(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function Fe(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        (n = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== n && (l[e].selected = n),
          n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + ht(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          (l[n].selected = !0), a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kf(l, t, e) {
    if (
      t != null &&
      ((t = "" + ht(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + ht(e) : "";
  }
  function kf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Al(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = ht(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a);
  }
  function Ie(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var bm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, e)
      : typeof e != "number" || e === 0 || bm.has(t)
      ? t === "float"
        ? (l.cssFloat = e)
        : (l[t] = ("" + e).trim())
      : (l[t] = e + "px");
  }
  function Wf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && e[n] !== a && Jf(l, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && Jf(l, u, t[u]);
  }
  function fi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
        return !0;
    }
  }
  var pm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    xm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qn(l) {
    return xm.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var si = null;
  function oi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Pe = null,
    la = null;
  function $f(l) {
    var t = ke(l);
    if (t && (l = t.stateNode)) {
      var e = l[Il] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ii(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + vt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Il] || null;
                if (!n) throw Error(s(90));
                ii(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && Vf(a);
          }
          break l;
        case "textarea":
          Kf(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && Fe(l, !!e.multiple, t, !1);
      }
    }
  }
  var ri = !1;
  function Ff(l, t, e) {
    if (ri) return l(t, e);
    ri = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((ri = !1),
        (Pe !== null || la !== null) &&
          (Mu(), Pe && ((t = Pe), (l = la), (la = Pe = null), $f(t), l)))
      )
        for (t = 0; t < l.length; t++) $f(l[t]);
    }
  }
  function Ya(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Il] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(s(231, t, typeof e));
    return e;
  }
  var Ct = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    di = !1;
  if (Ct)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function () {
          di = !0;
        },
      }),
        window.addEventListener("test", Ga, Ga),
        window.removeEventListener("test", Ga, Ga);
    } catch {
      di = !1;
    }
  var ee = null,
    mi = null,
    Zn = null;
  function If() {
    if (Zn) return Zn;
    var l,
      t = mi,
      e = t.length,
      a,
      n = "value" in ee ? ee.value : ee.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++);
    return (Zn = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Vn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ln() {
    return !0;
  }
  function Pf() {
    return !1;
  }
  function Pl(l) {
    function t(e, a, n, u, i) {
      (this._reactName = e),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(u) : u[c]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ln
          : Pf),
        (this.isPropagationStopped = Pf),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Ln));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Ln));
        },
        persist: function () {},
        isPersistent: Ln,
      }),
      t
    );
  }
  var Me = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Kn = Pl(Me),
    wa = D({}, Me, { view: 0, detail: 0 }),
    Sm = Pl(wa),
    hi,
    vi,
    Xa,
    kn = D({}, wa, {
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
      getModifierState: gi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Xa &&
              (Xa && l.type === "mousemove"
                ? ((hi = l.screenX - Xa.screenX), (vi = l.screenY - Xa.screenY))
                : (vi = hi = 0),
              (Xa = l)),
            hi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : vi;
      },
    }),
    ls = Pl(kn),
    Am = D({}, kn, { dataTransfer: 0 }),
    Tm = Pl(Am),
    Em = D({}, wa, { relatedTarget: 0 }),
    yi = Pl(Em),
    zm = D({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nm = Pl(zm),
    Mm = D({}, Me, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    _m = Pl(Mm),
    Om = D({}, Me, { data: 0 }),
    ts = Pl(Om),
    jm = {
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
      MozPrintableKey: "Unidentified",
    },
    Rm = {
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
      224: "Meta",
    },
    Dm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Um(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Dm[l])
      ? !!t[l]
      : !1;
  }
  function gi() {
    return Um;
  }
  var Hm = D({}, wa, {
      key: function (l) {
        if (l.key) {
          var t = jm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Vn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Rm[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gi,
      charCode: function (l) {
        return l.type === "keypress" ? Vn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Vn(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    qm = Pl(Hm),
    Cm = D({}, kn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    es = Pl(Cm),
    Bm = D({}, wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gi,
    }),
    Ym = Pl(Bm),
    Gm = D({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wm = Pl(Gm),
    Xm = D({}, kn, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Qm = Pl(Xm),
    Zm = D({}, Me, { newState: 0, oldState: 0 }),
    Vm = Pl(Zm),
    Lm = [9, 13, 27, 32],
    bi = Ct && "CompositionEvent" in window,
    Qa = null;
  Ct && "documentMode" in document && (Qa = document.documentMode);
  var Km = Ct && "TextEvent" in window && !Qa,
    as = Ct && (!bi || (Qa && 8 < Qa && 11 >= Qa)),
    ns = " ",
    us = !1;
  function is(l, t) {
    switch (l) {
      case "keyup":
        return Lm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cs(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var ta = !1;
  function km(l, t) {
    switch (l) {
      case "compositionend":
        return cs(t);
      case "keypress":
        return t.which !== 32 ? null : ((us = !0), ns);
      case "textInput":
        return (l = t.data), l === ns && us ? null : l;
      default:
        return null;
    }
  }
  function Jm(l, t) {
    if (ta)
      return l === "compositionend" || (!bi && is(l, t))
        ? ((l = If()), (Zn = mi = ee = null), (ta = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return as && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wm = {
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
    week: !0,
  };
  function fs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Wm[l.type] : t === "textarea";
  }
  function ss(l, t, e, a) {
    Pe ? (la ? la.push(a) : (la = [a])) : (Pe = a),
      (t = Uu(t, "onChange")),
      0 < t.length &&
        ((e = new Kn("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var Za = null,
    Va = null;
  function $m(l) {
    Vr(l, 0);
  }
  function Jn(l) {
    var t = Ba(l);
    if (Vf(t)) return l;
  }
  function os(l, t) {
    if (l === "change") return t;
  }
  var rs = !1;
  if (Ct) {
    var pi;
    if (Ct) {
      var xi = "oninput" in document;
      if (!xi) {
        var ds = document.createElement("div");
        ds.setAttribute("oninput", "return;"),
          (xi = typeof ds.oninput == "function");
      }
      pi = xi;
    } else pi = !1;
    rs = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function ms() {
    Za && (Za.detachEvent("onpropertychange", hs), (Va = Za = null));
  }
  function hs(l) {
    if (l.propertyName === "value" && Jn(Va)) {
      var t = [];
      ss(t, Va, l, oi(l)), Ff($m, t);
    }
  }
  function Fm(l, t, e) {
    l === "focusin"
      ? (ms(), (Za = t), (Va = e), Za.attachEvent("onpropertychange", hs))
      : l === "focusout" && ms();
  }
  function Im(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Jn(Va);
  }
  function Pm(l, t) {
    if (l === "click") return Jn(t);
  }
  function l0(l, t) {
    if (l === "input" || l === "change") return Jn(t);
  }
  function t0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var it = typeof Object.is == "function" ? Object.is : t0;
  function La(l, t) {
    if (it(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Pt.call(t, n) || !it(l[n], t[n])) return !1;
    }
    return !0;
  }
  function vs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ys(l, t) {
    var e = vs(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = vs(e);
    }
  }
  function gs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? gs(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function bs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Xn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Xn(l.document);
    }
    return t;
  }
  function Si(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var e0 = Ct && "documentMode" in document && 11 >= document.documentMode,
    ea = null,
    Ai = null,
    Ka = null,
    Ti = !1;
  function ps(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ti ||
      ea == null ||
      ea !== Xn(a) ||
      ((a = ea),
      "selectionStart" in a && Si(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ka && La(Ka, a)) ||
        ((Ka = a),
        (a = Uu(Ai, "onSelect")),
        0 < a.length &&
          ((t = new Kn("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ea))));
  }
  function _e(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var aa = {
      animationend: _e("Animation", "AnimationEnd"),
      animationiteration: _e("Animation", "AnimationIteration"),
      animationstart: _e("Animation", "AnimationStart"),
      transitionrun: _e("Transition", "TransitionRun"),
      transitionstart: _e("Transition", "TransitionStart"),
      transitioncancel: _e("Transition", "TransitionCancel"),
      transitionend: _e("Transition", "TransitionEnd"),
    },
    Ei = {},
    xs = {};
  Ct &&
    ((xs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete aa.animationend.animation,
      delete aa.animationiteration.animation,
      delete aa.animationstart.animation),
    "TransitionEvent" in window || delete aa.transitionend.transition);
  function Oe(l) {
    if (Ei[l]) return Ei[l];
    if (!aa[l]) return l;
    var t = aa[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in xs) return (Ei[l] = t[e]);
    return l;
  }
  var Ss = Oe("animationend"),
    As = Oe("animationiteration"),
    Ts = Oe("animationstart"),
    a0 = Oe("transitionrun"),
    n0 = Oe("transitionstart"),
    u0 = Oe("transitioncancel"),
    Es = Oe("transitionend"),
    zs = new Map(),
    zi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  zi.push("scrollEnd");
  function Et(l, t) {
    zs.set(l, t), Ne(t, [l]);
  }
  var Ns = new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ns.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: Qf(t) }), Ns.set(l, t), t);
    }
    return { value: l, source: t, stack: Qf(t) };
  }
  var gt = [],
    na = 0,
    Ni = 0;
  function Wn() {
    for (var l = na, t = (Ni = na = 0); t < l; ) {
      var e = gt[t];
      gt[t++] = null;
      var a = gt[t];
      gt[t++] = null;
      var n = gt[t];
      gt[t++] = null;
      var u = gt[t];
      if (((gt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n);
      }
      u !== 0 && Ms(e, n, u);
    }
  }
  function $n(l, t, e, a) {
    (gt[na++] = l),
      (gt[na++] = t),
      (gt[na++] = e),
      (gt[na++] = a),
      (Ni |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Mi(l, t, e, a) {
    return $n(l, t, e, a), Fn(l);
  }
  function ua(l, t) {
    return $n(l, null, null, t), Fn(l);
  }
  function Ms(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      (u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return);
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ut(e)),
          (l = u.hiddenUpdates),
          (a = l[n]),
          a === null ? (l[n] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        u)
      : null;
  }
  function Fn(l) {
    if (50 < bn) throw ((bn = 0), (Uc = null), Error(s(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {};
  function i0(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(l, t, e, a) {
    return new i0(l, t, e, a);
  }
  function _i(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Bt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ct(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function _s(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function In(l, t, e, a, n, u) {
    var i = 0;
    if (((a = l), typeof l == "function")) _i(l) && (i = 1);
    else if (typeof l == "string")
      i = fh(l, e, C.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case Rl:
          return (l = ct(31, e, t, n)), (l.elementType = Rl), (l.lanes = u), l;
        case cl:
          return je(e.children, n, u, t);
        case yl:
          (i = 8), (n |= 24);
          break;
        case bl:
          return (
            (l = ct(12, e, t, n | 2)), (l.elementType = bl), (l.lanes = u), l
          );
        case $:
          return (l = ct(13, e, t, n)), (l.elementType = $), (l.lanes = u), l;
        case Ml:
          return (l = ct(19, e, t, n)), (l.elementType = Ml), (l.lanes = u), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Wl:
              case El:
                i = 10;
                break l;
              case Fl:
                i = 9;
                break l;
              case Yl:
                i = 11;
                break l;
              case Hl:
                i = 14;
                break l;
              case X:
                (i = 16), (a = null);
                break l;
            }
          (i = 29),
            (e = Error(s(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = ct(i, e, t, n)), (t.elementType = l), (t.type = a), (t.lanes = u), t
    );
  }
  function je(l, t, e, a) {
    return (l = ct(7, l, a, t)), (l.lanes = e), l;
  }
  function Oi(l, t, e) {
    return (l = ct(6, l, null, t)), (l.lanes = e), l;
  }
  function ji(l, t, e) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ca = [],
    fa = 0,
    Pn = null,
    lu = 0,
    bt = [],
    pt = 0,
    Re = null,
    Yt = 1,
    Gt = "";
  function De(l, t) {
    (ca[fa++] = lu), (ca[fa++] = Pn), (Pn = l), (lu = t);
  }
  function Os(l, t, e) {
    (bt[pt++] = Yt), (bt[pt++] = Gt), (bt[pt++] = Re), (Re = l);
    var a = Yt;
    l = Gt;
    var n = 32 - ut(a) - 1;
    (a &= ~(1 << n)), (e += 1);
    var u = 32 - ut(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      (u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Yt = (1 << (32 - ut(t) + n)) | (e << n) | a),
        (Gt = u + l);
    } else (Yt = (1 << u) | (e << n) | a), (Gt = l);
  }
  function Ri(l) {
    l.return !== null && (De(l, 1), Os(l, 1, 0));
  }
  function Di(l) {
    for (; l === Pn; )
      (Pn = ca[--fa]), (ca[fa] = null), (lu = ca[--fa]), (ca[fa] = null);
    for (; l === Re; )
      (Re = bt[--pt]),
        (bt[pt] = null),
        (Gt = bt[--pt]),
        (bt[pt] = null),
        (Yt = bt[--pt]),
        (bt[pt] = null);
  }
  var $l = null,
    zl = null,
    il = !1,
    Ue = null,
    Ot = !1,
    Ui = Error(s(519));
  function He(l) {
    var t = Error(s(418, ""));
    throw (Wa(yt(t, l)), Ui);
  }
  function js(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Kl] = l), (t[Il] = a), e)) {
      case "dialog":
        el("cancel", t), el("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        el("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < xn.length; e++) el(xn[e], t);
        break;
      case "source":
        el("error", t);
        break;
      case "img":
      case "image":
      case "link":
        el("error", t), el("load", t);
        break;
      case "details":
        el("toggle", t);
        break;
      case "input":
        el("invalid", t),
          Lf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          wn(t);
        break;
      case "select":
        el("invalid", t);
        break;
      case "textarea":
        el("invalid", t), kf(t, a.value, a.defaultValue, a.children), wn(t);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Jr(t.textContent, e)
        ? (a.popover != null && (el("beforetoggle", t), el("toggle", t)),
          a.onScroll != null && el("scroll", t),
          a.onScrollEnd != null && el("scrollend", t),
          a.onClick != null && (t.onclick = Hu),
          (t = !0))
        : (t = !1),
      t || He(l);
  }
  function Rs(l) {
    for ($l = l.return; $l; )
      switch ($l.tag) {
        case 5:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          $l = $l.return;
      }
  }
  function ka(l) {
    if (l !== $l) return !1;
    if (!il) return Rs(l), (il = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Wc(l.type, l.memoizedProps))),
        (e = !e)),
      e && zl && He(l),
      Rs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(s(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((e = l.data), e === "/$")) {
              if (t === 0) {
                zl = Nt(l.nextSibling);
                break l;
              }
              t--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || t++;
          l = l.nextSibling;
        }
        zl = null;
      }
    } else
      t === 27
        ? ((t = zl), be(l.type) ? ((l = Pc), (Pc = null), (zl = l)) : (zl = t))
        : (zl = $l ? Nt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ja() {
    (zl = $l = null), (il = !1);
  }
  function Ds() {
    var l = Ue;
    return (
      l !== null &&
        (et === null ? (et = l) : et.push.apply(et, l), (Ue = null)),
      l
    );
  }
  function Wa(l) {
    Ue === null ? (Ue = [l]) : Ue.push(l);
  }
  var Hi = M(null),
    qe = null,
    wt = null;
  function ae(l, t, e) {
    R(Hi, t._currentValue), (t._currentValue = e);
  }
  function Xt(l) {
    (l._currentValue = Hi.current), q(Hi);
  }
  function qi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Ci(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var o = 0; o < t.length; o++)
            if (c.context === t[o]) {
              (u.lanes |= e),
                (c = u.alternate),
                c !== null && (c.lanes |= e),
                qi(u.return, e, l),
                a || (i = null);
              break l;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(s(341));
        (i.lanes |= e),
          (u = i.alternate),
          u !== null && (u.lanes |= e),
          qi(i, e, l),
          (i = null);
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            (n.return = i.return), (i = n);
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function $a(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = n.type;
          it(n.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (n === nl.current) {
        if (((i = n.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(Nn) : (l = [Nn]));
      }
      n = n.return;
    }
    l !== null && Ci(t, l, e, a), (t.flags |= 262144);
  }
  function tu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!it(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ce(l) {
    (qe = l),
      (wt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function kl(l) {
    return Us(qe, l);
  }
  function eu(l, t) {
    return qe === null && Ce(l), Us(l, t);
  }
  function Us(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), wt === null)) {
      if (l === null) throw Error(s(308));
      (wt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else wt = wt.next = t;
    return e;
  }
  var c0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    f0 = f.unstable_scheduleCallback,
    s0 = f.unstable_NormalPriority,
    ql = {
      $$typeof: El,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Bi() {
    return { controller: new c0(), data: new Map(), refCount: 0 };
  }
  function Fa(l) {
    l.refCount--,
      l.refCount === 0 &&
        f0(s0, function () {
          l.controller.abort();
        });
  }
  var Ia = null,
    Yi = 0,
    sa = 0,
    oa = null;
  function o0(l, t) {
    if (Ia === null) {
      var e = (Ia = []);
      (Yi = 0),
        (sa = wc()),
        (oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Yi++, t.then(Hs, Hs), t;
  }
  function Hs() {
    if (--Yi === 0 && Ia !== null) {
      oa !== null && (oa.status = "fulfilled");
      var l = Ia;
      (Ia = null), (sa = 0), (oa = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function r0(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
            (0, e[n])(void 0);
        }
      ),
      a
    );
  }
  var qs = A.S;
  A.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      o0(l, t),
      qs !== null && qs(l, t);
  };
  var Be = M(null);
  function Gi() {
    var l = Be.current;
    return l !== null ? l : gl.pooledCache;
  }
  function au(l, t) {
    t === null ? R(Be, Be.current) : R(Be, t.pool);
  }
  function Cs() {
    var l = Gi();
    return l === null ? null : { parent: ql._currentValue, pool: l };
  }
  var Pa = Error(s(460)),
    Bs = Error(s(474)),
    nu = Error(s(542)),
    wi = { then: function () {} };
  function Ys(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function uu() {}
  function Gs(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(uu, uu), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Xs(l), l);
      default:
        if (typeof t.status == "string") t.then(uu, uu);
        else {
          if (((l = gl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(s(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Xs(l), l);
        }
        throw ((ln = t), Pa);
    }
  }
  var ln = null;
  function ws() {
    if (ln === null) throw Error(s(459));
    var l = ln;
    return (ln = null), l;
  }
  function Xs(l) {
    if (l === Pa || l === nu) throw Error(s(483));
  }
  var ne = !1;
  function Xi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Qi(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function ue(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (sl & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Fn(l)),
        Ms(l, null, e),
        t
      );
    }
    return $n(l, a, t, e), Fn(l);
  }
  function tn(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Hf(l, e);
    }
  }
  function Zi(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = i) : (u = u.next = i), (e = e.next);
        } while (e !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var Vi = !1;
  function en() {
    if (Vi) {
      var l = oa;
      if (l !== null) throw l;
    }
  }
  function an(l, t, e, a) {
    Vi = !1;
    var n = l.updateQueue;
    ne = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var o = c,
        y = o.next;
      (o.next = null), i === null ? (u = y) : (i.next = y), (i = o);
      var E = l.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (c = E.lastBaseUpdate),
        c !== i &&
          (c === null ? (E.firstBaseUpdate = y) : (c.next = y),
          (E.lastBaseUpdate = o)));
    }
    if (u !== null) {
      var N = n.baseState;
      (i = 0), (E = y = o = null), (c = u);
      do {
        var g = c.lane & -536870913,
          p = g !== c.lane;
        if (p ? (al & g) === g : (a & g) === g) {
          g !== 0 && g === sa && (Vi = !0),
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var L = l,
              Z = c;
            g = t;
            var ml = e;
            switch (Z.tag) {
              case 1:
                if (((L = Z.payload), typeof L == "function")) {
                  N = L.call(ml, N, g);
                  break l;
                }
                N = L;
                break l;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = Z.payload),
                  (g = typeof L == "function" ? L.call(ml, N, g) : L),
                  g == null)
                )
                  break l;
                N = D({}, N, g);
                break l;
              case 2:
                ne = !0;
            }
          }
          (g = c.callback),
            g !== null &&
              ((l.flags |= 64),
              p && (l.flags |= 8192),
              (p = n.callbacks),
              p === null ? (n.callbacks = [g]) : p.push(g));
        } else
          (p = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            E === null ? ((y = E = p), (o = N)) : (E = E.next = p),
            (i |= g);
        if (((c = c.next), c === null)) {
          if (((c = n.shared.pending), c === null)) break;
          (p = c),
            (c = p.next),
            (p.next = null),
            (n.lastBaseUpdate = p),
            (n.shared.pending = null);
        }
      } while (!0);
      E === null && (o = N),
        (n.baseState = o),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = E),
        u === null && (n.shared.lanes = 0),
        (he |= i),
        (l.lanes = i),
        (l.memoizedState = N);
    }
  }
  function Qs(l, t) {
    if (typeof l != "function") throw Error(s(191, l));
    l.call(t);
  }
  function Zs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Qs(e[l], t);
  }
  var ra = M(null),
    iu = M(0);
  function Vs(l, t) {
    (l = Jt), R(iu, l), R(ra, t), (Jt = l | t.baseLanes);
  }
  function Li() {
    R(iu, Jt), R(ra, ra.current);
  }
  function Ki() {
    (Jt = iu.current), q(ra), q(iu);
  }
  var ce = 0,
    F = null,
    rl = null,
    Dl = null,
    cu = !1,
    da = !1,
    Ye = !1,
    fu = 0,
    nn = 0,
    ma = null,
    d0 = 0;
  function Ol() {
    throw Error(s(321));
  }
  function ki(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!it(l[e], t[e])) return !1;
    return !0;
  }
  function Ji(l, t, e, a, n, u) {
    return (
      (ce = u),
      (F = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = l === null || l.memoizedState === null ? _o : Oo),
      (Ye = !1),
      (u = e(a, n)),
      (Ye = !1),
      da && (u = Ks(t, e, a, n)),
      Ls(l),
      u
    );
  }
  function Ls(l) {
    A.H = hu;
    var t = rl !== null && rl.next !== null;
    if (((ce = 0), (Dl = rl = F = null), (cu = !1), (nn = 0), (ma = null), t))
      throw Error(s(300));
    l === null ||
      wl ||
      ((l = l.dependencies), l !== null && tu(l) && (wl = !0));
  }
  function Ks(l, t, e, a) {
    F = l;
    var n = 0;
    do {
      if ((da && (ma = null), (nn = 0), (da = !1), 25 <= n))
        throw Error(s(301));
      if (((n += 1), (Dl = rl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (A.H = p0), (u = t(e, a));
    } while (da);
    return u;
  }
  function m0() {
    var l = A.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? un(t) : t),
      (l = l.useState()[0]),
      (rl !== null ? rl.memoizedState : null) !== l && (F.flags |= 1024),
      t
    );
  }
  function Wi() {
    var l = fu !== 0;
    return (fu = 0), l;
  }
  function $i(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function Fi(l) {
    if (cu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      cu = !1;
    }
    (ce = 0), (Dl = rl = F = null), (da = !1), (nn = fu = 0), (ma = null);
  }
  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Dl === null ? (F.memoizedState = Dl = l) : (Dl = Dl.next = l), Dl;
  }
  function Ul() {
    if (rl === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = rl.next;
    var t = Dl === null ? F.memoizedState : Dl.next;
    if (t !== null) (Dl = t), (rl = l);
    else {
      if (l === null)
        throw F.alternate === null ? Error(s(467)) : Error(s(310));
      (rl = l),
        (l = {
          memoizedState: rl.memoizedState,
          baseState: rl.baseState,
          baseQueue: rl.baseQueue,
          queue: rl.queue,
          next: null,
        }),
        Dl === null ? (F.memoizedState = Dl = l) : (Dl = Dl.next = l);
    }
    return Dl;
  }
  function Ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function un(l) {
    var t = nn;
    return (
      (nn += 1),
      ma === null && (ma = []),
      (l = Gs(ma, l, t)),
      (t = F),
      (Dl === null ? t.memoizedState : Dl.next) === null &&
        ((t = t.alternate),
        (A.H = t === null || t.memoizedState === null ? _o : Oo)),
      l
    );
  }
  function su(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return un(l);
      if (l.$$typeof === El) return kl(l);
    }
    throw Error(s(438, String(l)));
  }
  function Pi(l) {
    var t = null,
      e = F.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = F.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = Ii()), (F.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ht;
    return t.index++, e;
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ou(l) {
    var t = Ul();
    return lc(t, rl, l);
  }
  function lc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        (n.next = u.next), (u.next = i);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var c = (i = null),
        o = null,
        y = t,
        E = !1;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (al & N) === N : (ce & N) === N) {
          var g = y.revertLane;
          if (g === 0)
            o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              N === sa && (E = !0);
          else if ((ce & g) === g) {
            (y = y.next), g === sa && (E = !0);
            continue;
          } else
            (N = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              o === null ? ((c = o = N), (i = u)) : (o = o.next = N),
              (F.lanes |= g),
              (he |= g);
          (N = y.action),
            Ye && e(u, N),
            (u = y.hasEagerState ? y.eagerState : e(u, N));
        } else
          (g = {
            lane: N,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            o === null ? ((c = o = g), (i = u)) : (o = o.next = g),
            (F.lanes |= N),
            (he |= N);
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (o === null ? (i = u) : (o.next = c),
        !it(u, l.memoizedState) && ((wl = !0), E && ((e = oa), e !== null)))
      )
        throw e;
      (l.memoizedState = u),
        (l.baseState = i),
        (l.baseQueue = o),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function tc(l) {
    var t = Ul(),
      e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = (n = n.next);
      do (u = l(u, i.action)), (i = i.next);
      while (i !== n);
      it(u, t.memoizedState) || (wl = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (e.lastRenderedState = u);
    }
    return [u, a];
  }
  function ks(l, t, e) {
    var a = F,
      n = Ul(),
      u = il;
    if (u) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = t();
    var i = !it((rl || n).memoizedState, e);
    i && ((n.memoizedState = e), (wl = !0)), (n = n.queue);
    var c = $s.bind(null, a, n, l);
    if (
      (cn(2048, 8, c, [l]),
      n.getSnapshot !== t || i || (Dl !== null && Dl.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ha(9, ru(), Ws.bind(null, a, n, e, t), null),
        gl === null)
      )
        throw Error(s(349));
      u || (ce & 124) !== 0 || Js(a, t, e);
    }
    return e;
  }
  function Js(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = F.updateQueue),
      t === null
        ? ((t = Ii()), (F.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function Ws(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), Fs(t) && Is(l);
  }
  function $s(l, t, e) {
    return e(function () {
      Fs(t) && Is(l);
    });
  }
  function Fs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !it(l, e);
    } catch {
      return !0;
    }
  }
  function Is(l) {
    var t = ua(l, 2);
    t !== null && dt(t, l, 2);
  }
  function ec(l) {
    var t = lt();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Ye)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ps(l, t, e, a) {
    return (l.baseState = e), lc(l, rl, typeof a == "function" ? a : Qt);
  }
  function h0(l, t, e, a, n) {
    if (mu(l)) throw Error(s(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      A.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = t.pending),
        e === null
          ? ((u.next = t.pending = u), lo(t, u))
          : ((u.next = e.next), (t.pending = e.next = u));
    }
  }
  function lo(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = A.T,
        i = {};
      A.T = i;
      try {
        var c = e(n, a),
          o = A.S;
        o !== null && o(i, c), to(l, t, c);
      } catch (y) {
        ac(l, t, y);
      } finally {
        A.T = u;
      }
    } else
      try {
        (u = e(n, a)), to(l, t, u);
      } catch (y) {
        ac(l, t, y);
      }
  }
  function to(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            eo(l, t, a);
          },
          function (a) {
            return ac(l, t, a);
          }
        )
      : eo(l, t, e);
  }
  function eo(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      ao(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), lo(l, e)));
  }
  function ac(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), ao(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function ao(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function no(l, t) {
    return t;
  }
  function uo(l, t) {
    if (il) {
      var e = gl.formState;
      if (e !== null) {
        l: {
          var a = F;
          if (il) {
            if (zl) {
              t: {
                for (var n = zl, u = Ot; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Nt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (zl = Nt(n.nextSibling)), (a = n.data === "F!");
                break l;
              }
            }
            He(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = lt()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: no,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = zo.bind(null, F, a)),
      (a.dispatch = e),
      (a = ec(!1)),
      (u = fc.bind(null, F, !1, a.queue)),
      (a = lt()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (e = h0.bind(null, F, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function io(l) {
    var t = Ul();
    return co(t, rl, l);
  }
  function co(l, t, e) {
    if (
      ((t = lc(l, t, no)[0]),
      (l = ou(Qt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = un(t);
      } catch (i) {
        throw i === Pa ? nu : i;
      }
    else a = t;
    t = Ul();
    var n = t.queue,
      u = n.dispatch;
    return (
      e !== t.memoizedState &&
        ((F.flags |= 2048), ha(9, ru(), v0.bind(null, n, e), null)),
      [a, u, l]
    );
  }
  function v0(l, t) {
    l.action = t;
  }
  function fo(l) {
    var t = Ul(),
      e = rl;
    if (e !== null) return co(t, e, l);
    Ul(), (t = t.memoizedState), (e = Ul());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function ha(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = F.updateQueue),
      t === null && ((t = Ii()), (F.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function ru() {
    return { destroy: void 0, resource: void 0 };
  }
  function so() {
    return Ul().memoizedState;
  }
  function du(l, t, e, a) {
    var n = lt();
    (a = a === void 0 ? null : a),
      (F.flags |= l),
      (n.memoizedState = ha(1 | t, ru(), e, a));
  }
  function cn(l, t, e, a) {
    var n = Ul();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    rl !== null && a !== null && ki(a, rl.memoizedState.deps)
      ? (n.memoizedState = ha(t, u, e, a))
      : ((F.flags |= l), (n.memoizedState = ha(1 | t, u, e, a)));
  }
  function oo(l, t) {
    du(8390656, 8, l, t);
  }
  function ro(l, t) {
    cn(2048, 8, l, t);
  }
  function mo(l, t) {
    return cn(4, 2, l, t);
  }
  function ho(l, t) {
    return cn(4, 4, l, t);
  }
  function vo(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function yo(l, t, e) {
    (e = e != null ? e.concat([l]) : null), cn(4, 4, vo.bind(null, t, l), e);
  }
  function nc() {}
  function go(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ki(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function bo(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ki(t, a[1])) return a[0];
    if (((a = l()), Ye)) {
      le(!0);
      try {
        l();
      } finally {
        le(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function uc(l, t, e) {
    return e === void 0 || (ce & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = Sr()), (F.lanes |= l), (he |= l), e);
  }
  function po(l, t, e, a) {
    return it(e, t)
      ? e
      : ra.current !== null
      ? ((l = uc(l, e, a)), it(l, t) || (wl = !0), l)
      : (ce & 42) === 0
      ? ((wl = !0), (l.memoizedState = e))
      : ((l = Sr()), (F.lanes |= l), (he |= l), t);
  }
  function xo(l, t, e, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var i = A.T,
      c = {};
    (A.T = c), fc(l, !1, t, e);
    try {
      var o = n(),
        y = A.S;
      if (
        (y !== null && y(c, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var E = r0(o, a);
        fn(l, t, E, rt(l));
      } else fn(l, t, a, rt(l));
    } catch (N) {
      fn(l, t, { then: function () {}, status: "rejected", reason: N }, rt());
    } finally {
      (U.p = u), (A.T = i);
    }
  }
  function y0() {}
  function ic(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var n = So(l).queue;
    xo(
      l,
      n,
      t,
      j,
      e === null
        ? y0
        : function () {
            return Ao(l), e(a);
          }
    );
  }
  function So(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: j,
      baseState: j,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: j,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Ao(l) {
    var t = So(l).next.queue;
    fn(l, t, {}, rt());
  }
  function cc() {
    return kl(Nn);
  }
  function To() {
    return Ul().memoizedState;
  }
  function Eo() {
    return Ul().memoizedState;
  }
  function g0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = rt();
          l = ue(e);
          var a = ie(t, l, e);
          a !== null && (dt(a, t, e), tn(a, t, e)),
            (t = { cache: Bi() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function b0(l, t, e) {
    var a = rt();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mu(l)
        ? No(t, e)
        : ((e = Mi(l, t, e, a)), e !== null && (dt(e, l, a), Mo(e, t, a)));
  }
  function zo(l, t, e) {
    var a = rt();
    fn(l, t, e, a);
  }
  function fn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mu(l)) No(t, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = u(i, e);
          if (((n.hasEagerState = !0), (n.eagerState = c), it(c, i)))
            return $n(l, t, n, 0), gl === null && Wn(), !1;
        } catch {
        } finally {
        }
      if (((e = Mi(l, t, n, a)), e !== null))
        return dt(e, l, a), Mo(e, t, a), !0;
    }
    return !1;
  }
  function fc(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: wc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mu(l))
    ) {
      if (t) throw Error(s(479));
    } else (t = Mi(l, e, a, 2)), t !== null && dt(t, l, 2);
  }
  function mu(l) {
    var t = l.alternate;
    return l === F || (t !== null && t === F);
  }
  function No(l, t) {
    da = cu = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function Mo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Hf(l, e);
    }
  }
  var hu = {
      readContext: kl,
      use: su,
      useCallback: Ol,
      useContext: Ol,
      useEffect: Ol,
      useImperativeHandle: Ol,
      useLayoutEffect: Ol,
      useInsertionEffect: Ol,
      useMemo: Ol,
      useReducer: Ol,
      useRef: Ol,
      useState: Ol,
      useDebugValue: Ol,
      useDeferredValue: Ol,
      useTransition: Ol,
      useSyncExternalStore: Ol,
      useId: Ol,
      useHostTransitionStatus: Ol,
      useFormState: Ol,
      useActionState: Ol,
      useOptimistic: Ol,
      useMemoCache: Ol,
      useCacheRefresh: Ol,
    },
    _o = {
      readContext: kl,
      use: su,
      useCallback: function (l, t) {
        return (lt().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: kl,
      useEffect: oo,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          du(4194308, 4, vo.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return du(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        du(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = lt();
        t = t === void 0 ? null : t;
        var a = l();
        if (Ye) {
          le(!0);
          try {
            l();
          } finally {
            le(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = lt();
        if (e !== void 0) {
          var n = e(t);
          if (Ye) {
            le(!0);
            try {
              e(t);
            } finally {
              le(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (a.queue = l),
          (l = l.dispatch = b0.bind(null, F, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = lt();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = ec(l);
        var t = l.queue,
          e = zo.bind(null, F, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: nc,
      useDeferredValue: function (l, t) {
        var e = lt();
        return uc(e, l, t);
      },
      useTransition: function () {
        var l = ec(!1);
        return (
          (l = xo.bind(null, F, l.queue, !0, !1)),
          (lt().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = F,
          n = lt();
        if (il) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (((e = t()), gl === null)) throw Error(s(349));
          (al & 124) !== 0 || Js(a, t, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: t };
        return (
          (n.queue = u),
          oo($s.bind(null, a, u, l), [l]),
          (a.flags |= 2048),
          ha(9, ru(), Ws.bind(null, a, u, e, t), null),
          e
        );
      },
      useId: function () {
        var l = lt(),
          t = gl.identifierPrefix;
        if (il) {
          var e = Gt,
            a = Yt;
          (e = (a & ~(1 << (32 - ut(a) - 1))).toString(32) + e),
            (t = "«" + t + "R" + e),
            (e = fu++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "»");
        } else (e = d0++), (t = "«" + t + "r" + e.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: cc,
      useFormState: uo,
      useActionState: uo,
      useOptimistic: function (l) {
        var t = lt();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = fc.bind(null, F, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: Pi,
      useCacheRefresh: function () {
        return (lt().memoizedState = g0.bind(null, F));
      },
    },
    Oo = {
      readContext: kl,
      use: su,
      useCallback: go,
      useContext: kl,
      useEffect: ro,
      useImperativeHandle: yo,
      useInsertionEffect: mo,
      useLayoutEffect: ho,
      useMemo: bo,
      useReducer: ou,
      useRef: so,
      useState: function () {
        return ou(Qt);
      },
      useDebugValue: nc,
      useDeferredValue: function (l, t) {
        var e = Ul();
        return po(e, rl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ou(Qt)[0],
          t = Ul().memoizedState;
        return [typeof l == "boolean" ? l : un(l), t];
      },
      useSyncExternalStore: ks,
      useId: To,
      useHostTransitionStatus: cc,
      useFormState: io,
      useActionState: io,
      useOptimistic: function (l, t) {
        var e = Ul();
        return Ps(e, rl, l, t);
      },
      useMemoCache: Pi,
      useCacheRefresh: Eo,
    },
    p0 = {
      readContext: kl,
      use: su,
      useCallback: go,
      useContext: kl,
      useEffect: ro,
      useImperativeHandle: yo,
      useInsertionEffect: mo,
      useLayoutEffect: ho,
      useMemo: bo,
      useReducer: tc,
      useRef: so,
      useState: function () {
        return tc(Qt);
      },
      useDebugValue: nc,
      useDeferredValue: function (l, t) {
        var e = Ul();
        return rl === null ? uc(e, l, t) : po(e, rl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = tc(Qt)[0],
          t = Ul().memoizedState;
        return [typeof l == "boolean" ? l : un(l), t];
      },
      useSyncExternalStore: ks,
      useId: To,
      useHostTransitionStatus: cc,
      useFormState: fo,
      useActionState: fo,
      useOptimistic: function (l, t) {
        var e = Ul();
        return rl !== null
          ? Ps(e, rl, l, t)
          : ((e.baseState = l), [l, e.queue.dispatch]);
      },
      useMemoCache: Pi,
      useCacheRefresh: Eo,
    },
    va = null,
    sn = 0;
  function vu(l) {
    var t = sn;
    return (sn += 1), va === null && (va = []), Gs(va, l, t);
  }
  function on(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function yu(l, t) {
    throw t.$$typeof === k
      ? Error(s(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function jo(l) {
    var t = l._init;
    return t(l._payload);
  }
  function Ro(l) {
    function t(m, d) {
      if (l) {
        var v = m.deletions;
        v === null ? ((m.deletions = [d]), (m.flags |= 16)) : v.push(d);
      }
    }
    function e(m, d) {
      if (!l) return null;
      for (; d !== null; ) t(m, d), (d = d.sibling);
      return null;
    }
    function a(m) {
      for (var d = new Map(); m !== null; )
        m.key !== null ? d.set(m.key, m) : d.set(m.index, m), (m = m.sibling);
      return d;
    }
    function n(m, d) {
      return (m = Bt(m, d)), (m.index = 0), (m.sibling = null), m;
    }
    function u(m, d, v) {
      return (
        (m.index = v),
        l
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((m.flags |= 67108866), d) : v)
              : ((m.flags |= 67108866), d))
          : ((m.flags |= 1048576), d)
      );
    }
    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, d, v, z) {
      return d === null || d.tag !== 6
        ? ((d = Oi(v, m.mode, z)), (d.return = m), d)
        : ((d = n(d, v)), (d.return = m), d);
    }
    function o(m, d, v, z) {
      var B = v.type;
      return B === cl
        ? E(m, d, v.props.children, z, v.key)
        : d !== null &&
          (d.elementType === B ||
            (typeof B == "object" &&
              B !== null &&
              B.$$typeof === X &&
              jo(B) === d.type))
        ? ((d = n(d, v.props)), on(d, v), (d.return = m), d)
        : ((d = In(v.type, v.key, v.props, null, m.mode, z)),
          on(d, v),
          (d.return = m),
          d);
    }
    function y(m, d, v, z) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = ji(v, m.mode, z)), (d.return = m), d)
        : ((d = n(d, v.children || [])), (d.return = m), d);
    }
    function E(m, d, v, z, B) {
      return d === null || d.tag !== 7
        ? ((d = je(v, m.mode, z, B)), (d.return = m), d)
        : ((d = n(d, v)), (d.return = m), d);
    }
    function N(m, d, v) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = Oi("" + d, m.mode, v)), (d.return = m), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case W:
            return (
              (v = In(d.type, d.key, d.props, null, m.mode, v)),
              on(v, d),
              (v.return = m),
              v
            );
          case Sl:
            return (d = ji(d, m.mode, v)), (d.return = m), d;
          case X:
            var z = d._init;
            return (d = z(d._payload)), N(m, d, v);
        }
        if (Al(d) || _l(d))
          return (d = je(d, m.mode, v, null)), (d.return = m), d;
        if (typeof d.then == "function") return N(m, vu(d), v);
        if (d.$$typeof === El) return N(m, eu(m, d), v);
        yu(m, d);
      }
      return null;
    }
    function g(m, d, v, z) {
      var B = d !== null ? d.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return B !== null ? null : c(m, d, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case W:
            return v.key === B ? o(m, d, v, z) : null;
          case Sl:
            return v.key === B ? y(m, d, v, z) : null;
          case X:
            return (B = v._init), (v = B(v._payload)), g(m, d, v, z);
        }
        if (Al(v) || _l(v)) return B !== null ? null : E(m, d, v, z, null);
        if (typeof v.then == "function") return g(m, d, vu(v), z);
        if (v.$$typeof === El) return g(m, d, eu(m, v), z);
        yu(m, v);
      }
      return null;
    }
    function p(m, d, v, z, B) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (m = m.get(v) || null), c(d, m, "" + z, B);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case W:
            return (
              (m = m.get(z.key === null ? v : z.key) || null), o(d, m, z, B)
            );
          case Sl:
            return (
              (m = m.get(z.key === null ? v : z.key) || null), y(d, m, z, B)
            );
          case X:
            var P = z._init;
            return (z = P(z._payload)), p(m, d, v, z, B);
        }
        if (Al(z) || _l(z)) return (m = m.get(v) || null), E(d, m, z, B, null);
        if (typeof z.then == "function") return p(m, d, v, vu(z), B);
        if (z.$$typeof === El) return p(m, d, v, eu(d, z), B);
        yu(d, z);
      }
      return null;
    }
    function L(m, d, v, z) {
      for (
        var B = null, P = null, w = d, V = (d = 0), Ql = null;
        w !== null && V < v.length;
        V++
      ) {
        w.index > V ? ((Ql = w), (w = null)) : (Ql = w.sibling);
        var ul = g(m, w, v[V], z);
        if (ul === null) {
          w === null && (w = Ql);
          break;
        }
        l && w && ul.alternate === null && t(m, w),
          (d = u(ul, d, V)),
          P === null ? (B = ul) : (P.sibling = ul),
          (P = ul),
          (w = Ql);
      }
      if (V === v.length) return e(m, w), il && De(m, V), B;
      if (w === null) {
        for (; V < v.length; V++)
          (w = N(m, v[V], z)),
            w !== null &&
              ((d = u(w, d, V)),
              P === null ? (B = w) : (P.sibling = w),
              (P = w));
        return il && De(m, V), B;
      }
      for (w = a(w); V < v.length; V++)
        (Ql = p(w, m, V, v[V], z)),
          Ql !== null &&
            (l &&
              Ql.alternate !== null &&
              w.delete(Ql.key === null ? V : Ql.key),
            (d = u(Ql, d, V)),
            P === null ? (B = Ql) : (P.sibling = Ql),
            (P = Ql));
      return (
        l &&
          w.forEach(function (Te) {
            return t(m, Te);
          }),
        il && De(m, V),
        B
      );
    }
    function Z(m, d, v, z) {
      if (v == null) throw Error(s(151));
      for (
        var B = null, P = null, w = d, V = (d = 0), Ql = null, ul = v.next();
        w !== null && !ul.done;
        V++, ul = v.next()
      ) {
        w.index > V ? ((Ql = w), (w = null)) : (Ql = w.sibling);
        var Te = g(m, w, ul.value, z);
        if (Te === null) {
          w === null && (w = Ql);
          break;
        }
        l && w && Te.alternate === null && t(m, w),
          (d = u(Te, d, V)),
          P === null ? (B = Te) : (P.sibling = Te),
          (P = Te),
          (w = Ql);
      }
      if (ul.done) return e(m, w), il && De(m, V), B;
      if (w === null) {
        for (; !ul.done; V++, ul = v.next())
          (ul = N(m, ul.value, z)),
            ul !== null &&
              ((d = u(ul, d, V)),
              P === null ? (B = ul) : (P.sibling = ul),
              (P = ul));
        return il && De(m, V), B;
      }
      for (w = a(w); !ul.done; V++, ul = v.next())
        (ul = p(w, m, V, ul.value, z)),
          ul !== null &&
            (l &&
              ul.alternate !== null &&
              w.delete(ul.key === null ? V : ul.key),
            (d = u(ul, d, V)),
            P === null ? (B = ul) : (P.sibling = ul),
            (P = ul));
      return (
        l &&
          w.forEach(function (xh) {
            return t(m, xh);
          }),
        il && De(m, V),
        B
      );
    }
    function ml(m, d, v, z) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === cl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case W:
            l: {
              for (var B = v.key; d !== null; ) {
                if (d.key === B) {
                  if (((B = v.type), B === cl)) {
                    if (d.tag === 7) {
                      e(m, d.sibling),
                        (z = n(d, v.props.children)),
                        (z.return = m),
                        (m = z);
                      break l;
                    }
                  } else if (
                    d.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === X &&
                      jo(B) === d.type)
                  ) {
                    e(m, d.sibling),
                      (z = n(d, v.props)),
                      on(z, v),
                      (z.return = m),
                      (m = z);
                    break l;
                  }
                  e(m, d);
                  break;
                } else t(m, d);
                d = d.sibling;
              }
              v.type === cl
                ? ((z = je(v.props.children, m.mode, z, v.key)),
                  (z.return = m),
                  (m = z))
                : ((z = In(v.type, v.key, v.props, null, m.mode, z)),
                  on(z, v),
                  (z.return = m),
                  (m = z));
            }
            return i(m);
          case Sl:
            l: {
              for (B = v.key; d !== null; ) {
                if (d.key === B)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    e(m, d.sibling),
                      (z = n(d, v.children || [])),
                      (z.return = m),
                      (m = z);
                    break l;
                  } else {
                    e(m, d);
                    break;
                  }
                else t(m, d);
                d = d.sibling;
              }
              (z = ji(v, m.mode, z)), (z.return = m), (m = z);
            }
            return i(m);
          case X:
            return (B = v._init), (v = B(v._payload)), ml(m, d, v, z);
        }
        if (Al(v)) return L(m, d, v, z);
        if (_l(v)) {
          if (((B = _l(v)), typeof B != "function")) throw Error(s(150));
          return (v = B.call(v)), Z(m, d, v, z);
        }
        if (typeof v.then == "function") return ml(m, d, vu(v), z);
        if (v.$$typeof === El) return ml(m, d, eu(m, v), z);
        yu(m, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (e(m, d.sibling), (z = n(d, v)), (z.return = m), (m = z))
            : (e(m, d), (z = Oi(v, m.mode, z)), (z.return = m), (m = z)),
          i(m))
        : e(m, d);
    }
    return function (m, d, v, z) {
      try {
        sn = 0;
        var B = ml(m, d, v, z);
        return (va = null), B;
      } catch (w) {
        if (w === Pa || w === nu) throw w;
        var P = ct(29, w, null, m.mode);
        return (P.lanes = z), (P.return = m), P;
      } finally {
      }
    };
  }
  var ya = Ro(!0),
    Do = Ro(!1),
    xt = M(null),
    jt = null;
  function fe(l) {
    var t = l.alternate;
    R(Cl, Cl.current & 1),
      R(xt, l),
      jt === null &&
        (t === null || ra.current !== null || t.memoizedState !== null) &&
        (jt = l);
  }
  function Uo(l) {
    if (l.tag === 22) {
      if ((R(Cl, Cl.current), R(xt, l), jt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (jt = l);
      }
    } else se();
  }
  function se() {
    R(Cl, Cl.current), R(xt, xt.current);
  }
  function Zt(l) {
    q(xt), jt === l && (jt = null), q(Cl);
  }
  var Cl = M(0);
  function gu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || Ic(e))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function sc(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : D({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var oc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        n = ue(a);
      (n.payload = t),
        e != null && (n.callback = e),
        (t = ie(l, n, a)),
        t !== null && (dt(t, l, a), tn(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        n = ue(a);
      (n.tag = 1),
        (n.payload = t),
        e != null && (n.callback = e),
        (t = ie(l, n, a)),
        t !== null && (dt(t, l, a), tn(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = rt(),
        a = ue(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = ie(l, a, e)),
        t !== null && (dt(t, l, e), tn(t, l, e));
    },
  };
  function Ho(l, t, e, a, n, u, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !La(e, a) || !La(n, u)
        : !0
    );
  }
  function qo(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && oc.enqueueReplaceState(t, t.state, null);
  }
  function Ge(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = D({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  var bu =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function Co(l) {
    bu(l);
  }
  function Bo(l) {
    console.error(l);
  }
  function Yo(l) {
    bu(l);
  }
  function pu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Go(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function rc(l, t, e) {
    return (
      (e = ue(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        pu(l, t);
      }),
      e
    );
  }
  function wo(l) {
    return (l = ue(l)), (l.tag = 3), l;
  }
  function Xo(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          Go(t, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        Go(t, e, a),
          typeof n != "function" &&
            (ve === null ? (ve = new Set([this])) : ve.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function x0(l, t, e, a, n) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && $a(t, e, n, !0),
        (e = xt.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              jt === null ? qc() : e.alternate === null && Nl === 0 && (Nl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === wi
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Bc(l, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === wi
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Bc(l, a, n)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return Bc(l, a, n), qc(), !1;
    }
    if (il)
      return (
        (t = xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Ui && ((l = Error(s(422), { cause: a })), Wa(yt(l, e))))
          : (a !== Ui && ((t = Error(s(423), { cause: a })), Wa(yt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = yt(a, e)),
            (n = rc(l.stateNode, a, n)),
            Zi(l, n),
            Nl !== 4 && (Nl = 2)),
        !1
      );
    var u = Error(s(520), { cause: a });
    if (
      ((u = yt(u, e)),
      gn === null ? (gn = [u]) : gn.push(u),
      Nl !== 4 && (Nl = 2),
      t === null)
    )
      return !0;
    (a = yt(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = n & -n),
            (e.lanes |= l),
            (l = rc(e.stateNode, a, l)),
            Zi(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ve === null || !ve.has(u)))))
          )
            return (
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (n = wo(n)),
              Xo(n, l, e, a),
              Zi(e, n),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Qo = Error(s(461)),
    wl = !1;
  function Zl(l, t, e, a) {
    t.child = l === null ? Do(t, null, e, a) : ya(t, l.child, e, a);
  }
  function Zo(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Ce(t),
      (a = Ji(l, t, e, i, u, n)),
      (c = Wi()),
      l !== null && !wl
        ? ($i(l, t, n), Vt(l, t, n))
        : (il && c && Ri(t), (t.flags |= 1), Zl(l, t, a, n), t.child)
    );
  }
  function Vo(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" &&
        !_i(u) &&
        u.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = u), Lo(l, t, u, a, n))
        : ((l = In(e.type, null, a, t, t.mode, n)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((u = l.child), !pc(l, n))) {
      var i = u.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : La), e(i, a) && l.ref === t.ref)
      )
        return Vt(l, t, n);
    }
    return (
      (t.flags |= 1),
      (l = Bt(u, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Lo(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (La(u, a) && l.ref === t.ref)
        if (((wl = !1), (t.pendingProps = a = u), pc(l, n)))
          (l.flags & 131072) !== 0 && (wl = !0);
        else return (t.lanes = l.lanes), Vt(l, t, n);
    }
    return dc(l, t, e, a, n);
  }
  function Ko(l, t, e) {
    var a = t.pendingProps,
      n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | e : e), l !== null)) {
          for (n = t.child = l.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = u & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return ko(l, t, a, e);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && au(t, u !== null ? u.cachePool : null),
          u !== null ? Vs(t, u) : Li(),
          Uo(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          ko(l, t, u !== null ? u.baseLanes | e : e, e)
        );
    } else
      u !== null
        ? (au(t, u.cachePool), Vs(t, u), se(), (t.memoizedState = null))
        : (l !== null && au(t, null), Li(), se());
    return Zl(l, t, n, e), t.child;
  }
  function ko(l, t, e, a) {
    var n = Gi();
    return (
      (n = n === null ? null : { parent: ql._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && au(t, null),
      Li(),
      Uo(t),
      l !== null && $a(l, t, a, !0),
      null
    );
  }
  function xu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function dc(l, t, e, a, n) {
    return (
      Ce(t),
      (e = Ji(l, t, e, a, void 0, n)),
      (a = Wi()),
      l !== null && !wl
        ? ($i(l, t, n), Vt(l, t, n))
        : (il && a && Ri(t), (t.flags |= 1), Zl(l, t, e, n), t.child)
    );
  }
  function Jo(l, t, e, a, n, u) {
    return (
      Ce(t),
      (t.updateQueue = null),
      (e = Ks(t, a, e, n)),
      Ls(l),
      (a = Wi()),
      l !== null && !wl
        ? ($i(l, t, u), Vt(l, t, u))
        : (il && a && Ri(t), (t.flags |= 1), Zl(l, t, e, u), t.child)
    );
  }
  function Wo(l, t, e, a, n) {
    if ((Ce(t), t.stateNode === null)) {
      var u = ia,
        i = e.contextType;
      typeof i == "object" && i !== null && (u = kl(i)),
        (u = new e(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = oc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Xi(t),
        (i = e.contextType),
        (u.context = typeof i == "object" && i !== null ? kl(i) : ia),
        (u.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (sc(t, e, i, a), (u.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && oc.enqueueReplaceState(u, u.state, null),
          an(t, a, u, n),
          en(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps,
        o = Ge(e, c);
      u.props = o;
      var y = u.context,
        E = e.contextType;
      (i = ia), typeof E == "object" && E !== null && (i = kl(E));
      var N = e.getDerivedStateFromProps;
      (E =
        typeof N == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        E ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c || y !== i) && qo(t, u, a, i)),
        (ne = !1);
      var g = t.memoizedState;
      (u.state = g),
        an(t, a, u, n),
        en(),
        (y = t.memoizedState),
        c || g !== y || ne
          ? (typeof N == "function" && (sc(t, e, N, a), (y = t.memoizedState)),
            (o = ne || Ho(t, e, o, a, g, y, i))
              ? (E ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = i),
            (a = o))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        Qi(l, t),
        (i = t.memoizedProps),
        (E = Ge(e, i)),
        (u.props = E),
        (N = t.pendingProps),
        (g = u.context),
        (y = e.contextType),
        (o = ia),
        typeof y == "object" && y !== null && (o = kl(y)),
        (c = e.getDerivedStateFromProps),
        (y =
          typeof c == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== N || g !== o) && qo(t, u, a, o)),
        (ne = !1),
        (g = t.memoizedState),
        (u.state = g),
        an(t, a, u, n),
        en();
      var p = t.memoizedState;
      i !== N ||
      g !== p ||
      ne ||
      (l !== null && l.dependencies !== null && tu(l.dependencies))
        ? (typeof c == "function" && (sc(t, e, c, a), (p = t.memoizedState)),
          (E =
            ne ||
            Ho(t, e, E, a, g, p, o) ||
            (l !== null && l.dependencies !== null && tu(l.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, p, o),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, p, o)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = p)),
          (u.props = a),
          (u.state = p),
          (u.context = o),
          (a = E))
        : (typeof u.componentDidUpdate != "function" ||
            (i === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      xu(l, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = ya(t, l.child, null, n)),
              (t.child = ya(t, null, e, n)))
            : Zl(l, t, e, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = Vt(l, t, n)),
      l
    );
  }
  function $o(l, t, e, a) {
    return Ja(), (t.flags |= 256), Zl(l, t, e, a), t.child;
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function hc(l) {
    return { baseLanes: l, cachePool: Cs() };
  }
  function vc(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= St), l;
  }
  function Fo(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Cl.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (il) {
        if ((n ? fe(t) : se(), il)) {
          var c = zl,
            o;
          if ((o = c)) {
            l: {
              for (o = c, c = Ot; o.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((o = Nt(o.nextSibling)), o === null)) {
                  c = null;
                  break l;
                }
              }
              c = o;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: Re !== null ? { id: Yt, overflow: Gt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (o = ct(18, null, null, 0)),
                (o.stateNode = c),
                (o.return = t),
                (t.child = o),
                ($l = t),
                (zl = null),
                (o = !0))
              : (o = !1);
          }
          o || He(t);
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return Ic(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Zt(t);
      }
      return (
        (c = a.children),
        (a = a.fallback),
        n
          ? (se(),
            (n = t.mode),
            (c = Su({ mode: "hidden", children: c }, n)),
            (a = je(a, n, e, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (n = t.child),
            (n.memoizedState = hc(e)),
            (n.childLanes = vc(l, i, e)),
            (t.memoizedState = mc),
            a)
          : (fe(t), yc(t, c))
      );
    }
    if (
      ((o = l.memoizedState), o !== null && ((c = o.dehydrated), c !== null))
    ) {
      if (u)
        t.flags & 256
          ? (fe(t), (t.flags &= -257), (t = gc(l, t, e)))
          : t.memoizedState !== null
          ? (se(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (se(),
            (n = a.fallback),
            (c = t.mode),
            (a = Su({ mode: "visible", children: a.children }, c)),
            (n = je(n, c, e, null)),
            (n.flags |= 2),
            (a.return = t),
            (n.return = t),
            (a.sibling = n),
            (t.child = a),
            ya(t, l.child, null, e),
            (a = t.child),
            (a.memoizedState = hc(e)),
            (a.childLanes = vc(l, i, e)),
            (t.memoizedState = mc),
            (t = n));
      else if ((fe(t), Ic(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
        (i = y),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = i),
          Wa({ value: a, source: null, stack: null }),
          (t = gc(l, t, e));
      } else if (
        (wl || $a(l, t, e, !1), (i = (e & l.childLanes) !== 0), wl || i)
      ) {
        if (
          ((i = gl),
          i !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : Pu(a)),
            (a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== o.retryLane))
        )
          throw ((o.retryLane = a), ua(l, a), dt(i, l, a), Qo);
        c.data === "$?" || qc(), (t = gc(l, t, e));
      } else
        c.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = o.treeContext),
            (zl = Nt(c.nextSibling)),
            ($l = t),
            (il = !0),
            (Ue = null),
            (Ot = !1),
            l !== null &&
              ((bt[pt++] = Yt),
              (bt[pt++] = Gt),
              (bt[pt++] = Re),
              (Yt = l.id),
              (Gt = l.overflow),
              (Re = t)),
            (t = yc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (se(),
        (n = a.fallback),
        (c = t.mode),
        (o = l.child),
        (y = o.sibling),
        (a = Bt(o, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = o.subtreeFlags & 65011712),
        y !== null ? (n = Bt(y, n)) : ((n = je(n, c, e, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = hc(e))
          : ((o = c.cachePool),
            o !== null
              ? ((y = ql._currentValue),
                (o = o.parent !== y ? { parent: y, pool: y } : o))
              : (o = Cs()),
            (c = { baseLanes: c.baseLanes | e, cachePool: o })),
        (n.memoizedState = c),
        (n.childLanes = vc(l, i, e)),
        (t.memoizedState = mc),
        a)
      : (fe(t),
        (e = l.child),
        (l = e.sibling),
        (e = Bt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function yc(l, t) {
    return (
      (t = Su({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Su(l, t) {
    return (
      (l = ct(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function gc(l, t, e) {
    return (
      ya(t, l.child, null, e),
      (l = yc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Io(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qi(l.return, t, e);
  }
  function bc(l, t, e, a, n) {
    var u = l.memoizedState;
    u === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = e),
        (u.tailMode = n));
  }
  function Po(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((Zl(l, t, a.children, e), (a = Cl.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Io(l, e, t);
          else if (l.tag === 19) Io(l, e, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((R(Cl, a), n)) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          (l = e.alternate),
            l !== null && gu(l) === null && (n = e),
            (e = e.sibling);
        (e = n),
          e === null
            ? ((n = t.child), (t.child = null))
            : ((n = e.sibling), (e.sibling = null)),
          bc(t, !1, n, e, u);
        break;
      case "backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && gu(l) === null)) {
            t.child = n;
            break;
          }
          (l = n.sibling), (n.sibling = e), (e = n), (n = l);
        }
        bc(t, !0, e, null, u);
        break;
      case "together":
        bc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (he |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if (($a(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Bt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (e = e.sibling = Bt(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function pc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && tu(l)));
  }
  function S0(l, t, e) {
    switch (t.tag) {
      case 3:
        hl(t, t.stateNode.containerInfo),
          ae(t, ql, l.memoizedState.cache),
          Ja();
        break;
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        hl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ae(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (fe(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
            ? Fo(l, t, e)
            : (fe(t), (l = Vt(l, t, e)), l !== null ? l.sibling : null);
        fe(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || ($a(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Po(l, t, e);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          R(Cl, Cl.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ko(l, t, e);
      case 24:
        ae(t, ql, l.memoizedState.cache);
    }
    return Vt(l, t, e);
  }
  function lr(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) wl = !0;
      else {
        if (!pc(l, e) && (t.flags & 128) === 0) return (wl = !1), S0(l, t, e);
        wl = (l.flags & 131072) !== 0;
      }
    else (wl = !1), il && (t.flags & 1048576) !== 0 && Os(t, lu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            _i(a)
              ? ((l = Ge(a, l)), (t.tag = 1), (t = Wo(null, t, a, l, e)))
              : ((t.tag = 0), (t = dc(null, t, a, l, e)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === Yl)) {
                (t.tag = 11), (t = Zo(null, t, a, l, e));
                break l;
              } else if (n === Hl) {
                (t.tag = 14), (t = Vo(null, t, a, l, e));
                break l;
              }
            }
            throw ((t = Tt(a) || a), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return dc(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (n = Ge(a, t.pendingProps)), Wo(l, t, a, n, e);
      case 3:
        l: {
          if ((hl(t, t.stateNode.containerInfo), l === null))
            throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), Qi(l, t), an(t, a, null, e);
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ae(t, ql, a),
            a !== u.cache && Ci(t, [ql], e, !0),
            en(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = $o(l, t, a, e);
              break l;
            } else if (a !== n) {
              (n = yt(Error(s(424)), t)), Wa(n), (t = $o(l, t, a, e));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                zl = Nt(l.firstChild),
                  $l = t,
                  il = !0,
                  Ue = null,
                  Ot = !0,
                  e = Do(t, null, a, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Ja(), a === n)) {
              t = Vt(l, t, e);
              break l;
            }
            Zl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          xu(l, t),
          l === null
            ? (e = nd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : il ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = qu(K.current).createElement(e)),
                (a[Kl] = t),
                (a[Il] = l),
                Ll(a, e, l),
                Gl(a),
                (t.stateNode = a))
            : (t.memoizedState = nd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ft(t),
          l === null &&
            il &&
            ((a = t.stateNode = td(t.type, t.pendingProps, K.current)),
            ($l = t),
            (Ot = !0),
            (n = zl),
            be(t.type) ? ((Pc = n), (zl = Nt(a.firstChild))) : (zl = n)),
          Zl(l, t, t.pendingProps.children, e),
          xu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            il &&
            ((n = a = zl) &&
              ((a = W0(a, t.type, t.pendingProps, Ot)),
              a !== null
                ? ((t.stateNode = a),
                  ($l = t),
                  (zl = Nt(a.firstChild)),
                  (Ot = !1),
                  (n = !0))
                : (n = !1)),
            n || He(t)),
          Ft(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = u.children),
          Wc(n, u) ? (a = null) : i !== null && Wc(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Ji(l, t, m0, null, null, e)), (Nn._currentValue = n)),
          xu(l, t),
          Zl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            il &&
            ((l = e = zl) &&
              ((e = $0(e, t.pendingProps, Ot)),
              e !== null
                ? ((t.stateNode = e), ($l = t), (zl = null), (l = !0))
                : (l = !1)),
            l || He(t)),
          null
        );
      case 13:
        return Fo(l, t, e);
      case 4:
        return (
          hl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = ya(t, null, a, e)) : Zl(l, t, a, e),
          t.child
        );
      case 11:
        return Zo(l, t, t.type, t.pendingProps, e);
      case 7:
        return Zl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Zl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Zl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          ae(t, t.type, a.value),
          Zl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ce(t),
          (n = kl(n)),
          (a = a(n)),
          (t.flags |= 1),
          Zl(l, t, a, e),
          t.child
        );
      case 14:
        return Vo(l, t, t.type, t.pendingProps, e);
      case 15:
        return Lo(l, t, t.type, t.pendingProps, e);
      case 19:
        return Po(l, t, e);
      case 31:
        return (
          (a = t.pendingProps),
          (e = t.mode),
          (a = { mode: a.mode, children: a.children }),
          l === null
            ? ((e = Su(a, e)),
              (e.ref = t.ref),
              (t.child = e),
              (e.return = t),
              (t = e))
            : ((e = Bt(l.child, a)),
              (e.ref = t.ref),
              (t.child = e),
              (e.return = t),
              (t = e)),
          t
        );
      case 22:
        return Ko(l, t, e);
      case 24:
        return (
          Ce(t),
          (a = kl(ql)),
          l === null
            ? ((n = Gi()),
              n === null &&
                ((n = gl),
                (u = Bi()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= e),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Xi(t),
              ae(t, ql, n))
            : ((l.lanes & e) !== 0 && (Qi(l, t), an(t, null, null, e), en()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ae(t, ql, a))
                : ((a = u.cache),
                  ae(t, ql, a),
                  a !== n.cache && Ci(t, [ql], e, !0))),
          Zl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function tr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !sd(t))) {
      if (
        ((t = xt.current),
        t !== null &&
          ((al & 4194048) === al
            ? jt !== null
            : ((al & 62914560) !== al && (al & 536870912) === 0) || t !== jt))
      )
        throw ((ln = wi), Bs);
      l.flags |= 8192;
    }
  }
  function Au(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Df() : 536870912), (l.lanes |= t), (xa |= t));
  }
  function rn(l, t) {
    if (!il)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling);
    else
      for (n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = l),
          (n = n.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function A0(l, t, e) {
    var a = t.pendingProps;
    switch ((Di(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(ql),
          at(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (ka(t)
              ? Lt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ds())),
          Tl(t),
          null
        );
      case 26:
        return (
          (e = t.memoizedState),
          l === null
            ? (Lt(t),
              e !== null ? (Tl(t), tr(t, e)) : (Tl(t), (t.flags &= -16777217)))
            : e
            ? e !== l.memoizedState
              ? (Lt(t), Tl(t), tr(t, e))
              : (Tl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== a && Lt(t), Tl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        It(t), (e = K.current);
        var n = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Lt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Tl(t), null;
          }
          (l = C.current),
            ka(t) ? js(t) : ((l = td(n, a, e)), (t.stateNode = l), Lt(t));
        }
        return Tl(t), null;
      case 5:
        if ((It(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Lt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Tl(t), null;
          }
          if (((l = C.current), ka(t))) js(t);
          else {
            switch (((n = qu(K.current)), l)) {
              case 1:
                l = n.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                l = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    l = n.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    l = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (l = n.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (l.multiple = !0)
                        : a.size && (l.size = a.size);
                    break;
                  default:
                    l =
                      typeof a.is == "string"
                        ? n.createElement(e, { is: a.is })
                        : n.createElement(e);
                }
            }
            (l[Kl] = t), (l[Il] = a);
            l: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) l.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break l;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break l;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = l;
            l: switch ((Ll(l, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Lt(t);
          }
        }
        return Tl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Lt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (((l = K.current), ka(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (n = $l),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (l[Kl] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Jr(l.nodeValue, e)
              )),
              l || He(t);
          } else (l = qu(l).createTextNode(a)), (l[Kl] = t), (t.stateNode = l);
        }
        return Tl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = ka(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(s(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(s(317));
              n[Kl] = t;
            } else
              Ja(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Tl(t), (n = !1);
          } else
            (n = Ds()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        if ((Zt(t), (t.flags & 128) !== 0)) return (t.lanes = e), t;
        if (
          ((e = a !== null), (l = l !== null && l.memoizedState !== null), e)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          e !== l && e && (t.child.flags |= 8192),
          Au(t, t.updateQueue),
          Tl(t),
          null
        );
      case 4:
        return at(), l === null && Vc(t.stateNode.containerInfo), Tl(t), null;
      case 10:
        return Xt(t.type), Tl(t), null;
      case 19:
        if ((q(Cl), (n = t.memoizedState), n === null)) return Tl(t), null;
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) rn(n, !1);
          else {
            if (Nl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((u = gu(l)), u !== null)) {
                  for (
                    t.flags |= 128,
                      rn(n, !1),
                      l = u.updateQueue,
                      t.updateQueue = l,
                      Au(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    _s(e, l), (e = e.sibling);
                  return R(Cl, (Cl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            n.tail !== null &&
              _t() > zu &&
              ((t.flags |= 128), (a = !0), rn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = gu(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                Au(t, l),
                rn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !il)
              )
                return Tl(t), null;
            } else
              2 * _t() - n.renderingStartTime > zu &&
                e !== 536870912 &&
                ((t.flags |= 128), (a = !0), rn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((l = n.last),
              l !== null ? (l.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = _t()),
            (t.sibling = null),
            (l = Cl.current),
            R(Cl, a ? (l & 1) | 2 : l & 1),
            t)
          : (Tl(t), null);
      case 22:
      case 23:
        return (
          Zt(t),
          Ki(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Tl(t),
          (e = t.updateQueue),
          e !== null && Au(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && q(Be),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Xt(ql),
          Tl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function T0(l, t) {
    switch ((Di(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(ql),
          at(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return It(t), null;
      case 13:
        if (
          (Zt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Ja();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return q(Cl), null;
      case 4:
        return at(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return (
          Zt(t),
          Ki(),
          l !== null && q(Be),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Xt(ql), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function er(l, t) {
    switch ((Di(t), t.tag)) {
      case 3:
        Xt(ql), at();
        break;
      case 26:
      case 27:
      case 5:
        It(t);
        break;
      case 4:
        at();
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        q(Cl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        Zt(t), Ki(), l !== null && q(Be);
        break;
      case 24:
        Xt(ql);
    }
  }
  function dn(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              i = e.inst;
            (a = u()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      vl(t, t.return, c);
    }
  }
  function oe(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              (i.destroy = void 0), (n = t);
              var o = e,
                y = c;
              try {
                y();
              } catch (E) {
                vl(n, o, E);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      vl(t, t.return, E);
    }
  }
  function ar(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Zs(t, e);
      } catch (a) {
        vl(l, l.return, a);
      }
    }
  }
  function nr(l, t, e) {
    (e.props = Ge(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      vl(l, t, a);
    }
  }
  function mn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      vl(l, t, n);
    }
  }
  function Rt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          vl(l, t, n);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          vl(l, t, n);
        }
      else e.current = null;
  }
  function ur(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  function xc(l, t, e) {
    try {
      var a = l.stateNode;
      V0(a, l.type, e, t), (a[Il] = t);
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  function ir(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && be(l.type)) ||
      l.tag === 4
    );
  }
  function Sc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || ir(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && be(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ac(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Hu));
    else if (
      a !== 4 &&
      (a === 27 && be(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Ac(l, t, e), l = l.sibling; l !== null; )
        Ac(l, t, e), (l = l.sibling);
  }
  function Tu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && be(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (Tu(l, t, e), l = l.sibling; l !== null; )
        Tu(l, t, e), (l = l.sibling);
  }
  function cr(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Ll(t, a, e), (t[Kl] = l), (t[Il] = e);
    } catch (u) {
      vl(l, l.return, u);
    }
  }
  var Kt = !1,
    jl = !1,
    Tc = !1,
    fr = typeof WeakSet == "function" ? WeakSet : Set,
    Xl = null;
  function E0(l, t) {
    if (((l = l.containerInfo), (kc = Xu), (l = bs(l)), Si(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              c = -1,
              o = -1,
              y = 0,
              E = 0,
              N = l,
              g = null;
            t: for (;;) {
              for (
                var p;
                N !== e || (n !== 0 && N.nodeType !== 3) || (c = i + n),
                  N !== u || (a !== 0 && N.nodeType !== 3) || (o = i + a),
                  N.nodeType === 3 && (i += N.nodeValue.length),
                  (p = N.firstChild) !== null;

              )
                (g = N), (N = p);
              for (;;) {
                if (N === l) break t;
                if (
                  (g === e && ++y === n && (c = i),
                  g === u && ++E === a && (o = i),
                  (p = N.nextSibling) !== null)
                )
                  break;
                (N = g), (g = N.parentNode);
              }
              N = p;
            }
            e = c === -1 || o === -1 ? null : { start: c, end: o };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Jc = { focusedElem: l, selectionRange: e }, Xu = !1, Xl = t;
      Xl !== null;

    )
      if (
        ((t = Xl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Xl = l);
      else
        for (; Xl !== null; ) {
          switch (((t = Xl), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                (l = void 0),
                  (e = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = e.stateNode);
                try {
                  var L = Ge(e.type, n, e.elementType === e.type);
                  (l = a.getSnapshotBeforeUpdate(L, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Z) {
                  vl(e, e.return, Z);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Fc(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(s(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Xl = l);
            break;
          }
          Xl = t.return;
        }
  }
  function sr(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        re(l, e), a & 4 && dn(5, e);
        break;
      case 1:
        if ((re(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              vl(e, e.return, i);
            }
          else {
            var n = Ge(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              vl(e, e.return, i);
            }
          }
        a & 64 && ar(e), a & 512 && mn(e, e.return);
        break;
      case 3:
        if ((re(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Zs(l, t);
          } catch (i) {
            vl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && cr(e);
      case 26:
      case 5:
        re(l, e), t === null && a & 4 && ur(e), a & 512 && mn(e, e.return);
        break;
      case 12:
        re(l, e);
        break;
      case 13:
        re(l, e),
          a & 4 && dr(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = U0.bind(null, e)), F0(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Kt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || jl), (n = Kt);
          var u = jl;
          (Kt = a),
            (jl = t) && !u ? de(l, e, (e.subtreeFlags & 8772) !== 0) : re(l, e),
            (Kt = n),
            (jl = u);
        }
        break;
      case 30:
        break;
      default:
        re(l, e);
    }
  }
  function or(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), or(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ei(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var pl = null,
    tt = !1;
  function kt(l, t, e) {
    for (e = e.child; e !== null; ) rr(l, t, e), (e = e.sibling);
  }
  function rr(l, t, e) {
    if (nt && typeof nt.onCommitFiberUnmount == "function")
      try {
        nt.onCommitFiberUnmount(Ua, e);
      } catch {}
    switch (e.tag) {
      case 26:
        jl || Rt(e, t),
          kt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        jl || Rt(e, t);
        var a = pl,
          n = tt;
        be(e.type) && ((pl = e.stateNode), (tt = !1)),
          kt(l, t, e),
          An(e.stateNode),
          (pl = a),
          (tt = n);
        break;
      case 5:
        jl || Rt(e, t);
      case 6:
        if (
          ((a = pl),
          (n = tt),
          (pl = null),
          kt(l, t, e),
          (pl = a),
          (tt = n),
          pl !== null)
        )
          if (tt)
            try {
              (pl.nodeType === 9
                ? pl.body
                : pl.nodeName === "HTML"
                ? pl.ownerDocument.body
                : pl
              ).removeChild(e.stateNode);
            } catch (u) {
              vl(e, t, u);
            }
          else
            try {
              pl.removeChild(e.stateNode);
            } catch (u) {
              vl(e, t, u);
            }
        break;
      case 18:
        pl !== null &&
          (tt
            ? ((l = pl),
              Pr(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                e.stateNode
              ),
              jn(l))
            : Pr(pl, e.stateNode));
        break;
      case 4:
        (a = pl),
          (n = tt),
          (pl = e.stateNode.containerInfo),
          (tt = !0),
          kt(l, t, e),
          (pl = a),
          (tt = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jl || oe(2, e, t), jl || oe(4, e, t), kt(l, t, e);
        break;
      case 1:
        jl ||
          (Rt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && nr(e, t, a)),
          kt(l, t, e);
        break;
      case 21:
        kt(l, t, e);
        break;
      case 22:
        (jl = (a = jl) || e.memoizedState !== null), kt(l, t, e), (jl = a);
        break;
      default:
        kt(l, t, e);
    }
  }
  function dr(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        jn(l);
      } catch (e) {
        vl(t, t.return, e);
      }
  }
  function z0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new fr()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new fr()),
          t
        );
      default:
        throw Error(s(435, l.tag));
    }
  }
  function Ec(l, t) {
    var e = z0(l);
    t.forEach(function (a) {
      var n = H0.bind(null, l, a);
      e.has(a) || (e.add(a), a.then(n, n));
    });
  }
  function ft(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (be(c.type)) {
                (pl = c.stateNode), (tt = !1);
                break l;
              }
              break;
            case 5:
              (pl = c.stateNode), (tt = !1);
              break l;
            case 3:
            case 4:
              (pl = c.stateNode.containerInfo), (tt = !0);
              break l;
          }
          c = c.return;
        }
        if (pl === null) throw Error(s(160));
        rr(u, i, n),
          (pl = null),
          (tt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) mr(t, l), (t = t.sibling);
  }
  var zt = null;
  function mr(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, l),
          st(l),
          a & 4 && (oe(3, l, l.return), dn(3, l), oe(5, l, l.return));
        break;
      case 1:
        ft(t, l),
          st(l),
          a & 512 && (jl || e === null || Rt(e, e.return)),
          a & 64 &&
            Kt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var n = zt;
        if (
          (ft(t, l),
          st(l),
          a & 512 && (jl || e === null || Rt(e, e.return)),
          a & 4)
        ) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ca] ||
                          u[Kl] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Ll(u, a, e),
                        (u[Kl] = l),
                        Gl(u),
                        (a = u);
                      break l;
                    case "link":
                      var i = cd("link", "href", n).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              u.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Ll(u, a, e),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (i = cd("meta", "content", n).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              u.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Ll(u, a, e),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (u[Kl] = l), Gl(u), (a = u);
                }
                l.stateNode = a;
              } else fd(n, l.type, l.stateNode);
            else l.stateNode = id(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : u.count--,
                a === null
                  ? fd(n, l.type, l.stateNode)
                  : id(n, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                xc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        ft(t, l),
          st(l),
          a & 512 && (jl || e === null || Rt(e, e.return)),
          e !== null && a & 4 && xc(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (ft(t, l),
          st(l),
          a & 512 && (jl || e === null || Rt(e, e.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            Ie(n, "");
          } catch (p) {
            vl(l, l.return, p);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), xc(l, n, e !== null ? e.memoizedProps : n)),
          a & 1024 && (Tc = !0);
        break;
      case 6:
        if ((ft(t, l), st(l), a & 4)) {
          if (l.stateNode === null) throw Error(s(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (p) {
            vl(l, l.return, p);
          }
        }
        break;
      case 3:
        if (
          ((Yu = null),
          (n = zt),
          (zt = Cu(t.containerInfo)),
          ft(t, l),
          (zt = n),
          st(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            jn(t.containerInfo);
          } catch (p) {
            vl(l, l.return, p);
          }
        Tc && ((Tc = !1), hr(l));
        break;
      case 4:
        (a = zt),
          (zt = Cu(l.stateNode.containerInfo)),
          ft(t, l),
          st(l),
          (zt = a);
        break;
      case 12:
        ft(t, l), st(l);
        break;
      case 13:
        ft(t, l),
          st(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (jc = _t()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Ec(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var o = e !== null && e.memoizedState !== null,
          y = Kt,
          E = jl;
        if (
          ((Kt = y || n),
          (jl = E || o),
          ft(t, l),
          (jl = E),
          (Kt = y),
          st(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (e === null || o || Kt || jl || we(l)),
              e = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                o = e = t;
                try {
                  if (((u = o.stateNode), n))
                    (i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    c = o.stateNode;
                    var N = o.memoizedProps.style,
                      g =
                        N != null && N.hasOwnProperty("display")
                          ? N.display
                          : null;
                    c.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (p) {
                  vl(o, o.return, p);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (p) {
                  vl(o, o.return, p);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), Ec(l, e))));
        break;
      case 19:
        ft(t, l),
          st(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Ec(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, l), st(l);
    }
  }
  function st(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (ir(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = Sc(l);
            Tu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Ie(i, ""), (e.flags &= -33));
            var c = Sc(l);
            Tu(l, c, i);
            break;
          case 3:
          case 4:
            var o = e.stateNode.containerInfo,
              y = Sc(l);
            Ac(l, y, o);
            break;
          default:
            throw Error(s(161));
        }
      } catch (E) {
        vl(l, l.return, E);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function hr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        hr(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function re(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) sr(l, t.alternate, t), (t = t.sibling);
  }
  function we(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oe(4, t, t.return), we(t);
          break;
        case 1:
          Rt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && nr(t, t.return, e),
            we(t);
          break;
        case 27:
          An(t.stateNode);
        case 26:
        case 5:
          Rt(t, t.return), we(t);
          break;
        case 22:
          t.memoizedState === null && we(t);
          break;
        case 30:
          we(t);
          break;
        default:
          we(t);
      }
      l = l.sibling;
    }
  }
  function de(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = l,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          de(n, u, e), dn(4, u);
          break;
        case 1:
          if (
            (de(n, u, e),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              vl(a, a.return, y);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var c = a.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  Qs(o[n], c);
            } catch (y) {
              vl(a, a.return, y);
            }
          }
          e && i & 64 && ar(u), mn(u, u.return);
          break;
        case 27:
          cr(u);
        case 26:
        case 5:
          de(n, u, e), e && a === null && i & 4 && ur(u), mn(u, u.return);
          break;
        case 12:
          de(n, u, e);
          break;
        case 13:
          de(n, u, e), e && i & 4 && dr(n, u);
          break;
        case 22:
          u.memoizedState === null && de(n, u, e), mn(u, u.return);
          break;
        case 30:
          break;
        default:
          de(n, u, e);
      }
      t = t.sibling;
    }
  }
  function zc(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Fa(e));
  }
  function Nc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Fa(l));
  }
  function Dt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) vr(l, t, e, a), (t = t.sibling);
  }
  function vr(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(l, t, e, a), n & 2048 && dn(9, t);
        break;
      case 1:
        Dt(l, t, e, a);
        break;
      case 3:
        Dt(l, t, e, a),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Fa(l)));
        break;
      case 12:
        if (n & 2048) {
          Dt(l, t, e, a), (l = t.stateNode);
          try {
            var u = t.memoizedProps,
              i = u.id,
              c = u.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (o) {
            vl(t, t.return, o);
          }
        } else Dt(l, t, e, a);
        break;
      case 13:
        Dt(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Dt(l, t, e, a)
              : hn(l, t)
            : u._visibility & 2
            ? Dt(l, t, e, a)
            : ((u._visibility |= 2),
              ga(l, t, e, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && zc(i, t);
        break;
      case 24:
        Dt(l, t, e, a), n & 2048 && Nc(t.alternate, t);
        break;
      default:
        Dt(l, t, e, a);
    }
  }
  function ga(l, t, e, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = l,
        i = t,
        c = e,
        o = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ga(u, i, c, o, n), dn(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null
            ? E._visibility & 2
              ? ga(u, i, c, o, n)
              : hn(u, i)
            : ((E._visibility |= 2), ga(u, i, c, o, n)),
            n && y & 2048 && zc(i.alternate, i);
          break;
        case 24:
          ga(u, i, c, o, n), n && y & 2048 && Nc(i.alternate, i);
          break;
        default:
          ga(u, i, c, o, n);
      }
      t = t.sibling;
    }
  }
  function hn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            hn(e, a), n & 2048 && zc(a.alternate, a);
            break;
          case 24:
            hn(e, a), n & 2048 && Nc(a.alternate, a);
            break;
          default:
            hn(e, a);
        }
        t = t.sibling;
      }
  }
  var vn = 8192;
  function ba(l) {
    if (l.subtreeFlags & vn)
      for (l = l.child; l !== null; ) yr(l), (l = l.sibling);
  }
  function yr(l) {
    switch (l.tag) {
      case 26:
        ba(l),
          l.flags & vn &&
            l.memoizedState !== null &&
            oh(zt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ba(l);
        break;
      case 3:
      case 4:
        var t = zt;
        (zt = Cu(l.stateNode.containerInfo)), ba(l), (zt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = vn), (vn = 16777216), ba(l), (vn = t))
            : ba(l));
        break;
      default:
        ba(l);
    }
  }
  function gr(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Xl = a), pr(a, l);
        }
      gr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) br(l), (l = l.sibling);
  }
  function br(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yn(l), l.flags & 2048 && oe(9, l, l.return);
        break;
      case 3:
        yn(l);
        break;
      case 12:
        yn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Eu(l))
          : yn(l);
        break;
      default:
        yn(l);
    }
  }
  function Eu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Xl = a), pr(a, l);
        }
      gr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          oe(8, t, t.return), Eu(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), Eu(t));
          break;
        default:
          Eu(t);
      }
      l = l.sibling;
    }
  }
  function pr(l, t) {
    for (; Xl !== null; ) {
      var e = Xl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Xl = a);
      else
        l: for (e = l; Xl !== null; ) {
          a = Xl;
          var n = a.sibling,
            u = a.return;
          if ((or(a), a === e)) {
            Xl = null;
            break l;
          }
          if (n !== null) {
            (n.return = u), (Xl = n);
            break l;
          }
          Xl = u;
        }
    }
  }
  var N0 = {
      getCacheForType: function (l) {
        var t = kl(ql),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
    },
    M0 = typeof WeakMap == "function" ? WeakMap : Map,
    sl = 0,
    gl = null,
    tl = null,
    al = 0,
    ol = 0,
    ot = null,
    me = !1,
    pa = !1,
    Mc = !1,
    Jt = 0,
    Nl = 0,
    he = 0,
    Xe = 0,
    _c = 0,
    St = 0,
    xa = 0,
    gn = null,
    et = null,
    Oc = !1,
    jc = 0,
    zu = 1 / 0,
    Nu = null,
    ve = null,
    Vl = 0,
    ye = null,
    Sa = null,
    Aa = 0,
    Rc = 0,
    Dc = null,
    xr = null,
    bn = 0,
    Uc = null;
  function rt() {
    if ((sl & 2) !== 0 && al !== 0) return al & -al;
    if (A.T !== null) {
      var l = sa;
      return l !== 0 ? l : wc();
    }
    return qf();
  }
  function Sr() {
    St === 0 && (St = (al & 536870912) === 0 || il ? Rf() : 536870912);
    var l = xt.current;
    return l !== null && (l.flags |= 32), St;
  }
  function dt(l, t, e) {
    ((l === gl && (ol === 2 || ol === 9)) || l.cancelPendingCommit !== null) &&
      (Ta(l, 0), ge(l, al, St, !1)),
      qa(l, e),
      ((sl & 2) === 0 || l !== gl) &&
        (l === gl &&
          ((sl & 2) === 0 && (Xe |= e), Nl === 4 && ge(l, al, St, !1)),
        Ut(l));
  }
  function Ar(l, t, e) {
    if ((sl & 6) !== 0) throw Error(s(327));
    var a = (!e && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Ha(l, t),
      n = a ? j0(l, t) : Cc(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        pa && !a && ge(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), u && !_0(e))) {
          (n = Cc(l, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            (i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = gn;
              var o = c.current.memoizedState.isDehydrated;
              if ((o && (Ta(c, i).flags |= 256), (i = Cc(c, i, !1)), i !== 2)) {
                if (Mc && !o) {
                  (c.errorRecoveryDisabledLanes |= u), (Xe |= u), (n = 4);
                  break l;
                }
                (u = et),
                  (et = n),
                  u !== null && (et === null ? (et = u) : et.push.apply(et, u));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Ta(l, 0), ge(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ge(a, t, St, !me);
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((n = jc + 300 - _t()), 10 < n)) {
            if ((ge(a, t, St, !me), Bn(a, 0, !0) !== 0)) break l;
            a.timeoutHandle = Fr(
              Tr.bind(null, a, e, et, Nu, Oc, t, St, Xe, xa, me, u, 2, -0, 0),
              n
            );
            break l;
          }
          Tr(a, e, et, Nu, Oc, t, St, Xe, xa, me, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function Tr(l, t, e, a, n, u, i, c, o, y, E, N, g, p) {
    if (
      ((l.timeoutHandle = -1),
      (N = t.subtreeFlags),
      (N & 8192 || (N & 16785408) === 16785408) &&
        ((zn = { stylesheets: null, count: 0, unsuspend: sh }),
        yr(t),
        (N = rh()),
        N !== null))
    ) {
      (l.cancelPendingCommit = N(
        jr.bind(null, l, t, u, e, a, n, i, c, o, E, 1, g, p)
      )),
        ge(l, u, i, !y);
      return;
    }
    jr(l, t, u, e, a, n, i, c, o);
  }
  function _0(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!it(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ge(l, t, e, a) {
    (t &= ~_c),
      (t &= ~Xe),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - ut(n),
        i = 1 << u;
      (a[u] = -1), (n &= ~i);
    }
    e !== 0 && Uf(l, e, t);
  }
  function Mu() {
    return (sl & 6) === 0 ? (pn(0), !1) : !0;
  }
  function Hc() {
    if (tl !== null) {
      if (ol === 0) var l = tl.return;
      else (l = tl), (wt = qe = null), Fi(l), (va = null), (sn = 0), (l = tl);
      for (; l !== null; ) er(l.alternate, l), (l = l.return);
      tl = null;
    }
  }
  function Ta(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), K0(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      Hc(),
      (gl = l),
      (tl = e = Bt(l.current, null)),
      (al = t),
      (ol = 0),
      (ot = null),
      (me = !1),
      (pa = Ha(l, t)),
      (Mc = !1),
      (xa = St = _c = Xe = he = Nl = 0),
      (et = gn = null),
      (Oc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ut(a),
          u = 1 << n;
        (t |= l[n]), (a &= ~u);
      }
    return (Jt = t), Wn(), e;
  }
  function Er(l, t) {
    (F = null),
      (A.H = hu),
      t === Pa || t === nu
        ? ((t = ws()), (ol = 3))
        : t === Bs
        ? ((t = ws()), (ol = 4))
        : (ol =
            t === Qo
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (ot = t),
      tl === null && ((Nl = 1), pu(l, yt(t, l.current)));
  }
  function zr() {
    var l = A.H;
    return (A.H = hu), l === null ? hu : l;
  }
  function Nr() {
    var l = A.A;
    return (A.A = N0), l;
  }
  function qc() {
    (Nl = 4),
      me || ((al & 4194048) !== al && xt.current !== null) || (pa = !0),
      ((he & 134217727) === 0 && (Xe & 134217727) === 0) ||
        gl === null ||
        ge(gl, al, St, !1);
  }
  function Cc(l, t, e) {
    var a = sl;
    sl |= 2;
    var n = zr(),
      u = Nr();
    (gl !== l || al !== t) && ((Nu = null), Ta(l, t)), (t = !1);
    var i = Nl;
    l: do
      try {
        if (ol !== 0 && tl !== null) {
          var c = tl,
            o = ot;
          switch (ol) {
            case 8:
              Hc(), (i = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var y = ol;
              if (((ol = 0), (ot = null), Ea(l, c, o, y), e && pa)) {
                i = 0;
                break l;
              }
              break;
            default:
              (y = ol), (ol = 0), (ot = null), Ea(l, c, o, y);
          }
        }
        O0(), (i = Nl);
        break;
      } catch (E) {
        Er(l, E);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (wt = qe = null),
      (sl = a),
      (A.H = n),
      (A.A = u),
      tl === null && ((gl = null), (al = 0), Wn()),
      i
    );
  }
  function O0() {
    for (; tl !== null; ) Mr(tl);
  }
  function j0(l, t) {
    var e = sl;
    sl |= 2;
    var a = zr(),
      n = Nr();
    gl !== l || al !== t
      ? ((Nu = null), (zu = _t() + 500), Ta(l, t))
      : (pa = Ha(l, t));
    l: do
      try {
        if (ol !== 0 && tl !== null) {
          t = tl;
          var u = ot;
          t: switch (ol) {
            case 1:
              (ol = 0), (ot = null), Ea(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (Ys(u)) {
                (ol = 0), (ot = null), _r(t);
                break;
              }
              (t = function () {
                (ol !== 2 && ol !== 9) || gl !== l || (ol = 7), Ut(l);
              }),
                u.then(t, t);
              break l;
            case 3:
              ol = 7;
              break l;
            case 4:
              ol = 5;
              break l;
            case 7:
              Ys(u)
                ? ((ol = 0), (ot = null), _r(t))
                : ((ol = 0), (ot = null), Ea(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (tl.tag) {
                case 26:
                  i = tl.memoizedState;
                case 5:
                case 27:
                  var c = tl;
                  if (!i || sd(i)) {
                    (ol = 0), (ot = null);
                    var o = c.sibling;
                    if (o !== null) tl = o;
                    else {
                      var y = c.return;
                      y !== null ? ((tl = y), _u(y)) : (tl = null);
                    }
                    break t;
                  }
              }
              (ol = 0), (ot = null), Ea(l, t, u, 5);
              break;
            case 6:
              (ol = 0), (ot = null), Ea(l, t, u, 6);
              break;
            case 8:
              Hc(), (Nl = 6);
              break l;
            default:
              throw Error(s(462));
          }
        }
        R0();
        break;
      } catch (E) {
        Er(l, E);
      }
    while (!0);
    return (
      (wt = qe = null),
      (A.H = a),
      (A.A = n),
      (sl = e),
      tl !== null ? 0 : ((gl = null), (al = 0), Wn(), Nl)
    );
  }
  function R0() {
    for (; tl !== null && !Pd(); ) Mr(tl);
  }
  function Mr(l) {
    var t = lr(l.alternate, l, Jt);
    (l.memoizedProps = l.pendingProps), t === null ? _u(l) : (tl = t);
  }
  function _r(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jo(e, t, t.pendingProps, t.type, void 0, al);
        break;
      case 11:
        t = Jo(e, t, t.pendingProps, t.type.render, t.ref, al);
        break;
      case 5:
        Fi(t);
      default:
        er(e, t), (t = tl = _s(t, Jt)), (t = lr(e, t, Jt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? _u(l) : (tl = t);
  }
  function Ea(l, t, e, a) {
    (wt = qe = null), Fi(t), (va = null), (sn = 0);
    var n = t.return;
    try {
      if (x0(l, n, t, e, al)) {
        (Nl = 1), pu(l, yt(e, l.current)), (tl = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((tl = n), u);
      (Nl = 1), pu(l, yt(e, l.current)), (tl = null);
      return;
    }
    t.flags & 32768
      ? (il || a === 1
          ? (l = !0)
          : pa || (al & 536870912) !== 0
          ? (l = !1)
          : ((me = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = xt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Or(t, l))
      : _u(t);
  }
  function _u(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Or(t, me);
        return;
      }
      l = t.return;
      var e = A0(t.alternate, t, Jt);
      if (e !== null) {
        tl = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        tl = t;
        return;
      }
      tl = t = l;
    } while (t !== null);
    Nl === 0 && (Nl = 5);
  }
  function Or(l, t) {
    do {
      var e = T0(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), (tl = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        tl = l;
        return;
      }
      tl = l = e;
    } while (l !== null);
    (Nl = 6), (tl = null);
  }
  function jr(l, t, e, a, n, u, i, c, o) {
    l.cancelPendingCommit = null;
    do Ou();
    while (Vl !== 0);
    if ((sl & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === l.current) throw Error(s(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Ni),
        sm(l, e, u, i, c, o),
        l === gl && ((tl = gl = null), (al = 0)),
        (Sa = t),
        (ye = l),
        (Aa = e),
        (Rc = u),
        (Dc = n),
        (xr = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            q0(Hn, function () {
              return qr(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = A.T), (A.T = null), (n = U.p), (U.p = 2), (i = sl), (sl |= 4);
        try {
          E0(l, t, e);
        } finally {
          (sl = i), (U.p = n), (A.T = a);
        }
      }
      (Vl = 1), Rr(), Dr(), Ur();
    }
  }
  function Rr() {
    if (Vl === 1) {
      Vl = 0;
      var l = ye,
        t = Sa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = A.T), (A.T = null);
        var a = U.p;
        U.p = 2;
        var n = sl;
        sl |= 4;
        try {
          mr(t, l);
          var u = Jc,
            i = bs(l.containerInfo),
            c = u.focusedElem,
            o = u.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            gs(c.ownerDocument.documentElement, c)
          ) {
            if (o !== null && Si(c)) {
              var y = o.start,
                E = o.end;
              if ((E === void 0 && (E = y), "selectionStart" in c))
                (c.selectionStart = y),
                  (c.selectionEnd = Math.min(E, c.value.length));
              else {
                var N = c.ownerDocument || document,
                  g = (N && N.defaultView) || window;
                if (g.getSelection) {
                  var p = g.getSelection(),
                    L = c.textContent.length,
                    Z = Math.min(o.start, L),
                    ml = o.end === void 0 ? Z : Math.min(o.end, L);
                  !p.extend && Z > ml && ((i = ml), (ml = Z), (Z = i));
                  var m = ys(c, Z),
                    d = ys(c, ml);
                  if (
                    m &&
                    d &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== m.node ||
                      p.anchorOffset !== m.offset ||
                      p.focusNode !== d.node ||
                      p.focusOffset !== d.offset)
                  ) {
                    var v = N.createRange();
                    v.setStart(m.node, m.offset),
                      p.removeAllRanges(),
                      Z > ml
                        ? (p.addRange(v), p.extend(d.node, d.offset))
                        : (v.setEnd(d.node, d.offset), p.addRange(v));
                  }
                }
              }
            }
            for (N = [], p = c; (p = p.parentNode); )
              p.nodeType === 1 &&
                N.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < N.length;
              c++
            ) {
              var z = N[c];
              (z.element.scrollLeft = z.left), (z.element.scrollTop = z.top);
            }
          }
          (Xu = !!kc), (Jc = kc = null);
        } finally {
          (sl = n), (U.p = a), (A.T = e);
        }
      }
      (l.current = t), (Vl = 2);
    }
  }
  function Dr() {
    if (Vl === 2) {
      Vl = 0;
      var l = ye,
        t = Sa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = A.T), (A.T = null);
        var a = U.p;
        U.p = 2;
        var n = sl;
        sl |= 4;
        try {
          sr(l, t.alternate, t);
        } finally {
          (sl = n), (U.p = a), (A.T = e);
        }
      }
      Vl = 3;
    }
  }
  function Ur() {
    if (Vl === 4 || Vl === 3) {
      (Vl = 0), lm();
      var l = ye,
        t = Sa,
        e = Aa,
        a = xr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Vl = 5)
        : ((Vl = 0), (Sa = ye = null), Hr(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (ve = null),
        li(e),
        (t = t.stateNode),
        nt && typeof nt.onCommitFiberRoot == "function")
      )
        try {
          nt.onCommitFiberRoot(Ua, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = A.T), (n = U.p), (U.p = 2), (A.T = null);
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, { componentStack: c.stack });
          }
        } finally {
          (A.T = t), (U.p = n);
        }
      }
      (Aa & 3) !== 0 && Ou(),
        Ut(l),
        (n = l.pendingLanes),
        (e & 4194090) !== 0 && (n & 42) !== 0
          ? l === Uc
            ? bn++
            : ((bn = 0), (Uc = l))
          : (bn = 0),
        pn(0);
    }
  }
  function Hr(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Fa(t)));
  }
  function Ou(l) {
    return Rr(), Dr(), Ur(), qr();
  }
  function qr() {
    if (Vl !== 5) return !1;
    var l = ye,
      t = Rc;
    Rc = 0;
    var e = li(Aa),
      a = A.T,
      n = U.p;
    try {
      (U.p = 32 > e ? 32 : e), (A.T = null), (e = Dc), (Dc = null);
      var u = ye,
        i = Aa;
      if (((Vl = 0), (Sa = ye = null), (Aa = 0), (sl & 6) !== 0))
        throw Error(s(331));
      var c = sl;
      if (
        ((sl |= 4),
        br(u.current),
        vr(u, u.current, i, e),
        (sl = c),
        pn(0, !1),
        nt && typeof nt.onPostCommitFiberRoot == "function")
      )
        try {
          nt.onPostCommitFiberRoot(Ua, u);
        } catch {}
      return !0;
    } finally {
      (U.p = n), (A.T = a), Hr(l, t);
    }
  }
  function Cr(l, t, e) {
    (t = yt(e, t)),
      (t = rc(l.stateNode, t, 2)),
      (l = ie(l, t, 2)),
      l !== null && (qa(l, 2), Ut(l));
  }
  function vl(l, t, e) {
    if (l.tag === 3) Cr(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cr(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ve === null || !ve.has(a)))
          ) {
            (l = yt(e, l)),
              (e = wo(2)),
              (a = ie(t, e, 2)),
              a !== null && (Xo(e, a, t, l), qa(a, 2), Ut(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new M0();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(e) ||
      ((Mc = !0), n.add(e), (l = D0.bind(null, l, t, e)), t.then(l, l));
  }
  function D0(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      gl === l &&
        (al & e) === e &&
        (Nl === 4 || (Nl === 3 && (al & 62914560) === al && 300 > _t() - jc)
          ? (sl & 2) === 0 && Ta(l, 0)
          : (_c |= e),
        xa === al && (xa = 0)),
      Ut(l);
  }
  function Br(l, t) {
    t === 0 && (t = Df()), (l = ua(l, t)), l !== null && (qa(l, t), Ut(l));
  }
  function U0(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), Br(l, e);
  }
  function H0(l, t) {
    var e = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), Br(l, e);
  }
  function q0(l, t) {
    return $u(l, t);
  }
  var ju = null,
    za = null,
    Yc = !1,
    Ru = !1,
    Gc = !1,
    Qe = 0;
  function Ut(l) {
    l !== za &&
      l.next === null &&
      (za === null ? (ju = za = l) : (za = za.next = l)),
      (Ru = !0),
      Yc || ((Yc = !0), B0());
  }
  function pn(l, t) {
    if (!Gc && Ru) {
      Gc = !0;
      do
        for (var e = !1, a = ju; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              (u = (1 << (31 - ut(42 | l) + 1)) - 1),
                (u &= n & ~(i & ~c)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((e = !0), Xr(a, u));
          } else
            (u = al),
              (u = Bn(
                a,
                a === gl ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ha(a, u) || ((e = !0), Xr(a, u));
          a = a.next;
        }
      while (e);
      Gc = !1;
    }
  }
  function C0() {
    Yr();
  }
  function Yr() {
    Ru = Yc = !1;
    var l = 0;
    Qe !== 0 && (L0() && (l = Qe), (Qe = 0));
    for (var t = _t(), e = null, a = ju; a !== null; ) {
      var n = a.next,
        u = Gr(a, t);
      u === 0
        ? ((a.next = null),
          e === null ? (ju = n) : (e.next = n),
          n === null && (za = e))
        : ((e = a), (l !== 0 || (u & 3) !== 0) && (Ru = !0)),
        (a = n);
    }
    pn(l);
  }
  function Gr(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;

    ) {
      var i = 31 - ut(u),
        c = 1 << i,
        o = n[i];
      o === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = fm(c, t))
        : o <= t && (l.expiredLanes |= c),
        (u &= ~c);
    }
    if (
      ((t = gl),
      (e = al),
      (e = Bn(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (ol === 2 || ol === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Fu(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Ha(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Fu(a), li(e))) {
        case 2:
        case 8:
          e = Of;
          break;
        case 32:
          e = Hn;
          break;
        case 268435456:
          e = jf;
          break;
        default:
          e = Hn;
      }
      return (
        (a = wr.bind(null, l)),
        (e = $u(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Fu(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function wr(l, t) {
    if (Vl !== 0 && Vl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (Ou() && l.callbackNode !== e) return null;
    var a = al;
    return (
      (a = Bn(
        l,
        l === gl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Ar(l, a, t),
          Gr(l, _t()),
          l.callbackNode != null && l.callbackNode === e
            ? wr.bind(null, l)
            : null)
    );
  }
  function Xr(l, t) {
    if (Ou()) return null;
    Ar(l, t, !0);
  }
  function B0() {
    k0(function () {
      (sl & 6) !== 0 ? $u(_f, C0) : Yr();
    });
  }
  function wc() {
    return Qe === 0 && (Qe = Rf()), Qe;
  }
  function Qr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Qn("" + l);
  }
  function Zr(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function Y0(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Qr((n[Il] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[Il] || null)
          ? Qr(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var c = new Kn("action", "action", null, a, n);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Qe !== 0) {
                  var o = i ? Zr(n, i) : new FormData(n);
                  ic(
                    e,
                    { pending: !0, data: o, method: n.method, action: u },
                    null,
                    o
                  );
                }
              } else
                typeof u == "function" &&
                  (c.preventDefault(),
                  (o = i ? Zr(n, i) : new FormData(n)),
                  ic(
                    e,
                    { pending: !0, data: o, method: n.method, action: u },
                    u,
                    o
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Xc = 0; Xc < zi.length; Xc++) {
    var Qc = zi[Xc],
      G0 = Qc.toLowerCase(),
      w0 = Qc[0].toUpperCase() + Qc.slice(1);
    Et(G0, "on" + w0);
  }
  Et(Ss, "onAnimationEnd"),
    Et(As, "onAnimationIteration"),
    Et(Ts, "onAnimationStart"),
    Et("dblclick", "onDoubleClick"),
    Et("focusin", "onFocus"),
    Et("focusout", "onBlur"),
    Et(a0, "onTransitionRun"),
    Et(n0, "onTransitionStart"),
    Et(u0, "onTransitionCancel"),
    Et(Es, "onTransitionEnd"),
    We("onMouseEnter", ["mouseout", "mouseover"]),
    We("onMouseLeave", ["mouseout", "mouseover"]),
    We("onPointerEnter", ["pointerout", "pointerover"]),
    We("onPointerLeave", ["pointerout", "pointerover"]),
    Ne(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ne(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ne(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ne(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ne(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var xn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    X0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(xn)
    );
  function Vr(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              o = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), o !== u && n.isPropagationStopped()))
              break l;
            (u = c), (n.currentTarget = y);
            try {
              u(n);
            } catch (E) {
              bu(E);
            }
            (n.currentTarget = null), (u = o);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (o = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              o !== u && n.isPropagationStopped())
            )
              break l;
            (u = c), (n.currentTarget = y);
            try {
              u(n);
            } catch (E) {
              bu(E);
            }
            (n.currentTarget = null), (u = o);
          }
      }
    }
  }
  function el(l, t) {
    var e = t[ti];
    e === void 0 && (e = t[ti] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Lr(t, l, 2, !1), e.add(a));
  }
  function Zc(l, t, e) {
    var a = 0;
    t && (a |= 4), Lr(e, l, a, t);
  }
  var Du = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(l) {
    if (!l[Du]) {
      (l[Du] = !0),
        Bf.forEach(function (e) {
          e !== "selectionchange" && (X0.has(e) || Zc(e, !1, l), Zc(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Du] || ((t[Du] = !0), Zc("selectionchange", !1, t));
    }
  }
  function Lr(l, t, e, a) {
    switch (vd(t)) {
      case 2:
        var n = hh;
        break;
      case 8:
        n = vh;
        break;
      default:
        n = nf;
    }
    (e = n.bind(null, t, e, l)),
      (n = void 0),
      !di ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: n })
          : l.addEventListener(t, e, !0)
        : n !== void 0
        ? l.addEventListener(t, e, { passive: n })
        : l.addEventListener(t, e, !1);
  }
  function Lc(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ke(c)), i === null)) return;
            if (((o = i.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              a = u = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Ff(function () {
      var y = u,
        E = oi(e),
        N = [];
      l: {
        var g = zs.get(l);
        if (g !== void 0) {
          var p = Kn,
            L = l;
          switch (l) {
            case "keypress":
              if (Vn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = qm;
              break;
            case "focusin":
              (L = "focus"), (p = yi);
              break;
            case "focusout":
              (L = "blur"), (p = yi);
              break;
            case "beforeblur":
            case "afterblur":
              p = yi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Tm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Ym;
              break;
            case Ss:
            case As:
            case Ts:
              p = Nm;
              break;
            case Es:
              p = wm;
              break;
            case "scroll":
            case "scrollend":
              p = Sm;
              break;
            case "wheel":
              p = Qm;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = _m;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = es;
              break;
            case "toggle":
            case "beforetoggle":
              p = Vm;
          }
          var Z = (t & 4) !== 0,
            ml = !Z && (l === "scroll" || l === "scrollend"),
            m = Z ? (g !== null ? g + "Capture" : null) : g;
          Z = [];
          for (var d = y, v; d !== null; ) {
            var z = d;
            if (
              ((v = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                v === null ||
                m === null ||
                ((z = Ya(d, m)), z != null && Z.push(Sn(d, z, v))),
              ml)
            )
              break;
            d = d.return;
          }
          0 < Z.length &&
            ((g = new p(g, L, null, e, E)), N.push({ event: g, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((g = l === "mouseover" || l === "pointerover"),
            (p = l === "mouseout" || l === "pointerout"),
            g &&
              e !== si &&
              (L = e.relatedTarget || e.fromElement) &&
              (Ke(L) || L[Le]))
          )
            break l;
          if (
            (p || g) &&
            ((g =
              E.window === E
                ? E
                : (g = E.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            p
              ? ((L = e.relatedTarget || e.toElement),
                (p = y),
                (L = L ? Ke(L) : null),
                L !== null &&
                  ((ml = O(L)),
                  (Z = L.tag),
                  L !== ml || (Z !== 5 && Z !== 27 && Z !== 6)) &&
                  (L = null))
              : ((p = null), (L = y)),
            p !== L)
          ) {
            if (
              ((Z = ls),
              (z = "onMouseLeave"),
              (m = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Z = es),
                (z = "onPointerLeave"),
                (m = "onPointerEnter"),
                (d = "pointer")),
              (ml = p == null ? g : Ba(p)),
              (v = L == null ? g : Ba(L)),
              (g = new Z(z, d + "leave", p, e, E)),
              (g.target = ml),
              (g.relatedTarget = v),
              (z = null),
              Ke(E) === y &&
                ((Z = new Z(m, d + "enter", L, e, E)),
                (Z.target = v),
                (Z.relatedTarget = ml),
                (z = Z)),
              (ml = z),
              p && L)
            )
              t: {
                for (Z = p, m = L, d = 0, v = Z; v; v = Na(v)) d++;
                for (v = 0, z = m; z; z = Na(z)) v++;
                for (; 0 < d - v; ) (Z = Na(Z)), d--;
                for (; 0 < v - d; ) (m = Na(m)), v--;
                for (; d--; ) {
                  if (Z === m || (m !== null && Z === m.alternate)) break t;
                  (Z = Na(Z)), (m = Na(m));
                }
                Z = null;
              }
            else Z = null;
            p !== null && Kr(N, g, p, Z, !1),
              L !== null && ml !== null && Kr(N, ml, L, Z, !0);
          }
        }
        l: {
          if (
            ((g = y ? Ba(y) : window),
            (p = g.nodeName && g.nodeName.toLowerCase()),
            p === "select" || (p === "input" && g.type === "file"))
          )
            var B = os;
          else if (fs(g))
            if (rs) B = l0;
            else {
              B = Im;
              var P = Fm;
            }
          else
            (p = g.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? y && fi(y.elementType) && (B = os)
                : (B = Pm);
          if (B && (B = B(l, y))) {
            ss(N, B, e, E);
            break l;
          }
          P && P(l, g, y),
            l === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              ci(g, "number", g.value);
        }
        switch (((P = y ? Ba(y) : window), l)) {
          case "focusin":
            (fs(P) || P.contentEditable === "true") &&
              ((ea = P), (Ai = y), (Ka = null));
            break;
          case "focusout":
            Ka = Ai = ea = null;
            break;
          case "mousedown":
            Ti = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ti = !1), ps(N, e, E);
            break;
          case "selectionchange":
            if (e0) break;
          case "keydown":
          case "keyup":
            ps(N, e, E);
        }
        var w;
        if (bi)
          l: {
            switch (l) {
              case "compositionstart":
                var V = "onCompositionStart";
                break l;
              case "compositionend":
                V = "onCompositionEnd";
                break l;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break l;
            }
            V = void 0;
          }
        else
          ta
            ? is(l, e) && (V = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (V = "onCompositionStart");
        V &&
          (as &&
            e.locale !== "ko" &&
            (ta || V !== "onCompositionStart"
              ? V === "onCompositionEnd" && ta && (w = If())
              : ((ee = E),
                (mi = "value" in ee ? ee.value : ee.textContent),
                (ta = !0))),
          (P = Uu(y, V)),
          0 < P.length &&
            ((V = new ts(V, l, null, e, E)),
            N.push({ event: V, listeners: P }),
            w ? (V.data = w) : ((w = cs(e)), w !== null && (V.data = w)))),
          (w = Km ? km(l, e) : Jm(l, e)) &&
            ((V = Uu(y, "onBeforeInput")),
            0 < V.length &&
              ((P = new ts("onBeforeInput", "beforeinput", null, e, E)),
              N.push({ event: P, listeners: V }),
              (P.data = w))),
          Y0(N, l, y, e, E);
      }
      Vr(N, t);
    });
  }
  function Sn(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Uu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ya(l, e)),
          n != null && a.unshift(Sn(l, n, u)),
          (n = Ya(l, t)),
          n != null && a.push(Sn(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Na(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Kr(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        o = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), o !== null && o === a)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((o = y),
        n
          ? ((y = Ya(e, u)), y != null && i.unshift(Sn(e, y, o)))
          : n || ((y = Ya(e, u)), y != null && i.push(Sn(e, y, o)))),
        (e = e.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Q0 = /\r\n?/g,
    Z0 = /\u0000|\uFFFD/g;
  function kr(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Q0,
        `
`
      )
      .replace(Z0, "");
  }
  function Jr(l, t) {
    return (t = kr(t)), kr(l) === t;
  }
  function Hu() {}
  function dl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Ie(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Ie(l, "" + a);
        break;
      case "className":
        Gn(l, "class", a);
        break;
      case "tabIndex":
        Gn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gn(l, e, a);
        break;
      case "style":
        Wf(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          Gn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = Qn("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (t !== "input" && dl(l, t, "name", n.name, n, null),
                dl(l, t, "formEncType", n.formEncType, n, null),
                dl(l, t, "formMethod", n.formMethod, n, null),
                dl(l, t, "formTarget", n.formTarget, n, null))
              : (dl(l, t, "encType", n.encType, n, null),
                dl(l, t, "method", n.method, n, null),
                dl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = Qn("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Hu);
        break;
      case "onScroll":
        a != null && el("scroll", l);
        break;
      case "onScrollEnd":
        a != null && el("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (e = Qn("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        el("beforetoggle", l), el("toggle", l), Yn(l, "popover", a);
        break;
      case "xlinkActuate":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Yn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = pm.get(e) || e), Yn(l, e, a));
    }
  }
  function Kc(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        Wf(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ie(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
        break;
      case "onScroll":
        a != null && el("scroll", l);
        break;
      case "onScrollEnd":
        a != null && el("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Hu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Yf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (t = e.slice(2, n ? e.length - 7 : void 0)),
              (u = l[Il] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, n);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
              ? l.setAttribute(e, "")
              : Yn(l, e, a);
          }
    }
  }
  function Ll(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        el("error", l), el("load", l);
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  dl(l, t, u, i, e, null);
              }
          }
        n && dl(l, t, "srcSet", e.srcSet, e, null),
          a && dl(l, t, "src", e.src, e, null);
        return;
      case "input":
        el("invalid", l);
        var c = (u = i = n = null),
          o = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null)
              switch (a) {
                case "name":
                  n = E;
                  break;
                case "type":
                  i = E;
                  break;
                case "checked":
                  o = E;
                  break;
                case "defaultChecked":
                  y = E;
                  break;
                case "value":
                  u = E;
                  break;
                case "defaultValue":
                  c = E;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null) throw Error(s(137, t));
                  break;
                default:
                  dl(l, t, a, E, e, null);
              }
          }
        Lf(l, u, c, o, y, i, n, !1), wn(l);
        return;
      case "select":
        el("invalid", l), (a = i = u = null);
        for (n in e)
          if (e.hasOwnProperty(n) && ((c = e[n]), c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                dl(l, t, n, c, e, null);
            }
        (t = u),
          (e = i),
          (l.multiple = !!a),
          t != null ? Fe(l, !!a, t, !1) : e != null && Fe(l, !!a, e, !0);
        return;
      case "textarea":
        el("invalid", l), (u = n = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                dl(l, t, i, c, e, null);
            }
        kf(l, a, n, u), wn(l);
        return;
      case "option":
        for (o in e)
          if (e.hasOwnProperty(o) && ((a = e[o]), a != null))
            switch (o) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                dl(l, t, o, a, e, null);
            }
        return;
      case "dialog":
        el("beforetoggle", l), el("toggle", l), el("cancel", l), el("close", l);
        break;
      case "iframe":
      case "object":
        el("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xn.length; a++) el(xn[a], l);
        break;
      case "image":
        el("error", l), el("load", l);
        break;
      case "details":
        el("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        el("error", l), el("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                dl(l, t, y, a, e, null);
            }
        return;
      default:
        if (fi(t)) {
          for (E in e)
            e.hasOwnProperty(E) &&
              ((a = e[E]), a !== void 0 && Kc(l, t, E, a, e, void 0));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && ((a = e[c]), a != null && dl(l, t, c, a, e, null));
  }
  function V0(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          c = null,
          o = null,
          y = null,
          E = null;
        for (p in e) {
          var N = e[p];
          if (e.hasOwnProperty(p) && N != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = N;
              default:
                a.hasOwnProperty(p) || dl(l, t, p, null, a, N);
            }
        }
        for (var g in a) {
          var p = a[g];
          if (((N = e[g]), a.hasOwnProperty(g) && (p != null || N != null)))
            switch (g) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                y = p;
                break;
              case "defaultChecked":
                E = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                c = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(s(137, t));
                break;
              default:
                p !== N && dl(l, t, g, p, a, N);
            }
        }
        ii(l, i, c, o, y, E, u, n);
        return;
      case "select":
        p = i = c = g = null;
        for (u in e)
          if (((o = e[u]), e.hasOwnProperty(u) && o != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = o;
              default:
                a.hasOwnProperty(u) || dl(l, t, u, null, a, o);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (o = e[n]),
            a.hasOwnProperty(n) && (u != null || o != null))
          )
            switch (n) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== o && dl(l, t, n, u, a, o);
            }
        (t = c),
          (e = i),
          (a = p),
          g != null
            ? Fe(l, !!e, g, !1)
            : !!a != !!e &&
              (t != null ? Fe(l, !!e, t, !0) : Fe(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = g = null;
        for (c in e)
          if (
            ((n = e[c]),
            e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                dl(l, t, c, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = e[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && dl(l, t, i, n, a, u);
            }
        Kf(l, g, p);
        return;
      case "option":
        for (var L in e)
          if (
            ((g = e[L]),
            e.hasOwnProperty(L) && g != null && !a.hasOwnProperty(L))
          )
            switch (L) {
              case "selected":
                l.selected = !1;
                break;
              default:
                dl(l, t, L, null, a, g);
            }
        for (o in a)
          if (
            ((g = a[o]),
            (p = e[o]),
            a.hasOwnProperty(o) && g !== p && (g != null || p != null))
          )
            switch (o) {
              case "selected":
                l.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                dl(l, t, o, g, a, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Z in e)
          (g = e[Z]),
            e.hasOwnProperty(Z) &&
              g != null &&
              !a.hasOwnProperty(Z) &&
              dl(l, t, Z, null, a, g);
        for (y in a)
          if (
            ((g = a[y]),
            (p = e[y]),
            a.hasOwnProperty(y) && g !== p && (g != null || p != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(s(137, t));
                break;
              default:
                dl(l, t, y, g, a, p);
            }
        return;
      default:
        if (fi(t)) {
          for (var ml in e)
            (g = e[ml]),
              e.hasOwnProperty(ml) &&
                g !== void 0 &&
                !a.hasOwnProperty(ml) &&
                Kc(l, t, ml, void 0, a, g);
          for (E in a)
            (g = a[E]),
              (p = e[E]),
              !a.hasOwnProperty(E) ||
                g === p ||
                (g === void 0 && p === void 0) ||
                Kc(l, t, E, g, a, p);
          return;
        }
    }
    for (var m in e)
      (g = e[m]),
        e.hasOwnProperty(m) &&
          g != null &&
          !a.hasOwnProperty(m) &&
          dl(l, t, m, null, a, g);
    for (N in a)
      (g = a[N]),
        (p = e[N]),
        !a.hasOwnProperty(N) ||
          g === p ||
          (g == null && p == null) ||
          dl(l, t, N, g, a, p);
  }
  var kc = null,
    Jc = null;
  function qu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Wr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $r(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Wc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $c = null;
  function L0() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === $c
        ? !1
        : (($c = l), !0)
      : (($c = null), !1);
  }
  var Fr = typeof setTimeout == "function" ? setTimeout : void 0,
    K0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ir = typeof Promise == "function" ? Promise : void 0,
    k0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ir < "u"
        ? function (l) {
            return Ir.resolve(null).then(l).catch(J0);
          }
        : Fr;
  function J0(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function be(l) {
    return l === "head";
  }
  function Pr(l, t) {
    var e = t,
      a = 0,
      n = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var i = l.ownerDocument;
            if ((e & 1 && An(i.documentElement), e & 2 && An(i.body), e & 4))
              for (e = i.head, An(e), i = e.firstChild; i; ) {
                var c = i.nextSibling,
                  o = i.nodeName;
                i[Ca] ||
                  o === "SCRIPT" ||
                  o === "STYLE" ||
                  (o === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(i),
                  (i = c);
              }
          }
          if (n === 0) {
            l.removeChild(u), jn(t);
            return;
          }
          n--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? n++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = u;
    } while (e);
    jn(t);
  }
  function Fc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fc(e), ei(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function W0(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ca])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = Nt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function $0(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = Nt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ic(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function F0(l, t) {
    var e = l.ownerDocument;
    if (l.data !== "$?" || e.readyState === "complete") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function Nt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Pc = null;
  function ld(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (t === 0) return l;
          t--;
        } else e === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function td(l, t, e) {
    switch (((t = qu(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(s(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(s(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  function An(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ei(l);
  }
  var At = new Map(),
    ed = new Set();
  function Cu(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Wt = U.d;
  U.d = { f: I0, r: P0, D: lh, C: th, L: eh, m: ah, X: uh, S: nh, M: ih };
  function I0() {
    var l = Wt.f(),
      t = Mu();
    return l || t;
  }
  function P0(l) {
    var t = ke(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ao(t) : Wt.r(l);
  }
  var Ma = typeof document > "u" ? null : document;
  function ad(l, t, e) {
    var a = Ma;
    if (a && typeof t == "string" && t) {
      var n = vt(t);
      (n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        ed.has(n) ||
          (ed.add(n),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Ll(t, "link", l),
            Gl(t),
            a.head.appendChild(t)));
    }
  }
  function lh(l) {
    Wt.D(l), ad("dns-prefetch", l, null);
  }
  function th(l, t) {
    Wt.C(l, t), ad("preconnect", l, t);
  }
  function eh(l, t, e) {
    Wt.L(l, t, e);
    var a = Ma;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + vt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + vt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (n += '[imagesizes="' + vt(e.imageSizes) + '"]'))
        : (n += '[href="' + vt(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = _a(l);
          break;
        case "script":
          u = Oa(l);
      }
      At.has(u) ||
        ((l = D(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e
        )),
        At.set(u, l),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Tn(u))) ||
          (t === "script" && a.querySelector(En(u))) ||
          ((t = a.createElement("link")),
          Ll(t, "link", l),
          Gl(t),
          a.head.appendChild(t)));
    }
  }
  function ah(l, t) {
    Wt.m(l, t);
    var e = Ma;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Oa(l);
      }
      if (
        !At.has(u) &&
        ((l = D({ rel: "modulepreload", href: l }, t)),
        At.set(u, l),
        e.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(En(u))) return;
        }
        (a = e.createElement("link")),
          Ll(a, "link", l),
          Gl(a),
          e.head.appendChild(a);
      }
    }
  }
  function nh(l, t, e) {
    Wt.S(l, t, e);
    var a = Ma;
    if (a && l) {
      var n = Je(a).hoistableStyles,
        u = _a(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(Tn(u)))) c.loading = 5;
        else {
          (l = D({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = At.get(u)) && lf(l, e);
          var o = (i = a.createElement("link"));
          Gl(o),
            Ll(o, "link", l),
            (o._p = new Promise(function (y, E) {
              (o.onload = y), (o.onerror = E);
            })),
            o.addEventListener("load", function () {
              c.loading |= 1;
            }),
            o.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Bu(i, t, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: c }),
          n.set(u, i);
      }
    }
  }
  function uh(l, t) {
    Wt.X(l, t);
    var e = Ma;
    if (e && l) {
      var a = Je(e).hoistableScripts,
        n = Oa(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(En(n))),
        u ||
          ((l = D({ src: l, async: !0 }, t)),
          (t = At.get(n)) && tf(l, t),
          (u = e.createElement("script")),
          Gl(u),
          Ll(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function ih(l, t) {
    Wt.M(l, t);
    var e = Ma;
    if (e && l) {
      var a = Je(e).hoistableScripts,
        n = Oa(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(En(n))),
        u ||
          ((l = D({ src: l, async: !0, type: "module" }, t)),
          (t = At.get(n)) && tf(l, t),
          (u = e.createElement("script")),
          Gl(u),
          Ll(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function nd(l, t, e, a) {
    var n = (n = K.current) ? Cu(n) : null;
    if (!n) throw Error(s(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = _a(e.href)),
            (e = Je(n).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = _a(e.href);
          var u = Je(n).hoistableStyles,
            i = u.get(l);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, i),
              (u = n.querySelector(Tn(l))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              At.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                At.set(l, e),
                u || ch(n, l, e, i.state))),
            t && a === null)
          )
            throw Error(s(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Oa(e)),
              (e = Je(n).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, l));
    }
  }
  function _a(l) {
    return 'href="' + vt(l) + '"';
  }
  function Tn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ud(l) {
    return D({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function ch(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ll(t, "link", e),
        Gl(t),
        l.head.appendChild(t));
  }
  function Oa(l) {
    return '[src="' + vt(l) + '"]';
  }
  function En(l) {
    return "script[async]" + l;
  }
  function id(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + vt(e.href) + '"]');
          if (a) return (t.instance = a), Gl(a), a;
          var n = D({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Gl(a),
            Ll(a, "style", n),
            Bu(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          n = _a(e.href);
          var u = l.querySelector(Tn(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), Gl(u), u;
          (a = ud(e)),
            (n = At.get(n)) && lf(a, n),
            (u = (l.ownerDocument || l).createElement("link")),
            Gl(u);
          var i = u;
          return (
            (i._p = new Promise(function (c, o) {
              (i.onload = c), (i.onerror = o);
            })),
            Ll(u, "link", a),
            (t.state.loading |= 4),
            Bu(u, e.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Oa(e.src)),
            (n = l.querySelector(En(u)))
              ? ((t.instance = n), Gl(n), n)
              : ((a = e),
                (n = At.get(u)) && ((a = D({}, e)), tf(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                Gl(n),
                Ll(n, "link", a),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Bu(a, e.precedence, l));
    return t.instance;
  }
  function Bu(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function lf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function tf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Yu = null;
  function cd(l, t, e) {
    if (Yu === null) {
      var a = new Map(),
        n = (Yu = new Map());
      n.set(e, a);
    } else (n = Yu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), n = 0;
      n < e.length;
      n++
    ) {
      var u = e[n];
      if (
        !(
          u[Ca] ||
          u[Kl] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function fd(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function fh(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function sd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var zn = null;
  function sh() {}
  function oh(l, t, e) {
    if (zn === null) throw Error(s(475));
    var a = zn;
    if (
      t.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = _a(e.href),
          u = l.querySelector(Tn(n));
        if (u) {
          (l = u._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (a.count++, (a = Gu.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            Gl(u);
          return;
        }
        (u = l.ownerDocument || l),
          (e = ud(e)),
          (n = At.get(n)) && lf(e, n),
          (u = u.createElement("link")),
          Gl(u);
        var i = u;
        (i._p = new Promise(function (c, o) {
          (i.onload = c), (i.onerror = o);
        })),
          Ll(u, "link", e),
          (t.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Gu.bind(a)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function rh() {
    if (zn === null) throw Error(s(475));
    var l = zn;
    return (
      l.stylesheets && l.count === 0 && ef(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var e = setTimeout(function () {
              if ((l.stylesheets && ef(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Gu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ef(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var wu = null;
  function ef(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (wu = new Map()),
        t.forEach(dh, l),
        (wu = null),
        Gu.call(l));
  }
  function dh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = wu.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), wu.set(l, e);
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = e.get(i) || a),
        u === a && e.set(null, n),
        e.set(i, n),
        this.count++,
        (a = Gu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Nn = {
    $$typeof: El,
    Provider: null,
    Consumer: null,
    _currentValue: j,
    _currentValue2: j,
    _threadCount: 0,
  };
  function mh(l, t, e, a, n, u, i, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Iu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Iu(0)),
      (this.hiddenUpdates = Iu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function od(l, t, e, a, n, u, i, c, o, y, E, N) {
    return (
      (l = new mh(l, t, e, i, c, o, y, N)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ct(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = Bi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Xi(u),
      l
    );
  }
  function rd(l) {
    return l ? ((l = ia), l) : ia;
  }
  function dd(l, t, e, a, n, u) {
    (n = rd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ue(t)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = ie(l, a, t)),
      e !== null && (dt(e, l, t), tn(e, l, t));
  }
  function md(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function af(l, t) {
    md(l, t), (l = l.alternate) && md(l, t);
  }
  function hd(l) {
    if (l.tag === 13) {
      var t = ua(l, 67108864);
      t !== null && dt(t, l, 67108864), af(l, 67108864);
    }
  }
  var Xu = !0;
  function hh(l, t, e, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      (U.p = 2), nf(l, t, e, a);
    } finally {
      (U.p = u), (A.T = n);
    }
  }
  function vh(l, t, e, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      (U.p = 8), nf(l, t, e, a);
    } finally {
      (U.p = u), (A.T = n);
    }
  }
  function nf(l, t, e, a) {
    if (Xu) {
      var n = uf(a);
      if (n === null) Lc(l, t, a, Qu, e), yd(l, a);
      else if (gh(n, l, t, e, a)) a.stopPropagation();
      else if ((yd(l, a), t & 4 && -1 < yh.indexOf(l))) {
        for (; n !== null; ) {
          var u = ke(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = ze(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var o = 1 << (31 - ut(i));
                      (c.entanglements[1] |= o), (i &= ~o);
                    }
                    Ut(u), (sl & 6) === 0 && ((zu = _t() + 500), pn(0));
                  }
                }
                break;
              case 13:
                (c = ua(u, 2)), c !== null && dt(c, u, 2), Mu(), af(u, 2);
            }
          if (((u = uf(a)), u === null && Lc(l, t, a, Qu, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Lc(l, t, a, null, e);
    }
  }
  function uf(l) {
    return (l = oi(l)), cf(l);
  }
  var Qu = null;
  function cf(l) {
    if (((Qu = null), (l = Ke(l)), l !== null)) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = H(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Qu = l), null;
  }
  function vd(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (tm()) {
          case _f:
            return 2;
          case Of:
            return 8;
          case Hn:
          case em:
            return 32;
          case jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ff = !1,
    pe = null,
    xe = null,
    Se = null,
    Mn = new Map(),
    _n = new Map(),
    Ae = [],
    yh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function yd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        pe = null;
        break;
      case "dragenter":
      case "dragleave":
        xe = null;
        break;
      case "mouseover":
      case "mouseout":
        Se = null;
        break;
      case "pointerover":
      case "pointerout":
        Mn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(t.pointerId);
    }
  }
  function On(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = ke(t)), t !== null && hd(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l);
  }
  function gh(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return (pe = On(pe, l, t, e, a, n)), !0;
      case "dragenter":
        return (xe = On(xe, l, t, e, a, n)), !0;
      case "mouseover":
        return (Se = On(Se, l, t, e, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Mn.set(u, On(Mn.get(u) || null, l, t, e, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), _n.set(u, On(_n.get(u) || null, l, t, e, a, n)), !0
        );
    }
    return !1;
  }
  function gd(l) {
    var t = Ke(l.target);
    if (t !== null) {
      var e = O(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = H(e)), t !== null)) {
            (l.blockedOn = t),
              om(l.priority, function () {
                if (e.tag === 13) {
                  var a = rt();
                  a = Pu(a);
                  var n = ua(e, a);
                  n !== null && dt(n, e, a), af(e, a);
                }
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Zu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = uf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (si = a), e.target.dispatchEvent(a), (si = null);
      } else return (t = ke(e)), t !== null && hd(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function bd(l, t, e) {
    Zu(l) && e.delete(t);
  }
  function bh() {
    (ff = !1),
      pe !== null && Zu(pe) && (pe = null),
      xe !== null && Zu(xe) && (xe = null),
      Se !== null && Zu(Se) && (Se = null),
      Mn.forEach(bd),
      _n.forEach(bd);
  }
  function Vu(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ff ||
        ((ff = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, bh)));
  }
  var Lu = null;
  function pd(l) {
    Lu !== l &&
      ((Lu = l),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Lu === l && (Lu = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            n = l[t + 2];
          if (typeof a != "function") {
            if (cf(a || e) === null) continue;
            break;
          }
          var u = ke(e);
          u !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ic(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function jn(l) {
    function t(o) {
      return Vu(o, l);
    }
    pe !== null && Vu(pe, l),
      xe !== null && Vu(xe, l),
      Se !== null && Vu(Se, l),
      Mn.forEach(t),
      _n.forEach(t);
    for (var e = 0; e < Ae.length; e++) {
      var a = Ae[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ae.length && ((e = Ae[0]), e.blockedOn === null); )
      gd(e), e.blockedOn === null && Ae.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          i = n[Il] || null;
        if (typeof u == "function") i || pd(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Il] || null))) c = i.formAction;
            else if (cf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
            pd(e);
        }
      }
  }
  function sf(l) {
    this._internalRoot = l;
  }
  (Ku.prototype.render = sf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var e = t.current,
        a = rt();
      dd(e, a, l, t, null, null);
    }),
    (Ku.prototype.unmount = sf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          dd(l.current, 2, null, l, null, null), Mu(), (t[Le] = null);
        }
      });
  function Ku(l) {
    this._internalRoot = l;
  }
  Ku.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = qf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Ae.length && t !== 0 && t < Ae[e].priority; e++);
      Ae.splice(e, 0, l), e === 0 && gd(l);
    }
  };
  var xd = x.version;
  if (xd !== "19.1.0") throw Error(s(527, xd, "19.1.0"));
  U.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(s(188))
        : ((l = Object.keys(l).join(",")), Error(s(268, l)));
    return (
      (l = _(t)),
      (l = l !== null ? S(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var ph = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ku.isDisabled && ku.supportsFiber)
      try {
        (Ua = ku.inject(ph)), (nt = ku);
      } catch {}
  }
  return (
    (Dn.createRoot = function (l, t) {
      if (!T(l)) throw Error(s(299));
      var e = !1,
        a = "",
        n = Co,
        u = Bo,
        i = Yo,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (c = t.unstable_transitionCallbacks)),
        (t = od(l, 1, !1, null, null, e, a, n, u, i, c, null)),
        (l[Le] = t.current),
        Vc(l),
        new sf(t)
      );
    }),
    (Dn.hydrateRoot = function (l, t, e) {
      if (!T(l)) throw Error(s(299));
      var a = !1,
        n = "",
        u = Co,
        i = Bo,
        c = Yo,
        o = null,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (o = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (y = e.formState)),
        (t = od(l, 1, !0, t, e ?? null, a, n, u, i, c, o, y)),
        (t.context = rd(null)),
        (e = t.current),
        (a = rt()),
        (a = Pu(a)),
        (n = ue(a)),
        (n.callback = null),
        ie(e, n, a),
        (e = a),
        (t.current.lanes = e),
        qa(t, e),
        Ut(t),
        (l[Le] = t.current),
        Vc(l),
        new Ku(t)
      );
    }),
    (Dn.version = "19.1.0"),
    Dn
  );
}
var jd;
function Oh() {
  if (jd) return df.exports;
  jd = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (x) {
        console.error(x);
      }
  }
  return f(), (df.exports = _h()), df.exports;
}
var jh = Oh();
function Rd(f, x) {
  if (typeof f == "function") return f(x);
  f != null && (f.current = x);
}
function Rh(...f) {
  return (x) => {
    let b = !1;
    const s = f.map((T) => {
      const O = Rd(T, x);
      return !b && typeof O == "function" && (b = !0), O;
    });
    if (b)
      return () => {
        for (let T = 0; T < s.length; T++) {
          const O = s[T];
          typeof O == "function" ? O() : Rd(f[T], null);
        }
      };
  };
}
function Dh(...f) {
  return xl.useCallback(Rh(...f), f);
}
function Uh(f) {
  const x = qh(f),
    b = xl.forwardRef((s, T) => {
      const { children: O, ...H } = s,
        Q = xl.Children.toArray(O),
        _ = Q.find(Bh);
      if (_) {
        const S = _.props.children,
          D = Q.map((k) =>
            k === _
              ? xl.Children.count(S) > 1
                ? xl.Children.only(null)
                : xl.isValidElement(S)
                ? S.props.children
                : null
              : k
          );
        return h.jsx(x, {
          ...H,
          ref: T,
          children: xl.isValidElement(S) ? xl.cloneElement(S, void 0, D) : null,
        });
      }
      return h.jsx(x, { ...H, ref: T, children: O });
    });
  return (b.displayName = `${f}.Slot`), b;
}
var Hh = Uh("Slot");
function qh(f) {
  const x = xl.forwardRef((b, s) => {
    const { children: T, ...O } = b,
      H = xl.isValidElement(T) ? Gh(T) : void 0,
      Q = Dh(H, s);
    if (xl.isValidElement(T)) {
      const _ = Yh(O, T.props);
      return T.type !== xl.Fragment && (_.ref = Q), xl.cloneElement(T, _);
    }
    return xl.Children.count(T) > 1 ? xl.Children.only(null) : null;
  });
  return (x.displayName = `${f}.SlotClone`), x;
}
var Ch = Symbol("radix.slottable");
function Bh(f) {
  return (
    xl.isValidElement(f) &&
    typeof f.type == "function" &&
    "__radixId" in f.type &&
    f.type.__radixId === Ch
  );
}
function Yh(f, x) {
  const b = { ...x };
  for (const s in x) {
    const T = f[s],
      O = x[s];
    /^on[A-Z]/.test(s)
      ? T && O
        ? (b[s] = (...Q) => {
            const _ = O(...Q);
            return T(...Q), _;
          })
        : T && (b[s] = T)
      : s === "style"
      ? (b[s] = { ...T, ...O })
      : s === "className" && (b[s] = [T, O].filter(Boolean).join(" "));
  }
  return { ...f, ...b };
}
function Gh(f) {
  var s, T;
  let x =
      (s = Object.getOwnPropertyDescriptor(f.props, "ref")) == null
        ? void 0
        : s.get,
    b = x && "isReactWarning" in x && x.isReactWarning;
  return b
    ? f.ref
    : ((x =
        (T = Object.getOwnPropertyDescriptor(f, "ref")) == null
          ? void 0
          : T.get),
      (b = x && "isReactWarning" in x && x.isReactWarning),
      b ? f.props.ref : f.props.ref || f.ref);
}
function wd(f) {
  var x,
    b,
    s = "";
  if (typeof f == "string" || typeof f == "number") s += f;
  else if (typeof f == "object")
    if (Array.isArray(f)) {
      var T = f.length;
      for (x = 0; x < T; x++)
        f[x] && (b = wd(f[x])) && (s && (s += " "), (s += b));
    } else for (b in f) f[b] && (s && (s += " "), (s += b));
  return s;
}
function Xd() {
  for (var f, x, b = 0, s = "", T = arguments.length; b < T; b++)
    (f = arguments[b]) && (x = wd(f)) && (s && (s += " "), (s += x));
  return s;
}
const Dd = (f) => (typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f),
  Ud = Xd,
  wh = (f, x) => (b) => {
    var s;
    if ((x == null ? void 0 : x.variants) == null)
      return Ud(
        f,
        b == null ? void 0 : b.class,
        b == null ? void 0 : b.className
      );
    const { variants: T, defaultVariants: O } = x,
      H = Object.keys(T).map((S) => {
        const D = b == null ? void 0 : b[S],
          k = O == null ? void 0 : O[S];
        if (D === null) return null;
        const W = Dd(D) || Dd(k);
        return T[S][W];
      }),
      Q =
        b &&
        Object.entries(b).reduce((S, D) => {
          let [k, W] = D;
          return W === void 0 || (S[k] = W), S;
        }, {}),
      _ =
        x == null || (s = x.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((S, D) => {
              let { class: k, className: W, ...Sl } = D;
              return Object.entries(Sl).every((cl) => {
                let [yl, bl] = cl;
                return Array.isArray(bl)
                  ? bl.includes({ ...O, ...Q }[yl])
                  : { ...O, ...Q }[yl] === bl;
              })
                ? [...S, k, W]
                : S;
            }, []);
    return Ud(
      f,
      H,
      _,
      b == null ? void 0 : b.class,
      b == null ? void 0 : b.className
    );
  },
  Nf = "-",
  Xh = (f) => {
    const x = Zh(f),
      { conflictingClassGroups: b, conflictingClassGroupModifiers: s } = f;
    return {
      getClassGroupId: (H) => {
        const Q = H.split(Nf);
        return Q[0] === "" && Q.length !== 1 && Q.shift(), Qd(Q, x) || Qh(H);
      },
      getConflictingClassGroupIds: (H, Q) => {
        const _ = b[H] || [];
        return Q && s[H] ? [..._, ...s[H]] : _;
      },
    };
  },
  Qd = (f, x) => {
    var H;
    if (f.length === 0) return x.classGroupId;
    const b = f[0],
      s = x.nextPart.get(b),
      T = s ? Qd(f.slice(1), s) : void 0;
    if (T) return T;
    if (x.validators.length === 0) return;
    const O = f.join(Nf);
    return (H = x.validators.find(({ validator: Q }) => Q(O))) == null
      ? void 0
      : H.classGroupId;
  },
  Hd = /^\[(.+)\]$/,
  Qh = (f) => {
    if (Hd.test(f)) {
      const x = Hd.exec(f)[1],
        b = x == null ? void 0 : x.substring(0, x.indexOf(":"));
      if (b) return "arbitrary.." + b;
    }
  },
  Zh = (f) => {
    const { theme: x, classGroups: b } = f,
      s = { nextPart: new Map(), validators: [] };
    for (const T in b) Af(b[T], s, T, x);
    return s;
  },
  Af = (f, x, b, s) => {
    f.forEach((T) => {
      if (typeof T == "string") {
        const O = T === "" ? x : qd(x, T);
        O.classGroupId = b;
        return;
      }
      if (typeof T == "function") {
        if (Vh(T)) {
          Af(T(s), x, b, s);
          return;
        }
        x.validators.push({ validator: T, classGroupId: b });
        return;
      }
      Object.entries(T).forEach(([O, H]) => {
        Af(H, qd(x, O), b, s);
      });
    });
  },
  qd = (f, x) => {
    let b = f;
    return (
      x.split(Nf).forEach((s) => {
        b.nextPart.has(s) ||
          b.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (b = b.nextPart.get(s));
      }),
      b
    );
  },
  Vh = (f) => f.isThemeGetter,
  Lh = (f) => {
    if (f < 1) return { get: () => {}, set: () => {} };
    let x = 0,
      b = new Map(),
      s = new Map();
    const T = (O, H) => {
      b.set(O, H), x++, x > f && ((x = 0), (s = b), (b = new Map()));
    };
    return {
      get(O) {
        let H = b.get(O);
        if (H !== void 0) return H;
        if ((H = s.get(O)) !== void 0) return T(O, H), H;
      },
      set(O, H) {
        b.has(O) ? b.set(O, H) : T(O, H);
      },
    };
  },
  Tf = "!",
  Ef = ":",
  Kh = Ef.length,
  kh = (f) => {
    const { prefix: x, experimentalParseClassName: b } = f;
    let s = (T) => {
      const O = [];
      let H = 0,
        Q = 0,
        _ = 0,
        S;
      for (let cl = 0; cl < T.length; cl++) {
        let yl = T[cl];
        if (H === 0 && Q === 0) {
          if (yl === Ef) {
            O.push(T.slice(_, cl)), (_ = cl + Kh);
            continue;
          }
          if (yl === "/") {
            S = cl;
            continue;
          }
        }
        yl === "["
          ? H++
          : yl === "]"
          ? H--
          : yl === "("
          ? Q++
          : yl === ")" && Q--;
      }
      const D = O.length === 0 ? T : T.substring(_),
        k = Jh(D),
        W = k !== D,
        Sl = S && S > _ ? S - _ : void 0;
      return {
        modifiers: O,
        hasImportantModifier: W,
        baseClassName: k,
        maybePostfixModifierPosition: Sl,
      };
    };
    if (x) {
      const T = x + Ef,
        O = s;
      s = (H) =>
        H.startsWith(T)
          ? O(H.substring(T.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: H,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (b) {
      const T = s;
      s = (O) => b({ className: O, parseClassName: T });
    }
    return s;
  },
  Jh = (f) =>
    f.endsWith(Tf)
      ? f.substring(0, f.length - 1)
      : f.startsWith(Tf)
      ? f.substring(1)
      : f,
  Wh = (f) => {
    const x = Object.fromEntries(f.orderSensitiveModifiers.map((s) => [s, !0]));
    return (s) => {
      if (s.length <= 1) return s;
      const T = [];
      let O = [];
      return (
        s.forEach((H) => {
          H[0] === "[" || x[H] ? (T.push(...O.sort(), H), (O = [])) : O.push(H);
        }),
        T.push(...O.sort()),
        T
      );
    };
  },
  $h = (f) => ({
    cache: Lh(f.cacheSize),
    parseClassName: kh(f),
    sortModifiers: Wh(f),
    ...Xh(f),
  }),
  Fh = /\s+/,
  Ih = (f, x) => {
    const {
        parseClassName: b,
        getClassGroupId: s,
        getConflictingClassGroupIds: T,
        sortModifiers: O,
      } = x,
      H = [],
      Q = f.trim().split(Fh);
    let _ = "";
    for (let S = Q.length - 1; S >= 0; S -= 1) {
      const D = Q[S],
        {
          isExternal: k,
          modifiers: W,
          hasImportantModifier: Sl,
          baseClassName: cl,
          maybePostfixModifierPosition: yl,
        } = b(D);
      if (k) {
        _ = D + (_.length > 0 ? " " + _ : _);
        continue;
      }
      let bl = !!yl,
        Wl = s(bl ? cl.substring(0, yl) : cl);
      if (!Wl) {
        if (!bl) {
          _ = D + (_.length > 0 ? " " + _ : _);
          continue;
        }
        if (((Wl = s(cl)), !Wl)) {
          _ = D + (_.length > 0 ? " " + _ : _);
          continue;
        }
        bl = !1;
      }
      const Fl = O(W).join(":"),
        El = Sl ? Fl + Tf : Fl,
        Yl = El + Wl;
      if (H.includes(Yl)) continue;
      H.push(Yl);
      const $ = T(Wl, bl);
      for (let Ml = 0; Ml < $.length; ++Ml) {
        const Hl = $[Ml];
        H.push(El + Hl);
      }
      _ = D + (_.length > 0 ? " " + _ : _);
    }
    return _;
  };
function Ph() {
  let f = 0,
    x,
    b,
    s = "";
  for (; f < arguments.length; )
    (x = arguments[f++]) && (b = Zd(x)) && (s && (s += " "), (s += b));
  return s;
}
const Zd = (f) => {
  if (typeof f == "string") return f;
  let x,
    b = "";
  for (let s = 0; s < f.length; s++)
    f[s] && (x = Zd(f[s])) && (b && (b += " "), (b += x));
  return b;
};
function lv(f, ...x) {
  let b,
    s,
    T,
    O = H;
  function H(_) {
    const S = x.reduce((D, k) => k(D), f());
    return (b = $h(S)), (s = b.cache.get), (T = b.cache.set), (O = Q), Q(_);
  }
  function Q(_) {
    const S = s(_);
    if (S) return S;
    const D = Ih(_, b);
    return T(_, D), D;
  }
  return function () {
    return O(Ph.apply(null, arguments));
  };
}
const Bl = (f) => {
    const x = (b) => b[f] || [];
    return (x.isThemeGetter = !0), x;
  },
  Vd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ld = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  tv = /^\d+\/\d+$/,
  ev = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  av =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  nv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  uv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  iv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ja = (f) => tv.test(f),
  I = (f) => !!f && !Number.isNaN(Number(f)),
  Ee = (f) => !!f && Number.isInteger(Number(f)),
  yf = (f) => f.endsWith("%") && I(f.slice(0, -1)),
  $t = (f) => ev.test(f),
  cv = () => !0,
  fv = (f) => av.test(f) && !nv.test(f),
  Kd = () => !1,
  sv = (f) => uv.test(f),
  ov = (f) => iv.test(f),
  rv = (f) => !Y(f) && !G(f),
  dv = (f) => Ra(f, Wd, Kd),
  Y = (f) => Vd.test(f),
  Ze = (f) => Ra(f, $d, fv),
  gf = (f) => Ra(f, gv, I),
  Cd = (f) => Ra(f, kd, Kd),
  mv = (f) => Ra(f, Jd, ov),
  Ju = (f) => Ra(f, Fd, sv),
  G = (f) => Ld.test(f),
  Un = (f) => Da(f, $d),
  hv = (f) => Da(f, bv),
  Bd = (f) => Da(f, kd),
  vv = (f) => Da(f, Wd),
  yv = (f) => Da(f, Jd),
  Wu = (f) => Da(f, Fd, !0),
  Ra = (f, x, b) => {
    const s = Vd.exec(f);
    return s ? (s[1] ? x(s[1]) : b(s[2])) : !1;
  },
  Da = (f, x, b = !1) => {
    const s = Ld.exec(f);
    return s ? (s[1] ? x(s[1]) : b) : !1;
  },
  kd = (f) => f === "position" || f === "percentage",
  Jd = (f) => f === "image" || f === "url",
  Wd = (f) => f === "length" || f === "size" || f === "bg-size",
  $d = (f) => f === "length",
  gv = (f) => f === "number",
  bv = (f) => f === "family-name",
  Fd = (f) => f === "shadow",
  pv = () => {
    const f = Bl("color"),
      x = Bl("font"),
      b = Bl("text"),
      s = Bl("font-weight"),
      T = Bl("tracking"),
      O = Bl("leading"),
      H = Bl("breakpoint"),
      Q = Bl("container"),
      _ = Bl("spacing"),
      S = Bl("radius"),
      D = Bl("shadow"),
      k = Bl("inset-shadow"),
      W = Bl("text-shadow"),
      Sl = Bl("drop-shadow"),
      cl = Bl("blur"),
      yl = Bl("perspective"),
      bl = Bl("aspect"),
      Wl = Bl("ease"),
      Fl = Bl("animate"),
      El = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Yl = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      $ = () => [...Yl(), G, Y],
      Ml = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Hl = () => ["auto", "contain", "none"],
      X = () => [G, Y, _],
      Rl = () => [ja, "full", "auto", ...X()],
      Ht = () => [Ee, "none", "subgrid", G, Y],
      mt = () => ["auto", { span: ["full", Ee, G, Y] }, Ee, G, Y],
      _l = () => [Ee, "auto", G, Y],
      Mt = () => ["auto", "min", "max", "fr", G, Y],
      Tt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Al = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      A = () => ["auto", ...X()],
      U = () => [
        ja,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      j = () => [f, G, Y],
      fl = () => [...Yl(), Bd, Cd, { position: [G, Y] }],
      r = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      M = () => ["auto", "cover", "contain", vv, dv, { size: [G, Y] }],
      q = () => [yf, Un, Ze],
      R = () => ["", "none", "full", S, G, Y],
      C = () => ["", I, Un, Ze],
      ll = () => ["solid", "dashed", "dotted", "double"],
      K = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      nl = () => [I, yf, Bd, Cd],
      hl = () => ["", "none", cl, G, Y],
      at = () => ["none", I, G, Y],
      Ft = () => ["none", I, G, Y],
      It = () => [I, G, Y],
      Pt = () => [ja, "full", ...X()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [$t],
        breakpoint: [$t],
        color: [cv],
        container: [$t],
        "drop-shadow": [$t],
        ease: ["in", "out", "in-out"],
        font: [rv],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [$t],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [$t],
        shadow: [$t],
        spacing: ["px", I],
        text: [$t],
        "text-shadow": [$t],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ja, Y, G, bl] }],
        container: ["container"],
        columns: [{ columns: [I, Y, G, Q] }],
        "break-after": [{ "break-after": El() }],
        "break-before": [{ "break-before": El() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: $() }],
        overflow: [{ overflow: Ml() }],
        "overflow-x": [{ "overflow-x": Ml() }],
        "overflow-y": [{ "overflow-y": Ml() }],
        overscroll: [{ overscroll: Hl() }],
        "overscroll-x": [{ "overscroll-x": Hl() }],
        "overscroll-y": [{ "overscroll-y": Hl() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Rl() }],
        "inset-x": [{ "inset-x": Rl() }],
        "inset-y": [{ "inset-y": Rl() }],
        start: [{ start: Rl() }],
        end: [{ end: Rl() }],
        top: [{ top: Rl() }],
        right: [{ right: Rl() }],
        bottom: [{ bottom: Rl() }],
        left: [{ left: Rl() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Ee, "auto", G, Y] }],
        basis: [{ basis: [ja, "full", "auto", Q, ...X()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [I, ja, "auto", "initial", "none", Y] }],
        grow: [{ grow: ["", I, G, Y] }],
        shrink: [{ shrink: ["", I, G, Y] }],
        order: [{ order: [Ee, "first", "last", "none", G, Y] }],
        "grid-cols": [{ "grid-cols": Ht() }],
        "col-start-end": [{ col: mt() }],
        "col-start": [{ "col-start": _l() }],
        "col-end": [{ "col-end": _l() }],
        "grid-rows": [{ "grid-rows": Ht() }],
        "row-start-end": [{ row: mt() }],
        "row-start": [{ "row-start": _l() }],
        "row-end": [{ "row-end": _l() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Mt() }],
        "auto-rows": [{ "auto-rows": Mt() }],
        gap: [{ gap: X() }],
        "gap-x": [{ "gap-x": X() }],
        "gap-y": [{ "gap-y": X() }],
        "justify-content": [{ justify: [...Tt(), "normal"] }],
        "justify-items": [{ "justify-items": [...Al(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Al()] }],
        "align-content": [{ content: ["normal", ...Tt()] }],
        "align-items": [{ items: [...Al(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Al(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Tt() }],
        "place-items": [{ "place-items": [...Al(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Al()] }],
        p: [{ p: X() }],
        px: [{ px: X() }],
        py: [{ py: X() }],
        ps: [{ ps: X() }],
        pe: [{ pe: X() }],
        pt: [{ pt: X() }],
        pr: [{ pr: X() }],
        pb: [{ pb: X() }],
        pl: [{ pl: X() }],
        m: [{ m: A() }],
        mx: [{ mx: A() }],
        my: [{ my: A() }],
        ms: [{ ms: A() }],
        me: [{ me: A() }],
        mt: [{ mt: A() }],
        mr: [{ mr: A() }],
        mb: [{ mb: A() }],
        ml: [{ ml: A() }],
        "space-x": [{ "space-x": X() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": X() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: U() }],
        w: [{ w: [Q, "screen", ...U()] }],
        "min-w": [{ "min-w": [Q, "screen", "none", ...U()] }],
        "max-w": [
          { "max-w": [Q, "screen", "none", "prose", { screen: [H] }, ...U()] },
        ],
        h: [{ h: ["screen", "lh", ...U()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...U()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...U()] }],
        "font-size": [{ text: ["base", b, Un, Ze] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, G, gf] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              yf,
              Y,
            ],
          },
        ],
        "font-family": [{ font: [hv, Y, x] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [T, G, Y] }],
        "line-clamp": [{ "line-clamp": [I, "none", G, gf] }],
        leading: [{ leading: [O, ...X()] }],
        "list-image": [{ "list-image": ["none", G, Y] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", G, Y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: j() }],
        "text-color": [{ text: j() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ll(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [I, "from-font", "auto", G, Ze] },
        ],
        "text-decoration-color": [{ decoration: j() }],
        "underline-offset": [{ "underline-offset": [I, "auto", G, Y] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
              Y,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G, Y] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: fl() }],
        "bg-repeat": [{ bg: r() }],
        "bg-size": [{ bg: M() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Ee,
                  G,
                  Y,
                ],
                radial: ["", G, Y],
                conic: [Ee, G, Y],
              },
              yv,
              mv,
            ],
          },
        ],
        "bg-color": [{ bg: j() }],
        "gradient-from-pos": [{ from: q() }],
        "gradient-via-pos": [{ via: q() }],
        "gradient-to-pos": [{ to: q() }],
        "gradient-from": [{ from: j() }],
        "gradient-via": [{ via: j() }],
        "gradient-to": [{ to: j() }],
        rounded: [{ rounded: R() }],
        "rounded-s": [{ "rounded-s": R() }],
        "rounded-e": [{ "rounded-e": R() }],
        "rounded-t": [{ "rounded-t": R() }],
        "rounded-r": [{ "rounded-r": R() }],
        "rounded-b": [{ "rounded-b": R() }],
        "rounded-l": [{ "rounded-l": R() }],
        "rounded-ss": [{ "rounded-ss": R() }],
        "rounded-se": [{ "rounded-se": R() }],
        "rounded-ee": [{ "rounded-ee": R() }],
        "rounded-es": [{ "rounded-es": R() }],
        "rounded-tl": [{ "rounded-tl": R() }],
        "rounded-tr": [{ "rounded-tr": R() }],
        "rounded-br": [{ "rounded-br": R() }],
        "rounded-bl": [{ "rounded-bl": R() }],
        "border-w": [{ border: C() }],
        "border-w-x": [{ "border-x": C() }],
        "border-w-y": [{ "border-y": C() }],
        "border-w-s": [{ "border-s": C() }],
        "border-w-e": [{ "border-e": C() }],
        "border-w-t": [{ "border-t": C() }],
        "border-w-r": [{ "border-r": C() }],
        "border-w-b": [{ "border-b": C() }],
        "border-w-l": [{ "border-l": C() }],
        "divide-x": [{ "divide-x": C() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": C() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ll(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ll(), "hidden", "none"] }],
        "border-color": [{ border: j() }],
        "border-color-x": [{ "border-x": j() }],
        "border-color-y": [{ "border-y": j() }],
        "border-color-s": [{ "border-s": j() }],
        "border-color-e": [{ "border-e": j() }],
        "border-color-t": [{ "border-t": j() }],
        "border-color-r": [{ "border-r": j() }],
        "border-color-b": [{ "border-b": j() }],
        "border-color-l": [{ "border-l": j() }],
        "divide-color": [{ divide: j() }],
        "outline-style": [{ outline: [...ll(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [I, G, Y] }],
        "outline-w": [{ outline: ["", I, Un, Ze] }],
        "outline-color": [{ outline: j() }],
        shadow: [{ shadow: ["", "none", D, Wu, Ju] }],
        "shadow-color": [{ shadow: j() }],
        "inset-shadow": [{ "inset-shadow": ["none", k, Wu, Ju] }],
        "inset-shadow-color": [{ "inset-shadow": j() }],
        "ring-w": [{ ring: C() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: j() }],
        "ring-offset-w": [{ "ring-offset": [I, Ze] }],
        "ring-offset-color": [{ "ring-offset": j() }],
        "inset-ring-w": [{ "inset-ring": C() }],
        "inset-ring-color": [{ "inset-ring": j() }],
        "text-shadow": [{ "text-shadow": ["none", W, Wu, Ju] }],
        "text-shadow-color": [{ "text-shadow": j() }],
        opacity: [{ opacity: [I, G, Y] }],
        "mix-blend": [{ "mix-blend": [...K(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": K() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [I] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": nl() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": nl() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": j() }],
        "mask-image-t-from-pos": [{ "mask-t-from": nl() }],
        "mask-image-t-to-pos": [{ "mask-t-to": nl() }],
        "mask-image-t-from-color": [{ "mask-t-from": j() }],
        "mask-image-t-to-color": [{ "mask-t-to": j() }],
        "mask-image-r-from-pos": [{ "mask-r-from": nl() }],
        "mask-image-r-to-pos": [{ "mask-r-to": nl() }],
        "mask-image-r-from-color": [{ "mask-r-from": j() }],
        "mask-image-r-to-color": [{ "mask-r-to": j() }],
        "mask-image-b-from-pos": [{ "mask-b-from": nl() }],
        "mask-image-b-to-pos": [{ "mask-b-to": nl() }],
        "mask-image-b-from-color": [{ "mask-b-from": j() }],
        "mask-image-b-to-color": [{ "mask-b-to": j() }],
        "mask-image-l-from-pos": [{ "mask-l-from": nl() }],
        "mask-image-l-to-pos": [{ "mask-l-to": nl() }],
        "mask-image-l-from-color": [{ "mask-l-from": j() }],
        "mask-image-l-to-color": [{ "mask-l-to": j() }],
        "mask-image-x-from-pos": [{ "mask-x-from": nl() }],
        "mask-image-x-to-pos": [{ "mask-x-to": nl() }],
        "mask-image-x-from-color": [{ "mask-x-from": j() }],
        "mask-image-x-to-color": [{ "mask-x-to": j() }],
        "mask-image-y-from-pos": [{ "mask-y-from": nl() }],
        "mask-image-y-to-pos": [{ "mask-y-to": nl() }],
        "mask-image-y-from-color": [{ "mask-y-from": j() }],
        "mask-image-y-to-color": [{ "mask-y-to": j() }],
        "mask-image-radial": [{ "mask-radial": [G, Y] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": nl() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": nl() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": j() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Yl() }],
        "mask-image-conic-pos": [{ "mask-conic": [I] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": nl() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": nl() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": j() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: fl() }],
        "mask-repeat": [{ mask: r() }],
        "mask-size": [{ mask: M() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", G, Y] }],
        filter: [{ filter: ["", "none", G, Y] }],
        blur: [{ blur: hl() }],
        brightness: [{ brightness: [I, G, Y] }],
        contrast: [{ contrast: [I, G, Y] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Sl, Wu, Ju] }],
        "drop-shadow-color": [{ "drop-shadow": j() }],
        grayscale: [{ grayscale: ["", I, G, Y] }],
        "hue-rotate": [{ "hue-rotate": [I, G, Y] }],
        invert: [{ invert: ["", I, G, Y] }],
        saturate: [{ saturate: [I, G, Y] }],
        sepia: [{ sepia: ["", I, G, Y] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", G, Y] }],
        "backdrop-blur": [{ "backdrop-blur": hl() }],
        "backdrop-brightness": [{ "backdrop-brightness": [I, G, Y] }],
        "backdrop-contrast": [{ "backdrop-contrast": [I, G, Y] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", I, G, Y] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [I, G, Y] }],
        "backdrop-invert": [{ "backdrop-invert": ["", I, G, Y] }],
        "backdrop-opacity": [{ "backdrop-opacity": [I, G, Y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [I, G, Y] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", I, G, Y] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": X() }],
        "border-spacing-x": [{ "border-spacing-x": X() }],
        "border-spacing-y": [{ "border-spacing-y": X() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              G,
              Y,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [I, "initial", G, Y] }],
        ease: [{ ease: ["linear", "initial", Wl, G, Y] }],
        delay: [{ delay: [I, G, Y] }],
        animate: [{ animate: ["none", Fl, G, Y] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [yl, G, Y] }],
        "perspective-origin": [{ "perspective-origin": $() }],
        rotate: [{ rotate: at() }],
        "rotate-x": [{ "rotate-x": at() }],
        "rotate-y": [{ "rotate-y": at() }],
        "rotate-z": [{ "rotate-z": at() }],
        scale: [{ scale: Ft() }],
        "scale-x": [{ "scale-x": Ft() }],
        "scale-y": [{ "scale-y": Ft() }],
        "scale-z": [{ "scale-z": Ft() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: It() }],
        "skew-x": [{ "skew-x": It() }],
        "skew-y": [{ "skew-y": It() }],
        transform: [{ transform: [G, Y, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: $() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Pt() }],
        "translate-x": [{ "translate-x": Pt() }],
        "translate-y": [{ "translate-y": Pt() }],
        "translate-z": [{ "translate-z": Pt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: j() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: j() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
              Y,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G, Y] },
        ],
        fill: [{ fill: ["none", ...j()] }],
        "stroke-w": [{ stroke: [I, Un, Ze, gf] }],
        stroke: [{ stroke: ["none", ...j()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
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
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  xv = lv(pv);
function Mf(...f) {
  return xv(Xd(f));
}
const Sv = wh(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function bf({ className: f, variant: x, size: b, asChild: s = !1, ...T }) {
  const O = s ? Hh : "button";
  return h.jsx(O, {
    "data-slot": "button",
    className: Mf(Sv({ variant: x, size: b, className: f })),
    ...T,
  });
}
function pf({ className: f, ...x }) {
  return h.jsx("div", {
    "data-slot": "card",
    className: Mf(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      f
    ),
    ...x,
  });
}
function xf({ className: f, ...x }) {
  return h.jsx("div", {
    "data-slot": "card-content",
    className: Mf("px-6", f),
    ...x,
  });
}
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Av = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Tv = (f) =>
    f.replace(/^([A-Z])|[\s-_]+(\w)/g, (x, b, s) =>
      s ? s.toUpperCase() : b.toLowerCase()
    ),
  Yd = (f) => {
    const x = Tv(f);
    return x.charAt(0).toUpperCase() + x.slice(1);
  },
  Id = (...f) =>
    f
      .filter((x, b, s) => !!x && x.trim() !== "" && s.indexOf(x) === b)
      .join(" ")
      .trim(),
  Ev = (f) => {
    for (const x in f)
      if (x.startsWith("aria-") || x === "role" || x === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nv = xl.forwardRef(
  (
    {
      color: f = "currentColor",
      size: x = 24,
      strokeWidth: b = 2,
      absoluteStrokeWidth: s,
      className: T = "",
      children: O,
      iconNode: H,
      ...Q
    },
    _
  ) =>
    xl.createElement(
      "svg",
      {
        ref: _,
        ...zv,
        width: x,
        height: x,
        stroke: f,
        strokeWidth: s ? (Number(b) * 24) / Number(x) : b,
        className: Id("lucide", T),
        ...(!O && !Ev(Q) && { "aria-hidden": "true" }),
        ...Q,
      },
      [
        ...H.map(([S, D]) => xl.createElement(S, D)),
        ...(Array.isArray(O) ? O : [O]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ve = (f, x) => {
  const b = xl.forwardRef(({ className: s, ...T }, O) =>
    xl.createElement(Nv, {
      ref: O,
      iconNode: x,
      className: Id(`lucide-${Av(Yd(f))}`, `lucide-${f}`, s),
      ...T,
    })
  );
  return (b.displayName = Yd(f)), b;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mv = [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja",
      },
    ],
    [
      "path",
      {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r",
      },
    ],
    [
      "path",
      { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" },
    ],
    ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
    ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
    ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
  ],
  Sf = Ve("brain", Mv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _v = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  Ov = Ve("clock", _v);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jv = [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ],
  Gd = Ve("heart", jv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rv = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Dv = Ve("mail", Rv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uv = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Hv = Ve("map-pin", Uv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qv = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Cv = Ve("phone", qv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bv = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Yv = Ve("users", Bv);
function Gv() {
  const [f, x] = xl.useState(!1);
  xl.useEffect(() => {
    const s = () => {
      x(window.scrollY > 50);
    };
    return (
      window.addEventListener("scroll", s),
      () => window.removeEventListener("scroll", s)
    );
  }, []);
  const b = (s) => {
    var T;
    (T = document.getElementById(s)) == null ||
      T.scrollIntoView({ behavior: "smooth" });
  };
  return h.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-blue-50 to-green-50",
    children: [
      h.jsx("header", {
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${
          f ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`,
        children: h.jsx("div", {
          className: "container mx-auto px-4 py-4",
          children: h.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              h.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                  h.jsx("div", {
                    className:
                      "w-15 h-15 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center",
                    children: h.jsx(Sf, { className: "w-6 h-6 text-white" }),
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("h1", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Aline Tomas",
                      }),
                      h.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: "Psicóloga Clínica",
                      }),
                    ],
                  }),
                ],
              }),
              h.jsxs("nav", {
                className: "hidden md:flex space-x-8",
                children: [
                  h.jsx("button", {
                    onClick: () => b("inicio"),
                    className:
                      "text-gray-700 hover:text-blue-600 transition-colors",
                    children: "Início",
                  }),
                  h.jsx("button", {
                    onClick: () => b("sobre"),
                    className:
                      "text-gray-700 hover:text-blue-600 transition-colors",
                    children: "Sobre Mim",
                  }),
                  h.jsx("button", {
                    onClick: () => b("servicos"),
                    className:
                      "text-gray-700 hover:text-blue-600 transition-colors",
                    children: "Serviços",
                  }),
                  h.jsx("button", {
                    onClick: () => b("contato"),
                    className:
                      "text-gray-700 hover:text-blue-600 transition-colors",
                    children: "Contato",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      h.jsxs("section", {
        id: "inicio",
        className:
          "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
          h.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20",
          }),
          h.jsx("div", {
            className:
              "absolute inset-0 bg-[url('/src/assets/hero_background.jpg')] bg-cover bg-center opacity-30",
          }),
          h.jsxs("div", {
            className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
            children: [
              h.jsxs("h1", {
                className:
                  "text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight",
                children: [
                  "Transforme sua Vida com",
                  h.jsx("span", {
                    className:
                      "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600",
                    children: " Cuidado e Acolhimento",
                  }),
                ],
              }),
              h.jsx("p", {
                className:
                  "text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed",
                children:
                  "Psicoterapia especializada para adolescentes, adultos, casais e famílias",
              }),
              h.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  h.jsx(bf, {
                    onClick: () => b("contato"),
                    className:
                      "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105",
                    children: "Agendar Consulta",
                  }),
                  h.jsx(bf, {
                    onClick: () => b("sobre"),
                    variant: "outline",
                    className:
                      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300",
                    children: "Saiba Mais",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      h.jsx("section", {
        id: "sobre",
        className: "py-20 bg-white",
        children: h.jsx("div", {
          className: "container mx-auto px-4",
          children: h.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [
              h.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  h.jsx("h2", {
                    className: "text-4xl font-bold text-gray-800 mb-4",
                    children: "Sobre Mim",
                  }),
                  h.jsx("div", {
                    className:
                      "w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto",
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [
                  h.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      h.jsx("h3", {
                        className: "text-2xl font-semibold text-gray-800 mb-4",
                        children: "Olá! Sou a Aline Tomas",
                      }),
                      h.jsxs("p", {
                        className: "text-gray-700 leading-relaxed",
                        children: [
                          h.jsx("strong", { children: "Psicóloga Clínica" }),
                          " com ",
                          h.jsx("strong", { children: "CRP: 06/120927" }),
                          ", formada há 11 anos e com 10 anos de vivência no mundo do trabalho em psicologia social.",
                        ],
                      }),
                      h.jsx("p", {
                        className: "text-gray-700 leading-relaxed",
                        children:
                          "Minha experiência inclui atendimentos individuais e em grupos, avaliando os problemas da sociedade nos eixos de saúde pública e políticas sociais. Tenho experiência em acompanhamentos em casos de violência doméstica, álcool e droga, orientação sobre direitos da criança e adolescentes em casa de acolhimento, atendimentos de abuso infantil, pessoas em situação de rua, acolhimento e orientação para grupos de família.",
                      }),
                      h.jsxs("p", {
                        className: "text-gray-700 leading-relaxed",
                        children: [
                          "Atuo no consultório clínico há 6 anos como ",
                          h.jsx("strong", {
                            children: "Terapeuta de Família e Casal",
                          }),
                          ", atendimentos de adolescente e adulto, buscando sempre aprimorar meus conhecimentos ofertando um melhor atendimento.",
                        ],
                      }),
                      h.jsxs("div", {
                        className: "bg-blue-50 p-6 rounded-lg",
                        children: [
                          h.jsx("h4", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Especialização:",
                          }),
                          h.jsx("p", {
                            className: "text-gray-700",
                            children:
                              "Intervenção e Práticas Sistêmica - Terapia Família e Casal",
                          }),
                          h.jsx("p", {
                            className: "text-gray-700 mt-2",
                            children: "Estudante de Neuropsicologia",
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className: "relative",
                    children: h.jsx("div", {
                      className:
                        "bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8",
                      children: h.jsxs("div", {
                        className: "text-center",
                        children: [
                          h.jsx("div", {
                            className:
                              "w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center",
                            children: h.jsx(Gd, {
                              className: "w-16 h-16 text-white",
                            }),
                          }),
                          h.jsx("h4", {
                            className:
                              "text-xl font-semibold text-gray-800 mb-4",
                            children:
                              "Espaço de saúde mental e bem-estar emocional",
                          }),
                          h.jsx("p", {
                            className: "text-gray-700 italic",
                            children:
                              '"A psicoterapia é uma ferramenta de transformação e crescimento pessoal através dos desafios do nosso dia a dia."',
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      h.jsx("section", {
        id: "servicos",
        className: "py-20 bg-gradient-to-b from-blue-50 to-green-50",
        children: h.jsx("div", {
          className: "container mx-auto px-4",
          children: h.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [
              h.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  h.jsx("h2", {
                    className: "text-4xl font-bold text-gray-800 mb-4",
                    children: "Meus Serviços",
                  }),
                  h.jsx("div", {
                    className:
                      "w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6",
                  }),
                  h.jsx("p", {
                    className: "text-xl text-gray-700",
                    children: "Atendimento presencial e online",
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: [
                  h.jsx(pf, {
                    className:
                      "group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                    children: h.jsxs(xf, {
                      className: "p-8 text-center",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                          children: h.jsx(Sf, {
                            className: "w-8 h-8 text-white",
                          }),
                        }),
                        h.jsx("h3", {
                          className: "text-xl font-semibold text-gray-800 mb-4",
                          children: "Terapia Individual",
                        }),
                        h.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children:
                            "Atendimento para adolescentes e adultos com foco no crescimento pessoal e bem-estar emocional.",
                        }),
                        h.jsxs("ul", {
                          className: "text-sm text-gray-600 space-y-1",
                          children: [
                            h.jsx("li", {
                              children: "• Ansiedade e depressão",
                            }),
                            h.jsx("li", {
                              children: "• Autoestima e autoconfiança",
                            }),
                            h.jsx("li", { children: "• Gestão de emoções" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsx(pf, {
                    className:
                      "group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                    children: h.jsxs(xf, {
                      className: "p-8 text-center",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                          children: h.jsx(Gd, {
                            className: "w-8 h-8 text-white",
                          }),
                        }),
                        h.jsx("h3", {
                          className: "text-xl font-semibold text-gray-800 mb-4",
                          children: "Terapia de Casal",
                        }),
                        h.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children:
                            "Especialização em Terapia Sistêmica para fortalecer relacionamentos e resolver conflitos.",
                        }),
                        h.jsxs("ul", {
                          className: "text-sm text-gray-600 space-y-1",
                          children: [
                            h.jsx("li", { children: "• Comunicação efetiva" }),
                            h.jsx("li", {
                              children: "• Resolução de conflitos",
                            }),
                            h.jsx("li", {
                              children: "• Fortalecimento do vínculo",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsx(pf, {
                    className:
                      "group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                    children: h.jsxs(xf, {
                      className: "p-8 text-center",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                          children: h.jsx(Yv, {
                            className: "w-8 h-8 text-white",
                          }),
                        }),
                        h.jsx("h3", {
                          className: "text-xl font-semibold text-gray-800 mb-4",
                          children: "Terapia Familiar",
                        }),
                        h.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children:
                            "Abordagem sistêmica para melhorar a dinâmica familiar e promover harmonia no lar.",
                        }),
                        h.jsxs("ul", {
                          className: "text-sm text-gray-600 space-y-1",
                          children: [
                            h.jsx("li", { children: "• Dinâmica familiar" }),
                            h.jsx("li", { children: "• Orientação parental" }),
                            h.jsx("li", {
                              children: "• Mediação de conflitos",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "mt-16 bg-white rounded-2xl p-8 shadow-lg",
                children: [
                  h.jsx("h3", {
                    className:
                      "text-2xl font-semibold text-gray-800 mb-6 text-center",
                    children: "Abordagem Terapêutica",
                  }),
                  h.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [
                      h.jsxs("div", {
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-lg font-semibold text-blue-600 mb-3",
                            children: "Terapia Sistêmica",
                          }),
                          h.jsx("p", {
                            className: "text-gray-700 leading-relaxed",
                            children:
                              "Especializada em Intervenção e Práticas Sistêmica, trabalho com uma abordagem que considera o indivíduo dentro de seus contextos relacionais, familiares e sociais.",
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-lg font-semibold text-green-600 mb-3",
                            children: "Experiência Diferenciada",
                          }),
                          h.jsx("p", {
                            className: "text-gray-700 leading-relaxed",
                            children:
                              "Com 10 anos de experiência em psicologia social, ofereço uma perspectiva única que considera os aspectos sociais e comunitários no processo terapêutico.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      h.jsx("section", {
        id: "contato",
        className: "py-20 bg-white",
        children: h.jsx("div", {
          className: "container mx-auto px-4",
          children: h.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [
              h.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  h.jsx("h2", {
                    className: "text-4xl font-bold text-gray-800 mb-4",
                    children: "Entre em Contato",
                  }),
                  h.jsx("div", {
                    className:
                      "w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6",
                  }),
                  h.jsx("p", {
                    className: "text-xl text-gray-700",
                    children:
                      "Estou aqui para ajudar você em sua jornada de bem-estar",
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12",
                children: [
                  h.jsxs("div", {
                    className: "space-y-8",
                    children: [
                      h.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          h.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0",
                            children: h.jsx(Hv, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-800 mb-2",
                                children: "Localização",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600",
                                children: "Rua Heitor Alves de Amorim, 31",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600",
                                children: "Campo Limpo - São Paulo",
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          h.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0",
                            children: h.jsx(Cv, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-800 mb-2",
                                children: "Telefone",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600",
                                children: "(11) 95206-4305",
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          h.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0",
                            children: h.jsx(Dv, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-800 mb-2",
                                children: "Email",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600",
                                children: "alinetomas63@yahoo.com.br",
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          h.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0",
                            children: h.jsx(Ov, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-800 mb-2",
                                children: "Modalidades",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600",
                                children: "Atendimento presencial e online",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600",
                                children: "Horários flexíveis",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className:
                      "bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8",
                    children: [
                      h.jsx("h3", {
                        className: "text-2xl font-semibold text-gray-800 mb-6",
                        children: "Agende sua Consulta",
                      }),
                      h.jsxs("form", {
                        className: "space-y-6",
                        children: [
                          h.jsxs("div", {
                            children: [
                              h.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "Nome",
                              }),
                              h.jsx("input", {
                                type: "text",
                                className:
                                  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                placeholder: "Seu nome completo",
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "Email",
                              }),
                              h.jsx("input", {
                                type: "email",
                                className:
                                  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                placeholder: "seu@email.com",
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "Telefone",
                              }),
                              h.jsx("input", {
                                type: "tel",
                                className:
                                  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                placeholder: "(11) 99999-9999",
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "Mensagem",
                              }),
                              h.jsx("textarea", {
                                rows: "4",
                                className:
                                  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                placeholder: "Como posso ajudar você?",
                              }),
                            ],
                          }),
                          h.jsx(bf, {
                            className:
                              "w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105",
                            children: "Enviar Mensagem",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      h.jsx("footer", {
        className: "bg-gray-800 text-white py-12",
        children: h.jsx("div", {
          className: "container mx-auto px-4",
          children: h.jsxs("div", {
            className: "max-w-6xl mx-auto text-center",
            children: [
              h.jsxs("div", {
                className: "flex items-center justify-center space-x-3 mb-6",
                children: [
                  h.jsx("div", {
                    className:
                      "w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center",
                    children: h.jsx(Sf, { className: "w-6 h-6 text-white" }),
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("h3", {
                        className: "text-xl font-bold",
                        children: "Aline Tomas",
                      }),
                      h.jsx("p", {
                        className: "text-sm text-gray-300",
                        children: "Psicóloga Clínica - CRP: 06/120927",
                      }),
                    ],
                  }),
                ],
              }),
              h.jsx("p", {
                className: "text-gray-300 mb-6",
                children:
                  "Transformando vidas através do cuidado e acolhimento em psicoterapia",
              }),
              h.jsx("div", {
                className: "border-t border-gray-700 pt-6",
                children: h.jsx("p", {
                  className: "text-sm text-gray-400",
                  children:
                    "© 2024 Aline Tomas - Psicóloga Clínica. Todos os direitos reservados.",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
jh.createRoot(document.getElementById("root")).render(
  h.jsx(xl.StrictMode, { children: h.jsx(Gv, {}) })
);
