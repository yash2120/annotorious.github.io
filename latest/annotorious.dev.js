function g(a) {
  throw a;
}
var i = void 0, j = !0, m = null, n = !1;
function aa() {
  return function() {
  }
}
function p(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var r, s = this;
function ca(a, b) {
  var c = a.split("."), d = s;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && da(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ea() {
}
function fa(a) {
  a.pb = function() {
    return a.sd ? a.sd : a.sd = new a
  }
}
function ga(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function da(a) {
  return a !== i
}
function ha(a) {
  return"array" == ga(a)
}
function ia(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function t(a) {
  return"string" == typeof a
}
function u(a) {
  return"function" == ga(a)
}
function ja(a) {
  var b = typeof a;
  return"object" == b && a != m || "function" == b
}
function ka(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
  a || g(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function pa(a, b, c) {
  pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return pa.apply(m, arguments)
}
function qa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ra = Date.now || function() {
  return+new Date
};
function v(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.G = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function sa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ta(a) {
  if(!ua.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(va, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(wa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(xa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
  return a
}
var va = /&/g, wa = /</g, xa = />/g, ya = /\"/g, ua = /[&<>\"]/;
function za(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;var z = Array.prototype, Aa = z.indexOf ? function(a, b, c) {
  return z.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    return!t(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, B = z.forEach ? function(a, b, c) {
  z.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && b.call(c, f[e], e, a)
  }
}, Ba = z.filter ? function(a, b, c) {
  return z.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], e = 0, h = t(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (f[e++] = l)
    }
  }
  return f
}, Ca = z.map ? function(a, b, c) {
  return z.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), e = t(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in e && (f[h] = b.call(c, e[h], h, a))
  }
  return f
}, Da = z.every ? function(a, b, c) {
  return z.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, e = 0;e < d;e++) {
    if(e in f && !b.call(c, f[e], e, a)) {
      return n
    }
  }
  return j
};
function Ea(a, b) {
  var c;
  a: {
    c = a.length;
    for(var d = t(a) ? a.split("") : a, f = 0;f < c;f++) {
      if(f in d && b.call(i, d[f], f, a)) {
        c = f;
        break a
      }
    }
    c = -1
  }
  return 0 > c ? m : t(a) ? a.charAt(c) : a[c]
}
function Fa(a, b) {
  return 0 <= Aa(a, b)
}
function C(a, b) {
  var c = Aa(a, b);
  0 <= c && z.splice.call(a, c, 1)
}
function Ga(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function Ha(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ha(d) || (f = ia(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var e = a.length, h = d.length, k = 0;k < h;k++) {
          a[e + k] = d[k]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function Ia(a, b, c) {
  return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c)
}
function Ja(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;var Ka, La, Ma, Na, Oa;
function Pa() {
  return s.navigator ? s.navigator.userAgent : m
}
function Qa() {
  return s.navigator
}
Na = Ma = La = Ka = n;
var Ra;
if(Ra = Pa()) {
  var Sa = Qa();
  Ka = 0 == Ra.indexOf("Opera");
  La = !Ka && -1 != Ra.indexOf("MSIE");
  Ma = !Ka && -1 != Ra.indexOf("WebKit");
  Na = !Ka && !Ma && "Gecko" == Sa.product
}
var D = Ka, F = La, G = Na, H = Ma, Ta = Qa();
Oa = -1 != (Ta && Ta.platform || "").indexOf("Mac");
var Ua = !!Qa() && -1 != (Qa().appVersion || "").indexOf("X11"), Va;
a: {
  var Wa = "", Xa;
  if(D && s.opera) {
    var Ya = s.opera.version, Wa = "function" == typeof Ya ? Ya() : Ya
  }else {
    if(G ? Xa = /rv\:([^\);]+)(\)|;)/ : F ? Xa = /MSIE\s+([^\);]+)(\)|;)/ : H && (Xa = /WebKit\/(\S+)/), Xa) {
      var Za = Xa.exec(Pa()), Wa = Za ? Za[1] : ""
    }
  }
  if(F) {
    var $a, ab = s.document;
    $a = ab ? ab.documentMode : i;
    if($a > parseFloat(Wa)) {
      Va = String($a);
      break a
    }
  }
  Va = Wa
}
var bb = {};
function I(a) {
  var b;
  if(!(b = bb[a])) {
    b = 0;
    for(var c = sa(String(Va)).split("."), d = sa(String(a)).split("."), f = Math.max(c.length, d.length), e = 0;0 == b && e < f;e++) {
      var h = c[e] || "", k = d[e] || "", l = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = l.exec(h) || ["", "", ""], y = q.exec(k) || ["", "", ""];
        if(0 == w[0].length && 0 == y[0].length) {
          break
        }
        b = ((0 == w[1].length ? 0 : parseInt(w[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == w[1].length ? 0 : parseInt(w[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == w[2].length) < (0 == y[2].length) ? -1 : (0 == w[2].length) > (0 == y[2].length) ? 1 : 0) || (w[2] < y[2] ? -1 : w[2] > y[2] ? 1 : 0)
      }while(0 == b)
    }
    b = bb[a] = 0 <= b
  }
  return b
}
var cb = {};
function db(a) {
  return cb[a] || (cb[a] = F && !!document.documentMode && document.documentMode >= a)
}
;var eb, fb = !F || db(9);
!G && !F || F && db(9) || G && I("1.9.1");
F && I("9");
var gb = F || D || H;
function hb(a) {
  a = a.className;
  return t(a) && a.match(/\S+/g) || []
}
function ib(a, b) {
  var c = hb(a), d = Ia(arguments, 1), f = c.length + d.length;
  jb(c, d);
  a.className = c.join(" ");
  return c.length == f
}
function kb(a, b) {
  var c = hb(a), d = Ia(arguments, 1), f = lb(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function jb(a, b) {
  for(var c = 0;c < b.length;c++) {
    Fa(a, b[c]) || a.push(b[c])
  }
}
function lb(a, b) {
  return Ba(a, function(a) {
    return!Fa(b, a)
  })
}
function mb(a, b, c) {
  var d = hb(a);
  t(b) ? C(d, b) : ha(b) && (d = lb(d, b));
  t(c) && !Fa(d, c) ? d.push(c) : ha(c) && jb(d, c);
  a.className = d.join(" ")
}
;function J(a, b) {
  this.x = da(a) ? a : 0;
  this.y = da(b) ? b : 0
}
;function nb(a, b) {
  this.width = a;
  this.height = b
}
nb.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
nb.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function ob(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
var pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function qb(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var e = 0;e < pb.length;e++) {
      c = pb[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function rb(a) {
  return a ? new sb(K(a)) : eb || (eb = new sb)
}
function tb(a, b) {
  ob(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ub ? a.setAttribute(ub[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var ub = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function vb(a, b, c) {
  var d = arguments, f = document, e = d[0], h = d[1];
  if(!fb && h && (h.name || h.type)) {
    e = ["<", e];
    h.name && e.push(' name="', ta(h.name), '"');
    if(h.type) {
      e.push(' type="', ta(h.type), '"');
      var k = {};
      qb(k, h);
      delete k.type;
      h = k
    }
    e.push(">");
    e = e.join("")
  }
  e = f.createElement(e);
  h && (t(h) ? e.className = h : ha(h) ? ib.apply(m, [e].concat(h)) : tb(e, h));
  2 < d.length && wb(f, e, d, 2);
  return e
}
function wb(a, b, c, d) {
  function f(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var e = c[d];
    if(ia(e) && !(ja(e) && 0 < e.nodeType)) {
      var h;
      a: {
        if(e && "number" == typeof e.length) {
          if(ja(e)) {
            h = "function" == typeof e.item || "string" == typeof e.item;
            break a
          }
          if(u(e)) {
            h = "function" == typeof e.item;
            break a
          }
        }
        h = n
      }
      B(h ? Ga(e) : e, f)
    }else {
      f(e)
    }
  }
}
function xb(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function yb(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function zb(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
}
function Ab(a) {
  return ja(a) && 1 == a.nodeType
}
function Bb(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function K(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Cb(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : n
}
function sb(a) {
  this.I = a || s.document || document
}
r = sb.prototype;
r.fd = rb;
r.c = function(a) {
  return t(a) ? this.I.getElementById(a) : a
};
r.$ = tb;
r.createElement = function(a) {
  return this.I.createElement(a)
};
r.createTextNode = function(a) {
  return this.I.createTextNode(a)
};
function Db(a) {
  var b = a.I, a = !H ? b.documentElement : b.body, b = b.parentWindow || b.defaultView;
  return new J(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  wb(K(a), a, arguments, 1)
};
r.contains = Bb;
var Eb;
Eb = ba(j);
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function Fb(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var Gb = H && "BackCompat" == document.compatMode, Hb = document.firstChild.children ? "children" : "childNodes", Ib = n;
function Jb(a) {
  function b() {
    0 <= q && (x.id = c(q, A).replace(/\\/g, ""), q = -1);
    if(0 <= w) {
      var a = w == A ? m : c(w, A);
      0 > ">~+".indexOf(a) ? x.D = a : x.Mb = a;
      w = -1
    }
    0 <= l && (x.W.push(c(l + 1, A).replace(/\\/g, "")), l = -1)
  }
  function c(b, c) {
    return sa(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, e = -1, h = -1, k = -1, l = -1, q = -1, w = -1, y = "", E = "", Q, A = 0, Ge = a.length, x = m, L = m;y = E, E = a.charAt(A), A < Ge;A++) {
    if("\\" != y) {
      if(x || (Q = A, x = {Ra:m, va:[], yb:[], W:[], D:m, Mb:m, id:m, oc:function() {
        return Ib ? this.$d : this.D
      }}, w = A), 0 <= f) {
        if("]" == E) {
          L.kc ? L.vc = c(h || f + 1, A) : L.kc = c(f + 1, A);
          if((f = L.vc) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            L.vc = f.slice(1, -1)
          }
          x.yb.push(L);
          L = m;
          f = h = -1
        }else {
          "=" == E && (h = 0 <= "|~^$*".indexOf(y) ? y : "", L.type = h + E, L.kc = c(f + 1, A - h.length), h = A + 1)
        }
      }else {
        0 <= e ? ")" == E && (0 <= k && (L.value = c(e + 1, A)), k = e = -1) : "#" == E ? (b(), q = A + 1) : "." == E ? (b(), l = A) : ":" == E ? (b(), k = A) : "[" == E ? (b(), f = A, L = {}) : "(" == E ? (0 <= k && (L = {name:c(k + 1, A), value:m}, x.va.push(L)), e = A) : " " == E && y != E && (b(), 0 <= k && x.va.push({name:c(k + 1, A)}), x.wd = x.va.length || x.yb.length || x.W.length, x.re = x.Ra = c(Q, A), x.$d = x.D = x.Mb ? m : x.D || "*", x.D && (x.D = x.D.toUpperCase()), d.length && d[d.length - 
        1].Mb && (x.qd = d.pop(), x.Ra = x.qd.Ra + " " + x.Ra), d.push(x), x = m)
      }
    }
  }
  return d
}
function Kb(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function Lb(a) {
  return 1 == a.nodeType
}
function Mb(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Ib ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var Nb = {"*=":function(a, b) {
  return function(c) {
    return 0 <= Mb(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == Mb(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + Mb(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + Mb(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + Mb(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return Mb(c, a) == b
  }
}}, Ob = "undefined" == typeof document.firstChild.nextElementSibling, Pb = !Ob ? "nextElementSibling" : "nextSibling", Qb = !Ob ? "previousElementSibling" : "previousSibling", Rb = Ob ? Lb : Eb;
function Sb(a) {
  for(;a = a[Qb];) {
    if(Rb(a)) {
      return n
    }
  }
  return j
}
function Tb(a) {
  for(;a = a[Pb];) {
    if(Rb(a)) {
      return n
    }
  }
  return j
}
function Ub(a) {
  var b = a.parentNode, c = 0, d = b[Hb], f = a._i || -1, e = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(e == d && 0 <= f && 0 <= e) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[Pb]) {
    Rb(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function Vb(a) {
  return!(Ub(a) % 2)
}
function Wb(a) {
  return Ub(a) % 2
}
var Yb = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return Sb
}, "last-child":function() {
  return Tb
}, "only-child":function() {
  return function(a) {
    return!Sb(a) || !Tb(a) ? n : j
  }
}, empty:function() {
  return function(a) {
    for(var b = a.childNodes, a = a.childNodes.length - 1;0 <= a;a--) {
      var c = b[a].nodeType;
      if(1 === c || 3 == c) {
        return n
      }
    }
    return j
  }
}, contains:function(a, b) {
  var c = b.charAt(0);
  if('"' == c || "'" == c) {
    b = b.slice(1, -1)
  }
  return function(a) {
    return 0 <= a.innerHTML.indexOf(b)
  }
}, not:function(a, b) {
  var c = Jb(b)[0], d = {A:1};
  "*" != c.D && (d.D = 1);
  c.W.length || (d.W = 1);
  var f = Xb(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return Wb
  }
  if("even" == b) {
    return Vb
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, e = 0, h = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (e = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (h = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = Ub(a);
        return a >= e && (0 > h || a <= h) && a % d == f
      }
    }
    b = f
  }
  var k = parseInt(b, 10);
  return function(a) {
    return Ub(a) == k
  }
}}, Zb = F ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return Ib ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Xb(a, b) {
  if(!a) {
    return Eb
  }
  var b = b || {}, c = m;
  b.A || (c = Kb(c, Lb));
  b.D || "*" != a.D && (c = Kb(c, function(b) {
    return b && b.tagName == a.oc()
  }));
  b.W || B(a.W, function(a, b) {
    var e = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = Kb(c, function(a) {
      return e.test(a.className)
    });
    c.count = b
  });
  b.va || B(a.va, function(a) {
    var b = a.name;
    Yb[b] && (c = Kb(c, Yb[b](b, a.value)))
  });
  b.yb || B(a.yb, function(a) {
    var b, e = a.kc;
    a.type && Nb[a.type] ? b = Nb[a.type](e, a.vc) : e.length && (b = Zb(e));
    b && (c = Kb(c, b))
  });
  b.id || a.id && (c = Kb(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = Eb);
  return c
}
var $b = {};
function ac(a) {
  var b = $b[a.Ra];
  if(b) {
    return b
  }
  var c = a.qd, c = c ? c.Mb : "", d = Xb(a, {A:1}), f = "*" == a.D, e = document.getElementsByClassName;
  if(c) {
    if(e = {A:1}, f && (e.D = 1), d = Xb(a, e), "+" == c) {
      var h = d, b = function(a, b, c) {
        for(;a = a[Pb];) {
          if(!Ob || Lb(a)) {
            (!c || bc(a, c)) && h(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var k = d, b = function(a, b, c) {
          for(a = a[Pb];a;) {
            if(Rb(a)) {
              if(c && !bc(a, c)) {
                break
              }
              k(a) && b.push(a)
            }
            a = a[Pb]
          }
          return b
        }
      }else {
        if(">" == c) {
          var l = d, l = l || Eb, b = function(a, b, c) {
            for(var d = 0, f = a[Hb];a = f[d++];) {
              Rb(a) && ((!c || bc(a, c)) && l(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.wd && f ? Eb : Xb(a, {A:1, id:1}), b = function(b, c) {
        var f = rb(b).c(a.id), e;
        if(e = f && d(f)) {
          if(!(e = 9 == b.nodeType)) {
            for(e = f.parentNode;e && e != b;) {
              e = e.parentNode
            }
            e = !!e
          }
        }
        if(e) {
          return Fb(f, c)
        }
      }
    }else {
      if(e && /\{\s*\[native code\]\s*\}/.test(String(e)) && a.W.length && !Gb) {
        var d = Xb(a, {A:1, W:1, id:1}), q = a.W.join(" "), b = function(a, b) {
          for(var c = Fb(0, b), f, e = 0, h = a.getElementsByClassName(q);f = h[e++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.wd ? b = function(b, c) {
          for(var d = Fb(0, c), f, e = 0, h = b.getElementsByTagName(a.oc());f = h[e++];) {
            d.push(f)
          }
          return d
        } : (d = Xb(a, {A:1, D:1, id:1}), b = function(b, c) {
          for(var f = Fb(0, c), e, h = 0, l = b.getElementsByTagName(a.oc());e = l[h++];) {
            d(e, b) && f.push(e)
          }
          return f
        })
      }
    }
  }
  return $b[a.Ra] = b
}
var cc = {}, dc = {};
function ec(a) {
  var b = Jb(sa(a));
  if(1 == b.length) {
    var c = ac(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.Lb = j
      }
      return a
    }
  }
  return function(a) {
    for(var a = Fb(a), c, e, h = b.length, k, l, q = 0;q < h;q++) {
      l = [];
      c = b[q];
      e = a.length - 1;
      0 < e && (k = {}, l.Lb = j);
      e = ac(c);
      for(var w = 0;c = a[w];w++) {
        e(c, l, k)
      }
      if(!l.length) {
        break
      }
      a = l
    }
    return l
  }
}
var fc = !!document.querySelectorAll && (!H || I("526"));
function gc(a, b) {
  if(fc) {
    var c = dc[a];
    if(c && !b) {
      return c
    }
  }
  if(c = cc[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = j);
  if(fc && !b && -1 == ">~+".indexOf(c) && (!F || -1 == a.indexOf(":")) && !(Gb && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return dc[a] = function(b) {
      try {
        9 == b.nodeType || d || g("");
        var c = b.querySelectorAll(f);
        F ? c.Ld = j : c.Lb = j;
        return c
      }catch(e) {
        return gc(a, j)(b)
      }
    }
  }
  var e = a.split(/\s*,\s*/);
  return cc[a] = 2 > e.length ? ec(a) : function(a) {
    for(var b = 0, c = [], d;d = e[b++];) {
      c = c.concat(ec(d)(a))
    }
    return c
  }
}
var hc = 0, ic = F ? function(a) {
  return Ib ? a.getAttribute("_uid") || a.setAttribute("_uid", ++hc) || hc : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++hc)
};
function bc(a, b) {
  if(!b) {
    return 1
  }
  var c = ic(a);
  return!b[c] ? b[c] = 1 : 0
}
function jc(a) {
  if(a && a.Lb) {
    return a
  }
  var b = [];
  if(!a || !a.length) {
    return b
  }
  a[0] && b.push(a[0]);
  if(2 > a.length) {
    return b
  }
  hc++;
  if(F && Ib) {
    var c = hc + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(F && a.Ld) {
      try {
        for(d = 1;f = a[d];d++) {
          Lb(f) && b.push(f)
        }
      }catch(e) {
      }
    }else {
      a[0] && (a[0]._zipIdx = hc);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != hc && b.push(f), f._zipIdx = hc
      }
    }
  }
  return b
}
function M(a, b) {
  if(!a) {
    return[]
  }
  if(a.constructor == Array) {
    return a
  }
  if(!t(a)) {
    return[a]
  }
  if(t(b) && (b = t(b) ? document.getElementById(b) : b, !b)) {
    return[]
  }
  var b = b || document, c = b.ownerDocument || b.documentElement;
  Ib = b.contentType && "application/xml" == b.contentType || D && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (F ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = gc(a)(b)) && c.Lb ? c : jc(c)
}
M.va = Yb;
ca("goog.dom.query", M);
ca("goog.dom.query.pseudos", M.va);
var kc = !F || db(9), lc = !F || db(9), mc = F && !I("9");
!H || I("528");
G && I("1.9b") || F && I("8") || D && I("9.5") || H && I("528");
G && !I("8") || F && I("9");
function nc() {
  0 != oc && (this.le = Error().stack, ka(this))
}
var oc = 0;
nc.prototype.$c = n;
function pc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
r = pc.prototype;
r.ua = n;
r.defaultPrevented = n;
r.Ob = j;
r.stopPropagation = function() {
  this.ua = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.Ob = n
};
function qc(a) {
  a.preventDefault()
}
;function rc(a) {
  rc[" "](a);
  return a
}
rc[" "] = ea;
function sc(a, b) {
  a && this.init(a, b)
}
v(sc, pc);
var tc = [1, 4, 2];
r = sc.prototype;
r.target = m;
r.relatedTarget = m;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = n;
r.altKey = n;
r.shiftKey = n;
r.metaKey = n;
r.zc = n;
r.n = m;
r.init = function(a, b) {
  var c = this.type = a.type;
  pc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(G) {
      var f;
      a: {
        try {
          rc(d.nodeName);
          f = j;
          break a
        }catch(e) {
        }
        f = n
      }
      f || (d = m)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = H || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = H || a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.zc = Oa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.n = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ua
};
function uc(a) {
  return(kc ? 0 == a.n.button : "click" == a.type ? j : !!(a.n.button & tc[0])) && !(H && Oa && a.ctrlKey)
}
r.stopPropagation = function() {
  sc.G.stopPropagation.call(this);
  this.n.stopPropagation ? this.n.stopPropagation() : this.n.cancelBubble = j
};
r.preventDefault = function() {
  sc.G.preventDefault.call(this);
  var a = this.n;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, mc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.Md = p("n");
function vc() {
}
var wc = 0;
r = vc.prototype;
r.key = 0;
r.wa = n;
r.Vc = n;
r.init = function(a, b, c, d, f, e) {
  u(a) ? this.vd = j : a && a.handleEvent && u(a.handleEvent) ? this.vd = n : g(Error("Invalid listener argument"));
  this.Qa = a;
  this.Ad = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ma = e;
  this.Vc = n;
  this.key = ++wc;
  this.wa = n
};
r.handleEvent = function(a) {
  return this.vd ? this.Qa.call(this.Ma || this.src, a) : this.Qa.handleEvent.call(this.Qa, a)
};
var xc = {}, N = {}, yc = {}, zc = {};
function O(a, b, c, d, f) {
  if(b) {
    if(ha(b)) {
      for(var e = 0;e < b.length;e++) {
        O(a, b[e], c, d, f)
      }
      return m
    }
    var d = !!d, h = N;
    b in h || (h[b] = {m:0, K:0});
    h = h[b];
    d in h || (h[d] = {m:0, K:0}, h.m++);
    var h = h[d], k = ka(a), l;
    h.K++;
    if(h[k]) {
      l = h[k];
      for(e = 0;e < l.length;e++) {
        if(h = l[e], h.Qa == c && h.Ma == f) {
          if(h.wa) {
            break
          }
          return l[e].key
        }
      }
    }else {
      l = h[k] = [], h.m++
    }
    var q = Ac, w = lc ? function(a) {
      return q.call(w.src, w.key, a)
    } : function(a) {
      a = q.call(w.src, w.key, a);
      if(!a) {
        return a
      }
    }, e = w;
    e.src = a;
    h = new vc;
    h.init(c, e, a, b, d, f);
    c = h.key;
    e.key = c;
    l.push(h);
    xc[c] = h;
    yc[k] || (yc[k] = []);
    yc[k].push(h);
    a.addEventListener ? (a == s || !a.Xc) && a.addEventListener(b, e, d) : a.attachEvent(b in zc ? zc[b] : zc[b] = "on" + b, e);
    return c
  }
  g(Error("Invalid event type"))
}
function Bc(a, b, c, d, f) {
  if(ha(b)) {
    for(var e = 0;e < b.length;e++) {
      Bc(a, b[e], c, d, f)
    }
  }else {
    if(d = !!d, a = Cc(a, b, d)) {
      for(e = 0;e < a.length;e++) {
        if(a[e].Qa == c && a[e].capture == d && a[e].Ma == f) {
          P(a[e].key);
          break
        }
      }
    }
  }
}
function P(a) {
  if(!xc[a]) {
    return n
  }
  var b = xc[a];
  if(b.wa) {
    return n
  }
  var c = b.src, d = b.type, f = b.Ad, e = b.capture;
  c.removeEventListener ? (c == s || !c.Xc) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(d in zc ? zc[d] : zc[d] = "on" + d, f);
  c = ka(c);
  yc[c] && (f = yc[c], C(f, b), 0 == f.length && delete yc[c]);
  b.wa = j;
  if(b = N[d][e][c]) {
    b.yd = j, Dc(d, e, c, b)
  }
  delete xc[a];
  return j
}
function Dc(a, b, c, d) {
  if(!d.Hb && d.yd) {
    for(var f = 0, e = 0;f < d.length;f++) {
      d[f].wa ? d[f].Ad.src = m : (f != e && (d[e] = d[f]), e++)
    }
    d.length = e;
    d.yd = n;
    0 == e && (delete N[a][b][c], N[a][b].m--, 0 == N[a][b].m && (delete N[a][b], N[a].m--), 0 == N[a].m && delete N[a])
  }
}
function Cc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : m
}
function Ec(a, b, c, d, f) {
  var e = 1, b = ka(b);
  if(a[b]) {
    a.K--;
    a = a[b];
    a.Hb ? a.Hb++ : a.Hb = 1;
    try {
      for(var h = a.length, k = 0;k < h;k++) {
        var l = a[k];
        l && !l.wa && (e &= Fc(l, f) !== n)
      }
    }finally {
      a.Hb--, Dc(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Fc(a, b) {
  a.Vc && P(a.key);
  return a.handleEvent(b)
}
function Ac(a, b) {
  if(!xc[a]) {
    return j
  }
  var c = xc[a], d = c.type, f = N;
  if(!(d in f)) {
    return j
  }
  var f = f[d], e, h;
  if(!lc) {
    var k;
    if(!(k = b)) {
      a: {
        k = ["window", "event"];
        for(var l = s;e = k.shift();) {
          if(l[e] != m) {
            l = l[e]
          }else {
            k = m;
            break a
          }
        }
        k = l
      }
    }
    e = k;
    k = j in f;
    l = n in f;
    if(k) {
      if(0 > e.keyCode || e.returnValue != i) {
        return j
      }
      a: {
        var q = n;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(w) {
            q = j
          }
        }
        if(q || e.returnValue == i) {
          e.returnValue = j
        }
      }
    }
    q = new sc;
    q.init(e, this);
    e = j;
    try {
      if(k) {
        for(var y = [], E = q.currentTarget;E;E = E.parentNode) {
          y.push(E)
        }
        h = f[j];
        h.K = h.m;
        for(var Q = y.length - 1;!q.ua && 0 <= Q && h.K;Q--) {
          q.currentTarget = y[Q], e &= Ec(h, y[Q], d, j, q)
        }
        if(l) {
          h = f[n];
          h.K = h.m;
          for(Q = 0;!q.ua && Q < y.length && h.K;Q++) {
            q.currentTarget = y[Q], e &= Ec(h, y[Q], d, n, q)
          }
        }
      }else {
        e = Fc(c, q)
      }
    }finally {
      y && (y.length = 0)
    }
    return e
  }
  d = new sc(b, this);
  return e = Fc(c, d)
}
;function Gc(a) {
  nc.call(this);
  this.nd = a;
  this.h = []
}
v(Gc, nc);
var Hc = [];
function R(a, b, c, d, f) {
  ha(c) || (Hc[0] = c, c = Hc);
  for(var e = 0;e < c.length;e++) {
    var h = O(b, c[e], d || a, f || n, a.nd || a);
    a.h.push(h)
  }
  return a
}
function Ic(a, b, c, d, f, e) {
  if(ha(c)) {
    for(var h = 0;h < c.length;h++) {
      Ic(a, b, c[h], d, f, e)
    }
  }else {
    a: {
      d = d || a;
      e = e || a.nd || a;
      f = !!f;
      if(b = Cc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].wa && b[c].Qa == d && b[c].capture == f && b[c].Ma == e) {
            b = b[c];
            break a
          }
        }
      }
      b = m
    }
    b && (b = b.key, P(b), C(a.h, b))
  }
  return a
}
Gc.prototype.Nb = function() {
  B(this.h, P);
  this.h.length = 0
};
Gc.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function Jc() {
  nc.call(this)
}
v(Jc, nc);
r = Jc.prototype;
r.Xc = j;
r.yc = m;
r.Dc = function(a) {
  this.yc = a
};
r.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Bc(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(t(a)) {
      a = new pc(a, this)
    }else {
      if(a instanceof pc) {
        a.target = a.target || this
      }else {
        var d = a, a = new pc(b, this);
        qb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, e;
    if(b) {
      f = [];
      for(e = this;e;e = e.yc) {
        f.push(e)
      }
      e = c[j];
      e.K = e.m;
      for(var h = f.length - 1;!a.ua && 0 <= h && e.K;h--) {
        a.currentTarget = f[h], d &= Ec(e, f[h], a.type, j, a) && a.Ob != n
      }
    }
    if(n in c) {
      if(e = c[n], e.K = e.m, b) {
        for(h = 0;!a.ua && h < f.length && e.K;h++) {
          a.currentTarget = f[h], d &= Ec(e, f[h], a.type, n, a) && a.Ob != n
        }
      }else {
        for(f = this;!a.ua && f && e.K;f = f.yc) {
          a.currentTarget = f, d &= Ec(e, f, a.type, n, a) && a.Ob != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
function Kc(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
Kc.prototype.contains = function(a) {
  return!this || !a ? n : a instanceof Kc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
function Lc(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Lc.prototype.contains = function(a) {
  return a instanceof Lc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
function S(a, b, c) {
  t(b) ? Mc(a, c, b) : ob(b, qa(Mc, a))
}
function Mc(a, b, c) {
  a.style[za(c)] = b
}
function T(a, b) {
  var c = K(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Nc(a, b) {
  return a.currentStyle ? a.currentStyle[b] : m
}
function Oc(a, b) {
  return T(a, b) || Nc(a, b) || a.style && a.style[b]
}
function Pc(a, b, c) {
  var d, f = G && (Oa || Ua) && I("1.9");
  b instanceof J ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = Qc(d, f);
  a.style.top = Qc(b, f)
}
function Rc(a) {
  var b = a.getBoundingClientRect();
  F && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function Sc(a) {
  if(F && !db(8)) {
    return a.offsetParent
  }
  for(var b = K(a), c = Oc(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = Oc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return m
}
function Tc(a) {
  var b, c = K(a), d = Oc(a, "position"), f = G && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), e = new J(0, 0), h;
  b = c ? K(c) : document;
  if(h = F) {
    if(h = !db(9)) {
      rb(b), h = n
    }
  }
  h = h ? b.body : b.documentElement;
  if(a == h) {
    return e
  }
  if(a.getBoundingClientRect) {
    b = Rc(a), a = Db(rb(c)), e.x = b.left + a.x, e.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), e.x = b.screenX - a.screenX, e.y = b.screenY - a.screenY
    }else {
      f = a;
      do {
        e.x += f.offsetLeft;
        e.y += f.offsetTop;
        f != a && (e.x += f.clientLeft || 0, e.y += f.clientTop || 0);
        if(H && "fixed" == Oc(f, "position")) {
          e.x += c.body.scrollLeft;
          e.y += c.body.scrollTop;
          break
        }
        f = f.offsetParent
      }while(f && f != a);
      if(D || H && "absolute" == d) {
        e.y -= c.body.offsetTop
      }
      for(f = a;(f = Sc(f)) && f != c.body && f != h;) {
        if(e.x -= f.scrollLeft, !D || "TR" != f.tagName) {
          e.y -= f.scrollTop
        }
      }
    }
  }
  return e
}
function Uc(a, b) {
  var c = Vc(a), d = Vc(b);
  return new J(c.x - d.x, c.y - d.y)
}
function Vc(a) {
  var b = new J;
  if(1 == a.nodeType) {
    if(a.getBoundingClientRect) {
      var c = Rc(a);
      b.x = c.left;
      b.y = c.top
    }else {
      var c = Db(rb(a)), d = Tc(a);
      b.x = d.x - c.x;
      b.y = d.y - c.y
    }
    if(G && !I(12)) {
      var f;
      F ? f = "-ms-transform" : H ? f = "-webkit-transform" : D ? f = "-o-transform" : G && (f = "-moz-transform");
      var e;
      f && (e = Oc(a, f));
      e || (e = Oc(a, "transform"));
      e ? (a = e.match(Wc), a = !a ? new J(0, 0) : new J(parseFloat(a[1]), parseFloat(a[2]))) : a = new J(0, 0);
      b = new J(b.x + a.x, b.y + a.y)
    }
  }else {
    f = u(a.Md), e = a, a.targetTouches ? e = a.targetTouches[0] : f && a.n.targetTouches && (e = a.n.targetTouches[0]), b.x = e.clientX, b.y = e.clientY
  }
  return b
}
function Xc(a, b, c) {
  b instanceof nb ? (c = b.height, b = b.width) : c == i && g(Error("missing height argument"));
  a.style.width = Qc(b, j);
  a.style.height = Qc(c, j)
}
function Qc(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function Yc(a) {
  if("none" != Oc(a, "display")) {
    return Zc(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Zc(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Zc(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = H && !b && !c;
  return(!da(b) || d) && a.getBoundingClientRect ? (a = Rc(a), new nb(a.right - a.left, a.bottom - a.top)) : new nb(b, c)
}
function $c(a) {
  var b = Tc(a), a = Yc(a);
  return new Lc(b.x, b.y, a.width, a.height)
}
function U(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
}
function V(a, b) {
  a.style.display = b ? "" : "none"
}
function ad(a) {
  return"rtl" == Oc(a, "direction")
}
var bd = G ? "MozUserSelect" : H ? "WebkitUserSelect" : m;
function cd(a, b) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var f = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return f
}
function dd(a, b) {
  if(F) {
    var c = cd(a, Nc(a, b + "Left")), d = cd(a, Nc(a, b + "Right")), f = cd(a, Nc(a, b + "Top")), e = cd(a, Nc(a, b + "Bottom"));
    return new Kc(f, d, e, c)
  }
  c = T(a, b + "Left");
  d = T(a, b + "Right");
  f = T(a, b + "Top");
  e = T(a, b + "Bottom");
  return new Kc(parseFloat(f), parseFloat(d), parseFloat(e), parseFloat(c))
}
var ed = {thin:2, medium:4, thick:6};
function fd(a, b) {
  if("none" == Nc(a, b + "Style")) {
    return 0
  }
  var c = Nc(a, b + "Width");
  return c in ed ? ed[c] : cd(a, c)
}
function gd(a) {
  if(F) {
    var b = fd(a, "borderLeft"), c = fd(a, "borderRight"), d = fd(a, "borderTop"), a = fd(a, "borderBottom");
    return new Kc(d, c, a, b)
  }
  b = T(a, "borderLeftWidth");
  c = T(a, "borderRightWidth");
  d = T(a, "borderTopWidth");
  a = T(a, "borderBottomWidth");
  return new Kc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Wc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function hd(a, b, c) {
  nc.call(this);
  this.target = a;
  this.handle = b || a;
  this.tc = c || new Lc(NaN, NaN, NaN, NaN);
  this.I = K(a);
  this.ga = new Gc(this);
  O(this.handle, ["touchstart", "mousedown"], this.ee, n, this)
}
v(hd, Jc);
var id = F || G && I("1.9.3");
r = hd.prototype;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.Dd = 0;
r.Ed = 0;
r.Ha = 0;
r.Ia = 0;
r.bd = j;
r.qa = n;
r.pd = 0;
r.Wd = 0;
r.Td = n;
r.Fc = n;
r.Cb = p("ga");
function jd(a) {
  da(a.la) || (a.la = ad(a.target));
  return a.la
}
r.ee = function(a) {
  var b = "mousedown" == a.type;
  if(this.bd && !this.qa && (!b || uc(a))) {
    kd(a);
    if(0 == this.pd) {
      if(this.dispatchEvent(new ld("start", this, a.clientX, a.clientY, a))) {
        this.qa = j, a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.I, c = b.documentElement, d = !id;
    R(this.ga, b, ["touchmove", "mousemove"], this.Rd, d);
    R(this.ga, b, ["touchend", "mouseup"], this.Ab, d);
    id ? (c.setCapture(n), R(this.ga, c, "losecapture", this.Ab)) : R(this.ga, b ? b.parentWindow || b.defaultView : window, "blur", this.Ab);
    F && this.Td && R(this.ga, b, "dragstart", qc);
    this.be && R(this.ga, this.be, "scroll", this.Zd, d);
    this.clientX = this.Dd = a.clientX;
    this.clientY = this.Ed = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Fc ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, !c && "fixed" == Oc(a, "position") && (c = K(a).documentElement), c ? (G ? (d = gd(c), b += d.left) : db(8) && (d = gd(c), b -= d.left), a = ad(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.Ha = a;
    this.Ia = this.target.offsetTop;
    this.xc = Db(rb(this.I));
    this.Wd = ra()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
r.Ab = function(a, b) {
  this.ga.Nb();
  id && this.I.releaseCapture();
  if(this.qa) {
    kd(a);
    this.qa = n;
    var c = md(this, this.Ha), d = nd(this, this.Ia);
    this.dispatchEvent(new ld("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
  ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};
function kd(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.init(a.n.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.init(a.n.changedTouches[0], a.currentTarget)
}
r.Rd = function(a) {
  if(this.bd) {
    kd(a);
    var b = (this.Fc && jd(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.qa) {
      var d = this.Dd - this.clientX, f = this.Ed - this.clientY;
      if(d * d + f * f > this.pd) {
        if(this.dispatchEvent(new ld("start", this, a.clientX, a.clientY, a))) {
          this.qa = j
        }else {
          this.$c || this.Ab(a);
          return
        }
      }
    }
    c = od(this, b, c);
    b = c.x;
    c = c.y;
    this.qa && this.dispatchEvent(new ld("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (pd(this, a, b, c), a.preventDefault())
  }
};
function od(a, b, c) {
  var d = Db(rb(a.I)), b = b + (d.x - a.xc.x), c = c + (d.y - a.xc.y);
  a.xc = d;
  a.Ha += b;
  a.Ia += c;
  b = md(a, a.Ha);
  a = nd(a, a.Ia);
  return new J(b, a)
}
r.Zd = function(a) {
  var b = od(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  pd(this, a, b.x, b.y)
};
function pd(a, b, c, d) {
  a.Zc(c, d);
  a.dispatchEvent(new ld("drag", a, b.clientX, b.clientY, b, c, d))
}
function md(a, b) {
  var c = a.tc, d = !isNaN(c.left) ? c.left : m, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
function nd(a, b) {
  var c = a.tc, d = !isNaN(c.top) ? c.top : m, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
r.Zc = function(a, b) {
  this.Fc && jd(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
  this.target.style.top = b + "px"
};
function ld(a, b, c, d, f, e, h, k) {
  pc.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.je = f;
  this.left = da(e) ? e : b.Ha;
  this.top = da(h) ? h : b.Ia;
  this.ne = b;
  this.me = !!k
}
v(ld, pc);
function qd(a) {
  for(var b = 0, c = 0;a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) {
    b += a.offsetLeft - a.scrollLeft, c += a.offsetTop - a.scrollTop, a = a.offsetParent
  }
  return{top:c, left:b}
}
;function rd() {
  this.Xa = []
}
rd.prototype.k = function(a, b) {
  this.Xa[a] || (this.Xa[a] = []);
  this.Xa[a].push(b)
};
rd.prototype.Sa = function(a, b) {
  var c = this.Xa[a];
  c && C(c, b)
};
rd.prototype.fireEvent = function(a, b) {
  var c = n, d = this.Xa[a];
  d && B(d, function(a) {
    a = a(b);
    da(a) && !a && (c = j)
  });
  return c
};
function sd(a, b) {
  this.S = {};
  this.h = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      var f;
      if(a instanceof sd) {
        td(a), f = a.h.concat(), d = W(a)
      }else {
        var c = [], e = 0;
        for(f in a) {
          c[e++] = f
        }
        f = c;
        c = [];
        e = 0;
        for(d in a) {
          c[e++] = a[d]
        }
        d = c
      }
      for(c = 0;c < f.length;c++) {
        this.set(f[c], d[c])
      }
    }
  }
}
r = sd.prototype;
r.m = 0;
r.Gc = 0;
function W(a) {
  td(a);
  for(var b = [], c = 0;c < a.h.length;c++) {
    b.push(a.S[a.h[c]])
  }
  return b
}
r.clear = function() {
  this.S = {};
  this.Gc = this.m = this.h.length = 0
};
r.remove = function(a) {
  return ud(this.S, a) ? (delete this.S[a], this.m--, this.Gc++, this.h.length > 2 * this.m && td(this), j) : n
};
function td(a) {
  if(a.m != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      ud(a.S, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.m != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], ud(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
r.get = function(a, b) {
  return ud(this.S, a) ? this.S[a] : b
};
r.set = function(a, b) {
  ud(this.S, a) || (this.m++, this.h.push(a), this.Gc++);
  this.S[a] = b
};
function ud(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function vd(a, b) {
  this.x = a;
  this.y = b
}
;function wd(a) {
  this.points = a
}
function xd(a) {
  for(var b = 0, c = a.length - 1, d = 0;d < a.length;d++) {
    b += (a[c].x + a[d].x) * (a[c].y - a[d].y), c = d
  }
  return b / 2
}
function yd(a, b) {
  for(var c, d = c = 0, f, e = a.length - 1, h = 0;h < a.length;h++) {
    f = a[h].x * a[e].y - a[e].x * a[h].y, c += (a[h].x + a[e].x) * f, d += (a[h].y + a[e].y) * f, e = h
  }
  f = 6 * xd(a);
  c = new vd(Math.abs(c / f), Math.abs(d / f));
  d = [];
  for(f = 0;f < a.length;f++) {
    var e = a[f], k = (0 > xd(a) ? -1 : 1) * b, h = e.x - c.x, l = e.y - c.y, q = 0 < k ? 1 : 0 > k ? -1 : 0, k = Math.sqrt(Math.pow(k, 2) / (1 + Math.pow(h / l, 2)));
    d.push({x:e.x + Math.abs(h / l * k) * (0 < h ? 1 : 0 > h ? -1 : 0) * q, y:e.y + Math.abs(k) * (0 < l ? 1 : 0 > l ? -1 : 0) * q})
  }
  return d
}
;function zd(a, b, c, d) {
  0 < c ? (this.x = a, this.width = c) : (this.x = a + c, this.width = -c);
  0 < d ? (this.y = b, this.height = d) : (this.y = b + d, this.height = -d)
}
;function Ad(a, b) {
  this.type = a;
  this.geometry = b
}
function Bd(a) {
  return"rect" == a.type ? a.geometry.width * a.geometry.height : "polygon" == a.type ? Math.abs(xd(a.geometry.points)) : 0
}
function Cd(a) {
  if("rect" == a.type) {
    return a
  }
  if("polygon" == a.type) {
    for(var a = a.geometry.points, b = a[0].x, c = a[0].x, d = a[0].y, f = a[0].y, e = 1;e < a.length;e++) {
      a[e].x > c && (c = a[e].x), a[e].x < b && (b = a[e].x), a[e].y > f && (f = a[e].y), a[e].y < d && (d = a[e].y)
    }
    return new Ad("rect", new zd(b, d, c - b, f - d))
  }
}
function Dd(a, b) {
  var c;
  c = a.geometry.points;
  var d = 0 > xd(c) ? -1 : 1;
  if(4 > c.length) {
    c = yd(c, d * b)
  }else {
    for(var f = c.length - 1, e = 1, h = [], k = 0;k < c.length;k++) {
      f = yd([c[f], c[k], c[e]], d * b), h.push(f[1]), f = k, e++, e > c.length - 1 && (e = 0)
    }
    c = h
  }
  return new Ad("polygon", new wd(c))
}
function Ed(a, b) {
  if("rect" == a.type) {
    var c = a.geometry, d = b({x:c.x, y:c.y}), c = b({x:c.x + c.width, y:c.y + c.height});
    return new Ad("rect", new zd(d.x, d.y, c.x - d.x, c.y - d.y))
  }
  if("polygon" == a.type) {
    var f = [];
    B(a.geometry.points, function(a) {
      f.push(b(a))
    });
    return new Ad("polygon", new wd(f))
  }
}
function Fd(a) {
  return JSON.stringify(a.geometry)
}
window.annotorious || (window.annotorious = {});
window.annotorious.geometry || (window.annotorious.geometry = {}, window.annotorious.geometry.expand = Dd);
function Gd(a, b, c) {
  this.src = a;
  this.text = b;
  this.shapes = [c];
  this.context = document.URL
}
;function Hd() {
}
function Id(a, b) {
  a.f = new sd;
  a.Lc = [];
  a.ab = [];
  a.Da = [];
  a.za = [];
  a.Wb = [];
  a.sb = {Oa:n, Na:n};
  a.Aa = new sd;
  a.Yb = i;
  a.Sc = b
}
function Jd(a, b) {
  var c = a.Aa.get(b);
  c || (c = {Oa:n, Na:n}, a.Aa.set(b, c));
  return c
}
function Kd(a, b) {
  var c = a.nc(b);
  if(!a.f.get(c)) {
    var d = a.zd(b), f = [], e = [];
    B(a.Lc, function(a) {
      d.k(a.type, a.Ma)
    });
    B(a.ab, function(a) {
      if(a.onInitAnnotator) {
        a.onInitAnnotator(d)
      }
    });
    B(a.za, function(a) {
      a.src == c && (d.z(a), f.push(a))
    });
    B(a.Wb, function(a) {
      a.src == c && (d.w(a), e.push(a))
    });
    B(f, function(b) {
      C(a.za, b)
    });
    B(e, function(b) {
      C(a.Wb, b)
    });
    var h = a.Aa.get(c);
    h ? (h.Oa && d.O(), h.Na && d.Y(), a.Aa.remove(c)) : (a.sb.Oa && d.O(), a.sb.Na && d.Y());
    a.Yb && d.$(a.Yb);
    a.f.set(c, d);
    C(a.Da, b)
  }
}
function Ld(a) {
  var b, c;
  for(c = a.Da.length;0 < c;c--) {
    for(var d = b = a.Da[c - 1], f = d.offsetTop, e = d.offsetLeft, h = d.offsetWidth, k = d.offsetHeight;d.offsetParent;) {
      d = d.offsetParent, f += d.offsetTop, e += d.offsetLeft
    }
    f < window.pageYOffset + window.innerHeight && (e < window.pageXOffset + window.innerWidth && f + k > window.pageYOffset && e + h > window.pageXOffset) && Kd(a, b)
  }
}
function Md(a, b, c) {
  if(b) {
    var d = a.f.get(b);
    d ? c ? d.xa() : d.Y() : Jd(a, b).Na = c
  }else {
    B(W(a.f), function(a) {
      c ? a.xa() : a.Y()
    }), a.sb.Na = c, B(W(a.Aa), function(a) {
      a.Na = c
    })
  }
}
function Nd(a, b, c) {
  if(b) {
    var d = a.f.get(b);
    d ? c ? d.aa() : d.O() : Jd(a, b).Oa = c
  }else {
    B(W(a.f), function(a) {
      c ? a.aa() : a.O()
    }), a.sb.Oa = c, B(W(a.Aa), function(a) {
      a.Oa = c
    })
  }
}
r = Hd.prototype;
r.fa = function(a, b) {
  var c = i, d = i;
  t(a) ? (c = a, d = b) : u(a) && (d = a);
  c ? (c = this.f.get(c)) && c.fa(d) : B(W(this.f), function(a) {
    a.fa(d)
  })
};
r.z = function(a, b) {
  if(Od(this, a.src)) {
    var c = this.f.get(a.src);
    c ? c.z(a, b) : (this.za.push(a), b && C(this.za, b))
  }
};
r.k = function(a, b) {
  B(W(this.f), function(c) {
    c.k(a, b)
  });
  this.Lc.push({type:a, Ma:b})
};
r.xb = function(a) {
  this.ab.push(a);
  B(W(this.f), function(b) {
    if(a.onInitAnnotator) {
      a.onInitAnnotator(b)
    }
  })
};
function Od(a, b) {
  return ud(a.f.S, b) ? j : Ea(a.Da, function(c) {
    return a.nc(c) == b
  }) != m
}
r.R = function(a) {
  a ? (a = this.f.get(a)) && a.R() : (B(W(this.f), function(a) {
    a.R()
  }), this.f.clear())
};
r.ra = function(a) {
  if(Od(this, a) && (a = this.f.get(a))) {
    return a.ra().getName()
  }
};
r.J = function(a) {
  if(a) {
    var b = this.f.get(a);
    return b ? b.J() : Ba(this.za, function(b) {
      return b.src == a
    })
  }
  var c = [];
  B(W(this.f), function(a) {
    Ha(c, a.J())
  });
  Ha(c, this.za);
  return c
};
r.sa = function(a) {
  if(Od(this, a) && (a = this.f.get(a))) {
    return Ca(a.sa(), function(a) {
      return a.getName()
    })
  }
};
r.Y = function(a) {
  Md(this, a, n)
};
r.O = function(a) {
  Nd(this, a, n)
};
r.r = function(a) {
  if(a) {
    if(Od(this, a.src)) {
      var b = this.f.get(a.src);
      b && b.r(a)
    }
  }else {
    B(W(this.f), function(a) {
      a.r()
    })
  }
};
r.init = function() {
  this.Sc && Ha(this.Da, this.Sc());
  Ld(this);
  var a = this, b = O(window, "scroll", function() {
    0 < a.Da.length ? Ld(a) : P(b)
  })
};
r.uc = function(a) {
  this.Ec(a) && Kd(this, a)
};
r.w = function(a) {
  if(Od(this, a.src)) {
    var b = this.f.get(a.src);
    b ? b.w(a) : this.Wb.push(a)
  }
};
r.rb = function(a, b) {
  if(Od(this, a)) {
    var c = this.f.get(a);
    c && c.rb(b)
  }
};
r.$ = function(a) {
  this.Yb = a;
  B(W(this.f), function(b) {
    b.$(a)
  })
};
r.xa = function(a) {
  Md(this, a, j)
};
r.aa = function(a) {
  Nd(this, a, j)
};
function Pd(a, b) {
  var c = rb().createElement("DIV");
  c.innerHTML = a(b || Qd, i, i);
  if(1 == c.childNodes.length) {
    var d = c.firstChild;
    if(1 == d.nodeType) {
      return d
    }
  }
  return c
}
var Qd = {};
function Rd(a, b) {
  a != m && this.append.apply(this, arguments)
}
r = Rd.prototype;
r.pa = "";
r.set = function(a) {
  this.pa = "" + a
};
r.append = function(a, b, c) {
  this.pa += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.pa += arguments[d]
    }
  }
  return this
};
r.clear = function() {
  this.pa = ""
};
r.toString = p("pa");
/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
function Sd() {
}
var Td = {pe:"<", oe:">", he:"&", qe:"\u00a0", se:'"', ie:"'"}, Ud = {a:0, abbr:0, acronym:0, address:0, applet:16, area:2, b:0, base:18, basefont:18, bdo:0, big:0, blockquote:0, body:49, br:2, button:0, caption:0, center:0, cite:0, code:0, col:2, colgroup:1, dd:1, del:0, dfn:0, dir:0, div:0, dl:0, dt:1, em:0, fieldset:0, font:0, form:0, frame:18, frameset:16, h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, head:49, hr:2, html:49, i:0, iframe:20, img:2, input:2, ins:0, isindex:18, kbd:0, label:0, legend:0, li:1, 
link:18, map:0, menu:0, meta:18, noframes:20, noscript:20, object:16, ol:0, optgroup:0, option:1, p:1, param:18, pre:0, q:0, s:0, samp:0, script:20, select:0, small:0, span:0, strike:0, strong:0, style:20, sub:0, sup:0, table:0, tbody:1, td:1, textarea:8, tfoot:1, th:1, thead:1, title:24, tr:1, tt:0, u:0, ul:0, "var":0}, Vd = /&/g, Wd = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, Xd = /</g, Yd = />/g, Zd = /\"/g, $d = /=/g, ae = /\0/g, be = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g, ce = /^#(\d+)$/, de = 
/^#x([0-9A-Fa-f]+)$/, ee = RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[^a-z\\s>]+)", "i"), fe = RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<[!]--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))", "i");
Sd.prototype.parse = function(a, b) {
  var c = m, d = n, f = [], e, h, k;
  a.M = [];
  for(a.ia = n;b;) {
    var l = b.match(d ? ee : fe), b = b.substring(l[0].length);
    if(d) {
      if(l[1]) {
        var q = l[1].toLowerCase();
        if(l[2]) {
          l = l[3];
          switch(l.charCodeAt(0)) {
            case 34:
            ;
            case 39:
              l = l.substring(1, l.length - 1)
          }
          l = l.replace(ae, "").replace(be, pa(this.Ud, this))
        }else {
          l = q
        }
        f.push(q, l)
      }else {
        l[4] && (h !== i && (k ? a.Cd && a.Cd(e, f) : a.cd && a.cd(e)), k && h & 12 && (c = c === m ? b.toLowerCase() : c.substring(c.length - b.length), d = c.indexOf("</" + e), 0 > d && (d = b.length), h & 4 ? a.Wc && a.Wc(b.substring(0, d)) : a.Bd && a.Bd(b.substring(0, d).replace(Wd, "&amp;$1").replace(Xd, "&lt;").replace(Yd, "&gt;")), b = b.substring(d)), e = h = k = i, f.length = 0, d = n)
      }
    }else {
      if(l[1]) {
        ge(a, l[0])
      }else {
        if(l[3]) {
          k = !l[2], d = j, e = l[3].toLowerCase(), h = Ud.hasOwnProperty(e) ? Ud[e] : i
        }else {
          if(l[4]) {
            ge(a, l[4])
          }else {
            if(l[5]) {
              switch(l[5]) {
                case "<":
                  ge(a, "&lt;");
                  break;
                case ">":
                  ge(a, "&gt;");
                  break;
                default:
                  ge(a, "&amp;")
              }
            }
          }
        }
      }
    }
  }
  for(c = a.M.length;0 <= --c;) {
    a.ba.append("</", a.M[c], ">")
  }
  a.M.length = 0
};
Sd.prototype.Ud = function(a) {
  a = a.toLowerCase();
  if(Td.hasOwnProperty(a)) {
    return Td[a]
  }
  var b = a.match(ce);
  return b ? String.fromCharCode(parseInt(b[1], 10)) : (b = a.match(de)) ? String.fromCharCode(parseInt(b[1], 16)) : ""
};
function he() {
}
;/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
function ie(a, b, c) {
  this.ba = a;
  this.M = [];
  this.ia = n;
  this.Gd = b;
  this.Kb = c
}
v(ie, he);
var je = {"*::class":9, "*::dir":0, "*::id":4, "*::lang":0, "*::onclick":2, "*::ondblclick":2, "*::onkeydown":2, "*::onkeypress":2, "*::onkeyup":2, "*::onload":2, "*::onmousedown":2, "*::onmousemove":2, "*::onmouseout":2, "*::onmouseover":2, "*::onmouseup":2, "*::style":3, "*::title":0, "*::accesskey":0, "*::tabindex":0, "*::onfocus":2, "*::onblur":2, "a::coords":0, "a::href":1, "a::hreflang":0, "a::name":7, "a::onblur":2, "a::rel":0, "a::rev":0, "a::shape":0, "a::target":10, "a::type":0, "area::accesskey":0, 
"area::alt":0, "area::coords":0, "area::href":1, "area::nohref":0, "area::onfocus":2, "area::shape":0, "area::tabindex":0, "area::target":10, "bdo::dir":0, "blockquote::cite":1, "br::clear":0, "button::accesskey":0, "button::disabled":0, "button::name":8, "button::onblur":2, "button::onfocus":2, "button::tabindex":0, "button::type":0, "button::value":0, "caption::align":0, "col::align":0, "col::char":0, "col::charoff":0, "col::span":0, "col::valign":0, "col::width":0, "colgroup::align":0, "colgroup::char":0, 
"colgroup::charoff":0, "colgroup::span":0, "colgroup::valign":0, "colgroup::width":0, "del::cite":1, "del::datetime":0, "dir::compact":0, "div::align":0, "dl::compact":0, "font::color":0, "font::face":0, "font::size":0, "form::accept":0, "form::action":1, "form::autocomplete":0, "form::enctype":0, "form::method":0, "form::name":7, "form::onreset":2, "form::onsubmit":2, "form::target":10, "h1::align":0, "h2::align":0, "h3::align":0, "h4::align":0, "h5::align":0, "h6::align":0, "hr::align":0, "hr::noshade":0, 
"hr::size":0, "hr::width":0, "img::align":0, "img::alt":0, "img::border":0, "img::height":0, "img::hspace":0, "img::ismap":0, "img::longdesc":1, "img::name":7, "img::src":1, "img::usemap":11, "img::vspace":0, "img::width":0, "input::accept":0, "input::accesskey":0, "input::autocomplete":0, "input::align":0, "input::alt":0, "input::checked":0, "input::disabled":0, "input::ismap":0, "input::maxlength":0, "input::name":8, "input::onblur":2, "input::onchange":2, "input::onfocus":2, "input::onselect":2, 
"input::readonly":0, "input::size":0, "input::src":1, "input::tabindex":0, "input::type":0, "input::usemap":11, "input::value":0, "ins::cite":1, "ins::datetime":0, "label::accesskey":0, "label::for":5, "label::onblur":2, "label::onfocus":2, "legend::accesskey":0, "legend::align":0, "li::type":0, "li::value":0, "map::name":7, "menu::compact":0, "ol::compact":0, "ol::start":0, "ol::type":0, "optgroup::disabled":0, "optgroup::label":0, "option::disabled":0, "option::label":0, "option::selected":0, "option::value":0, 
"p::align":0, "pre::width":0, "q::cite":1, "select::disabled":0, "select::multiple":0, "select::name":8, "select::onblur":2, "select::onchange":2, "select::onfocus":2, "select::size":0, "select::tabindex":0, "table::align":0, "table::bgcolor":0, "table::border":0, "table::cellpadding":0, "table::cellspacing":0, "table::frame":0, "table::rules":0, "table::summary":0, "table::width":0, "tbody::align":0, "tbody::char":0, "tbody::charoff":0, "tbody::valign":0, "td::abbr":0, "td::align":0, "td::axis":0, 
"td::bgcolor":0, "td::char":0, "td::charoff":0, "td::colspan":0, "td::headers":6, "td::height":0, "td::nowrap":0, "td::rowspan":0, "td::scope":0, "td::valign":0, "td::width":0, "textarea::accesskey":0, "textarea::cols":0, "textarea::disabled":0, "textarea::name":8, "textarea::onblur":2, "textarea::onchange":2, "textarea::onfocus":2, "textarea::onselect":2, "textarea::readonly":0, "textarea::rows":0, "textarea::tabindex":0, "tfoot::align":0, "tfoot::char":0, "tfoot::charoff":0, "tfoot::valign":0, 
"th::abbr":0, "th::align":0, "th::axis":0, "th::bgcolor":0, "th::char":0, "th::charoff":0, "th::colspan":0, "th::headers":6, "th::height":0, "th::nowrap":0, "th::rowspan":0, "th::scope":0, "th::valign":0, "th::width":0, "thead::align":0, "thead::char":0, "thead::charoff":0, "thead::valign":0, "tr::align":0, "tr::bgcolor":0, "tr::char":0, "tr::charoff":0, "tr::valign":0, "ul::compact":0, "ul::type":0};
ie.prototype.Cd = function(a, b) {
  if(!this.ia && Ud.hasOwnProperty(a)) {
    var c = Ud[a];
    if(!(c & 32)) {
      if(c & 16) {
        this.ia = !(c & 2)
      }else {
        for(var d = b, f = 0;f < d.length;f += 2) {
          var e = d[f], h = d[f + 1], k = m, l;
          if((l = a + "::" + e, je.hasOwnProperty(l)) || (l = "*::" + e, je.hasOwnProperty(l))) {
            k = je[l]
          }
          if(k !== m) {
            switch(k) {
              case 0:
                break;
              case 2:
              ;
              case 3:
                h = m;
                break;
              case 4:
              ;
              case 5:
              ;
              case 6:
              ;
              case 7:
              ;
              case 8:
              ;
              case 9:
                h = this.Kb ? this.Kb(h) : h;
                break;
              case 1:
                h = this.Gd && this.Gd(h);
                break;
              case 11:
                h && "#" === h.charAt(0) ? (h = this.Kb ? this.Kb(h) : h) && (h = "#" + h) : h = m;
                break;
              default:
                h = m
            }
          }else {
            h = m
          }
          d[f + 1] = h
        }
        if(b = d) {
          c & 2 || this.M.push(a);
          this.ba.append("<", a);
          c = 0;
          for(d = b.length;c < d;c += 2) {
            f = b[c], e = b[c + 1], e !== m && e !== i && this.ba.append(" ", f, '="', e.replace(Vd, "&amp;").replace(Xd, "&lt;").replace(Yd, "&gt;").replace(Zd, "&#34;").replace($d, "&#61;"), '"')
          }
          this.ba.append(">")
        }
      }
    }
  }
};
ie.prototype.cd = function(a) {
  if(this.ia) {
    this.ia = n
  }else {
    if(Ud.hasOwnProperty(a)) {
      var b = Ud[a];
      if(!(b & 50)) {
        if(b & 1) {
          for(b = this.M.length;0 <= --b;) {
            var c = this.M[b];
            if(c === a) {
              break
            }
            if(!(Ud[c] & 1)) {
              return
            }
          }
        }else {
          for(b = this.M.length;0 <= --b && this.M[b] !== a;) {
          }
        }
        if(!(0 > b)) {
          for(var d = this.M.length;--d > b;) {
            c = this.M[d], Ud[c] & 1 || this.ba.append("</", c, ">")
          }
          this.M.length = b;
          this.ba.append("</", a, ">")
        }
      }
    }
  }
};
function ge(a, b) {
  a.ia || a.ba.append(b)
}
ie.prototype.Bd = function(a) {
  this.ia || this.ba.append(a)
};
ie.prototype.Wc = function(a) {
  this.ia || this.ba.append(a)
};
function ke(a, b, c, d, f) {
  if(!F && (!H || !I("525"))) {
    return j
  }
  if(Oa && f) {
    return le(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || F && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!(F && db(9));
    case 27:
      return!H
  }
  return le(a)
}
function le(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || H && 0 == a) {
    return j
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return j;
    default:
      return n
  }
}
function me(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;function ne(a, b) {
  nc.call(this);
  a && oe(this, a, b)
}
v(ne, Jc);
r = ne.prototype;
r.B = m;
r.Fb = m;
r.rc = m;
r.Gb = m;
r.ka = -1;
r.ja = -1;
r.jc = n;
var pe = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, qe = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, re = F || 
H && I("525"), se = Oa && G;
r = ne.prototype;
r.Od = function(a) {
  if(H && (17 == this.ka && !a.ctrlKey || 18 == this.ka && !a.altKey)) {
    this.ja = this.ka = -1
  }
  re && !ke(a.keyCode, this.ka, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ja = G ? me(a.keyCode) : a.keyCode, se && (this.jc = a.altKey))
};
r.Qd = function(a) {
  this.ja = this.ka = -1;
  this.jc = a.altKey
};
r.handleEvent = function(a) {
  var b = a.n, c, d, f = b.altKey;
  F && "keypress" == a.type ? (c = this.ja, d = 13 != c && 27 != c ? b.keyCode : 0) : H && "keypress" == a.type ? (c = this.ja, d = 0 <= b.charCode && 63232 > b.charCode && le(c) ? b.charCode : 0) : D ? (c = this.ja, d = le(c) ? b.keyCode : 0) : (c = b.keyCode || this.ja, d = b.charCode || 0, se && (f = this.jc), Oa && (63 == d && 224 == c) && (c = 191));
  var e = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in pe ? e = pe[c] : 25 == c && a.shiftKey && (e = 9) : h && h in qe && (e = qe[h]);
  a = e == this.ka;
  this.ka = e;
  b = new te(e, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b)
};
r.c = p("B");
function oe(a, b, c) {
  a.Gb && a.detach();
  a.B = b;
  a.Fb = O(a.B, "keypress", a, c);
  a.rc = O(a.B, "keydown", a.Od, c, a);
  a.Gb = O(a.B, "keyup", a.Qd, c, a)
}
r.detach = function() {
  this.Fb && (P(this.Fb), P(this.rc), P(this.Gb), this.Gb = this.rc = this.Fb = m);
  this.B = m;
  this.ja = this.ka = -1
};
function te(a, b, c, d) {
  d && this.init(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
v(te, sc);
function ue() {
}
fa(ue);
ue.prototype.Yd = 0;
ue.pb();
function ve(a) {
  nc.call(this);
  this.jb = a || rb();
  this.la = we
}
v(ve, Jc);
ve.prototype.Sd = ue.pb();
var we = m;
function xe(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  g(Error("Invalid component state"))
}
r = ve.prototype;
r.Eb = m;
r.Z = n;
r.B = m;
r.la = m;
r.ta = m;
r.gb = m;
r.Ga = m;
r.ge = n;
r.c = p("B");
r.Cb = function() {
  return this.pc || (this.pc = new Gc(this))
};
r.Dc = function(a) {
  this.ta && this.ta != a && g(Error("Method not supported"));
  ve.G.Dc.call(this, a)
};
r.fd = p("jb");
r.ib = function(a) {
  this.Z && g(Error("Component already rendered"));
  if(a && this.fb(a)) {
    this.ge = j;
    if(!this.jb || this.jb.I != K(a)) {
      this.jb = rb(a)
    }
    this.Yc(a);
    this.Ja()
  }else {
    g(Error("Invalid element to decorate"))
  }
};
r.fb = ba(j);
r.Yc = function(a) {
  this.B = a
};
r.Ja = function() {
  function a(a) {
    !a.Z && a.c() && a.Ja()
  }
  this.Z = j;
  this.gb && B(this.gb, a, i)
};
r.Bb = function() {
  function a(a) {
    a.Z && a.Bb()
  }
  this.gb && B(this.gb, a, i);
  this.pc && this.pc.Nb();
  this.Z = n
};
r.nb = p("B");
r.Ta = function(a) {
  this.Z && g(Error("Component already rendered"));
  this.la = a
};
r.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : a.Eb || (a.Eb = ":" + (a.Sd.Yd++).toString(36)), d;
    this.Ga && c ? (d = this.Ga, d = (c in d ? d[c] : i) || m) : d = m;
    a = d;
    c && a && (d = this.Ga, c in d && delete d[c], C(this.gb, a), b && (a.Bb(), a.B && yb(a.B)), c = a, c == m && g(Error("Unable to set parent component")), c.ta = m, ve.G.Dc.call(c, m))
  }
  a || g(Error("Child is not in parent component"));
  return a
};
function ye() {
}
var ze;
fa(ye);
r = ye.prototype;
r.nb = function(a) {
  return a
};
r.kb = function(a, b, c) {
  if(a = a.c ? a.c() : a) {
    if(F && !I("7")) {
      var d = Ae(hb(a), b);
      d.push(b);
      qa(c ? ib : kb, a).apply(m, d)
    }else {
      c ? ib(a, b) : kb(a, b)
    }
  }
};
r.fb = ba(j);
r.ib = function(a, b) {
  if(b.id) {
    var c = b.id;
    if(a.ta && a.ta.Ga) {
      var d = a.ta.Ga, f = a.Eb;
      f in d && delete d[f];
      d = a.ta.Ga;
      c in d && g(Error('The object already contains the key "' + c + '"'));
      d[c] = a
    }
    a.Eb = c
  }
  (c = this.nb(b)) && c.firstChild ? (c = c.firstChild.nextSibling ? Ga(c.childNodes) : c.firstChild, a.hb = c) : a.hb = m;
  var e = 0, h = this.ob(), k = this.ob(), l = n, q = n, c = n, d = hb(b);
  B(d, function(a) {
    if(!l && a == h) {
      l = j, k == h && (q = j)
    }else {
      if(!q && a == k) {
        q = j
      }else {
        var b = e;
        if(!this.Fd) {
          this.zb || Be(this);
          var c = this.zb, d = {}, f;
          for(f in c) {
            d[c[f]] = f
          }
          this.Fd = d
        }
        a = parseInt(this.Fd[a], 10);
        e = b | (isNaN(a) ? 0 : a)
      }
    }
  }, this);
  a.t = e;
  l || (d.push(h), k == h && (q = j));
  q || d.push(k);
  (f = a.X) && d.push.apply(d, f);
  if(F && !I("7")) {
    var w = Ae(d);
    0 < w.length && (d.push.apply(d, w), c = j)
  }
  if(!l || !q || f || c) {
    b.className = d.join(" ")
  }
  a.isEnabled() || this.Ua(b, 1, j);
  a.t & 8 && this.Ua(b, 8, j);
  a.P & 16 && this.Ua(b, 16, !!(a.t & 16));
  a.P & 64 && this.Ua(b, 64, !!(a.t & 64));
  return b
};
r.Pb = function(a, b) {
  var c = !b, d = F || D ? a.getElementsByTagName("*") : m;
  if(bd) {
    if(c = c ? "none" : "", a.style[bd] = c, d) {
      for(var f = 0, e;e = d[f];f++) {
        e.style[bd] = c
      }
    }
  }else {
    if(F || D) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(f = 0;e = d[f];f++) {
          e.setAttribute("unselectable", c)
        }
      }
    }
  }
};
r.Ta = function(a, b) {
  this.kb(a, this.ob() + "-rtl", b)
};
r.ud = function(a) {
  var b;
  return a.P & 32 && (b = a.Ka()) ? Cb(b) : n
};
r.Cc = function(a, b) {
  var c;
  if(a.P & 32 && (c = a.Ka())) {
    if(!b && a.t & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.t & 32 && a.gd()
    }
    Cb(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.L = function(a, b, c) {
  var d = a.c();
  if(d) {
    var f;
    this.zb || Be(this);
    (f = this.zb[b]) && this.kb(a, f, c);
    this.Ua(d, b, c)
  }
};
r.Ua = function(a, b, c) {
  ze || (ze = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = ze[b]) && a.setAttribute("aria-" + b, c)
};
r.ma = function(a, b) {
  var c = this.nb(a);
  if(c && (xb(c), b)) {
    if(t(b)) {
      if("textContent" in c) {
        c.textContent = b
      }else {
        if(c.firstChild && 3 == c.firstChild.nodeType) {
          for(;c.lastChild != c.firstChild;) {
            c.removeChild(c.lastChild)
          }
          c.firstChild.data = b
        }else {
          xb(c), c.appendChild(K(c).createTextNode(b))
        }
      }
    }else {
      var d = function(a) {
        if(a) {
          var b = K(c);
          c.appendChild(t(a) ? b.createTextNode(a) : a)
        }
      };
      ha(b) ? B(b, d) : ia(b) && !("nodeType" in b) ? B(Ga(b), d) : d(b)
    }
  }
};
r.Ka = function(a) {
  return a.c()
};
r.ob = ba("goog-control");
function Ae(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  B([], function(d) {
    Da(d, qa(Fa, a)) && (!b || Fa(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Be(a) {
  var b = a.ob();
  a.zb = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
}
;var Ce = {};
function X(a, b, c) {
  ve.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Ce[d]) {
        break
      }
      b = b.G ? b.G.constructor : m
    }
    b = d ? u(d.pb) ? d.pb() : new d : m
  }
  this.C = b;
  this.hb = a
}
v(X, ve);
r = X.prototype;
r.hb = m;
r.t = 0;
r.P = 39;
r.lc = 255;
r.fe = 0;
r.Rb = j;
r.X = m;
r.qc = j;
r.ic = n;
r.ae = m;
function De(a) {
  a.Z && n != a.qc && Ee(a, n);
  a.qc = n
}
r.Ka = function() {
  return this.C.Ka(this)
};
r.kb = function(a, b) {
  b ? a && (this.X ? Fa(this.X, a) || this.X.push(a) : this.X = [a], this.C.kb(this, a, j)) : a && this.X && (C(this.X, a), 0 == this.X.length && (this.X = m), this.C.kb(this, a, n))
};
r.nb = function() {
  return this.C.nb(this.c())
};
r.fb = function(a) {
  return this.C.fb(a)
};
r.Yc = function(a) {
  this.B = a = this.C.ib(this, a);
  var b = this.ae || i;
  b && a.setAttribute("role", b);
  this.ic || this.C.Pb(a, n);
  this.Rb = "none" != a.style.display
};
r.Ja = function() {
  X.G.Ja.call(this);
  var a = this.C;
  this.la == m && (this.la = ad(this.Z ? this.B : this.jb.I.body));
  this.la && a.Ta(this.c(), j);
  this.isEnabled() && a.Cc(this, this.Rb);
  if(this.P & -2 && (this.qc && Ee(this, j), this.P & 32 && (a = this.Ka()))) {
    var b = this.sc || (this.sc = new ne);
    oe(b, a);
    R(R(R(this.Cb(), b, "key", this.Pd), a, "focus", this.Nd), a, "blur", this.gd)
  }
};
function Ee(a, b) {
  var c = a.Cb(), d = a.c();
  b ? (R(R(R(R(c, d, "mouseover", a.ld), d, "mousedown", a.jd), d, "mouseup", a.md), d, "mouseout", a.kd), a.Db != ea && R(c, d, "contextmenu", a.Db), F && R(c, d, "dblclick", a.hd)) : (Ic(Ic(Ic(Ic(c, d, "mouseover", a.ld), d, "mousedown", a.jd), d, "mouseup", a.md), d, "mouseout", a.kd), a.Db != ea && Ic(c, d, "contextmenu", a.Db), F && Ic(c, d, "dblclick", a.hd))
}
r.Bb = function() {
  X.G.Bb.call(this);
  this.sc && this.sc.detach();
  this.Rb && this.isEnabled() && this.C.Cc(this, n)
};
r.ma = function(a) {
  this.C.ma(this.c(), a);
  this.hb = a
};
r.Ta = function(a) {
  X.G.Ta.call(this, a);
  var b = this.c();
  b && this.C.Ta(b, a)
};
r.Pb = function(a) {
  this.ic = a;
  var b = this.c();
  b && this.C.Pb(b, a)
};
r.isEnabled = function() {
  return!(this.t & 1)
};
function Fe(a, b) {
  He(a, 2, b) && a.L(2, b)
}
r.setActive = function(a) {
  He(this, 4, a) && this.L(4, a)
};
r.L = function(a, b) {
  this.P & a && b != !!(this.t & a) && (this.C.L(this, a, b), this.t = b ? this.t | a : this.t & ~a)
};
function Y(a, b) {
  return!!(a.lc & b) && !!(a.P & b)
}
function He(a, b, c) {
  return!!(a.P & b) && !!(a.t & b) != c && (!(a.fe & b) || a.dispatchEvent(xe(b, c))) && !a.$c
}
r.ld = function(a) {
  (!a.relatedTarget || !Bb(this.c(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && Y(this, 2)) && Fe(this, j)
};
r.kd = function(a) {
  if((!a.relatedTarget || !Bb(this.c(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Y(this, 4) && this.setActive(n), Y(this, 2) && Fe(this, n)
  }
};
r.Db = ea;
r.jd = function(a) {
  this.isEnabled() && (Y(this, 2) && Fe(this, j), uc(a) && (Y(this, 4) && this.setActive(j), this.C.ud(this) && this.Ka().focus()));
  !this.ic && uc(a) && a.preventDefault()
};
r.md = function(a) {
  this.isEnabled() && (Y(this, 2) && Fe(this, j), this.t & 4 && (Ie(this, a) && Y(this, 4)) && this.setActive(n))
};
r.hd = function(a) {
  this.isEnabled() && Ie(this, a)
};
function Ie(a, b) {
  if(Y(a, 16)) {
    var c = !(a.t & 16);
    He(a, 16, c) && a.L(16, c)
  }
  Y(a, 8) && He(a, 8, j) && a.L(8, j);
  Y(a, 64) && (c = !(a.t & 64), He(a, 64, c) && a.L(64, c));
  c = new pc("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.zc = b.zc);
  return a.dispatchEvent(c)
}
r.Nd = function() {
  Y(this, 32) && He(this, 32, j) && this.L(32, j)
};
r.gd = function() {
  Y(this, 4) && this.setActive(n);
  Y(this, 32) && He(this, 32, n) && this.L(32, n)
};
r.Pd = function(a) {
  return this.Rb && this.isEnabled() && 13 == a.keyCode && Ie(this, a) ? (a.preventDefault(), a.stopPropagation(), j) : n
};
u(X) || g(Error("Invalid component class " + X));
u(ye) || g(Error("Invalid renderer class " + ye));
var Je = ka(X);
Ce[Je] = ye;
function Ke() {
  return new X(m)
}
u(Ke) || g(Error("Invalid decorator function " + Ke));
function Le() {
}
v(Le, ye);
fa(Le);
r = Le.prototype;
r.ib = function(a, b) {
  De(a);
  a.lc &= -256;
  a.Z && a.t & 32 && g(Error("Component already rendered"));
  a.t & 32 && a.L(32, n);
  a.P &= -33;
  Le.G.ib.call(this, a, b);
  a.ma(b.value);
  return b
};
r.fb = function(a) {
  return"TEXTAREA" == a.tagName
};
r.Ta = ea;
r.ud = function(a) {
  return a.isEnabled()
};
r.Cc = ea;
r.L = function(a, b, c) {
  Le.G.L.call(this, a, b, c);
  if((a = a.c()) && 1 == b) {
    a.disabled = c
  }
};
r.Ua = ea;
r.ma = function(a, b) {
  a && (a.value = b)
};
r.ob = ba("goog-textarea");
function Me(a, b, c) {
  X.call(this, a, b || Le.pb(), c);
  De(this);
  this.Pb(j);
  a || (this.hb = "")
}
v(Me, X);
var Ne = G || H;
r = Me.prototype;
r.Pa = n;
r.ha = 0;
r.Vd = 0;
r.xd = 0;
r.od = n;
r.Jb = n;
r.Bc = n;
r.Ac = n;
function Oe(a) {
  return a.qb.top + a.qb.bottom + a.Uc.top + a.Uc.bottom
}
function Pe(a) {
  var b = a.xd, c = a.c();
  b && (c && a.Jb) && (b -= Oe(a));
  return b
}
function Qe(a) {
  var b = a.Vd, c = a.c();
  b && (c && a.Jb) && (b -= Oe(a));
  return b
}
r.ma = function(a) {
  Me.G.ma.call(this, a);
  this.c() && this.La()
};
r.Ja = function() {
  Me.G.Ja.call(this);
  var a = this.c();
  S(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.qb = dd(a, "padding");
  this.Uc = gd(a);
  R(R(R(R(this.Cb(), a, "scroll", this.La), a, "focus", this.La), a, "keyup", this.La), a, "mouseup", this.Xd);
  this.c() && this.La()
};
function Re(a) {
  if(!a.od) {
    var b = a.c().cloneNode(n);
    S(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.fd().I.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.Bc = d > c;
    b.style.borderWidth = "10px";
    a.Ac = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.Jb = j);
    yb(b);
    a.od = j
  }
  var b = a.c(), c = a.c().scrollHeight, f = a.c(), d = f.offsetHeight - f.clientHeight;
  if(!a.Bc) {
    var e = a.qb, d = d - (e.top + e.bottom)
  }
  a.Ac || (f = gd(f), d -= f.top + f.bottom);
  c += 0 < d ? d : 0;
  a.Jb ? c -= Oe(a) : (a.Bc || (d = a.qb, c += d.top + d.bottom), a.Ac || (a = gd(b), c += a.top + a.bottom));
  return c
}
function Se(a, b) {
  a.ha != b && (a.ha = b, a.c().style.height = b + "px")
}
function Te(a) {
  a = a.c();
  a.style.height = "auto";
  var b = a.value.match(/\n/g) || [];
  a.rows = b.length + 1
}
r.La = function() {
  if(!this.Pa) {
    var a = n;
    this.Pa = j;
    var b = this.c(), c = this.ha;
    if(b.scrollHeight) {
      var d = n, f = n, e = Re(this), h = b.offsetHeight, k = Pe(this), l = Qe(this);
      k && e < k ? (Se(this, k), d = j) : l && e > l ? (Se(this, l), b.style.overflowY = "", f = j) : h != e ? Se(this, e) : this.ha || (this.ha = e);
      !d && (!f && Ne) && (a = j)
    }else {
      Te(this)
    }
    this.Pa = n;
    a && (a = this.c(), this.Pa || (this.Pa = j, b = n, a.value || (a.value = " ", b = j), (f = a.scrollHeight) ? (e = Re(this), d = Pe(this), h = Qe(this), !(d && e <= d) && !(h && e >= h) && (h = this.qb, a.style.paddingBottom = h.bottom + 1 + "px", Re(this) == e && (a.style.paddingBottom = h.bottom + f + "px", a.scrollTop = 0, f = Re(this) - f, f >= d ? Se(this, f) : Se(this, d)), a.style.paddingBottom = h.bottom + "px")) : Te(this), b && (a.value = ""), this.Pa = n));
    c != this.ha && this.dispatchEvent("resize")
  }
};
r.Xd = function() {
  var a = this.c(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.ha && (this.ha = this.xd = b)
};
F && I(8);
function Ue(a) {
  return"object" === typeof a && a && 0 === a.ke ? a.content : String(a).replace(Ve, We)
}
var Xe = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function We(a) {
  return Xe[a]
}
var Ve = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Ye() {
  return'<div class="annotorious-popup top-left" style="position:absolute;z-index:1"><div class="annotorious-popup-buttons"><a class="annotorious-popup-button annotorious-popup-button-edit" title="Edit" href="javascript:void(0);">EDIT</a><a class="annotorious-popup-button annotorious-popup-button-delete" title="Delete" href="javascript:void(0);">DELETE</a></div><span class="annotorious-popup-text"></span></div>'
}
function Ze() {
  return'<div class="annotorious-editor" style="position:absolute;z-index:1"><form><textarea class="annotorious-editor-text" placeholder="Add a Comment..." tabindex="1"></textarea><div class="annotorious-editor-button-container"><a class="annotorious-editor-button annotorious-editor-button-cancel" href="javascript:void(0);" tabindex="3">Cancel</a><a class="annotorious-editor-button annotorious-editor-button-save" href="javascript:void(0);" tabindex="2">Save</a></div></form></div>'
}
;function $e(a) {
  function b() {
    var a = d.Fa;
    a.c() && a.La()
  }
  this.element = Pd(Ze);
  this.d = a;
  this.Jd = a.getItem();
  this.Fa = new Me("");
  this.Hd = M(".annotorious-editor-button-cancel", this.element)[0];
  this.Kc = M(".annotorious-editor-button-save", this.element)[0];
  var c;
  c = this.Kc;
  gb ? c = c.parentElement : (c = c.parentNode, c = Ab(c) ? c : m);
  this.Id = c;
  this.Wa = [];
  var d = this;
  O(this.Hd, "click", function(b) {
    b.preventDefault();
    a.stopSelection(d.Qc);
    d.close()
  });
  O(this.Kc, "click", function(b) {
    b.preventDefault();
    b = d.ed();
    a.z(b);
    a.stopSelection();
    d.Qc ? a.fireEvent("onAnnotationUpdated", b) : a.fireEvent("onAnnotationCreated", b);
    d.close()
  });
  V(this.element, n);
  a.element.appendChild(this.element);
  this.Fa.ib(M(".annotorious-editor-text", this.element)[0]);
  var f = this.element;
  c = document.createElement("div");
  S(c, "position", "absolute");
  S(c, "top", "0px");
  S(c, "right", "0px");
  S(c, "width", "5px");
  S(c, "height", "100%");
  S(c, "cursor", "e-resize");
  f.appendChild(c);
  var e = gd(f), e = $c(f).width - e.right - e.left;
  c = new hd(c);
  c.tc = new Lc(e, 0, 800, 0) || new Lc(NaN, NaN, NaN, NaN);
  c.Zc = function(a) {
    S(f, "width", a + "px");
    b && b()
  }
}
r = $e.prototype;
r.hc = function(a) {
  var b = vb("div", "annotorious-editor-field");
  t(a) ? b.innerHTML = a : u(a) ? this.Wa.push({A:b, mc:a}) : Ab(a) && b.appendChild(a);
  a = this.Id;
  a.parentNode && a.parentNode.insertBefore(b, a)
};
r.open = function(a) {
  (this.tb = this.Qc = a) && this.Fa.ma(String(a.text));
  V(this.element, j);
  this.Fa.c().focus();
  B(this.Wa, function(b) {
    var c = b.mc(a);
    t(c) ? b.A.innerHTML = c : Ab(c) && (xb(b.A), b.A.appendChild(c))
  })
};
r.close = function() {
  V(this.element, n);
  this.Fa.ma("")
};
r.setPosition = function(a) {
  Pc(this.element, a.x, a.y)
};
r.ed = function() {
  var a;
  a = this.Fa.c().value;
  var b = new Rd;
  (new Sd).parse(new ie(b, function(a) {
    return a
  }, i), a);
  a = b.toString();
  this.tb ? this.tb.text = a : this.tb = new Gd(this.Jd.src, a, this.d.ra().getShape());
  return this.tb
};
$e.prototype.addField = $e.prototype.hc;
$e.prototype.getAnnotation = $e.prototype.ed;
function af(a, b, c) {
  var d = this;
  c || (c = "Click and Drag to Annotate");
  this.element = Pd(bf, {wc:c});
  this.d = a;
  this.Nc = M(".annotorious-hint-msg", this.element)[0];
  this.Mc = M(".annotorious-hint-icon", this.element)[0];
  this.fc = function() {
    d.show()
  };
  this.ec = function() {
    cf(d)
  };
  this.Ub();
  cf(this);
  b.appendChild(this.element)
}
af.prototype.Ub = function() {
  var a = this;
  this.Pc = O(this.Mc, "mouseover", function() {
    a.show();
    window.clearTimeout(a.ac)
  });
  this.Oc = O(this.Mc, "mouseout", function() {
    cf(a)
  });
  this.d.k("onMouseOverItem", this.fc);
  this.d.k("onMouseOutOfItem", this.ec)
};
af.prototype.ub = function() {
  P(this.Pc);
  P(this.Oc);
  this.d.Sa("onMouseOverItem", this.fc);
  this.d.Sa("onMouseOutOfItem", this.ec)
};
af.prototype.show = function() {
  window.clearTimeout(this.ac);
  U(this.Nc, 0.8);
  var a = this;
  this.ac = window.setTimeout(function() {
    cf(a)
  }, 3E3)
};
function cf(a) {
  window.clearTimeout(a.ac);
  U(a.Nc, 0)
}
af.prototype.R = function() {
  this.ub();
  delete this.Pc;
  delete this.Oc;
  delete this.fc;
  delete this.ec;
  yb(this.element)
};
function df(a) {
  this.element = Pd(Ye);
  this.d = a;
  this.Kd = M(".annotorious-popup-text", this.element)[0];
  this.N = M(".annotorious-popup-buttons", this.element)[0];
  this.Zb = n;
  this.Wa = [];
  var b = M(".annotorious-popup-button-edit", this.N)[0], c = M(".annotorious-popup-button-delete", this.N)[0], d = this;
  O(b, "mouseover", function() {
    ib(b, "annotorious-popup-button-active")
  });
  O(b, "mouseout", function() {
    kb(b, "annotorious-popup-button-active")
  });
  O(b, "click", function() {
    U(d.element, 0);
    S(d.element, "pointer-events", "none");
    a.ad(d.e)
  });
  O(c, "mouseover", function() {
    ib(c, "annotorious-popup-button-active")
  });
  O(c, "mouseout", function() {
    kb(c, "annotorious-popup-button-active")
  });
  O(c, "click", function() {
    a.fireEvent("beforeAnnotationRemoved", d.e) || (U(d.element, 0), S(d.element, "pointer-events", "none"), a.w(d.e), a.fireEvent("onAnnotationRemoved", d.e))
  });
  ef && (O(this.element, "mouseover", function() {
    window.clearTimeout(d.Xb);
    0.9 > (d.N.style[za("opacity")] || "") && U(d.N, 0.9);
    d.clearHideTimer()
  }), O(this.element, "mouseout", function() {
    U(d.N, 0);
    d.startHideTimer()
  }), a.k("onMouseOutOfItem", function() {
    d.startHideTimer()
  }));
  U(this.N, 0);
  U(this.element, 0);
  S(this.element, "pointer-events", "none");
  a.element.appendChild(this.element)
}
r = df.prototype;
r.hc = function(a) {
  var b = vb("div", "annotorious-popup-field");
  t(a) ? b.innerHTML = a : u(a) ? this.Wa.push({A:b, mc:a}) : Ab(a) && b.appendChild(a);
  this.element.appendChild(b)
};
r.startHideTimer = function() {
  this.Zb = n;
  if(!this.bb) {
    var a = this;
    this.bb = window.setTimeout(function() {
      a.d.fireEvent("beforePopupHide", a);
      a.Zb || (U(a.element, 0), S(a.element, "pointer-events", "none"), U(a.N, 0.9), delete a.bb)
    }, 150)
  }
};
r.clearHideTimer = function() {
  this.Zb = j;
  this.bb && (window.clearTimeout(this.bb), delete this.bb)
};
r.show = function(a, b) {
  this.clearHideTimer();
  b && this.setPosition(b);
  a && this.setAnnotation(a);
  this.Xb && window.clearTimeout(this.Xb);
  U(this.N, 0.9);
  if(ef) {
    var c = this;
    this.Xb = window.setTimeout(function() {
      U(c.N, 0)
    }, 1E3)
  }
  U(this.element, 0.9);
  S(this.element, "pointer-events", "auto")
};
r.setPosition = function(a) {
  Pc(this.element, new J(a.x, a.y))
};
r.setAnnotation = function(a) {
  this.e = a;
  this.Kd.innerHTML = a.text ? a.text.replace(/\n/g, "<br/>") : '<span class="annotorious-popup-empty">No comment</span>';
  "editable" in a && a.editable == n ? V(this.N, n) : V(this.N, j);
  B(this.Wa, function(b) {
    var c = b.mc(a);
    t(c) ? b.A.innerHTML = c : Ab(c) && (xb(b.A), b.A.appendChild(c))
  })
};
df.prototype.addField = df.prototype.hc;
function ff(a, b) {
  this.T = a;
  this.d = b;
  this.ya = [];
  this.V = [];
  this.F = this.T.getContext("2d");
  this.na = j;
  this.vb = n;
  var c = this;
  O(this.T, gf, function(a) {
    if(c.na) {
      var b = hf(c, a.offsetX, a.offsetY);
      b ? (c.vb = c.vb && b == c.e, c.e ? c.e != b && (c.na = n, c.d.popup.startHideTimer()) : (c.e = b, jf(c), c.d.fireEvent("onMouseOverAnnotation", {oa:c.e, mouseEvent:a}))) : !c.vb && c.e && (c.na = n, c.d.popup.startHideTimer())
    }else {
      c.Va = a
    }
  });
  b.k("onMouseOutOfItem", function() {
    delete c.e;
    c.na = j
  });
  b.k("beforePopupHide", function() {
    if(!c.na && c.Va) {
      var a = c.e;
      c.e = hf(c, c.Va.offsetX, c.Va.offsetY);
      c.na = j;
      a != c.e ? (jf(c), c.d.fireEvent("onMouseOutOfAnnotation", {oa:a, mouseEvent:c.Va}), c.d.fireEvent("onMouseOverAnnotation", {oa:c.e, mouseEvent:c.Va})) : c.e && c.d.popup.clearHideTimer()
    }else {
      jf(c)
    }
  })
}
r = ff.prototype;
r.z = function(a, b) {
  b && (b == this.e && delete this.e, C(this.ya, b), delete this.V[Fd(b.shapes[0])]);
  this.ya.push(a);
  var c = a.shapes[0];
  if("pixel" != c.units) {
    var d = this, c = Ed(c, function(a) {
      return d.d.lb(a)
    })
  }
  this.V[Fd(a.shapes[0])] = c;
  jf(this)
};
r.w = function(a) {
  a == this.e && delete this.e;
  C(this.ya, a);
  delete this.V[Fd(a.shapes[0])];
  jf(this)
};
r.J = function() {
  return Ga(this.ya)
};
r.r = function(a) {
  (this.e = a) ? this.vb = j : this.d.popup.startHideTimer();
  jf(this);
  this.na = j
};
function hf(a, b, c) {
  a = a.mb(b, c);
  if(0 < a.length) {
    return a[0]
  }
}
r.mb = function(a, b) {
  var c = [], d = this;
  B(this.ya, function(f) {
    var e;
    e = d.V[Fd(f.shapes[0])];
    if("rect" == e.type) {
      e = a < e.geometry.x || b < e.geometry.y || a > e.geometry.x + e.geometry.width || b > e.geometry.y + e.geometry.height ? n : j
    }else {
      if("polygon" == e.type) {
        e = e.geometry.points;
        for(var h = n, k = e.length - 1, l = 0;l < e.length;l++) {
          e[l].y > b != e[k].y > b && a < (e[k].x - e[l].x) * (b - e[l].y) / (e[k].y - e[l].y) + e[l].x && (h = !h), k = l
        }
        e = h
      }else {
        e = n
      }
    }
    e && c.push(f)
  });
  z.sort.call(c, function(a, b) {
    var c = d.V[Fd(a.shapes[0])], k = d.V[Fd(b.shapes[0])];
    return Bd(c) - Bd(k)
  } || Ja);
  return c
};
function kf(a, b, c) {
  var d = Ea(a.d.sa(), function(a) {
    return a.getSupportedShapeType() == b.type
  });
  d ? d.drawShape(a.F, b, c) : console.log("WARNING unsupported shape type: " + b.type)
}
function jf(a) {
  a.F.clearRect(0, 0, a.T.width, a.T.height);
  B(a.ya, function(b) {
    b != a.e && kf(a, a.V[Fd(b.shapes[0])])
  });
  if(a.e) {
    var b = a.V[Fd(a.e.shapes[0])];
    kf(a, b, j);
    b = Cd(b).geometry;
    a.d.popup.show(a.e, new vd(b.x, b.y + b.height + 5))
  }
}
;var lf = "ontouchstart" in window, ef = !lf, mf = lf ? "touchstart" : "mousedown", nf = lf ? "touchenter" : "mouseover", gf = lf ? "touchmove" : "mousemove", of = lf ? "touchend" : "mouseup", pf = lf ? "touchleave" : "mouseout";
function qf(a, b) {
  var c = n;
  return c = !a.offsetX || !a.offsetY && a.n.changedTouches ? {x:a.n.changedTouches[0].clientX - qd(b).left, y:a.n.changedTouches[0].clientY - qd(b).top} : {x:a.offsetX, y:a.offsetY}
}
;function rf() {
}
r = rf.prototype;
r.init = function(a, b) {
  this.Sb = "#000000";
  this.Tb = "#ffffff";
  this.Hc = i;
  this.Jc = "#fff000";
  this.Ic = i;
  this.T = a;
  this.d = b;
  this.F = a.getContext("2d");
  this.F.lineWidth = 1;
  this.$b = n
};
r.Ub = function() {
  var a = this, b = this.T;
  this.cc = O(this.T, gf, function(c) {
    c = qf(c, b);
    if(a.$b) {
      a.H = {x:c.x, y:c.y};
      a.F.clearRect(0, 0, b.width, b.height);
      var c = a.H.x - a.j.x, d = a.H.y - a.j.y;
      a.F.strokeStyle = a.Sb;
      a.F.strokeRect(a.j.x + 0.5, a.j.y + 0.5, c, d);
      a.F.strokeStyle = a.Tb;
      0 < c && 0 < d ? a.F.strokeRect(a.j.x + 1.5, a.j.y + 1.5, c - 2, d - 2) : 0 < c && 0 > d ? a.F.strokeRect(a.j.x + 1.5, a.j.y - 0.5, c - 2, d + 2) : 0 > c && 0 > d ? a.F.strokeRect(a.j.x - 0.5, a.j.y - 0.5, c + 2, d + 2) : a.F.strokeRect(a.j.x - 0.5, a.j.y + 1.5, c + 2, d - 2)
    }
  });
  this.dc = O(b, of, function(c) {
    var d = qf(c, b), f = a.getShape(), c = c.n ? c.n : c;
    a.$b = n;
    f ? (a.ub(), a.d.fireEvent("onSelectionCompleted", {mouseEvent:c, shape:f, viewportBounds:a.getViewportBounds()})) : (a.d.fireEvent("onSelectionCanceled"), c = a.d.mb(d.x, d.y), 0 < c.length && a.d.r(c[0]))
  })
};
r.ub = function() {
  this.cc && (P(this.cc), delete this.cc);
  this.dc && (P(this.dc), delete this.dc)
};
r.getName = ba("rect_drag");
r.getSupportedShapeType = ba("rect");
r.$ = function(a) {
  a.outline && (this.Sb = a.outline);
  a.stroke && (this.Tb = a.stroke);
  a.fill && (this.Hc = a.fill);
  a.hi_stroke && (this.Jc = a.hi_stroke);
  a.hi_fill && (this.Ic = a.hi_fill)
};
r.startSelection = function(a, b) {
  var c = {x:a, y:b};
  this.$b = j;
  this.Ub(c);
  this.j = new vd(a, b);
  this.d.fireEvent("onSelectionStarted", {offsetX:a, offsetY:b});
  S(document.body, "-webkit-user-select", "none")
};
r.stopSelection = function() {
  this.ub();
  this.F.clearRect(0, 0, this.T.width, this.T.height);
  S(document.body, "-webkit-user-select", "auto");
  delete this.H
};
r.getShape = function() {
  if(this.H && 3 < Math.abs(this.H.x - this.j.x) && 3 < Math.abs(this.H.y - this.j.y)) {
    var a = this.getViewportBounds(), b = this.d.Qb({x:a.left, y:a.top}), a = this.d.Qb({x:a.right - 1, y:a.bottom - 1});
    return new Ad("rect", new zd(b.x, b.y, a.x - b.x, a.y - b.y))
  }
};
r.getViewportBounds = function() {
  var a, b;
  this.H.x > this.j.x ? (a = this.H.x, b = this.j.x) : (a = this.j.x, b = this.H.x);
  var c, d;
  this.H.y > this.j.y ? (c = this.j.y, d = this.H.y) : (c = this.H.y, d = this.j.y);
  return{top:c, right:a, bottom:d, left:b}
};
r.drawShape = function(a, b, c) {
  var d;
  "rect" == b.type && (c ? (a.lineWidth = 1.2, c = this.Jc, d = this.Ic) : (a.lineWidth = 1, c = this.Tb, d = this.Hc), b = b.geometry, a.strokeStyle = this.Sb, a.strokeRect(b.x + 0.5, b.y + 0.5, b.width + 1, b.height + 1), a.strokeStyle = c, a.strokeRect(b.x + 1.5, b.y + 1.5, b.width - 1, b.height - 1), d && (a.fillStyle = d, a.fillRect(b.x + 1.5, b.y + 1.5, b.width - 1, b.height - 1)))
};
function sf(a) {
  return'<canvas class="annotorious-item annotorious-opacity-fade" style="position:absolute; top:0px; left:0px; width:' + Ue(a.width) + "px; height:" + Ue(a.height) + 'px; z-index:0" width="' + Ue(a.width) + '" height="' + Ue(a.height) + '"></canvas>'
}
function bf(a) {
  return'<div class="annotorious-hint" style="white-space:nowrap; position:absolute; top:0px; left:0px; pointer-events:none;"><div class="annotorious-hint-msg annotorious-opacity-fade">' + Ue(a.wc) + '</div><div class="annotorious-hint-icon" style="pointer-events:auto"></div></div>'
}
;function tf(a, b) {
  function c(b, c) {
    S(d, "margin-" + b, c + "px");
    S(a, "margin-" + b, 0);
    S(a, "padding-" + b, 0)
  }
  this.ca = a;
  this.Rc = {padding:a.style.padding, margin:a.style.margin};
  this.v = new rd;
  this.Ea = [];
  this.gc = j;
  this.element = vb("div", "annotorious-annotationlayer");
  S(this.element, "position", "relative");
  S(this.element, "display", "inline-block");
  var d = this.element, f = dd(a, "margin"), e = dd(a, "padding");
  (0 != f.top || 0 != e.top) && c("top", f.top + e.top);
  (0 != f.right || 0 != e.right) && c("right", f.right + e.right);
  (0 != f.bottom || 0 != e.bottom) && c("bottom", f.bottom + e.bottom);
  (0 != f.left || 0 != e.left) && c("left", f.left + e.left);
  f = $c(a);
  Xc(this.element, f.width, f.height);
  zb(this.element, a);
  this.element.appendChild(a);
  this.ea = Pd(sf, {width:f.width, height:f.height});
  ef && ib(this.ea, "annotorious-item-unfocus");
  this.element.appendChild(this.ea);
  this.g = Pd(sf, {width:f.width, height:f.height});
  ef && V(this.g, n);
  this.element.appendChild(this.g);
  this.popup = b ? b : new df(this);
  f = new rf;
  f.init(this.g, this);
  this.Ea.push(f);
  this.Ba = f;
  this.editor = new $e(this);
  this.l = new ff(this.ea, this);
  this.Ya = new af(this, this.element);
  var h = this;
  ef && (O(this.element, nf, function(a) {
    a = a.relatedTarget;
    if(!a || !Bb(h.element, a)) {
      h.v.fireEvent("onMouseOverItem"), mb(h.ea, "annotorious-item-unfocus", "annotorious-item-focus")
    }
  }), O(this.element, pf, function(a) {
    a = a.relatedTarget;
    if(!a || !Bb(h.element, a)) {
      h.v.fireEvent("onMouseOutOfItem"), mb(h.ea, "annotorious-item-focus", "annotorious-item-unfocus")
    }
  }));
  var k = lf ? this.g : this.ea;
  O(k, mf, function(a) {
    a = qf(a, k);
    h.l.r(i);
    h.gc ? (V(h.g, j), h.Ba.startSelection(a.x, a.y)) : (a = h.l.mb(a.x, a.y), 0 < a.length && h.l.r(a[0]))
  });
  this.v.k("onSelectionCompleted", function(a) {
    a = a.viewportBounds;
    h.editor.setPosition(new vd(a.left + h.ca.offsetLeft, a.bottom + 4 + h.ca.offsetTop));
    h.editor.open()
  });
  this.v.k("onSelectionCanceled", function() {
    ef && V(h.g, n);
    h.Ba.stopSelection()
  })
}
r = tf.prototype;
r.fa = aa();
r.z = function(a, b) {
  this.l.z(a, b)
};
r.k = function(a, b) {
  this.v.k(a, b)
};
r.Tc = function(a) {
  a.init(this, this.g);
  this.Ea.push(a)
};
r.R = function() {
  var a = this.ca;
  a.style.margin = this.Rc.margin;
  a.style.padding = this.Rc.padding;
  zb(a, this.element)
};
r.ad = function(a) {
  this.l.w(a);
  var b = Ea(this.Ea, function(b) {
    return b.getSupportedShapeType() == a.shapes[0].type
  });
  if(b) {
    V(this.g, j);
    this.l.r(i);
    var c = this.g.getContext("2d"), d = a.shapes[0], f = this, d = "pixel" == d.units ? d : Ed(d, function(a) {
      return f.lb(a)
    });
    b.drawShape(c, d)
  }
  b = Cd(a.shapes[0]).geometry;
  b = "pixel" == a.shapes[0].units ? new vd(b.x, b.y + b.height) : this.lb(new vd(b.x, b.y + b.height));
  this.editor.setPosition(new vd(b.x + this.ca.offsetLeft, b.y + 4 + this.ca.offsetTop));
  this.editor.open(a)
};
r.fireEvent = function(a, b) {
  return this.v.fireEvent(a, b)
};
r.lb = function(a) {
  var b = Yc(this.ca);
  return{x:a.x * b.width, y:a.y * b.height}
};
r.ra = p("Ba");
r.J = function() {
  return this.l.J()
};
r.mb = function(a, b) {
  return Ga(this.l.mb(a, b))
};
r.sa = p("Ea");
r.getItem = function() {
  return{src:uf(this.ca)}
};
function uf(a) {
  var b = a.getAttribute("data-original");
  return b ? b : a.src
}
r.Y = function() {
  V(this.ea, n)
};
r.O = function() {
  this.gc = n;
  this.Ya && (this.Ya.R(), delete this.Ya)
};
r.r = function(a) {
  this.l.r(a)
};
r.w = function(a) {
  this.l.w(a)
};
r.Sa = function(a, b) {
  this.v.Sa(a, b)
};
r.ce = function(a) {
  (this.Ba = Ea(this.Ea, function(b) {
    return b.getName() == a
  })) || console.log('WARNING: selector "' + a + '" not available')
};
r.$ = function(a) {
  B(this.Ea, function(b) {
    b.$(a)
  });
  jf(this.l)
};
r.xa = function() {
  V(this.ea, j)
};
r.aa = function() {
  this.gc = j;
  this.Ya || (this.Ya = new af(this, this.element))
};
r.stopSelection = function(a) {
  ef && V(this.g, n);
  this.Ba.stopSelection();
  a && this.l.z(a)
};
r.Qb = function(a) {
  var b = Yc(this.ca);
  return{x:a.x / b.width, y:a.y / b.height}
};
tf.prototype.addSelector = tf.prototype.Tc;
tf.prototype.fireEvent = tf.prototype.fireEvent;
tf.prototype.setCurrentSelector = tf.prototype.ce;
tf.prototype.toItemCoordinates = tf.prototype.Qb;
function vf() {
  Id(this, function() {
    return M("img.annotatable", document)
  })
}
v(vf, Hd);
vf.prototype.nc = function(a) {
  return uf(a)
};
vf.prototype.zd = function(a) {
  return new tf(a)
};
vf.prototype.Ec = function(a) {
  return Ab(a) ? "IMG" == a.tagName : n
};
function wf(a) {
  return'<div class="annotorious-opacity-fade" style="white-space:nowrap; position:absolute; pointer-events:none; top:80px; width:100%; text-align:center;"><div class="annotorious-ol-hint" style="width: 400px; margin:0px auto;">' + Ue(a.wc) + "</dvi></div>"
}
;function xf(a, b) {
  this.da = a;
  this.Za = $c(b.element);
  this.Q = b.popup;
  S(this.Q.element, "z-index", 99E3);
  this.$a = [];
  this.Vb = new OpenLayers.Layer.Boxes("Annotorious");
  this.da.addLayer(this.Vb);
  var c = this;
  this.da.events.register("move", this.da, function() {
    c.Ca && yf(c)
  });
  b.k("beforePopupHide", function() {
    c.bc == c.Ca ? c.Q.clearHideTimer() : zf(c, c.bc, c.Ca)
  })
}
function yf(a) {
  var b = a.Ca.Ib.div, c = $c(b), d = Uc(b, a.da.div), b = d.y, d = d.x, f = c.width, e = c.height, c = $c(a.Q.element), b = {y:b + e + 5};
  d + c.width > a.Za.width ? (mb(a.Q.element, "top-left", "top-right"), b.x = d + f - c.width) : (mb(a.Q.element, "top-right", "top-left"), b.x = d);
  0 > b.x && (b.x = 0);
  b.x + c.width > a.Za.width && (b.x = a.Za.width - c.width);
  b.y + c.height > a.Za.height && (b.y = a.Za.height - c.height);
  a.Q.setPosition(b)
}
function zf(a, b, c) {
  b ? (Uc(b.Ib.div, a.da.div), za("height"), S(b.rd, "border-color", "#fff000"), a.Ca = b, a.Q.setAnnotation(b.oa), yf(a), a.Q.show()) : delete a.Ca;
  c && S(c.rd, "border-color", "#fff")
}
xf.prototype.z = function(a) {
  var b = a.shapes[0].geometry, b = new OpenLayers.Marker.Box(new OpenLayers.Bounds(b.x, b.y, b.x + b.width, b.y + b.height));
  ib(b.div, "annotorious-ol-boxmarker-outer");
  S(b.div, "border", m);
  var c = vb("div", "annotorious-ol-boxmarker-inner");
  Xc(c, "100%", "100%");
  b.div.appendChild(c);
  var d = {oa:a, Ib:b, rd:c}, f = this;
  O(c, "mouseover", function() {
    f.Ca || zf(f, d);
    f.bc = d
  });
  O(c, "mouseout", function() {
    delete f.bc;
    f.Q.startHideTimer()
  });
  this.$a.push(d);
  z.sort.call(this.$a, function(a, b) {
    return Bd(b.oa.shapes[0]) - Bd(a.oa.shapes[0])
  } || Ja);
  var e = 1E4;
  B(this.$a, function(a) {
    S(a.Ib.div, "z-index", e);
    e++
  });
  this.Vb.addMarker(b)
};
xf.prototype.w = function(a) {
  var b = Ea(this.$a, function(b) {
    return b.oa == a
  });
  b && (C(this.$a, b), this.Vb.removeMarker(b.Ib))
};
xf.prototype.J = aa();
xf.prototype.r = function(a) {
  a || this.Q.startHideTimer()
};
function Af(a) {
  this.da = a;
  this.U = a.div;
  var b = parseInt(T(this.U, "width"), 10), c = parseInt(T(this.U, "height"), 10);
  this.v = new rd;
  this.element = vb("div", "annotorious-annotationlayer");
  S(this.element, "position", "relative");
  Xc(this.element, b, c);
  zb(this.element, this.U);
  this.element.appendChild(this.U);
  this.cb = Pd(wf, {wc:"Click and Drag"});
  S(this.cb, "z-index", 9998);
  U(this.cb, 0);
  this.element.appendChild(this.cb);
  this.popup = new df(this);
  this.l = new xf(a, this);
  this.g = Pd(sf, {width:b, height:c});
  V(this.g, n);
  S(this.g, "z-index", 9999);
  this.element.appendChild(this.g);
  this.eb = new rf;
  this.eb.init(this.g, this);
  this.wb = i;
  this.editor = new $e(this);
  S(this.editor.element, "z-index", 1E4);
  var d = this;
  O(this.element, "mouseover", function(a) {
    a = a.relatedTarget;
    (!a || !Bb(d.element, a)) && d.v.fireEvent("onMouseOverItem")
  });
  O(this.element, "mouseout", function(a) {
    a = a.relatedTarget;
    (!a || !Bb(d.element, a)) && d.v.fireEvent("onMouseOutOfItem")
  });
  O(this.g, "mousedown", function(a) {
    var b = Vc(d.U);
    d.eb.startSelection(a.clientX - b.x, a.clientY - b.y)
  });
  this.v.k("onSelectionCompleted", function(a) {
    S(d.g, "pointer-events", "none");
    a = a.viewportBounds;
    d.editor.setPosition(new vd(a.left + d.U.offsetLeft, a.bottom + 4 + d.U.offsetTop));
    d.editor.open()
  });
  this.v.k("onSelectionCanceled", function() {
    d.stopSelection()
  })
}
r = Af.prototype;
r.aa = aa();
r.O = aa();
r.fa = function(a) {
  S(this.g, "pointer-events", "auto");
  var b = this;
  V(this.g, j);
  U(this.cb, 0.8);
  window.setTimeout(function() {
    U(b.cb, 0)
  }, 2E3);
  a && (this.wb = a)
};
r.ad = function(a) {
  this.l.w(a);
  var b = this.eb, c = this;
  if(b) {
    V(this.g, j);
    this.l.r(i);
    var d = this.g.getContext("2d"), f = Ed(a.shapes[0], function(a) {
      return c.lb(a)
    });
    b.drawShape(d, f);
    b = Cd(f).geometry;
    this.editor.setPosition(new vd(b.x + this.U.offsetLeft, b.y + b.height + 4 + this.U.offsetTop));
    this.editor.open(a)
  }
};
r.z = function(a) {
  this.l.z(a)
};
r.k = function(a, b) {
  this.v.k(a, b)
};
r.Tc = aa();
r.fireEvent = function(a, b) {
  return this.v.fireEvent(a, b)
};
r.lb = function(a) {
  a = this.da.getViewPortPxFromLonLat(new OpenLayers.LonLat(a.x, a.y));
  return{x:a.x, y:a.y}
};
r.ra = p("eb");
r.J = aa();
r.sa = aa();
r.getItem = function() {
  return{src:"map://openlayers/something"}
};
r.r = function(a) {
  this.l.r(a)
};
r.w = function(a) {
  this.l.w(a)
};
r.Sa = function(a, b) {
  this.v.Sa(a, b)
};
r.rb = aa();
r.stopSelection = function(a) {
  V(this.g, n);
  this.wb && (this.wb(), delete this.wb);
  this.eb.stopSelection();
  a && this.l.z(a)
};
r.Qb = function(a) {
  a = this.da.getLonLatFromPixel(new OpenLayers.Pixel(a.x, a.y));
  return{x:a.lon, y:a.lat}
};
function Bf() {
  Id(this)
}
v(Bf, Hd);
Bf.prototype.nc = ba("map://openlayers/something");
Bf.prototype.zd = function(a) {
  return new Af(a)
};
Bf.prototype.Ec = function(a) {
  return a instanceof OpenLayers.Map
};
function Z() {
  function a() {
    B(b.o, function(a) {
      a.init()
    });
    B(b.ab, function(a) {
      a.initPlugin && a.initPlugin(b);
      B(b.o, function(b) {
        b.xb(a)
      })
    })
  }
  this.o = [new vf];
  window.OpenLayers && this.o.push(new Bf);
  this.ab = [];
  var b = this;
  window.addEventListener ? window.addEventListener("load", a, n) : window.attachEvent && window.attachEvent("onload", a)
}
function $(a, b) {
  return Ea(a.o, function(a) {
    return Od(a, b)
  })
}
r = Z.prototype;
r.fa = function(a, b) {
  var c = i, d = i;
  t(a) ? (c = a, d = b) : u(a) && (d = a);
  if(c) {
    var f = $(this, c);
    f && f.fa(c, d)
  }else {
    B(this.o, function(a) {
      a.fa(d)
    })
  }
};
r.z = function(a, b) {
  var c;
  c = a.src;
  if(!(0 < c.indexOf("://"))) {
    var d = document.createElement("a");
    d.href = c;
    c = d.protocol + "//" + d.host + d.pathname
  }
  a.src = c;
  (c = $(this, a.src)) && c.z(a, b)
};
r.k = function(a, b) {
  B(this.o, function(c) {
    c.k(a, b)
  })
};
r.xb = function(a, b) {
  try {
    var c = new window.annotorious.plugin[a](b);
    "complete" == document.readyState ? (c.initPlugin && c.initPlugin(this), B(this.o, function(a) {
      a.xb(c)
    })) : this.ab.push(c)
  }catch(d) {
    console.log("Could not load plugin: " + a)
  }
};
r.R = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.R(a)
  }else {
    B(this.o, function(a) {
      a.R()
    })
  }
};
r.ra = function(a) {
  var b = $(this, a);
  if(b) {
    return b.ra(a)
  }
};
r.J = function(a) {
  if(a) {
    var b = $(this, a);
    return b ? b.J(a) : []
  }
  var c = [];
  B(this.o, function(a) {
    Ha(c, a.J())
  });
  return c
};
r.sa = function(a) {
  var b = $(this, a);
  return b ? b.sa(a) : []
};
r.Y = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.Y(a)
  }else {
    B(this.o, function(a) {
      a.Y()
    })
  }
};
r.O = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.O(a)
  }else {
    B(this.o, function(a) {
      a.O()
    })
  }
};
r.r = function(a) {
  if(a) {
    var b = $(this, a.src);
    b && b.r(a)
  }else {
    B(this.o, function(a) {
      a.r()
    })
  }
};
r.uc = function(a) {
  var b = Ea(this.o, function(b) {
    return b.Ec(a)
  });
  b ? b.uc(a) : g("Error: Annotorious does not support this media type in the current version or build configuration.")
};
r.Nb = function(a) {
  var b = this;
  B(this.J(a), function(a) {
    b.w(a)
  })
};
r.w = function(a) {
  var b = $(this, a.src);
  b && b.w(a)
};
r.reset = function() {
  B(this.o, function(a) {
    a.R();
    a.init()
  })
};
r.rb = function(a, b) {
  var c = $(this, a);
  c && c.rb(a, b)
};
r.$ = function(a) {
  B(this.o, function(b) {
    b.$(a)
  })
};
r.de = function(a) {
  a ? this.aa(i) : this.O(i)
};
r.xa = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.xa(a)
  }else {
    B(this.o, function(a) {
      a.xa()
    })
  }
};
r.aa = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.aa(a)
  }else {
    B(this.o, function(a) {
      a.aa()
    })
  }
};
window.anno = new Z;
Z.prototype.activateSelector = Z.prototype.fa;
Z.prototype.addAnnotation = Z.prototype.z;
Z.prototype.addHandler = Z.prototype.k;
Z.prototype.addPlugin = Z.prototype.xb;
Z.prototype.destroy = Z.prototype.R;
Z.prototype.getActiveSelector = Z.prototype.ra;
Z.prototype.getAnnotations = Z.prototype.J;
Z.prototype.getAvailableSelectors = Z.prototype.sa;
Z.prototype.hideAnnotations = Z.prototype.Y;
Z.prototype.hideSelectionWidget = Z.prototype.O;
Z.prototype.highlightAnnotation = Z.prototype.r;
Z.prototype.makeAnnotatable = Z.prototype.uc;
Z.prototype.removeAll = Z.prototype.Nb;
Z.prototype.removeAnnotation = Z.prototype.w;
Z.prototype.reset = Z.prototype.reset;
Z.prototype.setActiveSelector = Z.prototype.rb;
Z.prototype.setProperties = Z.prototype.$;
Z.prototype.showAnnotations = Z.prototype.xa;
Z.prototype.showSelectionWidget = Z.prototype.aa;
window.annotorious || (window.annotorious = {});
window.annotorious.plugin || (window.annotorious.plugin = {});
Z.prototype.setSelectionEnabled = Z.prototype.de;

