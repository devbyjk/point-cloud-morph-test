Ne.prototype.isPlane = !0;
const Be = new Lt
  , ze = new Lt
  , Fe = new Lt
  , Oe = new Lt
  , He = new Lt
  , Ge = new Lt
  , Ue = new Lt
  , ke = new Lt
  , Ve = new Lt
  , We = new Lt;
class je {
    constructor(t=new Lt, e=new Lt, n=new Lt) {
        this.a = t,
        this.b = e,
        this.c = n
    }
    static getNormal(t, e, n, i) {
        void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"),
        i = new Lt),
        i.subVectors(n, e),
        Be.subVectors(t, e),
        i.cross(Be);
        const r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
    }
    static getBarycoord(t, e, n, i, r) {
        Be.subVectors(i, e),
        ze.subVectors(n, e),
        Fe.subVectors(t, e);
        const s = Be.dot(Be)
          , a = Be.dot(ze)
          , o = Be.dot(Fe)
          , l = ze.dot(ze)
          , c = ze.dot(Fe)
          , h = s * l - a * a;
        if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
        r = new Lt),
        0 === h)
            return r.set(-2, -1, -1);
        const u = 1 / h
          , d = (l * o - a * c) * u
          , p = (s * c - a * o) * u;
        return r.set(1 - d - p, p, d)
    }
    static containsPoint(t, e, n, i) {
        return this.getBarycoord(t, e, n, i, Oe),
        Oe.x >= 0 && Oe.y >= 0 && Oe.x + Oe.y <= 1
    }
    static getUV(t, e, n, i, r, s, a, o) {
        return this.getBarycoord(t, e, n, i, Oe),
        o.set(0, 0),
        o.addScaledVector(r, Oe.x),
        o.addScaledVector(s, Oe.y),
        o.addScaledVector(a, Oe.z),
        o
    }
    static isFrontFacing(t, e, n, i) {
        return Be.subVectors(n, e),
        ze.subVectors(t, e),
        Be.cross(ze).dot(i) < 0
    }
    set(t, e, n) {
        return this.a.copy(t),
        this.b.copy(e),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(t, e, n, i) {
        return this.a.copy(t[e]),
        this.b.copy(t[n]),
        this.c.copy(t[i]),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.a.copy(t.a),
        this.b.copy(t.b),
        this.c.copy(t.c),
        this
    }
    getArea() {
        return Be.subVectors(this.c, this.b),
        ze.subVectors(this.a, this.b),
        .5 * Be.cross(ze).length()
    }
    getMidpoint(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
        t = new Lt),
        t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(t) {
        return je.getNormal(this.a, this.b, this.c, t)
    }
    getPlane(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
        t = new Ne),
        t.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(t, e) {
        return je.getBarycoord(t, this.a, this.b, this.c, e)
    }
    getUV(t, e, n, i, r) {
        return je.getUV(t, this.a, this.b, this.c, e, n, i, r)
    }
    containsPoint(t) {
        return je.containsPoint(t, this.a, this.b, this.c)
    }
    isFrontFacing(t) {
        return je.isFrontFacing(this.a, this.b, this.c, t)
    }
    intersectsBox(t) {
        return t.intersectsTriangle(this)
    }
    closestPointToPoint(t, e) {
        void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
        e = new Lt);
        const n = this.a
          , i = this.b
          , r = this.c;
        let s, a;
        He.subVectors(i, n),
        Ge.subVectors(r, n),
        ke.subVectors(t, n);
        const o = He.dot(ke)
          , l = Ge.dot(ke);
        if (o <= 0 && l <= 0)
            return e.copy(n);
        Ve.subVectors(t, i);
        const c = He.dot(Ve)
          , h = Ge.dot(Ve);
        if (c >= 0 && h <= c)
            return e.copy(i);
        const u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0)
            return s = o / (o - c),
            e.copy(n).addScaledVector(He, s);
        We.subVectors(t, r);
        const d = He.dot(We)
          , p = Ge.dot(We);
        if (p >= 0 && d <= p)
            return e.copy(r);
        const m = d * l - o * p;
        if (m <= 0 && l >= 0 && p <= 0)
            return a = l / (l - p),
            e.copy(n).addScaledVector(Ge, a);
        const f = c * p - d * h;
        if (f <= 0 && h - c >= 0 && d - p >= 0)
            return Ue.subVectors(r, i),
            a = (h - c) / (h - c + (d - p)),
            e.copy(i).addScaledVector(Ue, a);
        const g = 1 / (f + m + u);
        return s = m * g,
        a = u * g,
        e.copy(n).addScaledVector(He, s).addScaledVector(Ge, a)
    }
    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
}
let qe = 0;
function Xe() {
    Object.defineProperty(this, "id", {
        value: qe++
    }),
    this.uuid = ct(),
    this.name = "",
    this.type = "Material",
    this.fog = !0,
    this.blending = 1,
    this.side = 0,
    this.vertexColors = !1,
    this.opacity = 1,
    this.transparent = !1,
    this.blendSrc = 204,
    this.blendDst = 205,
    this.blendEquation = n,
    this.blendSrcAlpha = null,
    this.blendDstAlpha = null,
    this.blendEquationAlpha = null,
    this.depthFunc = 3,
    this.depthTest = !0,
    this.depthWrite = !0,
    this.stencilWriteMask = 255,
    this.stencilFunc = 519,
    this.stencilRef = 0,
    this.stencilFuncMask = 255,
    this.stencilFail = tt,
    this.stencilZFail = tt,
    this.stencilZPass = tt,
    this.stencilWrite = !1,
    this.clippingPlanes = null,
    this.clipIntersection = !1,
    this.clipShadows = !1,
    this.shadowSide = null,
    this.colorWrite = !0,
    this.precision = null,
    this.polygonOffset = !1,
    this.polygonOffsetFactor = 0,
    this.polygonOffsetUnits = 0,
    this.dithering = !1,
    this.alphaTest = 0,
    this.alphaToCoverage = !1,
    this.premultipliedAlpha = !1,
    this.visible = !0,
    this.toneMapped = !0,
    this.userData = {},
    this.version = 0
}
Xe.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: Xe,
    isMaterial: !0,
    onBuild: function() {},
    onBeforeCompile: function() {},
    customProgramCacheKey: function() {
        return this.onBeforeCompile.toString()
    },
    setValues: function(t) {
        if (void 0 !== t)
            for (const e in t) {
                const n = t[e];
                if (void 0 === n) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue
                }
                if ("shading" === e) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                    this.flatShading = 1 === n;
                    continue
                }
                const i = this[e];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
            }
    },
    toJSON: function(t) {
        const e = void 0 === t || "string" == typeof t;
        e && (t = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        function i(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                delete i.metadata,
                e.push(i)
            }
            return e
        }
        if (n.uuid = this.uuid,
        n.type = this.type,
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
        void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        n.depthFunc = this.depthFunc,
        n.depthTest = this.depthTest,
        n.depthWrite = this.depthWrite,
        n.colorWrite = this.colorWrite,
        n.stencilWrite = this.stencilWrite,
        n.stencilWriteMask = this.stencilWriteMask,
        n.stencilFunc = this.stencilFunc,
        n.stencilRef = this.stencilRef,
        n.stencilFuncMask = this.stencilFuncMask,
        n.stencilFail = this.stencilFail,
        n.stencilZFail = this.stencilZFail,
        n.stencilZPass = this.stencilZPass,
        this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.morphTargets && (n.morphTargets = !0),
        !0 === this.morphNormals && (n.morphNormals = !0),
        !0 === this.skinning && (n.skinning = !0),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        e) {
            const e = i(t.textures)
              , r = i(t.images);
            e.length > 0 && (n.textures = e),
            r.length > 0 && (n.images = r)
        }
        return n
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        this.name = t.name,
        this.fog = t.fog,
        this.blending = t.blending,
        this.side = t.side,
        this.vertexColors = t.vertexColors,
        this.opacity = t.opacity,
        this.transparent = t.transparent,
        this.blendSrc = t.blendSrc,
        this.blendDst = t.blendDst,
        this.blendEquation = t.blendEquation,
        this.blendSrcAlpha = t.blendSrcAlpha,
        this.blendDstAlpha = t.blendDstAlpha,
        this.blendEquationAlpha = t.blendEquationAlpha,
        this.depthFunc = t.depthFunc,
        this.depthTest = t.depthTest,
        this.depthWrite = t.depthWrite,
        this.stencilWriteMask = t.stencilWriteMask,
        this.stencilFunc = t.stencilFunc,
        this.stencilRef = t.stencilRef,
        this.stencilFuncMask = t.stencilFuncMask,
        this.stencilFail = t.stencilFail,
        this.stencilZFail = t.stencilZFail,
        this.stencilZPass = t.stencilZPass,
        this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let n = null;
        if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i)
                n[i] = e[i].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = t.clipIntersection,
        this.clipShadows = t.clipShadows,
        this.shadowSide = t.shadowSide,
        this.colorWrite = t.colorWrite,
        this.precision = t.precision,
        this.polygonOffset = t.polygonOffset,
        this.polygonOffsetFactor = t.polygonOffsetFactor,
        this.polygonOffsetUnits = t.polygonOffsetUnits,
        this.dithering = t.dithering,
        this.alphaTest = t.alphaTest,
        this.alphaToCoverage = t.alphaToCoverage,
        this.premultipliedAlpha = t.premultipliedAlpha,
        this.visible = t.visible,
        this.toneMapped = t.toneMapped,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}),
Object.defineProperty(Xe.prototype, "needsUpdate", {
    set: function(t) {
        !0 === t && this.version++
    }
});
const Ye = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Ze = {
    h: 0,
    s: 0,
    l: 0
}
  , Je = {
    h: 0,
    s: 0,
    l: 0
};
function Qe(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
}
function Ke(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
}
function $e(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
}
class tn {
    constructor(t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }
    set(t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
        this
    }
    setScalar(t) {
        return this.r = t,
        this.g = t,
        this.b = t,
        this
    }
    setHex(t) {
        return t = Math.floor(t),
        this.r = (t >> 16 & 255) / 255,
        this.g = (t >> 8 & 255) / 255,
        this.b = (255 & t) / 255,
        this
    }
    setRGB(t, e, n) {
        return this.r = t,
        this.g = e,
        this.b = n,
        this
    }
    setHSL(t, e, n) {
        if (t = ut(t, 1),
        e = ht(e, 0, 1),
        n = ht(n, 0, 1),
        0 === e)
            this.r = this.g = this.b = n;
        else {
            const i = n <= .5 ? n * (1 + e) : n + e - n * e
              , r = 2 * n - i;
            this.r = Qe(r, i, t + 1 / 3),
            this.g = Qe(r, i, t),
            this.b = Qe(r, i, t - 1 / 3)
        }
        return this
    }
    setStyle(t) {
        function e(e) {
            void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
        }
        let n;
        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let t;
            const i = n[1]
              , r = n[2];
            switch (i) {
            case "rgb":
            case "rgba":
                if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                    return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(t[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(t[3], 10)) / 255,
                    e(t[4]),
                    this;
                if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                    return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(t[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(t[3], 10)) / 100,
                    e(t[4]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                    const n = parseFloat(t[1]) / 360
                      , i = parseInt(t[2], 10) / 100
                      , r = parseInt(t[3], 10) / 100;
                    return e(t[4]),
                    this.setHSL(n, i, r)
                }
            }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = n[1]
              , e = t.length;
            if (3 === e)
                return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255,
                this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255,
                this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255,
                this;
            if (6 === e)
                return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255,
                this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255,
                this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255,
                this
        }
        return t && t.length > 0 ? this.setColorName(t) : this
    }
    setColorName(t) {
        const e = Ye[t.toLowerCase()];
        return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(t) {
        return this.r = t.r,
        this.g = t.g,
        this.b = t.b,
        this
    }
    copyGammaToLinear(t, e=2) {
        return this.r = Math.pow(t.r, e),
        this.g = Math.pow(t.g, e),
        this.b = Math.pow(t.b, e),
        this
    }
    copyLinearToGamma(t, e=2) {
        const n = e > 0 ? 1 / e : 1;
        return this.r = Math.pow(t.r, n),
        this.g = Math.pow(t.g, n),
        this.b = Math.pow(t.b, n),
        this
    }
    convertGammaToLinear(t) {
        return this.copyGammaToLinear(this, t),
        this
    }
    convertLinearToGamma(t) {
        return this.copyLinearToGamma(this, t),
        this
    }
    copySRGBToLinear(t) {
        return this.r = Ke(t.r),
        this.g = Ke(t.g),
        this.b = Ke(t.b),
        this
    }
    copyLinearToSRGB(t) {
        return this.r = $e(t.r),
        this.g = $e(t.g),
        this.b = $e(t.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }
    getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }
    getHSL(t) {
        void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
        t = {
            h: 0,
            s: 0,
            l: 0
        });
        const e = this.r
          , n = this.g
          , i = this.b
          , r = Math.max(e, n, i)
          , s = Math.min(e, n, i);
        let a, o;
        const l = (s + r) / 2;
        if (s === r)
            a = 0,
            o = 0;
        else {
            const t = r - s;
            switch (o = l <= .5 ? t / (r + s) : t / (2 - r - s),
            r) {
            case e:
                a = (n - i) / t + (n < i ? 6 : 0);
                break;
            case n:
                a = (i - e) / t + 2;
                break;
            case i:
                a = (e - n) / t + 4
            }
            a /= 6
        }
        return t.h = a,
        t.s = o,
        t.l = l,
        t
    }
    getStyle() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }
    offsetHSL(t, e, n) {
        return this.getHSL(Ze),
        Ze.h += t,
        Ze.s += e,
        Ze.l += n,
        this.setHSL(Ze.h, Ze.s, Ze.l),
        this
    }
    add(t) {
        return this.r += t.r,
        this.g += t.g,
        this.b += t.b,
        this
    }
    addColors(t, e) {
        return this.r = t.r + e.r,
        this.g = t.g + e.g,
        this.b = t.b + e.b,
        this
    }
    addScalar(t) {
        return this.r += t,
        this.g += t,
        this.b += t,
        this
    }
    sub(t) {
        return this.r = Math.max(0, this.r - t.r),
        this.g = Math.max(0, this.g - t.g),
        this.b = Math.max(0, this.b - t.b),
        this
    }
    multiply(t) {
        return this.r *= t.r,
        this.g *= t.g,
        this.b *= t.b,
        this
    }
    multiplyScalar(t) {
        return this.r *= t,
        this.g *= t,
        this.b *= t,
        this
    }
    lerp(t, e) {
        return this.r += (t.r - this.r) * e,
        this.g += (t.g - this.g) * e,
        this.b += (t.b - this.b) * e,
        this
    }
    lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n,
        this.g = t.g + (e.g - t.g) * n,
        this.b = t.b + (e.b - t.b) * n,
        this
    }
    lerpHSL(t, e) {
        this.getHSL(Ze),
        t.getHSL(Je);
        const n = dt(Ze.h, Je.h, e)
          , i = dt(Ze.s, Je.s, e)
          , r = dt(Ze.l, Je.l, e);
        return this.setHSL(n, i, r),
        this
    }
    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    }
    fromArray(t, e=0) {
        return this.r = t[e],
        this.g = t[e + 1],
        this.b = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.r,
        t[e + 1] = this.g,
        t[e + 2] = this.b,
        t
    }
    fromBufferAttribute(t, e) {
        return this.r = t.getX(e),
        this.g = t.getY(e),
        this.b = t.getZ(e),
        !0 === t.normalized && (this.r /= 255,
        this.g /= 255,
        this.b /= 255),
        this
    }
    toJSON() {
        return this.getHex()
    }
}
tn.NAMES = Ye,
tn.prototype.isColor = !0,
tn.prototype.r = 1,
tn.prototype.g = 1,
tn.prototype.b = 1;
class en extends Xe {
    constructor(t) {
        super(),
        this.type = "MeshBasicMaterial",
        this.color = new tn(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this
    }
}
en.prototype.isMeshBasicMaterial = !0;
const nn = new Lt
  , rn = new vt;
class sn {
    constructor(t, e, n) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.normalized = !0 === n,
        this.usage = et,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0,
        this.onUploadCallback = function() {}
    }
    set needsUpdate(t) {
        !0 === t && this.version++
    }
    setUsage(t) {
        return this.usage = t,
        this
    }
    copy(t) {
        return this.name = t.name,
        this.array = new t.array.constructor(t.array),
        this.itemSize = t.itemSize,
        this.count = t.count,
        this.normalized = t.normalized,
        this.usage = t.usage,
        this
    }
    copyAt(t, e, n) {
        t *= this.itemSize,
        n *= e.itemSize;
        for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[t + i] = e.array[n + i];
        return this
    }
    copyArray(t) {
        return this.array.set(t),
        this
    }
    copyColorsArray(t) {
        const e = this.array;
        let n = 0;
        for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
            r = new tn),
            e[n++] = r.r,
            e[n++] = r.g,
            e[n++] = r.b
        }
        return this
    }
    copyVector2sArray(t) {
        const e = this.array;
        let n = 0;
        for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
            r = new vt),
            e[n++] = r.x,
            e[n++] = r.y
        }
        return this
    }
    copyVector3sArray(t) {
        const e = this.array;
        let n = 0;
        for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
            r = new Lt),
            e[n++] = r.x,
            e[n++] = r.y,
            e[n++] = r.z
        }
        return this
    }
    copyVector4sArray(t) {
        const e = this.array;
        let n = 0;
        for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
            r = new St),
            e[n++] = r.x,
            e[n++] = r.y,
            e[n++] = r.z,
            e[n++] = r.w
        }
        return this
    }
    applyMatrix3(t) {
        if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
                rn.fromBufferAttribute(this, e),
                rn.applyMatrix3(t),
                this.setXY(e, rn.x, rn.y);
        else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
                nn.fromBufferAttribute(this, e),
                nn.applyMatrix3(t),
                this.setXYZ(e, nn.x, nn.y, nn.z);
        return this
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.count; e < n; e++)
            nn.x = this.getX(e),
            nn.y = this.getY(e),
            nn.z = this.getZ(e),
            nn.applyMatrix4(t),
            this.setXYZ(e, nn.x, nn.y, nn.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++)
            nn.x = this.getX(e),
            nn.y = this.getY(e),
            nn.z = this.getZ(e),
            nn.applyNormalMatrix(t),
            this.setXYZ(e, nn.x, nn.y, nn.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++)
            nn.x = this.getX(e),
            nn.y = this.getY(e),
            nn.z = this.getZ(e),
            nn.transformDirection(t),
            this.setXYZ(e, nn.x, nn.y, nn.z);
        return this
    }
    set(t, e=0) {
        return this.array.set(t, e),
        this
    }
    getX(t) {
        return this.array[t * this.itemSize]
    }
    setX(t, e) {
        return this.array[t * this.itemSize] = e,
        this
    }
    getY(t) {
        return this.array[t * this.itemSize + 1]
    }
    setY(t, e) {
        return this.array[t * this.itemSize + 1] = e,
        this
    }
    getZ(t) {
        return this.array[t * this.itemSize + 2]
    }
    setZ(t, e) {
        return this.array[t * this.itemSize + 2] = e,
        this
    }
    getW(t) {
        return this.array[t * this.itemSize + 3]
    }
    setW(t, e) {
        return this.array[t * this.itemSize + 3] = e,
        this
    }
    setXY(t, e, n) {
        return t *= this.itemSize,
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this
    }
    setXYZ(t, e, n, i) {
        return t *= this.itemSize,
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this.array[t + 2] = i,
        this
    }
    setXYZW(t, e, n, i, r) {
        return t *= this.itemSize,
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this.array[t + 2] = i,
        this.array[t + 3] = r,
        this
    }
    onUpload(t) {
        return this.onUploadCallback = t,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return "" !== this.name && (t.name = this.name),
        this.usage !== et && (t.usage = this.usage),
        0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange),
        t
    }
}
sn.prototype.isBufferAttribute = !0;
class an extends sn {
    constructor(t, e, n) {
        super(new Int8Array(t), e, n)
    }
}
class on extends sn {
    constructor(t, e, n) {
        super(new Uint8Array(t), e, n)
    }
}
class ln extends sn {
    constructor(t, e, n) {
        super(new Uint8ClampedArray(t), e, n)
    }
}
class cn extends sn {
    constructor(t, e, n) {
        super(new Int16Array(t), e, n)
    }
}
class hn extends sn {
    constructor(t, e, n) {
        super(new Uint16Array(t), e, n)
    }
}
class un extends sn {
    constructor(t, e, n) {
        super(new Int32Array(t), e, n)
    }
}
class dn extends sn {
    constructor(t, e, n) {
        super(new Uint32Array(t), e, n)
    }
}
class pn extends sn {
    constructor(t, e, n) {
        super(new Uint16Array(t), e, n)
    }
}
pn.prototype.isFloat16BufferAttribute = !0;
class mn extends sn {
    constructor(t, e, n) {
        super(new Float32Array(t), e, n)
    }
}
class fn extends sn {
    constructor(t, e, n) {
        super(new Float64Array(t), e, n)
    }
}
function gn(t) {
    if (0 === t.length)
        return -1 / 0;
    let e = t[0];
    for (let n = 1, i = t.length; n < i; ++n)
        t[n] > e && (e = t[n]);
    return e
}
const vn = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: Uint8ClampedArray,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
};
function yn(t, e) {
    return new vn[t](e)
}
let xn = 0;
const _n = new se
  , wn = new Ce
  , bn = new Lt
  , Mn = new Pt
  , Sn = new Pt
  , Tn = new Lt;
class En extends rt {
    constructor() {
        super(),
        Object.defineProperty(this, "id", {
            value: xn++
        }),
        this.uuid = ct(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(t) {
        return Array.isArray(t) ? this.index = new (gn(t) > 65535 ? dn : hn)(t,1) : this.index = t,
        this
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    setAttribute(t, e) {
        return this.attributes[t] = e,
        this
    }
    deleteAttribute(t) {
        return delete this.attributes[t],
        this
    }
    hasAttribute(t) {
        return void 0 !== this.attributes[t]
    }
    addGroup(t, e, n=0) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(t, e) {
        this.drawRange.start = t,
        this.drawRange.count = e
    }
    applyMatrix4(t) {
        const e = this.attributes.position;
        void 0 !== e && (e.applyMatrix4(t),
        e.needsUpdate = !0);
        const n = this.attributes.normal;
        if (void 0 !== n) {
            const e = (new yt).getNormalMatrix(t);
            n.applyNormalMatrix(e),
            n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return void 0 !== i && (i.transformDirection(t),
        i.needsUpdate = !0),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
    }
    rotateX(t) {
        return _n.makeRotationX(t),
        this.applyMatrix4(_n),
        this
    }
    rotateY(t) {
        return _n.makeRotationY(t),
        this.applyMatrix4(_n),
        this
    }
    rotateZ(t) {
        return _n.makeRotationZ(t),
        this.applyMatrix4(_n),
        this
    }
    translate(t, e, n) {
        return _n.makeTranslation(t, e, n),
        this.applyMatrix4(_n),
        this
    }
    scale(t, e, n) {
        return _n.makeScale(t, e, n),
        this.applyMatrix4(_n),
        this
    }
    lookAt(t) {
        return wn.lookAt(t),
        wn.updateMatrix(),
        this.applyMatrix4(wn.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(bn).negate(),
        this.translate(bn.x, bn.y, bn.z),
        this
    }
    setFromPoints(t) {
        const e = [];
        for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0)
        }
        return this.setAttribute("position", new mn(e,3)),
        this
    }
    computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new Pt);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
            void this.boundingBox.set(new Lt(-1 / 0,-1 / 0,-1 / 0), new Lt(1 / 0,1 / 0,1 / 0));
        if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t),
            e)
                for (let t = 0, n = e.length; t < n; t++) {
                    const n = e[t];
                    Mn.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (Tn.addVectors(this.boundingBox.min, Mn.min),
                    this.boundingBox.expandByPoint(Tn),
                    Tn.addVectors(this.boundingBox.max, Mn.max),
                    this.boundingBox.expandByPoint(Tn)) : (this.boundingBox.expandByPoint(Mn.min),
                    this.boundingBox.expandByPoint(Mn.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new Jt);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
            void this.boundingSphere.set(new Lt, 1 / 0);
        if (t) {
            const n = this.boundingSphere.center;
            if (Mn.setFromBufferAttribute(t),
            e)
                for (let t = 0, n = e.length; t < n; t++) {
                    const n = e[t];
                    Sn.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (Tn.addVectors(Mn.min, Sn.min),
                    Mn.expandByPoint(Tn),
                    Tn.addVectors(Mn.max, Sn.max),
                    Mn.expandByPoint(Tn)) : (Mn.expandByPoint(Sn.min),
                    Mn.expandByPoint(Sn.max))
                }
            Mn.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++)
                Tn.fromBufferAttribute(t, e),
                i = Math.max(i, n.distanceToSquared(Tn));
            if (e)
                for (let r = 0, s = e.length; r < s; r++) {
                    const s = e[r]
                      , a = this.morphTargetsRelative;
                    for (let e = 0, r = s.count; e < r; e++)
                        Tn.fromBufferAttribute(s, e),
                        a && (bn.fromBufferAttribute(t, e),
                        Tn.add(bn)),
                        i = Math.max(i, n.distanceToSquared(Tn))
                }
            this.boundingSphere.radius = Math.sqrt(i),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeFaceNormals() {}
    computeTangents() {
        const t = this.index
          , e = this.attributes;
        if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
            return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        const n = t.array
          , i = e.position.array
          , r = e.normal.array
          , s = e.uv.array
          , a = i.length / 3;
        void 0 === e.tangent && this.setAttribute("tangent", new sn(new Float32Array(4 * a),4));
        const o = e.tangent.array
          , l = []
          , c = [];
        for (let t = 0; t < a; t++)
            l[t] = new Lt,
            c[t] = new Lt;
        const h = new Lt
          , u = new Lt
          , d = new Lt
          , p = new vt
          , m = new vt
          , f = new vt
          , g = new Lt
          , v = new Lt;
        function y(t, e, n) {
            h.fromArray(i, 3 * t),
            u.fromArray(i, 3 * e),
            d.fromArray(i, 3 * n),
            p.fromArray(s, 2 * t),
            m.fromArray(s, 2 * e),
            f.fromArray(s, 2 * n),
            u.sub(h),
            d.sub(h),
            m.sub(p),
            f.sub(p);
            const r = 1 / (m.x * f.y - f.x * m.y);
            isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r),
            v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r),
            l[t].add(g),
            l[e].add(g),
            l[n].add(g),
            c[t].add(v),
            c[e].add(v),
            c[n].add(v))
        }
        let x = this.groups;
        0 === x.length && (x = [{
            start: 0,
            count: n.length
        }]);
        for (let t = 0, e = x.length; t < e; ++t) {
            const e = x[t]
              , i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3)
                y(n[t + 0], n[t + 1], n[t + 2])
        }
        const _ = new Lt
          , w = new Lt
          , b = new Lt
          , M = new Lt;
        function S(t) {
            b.fromArray(r, 3 * t),
            M.copy(b);
            const e = l[t];
            _.copy(e),
            _.sub(b.multiplyScalar(b.dot(e))).normalize(),
            w.crossVectors(M, e);
            const n = w.dot(c[t]) < 0 ? -1 : 1;
            o[4 * t] = _.x,
            o[4 * t + 1] = _.y,
            o[4 * t + 2] = _.z,
            o[4 * t + 3] = n
        }
        for (let t = 0, e = x.length; t < e; ++t) {
            const e = x[t]
              , i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3)
                S(n[t + 0]),
                S(n[t + 1]),
                S(n[t + 2])
        }
    }
    computeVertexNormals() {
        const t = this.index
          , e = this.getAttribute("position");
        if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n)
                n = new sn(new Float32Array(3 * e.count),3),
                this.setAttribute("normal", n);
            else
                for (let t = 0, e = n.count; t < e; t++)
                    n.setXYZ(t, 0, 0, 0);
            const i = new Lt
              , r = new Lt
              , s = new Lt
              , a = new Lt
              , o = new Lt
              , l = new Lt
              , c = new Lt
              , h = new Lt;
            if (t)
                for (let u = 0, d = t.count; u < d; u += 3) {
                    const d = t.getX(u + 0)
                      , p = t.getX(u + 1)
                      , m = t.getX(u + 2);
                    i.fromBufferAttribute(e, d),
                    r.fromBufferAttribute(e, p),
                    s.fromBufferAttribute(e, m),
                    c.subVectors(s, r),
                    h.subVectors(i, r),
                    c.cross(h),
                    a.fromBufferAttribute(n, d),
                    o.fromBufferAttribute(n, p),
                    l.fromBufferAttribute(n, m),
                    a.add(c),
                    o.add(c),
                    l.add(c),
                    n.setXYZ(d, a.x, a.y, a.z),
                    n.setXYZ(p, o.x, o.y, o.z),
                    n.setXYZ(m, l.x, l.y, l.z)
                }
            else
                for (let t = 0, a = e.count; t < a; t += 3)
                    i.fromBufferAttribute(e, t + 0),
                    r.fromBufferAttribute(e, t + 1),
                    s.fromBufferAttribute(e, t + 2),
                    c.subVectors(s, r),
                    h.subVectors(i, r),
                    c.cross(h),
                    n.setXYZ(t + 0, c.x, c.y, c.z),
                    n.setXYZ(t + 1, c.x, c.y, c.z),
                    n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    merge(t, e) {
        if (!t || !t.isBufferGeometry)
            return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
        void 0 === e && (e = 0,
        console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        const n = this.attributes;
        for (const i in n) {
            if (void 0 === t.attributes[i])
                continue;
            const r = n[i].array
              , s = t.attributes[i]
              , a = s.array
              , o = s.itemSize * e
              , l = Math.min(a.length, r.length - o);
            for (let t = 0, e = o; t < l; t++,
            e++)
                r[e] = a[t]
        }
        return this
    }
    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, n = t.count; e < n; e++)
            Tn.fromBufferAttribute(t, e),
            Tn.normalize(),
            t.setXYZ(e, Tn.x, Tn.y, Tn.z)
    }
    toNonIndexed() {
        function t(t, e) {
            const n = t.array
              , i = t.itemSize
              , r = t.normalized
              , s = new n.constructor(e.length * i);
            let a = 0
              , o = 0;
            for (let t = 0, r = e.length; t < r; t++) {
                a = e[t] * i;
                for (let t = 0; t < i; t++)
                    s[o++] = n[a++]
            }
            return new sn(s,i,r)
        }
        if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const e = new En
          , n = this.index.array
          , i = this.attributes;
        for (const r in i) {
            const s = t(i[r], n);
            e.setAttribute(r, s)
        }
        const r = this.morphAttributes;
        for (const i in r) {
            const s = []
              , a = r[i];
            for (let e = 0, i = a.length; e < i; e++) {
                const i = t(a[e], n);
                s.push(i)
            }
            e.morphAttributes[i] = s
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const s = this.groups;
        for (let t = 0, n = s.length; t < n; t++) {
            const n = s[t];
            e.addGroup(n.start, n.count, n.materialIndex)
        }
        return e
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid,
        t.type = this.type,
        "" !== this.name && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        void 0 !== this.parameters) {
            const e = this.parameters;
            for (const n in e)
                void 0 !== e[n] && (t[n] = e[n]);
            return t
        }
        t.data = {
            attributes: {}
        };
        const e = this.index;
        null !== e && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
        });
        const n = this.attributes;
        for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data)
        }
        const i = {};
        let r = !1;
        for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e]
              , s = [];
            for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                s.push(i.toJSON(t.data))
            }
            s.length > 0 && (i[e] = s,
            r = !0)
        }
        r && (t.data.morphAttributes = i,
        t.data.morphTargetsRelative = this.morphTargetsRelative);
        const s = this.groups;
        s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
        const a = this.boundingSphere;
        return null !== a && (t.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }),
        t
    }
    clone() {
        return (new En).copy(this)
    }
    copy(t) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const n = t.index;
        null !== n && this.setIndex(n.clone(e));
        const i = t.attributes;
        for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e))
        }
        const r = t.morphAttributes;
        for (const t in r) {
            const n = []
              , i = r[t];
            for (let t = 0, r = i.length; t < r; t++)
                n.push(i[t].clone(e));
            this.morphAttributes[t] = n
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const s = t.groups;
        for (let t = 0, e = s.length; t < e; t++) {
            const e = s[t];
            this.addGroup(e.start, e.count, e.materialIndex)
        }
        const a = t.boundingBox;
        null !== a && (this.boundingBox = a.clone());
        const o = t.boundingSphere;
        return null !== o && (this.boundingSphere = o.clone()),
        this.drawRange.start = t.drawRange.start,
        this.drawRange.count = t.drawRange.count,
        this.userData = t.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
En.prototype.isBufferGeometry = !0;
const An = new se
  , Ln = new re
  , Rn = new Jt
  , Cn = new Lt
  , Pn = new Lt
  , Dn = new Lt
  , In = new Lt
  , Nn = new Lt
  , Bn = new Lt
  , zn = new Lt
  , Fn = new Lt
  , On = new Lt
  , Hn = new vt
  , Gn = new vt
  , Un = new vt
  , kn = new Lt
  , Vn = new Lt;
class Wn extends Ce {
    constructor(t=new En, e=new en) {
        super(),
        this.type = "Mesh",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t) {
        return super.copy(t),
        void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
        this.material = t.material,
        this.geometry = t.geometry,
        this
    }
    updateMorphTargets() {
        const t = this.geometry;
        if (t.isBufferGeometry) {
            const e = t.morphAttributes
              , n = Object.keys(e);
            if (n.length > 0) {
                const t = e[n[0]];
                if (void 0 !== t) {
                    this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {};
                    for (let e = 0, n = t.length; e < n; e++) {
                        const n = t[e].name || String(e);
                        this.morphTargetInfluences.push(0),
                        this.morphTargetDictionary[n] = e
                    }
                }
            }
        } else {
            const e = t.morphTargets;
            void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
    raycast(t, e) {
        const n = this.geometry
          , i = this.material
          , r = this.matrixWorld;
        if (void 0 === i)
            return;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        Rn.copy(n.boundingSphere),
        Rn.applyMatrix4(r),
        !1 === t.ray.intersectsSphere(Rn))
            return;
        if (An.copy(r).invert(),
        Ln.copy(t.ray).applyMatrix4(An),
        null !== n.boundingBox && !1 === Ln.intersectsBox(n.boundingBox))
            return;
        let s;
        if (n.isBufferGeometry) {
            const r = n.index
              , a = n.attributes.position
              , o = n.morphAttributes.position
              , l = n.morphTargetsRelative
              , c = n.attributes.uv
              , h = n.attributes.uv2
              , u = n.groups
              , d = n.drawRange;
            if (null !== r)
                if (Array.isArray(i))
                    for (let n = 0, p = u.length; n < p; n++) {
                        const p = u[n]
                          , m = i[p.materialIndex];
                        for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                            const i = r.getX(n)
                              , u = r.getX(n + 1)
                              , d = r.getX(n + 2);
                            s = jn(this, m, t, Ln, a, o, l, c, h, i, u, d),
                            s && (s.faceIndex = Math.floor(n / 3),
                            s.face.materialIndex = p.materialIndex,
                            e.push(s))
                        }
                    }
                else {
                    for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
                        const u = r.getX(n)
                          , d = r.getX(n + 1)
                          , p = r.getX(n + 2);
                        s = jn(this, i, t, Ln, a, o, l, c, h, u, d, p),
                        s && (s.faceIndex = Math.floor(n / 3),
                        e.push(s))
                    }
                }
            else if (void 0 !== a)
                if (Array.isArray(i))
                    for (let n = 0, r = u.length; n < r; n++) {
                        const r = u[n]
                          , p = i[r.materialIndex];
                        for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
                            s = jn(this, p, t, Ln, a, o, l, c, h, n, n + 1, n + 2),
                            s && (s.faceIndex = Math.floor(n / 3),
                            s.face.materialIndex = r.materialIndex,
                            e.push(s))
                        }
                    }
                else {
                    for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3) {
                        s = jn(this, i, t, Ln, a, o, l, c, h, n, n + 1, n + 2),
                        s && (s.faceIndex = Math.floor(n / 3),
                        e.push(s))
                    }
                }
        } else
            n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
}
function jn(t, e, n, i, r, s, a, o, l, c, h, u) {
    Cn.fromBufferAttribute(r, c),
    Pn.fromBufferAttribute(r, h),
    Dn.fromBufferAttribute(r, u);
    const d = t.morphTargetInfluences;
    if (e.morphTargets && s && d) {
        zn.set(0, 0, 0),
        Fn.set(0, 0, 0),
        On.set(0, 0, 0);
        for (let t = 0, e = s.length; t < e; t++) {
            const e = d[t]
              , n = s[t];
            0 !== e && (In.fromBufferAttribute(n, c),
            Nn.fromBufferAttribute(n, h),
            Bn.fromBufferAttribute(n, u),
            a ? (zn.addScaledVector(In, e),
            Fn.addScaledVector(Nn, e),
            On.addScaledVector(Bn, e)) : (zn.addScaledVector(In.sub(Cn), e),
            Fn.addScaledVector(Nn.sub(Pn), e),
            On.addScaledVector(Bn.sub(Dn), e)))
        }
        Cn.add(zn),
        Pn.add(Fn),
        Dn.add(On)
    }
    t.isSkinnedMesh && e.skinning && (t.boneTransform(c, Cn),
    t.boneTransform(h, Pn),
    t.boneTransform(u, Dn));
    const p = function(t, e, n, i, r, s, a, o) {
        let l;
        if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o),
        null === l)
            return null;
        Vn.copy(o),
        Vn.applyMatrix4(t.matrixWorld);
        const c = n.ray.origin.distanceTo(Vn);
        return c < n.near || c > n.far ? null : {
            distance: c,
            point: Vn.clone(),
            object: t
        }
    }(t, e, n, i, Cn, Pn, Dn, kn);
    if (p) {
        o && (Hn.fromBufferAttribute(o, c),
        Gn.fromBufferAttribute(o, h),
        Un.fromBufferAttribute(o, u),
        p.uv = je.getUV(kn, Cn, Pn, Dn, Hn, Gn, Un, new vt)),
        l && (Hn.fromBufferAttribute(l, c),
        Gn.fromBufferAttribute(l, h),
        Un.fromBufferAttribute(l, u),
        p.uv2 = je.getUV(kn, Cn, Pn, Dn, Hn, Gn, Un, new vt));
        const t = {
            a: c,
            b: h,
            c: u,
            normal: new Lt,
            materialIndex: 0
        };
        je.getNormal(Cn, Pn, Dn, t.normal),
        p.face = t
    }
    return p
}
Wn.prototype.isMesh = !0;
class qn extends En {
    constructor(t=1, e=1, n=1, i=1, r=1, s=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: s
        };
        const a = this;
        i = Math.floor(i),
        r = Math.floor(r),
        s = Math.floor(s);
        const o = []
          , l = []
          , c = []
          , h = [];
        let u = 0
          , d = 0;
        function p(t, e, n, i, r, s, p, m, f, g, v) {
            const y = s / f
              , x = p / g
              , _ = s / 2
              , w = p / 2
              , b = m / 2
              , M = f + 1
              , S = g + 1;
            let T = 0
              , E = 0;
            const A = new Lt;
            for (let s = 0; s < S; s++) {
                const a = s * x - w;
                for (let o = 0; o < M; o++) {
                    const u = o * y - _;
                    A[t] = u * i,
                    A[e] = a * r,
                    A[n] = b,
                    l.push(A.x, A.y, A.z),
                    A[t] = 0,
                    A[e] = 0,
                    A[n] = m > 0 ? 1 : -1,
                    c.push(A.x, A.y, A.z),
                    h.push(o / f),
                    h.push(1 - s / g),
                    T += 1
                }
            }
            for (let t = 0; t < g; t++)
                for (let e = 0; e < f; e++) {
                    const n = u + e + M * t
                      , i = u + e + M * (t + 1)
                      , r = u + (e + 1) + M * (t + 1)
                      , s = u + (e + 1) + M * t;
                    o.push(n, i, s),
                    o.push(i, r, s),
                    E += 6
                }
            a.addGroup(d, E, v),
            d += E,
            u += T
        }
        p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
        p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
        p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
        p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
        p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
        p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new mn(l,3)),
        this.setAttribute("normal", new mn(c,3)),
        this.setAttribute("uv", new mn(h,2))
    }