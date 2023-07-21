unction Ei(t, e, n, i) {
    let r = new WeakMap;
    function s(t) {
        const e = t.target;
        e.removeEventListener("dispose", s),
        n.remove(e.instanceMatrix),
        null !== e.instanceColor && n.remove(e.instanceColor)
    }
    return {
        update: function(t) {
            const a = i.render.frame
              , o = t.geometry
              , l = e.get(t, o);
            return r.get(l) !== a && (e.update(l),
            r.set(l, a)),
            t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s),
            n.update(t.instanceMatrix, 34962),
            null !== t.instanceColor && n.update(t.instanceColor, 34962)),
            l
        },
        dispose: function() {
            r = new WeakMap
        }
    }
}
di.physical = {
    uniforms: Yn([di.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new vt(1,1)
        },
        clearcoatNormalMap: {
            value: null
        },
        sheen: {
            value: new tn(0)
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        }
    }]),
    vertexShader: hi.meshphysical_vert,
    fragmentShader: hi.meshphysical_frag
};
class Ai extends bt {
    constructor(t=null, e=1, n=1, i=1) {
        super(null),
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        },
        this.magFilter = p,
        this.minFilter = p,
        this.wrapR = u,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.needsUpdate = !0
    }
}
Ai.prototype.isDataTexture2DArray = !0;
class Li extends bt {
    constructor(t=null, e=1, n=1, i=1) {
        super(null),
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        },
        this.magFilter = p,
        this.minFilter = p,
        this.wrapR = u,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.needsUpdate = !0
    }
}
Li.prototype.isDataTexture3D = !0;
const Ri = new bt
  , Ci = new Ai
  , Pi = new Li
  , Di = new ei
  , Ii = []
  , Ni = []
  , Bi = new Float32Array(16)
  , zi = new Float32Array(9)
  , Fi = new Float32Array(4);
function Oi(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0)
        return t;
    const r = e * n;
    let s = Ii[r];
    if (void 0 === s && (s = new Float32Array(r),
    Ii[r] = s),
    0 !== e) {
        i.toArray(s, 0);
        for (let i = 1, r = 0; i !== e; ++i)
            r += n,
            t[i].toArray(s, r)
    }
    return s
}
function Hi(t, e) {
    if (t.length !== e.length)
        return !1;
    for (let n = 0, i = t.length; n < i; n++)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function Gi(t, e) {
    for (let n = 0, i = e.length; n < i; n++)
        t[n] = e[n]
}
function Ui(t, e) {
    let n = Ni[e];
    void 0 === n && (n = new Int32Array(e),
    Ni[e] = n);
    for (let i = 0; i !== e; ++i)
        n[i] = t.allocateTextureUnit();
    return n
}
function ki(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e),
    n[0] = e)
}
function Vi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
        n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
        n[0] = e.x,
        n[1] = e.y);
    else {
        if (Hi(n, e))
            return;
        t.uniform2fv(this.addr, e),
        Gi(n, e)
    }
}
function Wi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
        n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
        n[0] = e.x,
        n[1] = e.y,
        n[2] = e.z);
    else if (void 0 !== e.r)
        n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
        n[0] = e.r,
        n[1] = e.g,
        n[2] = e.b);
    else {
        if (Hi(n, e))
            return;
        t.uniform3fv(this.addr, e),
        Gi(n, e)
    }
}
function ji(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
        n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        n[0] = e.x,
        n[1] = e.y,
        n[2] = e.z,
        n[3] = e.w);
    else {
        if (Hi(n, e))
            return;
        t.uniform4fv(this.addr, e),
        Gi(n, e)
    }
}
function qi(t, e) {
    const n = this.cache
      , i = e.elements;
    if (void 0 === i) {
        if (Hi(n, e))
            return;
        t.uniformMatrix2fv(this.addr, !1, e),
        Gi(n, e)
    } else {
        if (Hi(n, i))
            return;
        Fi.set(i),
        t.uniformMatrix2fv(this.addr, !1, Fi),
        Gi(n, i)
    }
}
function Xi(t, e) {
    const n = this.cache
      , i = e.elements;
    if (void 0 === i) {
        if (Hi(n, e))
            return;
        t.uniformMatrix3fv(this.addr, !1, e),
        Gi(n, e)
    } else {
        if (Hi(n, i))
            return;
        zi.set(i),
        t.uniformMatrix3fv(this.addr, !1, zi),
        Gi(n, i)
    }
}
function Yi(t, e) {
    const n = this.cache
      , i = e.elements;
    if (void 0 === i) {
        if (Hi(n, e))
            return;
        t.uniformMatrix4fv(this.addr, !1, e),
        Gi(n, e)
    } else {
        if (Hi(n, i))
            return;
        Bi.set(i),
        t.uniformMatrix4fv(this.addr, !1, Bi),
        Gi(n, i)
    }
}
function Zi(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e),
    n[0] = e)
}
function Ji(t, e) {
    const n = this.cache;
    Hi(n, e) || (t.uniform2iv(this.addr, e),
    Gi(n, e))
}
function Qi(t, e) {
    const n = this.cache;
    Hi(n, e) || (t.uniform3iv(this.addr, e),
    Gi(n, e))
}
function Ki(t, e) {
    const n = this.cache;
    Hi(n, e) || (t.uniform4iv(this.addr, e),
    Gi(n, e))
}
function $i(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e),
    n[0] = e)
}
function tr(t, e) {
    const n = this.cache;
    Hi(n, e) || (t.uniform2uiv(this.addr, e),
    Gi(n, e))
}
function er(t, e) {
    const n = this.cache;
    Hi(n, e) || (t.uniform3uiv(this.addr, e),
    Gi(n, e))
}
function nr(t, e) {
    const n = this.cache;
    Hi(n, e) || (t.uniform4uiv(this.addr, e),
    Gi(n, e))
}
function ir(t, e, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r),
    i[0] = r),
    n.safeSetTexture2D(e || Ri, r)
}
function rr(t, e, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture3D(e || Pi, r)
}
function sr(t, e, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r),
    i[0] = r),
    n.safeSetTextureCube(e || Di, r)
}
function ar(t, e, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture2DArray(e || Ci, r)
}
function or(t, e) {
    t.uniform1fv(this.addr, e)
}
function lr(t, e) {
    const n = Oi(e, this.size, 2);
    t.uniform2fv(this.addr, n)
}
function cr(t, e) {
    const n = Oi(e, this.size, 3);
    t.uniform3fv(this.addr, n)
}
function hr(t, e) {
    const n = Oi(e, this.size, 4);
    t.uniform4fv(this.addr, n)
}
function ur(t, e) {
    const n = Oi(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n)
}
function dr(t, e) {
    const n = Oi(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n)
}
function pr(t, e) {
    const n = Oi(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n)
}
function mr(t, e) {
    t.uniform1iv(this.addr, e)
}
function fr(t, e) {
    t.uniform2iv(this.addr, e)
}
function gr(t, e) {
    t.uniform3iv(this.addr, e)
}
function vr(t, e) {
    t.uniform4iv(this.addr, e)
}
function yr(t, e) {
    t.uniform1uiv(this.addr, e)
}
function xr(t, e) {
    t.uniform2uiv(this.addr, e)
}
function _r(t, e) {
    t.uniform3uiv(this.addr, e)
}
function wr(t, e) {
    t.uniform4uiv(this.addr, e)
}
function br(t, e, n) {
    const i = e.length
      , r = Ui(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t)
        n.safeSetTexture2D(e[t] || Ri, r[t])
}
function Mr(t, e, n) {
    const i = e.length
      , r = Ui(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t)
        n.safeSetTextureCube(e[t] || Di, r[t])
}
function Sr(t, e, n) {
    this.id = t,
    this.addr = n,
    this.cache = [],
    this.setValue = function(t) {
        switch (t) {
        case 5126:
            return ki;
        case 35664:
            return Vi;
        case 35665:
            return Wi;
        case 35666:
            return ji;
        case 35674:
            return qi;
        case 35675:
            return Xi;
        case 35676:
            return Yi;
        case 5124:
        case 35670:
            return Zi;
        case 35667:
        case 35671:
            return Ji;
        case 35668:
        case 35672:
            return Qi;
        case 35669:
        case 35673:
            return Ki;
        case 5125:
            return $i;
        case 36294:
            return tr;
        case 36295:
            return er;
        case 36296:
            return nr;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return ir;
        case 35679:
        case 36299:
        case 36307:
            return rr;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return sr;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return ar
        }
    }(e.type)
}
function Tr(t, e, n) {
    this.id = t,
    this.addr = n,
    this.cache = [],
    this.size = e.size,
    this.setValue = function(t) {
        switch (t) {
        case 5126:
            return or;
        case 35664:
            return lr;
        case 35665:
            return cr;
        case 35666:
            return hr;
        case 35674:
            return ur;
        case 35675:
            return dr;
        case 35676:
            return pr;
        case 5124:
        case 35670:
            return mr;
        case 35667:
        case 35671:
            return fr;
        case 35668:
        case 35672:
            return gr;
        case 35669:
        case 35673:
            return vr;
        case 5125:
            return yr;
        case 36294:
            return xr;
        case 36295:
            return _r;
        case 36296:
            return wr;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return br;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Mr
        }
    }(e.type)
}
function Er(t) {
    this.id = t,
    this.seq = [],
    this.map = {}
}
Tr.prototype.updateCache = function(t) {
    const e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
    Gi(e, t)
}
,
Er.prototype.setValue = function(t, e, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
        const s = i[r];
        s.setValue(t, e[s.id], n)
    }
}
;
const Ar = /(\w+)(\])?(\[|\.)?/g;
function Lr(t, e) {
    t.seq.push(e),
    t.map[e.id] = e
}
function Rr(t, e, n) {
    const i = t.name
      , r = i.length;
    for (Ar.lastIndex = 0; ; ) {
        const s = Ar.exec(i)
          , a = Ar.lastIndex;
        let o = s[1];
        const l = "]" === s[2]
          , c = s[3];
        if (l && (o |= 0),
        void 0 === c || "[" === c && a + 2 === r) {
            Lr(n, void 0 === c ? new Sr(o,t,e) : new Tr(o,t,e));
            break
        }
        {
            let t = n.map[o];
            void 0 === t && (t = new Er(o),
            Lr(n, t)),
            n = t
        }
    }
}
function Cr(t, e) {
    this.seq = [],
    this.map = {};
    const n = t.getProgramParameter(e, 35718);
    for (let i = 0; i < n; ++i) {
        const n = t.getActiveUniform(e, i);
        Rr(n, t.getUniformLocation(e, n.name), this)
    }
}
function Pr(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n),
    t.compileShader(i),
    i
}
Cr.prototype.setValue = function(t, e, n, i) {
    const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i)
}
,
Cr.prototype.setOptional = function(t, e, n) {
    const i = e[n];
    void 0 !== i && this.setValue(t, n, i)
}
,
Cr.upload = function(t, e, n, i) {
    for (let r = 0, s = e.length; r !== s; ++r) {
        const s = e[r]
          , a = n[s.id];
        !1 !== a.needsUpdate && s.setValue(t, a.value, i)
    }
}
,
Cr.seqWithValue = function(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
        const r = t[i];
        r.id in e && n.push(r)
    }
    return n
}
;
let Dr = 0;
function Ir(t) {
    switch (t) {
    case X:
        return ["Linear", "( value )"];
    case Y:
        return ["sRGB", "( value )"];
    case J:
        return ["RGBE", "( value )"];
    case Q:
        return ["RGBM", "( value, 7.0 )"];
    case K:
        return ["RGBM", "( value, 16.0 )"];
    case $:
        return ["RGBD", "( value, 256.0 )"];
    case Z:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case 3003:
        return ["LogLuv", "( value )"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
        ["Linear", "( value )"]
    }
}
function Nr(t, e, n) {
    const i = t.getShaderParameter(e, 35713)
      , r = t.getShaderInfoLog(e).trim();
    if (i && "" === r)
        return "";
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
        const e = t.split("\n");
        for (let t = 0; t < e.length; t++)
            e[t] = t + 1 + ": " + e[t];
        return e.join("\n")
    }(t.getShaderSource(e))
}
function Br(t, e) {
    const n = Ir(e);
    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
}
function zr(t, e) {
    const n = Ir(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
}
function Fr(t, e) {
    let n;
    switch (e) {
    case 1:
        n = "Linear";
        break;
    case 2:
        n = "Reinhard";
        break;
    case 3:
        n = "OptimizedCineon";
        break;
    case 4:
        n = "ACESFilmic";
        break;
    case 5:
        n = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        n = "Linear"
    }
    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
}
function Or(t) {
    return "" !== t
}
function Hr(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function Gr(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Ur = /^[ \t]*#include +<([\w\d./]+)>/gm;
function kr(t) {
    return t.replace(Ur, Vr)
}
function Vr(t, e) {
    const n = hi[e];
    if (void 0 === n)
        throw new Error("Can not resolve #include <" + e + ">");
    return kr(n)
}
const Wr = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
  , jr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function qr(t) {
    return t.replace(jr, Yr).replace(Wr, Xr)
}
function Xr(t, e, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
    Yr(t, e, n, i)
}
function Yr(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++)
        r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
    return r
}
function Zr(t) {
    let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
    e
}
function Jr(t, e, n, i) {
    const a = t.getContext()
      , o = n.defines;
    let h = n.vertexShader
      , u = n.fragmentShader;
    const d = function(t) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
        e
    }(n)
      , p = function(t) {
        let e = "ENVMAP_TYPE_CUBE";
        if (t.envMap)
            switch (t.envMapMode) {
            case r:
            case s:
                e = "ENVMAP_TYPE_CUBE";
                break;
            case l:
            case c:
                e = "ENVMAP_TYPE_CUBE_UV"
            }
        return e
    }(n)
      , m = function(t) {
        let e = "ENVMAP_MODE_REFLECTION";
        if (t.envMap)
            switch (t.envMapMode) {
            case s:
            case c:
                e = "ENVMAP_MODE_REFRACTION"
            }
        return e
    }(n)
      , f = function(t) {
        let e = "ENVMAP_BLENDING_NONE";
        if (t.envMap)
            switch (t.combine) {
            case 0:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                e = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                e = "ENVMAP_BLENDING_ADD"
            }
        return e
    }(n)
      , g = t.gammaFactor > 0 ? t.gammaFactor : 1
      , v = n.isWebGL2 ? "" : function(t) {
        return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Or).join("\n")
    }(n)
      , y = function(t) {
        const e = [];
        for (const n in t) {
            const i = t[n];
            !1 !== i && e.push("#define " + n + " " + i)
        }
        return e.join("\n")
    }(o)
      , x = a.createProgram();
    let _, w, b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (_ = [y].filter(Or).join("\n"),
    _.length > 0 && (_ += "\n"),
    w = [v, y].filter(Or).join("\n"),
    w.length > 0 && (w += "\n")) : (_ = [Zr(n), "#define SHADER_NAME " + n.shaderName, y, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + m : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Or).join("\n"),
    w = [v, Zr(n), "#define SHADER_NAME " + n.shaderName, y, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + m : "", n.envMap ? "#define " + f : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? hi.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Fr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", hi.encodings_pars_fragment, n.map ? Br("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Br("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Br("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Br("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Br("lightMapTexelToLinear", n.lightMapEncoding) : "", zr("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Or).join("\n")),
    h = kr(h),
    h = Hr(h, n),
    h = Gr(h, n),
    u = kr(u),
    u = Hr(u, n),
    u = Gr(u, n),
    h = qr(h),
    u = qr(u),
    n.isWebGL2 && !0 !== n.isRawShaderMaterial && (b = "#version 300 es\n",
    _ = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _,
    w = ["#define varying in", n.glslVersion === it ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === it ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + w);
    const M = b + w + u
      , S = Pr(a, 35633, b + _ + h)
      , T = Pr(a, 35632, M);
    if (a.attachShader(x, S),
    a.attachShader(x, T),
    void 0 !== n.index0AttributeName ? a.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && a.bindAttribLocation(x, 0, "position"),
    a.linkProgram(x),
    t.debug.checkShaderErrors) {
        const t = a.getProgramInfoLog(x).trim()
          , e = a.getShaderInfoLog(S).trim()
          , n = a.getShaderInfoLog(T).trim();
        let i = !0
          , r = !0;
        if (!1 === a.getProgramParameter(x, 35714)) {
            i = !1;
            const e = Nr(a, S, "vertex")
              , n = Nr(a, T, "fragment");
            console.error("THREE.WebGLProgram: shader error: ", a.getError(), "35715", a.getProgramParameter(x, 35715), "gl.getProgramInfoLog", t, e, n)
        } else
            "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (r = !1);
        r && (this.diagnostics = {
            runnable: i,
            programLog: t,
            vertexShader: {
                log: e,
                prefix: _
            },
            fragmentShader: {
                log: n,
                prefix: w
            }
        })
    }
    let E, A;
    return a.deleteShader(S),
    a.deleteShader(T),
    this.getUniforms = function() {
        return void 0 === E && (E = new Cr(a,x)),
        E
    }
    ,
    this.getAttributes = function() {
        return void 0 === A && (A = function(t, e) {
            const n = {}
              , i = t.getProgramParameter(e, 35721);
            for (let r = 0; r < i; r++) {
                const i = t.getActiveAttrib(e, r).name;
                n[i] = t.getAttribLocation(e, i)
            }
            return n
        }(a, x)),
        A
    }
    ,
    this.destroy = function() {
        i.releaseStatesOfProgram(this),
        a.deleteProgram(x),
        this.program = void 0
    }
    ,
    this.name = n.shaderName,
    this.id = Dr++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = x,
    this.vertexShader = S,
    this.fragmentShader = T,
    this
}
function Qr(t, e, n, i, r, s) {
    const a = []
      , o = i.isWebGL2
      , h = i.logarithmicDepthBuffer
      , u = i.floatVertexTextures
      , d = i.maxVertexUniforms
      , p = i.vertexTextures;
    let m = i.precision;
    const f = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    }
      , g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];
    function v(t) {
        let e;
        return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
        e = t.texture.encoding) : e = X,
        e
    }
    return {
        getParameters: function(r, a, g, y, x) {
            const _ = y.fog
              , w = r.isMeshStandardMaterial ? y.environment : null
              , b = e.get(r.envMap || w)
              , M = f[r.type]
              , S = x.isSkinnedMesh ? function(t) {
                const e = t.skeleton.bones;
                if (u)
                    return 1024;
                {
                    const t = d
                      , n = Math.floor((t - 20) / 4)
                      , i = Math.min(n, e.length);
                    return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."),
                    0) : i
                }
            }(x) : 0;
            let T, E;
            if (null !== r.precision && (m = i.getMaxPrecision(r.precision),
            m !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", m, "instead.")),
            M) {
                const t = di[M];
                T = t.vertexShader,
                E = t.fragmentShader
            } else
                T = r.vertexShader,
                E = r.fragmentShader;
            const A = t.getRenderTarget();
            return {
                isWebGL2: o,
                shaderID: M,
                shaderName: r.type,
                vertexShader: T,
                fragmentShader: E,
                defines: r.defines,
                isRawShaderMaterial: !0 === r.isRawShaderMaterial,
                glslVersion: r.glslVersion,
                precision: m,
                instancing: !0 === x.isInstancedMesh,
                instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
                supportsVertexTextures: p,
                outputEncoding: null !== A ? v(A.texture) : t.outputEncoding,
                map: !!r.map,
                mapEncoding: v(r.map),
                matcap: !!r.matcap,
                matcapEncoding: v(r.matcap),
                envMap: !!b,
                envMapMode: b && b.mapping,
                envMapEncoding: v(b),
                envMapCubeUV: !!b && (b.mapping === l || b.mapping === c),
                lightMap: !!r.lightMap,
                lightMapEncoding: v(r.lightMap),
                aoMap: !!r.aoMap,
                emissiveMap: !!r.emissiveMap,
                emissiveMapEncoding: v(r.emissiveMap),
                bumpMap: !!r.bumpMap,
                normalMap: !!r.normalMap,
                objectSpaceNormalMap: 1 === r.normalMapType,
                tangentSpaceNormalMap: 0 === r.normalMapType,
                clearcoatMap: !!r.clearcoatMap,
                clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
                clearcoatNormalMap: !!r.clearcoatNormalMap,
                displacementMap: !!r.displacementMap,
                roughnessMap: !!r.roughnessMap,
                metalnessMap: !!r.metalnessMap,
                specularMap: !!r.specularMap,
                alphaMap: !!r.alphaMap,
                gradientMap: !!r.gradientMap,
                sheen: !!r.sheen,
                transmissionMap: !!r.transmissionMap,
                combine: r.combine,
                vertexTangents: r.normalMap && r.vertexTangents,
                vertexColors: r.vertexColors,
                vertexAlphas: !0 === r.vertexColors && x.geometry && x.geometry.attributes.color && 4 === x.geometry.attributes.color.itemSize,
                vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
                uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
                fog: !!_,
                useFog: r.fog,
                fogExp2: _ && _.isFogExp2,
                flatShading: !!r.flatShading,
                sizeAttenuation: r.sizeAttenuation,
                logarithmicDepthBuffer: h,
                skinning: r.skinning && S > 0,
                maxBones: S,
                useVertexTexture: u,
                morphTargets: r.morphTargets,
                morphNormals: r.morphNormals,
                numDirLights: a.directional.length,
                numPointLights: a.point.length,
                numSpotLights: a.spot.length,
                numRectAreaLights: a.rectArea.length,
                numHemiLights: a.hemi.length,
                numDirLightShadows: a.directionalShadowMap.length,
                numPointLightShadows: a.pointShadowMap.length,
                numSpotLightShadows: a.spotShadowMap.length,
                numClippingPlanes: s.numPlanes,
                numClipIntersection: s.numIntersection,
                dithering: r.dithering,
                shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: r.toneMapped ? t.toneMapping : 0,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: r.premultipliedAlpha,
                alphaTest: r.alphaTest,
                doubleSided: 2 === r.side,
                flipSided: 1 === r.side,
                depthPacking: void 0 !== r.depthPacking && r.depthPacking,
                index0AttributeName: r.index0AttributeName,
                extensionDerivatives: r.extensions && r.extensions.derivatives,
                extensionFragDepth: r.extensions && r.extensions.fragDepth,
                extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
                extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: o || n.has("EXT_shader_texture_lod"),
                customProgramCacheKey: r.customProgramCacheKey()
            }
        },
        getProgramCacheKey: function(e) {
            const n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader),
            n.push(e.vertexShader)),
            void 0 !== e.defines)
                for (const t in e.defines)
                    n.push(t),
                    n.push(e.defines[t]);
            if (!1 === e.isRawShaderMaterial) {
                for (let t = 0; t < g.length; t++)
                    n.push(e[g[t]]);
                n.push(t.outputEncoding),
                n.push(t.gammaFactor)
            }
            return n.push(e.customProgramCacheKey),
            n.join()
        },
        getUniforms: function(t) {
            const e = f[t.type];
            let n;
            if (e) {
                const t = di[e];
                n = Zn.clone(t.uniforms)
            } else
                n = t.uniforms;
            return n
        },
        acquireProgram: function(e, n) {
            let i;
            for (let t = 0, e = a.length; t < e; t++) {
                const e = a[t];
                if (e.cacheKey === n) {
                    i = e,
                    ++i.usedTimes;
                    break
                }
            }
            return void 0 === i && (i = new Jr(t,n,e,r),
            a.push(i)),
            i
        },
        releaseProgram: function(t) {
            if (0 == --t.usedTimes) {
                const e = a.indexOf(t);
                a[e] = a[a.length - 1],
                a.pop(),
                t.destroy()
            }
        },
        programs: a
    }
}
function Kr() {
    let t = new WeakMap;
    return {
        get: function(e) {
            let n = t.get(e);
            return void 0 === n && (n = {},
            t.set(e, n)),
            n
        },
        remove: function(e) {
            t.delete(e)
        },
        update: function(e, n, i) {
            t.get(e)[n] = i
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}
function $r(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
}
function ts(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
}
function es(t) {
    const e = [];
    let n = 0;
    const i = []
      , r = []
      , s = {
        id: -1
    };
    function a(i, r, a, o, l, c) {
        let h = e[n];
        const u = t.get(a);
        return void 0 === h ? (h = {
            id: i.id,
            object: i,
            geometry: r,
            material: a,
            program: u.program || s,
            groupOrder: o,
            renderOrder: i.renderOrder,
            z: l,
            group: c
        },
        e[n] = h) : (h.id = i.id,
        h.object = i,
        h.geometry = r,
        h.material = a,
        h.program = u.program || s,
        h.groupOrder = o,
        h.renderOrder = i.renderOrder,
        h.z = l,
        h.group = c),
        n++,
        h
    }
    return {
        opaque: i,
        transparent: r,
        init: function() {
            n = 0,
            i.length = 0,
            r.length = 0
        },
        push: function(t, e, n, s, o, l) {
            const c = a(t, e, n, s, o, l);
            (!0 === n.transparent ? r : i).push(c)
        },
        unshift: function(t, e, n, s, o, l) {
            const c = a(t, e, n, s, o, l);
            (!0 === n.transparent ? r : i).unshift(c)
        },
        finish: function() {
            for (let t = n, i = e.length; t < i; t++) {
                const n = e[t];
                if (null === n.id)
                    break;
                n.id = null,
                n.object = null,
                n.geometry = null,
                n.material = null,
                n.program = null,
                n.group = null
            }
        },
        sort: function(t, e) {
            i.length > 1 && i.sort(t || $r),
            r.length > 1 && r.sort(e || ts)
        }
    }
}
function ns(t) {
    let e = new WeakMap;
    return {
        get: function(n, i) {
            let r;
            return !1 === e.has(n) ? (r = new es(t),
            e.set(n, [r])) : i >= e.get(n).length ? (r = new es(t),
            e.get(n).push(r)) : r = e.get(n)[i],
            r
        },
        dispose: function() {
            e = new WeakMap
        }
    }
}
function is() {
    const t = {};
    return {
        get: function(e) {
            if (void 0 !== t[e.id])
                return t[e.id];
            let n;
            switch (e.type) {
            case "DirectionalLight":
                n = {
                    direction: new Lt,
                    color: new tn
                };
                break;
            case "SpotLight":
                n = {
                    position: new Lt,
                    direction: new Lt,
                    color: new tn,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                n = {
                    position: new Lt,
                    color: new tn,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                n = {
                    direction: new Lt,
                    skyColor: new tn,
                    groundColor: new tn
                };
                break;
            case "RectAreaLight":
                n = {
                    color: new tn,
                    position: new Lt,
                    halfWidth: new Lt,
                    halfHeight: new Lt
                }
            }
            return t[e.id] = n,
            n
        }
    }
}
let rs = 0;
function ss(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
}
function as(t, e) {
    const n = new is
      , i = function() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id])
                    return t[e.id];
                let n;
                switch (e.type) {
                case "DirectionalLight":
                case "SpotLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new vt
                    };
                    break;
                case "PointLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new vt,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    }
                }
                return t[e.id] = n,
                n
            }
        }
    }()
      , r = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
    };
    for (let t = 0; t < 9; t++)
        r.probe.push(new Lt);
    const s = new Lt
      , a = new se
      , o = new se;
    return {
        setup: function(s) {
            let a = 0
              , o = 0
              , l = 0;
            for (let t = 0; t < 9; t++)
                r.probe[t].set(0, 0, 0);
            let c = 0
              , h = 0
              , u = 0
              , d = 0
              , p = 0
              , m = 0
              , f = 0
              , g = 0;
            s.sort(ss);
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t]
                  , v = e.color
                  , y = e.intensity
                  , x = e.distance
                  , _ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                if (e.isAmbientLight)
                    a += v.r * y,
                    o += v.g * y,
                    l += v.b * y;
                else if (e.isLightProbe)
                    for (let t = 0; t < 9; t++)
                        r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                else if (e.isDirectionalLight) {
                    const t = n.get(e);
                    if (t.color.copy(e.color).multiplyScalar(e.intensity),
                    e.castShadow) {
                        const t = e.shadow
                          , n = i.get(e);
                        n.shadowBias = t.bias,
                        n.shadowNormalBias = t.normalBias,
                        n.shadowRadius = t.radius,
                        n.shadowMapSize = t.mapSize,
                        r.directionalShadow[c] = n,
                        r.directionalShadowMap[c] = _,
                        r.directionalShadowMatrix[c] = e.shadow.matrix,
                        m++
                    }
                    r.directional[c] = t,
                    c++
                } else if (e.isSpotLight) {
                    const t = n.get(e);
                    if (t.position.setFromMatrixPosition(e.matrixWorld),
                    t.color.copy(v).multiplyScalar(y),
                    t.distance = x,
                    t.coneCos = Math.cos(e.angle),
                    t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)),
                    t.decay = e.decay,
                    e.castShadow) {
                        const t = e.shadow
                          , n = i.get(e);
                        n.shadowBias = t.bias,
                        n.shadowNormalBias = t.normalBias,
                        n.shadowRadius = t.radius,
                        n.shadowMapSize = t.mapSize,
                        r.spotShadow[u] = n,
                        r.spotShadowMap[u] = _,
                        r.spotShadowMatrix[u] = e.shadow.matrix,
                        g++
                    }
                    r.spot[u] = t,
                    u++
                } else if (e.isRectAreaLight) {
                    const t = n.get(e);
                    t.color.copy(v).multiplyScalar(y),
                    t.halfWidth.set(.5 * e.width, 0, 0),
                    t.halfHeight.set(0, .5 * e.height, 0),
                    r.rectArea[d] = t,
                    d++
                } else if (e.isPointLight) {
                    const t = n.get(e);
                    if (t.color.copy(e.color).multiplyScalar(e.intensity),
                    t.distance = e.distance,
                    t.decay = e.decay,
                    e.castShadow) {
                        const t = e.shadow
                          , n = i.get(e);
                        n.shadowBias = t.bias,
                        n.shadowNormalBias = t.normalBias,
                        n.shadowRadius = t.radius,
                        n.shadowMapSize = t.mapSize,
                        n.shadowCameraNear = t.camera.near,
                        n.shadowCameraFar = t.camera.far,
                        r.pointShadow[h] = n,
                        r.pointShadowMap[h] = _,
                        r.pointShadowMatrix[h] = e.shadow.matrix,
                        f++
                    }
                    r.point[h] = t,
                    h++
                } else if (e.isHemisphereLight) {
                    const t = n.get(e);
                    t.skyColor.copy(e.color).multiplyScalar(y),
                    t.groundColor.copy(e.groundColor).multiplyScalar(y),
                    r.hemi[p] = t,
                    p++
                }
            }
            d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ui.LTC_FLOAT_1,
            r.rectAreaLTC2 = ui.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ui.LTC_HALF_1,
            r.rectAreaLTC2 = ui.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
            r.ambient[0] = a,
            r.ambient[1] = o,
            r.ambient[2] = l;
            const v = r.hash;
            v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (r.directional.length = c,
            r.spot.length = u,
            r.rectArea.length = d,
            r.point.length = h,
            r.hemi.length = p,
            r.directionalShadow.length = m,
            r.directionalShadowMap.length = m,
            r.pointShadow.length = f,
            r.pointShadowMap.length = f,
            r.spotShadow.length = g,
            r.spotShadowMap.length = g,
            r.directionalShadowMatrix.length = m,
            r.pointShadowMatrix.length = f,
            r.spotShadowMatrix.length = g,
            v.directionalLength = c,
            v.pointLength = h,
            v.spotLength = u,
            v.rectAreaLength = d,
            v.hemiLength = p,
            v.numDirectionalShadows = m,
            v.numPointShadows = f,
            v.numSpotShadows = g,
            r.version = rs++)
        },
        setupView: function(t, e) {
            let n = 0
              , i = 0
              , l = 0
              , c = 0
              , h = 0;
            const u = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
                const d = t[e];
                if (d.isDirectionalLight) {
                    const t = r.directional[n];
                    t.direction.setFromMatrixPosition(d.matrixWorld),
                    s.setFromMatrixPosition(d.target.matrixWorld),
                    t.direction.sub(s),
                    t.direction.transformDirection(u),
                    n++
                } else if (d.isSpotLight) {
                    const t = r.spot[l];
                    t.position.setFromMatrixPosition(d.matrixWorld),
                    t.position.applyMatrix4(u),
                    t.direction.setFromMatrixPosition(d.matrixWorld),
                    s.setFromMatrixPosition(d.target.matrixWorld),
                    t.direction.sub(s),
                    t.direction.transformDirection(u),
                    l++
                } else if (d.isRectAreaLight) {
                    const t = r.rectArea[c];
                    t.position.setFromMatrixPosition(d.matrixWorld),
                    t.position.applyMatrix4(u),
                    o.identity(),
                    a.copy(d.matrixWorld),
                    a.premultiply(u),
                    o.extractRotation(a),
                    t.halfWidth.set(.5 * d.width, 0, 0),
                    t.halfHeight.set(0, .5 * d.height, 0),
                    t.halfWidth.applyMatrix4(o),
                    t.halfHeight.applyMatrix4(o),
                    c++
                } else if (d.isPointLight) {
                    const t = r.point[i];
                    t.position.setFromMatrixPosition(d.matrixWorld),
                    t.position.applyMatrix4(u),
                    i++
                } else if (d.isHemisphereLight) {
                    const t = r.hemi[h];
                    t.direction.setFromMatrixPosition(d.matrixWorld),
                    t.direction.transformDirection(u),
                    t.direction.normalize(),
                    h++
                }
            }
        },
        state: r
    }
}
function os(t, e) {
    const n = new as(t,e)
      , i = []
      , r = [];
    return {
        init: function() {
            i.length = 0,
            r.length = 0
        },
        state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
        },
        setupLights: function() {
            n.setup(i)
        },
        setupLightsView: function(t) {
            n.setupView(i, t)
        },
        pushLight: function(t) {
            i.push(t)
        },
        pushShadow: function(t) {
            r.push(t)
        }
    }
}
function ls(t, e) {
    let n = new WeakMap;
    return {
        get: function(i, r=0) {
            let s;
            return !1 === n.has(i) ? (s = new os(t,e),
            n.set(i, [s])) : r >= n.get(i).length ? (s = new os(t,e),
            n.get(i).push(s)) : s = n.get(i)[r],
            s
        },
        dispose: function() {
            n = new WeakMap
        }
    }
}
class cs extends Xe {
    constructor(t) {
        super(),
        this.type = "MeshDepthMaterial",
        this.depthPacking = 3200,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.depthPacking = t.depthPacking,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
}
cs.prototype.isMeshDepthMaterial = !0;
class hs extends Xe {
    constructor(t) {
        super(),
        this.type = "MeshDistanceMaterial",
        this.referencePosition = new Lt,
        this.nearDistance = 1,
        this.farDistance = 1e3,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.fog = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.referencePosition.copy(t.referencePosition),
        this.nearDistance = t.nearDistance,
        this.farDistance = t.farDistance,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
}
hs.prototype.isMeshDistanceMaterial = !0;
function us(t, e, n) {
    let i = new ai;
    const r = new vt
      , s = new vt
      , a = new St
      , o = []
      , l = []
      , c = {}
      , h = n.maxTextureSize
      , u = {
        0: 1,
        1: 0,
        2: 2
    }
      , d = new Jn({
        defines: {
            SAMPLE_RATE: 2 / 8,
            HALF_SAMPLE_RATE: 1 / 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new vt
            },
            radius: {
                value: 4
            }
        },
        vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    })
      , m = d.clone();
    m.defines.HORIZONTAL_PASS = 1;
    const f = new En;
    f.setAttribute("position", new sn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const v = new Wn(f,d)
      , y = this;
    function x(n, i) {
        const r = e.update(v);
        d.uniforms.shadow_pass.value = n.map.texture,
        d.uniforms.resolution.value = n.mapSize,
        d.uniforms.radius.value = n.radius,
        t.setRenderTarget(n.mapPass),
        t.clear(),
        t.renderBufferDirect(i, null, r, d, v, null),
        m.uniforms.shadow_pass.value = n.mapPass.texture,
        m.uniforms.resolution.value = n.mapSize,
        m.uniforms.radius.value = n.radius,
        t.setRenderTarget(n.map),
        t.clear(),
        t.renderBufferDirect(i, null, r, m, v, null)
    }
    function _(t, e, n) {
        const i = t << 0 | e << 1 | n << 2;
        let r = o[i];
        return void 0 === r && (r = new cs({
            depthPacking: 3201,
            morphTargets: t,
            skinning: e
        }),
        o[i] = r),
        r
    }
    function w(t, e, n) {
        const i = t << 0 | e << 1 | n << 2;
        let r = l[i];
        return void 0 === r && (r = new hs({
            morphTargets: t,
            skinning: e
        }),
        l[i] = r),
        r
    }
    function b(e, n, i, r, s, a, o) {
        let l = null
          , h = _
          , d = e.customDepthMaterial;
        if (!0 === r.isPointLight && (h = w,
        d = e.customDistanceMaterial),
        void 0 === d) {
            let t = !1;
            !0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
            let r = !1;
            !0 === e.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e));
            l = h(t, r, !0 === e.isInstancedMesh)
        } else
            l = d;
        if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
            const t = l.uuid
              , e = i.uuid;
            let n = c[t];
            void 0 === n && (n = {},
            c[t] = n);
            let r = n[e];
            void 0 === r && (r = l.clone(),
            n[e] = r),
            l = r
        }
        return l.visible = i.visible,
        l.wireframe = i.wireframe,
        l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side],
        l.clipShadows = i.clipShadows,
        l.clippingPlanes = i.clippingPlanes,
        l.clipIntersection = i.clipIntersection,
        l.wireframeLinewidth = i.wireframeLinewidth,
        l.linewidth = i.linewidth,
        !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld),
        l.nearDistance = s,
        l.farDistance = a),
        l
    }
    function M(n, r, s, a, o) {
        if (!1 === n.visible)
            return;
        if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
            const i = e.update(n)
              , r = n.material;
            if (Array.isArray(r)) {
                const e = i.groups;
                for (let l = 0, c = e.length; l < c; l++) {
                    const c = e[l]
                      , h = r[c.materialIndex];
                    if (h && h.visible) {
                        const e = b(n, i, h, a, s.near, s.far, o);
                        t.renderBufferDirect(s, null, i, e, n, c)
                    }
                }
            } else if (r.visible) {
                const e = b(n, i, r, a, s.near, s.far, o);
                t.renderBufferDirect(s, null, i, e, n, null)
            }
        }
        const l = n.children;
        for (let t = 0, e = l.length; t < e; t++)
            M(l[t], r, s, a, o)
    }
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = 1,
    this.render = function(e, n, o) {
        if (!1 === y.enabled)
            return;
        if (!1 === y.autoUpdate && !1 === y.needsUpdate)
            return;
        if (0 === e.length)
            return;
        const l = t.getRenderTarget()
          , c = t.getActiveCubeFace()
          , u = t.getActiveMipmapLevel()
          , d = t.state;
        d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
        for (let l = 0, c = e.length; l < c; l++) {
            const c = e[l]
              , u = c.shadow;
            if (void 0 === u) {
                console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                continue
            }
            if (!1 === u.autoUpdate && !1 === u.needsUpdate)
                continue;
            r.copy(u.mapSize);
            const m = u.getFrameExtents();
            if (r.multiply(m),
            s.copy(u.mapSize),
            (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / m.x),
            r.x = s.x * m.x,
            u.mapSize.x = s.x),
            r.y > h && (s.y = Math.floor(h / m.y),
            r.y = s.y * m.y,
            u.mapSize.y = s.y)),
            null === u.map && !u.isPointLightShadow && 3 === this.type) {
                const t = {
                    minFilter: g,
                    magFilter: g,
                    format: E
                };
                u.map = new Tt(r.x,r.y,t),
                u.map.texture.name = c.name + ".shadowMap",
                u.mapPass = new Tt(r.x,r.y,t),
                u.camera.updateProjectionMatrix()
            }
            if (null === u.map) {
                const t = {
                    minFilter: p,
                    magFilter: p,
                    format: E
                };
                u.map = new Tt(r.x,r.y,t),
                u.map.texture.name = c.name + ".shadowMap",
                u.camera.updateProjectionMatrix()
            }
            t.setRenderTarget(u.map),
            t.clear();
            const f = u.getViewportCount();
            for (let t = 0; t < f; t++) {
                const e = u.getViewport(t);
                a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
                d.viewport(a),
                u.updateMatrices(c, t),
                i = u.getFrustum(),
                M(n, o, u.camera, c, this.type)
            }
            u.isPointLightShadow || 3 !== this.type || x(u, o),
            u.needsUpdate = !1
        }
        y.needsUpdate = !1,
        t.setRenderTarget(l, c, u)
    }
}
function ds(t, e, i) {
    const r = i.isWebGL2;
    const s = new function() {
        let e = !1;
        const n = new St;
        let i = null;
        const r = new St(0,0,0,0);
        return {
            setMask: function(n) {
                i === n || e || (t.colorMask(n, n, n, n),
                i = n)
            },
            setLocked: function(t) {
                e = t
            },
            setClear: function(e, i, s, a, o) {
                !0 === o && (e *= a,
                i *= a,
                s *= a),
                n.set(e, i, s, a),
                !1 === r.equals(n) && (t.clearColor(e, i, s, a),
                r.copy(n))
            },
            reset: function() {
                e = !1,
                i = null,
                r.set(-1, 0, 0, 0)
            }
        }
    }
      , a = new function() {
        let e = !1
          , n = null
          , i = null
          , r = null;
        return {
            setTest: function(t) {
                t ? z(2929) : F(2929)
            },
            setMask: function(i) {
                n === i || e || (t.depthMask(i),
                n = i)
            },
            setFunc: function(e) {
                if (i !== e) {
                    if (e)
                        switch (e) {
                        case 0:
                            t.depthFunc(512);
                            break;
                        case 1:
                            t.depthFunc(519);
                            break;
                        case 2:
                            t.depthFunc(513);
                            break;
                        case 3:
                            t.depthFunc(515);
                            break;
                        case 4:
                            t.depthFunc(514);
                            break;
                        case 5:
                            t.depthFunc(518);
                            break;
                        case 6:
                            t.depthFunc(516);
                            break;
                        case 7:
                            t.depthFunc(517);
                            break;
                        default:
                            t.depthFunc(515)
                        }
                    else
                        t.depthFunc(515);
                    i = e
                }
            },
            setLocked: function(t) {
                e = t
            },
            setClear: function(e) {
                r !== e && (t.clearDepth(e),
                r = e)
            },
            reset: function() {
                e = !1,
                n = null,
                i = null,
                r = null
            }
        }
    }
      , o = new function() {
        let e = !1
          , n = null
          , i = null
          , r = null
          , s = null
          , a = null
          , o = null
          , l = null
          , c = null;
        return {
            setTest: function(t) {
                e || (t ? z(2960) : F(2960))
            },
            setMask: function(i) {
                n === i || e || (t.stencilMask(i),
                n = i)
            },
            setFunc: function(e, n, a) {
                i === e && r === n && s === a || (t.stencilFunc(e, n, a),
                i = e,
                r = n,
                s = a)
            },
            setOp: function(e, n, i) {
                a === e && o === n && l === i || (t.stencilOp(e, n, i),
                a = e,
                o = n,
                l = i)
            },
            setLocked: function(t) {
                e = t
            },
            setClear: function(e) {
                c !== e && (t.clearStencil(e),
                c = e)
            },
            reset: function() {
                e = !1,
                n = null,
                i = null,
                r = null,
                s = null,
                a = null,
                o = null,
                l = null,
                c = null
            }
        }
    }
    ;
    let l = {}
      , c = null
      , h = {}
      , u = null
      , d = !1
      , p = null
      , m = null
      , f = null
      , g = null
      , v = null
      , y = null
      , x = null
      , _ = !1
      , w = null
      , b = null
      , M = null
      , S = null
      , T = null;
    const E = t.getParameter(35661);
    let A = !1
      , L = 0;
    const R = t.getParameter(7938);
    -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]),
    A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),
    A = L >= 2);
    let C = null
      , P = {};
    const D = new St(0,0,t.canvas.width,t.canvas.height)
      , I = new St(0,0,t.canvas.width,t.canvas.height);
    function N(e, n, i) {
        const r = new Uint8Array(4)
          , s = t.createTexture();
        t.bindTexture(e, s),
        t.texParameteri(e, 10241, 9728),
        t.texParameteri(e, 10240, 9728);
        for (let e = 0; e < i; e++)
            t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
        return s
    }
    const B = {};
    function z(e) {
        !0 !== l[e] && (t.enable(e),
        l[e] = !0)
    }
    function F(e) {
        !1 !== l[e] && (t.disable(e),
        l[e] = !1)
    }
    B[3553] = N(3553, 3553, 1),
    B[34067] = N(34067, 34069, 6),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    z(2929),
    a.setFunc(3),
    U(!1),
    k(1),
    z(2884),
    G(0);
    const O = {
        [n]: 32774,
        101: 32778,
        102: 32779
    };
    if (r)
        O[103] = 32775,
        O[104] = 32776;
    else {
        const t = e.get("EXT_blend_minmax");
        null !== t && (O[103] = t.MIN_EXT,
        O[104] = t.MAX_EXT)
    }
    const H = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };
    function G(e, i, r, s, a, o, l, c) {
        if (0 !== e) {
            if (!1 === d && (z(3042),
            d = !0),
            5 === e)
                a = a || i,
                o = o || r,
                l = l || s,
                i === m && a === v || (t.blendEquationSeparate(O[i], O[a]),
                m = i,
                v = a),
                r === f && s === g && o === y && l === x || (t.blendFuncSeparate(H[r], H[s], H[o], H[l]),
                f = r,
                g = s,
                y = o,
                x = l),
                p = e,
                _ = null;
            else if (e !== p || c !== _) {
                if (m === n && v === n || (t.blendEquation(32774),
                m = n,
                v = n),
                c)
                    switch (e) {
                    case 1:
                        t.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case 2:
                        t.blendFunc(1, 1);
                        break;
                    case 3:
                        t.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case 4:
                        t.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e)
                    }
                else
                    switch (e) {
                    case 1:
                        t.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case 2:
                        t.blendFunc(770, 1);
                        break;
                    case 3:
                        t.blendFunc(0, 769);
                        break;
                    case 4:
                        t.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e)
                    }
                f = null,
                g = null,
                y = null,
                x = null,
                p = e,
                _ = c
            }
        } else
            !0 === d && (F(3042),
            d = !1)
    }
    function U(e) {
        w !== e && (e ? t.frontFace(2304) : t.frontFace(2305),
        w = e)
    }
    function k(e) {
        0 !== e ? (z(2884),
        e !== b && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : F(2884),
        b = e
    }
    function V(e, n, i) {
        e ? (z(32823),
        S === n && T === i || (t.polygonOffset(n, i),
        S = n,
        T = i)) : F(32823)
    }
    function W(e) {
        void 0 === e && (e = 33984 + E - 1),
        C !== e && (t.activeTexture(e),
        C = e)
    }
    return {
        buffers: {
            color: s,
            depth: a,
            stencil: o
        },
        enable: z,
        disable: F,
        bindFramebuffer: function(e, n) {
            null === n && null !== c && (n = c),
            h[e] !== n && (t.bindFramebuffer(e, n),
            h[e] = n,
            r && (36009 === e && (h[36160] = n),
            36160 === e && (h[36009] = n)))
        },
        bindXRFramebuffer: function(e) {
            e !== c && (t.bindFramebuffer(36160, e),
            c = e)
        },
        useProgram: function(e) {
            return u !== e && (t.useProgram(e),
            u = e,
            !0)
        },
        setBlending: G,
        setMaterial: function(t, e) {
            2 === t.side ? F(2884) : z(2884);
            let n = 1 === t.side;
            e && (n = !n),
            U(n),
            1 === t.blending && !1 === t.transparent ? G(0) : G(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
            a.setFunc(t.depthFunc),
            a.setTest(t.depthTest),
            a.setMask(t.depthWrite),
            s.setMask(t.colorWrite);
            const i = t.stencilWrite;
            o.setTest(i),
            i && (o.setMask(t.stencilWriteMask),
            o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
            o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
            V(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
            !0 === t.alphaToCoverage ? z(32926) : F(32926)
        },
        setFlipSided: U,
        setCullFace: k,
        setLineWidth: function(e) {
            e !== M && (A && t.lineWidth(e),
            M = e)
        },
        setPolygonOffset: V,
        setScissorTest: function(t) {
            t ? z(3089) : F(3089)
        },
        activeTexture: W,
        bindTexture: function(e, n) {
            null === C && W();
            let i = P[C];
            void 0 === i && (i = {
                type: void 0,
                texture: void 0
            },
            P[C] = i),
            i.type === e && i.texture === n || (t.bindTexture(e, n || B[e]),
            i.type = e,
            i.texture = n)
        },
        unbindTexture: function() {
            const e = P[C];
            void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null),
            e.type = void 0,
            e.texture = void 0)
        },
        compressedTexImage2D: function() {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        texImage2D: function() {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        texImage3D: function() {
            try {
                t.texImage3D.apply(t, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        scissor: function(e) {
            !1 === D.equals(e) && (t.scissor(e.x, e.y, e.z, e.w),
            D.copy(e))
        },
        viewport: function(e) {
            !1 === I.equals(e) && (t.viewport(e.x, e.y, e.z, e.w),
            I.copy(e))
        },
        reset: function() {
            t.disable(3042),
            t.disable(2884),
            t.disable(2929),
            t.disable(32823),
            t.disable(3089),
            t.disable(2960),
            t.disable(32926),
            t.blendEquation(32774),
            t.blendFunc(1, 0),
            t.blendFuncSeparate(1, 0, 1, 0),
            t.colorMask(!0, !0, !0, !0),
            t.clearColor(0, 0, 0, 0),
            t.depthMask(!0),
            t.depthFunc(513),
            t.clearDepth(1),
            t.stencilMask(4294967295),
            t.stencilFunc(519, 0, 4294967295),
            t.stencilOp(7680, 7680, 7680),
            t.clearStencil(0),
            t.cullFace(1029),
            t.frontFace(2305),
            t.polygonOffset(0, 0),
            t.activeTexture(33984),
            t.bindFramebuffer(36160, null),
            !0 === r && (t.bindFramebuffer(36009, null),
            t.bindFramebuffer(36008, null)),
            t.useProgram(null),
            t.lineWidth(1),
            t.scissor(0, 0, t.canvas.width, t.canvas.height),
            t.viewport(0, 0, t.canvas.width, t.canvas.height),
            l = {},
            C = null,
            P = {},
            c = null,
            h = {},
            u = null,
            d = !1,
            p = null,
            m = null,
            f = null,
            g = null,
            v = null,
            y = null,
            x = null,
            _ = !1,
            w = null,
            b = null,
            M = null,
            S = null,
            T = null,
            D.set(0, 0, t.canvas.width, t.canvas.height),
            I.set(0, 0, t.canvas.width, t.canvas.height),
            s.reset(),
            a.reset(),
            o.reset()
        }
    }
}
function ps(t, e, n, i, r, s, a) {
    const o = r.isWebGL2
      , l = r.maxTextures
      , c = r.maxCubemapSize
      , x = r.maxTextureSize
      , R = r.maxSamples
      , C = new WeakMap;
    let P, D = !1;
    try {
        D = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
    } catch (t) {}
    function I(t, e) {
        return D ? new OffscreenCanvas(t,e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
    }
    function N(t, e, n, i) {
        let r = 1;
        if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
        r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                const i = e ? ft : Math.floor
                  , s = i(r * t.width)
                  , a = i(r * t.height);
                void 0 === P && (P = I(s, a));
                const o = n ? I(s, a) : P;
                o.width = s,
                o.height = a;
                return o.getContext("2d").drawImage(t, 0, 0, s, a),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."),
                o
            }
            return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
            t
        }
        return t
    }
    function B(t) {
        return pt(t.width) && pt(t.height)
    }
    function z(t, e) {
        return t.generateMipmaps && e && t.minFilter !== p && t.minFilter !== g
    }
    function F(e, n, r, s) {
        t.generateMipmap(e);
        i.get(n).__maxMipLevel = Math.log2(Math.max(r, s))
    }
    function O(n, i, r) {
        if (!1 === o)
            return i;
        if (null !== n) {
            if (void 0 !== t[n])
                return t[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
        }
        let s = i;
        return 6403 === i && (5126 === r && (s = 33326),
        5131 === r && (s = 33325),
        5121 === r && (s = 33321)),
        6407 === i && (5126 === r && (s = 34837),
        5131 === r && (s = 34843),
        5121 === r && (s = 32849)),
        6408 === i && (5126 === r && (s = 34836),
        5131 === r && (s = 34842),
        5121 === r && (s = 32856)),
        33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"),
        s
    }
    function H(t) {
        return t === p || t === m || t === f ? 9728 : 9729
    }
    function G(e) {
        const n = e.target;
        n.removeEventListener("dispose", G),
        function(e) {
            const n = i.get(e);
            if (void 0 === n.__webglInit)
                return;
            t.deleteTexture(n.__webglTexture),
            i.remove(e)
        }(n),
        n.isVideoTexture && C.delete(n),
        a.memory.textures--
    }
    function U(e) {
        const n = e.target;
        n.removeEventListener("dispose", U),
        function(e) {
            const n = e.texture
              , r = i.get(e)
              , s = i.get(n);
            if (!e)
                return;
            void 0 !== s.__webglTexture && t.deleteTexture(s.__webglTexture);
            e.depthTexture && e.depthTexture.dispose();
            if (e.isWebGLCubeRenderTarget)
                for (let e = 0; e < 6; e++)
                    t.deleteFramebuffer(r.__webglFramebuffer[e]),
                    r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
            else
                t.deleteFramebuffer(r.__webglFramebuffer),
                r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer),
                r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer),
                r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
            i.remove(n),
            i.remove(e)
        }(n),
        a.memory.textures--
    }
    let k = 0;
    function V(t, e) {
        const r = i.get(t);
        if (t.isVideoTexture && function(t) {
            const e = a.render.frame;
            C.get(t) !== e && (C.set(t, e),
            t.update())
        }(t),
        t.version > 0 && r.__version !== t.version) {
            const n = t.image;
            if (void 0 === n)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else {
                if (!1 !== n.complete)
                    return void Z(r, t, e);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
        }
        n.activeTexture(33984 + e),
        n.bindTexture(3553, r.__webglTexture)
    }
    function W(e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version ? function(e, i, r) {
            if (6 !== i.image.length)
                return;
            Y(e, i),
            n.activeTexture(33984 + r),
            n.bindTexture(34067, e.__webglTexture),
            t.pixelStorei(37440, i.flipY),
            t.pixelStorei(37441, i.premultiplyAlpha),
            t.pixelStorei(3317, i.unpackAlignment),
            t.pixelStorei(37443, 0);
            const a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture)
              , l = i.image[0] && i.image[0].isDataTexture
              , h = [];
            for (let t = 0; t < 6; t++)
                h[t] = a || l ? l ? i.image[t].image : i.image[t] : N(i.image[t], !1, !0, c);
            const u = h[0]
              , d = B(u) || o
              , p = s.convert(i.format)
              , m = s.convert(i.type)
              , f = O(i.internalFormat, p, m);
            let g;
            if (X(34067, i, d),
            a) {
                for (let t = 0; t < 6; t++) {
                    g = h[t].mipmaps;
                    for (let e = 0; e < g.length; e++) {
                        const r = g[e];
                        i.format !== E && i.format !== T ? null !== p ? n.compressedTexImage2D(34069 + t, e, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + t, e, f, r.width, r.height, 0, p, m, r.data)
                    }
                }
                e.__maxMipLevel = g.length - 1
            } else {
                g = i.mipmaps;
                for (let t = 0; t < 6; t++)
                    if (l) {
                        n.texImage2D(34069 + t, 0, f, h[t].width, h[t].height, 0, p, m, h[t].data);
                        for (let e = 0; e < g.length; e++) {
                            const i = g[e].image[t].image;
                            n.texImage2D(34069 + t, e + 1, f, i.width, i.height, 0, p, m, i.data)
                        }
                    } else {
                        n.texImage2D(34069 + t, 0, f, p, m, h[t]);
                        for (let e = 0; e < g.length; e++) {
                            const i = g[e];
                            n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t])
                        }
                    }
                e.__maxMipLevel = g.length
            }
            z(i, d) && F(34067, i, u.width, u.height);
            e.__version = i.version,
            i.onUpdate && i.onUpdate(i)
        }(a, e, r) : (n.activeTexture(33984 + r),
        n.bindTexture(34067, a.__webglTexture))
    }
    const j = {
        [h]: 10497,
        [u]: 33071,
        [d]: 33648
    }
      , q = {
        [p]: 9728,
        [m]: 9984,
        [f]: 9986,
        [g]: 9729,
        [v]: 9985,
        [y]: 9987
    };
    function X(n, s, a) {
        if (a ? (t.texParameteri(n, 10242, j[s.wrapS]),
        t.texParameteri(n, 10243, j[s.wrapT]),
        32879 !== n && 35866 !== n || t.texParameteri(n, 32882, j[s.wrapR]),
        t.texParameteri(n, 10240, q[s.magFilter]),
        t.texParameteri(n, 10241, q[s.minFilter])) : (t.texParameteri(n, 10242, 33071),
        t.texParameteri(n, 10243, 33071),
        32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071),
        s.wrapS === u && s.wrapT === u || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
        t.texParameteri(n, 10240, H(s.magFilter)),
        t.texParameteri(n, 10241, H(s.minFilter)),
        s.minFilter !== p && s.minFilter !== g && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
        !0 === e.has("EXT_texture_filter_anisotropic")) {
            const a = e.get("EXT_texture_filter_anisotropic");
            if (s.type === b && !1 === e.has("OES_texture_float_linear"))
                return;
            if (!1 === o && s.type === M && !1 === e.has("OES_texture_half_float_linear"))
                return;
            (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())),
            i.get(s).__currentAnisotropy = s.anisotropy)
        }
    }
    function Y(e, n) {
        void 0 === e.__webglInit && (e.__webglInit = !0,
        n.addEventListener("dispose", G),
        e.__webglTexture = t.createTexture(),
        a.memory.textures++)
    }
    function Z(e, i, r) {
        let a = 3553;
        i.isDataTexture2DArray && (a = 35866),
        i.isDataTexture3D && (a = 32879),
        Y(e, i),
        n.activeTexture(33984 + r),
        n.bindTexture(a, e.__webglTexture),
        t.pixelStorei(37440, i.flipY),
        t.pixelStorei(37441, i.premultiplyAlpha),
        t.pixelStorei(3317, i.unpackAlignment),
        t.pixelStorei(37443, 0);
        const l = function(t) {
            return !o && (t.wrapS !== u || t.wrapT !== u || t.minFilter !== p && t.minFilter !== g)
        }(i) && !1 === B(i.image)
          , c = N(i.image, l, !1, x)
          , h = B(c) || o
          , d = s.convert(i.format);
        let m, f = s.convert(i.type), v = O(i.internalFormat, d, f);
        X(a, i, h);
        const y = i.mipmaps;
        if (i.isDepthTexture)
            v = 6402,
            o ? v = i.type === b ? 36012 : i.type === w ? 33190 : i.type === S ? 35056 : 33189 : i.type === b && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
            i.format === A && 6402 === v && i.type !== _ && i.type !== w && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
            i.type = _,
            f = s.convert(i.type)),
            i.format === L && 6402 === v && (v = 34041,
            i.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
            i.type = S,
            f = s.convert(i.type))),
            n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, null);
        else if (i.isDataTexture)
            if (y.length > 0 && h) {
                for (let t = 0, e = y.length; t < e; t++)
                    m = y[t],
                    n.texImage2D(3553, t, v, m.width, m.height, 0, d, f, m.data);
                i.generateMipmaps = !1,
                e.__maxMipLevel = y.length - 1
            } else
                n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, c.data),
                e.__maxMipLevel = 0;
        else if (i.isCompressedTexture) {
            for (let t = 0, e = y.length; t < e; t++)
                m = y[t],
                i.format !== E && i.format !== T ? null !== d ? n.compressedTexImage2D(3553, t, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, t, v, m.width, m.height, 0, d, f, m.data);
            e.__maxMipLevel = y.length - 1
        } else if (i.isDataTexture2DArray)
            n.texImage3D(35866, 0, v, c.width, c.height, c.depth, 0, d, f, c.data),
            e.__maxMipLevel = 0;
        else if (i.isDataTexture3D)
            n.texImage3D(32879, 0, v, c.width, c.height, c.depth, 0, d, f, c.data),
            e.__maxMipLevel = 0;
        else if (y.length > 0 && h) {
            for (let t = 0, e = y.length; t < e; t++)
                m = y[t],
                n.texImage2D(3553, t, v, d, f, m);
            i.generateMipmaps = !1,
            e.__maxMipLevel = y.length - 1
        } else
            n.texImage2D(3553, 0, v, d, f, c),
            e.__maxMipLevel = 0;
        z(i, h) && F(a, i, c.width, c.height),
        e.__version = i.version,
        i.onUpdate && i.onUpdate(i)
    }
    function J(e, r, a, o) {
        const l = r.texture
          , c = s.convert(l.format)
          , h = s.convert(l.type)
          , u = O(l.internalFormat, c, h);
        32879 === o || 35866 === o ? n.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(o, 0, u, r.width, r.height, 0, c, h, null),
        n.bindFramebuffer(36160, e),
        t.framebufferTexture2D(36160, a, o, i.get(l).__webglTexture, 0),
        n.bindFramebuffer(36160, null)
    }
    function Q(e, n, i) {
        if (t.bindRenderbuffer(36161, e),
        n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i) {
                const e = n.depthTexture;
                e && e.isDepthTexture && (e.type === b ? r = 36012 : e.type === w && (r = 33190));
                const i = $(n);
                t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
            } else
                t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e)
        } else if (n.depthBuffer && n.stencilBuffer) {
            if (i) {
                const e = $(n);
                t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height)
            } else
                t.renderbufferStorage(36161, 34041, n.width, n.height);
            t.framebufferRenderbuffer(36160, 33306, 36161, e)
        } else {
            const e = n.texture
              , r = s.convert(e.format)
              , a = s.convert(e.type)
              , o = O(e.internalFormat, r, a);
            if (i) {
                const e = $(n);
                t.renderbufferStorageMultisample(36161, e, o, n.width, n.height)
            } else
                t.renderbufferStorage(36161, o, n.width, n.height)
        }
        t.bindRenderbuffer(36161, null)
    }
    function K(e) {
        const r = i.get(e)
          , s = !0 === e.isWebGLCubeRenderTarget;
        if (e.depthTexture) {
            if (s)
                throw new Error("target.depthTexture not supported in Cube render targets");
            !function(e, r) {
                if (r && r.isWebGLCubeRenderTarget)
                    throw new Error("Depth Texture with cube render targets is not supported");
                if (n.bindFramebuffer(36160, e),
                !r.depthTexture || !r.depthTexture.isDepthTexture)
                    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                r.depthTexture.image.height = r.height,
                r.depthTexture.needsUpdate = !0),
                V(r.depthTexture, 0);
                const s = i.get(r.depthTexture).__webglTexture;
                if (r.depthTexture.format === A)
                    t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                else {
                    if (r.depthTexture.format !== L)
                        throw new Error("Unknown depthTexture format");
                    t.framebufferTexture2D(36160, 33306, 3553, s, 0)
                }
            }(r.__webglFramebuffer, e)
        } else if (s) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
                n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
                r.__webglDepthbuffer[i] = t.createRenderbuffer(),
                Q(r.__webglDepthbuffer[i], e, !1)
        } else
            n.bindFramebuffer(36160, r.__webglFramebuffer),
            r.__webglDepthbuffer = t.createRenderbuffer(),
            Q(r.__webglDepthbuffer, e, !1);
        n.bindFramebuffer(36160, null)
    }
    function $(t) {
        return o && t.isWebGLMultisampleRenderTarget ? Math.min(R, t.samples) : 0
    }
    let tt = !1
      , et = !1;
    this.allocateTextureUnit = function() {
        const t = k;
        return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l),
        k += 1,
        t
    }
    ,
    this.resetTextureUnits = function() {
        k = 0
    }
    ,
    this.setTexture2D = V,
    this.setTexture2DArray = function(t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e),
        n.bindTexture(35866, r.__webglTexture))
    }
    ,
    this.setTexture3D = function(t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e),
        n.bindTexture(32879, r.__webglTexture))
    }
    ,
    this.setTextureCube = W,
    this.setupRenderTarget = function(e) {
        const r = e.texture
          , l = i.get(e)
          , c = i.get(r);
        e.addEventListener("dispose", U),
        c.__webglTexture = t.createTexture(),
        c.__version = r.version,
        a.memory.textures++;
        const h = !0 === e.isWebGLCubeRenderTarget
          , u = !0 === e.isWebGLMultisampleRenderTarget
          , d = r.isDataTexture3D || r.isDataTexture2DArray
          , p = B(e) || o;
        if (!o || r.format !== T || r.type !== b && r.type !== M || (r.format = E,
        console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),
        h) {
            l.__webglFramebuffer = [];
            for (let e = 0; e < 6; e++)
                l.__webglFramebuffer[e] = t.createFramebuffer()
        } else if (l.__webglFramebuffer = t.createFramebuffer(),
        u)
            if (o) {
                l.__webglMultisampledFramebuffer = t.createFramebuffer(),
                l.__webglColorRenderbuffer = t.createRenderbuffer(),
                t.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                const i = s.convert(r.format)
                  , a = s.convert(r.type)
                  , o = O(r.internalFormat, i, a)
                  , c = $(e);
                t.renderbufferStorageMultisample(36161, c, o, e.width, e.height),
                n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer),
                t.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer),
                t.bindRenderbuffer(36161, null),
                e.depthBuffer && (l.__webglDepthRenderbuffer = t.createRenderbuffer(),
                Q(l.__webglDepthRenderbuffer, e, !0)),
                n.bindFramebuffer(36160, null)
            } else
                console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (h) {
            n.bindTexture(34067, c.__webglTexture),
            X(34067, r, p);
            for (let t = 0; t < 6; t++)
                J(l.__webglFramebuffer[t], e, 36064, 34069 + t);
            z(r, p) && F(34067, r, e.width, e.height),
            n.bindTexture(34067, null)
        } else {
            let t = 3553;
            if (d)
                if (o) {
                    t = r.isDataTexture3D ? 32879 : 35866
                } else
                    console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
            n.bindTexture(t, c.__webglTexture),
            X(t, r, p),
            J(l.__webglFramebuffer, e, 36064, t),
            z(r, p) && F(3553, r, e.width, e.height),
            n.bindTexture(3553, null)
        }
        e.depthBuffer && K(e)
    }
    ,
    this.updateRenderTargetMipmap = function(t) {
        const e = t.texture;
        if (z(e, B(t) || o)) {
            const r = t.isWebGLCubeRenderTarget ? 34067 : 3553
              , s = i.get(e).__webglTexture;
            n.bindTexture(r, s),
            F(r, e, t.width, t.height),
            n.bindTexture(r, null)
        }
    }
    ,
    this.updateMultisampleRenderTarget = function(e) {
        if (e.isWebGLMultisampleRenderTarget)
            if (o) {
                const r = e.width
                  , s = e.height;
                let a = 16384;
                e.depthBuffer && (a |= 256),
                e.stencilBuffer && (a |= 1024);
                const o = i.get(e);
                n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer),
                n.bindFramebuffer(36009, o.__webglFramebuffer),
                t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
                n.bindFramebuffer(36008, null),
                n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer)
            } else
                console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
    }
    ,
    this.safeSetTexture2D = function(t, e) {
        t && t.isWebGLRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
        tt = !0),
        t = t.texture),
        V(t, e)
    }
    ,
    this.safeSetTextureCube = function(t, e) {
        t && t.isWebGLCubeRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
        et = !0),
        t = t.texture),
        W(t, e)
    }
}
function ms(t, e, n) {
    const i = n.isWebGL2;
    return {
        convert: function(t) {
            let n;
            if (t === x)
                return 5121;
            if (1017 === t)
                return 32819;
            if (1018 === t)
                return 32820;
            if (1019 === t)
                return 33635;
            if (1010 === t)
                return 5120;
            if (1011 === t)
                return 5122;
            if (t === _)
                return 5123;
            if (1013 === t)
                return 5124;
            if (t === w)
                return 5125;
            if (t === b)
                return 5126;
            if (t === M)
                return i ? 5131 : (n = e.get("OES_texture_half_float"),
                null !== n ? n.HALF_FLOAT_OES : null);
            if (1021 === t)
                return 6406;
            if (t === T)
                return 6407;
            if (t === E)
                return 6408;
            if (1024 === t)
                return 6409;
            if (1025 === t)
                return 6410;
            if (t === A)
                return 6402;
            if (t === L)
                return 34041;
            if (1028 === t)
                return 6403;
            if (1029 === t)
                return 36244;
            if (1030 === t)
                return 33319;
            if (1031 === t)
                return 33320;
            if (1032 === t)
                return 36248;
            if (1033 === t)
                return 36249;
            if (t === R || t === C || t === P || t === D) {
                if (n = e.get("WEBGL_compressed_texture_s3tc"),
                null === n)
                    return null;
                if (t === R)
                    return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === C)
                    return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === P)
                    return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === D)
                    return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (t === I || t === N || t === B || t === z) {
                if (n = e.get("WEBGL_compressed_texture_pvrtc"),
                null === n)
                    return null;
                if (t === I)
                    return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (t === N)
                    return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (t === B)
                    return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (t === z)
                    return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (36196 === t)
                return n = e.get("WEBGL_compressed_texture_etc1"),
                null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
            if ((t === F || t === O) && (n = e.get("WEBGL_compressed_texture_etc"),
            null !== n)) {
                if (t === F)
                    return n.COMPRESSED_RGB8_ETC2;
                if (t === O)
                    return n.COMPRESSED_RGBA8_ETC2_EAC
            }
            return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"),
            null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"),
            null !== n ? t : null) : t === S ? i ? 34042 : (n = e.get("WEBGL_depth_texture"),
            null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
        }
    }
}
class fs extends Kn {
    constructor(t=[]) {
        super(),
        this.cameras = t
    }
}
fs.prototype.isArrayCamera = !0;
class gs extends Ce {
    constructor() {
        super(),
        this.type = "Group"
    }
}
gs.prototype.isGroup = !0;
const vs = {
    type: "move"
};
class ys {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return null === this._hand && (this._hand = new gs,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new gs,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new Lt,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new Lt),
        this._targetRay
    }
    getGripSpace() {
        return null === this._grip && (this._grip = new gs,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new Lt,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new Lt),
        this._grip
    }
    dispatchEvent(t) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(t),
        null !== this._grip && this._grip.dispatchEvent(t),
        null !== this._hand && this._hand.dispatchEvent(t),
        this
    }
    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
    }
    update(t, e, n) {
        let i = null
          , r = null
          , s = null;
        const a = this._targetRay
          , o = this._grip
          , l = this._hand;
        if (t && "visible-blurred" !== e.session.visibilityState)
            if (null !== a && (i = e.getPose(t.targetRaySpace, n),
            null !== i && (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity ? (a.hasLinearVelocity = !0,
            a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1,
            i.angularVelocity ? (a.hasAngularVelocity = !0,
            a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1,
            this.dispatchEvent(vs))),
            l && t.hand) {
                s = !0;
                for (const i of t.hand.values()) {
                    const t = e.getJointPose(i, n);
                    if (void 0 === l.joints[i.jointName]) {
                        const t = new gs;
                        t.matrixAutoUpdate = !1,
                        t.visible = !1,
                        l.joints[i.jointName] = t,
                        l.add(t)
                    }
                    const r = l.joints[i.jointName];
                    null !== t && (r.matrix.fromArray(t.transform.matrix),
                    r.matrix.decompose(r.position, r.rotation, r.scale),
                    r.jointRadius = t.radius),
                    r.visible = null !== t
                }
                const i = l.joints["index-finger-tip"]
                  , r = l.joints["thumb-tip"]
                  , a = i.position.distanceTo(r.position)
                  , o = .02
                  , c = .005;
                l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }))
            } else
                null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                null !== r && (o.matrix.fromArray(r.transform.matrix),
                o.matrix.decompose(o.position, o.rotation, o.scale),
                r.linearVelocity ? (o.hasLinearVelocity = !0,
                o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
                r.angularVelocity ? (o.hasAngularVelocity = !0,
                o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
        return null !== a && (a.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== s),
        this
    }
}
class xs extends rt {
    constructor(t, e) {
        super();
        const n = this
          , i = t.state;
        let r = null
          , s = 1
          , a = null
          , o = "local-floor"
          , l = null;
        const c = []
          , h = new Map
          , u = new Kn;
        u.layers.enable(1),
        u.viewport = new St;
        const d = new Kn;
        d.layers.enable(2),
        d.viewport = new St;
        const p = [u, d]
          , m = new fs;
        m.layers.enable(1),
        m.layers.enable(2);
        let f = null
          , g = null;
        function v(t) {
            const e = h.get(t.inputSource);
            e && e.dispatchEvent({
                type: t.type,
                data: t.inputSource
            })
        }
        function y() {
            h.forEach((function(t, e) {
                t.disconnect(e)
            }
            )),
            h.clear(),
            f = null,
            g = null,
            i.bindXRFramebuffer(null),
            t.setRenderTarget(t.getRenderTarget()),
            S.stop(),
            n.isPresenting = !1,
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        function x(t) {
            const e = r.inputSources;
            for (let t = 0; t < c.length; t++)
                h.set(e[t], c[t]);
            for (let e = 0; e < t.removed.length; e++) {
                const n = t.removed[e]
                  , i = h.get(n);
                i && (i.dispatchEvent({
                    type: "disconnected",
                    data: n
                }),
                h.delete(n))
            }
            for (let e = 0; e < t.added.length; e++) {
                const n = t.added[e]
                  , i = h.get(n);
                i && i.dispatchEvent({
                    type: "connected",
                    data: n
                })
            }
        }
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(t) {
            let e = c[t];
            return void 0 === e && (e = new ys,
            c[t] = e),
            e.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(t) {
            let e = c[t];
            return void 0 === e && (e = new ys,
            c[t] = e),
            e.getGripSpace()
        }
        ,
        this.getHand = function(t) {
            let e = c[t];
            return void 0 === e && (e = new ys,
            c[t] = e),
            e.getHandSpace()
        }
        ,
        this.setFramebufferScaleFactor = function(t) {
            s = t,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(t) {
            o = t,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return a
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(t) {
            if (r = t,
            null !== r) {
                r.addEventListener("select", v),
                r.addEventListener("selectstart", v),
                r.addEventListener("selectend", v),
                r.addEventListener("squeeze", v),
                r.addEventListener("squeezestart", v),
                r.addEventListener("squeezeend", v),
                r.addEventListener("end", y),
                r.addEventListener("inputsourceschange", x);
                const t = e.getContextAttributes();
                !0 !== t.xrCompatible && await e.makeXRCompatible();
                const i = {
                    antialias: t.antialias,
                    alpha: t.alpha,
                    depth: t.depth,
                    stencil: t.stencil,
                    framebufferScaleFactor: s
                }
                  , l = new XRWebGLLayer(r,e,i);
                r.updateRenderState({
                    baseLayer: l
                }),
                a = await r.requestReferenceSpace(o),
                S.setContext(r),
                S.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ;
        const _ = new Lt
          , w = new Lt;
        function b(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
            t.matrixWorldInverse.copy(t.matrixWorld).invert()
        }
        this.getCamera = function(t) {
            m.near = d.near = u.near = t.near,
            m.far = d.far = u.far = t.far,
            f === m.near && g === m.far || (r.updateRenderState({
                depthNear: m.near,
                depthFar: m.far
            }),
            f = m.near,
            g = m.far);
            const e = t.parent
              , n = m.cameras;
            b(m, e);
            for (let t = 0; t < n.length; t++)
                b(n[t], e);
            t.matrixWorld.copy(m.matrixWorld),
            t.matrix.copy(m.matrix),
            t.matrix.decompose(t.position, t.quaternion, t.scale);
            const i = t.children;
            for (let t = 0, e = i.length; t < e; t++)
                i[t].updateMatrixWorld(!0);
            return 2 === n.length ? function(t, e, n) {
                _.setFromMatrixPosition(e.matrixWorld),
                w.setFromMatrixPosition(n.matrixWorld);
                const i = _.distanceTo(w)
                  , r = e.projectionMatrix.elements
                  , s = n.projectionMatrix.elements
                  , a = r[14] / (r[10] - 1)
                  , o = r[14] / (r[10] + 1)
                  , l = (r[9] + 1) / r[5]
                  , c = (r[9] - 1) / r[5]
                  , h = (r[8] - 1) / r[0]
                  , u = (s[8] + 1) / s[0]
                  , d = a * h
                  , p = a * u
                  , m = i / (-h + u)
                  , f = m * -h;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                t.translateX(f),
                t.translateZ(m),
                t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                t.matrixWorldInverse.copy(t.matrixWorld).invert();
                const g = a + m
                  , v = o + m
                  , y = d - f
                  , x = p + (i - f)
                  , b = l * o / v * g
                  , M = c * o / v * g;
                t.projectionMatrix.makePerspective(y, x, b, M, g, v)
            }(m, u, d) : m.projectionMatrix.copy(u.projectionMatrix),
            m
        }
        ;
        let M = null;
        const S = new oi;
        S.setAnimationLoop((function(t, e) {
            if (l = e.getViewerPose(a),
            null !== l) {
                const t = l.views
                  , e = r.renderState.baseLayer;
                i.bindXRFramebuffer(e.framebuffer);
                let n = !1;
                t.length !== m.cameras.length && (m.cameras.length = 0,
                n = !0);
                for (let i = 0; i < t.length; i++) {
                    const r = t[i]
                      , s = e.getViewport(r)
                      , a = p[i];
                    a.matrix.fromArray(r.transform.matrix),
                    a.projectionMatrix.fromArray(r.projectionMatrix),
                    a.viewport.set(s.x, s.y, s.width, s.height),
                    0 === i && m.matrix.copy(a.matrix),
                    !0 === n && m.cameras.push(a)
                }
            }
            const n = r.inputSources;
            for (let t = 0; t < c.length; t++) {
                const i = c[t]
                  , r = n[t];
                i.update(r, e, a)
            }
            M && M(t, e)
        }
        )),
        this.setAnimationLoop = function(t) {
            M = t
        }
        ,
        this.dispose = function() {}
    }
}
function _s(t) {
    function e(e, n) {
        e.opacity.value = n.opacity,
        n.color && e.diffuse.value.copy(n.color),
        n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
        n.map && (e.map.value = n.map),
        n.alphaMap && (e.alphaMap.value = n.alphaMap),
        n.specularMap && (e.specularMap.value = n.specularMap);
        const i = t.get(n).envMap;
        if (i) {
            e.envMap.value = i,
            e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1,
            e.reflectivity.value = n.reflectivity,
            e.refractionRatio.value = n.refractionRatio;
            const r = t.get(i).__maxMipLevel;
            void 0 !== r && (e.maxMipLevel.value = r)
        }
        let r, s;
        n.lightMap && (e.lightMap.value = n.lightMap,
        e.lightMapIntensity.value = n.lightMapIntensity),
        n.aoMap && (e.aoMap.value = n.aoMap,
        e.aoMapIntensity.value = n.aoMapIntensity),
        n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
        void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
        !0 === r.matrixAutoUpdate && r.updateMatrix(),
        e.uvTransform.value.copy(r.matrix)),
        n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap),
        void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture),
        !0 === s.matrixAutoUpdate && s.updateMatrix(),
        e.uv2Transform.value.copy(s.matrix))
    }
    function n(e, n) {
        e.roughness.value = n.roughness,
        e.metalness.value = n.metalness,
        n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
        n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
        n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
        n.bumpMap && (e.bumpMap.value = n.bumpMap,
        e.bumpScale.value = n.bumpScale,
        1 === n.side && (e.bumpScale.value *= -1)),
        n.normalMap && (e.normalMap.value = n.normalMap,
        e.normalScale.value.copy(n.normalScale),
        1 === n.side && e.normalScale.value.negate()),
        n.displacementMap && (e.displacementMap.value = n.displacementMap,
        e.displacementScale.value = n.displacementScale,
        e.displacementBias.value = n.displacementBias);
        t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
    }
    return {
        refreshFogUniforms: function(t, e) {
            t.fogColor.value.copy(e.color),
            e.isFog ? (t.fogNear.value = e.near,
            t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
        },
        refreshMaterialUniforms: function(t, i, r, s) {
            i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i),
            function(t, e) {
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }(t, i)) : i.isMeshToonMaterial ? (e(t, i),
            function(t, e) {
                e.gradientMap && (t.gradientMap.value = e.gradientMap);
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(t, i)) : i.isMeshPhongMaterial ? (e(t, i),
            function(t, e) {
                t.specular.value.copy(e.specular),
                t.shininess.value = Math.max(e.shininess, 1e-4),
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(t, i)) : i.isMeshStandardMaterial ? (e(t, i),
            i.isMeshPhysicalMaterial ? function(t, e) {
                n(t, e),
                t.reflectivity.value = e.reflectivity,
                t.clearcoat.value = e.clearcoat,
                t.clearcoatRoughness.value = e.clearcoatRoughness,
                e.sheen && t.sheen.value.copy(e.sheen);
                e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                t.clearcoatNormalMap.value = e.clearcoatNormalMap,
                1 === e.side && t.clearcoatNormalScale.value.negate());
                t.transmission.value = e.transmission,
                e.transmissionMap && (t.transmissionMap.value = e.transmissionMap)
            }(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i),
            function(t, e) {
                e.matcap && (t.matcap.value = e.matcap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(t, i)) : i.isMeshDepthMaterial ? (e(t, i),
            function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i),
            function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition),
                t.nearDistance.value = e.nearDistance,
                t.farDistance.value = e.farDistance
            }(t, i)) : i.isMeshNormalMaterial ? (e(t, i),
            function(t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
                t.diffuse.value.copy(e.color),
                t.opacity.value = e.opacity
            }(t, i),
            i.isLineDashedMaterial && function(t, e) {
                t.dashSize.value = e.dashSize,
                t.totalSize.value = e.dashSize + e.gapSize,
                t.scale.value = e.scale
            }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                t.diffuse.value.copy(e.color),
                t.opacity.value = e.opacity,
                t.size.value = e.size * n,
                t.scale.value = .5 * i,
                e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                let r;
                e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                t.uvTransform.value.copy(r.matrix))
            }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
                t.diffuse.value.copy(e.color),
                t.opacity.value = e.opacity,
                t.rotation.value = e.rotation,
                e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                let n;
                e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                t.uvTransform.value.copy(n.matrix))
            }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color),
            t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
        }
    }
}
function ws(t) {
    const e = void 0 !== (t = t || {}).canvas ? t.canvas : function() {
        const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        return t.style.display = "block",
        t
    }()
      , n = void 0 !== t.context ? t.context : null
      , i = void 0 !== t.alpha && t.alpha
      , r = void 0 === t.depth || t.depth
      , s = void 0 === t.stencil || t.stencil
      , a = void 0 !== t.antialias && t.antialias
      , o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
      , l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
      , c = void 0 !== t.powerPreference ? t.powerPreference : "default"
      , h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    let u = null
      , d = null;
    const p = []
      , m = [];
    this.domElement = e,
    this.debug = {
        checkShaderErrors: !0
    },
    this.autoClear = !0,
    this.autoClearColor = !0,
    this.autoClearDepth = !0,
    this.autoClearStencil = !0,
    this.sortObjects = !0,
    this.clippingPlanes = [],
    this.localClippingEnabled = !1,
    this.gammaFactor = 2,
    this.outputEncoding = X,
    this.physicallyCorrectLights = !1,
    this.toneMapping = 0,
    this.toneMappingExposure = 1;
    const f = this;
    let g = !1
      , v = 0
      , y = 0
      , _ = null
      , w = -1
      , S = null;
    const T = new St
      , A = new St;
    let L = null
      , R = e.width
      , C = e.height
      , P = 1
      , D = null
      , I = null;
    const N = new St(0,0,R,C)
      , B = new St(0,0,R,C);
    let z = !1;
    const F = new ai;
    let O = !1
      , H = !1;
    const G = new se
      , U = new Lt
      , k = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function V() {
        return null === _ ? P : 1
    }
    let W, j, q, Y, Z, J, Q, K, $, tt, et, nt, it, rt, st, at, ot, lt, ct, ht, ut, dt, pt = n;
    function ft(t, n) {
        for (let i = 0; i < t.length; i++) {
            const r = t[i]
              , s = e.getContext(r, n);
            if (null !== s)
                return s
        }
        return null
    }
    try {
        const t = {
            alpha: i,
            depth: r,
            stencil: s,
            antialias: a,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: h
        };
        if (e.addEventListener("webglcontextlost", xt, !1),
        e.addEventListener("webglcontextrestored", _t, !1),
        null === pt) {
            const e = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === f.isWebGL1Renderer && e.shift(),
            pt = ft(e, t),
            null === pt)
                throw ft(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
        }
        void 0 === pt.getShaderPrecisionFormat && (pt.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        )
    } catch (t) {
        throw console.error("THREE.WebGLRenderer: " + t.message),
        t
    }
    function gt() {
        W = new xi(pt),
        j = new gi(pt,W,t),
        W.init(j),
        ut = new ms(pt,W,j),
        q = new ds(pt,W,j),
        Y = new bi(pt),
        Z = new Kr,
        J = new ps(pt,W,q,Z,j,ut,Y),
        Q = new yi(f),
        K = new li(pt,j),
        dt = new mi(pt,W,K,j),
        $ = new _i(pt,K,Y,dt),
        tt = new Ei(pt,$,K,Y),
        lt = new Ti(pt),
        st = new vi(Z),
        et = new Qr(f,Q,W,j,dt,st),
        nt = new _s(Z),
        it = new ns(Z),
        rt = new ls(W,j),
        ot = new pi(f,Q,q,tt,o),
        at = new us(f,tt,j),
        ct = new fi(pt,W,Y,j),
        ht = new wi(pt,W,Y,j),
        Y.programs = et.programs,
        f.capabilities = j,
        f.extensions = W,
        f.properties = Z,
        f.renderLists = it,
        f.shadowMap = at,
        f.state = q,
        f.info = Y
    }
    gt();
    const yt = new xs(f,pt);
    function xt(t) {
        t.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        g = !0
    }
    function _t() {
        console.log("THREE.WebGLRenderer: Context Restored."),
        g = !1;
        const t = Y.autoReset
          , e = at.enabled
          , n = at.autoUpdate
          , i = at.needsUpdate
          , r = at.type;
        gt(),
        Y.autoReset = t,
        at.enabled = e,
        at.autoUpdate = n,
        at.needsUpdate = i,
        at.type = r
    }
    function wt(t) {
        const e = t.target;
        e.removeEventListener("dispose", wt),
        function(t) {
            (function(t) {
                const e = Z.get(t).programs;
                void 0 !== e && e.forEach((function(t) {
                    et.releaseProgram(t)
                }
                ))
            }
            )(t),
            Z.remove(t)
        }(e)
    }
    this.xr = yt,
    this.getContext = function() {
        return pt
    }
    ,
    this.getContextAttributes = function() {
        return pt.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
        const t = W.get("WEBGL_lose_context");
        t && t.loseContext()
    }
    ,
    this.forceContextRestore = function() {
        const t = W.get("WEBGL_lose_context");
        t && t.restoreContext()
    }
    ,
    this.getPixelRatio = function() {
        return P
    }
    ,
    this.setPixelRatio = function(t) {
        void 0 !== t && (P = t,
        this.setSize(R, C, !1))
    }
    ,
    this.getSize = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
        t = new vt),
        t.set(R, C)
    }
    ,
    this.setSize = function(t, n, i) {
        yt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R = t,
        C = n,
        e.width = Math.floor(t * P),
        e.height = Math.floor(n * P),
        !1 !== i && (e.style.width = t + "px",
        e.style.height = n + "px"),
        this.setViewport(0, 0, t, n))
    }
    ,
    this.getDrawingBufferSize = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
        t = new vt),
        t.set(R * P, C * P).floor()
    }
    ,
    this.setDrawingBufferSize = function(t, n, i) {
        R = t,
        C = n,
        P = i,
        e.width = Math.floor(t * i),
        e.height = Math.floor(n * i),
        this.setViewport(0, 0, t, n)
    }
    ,
    this.getCurrentViewport = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
        t = new St),
        t.copy(T)
    }
    ,
    this.getViewport = function(t) {
        return t.copy(N)
    }
    ,
    this.setViewport = function(t, e, n, i) {
        t.isVector4 ? N.set(t.x, t.y, t.z, t.w) : N.set(t, e, n, i),
        q.viewport(T.copy(N).multiplyScalar(P).floor())
    }
    ,
    this.getScissor = function(t) {
        return t.copy(B)
    }
    ,
    this.setScissor = function(t, e, n, i) {
        t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i),
        q.scissor(A.copy(B).multiplyScalar(P).floor())
    }
    ,
    this.getScissorTest = function() {
        return z
    }
    ,
    this.setScissorTest = function(t) {
        q.setScissorTest(z = t)
    }
    ,
    this.setOpaqueSort = function(t) {
        D = t
    }
    ,
    this.setTransparentSort = function(t) {
        I = t
    }
    ,
    this.getClearColor = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),
        t = new tn),
        t.copy(ot.getClearColor())
    }
    ,
    this.setClearColor = function() {
        ot.setClearColor.apply(ot, arguments)
    }
    ,
    this.getClearAlpha = function() {
        return ot.getClearAlpha()
    }
    ,
    this.setClearAlpha = function() {
        ot.setClearAlpha.apply(ot, arguments)
    }
    ,
    this.clear = function(t, e, n) {
        let i = 0;
        (void 0 === t || t) && (i |= 16384),
        (void 0 === e || e) && (i |= 256),
        (void 0 === n || n) && (i |= 1024),
        pt.clear(i)
    }
    ,
    this.clearColor = function() {
        this.clear(!0, !1, !1)
    }
    ,
    this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }
    ,
    this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }
    ,
    this.dispose = function() {
        e.removeEventListener("webglcontextlost", xt, !1),
        e.removeEventListener("webglcontextrestored", _t, !1),
        it.dispose(),
        rt.dispose(),
        Z.dispose(),
        Q.dispose(),
        tt.dispose(),
        dt.dispose(),
        yt.dispose(),
        yt.removeEventListener("sessionstart", Mt),
        yt.removeEventListener("sessionend", Tt),
        Et.stop()
    }
    ,
    this.renderBufferImmediate = function(t, e) {
        dt.initAttributes();
        const n = Z.get(t);
        t.hasPositions && !n.position && (n.position = pt.createBuffer()),
        t.hasNormals && !n.normal && (n.normal = pt.createBuffer()),
        t.hasUvs && !n.uv && (n.uv = pt.createBuffer()),
        t.hasColors && !n.color && (n.color = pt.createBuffer());
        const i = e.getAttributes();
        t.hasPositions && (pt.bindBuffer(34962, n.position),
        pt.bufferData(34962, t.positionArray, 35048),
        dt.enableAttribute(i.position),
        pt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
        t.hasNormals && (pt.bindBuffer(34962, n.normal),
        pt.bufferData(34962, t.normalArray, 35048),
        dt.enableAttribute(i.normal),
        pt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
        t.hasUvs && (pt.bindBuffer(34962, n.uv),
        pt.bufferData(34962, t.uvArray, 35048),
        dt.enableAttribute(i.uv),
        pt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
        t.hasColors && (pt.bindBuffer(34962, n.color),
        pt.bufferData(34962, t.colorArray, 35048),
        dt.enableAttribute(i.color),
        pt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
        dt.disableUnusedAttributes(),
        pt.drawArrays(4, 0, t.count),
        t.count = 0
    }
    ,
    this.renderBufferDirect = function(t, e, n, i, r, s) {
        null === e && (e = k);
        const a = r.isMesh && r.matrixWorld.determinant() < 0
          , o = It(t, e, i, r);
        q.setMaterial(i, a);
        let l = n.index;
        const c = n.attributes.position;
        if (null === l) {
            if (void 0 === c || 0 === c.count)
                return
        } else if (0 === l.count)
            return;
        let h, u = 1;
        !0 === i.wireframe && (l = $.getWireframeAttribute(n),
        u = 2),
        (i.morphTargets || i.morphNormals) && lt.update(r, n, i, o),
        dt.setup(r, i, o, n, l);
        let d = ct;
        null !== l && (h = K.get(l),
        d = ht,
        d.setIndex(h));
        const p = null !== l ? l.count : c.count
          , m = n.drawRange.start * u
          , f = n.drawRange.count * u
          , g = null !== s ? s.start * u : 0
          , v = null !== s ? s.count * u : 1 / 0
          , y = Math.max(m, g)
          , x = Math.min(p, m + f, g + v) - 1
          , _ = Math.max(0, x - y + 1);
        if (0 !== _) {
            if (r.isMesh)
                !0 === i.wireframe ? (q.setLineWidth(i.wireframeLinewidth * V()),
                d.setMode(1)) : d.setMode(4);
            else if (r.isLine) {
                let t = i.linewidth;
                void 0 === t && (t = 1),
                q.setLineWidth(t * V()),
                r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
            } else
                r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
            if (r.isInstancedMesh)
                d.renderInstances(y, _, r.count);
            else if (n.isInstancedBufferGeometry) {
                const t = Math.min(n.instanceCount, n._maxInstanceCount);
                d.renderInstances(y, _, t)
            } else
                d.render(y, _)
        }
    }
    ,
    this.compile = function(t, e) {
        d = rt.get(t),
        d.init(),
        t.traverseVisible((function(t) {
            t.isLight && t.layers.test(e.layers) && (d.pushLight(t),
            t.castShadow && d.pushShadow(t))
        }
        )),
        d.setupLights(),
        t.traverse((function(e) {
            const n = e.material;
            if (n)
                if (Array.isArray(n))
                    for (let i = 0; i < n.length; i++) {
                        Pt(n[i], t, e)
                    }
                else
                    Pt(n, t, e)
        }
        ))
    }
    ;
    let bt = null;
    function Mt() {
        Et.stop()
    }
    function Tt() {
        Et.start()
    }
    const Et = new oi;
    function At(t, e, n, i) {
        if (!1 === t.visible)
            return;
        if (t.layers.test(e.layers))
            if (t.isGroup)
                n = t.renderOrder;
            else if (t.isLOD)
                !0 === t.autoUpdate && t.update(e);
            else if (t.isLight)
                d.pushLight(t),
                t.castShadow && d.pushShadow(t);
            else if (t.isSprite) {
                if (!t.frustumCulled || F.intersectsSprite(t)) {
                    i && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
                    const e = tt.update(t)
                      , r = t.material;
                    r.visible && u.push(t, e, r, n, U.z, null)
                }
            } else if (t.isImmediateRenderObject)
                i && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G),
                u.push(t, null, t.material, n, U.z, null);
            else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Y.render.frame && (t.skeleton.update(),
            t.skeleton.frame = Y.render.frame),
            !t.frustumCulled || F.intersectsObject(t))) {
                i && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
                const e = tt.update(t)
                  , r = t.material;
                if (Array.isArray(r)) {
                    const i = e.groups;
                    for (let s = 0, a = i.length; s < a; s++) {
                        const a = i[s]
                          , o = r[a.materialIndex];
                        o && o.visible && u.push(t, e, o, n, U.z, a)
                    }
                } else
                    r.visible && u.push(t, e, r, n, U.z, null)
            }
        const r = t.children;
        for (let t = 0, s = r.length; t < s; t++)
            At(r[t], e, n, i)
    }
    function Rt(t, e, n) {
        const i = !0 === e.isScene ? e.overrideMaterial : null;
        for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r]
              , a = s.object
              , o = s.geometry
              , l = null === i ? s.material : i
              , c = s.group;
            if (n.isArrayCamera) {
                const t = n.cameras;
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = t[n];
                    a.layers.test(i.layers) && (q.viewport(T.copy(i.viewport)),
                    d.setupLightsView(i),
                    Ct(a, e, i, o, l, c))
                }
            } else
                Ct(a, e, n, o, l, c)
        }
    }
    function Ct(t, e, n, i, r, s) {
        if (t.onBeforeRender(f, e, n, i, r, s),
        t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
        t.isImmediateRenderObject) {
            const i = It(n, e, r, t);
            q.setMaterial(r),
            dt.reset(),
            function(t, e) {
                t.render((function(t) {
                    f.renderBufferImmediate(t, e)
                }
                ))
            }(t, i)
        } else
            f.renderBufferDirect(n, e, i, r, t, s);
        t.onAfterRender(f, e, n, i, r, s)
    }
    function Pt(t, e, n) {
        !0 !== e.isScene && (e = k);
        const i = Z.get(t)
          , r = d.state.lights
          , s = d.state.shadowsArray
          , a = r.state.version
          , o = et.getParameters(t, r.state, s, e, n)
          , l = et.getProgramCacheKey(o);
        let c = i.programs;
        i.environment = t.isMeshStandardMaterial ? e.environment : null,
        i.fog = e.fog,
        i.envMap = Q.get(t.envMap || i.environment),
        void 0 === c && (t.addEventListener("dispose", wt),
        c = new Map,
        i.programs = c);
        let h = c.get(l);
        if (void 0 !== h) {
            if (i.currentProgram === h && i.lightsStateVersion === a)
                return Dt(t, o),
                h
        } else
            o.uniforms = et.getUniforms(t),
            t.onBuild(o, f),
            t.onBeforeCompile(o, f),
            h = et.acquireProgram(o, l),
            c.set(l, h),
            i.uniforms = o.uniforms;
        const u = i.uniforms;
        (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = st.uniform),
        Dt(t, o),
        i.needsLights = function(t) {
            return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
        }(t),
        i.lightsStateVersion = a,
        i.needsLights && (u.ambientLightColor.value = r.state.ambient,
        u.lightProbe.value = r.state.probe,
        u.directionalLights.value = r.state.directional,
        u.directionalLightShadows.value = r.state.directionalShadow,
        u.spotLights.value = r.state.spot,
        u.spotLightShadows.value = r.state.spotShadow,
        u.rectAreaLights.value = r.state.rectArea,
        u.ltc_1.value = r.state.rectAreaLTC1,
        u.ltc_2.value = r.state.rectAreaLTC2,
        u.pointLights.value = r.state.point,
        u.pointLightShadows.value = r.state.pointShadow,
        u.hemisphereLights.value = r.state.hemi,
        u.directionalShadowMap.value = r.state.directionalShadowMap,
        u.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
        u.spotShadowMap.value = r.state.spotShadowMap,
        u.spotShadowMatrix.value = r.state.spotShadowMatrix,
        u.pointShadowMap.value = r.state.pointShadowMap,
        u.pointShadowMatrix.value = r.state.pointShadowMatrix);
        const p = h.getUniforms()
          , m = Cr.seqWithValue(p.seq, u);
        return i.currentProgram = h,
        i.uniformsList = m,
        h
    }
    function Dt(t, e) {
        const n = Z.get(t);
        n.outputEncoding = e.outputEncoding,
        n.instancing = e.instancing,
        n.numClippingPlanes = e.numClippingPlanes,
        n.numIntersection = e.numClipIntersection,
        n.vertexAlphas = e.vertexAlphas
    }
    function It(t, e, n, i) {
        !0 !== e.isScene && (e = k),
        J.resetTextureUnits();
        const r = e.fog
          , s = n.isMeshStandardMaterial ? e.environment : null
          , a = null === _ ? f.outputEncoding : _.texture.encoding
          , o = Q.get(n.envMap || s)
          , l = !0 === n.vertexColors && i.geometry && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize
          , c = Z.get(n)
          , h = d.state.lights;
        if (!0 === O && (!0 === H || t !== S)) {
            const e = t === S && n.id === w;
            st.setState(n, t, e)
        }
        let u = !1;
        n.version === c.__version ? c.needsLights && c.lightsStateVersion !== h.state.version || c.outputEncoding !== a || i.isInstancedMesh && !1 === c.instancing ? u = !0 : i.isInstancedMesh || !0 !== c.instancing ? c.envMap !== o || n.fog && c.fog !== r ? u = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === st.numPlanes && c.numIntersection === st.numIntersection ? c.vertexAlphas !== l && (u = !0) : u = !0 : u = !0 : (u = !0,
        c.__version = n.version);
        let p = c.currentProgram;
        !0 === u && (p = Pt(n, e, i));
        let m = !1
          , g = !1
          , v = !1;
        const y = p.getUniforms()
          , x = c.uniforms;
        if (q.useProgram(p.program) && (m = !0,
        g = !0,
        v = !0),
        n.id !== w && (w = n.id,
        g = !0),
        m || S !== t) {
            if (y.setValue(pt, "projectionMatrix", t.projectionMatrix),
            j.logarithmicDepthBuffer && y.setValue(pt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
            S !== t && (S = t,
            g = !0,
            v = !0),
            n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                const e = y.map.cameraPosition;
                void 0 !== e && e.setValue(pt, U.setFromMatrixPosition(t.matrixWorld))
            }
            (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && y.setValue(pt, "isOrthographic", !0 === t.isOrthographicCamera),
            (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && y.setValue(pt, "viewMatrix", t.matrixWorldInverse)
        }
        if (n.skinning) {
            y.setOptional(pt, i, "bindMatrix"),
            y.setOptional(pt, i, "bindMatrixInverse");
            const t = i.skeleton;
            if (t) {
                const e = t.bones;
                if (j.floatVertexTextures) {
                    if (null === t.boneTexture) {
                        let n = Math.sqrt(4 * e.length);
                        n = mt(n),
                        n = Math.max(n, 4);
                        const i = new Float32Array(n * n * 4);
                        i.set(t.boneMatrices);
                        const r = new ii(i,n,n,E,b);
                        t.boneMatrices = i,
                        t.boneTexture = r,
                        t.boneTextureSize = n
                    }
                    y.setValue(pt, "boneTexture", t.boneTexture, J),
                    y.setValue(pt, "boneTextureSize", t.boneTextureSize)
                } else
                    y.setOptional(pt, t, "boneMatrices")
            }
        }
        var M, T;
        return (g || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow,
        y.setValue(pt, "receiveShadow", i.receiveShadow)),
        g && (y.setValue(pt, "toneMappingExposure", f.toneMappingExposure),
        c.needsLights && (T = v,
        (M = x).ambientLightColor.needsUpdate = T,
        M.lightProbe.needsUpdate = T,
        M.directionalLights.needsUpdate = T,
        M.directionalLightShadows.needsUpdate = T,
        M.pointLights.needsUpdate = T,
        M.pointLightShadows.needsUpdate = T,
        M.spotLights.needsUpdate = T,
        M.spotLightShadows.needsUpdate = T,
        M.rectAreaLights.needsUpdate = T,
        M.hemisphereLights.needsUpdate = T),
        r && n.fog && nt.refreshFogUniforms(x, r),
        nt.refreshMaterialUniforms(x, n, P, C),
        Cr.upload(pt, c.uniformsList, x, J)),
        n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Cr.upload(pt, c.uniformsList, x, J),
        n.uniformsNeedUpdate = !1),
        n.isSpriteMaterial && y.setValue(pt, "center", i.center),
        y.setValue(pt, "modelViewMatrix", i.modelViewMatrix),
        y.setValue(pt, "normalMatrix", i.normalMatrix),
        y.setValue(pt, "modelMatrix", i.matrixWorld),
        p
    }
    Et.setAnimationLoop((function(t) {
        bt && bt(t)
    }
    )),
    "undefined" != typeof window && Et.setContext(window),
    this.setAnimationLoop = function(t) {
        bt = t,
        yt.setAnimationLoop(t),
        null === t ? Et.stop() : Et.start()
    }
    ,
    yt.addEventListener("sessionstart", Mt),
    yt.addEventListener("sessionend", Tt),
    this.render = function(t, e) {
        let n, i;
        if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),
        n = arguments[2]),
        void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),
        i = arguments[3]),
        void 0 !== e && !0 !== e.isCamera)
            return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (!0 === g)
            return;
        !0 === t.autoUpdate && t.updateMatrixWorld(),
        null === e.parent && e.updateMatrixWorld(),
        !0 === yt.enabled && !0 === yt.isPresenting && (e = yt.getCamera(e)),
        !0 === t.isScene && t.onBeforeRender(f, t, e, n || _),
        d = rt.get(t, m.length),
        d.init(),
        m.push(d),
        G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        F.setFromProjectionMatrix(G),
        H = this.localClippingEnabled,
        O = st.init(this.clippingPlanes, H, e),
        u = it.get(t, p.length),
        u.init(),
        p.push(u),
        At(t, e, 0, f.sortObjects),
        u.finish(),
        !0 === f.sortObjects && u.sort(D, I),
        !0 === O && st.beginShadows();
        const r = d.state.shadowsArray;
        at.render(r, t, e),
        d.setupLights(),
        d.setupLightsView(e),
        !0 === O && st.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        void 0 !== n && this.setRenderTarget(n),
        ot.render(u, t, e, i);
        const s = u.opaque
          , a = u.transparent;
        s.length > 0 && Rt(s, t, e),
        a.length > 0 && Rt(a, t, e),
        null !== _ && (J.updateRenderTargetMipmap(_),
        J.updateMultisampleRenderTarget(_)),
        !0 === t.isScene && t.onAfterRender(f, t, e),
        q.buffers.depth.setTest(!0),
        q.buffers.depth.setMask(!0),
        q.buffers.color.setMask(!0),
        q.setPolygonOffset(!1),
        dt.resetDefaultState(),
        w = -1,
        S = null,
        m.pop(),
        d = m.length > 0 ? m[m.length - 1] : null,
        p.pop(),
        u = p.length > 0 ? p[p.length - 1] : null
    }
    ,
    this.getActiveCubeFace = function() {
        return v
    }
    ,
    this.getActiveMipmapLevel = function() {
        return y
    }
    ,
    this.getRenderTarget = function() {
        return _
    }
    ,
    this.setRenderTarget = function(t, e=0, n=0) {
        _ = t,
        v = e,
        y = n,
        t && void 0 === Z.get(t).__webglFramebuffer && J.setupRenderTarget(t);
        let i = null
          , r = !1
          , s = !1;
        if (t) {
            const n = t.texture;
            (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
            const a = Z.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (i = a[e],
            r = !0) : i = t.isWebGLMultisampleRenderTarget ? Z.get(t).__webglMultisampledFramebuffer : a,
            T.copy(t.viewport),
            A.copy(t.scissor),
            L = t.scissorTest
        } else
            T.copy(N).multiplyScalar(P).floor(),
            A.copy(B).multiplyScalar(P).floor(),
            L = z;
        if (q.bindFramebuffer(36160, i),
        q.viewport(T),
        q.scissor(A),
        q.setScissorTest(L),
        r) {
            const i = Z.get(t.texture);
            pt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
        } else if (s) {
            const i = Z.get(t.texture)
              , r = e || 0;
            pt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
        }
    }
    ,
    this.readRenderTargetPixels = function(t, e, n, i, r, s, a) {
        if (!t || !t.isWebGLRenderTarget)
            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o = Z.get(t).__webglFramebuffer;
        if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]),
        o) {
            q.bindFramebuffer(36160, o);
            try {
                const a = t.texture
                  , o = a.format
                  , l = a.type;
                if (o !== E && ut.convert(o) !== pt.getParameter(35739))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                const c = l === M && (W.has("EXT_color_buffer_half_float") || j.isWebGL2 && W.has("EXT_color_buffer_float"));
                if (!(l === x || ut.convert(l) === pt.getParameter(35738) || l === b && (j.isWebGL2 || W.has("OES_texture_float") || W.has("WEBGL_color_buffer_float")) || c))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                36053 === pt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && pt.readPixels(e, n, i, r, ut.convert(o), ut.convert(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
            } finally {
                const t = null !== _ ? Z.get(_).__webglFramebuffer : null;
                q.bindFramebuffer(36160, t)
            }
        }
    }
    ,
    this.copyFramebufferToTexture = function(t, e, n=0) {
        const i = Math.pow(2, -n)
          , r = Math.floor(e.image.width * i)
          , s = Math.floor(e.image.height * i)
          , a = ut.convert(e.format);
        J.setTexture2D(e, 0),
        pt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0),
        q.unbindTexture()
    }
    ,
    this.copyTextureToTexture = function(t, e, n, i=0) {
        const r = e.image.width
          , s = e.image.height
          , a = ut.convert(n.format)
          , o = ut.convert(n.type);
        J.setTexture2D(n, 0),
        pt.pixelStorei(37440, n.flipY),
        pt.pixelStorei(37441, n.premultiplyAlpha),
        pt.pixelStorei(3317, n.unpackAlignment),
        e.isDataTexture ? pt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? pt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : pt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image),
        0 === i && n.generateMipmaps && pt.generateMipmap(3553),
        q.unbindTexture()
    }
    ,
    this.copyTextureToTexture3D = function(t, e, n, i, r=0) {
        if (f.isWebGL1Renderer)
            return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const {width: s, height: a, data: o} = n.image
          , l = ut.convert(i.format)
          , c = ut.convert(i.type);
        let h;
        if (i.isDataTexture3D)
            J.setTexture3D(i, 0),
            h = 32879;
        else {
            if (!i.isDataTexture2DArray)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            J.setTexture2DArray(i, 0),
            h = 35866
        }
        pt.pixelStorei(37440, i.flipY),
        pt.pixelStorei(37441, i.premultiplyAlpha),
        pt.pixelStorei(3317, i.unpackAlignment);
        const u = pt.getParameter(3314)
          , d = pt.getParameter(32878)
          , p = pt.getParameter(3316)
          , m = pt.getParameter(3315)
          , g = pt.getParameter(32877);
        pt.pixelStorei(3314, s),
        pt.pixelStorei(32878, a),
        pt.pixelStorei(3316, t.min.x),
        pt.pixelStorei(3315, t.min.y),
        pt.pixelStorei(32877, t.min.z),
        pt.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, o),
        pt.pixelStorei(3314, u),
        pt.pixelStorei(32878, d),
        pt.pixelStorei(3316, p),
        pt.pixelStorei(3315, m),
        pt.pixelStorei(32877, g),
        0 === r && i.generateMipmaps && pt.generateMipmap(h),
        q.unbindTexture()
    }
    ,
    this.initTexture = function(t) {
        J.setTexture2D(t, 0),
        q.unbindTexture()
    }
    ,
    this.resetState = function() {
        v = 0,
        y = 0,
        _ = null,
        q.reset(),
        dt.reset()
    }
    ,
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
        detail: this
    }))
}
class bs extends ws {
}
bs.prototype.isWebGL1Renderer = !0;
class Ms {
    constructor(t, e=25e-5) {
        this.name = "",
        this.color = new tn(t),
        this.density = e
    }
    clone() {
        return new Ms(this.color,this.density)
    }
    toJSON() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }
}
Ms.prototype.isFogExp2 = !0;
class Ss {
    constructor(t, e=1, n=1e3) {
        this.name = "",
        this.color = new tn(t),
        this.near = e,
        this.far = n
    }
    clone() {
        return new Ss(this.color,this.near,this.far)
    }
    toJSON() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
}
Ss.prototype.isFog = !0;
class Ts extends Ce {
    constructor() {
        super(),
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(t, e) {
        return super.copy(t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.environment && (this.environment = t.environment.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
        this.autoUpdate = t.autoUpdate,
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return null !== this.background && (e.object.background = this.background.toJSON(t)),
        null !== this.environment && (e.object.environment = this.environment.toJSON(t)),
        null !== this.fog && (e.object.fog = this.fog.toJSON()),
        e
    }
}
Ts.prototype.isScene = !0;
class Es {
    constructor(t, e) {
        this.array = t,
        this.stride = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.usage = et,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0,
        this.uuid = ct(),
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
        return this.array = new t.array.constructor(t.array),
        this.count = t.count,
        this.stride = t.stride,
        this.usage = t.usage,
        this
    }
    copyAt(t, e, n) {
        t *= this.stride,
        n *= e.stride;
        for (let i = 0, r = this.stride; i < r; i++)
            this.array[t + i] = e.array[n + i];
        return this
    }
    set(t, e=0) {
        return this.array.set(t, e),
        this
    }
    clone(t) {
        void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ct()),
        void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid])
          , n = new Es(e,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(t) {
        return this.onUploadCallback = t,
        this
    }
    toJSON(t) {
        return void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ct()),
        void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
Es.prototype.isInterleavedBuffer = !0;
const As = new Lt;
class Ls {
    constructor(t, e, n, i) {
        this.name = "",
        this.data = t,
        this.itemSize = e,
        this.offset = n,
        this.normalized = !0 === i
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(t) {
        this.data.needsUpdate = t
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.data.count; e < n; e++)
            As.x = this.getX(e),
            As.y = this.getY(e),
            As.z = this.getZ(e),
            As.applyMatrix4(t),
            this.setXYZ(e, As.x, As.y, As.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++)
            As.x = this.getX(e),
            As.y = this.getY(e),
            As.z = this.getZ(e),
            As.applyNormalMatrix(t),
            this.setXYZ(e, As.x, As.y, As.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++)
            As.x = this.getX(e),
            As.y = this.getY(e),
            As.z = this.getZ(e),
            As.transformDirection(t),
            this.setXYZ(e, As.x, As.y, As.z);
        return this
    }
    setX(t, e) {
        return this.data.array[t * this.data.stride + this.offset] = e,
        this
    }
    setY(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 1] = e,
        this
    }
    setZ(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 2] = e,
        this
    }
    setW(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 3] = e,
        this
    }
    getX(t) {
        return this.data.array[t * this.data.stride + this.offset]
    }
    getY(t) {
        return this.data.array[t * this.data.stride + this.offset + 1]
    }
    getZ(t) {
        return this.data.array[t * this.data.stride + this.offset + 2]
    }
    getW(t) {
        return this.data.array[t * this.data.stride + this.offset + 3]
    }
    setXY(t, e, n) {
        return t = t * this.data.stride + this.offset,
        this.data.array[t + 0] = e,
        this.data.array[t + 1] = n,
        this
    }
    setXYZ(t, e, n, i) {
        return t = t * this.data.stride + this.offset,
        this.data.array[t + 0] = e,
        this.data.array[t + 1] = n,
        this.data.array[t + 2] = i,
        this
    }
    setXYZW(t, e, n, i, r) {
        return t = t * this.data.stride + this.offset,
        this.data.array[t + 0] = e,
        this.data.array[t + 1] = n,
        this.data.array[t + 2] = i,
        this.data.array[t + 3] = r,
        this
    }
    clone(t) {
        if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const n = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++)
                    t.push(this.data.array[n + e])
            }
            return new sn(new this.array.constructor(t),this.itemSize,this.normalized)
        }
        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
        void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new Ls(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(t) {
        if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const n = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++)
                    t.push(this.data.array[n + e])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        }
        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
        void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
        {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        }
    }
}
Ls.prototype.isInterleavedBufferAttribute = !0;
class Rs extends Xe {
    constructor(t) {
        super(),
        this.type = "SpriteMaterial",
        this.color = new tn(16777215),
        this.map = null,
        this.alphaMap = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.transparent = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.rotation = t.rotation,
        this.sizeAttenuation = t.sizeAttenuation,
        this
    }
}
let Cs;
Rs.prototype.isSpriteMaterial = !0;
const Ps = new Lt
  , Ds = new Lt
  , Is = new Lt
  , Ns = new vt
  , Bs = new vt
  , zs = new se
  , Fs = new Lt
  , Os = new Lt
  , Hs = new Lt
  , Gs = new vt
  , Us = new vt
  , ks = new vt;
class Vs extends Ce {
    constructor(t) {
        if (super(),
        this.type = "Sprite",
        void 0 === Cs) {
            Cs = new En;
            const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1])
              , e = new Es(t,5);
            Cs.setIndex([0, 1, 2, 0, 2, 3]),
            Cs.setAttribute("position", new Ls(e,3,0,!1)),
            Cs.setAttribute("uv", new Ls(e,2,3,!1))
        }
        this.geometry = Cs,
        this.material = void 0 !== t ? t : new Rs,
        this.center = new vt(.5,.5)
    }
    raycast(t, e) {
        null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
        Ds.setFromMatrixScale(this.matrixWorld),
        zs.copy(t.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
        Is.setFromMatrixPosition(this.modelViewMatrix),
        t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Ds.multiplyScalar(-Is.z);
        const n = this.material.rotation;
        let i, r;
        0 !== n && (r = Math.cos(n),
        i = Math.sin(n));
        const s = this.center;
        Ws(Fs.set(-.5, -.5, 0), Is, s, Ds, i, r),
        Ws(Os.set(.5, -.5, 0), Is, s, Ds, i, r),
        Ws(Hs.set(.5, .5, 0), Is, s, Ds, i, r),
        Gs.set(0, 0),
        Us.set(1, 0),
        ks.set(1, 1);
        let a = t.ray.intersectTriangle(Fs, Os, Hs, !1, Ps);
        if (null === a && (Ws(Os.set(-.5, .5, 0), Is, s, Ds, i, r),
        Us.set(0, 1),
        a = t.ray.intersectTriangle(Fs, Hs, Os, !1, Ps),
        null === a))
            return;
        const o = t.ray.origin.distanceTo(Ps);
        o < t.near || o > t.far || e.push({
            distance: o,
            point: Ps.clone(),
            uv: je.getUV(Ps, Fs, Os, Hs, Gs, Us, ks, new vt),
            face: null,
            object: this
        })
    }
    copy(t) {
        return super.copy(t),
        void 0 !== t.center && this.center.copy(t.center),
        this.material = t.material,
        this
    }
}
function Ws(t, e, n, i, r, s) {
    Ns.subVectors(t, n).addScalar(.5).multiply(i),
    void 0 !== r ? (Bs.x = s * Ns.x - r * Ns.y,
    Bs.y = r * Ns.x + s * Ns.y) : Bs.copy(Ns),
    t.copy(e),
    t.x += Bs.x,
    t.y += Bs.y,
    t.applyMatrix4(zs)
}
Vs.prototype.isSprite = !0;
const js = new Lt
  , qs = new Lt;
class Xs extends Ce {
    constructor() {
        super(),
        this._currentLevel = 0,
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            },
            isLOD: {
                value: !0
            }
        }),
        this.autoUpdate = !0
    }
    copy(t) {
        super.copy(t, !1);
        const e = t.levels;
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            this.addLevel(n.object.clone(), n.distance)
        }
        return this.autoUpdate = t.autoUpdate,
        this
    }
    addLevel(t, e=0) {
        e = Math.abs(e);
        const n = this.levels;
        let i;
        for (i = 0; i < n.length && !(e < n[i].distance); i++)
            ;
        return n.splice(i, 0, {
            distance: e,
            object: t
        }),
        this.add(t),
        this
    }
    getCurrentLevel() {
        return this._currentLevel
    }
    getObjectForDistance(t) {
        const e = this.levels;
        if (e.length > 0) {
            let n, i;
            for (n = 1,
            i = e.length; n < i && !(t < e[n].distance); n++)
                ;
            return e[n - 1].object
        }
        return null
    }
    raycast(t, e) {
        if (this.levels.length > 0) {
            js.setFromMatrixPosition(this.matrixWorld);
            const n = t.ray.origin.distanceTo(js);
            this.getObjectForDistance(n).raycast(t, e)
        }
    }
    update(t) {
        const e = this.levels;
        if (e.length > 1) {
            js.setFromMatrixPosition(t.matrixWorld),
            qs.setFromMatrixPosition(this.matrixWorld);
            const n = js.distanceTo(qs) / t.zoom;
            let i, r;
            for (e[0].object.visible = !0,
            i = 1,
            r = e.length; i < r && n >= e[i].distance; i++)
                e[i - 1].object.visible = !1,
                e[i].object.visible = !0;
            for (this._currentLevel = i - 1; i < r; i++)
                e[i].object.visible = !1
        }
    }
    toJSON(t) {
        const e = super.toJSON(t);
        !1 === this.autoUpdate && (e.object.autoUpdate = !1),
        e.object.levels = [];
        const n = this.levels;
        for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            e.object.levels.push({
                object: i.object.uuid,
                distance: i.distance
            })
        }
        return e
    }
}
const Ys = new Lt
  , Zs = new St
  , Js = new St
  , Qs = new Lt
  , Ks = new se;
class $s extends Wn {
    constructor(t, e) {
        super(t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new se,
        this.bindMatrixInverse = new se
    }
    copy(t) {
        return super.copy(t),
        this.bindMode = t.bindMode,
        this.bindMatrix.copy(t.bindMatrix),
        this.bindMatrixInverse.copy(t.bindMatrixInverse),
        this.skeleton = t.skeleton,
        this
    }
    bind(t, e) {
        this.skeleton = t,
        void 0 === e && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        e = this.matrixWorld),
        this.bindMatrix.copy(e),
        this.bindMatrixInverse.copy(e).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const t = new St
          , e = this.geometry.attributes.skinWeight;
        for (let n = 0, i = e.count; n < i; n++) {
            t.x = e.getX(n),
            t.y = e.getY(n),
            t.z = e.getZ(n),
            t.w = e.getW(n);
            const i = 1 / t.manhattanLength();
            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
            e.setXYZW(n, t.x, t.y, t.z, t.w)
        }
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t),
        "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    boneTransform(t, e) {
        const n = this.skeleton
          , i = this.geometry;
        Zs.fromBufferAttribute(i.attributes.skinIndex, t),
        Js.fromBufferAttribute(i.attributes.skinWeight, t),
        Ys.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix),
        e.set(0, 0, 0);
        for (let t = 0; t < 4; t++) {
            const i = Js.getComponent(t);
            if (0 !== i) {
                const r = Zs.getComponent(t);
                Ks.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
                e.addScaledVector(Qs.copy(Ys).applyMatrix4(Ks), i)
            }
        }
        return e.applyMatrix4(this.bindMatrixInverse)
    }
}
$s.prototype.isSkinnedMesh = !0;
class ta extends Ce {
    constructor() {
        super(),
        this.type = "Bone"
    }
}
ta.prototype.isBone = !0;
const ea = new se
  , na = new se;
class ia {
    constructor(t=[], e=[]) {
        this.uuid = ct(),
        this.bones = t.slice(0),
        this.boneInverses = e,
        this.boneMatrices = null,
        this.boneTexture = null,
        this.boneTextureSize = 0,
        this.frame = -1,
        this.init()
    }
    init() {
        const t = this.bones
          , e = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * t.length),
        0 === e.length)
            this.calculateInverses();
        else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
            this.boneInverses = [];
            for (let t = 0, e = this.bones.length; t < e; t++)
                this.boneInverses.push(new se)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = new se;
            this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(),
            this.boneInverses.push(e)
        }
    }
    pose() {
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && e.matrixWorld.copy(this.boneInverses[t]).invert()
        }
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(),
            e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
            e.matrix.decompose(e.position, e.quaternion, e.scale))
        }
    }
    update() {
        const t = this.bones
          , e = this.boneInverses
          , n = this.boneMatrices
          , i = this.boneTexture;
        for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i] ? t[i].matrixWorld : na;
            ea.multiplyMatrices(r, e[i]),
            ea.toArray(n, 16 * i)
        }
        null !== i && (i.needsUpdate = !0)
    }
    clone() {
        return new ia(this.bones,this.boneInverses)
    }
    getBoneByName(t) {
        for (let e = 0, n = this.bones.length; e < n; e++) {
            const n = this.bones[e];
            if (n.name === t)
                return n
        }
    }
    dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(),
        this.boneTexture = null)
    }
    fromJSON(t, e) {
        this.uuid = t.uuid;
        for (let n = 0, i = t.bones.length; n < i; n++) {
            const i = t.bones[n];
            let r = e[i];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i),
            r = new ta),
            this.bones.push(r),
            this.boneInverses.push((new se).fromArray(t.boneInverses[n]))
        }
        return this.init(),
        this
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        t.uuid = this.uuid;
        const e = this.bones
          , n = this.boneInverses;
        for (let i = 0, r = e.length; i < r; i++) {
            const r = e[i];
            t.bones.push(r.uuid);
            const s = n[i];
            t.boneInverses.push(s.toArray())
        }
        return t
    }
}
const ra = new se
  , sa = new se
  , aa = []
  , oa = new Wn;
class la extends Wn {
    constructor(t, e, n) {
        super(t, e),
        this.instanceMatrix = new sn(new Float32Array(16 * n),16),
        this.instanceColor = null,
        this.count = n,
        this.frustumCulled = !1
    }
    copy(t) {
        return super.copy(t),
        this.instanceMatrix.copy(t.instanceMatrix),
        null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()),
        this.count = t.count,
        this
    }
    getColorAt(t, e) {
        e.fromArray(this.instanceColor.array, 3 * t)
    }
    getMatrixAt(t, e) {
        e.fromArray(this.instanceMatrix.array, 16 * t)
    }
    raycast(t, e) {
        const n = this.matrixWorld
          , i = this.count;
        if (oa.geometry = this.geometry,
        oa.material = this.material,
        void 0 !== oa.material)
            for (let r = 0; r < i; r++) {
                this.getMatrixAt(r, ra),
                sa.multiplyMatrices(n, ra),
                oa.matrixWorld = sa,
                oa.raycast(t, aa);
                for (let t = 0, n = aa.length; t < n; t++) {
                    const n = aa[t];
                    n.instanceId = r,
                    n.object = this,
                    e.push(n)
                }
                aa.length = 0
            }
    }
    setColorAt(t, e) {
        null === this.instanceColor && (this.instanceColor = new sn(new Float32Array(3 * this.count),3)),
        e.toArray(this.instanceColor.array, 3 * t)
    }
    setMatrixAt(t, e) {
        e.toArray(this.instanceMatrix.array, 16 * t)
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
la.prototype.isInstancedMesh = !0;
class ca extends Xe {
    constructor(t) {
        super(),
        this.type = "LineBasicMaterial",
        this.color = new tn(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.morphTargets = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this.morphTargets = t.morphTargets,
        this
    }
}
ca.prototype.isLineBasicMaterial = !0;
const ha = new Lt
  , ua = new Lt
  , da = new se
  , pa = new re
  , ma = new Jt;
class fa extends Ce {
    constructor(t=new En, e=new ca) {
        super(),
        this.type = "Line",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t) {
        return super.copy(t),
        this.material = t.material,
        this.geometry = t.geometry,
        this
    }
    computeLineDistances() {
        const t = this.geometry;
        if (t.isBufferGeometry)
            if (null === t.index) {
                const e = t.attributes.position
                  , n = [0];
                for (let t = 1, i = e.count; t < i; t++)
                    ha.fromBufferAttribute(e, t - 1),
                    ua.fromBufferAttribute(e, t),
                    n[t] = n[t - 1],
                    n[t] += ha.distanceTo(ua);
                t.setAttribute("lineDistance", new mn(n,1))
            } else
                console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else
            t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this
    }
    raycast(t, e) {
        const n = this.geometry
          , i = this.matrixWorld
          , r = t.params.Line.threshold
          , s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        ma.copy(n.boundingSphere),
        ma.applyMatrix4(i),
        ma.radius += r,
        !1 === t.ray.intersectsSphere(ma))
            return;
        da.copy(i).invert(),
        pa.copy(t.ray).applyMatrix4(da);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , o = a * a
          , l = new Lt
          , c = new Lt
          , h = new Lt
          , u = new Lt
          , d = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
            const i = n.index
              , r = n.attributes.position;
            if (null !== i) {
                for (let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d) {
                    const s = i.getX(n)
                      , a = i.getX(n + 1);
                    l.fromBufferAttribute(r, s),
                    c.fromBufferAttribute(r, a);
                    if (pa.distanceSqToSegment(l, c, u, h) > o)
                        continue;
                    u.applyMatrix4(this.matrixWorld);
                    const d = t.ray.origin.distanceTo(u);
                    d < t.near || d > t.far || e.push({
                        distance: d,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            } else {
                for (let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d) {
                    l.fromBufferAttribute(r, n),
                    c.fromBufferAttribute(r, n + 1);
                    if (pa.distanceSqToSegment(l, c, u, h) > o)
                        continue;
                    u.applyMatrix4(this.matrixWorld);
                    const i = t.ray.origin.distanceTo(u);
                    i < t.near || i > t.far || e.push({
                        distance: i,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            }
        } else
            n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
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
            void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
}
fa.prototype.isLine = !0;
const ga = new Lt
  , va = new Lt;
class ya extends fa {
    constructor(t, e) {
        super(t, e),
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const t = this.geometry;
        if (t.isBufferGeometry)
            if (null === t.index) {
                const e = t.attributes.position
                  , n = [];
                for (let t = 0, i = e.count; t < i; t += 2)
                    ga.fromBufferAttribute(e, t),
                    va.fromBufferAttribute(e, t + 1),
                    n[t] = 0 === t ? 0 : n[t - 1],
                    n[t + 1] = n[t] + ga.distanceTo(va);
                t.setAttribute("lineDistance", new mn(n,1))
            } else
                console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else
            t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this
    }
}
ya.prototype.isLineSegments = !0;
class xa extends fa {
    constructor(t, e) {
        super(t, e),
        this.type = "LineLoop"
    }
}
xa.prototype.isLineLoop = !0;
class _a extends Xe {
    constructor(t) {
        super(),
        this.type = "PointsMaterial",
        this.color = new tn(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.morphTargets = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this.morphTargets = t.morphTargets,
        this
    }
}
_a.prototype.isPointsMaterial = !0;
const wa = new se
  , ba = new re
  , Ma = new Jt
  , Sa = new Lt;
class Ta extends Ce {
    constructor(t=new En, e=new _a) {
        super(),
        this.type = "Points",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t) {
        return super.copy(t),
        this.material = t.material,
        this.geometry = t.geometry,
        this
    }
    raycast(t, e) {
        const n = this.geometry
          , i = this.matrixWorld
          , r = t.params.Points.threshold
          , s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        Ma.copy(n.boundingSphere),
        Ma.applyMatrix4(i),
        Ma.radius += r,
        !1 === t.ray.intersectsSphere(Ma))
            return;
        wa.copy(i).invert(),
        ba.copy(t.ray).applyMatrix4(wa);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , o = a * a;
        if (n.isBufferGeometry) {
            const r = n.index
              , a = n.attributes.position;
            if (null !== r) {
                for (let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++) {
                    const s = r.getX(n);
                    Sa.fromBufferAttribute(a, s),
                    Ea(Sa, s, o, i, t, e, this)
                }
            } else {
                for (let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++)
                    Sa.fromBufferAttribute(a, n),
                    Ea(Sa, n, o, i, t, e, this)
            }
        } else
            console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
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
            void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
}
function Ea(t, e, n, i, r, s, a) {
    const o = ba.distanceSqToPoint(t);
    if (o < n) {
        const n = new Lt;
        ba.closestPointToPoint(t, n),
        n.applyMatrix4(i);
        const l = r.ray.origin.distanceTo(n);
        if (l < r.near || l > r.far)
            return;
        s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: e,
            face: null,
            object: a
        })
    }
}
Ta.prototype.isPoints = !0;
class Aa extends bt {
    constructor(t, e, n, i, r, s, a, o, l) {
        super(t, e, n, i, r, s, a, o, l),
        this.format = void 0 !== a ? a : T,
        this.minFilter = void 0 !== s ? s : g,
        this.magFilter = void 0 !== r ? r : g,
        this.generateMipmaps = !1;
        const c = this;
        "requestVideoFrameCallback"in t && t.requestVideoFrameCallback((function e() {
            c.needsUpdate = !0,
            t.requestVideoFrameCallback(e)
        }
        ))
    }
    clone() {
        return new this.constructor(this.image).copy(this)
    }
    update() {
        const t = this.image;
        !1 === "requestVideoFrameCallback"in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
}
Aa.prototype.isVideoTexture = !0;
class La extends bt {
    constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
        super(null, s, a, o, l, c, i, r, h, u),
        this.image = {
            width: e,
            height: n
        },
        this.mipmaps = t,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
}
La.prototype.isCompressedTexture = !0;
class Ra extends bt {
    constructor(t, e, n, i, r, s, a, o, l) {
        super(t, e, n, i, r, s, a, o, l),
        this.needsUpdate = !0
    }
}
Ra.prototype.isCanvasTexture = !0;
class Ca extends bt {
    constructor(t, e, n, i, r, s, a, o, l, c) {
        if ((c = void 0 !== c ? c : A) !== A && c !== L)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && c === A && (n = _),
        void 0 === n && c === L && (n = S),
        super(null, i, r, s, a, o, c, n, l),
        this.image = {
            width: t,
            height: e
        },
        this.magFilter = void 0 !== a ? a : p,
        this.minFilter = void 0 !== o ? o : p,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
}
Ca.prototype.isDepthTexture = !0;
class Pa extends En {
    constructor(t=1, e=8, n=0, i=2 * Math.PI) {
        super(),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
        },
        e = Math.max(3, e);
        const r = []
          , s = []
          , a = []
          , o = []
          , l = new Lt
          , c = new vt;
        s.push(0, 0, 0),
        a.push(0, 0, 1),
        o.push(.5, .5);
        for (let r = 0, h = 3; r <= e; r++,
        h += 3) {
            const u = n + r / e * i;
            l.x = t * Math.cos(u),
            l.y = t * Math.sin(u),
            s.push(l.x, l.y, l.z),
            a.push(0, 0, 1),
            c.x = (s[h] / t + 1) / 2,
            c.y = (s[h + 1] / t + 1) / 2,
            o.push(c.x, c.y)
        }
        for (let t = 1; t <= e; t++)
            r.push(t, t + 1, 0);
        this.setIndex(r),
        this.setAttribute("position", new mn(s,3)),
        this.setAttribute("normal", new mn(a,3)),
        this.setAttribute("uv", new mn(o,2))
    }
}
class Da extends En {
    constructor(t=1, e=1, n=1, i=8, r=1, s=!1, a=0, o=2 * Math.PI) {
        super(),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: s,
            thetaStart: a,
            thetaLength: o
        };
        const l = this;
        i = Math.floor(i),
        r = Math.floor(r);
        const c = []
          , h = []
          , u = []
          , d = [];
        let p = 0;
        const m = []
          , f = n / 2;
        let g = 0;
        function v(n) {
            const r = p
              , s = new vt
              , m = new Lt;
            let v = 0;
            const y = !0 === n ? t : e
              , x = !0 === n ? 1 : -1;
            for (let t = 1; t <= i; t++)
                h.push(0, f * x, 0),
                u.push(0, x, 0),
                d.push(.5, .5),
                p++;
            const _ = p;
            for (let t = 0; t <= i; t++) {
                const e = t / i * o + a
                  , n = Math.cos(e)
                  , r = Math.sin(e);
                m.x = y * r,
                m.y = f * x,
                m.z = y * n,
                h.push(m.x, m.y, m.z),
                u.push(0, x, 0),
                s.x = .5 * n + .5,
                s.y = .5 * r * x + .5,
                d.push(s.x, s.y),
                p++
            }
            for (let t = 0; t < i; t++) {
                const e = r + t
                  , i = _ + t;
                !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e),
                v += 3
            }
            l.addGroup(g, v, !0 === n ? 1 : 2),
            g += v
        }
        !function() {
            const s = new Lt
              , v = new Lt;
            let y = 0;
            const x = (e - t) / n;
            for (let l = 0; l <= r; l++) {
                const c = []
                  , g = l / r
                  , y = g * (e - t) + t;
                for (let t = 0; t <= i; t++) {
                    const e = t / i
                      , r = e * o + a
                      , l = Math.sin(r)
                      , m = Math.cos(r);
                    v.x = y * l,
                    v.y = -g * n + f,
                    v.z = y * m,
                    h.push(v.x, v.y, v.z),
                    s.set(l, x, m).normalize(),
                    u.push(s.x, s.y, s.z),
                    d.push(e, 1 - g),
                    c.push(p++)
                }
                m.push(c)
            }
            for (let t = 0; t < i; t++)
                for (let e = 0; e < r; e++) {
                    const n = m[e][t]
                      , i = m[e + 1][t]
                      , r = m[e + 1][t + 1]
                      , s = m[e][t + 1];
                    c.push(n, i, s),
                    c.push(i, r, s),
                    y += 6
                }
            l.addGroup(g, y, 0),
            g += y
        }(),
        !1 === s && (t > 0 && v(!0),
        e > 0 && v(!1)),
        this.setIndex(c),
        this.setAttribute("position", new mn(h,3)),
        this.setAttribute("normal", new mn(u,3)),
        this.setAttribute("uv", new mn(d,2))
    }
}
class Ia extends Da {
    constructor(t=1, e=1, n=8, i=1, r=!1, s=0, a=2 * Math.PI) {
        super(0, t, e, n, i, r, s, a),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: s,
            thetaLength: a
        }
    }
}
class Na extends En {
    constructor(t, e, n=1, i=0) {
        super(),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
        };
        const r = []
          , s = [];
        function a(t, e, n, i) {
            const r = i + 1
              , s = [];
            for (let i = 0; i <= r; i++) {
                s[i] = [];
                const a = t.clone().lerp(n, i / r)
                  , o = e.clone().lerp(n, i / r)
                  , l = r - i;
                for (let t = 0; t <= l; t++)
                    s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l)
            }
            for (let t = 0; t < r; t++)
                for (let e = 0; e < 2 * (r - t) - 1; e++) {
                    const n = Math.floor(e / 2);
                    e % 2 == 0 ? (o(s[t][n + 1]),
                    o(s[t + 1][n]),
                    o(s[t][n])) : (o(s[t][n + 1]),
                    o(s[t + 1][n + 1]),
                    o(s[t + 1][n]))
                }
        }
        function o(t) {
            r.push(t.x, t.y, t.z)
        }
        function l(e, n) {
            const i = 3 * e;
            n.x = t[i + 0],
            n.y = t[i + 1],
            n.z = t[i + 2]
        }
        function c(t, e, n, i) {
            i < 0 && 1 === t.x && (s[e] = t.x - 1),
            0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5)
        }
        function h(t) {
            return Math.atan2(t.z, -t.x)
        }
        !function(t) {
            const n = new Lt
              , i = new Lt
              , r = new Lt;
            for (let s = 0; s < e.length; s += 3)
                l(e[s + 0], n),
                l(e[s + 1], i),
                l(e[s + 2], r),
                a(n, i, r, t)
        }(i),
        function(t) {
            const e = new Lt;
            for (let n = 0; n < r.length; n += 3)
                e.x = r[n + 0],
                e.y = r[n + 1],
                e.z = r[n + 2],
                e.normalize().multiplyScalar(t),
                r[n + 0] = e.x,
                r[n + 1] = e.y,
                r[n + 2] = e.z
        }(n),
        function() {
            const t = new Lt;
            for (let n = 0; n < r.length; n += 3) {
                t.x = r[n + 0],
                t.y = r[n + 1],
                t.z = r[n + 2];
                const i = h(t) / 2 / Math.PI + .5
                  , a = (e = t,
                Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
                s.push(i, 1 - a)
            }
            var e;
            (function() {
                const t = new Lt
                  , e = new Lt
                  , n = new Lt
                  , i = new Lt
                  , a = new vt
                  , o = new vt
                  , l = new vt;
                for (let u = 0, d = 0; u < r.length; u += 9,
                d += 6) {
                    t.set(r[u + 0], r[u + 1], r[u + 2]),
                    e.set(r[u + 3], r[u + 4], r[u + 5]),
                    n.set(r[u + 6], r[u + 7], r[u + 8]),
                    a.set(s[d + 0], s[d + 1]),
                    o.set(s[d + 2], s[d + 3]),
                    l.set(s[d + 4], s[d + 5]),
                    i.copy(t).add(e).add(n).divideScalar(3);
                    const p = h(i);
                    c(a, d + 0, t, p),
                    c(o, d + 2, e, p),
                    c(l, d + 4, n, p)
                }
            }
            )(),
            function() {
                for (let t = 0; t < s.length; t += 6) {
                    const e = s[t + 0]
                      , n = s[t + 2]
                      , i = s[t + 4]
                      , r = Math.max(e, n, i)
                      , a = Math.min(e, n, i);
                    r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1),
                    n < .2 && (s[t + 2] += 1),
                    i < .2 && (s[t + 4] += 1))
                }
            }()
        }(),
        this.setAttribute("position", new mn(r,3)),
        this.setAttribute("normal", new mn(r.slice(),3)),
        this.setAttribute("uv", new mn(s,2)),
        0 === i ? this.computeVertexNormals() : this.normalizeNormals()
    }
}
class Ba extends Na {
    constructor(t=1, e=0) {
        const n = (1 + Math.sqrt(5)) / 2
          , i = 1 / n;
        super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
}
const za = new Lt
  , Fa = new Lt
  , Oa = new Lt
  , Ha = new je;
class Ga extends En {
    constructor(t, e) {
        if (super(),
        this.type = "EdgesGeometry",
        this.parameters = {
            thresholdAngle: e
        },
        e = void 0 !== e ? e : 1,
        !0 === t.isGeometry)
            return void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        const n = Math.pow(10, 4)
          , i = Math.cos(ot * e)
          , r = t.getIndex()
          , s = t.getAttribute("position")
          , a = r ? r.count : s.count
          , o = [0, 0, 0]
          , l = ["a", "b", "c"]
          , c = new Array(3)
          , h = {}
          , u = [];
        for (let t = 0; t < a; t += 3) {
            r ? (o[0] = r.getX(t),
            o[1] = r.getX(t + 1),
            o[2] = r.getX(t + 2)) : (o[0] = t,
            o[1] = t + 1,
            o[2] = t + 2);
            const {a: e, b: a, c: d} = Ha;
            if (e.fromBufferAttribute(s, o[0]),
            a.fromBufferAttribute(s, o[1]),
            d.fromBufferAttribute(s, o[2]),
            Ha.getNormal(Oa),
            c[0] = `${Math.round(e.x * n)},${Math.round(e.y * n)},${Math.round(e.z * n)}`,
            c[1] = `${Math.round(a.x * n)},${Math.round(a.y * n)},${Math.round(a.z * n)}`,
            c[2] = `${Math.round(d.x * n)},${Math.round(d.y * n)},${Math.round(d.z * n)}`,
            c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0])
                for (let t = 0; t < 3; t++) {
                    const e = (t + 1) % 3
                      , n = c[t]
                      , r = c[e]
                      , s = Ha[l[t]]
                      , a = Ha[l[e]]
                      , d = `${n}_ ${r}`
                      , p = `${r}_ ${n}`;
                    p in h && h[p] ? (Oa.dot(h[p].normal) <= i && (u.push(s.x, s.y, s.z),
                    u.push(a.x, a.y, a.z)),
                    h[p] = null) : d in h || (h[d] = {
                        index0: o[t],
                        index1: o[e],
                        normal: Oa.clone()
                    })
                }
        }
        for (const t in h)
            if (h[t]) {
                const {index0: e, index1: n} = h[t];
                za.fromBufferAttribute(s, e),
                Fa.fromBufferAttribute(s, n),
                u.push(za.x, za.y, za.z),
                u.push(Fa.x, Fa.y, Fa.z)
            }
        this.setAttribute("position", new mn(u,3))
    }
}
const Ua = function(t, e, n) {
    n = n || 2;
    const i = e && e.length
      , r = i ? e[0] * n : t.length;
    let s = ka(t, 0, r, n, !0);
    const a = [];
    if (!s || s.next === s.prev)
        return a;
    let o, l, c, h, u, d, p;
    if (i && (s = function(t, e, n, i) {
        const r = [];
        let s, a, o, l, c;
        for (s = 0,
        a = e.length; s < a; s++)
            o = e[s] * i,
            l = s < a - 1 ? e[s + 1] * i : t.length,
            c = ka(t, o, l, i, !1),
            c === c.next && (c.steiner = !0),
            r.push($a(c));
        for (r.sort(Za),
        s = 0; s < r.length; s++)
            Ja(r[s], n),
            n = Va(n, n.next);
        return n
    }(t, e, s, n)),
    t.length > 80 * n) {
        o = c = t[0],
        l = h = t[1];
        for (let e = n; e < r; e += n)
            u = t[e],
            d = t[e + 1],
            u < o && (o = u),
            d < l && (l = d),
            u > c && (c = u),
            d > h && (h = d);
        p = Math.max(c - o, h - l),
        p = 0 !== p ? 1 / p : 0
    }
    return Wa(s, a, n, o, l, p),
    a
};
function ka(t, e, n, i, r) {
    let s, a;
    if (r === function(t, e, n, i) {
        let r = 0;
        for (let s = e, a = n - i; s < n; s += i)
            r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]),
            a = s;
        return r
    }(t, e, n, i) > 0)
        for (s = e; s < n; s += i)
            a = co(s, t[s], t[s + 1], a);
    else
        for (s = n - i; s >= e; s -= i)
            a = co(s, t[s], t[s + 1], a);
    return a && io(a, a.next) && (ho(a),
    a = a.next),
    a
}
function Va(t, e) {
    if (!t)
        return t;
    e || (e = t);
    let n, i = t;
    do {
        if (n = !1,
        i.steiner || !io(i, i.next) && 0 !== no(i.prev, i, i.next))
            i = i.next;
        else {
            if (ho(i),
            i = e = i.prev,
            i === i.next)
                break;
            n = !0
        }
    } while (n || i !== e);
    return e
}
function Wa(t, e, n, i, r, s, a) {
    if (!t)
        return;
    !a && s && function(t, e, n, i) {
        let r = t;
        do {
            null === r.z && (r.z = Ka(r.x, r.y, e, n, i)),
            r.prevZ = r.prev,
            r.nextZ = r.next,
            r = r.next
        } while (r !== t);
        r.prevZ.nextZ = null,
        r.prevZ = null,
        function(t) {
            let e, n, i, r, s, a, o, l, c = 1;
            do {
                for (n = t,
                t = null,
                s = null,
                a = 0; n; ) {
                    for (a++,
                    i = n,
                    o = 0,
                    e = 0; e < c && (o++,
                    i = i.nextZ,
                    i); e++)
                        ;
                    for (l = c; o > 0 || l > 0 && i; )
                        0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n,
                        n = n.nextZ,
                        o--) : (r = i,
                        i = i.nextZ,
                        l--),
                        s ? s.nextZ = r : t = r,
                        r.prevZ = s,
                        s = r;
                    n = i
                }
                s.nextZ = null,
                c *= 2
            } while (a > 1)
        }(r)
    }(t, i, r, s);
    let o, l, c = t;
    for (; t.prev !== t.next; )
        if (o = t.prev,
        l = t.next,
        s ? qa(t, i, r, s) : ja(t))
            e.push(o.i / n),
            e.push(t.i / n),
            e.push(l.i / n),
            ho(t),
            t = l.next,
            c = l.next;
        else if ((t = l) === c) {
            a ? 1 === a ? Wa(t = Xa(Va(t), e, n), e, n, i, r, s, 2) : 2 === a && Ya(t, e, n, i, r, s) : Wa(Va(t), e, n, i, r, s, 1);
            break
        }
}
function ja(t) {
    const e = t.prev
      , n = t
      , i = t.next;
    if (no(e, n, i) >= 0)
        return !1;
    let r = t.next.next;
    for (; r !== t.prev; ) {
        if (to(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && no(r.prev, r, r.next) >= 0)
            return !1;
        r = r.next
    }
    return !0
}
function qa(t, e, n, i) {
    const r = t.prev
      , s = t
      , a = t.next;
    if (no(r, s, a) >= 0)
        return !1;
    const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x
      , l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y
      , c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x
      , h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y
      , u = Ka(o, l, e, n, i)
      , d = Ka(c, h, e, n, i);
    let p = t.prevZ
      , m = t.nextZ;
    for (; p && p.z >= u && m && m.z <= d; ) {
        if (p !== t.prev && p !== t.next && to(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && no(p.prev, p, p.next) >= 0)
            return !1;
        if (p = p.prevZ,
        m !== t.prev && m !== t.next && to(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && no(m.prev, m, m.next) >= 0)
            return !1;
        m = m.nextZ
    }
    for (; p && p.z >= u; ) {
        if (p !== t.prev && p !== t.next && to(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && no(p.prev, p, p.next) >= 0)
            return !1;
        p = p.prevZ
    }
    for (; m && m.z <= d; ) {
        if (m !== t.prev && m !== t.next && to(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && no(m.prev, m, m.next) >= 0)
            return !1;
        m = m.nextZ
    }
    return !0
}
function Xa(t, e, n) {
    let i = t;
    do {
        const r = i.prev
          , s = i.next.next;
        !io(r, s) && ro(r, i, i.next, s) && oo(r, s) && oo(s, r) && (e.push(r.i / n),
        e.push(i.i / n),
        e.push(s.i / n),
        ho(i),
        ho(i.next),
        i = t = s),
        i = i.next
    } while (i !== t);
    return Va(i)
}
function Ya(t, e, n, i, r, s) {
    let a = t;
    do {
        let t = a.next.next;
        for (; t !== a.prev; ) {
            if (a.i !== t.i && eo(a, t)) {
                let o = lo(a, t);
                return a = Va(a, a.next),
                o = Va(o, o.next),
                Wa(a, e, n, i, r, s),
                void Wa(o, e, n, i, r, s)
            }
            t = t.next
        }
        a = a.next
    } while (a !== t)
}
function Za(t, e) {
    return t.x - e.x
}
function Ja(t, e) {
    if (e = function(t, e) {
        let n = e;
        const i = t.x
          , r = t.y;
        let s, a = -1 / 0;
        do {
            if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                if (t <= i && t > a) {
                    if (a = t,
                    t === i) {
                        if (r === n.y)
                            return n;
                        if (r === n.next.y)
                            return n.next
                    }
                    s = n.x < n.next.x ? n : n.next
                }
            }
            n = n.next
        } while (n !== e);
        if (!s)
            return null;
        if (i === a)
            return s;
        const o = s
          , l = s.x
          , c = s.y;
        let h, u = 1 / 0;
        n = s;
        do {
            i >= n.x && n.x >= l && i !== n.x && to(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x),
            oo(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Qa(s, n))) && (s = n,
            u = h)),
            n = n.next
        } while (n !== o);
        return s
    }(t, e)) {
        const n = lo(e, t);
        Va(e, e.next),
        Va(n, n.next)
    }
}
function Qa(t, e) {
    return no(t.prev, t, e.prev) < 0 && no(e.next, t, t.next) < 0
}
function Ka(t, e, n, i, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
}
function $a(t) {
    let e = t
      , n = t;
    do {
        (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e),
        e = e.next
    } while (e !== t);
    return n
}
function to(t, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0
}
function eo(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
        let n = t;
        do {
            if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && ro(n, n.next, t, e))
                return !0;
            n = n.next
        } while (n !== t);
        return !1
    }(t, e) && (oo(t, e) && oo(e, t) && function(t, e) {
        let n = t
          , i = !1;
        const r = (t.x + e.x) / 2
          , s = (t.y + e.y) / 2;
        do {
            n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i),
            n = n.next
        } while (n !== t);
        return i
    }(t, e) && (no(t.prev, t, e.prev) || no(t, e.prev, e)) || io(t, e) && no(t.prev, t, t.next) > 0 && no(e.prev, e, e.next) > 0)
}
function no(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
}
function io(t, e) {
    return t.x === e.x && t.y === e.y
}
function ro(t, e, n, i) {
    const r = ao(no(t, e, n))
      , s = ao(no(t, e, i))
      , a = ao(no(n, i, t))
      , o = ao(no(n, i, e));
    return r !== s && a !== o || (!(0 !== r || !so(t, n, e)) || (!(0 !== s || !so(t, i, e)) || (!(0 !== a || !so(n, t, i)) || !(0 !== o || !so(n, e, i)))))
}
function so(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
}
function ao(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0
}
function oo(t, e) {
    return no(t.prev, t, t.next) < 0 ? no(t, e, t.next) >= 0 && no(t, t.prev, e) >= 0 : no(t, e, t.prev) < 0 || no(t, t.next, e) < 0
}
function lo(t, e) {
    const n = new uo(t.i,t.x,t.y)
      , i = new uo(e.i,e.x,e.y)
      , r = t.next
      , s = e.prev;
    return t.next = e,
    e.prev = t,
    n.next = r,
    r.prev = n,
    i.next = n,
    n.prev = i,
    s.next = i,
    i.prev = s,
    i
}
function co(t, e, n, i) {
    const r = new uo(t,e,n);
    return i ? (r.next = i.next,
    r.prev = i,
    i.next.prev = r,
    i.next = r) : (r.prev = r,
    r.next = r),
    r
}
function ho(t) {
    t.next.prev = t.prev,
    t.prev.next = t.next,
    t.prevZ && (t.prevZ.nextZ = t.nextZ),
    t.nextZ && (t.nextZ.prevZ = t.prevZ)
}
function uo(t, e, n) {
    this.i = t,
    this.x = e,
    this.y = n,
    this.prev = null,
    this.next = null,
    this.z = null,
    this.prevZ = null,
    this.nextZ = null,
    this.steiner = !1
}
class po {
    static area(t) {
        const e = t.length;
        let n = 0;
        for (let i = e - 1, r = 0; r < e; i = r++)
            n += t[i].x * t[r].y - t[r].x * t[i].y;
        return .5 * n
    }
    static isClockWise(t) {
        return po.area(t) < 0
    }
    static triangulateShape(t, e) {
        const n = []
          , i = []
          , r = [];
        mo(t),
        fo(n, t);
        let s = t.length;
        e.forEach(mo);
        for (let t = 0; t < e.length; t++)
            i.push(s),
            s += e[t].length,
            fo(n, e[t]);
        const a = Ua(n, i);
        for (let t = 0; t < a.length; t += 3)
            r.push(a.slice(t, t + 3));
        return r
    }
}
function mo(t) {
    const e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop()
}
function fo(t, e) {
    for (let n = 0; n < e.length; n++)
        t.push(e[n].x),
        t.push(e[n].y)
}
class go extends En {
    constructor(t, e) {
        super(),
        this.type = "ExtrudeGeometry",
        this.parameters = {
            shapes: t,
            options: e
        },
        t = Array.isArray(t) ? t : [t];
        const n = this
          , i = []
          , r = [];
        for (let e = 0, n = t.length; e < n; e++) {
            s(t[e])
        }
        function s(t) {
            const s = []
              , a = void 0 !== e.curveSegments ? e.curveSegments : 12
              , o = void 0 !== e.steps ? e.steps : 1;
            let l = void 0 !== e.depth ? e.depth : 100
              , c = void 0 === e.bevelEnabled || e.bevelEnabled
              , h = void 0 !== e.bevelThickness ? e.bevelThickness : 6
              , u = void 0 !== e.bevelSize ? e.bevelSize : h - 2
              , d = void 0 !== e.bevelOffset ? e.bevelOffset : 0
              , p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
            const m = e.extrudePath
              , f = void 0 !== e.UVGenerator ? e.UVGenerator : vo;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
            l = e.amount);
            let g, v, y, x, _, w = !1;
            m && (g = m.getSpacedPoints(o),
            w = !0,
            c = !1,
            v = m.computeFrenetFrames(o, !1),
            y = new Lt,
            x = new Lt,
            _ = new Lt),
            c || (p = 0,
            h = 0,
            u = 0,
            d = 0);
            const b = t.extractPoints(a);
            let M = b.shape;
            const S = b.holes;
            if (!po.isClockWise(M)) {
                M = M.reverse();
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    po.isClockWise(e) && (S[t] = e.reverse())
                }
            }
            const T = po.triangulateShape(M, S)
              , E = M;
            for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                M = M.concat(e)
            }
            function A(t, e, n) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                e.clone().multiplyScalar(n).add(t)
            }
            const L = M.length
              , R = T.length;
            function C(t, e, n) {
                let i, r, s;
                const a = t.x - e.x
                  , o = t.y - e.y
                  , l = n.x - t.x
                  , c = n.y - t.y
                  , h = a * a + o * o
                  , u = a * c - o * l;
                if (Math.abs(u) > Number.EPSILON) {
                    const u = Math.sqrt(h)
                      , d = Math.sqrt(l * l + c * c)
                      , p = e.x - o / u
                      , m = e.y + a / u
                      , f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                    i = p + a * f - t.x,
                    r = m + o * f - t.y;
                    const g = i * i + r * r;
                    if (g <= 2)
                        return new vt(i,r);
                    s = Math.sqrt(g / 2)
                } else {
                    let t = !1;
                    a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0),
                    t ? (i = -o,
                    r = a,
                    s = Math.sqrt(h)) : (i = a,
                    r = o,
                    s = Math.sqrt(h / 2))
                }
                return new vt(i / s,r / s)
            }
            const P = [];
            for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++,
            n++,
            i++)
                n === e && (n = 0),
                i === e && (i = 0),
                P[t] = C(E[t], E[n], E[i]);
            const D = [];
            let I, N = P.concat();
            for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                I = [];
                for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++,
                i++,
                r++)
                    i === n && (i = 0),
                    r === n && (r = 0),
                    I[t] = C(e[t], e[i], e[r]);
                D.push(I),
                N = N.concat(I)
            }
            for (let t = 0; t < p; t++) {
                const e = t / p
                  , n = h * Math.cos(e * Math.PI / 2)
                  , i = u * Math.sin(e * Math.PI / 2) + d;
                for (let t = 0, e = E.length; t < e; t++) {
                    const e = A(E[t], P[t], i);
                    F(e.x, e.y, -n)
                }
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    I = D[t];
                    for (let t = 0, r = e.length; t < r; t++) {
                        const r = A(e[t], I[t], i);
                        F(r.x, r.y, -n)
                    }
                }
            }
            const B = u + d;
            for (let t = 0; t < L; t++) {
                const e = c ? A(M[t], N[t], B) : M[t];
                w ? (x.copy(v.normals[0]).multiplyScalar(e.x),
                y.copy(v.binormals[0]).multiplyScalar(e.y),
                _.copy(g[0]).add(x).add(y),
                F(_.x, _.y, _.z)) : F(e.x, e.y, 0)
            }
            for (let t = 1; t <= o; t++)
                for (let e = 0; e < L; e++) {
                    const n = c ? A(M[e], N[e], B) : M[e];
                    w ? (x.copy(v.normals[t]).multiplyScalar(n.x),
                    y.copy(v.binormals[t]).multiplyScalar(n.y),
                    _.copy(g[t]).add(x).add(y),
                    F(_.x, _.y, _.z)) : F(n.x, n.y, l / o * t)
                }
            for (let t = p - 1; t >= 0; t--) {
                const e = t / p
                  , n = h * Math.cos(e * Math.PI / 2)
                  , i = u * Math.sin(e * Math.PI / 2) + d;
                for (let t = 0, e = E.length; t < e; t++) {
                    const e = A(E[t], P[t], i);
                    F(e.x, e.y, l + n)
                }
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    I = D[t];
                    for (let t = 0, r = e.length; t < r; t++) {
                        const r = A(e[t], I[t], i);
                        w ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : F(r.x, r.y, l + n)
                    }
                }
            }
            function z(t, e) {
                let n = t.length;
                for (; --n >= 0; ) {
                    const i = n;
                    let r = n - 1;
                    r < 0 && (r = t.length - 1);
                    for (let t = 0, n = o + 2 * p; t < n; t++) {
                        const n = L * t
                          , s = L * (t + 1);
                        H(e + i + n, e + r + n, e + r + s, e + i + s)
                    }
                }
            }
            function F(t, e, n) {
                s.push(t),
                s.push(e),
                s.push(n)
            }
            function O(t, e, r) {
                G(t),
                G(e),
                G(r);
                const s = i.length / 3
                  , a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                U(a[0]),
                U(a[1]),
                U(a[2])
            }
            function H(t, e, r, s) {
                G(t),
                G(e),
                G(s),
                G(e),
                G(r),
                G(s);
                const a = i.length / 3
                  , o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                U(o[0]),
                U(o[1]),
                U(o[3]),
                U(o[1]),
                U(o[2]),
                U(o[3])
            }
            function G(t) {
                i.push(s[3 * t + 0]),
                i.push(s[3 * t + 1]),
                i.push(s[3 * t + 2])
            }
            function U(t) {
                r.push(t.x),
                r.push(t.y)
            }
            !function() {
                const t = i.length / 3;
                if (c) {
                    let t = 0
                      , e = L * t;
                    for (let t = 0; t < R; t++) {
                        const n = T[t];
                        O(n[2] + e, n[1] + e, n[0] + e)
                    }
                    t = o + 2 * p,
                    e = L * t;
                    for (let t = 0; t < R; t++) {
                        const n = T[t];
                        O(n[0] + e, n[1] + e, n[2] + e)
                    }
                } else {
                    for (let t = 0; t < R; t++) {
                        const e = T[t];
                        O(e[2], e[1], e[0])
                    }
                    for (let t = 0; t < R; t++) {
                        const e = T[t];
                        O(e[0] + L * o, e[1] + L * o, e[2] + L * o)
                    }
                }
                n.addGroup(t, i.length / 3 - t, 0)
            }(),
            function() {
                const t = i.length / 3;
                let e = 0;
                z(E, e),
                e += E.length;
                for (let t = 0, n = S.length; t < n; t++) {
                    const n = S[t];
                    z(n, e),
                    e += n.length
                }
                n.addGroup(t, i.length / 3 - t, 1)
            }()
        }
        this.setAttribute("position", new mn(i,3)),
        this.setAttribute("uv", new mn(r,2)),
        this.computeVertexNormals()
    }
    toJSON() {
        const t = En.prototype.toJSON.call(this);
        return function(t, e, n) {
            if (n.shapes = [],
            Array.isArray(t))
                for (let e = 0, i = t.length; e < i; e++) {
                    const i = t[e];
                    n.shapes.push(i.uuid)
                }
            else
                n.shapes.push(t.uuid);
            void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
            return n
        }(this.parameters.shapes, this.parameters.options, t)
    }
}
const vo = {
    generateTopUV: function(t, e, n, i, r) {
        const s = e[3 * n]
          , a = e[3 * n + 1]
          , o = e[3 * i]
          , l = e[3 * i + 1]
          , c = e[3 * r]
          , h = e[3 * r + 1];
        return [new vt(s,a), new vt(o,l), new vt(c,h)]
    },
    generateSideWallUV: function(t, e, n, i, r, s) {
        const a = e[3 * n]
          , o = e[3 * n + 1]
          , l = e[3 * n + 2]
          , c = e[3 * i]
          , h = e[3 * i + 1]
          , u = e[3 * i + 2]
          , d = e[3 * r]
          , p = e[3 * r + 1]
          , m = e[3 * r + 2]
          , f = e[3 * s]
          , g = e[3 * s + 1]
          , v = e[3 * s + 2];
        return Math.abs(o - h) < .01 ? [new vt(a,1 - l), new vt(c,1 - u), new vt(d,1 - m), new vt(f,1 - v)] : [new vt(o,1 - l), new vt(h,1 - u), new vt(p,1 - m), new vt(g,1 - v)]
    }
};
class yo extends Na {
    constructor(t=1, e=0) {
        const n = (1 + Math.sqrt(5)) / 2;
        super([-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
}
class xo extends En {
    constructor(t, e=12, n=0, i=2 * Math.PI) {
        super(),
        this.type = "LatheGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
        },
        e = Math.floor(e),
        i = ht(i, 0, 2 * Math.PI);
        const r = []
          , s = []
          , a = []
          , o = 1 / e
          , l = new Lt
          , c = new vt;
        for (let r = 0; r <= e; r++) {
            const h = n + r * o * i
              , u = Math.sin(h)
              , d = Math.cos(h);
            for (let n = 0; n <= t.length - 1; n++)
                l.x = t[n].x * u,
                l.y = t[n].y,
                l.z = t[n].x * d,
                s.push(l.x, l.y, l.z),
                c.x = r / e,
                c.y = n / (t.length - 1),
                a.push(c.x, c.y)
        }
        for (let n = 0; n < e; n++)
            for (let e = 0; e < t.length - 1; e++) {
                const i = e + n * t.length
                  , s = i
                  , a = i + t.length
                  , o = i + t.length + 1
                  , l = i + 1;
                r.push(s, a, l),
                r.push(a, o, l)
            }
        if (this.setIndex(r),
        this.setAttribute("position", new mn(s,3)),
        this.setAttribute("uv", new mn(a,2)),
        this.computeVertexNormals(),
        i === 2 * Math.PI) {
            const n = this.attributes.normal.array
              , i = new Lt
              , r = new Lt
              , s = new Lt
              , a = e * t.length * 3;
            for (let e = 0, o = 0; e < t.length; e++,
            o += 3)
                i.x = n[o + 0],
                i.y = n[o + 1],
                i.z = n[o + 2],
                r.x = n[a + o + 0],
                r.y = n[a + o + 1],
                r.z = n[a + o + 2],
                s.addVectors(i, r).normalize(),
                n[o + 0] = n[a + o + 0] = s.x,
                n[o + 1] = n[a + o + 1] = s.y,
                n[o + 2] = n[a + o + 2] = s.z
        }
    }
}
class _o extends Na {
    constructor(t=1, e=0) {
        super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
}
class wo extends En {
    constructor(t, e, n) {
        super(),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        const i = []
          , r = []
          , s = []
          , a = []
          , o = 1e-5
          , l = new Lt
          , c = new Lt
          , h = new Lt
          , u = new Lt
          , d = new Lt;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        const p = e + 1;
        for (let i = 0; i <= n; i++) {
            const p = i / n;
            for (let n = 0; n <= e; n++) {
                const i = n / e;
                t(i, p, c),
                r.push(c.x, c.y, c.z),
                i - o >= 0 ? (t(i - o, p, h),
                u.subVectors(c, h)) : (t(i + o, p, h),
                u.subVectors(h, c)),
                p - o >= 0 ? (t(i, p - o, h),
                d.subVectors(c, h)) : (t(i, p + o, h),
                d.subVectors(h, c)),
                l.crossVectors(u, d).normalize(),
                s.push(l.x, l.y, l.z),
                a.push(i, p)
            }
        }
        for (let t = 0; t < n; t++)
            for (let n = 0; n < e; n++) {
                const e = t * p + n
                  , r = t * p + n + 1
                  , s = (t + 1) * p + n + 1
                  , a = (t + 1) * p + n;
                i.push(e, r, a),
                i.push(r, s, a)
            }
        this.setIndex(i),
        this.setAttribute("position", new mn(r,3)),
        this.setAttribute("normal", new mn(s,3)),
        this.setAttribute("uv", new mn(a,2))
    }
}
class bo extends En {
    constructor(t=.5, e=1, n=8, i=1, r=0, s=2 * Math.PI) {
        super(),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: s
        },
        n = Math.max(3, n);
        const a = []
          , o = []
          , l = []
          , c = [];
        let h = t;
        const u = (e - t) / (i = Math.max(1, i))
          , d = new Lt
          , p = new vt;
        for (let t = 0; t <= i; t++) {
            for (let t = 0; t <= n; t++) {
                const i = r + t / n * s;
                d.x = h * Math.cos(i),
                d.y = h * Math.sin(i),
                o.push(d.x, d.y, d.z),
                l.push(0, 0, 1),
                p.x = (d.x / e + 1) / 2,
                p.y = (d.y / e + 1) / 2,
                c.push(p.x, p.y)
            }
            h += u
        }
        for (let t = 0; t < i; t++) {
            const e = t * (n + 1);
            for (let t = 0; t < n; t++) {
                const i = t + e
                  , r = i
                  , s = i + n + 1
                  , o = i + n + 2
                  , l = i + 1;
                a.push(r, s, l),
                a.push(s, o, l)
            }
        }
        this.setIndex(a),
        this.setAttribute("position", new mn(o,3)),
        this.setAttribute("normal", new mn(l,3)),
        this.setAttribute("uv", new mn(c,2))
    }
}
class Mo extends En {
    constructor(t, e=12) {
        super(),
        this.type = "ShapeGeometry",
        this.parameters = {
            shapes: t,
            curveSegments: e
        };
        const n = []
          , i = []
          , r = []
          , s = [];
        let a = 0
          , o = 0;
        if (!1 === Array.isArray(t))
            l(t);
        else
            for (let e = 0; e < t.length; e++)
                l(t[e]),
                this.addGroup(a, o, e),
                a += o,
                o = 0;
        function l(t) {
            const a = i.length / 3
              , l = t.extractPoints(e);
            let c = l.shape;
            const h = l.holes;
            !1 === po.isClockWise(c) && (c = c.reverse());
            for (let t = 0, e = h.length; t < e; t++) {
                const e = h[t];
                !0 === po.isClockWise(e) && (h[t] = e.reverse())
            }
            const u = po.triangulateShape(c, h);
            for (let t = 0, e = h.length; t < e; t++) {
                const e = h[t];
                c = c.concat(e)
            }
            for (let t = 0, e = c.length; t < e; t++) {
                const e = c[t];
                i.push(e.x, e.y, 0),
                r.push(0, 0, 1),
                s.push(e.x, e.y)
            }
            for (let t = 0, e = u.length; t < e; t++) {
                const e = u[t]
                  , i = e[0] + a
                  , r = e[1] + a
                  , s = e[2] + a;
                n.push(i, r, s),
                o += 3
            }
        }
        this.setIndex(n),
        this.setAttribute("position", new mn(i,3)),
        this.setAttribute("normal", new mn(r,3)),
        this.setAttribute("uv", new mn(s,2))
    }
    toJSON() {
        const t = En.prototype.toJSON.call(this);
        return function(t, e) {
            if (e.shapes = [],
            Array.isArray(t))
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = t[n];
                    e.shapes.push(i.uuid)
                }
            else
                e.shapes.push(t.uuid);
            return e
        }(this.parameters.shapes, t)
    }
}
class So extends En {
    constructor(t=1, e=8, n=6, i=0, r=2 * Math.PI, s=0, a=Math.PI) {
        super(),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: s,
            thetaLength: a
        },
        e = Math.max(3, Math.floor(e)),
        n = Math.max(2, Math.floor(n));
        const o = Math.min(s + a, Math.PI);
        let l = 0;
        const c = []
          , h = new Lt
          , u = new Lt
          , d = []
          , p = []
          , m = []
          , f = [];
        for (let d = 0; d <= n; d++) {
            const g = []
              , v = d / n;
            let y = 0;
            0 == d && 0 == s ? y = .5 / e : d == n && o == Math.PI && (y = -.5 / e);
            for (let n = 0; n <= e; n++) {
                const o = n / e;
                h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a),
                h.y = t * Math.cos(s + v * a),
                h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a),
                p.push(h.x, h.y, h.z),
                u.copy(h).normalize(),
                m.push(u.x, u.y, u.z),
                f.push(o + y, 1 - v),
                g.push(l++)
            }
            c.push(g)
        }
        for (let t = 0; t < n; t++)
            for (let i = 0; i < e; i++) {
                const e = c[t][i + 1]
                  , r = c[t][i]
                  , a = c[t + 1][i]
                  , l = c[t + 1][i + 1];
                (0 !== t || s > 0) && d.push(e, r, l),
                (t !== n - 1 || o < Math.PI) && d.push(r, a, l)
            }
        this.setIndex(d),
        this.setAttribute("position", new mn(p,3)),
        this.setAttribute("normal", new mn(m,3)),
        this.setAttribute("uv", new mn(f,2))
    }
}
class To extends Na {
    constructor(t=1, e=0) {
        super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
}
class Eo extends go {
    constructor(t, e={}) {
        const n = e.font;
        if (!n || !n.isFont)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new En;
        const i = n.generateShapes(t, e.size);
        e.depth = void 0 !== e.height ? e.height : 50,
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        super(i, e),
        this.type = "TextGeometry"
    }
}
class Ao extends En {
    constructor(t=1, e=.4, n=8, i=6, r=2 * Math.PI) {
        super(),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        },
        n = Math.floor(n),
        i = Math.floor(i);
        const s = []
          , a = []
          , o = []
          , l = []
          , c = new Lt
          , h = new Lt
          , u = new Lt;
        for (let s = 0; s <= n; s++)
            for (let d = 0; d <= i; d++) {
                const p = d / i * r
                  , m = s / n * Math.PI * 2;
                h.x = (t + e * Math.cos(m)) * Math.cos(p),
                h.y = (t + e * Math.cos(m)) * Math.sin(p),
                h.z = e * Math.sin(m),
                a.push(h.x, h.y, h.z),
                c.x = t * Math.cos(p),
                c.y = t * Math.sin(p),
                u.subVectors(h, c).normalize(),
                o.push(u.x, u.y, u.z),
                l.push(d / i),
                l.push(s / n)
            }
        for (let t = 1; t <= n; t++)
            for (let e = 1; e <= i; e++) {
                const n = (i + 1) * t + e - 1
                  , r = (i + 1) * (t - 1) + e - 1
                  , a = (i + 1) * (t - 1) + e
                  , o = (i + 1) * t + e;
                s.push(n, r, o),
                s.push(r, a, o)
            }
        this.setIndex(s),
        this.setAttribute("position", new mn(a,3)),
        this.setAttribute("normal", new mn(o,3)),
        this.setAttribute("uv", new mn(l,2))
    }
}
class Lo extends En {
    constructor(t=1, e=.4, n=64, i=8, r=2, s=3) {
        super(),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: s
        },
        n = Math.floor(n),
        i = Math.floor(i);
        const a = []
          , o = []
          , l = []
          , c = []
          , h = new Lt
          , u = new Lt
          , d = new Lt
          , p = new Lt
          , m = new Lt
          , f = new Lt
          , g = new Lt;
        for (let a = 0; a <= n; ++a) {
            const y = a / n * r * Math.PI * 2;
            v(y, r, s, t, d),
            v(y + .01, r, s, t, p),
            f.subVectors(p, d),
            g.addVectors(p, d),
            m.crossVectors(f, g),
            g.crossVectors(m, f),
            m.normalize(),
            g.normalize();
            for (let t = 0; t <= i; ++t) {
                const r = t / i * Math.PI * 2
                  , s = -e * Math.cos(r)
                  , p = e * Math.sin(r);
                h.x = d.x + (s * g.x + p * m.x),
                h.y = d.y + (s * g.y + p * m.y),
                h.z = d.z + (s * g.z + p * m.z),
                o.push(h.x, h.y, h.z),
                u.subVectors(h, d).normalize(),
                l.push(u.x, u.y, u.z),
                c.push(a / n),
                c.push(t / i)
            }
        }
        for (let t = 1; t <= n; t++)
            for (let e = 1; e <= i; e++) {
                const n = (i + 1) * (t - 1) + (e - 1)
                  , r = (i + 1) * t + (e - 1)
                  , s = (i + 1) * t + e
                  , o = (i + 1) * (t - 1) + e;
                a.push(n, r, o),
                a.push(r, s, o)
            }
        function v(t, e, n, i, r) {
            const s = Math.cos(t)
              , a = Math.sin(t)
              , o = n / e * t
              , l = Math.cos(o);
            r.x = i * (2 + l) * .5 * s,
            r.y = i * (2 + l) * a * .5,
            r.z = i * Math.sin(o) * .5
        }
        this.setIndex(a),
        this.setAttribute("position", new mn(o,3)),
        this.setAttribute("normal", new mn(l,3)),
        this.setAttribute("uv", new mn(c,2))
    }
}
class Ro extends En {
    constructor(t, e=64, n=1, i=8, r=!1) {
        super(),
        this.type = "TubeGeometry",
        this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: i,
            closed: r
        };
        const s = t.computeFrenetFrames(e, r);
        this.tangents = s.tangents,
        this.normals = s.normals,
        this.binormals = s.binormals;
        const a = new Lt
          , o = new Lt
          , l = new vt;
        let c = new Lt;
        const h = []
          , u = []
          , d = []
          , p = [];
        function m(r) {
            c = t.getPointAt(r / e, c);
            const l = s.normals[r]
              , d = s.binormals[r];
            for (let t = 0; t <= i; t++) {
                const e = t / i * Math.PI * 2
                  , r = Math.sin(e)
                  , s = -Math.cos(e);
                o.x = s * l.x + r * d.x,
                o.y = s * l.y + r * d.y,
                o.z = s * l.z + r * d.z,
                o.normalize(),
                u.push(o.x, o.y, o.z),
                a.x = c.x + n * o.x,
                a.y = c.y + n * o.y,
                a.z = c.z + n * o.z,
                h.push(a.x, a.y, a.z)
            }
        }
        !function() {
            for (let t = 0; t < e; t++)
                m(t);
            m(!1 === r ? e : 0),
            function() {
                for (let t = 0; t <= e; t++)
                    for (let n = 0; n <= i; n++)
                        l.x = t / e,
                        l.y = n / i,
                        d.push(l.x, l.y)
            }(),
            function() {
                for (let t = 1; t <= e; t++)
                    for (let e = 1; e <= i; e++) {
                        const n = (i + 1) * (t - 1) + (e - 1)
                          , r = (i + 1) * t + (e - 1)
                          , s = (i + 1) * t + e
                          , a = (i + 1) * (t - 1) + e;
                        p.push(n, r, a),
                        p.push(r, s, a)
                    }
            }()
        }(),
        this.setIndex(p),
        this.setAttribute("position", new mn(h,3)),
        this.setAttribute("normal", new mn(u,3)),
        this.setAttribute("uv", new mn(d,2))
    }
    toJSON() {
        const t = En.prototype.toJSON.call(this);
        return t.path = this.parameters.path.toJSON(),
        t
    }
}
class Co extends En {
    constructor(t) {
        if (super(),
        this.type = "WireframeGeometry",
        !0 === t.isGeometry)
            return void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        const e = []
          , n = [0, 0]
          , i = {}
          , r = new Lt;
        if (null !== t.index) {
            const s = t.attributes.position
              , a = t.index;
            let o = t.groups;
            0 === o.length && (o = [{
                start: 0,
                count: a.count,
                materialIndex: 0
            }]);
            for (let t = 0, e = o.length; t < e; ++t) {
                const e = o[t]
                  , r = e.start;
                for (let t = r, s = r + e.count; t < s; t += 3)
                    for (let e = 0; e < 3; e++) {
                        const r = a.getX(t + e)
                          , s = a.getX(t + (e + 1) % 3);
                        n[0] = Math.min(r, s),
                        n[1] = Math.max(r, s);
                        const o = n[0] + "," + n[1];
                        void 0 === i[o] && (i[o] = {
                            index1: n[0],
                            index2: n[1]
                        })
                    }
            }
            for (const t in i) {
                const n = i[t];
                r.fromBufferAttribute(s, n.index1),
                e.push(r.x, r.y, r.z),
                r.fromBufferAttribute(s, n.index2),
                e.push(r.x, r.y, r.z)
            }
        } else {
            const n = t.attributes.position;
            for (let t = 0, i = n.count / 3; t < i; t++)
                for (let i = 0; i < 3; i++) {
                    const s = 3 * t + i;
                    r.fromBufferAttribute(n, s),
                    e.push(r.x, r.y, r.z);
                    const a = 3 * t + (i + 1) % 3;
                    r.fromBufferAttribute(n, a),
                    e.push(r.x, r.y, r.z)
                }
        }
        this.setAttribute("position", new mn(e,3))
    }
}
var Po = Object.freeze({
    __proto__: null,
    BoxGeometry: qn,
    BoxBufferGeometry: qn,
    CircleGeometry: Pa,
    CircleBufferGeometry: Pa,
    ConeGeometry: Ia,
    ConeBufferGeometry: Ia,
    CylinderGeometry: Da,
    CylinderBufferGeometry: Da,
    DodecahedronGeometry: Ba,
    DodecahedronBufferGeometry: Ba,
    EdgesGeometry: Ga,
    ExtrudeGeometry: go,
    ExtrudeBufferGeometry: go,
    IcosahedronGeometry: yo,
    IcosahedronBufferGeometry: yo,
    LatheGeometry: xo,
    LatheBufferGeometry: xo,
    OctahedronGeometry: _o,
    OctahedronBufferGeometry: _o,
    ParametricGeometry: wo,
    ParametricBufferGeometry: wo,
    PlaneGeometry: ci,
    PlaneBufferGeometry: ci,
    PolyhedronGeometry: Na,
    PolyhedronBufferGeometry: Na,
    RingGeometry: bo,
    RingBufferGeometry: bo,
    ShapeGeometry: Mo,
    ShapeBufferGeometry: Mo,
    SphereGeometry: So,
    SphereBufferGeometry: So,
    TetrahedronGeometry: To,
    TetrahedronBufferGeometry: To,
    TextGeometry: Eo,
    TextBufferGeometry: Eo,
    TorusGeometry: Ao,
    TorusBufferGeometry: Ao,
    TorusKnotGeometry: Lo,
    TorusKnotBufferGeometry: Lo,
    TubeGeometry: Ro,
    TubeBufferGeometry: Ro,
    WireframeGeometry: Co
});
class Do extends Xe {
    constructor(t) {
        super(),
        this.type = "ShadowMaterial",
        this.color = new tn(0),
        this.transparent = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this
    }
}
Do.prototype.isShadowMaterial = !0;
class Io extends Jn {
    constructor(t) {
        super(t),
        this.type = "RawShaderMaterial"
    }
}
Io.prototype.isRawShaderMaterial = !0;
class No extends Xe {
    constructor(t) {
        super(),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new tn(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new tn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new vt(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.flatShading = !1,
        this.vertexTangents = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.flatShading = t.flatShading,
        this.vertexTangents = t.vertexTangents,
        this
    }
}
No.prototype.isMeshStandardMaterial = !0;
class Bo extends No {
    constructor(t) {
        super(),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.clearcoat = 0,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new vt(1,1),
        this.clearcoatNormalMap = null,
        this.reflectivity = .5,
        Object.defineProperty(this, "ior", {
            get: function() {
                return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
            },
            set: function(t) {
                this.reflectivity = ht(2.5 * (t - 1) / (t + 1), 0, 1)
            }
        }),
        this.sheen = null,
        this.transmission = 0,
        this.transmissionMap = null,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.clearcoat = t.clearcoat,
        this.clearcoatMap = t.clearcoatMap,
        this.clearcoatRoughness = t.clearcoatRoughness,
        this.clearcoatRoughnessMap = t.clearcoatRoughnessMap,
        this.clearcoatNormalMap = t.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
        this.reflectivity = t.reflectivity,
        t.sheen ? this.sheen = (this.sheen || new tn).copy(t.sheen) : this.sheen = null,
        this.transmission = t.transmission,
        this.transmissionMap = t.transmissionMap,
        this
    }
}
Bo.prototype.isMeshPhysicalMaterial = !0;
class zo extends Xe {
    constructor(t) {
        super(),
        this.type = "MeshPhongMaterial",
        this.color = new tn(16777215),
        this.specular = new tn(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new tn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new vt(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
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
        this.morphNormals = !1,
        this.flatShading = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
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
        this.morphNormals = t.morphNormals,
        this.flatShading = t.flatShading,
        this
    }
}
zo.prototype.isMeshPhongMaterial = !0;
class Fo extends Xe {
    constructor(t) {
        super(),
        this.defines = {
            TOON: ""
        },
        this.type = "MeshToonMaterial",
        this.color = new tn(16777215),
        this.map = null,
        this.gradientMap = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new tn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new vt(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.alphaMap = null,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.gradientMap = t.gradientMap,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.alphaMap = t.alphaMap,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
}
Fo.prototype.isMeshToonMaterial = !0;
class Oo extends Xe {
    constructor(t) {
        super(),
        this.type = "MeshNormalMaterial",
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new vt(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.flatShading = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.flatShading = t.flatShading,
        this
    }
}
Oo.prototype.isMeshNormalMaterial = !0;
class Ho extends Xe {
    constructor(t) {
        super(),
        this.type = "MeshLambertMaterial",
        this.color = new tn(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new tn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
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
        this.morphNormals = !1,
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
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
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
        this.morphNormals = t.morphNormals,
        this
    }
}
Ho.prototype.isMeshLambertMaterial = !0;
class Go extends Xe {
    constructor(t) {
        super(),
        this.defines = {
            MATCAP: ""
        },
        this.type = "MeshMatcapMaterial",
        this.color = new tn(16777215),
        this.matcap = null,
        this.map = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new vt(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.alphaMap = null,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.flatShading = !1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.defines = {
            MATCAP: ""
        },
        this.color.copy(t.color),
        this.matcap = t.matcap,
        this.map = t.map,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.alphaMap = t.alphaMap,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.flatShading = t.flatShading,
        this
    }
}
Go.prototype.isMeshMatcapMaterial = !0;
class Uo extends ca {
    constructor(t) {
        super(),
        this.type = "LineDashedMaterial",
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.scale = t.scale,
        this.dashSize = t.dashSize,
        this.gapSize = t.gapSize,
        this
    }
}
Uo.prototype.isLineDashedMaterial = !0;
var ko = Object.freeze({
    __proto__: null,
    ShadowMaterial: Do,
    SpriteMaterial: Rs,
    RawShaderMaterial: Io,
    ShaderMaterial: Jn,
    PointsMaterial: _a,
    MeshPhysicalMaterial: Bo,
    MeshStandardMaterial: No,
    MeshPhongMaterial: zo,
    MeshToonMaterial: Fo,
    MeshNormalMaterial: Oo,
    MeshLambertMaterial: Ho,
    MeshDepthMaterial: cs,
    MeshDistanceMaterial: hs,
    MeshBasicMaterial: en,
    MeshMatcapMaterial: Go,
    LineDashedMaterial: Uo,
    LineBasicMaterial: ca,
    Material: Xe
});
const Vo = {
    arraySlice: function(t, e, n) {
        return Vo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
    },
    convertArray: function(t, e, n) {
        return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
    },
    isTypedArray: function(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView)
    },
    getKeyframeOrder: function(t) {
        const e = t.length
          , n = new Array(e);
        for (let t = 0; t !== e; ++t)
            n[t] = t;
        return n.sort((function(e, n) {
            return t[e] - t[n]
        }
        )),
        n
    },
    sortedArray: function(t, e, n) {
        const i = t.length
          , r = new t.constructor(i);
        for (let s = 0, a = 0; a !== i; ++s) {
            const i = n[s] * e;
            for (let n = 0; n !== e; ++n)
                r[a++] = t[i + n]
        }
        return r
    },
    flattenJSON: function(t, e, n, i) {
        let r = 1
          , s = t[0];
        for (; void 0 !== s && void 0 === s[i]; )
            s = t[r++];
        if (void 0 === s)
            return;
        let a = s[i];
        if (void 0 !== a)
            if (Array.isArray(a))
                do {
                    a = s[i],
                    void 0 !== a && (e.push(s.time),
                    n.push.apply(n, a)),
                    s = t[r++]
                } while (void 0 !== s);
            else if (void 0 !== a.toArray)
                do {
                    a = s[i],
                    void 0 !== a && (e.push(s.time),
                    a.toArray(n, n.length)),
                    s = t[r++]
                } while (void 0 !== s);
            else
                do {
                    a = s[i],
                    void 0 !== a && (e.push(s.time),
                    n.push(a)),
                    s = t[r++]
                } while (void 0 !== s)
    },
    subclip: function(t, e, n, i, r=30) {
        const s = t.clone();
        s.name = e;
        const a = [];
        for (let t = 0; t < s.tracks.length; ++t) {
            const e = s.tracks[t]
              , o = e.getValueSize()
              , l = []
              , c = [];
            for (let t = 0; t < e.times.length; ++t) {
                const s = e.times[t] * r;
                if (!(s < n || s >= i)) {
                    l.push(e.times[t]);
                    for (let n = 0; n < o; ++n)
                        c.push(e.values[t * o + n])
                }
            }
            0 !== l.length && (e.times = Vo.convertArray(l, e.times.constructor),
            e.values = Vo.convertArray(c, e.values.constructor),
            a.push(e))
        }
        s.tracks = a;
        let o = 1 / 0;
        for (let t = 0; t < s.tracks.length; ++t)
            o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
        for (let t = 0; t < s.tracks.length; ++t)
            s.tracks[t].shift(-1 * o);
        return s.resetDuration(),
        s
    },
    makeClipAdditive: function(t, e=0, n=t, i=30) {
        i <= 0 && (i = 30);
        const r = n.tracks.length
          , s = e / i;
        for (let e = 0; e < r; ++e) {
            const i = n.tracks[e]
              , r = i.ValueTypeName;
            if ("bool" === r || "string" === r)
                continue;
            const a = t.tracks.find((function(t) {
                return t.name === i.name && t.ValueTypeName === r
            }
            ));
            if (void 0 === a)
                continue;
            let o = 0;
            const l = i.getValueSize();
            i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
            let c = 0;
            const h = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
            const u = i.times.length - 1;
            let d;
            if (s <= i.times[0]) {
                const t = o
                  , e = l - o;
                d = Vo.arraySlice(i.values, t, e)
            } else if (s >= i.times[u]) {
                const t = u * l + o
                  , e = t + l - o;
                d = Vo.arraySlice(i.values, t, e)
            } else {
                const t = i.createInterpolant()
                  , e = o
                  , n = l - o;
                t.evaluate(s),
                d = Vo.arraySlice(t.resultBuffer, e, n)
            }
            if ("quaternion" === r) {
                (new At).fromArray(d).normalize().conjugate().toArray(d)
            }
            const p = a.times.length;
            for (let t = 0; t < p; ++t) {
                const e = t * h + c;
                if ("quaternion" === r)
                    At.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                else {
                    const t = h - 2 * c;
                    for (let n = 0; n < t; ++n)
                        a.values[e + n] -= d[n]
                }
            }
        }
        return t.blendMode = q,
        t
    }
};
class Wo {
    constructor(t, e, n, i) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== i ? i : new e.constructor(n),
        this.sampleValues = e,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(t) {
        const e = this.parameterPositions;
        let n = this._cachedIndex
          , i = e[n]
          , r = e[n - 1];
        t: {
            e: {
                let s;
                n: {
                    i: if (!(t < i)) {
                        for (let s = n + 2; ; ) {
                            if (void 0 === i) {
                                if (t < r)
                                    break i;
                                return n = e.length,
                                this._cachedIndex = n,
                                this.afterEnd_(n - 1, t, r)
                            }
                            if (n === s)
                                break;
                            if (r = i,
                            i = e[++n],
                            t < i)
                                break e
                        }
                        s = e.length;
                        break n
                    }
                    if (t >= r)
                        break t;
                    {
                        const a = e[1];
                        t < a && (n = 2,
                        r = a);
                        for (let s = n - 2; ; ) {
                            if (void 0 === r)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, t, i);
                            if (n === s)
                                break;
                            if (i = r,
                            r = e[--n - 1],
                            t >= r)
                                break e
                        }
                        s = n,
                        n = 0
                    }
                }
                for (; n < s; ) {
                    const i = n + s >>> 1;
                    t < e[i] ? s = i : n = i + 1
                }
                if (i = e[n],
                r = e[n - 1],
                void 0 === r)
                    return this._cachedIndex = 0,
                    this.beforeStart_(0, t, i);
                if (void 0 === i)
                    return n = e.length,
                    this._cachedIndex = n,
                    this.afterEnd_(n - 1, r, t)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, i)
        }
        return this.interpolate_(n, r, t, i)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(t) {
        const e = this.resultBuffer
          , n = this.sampleValues
          , i = this.valueSize
          , r = t * i;
        for (let t = 0; t !== i; ++t)
            e[t] = n[r + t];
        return e
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
Wo.prototype.beforeStart_ = Wo.prototype.copySampleValue_,
Wo.prototype.afterEnd_ = Wo.prototype.copySampleValue_;
class jo extends Wo {
    constructor(t, e, n, i) {
        super(t, e, n, i),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: k,
            endingEnd: k
        }
    }
    intervalChanged_(t, e, n) {
        const i = this.parameterPositions;
        let r = t - 2
          , s = t + 1
          , a = i[r]
          , o = i[s];
        if (void 0 === a)
            switch (this.getSettings_().endingStart) {
            case V:
                r = t,
                a = 2 * e - n;
                break;
            case W:
                r = i.length - 2,
                a = e + i[r] - i[r + 1];
                break;
            default:
                r = t,
                a = n
            }
        if (void 0 === o)
            switch (this.getSettings_().endingEnd) {
            case V:
                s = t,
                o = 2 * n - e;
                break;
            case W:
                s = 1,
                o = n + i[1] - i[0];
                break;
            default:
                s = t - 1,
                o = e
            }
        const l = .5 * (n - e)
          , c = this.valueSize;
        this._weightPrev = l / (e - a),
        this._weightNext = l / (o - n),
        this._offsetPrev = r * c,
        this._offsetNext = s * c
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , o = t * a
          , l = o - a
          , c = this._offsetPrev
          , h = this._offsetNext
          , u = this._weightPrev
          , d = this._weightNext
          , p = (n - e) / (i - e)
          , m = p * p
          , f = m * p
          , g = -u * f + 2 * u * m - u * p
          , v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1
          , y = (-1 - d) * f + (1.5 + d) * m + .5 * p
          , x = d * f - d * m;
        for (let t = 0; t !== a; ++t)
            r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
        return r
    }
}
class qo extends Wo {
    constructor(t, e, n, i) {
        super(t, e, n, i)
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , o = t * a
          , l = o - a
          , c = (n - e) / (i - e)
          , h = 1 - c;
        for (let t = 0; t !== a; ++t)
            r[t] = s[l + t] * h + s[o + t] * c;
        return r
    }
}
class Xo extends Wo {
    constructor(t, e, n, i) {
        super(t, e, n, i)
    }
    interpolate_(t) {
        return this.copySampleValue_(t - 1)
    }
}
class Yo {
    constructor(t, e, n, i) {
        if (void 0 === t)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t,
        this.times = Vo.convertArray(e, this.TimeBufferType),
        this.values = Vo.convertArray(n, this.ValueBufferType),
        this.setInterpolation(i || this.DefaultInterpolation)
    }
    static toJSON(t) {
        const e = t.constructor;
        let n;
        if (e.toJSON !== this.toJSON)
            n = e.toJSON(t);
        else {
            n = {
                name: t.name,
                times: Vo.convertArray(t.times, Array),
                values: Vo.convertArray(t.values, Array)
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e)
        }
        return n.type = t.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(t) {
        return new Xo(this.times,this.values,this.getValueSize(),t)
    }
    InterpolantFactoryMethodLinear(t) {
        return new qo(this.times,this.values,this.getValueSize(),t)
    }
    InterpolantFactoryMethodSmooth(t) {
        return new jo(this.times,this.values,this.getValueSize(),t)
    }
    setInterpolation(t) {
        let e;
        switch (t) {
        case H:
            e = this.InterpolantFactoryMethodDiscrete;
            break;
        case G:
            e = this.InterpolantFactoryMethodLinear;
            break;
        case U:
            e = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === e) {
            const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation)
                    throw new Error(e);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", e),
            this
        }
        return this.createInterpolant = e,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return H;
        case this.InterpolantFactoryMethodLinear:
            return G;
        case this.InterpolantFactoryMethodSmooth:
            return U
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(t) {
        if (0 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n)
                e[n] += t
        }
        return this
    }
    scale(t) {
        if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n)
                e[n] *= t
        }
        return this
    }
    trim(t, e) {
        const n = this.times
          , i = n.length;
        let r = 0
          , s = i - 1;
        for (; r !== i && n[r] < t; )
            ++r;
        for (; -1 !== s && n[s] > e; )
            --s;
        if (++s,
        0 !== r || s !== i) {
            r >= s && (s = Math.max(s, 1),
            r = s - 1);
            const t = this.getValueSize();
            this.times = Vo.arraySlice(n, r, s),
            this.values = Vo.arraySlice(this.values, r * t, s * t)
        }
        return this
    }
    validate() {
        let t = !0;
        const e = this.getValueSize();
        e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
        t = !1);
        const n = this.times
          , i = this.values
          , r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this),
        t = !1);
        let s = null;
        for (let e = 0; e !== r; e++) {
            const i = n[e];
            if ("number" == typeof i && isNaN(i)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i),
                t = !1;
                break
            }
            if (null !== s && s > i) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s),
                t = !1;
                break
            }
            s = i
        }
        if (void 0 !== i && Vo.isTypedArray(i))
            for (let e = 0, n = i.length; e !== n; ++e) {
                const n = i[e];
                if (isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n),
                    t = !1;
                    break
                }
            }
        return t
    }
    optimize() {
        const t = Vo.arraySlice(this.times)
          , e = Vo.arraySlice(this.values)
          , n = this.getValueSize()
          , i = this.getInterpolation() === U
          , r = t.length - 1;
        let s = 1;
        for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = t[a];
            if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                if (i)
                    r = !0;
                else {
                    const t = a * n
                      , i = t - n
                      , s = t + n;
                    for (let a = 0; a !== n; ++a) {
                        const n = e[t + a];
                        if (n !== e[i + a] || n !== e[s + a]) {
                            r = !0;
                            break
                        }
                    }
                }
            if (r) {
                if (a !== s) {
                    t[s] = t[a];
                    const i = a * n
                      , r = s * n;
                    for (let t = 0; t !== n; ++t)
                        e[r + t] = e[i + t]
                }
                ++s
            }
        }
        if (r > 0) {
            t[s] = t[r];
            for (let t = r * n, i = s * n, a = 0; a !== n; ++a)
                e[i + a] = e[t + a];
            ++s
        }
        return s !== t.length ? (this.times = Vo.arraySlice(t, 0, s),
        this.values = Vo.arraySlice(e, 0, s * n)) : (this.times = t,
        this.values = e),
        this
    }
    clone() {
        const t = Vo.arraySlice(this.times, 0)
          , e = Vo.arraySlice(this.values, 0)
          , n = new (0,
        this.constructor)(this.name,t,e);
        return n.createInterpolant = this.createInterpolant,
        n
    }
}
Yo.prototype.TimeBufferType = Float32Array,
Yo.prototype.ValueBufferType = Float32Array,
Yo.prototype.DefaultInterpolation = G;
class Zo extends Yo {
}
Zo.prototype.ValueTypeName = "bool",
Zo.prototype.ValueBufferType = Array,
Zo.prototype.DefaultInterpolation = H,
Zo.prototype.InterpolantFactoryMethodLinear = void 0,
Zo.prototype.InterpolantFactoryMethodSmooth = void 0;
class Jo extends Yo {
}
Jo.prototype.ValueTypeName = "color";
class Qo extends Yo {
}
Qo.prototype.ValueTypeName = "number";
class Ko extends Wo {
    constructor(t, e, n, i) {
        super(t, e, n, i)
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , o = (n - e) / (i - e);
        let l = t * a;
        for (let t = l + a; l !== t; l += 4)
            At.slerpFlat(r, 0, s, l - a, s, l, o);
        return r
    }
}
class $o extends Yo {
    InterpolantFactoryMethodLinear(t) {
        return new Ko(this.times,this.values,this.getValueSize(),t)
    }
}
$o.prototype.ValueTypeName = "quaternion",
$o.prototype.DefaultInterpolation = G,
$o.prototype.InterpolantFactoryMethodSmooth = void 0;
class tl extends Yo {
}
tl.prototype.ValueTypeName = "string",
tl.prototype.ValueBufferType = Array,
tl.prototype.DefaultInterpolation = H,
tl.prototype.InterpolantFactoryMethodLinear = void 0,
tl.prototype.InterpolantFactoryMethodSmooth = void 0;
class el extends Yo {
}
el.prototype.ValueTypeName = "vector";
class nl {
    constructor(t, e=-1, n, i=2500) {
        this.name = t,
        this.tracks = n,
        this.duration = e,
        this.blendMode = i,
        this.uuid = ct(),
        this.duration < 0 && this.resetDuration()
    }
    static parse(t) {
        const e = []
          , n = t.tracks
          , i = 1 / (t.fps || 1);
        for (let t = 0, r = n.length; t !== r; ++t)
            e.push(il(n[t]).scale(i));
        const r = new this(t.name,t.duration,e,t.blendMode);
        return r.uuid = t.uuid,
        r
    }
    static toJSON(t) {
        const e = []
          , n = t.tracks
          , i = {
            name: t.name,
            duration: t.duration,
            tracks: e,
            uuid: t.uuid,
            blendMode: t.blendMode
        };
        for (let t = 0, i = n.length; t !== i; ++t)
            e.push(Yo.toJSON(n[t]));
        return i
    }
    static CreateFromMorphTargetSequence(t, e, n, i) {
        const r = e.length
          , s = [];
        for (let t = 0; t < r; t++) {
            let a = []
              , o = [];
            a.push((t + r - 1) % r, t, (t + 1) % r),
            o.push(0, 1, 0);
            const l = Vo.getKeyframeOrder(a);
            a = Vo.sortedArray(a, 1, l),
            o = Vo.sortedArray(o, 1, l),
            i || 0 !== a[0] || (a.push(r),
            o.push(o[0])),
            s.push(new Qo(".morphTargetInfluences[" + e[t].name + "]",a,o).scale(1 / n))
        }
        return new this(t,-1,s)
    }
    static findByName(t, e) {
        let n = t;
        if (!Array.isArray(t)) {
            const e = t;
            n = e.geometry && e.geometry.animations || e.animations
        }
        for (let t = 0; t < n.length; t++)
            if (n[t].name === e)
                return n[t];
        return null
    }
    static CreateClipsFromMorphTargetSequences(t, e, n) {
        const i = {}
          , r = /^([\w-]*?)([\d]+)$/;
        for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e]
              , s = n.name.match(r);
            if (s && s.length > 1) {
                const t = s[1];
                let e = i[t];
                e || (i[t] = e = []),
                e.push(n)
            }
        }
        const s = [];
        for (const t in i)
            s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
        return s
    }
    static parseAnimation(t, e) {
        if (!t)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
            null;
        const n = function(t, e, n, i, r) {
            if (0 !== n.length) {
                const s = []
                  , a = [];
                Vo.flattenJSON(n, s, a, i),
                0 !== s.length && r.push(new t(e,s,a))
            }
        }
          , i = []
          , r = t.name || "default"
          , s = t.fps || 30
          , a = t.blendMode;
        let o = t.length || -1;
        const l = t.hierarchy || [];
        for (let t = 0; t < l.length; t++) {
            const r = l[t].keys;
            if (r && 0 !== r.length)
                if (r[0].morphTargets) {
                    const t = {};
                    let e;
                    for (e = 0; e < r.length; e++)
                        if (r[e].morphTargets)
                            for (let n = 0; n < r[e].morphTargets.length; n++)
                                t[r[e].morphTargets[n]] = -1;
                    for (const n in t) {
                        const t = []
                          , s = [];
                        for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                            const i = r[e];
                            t.push(i.time),
                            s.push(i.morphTarget === n ? 1 : 0)
                        }
                        i.push(new Qo(".morphTargetInfluence[" + n + "]",t,s))
                    }
                    o = t.length * (s || 1)
                } else {
                    const s = ".bones[" + e[t].name + "]";
                    n(el, s + ".position", r, "pos", i),
                    n($o, s + ".quaternion", r, "rot", i),
                    n(el, s + ".scale", r, "scl", i)
                }
        }
        if (0 === i.length)
            return null;
        return new this(r,o,i,a)
    }
    resetDuration() {
        let t = 0;
        for (let e = 0, n = this.tracks.length; e !== n; ++e) {
            const n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1])
        }
        return this.duration = t,
        this
    }
    trim() {
        for (let t = 0; t < this.tracks.length; t++)
            this.tracks[t].trim(0, this.duration);
        return this
    }
    validate() {
        let t = !0;
        for (let e = 0; e < this.tracks.length; e++)
            t = t && this.tracks[e].validate();
        return t
    }
    optimize() {
        for (let t = 0; t < this.tracks.length; t++)
            this.tracks[t].optimize();
        return this
    }
    clone() {
        const t = [];
        for (let e = 0; e < this.tracks.length; e++)
            t.push(this.tracks[e].clone());
        return new this.constructor(this.name,this.duration,t,this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
function il(t) {
    if (void 0 === t.type)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = function(t) {
        switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return Qo;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return el;
        case "color":
            return Jo;
        case "quaternion":
            return $o;
        case "bool":
        case "boolean":
            return Zo;
        case "string":
            return tl
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }(t.type);
    if (void 0 === t.times) {
        const e = []
          , n = [];
        Vo.flattenJSON(t.keys, e, n, "value"),
        t.times = e,
        t.values = n
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
}
const rl = {
    enabled: !1,
    files: {},
    add: function(t, e) {
        !1 !== this.enabled && (this.files[t] = e)
    },
    get: function(t) {
        if (!1 !== this.enabled)
            return this.files[t]
    },
    remove: function(t) {
        delete this.files[t]
    },
    clear: function() {
        this.files = {}
    }
};
class sl {
    constructor(t, e, n) {
        const i = this;
        let r, s = !1, a = 0, o = 0;
        const l = [];
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = n,
        this.itemStart = function(t) {
            o++,
            !1 === s && void 0 !== i.onStart && i.onStart(t, a, o),
            s = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== i.onProgress && i.onProgress(t, a, o),
            a === o && (s = !1,
            void 0 !== i.onLoad && i.onLoad())
        }
        ,
        this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
        }
        ,
        this.resolveURL = function(t) {
            return r ? r(t) : t
        }
        ,
        this.setURLModifier = function(t) {
            return r = t,
            this
        }
        ,
        this.addHandler = function(t, e) {
            return l.push(t, e),
            this
        }
        ,
        this.removeHandler = function(t) {
            const e = l.indexOf(t);
            return -1 !== e && l.splice(e, 2),
            this
        }
        ,
        this.getHandler = function(t) {
            for (let e = 0, n = l.length; e < n; e += 2) {
                const n = l[e]
                  , i = l[e + 1];
                if (n.global && (n.lastIndex = 0),
                n.test(t))
                    return i
            }
            return null
        }
    }
}
const al = new sl;
class ol {
    constructor(t) {
        this.manager = void 0 !== t ? t : al,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(t, e) {
        const n = this;
        return new Promise((function(i, r) {
            n.load(t, i, e, r)
        }
        ))
    }
    parse() {}
    setCrossOrigin(t) {
        return this.crossOrigin = t,
        this
    }
    setWithCredentials(t) {
        return this.withCredentials = t,
        this
    }
    setPath(t) {
        return this.path = t,
        this
    }
    setResourcePath(t) {
        return this.resourcePath = t,
        this
    }
    setRequestHeader(t) {
        return this.requestHeader = t,
        this
    }
}
const ll = {};
class cl extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        void 0 === t && (t = ""),
        void 0 !== this.path && (t = this.path + t),
        t = this.manager.resolveURL(t);
        const r = this
          , s = rl.get(t);
        if (void 0 !== s)
            return r.manager.itemStart(t),
            setTimeout((function() {
                e && e(s),
                r.manager.itemEnd(t)
            }
            ), 0),
            s;
        if (void 0 !== ll[t])
            return void ll[t].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
        const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
        let o;
        if (a) {
            const n = a[1]
              , s = !!a[2];
            let o = a[3];
            o = decodeURIComponent(o),
            s && (o = atob(o));
            try {
                let i;
                const s = (this.responseType || "").toLowerCase();
                switch (s) {
                case "arraybuffer":
                case "blob":
                    const t = new Uint8Array(o.length);
                    for (let e = 0; e < o.length; e++)
                        t[e] = o.charCodeAt(e);
                    i = "blob" === s ? new Blob([t.buffer],{
                        type: n
                    }) : t.buffer;
                    break;
                case "document":
                    const e = new DOMParser;
                    i = e.parseFromString(o, n);
                    break;
                case "json":
                    i = JSON.parse(o);
                    break;
                default:
                    i = o
                }
                setTimeout((function() {
                    e && e(i),
                    r.manager.itemEnd(t)
                }
                ), 0)
            } catch (e) {
                setTimeout((function() {
                    i && i(e),
                    r.manager.itemError(t),
                    r.manager.itemEnd(t)
                }
                ), 0)
            }
        } else {
            ll[t] = [],
            ll[t].push({
                onLoad: e,
                onProgress: n,
                onError: i
            }),
            o = new XMLHttpRequest,
            o.open("GET", t, !0),
            o.addEventListener("load", (function(e) {
                const n = this.response
                  , i = ll[t];
                if (delete ll[t],
                200 === this.status || 0 === this.status) {
                    0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                    rl.add(t, n);
                    for (let t = 0, e = i.length; t < e; t++) {
                        const e = i[t];
                        e.onLoad && e.onLoad(n)
                    }
                    r.manager.itemEnd(t)
                } else {
                    for (let t = 0, n = i.length; t < n; t++) {
                        const n = i[t];
                        n.onError && n.onError(e)
                    }
                    r.manager.itemError(t),
                    r.manager.itemEnd(t)
                }
            }
            ), !1),
            o.addEventListener("progress", (function(e) {
                const n = ll[t];
                for (let t = 0, i = n.length; t < i; t++) {
                    const i = n[t];
                    i.onProgress && i.onProgress(e)
                }
            }
            ), !1),
            o.addEventListener("error", (function(e) {
                const n = ll[t];
                delete ll[t];
                for (let t = 0, i = n.length; t < i; t++) {
                    const i = n[t];
                    i.onError && i.onError(e)
                }
                r.manager.itemError(t),
                r.manager.itemEnd(t)
            }
            ), !1),
            o.addEventListener("abort", (function(e) {
                const n = ll[t];
                delete ll[t];
                for (let t = 0, i = n.length; t < i; t++) {
                    const i = n[t];
                    i.onError && i.onError(e)
                }
                r.manager.itemError(t),
                r.manager.itemEnd(t)
            }
            ), !1),
            void 0 !== this.responseType && (o.responseType = this.responseType),
            void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials),
            o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
            for (const t in this.requestHeader)
                o.setRequestHeader(t, this.requestHeader[t]);
            o.send(null)
        }
        return r.manager.itemStart(t),
        o
    }
    setResponseType(t) {
        return this.responseType = t,
        this
    }
    setMimeType(t) {
        return this.mimeType = t,
        this
    }
}
class hl extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        void 0 !== this.path && (t = this.path + t),
        t = this.manager.resolveURL(t);
        const r = this
          , s = rl.get(t);
        if (void 0 !== s)
            return r.manager.itemStart(t),
            setTimeout((function() {
                e && e(s),
                r.manager.itemEnd(t)
            }
            ), 0),
            s;
        const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
        function o() {
            a.removeEventListener("load", o, !1),
            a.removeEventListener("error", l, !1),
            rl.add(t, this),
            e && e(this),
            r.manager.itemEnd(t)
        }
        function l(e) {
            a.removeEventListener("load", o, !1),
            a.removeEventListener("error", l, !1),
            i && i(e),
            r.manager.itemError(t),
            r.manager.itemEnd(t)
        }
        return a.addEventListener("load", o, !1),
        a.addEventListener("error", l, !1),
        "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin),
        r.manager.itemStart(t),
        a.src = t,
        a
    }
}
class ul extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = new ei
          , s = new hl(this.manager);
        s.setCrossOrigin(this.crossOrigin),
        s.setPath(this.path);
        let a = 0;
        function o(n) {
            s.load(t[n], (function(t) {
                r.images[n] = t,
                a++,
                6 === a && (r.needsUpdate = !0,
                e && e(r))
            }
            ), void 0, i)
        }
        for (let e = 0; e < t.length; ++e)
            o(e);
        return r
    }
}
class dl extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = new ii
          , a = new cl(this.manager);
        return a.setResponseType("arraybuffer"),
        a.setRequestHeader(this.requestHeader),
        a.setPath(this.path),
        a.setWithCredentials(r.withCredentials),
        a.load(t, (function(t) {
            const n = r.parse(t);
            n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width,
            s.image.height = n.height,
            s.image.data = n.data),
            s.wrapS = void 0 !== n.wrapS ? n.wrapS : u,
            s.wrapT = void 0 !== n.wrapT ? n.wrapT : u,
            s.magFilter = void 0 !== n.magFilter ? n.magFilter : g,
            s.minFilter = void 0 !== n.minFilter ? n.minFilter : g,
            s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1,
            void 0 !== n.encoding && (s.encoding = n.encoding),
            void 0 !== n.flipY && (s.flipY = n.flipY),
            void 0 !== n.format && (s.format = n.format),
            void 0 !== n.type && (s.type = n.type),
            void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps,
            s.minFilter = y),
            1 === n.mipmapCount && (s.minFilter = g),
            void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps),
            s.needsUpdate = !0,
            e && e(s, n))
        }
        ), n, i),
        s
    }
}
class pl extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = new bt
          , s = new hl(this.manager);
        return s.setCrossOrigin(this.crossOrigin),
        s.setPath(this.path),
        s.load(t, (function(n) {
            r.image = n;
            const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
            r.format = i ? T : E,
            r.needsUpdate = !0,
            void 0 !== e && e(r)
        }
        ), n, i),
        r
    }
}
class ml {
    constructor() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."),
        null
    }
    getPointAt(t, e) {
        const n = this.getUtoTmapping(t);
        return this.getPoint(n, e)
    }
    getPoints(t=5) {
        const e = [];
        for (let n = 0; n <= t; n++)
            e.push(this.getPoint(n / t));
        return e
    }
    getSpacedPoints(t=5) {
        const e = [];
        for (let n = 0; n <= t; n++)
            e.push(this.getPointAt(n / t));
        return e
    }
    getLength() {
        const t = this.getLengths();
        return t[t.length - 1]
    }
    getLengths(t=this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        const e = [];
        let n, i = this.getPoint(0), r = 0;
        e.push(0);
        for (let s = 1; s <= t; s++)
            n = this.getPoint(s / t),
            r += n.distanceTo(i),
            e.push(r),
            i = n;
        return this.cacheArcLengths = e,
        e
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.getLengths()
    }
    getUtoTmapping(t, e) {
        const n = this.getLengths();
        let i = 0;
        const r = n.length;
        let s;
        s = e || t * n[r - 1];
        let a, o = 0, l = r - 1;
        for (; o <= l; )
            if (i = Math.floor(o + (l - o) / 2),
            a = n[i] - s,
            a < 0)
                o = i + 1;
            else {
                if (!(a > 0)) {
                    l = i;
                    break
                }
                l = i - 1
            }
        if (i = l,
        n[i] === s)
            return i / (r - 1);
        const c = n[i];
        return (i + (s - c) / (n[i + 1] - c)) / (r - 1)
    }
    getTangent(t, e) {
        const n = 1e-4;
        let i = t - n
          , r = t + n;
        i < 0 && (i = 0),
        r > 1 && (r = 1);
        const s = this.getPoint(i)
          , a = this.getPoint(r)
          , o = e || (s.isVector2 ? new vt : new Lt);
        return o.copy(a).sub(s).normalize(),
        o
    }
    getTangentAt(t, e) {
        const n = this.getUtoTmapping(t);
        return this.getTangent(n, e)
    }
    computeFrenetFrames(t, e) {
        const n = new Lt
          , i = []
          , r = []
          , s = []
          , a = new Lt
          , o = new se;
        for (let e = 0; e <= t; e++) {
            const n = e / t;
            i[e] = this.getTangentAt(n, new Lt),
            i[e].normalize()
        }
        r[0] = new Lt,
        s[0] = new Lt;
        let l = Number.MAX_VALUE;
        const c = Math.abs(i[0].x)
          , h = Math.abs(i[0].y)
          , u = Math.abs(i[0].z);
        c <= l && (l = c,
        n.set(1, 0, 0)),
        h <= l && (l = h,
        n.set(0, 1, 0)),
        u <= l && n.set(0, 0, 1),
        a.crossVectors(i[0], n).normalize(),
        r[0].crossVectors(i[0], a),
        s[0].crossVectors(i[0], r[0]);
        for (let e = 1; e <= t; e++) {
            if (r[e] = r[e - 1].clone(),
            s[e] = s[e - 1].clone(),
            a.crossVectors(i[e - 1], i[e]),
            a.length() > Number.EPSILON) {
                a.normalize();
                const t = Math.acos(ht(i[e - 1].dot(i[e]), -1, 1));
                r[e].applyMatrix4(o.makeRotationAxis(a, t))
            }
            s[e].crossVectors(i[e], r[e])
        }
        if (!0 === e) {
            let e = Math.acos(ht(r[0].dot(r[t]), -1, 1));
            e /= t,
            i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
            for (let n = 1; n <= t; n++)
                r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
                s[n].crossVectors(i[n], r[n])
        }
        return {
            tangents: i,
            normals: r,
            binormals: s
        }
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions,
        this
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return t.arcLengthDivisions = this.arcLengthDivisions,
        t.type = this.type,
        t
    }
    fromJSON(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions,
        this
    }
}
class fl extends ml {
    constructor(t=0, e=0, n=1, i=1, r=0, s=2 * Math.PI, a=!1, o=0) {
        super(),
        this.type = "EllipseCurve",
        this.aX = t,
        this.aY = e,
        this.xRadius = n,
        this.yRadius = i,
        this.aStartAngle = r,
        this.aEndAngle = s,
        this.aClockwise = a,
        this.aRotation = o
    }
    getPoint(t, e) {
        const n = e || new vt
          , i = 2 * Math.PI;
        let r = this.aEndAngle - this.aStartAngle;
        const s = Math.abs(r) < Number.EPSILON;
        for (; r < 0; )
            r += i;
        for (; r > i; )
            r -= i;
        r < Number.EPSILON && (r = s ? 0 : i),
        !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
        const a = this.aStartAngle + t * r;
        let o = this.aX + this.xRadius * Math.cos(a)
          , l = this.aY + this.yRadius * Math.sin(a);
        if (0 !== this.aRotation) {
            const t = Math.cos(this.aRotation)
              , e = Math.sin(this.aRotation)
              , n = o - this.aX
              , i = l - this.aY;
            o = n * t - i * e + this.aX,
            l = n * e + i * t + this.aY
        }
        return n.set(o, l)
    }
    copy(t) {
        return super.copy(t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.aX = this.aX,
        t.aY = this.aY,
        t.xRadius = this.xRadius,
        t.yRadius = this.yRadius,
        t.aStartAngle = this.aStartAngle,
        t.aEndAngle = this.aEndAngle,
        t.aClockwise = this.aClockwise,
        t.aRotation = this.aRotation,
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
}
fl.prototype.isEllipseCurve = !0;
class gl extends fl {
    constructor(t, e, n, i, r, s) {
        super(t, e, n, n, i, r, s),
        this.type = "ArcCurve"
    }
}
function vl() {
    let t = 0
      , e = 0
      , n = 0
      , i = 0;
    function r(r, s, a, o) {
        t = r,
        e = a,
        n = -3 * r + 3 * s - 2 * a - o,
        i = 2 * r - 2 * s + a + o
    }
    return {
        initCatmullRom: function(t, e, n, i, s) {
            r(e, n, s * (n - t), s * (i - e))
        },
        initNonuniformCatmullRom: function(t, e, n, i, s, a, o) {
            let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a
              , c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
            l *= a,
            c *= a,
            r(e, n, l, c)
        },
        calc: function(r) {
            const s = r * r;
            return t + e * r + n * s + i * (s * r)
        }
    }
}
gl.prototype.isArcCurve = !0;
const yl = new Lt
  , xl = new vl
  , _l = new vl
  , wl = new vl;
class bl extends ml {
    constructor(t=[], e=!1, n="centripetal", i=.5) {
        super(),
        this.type = "CatmullRomCurve3",
        this.points = t,
        this.closed = e,
        this.curveType = n,
        this.tension = i
    }
    getPoint(t, e=new Lt) {
        const n = e
          , i = this.points
          , r = i.length
          , s = (r - (this.closed ? 0 : 1)) * t;
        let a, o, l = Math.floor(s), c = s - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2,
        c = 1),
        this.closed || l > 0 ? a = i[(l - 1) % r] : (yl.subVectors(i[0], i[1]).add(i[0]),
        a = yl);
        const h = i[l % r]
          , u = i[(l + 1) % r];
        if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (yl.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]),
        o = yl),
        "centripetal" === this.curveType || "chordal" === this.curveType) {
            const t = "chordal" === this.curveType ? .5 : .25;
            let e = Math.pow(a.distanceToSquared(h), t)
              , n = Math.pow(h.distanceToSquared(u), t)
              , i = Math.pow(u.distanceToSquared(o), t);
            n < 1e-4 && (n = 1),
            e < 1e-4 && (e = n),
            i < 1e-4 && (i = n),
            xl.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
            _l.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
            wl.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i)
        } else
            "catmullrom" === this.curveType && (xl.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
            _l.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
            wl.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
        return n.set(xl.calc(c), _l.calc(c), wl.calc(c)),
        n
    }
    copy(t) {
        super.copy(t),
        this.points = [];
        for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone())
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    toJSON() {
        const t = super.toJSON();
        t.points = [];
        for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray())
        }
        return t.closed = this.closed,
        t.curveType = this.curveType,
        t.tension = this.tension,
        t
    }
    fromJSON(t) {
        super.fromJSON(t),
        this.points = [];
        for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push((new Lt).fromArray(n))
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
}
function Ml(t, e, n, i, r) {
    const s = .5 * (i - e)
      , a = .5 * (r - n)
      , o = t * t;
    return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n
}
function Sl(t, e, n, i) {
    return function(t, e) {
        const n = 1 - t;
        return n * n * e
    }(t, e) + function(t, e) {
        return 2 * (1 - t) * t * e
    }(t, n) + function(t, e) {
        return t * t * e
    }(t, i)
}
function Tl(t, e, n, i, r) {
    return function(t, e) {
        const n = 1 - t;
        return n * n * n * e
    }(t, e) + function(t, e) {
        const n = 1 - t;
        return 3 * n * n * t * e
    }(t, n) + function(t, e) {
        return 3 * (1 - t) * t * t * e
    }(t, i) + function(t, e) {
        return t * t * t * e
    }(t, r)
}
bl.prototype.isCatmullRomCurve3 = !0;
class El extends ml {
    constructor(t=new vt, e=new vt, n=new vt, i=new vt) {
        super(),
        this.type = "CubicBezierCurve",
        this.v0 = t,
        this.v1 = e,
        this.v2 = n,
        this.v3 = i
    }
    getPoint(t, e=new vt) {
        const n = e
          , i = this.v0
          , r = this.v1
          , s = this.v2
          , a = this.v3;
        return n.set(Tl(t, i.x, r.x, s.x, a.x), Tl(t, i.y, r.y, s.y, a.y)),
        n
    }
    copy(t) {
        return super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
}
El.prototype.isCubicBezierCurve = !0;
class Al extends ml {
    constructor(t=new Lt, e=new Lt, n=new Lt, i=new Lt) {
        super(),
        this.type = "CubicBezierCurve3",
        this.v0 = t,
        this.v1 = e,
        this.v2 = n,
        this.v3 = i
    }
    getPoint(t, e=new Lt) {
        const n = e
          , i = this.v0
          , r = this.v1
          , s = this.v2
          , a = this.v3;
        return n.set(Tl(t, i.x, r.x, s.x, a.x), Tl(t, i.y, r.y, s.y, a.y), Tl(t, i.z, r.z, s.z, a.z)),
        n
    }
    copy(t) {
        return super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
}
Al.prototype.isCubicBezierCurve3 = !0;
class Ll extends ml {
    constructor(t=new vt, e=new vt) {
        super(),
        this.type = "LineCurve",
        this.v1 = t,
        this.v2 = e
    }
    getPoint(t, e=new vt) {
        const n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(t).add(this.v1)),
        n
    }
    getPointAt(t, e) {
        return this.getPoint(t, e)
    }
    getTangent(t, e) {
        const n = e || new vt;
        return n.copy(this.v2).sub(this.v1).normalize(),
        n
    }
    copy(t) {
        return super.copy(t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
}
Ll.prototype.isLineCurve = !0;
class Rl extends ml {
    constructor(t=new Lt, e=new Lt) {
        super(),
        this.type = "LineCurve3",
        this.isLineCurve3 = !0,
        this.v1 = t,
        this.v2 = e
    }
    getPoint(t, e=new Lt) {
        const n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(t).add(this.v1)),
        n
    }
    getPointAt(t, e) {
        return this.getPoint(t, e)
    }
    copy(t) {
        return super.copy(t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
}
class Cl extends ml {
    constructor(t=new vt, e=new vt, n=new vt) {
        super(),
        this.type = "QuadraticBezierCurve",
        this.v0 = t,
        this.v1 = e,
        this.v2 = n
    }
    getPoint(t, e=new vt) {
        const n = e
          , i = this.v0
          , r = this.v1
          , s = this.v2;
        return n.set(Sl(t, i.x, r.x, s.x), Sl(t, i.y, r.y, s.y)),
        n
    }
    copy(t) {
        return super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
}
Cl.prototype.isQuadraticBezierCurve = !0;
class Pl extends ml {
    constructor(t=new Lt, e=new Lt, n=new Lt) {
        super(),
        this.type = "QuadraticBezierCurve3",
        this.v0 = t,
        this.v1 = e,
        this.v2 = n
    }
    getPoint(t, e=new Lt) {
        const n = e
          , i = this.v0
          , r = this.v1
          , s = this.v2;
        return n.set(Sl(t, i.x, r.x, s.x), Sl(t, i.y, r.y, s.y), Sl(t, i.z, r.z, s.z)),
        n
    }
    copy(t) {
        return super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
}
Pl.prototype.isQuadraticBezierCurve3 = !0;
class Dl extends ml {
    constructor(t=[]) {
        super(),
        this.type = "SplineCurve",
        this.points = t
    }
    getPoint(t, e=new vt) {
        const n = e
          , i = this.points
          , r = (i.length - 1) * t
          , s = Math.floor(r)
          , a = r - s
          , o = i[0 === s ? s : s - 1]
          , l = i[s]
          , c = i[s > i.length - 2 ? i.length - 1 : s + 1]
          , h = i[s > i.length - 3 ? i.length - 1 : s + 2];
        return n.set(Ml(a, o.x, l.x, c.x, h.x), Ml(a, o.y, l.y, c.y, h.y)),
        n
    }
    copy(t) {
        super.copy(t),
        this.points = [];
        for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone())
        }
        return this
    }
    toJSON() {
        const t = super.toJSON();
        t.points = [];
        for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray())
        }
        return t
    }
    fromJSON(t) {
        super.fromJSON(t),
        this.points = [];
        for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push((new vt).fromArray(n))
        }
        return this
    }
}
Dl.prototype.isSplineCurve = !0;
var Il = Object.freeze({
    __proto__: null,
    ArcCurve: gl,
    CatmullRomCurve3: bl,
    CubicBezierCurve: El,
    CubicBezierCurve3: Al,
    EllipseCurve: fl,
    LineCurve: Ll,
    LineCurve3: Rl,
    QuadraticBezierCurve: Cl,
    QuadraticBezierCurve3: Pl,
    SplineCurve: Dl
});
class Nl extends ml {
    constructor() {
        super(),
        this.type = "CurvePath",
        this.curves = [],
        this.autoClose = !1
    }
    add(t) {
        this.curves.push(t)
    }
    closePath() {
        const t = this.curves[0].getPoint(0)
          , e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new Ll(e,t))
    }
    getPoint(t) {
        const e = t * this.getLength()
          , n = this.getCurveLengths();
        let i = 0;
        for (; i < n.length; ) {
            if (n[i] >= e) {
                const t = n[i] - e
                  , r = this.curves[i]
                  , s = r.getLength()
                  , a = 0 === s ? 0 : 1 - t / s;
                return r.getPointAt(a)
            }
            i++
        }
        return null
    }
    getLength() {
        const t = this.getCurveLengths();
        return t[t.length - 1]
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.cacheLengths = null,
        this.getCurveLengths()
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
            return this.cacheLengths;
        const t = [];
        let e = 0;
        for (let n = 0, i = this.curves.length; n < i; n++)
            e += this.curves[n].getLength(),
            t.push(e);
        return this.cacheLengths = t,
        t
    }
    getSpacedPoints(t=40) {
        const e = [];
        for (let n = 0; n <= t; n++)
            e.push(this.getPoint(n / t));
        return this.autoClose && e.push(e[0]),
        e
    }
    getPoints(t=12) {
        const e = [];
        let n;
        for (let i = 0, r = this.curves; i < r.length; i++) {
            const s = r[i]
              , a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t
              , o = s.getPoints(a);
            for (let t = 0; t < o.length; t++) {
                const i = o[t];
                n && n.equals(i) || (e.push(i),
                n = i)
            }
        }
        return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]),
        e
    }
    copy(t) {
        super.copy(t),
        this.curves = [];
        for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push(n.clone())
        }
        return this.autoClose = t.autoClose,
        this
    }
    toJSON() {
        const t = super.toJSON();
        t.autoClose = this.autoClose,
        t.curves = [];
        for (let e = 0, n = this.curves.length; e < n; e++) {
            const n = this.curves[e];
            t.curves.push(n.toJSON())
        }
        return t
    }
    fromJSON(t) {
        super.fromJSON(t),
        this.autoClose = t.autoClose,
        this.curves = [];
        for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push((new Il[n.type]).fromJSON(n))
        }
        return this
    }
}
class Bl extends Nl {
    constructor(t) {
        super(),
        this.type = "Path",
        this.currentPoint = new vt,
        t && this.setFromPoints(t)
    }
    setFromPoints(t) {
        this.moveTo(t[0].x, t[0].y);
        for (let e = 1, n = t.length; e < n; e++)
            this.lineTo(t[e].x, t[e].y);
        return this
    }
    moveTo(t, e) {
        return this.currentPoint.set(t, e),
        this
    }
    lineTo(t, e) {
        const n = new Ll(this.currentPoint.clone(),new vt(t,e));
        return this.curves.push(n),
        this.currentPoint.set(t, e),
        this
    }
    quadraticCurveTo(t, e, n, i) {
        const r = new Cl(this.currentPoint.clone(),new vt(t,e),new vt(n,i));
        return this.curves.push(r),
        this.currentPoint.set(n, i),
        this
    }
    bezierCurveTo(t, e, n, i, r, s) {
        const a = new El(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,s));
        return this.curves.push(a),
        this.currentPoint.set(r, s),
        this
    }
    splineThru(t) {
        const e = [this.currentPoint.clone()].concat(t)
          , n = new Dl(e);
        return this.curves.push(n),
        this.currentPoint.copy(t[t.length - 1]),
        this
    }
    arc(t, e, n, i, r, s) {
        const a = this.currentPoint.x
          , o = this.currentPoint.y;
        return this.absarc(t + a, e + o, n, i, r, s),
        this
    }
    absarc(t, e, n, i, r, s) {
        return this.absellipse(t, e, n, n, i, r, s),
        this
    }
    ellipse(t, e, n, i, r, s, a, o) {
        const l = this.currentPoint.x
          , c = this.currentPoint.y;
        return this.absellipse(t + l, e + c, n, i, r, s, a, o),
        this
    }
    absellipse(t, e, n, i, r, s, a, o) {
        const l = new fl(t,e,n,i,r,s,a,o);
        if (this.curves.length > 0) {
            const t = l.getPoint(0);
            t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
        }
        this.curves.push(l);
        const c = l.getPoint(1);
        return this.currentPoint.copy(c),
        this
    }
    copy(t) {
        return super.copy(t),
        this.currentPoint.copy(t.currentPoint),
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.currentPoint = this.currentPoint.toArray(),
        t
    }
    fromJSON(t) {
        return super.fromJSON(t),
        this.currentPoint.fromArray(t.currentPoint),
        this
    }
}
class zl extends Bl {
    constructor(t) {
        super(t),
        this.uuid = ct(),
        this.type = "Shape",
        this.holes = []
    }
    getPointsHoles(t) {
        const e = [];
        for (let n = 0, i = this.holes.length; n < i; n++)
            e[n] = this.holes[n].getPoints(t);
        return e
    }
    extractPoints(t) {
        return {
            shape: this.getPoints(t),
            holes: this.getPointsHoles(t)
        }
    }
    copy(t) {
        super.copy(t),
        this.holes = [];
        for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push(n.clone())
        }
        return this
    }
    toJSON() {
        const t = super.toJSON();
        t.uuid = this.uuid,
        t.holes = [];
        for (let e = 0, n = this.holes.length; e < n; e++) {
            const n = this.holes[e];
            t.holes.push(n.toJSON())
        }
        return t
    }
    fromJSON(t) {
        super.fromJSON(t),
        this.uuid = t.uuid,
        this.holes = [];
        for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push((new Bl).fromJSON(n))
        }
        return this
    }
}
class Fl extends Ce {
    constructor(t, e=1) {
        super(),
        this.type = "Light",
        this.color = new tn(t),
        this.intensity = e
    }
    dispose() {}
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.intensity = t.intensity,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(),
        e.object.intensity = this.intensity,
        void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
        e
    }
}
Fl.prototype.isLight = !0;
class Ol extends Fl {
    constructor(t, e, n) {
        super(t, n),
        this.type = "HemisphereLight",
        this.position.copy(Ce.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new tn(e)
    }
    copy(t) {
        return Fl.prototype.copy.call(this, t),
        this.groundColor.copy(t.groundColor),
        this
    }
}
Ol.prototype.isHemisphereLight = !0;
const Hl = new se
  , Gl = new Lt
  , Ul = new Lt;
class kl {
    constructor(t) {
        this.camera = t,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.mapSize = new vt(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new se,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new ai,
        this._frameExtents = new vt(1,1),
        this._viewportCount = 1,
        this._viewports = [new St(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(t) {
        const e = this.camera
          , n = this.matrix;
        Gl.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(Gl),
        Ul.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(Ul),
        e.updateMatrixWorld(),
        Hl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Hl),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(e.projectionMatrix),
        n.multiply(e.matrixWorldInverse)
    }
    getViewport(t) {
        return this._viewports[t]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(t) {
        return this.camera = t.camera.clone(),
        this.bias = t.bias,
        this.radius = t.radius,
        this.mapSize.copy(t.mapSize),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const t = {};
        return 0 !== this.bias && (t.bias = this.bias),
        0 !== this.normalBias && (t.normalBias = this.normalBias),
        1 !== this.radius && (t.radius = this.radius),
        512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
        t.camera = this.camera.toJSON(!1).object,
        delete t.camera.matrix,
        t
    }
}
class Vl extends kl {
    constructor() {
        super(new Kn(50,1,.5,500)),
        this.focus = 1
    }
    updateMatrices(t) {
        const e = this.camera
          , n = 2 * lt * t.angle * this.focus
          , i = this.mapSize.width / this.mapSize.height
          , r = t.distance || e.far;
        n === e.fov && i === e.aspect && r === e.far || (e.fov = n,
        e.aspect = i,
        e.far = r,
        e.updateProjectionMatrix()),
        super.updateMatrices(t)
    }
    copy(t) {
        return super.copy(t),
        this.focus = t.focus,
        this
    }
}
Vl.prototype.isSpotLightShadow = !0;
class Wl extends Fl {
    constructor(t, e, n=0, i=Math.PI / 3, r=0, s=1) {
        super(t, e),
        this.type = "SpotLight",
        this.position.copy(Ce.DefaultUp),
        this.updateMatrix(),
        this.target = new Ce,
        this.distance = n,
        this.angle = i,
        this.penumbra = r,
        this.decay = s,
        this.shadow = new Vl
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(t) {
        this.intensity = t / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t) {
        return super.copy(t),
        this.distance = t.distance,
        this.angle = t.angle,
        this.penumbra = t.penumbra,
        this.decay = t.decay,
        this.target = t.target.clone(),
        this.shadow = t.shadow.clone(),
        this
    }
}
Wl.prototype.isSpotLight = !0;
const jl = new se
  , ql = new Lt
  , Xl = new Lt;
class Yl extends kl {
    constructor() {
        super(new Kn(90,1,.5,500)),
        this._frameExtents = new vt(4,2),
        this._viewportCount = 6,
        this._viewports = [new St(2,1,1,1), new St(0,1,1,1), new St(3,1,1,1), new St(1,1,1,1), new St(3,0,1,1), new St(1,0,1,1)],
        this._cubeDirections = [new Lt(1,0,0), new Lt(-1,0,0), new Lt(0,0,1), new Lt(0,0,-1), new Lt(0,1,0), new Lt(0,-1,0)],
        this._cubeUps = [new Lt(0,1,0), new Lt(0,1,0), new Lt(0,1,0), new Lt(0,1,0), new Lt(0,0,1), new Lt(0,0,-1)]
    }
    updateMatrices(t, e=0) {
        const n = this.camera
          , i = this.matrix
          , r = t.distance || n.far;
        r !== n.far && (n.far = r,
        n.updateProjectionMatrix()),
        ql.setFromMatrixPosition(t.matrixWorld),
        n.position.copy(ql),
        Xl.copy(n.position),
        Xl.add(this._cubeDirections[e]),
        n.up.copy(this._cubeUps[e]),
        n.lookAt(Xl),
        n.updateMatrixWorld(),
        i.makeTranslation(-ql.x, -ql.y, -ql.z),
        jl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(jl)
    }
}
Yl.prototype.isPointLightShadow = !0;
class Zl extends Fl {
    constructor(t, e, n=0, i=1) {
        super(t, e),
        this.type = "PointLight",
        this.distance = n,
        this.decay = i,
        this.shadow = new Yl
    }
    get power() {
        return 4 * this.intensity * Math.PI
    }
    set power(t) {
        this.intensity = t / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t) {
        return super.copy(t),
        this.distance = t.distance,
        this.decay = t.decay,
        this.shadow = t.shadow.clone(),
        this
    }
}
Zl.prototype.isPointLight = !0;
class Jl extends Qn {
    constructor(t=-1, e=1, n=1, i=-1, r=.1, s=2e3) {
        super(),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = n,
        this.bottom = i,
        this.near = r,
        this.far = s,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.left = t.left,
        this.right = t.right,
        this.top = t.top,
        this.bottom = t.bottom,
        this.near = t.near,
        this.far = t.far,
        this.zoom = t.zoom,
        this.view = null === t.view ? null : Object.assign({}, t.view),
        this
    }
    setViewOffset(t, e, n, i, r, s) {
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = n,
        this.view.offsetY = i,
        this.view.width = r,
        this.view.height = s,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom)
          , e = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , i = (this.top + this.bottom) / 2;
        let r = n - t
          , s = n + t
          , a = i + e
          , o = i - e;
        if (null !== this.view && this.view.enabled) {
            const t = (this.right - this.left) / this.view.fullWidth / this.zoom
              , e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX,
            s = r + t * this.view.width,
            a -= e * this.view.offsetY,
            o = a - e * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom,
        e.object.left = this.left,
        e.object.right = this.right,
        e.object.top = this.top,
        e.object.bottom = this.bottom,
        e.object.near = this.near,
        e.object.far = this.far,
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        e
    }
}
Jl.prototype.isOrthographicCamera = !0;
class Ql extends kl {
    constructor() {
        super(new Jl(-5,5,5,-5,.5,500))
    }
}
Ql.prototype.isDirectionalLightShadow = !0;
class Kl extends Fl {
    constructor(t, e) {
        super(t, e),
        this.type = "DirectionalLight",
        this.position.copy(Ce.DefaultUp),
        this.updateMatrix(),
        this.target = new Ce,
        this.shadow = new Ql
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t) {
        return super.copy(t),
        this.target = t.target.clone(),
        this.shadow = t.shadow.clone(),
        this
    }
}
Kl.prototype.isDirectionalLight = !0;
class $l extends Fl {
    constructor(t, e) {
        super(t, e),
        this.type = "AmbientLight"
    }
}
$l.prototype.isAmbientLight = !0;
class tc extends Fl {
    constructor(t, e, n=10, i=10) {
        super(t, e),
        this.type = "RectAreaLight",
        this.width = n,
        this.height = i
    }
    copy(t) {
        return super.copy(t),
        this.width = t.width,
        this.height = t.height,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.width = this.width,
        e.object.height = this.height,
        e
    }
}
tc.prototype.isRectAreaLight = !0;
class ec {
    constructor() {
        this.coefficients = [];
        for (let t = 0; t < 9; t++)
            this.coefficients.push(new Lt)
    }
    set(t) {
        for (let e = 0; e < 9; e++)
            this.coefficients[e].copy(t[e]);
        return this
    }
    zero() {
        for (let t = 0; t < 9; t++)
            this.coefficients[t].set(0, 0, 0);
        return this
    }
    getAt(t, e) {
        const n = t.x
          , i = t.y
          , r = t.z
          , s = this.coefficients;
        return e.copy(s[0]).multiplyScalar(.282095),
        e.addScaledVector(s[1], .488603 * i),
        e.addScaledVector(s[2], .488603 * r),
        e.addScaledVector(s[3], .488603 * n),
        e.addScaledVector(s[4], n * i * 1.092548),
        e.addScaledVector(s[5], i * r * 1.092548),
        e.addScaledVector(s[6], .315392 * (3 * r * r - 1)),
        e.addScaledVector(s[7], n * r * 1.092548),
        e.addScaledVector(s[8], .546274 * (n * n - i * i)),
        e
    }
    getIrradianceAt(t, e) {
        const n = t.x
          , i = t.y
          , r = t.z
          , s = this.coefficients;
        return e.copy(s[0]).multiplyScalar(.886227),
        e.addScaledVector(s[1], 1.023328 * i),
        e.addScaledVector(s[2], 1.023328 * r),
        e.addScaledVector(s[3], 1.023328 * n),
        e.addScaledVector(s[4], .858086 * n * i),
        e.addScaledVector(s[5], .858086 * i * r),
        e.addScaledVector(s[6], .743125 * r * r - .247708),
        e.addScaledVector(s[7], .858086 * n * r),
        e.addScaledVector(s[8], .429043 * (n * n - i * i)),
        e
    }
    add(t) {
        for (let e = 0; e < 9; e++)
            this.coefficients[e].add(t.coefficients[e]);
        return this
    }
    addScaledSH(t, e) {
        for (let n = 0; n < 9; n++)
            this.coefficients[n].addScaledVector(t.coefficients[n], e);
        return this
    }
    scale(t) {
        for (let e = 0; e < 9; e++)
            this.coefficients[e].multiplyScalar(t);
        return this
    }
    lerp(t, e) {
        for (let n = 0; n < 9; n++)
            this.coefficients[n].lerp(t.coefficients[n], e);
        return this
    }
    equals(t) {
        for (let e = 0; e < 9; e++)
            if (!this.coefficients[e].equals(t.coefficients[e]))
                return !1;
        return !0
    }
    copy(t) {
        return this.set(t.coefficients)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    fromArray(t, e=0) {
        const n = this.coefficients;
        for (let i = 0; i < 9; i++)
            n[i].fromArray(t, e + 3 * i);
        return this
    }
    toArray(t=[], e=0) {
        const n = this.coefficients;
        for (let i = 0; i < 9; i++)
            n[i].toArray(t, e + 3 * i);
        return t
    }
    static getBasisAt(t, e) {
        const n = t.x
          , i = t.y
          , r = t.z;
        e[0] = .282095,
        e[1] = .488603 * i,
        e[2] = .488603 * r,
        e[3] = .488603 * n,
        e[4] = 1.092548 * n * i,
        e[5] = 1.092548 * i * r,
        e[6] = .315392 * (3 * r * r - 1),
        e[7] = 1.092548 * n * r,
        e[8] = .546274 * (n * n - i * i)
    }
}
ec.prototype.isSphericalHarmonics3 = !0;
class nc extends Fl {
    constructor(t=new ec, e=1) {
        super(void 0, e),
        this.sh = t
    }
    copy(t) {
        return super.copy(t),
        this.sh.copy(t.sh),
        this
    }
    fromJSON(t) {
        return this.intensity = t.intensity,
        this.sh.fromArray(t.sh),
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.sh = this.sh.toArray(),
        e
    }
}
nc.prototype.isLightProbe = !0;
class ic extends ol {
    constructor(t) {
        super(t),
        this.textures = {}
    }
    load(t, e, n, i) {
        const r = this
          , s = new cl(r.manager);
        s.setPath(r.path),
        s.setRequestHeader(r.requestHeader),
        s.setWithCredentials(r.withCredentials),
        s.load(t, (function(n) {
            try {
                e(r.parse(JSON.parse(n)))
            } catch (e) {
                i ? i(e) : console.error(e),
                r.manager.itemError(t)
            }
        }
        ), n, i)
    }
    parse(t) {
        const e = this.textures;
        function n(t) {
            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
            e[t]
        }
        const i = new ko[t.type];
        if (void 0 !== t.uuid && (i.uuid = t.uuid),
        void 0 !== t.name && (i.name = t.name),
        void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color),
        void 0 !== t.roughness && (i.roughness = t.roughness),
        void 0 !== t.metalness && (i.metalness = t.metalness),
        void 0 !== t.sheen && (i.sheen = (new tn).setHex(t.sheen)),
        void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive),
        void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular),
        void 0 !== t.shininess && (i.shininess = t.shininess),
        void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat),
        void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness),
        void 0 !== t.fog && (i.fog = t.fog),
        void 0 !== t.flatShading && (i.flatShading = t.flatShading),
        void 0 !== t.blending && (i.blending = t.blending),
        void 0 !== t.combine && (i.combine = t.combine),
        void 0 !== t.side && (i.side = t.side),
        void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide),
        void 0 !== t.opacity && (i.opacity = t.opacity),
        void 0 !== t.transparent && (i.transparent = t.transparent),
        void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
        void 0 !== t.depthTest && (i.depthTest = t.depthTest),
        void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
        void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
        void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite),
        void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask),
        void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc),
        void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef),
        void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask),
        void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail),
        void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail),
        void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass),
        void 0 !== t.wireframe && (i.wireframe = t.wireframe),
        void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth),
        void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap),
        void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin),
        void 0 !== t.rotation && (i.rotation = t.rotation),
        1 !== t.linewidth && (i.linewidth = t.linewidth),
        void 0 !== t.dashSize && (i.dashSize = t.dashSize),
        void 0 !== t.gapSize && (i.gapSize = t.gapSize),
        void 0 !== t.scale && (i.scale = t.scale),
        void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset),
        void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor),
        void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits),
        void 0 !== t.skinning && (i.skinning = t.skinning),
        void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets),
        void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals),
        void 0 !== t.dithering && (i.dithering = t.dithering),
        void 0 !== t.alphaToCoverage && (i.alphaToCoverage = t.alphaToCoverage),
        void 0 !== t.premultipliedAlpha && (i.premultipliedAlpha = t.premultipliedAlpha),
        void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents),
        void 0 !== t.visible && (i.visible = t.visible),
        void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped),
        void 0 !== t.userData && (i.userData = t.userData),
        void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors),
        void 0 !== t.uniforms)
            for (const e in t.uniforms) {
                const r = t.uniforms[e];
                switch (i.uniforms[e] = {},
                r.type) {
                case "t":
                    i.uniforms[e].value = n(r.value);
                    break;
                case "c":
                    i.uniforms[e].value = (new tn).setHex(r.value);
                    break;
                case "v2":
                    i.uniforms[e].value = (new vt).fromArray(r.value);
                    break;
                case "v3":
                    i.uniforms[e].value = (new Lt).fromArray(r.value);
                    break;
                case "v4":
                    i.uniforms[e].value = (new St).fromArray(r.value);
                    break;
                case "m3":
                    i.uniforms[e].value = (new yt).fromArray(r.value);
                    break;
                case "m4":
                    i.uniforms[e].value = (new se).fromArray(r.value);
                    break;
                default:
                    i.uniforms[e].value = r.value
                }
            }
        if (void 0 !== t.defines && (i.defines = t.defines),
        void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
        void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader),
        void 0 !== t.extensions)
            for (const e in t.extensions)
                i.extensions[e] = t.extensions[e];
        if (void 0 !== t.shading && (i.flatShading = 1 === t.shading),
        void 0 !== t.size && (i.size = t.size),
        void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation),
        void 0 !== t.map && (i.map = n(t.map)),
        void 0 !== t.matcap && (i.matcap = n(t.matcap)),
        void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)),
        void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)),
        void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
        void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)),
        void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType),
        void 0 !== t.normalScale) {
            let e = t.normalScale;
            !1 === Array.isArray(e) && (e = [e, e]),
            i.normalScale = (new vt).fromArray(e)
        }
        return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)),
        void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale),
        void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias),
        void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)),
        void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)),
        void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)),
        void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity),
        void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)),
        void 0 !== t.envMap && (i.envMap = n(t.envMap)),
        void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity),
        void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
        void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio),
        void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)),
        void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity),
        void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)),
        void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity),
        void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)),
        void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)),
        void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)),
        void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)),
        void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new vt).fromArray(t.clearcoatNormalScale)),
        void 0 !== t.transmission && (i.transmission = t.transmission),
        void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)),
        i
    }
    setTextures(t) {
        return this.textures = t,
        this
    }
}
class rc {
    static decodeText(t) {
        if ("undefined" != typeof TextDecoder)
            return (new TextDecoder).decode(t);
        let e = "";
        for (let n = 0, i = t.length; n < i; n++)
            e += String.fromCharCode(t[n]);
        try {
            return decodeURIComponent(escape(e))
        } catch (t) {
            return e
        }
    }
    static extractUrlBase(t) {
        const e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1)
    }
}
class sc extends En {
    constructor() {
        super(),
        this.type = "InstancedBufferGeometry",
        this.instanceCount = 1 / 0
    }
    copy(t) {
        return super.copy(t),
        this.instanceCount = t.instanceCount,
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const t = super.toJSON(this);
        return t.instanceCount = this.instanceCount,
        t.isInstancedBufferGeometry = !0,
        t
    }
}
sc.prototype.isInstancedBufferGeometry = !0;
class ac extends sn {
    constructor(t, e, n, i) {
        "number" == typeof n && (i = n,
        n = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
        super(t, e, n),
        this.meshPerAttribute = i || 1
    }
    copy(t) {
        return super.copy(t),
        this.meshPerAttribute = t.meshPerAttribute,
        this
    }
    toJSON() {
        const t = super.toJSON();
        return t.meshPerAttribute = this.meshPerAttribute,
        t.isInstancedBufferAttribute = !0,
        t
    }
}
ac.prototype.isInstancedBufferAttribute = !0;
class oc extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = new cl(r.manager);
        s.setPath(r.path),
        s.setRequestHeader(r.requestHeader),
        s.setWithCredentials(r.withCredentials),
        s.load(t, (function(n) {
            try {
                e(r.parse(JSON.parse(n)))
            } catch (e) {
                i ? i(e) : console.error(e),
                r.manager.itemError(t)
            }
        }
        ), n, i)
    }
    parse(t) {
        const e = {}
          , n = {};
        function i(t, i) {
            if (void 0 !== e[i])
                return e[i];
            const r = t.interleavedBuffers[i]
              , s = function(t, e) {
                if (void 0 !== n[e])
                    return n[e];
                const i = t.arrayBuffers[e]
                  , r = new Uint32Array(i).buffer;
                return n[e] = r,
                r
            }(t, r.buffer)
              , a = yn(r.type, s)
              , o = new Es(a,r.stride);
            return o.uuid = r.uuid,
            e[i] = o,
            o
        }
        const r = t.isInstancedBufferGeometry ? new sc : new En
          , s = t.data.index;
        if (void 0 !== s) {
            const t = yn(s.type, s.array);
            r.setIndex(new sn(t,1))
        }
        const a = t.data.attributes;
        for (const e in a) {
            const n = a[e];
            let s;
            if (n.isInterleavedBufferAttribute) {
                const e = i(t.data, n.data);
                s = new Ls(e,n.itemSize,n.offset,n.normalized)
            } else {
                const t = yn(n.type, n.array);
                s = new (n.isInstancedBufferAttribute ? ac : sn)(t,n.itemSize,n.normalized)
            }
            void 0 !== n.name && (s.name = n.name),
            void 0 !== n.usage && s.setUsage(n.usage),
            void 0 !== n.updateRange && (s.updateRange.offset = n.updateRange.offset,
            s.updateRange.count = n.updateRange.count),
            r.setAttribute(e, s)
        }
        const o = t.data.morphAttributes;
        if (o)
            for (const e in o) {
                const n = o[e]
                  , s = [];
                for (let e = 0, r = n.length; e < r; e++) {
                    const r = n[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = i(t.data, r.data);
                        a = new Ls(e,r.itemSize,r.offset,r.normalized)
                    } else {
                        const t = yn(r.type, r.array);
                        a = new sn(t,r.itemSize,r.normalized)
                    }
                    void 0 !== r.name && (a.name = r.name),
                    s.push(a)
                }
                r.morphAttributes[e] = s
            }
        t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
        const l = t.data.groups || t.data.drawcalls || t.data.offsets;
        if (void 0 !== l)
            for (let t = 0, e = l.length; t !== e; ++t) {
                const e = l[t];
                r.addGroup(e.start, e.count, e.materialIndex)
            }
        const c = t.data.boundingSphere;
        if (void 0 !== c) {
            const t = new Lt;
            void 0 !== c.center && t.fromArray(c.center),
            r.boundingSphere = new Jt(t,c.radius)
        }
        return t.name && (r.name = t.name),
        t.userData && (r.userData = t.userData),
        r
    }
}
const lc = {
    UVMapping: i,
    CubeReflectionMapping: r,
    CubeRefractionMapping: s,
    EquirectangularReflectionMapping: a,
    EquirectangularRefractionMapping: o,
    CubeUVReflectionMapping: l,
    CubeUVRefractionMapping: c
}
  , cc = {
    RepeatWrapping: h,
    ClampToEdgeWrapping: u,
    MirroredRepeatWrapping: d
}
  , hc = {
    NearestFilter: p,
    NearestMipmapNearestFilter: m,
    NearestMipmapLinearFilter: f,
    LinearFilter: g,
    LinearMipmapNearestFilter: v,
    LinearMipmapLinearFilter: y
};
class uc extends ol {
    constructor(t) {
        super(t),
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(t) {
        return this.options = t,
        this
    }
    load(t, e, n, i) {
        void 0 === t && (t = ""),
        void 0 !== this.path && (t = this.path + t),
        t = this.manager.resolveURL(t);
        const r = this
          , s = rl.get(t);
        if (void 0 !== s)
            return r.manager.itemStart(t),
            setTimeout((function() {
                e && e(s),
                r.manager.itemEnd(t)
            }
            ), 0),
            s;
        const a = {};
        a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include",
        a.headers = this.requestHeader,
        fetch(t, a).then((function(t) {
            return t.blob()
        }
        )).then((function(t) {
            return createImageBitmap(t, Object.assign(r.options, {
                colorSpaceConversion: "none"
            }))
        }
        )).then((function(n) {
            rl.add(t, n),
            e && e(n),
            r.manager.itemEnd(t)
        }
        )).catch((function(e) {
            i && i(e),
            r.manager.itemError(t),
            r.manager.itemEnd(t)
        }
        )),
        r.manager.itemStart(t)
    }
}
uc.prototype.isImageBitmapLoader = !0;
class dc {
    constructor() {
        this.type = "ShapePath",
        this.color = new tn,
        this.subPaths = [],
        this.currentPath = null
    }
    moveTo(t, e) {
        return this.currentPath = new Bl,
        this.subPaths.push(this.currentPath),
        this.currentPath.moveTo(t, e),
        this
    }
    lineTo(t, e) {
        return this.currentPath.lineTo(t, e),
        this
    }
    quadraticCurveTo(t, e, n, i) {
        return this.currentPath.quadraticCurveTo(t, e, n, i),
        this
    }
    bezierCurveTo(t, e, n, i, r, s) {
        return this.currentPath.bezierCurveTo(t, e, n, i, r, s),
        this
    }
    splineThru(t) {
        return this.currentPath.splineThru(t),
        this
    }
    toShapes(t, e) {
        function n(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n]
                  , r = new zl;
                r.curves = i.curves,
                e.push(r)
            }
            return e
        }
        function i(t, e) {
            const n = e.length;
            let i = !1;
            for (let r = n - 1, s = 0; s < n; r = s++) {
                let n = e[r]
                  , a = e[s]
                  , o = a.x - n.x
                  , l = a.y - n.y;
                if (Math.abs(l) > Number.EPSILON) {
                    if (l < 0 && (n = e[s],
                    o = -o,
                    a = e[r],
                    l = -l),
                    t.y < n.y || t.y > a.y)
                        continue;
                    if (t.y === n.y) {
                        if (t.x === n.x)
                            return !0
                    } else {
                        const e = l * (t.x - n.x) - o * (t.y - n.y);
                        if (0 === e)
                            return !0;
                        if (e < 0)
                            continue;
                        i = !i
                    }
                } else {
                    if (t.y !== n.y)
                        continue;
                    if (a.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= a.x)
                        return !0
                }
            }
            return i
        }
        const r = po.isClockWise
          , s = this.subPaths;
        if (0 === s.length)
            return [];
        if (!0 === e)
            return n(s);
        let a, o, l;
        const c = [];
        if (1 === s.length)
            return o = s[0],
            l = new zl,
            l.curves = o.curves,
            c.push(l),
            c;
        let h = !r(s[0].getPoints());
        h = t ? !h : h;
        const u = []
          , d = [];
        let p, m, f = [], g = 0;
        d[g] = void 0,
        f[g] = [];
        for (let e = 0, n = s.length; e < n; e++)
            o = s[e],
            p = o.getPoints(),
            a = r(p),
            a = t ? !a : a,
            a ? (!h && d[g] && g++,
            d[g] = {
                s: new zl,
                p: p
            },
            d[g].s.curves = o.curves,
            h && g++,
            f[g] = []) : f[g].push({
                h: o,
                p: p[0]
            });
        if (!d[0])
            return n(s);
        if (d.length > 1) {
            let t = !1;
            const e = [];
            for (let t = 0, e = d.length; t < e; t++)
                u[t] = [];
            for (let n = 0, r = d.length; n < r; n++) {
                const r = f[n];
                for (let s = 0; s < r.length; s++) {
                    const a = r[s];
                    let o = !0;
                    for (let r = 0; r < d.length; r++)
                        i(a.p, d[r].p) && (n !== r && e.push({
                            froms: n,
                            tos: r,
                            hole: s
                        }),
                        o ? (o = !1,
                        u[r].push(a)) : t = !0);
                    o && u[n].push(a)
                }
            }
            e.length > 0 && (t || (f = u))
        }
        for (let t = 0, e = d.length; t < e; t++) {
            l = d[t].s,
            c.push(l),
            m = f[t];
            for (let t = 0, e = m.length; t < e; t++)
                l.holes.push(m[t].h)
        }
        return c
    }
}
class pc {
    constructor(t) {
        this.type = "Font",
        this.data = t
    }
    generateShapes(t, e=100) {
        const n = []
          , i = function(t, e, n) {
            const i = Array.from(t)
              , r = e / n.resolution
              , s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r
              , a = [];
            let o = 0
              , l = 0;
            for (let t = 0; t < i.length; t++) {
                const e = i[t];
                if ("\n" === e)
                    o = 0,
                    l -= s;
                else {
                    const t = mc(e, r, o, l, n);
                    o += t.offsetX,
                    a.push(t.path)
                }
            }
            return a
        }(t, e, this.data);
        for (let t = 0, e = i.length; t < e; t++)
            Array.prototype.push.apply(n, i[t].toShapes());
        return n
    }
}
function mc(t, e, n, i, r) {
    const s = r.glyphs[t] || r.glyphs["?"];
    if (!s)
        return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
    const a = new dc;
    let o, l, c, h, u, d, p, m;
    if (s.o) {
        const t = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
        for (let r = 0, s = t.length; r < s; ) {
            switch (t[r++]) {
            case "m":
                o = t[r++] * e + n,
                l = t[r++] * e + i,
                a.moveTo(o, l);
                break;
            case "l":
                o = t[r++] * e + n,
                l = t[r++] * e + i,
                a.lineTo(o, l);
                break;
            case "q":
                c = t[r++] * e + n,
                h = t[r++] * e + i,
                u = t[r++] * e + n,
                d = t[r++] * e + i,
                a.quadraticCurveTo(u, d, c, h);
                break;
            case "b":
                c = t[r++] * e + n,
                h = t[r++] * e + i,
                u = t[r++] * e + n,
                d = t[r++] * e + i,
                p = t[r++] * e + n,
                m = t[r++] * e + i,
                a.bezierCurveTo(u, d, p, m, c, h)
            }
        }
    }
    return {
        offsetX: s.ha * e,
        path: a
    }
}
pc.prototype.isFont = !0;
let fc;
const gc = {
    getContext: function() {
        return void 0 === fc && (fc = new (window.AudioContext || window.webkitAudioContext)),
        fc
    },
    setContext: function(t) {
        fc = t
    }
};
class vc extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = new cl(this.manager);
        s.setResponseType("arraybuffer"),
        s.setPath(this.path),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(this.withCredentials),
        s.load(t, (function(n) {
            try {
                const t = n.slice(0);
                gc.getContext().decodeAudioData(t, (function(t) {
                    e(t)
                }
                ))
            } catch (e) {
                i ? i(e) : console.error(e),
                r.manager.itemError(t)
            }
        }
        ), n, i)
    }
}
class yc extends nc {
    constructor(t, e, n=1) {
        super(void 0, n);
        const i = (new tn).set(t)
          , r = (new tn).set(e)
          , s = new Lt(i.r,i.g,i.b)
          , a = new Lt(r.r,r.g,r.b)
          , o = Math.sqrt(Math.PI)
          , l = o * Math.sqrt(.75);
        this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),
        this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)
    }
}
yc.prototype.isHemisphereLightProbe = !0;
class xc extends nc {
    constructor(t, e=1) {
        super(void 0, e);
        const n = (new tn).set(t);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
}
xc.prototype.isAmbientLightProbe = !0;
const _c = new se
  , wc = new se;
class bc {
    constructor(t=!0) {
        this.autoStart = t,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    start() {
        this.startTime = Mc(),
        this.oldTime = this.startTime,
        this.elapsedTime = 0,
        this.running = !0
    }
    stop() {
        this.getElapsedTime(),
        this.running = !1,
        this.autoStart = !1
    }
    getElapsedTime() {
        return this.getDelta(),
        this.elapsedTime
    }
    getDelta() {
        let t = 0;
        if (this.autoStart && !this.running)
            return this.start(),
            0;
        if (this.running) {
            const e = Mc();
            t = (e - this.oldTime) / 1e3,
            this.oldTime = e,
            this.elapsedTime += t
        }
        return t
    }
}
function Mc() {
    return ("undefined" == typeof performance ? Date : performance).now()
}
const Sc = new Lt
  , Tc = new At
  , Ec = new Lt
  , Ac = new Lt;
class Lc extends Ce {
    constructor(t) {
        super(),
        this.type = "Audio",
        this.listener = t,
        this.context = t.context,
        this.gain = this.context.createGain(),
        this.gain.connect(t.getInput()),
        this.autoplay = !1,
        this.buffer = null,
        this.detune = 0,
        this.loop = !1,
        this.loopStart = 0,
        this.loopEnd = 0,
        this.offset = 0,
        this.duration = void 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.source = null,
        this.sourceType = "empty",
        this._startedAt = 0,
        this._progress = 0,
        this._connected = !1,
        this.filters = []
    }
    getOutput() {
        return this.gain
    }
    setNodeSource(t) {
        return this.hasPlaybackControl = !1,
        this.sourceType = "audioNode",
        this.source = t,
        this.connect(),
        this
    }
    setMediaElementSource(t) {
        return this.hasPlaybackControl = !1,
        this.sourceType = "mediaNode",
        this.source = this.context.createMediaElementSource(t),
        this.connect(),
        this
    }
    setMediaStreamSource(t) {
        return this.hasPlaybackControl = !1,
        this.sourceType = "mediaStreamNode",
        this.source = this.context.createMediaStreamSource(t),
        this.connect(),
        this
    }
    setBuffer(t) {
        return this.buffer = t,
        this.sourceType = "buffer",
        this.autoplay && this.play(),
        this
    }
    play(t=0) {
        if (!0 === this.isPlaying)
            return void console.warn("THREE.Audio: Audio is already playing.");
        if (!1 === this.hasPlaybackControl)
            return void console.warn("THREE.Audio: this Audio has no playback control.");
        this._startedAt = this.context.currentTime + t;
        const e = this.context.createBufferSource();
        return e.buffer = this.buffer,
        e.loop = this.loop,
        e.loopStart = this.loopStart,
        e.loopEnd = this.loopEnd,
        e.onended = this.onEnded.bind(this),
        e.start(this._startedAt, this._progress + this.offset, this.duration),
        this.isPlaying = !0,
        this.source = e,
        this.setDetune(this.detune),
        this.setPlaybackRate(this.playbackRate),
        this.connect()
    }
    pause() {
        if (!1 !== this.hasPlaybackControl)
            return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate,
            !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)),
            this.source.stop(),
            this.source.onended = null,
            this.isPlaying = !1),
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    }
    stop() {
        if (!1 !== this.hasPlaybackControl)
            return this._progress = 0,
            this.source.stop(),
            this.source.onended = null,
            this.isPlaying = !1,
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    }
    connect() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++)
                this.filters[t - 1].connect(this.filters[t]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else
            this.source.connect(this.getOutput());
        return this._connected = !0,
        this
    }
    disconnect() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++)
                this.filters[t - 1].disconnect(this.filters[t]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else
            this.source.disconnect(this.getOutput());
        return this._connected = !1,
        this
    }
    getFilters() {
        return this.filters
    }
    setFilters(t) {
        return t || (t = []),
        !0 === this._connected ? (this.disconnect(),
        this.filters = t.slice(),
        this.connect()) : this.filters = t.slice(),
        this
    }
    setDetune(t) {
        if (this.detune = t,
        void 0 !== this.source.detune)
            return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01),
            this
    }
    getDetune() {
        return this.detune
    }
    getFilter() {
        return this.getFilters()[0]
    }
    setFilter(t) {
        return this.setFilters(t ? [t] : [])
    }
    setPlaybackRate(t) {
        if (!1 !== this.hasPlaybackControl)
            return this.playbackRate = t,
            !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01),
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    }
    getPlaybackRate() {
        return this.playbackRate
    }
    onEnded() {
        this.isPlaying = !1
    }
    getLoop() {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
        !1) : this.loop
    }
    setLoop(t) {
        if (!1 !== this.hasPlaybackControl)
            return this.loop = t,
            !0 === this.isPlaying && (this.source.loop = this.loop),
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    }
    setLoopStart(t) {
        return this.loopStart = t,
        this
    }
    setLoopEnd(t) {
        return this.loopEnd = t,
        this
    }
    getVolume() {
        return this.gain.gain.value
    }
    setVolume(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
        this
    }
}
const Rc = new Lt
  , Cc = new At
  , Pc = new Lt
  , Dc = new Lt;
class Ic {
    constructor(t, e=2048) {
        this.analyser = t.context.createAnalyser(),
        this.analyser.fftSize = e,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        t.getOutput().connect(this.analyser)
    }
    getFrequencyData() {
        return this.analyser.getByteFrequencyData(this.data),
        this.data
    }
    getAverageFrequency() {
        let t = 0;
        const e = this.getFrequencyData();
        for (let n = 0; n < e.length; n++)
            t += e[n];
        return t / e.length
    }
}
class Nc {
    constructor(t, e, n) {
        let i, r, s;
        switch (this.binding = t,
        this.valueSize = n,
        e) {
        case "quaternion":
            i = this._slerp,
            r = this._slerpAdditive,
            s = this._setAdditiveIdentityQuaternion,
            this.buffer = new Float64Array(6 * n),
            this._workIndex = 5;
            break;
        case "string":
        case "bool":
            i = this._select,
            r = this._select,
            s = this._setAdditiveIdentityOther,
            this.buffer = new Array(5 * n);
            break;
        default:
            i = this._lerp,
            r = this._lerpAdditive,
            s = this._setAdditiveIdentityNumeric,
            this.buffer = new Float64Array(5 * n)
        }
        this._mixBufferRegion = i,
        this._mixBufferRegionAdditive = r,
        this._setIdentity = s,
        this._origIndex = 3,
        this._addIndex = 4,
        this.cumulativeWeight = 0,
        this.cumulativeWeightAdditive = 0,
        this.useCount = 0,
        this.referenceCount = 0
    }
    accumulate(t, e) {
        const n = this.buffer
          , i = this.valueSize
          , r = t * i + i;
        let s = this.cumulativeWeight;
        if (0 === s) {
            for (let t = 0; t !== i; ++t)
                n[r + t] = n[t];
            s = e
        } else {
            s += e;
            const t = e / s;
            this._mixBufferRegion(n, r, 0, t, i)
        }
        this.cumulativeWeight = s
    }
    accumulateAdditive(t) {
        const e = this.buffer
          , n = this.valueSize
          , i = n * this._addIndex;
        0 === this.cumulativeWeightAdditive && this._setIdentity(),
        this._mixBufferRegionAdditive(e, i, 0, t, n),
        this.cumulativeWeightAdditive += t
    }
    apply(t) {
        const e = this.valueSize
          , n = this.buffer
          , i = t * e + e
          , r = this.cumulativeWeight
          , s = this.cumulativeWeightAdditive
          , a = this.binding;
        if (this.cumulativeWeight = 0,
        this.cumulativeWeightAdditive = 0,
        r < 1) {
            const t = e * this._origIndex;
            this._mixBufferRegion(n, i, t, 1 - r, e)
        }
        s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
        for (let t = e, r = e + e; t !== r; ++t)
            if (n[t] !== n[t + e]) {
                a.setValue(n, i);
                break
            }
    }
    saveOriginalState() {
        const t = this.binding
          , e = this.buffer
          , n = this.valueSize
          , i = n * this._origIndex;
        t.getValue(e, i);
        for (let t = n, r = i; t !== r; ++t)
            e[t] = e[i + t % n];
        this._setIdentity(),
        this.cumulativeWeight = 0,
        this.cumulativeWeightAdditive = 0
    }
    restoreOriginalState() {
        const t = 3 * this.valueSize;
        this.binding.setValue(this.buffer, t)
    }
    _setAdditiveIdentityNumeric() {
        const t = this._addIndex * this.valueSize
          , e = t + this.valueSize;
        for (let n = t; n < e; n++)
            this.buffer[n] = 0
    }
    _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(),
        this.buffer[this._addIndex * this.valueSize + 3] = 1
    }
    _setAdditiveIdentityOther() {
        const t = this._origIndex * this.valueSize
          , e = this._addIndex * this.valueSize;
        for (let n = 0; n < this.valueSize; n++)
            this.buffer[e + n] = this.buffer[t + n]
    }
    _select(t, e, n, i, r) {
        if (i >= .5)
            for (let i = 0; i !== r; ++i)
                t[e + i] = t[n + i]
    }
    _slerp(t, e, n, i) {
        At.slerpFlat(t, e, t, e, t, n, i)
    }
    _slerpAdditive(t, e, n, i, r) {
        const s = this._workIndex * r;
        At.multiplyQuaternionsFlat(t, s, t, e, t, n),
        At.slerpFlat(t, e, t, e, t, s, i)
    }
    _lerp(t, e, n, i, r) {
        const s = 1 - i;
        for (let a = 0; a !== r; ++a) {
            const r = e + a;
            t[r] = t[r] * s + t[n + a] * i
        }
    }
    _lerpAdditive(t, e, n, i, r) {
        for (let s = 0; s !== r; ++s) {
            const r = e + s;
            t[r] = t[r] + t[n + s] * i
        }
    }
}
const Bc = "\\[\\]\\.:\\/"
  , zc = new RegExp("[\\[\\]\\.:\\/]","g")
  , Fc = "[^\\[\\]\\.:\\/]"
  , Oc = "[^" + Bc.replace("\\.", "") + "]"
  , Hc = /((?:WC+[\/:])*)/.source.replace("WC", Fc)
  , Gc = /(WCOD+)?/.source.replace("WCOD", Oc)
  , Uc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Fc)
  , kc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Fc)
  , Vc = new RegExp("^" + Hc + Gc + Uc + kc + "$")
  , Wc = ["material", "materials", "bones"];
class jc {
    constructor(t, e, n) {
        this.path = e,
        this.parsedPath = n || jc.parseTrackName(e),
        this.node = jc.findNode(t, this.parsedPath.nodeName) || t,
        this.rootNode = t,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(t, e, n) {
        return t && t.isAnimationObjectGroup ? new jc.Composite(t,e,n) : new jc(t,e,n)
    }
    static sanitizeNodeName(t) {
        return t.replace(/\s/g, "_").replace(zc, "")
    }
    static parseTrackName(t) {
        const e = Vc.exec(t);
        if (!e)
            throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        const n = {
            nodeName: e[2],
            objectName: e[3],
            objectIndex: e[4],
            propertyName: e[5],
            propertyIndex: e[6]
        }
          , i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1);
            -1 !== Wc.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i),
            n.objectName = t)
        }
        if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        return n
    }
    static findNode(t, e) {
        if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid)
            return t;
        if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n)
                return n
        }
        if (t.children) {
            const n = function(t) {
                for (let i = 0; i < t.length; i++) {
                    const r = t[i];
                    if (r.name === e || r.uuid === e)
                        return r;
                    const s = n(r.children);
                    if (s)
                        return s
                }
                return null
            }
              , i = n(t.children);
            if (i)
                return i
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
        t[e] = this.node[this.propertyName]
    }
    _getValue_array(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            t[e++] = n[i]
    }
    _getValue_arrayElement(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(t, e) {
        this.resolvedProperty.toArray(t, e)
    }
    _setValue_direct(t, e) {
        this.targetObject[this.propertyName] = t[e]
    }
    _setValue_direct_setNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            n[i] = t[e++]
    }
    _setValue_array_setNeedsUpdate(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            n[i] = t[e++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            n[i] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e]
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(t, e) {
        this.resolvedProperty.fromArray(t, e)
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(t, e) {
        this.bind(),
        this.getValue(t, e)
    }
    _setValue_unbound(t, e) {
        this.bind(),
        this.setValue(t, e)
    }
    bind() {
        let t = this.node;
        const e = this.parsedPath
          , n = e.objectName
          , i = e.propertyName;
        let r = e.propertyIndex;
        if (t || (t = jc.findNode(this.rootNode, e.nodeName) || this.rootNode,
        this.node = t),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !t)
            return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        if (n) {
            let i = e.objectIndex;
            switch (n) {
            case "materials":
                if (!t.material)
                    return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!t.material.materials)
                    return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                t = t.material.materials;
                break;
            case "bones":
                if (!t.skeleton)
                    return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                t = t.skeleton.bones;
                for (let e = 0; e < t.length; e++)
                    if (t[e].name === i) {
                        i = e;
                        break
                    }
                break;
            default:
                if (void 0 === t[n])
                    return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                t = t[n]
            }
            if (void 0 !== i) {
                if (void 0 === t[i])
                    return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                t = t[i]
            }
        }
        const s = t[i];
        if (void 0 === s) {
            const n = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
        }
        let a = this.Versioning.None;
        this.targetObject = t,
        void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
        let o = this.BindingType.Direct;
        if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
                if (!t.geometry)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!t.geometry.isBufferGeometry)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                if (!t.geometry.morphAttributes)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
            }
            o = this.BindingType.ArrayElement,
            this.resolvedProperty = s,
            this.propertyIndex = r
        } else
            void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray,
            this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray,
            this.resolvedProperty = s) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[o],
        this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
jc.Composite = class {
    constructor(t, e, n) {
        const i = n || jc.parseTrackName(e);
        this._targetGroup = t,
        this._bindings = t.subscribe_(e, i)
    }
    getValue(t, e) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_
          , i = this._bindings[n];
        void 0 !== i && i.getValue(t, e)
    }
    setValue(t, e) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
            n[i].setValue(t, e)
    }
    bind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
            t[e].bind()
    }
    unbind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
            t[e].unbind()
    }
}
,
jc.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
},
jc.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
},
jc.prototype.GetterByBindingType = [jc.prototype._getValue_direct, jc.prototype._getValue_array, jc.prototype._getValue_arrayElement, jc.prototype._getValue_toArray],
jc.prototype.SetterByBindingTypeAndVersioning = [[jc.prototype._setValue_direct, jc.prototype._setValue_direct_setNeedsUpdate, jc.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [jc.prototype._setValue_array, jc.prototype._setValue_array_setNeedsUpdate, jc.prototype._setValue_array_setMatrixWorldNeedsUpdate], [jc.prototype._setValue_arrayElement, jc.prototype._setValue_arrayElement_setNeedsUpdate, jc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [jc.prototype._setValue_fromArray, jc.prototype._setValue_fromArray_setNeedsUpdate, jc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class qc {
    constructor() {
        this.uuid = ct(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        const t = {};
        this._indicesByUUID = t;
        for (let e = 0, n = arguments.length; e !== n; ++e)
            t[arguments[e].uuid] = e;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        const e = this;
        this.stats = {
            objects: {
                get total() {
                    return e._objects.length
                },
                get inUse() {
                    return this.total - e.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return e._bindings.length
            }
        }
    }
    add() {
        const t = this._objects
          , e = this._indicesByUUID
          , n = this._paths
          , i = this._parsedPaths
          , r = this._bindings
          , s = r.length;
        let a, o = t.length, l = this.nCachedObjects_;
        for (let c = 0, h = arguments.length; c !== h; ++c) {
            const h = arguments[c]
              , u = h.uuid;
            let d = e[u];
            if (void 0 === d) {
                d = o++,
                e[u] = d,
                t.push(h);
                for (let t = 0, e = s; t !== e; ++t)
                    r[t].push(new jc(h,n[t],i[t]))
            } else if (d < l) {
                a = t[d];
                const o = --l
                  , c = t[o];
                e[c.uuid] = d,
                t[d] = c,
                e[u] = o,
                t[o] = h;
                for (let t = 0, e = s; t !== e; ++t) {
                    const e = r[t]
                      , s = e[o];
                    let a = e[d];
                    e[d] = s,
                    void 0 === a && (a = new jc(h,n[t],i[t])),
                    e[o] = a
                }
            } else
                t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
        }
        this.nCachedObjects_ = l
    }
    remove() {
        const t = this._objects
          , e = this._indicesByUUID
          , n = this._bindings
          , i = n.length;
        let r = this.nCachedObjects_;
        for (let s = 0, a = arguments.length; s !== a; ++s) {
            const a = arguments[s]
              , o = a.uuid
              , l = e[o];
            if (void 0 !== l && l >= r) {
                const s = r++
                  , c = t[s];
                e[c.uuid] = l,
                t[l] = c,
                e[o] = s,
                t[s] = a;
                for (let t = 0, e = i; t !== e; ++t) {
                    const e = n[t]
                      , i = e[s]
                      , r = e[l];
                    e[l] = i,
                    e[s] = r
                }
            }
        }
        this.nCachedObjects_ = r
    }
    uncache() {
        const t = this._objects
          , e = this._indicesByUUID
          , n = this._bindings
          , i = n.length;
        let r = this.nCachedObjects_
          , s = t.length;
        for (let a = 0, o = arguments.length; a !== o; ++a) {
            const o = arguments[a].uuid
              , l = e[o];
            if (void 0 !== l)
                if (delete e[o],
                l < r) {
                    const a = --r
                      , o = t[a]
                      , c = --s
                      , h = t[c];
                    e[o.uuid] = l,
                    t[l] = o,
                    e[h.uuid] = a,
                    t[a] = h,
                    t.pop();
                    for (let t = 0, e = i; t !== e; ++t) {
                        const e = n[t]
                          , i = e[a]
                          , r = e[c];
                        e[l] = i,
                        e[a] = r,
                        e.pop()
                    }
                } else {
                    const r = --s
                      , a = t[r];
                    r > 0 && (e[a.uuid] = l),
                    t[l] = a,
                    t.pop();
                    for (let t = 0, e = i; t !== e; ++t) {
                        const e = n[t];
                        e[l] = e[r],
                        e.pop()
                    }
                }
        }
        this.nCachedObjects_ = r
    }
    subscribe_(t, e) {
        const n = this._bindingsIndicesByPath;
        let i = n[t];
        const r = this._bindings;
        if (void 0 !== i)
            return r[i];
        const s = this._paths
          , a = this._parsedPaths
          , o = this._objects
          , l = o.length
          , c = this.nCachedObjects_
          , h = new Array(l);
        i = r.length,
        n[t] = i,
        s.push(t),
        a.push(e),
        r.push(h);
        for (let n = c, i = o.length; n !== i; ++n) {
            const i = o[n];
            h[n] = new jc(i,t,e)
        }
        return h
    }
    unsubscribe_(t) {
        const e = this._bindingsIndicesByPath
          , n = e[t];
        if (void 0 !== n) {
            const i = this._paths
              , r = this._parsedPaths
              , s = this._bindings
              , a = s.length - 1
              , o = s[a];
            e[t[a]] = n,
            s[n] = o,
            s.pop(),
            r[n] = r[a],
            r.pop(),
            i[n] = i[a],
            i.pop()
        }
    }
}
qc.prototype.isAnimationObjectGroup = !0;
class Xc {
    constructor(t, e, n=null, i=e.blendMode) {
        this._mixer = t,
        this._clip = e,
        this._localRoot = n,
        this.blendMode = i;
        const r = e.tracks
          , s = r.length
          , a = new Array(s)
          , o = {
            endingStart: k,
            endingEnd: k
        };
        for (let t = 0; t !== s; ++t) {
            const e = r[t].createInterpolant(null);
            a[t] = e,
            e.settings = o
        }
        this._interpolantSettings = o,
        this._interpolants = a,
        this._propertyBindings = new Array(s),
        this._cacheIndex = null,
        this._byClipCacheIndex = null,
        this._timeScaleInterpolant = null,
        this._weightInterpolant = null,
        this.loop = 2201,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this.timeScale = 1,
        this._effectiveTimeScale = 1,
        this.weight = 1,
        this._effectiveWeight = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtStart = !0,
        this.zeroSlopeAtEnd = !0
    }
    play() {
        return this._mixer._activateAction(this),
        this
    }
    stop() {
        return this._mixer._deactivateAction(this),
        this.reset()
    }
    reset() {
        return this.paused = !1,
        this.enabled = !0,
        this.time = 0,
        this._loopCount = -1,
        this._startTime = null,
        this.stopFading().stopWarping()
    }
    isRunning() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    }
    isScheduled() {
        return this._mixer._isActiveAction(this)
    }
    startAt(t) {
        return this._startTime = t,
        this
    }
    setLoop(t, e) {
        return this.loop = t,
        this.repetitions = e,
        this
    }
    setEffectiveWeight(t) {
        return this.weight = t,
        this._effectiveWeight = this.enabled ? t : 0,
        this.stopFading()
    }
    getEffectiveWeight() {
        return this._effectiveWeight
    }
    fadeIn(t) {
        return this._scheduleFading(t, 0, 1)
    }
    fadeOut(t) {
        return this._scheduleFading(t, 1, 0)
    }
    crossFadeFrom(t, e, n) {
        if (t.fadeOut(e),
        this.fadeIn(e),
        n) {
            const n = this._clip.duration
              , i = t._clip.duration
              , r = i / n
              , s = n / i;
            t.warp(1, r, e),
            this.warp(s, 1, e)
        }
        return this
    }
    crossFadeTo(t, e, n) {
        return t.crossFadeFrom(this, e, n)
    }
    stopFading() {
        const t = this._weightInterpolant;
        return null !== t && (this._weightInterpolant = null,
        this._mixer._takeBackControlInterpolant(t)),
        this
    }
    setEffectiveTimeScale(t) {
        return this.timeScale = t,
        this._effectiveTimeScale = this.paused ? 0 : t,
        this.stopWarping()
    }
    getEffectiveTimeScale() {
        return this._effectiveTimeScale
    }
    setDuration(t) {
        return this.timeScale = this._clip.duration / t,
        this.stopWarping()
    }
    syncWith(t) {
        return this.time = t.time,
        this.timeScale = t.timeScale,
        this.stopWarping()
    }
    halt(t) {
        return this.warp(this._effectiveTimeScale, 0, t)
    }
    warp(t, e, n) {
        const i = this._mixer
          , r = i.time
          , s = this.timeScale;
        let a = this._timeScaleInterpolant;
        null === a && (a = i._lendControlInterpolant(),
        this._timeScaleInterpolant = a);
        const o = a.parameterPositions
          , l = a.sampleValues;
        return o[0] = r,
        o[1] = r + n,
        l[0] = t / s,
        l[1] = e / s,
        this
    }
    stopWarping() {
        const t = this._timeScaleInterpolant;
        return null !== t && (this._timeScaleInterpolant = null,
        this._mixer._takeBackControlInterpolant(t)),
        this
    }
    getMixer() {
        return this._mixer
    }
    getClip() {
        return this._clip
    }
    getRoot() {
        return this._localRoot || this._mixer._root
    }
    _update(t, e, n, i) {
        if (!this.enabled)
            return void this._updateWeight(t);
        const r = this._startTime;
        if (null !== r) {
            const i = (t - r) * n;
            if (i < 0 || 0 === n)
                return;
            this._startTime = null,
            e = n * i
        }
        e *= this._updateTimeScale(t);
        const s = this._updateTime(e)
          , a = this._updateWeight(t);
        if (a > 0) {
            const t = this._interpolants
              , e = this._propertyBindings;
            switch (this.blendMode) {
            case q:
                for (let n = 0, i = t.length; n !== i; ++n)
                    t[n].evaluate(s),
                    e[n].accumulateAdditive(a);
                break;
            case j:
            default:
                for (let n = 0, r = t.length; n !== r; ++n)
                    t[n].evaluate(s),
                    e[n].accumulate(i, a)
            }
        }
    }
    _updateWeight(t) {
        let e = 0;
        if (this.enabled) {
            e = this.weight;
            const n = this._weightInterpolant;
            if (null !== n) {
                const i = n.evaluate(t)[0];
                e *= i,
                t > n.parameterPositions[1] && (this.stopFading(),
                0 === i && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = e,
        e
    }
    _updateTimeScale(t) {
        let e = 0;
        if (!this.paused) {
            e = this.timeScale;
            const n = this._timeScaleInterpolant;
            if (null !== n) {
                e *= n.evaluate(t)[0],
                t > n.parameterPositions[1] && (this.stopWarping(),
                0 === e ? this.paused = !0 : this.timeScale = e)
            }
        }
        return this._effectiveTimeScale = e,
        e
    }
    _updateTime(t) {
        const e = this._clip.duration
          , n = this.loop;
        let i = this.time + t
          , r = this._loopCount;
        const s = 2202 === n;
        if (0 === t)
            return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
        if (2200 === n) {
            -1 === r && (this._loopCount = 0,
            this._setEndings(!0, !0, !1));
            t: {
                if (i >= e)
                    i = e;
                else {
                    if (!(i < 0)) {
                        this.time = i;
                        break t
                    }
                    i = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this.time = i,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: t < 0 ? -1 : 1
                })
            }
        } else {
            if (-1 === r && (t >= 0 ? (r = 0,
            this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)),
            i >= e || i < 0) {
                const n = Math.floor(i / e);
                i -= e * n,
                r += Math.abs(n);
                const a = this.repetitions - r;
                if (a <= 0)
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    i = t > 0 ? e : 0,
                    this.time = i,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                else {
                    if (1 === a) {
                        const e = t < 0;
                        this._setEndings(e, !e, s)
                    } else
                        this._setEndings(!1, !1, s);
                    this._loopCount = r,
                    this.time = i,
                    this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: n
                    })
                }
            } else
                this.time = i;
            if (s && 1 == (1 & r))
                return e - i
        }
        return i
    }
    _setEndings(t, e, n) {
        const i = this._interpolantSettings;
        n ? (i.endingStart = V,
        i.endingEnd = V) : (i.endingStart = t ? this.zeroSlopeAtStart ? V : k : W,
        i.endingEnd = e ? this.zeroSlopeAtEnd ? V : k : W)
    }
    _scheduleFading(t, e, n) {
        const i = this._mixer
          , r = i.time;
        let s = this._weightInterpolant;
        null === s && (s = i._lendControlInterpolant(),
        this._weightInterpolant = s);
        const a = s.parameterPositions
          , o = s.sampleValues;
        return a[0] = r,
        o[0] = e,
        a[1] = r + t,
        o[1] = n,
        this
    }
}
class Yc extends rt {
    constructor(t) {
        super(),
        this._root = t,
        this._initMemoryManager(),
        this._accuIndex = 0,
        this.time = 0,
        this.timeScale = 1
    }
    _bindAction(t, e) {
        const n = t._localRoot || this._root
          , i = t._clip.tracks
          , r = i.length
          , s = t._propertyBindings
          , a = t._interpolants
          , o = n.uuid
          , l = this._bindingsByRootAndName;
        let c = l[o];
        void 0 === c && (c = {},
        l[o] = c);
        for (let t = 0; t !== r; ++t) {
            const r = i[t]
              , l = r.name;
            let h = c[l];
            if (void 0 !== h)
                s[t] = h;
            else {
                if (h = s[t],
                void 0 !== h) {
                    null === h._cacheIndex && (++h.referenceCount,
                    this._addInactiveBinding(h, o, l));
                    continue
                }
                const i = e && e._propertyBindings[t].binding.parsedPath;
                h = new Nc(jc.create(n, l, i),r.ValueTypeName,r.getValueSize()),
                ++h.referenceCount,
                this._addInactiveBinding(h, o, l),
                s[t] = h
            }
            a[t].resultBuffer = h.buffer
        }
    }
    _activateAction(t) {
        if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
                const e = (t._localRoot || this._root).uuid
                  , n = t._clip.uuid
                  , i = this._actionsByClip[n];
                this._bindAction(t, i && i.knownActions[0]),
                this._addInactiveAction(t, n, e)
            }
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
                const n = e[t];
                0 == n.useCount++ && (this._lendBinding(n),
                n.saveOriginalState())
            }
            this._lendAction(t)
        }
    }
    _deactivateAction(t) {
        if (this._isActiveAction(t)) {
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
                const n = e[t];
                0 == --n.useCount && (n.restoreOriginalState(),
                this._takeBackBinding(n))
            }
            this._takeBackAction(t)
        }
    }
    _initMemoryManager() {
        this._actions = [],
        this._nActiveActions = 0,
        this._actionsByClip = {},
        this._bindings = [],
        this._nActiveBindings = 0,
        this._bindingsByRootAndName = {},
        this._controlInterpolants = [],
        this._nActiveControlInterpolants = 0;
        const t = this;
        this.stats = {
            actions: {
                get total() {
                    return t._actions.length
                },
                get inUse() {
                    return t._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return t._bindings.length
                },
                get inUse() {
                    return t._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return t._controlInterpolants.length
                },
                get inUse() {
                    return t._nActiveControlInterpolants
                }
            }
        }
    }
    _isActiveAction(t) {
        const e = t._cacheIndex;
        return null !== e && e < this._nActiveActions
    }
    _addInactiveAction(t, e, n) {
        const i = this._actions
          , r = this._actionsByClip;
        let s = r[e];
        if (void 0 === s)
            s = {
                knownActions: [t],
                actionByRoot: {}
            },
            t._byClipCacheIndex = 0,
            r[e] = s;
        else {
            const e = s.knownActions;
            t._byClipCacheIndex = e.length,
            e.push(t)
        }
        t._cacheIndex = i.length,
        i.push(t),
        s.actionByRoot[n] = t
    }
    _removeInactiveAction(t) {
        const e = this._actions
          , n = e[e.length - 1]
          , i = t._cacheIndex;
        n._cacheIndex = i,
        e[i] = n,
        e.pop(),
        t._cacheIndex = null;
        const r = t._clip.uuid
          , s = this._actionsByClip
          , a = s[r]
          , o = a.knownActions
          , l = o[o.length - 1]
          , c = t._byClipCacheIndex;
        l._byClipCacheIndex = c,
        o[c] = l,
        o.pop(),
        t._byClipCacheIndex = null;
        delete a.actionByRoot[(t._localRoot || this._root).uuid],
        0 === o.length && delete s[r],
        this._removeInactiveBindingsForAction(t)
    }
    _removeInactiveBindingsForAction(t) {
        const e = t._propertyBindings;
        for (let t = 0, n = e.length; t !== n; ++t) {
            const n = e[t];
            0 == --n.referenceCount && this._removeInactiveBinding(n)
        }
    }
    _lendAction(t) {
        const e = this._actions
          , n = t._cacheIndex
          , i = this._nActiveActions++
          , r = e[i];
        t._cacheIndex = i,
        e[i] = t,
        r._cacheIndex = n,
        e[n] = r
    }
    _takeBackAction(t) {
        const e = this._actions
          , n = t._cacheIndex
          , i = --this._nActiveActions
          , r = e[i];
        t._cacheIndex = i,
        e[i] = t,
        r._cacheIndex = n,
        e[n] = r
    }
    _addInactiveBinding(t, e, n) {
        const i = this._bindingsByRootAndName
          , r = this._bindings;
        let s = i[e];
        void 0 === s && (s = {},
        i[e] = s),
        s[n] = t,
        t._cacheIndex = r.length,
        r.push(t)
    }
    _removeInactiveBinding(t) {
        const e = this._bindings
          , n = t.binding
          , i = n.rootNode.uuid
          , r = n.path
          , s = this._bindingsByRootAndName
          , a = s[i]
          , o = e[e.length - 1]
          , l = t._cacheIndex;
        o._cacheIndex = l,
        e[l] = o,
        e.pop(),
        delete a[r],
        0 === Object.keys(a).length && delete s[i]
    }
    _lendBinding(t) {
        const e = this._bindings
          , n = t._cacheIndex
          , i = this._nActiveBindings++
          , r = e[i];
        t._cacheIndex = i,
        e[i] = t,
        r._cacheIndex = n,
        e[n] = r
    }
    _takeBackBinding(t) {
        const e = this._bindings
          , n = t._cacheIndex
          , i = --this._nActiveBindings
          , r = e[i];
        t._cacheIndex = i,
        e[i] = t,
        r._cacheIndex = n,
        e[n] = r
    }
    _lendControlInterpolant() {
        const t = this._controlInterpolants
          , e = this._nActiveControlInterpolants++;
        let n = t[e];
        return void 0 === n && (n = new qo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
        n.__cacheIndex = e,
        t[e] = n),
        n
    }
    _takeBackControlInterpolant(t) {
        const e = this._controlInterpolants
          , n = t.__cacheIndex
          , i = --this._nActiveControlInterpolants
          , r = e[i];
        t.__cacheIndex = i,
        e[i] = t,
        r.__cacheIndex = n,
        e[n] = r
    }
    clipAction(t, e, n) {
        const i = e || this._root
          , r = i.uuid;
        let s = "string" == typeof t ? nl.findByName(i, t) : t;
        const a = null !== s ? s.uuid : t
          , o = this._actionsByClip[a];
        let l = null;
        if (void 0 === n && (n = null !== s ? s.blendMode : j),
        void 0 !== o) {
            const t = o.actionByRoot[r];
            if (void 0 !== t && t.blendMode === n)
                return t;
            l = o.knownActions[0],
            null === s && (s = l._clip)
        }
        if (null === s)
            return null;
        const c = new Xc(this,s,e,n);
        return this._bindAction(c, l),
        this._addInactiveAction(c, a, r),
        c
    }
    existingAction(t, e) {
        const n = e || this._root
          , i = n.uuid
          , r = "string" == typeof t ? nl.findByName(n, t) : t
          , s = r ? r.uuid : t
          , a = this._actionsByClip[s];
        return void 0 !== a && a.actionByRoot[i] || null
    }
    stopAllAction() {
        const t = this._actions;
        for (let e = this._nActiveActions - 1; e >= 0; --e)
            t[e].stop();
        return this
    }
    update(t) {
        t *= this.timeScale;
        const e = this._actions
          , n = this._nActiveActions
          , i = this.time += t
          , r = Math.sign(t)
          , s = this._accuIndex ^= 1;
        for (let a = 0; a !== n; ++a) {
            e[a]._update(i, t, r, s)
        }
        const a = this._bindings
          , o = this._nActiveBindings;
        for (let t = 0; t !== o; ++t)
            a[t].apply(s);
        return this
    }
    setTime(t) {
        this.time = 0;
        for (let t = 0; t < this._actions.length; t++)
            this._actions[t].time = 0;
        return this.update(t)
    }
    getRoot() {
        return this._root
    }
    uncacheClip(t) {
        const e = this._actions
          , n = t.uuid
          , i = this._actionsByClip
          , r = i[n];
        if (void 0 !== r) {
            const t = r.knownActions;
            for (let n = 0, i = t.length; n !== i; ++n) {
                const i = t[n];
                this._deactivateAction(i);
                const r = i._cacheIndex
                  , s = e[e.length - 1];
                i._cacheIndex = null,
                i._byClipCacheIndex = null,
                s._cacheIndex = r,
                e[r] = s,
                e.pop(),
                this._removeInactiveBindingsForAction(i)
            }
            delete i[n]
        }
    }
    uncacheRoot(t) {
        const e = t.uuid
          , n = this._actionsByClip;
        for (const t in n) {
            const i = n[t].actionByRoot[e];
            void 0 !== i && (this._deactivateAction(i),
            this._removeInactiveAction(i))
        }
        const i = this._bindingsByRootAndName[e];
        if (void 0 !== i)
            for (const t in i) {
                const e = i[t];
                e.restoreOriginalState(),
                this._removeInactiveBinding(e)
            }
    }
    uncacheAction(t, e) {
        const n = this.existingAction(t, e);
        null !== n && (this._deactivateAction(n),
        this._removeInactiveAction(n))
    }
}
Yc.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Zc {
    constructor(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        t = arguments[1]),
        this.value = t
    }
    clone() {
        return new Zc(void 0 === this.value.clone ? this.value : this.value.clone())
    }
}
class Jc extends Es {
    constructor(t, e, n=1) {
        super(t, e),
        this.meshPerAttribute = n || 1
    }
    copy(t) {
        return super.copy(t),
        this.meshPerAttribute = t.meshPerAttribute,
        this
    }
    clone(t) {
        const e = super.clone(t);
        return e.meshPerAttribute = this.meshPerAttribute,
        e
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.isInstancedInterleavedBuffer = !0,
        e.meshPerAttribute = this.meshPerAttribute,
        e
    }
}
Jc.prototype.isInstancedInterleavedBuffer = !0;
class Qc {
    constructor(t, e, n, i, r) {
        this.buffer = t,
        this.type = e,
        this.itemSize = n,
        this.elementSize = i,
        this.count = r,
        this.version = 0
    }
    set needsUpdate(t) {
        !0 === t && this.version++
    }
    setBuffer(t) {
        return this.buffer = t,
        this
    }
    setType(t, e) {
        return this.type = t,
        this.elementSize = e,
        this
    }
    setItemSize(t) {
        return this.itemSize = t,
        this
    }
    setCount(t) {
        return this.count = t,
        this
    }
}
Qc.prototype.isGLBufferAttribute = !0;
function Kc(t, e) {
    return t.distance - e.distance
}
function $c(t, e, n, i) {
    if (t.layers.test(e.layers) && t.raycast(e, n),
    !0 === i) {
        const i = t.children;
        for (let t = 0, r = i.length; t < r; t++)
            $c(i[t], e, n, !0)
    }
}
const th = new vt;
class eh {
    constructor(t=new vt(1 / 0,1 / 0), e=new vt(-1 / 0,-1 / 0)) {
        this.min = t,
        this.max = e
    }
    set(t, e) {
        return this.min.copy(t),
        this.max.copy(e),
        this
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e++)
            this.expandByPoint(t[e]);
        return this
    }
    setFromCenterAndSize(t, e) {
        const n = th.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n),
        this.max.copy(t).add(n),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.min.copy(t.min),
        this.max.copy(t.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = 1 / 0,
        this.max.x = this.max.y = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }
    getCenter(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"),
        t = new vt),
        this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"),
        t = new vt),
        this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    }
    expandByPoint(t) {
        return this.min.min(t),
        this.max.max(t),
        this
    }
    expandByVector(t) {
        return this.min.sub(t),
        this.max.add(t),
        this
    }
    expandByScalar(t) {
        return this.min.addScalar(-t),
        this.max.addScalar(t),
        this
    }
    containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    }
    getParameter(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"),
        e = new vt),
        e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    }
    intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    }
    clampPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"),
        e = new vt),
        e.copy(t).clamp(this.min, this.max)
    }
    distanceToPoint(t) {
        return th.copy(t).clamp(this.min, this.max).sub(t).length()
    }
    intersect(t) {
        return this.min.max(t.min),
        this.max.min(t.max),
        this
    }
    union(t) {
        return this.min.min(t.min),
        this.max.max(t.max),
        this
    }
    translate(t) {
        return this.min.add(t),
        this.max.add(t),
        this
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
}
eh.prototype.isBox2 = !0;
const nh = new Lt
  , ih = new Lt;
class rh {
    constructor(t=new Lt, e=new Lt) {
        this.start = t,
        this.end = e
    }
    set(t, e) {
        return this.start.copy(t),
        this.end.copy(e),
        this
    }
    copy(t) {
        return this.start.copy(t.start),
        this.end.copy(t.end),
        this
    }
    getCenter(t) {
        return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"),
        t = new Lt),
        t.addVectors(this.start, this.end).multiplyScalar(.5)
    }
    delta(t) {
        return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"),
        t = new Lt),
        t.subVectors(this.end, this.start)
    }
    distanceSq() {
        return this.start.distanceToSquared(this.end)
    }
    distance() {
        return this.start.distanceTo(this.end)
    }
    at(t, e) {
        return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"),
        e = new Lt),
        this.delta(e).multiplyScalar(t).add(this.start)
    }
    closestPointToPointParameter(t, e) {
        nh.subVectors(t, this.start),
        ih.subVectors(this.end, this.start);
        const n = ih.dot(ih);
        let i = ih.dot(nh) / n;
        return e && (i = ht(i, 0, 1)),
        i
    }
    closestPointToPoint(t, e, n) {
        const i = this.closestPointToPointParameter(t, e);
        return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"),
        n = new Lt),
        this.delta(n).multiplyScalar(i).add(this.start)
    }
    applyMatrix4(t) {
        return this.start.applyMatrix4(t),
        this.end.applyMatrix4(t),
        this
    }
    equals(t) {
        return t.start.equals(this.start) && t.end.equals(this.end)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class sh extends Ce {
    constructor(t) {
        super(),
        this.material = t,
        this.render = function() {}
        ,
        this.hasPositions = !1,
        this.hasNormals = !1,
        this.hasColors = !1,
        this.hasUvs = !1,
        this.positionArray = null,
        this.normalArray = null,
        this.colorArray = null,
        this.uvArray = null,
        this.count = 0
    }
}
sh.prototype.isImmediateRenderObject = !0;
const ah = new Lt;
const oh = new Lt
  , lh = new se
  , ch = new se;
class hh extends ya {
    constructor(t) {
        const e = uh(t)
          , n = new En
          , i = []
          , r = []
          , s = new tn(0,0,1)
          , a = new tn(0,1,0);
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            n.parent && n.parent.isBone && (i.push(0, 0, 0),
            i.push(0, 0, 0),
            r.push(s.r, s.g, s.b),
            r.push(a.r, a.g, a.b))
        }
        n.setAttribute("position", new mn(i,3)),
        n.setAttribute("color", new mn(r,3));
        super(n, new ca({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        })),
        this.type = "SkeletonHelper",
        this.isSkeletonHelper = !0,
        this.root = t,
        this.bones = e,
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    updateMatrixWorld(t) {
        const e = this.bones
          , n = this.geometry
          , i = n.getAttribute("position");
        ch.copy(this.root.matrixWorld).invert();
        for (let t = 0, n = 0; t < e.length; t++) {
            const r = e[t];
            r.parent && r.parent.isBone && (lh.multiplyMatrices(ch, r.matrixWorld),
            oh.setFromMatrixPosition(lh),
            i.setXYZ(n, oh.x, oh.y, oh.z),
            lh.multiplyMatrices(ch, r.parent.matrixWorld),
            oh.setFromMatrixPosition(lh),
            i.setXYZ(n + 1, oh.x, oh.y, oh.z),
            n += 2)
        }
        n.getAttribute("position").needsUpdate = !0,
        super.updateMatrixWorld(t)
    }
}
function uh(t) {
    const e = [];
    t && t.isBone && e.push(t);
    for (let n = 0; n < t.children.length; n++)
        e.push.apply(e, uh(t.children[n]));
    return e
}
const dh = new Lt
  , ph = new tn
  , mh = new tn;
class fh extends ya {
    constructor(t=10, e=10, n=4473924, i=8947848) {
        n = new tn(n),
        i = new tn(i);
        const r = e / 2
          , s = t / e
          , a = t / 2
          , o = []
          , l = [];
        for (let t = 0, c = 0, h = -a; t <= e; t++,
        h += s) {
            o.push(-a, 0, h, a, 0, h),
            o.push(h, 0, -a, h, 0, a);
            const e = t === r ? n : i;
            e.toArray(l, c),
            c += 3,
            e.toArray(l, c),
            c += 3,
            e.toArray(l, c),
            c += 3,
            e.toArray(l, c),
            c += 3
        }
        const c = new En;
        c.setAttribute("position", new mn(o,3)),
        c.setAttribute("color", new mn(l,3));
        super(c, new ca({
            vertexColors: !0,
            toneMapped: !1
        })),
        this.type = "GridHelper"
    }
}
const gh = new Lt
  , vh = new Lt
  , yh = new Lt;
const xh = new Lt
  , _h = new Qn;
function wh(t, e, n, i, r, s, a) {
    xh.set(r, s, a).unproject(i);
    const o = e[t];
    if (void 0 !== o) {
        const t = n.getAttribute("position");
        for (let e = 0, n = o.length; e < n; e++)
            t.setXYZ(o[e], xh.x, xh.y, xh.z)
    }
}
const bh = new Pt;
class Mh extends ya {
    constructor(t, e=16776960) {
        const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , i = new Float32Array(24)
          , r = new En;
        r.setIndex(new sn(n,1)),
        r.setAttribute("position", new sn(i,3)),
        super(r, new ca({
            color: e,
            toneMapped: !1
        })),
        this.object = t,
        this.type = "BoxHelper",
        this.matrixAutoUpdate = !1,
        this.update()
    }
    update(t) {
        if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."),
        void 0 !== this.object && bh.setFromObject(this.object),
        bh.isEmpty())
            return;
        const e = bh.min
          , n = bh.max
          , i = this.geometry.attributes.position
          , r = i.array;
        r[0] = n.x,
        r[1] = n.y,
        r[2] = n.z,
        r[3] = e.x,
        r[4] = n.y,
        r[5] = n.z,
        r[6] = e.x,
        r[7] = e.y,
        r[8] = n.z,
        r[9] = n.x,
        r[10] = e.y,
        r[11] = n.z,
        r[12] = n.x,
        r[13] = n.y,
        r[14] = e.z,
        r[15] = e.x,
        r[16] = n.y,
        r[17] = e.z,
        r[18] = e.x,
        r[19] = e.y,
        r[20] = e.z,
        r[21] = n.x,
        r[22] = e.y,
        r[23] = e.z,
        i.needsUpdate = !0,
        this.geometry.computeBoundingSphere()
    }
    setFromObject(t) {
        return this.object = t,
        this.update(),
        this
    }
    copy(t) {
        return ya.prototype.copy.call(this, t),
        this.object = t.object,
        this
    }
}
const Sh = new Lt;
let Th, Eh;
class Ah extends ya {
    constructor(t=1) {
        const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]
          , n = new En;
        n.setAttribute("position", new mn(e,3)),
        n.setAttribute("color", new mn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],3));
        super(n, new ca({
            vertexColors: !0,
            toneMapped: !1
        })),
        this.type = "AxesHelper"
    }
    dispose() {
        this.geometry.dispose(),
        this.material.dispose()
    }
}
const Lh = new Float32Array(1)
  , Rh = new Int32Array(Lh.buffer);
const Ch = Math.pow(2, 8)
  , Ph = [.125, .215, .35, .446, .526, .582]
  , Dh = 5 + Ph.length
  , Ih = 20
  , Nh = {
    [X]: 0,
    [Y]: 1,
    [J]: 2,
    [Q]: 3,
    [K]: 4,
    [$]: 5,
    [Z]: 6
}
  , Bh = new en({
    side: 1,
    depthWrite: !1,
    depthTest: !1
})
  , zh = new Wn(new qn,Bh)
  , Fh = new Jl
  , {_lodPlanes: Oh, _sizeLods: Hh, _sigmas: Gh} = Yh()
  , Uh = new tn;
let kh = null;
const Vh = (1 + Math.sqrt(5)) / 2
  , Wh = 1 / Vh
  , jh = [new Lt(1,1,1), new Lt(-1,1,1), new Lt(1,1,-1), new Lt(-1,1,-1), new Lt(0,Vh,Wh), new Lt(0,Vh,-Wh), new Lt(Wh,0,Vh), new Lt(-Wh,0,Vh), new Lt(Vh,Wh,0), new Lt(-Vh,Wh,0)];
function qh(t) {
    const e = Math.max(t.r, t.g, t.b)
      , n = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
    t.multiplyScalar(Math.pow(2, -n));
    return (n + 128) / 255
}
function Xh(t) {
    return void 0 !== t && t.type === x && (t.encoding === X || t.encoding === Y || t.encoding === Z)
}
function Yh() {
    const t = []
      , e = []
      , n = [];
    let i = 8;
    for (let r = 0; r < Dh; r++) {
        const s = Math.pow(2, i);
        e.push(s);
        let a = 1 / s;
        r > 4 ? a = Ph[r - 8 + 4 - 1] : 0 == r && (a = 0),
        n.push(a);
        const o = 1 / (s - 1)
          , l = -o / 2
          , c = 1 + o / 2
          , h = [l, l, c, l, c, c, l, l, c, c, l, c]
          , u = 6
          , d = 6
          , p = 3
          , m = 2
          , f = 1
          , g = new Float32Array(p * d * u)
          , v = new Float32Array(m * d * u)
          , y = new Float32Array(f * d * u);
        for (let t = 0; t < u; t++) {
            const e = t % 3 * 2 / 3 - 1
              , n = t > 2 ? 0 : -1
              , i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
            g.set(i, p * d * t),
            v.set(h, m * d * t);
            const r = [t, t, t, t, t, t];
            y.set(r, f * d * t)
        }
        const x = new En;
        x.setAttribute("position", new sn(g,p)),
        x.setAttribute("uv", new sn(v,m)),
        x.setAttribute("faceIndex", new sn(y,f)),
        t.push(x),
        i > 4 && i--
    }
    return {
        _lodPlanes: t,
        _sizeLods: e,
        _sigmas: n
    }
}
function Zh(t) {
    const e = new Tt(3 * Ch,3 * Ch,t);
    return e.texture.mapping = l,
    e.texture.name = "PMREM.cubeUv",
    e.scissorTest = !0,
    e
}
function Jh(t, e, n, i, r) {
    t.viewport.set(e, n, i, r),
    t.scissor.set(e, n, i, r)
}
function Qh() {
    const t = new vt(1,1);
    return new Io({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            texelSize: {
                value: t
            },
            inputEncoding: {
                value: Nh[3e3]
            },
            outputEncoding: {
                value: Nh[3e3]
            }
        },
        vertexShader: $h(),
        fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t ${tu()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function Kh() {
    return new Io({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            inputEncoding: {
                value: Nh[3e3]
            },
            outputEncoding: {
                value: Nh[3e3]
            }
        },
        vertexShader: $h(),
        fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t ${tu()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function $h() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"
}
function tu() {
    return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t"
}
ml.create = function(t, e) {
    return console.log("THREE.Curve.create() has been deprecated"),
    t.prototype = Object.create(ml.prototype),
    t.prototype.constructor = t,
    t.prototype.getPoint = e,
    t
}
,
Bl.prototype.fromPoints = function(t) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),
    this.setFromPoints(t)
}
,
fh.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
}
,
hh.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
}
,
ol.prototype.extractUrlBase = function(t) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
    rc.extractUrlBase(t)
}
,
ol.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
},
eh.prototype.center = function(t) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
    this.getCenter(t)
}
,
eh.prototype.empty = function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
}
,
eh.prototype.isIntersectionBox = function(t) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
    this.intersectsBox(t)
}
,
eh.prototype.size = function(t) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
    this.getSize(t)
}
,
Pt.prototype.center = function(t) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
    this.getCenter(t)
}
,
Pt.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
}
,
Pt.prototype.isIntersectionBox = function(t) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
    this.intersectsBox(t)
}
,
Pt.prototype.isIntersectionSphere = function(t) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
    this.intersectsSphere(t)
}
,
Pt.prototype.size = function(t) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
    this.getSize(t)
}
,
Jt.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
}
,
ai.prototype.setFromMatrix = function(t) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),
    this.setFromProjectionMatrix(t)
}
,
rh.prototype.center = function(t) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
    this.getCenter(t)
}
,
yt.prototype.flattenToArrayOffset = function(t, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
    this.toArray(t, e)
}
,
yt.prototype.multiplyVector3 = function(t) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
    t.applyMatrix3(this)
}
,
yt.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
}
,
yt.prototype.applyToBufferAttribute = function(t) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),
    t.applyMatrix3(this)
}
,
yt.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
}
,
yt.prototype.getInverse = function(t) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
    this.copy(t).invert()
}
,
se.prototype.extractPosition = function(t) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
    this.copyPosition(t)
}
,
se.prototype.flattenToArrayOffset = function(t, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
    this.toArray(t, e)
}
,
se.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
    (new Lt).setFromMatrixColumn(this, 3)
}
,
se.prototype.setRotationFromQuaternion = function(t) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
    this.makeRotationFromQuaternion(t)
}
,
se.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
}
,
se.prototype.multiplyVector3 = function(t) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
    t.applyMatrix4(this)
}
,
se.prototype.multiplyVector4 = function(t) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
    t.applyMatrix4(this)
}
,
se.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
}
,
se.prototype.rotateAxis = function(t) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
    t.transformDirection(this)
}
,
se.prototype.crossVector = function(t) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
    t.applyMatrix4(this)
}
,
se.prototype.translate = function() {
    console.error("THREE.Matrix4: .translate() has been removed.")
}
,
se.prototype.rotateX = function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.")
}
,
se.prototype.rotateY = function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.")
}
,
se.prototype.rotateZ = function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.")
}
,
se.prototype.rotateByAxis = function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
}
,
se.prototype.applyToBufferAttribute = function(t) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),
    t.applyMatrix4(this)
}
,
se.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
}
,
se.prototype.makeFrustum = function(t, e, n, i, r, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
    this.makePerspective(t, e, i, n, r, s)
}
,
se.prototype.getInverse = function(t) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
    this.copy(t).invert()
}
,
Ne.prototype.isIntersectionLine = function(t) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
    this.intersectsLine(t)
}
,
At.prototype.multiplyVector3 = function(t) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
    t.applyQuaternion(this)
}
,
At.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
    this.invert()
}
,
re.prototype.isIntersectionBox = function(t) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
    this.intersectsBox(t)
}
,
re.prototype.isIntersectionPlane = function(t) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
    this.intersectsPlane(t)
}
,
re.prototype.isIntersectionSphere = function(t) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
    this.intersectsSphere(t)
}
,
je.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
    this.getArea()
}
,
je.prototype.barycoordFromPoint = function(t, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
    this.getBarycoord(t, e)
}
,
je.prototype.midpoint = function(t) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
    this.getMidpoint(t)
}
,
je.prototypenormal = function(t) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    this.getNormal(t)
}
,
je.prototype.plane = function(t) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
    this.getPlane(t)
}
,
je.barycoordFromPoint = function(t, e, n, i, r) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
    je.getBarycoord(t, e, n, i, r)
}
,
je.normal = function(t, e, n, i) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    je.getNormal(t, e, n, i)
}
,
zl.prototype.extractAllPoints = function(t) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
    this.extractPoints(t)
}
,
zl.prototype.extrude = function(t) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
    new go(this,t)
}
,
zl.prototype.makeGeometry = function(t) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
    new Mo(this,t)
}
,
vt.prototype.fromAttribute = function(t, e, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
    this.fromBufferAttribute(t, e, n)
}
,
vt.prototype.distanceToManhattan = function(t) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
    this.manhattanDistanceTo(t)
}
,
vt.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
    this.manhattanLength()
}
,
Lt.prototype.setEulerFromRotationMatrix = function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
}
,
Lt.prototype.setEulerFromQuaternion = function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
}
,
Lt.prototype.getPositionFromMatrix = function(t) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
    this.setFromMatrixPosition(t)
}
,
Lt.prototype.getScaleFromMatrix = function(t) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
    this.setFromMatrixScale(t)
}
,
Lt.prototype.getColumnFromMatrix = function(t, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
    this.setFromMatrixColumn(e, t)
}
,
Lt.prototype.applyProjection = function(t) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
    this.applyMatrix4(t)
}
,
Lt.prototype.fromAttribute = function(t, e, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
    this.fromBufferAttribute(t, e, n)
}
,
Lt.prototype.distanceToManhattan = function(t) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
    this.manhattanDistanceTo(t)
}
,
Lt.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
    this.manhattanLength()
}
,
St.prototype.fromAttribute = function(t, e, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
    this.fromBufferAttribute(t, e, n)
}
,
St.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
    this.manhattanLength()
}
,
Ce.prototype.getChildByName = function(t) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
    this.getObjectByName(t)
}
,
Ce.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
}
,
Ce.prototype.translate = function(t, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
    this.translateOnAxis(e, t)
}
,
Ce.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
}
,
Ce.prototype.applyMatrix = function(t) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),
    this.applyMatrix4(t)
}
,
Object.defineProperties(Ce.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
        },
        set: function(t) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order = t
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
}),
Wn.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
}
,
Object.defineProperties(Wn.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),
            0
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    }
}),
$s.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.")
}
,
Kn.prototype.setLens = function(t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
    void 0 !== e && (this.filmGauge = e),
    this.setFocalLength(t)
}
,
Object.defineProperties(Fl.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
            this.shadow.camera.fov = t
        }
    },
    shadowCameraLeft: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
            this.shadow.camera.left = t
        }
    },
    shadowCameraRight: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
            this.shadow.camera.right = t
        }
    },
    shadowCameraTop: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
            this.shadow.camera.top = t
        }
    },
    shadowCameraBottom: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
            this.shadow.camera.bottom = t
        }
    },
    shadowCameraNear: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
            this.shadow.camera.near = t
        }
    },
    shadowCameraFar: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
            this.shadow.camera.far = t
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(t) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            this.shadow.bias = t
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(t) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
            this.shadow.mapSize.width = t
        }
    },
    shadowMapHeight: {
        set: function(t) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
            this.shadow.mapSize.height = t
        }
    }
}),
Object.defineProperties(sn.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
            this.array.length
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
            this.usage === nt
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
            this.setUsage(nt)
        }
    }
}),
sn.prototype.setDynamic = function(t) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),
    this.setUsage(!0 === t ? nt : et),
    this
}
,
sn.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
}
,
sn.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
}
,
En.prototype.addIndex = function(t) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
    this.setIndex(t)
}
,
En.prototype.addAttribute = function(t, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),
    e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
    this.setIndex(e),
    this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
    this.setAttribute(t, new sn(arguments[1],arguments[2])))
}
,
En.prototype.addDrawCall = function(t, e, n) {
    void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
    this.addGroup(t, e)
}
,
En.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
    this.clearGroups()
}
,
En.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
}
,
En.prototype.removeAttribute = function(t) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),
    this.deleteAttribute(t)
}
,
En.prototype.applyMatrix = function(t) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),
    this.applyMatrix4(t)
}
,
Object.defineProperties(En.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
            this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
            this.groups
        }
    }
}),
Es.prototype.setDynamic = function(t) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),
    this.setUsage(!0 === t ? nt : et),
    this
}
,
Es.prototype.setArray = function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
}
,
go.prototype.getArrays = function() {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
}
,
go.prototype.addShapeList = function() {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
}
,
go.prototype.addShape = function() {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
}
,
Ts.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.")
}
,
Zc.prototype.onUpdate = function() {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
    this
}
,
Object.defineProperties(Xe.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."),
            new tn
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
        },
        set: function(t) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
            this.flatShading = 1 === t
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
            this.stencilFuncMask
        },
        set: function(t) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
            this.stencilFuncMask = t
        }
    }
}),
Object.defineProperties(Jn.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives
        },
        set: function(t) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives = t
        }
    }
}),
ws.prototype.clearTarget = function(t, e, n, i) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
    this.setRenderTarget(t),
    this.clear(e, n, i)
}
,
ws.prototype.animate = function(t) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
    this.setAnimationLoop(t)
}
,
ws.prototype.getCurrentRenderTarget = function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
    this.getRenderTarget()
}
,
ws.prototype.getMaxAnisotropy = function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
    this.capabilities.getMaxAnisotropy()
}
,
ws.prototype.getPrecision = function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
    this.capabilities.precision
}
,
ws.prototype.resetGLState = function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
    this.state.reset()
}
,
ws.prototype.supportsFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
    this.extensions.get("OES_texture_float")
}
,
ws.prototype.supportsHalfFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
    this.extensions.get("OES_texture_half_float")
}
,
ws.prototype.supportsStandardDerivatives = function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
    this.extensions.get("OES_standard_derivatives")
}
,
ws.prototype.supportsCompressedTextureS3TC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
    this.extensions.get("WEBGL_compressed_texture_s3tc")
}
,
ws.prototype.supportsCompressedTexturePVRTC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
    this.extensions.get("WEBGL_compressed_texture_pvrtc")
}
,
ws.prototype.supportsBlendMinMax = function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
    this.extensions.get("EXT_blend_minmax")
}
,
ws.prototype.supportsVertexTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
    this.capabilities.vertexTextures
}
,
ws.prototype.supportsInstancedArrays = function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
    this.extensions.get("ANGLE_instanced_arrays")
}
,
ws.prototype.enableScissorTest = function(t) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
    this.setScissorTest(t)
}
,
ws.prototype.initMaterial = function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
}
,
ws.prototype.addPrePlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
}
,
ws.prototype.addPostPlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
}
,
ws.prototype.updateShadowMap = function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
}
,
ws.prototype.setFaceCulling = function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
}
,
ws.prototype.allocTextureUnit = function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
}
,
ws.prototype.setTexture = function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
}
,
ws.prototype.setTexture2D = function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
}
,
ws.prototype.setTextureCube = function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
}
,
ws.prototype.getActiveMipMapLevel = function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),
    this.getActiveMipmapLevel()
}
,
Object.defineProperties(ws.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
            this.shadowMap.enabled = t
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
            this.shadowMap.type = t
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),
            this.getContext()
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
            this.xr
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),
            !1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
            !1
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
            this.outputEncoding = !0 === t ? Y : X
        }
    },
    toneMappingWhitePoint: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),
            1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
        }
    }
}),
Object.defineProperties(us.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        }
    }
}),
Object.defineProperties(Tt.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS = t
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT = t
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter = t
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter = t
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy = t
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset = t
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat = t
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format = t
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type = t
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps = t
        }
    }
}),
Lc.prototype.load = function(t) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    const e = this;
    return (new vc).load(t, (function(t) {
        e.setBuffer(t)
    }
    )),
    this
}
,
Ic.prototype.getData = function() {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
    this.getFrequencyData()
}
,
ti.prototype.updateCubeMap = function(t, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
    this.update(t, e)
}
,
ti.prototype.clear = function(t, e, n, i) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
    this.renderTarget.clear(t, e, n, i)
}
,
_t.crossOrigin = void 0,
_t.loadTexture = function(t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    const r = new pl;
    r.setCrossOrigin(this.crossOrigin);
    const s = r.load(t, n, void 0, i);
    return e && (s.mapping = e),
    s
}
,
_t.loadTextureCube = function(t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    const r = new ul;
    r.setCrossOrigin(this.crossOrigin);
    const s = r.load(t, n, void 0, i);
    return e && (s.mapping = e),
    s
}
,
_t.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
}
,
_t.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
}
;
const eu = {
    createMultiMaterialObject: function() {
        console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
    },
    detach: function() {
        console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
    },
    attach: function() {
        console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")
    }
};
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: e
    }
})),
"undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e),
t.ACESFilmicToneMapping = 4,
t.AddEquation = n,
t.AddOperation = 2,
t.AdditiveAnimationBlendMode = q,
t.AdditiveBlending = 2,
t.AlphaFormat = 1021,
t.AlwaysDepth = 1,
t.AlwaysStencilFunc = 519,
t.AmbientLight = $l,
t.AmbientLightProbe = xc,
t.AnimationClip = nl,
t.AnimationLoader = class extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = new cl(this.manager);
        s.setPath(this.path),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(this.withCredentials),
        s.load(t, (function(n) {
            try {
                e(r.parse(JSON.parse(n)))
            } catch (e) {
                i ? i(e) : console.error(e),
                r.manager.itemError(t)
            }
        }
        ), n, i)
    }
    parse(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
            const i = nl.parse(t[n]);
            e.push(i)
        }
        return e
    }
}
,
t.AnimationMixer = Yc,
t.AnimationObjectGroup = qc,
t.AnimationUtils = Vo,
t.ArcCurve = gl,
t.ArrayCamera = fs,
t.ArrowHelper = class extends Ce {
    constructor(t=new Lt(0,0,1), e=new Lt(0,0,0), n=1, i=16776960, r=.2 * n, s=.2 * r) {
        super(),
        this.type = "ArrowHelper",
        void 0 === Th && (Th = new En,
        Th.setAttribute("position", new mn([0, 0, 0, 0, 1, 0],3)),
        Eh = new Da(0,.5,1,5,1),
        Eh.translate(0, -.5, 0)),
        this.position.copy(e),
        this.line = new fa(Th,new ca({
            color: i,
            toneMapped: !1
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new Wn(Eh,new en({
            color: i,
            toneMapped: !1
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(t),
        this.setLength(n, r, s)
    }
    setDirection(t) {
        if (t.y > .99999)
            this.quaternion.set(0, 0, 0, 1);
        else if (t.y < -.99999)
            this.quaternion.set(1, 0, 0, 0);
        else {
            Sh.set(t.z, 0, -t.x).normalize();
            const e = Math.acos(t.y);
            this.quaternion.setFromAxisAngle(Sh, e)
        }
    }
    setLength(t, e=.2 * t, n=.2 * e) {
        this.line.scale.set(1, Math.max(1e-4, t - e), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(n, e, n),
        this.cone.position.y = t,
        this.cone.updateMatrix()
    }
    setColor(t) {
        this.line.material.color.set(t),
        this.cone.material.color.set(t)
    }
    copy(t) {
        return super.copy(t, !1),
        this.line.copy(t.line),
        this.cone.copy(t.cone),
        this
    }
}
,
t.Audio = Lc,
t.AudioAnalyser = Ic,
t.AudioContext = gc,
t.AudioListener = class extends Ce {
    constructor() {
        super(),
        this.type = "AudioListener",
        this.context = gc.getContext(),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null,
        this.timeDelta = 0,
        this._clock = new bc
    }
    getInput() {
        return this.gain
    }
    removeFilter() {
        return null !== this.filter && (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        this.filter = null),
        this
    }
    getFilter() {
        return this.filter
    }
    setFilter(t) {
        return null !== this.filter ? (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
        this.filter = t,
        this.gain.connect(this.filter),
        this.filter.connect(this.context.destination),
        this
    }
    getMasterVolume() {
        return this.gain.gain.value
    }
    setMasterVolume(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
        this
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t);
        const e = this.context.listener
          , n = this.up;
        if (this.timeDelta = this._clock.getDelta(),
        this.matrixWorld.decompose(Sc, Tc, Ec),
        Ac.set(0, 0, -1).applyQuaternion(Tc),
        e.positionX) {
            const t = this.context.currentTime + this.timeDelta;
            e.positionX.linearRampToValueAtTime(Sc.x, t),
            e.positionY.linearRampToValueAtTime(Sc.y, t),
            e.positionZ.linearRampToValueAtTime(Sc.z, t),
            e.forwardX.linearRampToValueAtTime(Ac.x, t),
            e.forwardY.linearRampToValueAtTime(Ac.y, t),
            e.forwardZ.linearRampToValueAtTime(Ac.z, t),
            e.upX.linearRampToValueAtTime(n.x, t),
            e.upY.linearRampToValueAtTime(n.y, t),
            e.upZ.linearRampToValueAtTime(n.z, t)
        } else
            e.setPosition(Sc.x, Sc.y, Sc.z),
            e.setOrientation(Ac.x, Ac.y, Ac.z, n.x, n.y, n.z)
    }
}
,
t.AudioLoader = vc,
t.AxesHelper = Ah,
t.AxisHelper = function(t) {
    return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),
    new Ah(t)
}
,
t.BackSide = 1,
t.BasicDepthPacking = 3200,
t.BasicShadowMap = 0,
t.BinaryTextureLoader = function(t) {
    return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),
    new dl(t)
}
,
t.Bone = ta,
t.BooleanKeyframeTrack = Zo,
t.BoundingBoxHelper = function(t, e) {
    return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
    new Mh(t,e)
}
,
t.Box2 = eh,
t.Box3 = Pt,
t.Box3Helper = class extends ya {
    constructor(t, e=16776960) {
        const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , i = new En;
        i.setIndex(new sn(n,1)),
        i.setAttribute("position", new mn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],3)),
        super(i, new ca({
            color: e,
            toneMapped: !1
        })),
        this.box = t,
        this.type = "Box3Helper",
        this.geometry.computeBoundingSphere()
    }
    updateMatrixWorld(t) {
        const e = this.box;
        e.isEmpty() || (e.getCenter(this.position),
        e.getSize(this.scale),
        this.scale.multiplyScalar(.5),
        super.updateMatrixWorld(t))
    }
}
,
t.BoxBufferGeometry = qn,
t.BoxGeometry = qn,
t.BoxHelper = Mh,
t.BufferAttribute = sn,
t.BufferGeometry = En,
t.BufferGeometryLoader = oc,
t.ByteType = 1010,
t.Cache = rl,
t.Camera = Qn,
t.CameraHelper = class extends ya {
    constructor(t) {
        const e = new En
          , n = new ca({
            color: 16777215,
            vertexColors: !0,
            toneMapped: !1
        })
          , i = []
          , r = []
          , s = {}
          , a = new tn(16755200)
          , o = new tn(16711680)
          , l = new tn(43775)
          , c = new tn(16777215)
          , h = new tn(3355443);
        function u(t, e, n) {
            d(t, n),
            d(e, n)
        }
        function d(t, e) {
            i.push(0, 0, 0),
            r.push(e.r, e.g, e.b),
            void 0 === s[t] && (s[t] = []),
            s[t].push(i.length / 3 - 1)
        }
        u("n1", "n2", a),
        u("n2", "n4", a),
        u("n4", "n3", a),
        u("n3", "n1", a),
        u("f1", "f2", a),
        u("f2", "f4", a),
        u("f4", "f3", a),
        u("f3", "f1", a),
        u("n1", "f1", a),
        u("n2", "f2", a),
        u("n3", "f3", a),
        u("n4", "f4", a),
        u("p", "n1", o),
        u("p", "n2", o),
        u("p", "n3", o),
        u("p", "n4", o),
        u("u1", "u2", l),
        u("u2", "u3", l),
        u("u3", "u1", l),
        u("c", "t", c),
        u("p", "c", h),
        u("cn1", "cn2", h),
        u("cn3", "cn4", h),
        u("cf1", "cf2", h),
        u("cf3", "cf4", h),
        e.setAttribute("position", new mn(i,3)),
        e.setAttribute("color", new mn(r,3)),
        super(e, n),
        this.type = "CameraHelper",
        this.camera = t,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = s,
        this.update()
    }
    update() {
        const t = this.geometry
          , e = this.pointMap;
        _h.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
        wh("c", e, t, _h, 0, 0, -1),
        wh("t", e, t, _h, 0, 0, 1),
        wh("n1", e, t, _h, -1, -1, -1),
        wh("n2", e, t, _h, 1, -1, -1),
        wh("n3", e, t, _h, -1, 1, -1),
        wh("n4", e, t, _h, 1, 1, -1),
        wh("f1", e, t, _h, -1, -1, 1),
        wh("f2", e, t, _h, 1, -1, 1),
        wh("f3", e, t, _h, -1, 1, 1),
        wh("f4", e, t, _h, 1, 1, 1),
        wh("u1", e, t, _h, .7, 1.1, -1),
        wh("u2", e, t, _h, -.7, 1.1, -1),
        wh("u3", e, t, _h, 0, 2, -1),
        wh("cf1", e, t, _h, -1, 0, 1),
        wh("cf2", e, t, _h, 1, 0, 1),
        wh("cf3", e, t, _h, 0, -1, 1),
        wh("cf4", e, t, _h, 0, 1, 1),
        wh("cn1", e, t, _h, -1, 0, -1),
        wh("cn2", e, t, _h, 1, 0, -1),
        wh("cn3", e, t, _h, 0, -1, -1),
        wh("cn4", e, t, _h, 0, 1, -1),
        t.getAttribute("position").needsUpdate = !0
    }
    dispose() {
        this.geometry.dispose(),
        this.material.dispose()
    }
}
,
t.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been removed")
}
,
t.CanvasTexture = Ra,
t.CatmullRomCurve3 = bl,
t.CineonToneMapping = 3,
t.CircleBufferGeometry = Pa,
t.CircleGeometry = Pa,
t.ClampToEdgeWrapping = u,
t.Clock = bc,
t.Color = tn,
t.ColorKeyframeTrack = Jo,
t.CompressedTexture = La,
t.CompressedTextureLoader = class extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = []
          , a = new La
          , o = new cl(this.manager);
        o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(r.withCredentials);
        let l = 0;
        function c(c) {
            o.load(t[c], (function(t) {
                const n = r.parse(t, !0);
                s[c] = {
                    width: n.width,
                    height: n.height,
                    format: n.format,
                    mipmaps: n.mipmaps
                },
                l += 1,
                6 === l && (1 === n.mipmapCount && (a.minFilter = g),
                a.image = s,
                a.format = n.format,
                a.needsUpdate = !0,
                e && e(a))
            }
            ), n, i)
        }
        if (Array.isArray(t))
            for (let e = 0, n = t.length; e < n; ++e)
                c(e);
        else
            o.load(t, (function(t) {
                const n = r.parse(t, !0);
                if (n.isCubemap) {
                    const t = n.mipmaps.length / n.mipmapCount;
                    for (let e = 0; e < t; e++) {
                        s[e] = {
                            mipmaps: []
                        };
                        for (let t = 0; t < n.mipmapCount; t++)
                            s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]),
                            s[e].format = n.format,
                            s[e].width = n.width,
                            s[e].height = n.height
                    }
                    a.image = s
                } else
                    a.image.width = n.width,
                    a.image.height = n.height,
                    a.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (a.minFilter = g),
                a.format = n.format,
                a.needsUpdate = !0,
                e && e(a)
            }
            ), n, i);
        return a
    }
}
,
t.ConeBufferGeometry = Ia,
t.ConeGeometry = Ia,
t.CubeCamera = ti,
t.CubeReflectionMapping = r,
t.CubeRefractionMapping = s,
t.CubeTexture = ei,
t.CubeTextureLoader = ul,
t.CubeUVReflectionMapping = l,
t.CubeUVRefractionMapping = c,
t.CubicBezierCurve = El,
t.CubicBezierCurve3 = Al,
t.CubicInterpolant = jo,
t.CullFaceBack = 1,
t.CullFaceFront = 2,
t.CullFaceFrontBack = 3,
t.CullFaceNone = 0,
t.Curve = ml,
t.CurvePath = Nl,
t.CustomBlending = 5,
t.CustomToneMapping = 5,
t.CylinderBufferGeometry = Da,
t.CylinderGeometry = Da,
t.Cylindrical = class {
    constructor(t=1, e=0, n=0) {
        return this.radius = t,
        this.theta = e,
        this.y = n,
        this
    }
    set(t, e, n) {
        return this.radius = t,
        this.theta = e,
        this.y = n,
        this
    }
    copy(t) {
        return this.radius = t.radius,
        this.theta = t.theta,
        this.y = t.y,
        this
    }
    setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    }
    setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + n * n),
        this.theta = Math.atan2(t, n),
        this.y = e,
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
,
t.DataTexture = ii,
t.DataTexture2DArray = Ai,
t.DataTexture3D = Li,
t.DataTextureLoader = dl,
t.DataUtils = class {
    static toHalfFloat(t) {
        Lh[0] = t;
        const e = Rh[0];
        let n = e >> 16 & 32768
          , i = e >> 12 & 2047;
        const r = e >> 23 & 255;
        return r < 103 ? n : r > 142 ? (n |= 31744,
        n |= (255 == r ? 0 : 1) && 8388607 & e,
        n) : r < 113 ? (i |= 2048,
        n |= (i >> 114 - r) + (i >> 113 - r & 1),
        n) : (n |= r - 112 << 10 | i >> 1,
        n += 1 & i,
        n)
    }
}
,
t.DecrementStencilOp = 7683,
t.DecrementWrapStencilOp = 34056,
t.DefaultLoadingManager = al,
t.DepthFormat = A,
t.DepthStencilFormat = L,
t.DepthTexture = Ca,
t.DirectionalLight = Kl,
t.DirectionalLightHelper = class extends Ce {
    constructor(t, e, n) {
        super(),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = n,
        void 0 === e && (e = 1);
        let i = new En;
        i.setAttribute("position", new mn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3));
        const r = new ca({
            fog: !1,
            toneMapped: !1
        });
        this.lightPlane = new fa(i,r),
        this.add(this.lightPlane),
        i = new En,
        i.setAttribute("position", new mn([0, 0, 0, 0, 0, 1],3)),
        this.targetLine = new fa(i,r),
        this.add(this.targetLine),
        this.update()
    }
    dispose() {
        this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose()
    }
    update() {
        gh.setFromMatrixPosition(this.light.matrixWorld),
        vh.setFromMatrixPosition(this.light.target.matrixWorld),
        yh.subVectors(vh, gh),
        this.lightPlane.lookAt(vh),
        void 0 !== this.color ? (this.lightPlane.material.color.set(this.color),
        this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color),
        this.targetLine.material.color.copy(this.light.color)),
        this.targetLine.lookAt(vh),
        this.targetLine.scale.z = yh.length()
    }
}
,
t.DiscreteInterpolant = Xo,
t.DodecahedronBufferGeometry = Ba,
t.DodecahedronGeometry = Ba,
t.DoubleSide = 2,
t.DstAlphaFactor = 206,
t.DstColorFactor = 208,
t.DynamicBufferAttribute = function(t, e) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),
    new sn(t,e).setUsage(nt)
}
,
t.DynamicCopyUsage = 35050,
t.DynamicDrawUsage = nt,
t.DynamicReadUsage = 35049,
t.EdgesGeometry = Ga,
t.EdgesHelper = function(t, e) {
    return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
    new ya(new Ga(t.geometry),new ca({
        color: void 0 !== e ? e : 16777215
    }))
}
,
t.EllipseCurve = fl,
t.EqualDepth = 4,
t.EqualStencilFunc = 514,
t.EquirectangularReflectionMapping = a,
t.EquirectangularRefractionMapping = o,
t.Euler = fe,
t.EventDispatcher = rt,
t.ExtrudeBufferGeometry = go,
t.ExtrudeGeometry = go,
t.FaceColors = 1,
t.FileLoader = cl,
t.FlatShading = 1,
t.Float16BufferAttribute = pn,
t.Float32Attribute = function(t, e) {
    return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),
    new mn(t,e)
}
,
t.Float32BufferAttribute = mn,
t.Float64Attribute = function(t, e) {
    return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),
    new fn(t,e)
}
,
t.Float64BufferAttribute = fn,
t.FloatType = b,
t.Fog = Ss,
t.FogExp2 = Ms,
t.Font = pc,
t.FontLoader = class extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = new cl(this.manager);
        s.setPath(this.path),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(r.withCredentials),
        s.load(t, (function(t) {
            let n;
            try {
                n = JSON.parse(t)
            } catch (e) {
                console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                n = JSON.parse(t.substring(65, t.length - 2))
            }
            const i = r.parse(n);
            e && e(i)
        }
        ), n, i)
    }
    parse(t) {
        return new pc(t)
    }
}
,
t.FrontSide = 0,
t.Frustum = ai,
t.GLBufferAttribute = Qc,
t.GLSL1 = "100",
t.GLSL3 = it,
t.GammaEncoding = Z,
t.GreaterDepth = 6,
t.GreaterEqualDepth = 5,
t.GreaterEqualStencilFunc = 518,
t.GreaterStencilFunc = 516,
t.GridHelper = fh,
t.Group = gs,
t.HalfFloatType = M,
t.HemisphereLight = Ol,
t.HemisphereLightHelper = class extends Ce {
    constructor(t, e, n) {
        super(),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = n;
        const i = new _o(e);
        i.rotateY(.5 * Math.PI),
        this.material = new en({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        }),
        void 0 === this.color && (this.material.vertexColors = !0);
        const r = i.getAttribute("position")
          , s = new Float32Array(3 * r.count);
        i.setAttribute("color", new sn(s,3)),
        this.add(new Wn(i,this.material)),
        this.update()
    }
    dispose() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    update() {
        const t = this.children[0];
        if (void 0 !== this.color)
            this.material.color.set(this.color);
        else {
            const e = t.geometry.getAttribute("color");
            ph.copy(this.light.color),
            mh.copy(this.light.groundColor);
            for (let t = 0, n = e.count; t < n; t++) {
                const i = t < n / 2 ? ph : mh;
                e.setXYZ(t, i.r, i.g, i.b)
            }
            e.needsUpdate = !0
        }
        t.lookAt(dh.setFromMatrixPosition(this.light.matrixWorld).negate())
    }
}
,
t.HemisphereLightProbe = yc,
t.IcosahedronBufferGeometry = yo,
t.IcosahedronGeometry = yo,
t.ImageBitmapLoader = uc,
t.ImageLoader = hl,
t.ImageUtils = _t,
t.ImmediateRenderObject = sh,
t.IncrementStencilOp = 7682,
t.IncrementWrapStencilOp = 34055,
t.InstancedBufferAttribute = ac,
t.InstancedBufferGeometry = sc,
t.InstancedInterleavedBuffer = Jc,
t.InstancedMesh = la,
t.Int16Attribute = function(t, e) {
    return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
    new cn(t,e)
}
,
t.Int16BufferAttribute = cn,
t.Int32Attribute = function(t, e) {
    return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
    new un(t,e)
}
,
t.Int32BufferAttribute = un,
t.Int8Attribute = function(t, e) {
    return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
    new an(t,e)
}
,
t.Int8BufferAttribute = an,
t.IntType = 1013,
t.InterleavedBuffer = Es,
t.InterleavedBufferAttribute = Ls,
t.Interpolant = Wo,
t.InterpolateDiscrete = H,
t.InterpolateLinear = G,
t.InterpolateSmooth = U,
t.InvertStencilOp = 5386,
t.JSONLoader = function() {
    console.error("THREE.JSONLoader has been removed.")
}
,
t.KeepStencilOp = tt,
t.KeyframeTrack = Yo,
t.LOD = Xs,
t.LatheBufferGeometry = xo,
t.LatheGeometry = xo,
t.Layers = ge,
t.LensFlare = function() {
    console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")
}
,
t.LessDepth = 2,
t.LessEqualDepth = 3,
t.LessEqualStencilFunc = 515,
t.LessStencilFunc = 513,
t.Light = Fl,
t.LightProbe = nc,
t.Line = fa,
t.Line3 = rh,
t.LineBasicMaterial = ca,
t.LineCurve = Ll,
t.LineCurve3 = Rl,
t.LineDashedMaterial = Uo,
t.LineLoop = xa,
t.LinePieces = 1,
t.LineSegments = ya,
t.LineStrip = 0,
t.LinearEncoding = X,
t.LinearFilter = g,
t.LinearInterpolant = qo,
t.LinearMipMapLinearFilter = 1008,
t.LinearMipMapNearestFilter = 1007,
t.LinearMipmapLinearFilter = y,
t.LinearMipmapNearestFilter = v,
t.LinearToneMapping = 1,
t.Loader = ol,
t.LoaderUtils = rc,
t.LoadingManager = sl,
t.LogLuvEncoding = 3003,
t.LoopOnce = 2200,
t.LoopPingPong = 2202,
t.LoopRepeat = 2201,
t.LuminanceAlphaFormat = 1025,
t.LuminanceFormat = 1024,
t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
},
t.Material = Xe,
t.MaterialLoader = ic,
t.Math = gt,
t.MathUtils = gt,
t.Matrix3 = yt,
t.Matrix4 = se,
t.MaxEquation = 104,
t.Mesh = Wn,
t.MeshBasicMaterial = en,
t.MeshDepthMaterial = cs,
t.MeshDistanceMaterial = hs,
t.MeshFaceMaterial = function(t) {
    return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),
    t
}
,
t.MeshLambertMaterial = Ho,
t.MeshMatcapMaterial = Go,
t.MeshNormalMaterial = Oo,
t.MeshPhongMaterial = zo,
t.MeshPhysicalMaterial = Bo,
t.MeshStandardMaterial = No,
t.MeshToonMaterial = Fo,
t.MinEquation = 103,
t.MirroredRepeatWrapping = d,
t.MixOperation = 1,
t.MultiMaterial = function(t=[]) {
    return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),
    t.isMultiMaterial = !0,
    t.materials = t,
    t.clone = function() {
        return t.slice()
    }
    ,
    t
}
,
t.MultiplyBlending = 4,
t.MultiplyOperation = 0,
t.NearestFilter = p,
t.NearestMipMapLinearFilter = 1005,
t.NearestMipMapNearestFilter = 1004,
t.NearestMipmapLinearFilter = f,
t.NearestMipmapNearestFilter = m,
t.NeverDepth = 0,
t.NeverStencilFunc = 512,
t.NoBlending = 0,
t.NoColors = 0,
t.NoToneMapping = 0,
t.NormalAnimationBlendMode = j,
t.NormalBlending = 1,
t.NotEqualDepth = 7,
t.NotEqualStencilFunc = 517,
t.NumberKeyframeTrack = Qo,
t.Object3D = Ce,
t.ObjectLoader = class extends ol {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = this
          , s = "" === this.path ? rc.extractUrlBase(t) : this.path;
        this.resourcePath = this.resourcePath || s;
        const a = new cl(this.manager);
        a.setPath(this.path),
        a.setRequestHeader(this.requestHeader),
        a.setWithCredentials(this.withCredentials),
        a.load(t, (function(n) {
            let s = null;
            try {
                s = JSON.parse(n)
            } catch (e) {
                return void 0 !== i && i(e),
                void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
            }
            const a = s.metadata;
            void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t)
        }
        ), n, i)
    }
    parse(t, e) {
        const n = this.parseAnimations(t.animations)
          , i = this.parseShapes(t.shapes)
          , r = this.parseGeometries(t.geometries, i)
          , s = this.parseImages(t.images, (function() {
            void 0 !== e && e(l)
        }
        ))
          , a = this.parseTextures(t.textures, s)
          , o = this.parseMaterials(t.materials, a)
          , l = this.parseObject(t.object, r, o, n)
          , c = this.parseSkeletons(t.skeletons, l);
        if (this.bindSkeletons(l, c),
        void 0 !== e) {
            let t = !1;
            for (const e in s)
                if (s[e]instanceof HTMLImageElement) {
                    t = !0;
                    break
                }
            !1 === t && e(l)
        }
        return l
    }
    parseShapes(t) {
        const e = {};
        if (void 0 !== t)
            for (let n = 0, i = t.length; n < i; n++) {
                const i = (new zl).fromJSON(t[n]);
                e[i.uuid] = i
            }
        return e
    }
    parseSkeletons(t, e) {
        const n = {}
          , i = {};
        if (e.traverse((function(t) {
            t.isBone && (i[t.uuid] = t)
        }
        )),
        void 0 !== t)
            for (let e = 0, r = t.length; e < r; e++) {
                const r = (new ia).fromJSON(t[e], i);
                n[r.uuid] = r
            }
        return n
    }
    parseGeometries(t, e) {
        const n = {};
        let i;
        if (void 0 !== t) {
            const r = new oc;
            for (let s = 0, a = t.length; s < a; s++) {
                let a;
                const o = t[s];
                switch (o.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    a = new Po[o.type](o.width,o.height,o.widthSegments,o.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                    a = new Po[o.type](o.width,o.height,o.depth,o.widthSegments,o.heightSegments,o.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    a = new Po[o.type](o.radius,o.segments,o.thetaStart,o.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    a = new Po[o.type](o.radiusTop,o.radiusBottom,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);
                    break;
                case "ConeGeometry":
                case "ConeBufferGeometry":
                    a = new Po[o.type](o.radius,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    a = new Po[o.type](o.radius,o.widthSegments,o.heightSegments,o.phiStart,o.phiLength,o.thetaStart,o.thetaLength);
                    break;
                case "DodecahedronGeometry":
                case "DodecahedronBufferGeometry":
                case "IcosahedronGeometry":
                case "IcosahedronBufferGeometry":
                case "OctahedronGeometry":
                case "OctahedronBufferGeometry":
                case "TetrahedronGeometry":
                case "TetrahedronBufferGeometry":
                    a = new Po[o.type](o.radius,o.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    a = new Po[o.type](o.innerRadius,o.outerRadius,o.thetaSegments,o.phiSegments,o.thetaStart,o.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    a = new Po[o.type](o.radius,o.tube,o.radialSegments,o.tubularSegments,o.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    a = new Po[o.type](o.radius,o.tube,o.tubularSegments,o.radialSegments,o.p,o.q);
                    break;
                case "TubeGeometry":
                case "TubeBufferGeometry":
                    a = new Po[o.type]((new Il[o.path.type]).fromJSON(o.path),o.tubularSegments,o.radius,o.radialSegments,o.closed);
                    break;
                case "LatheGeometry":
                case "LatheBufferGeometry":
                    a = new Po[o.type](o.points,o.segments,o.phiStart,o.phiLength);
                    break;
                case "PolyhedronGeometry":
                case "PolyhedronBufferGeometry":
                    a = new Po[o.type](o.vertices,o.indices,o.radius,o.details);
                    break;
                case "ShapeGeometry":
                case "ShapeBufferGeometry":
                    i = [];
                    for (let t = 0, n = o.shapes.length; t < n; t++) {
                        const n = e[o.shapes[t]];
                        i.push(n)
                    }
                    a = new Po[o.type](i,o.curveSegments);
                    break;
                case "ExtrudeGeometry":
                case "ExtrudeBufferGeometry":
                    i = [];
                    for (let t = 0, n = o.shapes.length; t < n; t++) {
                        const n = e[o.shapes[t]];
                        i.push(n)
                    }
                    const t = o.options.extrudePath;
                    void 0 !== t && (o.options.extrudePath = (new Il[t.type]).fromJSON(t)),
                    a = new Po[o.type](i,o.options);
                    break;
                case "BufferGeometry":
                case "InstancedBufferGeometry":
                    a = r.parse(o);
                    break;
                case "Geometry":
                    console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + o.type + '"');
                    continue
                }
                a.uuid = o.uuid,
                void 0 !== o.name && (a.name = o.name),
                !0 === a.isBufferGeometry && void 0 !== o.userData && (a.userData = o.userData),
                n[o.uuid] = a
            }
        }
        return n
    }
    parseMaterials(t, e) {
        const n = {}
          , i = {};
        if (void 0 !== t) {
            const r = new ic;
            r.setTextures(e);
            for (let e = 0, s = t.length; e < s; e++) {
                const s = t[e];
                if ("MultiMaterial" === s.type) {
                    const t = [];
                    for (let e = 0; e < s.materials.length; e++) {
                        const i = s.materials[e];
                        void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)),
                        t.push(n[i.uuid])
                    }
                    i[s.uuid] = t
                } else
                    void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)),
                    i[s.uuid] = n[s.uuid]
            }
        }
        return i
    }
    parseAnimations(t) {
        const e = {};
        if (void 0 !== t)
            for (let n = 0; n < t.length; n++) {
                const i = t[n]
                  , r = nl.parse(i);
                e[r.uuid] = r
            }
        return e
    }
    parseImages(t, e) {
        const n = this
          , i = {};
        let r;
        function s(t) {
            if ("string" == typeof t) {
                const e = t;
                return function(t) {
                    return n.manager.itemStart(t),
                    r.load(t, (function() {
                        n.manager.itemEnd(t)
                    }
                    ), void 0, (function() {
                        n.manager.itemError(t),
                        n.manager.itemEnd(t)
                    }
                    ))
                }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e)
            }
            return t.data ? {
                data: yn(t.type, t.data),
                width: t.width,
                height: t.height
            } : null
        }
        if (void 0 !== t && t.length > 0) {
            const n = new sl(e);
            r = new hl(n),
            r.setCrossOrigin(this.crossOrigin);
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e]
                  , r = n.url;
                if (Array.isArray(r)) {
                    i[n.uuid] = [];
                    for (let t = 0, e = r.length; t < e; t++) {
                        const e = s(r[t]);
                        null !== e && (e instanceof HTMLImageElement ? i[n.uuid].push(e) : i[n.uuid].push(new ii(e.data,e.width,e.height)))
                    }
                } else {
                    const t = s(n.url);
                    null !== t && (i[n.uuid] = t)
                }
            }
        }
        return i
    }
    parseTextures(t, e) {
        function n(t, e) {
            return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
            e[t])
        }
        const i = {};
        if (void 0 !== t)
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r];
                let a;
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const o = e[s.image];
                Array.isArray(o) ? (a = new ei(o),
                6 === o.length && (a.needsUpdate = !0)) : (a = o && o.data ? new ii(o.data,o.width,o.height) : new bt(o),
                o && (a.needsUpdate = !0)),
                a.uuid = s.uuid,
                void 0 !== s.name && (a.name = s.name),
                void 0 !== s.mapping && (a.mapping = n(s.mapping, lc)),
                void 0 !== s.offset && a.offset.fromArray(s.offset),
                void 0 !== s.repeat && a.repeat.fromArray(s.repeat),
                void 0 !== s.center && a.center.fromArray(s.center),
                void 0 !== s.rotation && (a.rotation = s.rotation),
                void 0 !== s.wrap && (a.wrapS = n(s.wrap[0], cc),
                a.wrapT = n(s.wrap[1], cc)),
                void 0 !== s.format && (a.format = s.format),
                void 0 !== s.type && (a.type = s.type),
                void 0 !== s.encoding && (a.encoding = s.encoding),
                void 0 !== s.minFilter && (a.minFilter = n(s.minFilter, hc)),
                void 0 !== s.magFilter && (a.magFilter = n(s.magFilter, hc)),
                void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy),
                void 0 !== s.flipY && (a.flipY = s.flipY),
                void 0 !== s.premultiplyAlpha && (a.premultiplyAlpha = s.premultiplyAlpha),
                void 0 !== s.unpackAlignment && (a.unpackAlignment = s.unpackAlignment),
                i[s.uuid] = a
            }
        return i
    }
    parseObject(t, e, n, i) {
        let r, s, a;
        function o(t) {
            return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
            e[t]
        }
        function l(t) {
            if (void 0 !== t) {
                if (Array.isArray(t)) {
                    const e = [];
                    for (let i = 0, r = t.length; i < r; i++) {
                        const r = t[i];
                        void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r),
                        e.push(n[r])
                    }
                    return e
                }
                return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                n[t]
            }
        }
        switch (t.type) {
        case "Scene":
            r = new Ts,
            void 0 !== t.background && Number.isInteger(t.background) && (r.background = new tn(t.background)),
            void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new Ss(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new Ms(t.fog.color,t.fog.density)));
            break;
        case "PerspectiveCamera":
            r = new Kn(t.fov,t.aspect,t.near,t.far),
            void 0 !== t.focus && (r.focus = t.focus),
            void 0 !== t.zoom && (r.zoom = t.zoom),
            void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge),
            void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset),
            void 0 !== t.view && (r.view = Object.assign({}, t.view));
            break;
        case "OrthographicCamera":
            r = new Jl(t.left,t.right,t.top,t.bottom,t.near,t.far),
            void 0 !== t.zoom && (r.zoom = t.zoom),
            void 0 !== t.view && (r.view = Object.assign({}, t.view));
            break;
        case "AmbientLight":
            r = new $l(t.color,t.intensity);
            break;
        case "DirectionalLight":
            r = new Kl(t.color,t.intensity);
            break;
        case "PointLight":
            r = new Zl(t.color,t.intensity,t.distance,t.decay);
            break;
        case "RectAreaLight":
            r = new tc(t.color,t.intensity,t.width,t.height);
            break;
        case "SpotLight":
            r = new Wl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
            break;
        case "HemisphereLight":
            r = new Ol(t.color,t.groundColor,t.intensity);
            break;
        case "LightProbe":
            r = (new nc).fromJSON(t);
            break;
        case "SkinnedMesh":
            s = o(t.geometry),
            a = l(t.material),
            r = new $s(s,a),
            void 0 !== t.bindMode && (r.bindMode = t.bindMode),
            void 0 !== t.bindMatrix && r.bindMatrix.fromArray(t.bindMatrix),
            void 0 !== t.skeleton && (r.skeleton = t.skeleton);
            break;
        case "Mesh":
            s = o(t.geometry),
            a = l(t.material),
            r = new Wn(s,a);
            break;
        case "InstancedMesh":
            s = o(t.geometry),
            a = l(t.material);
            const e = t.count
              , n = t.instanceMatrix
              , i = t.instanceColor;
            r = new la(s,a,e),
            r.instanceMatrix = new sn(new Float32Array(n.array),16),
            void 0 !== i && (r.instanceColor = new sn(new Float32Array(i.array),i.itemSize));
            break;
        case "LOD":
            r = new Xs;
            break;
        case "Line":
            r = new fa(o(t.geometry),l(t.material));
            break;
        case "LineLoop":
            r = new xa(o(t.geometry),l(t.material));
            break;
        case "LineSegments":
            r = new ya(o(t.geometry),l(t.material));
            break;
        case "PointCloud":
        case "Points":
            r = new Ta(o(t.geometry),l(t.material));
            break;
        case "Sprite":
            r = new Vs(l(t.material));
            break;
        case "Group":
            r = new gs;
            break;
        case "Bone":
            r = new ta;
            break;
        default:
            r = new Ce
        }
        if (r.uuid = t.uuid,
        void 0 !== t.name && (r.name = t.name),
        void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix),
        void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate),
        r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position),
        void 0 !== t.rotation && r.rotation.fromArray(t.rotation),
        void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion),
        void 0 !== t.scale && r.scale.fromArray(t.scale)),
        void 0 !== t.castShadow && (r.castShadow = t.castShadow),
        void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow),
        t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias),
        void 0 !== t.shadow.normalBias && (r.shadow.normalBias = t.shadow.normalBias),
        void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius),
        void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize),
        void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))),
        void 0 !== t.visible && (r.visible = t.visible),
        void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled),
        void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder),
        void 0 !== t.userData && (r.userData = t.userData),
        void 0 !== t.layers && (r.layers.mask = t.layers),
        void 0 !== t.children) {
            const s = t.children;
            for (let t = 0; t < s.length; t++)
                r.add(this.parseObject(s[t], e, n, i))
        }
        if (void 0 !== t.animations) {
            const e = t.animations;
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                r.animations.push(i[n])
            }
        }
        if ("LOD" === t.type) {
            void 0 !== t.autoUpdate && (r.autoUpdate = t.autoUpdate);
            const e = t.levels;
            for (let t = 0; t < e.length; t++) {
                const n = e[t]
                  , i = r.getObjectByProperty("uuid", n.object);
                void 0 !== i && r.addLevel(i, n.distance)
            }
        }
        return r
    }
    bindSkeletons(t, e) {
        0 !== Object.keys(e).length && t.traverse((function(t) {
            if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
                const n = e[t.skeleton];
                void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(n, t.bindMatrix)
            }
        }
        ))
    }
    setTexturePath(t) {
        return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),
        this.setResourcePath(t)
    }
}
,
t.ObjectSpaceNormalMap = 1,
t.OctahedronBufferGeometry = _o,
t.OctahedronGeometry = _o,
t.OneFactor = 201,
t.OneMinusDstAlphaFactor = 207,
t.OneMinusDstColorFactor = 209,
t.OneMinusSrcAlphaFactor = 205,
t.OneMinusSrcColorFactor = 203,
t.OrthographicCamera = Jl,
t.PCFShadowMap = 1,
t.PCFSoftShadowMap = 2,
t.PMREMGenerator = class {
    constructor(t) {
        this._renderer = t,
        this._pingPongRenderTarget = null,
        this._blurMaterial = function(t) {
            const e = new Float32Array(t)
              , n = new Lt(0,1,0);
            return new Io({
                name: "SphericalGaussianBlur",
                defines: {
                    n: t
                },
                uniforms: {
                    envMap: {
                        value: null
                    },
                    samples: {
                        value: 1
                    },
                    weights: {
                        value: e
                    },
                    latitudinal: {
                        value: !1
                    },
                    dTheta: {
                        value: 0
                    },
                    mipInt: {
                        value: 0
                    },
                    poleAxis: {
                        value: n
                    },
                    inputEncoding: {
                        value: Nh[3e3]
                    },
                    outputEncoding: {
                        value: Nh[3e3]
                    }
                },
                vertexShader: $h(),
                fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t ${tu()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
                blending: 0,
                depthTest: !1,
                depthWrite: !1
            })
        }(Ih),
        this._equirectShader = null,
        this._cubemapShader = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(t, e=0, n=.1, i=100) {
        kh = this._renderer.getRenderTarget();
        const r = this._allocateTargets();
        return this._sceneToCubeUV(t, n, i, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
    }
    fromEquirectangular(t) {
        return this._fromTexture(t)
    }
    fromCubemap(t) {
        return this._fromTexture(t)
    }
    compileCubemapShader() {
        null === this._cubemapShader && (this._cubemapShader = Kh(),
        this._compileMaterial(this._cubemapShader))
    }
    compileEquirectangularShader() {
        null === this._equirectShader && (this._equirectShader = Qh(),
        this._compileMaterial(this._equirectShader))
    }
    dispose() {
        this._blurMaterial.dispose(),
        null !== this._cubemapShader && this._cubemapShader.dispose(),
        null !== this._equirectShader && this._equirectShader.dispose();
        for (let t = 0; t < Oh.length; t++)
            Oh[t].dispose()
    }
    _cleanup(t) {
        this._pingPongRenderTarget.dispose(),
        this._renderer.setRenderTarget(kh),
        t.scissorTest = !1,
        Jh(t, 0, 0, t.width, t.height)
    }
    _fromTexture(t) {
        kh = this._renderer.getRenderTarget();
        const e = this._allocateTargets(t);
        return this._textureToCubeUV(t, e),
        this._applyPMREM(e),
        this._cleanup(e),
        e
    }
    _allocateTargets(t) {
        const e = {
            magFilter: p,
            minFilter: p,
            generateMipmaps: !1,
            type: x,
            format: 1023,
            encoding: Xh(t) ? t.encoding : J,
            depthBuffer: !1
        }
          , n = Zh(e);
        return n.depthBuffer = !t,
        this._pingPongRenderTarget = Zh(e),
        n
    }
    _compileMaterial(t) {
        const e = new Wn(Oh[0],t);
        this._renderer.compile(e, Fh)
    }
    _sceneToCubeUV(t, e, n, i) {
        const r = new Kn(90,1,e,n)
          , s = [1, -1, 1, 1, 1, 1]
          , a = [1, 1, 1, -1, -1, -1]
          , o = this._renderer
          , l = o.autoClear
          , c = o.outputEncoding
          , h = o.toneMapping;
        o.getClearColor(Uh),
        o.toneMapping = 0,
        o.outputEncoding = X,
        o.autoClear = !1;
        let u = !1;
        const d = t.background;
        if (d) {
            if (d.isColor) {
                Bh.color.copy(d).convertSRGBToLinear(),
                t.background = null;
                const e = qh(Bh.color);
                Bh.opacity = e,
                u = !0
            }
        } else {
            Bh.color.copy(Uh).convertSRGBToLinear();
            const t = qh(Bh.color);
            Bh.opacity = t,
            u = !0
        }
        for (let e = 0; e < 6; e++) {
            const n = e % 3;
            0 == n ? (r.up.set(0, s[e], 0),
            r.lookAt(a[e], 0, 0)) : 1 == n ? (r.up.set(0, 0, s[e]),
            r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0),
            r.lookAt(0, 0, a[e])),
            Jh(i, n * Ch, e > 2 ? Ch : 0, Ch, Ch),
            o.setRenderTarget(i),
            u && o.render(zh, r),
            o.render(t, r)
        }
        o.toneMapping = h,
        o.outputEncoding = c,
        o.autoClear = l
    }
    _textureToCubeUV(t, e) {
        const n = this._renderer;
        t.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = Kh()) : null == this._equirectShader && (this._equirectShader = Qh());
        const i = t.isCubeTexture ? this._cubemapShader : this._equirectShader
          , r = new Wn(Oh[0],i)
          , s = i.uniforms;
        s.envMap.value = t,
        t.isCubeTexture || s.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
        s.inputEncoding.value = Nh[t.encoding],
        s.outputEncoding.value = Nh[e.texture.encoding],
        Jh(e, 0, 0, 3 * Ch, 2 * Ch),
        n.setRenderTarget(e),
        n.render(r, Fh)
    }
    _applyPMREM(t) {
        const e = this._renderer
          , n = e.autoClear;
        e.autoClear = !1;
        for (let e = 1; e < Dh; e++) {
            const n = Math.sqrt(Gh[e] * Gh[e] - Gh[e - 1] * Gh[e - 1])
              , i = jh[(e - 1) % jh.length];
            this._blur(t, e - 1, e, n, i)
        }
        e.autoClear = n
    }
    _blur(t, e, n, i, r) {
        const s = this._pingPongRenderTarget;
        this._halfBlur(t, s, e, n, i, "latitudinal", r),
        this._halfBlur(s, t, n, n, i, "longitudinal", r)
    }
    _halfBlur(t, e, n, i, r, s, a) {
        const o = this._renderer
          , l = this._blurMaterial;
        "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
        const c = new Wn(Oh[i],l)
          , h = l.uniforms
          , u = Hh[n] - 1
          , d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39
          , p = r / d
          , m = isFinite(r) ? 1 + Math.floor(3 * p) : Ih;
        m > Ih && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
        const f = [];
        let g = 0;
        for (let t = 0; t < Ih; ++t) {
            const e = t / p
              , n = Math.exp(-e * e / 2);
            f.push(n),
            0 == t ? g += n : t < m && (g += 2 * n)
        }
        for (let t = 0; t < f.length; t++)
            f[t] = f[t] / g;
        h.envMap.value = t.texture,
        h.samples.value = m,
        h.weights.value = f,
        h.latitudinal.value = "latitudinal" === s,
        a && (h.poleAxis.value = a),
        h.dTheta.value = d,
        h.mipInt.value = 8 - n,
        h.inputEncoding.value = Nh[t.texture.encoding],
        h.outputEncoding.value = Nh[t.texture.encoding];
        const v = Hh[i];
        Jh(e, 3 * Math.max(0, Ch - 2 * v), (0 === i ? 0 : 2 * Ch) + 2 * v * (i > 4 ? i - 8 + 4 : 0), 3 * v, 2 * v),
        o.setRenderTarget(e),
        o.render(c, Fh)
    }
}
,
t.ParametricBufferGeometry = wo,
t.ParametricGeometry = wo,
t.Particle = function(t) {
    return console.warn("THREE.Particle has been renamed to THREE.Sprite."),
    new Vs(t)
}
,
t.ParticleBasicMaterial = function(t) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
    new _a(t)
}
,
t.ParticleSystem = function(t, e) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
    new Ta(t,e)
}
,
t.ParticleSystemMaterial = function(t) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
    new _a(t)
}
,
t.Path = Bl,
t.PerspectiveCamera = Kn,
t.Plane = Ne,
t.PlaneBufferGeometry = ci,
t.PlaneGeometry = ci,
t.PlaneHelper = class extends fa {
    constructor(t, e=1, n=16776960) {
        const i = n
          , r = new En;
        r.setAttribute("position", new mn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],3)),
        r.computeBoundingSphere(),
        super(r, new ca({
            color: i,
            toneMapped: !1
        })),
        this.type = "PlaneHelper",
        this.plane = t,
        this.size = e;
        const s = new En;
        s.setAttribute("position", new mn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],3)),
        s.computeBoundingSphere(),
        this.add(new Wn(s,new en({
            color: i,
            opacity: .2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1
        })))
    }
    updateMatrixWorld(t) {
        let e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8),
        this.scale.set(.5 * this.size, .5 * this.size, e),
        this.children[0].material.side = e < 0 ? 1 : 0,
        this.lookAt(this.plane.normal),
        super.updateMatrixWorld(t)
    }
}
,
t.PointCloud = function(t, e) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
    new Ta(t,e)
}
,
t.PointCloudMaterial = function(t) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
    new _a(t)
}
,
t.PointLight = Zl,
t.PointLightHelper = class extends Wn {
    constructor(t, e, n) {
        super(new So(e,4,2), new en({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        })),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.color = n,
        this.type = "PointLightHelper",
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    dispose() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    update() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }
}
,
t.Points = Ta,
t.PointsMaterial = _a,
t.PolarGridHelper = class extends ya {
    constructor(t=10, e=16, n=8, i=64, r=4473924, s=8947848) {
        r = new tn(r),
        s = new tn(s);
        const a = []
          , o = [];
        for (let n = 0; n <= e; n++) {
            const i = n / e * (2 * Math.PI)
              , l = Math.sin(i) * t
              , c = Math.cos(i) * t;
            a.push(0, 0, 0),
            a.push(l, 0, c);
            const h = 1 & n ? r : s;
            o.push(h.r, h.g, h.b),
            o.push(h.r, h.g, h.b)
        }
        for (let e = 0; e <= n; e++) {
            const l = 1 & e ? r : s
              , c = t - t / n * e;
            for (let t = 0; t < i; t++) {
                let e = t / i * (2 * Math.PI)
                  , n = Math.sin(e) * c
                  , r = Math.cos(e) * c;
                a.push(n, 0, r),
                o.push(l.r, l.g, l.b),
                e = (t + 1) / i * (2 * Math.PI),
                n = Math.sin(e) * c,
                r = Math.cos(e) * c,
                a.push(n, 0, r),
                o.push(l.r, l.g, l.b)
            }
        }
        const l = new En;
        l.setAttribute("position", new mn(a,3)),
        l.setAttribute("color", new mn(o,3));
        super(l, new ca({
            vertexColors: !0,
            toneMapped: !1
        })),
        this.type = "PolarGridHelper"
    }
}
,
t.PolyhedronBufferGeometry = Na,
t.PolyhedronGeometry = Na,
t.PositionalAudio = class extends Lc {
    constructor(t) {
        super(t),
        this.panner = this.context.createPanner(),
        this.panner.panningModel = "HRTF",
        this.panner.connect(this.gain)
    }
    getOutput() {
        return this.panner
    }
    getRefDistance() {
        return this.panner.refDistance
    }
    setRefDistance(t) {
        return this.panner.refDistance = t,
        this
    }
    getRolloffFactor() {
        return this.panner.rolloffFactor
    }
    setRolloffFactor(t) {
        return this.panner.rolloffFactor = t,
        this
    }
    getDistanceModel() {
        return this.panner.distanceModel
    }
    setDistanceModel(t) {
        return this.panner.distanceModel = t,
        this
    }
    getMaxDistance() {
        return this.panner.maxDistance
    }
    setMaxDistance(t) {
        return this.panner.maxDistance = t,
        this
    }
    setDirectionalCone(t, e, n) {
        return this.panner.coneInnerAngle = t,
        this.panner.coneOuterAngle = e,
        this.panner.coneOuterGain = n,
        this
    }
    updateMatrixWorld(t) {
        if (super.updateMatrixWorld(t),
        !0 === this.hasPlaybackControl && !1 === this.isPlaying)
            return;
        this.matrixWorld.decompose(Rc, Cc, Pc),
        Dc.set(0, 0, 1).applyQuaternion(Cc);
        const e = this.panner;
        if (e.positionX) {
            const t = this.context.currentTime + this.listener.timeDelta;
            e.positionX.linearRampToValueAtTime(Rc.x, t),
            e.positionY.linearRampToValueAtTime(Rc.y, t),
            e.positionZ.linearRampToValueAtTime(Rc.z, t),
            e.orientationX.linearRampToValueAtTime(Dc.x, t),
            e.orientationY.linearRampToValueAtTime(Dc.y, t),
            e.orientationZ.linearRampToValueAtTime(Dc.z, t)
        } else
            e.setPosition(Rc.x, Rc.y, Rc.z),
            e.setOrientation(Dc.x, Dc.y, Dc.z)
    }
}
,
t.PropertyBinding = jc,
t.PropertyMixer = Nc,
t.QuadraticBezierCurve = Cl,
t.QuadraticBezierCurve3 = Pl,
t.Quaternion = At,
t.QuaternionKeyframeTrack = $o,
t.QuaternionLinearInterpolant = Ko,
t.REVISION = e,
t.RGBADepthPacking = 3201,
t.RGBAFormat = E,
t.RGBAIntegerFormat = 1033,
t.RGBA_ASTC_10x10_Format = 37819,
t.RGBA_ASTC_10x5_Format = 37816,
t.RGBA_ASTC_10x6_Format = 37817,
t.RGBA_ASTC_10x8_Format = 37818,
t.RGBA_ASTC_12x10_Format = 37820,
t.RGBA_ASTC_12x12_Format = 37821,
t.RGBA_ASTC_4x4_Format = 37808,
t.RGBA_ASTC_5x4_Format = 37809,
t.RGBA_ASTC_5x5_Format = 37810,
t.RGBA_ASTC_6x5_Format = 37811,
t.RGBA_ASTC_6x6_Format = 37812,
t.RGBA_ASTC_8x5_Format = 37813,
t.RGBA_ASTC_8x6_Format = 37814,
t.RGBA_ASTC_8x8_Format = 37815,
t.RGBA_BPTC_Format = 36492,
t.RGBA_ETC2_EAC_Format = O,
t.RGBA_PVRTC_2BPPV1_Format = z,
t.RGBA_PVRTC_4BPPV1_Format = B,
t.RGBA_S3TC_DXT1_Format = C,
t.RGBA_S3TC_DXT3_Format = P,
t.RGBA_S3TC_DXT5_Format = D,
t.RGBDEncoding = $,
t.RGBEEncoding = J,
t.RGBEFormat = 1023,
t.RGBFormat = T,
t.RGBIntegerFormat = 1032,
t.RGBM16Encoding = K,
t.RGBM7Encoding = Q,
t.RGB_ETC1_Format = 36196,
t.RGB_ETC2_Format = F,
t.RGB_PVRTC_2BPPV1_Format = N,
t.RGB_PVRTC_4BPPV1_Format = I,
t.RGB_S3TC_DXT1_Format = R,
t.RGFormat = 1030,
t.RGIntegerFormat = 1031,
t.RawShaderMaterial = Io,
t.Ray = re,
t.Raycaster = class {
    constructor(t, e, n=0, i=1 / 0) {
        this.ray = new re(t,e),
        this.near = n,
        this.far = i,
        this.camera = null,
        this.layers = new ge,
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }
    }
    set(t, e) {
        this.ray.set(t, e)
    }
    setFromCamera(t, e) {
        e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(),
        this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
        this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
        this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
    }
    intersectObject(t, e=!1, n=[]) {
        return $c(t, this, n, e),
        n.sort(Kc),
        n
    }
    intersectObjects(t, e=!1, n=[]) {
        for (let i = 0, r = t.length; i < r; i++)
            $c(t[i], this, n, e);
        return n.sort(Kc),
        n
    }
}
,
t.RectAreaLight = tc,
t.RedFormat = 1028,
t.RedIntegerFormat = 1029,
t.ReinhardToneMapping = 2,
t.RepeatWrapping = h,
t.ReplaceStencilOp = 7681,
t.ReverseSubtractEquation = 102,
t.RingBufferGeometry = bo,
t.RingGeometry = bo,
t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851,
t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848,
t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849,
t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850,
t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852,
t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853,
t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840,
t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841,
t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842,
t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843,
t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844,
t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845,
t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846,
t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847,
t.Scene = Ts,
t.SceneUtils = eu,
t.ShaderChunk = hi,
t.ShaderLib = di,
t.ShaderMaterial = Jn,
t.ShadowMaterial = Do,
t.Shape = zl,
t.ShapeBufferGeometry = Mo,
t.ShapeGeometry = Mo,
t.ShapePath = dc,
t.ShapeUtils = po,
t.ShortType = 1011,
t.Skeleton = ia,
t.SkeletonHelper = hh,
t.SkinnedMesh = $s,
t.SmoothShading = 2,
t.Sphere = Jt,
t.SphereBufferGeometry = So,
t.SphereGeometry = So,
t.Spherical = class {
    constructor(t=1, e=0, n=0) {
        return this.radius = t,
        this.phi = e,
        this.theta = n,
        this
    }
    set(t, e, n) {
        return this.radius = t,
        this.phi = e,
        this.theta = n,
        this
    }
    copy(t) {
        return this.radius = t.radius,
        this.phi = t.phi,
        this.theta = t.theta,
        this
    }
    makeSafe() {
        const t = 1e-6;
        return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)),
        this
    }
    setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    }
    setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + e * e + n * n),
        0 === this.radius ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(t, n),
        this.phi = Math.acos(ht(e / this.radius, -1, 1))),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
,
t.SphericalHarmonics3 = ec,
t.SplineCurve = Dl,
t.SpotLight = Wl,
t.SpotLightHelper = class extends Ce {
    constructor(t, e) {
        super(),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = e;
        const n = new En
          , i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
        for (let t = 0, e = 1, n = 32; t < n; t++,
        e++) {
            const r = t / n * Math.PI * 2
              , s = e / n * Math.PI * 2;
            i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1)
        }
        n.setAttribute("position", new mn(i,3));
        const r = new ca({
            fog: !1,
            toneMapped: !1
        });
        this.cone = new ya(n,r),
        this.add(this.cone),
        this.update()
    }
    dispose() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    update() {
        this.light.updateMatrixWorld();
        const t = this.light.distance ? this.light.distance : 1e3
          , e = t * Math.tan(this.light.angle);
        this.cone.scale.set(e, e, t),
        ah.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(ah),
        void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    }
}
,
t.Sprite = Vs,
t.SpriteMaterial = Rs,
t.SrcAlphaFactor = 204,
t.SrcAlphaSaturateFactor = 210,
t.SrcColorFactor = 202,
t.StaticCopyUsage = 35046,
t.StaticDrawUsage = et,
t.StaticReadUsage = 35045,
t.StereoCamera = class {
    constructor() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.eyeSep = .064,
        this.cameraL = new Kn,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new Kn,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1,
        this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
        }
    }
    update(t) {
        const e = this._cache;
        if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
            e.focus = t.focus,
            e.fov = t.fov,
            e.aspect = t.aspect * this.aspect,
            e.near = t.near,
            e.far = t.far,
            e.zoom = t.zoom,
            e.eyeSep = this.eyeSep;
            const n = t.projectionMatrix.clone()
              , i = e.eyeSep / 2
              , r = i * e.near / e.focus
              , s = e.near * Math.tan(ot * e.fov * .5) / e.zoom;
            let a, o;
            wc.elements[12] = -i,
            _c.elements[12] = i,
            a = -s * e.aspect + r,
            o = s * e.aspect + r,
            n.elements[0] = 2 * e.near / (o - a),
            n.elements[8] = (o + a) / (o - a),
            this.cameraL.projectionMatrix.copy(n),
            a = -s * e.aspect - r,
            o = s * e.aspect - r,
            n.elements[0] = 2 * e.near / (o - a),
            n.elements[8] = (o + a) / (o - a),
            this.cameraR.projectionMatrix.copy(n)
        }
        this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(wc),
        this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(_c)
    }
}
,
t.StreamCopyUsage = 35042,
t.StreamDrawUsage = 35040,
t.StreamReadUsage = 35041,
t.StringKeyframeTrack = tl,
t.SubtractEquation = 101,
t.SubtractiveBlending = 3,
t.TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
},
t.TangentSpaceNormalMap = 0,
t.TetrahedronBufferGeometry = To,
t.TetrahedronGeometry = To,
t.TextBufferGeometry = Eo,
t.TextGeometry = Eo,
t.Texture = bt,
t.TextureLoader = pl,
t.TorusBufferGeometry = Ao,
t.TorusGeometry = Ao,
t.TorusKnotBufferGeometry = Lo,
t.TorusKnotGeometry = Lo,
t.Triangle = je,
t.TriangleFanDrawMode = 2,
t.TriangleStripDrawMode = 1,
t.TrianglesDrawMode = 0,
t.TubeBufferGeometry = Ro,
t.TubeGeometry = Ro,
t.UVMapping = i,
t.Uint16Attribute = function(t, e) {
    return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),
    new hn(t,e)
}
,
t.Uint16BufferAttribute = hn,
t.Uint32Attribute = function(t, e) {
    return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),
    new dn(t,e)
}
,
t.Uint32BufferAttribute = dn,
t.Uint8Attribute = function(t, e) {
    return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
    new on(t,e)
}
,
t.Uint8BufferAttribute = on,
t.Uint8ClampedAttribute = function(t, e) {
    return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),
    new ln(t,e)
}
,
t.Uint8ClampedBufferAttribute = ln,
t.Uniform = Zc,
t.UniformsLib = ui,
t.UniformsUtils = Zn,
t.UnsignedByteType = x,
t.UnsignedInt248Type = S,
t.UnsignedIntType = w,
t.UnsignedShort4444Type = 1017,
t.UnsignedShort5551Type = 1018,
t.UnsignedShort565Type = 1019,
t.UnsignedShortType = _,
t.VSMShadowMap = 3,
t.Vector2 = vt,
t.Vector3 = Lt,
t.Vector4 = St,
t.VectorKeyframeTrack = el,
t.Vertex = function(t, e, n) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
    new Lt(t,e,n)
}
,
t.VertexColors = 2,
t.VideoTexture = Aa,
t.WebGL1Renderer = bs,
t.WebGLCubeRenderTarget = ni,
t.WebGLMultisampleRenderTarget = Et,
t.WebGLRenderTarget = Tt,
t.WebGLRenderTargetCube = function(t, e, n) {
    return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),
    new ni(t,n)
}
,
t.WebGLRenderer = ws,
t.WebGLUtils = ms,
t.WireframeGeometry = Co,
t.WireframeHelper = function(t, e) {
    return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
    new ya(new Co(t.geometry),new ca({
        color: void 0 !== e ? e : 16777215
    }))
}
,
t.WrapAroundEnding = W,
t.XHRLoader = function(t) {
    return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
    new cl(t)
}
,
t.ZeroCurvatureEnding = k,
t.ZeroFactor = 200,
t.ZeroSlopeEnding = V,
t.ZeroStencilOp = 0,
t.sRGBEncoding = Y,
Object.defineProperty(t, "__esModule", {
    value: !0
})
}
));
