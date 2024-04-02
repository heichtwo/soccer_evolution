import { ref as ze, createVNode as R, h as K, createApp as ue } from "vue";
function Oe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: $e } = Object.prototype, { getPrototypeOf: oe } = Object, v = ((e) => (t) => {
  const n = $e.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), T = (e) => (e = e.toLowerCase(), (t) => v(t) === e), J = (e) => (t) => typeof t === e, { isArray: _ } = Array, L = J("undefined");
function Ve(e) {
  return e !== null && !L(e) && e.constructor !== null && !L(e.constructor) && b(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Re = T("ArrayBuffer");
function We(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Re(e.buffer), t;
}
const Ke = J("string"), b = J("function"), xe = J("number"), z = (e) => e !== null && typeof e == "object", Ge = (e) => e === !0 || e === !1, I = (e) => {
  if (v(e) !== "object")
    return !1;
  const t = oe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Xe = T("Date"), Ze = T("File"), Qe = T("Blob"), Ye = T("FileList"), et = (e) => z(e) && b(e.pipe), tt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || b(e.append) && ((t = v(e)) === "formdata" || // detect form-data instance
  t === "object" && b(e.toString) && e.toString() === "[object FormData]"));
}, nt = T("URLSearchParams"), rt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function F(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), _(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Ne(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ce = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Pe = (e) => !L(e) && e !== Ce;
function ee() {
  const { caseless: e } = Pe(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Ne(t, s) || s;
    I(t[o]) && I(r) ? t[o] = ee(t[o], r) : I(r) ? t[o] = ee({}, r) : _(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && F(arguments[r], n);
  return t;
}
const st = (e, t, n, { allOwnKeys: r } = {}) => (F(t, (s, o) => {
  n && b(s) ? e[o] = Oe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), ot = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), it = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, at = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && oe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ct = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, lt = (e) => {
  if (!e)
    return null;
  if (_(e))
    return e;
  let t = e.length;
  if (!xe(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ut = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && oe(Uint8Array)), ft = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, dt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ht = T("HTMLFormElement"), pt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), fe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), mt = T("RegExp"), _e = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  F(n, (s, o) => {
    t(s, o, e) !== !1 && (r[o] = s);
  }), Object.defineProperties(e, r);
}, wt = (e) => {
  _e(e, (t, n) => {
    if (b(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (b(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, yt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return _(e) ? r(e) : r(String(e).split(t)), n;
}, gt = () => {
}, bt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), G = "abcdefghijklmnopqrstuvwxyz", de = "0123456789", De = {
  DIGIT: de,
  ALPHA: G,
  ALPHA_DIGIT: G + G.toUpperCase() + de
}, St = (e = 16, t = De.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Et(e) {
  return !!(e && b(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Tt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (z(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = _(r) ? [] : {};
        return F(r, (i, c) => {
          const d = n(i, s + 1);
          !L(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, At = T("AsyncFunction"), Ot = (e) => e && (z(e) || b(e)) && b(e.then) && b(e.catch), a = {
  isArray: _,
  isArrayBuffer: Re,
  isBuffer: Ve,
  isFormData: tt,
  isArrayBufferView: We,
  isString: Ke,
  isNumber: xe,
  isBoolean: Ge,
  isObject: z,
  isPlainObject: I,
  isUndefined: L,
  isDate: Xe,
  isFile: Ze,
  isBlob: Qe,
  isRegExp: mt,
  isFunction: b,
  isStream: et,
  isURLSearchParams: nt,
  isTypedArray: ut,
  isFileList: Ye,
  forEach: F,
  merge: ee,
  extend: st,
  trim: rt,
  stripBOM: ot,
  inherits: it,
  toFlatObject: at,
  kindOf: v,
  kindOfTest: T,
  endsWith: ct,
  toArray: lt,
  forEachEntry: ft,
  matchAll: dt,
  isHTMLForm: ht,
  hasOwnProperty: fe,
  hasOwnProp: fe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _e,
  freezeMethods: wt,
  toObjectSet: yt,
  toCamelCase: pt,
  noop: gt,
  toFiniteNumber: bt,
  findKey: Ne,
  global: Ce,
  isContextDefined: Pe,
  ALPHABET: De,
  generateString: St,
  isSpecCompliantForm: Et,
  toJSONObject: Tt,
  isAsyncFn: At,
  isThenable: Ot
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Le = m.prototype, Fe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Fe[e] = { value: e };
});
Object.defineProperties(m, Fe);
Object.defineProperty(Le, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Le);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Rt = null;
function te(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Be(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function he(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Be(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function xt(e) {
  return a.isArray(e) && !e.some(te);
}
const Nt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, A) {
    return !a.isUndefined(A[p]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!d && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, p, A) {
    let S = f;
    if (f && !A && typeof f == "object") {
      if (a.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && xt(f) || (a.isFileList(f) || a.endsWith(p, "[]")) && (S = a.toArray(f)))
        return p = Be(p), S.forEach(function(U, Je) {
          !(a.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? he([p], Je, o) : i === null ? p : p + "[]",
            l(U)
          );
        }), !1;
    }
    return te(f) ? !0 : (t.append(he(A, p, o), l(f)), !1);
  }
  const h = [], g = Object.assign(Nt, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: te
  });
  function w(f, p) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(f), a.forEach(f, function(S, N) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(N) ? N.trim() : N,
          p,
          g
        )) === !0 && w(S, p ? p.concat(N) : [N]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function pe(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ie(e, t) {
  this._pairs = [], e && $(e, this, t);
}
const Ue = ie.prototype;
Ue.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ue.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, pe);
  } : pe;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ct(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ke(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ct, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ie(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Pt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const me = Pt, Ie = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _t = typeof URLSearchParams < "u" ? URLSearchParams : ie, Dt = typeof FormData < "u" ? FormData : null, Lt = typeof Blob < "u" ? Blob : null, Ft = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Bt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), E = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _t,
    FormData: Dt,
    Blob: Lt
  },
  isStandardBrowserEnv: Ft,
  isStandardBrowserWebWorkerEnv: Bt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ut(e, t) {
  return $(e, new E.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return E.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function kt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function It(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function je(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = It(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(kt(r), s, n, 0);
    }), n;
  }
  return null;
}
const jt = {
  "Content-Type": void 0
};
function qt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const V = {
  transitional: Ie,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(je(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ut(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return $(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), qt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || V.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: E.classes.FormData,
    Blob: E.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  V.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  V.headers[t] = a.merge(jt);
});
const ae = V, Ht = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Mt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Ht[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, we = Symbol("internals");
function D(e) {
  return e && String(e).trim().toLowerCase();
}
function j(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(j) : String(e);
}
function vt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Jt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function X(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function zt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function $t(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class W {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, l) {
      const u = D(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || l === !0 || l === void 0 && s[h] !== !1) && (s[h || d] = j(c));
    }
    const i = (c, d) => a.forEach(c, (l, u) => o(l, u, d));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Jt(t) ? i(Mt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = D(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return vt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = D(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || X(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = D(i), i) {
        const c = a.findKey(r, i);
        c && (!n || X(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || X(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = j(s), delete n[o];
        return;
      }
      const c = t ? zt(o) : String(o).trim();
      c !== o && delete n[o], n[c] = j(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[we] = this[we] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = D(i);
      r[c] || ($t(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
W.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(W.prototype);
a.freezeMethods(W);
const O = W;
function Z(e, t) {
  const n = this || ae, r = t || n, s = O.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function qe(e) {
  return !!(e && e.__CANCEL__);
}
function B(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(B, m, {
  __CANCEL__: !0
});
function Vt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Wt = E.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, c) {
        const d = [];
        d.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()), a.isString(o) && d.push("path=" + o), a.isString(i) && d.push("domain=" + i), c === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Kt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Gt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function He(e, t) {
  return e && !Kt(t) ? Gt(e, t) : t;
}
const Xt = E.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Zt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Qt(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const l = Date.now(), u = r[o];
    i || (i = l), n[s] = d, r[s] = l;
    let h = o, g = 0;
    for (; h !== s; )
      g += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t)
      return;
    const w = u && l - u;
    return w ? Math.round(g * 1e3 / w) : void 0;
  };
}
function ye(e, t) {
  let n = 0;
  const r = Qt(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, c = o - n, d = r(c), l = o <= i;
    n = o;
    const u = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && i && l ? (i - o) / d : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Yt = typeof XMLHttpRequest < "u", en = Yt && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = O.from(e.headers).normalize(), i = e.responseType;
    let c;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(s) && (E.isStandardBrowserEnv || E.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let l = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(w + ":" + f));
    }
    const u = He(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), ke(u, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function h() {
      if (!l)
        return;
      const w = O.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), p = {
        data: !i || i === "text" || i === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: w,
        config: e,
        request: l
      };
      Vt(function(S) {
        n(S), d();
      }, function(S) {
        r(S), d();
      }, p), l = null;
    }
    if ("onloadend" in l ? l.onloadend = h : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, l.onabort = function() {
      l && (r(new m("Request aborted", m.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Ie;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new m(
        f,
        p.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        l
      )), l = null;
    }, E.isStandardBrowserEnv) {
      const w = (e.withCredentials || Xt(u)) && e.xsrfCookieName && Wt.read(e.xsrfCookieName);
      w && o.set(e.xsrfHeaderName, w);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in l && a.forEach(o.toJSON(), function(f, p) {
      l.setRequestHeader(p, f);
    }), a.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), i && i !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", ye(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", ye(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (w) => {
      l && (r(!w || w.type ? new B(null, e, l) : w), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const g = Zt(u);
    if (g && E.protocols.indexOf(g) === -1) {
      r(new m("Unsupported protocol " + g + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, q = {
  http: Rt,
  xhr: en
};
a.forEach(q, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tn = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = a.isString(n) ? q[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new m(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(q, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: q
};
function Q(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new B(null, e);
}
function ge(e) {
  return Q(e), e.headers = O.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), tn.getAdapter(e.adapter || ae.adapter)(e).then(function(r) {
    return Q(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = O.from(r.headers), r;
  }, function(r) {
    return qe(r) || (Q(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = O.from(r.response.headers))), Promise.reject(r);
  });
}
const be = (e) => e instanceof O ? e.toJSON() : e;
function P(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, h) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: h }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, h) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, h);
    } else
      return r(l, u, h);
  }
  function o(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, u);
  }
  function c(l, u, h) {
    if (h in t)
      return r(l, u);
    if (h in e)
      return r(void 0, l);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u) => s(be(l), be(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const h = d[u] || s, g = h(e[u], t[u], u);
    a.isUndefined(g) && h !== c || (n[u] = g);
  }), n;
}
const Me = "1.4.0", ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ce[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Se = {};
ce.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Me + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Se[i] && (Se[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function nn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new m("option " + o + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ne = {
  assertOptions: nn,
  validators: ce
}, x = ne.validators;
class M {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new me(),
      response: new me()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = P(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ne.assertOptions(r, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ne.assertOptions(s, {
      encode: x.function,
      serialize: x.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && a.merge(
      o.common,
      o[n.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = O.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (d = d && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, h = 0, g;
    if (!d) {
      const f = [ge.bind(this), void 0];
      for (f.unshift.apply(f, c), f.push.apply(f, l), g = f.length, u = Promise.resolve(n); h < g; )
        u = u.then(f[h++], f[h++]);
      return u;
    }
    g = c.length;
    let w = n;
    for (h = 0; h < g; ) {
      const f = c[h++], p = c[h++];
      try {
        w = f(w);
      } catch (A) {
        p.call(this, A);
        break;
      }
    }
    try {
      u = ge.call(this, w);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, g = l.length; h < g; )
      u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = He(t.baseURL, t.url);
    return ke(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request(P(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(P(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
const H = M;
class le {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new B(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new le(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const rn = le;
function sn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function on(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const re = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(re).forEach(([e, t]) => {
  re[t] = e;
});
const an = re;
function ve(e) {
  const t = new H(e), n = Oe(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ve(P(e, s));
  }, n;
}
const y = ve(ae);
y.Axios = H;
y.CanceledError = B;
y.CancelToken = rn;
y.isCancel = qe;
y.VERSION = Me;
y.toFormData = $;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function(t) {
  return Promise.all(t);
};
y.spread = sn;
y.isAxiosError = on;
y.mergeConfig = P;
y.AxiosHeaders = O;
y.formToJSON = (e) => je(a.isHTMLForm(e) ? new FormData(e) : e);
y.HttpStatusCode = an;
y.default = y;
const cn = y, C = cn.create({
  timeout: 3e5
});
C.interceptors.request.use((e) => (e.headers["request-startTime"] = (/* @__PURE__ */ new Date()).getTime(), e));
C.interceptors.response.use((e) => {
  const t = (/* @__PURE__ */ new Date()).getTime(), n = e.config.headers["request-startTime"];
  let r = t - n;
  return r && (r = r / 1e3), e.headers["request-duration"] = r, e;
});
var ln = function(e, t) {
  var n = e + ":" + t, r = btoa(n);
  return "Basic " + r;
}, Y = JSON.parse(window.localStorage.getItem("user")), se;
window.localStorage.getItem("current_user") ? se = JSON.parse(window.localStorage.getItem("current_user")) : se = null;
const un = {
  /* Permet de lire la variable user dans le localstorage et de formater l'authorisation */
  auth: Y ? ln(Y.username, Y.password) : null,
  current_user: se,
  axiosInstance: C,
  /**
   * Domaine permettant d'effectuer les tests en local.
   * C'est sur ce domaine que les requetes vont etre transmise quand on est en local.
   * @public
   */
  TestDomain: null,
  /**
   * Permet de specifier un domaine pour la production. ( utiliser uniquement quand l'application front est sur un domaine different de l'application serveur ).
   */
  baseUrl: null,
  /**
   * Utiliser si le module supporte la traduction
   * example : fr, en, ar ...
   */
  languageId: null,
  /**
   * Permet d'afficher la console la les données envoyé et le retour de chaque requete.
   */
  debug: !1,
  /**
   * Permet de determiner, si nous sommes en local ou pas.
   * @public
   * @returns Booleans
   */
  isLocalDev: !!(window.location.host.includes("localhost") || window.location.host.includes(".kksa")),
  /**
   * Permet de derminer la source du domaine, en function des paramettres definit.
   * @private (ne doit pas etre surcharger).
   * @returns String
   */
  getBaseUrl() {
    return this.baseUrl ? this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : this.baseUrl : this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : window.location.protocol + "//" + window.location.host;
  },
  /**
   * Permet de recuperer les messages , en priorité celui definie dans headers.customstatustext.
   *
   * @param {*} er
   * @param {*} type ( true pour recuperer les messages en cas de success )
   * @returns
   */
  getStatusText(e, t = !1) {
    if (e)
      if (t)
        if (e) {
          if (e.response && e.headers.customstatustext)
            return e.headers.customstatustext;
        } else
          return e.statusText ? e.statusText : null;
      else {
        const n = e.response && e.response.data && e.response.data.message ? " || " + e.response.data.message : null;
        return e.response && e.response.headers && e.response.headers.customstatustext ? e.response.headers.customstatustext + n : e.response && e.response.statusText ? e.response.statusText + n : n;
      }
    else
      return null;
  },
  post(e, t, n) {
    return new Promise((r, s) => {
      this.languageId !== "" && this.languageId !== void 0 && this.languageId !== null && !e.includes("://") && (e = "/" + this.languageId + e);
      const o = e.includes("://") ? e : this.getBaseUrl() + e;
      C.post(o, t, n).then((i) => {
        this.debug && console.log(
          `Debug axio : 
`,
          o,
          `
 payload: `,
          t,
          `
 config: `,
          n,
          `
 Duration : `,
          i.headers["request-duration"],
          `
 reponse: `,
          i,
          `
 ------ 
`
        ), r({
          status: !0,
          data: i.data,
          reponse: i,
          statusText: this.getStatusText(i, !0)
        });
      }).catch((i) => {
        console.log("error wbutilities", i.response), s({
          status: !1,
          error: i.response,
          code: i.code,
          stack: i.stack,
          statusText: this.getStatusText(i)
        });
      });
    });
  },
  delete(e, t, n) {
    return new Promise((r, s) => {
      const o = e.includes("://") ? e : this.getBaseUrl() + e;
      C.delete(o, n, t).then((i) => {
        r({
          status: !0,
          data: i.data,
          reponse: i,
          statusText: this.getStatusText(i, !0)
        });
      }).catch((i) => {
        s({
          status: !1,
          error: i.response,
          code: i.code,
          stack: i.stack,
          statusText: this.getStatusText(i)
        });
      });
    });
  },
  get(e, t) {
    return new Promise((n, r) => {
      this.languageId !== "" && this.languageId !== void 0 && this.languageId !== null && !e.includes("://") && (e = "/" + this.languageId + e);
      const s = e.includes("://") ? e : this.getBaseUrl() + e;
      C.get(s, t).then((o) => {
        this.debug && console.log(`Debug axio : 
`, s, `
 Config: `, t, `
 Duration : `, o.headers["request-duration"], `
 Reponse: `, o, `
 ------ 
`), n({
          status: !0,
          data: o.data,
          reponse: o,
          statusText: this.getStatusText(o, !0)
        });
      }).catch((o) => {
        console.log("error wbutilities", o.response), r({
          status: !1,
          error: o.response,
          code: o.code,
          stack: o.stack,
          statusText: this.getStatusText(o)
        });
      });
    });
  },
  /**
   * @param file " fichier à uploaded"
   */
  postFile(e, t, n = null) {
    return new Promise((r, s) => {
      this.getBase64(t).then((o) => {
        var i = new Headers(), c = t.name.split("."), d = {
          method: "POST",
          headers: i,
          // mode: "cors",
          body: JSON.stringify({
            upload: o.base64,
            ext: c.pop(),
            filename: c.join("."),
            id: n
          }),
          cache: "default"
        };
        const l = e.includes("://") ? e : this.getBaseUrl() + e;
        fetch(l, d).then(function(u) {
          u.json().then(function(h) {
            r(h);
          }).catch((h) => {
            s(h);
          });
        });
      });
    });
  },
  getBase64(e) {
    return new Promise((t, n) => {
      const r = new FileReader();
      r.readAsDataURL(e), r.onloadend = () => {
        var s = r.result.split(",");
        t({ src: r.result, base64: s[1] });
      }, r.onerror = (s) => n(s);
    });
  }
}, k = "drupal-vuejs-credential", Ee = "drupal-vuejs-cre-val", fn = {
  ...un,
  /**
   * ( Semble fonctionner au niveau drupal sans necessite de module ).
   * values = {
   *     name: '',
   *     pass: '',
   * }
   * @param {*} values
   * @returns
   */
  login(e) {
    return new Promise((t, n) => {
      if (e.name && e.pass)
        this.post("/user/login?_format=json", e).then((r) => {
          this.saveTempCredential(e, r.data), t(r);
        }).catch((r) => n(r));
      else
        throw "Format de connexion non valide";
    });
  },
  /**
   * On sauvegarde de maniere temporaire les identifications de connexion.
   * Require https for securities.
   */
  saveTempCredential(e, t) {
    localStorage.setItem(k, JSON.stringify(e)), localStorage.setItem(Ee, JSON.stringify(t));
  },
  loadCredential() {
    const e = localStorage.getItem(k);
    if (e)
      return JSON.parse(e);
  },
  deleteConnexion() {
    localStorage.removeItem(k);
  },
  checkCurrentUserIsLogin() {
    const e = localStorage.getItem(Ee), t = localStorage.getItem(k);
    if (e !== void 0 && t !== void 0 && e)
      return JSON.parse(e);
  }
}, dn = {
  stringLength: 19,
  /**
   * Permet de convertir les strings en snake_case utilisable par les id de drupal.
   * @param {*} string
   * @returns
   */
  snakeCase(e) {
    return e.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((t) => t.toLowerCase()).join("_");
  },
  /**
   * Permet de generer un identifiant valide pour le creation de type d'entité
   */
  generateIdEntityType(e) {
    let t = this.snakeCase(e).substring(0, this.stringLength);
    const n = /* @__PURE__ */ new Date();
    return t += "_", t += n.getFullYear(), t += "_", t += n.getMonth(), t += "_", t += Math.floor(Math.random() * 999), t;
  }
};
var Te = function(e, t) {
  var n = e + ":" + t, r = btoa(n);
  return "Basic " + r;
};
const hn = {
  ...fn,
  ...dn,
  /**
   * Recupere les données à travers une route authentifié via drupal;
   */
  async dGet(e, t = null, n = !1) {
    const r = this.loadCredential();
    var s = {
      "Content-Type": "application/json"
    };
    return r && (console.log("userLogin : ", r), s.Authorization = Te(
      r.name,
      r.pass
    )), t && (s = this.mergeHeaders(t, s)), this.get(
      e,
      {
        headers: s
      },
      n
    );
  },
  /**
   * Enregistre les données à travers une route authentifié via drupal;
   */
  async dPost(e, t, n = null, r = !0) {
    const s = this.loadCredential();
    var o = {
      "Content-Type": "application/json"
    };
    return s && (o.Authorization = Te(
      s.name,
      s.pass
    )), n && (o = this.mergeHeaders(n, o)), this.post(
      e,
      t,
      {
        headers: o
      },
      r
    );
  },
  /**
   *
   */
  mergeHeaders(e, t) {
    if (e)
      for (const n in e)
        t[n] = e[n];
    return t;
  }
}, pn = {
  ...hn,
  languageId: window.drupalSettings && window.drupalSettings.path && window.drupalSettings.path.pathPrefix ? window.drupalSettings.path.pathPrefix.replaceAll("/", "") : null,
  debug: !0,
  TestDomain: window.location.hostname === "localhost" ? "http://my-nutribe.kksa" : null
}, Ae = {
  props: {
    id: [Number, String],
    starsNumber: Number,
    percentage: Number,
    label: {
      type: String,
      default: ""
    },
    labelClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = "comment-icon-star", n = "comment-icon-empty-star", r = ze(Math.floor(e.percentage / 20)), s = 5 * (e.percentage % 20) + "%";
    let o = Array(5);
    const i = e.id ? "linear-gradient-" + e.id : "linear-gradient";
    let c = R("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, [R("defs", null, [R("linearGradient", {
      id: i
    }, [R("stop", {
      class: t + " comment-stars",
      offset: s
    }, null), R("stop", {
      class: n + " comment-stars",
      offset: "0%"
    }, null)])]), R("path", {
      fill: "url(#" + i + ")",
      d: "m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333Z"
    }, null)]), d = R("svg", {
      fill: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, [R("path", {
      d: "m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333Z"
    }, null)]);
    for (let u = 0; u < o.length; u++)
      o[u] = u < r.value ? 1 : 0;
    s != "0%" && (o[r.value] = 2);
    let l = o.map((u) => K("span", {
      class: [u ? t : n, "comment-stars"]
    }, u == 2 ? c : d));
    return console.log("props : ", e), () => K("span", {
      class: "d-flex align-items-center"
    }, [...l, e.label == "" ? "" : K("span", {
      class: e.labelClass
    }, e.label)]);
  }
};
(function(e) {
  e.behaviors.rating_app_start = {
    attach: function(t, n) {
      if (n.rating_app) {
        const r = t.querySelectorAll ? t.querySelectorAll(".rating-app-start") : null;
        r && r.length && r.forEach((s) => {
          if (!s.classList.contains("loaded")) {
            s.classList.add("loaded");
            const o = s.getAttribute("data_url_get_start"), i = s.getAttribute("data_entity_id");
            pn.dGet(o).then((c) => {
              ue(Ae, {
                percentage: c.data.percent,
                label: c.data.count + " Avis",
                id: i,
                "label-class": "pl-2"
              }).mount(s);
            }).catch((c) => {
              console.log("something went wrong: ", c), ue(Ae, {
                percentage: 0,
                id: i,
                label: "0 Avis"
              }).mount(s);
            });
          }
        });
      }
    }
  };
})(window.Drupal);
