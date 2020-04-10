const i =  require("crypto-js")

var hh={ inflate:function (t){

        var v, m, _, g, b, y, x, w, k, T, C, S, O, E, A, B, D, M = 32768, H = 0, I = 1, L = 2, N = 9, P = 6, R = null, $ = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], V = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], F = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], W = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

        // 1  p
        function p() {
                v || (v = []),
                m = 0,
                y = 0,
                x = 0,
                w = -1,
                k = !1,
                T = C = 0,
                S = null
            }





         //4 s

         function s() {
                return B.length === D ? -1 : 255 & B[D++]
            }
           //3 a
          function a(t) {
                for (; x < t; )
                    y |= s() << x,  // 4 s
                    x += 8
            }

          // 5 o
          function o(t) {
                return y & $[t]
            }

          //6 r
          function r(t) {
                y >>= t,
                x -= t
            }
           //2 f
         function f(t, e, n) {
                var i, s;
                for (i = 0; i < n; ) {
                    if (k && w === -1)
                        return i;
                    if (T > 0) {
                        if (w !== H)
                            for (; T > 0 && i < n; )
                                T--,
                                C &= M - 1,
                                m &= M - 1,
                                t[e + i++] = v[m++] = v[C++];
                        else {
                            for (; T > 0 && i < n; )
                                T--,
                                m &= M - 1,
                                a(8),
                                t[e + i++] = v[m++] = o(8),
                                r(8);
                            0 === T && (w = -1)
                        }
                        if (i === n)
                            return i
                    }
                    if (w === -1) {
                        if (k)
                            break;
                        a(1),     //3 a
                        0 !== o(1) && (k = !0),   // 4 o
                        r(1),
                        a(2),                     //5  r
                        w = o(2),
                        r(2),
                        S = null,
                        T = 0
                    }
                    switch (w) {
                    case H:
                        s = c(t, e + i, n - i);  //7 c
                        break;
                    case I:
                        s = S ? l(t, e + i, n - i) : d(t, e + i, n - i);
                        break;
                    case L:
                        s = S ? l(t, e + i, n - i) : u(t, e + i, n - i);  //8  u
                        break;
                    default:
                        s = -1
                    }
                    if (s === -1)
                        return k ? 0 : -1;
                    i += s
                }
                return i
            }

          //  c
         function c(t, e, n) {
                var i;
                if (i = 7 & x,
                r(i),
                a(16),
                i = o(16),
                r(16),
                a(16),
                i !== (65535 & ~y))
                    return -1;
                for (r(16),
                T = i,
                i = 0; T > 0 && i < n; )
                    T--,
                    m &= M - 1,
                    a(8),
                    t[e + i++] = v[m++] = o(8),
                    r(8);
                return 0 === T && (w = -1),
                i
            }
          //8 u
         function u(t, e, n) {
                var s, c, d, u, p, f, h, v, m, _ = [];
                for (s = 0; s < 316; s++)
                    _[s] = 0;
                if (a(5),
                h = 257 + o(5),
                r(5),
                a(5),
                v = 1 + o(5),
                r(5),
                a(4),
                f = 4 + o(4),
                r(4),
                h > 286 || v > 30)
                    return -1;
                for (c = 0; c < f; c++)
                    a(3),
                    _[U[c]] = o(3),
                    r(3);
                for (null; c < 19; c++)
                    _[U[c]] = 0;
                if (E = 7,
                m = new i(_,19,19,null,null,E),   //i 9
                0 !== m.status)
                    return -1;
                for (S = m.root,
                E = m.m,
                u = h + v,
                s = d = 0; s < u; )
                    if (a(E),
                    p = S.list[o(E)],
                    c = p.b,
                    r(c),
                    c = p.n,
                    c < 16)
                        _[s++] = d = c;
                    else if (16 === c) {
                        if (a(2),
                        c = 3 + o(2),
                        r(2),
                        s + c > u)
                            return -1;
                        for (; c-- > 0; )
                            _[s++] = d
                    } else if (17 === c) {
                        if (a(3),
                        c = 3 + o(3),
                        r(3),
                        s + c > u)
                            return -1;
                        for (; c-- > 0; )
                            _[s++] = 0;
                        d = 0
                    } else {
                        if (a(7),
                        c = 11 + o(7),
                        r(7),
                        s + c > u)
                            return -1;
                        for (; c-- > 0; )
                            _[s++] = 0;
                        d = 0
                    }
                if (E = N,
                m = new i(_,h,257,j,V,E),
                0 === E && (m.status = 1),
                0 !== m.status && 1 !== m.status)
                    return -1;
                for (S = m.root,
                E = m.m,
                s = 0; s < v; s++)
                    _[s] = _[s + h];
                return A = P,
                m = new i(_,v,0,F,W,A),
                O = m.root,
                A = m.m,
                0 === A && h > 257 ? -1 : 0 !== m.status ? -1 : l(t, e, n)  //  11  l
            }


         //9  i

         function i(t, i, s, a, o, r) {
                 //console.log('this对象是',this);
                this.BMAX = 16,
                this.N_MAX = 288,
                this.status = 0,
                this.root = null,
                this.m = 0;    //10  n
                var l, c, d, u, p, f, h, v, m, _, g, b, y, x, w, k, T, C = [], S = [], O = new n, E = [], A = [], B = [];
                for (T = this.root = null,
                f = 0; f < this.BMAX + 1; f++)
                    C[f] = 0;
                for (f = 0; f < this.BMAX + 1; f++)
                    S[f] = 0;
                for (f = 0; f < this.BMAX; f++)
                    E[f] = null;
                for (f = 0; f < this.N_MAX; f++)
                    A[f] = 0;
                for (f = 0; f < this.BMAX + 1; f++)
                    B[f] = 0;
                c = i > 256 ? t[256] : this.BMAX,
                m = t,
                _ = 0,
                f = i;
                do
                    C[m[_]]++,
                    _++;
                while (--f > 0);if (C[0] === i)
                    return this.root = null,
                    this.m = 0,
                    void (this.status = 0);
                for (h = 1; h <= this.BMAX && 0 === C[h]; h++)
                    ;
                for (v = h,
                r < h && (r = h),
                f = this.BMAX; 0 !== f && 0 === C[f]; f--)
                    ;
                for (u = f,
                r > f && (r = f),
                x = 1 << h; h < f; h++,
                x <<= 1)
                    if ((x -= C[h]) < 0)
                        return this.status = 2,
                        void (this.m = r);
                if ((x -= C[f]) < 0)
                    return this.status = 2,
                    void (this.m = r);
                for (C[f] += x,
                B[1] = h = 0,
                m = C,
                _ = 1,
                y = 2; --f > 0; )
                    B[y++] = h += m[_++];
                m = t,
                _ = 0,
                f = 0;
                do
                    0 !== (h = m[_++]) && (A[B[h]++] = f);
                while (++f < i);for (i = B[u],
                B[0] = f = 0,
                m = A,
                _ = 0,
                p = -1,
                b = S[0] = 0,
                g = null,
                w = 0,
                null; v <= u; v++)
                    for (l = C[v]; l-- > 0; ) {
                        for (; v > b + S[1 + p]; ) {
                            if (b += S[1 + p],
                            p++,
                            w = (w = u - b) > r ? r : w,
                            (d = 1 << (h = v - b)) > l + 1)
                                for (d -= l + 1,
                                y = v; ++h < w && !((d <<= 1) <= C[++y]); )
                                    d -= C[y];
                            for (b + h > c && b < c && (h = c - b),
                            w = 1 << h,
                            S[1 + p] = h,
                            g = [],
                            k = 0; k < w; k++)
                                g[k] = new n;
                            T = T ? T.next = new e : this.root = new e,
                            T.next = null,
                            T.list = g,
                            E[p] = g,
                            p > 0 && (B[p] = f,
                            O.b = S[p],
                            O.e = 16 + h,
                            O.t = g,
                            h = (f & (1 << b) - 1) >> b - S[p],
                            E[p - 1][h].e = O.e,
                            E[p - 1][h].b = O.b,
                            E[p - 1][h].n = O.n,
                            E[p - 1][h].t = O.t)
                        }
                        for (O.b = v - b,
                        _ >= i ? O.e = 99 : m[_] < s ? (O.e = m[_] < 256 ? 16 : 15,
                        O.n = m[_++]) : (O.e = o[m[_] - s],
                        O.n = a[m[_++] - s]),
                        d = 1 << v - b,
                        h = f >> b; h < w; h += d)
                            g[h].e = O.e,
                            g[h].b = O.b,
                            g[h].n = O.n,
                            g[h].t = O.t;
                        for (h = 1 << v - 1; 0 !== (f & h); h >>= 1)
                            f ^= h;
                        for (f ^= h; (f & (1 << b) - 1) !== B[p]; )
                            b -= S[p],
                            p--
                    }
                this.m = S[1],
                this.status = 0 !== x && 1 !== u ? 1 : 0
            }
          //10 n
         function n() {
                this.e = 0,
                this.b = 0,
                this.n = 0,
                this.t = null
            }

            //11 l
            function l(t, e, n) {
                var i, s, l;
                if (0 === n)
                    return 0;
                for (l = 0; ; ) {
                    for (a(E),
                    s = S.list[o(E)],
                    i = s.e; i > 16; ) {
                        if (99 === i)
                            return -1;
                        r(s.b),
                        i -= 16,
                        a(i),
                        s = s.t[o(i)],
                        i = s.e
                    }
                    if (r(s.b),
                    16 !== i) {
                        if (15 === i)
                            break;
                        for (a(i),
                        T = s.n + o(i),
                        r(i),
                        a(A),
                        s = O.list[o(A)],
                        i = s.e; i > 16; ) {
                            if (99 === i)
                                return -1;
                            r(s.b),
                            i -= 16,
                            a(i),
                            s = s.t[o(i)],
                            i = s.e
                        }
                        for (r(s.b),
                        a(i),
                        C = m - s.n - o(i),
                        r(i); T > 0 && l < n; )
                            T--,
                            C &= M - 1,
                            m &= M - 1,
                            t[e + l++] = v[m++] = v[C++];
                        if (l === n)
                            return n
                    } else if (m &= M - 1,
                    t[e + l++] = v[m++] = s.n,
                    l === n)
                        return n
                }
                return w = -1,
                l
            }
          // 12 e
         function e() {
                this.next = null,
                this.list = null
            }
        function main(){
        var e, n = [];
                p(),
                B = t,
                D = 0;
                do
                    e = f(n, n.length, 1024); //2

                while (e > 0);return B = null,
                n
      }


  return main()
}}
function get_zip_i(t){

    
    var t = t
	var dic={
            getKey: function() {
                var t = "OPyZ03AgyxoJT1xM";
                return i.enc.Utf8.parse(t)
            },
            encryptASE: function(t) {
                var e = this.getKey()
                  , n = i.AES.encrypt(t, e, {
                    mode: i.mode.ECB,
                    padding: i.pad.Pkcs7
                });
                return n.ciphertext.toString()
            },
            decryptASE: function(t) {
                var e = i.enc.Hex.parse(t)
                  , n = i.enc.Base64.stringify(e)
                  , s = this.getKey()
                  , a = i.AES.decrypt(n, s, {
                    mode: i.mode.ECB,
                    padding: i.pad.Pkcs7
                });
                return a.toString(i.enc.Utf8)
            },
            decryptASEUnzip: function(t) {
                var e = i.enc.Hex.parse(t)
                  , n = i.enc.Base64.stringify(e)
                  , a = this.getKey()
                  , o = i.AES.decrypt(n, a, {
                    mode: i.mode.ECB,
                    padding: i.pad.Pkcs7
                })
                  , r = this.parseHexString(o.toString());
                  
                  return r
                },
            parseHexString: function(t) {
                for (var e = []; t.length >= 2; )
                    e.push(parseInt(t.substring(0, 2), 16)),
                    t = t.substring(2, t.length);
                return e
                }
}

d=dic["decryptASEUnzip"](t)
return d
}


function main1(t){

     var v = 31
              , m = 139
              , _ = {
                deflate: 8
            }
              , g = {
                FTEXT: 1,
                FHCRC: 2,
                FEXTRA: 4,
                FNAME: 8,
                FCOMMENT: 16
            }
              , b = {
                fat: 0,
                amiga: 1,
                vmz: 2,
                unix: 3,
                "vm/cms": 4,
                atari: 5,
                hpfs: 6,
                macintosh: 7,
                "z-system": 8,
                cplm: 9,
                "tops-20": 10,
                ntfs: 11,
                qdos: 12,
                acorn: 13,
                vfat: 14,
                vms: 15,
                beos: 16,
                tandem: 17,
                theos: 18
            }
              , y = "unix"
              , x = 6;

      //1
      function o(t) {
                return t.shift()
            }
      //2
      function l(t) {
                var e = r(t)   //3
                  , n = r(t);
                return n > 32768 ? (n -= 32768,
                (n << 16 | e) + 32768 * Math.pow(2, 16)) : n << 16 | e
            }
      //3
      function r(t) {
                return t.shift() | t.shift() << 8
            }

      //4
      function d(t, e) {
                var n, i = [];
                for (n = 0; n < e; n += 1)
                    i.push(t.shift());
                return i
            }

      //5
      function c(t) {
                for (var e = []; 0 !== t[0]; )
                    e.push(String.fromCharCode(t.shift()));
                return t.shift(),
                e.join("")
            }

      //6
     function uzip(t, e) {
        var n, i, s, a, u, p, y, x, w, k = Array.prototype.slice.call(t, 0);
                if (o(k) !== v || o(k) !== m)    //1  o
                    throw "Not a GZIP file";
                if (n = o(k),
                n = Object.keys(_).some(function(t) {
                    return i = t,
                    _[t] === n
                }),
                !n)
                    throw "Unsupported compression method";
                if (s = o(k),
                a = l(k),  //2  l
                u = o(k),
                n = o(k),
                Object.keys(b).some(function(t) {
                    if (b[t] === n)
                        return p = t,
                        !0
                }),
                s & g.FEXTRA && (n = r(k),    //3   r
                d(k, n)),      //4  d
                s & g.FNAME && c(k),
                s & g.FCOMMENT && c(k), //5  c
                s & g.FHCRC && r(k),
                "deflate" === i && (w = hh.inflate(k.splice(0, k.length - 8))),
                s & g.FTEXT && (w = Array.prototype.map.call(w, function(t) {
                    return String.fromCharCode(t)
                }).join("")),

                y = l(k),
                y !== parseInt(ff(w), 16))
                    throw "Checksum does not match";
                if (x = l(k),
                x !== w.length)
                    throw "Size of decompressed file not correct";
                return w
            }


     //console.log('start main1 run ...')
     get_zi = get_zip_i(t)
     return uzip(get_zi)
 }

//console.log('y=',main1())

function ff(t){
    function main(t, e) {
                //console.log('s(t)=',t);
                var t = "string" == typeof t ? n(t) : t  //1 n
                  , a = e ? i(t) : s(t);                      //1  s
                return (a >>> 0).toString(16)
            }
    //e
    function e() {
                var t, e, n;
                for (e = 0; e < 256; e += 1) {
                    for (t = e,
                    n = 0; n < 8; n += 1)
                        1 & t ? t = o ^ t >>> 1 : t >>>= 1;
                    a[e] = t >>> 0
                }
            }
    //1  s
    function i(t) {
                var e, n, i, s, a = -1;
                for (e = 0,
                i = t.length; e < i; e += 1) {
                    for (s = 255 & (a ^ t[e]),
                    n = 0; n < 8; n += 1)
                        1 === (1 & s) ? s = s >>> 1 ^ o : s >>>= 1;
                    a = a >>> 8 ^ s
                }
                return a ^ -1
            }
    function s(t, e) {
                var n, i, o;
                //console.log('s.crc=',s.crc);

                if ("undefined" != typeof s.crc && e && t || (s.crc = -1,
                t)) {
                    for (n = s.crc,
                    i = 0,
                    o = t.length; i < o; i += 1)
                        n = n >>> 8 ^ a[255 & (n ^ t[i])];
                    return s.crc = n,
                    n ^ -1
                }
            }
    function n(t) {
                return Array.prototype.map.call(t, function(t) {
                    return t.charCodeAt(0)
                })
            }

     var a = []
              , o = 3988292384;
    e();


    return main(t)
}


function get_result(t){
    var w = main1(t),

    l=w.map(function(t) {
                    return String.fromCharCode(t)
                }).join(""),

	result=i.enc.Base64.parse(l).toString(i.enc.Utf8);

	return result
}

//console.log(get_result(t))

const express = require('express')
var bodyParser = require('body-parser')
const  app = express()
app.use(bodyParser.urlencoded({txtended: false}))
app.use(bodyParser.json())


app.post('/',function(req,res){
	
	var data1 = get_result(req.body['data'])
	res.send(data1)
	})

server=app.listen(8888,'0.0.0.0')