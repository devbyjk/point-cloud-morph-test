/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {})
}(this, (function(t) {
    "use strict";
    const e = "128"
      , n = 100
      , i = 300
      , r = 301
      , s = 302
      , a = 303
      , o = 304
      , l = 306
      , c = 307
      , h = 1e3
      , u = 1001
      , d = 1002
      , p = 1003
      , m = 1004
      , f = 1005
      , g = 1006
      , v = 1007
      , y = 1008
      , x = 1009
      , _ = 1012
      , w = 1014
      , b = 1015
      , M = 1016
      , S = 1020
      , T = 1022
      , E = 1023
      , A = 1026
      , L = 1027
      , R = 33776
      , C = 33777
      , P = 33778
      , D = 33779
      , I = 35840
      , N = 35841
      , B = 35842
      , z = 35843
      , F = 37492
      , O = 37496
      , H = 2300
      , G = 2301
      , U = 2302
      , k = 2400
      , V = 2401
      , W = 2402
      , j = 2500
      , q = 2501
      , X = 3e3
      , Y = 3001
      , Z = 3007
      , J = 3002
      , Q = 3004
      , K = 3005
      , $ = 3006
      , tt = 7680
      , et = 35044
      , nt = 35048
      , it = "300 es";
    class rt {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e)
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners)
                return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners)
                return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners)
                return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for (let e = 0, i = n.length; e < i; e++)
                    n[e].call(this, t);
                t.target = null
            }
        }
    }
    const st = [];
    for (let t = 0; t < 256; t++)
        st[t] = (t < 16 ? "0" : "") + t.toString(16);
    let at = 1234567;
    const ot = Math.PI / 180
      , lt = 180 / Math.PI;
    function ct() {
        const t = 4294967295 * Math.random() | 0
          , e = 4294967295 * Math.random() | 0
          , n = 4294967295 * Math.random() | 0
          , i = 4294967295 * Math.random() | 0;
        return (st[255 & t] + st[t >> 8 & 255] + st[t >> 16 & 255] + st[t >> 24 & 255] + "-" + st[255 & e] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[63 & n | 128] + st[n >> 8 & 255] + "-" + st[n >> 16 & 255] + st[n >> 24 & 255] + st[255 & i] + st[i >> 8 & 255] + st[i >> 16 & 255] + st[i >> 24 & 255]).toUpperCase()
    }
    function ht(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }
    function ut(t, e) {
        return (t % e + e) % e
    }
    function dt(t, e, n) {
        return (1 - n) * t + n * e
    }
    function pt(t) {
        return 0 == (t & t - 1) && 0 !== t
    }
    function mt(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
    }
    function ft(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
    }
    var gt = Object.freeze({
        __proto__: null,
        DEG2RAD: ot,
        RAD2DEG: lt,
        generateUUID: ct,
        clamp: ht,
        euclideanModulo: ut,
        mapLinear: function(t, e, n, i, r) {
            return i + (t - e) * (r - i) / (n - e)
        },
        inverseLerp: function(t, e, n) {
            return t !== e ? (n - t) / (e - t) : 0
        },
        lerp: dt,
        damp: function(t, e, n, i) {
            return dt(t, e, 1 - Math.exp(-n * i))
        },
        pingpong: function(t, e=1) {
            return e - Math.abs(ut(t, 2 * e) - e)
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        seededRandom: function(t) {
            return void 0 !== t && (at = t % 2147483647),
            at = 16807 * at % 2147483647,
            (at - 1) / 2147483646
        },
        degToRad: function(t) {
            return t * ot
        },
        radToDeg: function(t) {
            return t * lt
        },
        isPowerOfTwo: pt,
        ceilPowerOfTwo: mt,
        floorPowerOfTwo: ft,
        setQuaternionFromProperEuler: function(t, e, n, i, r) {
            const s = Math.cos
              , a = Math.sin
              , o = s(n / 2)
              , l = a(n / 2)
              , c = s((e + i) / 2)
              , h = a((e + i) / 2)
              , u = s((e - i) / 2)
              , d = a((e - i) / 2)
              , p = s((i - e) / 2)
              , m = a((i - e) / 2);
            switch (r) {
            case "XYX":
                t.set(o * h, l * u, l * d, o * c);
                break;
            case "YZY":
                t.set(l * d, o * h, l * u, o * c);
                break;
            case "ZXZ":
                t.set(l * u, l * d, o * h, o * c);
                break;
            case "XZX":
                t.set(o * h, l * m, l * p, o * c);
                break;
            case "YXY":
                t.set(l * p, o * h, l * m, o * c);
                break;
            case "ZYZ":
                t.set(l * m, l * p, o * h, o * c);
                break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
            }
        }
    });
    class vt {
        constructor(t=0, e=0) {
            this.x = t,
            this.y = e
        }
        get width() {
            return this.x
        }
        set width(t) {
            this.x = t
        }
        get height() {
            return this.y
        }
        set height(t) {
            this.y = t
        }
        set(t, e) {
            return this.x = t,
            this.y = e,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        }
        multiply(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this
        }
        divide(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        applyMatrix3(t) {
            const e = this.x
              , n = this.y
              , i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6],
            this.y = i[1] * e + i[4] * n + i[7],
            this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y
        }
        cross(t) {
            return this.x * t.y - this.y * t.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
              , n = this.y - t.y;
            return e * e + n * n
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this
        }
        rotateAround(t, e) {
            const n = Math.cos(e)
              , i = Math.sin(e)
              , r = this.x - t.x
              , s = this.y - t.y;
            return this.x = r * n - s * i + t.x,
            this.y = r * i + s * n + t.y,
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this
        }
    }
    vt.prototype.isVector2 = !0;
    class yt {
        constructor() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t,
            c[1] = i,
            c[2] = a,
            c[3] = e,
            c[4] = r,
            c[5] = o,
            c[6] = n,
            c[7] = s,
            c[8] = l,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        }
        copy(t) {
            const e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        }
        multiply(t) {
            return this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
              , i = e.elements
              , r = this.elements
              , s = n[0]
              , a = n[3]
              , o = n[6]
              , l = n[1]
              , c = n[4]
              , h = n[7]
              , u = n[2]
              , d = n[5]
              , p = n[8]
              , m = i[0]
              , f = i[3]
              , g = i[6]
              , v = i[1]
              , y = i[4]
              , x = i[7]
              , _ = i[2]
              , w = i[5]
              , b = i[8];
            return r[0] = s * m + a * v + o * _,
            r[3] = s * f + a * y + o * w,
            r[6] = s * g + a * x + o * b,
            r[1] = l * m + c * v + h * _,
            r[4] = l * f + c * y + h * w,
            r[7] = l * g + c * x + h * b,
            r[2] = u * m + d * v + p * _,
            r[5] = u * f + d * y + p * w,
            r[8] = u * g + d * x + p * b,
            this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        }
        determinant() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
        }
        invert() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8]
              , h = c * s - a * l
              , u = a * o - c * r
              , d = l * r - s * o
              , p = e * h + n * u + i * d;
            if (0 === p)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = h * m,
            t[1] = (i * l - c * n) * m,
            t[2] = (a * n - i * s) * m,
            t[3] = u * m,
            t[4] = (c * e - i * o) * m,
            t[5] = (i * r - a * e) * m,
            t[6] = d * m,
            t[7] = (n * o - l * e) * m,
            t[8] = (s * e - n * r) * m,
            this
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose()
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        }
        setUvTransform(t, e, n, i, r, s, a) {
            const o = Math.cos(r)
              , l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1),
            this
        }
        scale(t, e) {
            const n = this.elements;
            return n[0] *= t,
            n[3] *= t,
            n[6] *= t,
            n[1] *= e,
            n[4] *= e,
            n[7] *= e,
            this
        }
        rotate(t) {
            const e = Math.cos(t)
              , n = Math.sin(t)
              , i = this.elements
              , r = i[0]
              , s = i[3]
              , a = i[6]
              , o = i[1]
              , l = i[4]
              , c = i[7];
            return i[0] = e * r + n * o,
            i[3] = e * s + n * l,
            i[6] = e * a + n * c,
            i[1] = -n * r + e * o,
            i[4] = -n * s + e * l,
            i[7] = -n * a + e * c,
            this
        }
        translate(t, e) {
            const n = this.elements;
            return n[0] += t * n[2],
            n[3] += t * n[5],
            n[6] += t * n[8],
            n[1] += e * n[2],
            n[4] += e * n[5],
            n[7] += e * n[8],
            this
        }
        equals(t) {
            const e = this.elements
              , n = t.elements;
            for (let t = 0; t < 9; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e=0) {
            for (let n = 0; n < 9; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t=[], e=0) {
            const n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t
        }
        clone() {
            return (new this.constructor).fromArray(this.elements)
        }
    }
    let xt;
    yt.prototype.isMatrix3 = !0;
    class _t {
        static getDataURL(t) {
            if (/^data:/i.test(t.src))
                return t.src;
            if ("undefined" == typeof HTMLCanvasElement)
                return t.src;
            let e;
            if (t instanceof HTMLCanvasElement)
                e = t;
            else {
                void 0 === xt && (xt = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
                xt.width = t.width,
                xt.height = t.height;
                const n = xt.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
                e = xt
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
            e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
        }
    }
    let wt = 0;
    class bt extends rt {
        constructor(t=bt.DEFAULT_IMAGE, e=bt.DEFAULT_MAPPING, n=1001, i=1001, r=1006, s=1008, a=1023, o=1009, l=1, c=3e3) {
            super(),
            Object.defineProperty(this, "id", {
                value: wt++
            }),
            this.uuid = ct(),
            this.name = "",
            this.image = t,
            this.mipmaps = [],
            this.mapping = e,
            this.wrapS = n,
            this.wrapT = i,
            this.magFilter = r,
            this.minFilter = s,
            this.anisotropy = l,
            this.format = a,
            this.internalFormat = null,
            this.type = o,
            this.offset = new vt(0,0),
            this.repeat = new vt(1,1),
            this.center = new vt(0,0),
            this.rotation = 0,
            this.matrixAutoUpdate = !0,
            this.matrix = new yt,
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = c,
            this.version = 0,
            this.onUpdate = null
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.name = t.name,
            this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.internalFormat = t.internalFormat,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            this.rotation = t.rotation,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrix.copy(t.matrix),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                const i = this.image;
                if (void 0 === i.uuid && (i.uuid = ct()),
                !e && void 0 === t.images[i.uuid]) {
                    let e;
                    if (Array.isArray(i)) {
                        e = [];
                        for (let t = 0, n = i.length; t < n; t++)
                            i[t].isDataTexture ? e.push(Mt(i[t].image)) : e.push(Mt(i[t]))
                    } else
                        e = Mt(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: e
                    }
                }
                n.image = i.uuid
            }
            return e || (t.textures[this.uuid] = n),
            n
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(t) {
            if (this.mapping !== i)
                return t;
            if (t.applyMatrix3(this.matrix),
            t.x < 0 || t.x > 1)
                switch (this.wrapS) {
                case h:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case u:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case d:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
            if (t.y < 0 || t.y > 1)
                switch (this.wrapT) {
                case h:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case u:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case d:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
            t
        }
        set needsUpdate(t) {
            !0 === t && this.version++
        }
    }
    function Mt(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? _t.getDataURL(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."),
        {})
    }
    bt.DEFAULT_IMAGE = void 0,
    bt.DEFAULT_MAPPING = i,
    bt.prototype.isTexture = !0;
    class St {
        constructor(t=0, e=0, n=0, i=1) {
            this.x = t,
            this.y = e,
            this.z = n,
            this.w = i
        }
        get width() {
            return this.z
        }
        set width(t) {
            this.z = t
        }
        get height() {
            return this.w
        }
        set height(t) {
            this.w = t
        }
        set(t, e, n, i) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this.w = i,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setZ(t) {
            return this.z = t,
            this
        }
        setW(t) {
            return this.w = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        }
        multiply(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this.w *= t.w,
            this
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t,
            this
        }
        applyMatrix4(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = this.w
              , s = t.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r,
            this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r,
            this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r,
            this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const s = .01
              , a = .1
              , o = t.elements
              , l = o[0]
              , c = o[4]
              , h = o[8]
              , u = o[1]
              , d = o[5]
              , p = o[9]
              , m = o[2]
              , f = o[6]
              , g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                const t = (l + 1) / 2
                  , o = (d + 1) / 2
                  , v = (g + 1) / 2
                  , y = (c + u) / 4
                  , x = (h + m) / 4
                  , _ = (p + f) / 4;
                return t > o && t > v ? t < s ? (n = 0,
                i = .707106781,
                r = .707106781) : (n = Math.sqrt(t),
                i = y / n,
                r = x / n) : o > v ? o < s ? (n = .707106781,
                i = 0,
                r = .707106781) : (i = Math.sqrt(o),
                n = y / i,
                r = _ / i) : v < s ? (n = .707106781,
                i = .707106781,
                r = 0) : (r = Math.sqrt(v),
                n = x / r,
                i = _ / r),
                this.set(n, i, r, e),
                this
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1),
            this.x = (f - p) / v,
            this.y = (h - m) / v,
            this.z = (u - c) / v,
            this.w = Math.acos((l + d + g - 1) / 2),
            this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this.w = Math.max(t, Math.min(e, this.w)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this.z = t.z + (e.z - t.z) * n,
            this.w = t.w + (e.w - t.w) * n,
            this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this.w = t.getW(e),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this.w = Math.random(),
            this
        }
    }
    St.prototype.isVector4 = !0;
    class Tt extends rt {
        constructor(t, e, n) {
            super(),
            this.width = t,
            this.height = e,
            this.depth = 1,
            this.scissor = new St(0,0,t,e),
            this.scissorTest = !1,
            this.viewport = new St(0,0,t,e),
            n = n || {},
            this.texture = new bt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
            this.texture.image = {},
            this.texture.image.width = t,
            this.texture.image.height = e,
            this.texture.image.depth = 1,
            this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
            this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : g,
            this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
            this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
            this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
        }
        setTexture(t) {
            t.image = {
                width: this.width,
                height: this.height,
                depth: this.depth
            },
            this.texture = t
        }
        setSize(t, e, n=1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t,
            this.height = e,
            this.depth = n,
            this.texture.image.width = t,
            this.texture.image.height = e,
            this.texture.image.depth = n,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.width = t.width,
            this.height = t.height,
            this.depth = t.depth,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    Tt.prototype.isWebGLRenderTarget = !0;
    class Et extends Tt {
        constructor(t, e, n) {
            super(t, e, n),
            this.samples = 4
        }
        copy(t) {
            return super.copy.call(this, t),
            this.samples = t.samples,
            this
        }
    }
    Et.prototype.isWebGLMultisampleRenderTarget = !0;
    class At {
        constructor(t=0, e=0, n=0, i=1) {
            this._x = t,
            this._y = e,
            this._z = n,
            this._w = i
        }
        static slerp(t, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
            n.slerpQuaternions(t, e, i)
        }
        static slerpFlat(t, e, n, i, r, s, a) {
            let o = n[i + 0]
              , l = n[i + 1]
              , c = n[i + 2]
              , h = n[i + 3];
            const u = r[s + 0]
              , d = r[s + 1]
              , p = r[s + 2]
              , m = r[s + 3];
            if (0 === a)
                return t[e + 0] = o,
                t[e + 1] = l,
                t[e + 2] = c,
                void (t[e + 3] = h);
            if (1 === a)
                return t[e + 0] = u,
                t[e + 1] = d,
                t[e + 2] = p,
                void (t[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * m
                  , n = e >= 0 ? 1 : -1
                  , i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i)
                      , s = Math.atan2(r, e * n);
                    t = Math.sin(t * s) / r,
                    a = Math.sin(a * s) / r
                }
                const r = a * n;
                if (o = o * t + u * r,
                l = l * t + d * r,
                c = c * t + p * r,
                h = h * t + m * r,
                t === 1 - a) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t,
                    l *= t,
                    c *= t,
                    h *= t
                }
            }
            t[e] = o,
            t[e + 1] = l,
            t[e + 2] = c,
            t[e + 3] = h
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
            const a = n[i]
              , o = n[i + 1]
              , l = n[i + 2]
              , c = n[i + 3]
              , h = r[s]
              , u = r[s + 1]
              , d = r[s + 2]
              , p = r[s + 3];
            return t[e] = a * p + c * h + o * d - l * u,
            t[e + 1] = o * p + c * u + l * h - a * d,
            t[e + 2] = l * p + c * d + a * u - o * h,
            t[e + 3] = c * p - a * h - o * u - l * d,
            t
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
            this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(t) {
            this._w = t,
            this._onChangeCallback()
        }
        set(t, e, n, i) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._w = i,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        }
        copy(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this._onChangeCallback(),
            this
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x
              , i = t._y
              , r = t._z
              , s = t._order
              , a = Math.cos
              , o = Math.sin
              , l = a(n / 2)
              , c = a(i / 2)
              , h = a(r / 2)
              , u = o(n / 2)
              , d = o(i / 2)
              , p = o(r / 2);
            switch (s) {
            case "XYZ":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
            }
            return !1 !== e && this._onChangeCallback(),
            this
        }
        setFromAxisAngle(t, e) {
            const n = e / 2
              , i = Math.sin(n);
            return this._x = t.x * i,
            this._y = t.y * i,
            this._z = t.z * i,
            this._w = Math.cos(n),
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(t) {
            const e = t.elements
              , n = e[0]
              , i = e[4]
              , r = e[8]
              , s = e[1]
              , a = e[5]
              , o = e[9]
              , l = e[2]
              , c = e[6]
              , h = e[10]
              , u = n + a + h;
            if (u > 0) {
                const t = .5 / Math.sqrt(u + 1);
                this._w = .25 / t,
                this._x = (c - o) * t,
                this._y = (r - l) * t,
                this._z = (s - i) * t
            } else if (n > a && n > h) {
                const t = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t,
                this._x = .25 * t,
                this._y = (i + s) / t,
                this._z = (r + l) / t
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t,
                this._x = (i + s) / t,
                this._y = .25 * t,
                this._z = (o + c) / t
            } else {
                const t = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t,
                this._x = (r + l) / t,
                this._y = (o + c) / t,
                this._z = .25 * t
            }
            return this._onChangeCallback(),
            this
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0,
            Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
            this._y = t.x,
            this._z = 0,
            this._w = n) : (this._x = 0,
            this._y = -t.z,
            this._z = t.y,
            this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
            this._y = t.z * e.x - t.x * e.z,
            this._z = t.x * e.y - t.y * e.x,
            this._w = n),
            this.normalize()
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(ht(this.dot(t), -1, 1)))
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n)
                return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i),
            this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this._onChangeCallback(),
            this
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this._onChangeCallback(),
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this)
        }
        multiplyQuaternions(t, e) {
            const n = t._x
              , i = t._y
              , r = t._z
              , s = t._w
              , a = e._x
              , o = e._y
              , l = e._z
              , c = e._w;
            return this._x = n * c + s * a + i * l - r * o,
            this._y = i * c + s * o + r * a - n * l,
            this._z = r * c + s * l + n * o - i * a,
            this._w = s * c - n * a - i * o - r * l,
            this._onChangeCallback(),
            this
        }
        slerp(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            const n = this._x
              , i = this._y
              , r = this._z
              , s = this._w;
            let a = s * t._w + n * t._x + i * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            a = -a) : this.copy(t),
            a >= 1)
                return this._w = s,
                this._x = n,
                this._y = i,
                this._z = r,
                this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * s + e * this._w,
                this._x = t * n + e * this._x,
                this._y = t * i + e * this._y,
                this._z = t * r + e * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this
            }
            const l = Math.sqrt(o)
              , c = Math.atan2(l, a)
              , h = Math.sin((1 - e) * c) / l
              , u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u,
            this._x = n * h + this._x * u,
            this._y = i * h + this._y * u,
            this._z = r * h + this._z * u,
            this._onChangeCallback(),
            this
        }
        slerpQuaternions(t, e, n) {
            this.copy(t).slerp(e, n)
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }
        fromArray(t, e=0) {
            return this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this._onChangeCallback(),
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e),
            this._y = t.getY(e),
            this._z = t.getZ(e),
            this._w = t.getW(e),
            this
        }
        _onChange(t) {
            return this._onChangeCallback = t,
            this
        }
        _onChangeCallback() {}
    }
    At.prototype.isQuaternion = !0;
    class Lt {
        constructor(t=0, e=0, n=0) {
            this.x = t,
            this.y = e,
            this.z = n
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z),
            this.x = t,
            this.y = e,
            this.z = n,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setZ(t) {
            return this.z = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            this.applyQuaternion(Ct.setFromEuler(t))
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(Ct.setFromAxisAngle(t, e))
        }
        applyMatrix3(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i,
            this.y = r[1] * e + r[4] * n + r[7] * i,
            this.z = r[2] * e + r[5] * n + r[8] * i,
            this
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize()
        }
        applyMatrix4(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements
              , s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s,
            this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s,
            this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s,
            this
        }
        applyQuaternion(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.x
              , s = t.y
              , a = t.z
              , o = t.w
              , l = o * e + s * i - a * n
              , c = o * n + a * e - r * i
              , h = o * i + r * n - s * e
              , u = -r * e - s * n - a * i;
            return this.x = l * o + u * -r + c * -a - h * -s,
            this.y = c * o + u * -s + h * -r - l * -a,
            this.z = h * o + u * -a + l * -s - c * -r,
            this
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        }
        transformDirection(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i,
            this.y = r[1] * e + r[5] * n + r[9] * i,
            this.z = r[2] * e + r[6] * n + r[10] * i,
            this.normalize()
        }
        divide(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this.z = t.z + (e.z - t.z) * n,
            this
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(t, e)) : this.crossVectors(this, t)
        }
       
    }
  
    }
   
    f