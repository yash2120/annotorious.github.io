function g(a) {
  throw a;
}
var i = void 0, j = !0, m = null, n = !1;
function aa() {
  return function() {
  }
}
function q(a) {
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
  a.ob = function() {
    return a.ld ? a.ld : a.ld = new a
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
  for(var d = a.length, f = [], e = 0, h = t(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in h) {
      var k = h[l];
      b.call(c, k, l, a) && (f[e++] = k)
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
        for(var e = a.length, h = d.length, l = 0;l < h;l++) {
          a[e + l] = d[l]
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
      var h = c[e] || "", l = d[e] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = k.exec(h) || ["", "", ""], y = p.exec(l) || ["", "", ""];
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
var tb = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function ub(a, b, c) {
  var d = arguments, f = document, e = d[0], h = d[1];
  if(!fb && h && (h.name || h.type)) {
    e = ["<", e];
    h.name && e.push(' name="', ta(h.name), '"');
    if(h.type) {
      e.push(' type="', ta(h.type), '"');
      var l = {};
      qb(l, h);
      delete l.type;
      h = l
    }
    e.push(">");
    e = e.join("")
  }
  e = f.createElement(e);
  if(h) {
    if(t(h)) {
      e.className = h
    }else {
      if(ha(h)) {
        ib.apply(m, [e].concat(h))
      }else {
        var k = e;
        ob(h, function(a, b) {
          "style" == b ? k.style.cssText = a : "class" == b ? k.className = a : "for" == b ? k.htmlFor = a : b in tb ? k.setAttribute(tb[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? k.setAttribute(b, a) : k[b] = a
        })
      }
    }
  }
  2 < d.length && vb(f, e, d, 2);
  return e
}
function vb(a, b, c, d) {
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
function wb(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function xb(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function yb(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
}
function zb(a) {
  return ja(a) && 1 == a.nodeType
}
function Ab(a, b) {
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
function Bb(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : n
}
function sb(a) {
  this.I = a || s.document || document
}
r = sb.prototype;
r.Yc = rb;
r.c = function(a) {
  return t(a) ? this.I.getElementById(a) : a
};
r.createElement = function(a) {
  return this.I.createElement(a)
};
r.createTextNode = function(a) {
  return this.I.createTextNode(a)
};
function Cb(a) {
  var b = a.I, a = !H ? b.documentElement : b.body, b = b.parentWindow || b.defaultView;
  return new J(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  vb(K(a), a, arguments, 1)
};
r.contains = Ab;
var Db;
Db = ba(j);
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
function Eb(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var Fb = H && "BackCompat" == document.compatMode, Gb = document.firstChild.children ? "children" : "childNodes", Hb = n;
function Ib(a) {
  function b() {
    0 <= p && (x.id = c(p, A).replace(/\\/g, ""), p = -1);
    if(0 <= w) {
      var a = w == A ? m : c(w, A);
      0 > ">~+".indexOf(a) ? x.D = a : x.Lb = a;
      w = -1
    }
    0 <= k && (x.W.push(c(k + 1, A).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return sa(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, e = -1, h = -1, l = -1, k = -1, p = -1, w = -1, y = "", E = "", Q, A = 0, Fe = a.length, x = m, L = m;y = E, E = a.charAt(A), A < Fe;A++) {
    if("\\" != y) {
      if(x || (Q = A, x = {Oa:m, ua:[], xb:[], W:[], D:m, Lb:m, id:m, kc:function() {
        return Hb ? this.Td : this.D
      }}, w = A), 0 <= f) {
        if("]" == E) {
          L.gc ? L.rc = c(h || f + 1, A) : L.gc = c(f + 1, A);
          if((f = L.rc) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            L.rc = f.slice(1, -1)
          }
          x.xb.push(L);
          L = m;
          f = h = -1
        }else {
          "=" == E && (h = 0 <= "|~^$*".indexOf(y) ? y : "", L.type = h + E, L.gc = c(f + 1, A - h.length), h = A + 1)
        }
      }else {
        0 <= e ? ")" == E && (0 <= l && (L.value = c(e + 1, A)), l = e = -1) : "#" == E ? (b(), p = A + 1) : "." == E ? (b(), k = A) : ":" == E ? (b(), l = A) : "[" == E ? (b(), f = A, L = {}) : "(" == E ? (0 <= l && (L = {name:c(l + 1, A), value:m}, x.ua.push(L)), e = A) : " " == E && y != E && (b(), 0 <= l && x.ua.push({name:c(l + 1, A)}), x.od = x.ua.length || x.xb.length || x.W.length, x.ke = x.Oa = c(Q, A), x.Td = x.D = x.Lb ? m : x.D || "*", x.D && (x.D = x.D.toUpperCase()), d.length && d[d.length - 
        1].Lb && (x.jd = d.pop(), x.Oa = x.jd.Oa + " " + x.Oa), d.push(x), x = m)
      }
    }
  }
  return d
}
function Jb(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function Kb(a) {
  return 1 == a.nodeType
}
function Lb(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Hb ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var Mb = {"*=":function(a, b) {
  return function(c) {
    return 0 <= Lb(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == Lb(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + Lb(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + Lb(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + Lb(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return Lb(c, a) == b
  }
}}, Nb = "undefined" == typeof document.firstChild.nextElementSibling, Ob = !Nb ? "nextElementSibling" : "nextSibling", Pb = !Nb ? "previousElementSibling" : "previousSibling", Qb = Nb ? Kb : Db;
function Rb(a) {
  for(;a = a[Pb];) {
    if(Qb(a)) {
      return n
    }
  }
  return j
}
function Sb(a) {
  for(;a = a[Ob];) {
    if(Qb(a)) {
      return n
    }
  }
  return j
}
function Tb(a) {
  var b = a.parentNode, c = 0, d = b[Gb], f = a._i || -1, e = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(e == d && 0 <= f && 0 <= e) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[Ob]) {
    Qb(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function Ub(a) {
  return!(Tb(a) % 2)
}
function Vb(a) {
  return Tb(a) % 2
}
var Xb = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return Rb
}, "last-child":function() {
  return Sb
}, "only-child":function() {
  return function(a) {
    return!Rb(a) || !Sb(a) ? n : j
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
  var c = Ib(b)[0], d = {A:1};
  "*" != c.D && (d.D = 1);
  c.W.length || (d.W = 1);
  var f = Wb(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return Vb
  }
  if("even" == b) {
    return Ub
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, e = 0, h = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (e = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (h = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = Tb(a);
        return a >= e && (0 > h || a <= h) && a % d == f
      }
    }
    b = f
  }
  var l = parseInt(b, 10);
  return function(a) {
    return Tb(a) == l
  }
}}, Yb = F ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return Hb ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Wb(a, b) {
  if(!a) {
    return Db
  }
  var b = b || {}, c = m;
  b.A || (c = Jb(c, Kb));
  b.D || "*" != a.D && (c = Jb(c, function(b) {
    return b && b.tagName == a.kc()
  }));
  b.W || B(a.W, function(a, b) {
    var e = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = Jb(c, function(a) {
      return e.test(a.className)
    });
    c.count = b
  });
  b.ua || B(a.ua, function(a) {
    var b = a.name;
    Xb[b] && (c = Jb(c, Xb[b](b, a.value)))
  });
  b.xb || B(a.xb, function(a) {
    var b, e = a.gc;
    a.type && Mb[a.type] ? b = Mb[a.type](e, a.rc) : e.length && (b = Yb(e));
    b && (c = Jb(c, b))
  });
  b.id || a.id && (c = Jb(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = Db);
  return c
}
var Zb = {};
function $b(a) {
  var b = Zb[a.Oa];
  if(b) {
    return b
  }
  var c = a.jd, c = c ? c.Lb : "", d = Wb(a, {A:1}), f = "*" == a.D, e = document.getElementsByClassName;
  if(c) {
    if(e = {A:1}, f && (e.D = 1), d = Wb(a, e), "+" == c) {
      var h = d, b = function(a, b, c) {
        for(;a = a[Ob];) {
          if(!Nb || Kb(a)) {
            (!c || ac(a, c)) && h(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var l = d, b = function(a, b, c) {
          for(a = a[Ob];a;) {
            if(Qb(a)) {
              if(c && !ac(a, c)) {
                break
              }
              l(a) && b.push(a)
            }
            a = a[Ob]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || Db, b = function(a, b, c) {
            for(var d = 0, f = a[Gb];a = f[d++];) {
              Qb(a) && ((!c || ac(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.od && f ? Db : Wb(a, {A:1, id:1}), b = function(b, c) {
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
          return Eb(f, c)
        }
      }
    }else {
      if(e && /\{\s*\[native code\]\s*\}/.test(String(e)) && a.W.length && !Fb) {
        var d = Wb(a, {A:1, W:1, id:1}), p = a.W.join(" "), b = function(a, b) {
          for(var c = Eb(0, b), f, e = 0, h = a.getElementsByClassName(p);f = h[e++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.od ? b = function(b, c) {
          for(var d = Eb(0, c), f, e = 0, h = b.getElementsByTagName(a.kc());f = h[e++];) {
            d.push(f)
          }
          return d
        } : (d = Wb(a, {A:1, D:1, id:1}), b = function(b, c) {
          for(var f = Eb(0, c), e, h = 0, k = b.getElementsByTagName(a.kc());e = k[h++];) {
            d(e, b) && f.push(e)
          }
          return f
        })
      }
    }
  }
  return Zb[a.Oa] = b
}
var bc = {}, cc = {};
function dc(a) {
  var b = Ib(sa(a));
  if(1 == b.length) {
    var c = $b(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.Kb = j
      }
      return a
    }
  }
  return function(a) {
    for(var a = Eb(a), c, e, h = b.length, l, k, p = 0;p < h;p++) {
      k = [];
      c = b[p];
      e = a.length - 1;
      0 < e && (l = {}, k.Kb = j);
      e = $b(c);
      for(var w = 0;c = a[w];w++) {
        e(c, k, l)
      }
      if(!k.length) {
        break
      }
      a = k
    }
    return k
  }
}
var ec = !!document.querySelectorAll && (!H || I("526"));
function fc(a, b) {
  if(ec) {
    var c = cc[a];
    if(c && !b) {
      return c
    }
  }
  if(c = bc[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = j);
  if(ec && !b && -1 == ">~+".indexOf(c) && (!F || -1 == a.indexOf(":")) && !(Fb && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return cc[a] = function(b) {
      try {
        9 == b.nodeType || d || g("");
        var c = b.querySelectorAll(f);
        F ? c.Ed = j : c.Kb = j;
        return c
      }catch(e) {
        return fc(a, j)(b)
      }
    }
  }
  var e = a.split(/\s*,\s*/);
  return bc[a] = 2 > e.length ? dc(a) : function(a) {
    for(var b = 0, c = [], d;d = e[b++];) {
      c = c.concat(dc(d)(a))
    }
    return c
  }
}
var gc = 0, hc = F ? function(a) {
  return Hb ? a.getAttribute("_uid") || a.setAttribute("_uid", ++gc) || gc : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++gc)
};
function ac(a, b) {
  if(!b) {
    return 1
  }
  var c = hc(a);
  return!b[c] ? b[c] = 1 : 0
}
function ic(a) {
  if(a && a.Kb) {
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
  gc++;
  if(F && Hb) {
    var c = gc + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(F && a.Ed) {
      try {
        for(d = 1;f = a[d];d++) {
          Kb(f) && b.push(f)
        }
      }catch(e) {
      }
    }else {
      a[0] && (a[0]._zipIdx = gc);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != gc && b.push(f), f._zipIdx = gc
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
  Hb = b.contentType && "application/xml" == b.contentType || D && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (F ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = fc(a)(b)) && c.Kb ? c : ic(c)
}
M.ua = Xb;
ca("goog.dom.query", M);
ca("goog.dom.query.pseudos", M.ua);
var jc = !F || db(9), kc = !F || db(9), lc = F && !I("9");
!H || I("528");
G && I("1.9b") || F && I("8") || D && I("9.5") || H && I("528");
G && !I("8") || F && I("9");
function mc() {
  0 != nc && (this.ee = Error().stack, ka(this))
}
var nc = 0;
mc.prototype.Tc = n;
function oc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
r = oc.prototype;
r.ta = n;
r.defaultPrevented = n;
r.Nb = j;
r.stopPropagation = function() {
  this.ta = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.Nb = n
};
function pc(a) {
  a.preventDefault()
}
;function qc(a) {
  qc[" "](a);
  return a
}
qc[" "] = ea;
function rc(a, b) {
  a && this.init(a, b)
}
v(rc, oc);
var sc = [1, 4, 2];
r = rc.prototype;
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
r.vc = n;
r.n = m;
r.init = function(a, b) {
  var c = this.type = a.type;
  oc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(G) {
      var f;
      a: {
        try {
          qc(d.nodeName);
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
  this.vc = Oa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.n = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ta
};
function tc(a) {
  return(jc ? 0 == a.n.button : "click" == a.type ? j : !!(a.n.button & sc[0])) && !(H && Oa && a.ctrlKey)
}
r.stopPropagation = function() {
  rc.G.stopPropagation.call(this);
  this.n.stopPropagation ? this.n.stopPropagation() : this.n.cancelBubble = j
};
r.preventDefault = function() {
  rc.G.preventDefault.call(this);
  var a = this.n;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, lc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.Fd = q("n");
function uc() {
}
var vc = 0;
r = uc.prototype;
r.key = 0;
r.va = n;
r.Oc = n;
r.init = function(a, b, c, d, f, e) {
  u(a) ? this.nd = j : a && a.handleEvent && u(a.handleEvent) ? this.nd = n : g(Error("Invalid listener argument"));
  this.Na = a;
  this.sd = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ja = e;
  this.Oc = n;
  this.key = ++vc;
  this.va = n
};
r.handleEvent = function(a) {
  return this.nd ? this.Na.call(this.Ja || this.src, a) : this.Na.handleEvent.call(this.Na, a)
};
var wc = {}, N = {}, xc = {}, yc = {};
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
    var h = h[d], l = ka(a), k;
    h.K++;
    if(h[l]) {
      k = h[l];
      for(e = 0;e < k.length;e++) {
        if(h = k[e], h.Na == c && h.Ja == f) {
          if(h.va) {
            break
          }
          return k[e].key
        }
      }
    }else {
      k = h[l] = [], h.m++
    }
    var p = zc, w = kc ? function(a) {
      return p.call(w.src, w.key, a)
    } : function(a) {
      a = p.call(w.src, w.key, a);
      if(!a) {
        return a
      }
    }, e = w;
    e.src = a;
    h = new uc;
    h.init(c, e, a, b, d, f);
    c = h.key;
    e.key = c;
    k.push(h);
    wc[c] = h;
    xc[l] || (xc[l] = []);
    xc[l].push(h);
    a.addEventListener ? (a == s || !a.Qc) && a.addEventListener(b, e, d) : a.attachEvent(b in yc ? yc[b] : yc[b] = "on" + b, e);
    return c
  }
  g(Error("Invalid event type"))
}
function Ac(a, b, c, d, f) {
  if(ha(b)) {
    for(var e = 0;e < b.length;e++) {
      Ac(a, b[e], c, d, f)
    }
  }else {
    if(d = !!d, a = Bc(a, b, d)) {
      for(e = 0;e < a.length;e++) {
        if(a[e].Na == c && a[e].capture == d && a[e].Ja == f) {
          P(a[e].key);
          break
        }
      }
    }
  }
}
function P(a) {
  if(!wc[a]) {
    return n
  }
  var b = wc[a];
  if(b.va) {
    return n
  }
  var c = b.src, d = b.type, f = b.sd, e = b.capture;
  c.removeEventListener ? (c == s || !c.Qc) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(d in yc ? yc[d] : yc[d] = "on" + d, f);
  c = ka(c);
  xc[c] && (f = xc[c], C(f, b), 0 == f.length && delete xc[c]);
  b.va = j;
  if(b = N[d][e][c]) {
    b.qd = j, Cc(d, e, c, b)
  }
  delete wc[a];
  return j
}
function Cc(a, b, c, d) {
  if(!d.Gb && d.qd) {
    for(var f = 0, e = 0;f < d.length;f++) {
      d[f].va ? d[f].sd.src = m : (f != e && (d[e] = d[f]), e++)
    }
    d.length = e;
    d.qd = n;
    0 == e && (delete N[a][b][c], N[a][b].m--, 0 == N[a][b].m && (delete N[a][b], N[a].m--), 0 == N[a].m && delete N[a])
  }
}
function Bc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : m
}
function Dc(a, b, c, d, f) {
  var e = 1, b = ka(b);
  if(a[b]) {
    a.K--;
    a = a[b];
    a.Gb ? a.Gb++ : a.Gb = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var k = a[l];
        k && !k.va && (e &= Ec(k, f) !== n)
      }
    }finally {
      a.Gb--, Cc(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Ec(a, b) {
  a.Oc && P(a.key);
  return a.handleEvent(b)
}
function zc(a, b) {
  if(!wc[a]) {
    return j
  }
  var c = wc[a], d = c.type, f = N;
  if(!(d in f)) {
    return j
  }
  var f = f[d], e, h;
  if(!kc) {
    var l;
    if(!(l = b)) {
      a: {
        l = ["window", "event"];
        for(var k = s;e = l.shift();) {
          if(k[e] != m) {
            k = k[e]
          }else {
            l = m;
            break a
          }
        }
        l = k
      }
    }
    e = l;
    l = j in f;
    k = n in f;
    if(l) {
      if(0 > e.keyCode || e.returnValue != i) {
        return j
      }
      a: {
        var p = n;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(w) {
            p = j
          }
        }
        if(p || e.returnValue == i) {
          e.returnValue = j
        }
      }
    }
    p = new rc;
    p.init(e, this);
    e = j;
    try {
      if(l) {
        for(var y = [], E = p.currentTarget;E;E = E.parentNode) {
          y.push(E)
        }
        h = f[j];
        h.K = h.m;
        for(var Q = y.length - 1;!p.ta && 0 <= Q && h.K;Q--) {
          p.currentTarget = y[Q], e &= Dc(h, y[Q], d, j, p)
        }
        if(k) {
          h = f[n];
          h.K = h.m;
          for(Q = 0;!p.ta && Q < y.length && h.K;Q++) {
            p.currentTarget = y[Q], e &= Dc(h, y[Q], d, n, p)
          }
        }
      }else {
        e = Ec(c, p)
      }
    }finally {
      y && (y.length = 0)
    }
    return e
  }
  d = new rc(b, this);
  return e = Ec(c, d)
}
;function Fc(a) {
  mc.call(this);
  this.fd = a;
  this.h = []
}
v(Fc, mc);
var Gc = [];
function R(a, b, c, d, f) {
  ha(c) || (Gc[0] = c, c = Gc);
  for(var e = 0;e < c.length;e++) {
    var h = O(b, c[e], d || a, f || n, a.fd || a);
    a.h.push(h)
  }
  return a
}
function Hc(a, b, c, d, f, e) {
  if(ha(c)) {
    for(var h = 0;h < c.length;h++) {
      Hc(a, b, c[h], d, f, e)
    }
  }else {
    a: {
      d = d || a;
      e = e || a.fd || a;
      f = !!f;
      if(b = Bc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].va && b[c].Na == d && b[c].capture == f && b[c].Ja == e) {
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
Fc.prototype.Mb = function() {
  B(this.h, P);
  this.h.length = 0
};
Fc.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function Ic() {
  mc.call(this)
}
v(Ic, mc);
r = Ic.prototype;
r.Qc = j;
r.uc = m;
r.zc = function(a) {
  this.uc = a
};
r.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Ac(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(t(a)) {
      a = new oc(a, this)
    }else {
      if(a instanceof oc) {
        a.target = a.target || this
      }else {
        var d = a, a = new oc(b, this);
        qb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, e;
    if(b) {
      f = [];
      for(e = this;e;e = e.uc) {
        f.push(e)
      }
      e = c[j];
      e.K = e.m;
      for(var h = f.length - 1;!a.ta && 0 <= h && e.K;h--) {
        a.currentTarget = f[h], d &= Dc(e, f[h], a.type, j, a) && a.Nb != n
      }
    }
    if(n in c) {
      if(e = c[n], e.K = e.m, b) {
        for(h = 0;!a.ta && h < f.length && e.K;h++) {
          a.currentTarget = f[h], d &= Dc(e, f[h], a.type, n, a) && a.Nb != n
        }
      }else {
        for(f = this;!a.ta && f && e.K;f = f.uc) {
          a.currentTarget = f, d &= Dc(e, f, a.type, n, a) && a.Nb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
function Jc(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
Jc.prototype.contains = function(a) {
  return!this || !a ? n : a instanceof Jc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
function Kc(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Kc.prototype.contains = function(a) {
  return a instanceof Kc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
function S(a, b, c) {
  t(b) ? Lc(a, c, b) : ob(b, qa(Lc, a))
}
function Lc(a, b, c) {
  a.style[za(c)] = b
}
function T(a, b) {
  var c = K(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Mc(a, b) {
  return a.currentStyle ? a.currentStyle[b] : m
}
function Nc(a, b) {
  return T(a, b) || Mc(a, b) || a.style && a.style[b]
}
function Oc(a, b, c) {
  var d, f = G && (Oa || Ua) && I("1.9");
  b instanceof J ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = Pc(d, f);
  a.style.top = Pc(b, f)
}
function Qc(a) {
  var b = a.getBoundingClientRect();
  F && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function Rc(a) {
  if(F && !db(8)) {
    return a.offsetParent
  }
  for(var b = K(a), c = Nc(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = Nc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return m
}
function Sc(a) {
  var b, c = K(a), d = Nc(a, "position"), f = G && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), e = new J(0, 0), h;
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
    b = Qc(a), a = Cb(rb(c)), e.x = b.left + a.x, e.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), e.x = b.screenX - a.screenX, e.y = b.screenY - a.screenY
    }else {
      f = a;
      do {
        e.x += f.offsetLeft;
        e.y += f.offsetTop;
        f != a && (e.x += f.clientLeft || 0, e.y += f.clientTop || 0);
        if(H && "fixed" == Nc(f, "position")) {
          e.x += c.body.scrollLeft;
          e.y += c.body.scrollTop;
          break
        }
        f = f.offsetParent
      }while(f && f != a);
      if(D || H && "absolute" == d) {
        e.y -= c.body.offsetTop
      }
      for(f = a;(f = Rc(f)) && f != c.body && f != h;) {
        if(e.x -= f.scrollLeft, !D || "TR" != f.tagName) {
          e.y -= f.scrollTop
        }
      }
    }
  }
  return e
}
function Tc(a, b) {
  var c = Uc(a), d = Uc(b);
  return new J(c.x - d.x, c.y - d.y)
}
function Uc(a) {
  var b = new J;
  if(1 == a.nodeType) {
    if(a.getBoundingClientRect) {
      var c = Qc(a);
      b.x = c.left;
      b.y = c.top
    }else {
      var c = Cb(rb(a)), d = Sc(a);
      b.x = d.x - c.x;
      b.y = d.y - c.y
    }
    if(G && !I(12)) {
      var f;
      F ? f = "-ms-transform" : H ? f = "-webkit-transform" : D ? f = "-o-transform" : G && (f = "-moz-transform");
      var e;
      f && (e = Nc(a, f));
      e || (e = Nc(a, "transform"));
      e ? (a = e.match(Vc), a = !a ? new J(0, 0) : new J(parseFloat(a[1]), parseFloat(a[2]))) : a = new J(0, 0);
      b = new J(b.x + a.x, b.y + a.y)
    }
  }else {
    f = u(a.Fd), e = a, a.targetTouches ? e = a.targetTouches[0] : f && a.n.targetTouches && (e = a.n.targetTouches[0]), b.x = e.clientX, b.y = e.clientY
  }
  return b
}
function Wc(a, b, c) {
  b instanceof nb ? (c = b.height, b = b.width) : c == i && g(Error("missing height argument"));
  a.style.width = Pc(b, j);
  a.style.height = Pc(c, j)
}
function Pc(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function Xc(a) {
  if("none" != Nc(a, "display")) {
    return Yc(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Yc(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Yc(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = H && !b && !c;
  return(!da(b) || d) && a.getBoundingClientRect ? (a = Qc(a), new nb(a.right - a.left, a.bottom - a.top)) : new nb(b, c)
}
function Zc(a) {
  var b = Sc(a), a = Xc(a);
  return new Kc(b.x, b.y, a.width, a.height)
}
function U(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
}
function V(a, b) {
  a.style.display = b ? "" : "none"
}
function $c(a) {
  return"rtl" == Nc(a, "direction")
}
var ad = G ? "MozUserSelect" : H ? "WebkitUserSelect" : m;
function bd(a, b) {
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
function cd(a, b) {
  if(F) {
    var c = bd(a, Mc(a, b + "Left")), d = bd(a, Mc(a, b + "Right")), f = bd(a, Mc(a, b + "Top")), e = bd(a, Mc(a, b + "Bottom"));
    return new Jc(f, d, e, c)
  }
  c = T(a, b + "Left");
  d = T(a, b + "Right");
  f = T(a, b + "Top");
  e = T(a, b + "Bottom");
  return new Jc(parseFloat(f), parseFloat(d), parseFloat(e), parseFloat(c))
}
var dd = {thin:2, medium:4, thick:6};
function ed(a, b) {
  if("none" == Mc(a, b + "Style")) {
    return 0
  }
  var c = Mc(a, b + "Width");
  return c in dd ? dd[c] : bd(a, c)
}
function fd(a) {
  if(F) {
    var b = ed(a, "borderLeft"), c = ed(a, "borderRight"), d = ed(a, "borderTop"), a = ed(a, "borderBottom");
    return new Jc(d, c, a, b)
  }
  b = T(a, "borderLeftWidth");
  c = T(a, "borderRightWidth");
  d = T(a, "borderTopWidth");
  a = T(a, "borderBottomWidth");
  return new Jc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Vc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function gd(a, b, c) {
  mc.call(this);
  this.target = a;
  this.handle = b || a;
  this.pc = c || new Kc(NaN, NaN, NaN, NaN);
  this.I = K(a);
  this.fa = new Fc(this);
  O(this.handle, ["touchstart", "mousedown"], this.Yd, n, this)
}
v(gd, Ic);
var hd = F || G && I("1.9.3");
r = gd.prototype;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.wd = 0;
r.xd = 0;
r.Ea = 0;
r.Fa = 0;
r.Vc = j;
r.pa = n;
r.hd = 0;
r.Pd = 0;
r.Md = n;
r.Bc = n;
r.Bb = q("fa");
function id(a) {
  da(a.ka) || (a.ka = $c(a.target));
  return a.ka
}
r.Yd = function(a) {
  var b = "mousedown" == a.type;
  if(this.Vc && !this.pa && (!b || tc(a))) {
    jd(a);
    if(0 == this.hd) {
      if(this.dispatchEvent(new kd("start", this, a.clientX, a.clientY, a))) {
        this.pa = j, a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.I, c = b.documentElement, d = !hd;
    R(this.fa, b, ["touchmove", "mousemove"], this.Kd, d);
    R(this.fa, b, ["touchend", "mouseup"], this.zb, d);
    hd ? (c.setCapture(n), R(this.fa, c, "losecapture", this.zb)) : R(this.fa, b ? b.parentWindow || b.defaultView : window, "blur", this.zb);
    F && this.Md && R(this.fa, b, "dragstart", pc);
    this.Vd && R(this.fa, this.Vd, "scroll", this.Sd, d);
    this.clientX = this.wd = a.clientX;
    this.clientY = this.xd = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Bc ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, !c && "fixed" == Nc(a, "position") && (c = K(a).documentElement), c ? (G ? (d = fd(c), b += d.left) : db(8) && (d = fd(c), b -= d.left), a = $c(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.Ea = a;
    this.Fa = this.target.offsetTop;
    this.tc = Cb(rb(this.I));
    this.Pd = ra()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
r.zb = function(a, b) {
  this.fa.Mb();
  hd && this.I.releaseCapture();
  if(this.pa) {
    jd(a);
    this.pa = n;
    var c = ld(this, this.Ea), d = md(this, this.Fa);
    this.dispatchEvent(new kd("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
  ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};
function jd(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.init(a.n.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.init(a.n.changedTouches[0], a.currentTarget)
}
r.Kd = function(a) {
  if(this.Vc) {
    jd(a);
    var b = (this.Bc && id(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.pa) {
      var d = this.wd - this.clientX, f = this.xd - this.clientY;
      if(d * d + f * f > this.hd) {
        if(this.dispatchEvent(new kd("start", this, a.clientX, a.clientY, a))) {
          this.pa = j
        }else {
          this.Tc || this.zb(a);
          return
        }
      }
    }
    c = nd(this, b, c);
    b = c.x;
    c = c.y;
    this.pa && this.dispatchEvent(new kd("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (od(this, a, b, c), a.preventDefault())
  }
};
function nd(a, b, c) {
  var d = Cb(rb(a.I)), b = b + (d.x - a.tc.x), c = c + (d.y - a.tc.y);
  a.tc = d;
  a.Ea += b;
  a.Fa += c;
  b = ld(a, a.Ea);
  a = md(a, a.Fa);
  return new J(b, a)
}
r.Sd = function(a) {
  var b = nd(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  od(this, a, b.x, b.y)
};
function od(a, b, c, d) {
  a.Sc(c, d);
  a.dispatchEvent(new kd("drag", a, b.clientX, b.clientY, b, c, d))
}
function ld(a, b) {
  var c = a.pc, d = !isNaN(c.left) ? c.left : m, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
function md(a, b) {
  var c = a.pc, d = !isNaN(c.top) ? c.top : m, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
r.Sc = function(a, b) {
  this.Bc && id(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
  this.target.style.top = b + "px"
};
function kd(a, b, c, d, f, e, h, l) {
  oc.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.ce = f;
  this.left = da(e) ? e : b.Ea;
  this.top = da(h) ? h : b.Fa;
  this.ge = b;
  this.fe = !!l
}
v(kd, oc);
function pd(a) {
  for(var b = 0, c = 0;a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) {
    b += a.offsetLeft - a.scrollLeft, c += a.offsetTop - a.scrollTop, a = a.offsetParent
  }
  return{top:c, left:b}
}
;function qd() {
  this.Va = []
}
qd.prototype.k = function(a, b) {
  this.Va[a] || (this.Va[a] = []);
  this.Va[a].push(b)
};
qd.prototype.Pa = function(a, b) {
  var c = this.Va[a];
  c && C(c, b)
};
qd.prototype.fireEvent = function(a, b) {
  var c = n, d = this.Va[a];
  d && B(d, function(a) {
    a = a(b);
    da(a) && !a && (c = j)
  });
  return c
};
function rd(a, b) {
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
      if(a instanceof rd) {
        sd(a), f = a.h.concat(), d = W(a)
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
r = rd.prototype;
r.m = 0;
r.Cc = 0;
function W(a) {
  sd(a);
  for(var b = [], c = 0;c < a.h.length;c++) {
    b.push(a.S[a.h[c]])
  }
  return b
}
r.clear = function() {
  this.S = {};
  this.Cc = this.m = this.h.length = 0
};
r.remove = function(a) {
  return td(this.S, a) ? (delete this.S[a], this.m--, this.Cc++, this.h.length > 2 * this.m && sd(this), j) : n
};
function sd(a) {
  if(a.m != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      td(a.S, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.m != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], td(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
r.get = function(a, b) {
  return td(this.S, a) ? this.S[a] : b
};
r.set = function(a, b) {
  td(this.S, a) || (this.m++, this.h.push(a), this.Cc++);
  this.S[a] = b
};
function td(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function ud(a, b) {
  this.x = a;
  this.y = b
}
;function vd(a) {
  this.points = a
}
function wd(a) {
  for(var b = 0, c = a.length - 1, d = 0;d < a.length;d++) {
    b += (a[c].x + a[d].x) * (a[c].y - a[d].y), c = d
  }
  return b / 2
}
function xd(a, b) {
  for(var c, d = c = 0, f, e = a.length - 1, h = 0;h < a.length;h++) {
    f = a[h].x * a[e].y - a[e].x * a[h].y, c += (a[h].x + a[e].x) * f, d += (a[h].y + a[e].y) * f, e = h
  }
  f = 6 * wd(a);
  c = new ud(Math.abs(c / f), Math.abs(d / f));
  d = [];
  for(f = 0;f < a.length;f++) {
    var e = a[f], l = (0 > wd(a) ? -1 : 1) * b, h = e.x - c.x, k = e.y - c.y, p = 0 < l ? 1 : 0 > l ? -1 : 0, l = Math.sqrt(Math.pow(l, 2) / (1 + Math.pow(h / k, 2)));
    d.push({x:e.x + Math.abs(h / k * l) * (0 < h ? 1 : 0 > h ? -1 : 0) * p, y:e.y + Math.abs(l) * (0 < k ? 1 : 0 > k ? -1 : 0) * p})
  }
  return d
}
;function yd(a, b, c, d) {
  0 < c ? (this.x = a, this.width = c) : (this.x = a + c, this.width = -c);
  0 < d ? (this.y = b, this.height = d) : (this.y = b + d, this.height = -d)
}
;function zd(a, b) {
  this.type = a;
  this.geometry = b
}
function Ad(a) {
  return"rect" == a.type ? a.geometry.width * a.geometry.height : "polygon" == a.type ? Math.abs(wd(a.geometry.points)) : 0
}
function Bd(a) {
  if("rect" == a.type) {
    return a
  }
  if("polygon" == a.type) {
    for(var a = a.geometry.points, b = a[0].x, c = a[0].x, d = a[0].y, f = a[0].y, e = 1;e < a.length;e++) {
      a[e].x > c && (c = a[e].x), a[e].x < b && (b = a[e].x), a[e].y > f && (f = a[e].y), a[e].y < d && (d = a[e].y)
    }
    return new zd("rect", new yd(b, d, c - b, f - d))
  }
}
function Cd(a, b) {
  var c;
  c = a.geometry.points;
  var d = 0 > wd(c) ? -1 : 1;
  if(4 > c.length) {
    c = xd(c, d * b)
  }else {
    for(var f = c.length - 1, e = 1, h = [], l = 0;l < c.length;l++) {
      f = xd([c[f], c[l], c[e]], d * b), h.push(f[1]), f = l, e++, e > c.length - 1 && (e = 0)
    }
    c = h
  }
  return new zd("polygon", new vd(c))
}
function Dd(a, b) {
  if("rect" == a.type) {
    var c = a.geometry, d = b({x:c.x, y:c.y}), c = b({x:c.x + c.width, y:c.y + c.height});
    return new zd("rect", new yd(d.x, d.y, c.x - d.x, c.y - d.y))
  }
  if("polygon" == a.type) {
    var f = [];
    B(a.geometry.points, function(a) {
      f.push(b(a))
    });
    return new zd("polygon", new vd(f))
  }
}
function Ed(a) {
  return JSON.stringify(a.geometry)
}
window.annotorious || (window.annotorious = {});
window.annotorious.geometry || (window.annotorious.geometry = {}, window.annotorious.geometry.expand = Cd);
function Fd(a, b, c) {
  this.src = a;
  this.text = b;
  this.shapes = [c];
  this.context = document.URL
}
;function Gd() {
}
function Hd(a, b) {
  a.f = new rd;
  a.Ec = [];
  a.Za = [];
  a.Ba = [];
  a.ya = [];
  a.Tb = [];
  a.rb = {La:n, Ka:n};
  a.Sa = new rd;
  a.Lc = b
}
function Id(a, b) {
  var c = a.Sa(b);
  c || (c = {La:n, Ka:n}, c.set(b, c));
  return c
}
function Jd(a, b) {
  var c = a.jc(b);
  if(!a.f.get(c)) {
    var d = a.rd(b), f = [], e = [];
    B(a.Ec, function(a) {
      d.k(a.type, a.Ja)
    });
    B(a.Za, function(a) {
      if(a.onInitAnnotator) {
        a.onInitAnnotator(d)
      }
    });
    B(a.ya, function(a) {
      a.src == c && (d.z(a), f.push(a))
    });
    B(a.Tb, function(a) {
      a.src == c && (d.w(a), e.push(a))
    });
    B(f, function(b) {
      C(a.ya, b)
    });
    B(e, function(b) {
      C(a.Tb, b)
    });
    var h = a.Sa.get(c);
    h ? (h.La && d.O(), h.Ka && d.Y(), a.Sa.remove(c)) : (a.rb.La && d.O(), a.rb.Ka && d.Y());
    a.f.set(c, d);
    C(a.Ba, b)
  }
}
function Kd(a) {
  var b, c;
  for(c = a.Ba.length;0 < c;c--) {
    for(var d = b = a.Ba[c - 1], f = d.offsetTop, e = d.offsetLeft, h = d.offsetWidth, l = d.offsetHeight;d.offsetParent;) {
      d = d.offsetParent, f += d.offsetTop, e += d.offsetLeft
    }
    f < window.pageYOffset + window.innerHeight && (e < window.pageXOffset + window.innerWidth && f + l > window.pageYOffset && e + h > window.pageXOffset) && Jd(a, b)
  }
}
function Ld(a, b, c) {
  if(b) {
    var d = a.f.get(b);
    d ? c ? d.wa() : d.Y() : Id(a, b).Ka = c
  }else {
    B(W(a.f), function(a) {
      c ? a.wa() : a.Y()
    }), a.rb.Ka = c, B(W(a.Sa), function(a) {
      a.Ka = c
    })
  }
}
function Md(a, b, c) {
  if(b) {
    var d = a.f.get(b);
    d ? c ? d.$() : d.O() : Id(a, b).La = c
  }else {
    B(W(a.f), function(a) {
      c ? a.$() : a.O()
    }), a.rb.La = c, B(W(a.Sa), function(a) {
      a.La = c
    })
  }
}
r = Gd.prototype;
r.ea = function(a, b) {
  var c = i, d = i;
  t(a) ? (c = a, d = b) : u(a) && (d = a);
  c ? (c = this.f.get(c)) && c.ea(d) : B(W(this.f), function(a) {
    a.ea(d)
  })
};
r.z = function(a, b) {
  if(Nd(this, a.src)) {
    var c = this.f.get(a.src);
    c ? c.z(a, b) : (this.ya.push(a), b && C(this.ya, b))
  }
};
r.k = function(a, b) {
  B(W(this.f), function(c) {
    c.k(a, b)
  });
  this.Ec.push({type:a, Ja:b})
};
r.wb = function(a) {
  this.Za.push(a);
  B(W(this.f), function(b) {
    if(a.onInitAnnotator) {
      a.onInitAnnotator(b)
    }
  })
};
function Nd(a, b) {
  return td(a.f.S, b) ? j : Ea(a.Ba, function(c) {
    return a.jc(c) == b
  }) != m
}
r.R = function(a) {
  a ? (a = this.f.get(a)) && a.R() : (B(W(this.f), function(a) {
    a.R()
  }), this.f.clear())
};
r.qa = function(a) {
  if(Nd(this, a) && (a = this.f.get(a))) {
    return a.qa().getName()
  }
};
r.J = function(a) {
  if(a) {
    var b = this.f.get(a);
    return b ? b.J() : Ba(this.ya, function(b) {
      return b.src == a
    })
  }
  var c = [];
  B(W(this.f), function(a) {
    Ha(c, a.J())
  });
  Ha(c, this.ya);
  return c
};
r.ra = function(a) {
  if(Nd(this, a) && (a = this.f.get(a))) {
    return Ca(a.ra(), function(a) {
      return a.getName()
    })
  }
};
r.Y = function(a) {
  Ld(this, a, n)
};
r.O = function(a) {
  Md(this, a, n)
};
r.o = function(a) {
  if(a) {
    if(Nd(this, a.src)) {
      var b = this.f.get(a.src);
      b && b.o(a)
    }
  }else {
    B(W(this.f), function(a) {
      a.o()
    })
  }
};
r.init = function() {
  this.Lc && Ha(this.Ba, this.Lc());
  Kd(this);
  var a = this, b = O(window, "scroll", function() {
    0 < a.Ba.length ? Kd(a) : P(b)
  })
};
r.qc = function(a) {
  this.Ac(a) && Jd(this, a)
};
r.w = function(a) {
  if(Nd(this, a.src)) {
    var b = this.f.get(a.src);
    b ? b.w(a) : this.Tb.push(a)
  }
};
r.qb = function(a, b) {
  if(Nd(this, a)) {
    var c = this.f.get(a);
    c && c.qb(b)
  }
};
r.wa = function(a) {
  Ld(this, a, j)
};
r.$ = function(a) {
  Md(this, a, j)
};
function Od(a, b) {
  var c = rb().createElement("DIV");
  c.innerHTML = a(b || Pd, i, i);
  if(1 == c.childNodes.length) {
    var d = c.firstChild;
    if(1 == d.nodeType) {
      return d
    }
  }
  return c
}
var Pd = {};
function Qd(a, b) {
  a != m && this.append.apply(this, arguments)
}
r = Qd.prototype;
r.oa = "";
r.set = function(a) {
  this.oa = "" + a
};
r.append = function(a, b, c) {
  this.oa += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.oa += arguments[d]
    }
  }
  return this
};
r.clear = function() {
  this.oa = ""
};
r.toString = q("oa");
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
function Rd() {
}
var Sd = {ie:"<", he:">", ae:"&", je:"\u00a0", le:'"', be:"'"}, Td = {a:0, abbr:0, acronym:0, address:0, applet:16, area:2, b:0, base:18, basefont:18, bdo:0, big:0, blockquote:0, body:49, br:2, button:0, caption:0, center:0, cite:0, code:0, col:2, colgroup:1, dd:1, del:0, dfn:0, dir:0, div:0, dl:0, dt:1, em:0, fieldset:0, font:0, form:0, frame:18, frameset:16, h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, head:49, hr:2, html:49, i:0, iframe:20, img:2, input:2, ins:0, isindex:18, kbd:0, label:0, legend:0, li:1, 
link:18, map:0, menu:0, meta:18, noframes:20, noscript:20, object:16, ol:0, optgroup:0, option:1, p:1, param:18, pre:0, q:0, s:0, samp:0, script:20, select:0, small:0, span:0, strike:0, strong:0, style:20, sub:0, sup:0, table:0, tbody:1, td:1, textarea:8, tfoot:1, th:1, thead:1, title:24, tr:1, tt:0, u:0, ul:0, "var":0}, Ud = /&/g, Vd = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, Wd = /</g, Xd = />/g, Yd = /\"/g, Zd = /=/g, $d = /\0/g, ae = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g, be = /^#(\d+)$/, ce = 
/^#x([0-9A-Fa-f]+)$/, de = RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[^a-z\\s>]+)", "i"), ee = RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<[!]--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))", "i");
Rd.prototype.parse = function(a, b) {
  var c = m, d = n, f = [], e, h, l;
  a.M = [];
  for(a.ha = n;b;) {
    var k = b.match(d ? de : ee), b = b.substring(k[0].length);
    if(d) {
      if(k[1]) {
        var p = k[1].toLowerCase();
        if(k[2]) {
          k = k[3];
          switch(k.charCodeAt(0)) {
            case 34:
            ;
            case 39:
              k = k.substring(1, k.length - 1)
          }
          k = k.replace($d, "").replace(ae, pa(this.Nd, this))
        }else {
          k = p
        }
        f.push(p, k)
      }else {
        k[4] && (h !== i && (l ? a.vd && a.vd(e, f) : a.Wc && a.Wc(e)), l && h & 12 && (c = c === m ? b.toLowerCase() : c.substring(c.length - b.length), d = c.indexOf("</" + e), 0 > d && (d = b.length), h & 4 ? a.Pc && a.Pc(b.substring(0, d)) : a.ud && a.ud(b.substring(0, d).replace(Vd, "&amp;$1").replace(Wd, "&lt;").replace(Xd, "&gt;")), b = b.substring(d)), e = h = l = i, f.length = 0, d = n)
      }
    }else {
      if(k[1]) {
        fe(a, k[0])
      }else {
        if(k[3]) {
          l = !k[2], d = j, e = k[3].toLowerCase(), h = Td.hasOwnProperty(e) ? Td[e] : i
        }else {
          if(k[4]) {
            fe(a, k[4])
          }else {
            if(k[5]) {
              switch(k[5]) {
                case "<":
                  fe(a, "&lt;");
                  break;
                case ">":
                  fe(a, "&gt;");
                  break;
                default:
                  fe(a, "&amp;")
              }
            }
          }
        }
      }
    }
  }
  for(c = a.M.length;0 <= --c;) {
    a.aa.append("</", a.M[c], ">")
  }
  a.M.length = 0
};
Rd.prototype.Nd = function(a) {
  a = a.toLowerCase();
  if(Sd.hasOwnProperty(a)) {
    return Sd[a]
  }
  var b = a.match(be);
  return b ? String.fromCharCode(parseInt(b[1], 10)) : (b = a.match(ce)) ? String.fromCharCode(parseInt(b[1], 16)) : ""
};
function ge() {
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
function he(a, b, c) {
  this.aa = a;
  this.M = [];
  this.ha = n;
  this.zd = b;
  this.Jb = c
}
v(he, ge);
var ie = {"*::class":9, "*::dir":0, "*::id":4, "*::lang":0, "*::onclick":2, "*::ondblclick":2, "*::onkeydown":2, "*::onkeypress":2, "*::onkeyup":2, "*::onload":2, "*::onmousedown":2, "*::onmousemove":2, "*::onmouseout":2, "*::onmouseover":2, "*::onmouseup":2, "*::style":3, "*::title":0, "*::accesskey":0, "*::tabindex":0, "*::onfocus":2, "*::onblur":2, "a::coords":0, "a::href":1, "a::hreflang":0, "a::name":7, "a::onblur":2, "a::rel":0, "a::rev":0, "a::shape":0, "a::target":10, "a::type":0, "area::accesskey":0, 
"area::alt":0, "area::coords":0, "area::href":1, "area::nohref":0, "area::onfocus":2, "area::shape":0, "area::tabindex":0, "area::target":10, "bdo::dir":0, "blockquote::cite":1, "br::clear":0, "button::accesskey":0, "button::disabled":0, "button::name":8, "button::onblur":2, "button::onfocus":2, "button::tabindex":0, "button::type":0, "button::value":0, "caption::align":0, "col::align":0, "col::char":0, "col::charoff":0, "col::span":0, "col::valign":0, "col::width":0, "colgroup::align":0, "colgroup::char":0, 
"colgroup::charoff":0, "colgroup::span":0, "colgroup::valign":0, "colgroup::width":0, "del::cite":1, "del::datetime":0, "dir::compact":0, "div::align":0, "dl::compact":0, "font::color":0, "font::face":0, "font::size":0, "form::accept":0, "form::action":1, "form::autocomplete":0, "form::enctype":0, "form::method":0, "form::name":7, "form::onreset":2, "form::onsubmit":2, "form::target":10, "h1::align":0, "h2::align":0, "h3::align":0, "h4::align":0, "h5::align":0, "h6::align":0, "hr::align":0, "hr::noshade":0, 
"hr::size":0, "hr::width":0, "img::align":0, "img::alt":0, "img::border":0, "img::height":0, "img::hspace":0, "img::ismap":0, "img::longdesc":1, "img::name":7, "img::src":1, "img::usemap":11, "img::vspace":0, "img::width":0, "input::accept":0, "input::accesskey":0, "input::autocomplete":0, "input::align":0, "input::alt":0, "input::checked":0, "input::disabled":0, "input::ismap":0, "input::maxlength":0, "input::name":8, "input::onblur":2, "input::onchange":2, "input::onfocus":2, "input::onselect":2, 
"input::readonly":0, "input::size":0, "input::src":1, "input::tabindex":0, "input::type":0, "input::usemap":11, "input::value":0, "ins::cite":1, "ins::datetime":0, "label::accesskey":0, "label::for":5, "label::onblur":2, "label::onfocus":2, "legend::accesskey":0, "legend::align":0, "li::type":0, "li::value":0, "map::name":7, "menu::compact":0, "ol::compact":0, "ol::start":0, "ol::type":0, "optgroup::disabled":0, "optgroup::label":0, "option::disabled":0, "option::label":0, "option::selected":0, "option::value":0, 
"p::align":0, "pre::width":0, "q::cite":1, "select::disabled":0, "select::multiple":0, "select::name":8, "select::onblur":2, "select::onchange":2, "select::onfocus":2, "select::size":0, "select::tabindex":0, "table::align":0, "table::bgcolor":0, "table::border":0, "table::cellpadding":0, "table::cellspacing":0, "table::frame":0, "table::rules":0, "table::summary":0, "table::width":0, "tbody::align":0, "tbody::char":0, "tbody::charoff":0, "tbody::valign":0, "td::abbr":0, "td::align":0, "td::axis":0, 
"td::bgcolor":0, "td::char":0, "td::charoff":0, "td::colspan":0, "td::headers":6, "td::height":0, "td::nowrap":0, "td::rowspan":0, "td::scope":0, "td::valign":0, "td::width":0, "textarea::accesskey":0, "textarea::cols":0, "textarea::disabled":0, "textarea::name":8, "textarea::onblur":2, "textarea::onchange":2, "textarea::onfocus":2, "textarea::onselect":2, "textarea::readonly":0, "textarea::rows":0, "textarea::tabindex":0, "tfoot::align":0, "tfoot::char":0, "tfoot::charoff":0, "tfoot::valign":0, 
"th::abbr":0, "th::align":0, "th::axis":0, "th::bgcolor":0, "th::char":0, "th::charoff":0, "th::colspan":0, "th::headers":6, "th::height":0, "th::nowrap":0, "th::rowspan":0, "th::scope":0, "th::valign":0, "th::width":0, "thead::align":0, "thead::char":0, "thead::charoff":0, "thead::valign":0, "tr::align":0, "tr::bgcolor":0, "tr::char":0, "tr::charoff":0, "tr::valign":0, "ul::compact":0, "ul::type":0};
he.prototype.vd = function(a, b) {
  if(!this.ha && Td.hasOwnProperty(a)) {
    var c = Td[a];
    if(!(c & 32)) {
      if(c & 16) {
        this.ha = !(c & 2)
      }else {
        for(var d = b, f = 0;f < d.length;f += 2) {
          var e = d[f], h = d[f + 1], l = m, k;
          if((k = a + "::" + e, ie.hasOwnProperty(k)) || (k = "*::" + e, ie.hasOwnProperty(k))) {
            l = ie[k]
          }
          if(l !== m) {
            switch(l) {
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
                h = this.Jb ? this.Jb(h) : h;
                break;
              case 1:
                h = this.zd && this.zd(h);
                break;
              case 11:
                h && "#" === h.charAt(0) ? (h = this.Jb ? this.Jb(h) : h) && (h = "#" + h) : h = m;
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
          this.aa.append("<", a);
          c = 0;
          for(d = b.length;c < d;c += 2) {
            f = b[c], e = b[c + 1], e !== m && e !== i && this.aa.append(" ", f, '="', e.replace(Ud, "&amp;").replace(Wd, "&lt;").replace(Xd, "&gt;").replace(Yd, "&#34;").replace(Zd, "&#61;"), '"')
          }
          this.aa.append(">")
        }
      }
    }
  }
};
he.prototype.Wc = function(a) {
  if(this.ha) {
    this.ha = n
  }else {
    if(Td.hasOwnProperty(a)) {
      var b = Td[a];
      if(!(b & 50)) {
        if(b & 1) {
          for(b = this.M.length;0 <= --b;) {
            var c = this.M[b];
            if(c === a) {
              break
            }
            if(!(Td[c] & 1)) {
              return
            }
          }
        }else {
          for(b = this.M.length;0 <= --b && this.M[b] !== a;) {
          }
        }
        if(!(0 > b)) {
          for(var d = this.M.length;--d > b;) {
            c = this.M[d], Td[c] & 1 || this.aa.append("</", c, ">")
          }
          this.M.length = b;
          this.aa.append("</", a, ">")
        }
      }
    }
  }
};
function fe(a, b) {
  a.ha || a.aa.append(b)
}
he.prototype.ud = function(a) {
  this.ha || this.aa.append(a)
};
he.prototype.Pc = function(a) {
  this.ha || this.aa.append(a)
};
function je(a, b, c, d, f) {
  if(!F && (!H || !I("525"))) {
    return j
  }
  if(Oa && f) {
    return ke(a)
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
  return ke(a)
}
function ke(a) {
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
function le(a) {
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
;function me(a, b) {
  mc.call(this);
  a && ne(this, a, b)
}
v(me, Ic);
r = me.prototype;
r.B = m;
r.Eb = m;
r.nc = m;
r.Fb = m;
r.ja = -1;
r.ia = -1;
r.fc = n;
var oe = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, pe = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, qe = F || 
H && I("525"), re = Oa && G;
r = me.prototype;
r.Hd = function(a) {
  if(H && (17 == this.ja && !a.ctrlKey || 18 == this.ja && !a.altKey)) {
    this.ia = this.ja = -1
  }
  qe && !je(a.keyCode, this.ja, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ia = G ? le(a.keyCode) : a.keyCode, re && (this.fc = a.altKey))
};
r.Jd = function(a) {
  this.ia = this.ja = -1;
  this.fc = a.altKey
};
r.handleEvent = function(a) {
  var b = a.n, c, d, f = b.altKey;
  F && "keypress" == a.type ? (c = this.ia, d = 13 != c && 27 != c ? b.keyCode : 0) : H && "keypress" == a.type ? (c = this.ia, d = 0 <= b.charCode && 63232 > b.charCode && ke(c) ? b.charCode : 0) : D ? (c = this.ia, d = ke(c) ? b.keyCode : 0) : (c = b.keyCode || this.ia, d = b.charCode || 0, re && (f = this.fc), Oa && (63 == d && 224 == c) && (c = 191));
  var e = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in oe ? e = oe[c] : 25 == c && a.shiftKey && (e = 9) : h && h in pe && (e = pe[h]);
  a = e == this.ja;
  this.ja = e;
  b = new se(e, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b)
};
r.c = q("B");
function ne(a, b, c) {
  a.Fb && a.detach();
  a.B = b;
  a.Eb = O(a.B, "keypress", a, c);
  a.nc = O(a.B, "keydown", a.Hd, c, a);
  a.Fb = O(a.B, "keyup", a.Jd, c, a)
}
r.detach = function() {
  this.Eb && (P(this.Eb), P(this.nc), P(this.Fb), this.Fb = this.nc = this.Eb = m);
  this.B = m;
  this.ia = this.ja = -1
};
function se(a, b, c, d) {
  d && this.init(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
v(se, rc);
function te() {
}
fa(te);
te.prototype.Rd = 0;
te.ob();
function ue(a) {
  mc.call(this);
  this.ib = a || rb();
  this.ka = ve
}
v(ue, Ic);
ue.prototype.Ld = te.ob();
var ve = m;
function we(a, b) {
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
r = ue.prototype;
r.Db = m;
r.Z = n;
r.B = m;
r.ka = m;
r.sa = m;
r.fb = m;
r.Da = m;
r.$d = n;
r.c = q("B");
r.Bb = function() {
  return this.lc || (this.lc = new Fc(this))
};
r.zc = function(a) {
  this.sa && this.sa != a && g(Error("Method not supported"));
  ue.G.zc.call(this, a)
};
r.Yc = q("ib");
r.hb = function(a) {
  this.Z && g(Error("Component already rendered"));
  if(a && this.eb(a)) {
    this.$d = j;
    if(!this.ib || this.ib.I != K(a)) {
      this.ib = rb(a)
    }
    this.Rc(a);
    this.Ga()
  }else {
    g(Error("Invalid element to decorate"))
  }
};
r.eb = ba(j);
r.Rc = function(a) {
  this.B = a
};
r.Ga = function() {
  function a(a) {
    !a.Z && a.c() && a.Ga()
  }
  this.Z = j;
  this.fb && B(this.fb, a, i)
};
r.Ab = function() {
  function a(a) {
    a.Z && a.Ab()
  }
  this.fb && B(this.fb, a, i);
  this.lc && this.lc.Mb();
  this.Z = n
};
r.mb = q("B");
r.Qa = function(a) {
  this.Z && g(Error("Component already rendered"));
  this.ka = a
};
r.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : a.Db || (a.Db = ":" + (a.Ld.Rd++).toString(36)), d;
    this.Da && c ? (d = this.Da, d = (c in d ? d[c] : i) || m) : d = m;
    a = d;
    c && a && (d = this.Da, c in d && delete d[c], C(this.fb, a), b && (a.Ab(), a.B && xb(a.B)), c = a, c == m && g(Error("Unable to set parent component")), c.sa = m, ue.G.zc.call(c, m))
  }
  a || g(Error("Child is not in parent component"));
  return a
};
function xe() {
}
var ye;
fa(xe);
r = xe.prototype;
r.mb = function(a) {
  return a
};
r.jb = function(a, b, c) {
  if(a = a.c ? a.c() : a) {
    if(F && !I("7")) {
      var d = ze(hb(a), b);
      d.push(b);
      qa(c ? ib : kb, a).apply(m, d)
    }else {
      c ? ib(a, b) : kb(a, b)
    }
  }
};
r.eb = ba(j);
r.hb = function(a, b) {
  if(b.id) {
    var c = b.id;
    if(a.sa && a.sa.Da) {
      var d = a.sa.Da, f = a.Db;
      f in d && delete d[f];
      d = a.sa.Da;
      c in d && g(Error('The object already contains the key "' + c + '"'));
      d[c] = a
    }
    a.Db = c
  }
  (c = this.mb(b)) && c.firstChild ? (c = c.firstChild.nextSibling ? Ga(c.childNodes) : c.firstChild, a.gb = c) : a.gb = m;
  var e = 0, h = this.nb(), l = this.nb(), k = n, p = n, c = n, d = hb(b);
  B(d, function(a) {
    if(!k && a == h) {
      k = j, l == h && (p = j)
    }else {
      if(!p && a == l) {
        p = j
      }else {
        var b = e;
        if(!this.yd) {
          this.yb || Ae(this);
          var c = this.yb, d = {}, f;
          for(f in c) {
            d[c[f]] = f
          }
          this.yd = d
        }
        a = parseInt(this.yd[a], 10);
        e = b | (isNaN(a) ? 0 : a)
      }
    }
  }, this);
  a.r = e;
  k || (d.push(h), l == h && (p = j));
  p || d.push(l);
  (f = a.X) && d.push.apply(d, f);
  if(F && !I("7")) {
    var w = ze(d);
    0 < w.length && (d.push.apply(d, w), c = j)
  }
  if(!k || !p || f || c) {
    b.className = d.join(" ")
  }
  a.isEnabled() || this.Ra(b, 1, j);
  a.r & 8 && this.Ra(b, 8, j);
  a.P & 16 && this.Ra(b, 16, !!(a.r & 16));
  a.P & 64 && this.Ra(b, 64, !!(a.r & 64));
  return b
};
r.Ob = function(a, b) {
  var c = !b, d = F || D ? a.getElementsByTagName("*") : m;
  if(ad) {
    if(c = c ? "none" : "", a.style[ad] = c, d) {
      for(var f = 0, e;e = d[f];f++) {
        e.style[ad] = c
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
r.Qa = function(a, b) {
  this.jb(a, this.nb() + "-rtl", b)
};
r.md = function(a) {
  var b;
  return a.P & 32 && (b = a.Ha()) ? Bb(b) : n
};
r.yc = function(a, b) {
  var c;
  if(a.P & 32 && (c = a.Ha())) {
    if(!b && a.r & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.r & 32 && a.Zc()
    }
    Bb(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.L = function(a, b, c) {
  var d = a.c();
  if(d) {
    var f;
    this.yb || Ae(this);
    (f = this.yb[b]) && this.jb(a, f, c);
    this.Ra(d, b, c)
  }
};
r.Ra = function(a, b, c) {
  ye || (ye = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = ye[b]) && a.setAttribute("aria-" + b, c)
};
r.la = function(a, b) {
  var c = this.mb(a);
  if(c && (wb(c), b)) {
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
          wb(c), c.appendChild(K(c).createTextNode(b))
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
r.Ha = function(a) {
  return a.c()
};
r.nb = ba("goog-control");
function ze(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  B([], function(d) {
    Da(d, qa(Fa, a)) && (!b || Fa(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Ae(a) {
  var b = a.nb();
  a.yb = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
}
;var Be = {};
function X(a, b, c) {
  ue.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Be[d]) {
        break
      }
      b = b.G ? b.G.constructor : m
    }
    b = d ? u(d.ob) ? d.ob() : new d : m
  }
  this.C = b;
  this.gb = a
}
v(X, ue);
r = X.prototype;
r.gb = m;
r.r = 0;
r.P = 39;
r.hc = 255;
r.Zd = 0;
r.Qb = j;
r.X = m;
r.mc = j;
r.ec = n;
r.Ud = m;
function Ce(a) {
  a.Z && n != a.mc && De(a, n);
  a.mc = n
}
r.Ha = function() {
  return this.C.Ha(this)
};
r.jb = function(a, b) {
  b ? a && (this.X ? Fa(this.X, a) || this.X.push(a) : this.X = [a], this.C.jb(this, a, j)) : a && this.X && (C(this.X, a), 0 == this.X.length && (this.X = m), this.C.jb(this, a, n))
};
r.mb = function() {
  return this.C.mb(this.c())
};
r.eb = function(a) {
  return this.C.eb(a)
};
r.Rc = function(a) {
  this.B = a = this.C.hb(this, a);
  var b = this.Ud || i;
  b && a.setAttribute("role", b);
  this.ec || this.C.Ob(a, n);
  this.Qb = "none" != a.style.display
};
r.Ga = function() {
  X.G.Ga.call(this);
  var a = this.C;
  this.ka == m && (this.ka = $c(this.Z ? this.B : this.ib.I.body));
  this.ka && a.Qa(this.c(), j);
  this.isEnabled() && a.yc(this, this.Qb);
  if(this.P & -2 && (this.mc && De(this, j), this.P & 32 && (a = this.Ha()))) {
    var b = this.oc || (this.oc = new me);
    ne(b, a);
    R(R(R(this.Bb(), b, "key", this.Id), a, "focus", this.Gd), a, "blur", this.Zc)
  }
};
function De(a, b) {
  var c = a.Bb(), d = a.c();
  b ? (R(R(R(R(c, d, "mouseover", a.cd), d, "mousedown", a.ad), d, "mouseup", a.ed), d, "mouseout", a.bd), a.Cb != ea && R(c, d, "contextmenu", a.Cb), F && R(c, d, "dblclick", a.$c)) : (Hc(Hc(Hc(Hc(c, d, "mouseover", a.cd), d, "mousedown", a.ad), d, "mouseup", a.ed), d, "mouseout", a.bd), a.Cb != ea && Hc(c, d, "contextmenu", a.Cb), F && Hc(c, d, "dblclick", a.$c))
}
r.Ab = function() {
  X.G.Ab.call(this);
  this.oc && this.oc.detach();
  this.Qb && this.isEnabled() && this.C.yc(this, n)
};
r.la = function(a) {
  this.C.la(this.c(), a);
  this.gb = a
};
r.Qa = function(a) {
  X.G.Qa.call(this, a);
  var b = this.c();
  b && this.C.Qa(b, a)
};
r.Ob = function(a) {
  this.ec = a;
  var b = this.c();
  b && this.C.Ob(b, a)
};
r.isEnabled = function() {
  return!(this.r & 1)
};
function Ee(a, b) {
  Ge(a, 2, b) && a.L(2, b)
}
r.setActive = function(a) {
  Ge(this, 4, a) && this.L(4, a)
};
r.L = function(a, b) {
  this.P & a && b != !!(this.r & a) && (this.C.L(this, a, b), this.r = b ? this.r | a : this.r & ~a)
};
function Y(a, b) {
  return!!(a.hc & b) && !!(a.P & b)
}
function Ge(a, b, c) {
  return!!(a.P & b) && !!(a.r & b) != c && (!(a.Zd & b) || a.dispatchEvent(we(b, c))) && !a.Tc
}
r.cd = function(a) {
  (!a.relatedTarget || !Ab(this.c(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && Y(this, 2)) && Ee(this, j)
};
r.bd = function(a) {
  if((!a.relatedTarget || !Ab(this.c(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Y(this, 4) && this.setActive(n), Y(this, 2) && Ee(this, n)
  }
};
r.Cb = ea;
r.ad = function(a) {
  this.isEnabled() && (Y(this, 2) && Ee(this, j), tc(a) && (Y(this, 4) && this.setActive(j), this.C.md(this) && this.Ha().focus()));
  !this.ec && tc(a) && a.preventDefault()
};
r.ed = function(a) {
  this.isEnabled() && (Y(this, 2) && Ee(this, j), this.r & 4 && (He(this, a) && Y(this, 4)) && this.setActive(n))
};
r.$c = function(a) {
  this.isEnabled() && He(this, a)
};
function He(a, b) {
  if(Y(a, 16)) {
    var c = !(a.r & 16);
    Ge(a, 16, c) && a.L(16, c)
  }
  Y(a, 8) && Ge(a, 8, j) && a.L(8, j);
  Y(a, 64) && (c = !(a.r & 64), Ge(a, 64, c) && a.L(64, c));
  c = new oc("action", a);
  b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.vc = b.vc);
  return a.dispatchEvent(c)
}
r.Gd = function() {
  Y(this, 32) && Ge(this, 32, j) && this.L(32, j)
};
r.Zc = function() {
  Y(this, 4) && this.setActive(n);
  Y(this, 32) && Ge(this, 32, n) && this.L(32, n)
};
r.Id = function(a) {
  return this.Qb && this.isEnabled() && 13 == a.keyCode && He(this, a) ? (a.preventDefault(), a.stopPropagation(), j) : n
};
u(X) || g(Error("Invalid component class " + X));
u(xe) || g(Error("Invalid renderer class " + xe));
var Ie = ka(X);
Be[Ie] = xe;
function Je() {
  return new X(m)
}
u(Je) || g(Error("Invalid decorator function " + Je));
function Ke() {
}
v(Ke, xe);
fa(Ke);
r = Ke.prototype;
r.hb = function(a, b) {
  Ce(a);
  a.hc &= -256;
  a.Z && a.r & 32 && g(Error("Component already rendered"));
  a.r & 32 && a.L(32, n);
  a.P &= -33;
  Ke.G.hb.call(this, a, b);
  a.la(b.value);
  return b
};
r.eb = function(a) {
  return"TEXTAREA" == a.tagName
};
r.Qa = ea;
r.md = function(a) {
  return a.isEnabled()
};
r.yc = ea;
r.L = function(a, b, c) {
  Ke.G.L.call(this, a, b, c);
  if((a = a.c()) && 1 == b) {
    a.disabled = c
  }
};
r.Ra = ea;
r.la = function(a, b) {
  a && (a.value = b)
};
r.nb = ba("goog-textarea");
function Le(a, b, c) {
  X.call(this, a, b || Ke.ob(), c);
  Ce(this);
  this.Ob(j);
  a || (this.gb = "")
}
v(Le, X);
var Me = G || H;
r = Le.prototype;
r.Ma = n;
r.ga = 0;
r.Od = 0;
r.pd = 0;
r.gd = n;
r.Ib = n;
r.xc = n;
r.wc = n;
function Ne(a) {
  return a.pb.top + a.pb.bottom + a.Nc.top + a.Nc.bottom
}
function Oe(a) {
  var b = a.pd, c = a.c();
  b && (c && a.Ib) && (b -= Ne(a));
  return b
}
function Pe(a) {
  var b = a.Od, c = a.c();
  b && (c && a.Ib) && (b -= Ne(a));
  return b
}
r.la = function(a) {
  Le.G.la.call(this, a);
  this.c() && this.Ia()
};
r.Ga = function() {
  Le.G.Ga.call(this);
  var a = this.c();
  S(a, {overflowY:"hidden", overflowX:"auto", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"});
  this.pb = cd(a, "padding");
  this.Nc = fd(a);
  R(R(R(R(this.Bb(), a, "scroll", this.Ia), a, "focus", this.Ia), a, "keyup", this.Ia), a, "mouseup", this.Qd);
  this.c() && this.Ia()
};
function Qe(a) {
  if(!a.gd) {
    var b = a.c().cloneNode(n);
    S(b, {position:"absolute", height:"auto", top:"-9999px", margin:"0", padding:"1px", border:"1px solid #000", overflow:"hidden"});
    a.Yc().I.body.appendChild(b);
    var c = b.scrollHeight;
    b.style.padding = "10px";
    var d = b.scrollHeight;
    a.xc = d > c;
    b.style.borderWidth = "10px";
    a.wc = b.scrollHeight > d;
    b.style.height = "100px";
    100 != b.offsetHeight && (a.Ib = j);
    xb(b);
    a.gd = j
  }
  var b = a.c(), c = a.c().scrollHeight, f = a.c(), d = f.offsetHeight - f.clientHeight;
  if(!a.xc) {
    var e = a.pb, d = d - (e.top + e.bottom)
  }
  a.wc || (f = fd(f), d -= f.top + f.bottom);
  c += 0 < d ? d : 0;
  a.Ib ? c -= Ne(a) : (a.xc || (d = a.pb, c += d.top + d.bottom), a.wc || (a = fd(b), c += a.top + a.bottom));
  return c
}
function Re(a, b) {
  a.ga != b && (a.ga = b, a.c().style.height = b + "px")
}
function Se(a) {
  a = a.c();
  a.style.height = "auto";
  var b = a.value.match(/\n/g) || [];
  a.rows = b.length + 1
}
r.Ia = function() {
  if(!this.Ma) {
    var a = n;
    this.Ma = j;
    var b = this.c(), c = this.ga;
    if(b.scrollHeight) {
      var d = n, f = n, e = Qe(this), h = b.offsetHeight, l = Oe(this), k = Pe(this);
      l && e < l ? (Re(this, l), d = j) : k && e > k ? (Re(this, k), b.style.overflowY = "", f = j) : h != e ? Re(this, e) : this.ga || (this.ga = e);
      !d && (!f && Me) && (a = j)
    }else {
      Se(this)
    }
    this.Ma = n;
    a && (a = this.c(), this.Ma || (this.Ma = j, b = n, a.value || (a.value = " ", b = j), (f = a.scrollHeight) ? (e = Qe(this), d = Oe(this), h = Pe(this), !(d && e <= d) && !(h && e >= h) && (h = this.pb, a.style.paddingBottom = h.bottom + 1 + "px", Qe(this) == e && (a.style.paddingBottom = h.bottom + f + "px", a.scrollTop = 0, f = Qe(this) - f, f >= d ? Re(this, f) : Re(this, d)), a.style.paddingBottom = h.bottom + "px")) : Se(this), b && (a.value = ""), this.Ma = n));
    c != this.ga && this.dispatchEvent("resize")
  }
};
r.Qd = function() {
  var a = this.c(), b = a.offsetHeight;
  a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
  b != this.ga && (this.ga = this.pd = b)
};
F && I(8);
function Te(a) {
  return"object" === typeof a && a && 0 === a.de ? a.content : String(a).replace(Ue, Ve)
}
var We = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function Ve(a) {
  return We[a]
}
var Ue = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Xe() {
  return'<div class="annotorious-popup top-left" style="position:absolute;z-index:1"><div class="annotorious-popup-buttons"><a class="annotorious-popup-button annotorious-popup-button-edit" title="Edit" href="javascript:void(0);">EDIT</a><a class="annotorious-popup-button annotorious-popup-button-delete" title="Delete" href="javascript:void(0);">DELETE</a></div><span class="annotorious-popup-text"></span></div>'
}
function Ye() {
  return'<div class="annotorious-editor" style="position:absolute;z-index:1"><form><textarea class="annotorious-editor-text" placeholder="Add a Comment..." tabindex="1"></textarea><div class="annotorious-editor-button-container"><a class="annotorious-editor-button annotorious-editor-button-cancel" href="javascript:void(0);" tabindex="3">Cancel</a><a class="annotorious-editor-button annotorious-editor-button-save" href="javascript:void(0);" tabindex="2">Save</a></div></form></div>'
}
;function Ze(a) {
  function b() {
    var a = d.Ca;
    a.c() && a.Ia()
  }
  this.element = Od(Ye);
  this.d = a;
  this.Cd = a.getItem();
  this.Ca = new Le("");
  this.Ad = M(".annotorious-editor-button-cancel", this.element)[0];
  this.Dc = M(".annotorious-editor-button-save", this.element)[0];
  var c;
  c = this.Dc;
  gb ? c = c.parentElement : (c = c.parentNode, c = zb(c) ? c : m);
  this.Bd = c;
  this.Ua = [];
  var d = this;
  O(this.Ad, "click", function(b) {
    b.preventDefault();
    a.stopSelection(d.Jc);
    d.close()
  });
  O(this.Dc, "click", function(b) {
    b.preventDefault();
    b = d.Xc();
    a.z(b);
    a.stopSelection();
    d.Jc ? a.fireEvent("onAnnotationUpdated", b) : a.fireEvent("onAnnotationCreated", b);
    d.close()
  });
  V(this.element, n);
  a.element.appendChild(this.element);
  this.Ca.hb(M(".annotorious-editor-text", this.element)[0]);
  var f = this.element;
  c = document.createElement("div");
  S(c, "position", "absolute");
  S(c, "top", "0px");
  S(c, "right", "0px");
  S(c, "width", "5px");
  S(c, "height", "100%");
  S(c, "cursor", "e-resize");
  f.appendChild(c);
  var e = fd(f), e = Zc(f).width - e.right - e.left;
  c = new gd(c);
  c.pc = new Kc(e, 0, 800, 0) || new Kc(NaN, NaN, NaN, NaN);
  c.Sc = function(a) {
    S(f, "width", a + "px");
    b && b()
  }
}
r = Ze.prototype;
r.dc = function(a) {
  var b = ub("div", "annotorious-editor-field");
  t(a) ? b.innerHTML = a : u(a) ? this.Ua.push({A:b, ic:a}) : zb(a) && b.appendChild(a);
  a = this.Bd;
  a.parentNode && a.parentNode.insertBefore(b, a)
};
r.open = function(a) {
  (this.sb = this.Jc = a) && this.Ca.la(String(a.text));
  V(this.element, j);
  this.Ca.c().focus();
  B(this.Ua, function(b) {
    var c = b.ic(a);
    t(c) ? b.A.innerHTML = c : zb(c) && (wb(b.A), b.A.appendChild(c))
  })
};
r.close = function() {
  V(this.element, n);
  this.Ca.la("")
};
r.setPosition = function(a) {
  Oc(this.element, a.x, a.y)
};
r.Xc = function() {
  var a;
  a = this.Ca.c().value;
  var b = new Qd;
  (new Rd).parse(new he(b, function(a) {
    return a
  }, i), a);
  a = b.toString();
  this.sb ? this.sb.text = a : this.sb = new Fd(this.Cd.src, a, this.d.qa().getShape());
  return this.sb
};
Ze.prototype.addField = Ze.prototype.dc;
Ze.prototype.getAnnotation = Ze.prototype.Xc;
function $e(a, b, c) {
  var d = this;
  c || (c = "Click and Drag to Annotate");
  this.element = Od(af, {sc:c});
  this.d = a;
  this.Gc = M(".annotorious-hint-msg", this.element)[0];
  this.Fc = M(".annotorious-hint-icon", this.element)[0];
  this.bc = function() {
    d.show()
  };
  this.ac = function() {
    bf(d)
  };
  this.Rb();
  bf(this);
  b.appendChild(this.element)
}
$e.prototype.Rb = function() {
  var a = this;
  this.Ic = O(this.Fc, "mouseover", function() {
    a.show();
    window.clearTimeout(a.Xb)
  });
  this.Hc = O(this.Fc, "mouseout", function() {
    bf(a)
  });
  this.d.k("onMouseOverItem", this.bc);
  this.d.k("onMouseOutOfItem", this.ac)
};
$e.prototype.tb = function() {
  P(this.Ic);
  P(this.Hc);
  this.d.Pa("onMouseOverItem", this.bc);
  this.d.Pa("onMouseOutOfItem", this.ac)
};
$e.prototype.show = function() {
  window.clearTimeout(this.Xb);
  U(this.Gc, 0.8);
  var a = this;
  this.Xb = window.setTimeout(function() {
    bf(a)
  }, 3E3)
};
function bf(a) {
  window.clearTimeout(a.Xb);
  U(a.Gc, 0)
}
$e.prototype.R = function() {
  this.tb();
  delete this.Ic;
  delete this.Hc;
  delete this.bc;
  delete this.ac;
  xb(this.element)
};
function cf(a) {
  this.element = Od(Xe);
  this.d = a;
  this.Dd = M(".annotorious-popup-text", this.element)[0];
  this.N = M(".annotorious-popup-buttons", this.element)[0];
  this.Vb = n;
  this.Ua = [];
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
    a.Uc(d.e)
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
  df && (O(this.element, "mouseover", function() {
    window.clearTimeout(d.Ub);
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
r = cf.prototype;
r.dc = function(a) {
  var b = ub("div", "annotorious-popup-field");
  t(a) ? b.innerHTML = a : u(a) ? this.Ua.push({A:b, ic:a}) : zb(a) && b.appendChild(a);
  this.element.appendChild(b)
};
r.startHideTimer = function() {
  this.Vb = n;
  if(!this.$a) {
    var a = this;
    this.$a = window.setTimeout(function() {
      a.d.fireEvent("beforePopupHide", a);
      a.Vb || (U(a.element, 0), S(a.element, "pointer-events", "none"), U(a.N, 0.9), delete a.$a)
    }, 150)
  }
};
r.clearHideTimer = function() {
  this.Vb = j;
  this.$a && (window.clearTimeout(this.$a), delete this.$a)
};
r.show = function(a, b) {
  this.clearHideTimer();
  b && this.setPosition(b);
  a && this.setAnnotation(a);
  this.Ub && window.clearTimeout(this.Ub);
  U(this.N, 0.9);
  if(df) {
    var c = this;
    this.Ub = window.setTimeout(function() {
      U(c.N, 0)
    }, 1E3)
  }
  U(this.element, 0.9);
  S(this.element, "pointer-events", "auto")
};
r.setPosition = function(a) {
  Oc(this.element, new J(a.x, a.y))
};
r.setAnnotation = function(a) {
  this.e = a;
  this.Dd.innerHTML = a.text ? a.text.replace(/\n/g, "<br/>") : '<span class="annotorious-popup-empty">No comment</span>';
  "editable" in a && a.editable == n ? V(this.N, n) : V(this.N, j);
  B(this.Ua, function(b) {
    var c = b.ic(a);
    t(c) ? b.A.innerHTML = c : zb(c) && (wb(b.A), b.A.appendChild(c))
  })
};
cf.prototype.addField = cf.prototype.dc;
function ef(a, b) {
  this.T = a;
  this.d = b;
  this.xa = [];
  this.V = [];
  this.F = this.T.getContext("2d");
  this.ma = j;
  this.ub = n;
  var c = this;
  O(this.T, ff, function(a) {
    if(c.ma) {
      var b = gf(c, a.offsetX, a.offsetY);
      b ? (c.ub = c.ub && b == c.e, c.e ? c.e != b && (c.ma = n, c.d.popup.startHideTimer()) : (c.e = b, hf(c), c.d.fireEvent("onMouseOverAnnotation", {na:c.e, mouseEvent:a}))) : !c.ub && c.e && (c.ma = n, c.d.popup.startHideTimer())
    }else {
      c.Ta = a
    }
  });
  b.k("onMouseOutOfItem", function() {
    delete c.e;
    c.ma = j
  });
  b.k("beforePopupHide", function() {
    if(!c.ma && c.Ta) {
      var a = c.e;
      c.e = gf(c, c.Ta.offsetX, c.Ta.offsetY);
      c.ma = j;
      a != c.e ? (hf(c), c.d.fireEvent("onMouseOutOfAnnotation", {na:a, mouseEvent:c.Ta}), c.d.fireEvent("onMouseOverAnnotation", {na:c.e, mouseEvent:c.Ta})) : c.e && c.d.popup.clearHideTimer()
    }else {
      hf(c)
    }
  })
}
r = ef.prototype;
r.z = function(a, b) {
  b && (b == this.e && delete this.e, C(this.xa, b), delete this.V[Ed(b.shapes[0])]);
  this.xa.push(a);
  var c = a.shapes[0];
  if("pixel" != c.units) {
    var d = this, c = Dd(c, function(a) {
      return d.d.kb(a)
    })
  }
  this.V[Ed(a.shapes[0])] = c;
  hf(this)
};
r.w = function(a) {
  a == this.e && delete this.e;
  C(this.xa, a);
  delete this.V[Ed(a.shapes[0])];
  hf(this)
};
r.J = function() {
  return Ga(this.xa)
};
r.o = function(a) {
  (this.e = a) ? this.ub = j : this.d.popup.startHideTimer();
  hf(this);
  this.ma = j
};
function gf(a, b, c) {
  a = a.lb(b, c);
  if(0 < a.length) {
    return a[0]
  }
}
r.lb = function(a, b) {
  var c = [], d = this;
  B(this.xa, function(f) {
    var e;
    e = d.V[Ed(f.shapes[0])];
    if("rect" == e.type) {
      e = a < e.geometry.x || b < e.geometry.y || a > e.geometry.x + e.geometry.width || b > e.geometry.y + e.geometry.height ? n : j
    }else {
      if("polygon" == e.type) {
        e = e.geometry.points;
        for(var h = n, l = e.length - 1, k = 0;k < e.length;k++) {
          e[k].y > b != e[l].y > b && a < (e[l].x - e[k].x) * (b - e[k].y) / (e[l].y - e[k].y) + e[k].x && (h = !h), l = k
        }
        e = h
      }else {
        e = n
      }
    }
    e && c.push(f)
  });
  z.sort.call(c, function(a, b) {
    var c = d.V[Ed(a.shapes[0])], l = d.V[Ed(b.shapes[0])];
    return Ad(c) - Ad(l)
  } || Ja);
  return c
};
function jf(a, b, c) {
  var d = Ea(a.d.ra(), function(a) {
    return a.getSupportedShapeType() == b.type
  });
  d ? d.drawShape(a.F, b, c) : console.log("WARNING unsupported shape type: " + b.type)
}
function hf(a) {
  a.F.clearRect(0, 0, a.T.width, a.T.height);
  B(a.xa, function(b) {
    jf(a, a.V[Ed(b.shapes[0])])
  });
  if(a.e) {
    var b = a.V[Ed(a.e.shapes[0])];
    jf(a, b, j);
    b = Bd(b).geometry;
    a.d.popup.show(a.e, new ud(b.x, b.y + b.height + 5))
  }
}
;var kf = "ontouchstart" in window, df = !kf, lf = kf ? "touchstart" : "mousedown", mf = kf ? "touchenter" : "mouseover", ff = kf ? "touchmove" : "mousemove", nf = kf ? "touchend" : "mouseup", of = kf ? "touchleave" : "mouseout";
function pf(a, b) {
  var c = n;
  return c = !a.offsetX || !a.offsetY && a.n.changedTouches ? {x:a.n.changedTouches[0].clientX - pd(b).left, y:a.n.changedTouches[0].clientY - pd(b).top} : {x:a.offsetX, y:a.offsetY}
}
;function qf() {
}
r = qf.prototype;
r.init = function(a, b) {
  this.T = a;
  this.d = b;
  this.F = a.getContext("2d");
  this.F.lineWidth = 1;
  this.Wb = n
};
r.Rb = function() {
  var a = this, b = this.T;
  this.Zb = O(this.T, ff, function(c) {
    c = pf(c, b);
    if(a.Wb) {
      a.H = {x:c.x, y:c.y};
      a.F.clearRect(0, 0, b.width, b.height);
      var c = a.H.x - a.j.x, d = a.H.y - a.j.y;
      a.F.strokeStyle = "#000000";
      a.F.strokeRect(a.j.x + 0.5, a.j.y + 0.5, c, d);
      a.F.strokeStyle = "#ffffff";
      0 < c && 0 < d ? a.F.strokeRect(a.j.x + 1.5, a.j.y + 1.5, c - 2, d - 2) : 0 < c && 0 > d ? a.F.strokeRect(a.j.x + 1.5, a.j.y - 0.5, c - 2, d + 2) : 0 > c && 0 > d ? a.F.strokeRect(a.j.x - 0.5, a.j.y - 0.5, c + 2, d + 2) : a.F.strokeRect(a.j.x - 0.5, a.j.y + 1.5, c + 2, d - 2)
    }
  });
  this.$b = O(b, nf, function(c) {
    var d = pf(c, b), f = a.getShape(), c = c.n ? c.n : c;
    a.Wb = n;
    f ? (a.tb(), a.d.fireEvent("onSelectionCompleted", {mouseEvent:c, shape:f, viewportBounds:a.getViewportBounds()})) : (a.d.fireEvent("onSelectionCanceled"), c = a.d.lb(d.x, d.y), 0 < c.length && a.d.o(c[0]))
  })
};
r.tb = function() {
  this.Zb && (P(this.Zb), delete this.Zb);
  this.$b && (P(this.$b), delete this.$b)
};
r.getName = ba("rect_drag");
r.getSupportedShapeType = ba("rect");
r.startSelection = function(a, b) {
  var c = {x:a, y:b};
  this.Wb = j;
  this.Rb(c);
  this.j = new ud(a, b);
  this.d.fireEvent("onSelectionStarted", {offsetX:a, offsetY:b});
  S(document.body, "-webkit-user-select", "none")
};
r.stopSelection = function() {
  this.tb();
  this.F.clearRect(0, 0, this.T.width, this.T.height);
  S(document.body, "-webkit-user-select", "auto");
  delete this.H
};
r.getShape = function() {
  if(this.H && 3 < Math.abs(this.H.x - this.j.x) && 3 < Math.abs(this.H.y - this.j.y)) {
    var a = this.getViewportBounds(), b = this.d.Pb({x:a.left, y:a.top}), a = this.d.Pb({x:a.right - 1, y:a.bottom - 1});
    return new zd("rect", new yd(b.x, b.y, a.x - b.x, a.y - b.y))
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
  if("rect" == b.type) {
    var d;
    c ? (c = "#fff000", d = 1.2) : (c = "#ffffff", d = 1);
    b = b.geometry;
    a.strokeStyle = "#000000";
    a.lineWidth = d;
    a.strokeRect(b.x + 0.5, b.y + 0.5, b.width + 1, b.height + 1);
    a.strokeStyle = c;
    a.strokeRect(b.x + 1.5, b.y + 1.5, b.width - 1, b.height - 1)
  }
};
function rf(a) {
  return'<canvas class="annotorious-item annotorious-opacity-fade" style="position:absolute; top:0px; left:0px; width:' + Te(a.width) + "px; height:" + Te(a.height) + 'px; z-index:0" width="' + Te(a.width) + '" height="' + Te(a.height) + '"></canvas>'
}
function af(a) {
  return'<div class="annotorious-hint" style="white-space:nowrap; position:absolute; top:0px; left:0px; pointer-events:none;"><div class="annotorious-hint-msg annotorious-opacity-fade">' + Te(a.sc) + '</div><div class="annotorious-hint-icon" style="pointer-events:auto"></div></div>'
}
;function sf(a, b) {
  function c(b, c) {
    S(d, "margin-" + b, c + "px");
    S(a, "margin-" + b, 0);
    S(a, "padding-" + b, 0)
  }
  this.ba = a;
  this.Kc = {padding:a.style.padding, margin:a.style.margin};
  this.v = new qd;
  this.cb = [];
  this.cc = j;
  this.element = ub("div", "annotorious-annotationlayer");
  S(this.element, "position", "relative");
  S(this.element, "display", "inline-block");
  var d = this.element, f = cd(a, "margin"), e = cd(a, "padding");
  (0 != f.top || 0 != e.top) && c("top", f.top + e.top);
  (0 != f.right || 0 != e.right) && c("right", f.right + e.right);
  (0 != f.bottom || 0 != e.bottom) && c("bottom", f.bottom + e.bottom);
  (0 != f.left || 0 != e.left) && c("left", f.left + e.left);
  f = Zc(a);
  Wc(this.element, f.width, f.height);
  yb(this.element, a);
  this.element.appendChild(a);
  this.da = Od(rf, {width:f.width, height:f.height});
  df && ib(this.da, "annotorious-item-unfocus");
  this.element.appendChild(this.da);
  this.g = Od(rf, {width:f.width, height:f.height});
  df && V(this.g, n);
  this.element.appendChild(this.g);
  this.popup = b ? b : new cf(this);
  f = new qf;
  f.init(this.g, this);
  this.cb.push(f);
  this.za = f;
  this.editor = new Ze(this);
  this.l = new ef(this.da, this);
  this.Wa = new $e(this, this.element);
  var h = this;
  df && (O(this.element, mf, function(a) {
    a = a.relatedTarget;
    if(!a || !Ab(h.element, a)) {
      h.v.fireEvent("onMouseOverItem"), mb(h.da, "annotorious-item-unfocus", "annotorious-item-focus")
    }
  }), O(this.element, of, function(a) {
    a = a.relatedTarget;
    if(!a || !Ab(h.element, a)) {
      h.v.fireEvent("onMouseOutOfItem"), mb(h.da, "annotorious-item-focus", "annotorious-item-unfocus")
    }
  }));
  var l = kf ? this.g : this.da;
  O(l, lf, function(a) {
    a = pf(a, l);
    h.l.o(i);
    h.cc ? (V(h.g, j), h.za.startSelection(a.x, a.y)) : (a = h.l.lb(a.x, a.y), 0 < a.length && h.l.o(a[0]))
  });
  this.v.k("onSelectionCompleted", function(a) {
    a = a.viewportBounds;
    h.editor.setPosition(new ud(a.left + h.ba.offsetLeft, a.bottom + 4 + h.ba.offsetTop));
    h.editor.open()
  });
  this.v.k("onSelectionCanceled", function() {
    df && V(h.g, n);
    h.za.stopSelection()
  })
}
r = sf.prototype;
r.ea = aa();
r.z = function(a, b) {
  this.l.z(a, b)
};
r.k = function(a, b) {
  this.v.k(a, b)
};
r.Mc = function(a) {
  a.init(this, this.g);
  this.cb.push(a)
};
r.R = function() {
  var a = this.ba;
  a.style.margin = this.Kc.margin;
  a.style.padding = this.Kc.padding;
  yb(a, this.element)
};
r.Uc = function(a) {
  this.l.w(a);
  var b = Ea(this.cb, function(b) {
    return b.getSupportedShapeType() == a.shapes[0].type
  });
  if(b) {
    V(this.g, j);
    this.l.o(i);
    var c = this.g.getContext("2d"), d = a.shapes[0], f = this, d = "pixel" == d.units ? d : Dd(d, function(a) {
      return f.kb(a)
    });
    b.drawShape(c, d)
  }
  b = Bd(a.shapes[0]).geometry;
  b = "pixel" == a.shapes[0].units ? new ud(b.x, b.y + b.height) : this.kb(new ud(b.x, b.y + b.height));
  this.editor.setPosition(new ud(b.x + this.ba.offsetLeft, b.y + 4 + this.ba.offsetTop));
  this.editor.open(a)
};
r.fireEvent = function(a, b) {
  return this.v.fireEvent(a, b)
};
r.kb = function(a) {
  var b = Xc(this.ba);
  return{x:a.x * b.width, y:a.y * b.height}
};
r.qa = q("za");
r.J = function() {
  return this.l.J()
};
r.lb = function(a, b) {
  return Ga(this.l.lb(a, b))
};
r.ra = q("cb");
r.getItem = function() {
  return{src:tf(this.ba)}
};
function tf(a) {
  var b = a.getAttribute("data-original");
  return b ? b : a.src
}
r.Y = function() {
  V(this.da, n)
};
r.O = function() {
  this.cc = n;
  this.Wa && (this.Wa.R(), delete this.Wa)
};
r.o = function(a) {
  this.l.o(a)
};
r.w = function(a) {
  this.l.w(a)
};
r.Pa = function(a, b) {
  this.v.Pa(a, b)
};
r.Wd = function(a) {
  (this.za = Ea(this.cb, function(b) {
    return b.getName() == a
  })) || console.log('WARNING: selector "' + a + '" not available')
};
r.wa = function() {
  V(this.da, j)
};
r.$ = function() {
  this.cc = j;
  this.Wa || (this.Wa = new $e(this, this.element))
};
r.stopSelection = function(a) {
  df && V(this.g, n);
  this.za.stopSelection();
  a && this.l.z(a)
};
r.Pb = function(a) {
  var b = Xc(this.ba);
  return{x:a.x / b.width, y:a.y / b.height}
};
sf.prototype.addSelector = sf.prototype.Mc;
sf.prototype.fireEvent = sf.prototype.fireEvent;
sf.prototype.setCurrentSelector = sf.prototype.Wd;
sf.prototype.toItemCoordinates = sf.prototype.Pb;
function uf() {
  Hd(this, function() {
    return M("img.annotatable", document)
  })
}
v(uf, Gd);
uf.prototype.jc = function(a) {
  return tf(a)
};
uf.prototype.rd = function(a) {
  return new sf(a)
};
uf.prototype.Ac = function(a) {
  return zb(a) ? "IMG" == a.tagName : n
};
function vf(a) {
  return'<div class="annotorious-opacity-fade" style="white-space:nowrap; position:absolute; pointer-events:none; top:80px; width:100%; text-align:center;"><div class="annotorious-ol-hint" style="width: 400px; margin:0px auto;">' + Te(a.sc) + "</dvi></div>"
}
;function wf(a, b) {
  this.ca = a;
  this.Xa = Zc(b.element);
  this.Q = b.popup;
  S(this.Q.element, "z-index", 99E3);
  this.Ya = [];
  this.Sb = new OpenLayers.Layer.Boxes("Annotorious");
  this.ca.addLayer(this.Sb);
  var c = this;
  this.ca.events.register("move", this.ca, function() {
    c.Aa && xf(c)
  });
  b.k("beforePopupHide", function() {
    c.Yb == c.Aa ? c.Q.clearHideTimer() : yf(c, c.Yb, c.Aa)
  })
}
function xf(a) {
  var b = a.Aa.Hb.div, c = Zc(b), d = Tc(b, a.ca.div), b = d.y, d = d.x, f = c.width, e = c.height, c = Zc(a.Q.element), b = {y:b + e + 5};
  d + c.width > a.Xa.width ? (mb(a.Q.element, "top-left", "top-right"), b.x = d + f - c.width) : (mb(a.Q.element, "top-right", "top-left"), b.x = d);
  0 > b.x && (b.x = 0);
  b.x + c.width > a.Xa.width && (b.x = a.Xa.width - c.width);
  b.y + c.height > a.Xa.height && (b.y = a.Xa.height - c.height);
  a.Q.setPosition(b)
}
function yf(a, b, c) {
  b ? (Tc(b.Hb.div, a.ca.div), za("height"), S(b.kd, "border-color", "#fff000"), a.Aa = b, a.Q.setAnnotation(b.na), xf(a), a.Q.show()) : delete a.Aa;
  c && S(c.kd, "border-color", "#fff")
}
wf.prototype.z = function(a) {
  var b = a.shapes[0].geometry, b = new OpenLayers.Marker.Box(new OpenLayers.Bounds(b.x, b.y, b.x + b.width, b.y + b.height));
  ib(b.div, "annotorious-ol-boxmarker-outer");
  S(b.div, "border", m);
  var c = ub("div", "annotorious-ol-boxmarker-inner");
  Wc(c, "100%", "100%");
  b.div.appendChild(c);
  var d = {na:a, Hb:b, kd:c}, f = this;
  O(c, "mouseover", function() {
    f.Aa || yf(f, d);
    f.Yb = d
  });
  O(c, "mouseout", function() {
    delete f.Yb;
    f.Q.startHideTimer()
  });
  this.Ya.push(d);
  z.sort.call(this.Ya, function(a, b) {
    return Ad(b.na.shapes[0]) - Ad(a.na.shapes[0])
  } || Ja);
  var e = 1E4;
  B(this.Ya, function(a) {
    S(a.Hb.div, "z-index", e);
    e++
  });
  this.Sb.addMarker(b)
};
wf.prototype.w = function(a) {
  var b = Ea(this.Ya, function(b) {
    return b.na == a
  });
  b && (C(this.Ya, b), this.Sb.removeMarker(b.Hb))
};
wf.prototype.J = aa();
wf.prototype.o = function(a) {
  a || this.Q.startHideTimer()
};
function zf(a) {
  this.ca = a;
  this.U = a.div;
  var b = parseInt(T(this.U, "width"), 10), c = parseInt(T(this.U, "height"), 10);
  this.v = new qd;
  this.element = ub("div", "annotorious-annotationlayer");
  S(this.element, "position", "relative");
  Wc(this.element, b, c);
  yb(this.element, this.U);
  this.element.appendChild(this.U);
  this.ab = Od(vf, {sc:"Click and Drag"});
  S(this.ab, "z-index", 9998);
  U(this.ab, 0);
  this.element.appendChild(this.ab);
  this.popup = new cf(this);
  this.l = new wf(a, this);
  this.g = Od(rf, {width:b, height:c});
  V(this.g, n);
  S(this.g, "z-index", 9999);
  this.element.appendChild(this.g);
  this.bb = new qf;
  this.bb.init(this.g, this);
  this.vb = i;
  this.editor = new Ze(this);
  S(this.editor.element, "z-index", 1E4);
  var d = this;
  O(this.element, "mouseover", function(a) {
    a = a.relatedTarget;
    (!a || !Ab(d.element, a)) && d.v.fireEvent("onMouseOverItem")
  });
  O(this.element, "mouseout", function(a) {
    a = a.relatedTarget;
    (!a || !Ab(d.element, a)) && d.v.fireEvent("onMouseOutOfItem")
  });
  O(this.g, "mousedown", function(a) {
    var b = Uc(d.U);
    d.bb.startSelection(a.clientX - b.x, a.clientY - b.y)
  });
  this.v.k("onSelectionCompleted", function(a) {
    S(d.g, "pointer-events", "none");
    a = a.viewportBounds;
    d.editor.setPosition(new ud(a.left + d.U.offsetLeft, a.bottom + 4 + d.U.offsetTop));
    d.editor.open()
  });
  this.v.k("onSelectionCanceled", function() {
    d.stopSelection()
  })
}
r = zf.prototype;
r.$ = aa();
r.O = aa();
r.ea = function(a) {
  S(this.g, "pointer-events", "auto");
  var b = this;
  V(this.g, j);
  U(this.ab, 0.8);
  window.setTimeout(function() {
    U(b.ab, 0)
  }, 2E3);
  a && (this.vb = a)
};
r.Uc = function(a) {
  this.l.w(a);
  var b = this.bb, c = this;
  if(b) {
    V(this.g, j);
    this.l.o(i);
    var d = this.g.getContext("2d"), f = Dd(a.shapes[0], function(a) {
      return c.kb(a)
    });
    b.drawShape(d, f);
    b = Bd(f).geometry;
    this.editor.setPosition(new ud(b.x + this.U.offsetLeft, b.y + b.height + 4 + this.U.offsetTop));
    this.editor.open(a)
  }
};
r.z = function(a) {
  this.l.z(a)
};
r.k = function(a, b) {
  this.v.k(a, b)
};
r.Mc = aa();
r.fireEvent = function(a, b) {
  return this.v.fireEvent(a, b)
};
r.kb = function(a) {
  a = this.ca.getViewPortPxFromLonLat(new OpenLayers.LonLat(a.x, a.y));
  return{x:a.x, y:a.y}
};
r.qa = q("bb");
r.J = aa();
r.ra = aa();
r.getItem = function() {
  return{src:"map://openlayers/something"}
};
r.o = function(a) {
  this.l.o(a)
};
r.w = function(a) {
  this.l.w(a)
};
r.Pa = function(a, b) {
  this.v.Pa(a, b)
};
r.qb = aa();
r.stopSelection = function(a) {
  V(this.g, n);
  this.vb && (this.vb(), delete this.vb);
  this.bb.stopSelection();
  a && this.l.z(a)
};
r.Pb = function(a) {
  a = this.ca.getLonLatFromPixel(new OpenLayers.Pixel(a.x, a.y));
  return{x:a.lon, y:a.lat}
};
function Af() {
  Hd(this)
}
v(Af, Gd);
Af.prototype.jc = ba("map://openlayers/something");
Af.prototype.rd = function(a) {
  return new zf(a)
};
Af.prototype.Ac = function(a) {
  return a instanceof OpenLayers.Map
};
function Z() {
  function a() {
    B(b.t, function(a) {
      a.init()
    });
    B(b.Za, function(a) {
      a.initPlugin && a.initPlugin(b);
      B(b.t, function(b) {
        b.wb(a)
      })
    })
  }
  this.t = [new uf];
  window.OpenLayers && this.t.push(new Af);
  this.Za = [];
  var b = this;
  window.addEventListener ? window.addEventListener("load", a, n) : window.attachEvent && window.attachEvent("onload", a)
}
function $(a, b) {
  return Ea(a.t, function(a) {
    return Nd(a, b)
  })
}
r = Z.prototype;
r.ea = function(a, b) {
  var c = i, d = i;
  t(a) ? (c = a, d = b) : u(a) && (d = a);
  if(c) {
    var f = $(this, c);
    f && f.ea(c, d)
  }else {
    B(this.t, function(a) {
      a.ea(d)
    })
  }
};
r.z = function(a, b) {
  var c = $(this, a.src);
  c && c.z(a, b)
};
r.k = function(a, b) {
  B(this.t, function(c) {
    c.k(a, b)
  })
};
r.wb = function(a, b) {
  try {
    var c = new window.annotorious.plugin[a](b);
    "complete" == document.readyState ? (c.initPlugin && c.initPlugin(this), B(this.t, function(a) {
      a.wb(c)
    })) : this.Za.push(c)
  }catch(d) {
    console.log("Could not load plugin: " + a)
  }
};
r.R = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.R(a)
  }else {
    B(this.t, function(a) {
      a.R()
    })
  }
};
r.qa = function(a) {
  var b = $(this, a);
  if(b) {
    return b.qa(a)
  }
};
r.J = function(a) {
  if(a) {
    var b = $(this, a);
    return b ? b.J(a) : []
  }
  var c = [];
  B(this.t, function(a) {
    Ha(c, a.J())
  });
  return c
};
r.ra = function(a) {
  var b = $(this, a);
  return b ? b.ra(a) : []
};
r.Y = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.Y(a)
  }else {
    B(this.t, function(a) {
      a.Y()
    })
  }
};
r.O = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.O(a)
  }else {
    B(this.t, function(a) {
      a.O()
    })
  }
};
r.o = function(a) {
  if(a) {
    var b = $(this, a.src);
    b && b.o(a)
  }else {
    B(this.t, function(a) {
      a.o()
    })
  }
};
r.qc = function(a) {
  var b = Ea(this.t, function(b) {
    return b.Ac(a)
  });
  b ? b.qc(a) : g("Error: Annotorious does not support this media type in the current version or build configuration.")
};
r.Mb = function(a) {
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
  B(this.t, function(a) {
    a.R();
    a.init()
  })
};
r.qb = function(a, b) {
  var c = $(this, a);
  c && c.qb(a, b)
};
r.Xd = function(a) {
  a ? this.$(i) : this.O(i)
};
r.wa = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.wa(a)
  }else {
    B(this.t, function(a) {
      a.wa()
    })
  }
};
r.$ = function(a) {
  if(a) {
    var b = $(this, a);
    b && b.$(a)
  }else {
    B(this.t, function(a) {
      a.$()
    })
  }
};
window.anno = new Z;
Z.prototype.activateSelector = Z.prototype.ea;
Z.prototype.addAnnotation = Z.prototype.z;
Z.prototype.addHandler = Z.prototype.k;
Z.prototype.addPlugin = Z.prototype.wb;
Z.prototype.destroy = Z.prototype.R;
Z.prototype.getActiveSelector = Z.prototype.qa;
Z.prototype.getAnnotations = Z.prototype.J;
Z.prototype.getAvailableSelectors = Z.prototype.ra;
Z.prototype.hideAnnotations = Z.prototype.Y;
Z.prototype.hideSelectionWidget = Z.prototype.O;
Z.prototype.highlightAnnotation = Z.prototype.o;
Z.prototype.makeAnnotatable = Z.prototype.qc;
Z.prototype.removeAll = Z.prototype.Mb;
Z.prototype.removeAnnotation = Z.prototype.w;
Z.prototype.reset = Z.prototype.reset;
Z.prototype.setActiveSelector = Z.prototype.qb;
Z.prototype.showAnnotations = Z.prototype.wa;
Z.prototype.showSelectionWidget = Z.prototype.$;
window.annotorious || (window.annotorious = {});
window.annotorious.plugin || (window.annotorious.plugin = {});
Z.prototype.setSelectionEnabled = Z.prototype.Xd;

