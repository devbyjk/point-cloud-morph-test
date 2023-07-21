crossVectors(t, e) {
    const n = t.x
      , i = t.y
      , r = t.z
      , s = e.x
      , a = e.y
      , o = e.z;
    return this.x = i * o - r * a,
    this.y = r * s - n * o,
    this.z = n * a - i * s,
    this
}
projectOnVector(t) {
    const e = t.lengthSq();
    if (0 === e)
        return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n)
}
projectOnPlane(t) {
    return Rt.copy(this).projectOnVector(t),
    this.sub(Rt)
}
reflect(t) {
    return this.sub(Rt.copy(t).multiplyScalar(2 * this.dot(t)))
}
angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e)
        return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ht(n, -1, 1))
}
distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t))
}
distanceToSquared(t) {
    const e = this.x - t.x
      , n = this.y - t.y
      , i = this.z - t.z;
    return e * e + n * n + i * i
}
manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
}
setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
}
setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n),
    this.y = Math.cos(e) * t,
    this.z = i * Math.cos(n),
    this
}
setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
}
setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e),
    this.y = n,
    this.z = t * Math.cos(e),
    this
}
setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12],
    this.y = e[13],
    this.z = e[14],
    this
}
setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length()
      , n = this.setFromMatrixColumn(t, 1).length()
      , i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e,
    this.y = n,
    this.z = i,
    this
}
setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e)
}
setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e)
}
equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z
}
fromArray(t, e=0) {
    return this.x = t[e],
    this.y = t[e + 1],
    this.z = t[e + 2],
    this
}
toArray(t=[], e=0) {
    return t[e] = this.x,
    t[e + 1] = this.y,
    t[e + 2] = this.z,
    t
}
fromBufferAttribute(t, e, n) {
    return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
    this.x = t.getX(e),
    this.y = t.getY(e),
    this.z = t.getZ(e),
    this
}
random() {
    return this.x = Math.random(),
    this.y = Math.random(),
    this.z = Math.random(),
    this
}
}
Lt.prototype.isVector3 = !0;
const Rt = new Lt
, Ct = new At;
class Pt {
constructor(t=new Lt(1 / 0,1 / 0,1 / 0), e=new Lt(-1 / 0,-1 / 0,-1 / 0)) {
    this.min = t,
    this.max = e
}
set(t, e) {
    return this.min.copy(t),
    this.max.copy(e),
    this
}
setFromArray(t) {
    let e = 1 / 0
      , n = 1 / 0
      , i = 1 / 0
      , r = -1 / 0
      , s = -1 / 0
      , a = -1 / 0;
    for (let o = 0, l = t.length; o < l; o += 3) {
        const l = t[o]
          , c = t[o + 1]
          , h = t[o + 2];
        l < e && (e = l),
        c < n && (n = c),
        h < i && (i = h),
        l > r && (r = l),
        c > s && (s = c),
        h > a && (a = h)
    }
    return this.min.set(e, n, i),
    this.max.set(r, s, a),
    this
}
setFromBufferAttribute(t) {
    let e = 1 / 0
      , n = 1 / 0
      , i = 1 / 0
      , r = -1 / 0
      , s = -1 / 0
      , a = -1 / 0;
    for (let o = 0, l = t.count; o < l; o++) {
        const l = t.getX(o)
          , c = t.getY(o)
          , h = t.getZ(o);
        l < e && (e = l),
        c < n && (n = c),
        h < i && (i = h),
        l > r && (r = l),
        c > s && (s = c),
        h > a && (a = h)
    }
    return this.min.set(e, n, i),
    this.max.set(r, s, a),
    this
}
setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
        this.expandByPoint(t[e]);
    return this
}
setFromCenterAndSize(t, e) {
    const n = It.copy(e).multiplyScalar(.5);
    return this.min.copy(t).sub(n),
    this.max.copy(t).add(n),
    this
}
setFromObject(t) {
    return this.makeEmpty(),
    this.expandByObject(t)
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
    return this.min.x = this.min.y = this.min.z = 1 / 0,
    this.max.x = this.max.y = this.max.z = -1 / 0,
    this
}
isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
}
getCenter(t) {
    return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
    t = new Lt),
    this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
}
getSize(t) {
    return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
    t = new Lt),
    this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
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
expandByObject(t) {
    t.updateWorldMatrix(!1, !1);
    const e = t.geometry;
    void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
    Nt.copy(e.boundingBox),
    Nt.applyMatrix4(t.matrixWorld),
    this.union(Nt));
    const n = t.children;
    for (let t = 0, e = n.length; t < e; t++)
        this.expandByObject(n[t]);
    return this
}
containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
}
containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
}
getParameter(t, e) {
    return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
    e = new Lt),
    e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
}
intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
}
intersectsSphere(t) {
    return this.clampPoint(t.center, It),
    It.distanceToSquared(t.center) <= t.radius * t.radius
}
intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
    n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
    n = t.normal.x * this.min.x),
    t.normal.y > 0 ? (e += t.normal.y * this.min.y,
    n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
    n += t.normal.y * this.min.y),
    t.normal.z > 0 ? (e += t.normal.z * this.min.z,
    n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
    n += t.normal.z * this.min.z),
    e <= -t.constant && n >= -t.constant
}
intersectsTriangle(t) {
    if (this.isEmpty())
        return !1;
    this.getCenter(Ut),
    kt.subVectors(this.max, Ut),
    Bt.subVectors(t.a, Ut),
    zt.subVectors(t.b, Ut),
    Ft.subVectors(t.c, Ut),
    Ot.subVectors(zt, Bt),
    Ht.subVectors(Ft, zt),
    Gt.subVectors(Bt, Ft);
    let e = [0, -Ot.z, Ot.y, 0, -Ht.z, Ht.y, 0, -Gt.z, Gt.y, Ot.z, 0, -Ot.x, Ht.z, 0, -Ht.x, Gt.z, 0, -Gt.x, -Ot.y, Ot.x, 0, -Ht.y, Ht.x, 0, -Gt.y, Gt.x, 0];
    return !!jt(e, Bt, zt, Ft, kt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
    !!jt(e, Bt, zt, Ft, kt) && (Vt.crossVectors(Ot, Ht),
    e = [Vt.x, Vt.y, Vt.z],
    jt(e, Bt, zt, Ft, kt)))
}
clampPoint(t, e) {
    return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
    e = new Lt),
    e.copy(t).clamp(this.min, this.max)
}
distanceToPoint(t) {
    return It.copy(t).clamp(this.min, this.max).sub(t).length()
}
getBoundingSphere(t) {
    return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
    this.getCenter(t.center),
    t.radius = .5 * this.getSize(It).length(),
    t
}
intersect(t) {
    return this.min.max(t.min),
    this.max.min(t.max),
    this.isEmpty() && this.makeEmpty(),
    this
}
union(t) {
    return this.min.min(t.min),
    this.max.max(t.max),
    this
}
applyMatrix4(t) {
    return this.isEmpty() || (Dt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
    Dt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
    Dt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
    Dt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
    Dt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
    Dt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
    Dt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
    Dt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
    this.setFromPoints(Dt)),
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
Pt.prototype.isBox3 = !0;
const Dt = [new Lt, new Lt, new Lt, new Lt, new Lt, new Lt, new Lt, new Lt]
, It = new Lt
, Nt = new Pt
, Bt = new Lt
, zt = new Lt
, Ft = new Lt
, Ot = new Lt
, Ht = new Lt
, Gt = new Lt
, Ut = new Lt
, kt = new Lt
, Vt = new Lt
, Wt = new Lt;
function jt(t, e, n, i, r) {
for (let s = 0, a = t.length - 3; s <= a; s += 3) {
    Wt.fromArray(t, s);
    const a = r.x * Math.abs(Wt.x) + r.y * Math.abs(Wt.y) + r.z * Math.abs(Wt.z)
      , o = e.dot(Wt)
      , l = n.dot(Wt)
      , c = i.dot(Wt);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a)
        return !1
}
return !0
}
const qt = new Pt
, Xt = new Lt
, Yt = new Lt
, Zt = new Lt;
class Jt {
constructor(t=new Lt, e=-1) {
    this.center = t,
    this.radius = e
}
set(t, e) {
    return this.center.copy(t),
    this.radius = e,
    this
}
setFromPoints(t, e) {
    const n = this.center;
    void 0 !== e ? n.copy(e) : qt.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let e = 0, r = t.length; e < r; e++)
        i = Math.max(i, n.distanceToSquared(t[e]));
    return this.radius = Math.sqrt(i),
    this
}
copy(t) {
    return this.center.copy(t.center),
    this.radius = t.radius,
    this
}
isEmpty() {
    return this.radius < 0
}
makeEmpty() {
    return this.center.set(0, 0, 0),
    this.radius = -1,
    this
}
containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius
}
distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius
}
intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e
}
intersectsBox(t) {
    return t.intersectsSphere(this)
}
intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius
}
clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
    e = new Lt),
    e.copy(t),
    n > this.radius * this.radius && (e.sub(this.center).normalize(),
    e.multiplyScalar(this.radius).add(this.center)),
    e
}
getBoundingBox(t) {
    return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
    t = new Pt),
    this.isEmpty() ? (t.makeEmpty(),
    t) : (t.set(this.center, this.center),
    t.expandByScalar(this.radius),
    t)
}
applyMatrix4(t) {
    return this.center.applyMatrix4(t),
    this.radius = this.radius * t.getMaxScaleOnAxis(),
    this
}
translate(t) {
    return this.center.add(t),
    this
}
expandByPoint(t) {
    Zt.subVectors(t, this.center);
    const e = Zt.lengthSq();
    if (e > this.radius * this.radius) {
        const t = Math.sqrt(e)
          , n = .5 * (t - this.radius);
        this.center.add(Zt.multiplyScalar(n / t)),
        this.radius += n
    }
    return this
}
union(t) {
    return Yt.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius),
    this.expandByPoint(Xt.copy(t.center).add(Yt)),
    this.expandByPoint(Xt.copy(t.center).sub(Yt)),
    this
}
equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius
}
clone() {
    return (new this.constructor).copy(this)
}
}
const Qt = new Lt
, Kt = new Lt
, $t = new Lt
, te = new Lt
, ee = new Lt
, ne = new Lt
, ie = new Lt;
class re {
constructor(t=new Lt, e=new Lt(0,0,-1)) {
    this.origin = t,
    this.direction = e
}
set(t, e) {
    return this.origin.copy(t),
    this.direction.copy(e),
    this
}
copy(t) {
    return this.origin.copy(t.origin),
    this.direction.copy(t.direction),
    this
}
at(t, e) {
    return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
    e = new Lt),
    e.copy(this.direction).multiplyScalar(t).add(this.origin)
}
lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(),
    this
}
recast(t) {
    return this.origin.copy(this.at(t, Qt)),
    this
}
closestPointToPoint(t, e) {
    void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
    e = new Lt),
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
}
distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t))
}
distanceSqToPoint(t) {
    const e = Qt.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Qt.copy(this.direction).multiplyScalar(e).add(this.origin),
    Qt.distanceToSquared(t))
}
distanceSqToSegment(t, e, n, i) {
    Kt.copy(t).add(e).multiplyScalar(.5),
    $t.copy(e).sub(t).normalize(),
    te.copy(this.origin).sub(Kt);
    const r = .5 * t.distanceTo(e)
      , s = -this.direction.dot($t)
      , a = te.dot(this.direction)
      , o = -te.dot($t)
      , l = te.lengthSq()
      , c = Math.abs(1 - s * s);
    let h, u, d, p;
    if (c > 0)
        if (h = s * o - a,
        u = s * a - o,
        p = r * c,
        h >= 0)
            if (u >= -p)
                if (u <= p) {
                    const t = 1 / c;
                    h *= t,
                    u *= t,
                    d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
                } else
                    u = r,
                    h = Math.max(0, -(s * u + a)),
                    d = -h * h + u * (u + 2 * o) + l;
            else
                u = -r,
                h = Math.max(0, -(s * u + a)),
                d = -h * h + u * (u + 2 * o) + l;
        else
            u <= -p ? (h = Math.max(0, -(-s * r + a)),
            u = h > 0 ? -r : Math.min(Math.max(-r, -o), r),
            d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0,
            u = Math.min(Math.max(-r, -o), r),
            d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)),
            u = h > 0 ? r : Math.min(Math.max(-r, -o), r),
            d = -h * h + u * (u + 2 * o) + l);
    else
        u = s > 0 ? -r : r,
        h = Math.max(0, -(s * u + a)),
        d = -h * h + u * (u + 2 * o) + l;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
    i && i.copy($t).multiplyScalar(u).add(Kt),
    d
}
intersectSphere(t, e) {
    Qt.subVectors(t.center, this.origin);
    const n = Qt.dot(this.direction)
      , i = Qt.dot(Qt) - n * n
      , r = t.radius * t.radius;
    if (i > r)
        return null;
    const s = Math.sqrt(r - i)
      , a = n - s
      , o = n + s;
    return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
}
intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius
}
distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (0 === e)
        return 0 === t.distanceToPoint(this.origin) ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null
}
intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return null === n ? null : this.at(n, e)
}
intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    if (0 === e)
        return !0;
    return t.normal.dot(this.direction) * e < 0
}
intersectBox(t, e) {
    let n, i, r, s, a, o;
    const l = 1 / this.direction.x
      , c = 1 / this.direction.y
      , h = 1 / this.direction.z
      , u = this.origin;
    return l >= 0 ? (n = (t.min.x - u.x) * l,
    i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l,
    i = (t.min.x - u.x) * l),
    c >= 0 ? (r = (t.min.y - u.y) * c,
    s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c,
    s = (t.min.y - u.y) * c),
    n > s || r > i ? null : ((r > n || n != n) && (n = r),
    (s < i || i != i) && (i = s),
    h >= 0 ? (a = (t.min.z - u.z) * h,
    o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h,
    o = (t.min.z - u.z) * h),
    n > o || a > i ? null : ((a > n || n != n) && (n = a),
    (o < i || i != i) && (i = o),
    i < 0 ? null : this.at(n >= 0 ? n : i, e)))
}
intersectsBox(t) {
    return null !== this.intersectBox(t, Qt)
}
intersectTriangle(t, e, n, i, r) {
    ee.subVectors(e, t),
    ne.subVectors(n, t),
    ie.crossVectors(ee, ne);
    let s, a = this.direction.dot(ie);
    if (a > 0) {
        if (i)
            return null;
        s = 1
    } else {
        if (!(a < 0))
            return null;
        s = -1,
        a = -a
    }
    te.subVectors(this.origin, t);
    const o = s * this.direction.dot(ne.crossVectors(te, ne));
    if (o < 0)
        return null;
    const l = s * this.direction.dot(ee.cross(te));
    if (l < 0)
        return null;
    if (o + l > a)
        return null;
    const c = -s * te.dot(ie);
    return c < 0 ? null : this.at(c / a, r)
}
applyMatrix4(t) {
    return this.origin.applyMatrix4(t),
    this.direction.transformDirection(t),
    this
}
equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction)
}
clone() {
    return (new this.constructor).copy(this)
}
}
class se {
constructor() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
    const g = this.elements;
    return g[0] = t,
    g[4] = e,
    g[8] = n,
    g[12] = i,
    g[1] = r,
    g[5] = s,
    g[9] = a,
    g[13] = o,
    g[2] = l,
    g[6] = c,
    g[10] = h,
    g[14] = u,
    g[3] = d,
    g[7] = p,
    g[11] = m,
    g[15] = f,
    this
}
identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
    this
}
clone() {
    return (new se).fromArray(this.elements)
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
    e[9] = n[9],
    e[10] = n[10],
    e[11] = n[11],
    e[12] = n[12],
    e[13] = n[13],
    e[14] = n[14],
    e[15] = n[15],
    this
}
copyPosition(t) {
    const e = this.elements
      , n = t.elements;
    return e[12] = n[12],
    e[13] = n[13],
    e[14] = n[14],
    this
}
setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
    this
}
extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0),
    e.setFromMatrixColumn(this, 1),
    n.setFromMatrixColumn(this, 2),
    this
}
makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
    this
}
extractRotation(t) {
    const e = this.elements
      , n = t.elements
      , i = 1 / ae.setFromMatrixColumn(t, 0).length()
      , r = 1 / ae.setFromMatrixColumn(t, 1).length()
      , s = 1 / ae.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i,
    e[1] = n[1] * i,
    e[2] = n[2] * i,
    e[3] = 0,
    e[4] = n[4] * r,
    e[5] = n[5] * r,
    e[6] = n[6] * r,
    e[7] = 0,
    e[8] = n[8] * s,
    e[9] = n[9] * s,
    e[10] = n[10] * s,
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    this
}
makeRotationFromEuler(t) {
    t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    const e = this.elements
      , n = t.x
      , i = t.y
      , r = t.z
      , s = Math.cos(n)
      , a = Math.sin(n)
      , o = Math.cos(i)
      , l = Math.sin(i)
      , c = Math.cos(r)
      , h = Math.sin(r);
    if ("XYZ" === t.order) {
        const t = s * c
          , n = s * h
          , i = a * c
          , r = a * h;
        e[0] = o * c,
        e[4] = -o * h,
        e[8] = l,
        e[1] = n + i * l,
        e[5] = t - r * l,
        e[9] = -a * o,
        e[2] = r - t * l,
        e[6] = i + n * l,
        e[10] = s * o
    } else if ("YXZ" === t.order) {
        const t = o * c
          , n = o * h
          , i = l * c
          , r = l * h;
        e[0] = t + r * a,
        e[4] = i * a - n,
        e[8] = s * l,
        e[1] = s * h,
        e[5] = s * c,
        e[9] = -a,
        e[2] = n * a - i,
        e[6] = r + t * a,
        e[10] = s * o
    } else if ("ZXY" === t.order) {
        const t = o * c
          , n = o * h
          , i = l * c
          , r = l * h;
        e[0] = t - r * a,
        e[4] = -s * h,
        e[8] = i + n * a,
        e[1] = n + i * a,
        e[5] = s * c,
        e[9] = r - t * a,
        e[2] = -s * l,
        e[6] = a,
        e[10] = s * o
    } else if ("ZYX" === t.order) {
        const t = s * c
          , n = s * h
          , i = a * c
          , r = a * h;
        e[0] = o * c,
        e[4] = i * l - n,
        e[8] = t * l + r,
        e[1] = o * h,
        e[5] = r * l + t,
        e[9] = n * l - i,
        e[2] = -l,
        e[6] = a * o,
        e[10] = s * o
    } else if ("YZX" === t.order) {
        const t = s * o
          , n = s * l
          , i = a * o
          , r = a * l;
        e[0] = o * c,
        e[4] = r - t * h,
        e[8] = i * h + n,
        e[1] = h,
        e[5] = s * c,
        e[9] = -a * c,
        e[2] = -l * c,
        e[6] = n * h + i,
        e[10] = t - r * h
    } else if ("XZY" === t.order) {
        const t = s * o
          , n = s * l
          , i = a * o
          , r = a * l;
        e[0] = o * c,
        e[4] = -h,
        e[8] = l * c,
        e[1] = t * h + r,
        e[5] = s * c,
        e[9] = n * h - i,
        e[2] = i * h - n,
        e[6] = a * c,
        e[10] = r * h + t
    }
    return e[3] = 0,
    e[7] = 0,
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    this
}
makeRotationFromQuaternion(t) {
    return this.compose(le, t, ce)
}
lookAt(t, e, n) {
    const i = this.elements;
    return de.subVectors(t, e),
    0 === de.lengthSq() && (de.z = 1),
    de.normalize(),
    he.crossVectors(n, de),
    0 === he.lengthSq() && (1 === Math.abs(n.z) ? de.x += 1e-4 : de.z += 1e-4,
    de.normalize(),
    he.crossVectors(n, de)),
    he.normalize(),
    ue.crossVectors(de, he),
    i[0] = he.x,
    i[4] = ue.x,
    i[8] = de.x,
    i[1] = he.y,
    i[5] = ue.y,
    i[9] = de.y,
    i[2] = he.z,
    i[6] = ue.z,
    i[10] = de.z,
    this
}
multiply(t, e) {
    return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
    this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
}
premultiply(t) {
    return this.multiplyMatrices(t, this)
}
multiplyMatrices(t, e) {
    const n = t.elements
      , i = e.elements
      , r = this.elements
      , s = n[0]
      , a = n[4]
      , o = n[8]
      , l = n[12]
      , c = n[1]
      , h = n[5]
      , u = n[9]
      , d = n[13]
      , p = n[2]
      , m = n[6]
      , f = n[10]
      , g = n[14]
      , v = n[3]
      , y = n[7]
      , x = n[11]
      , _ = n[15]
      , w = i[0]
      , b = i[4]
      , M = i[8]
      , S = i[12]
      , T = i[1]
      , E = i[5]
      , A = i[9]
      , L = i[13]
      , R = i[2]
      , C = i[6]
      , P = i[10]
      , D = i[14]
      , I = i[3]
      , N = i[7]
      , B = i[11]
      , z = i[15];
    return r[0] = s * w + a * T + o * R + l * I,
    r[4] = s * b + a * E + o * C + l * N,
    r[8] = s * M + a * A + o * P + l * B,
    r[12] = s * S + a * L + o * D + l * z,
    r[1] = c * w + h * T + u * R + d * I,
    r[5] = c * b + h * E + u * C + d * N,
    r[9] = c * M + h * A + u * P + d * B,
    r[13] = c * S + h * L + u * D + d * z,
    r[2] = p * w + m * T + f * R + g * I,
    r[6] = p * b + m * E + f * C + g * N,
    r[10] = p * M + m * A + f * P + g * B,
    r[14] = p * S + m * L + f * D + g * z,
    r[3] = v * w + y * T + x * R + _ * I,
    r[7] = v * b + y * E + x * C + _ * N,
    r[11] = v * M + y * A + x * P + _ * B,
    r[15] = v * S + y * L + x * D + _ * z,
    this
}
multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t,
    e[4] *= t,
    e[8] *= t,
    e[12] *= t,
    e[1] *= t,
    e[5] *= t,
    e[9] *= t,
    e[13] *= t,
    e[2] *= t,
    e[6] *= t,
    e[10] *= t,
    e[14] *= t,
    e[3] *= t,
    e[7] *= t,
    e[11] *= t,
    e[15] *= t,
    this
}
determinant() {
    const t = this.elements
      , e = t[0]
      , n = t[4]
      , i = t[8]
      , r = t[12]
      , s = t[1]
      , a = t[5]
      , o = t[9]
      , l = t[13]
      , c = t[2]
      , h = t[6]
      , u = t[10]
      , d = t[14];
    return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
}
transpose() {
    const t = this.elements;
    let e;
    return e = t[1],
    t[1] = t[4],
    t[4] = e,
    e = t[2],
    t[2] = t[8],
    t[8] = e,
    e = t[6],
    t[6] = t[9],
    t[9] = e,
    e = t[3],
    t[3] = t[12],
    t[12] = e,
    e = t[7],
    t[7] = t[13],
    t[13] = e,
    e = t[11],
    t[11] = t[14],
    t[14] = e,
    this
}
setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x,
    i[13] = t.y,
    i[14] = t.z) : (i[12] = t,
    i[13] = e,
    i[14] = n),
    this
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
      , h = t[9]
      , u = t[10]
      , d = t[11]
      , p = t[12]
      , m = t[13]
      , f = t[14]
      , g = t[15]
      , v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g
      , y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g
      , x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g
      , _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f
      , w = e * v + n * y + i * x + r * _;
    if (0 === w)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / w;
    return t[0] = v * b,
    t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * b,
    t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * b,
    t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * b,
    t[4] = y * b,
    t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * b,
    t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * b,
    t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * b,
    t[8] = x * b,
    t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * b,
    t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * b,
    t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * b,
    t[12] = _ * b,
    t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * b,
    t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * b,
    t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * b,
    this
}
scale(t) {
    const e = this.elements
      , n = t.x
      , i = t.y
      , r = t.z;
    return e[0] *= n,
    e[4] *= i,
    e[8] *= r,
    e[1] *= n,
    e[5] *= i,
    e[9] *= r,
    e[2] *= n,
    e[6] *= i,
    e[10] *= r,
    e[3] *= n,
    e[7] *= i,
    e[11] *= r,
    this
}
getMaxScaleOnAxis() {
    const t = this.elements
      , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
      , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
      , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i))
}
makeTranslation(t, e, n) {
    return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
    this
}
makeRotationX(t) {
    const e = Math.cos(t)
      , n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
    this
}
makeRotationY(t) {
    const e = Math.cos(t)
      , n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
    this
}
makeRotationZ(t) {
    const e = Math.cos(t)
      , n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
    this
}
makeRotationAxis(t, e) {
    const n = Math.cos(e)
      , i = Math.sin(e)
      , r = 1 - n
      , s = t.x
      , a = t.y
      , o = t.z
      , l = r * s
      , c = r * a;
    return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1),
    this
}
makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
    this
}
makeShear(t, e, n) {
    return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1),
    this
}
compose(t, e, n) {
    const i = this.elements
      , r = e._x
      , s = e._y
      , a = e._z
      , o = e._w
      , l = r + r
      , c = s + s
      , h = a + a
      , u = r * l
      , d = r * c
      , p = r * h
      , m = s * c
      , f = s * h
      , g = a * h
      , v = o * l
      , y = o * c
      , x = o * h
      , _ = n.x
      , w = n.y
      , b = n.z;
    return i[0] = (1 - (m + g)) * _,
    i[1] = (d + x) * _,
    i[2] = (p - y) * _,
    i[3] = 0,
    i[4] = (d - x) * w,
    i[5] = (1 - (u + g)) * w,
    i[6] = (f + v) * w,
    i[7] = 0,
    i[8] = (p + y) * b,
    i[9] = (f - v) * b,
    i[10] = (1 - (u + m)) * b,
    i[11] = 0,
    i[12] = t.x,
    i[13] = t.y,
    i[14] = t.z,
    i[15] = 1,
    this
}
decompose(t, e, n) {
    const i = this.elements;
    let r = ae.set(i[0], i[1], i[2]).length();
    const s = ae.set(i[4], i[5], i[6]).length()
      , a = ae.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
    t.x = i[12],
    t.y = i[13],
    t.z = i[14],
    oe.copy(this);
    const o = 1 / r
      , l = 1 / s
      , c = 1 / a;
    return oe.elements[0] *= o,
    oe.elements[1] *= o,
    oe.elements[2] *= o,
    oe.elements[4] *= l,
    oe.elements[5] *= l,
    oe.elements[6] *= l,
    oe.elements[8] *= c,
    oe.elements[9] *= c,
    oe.elements[10] *= c,
    e.setFromRotationMatrix(oe),
    n.x = r,
    n.y = s,
    n.z = a,
    this
}
makePerspective(t, e, n, i, r, s) {
    void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    const a = this.elements
      , o = 2 * r / (e - t)
      , l = 2 * r / (n - i)
      , c = (e + t) / (e - t)
      , h = (n + i) / (n - i)
      , u = -(s + r) / (s - r)
      , d = -2 * s * r / (s - r);
    return a[0] = o,
    a[4] = 0,
    a[8] = c,
    a[12] = 0,
    a[1] = 0,
    a[5] = l,
    a[9] = h,
    a[13] = 0,
    a[2] = 0,
    a[6] = 0,
    a[10] = u,
    a[14] = d,
    a[3] = 0,
    a[7] = 0,
    a[11] = -1,
    a[15] = 0,
    this
}
makeOrthographic(t, e, n, i, r, s) {
    const a = this.elements
      , o = 1 / (e - t)
      , l = 1 / (n - i)
      , c = 1 / (s - r)
      , h = (e + t) * o
      , u = (n + i) * l
      , d = (s + r) * c;
    return a[0] = 2 * o,
    a[4] = 0,
    a[8] = 0,
    a[12] = -h,
    a[1] = 0,
    a[5] = 2 * l,
    a[9] = 0,
    a[13] = -u,
    a[2] = 0,
    a[6] = 0,
    a[10] = -2 * c,
    a[14] = -d,
    a[3] = 0,
    a[7] = 0,
    a[11] = 0,
    a[15] = 1,
    this
}
equals(t) {
    const e = this.elements
      , n = t.elements;
    for (let t = 0; t < 16; t++)
        if (e[t] !== n[t])
            return !1;
    return !0
}
fromArray(t, e=0) {
    for (let n = 0; n < 16; n++)
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
    t[e + 9] = n[9],
    t[e + 10] = n[10],
    t[e + 11] = n[11],
    t[e + 12] = n[12],
    t[e + 13] = n[13],
    t[e + 14] = n[14],
    t[e + 15] = n[15],
    t
}
}
se.prototype.isMatrix4 = !0;
const ae = new Lt
, oe = new se
, le = new Lt(0,0,0)
, ce = new Lt(1,1,1)
, he = new Lt
, ue = new Lt
, de = new Lt
, pe = new se
, me = new At;
class fe {
constructor(t=0, e=0, n=0, i=fe.DefaultOrder) {
    this._x = t,
    this._y = e,
    this._z = n,
    this._order = i
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
get order() {
    return this._order
}
set order(t) {
    this._order = t,
    this._onChangeCallback()
}
set(t, e, n, i) {
    return this._x = t,
    this._y = e,
    this._z = n,
    this._order = i || this._order,
    this._onChangeCallback(),
    this
}
clone() {
    return new this.constructor(this._x,this._y,this._z,this._order)
}
copy(t) {
    return this._x = t._x,
    this._y = t._y,
    this._z = t._z,
    this._order = t._order,
    this._onChangeCallback(),
    this
}
setFromRotationMatrix(t, e, n) {
    const i = t.elements
      , r = i[0]
      , s = i[4]
      , a = i[8]
      , o = i[1]
      , l = i[5]
      , c = i[9]
      , h = i[2]
      , u = i[6]
      , d = i[10];
    switch (e = e || this._order) {
    case "XYZ":
        this._y = Math.asin(ht(a, -1, 1)),
        Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d),
        this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l),
        this._z = 0);
        break;
    case "YXZ":
        this._x = Math.asin(-ht(c, -1, 1)),
        Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d),
        this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r),
        this._z = 0);
        break;
    case "ZXY":
        this._x = Math.asin(ht(u, -1, 1)),
        Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d),
        this._z = Math.atan2(-s, l)) : (this._y = 0,
        this._z = Math.atan2(o, r));
        break;
    case "ZYX":
        this._y = Math.asin(-ht(h, -1, 1)),
        Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d),
        this._z = Math.atan2(o, r)) : (this._x = 0,
        this._z = Math.atan2(-s, l));
        break;
    case "YZX":
        this._z = Math.asin(ht(o, -1, 1)),
        Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l),
        this._y = Math.atan2(-h, r)) : (this._x = 0,
        this._y = Math.atan2(a, d));
        break;
    case "XZY":
        this._z = Math.asin(-ht(s, -1, 1)),
        Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l),
        this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d),
        this._y = 0);
        break;
    default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
    }
    return this._order = e,
    !1 !== n && this._onChangeCallback(),
    this
}
setFromQuaternion(t, e, n) {
    return pe.makeRotationFromQuaternion(t),
    this.setFromRotationMatrix(pe, e, n)
}
setFromVector3(t, e) {
    return this.set(t.x, t.y, t.z, e || this._order)
}
reorder(t) {
    return me.setFromEuler(this),
    this.setFromQuaternion(me, t)
}
equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
}
fromArray(t) {
    return this._x = t[0],
    this._y = t[1],
    this._z = t[2],
    void 0 !== t[3] && (this._order = t[3]),
    this._onChangeCallback(),
    this
}
toArray(t=[], e=0) {
    return t[e] = this._x,
    t[e + 1] = this._y,
    t[e + 2] = this._z,
    t[e + 3] = this._order,
    t
}
toVector3(t) {
    return t ? t.set(this._x, this._y, this._z) : new Lt(this._x,this._y,this._z)
}
_onChange(t) {
    return this._onChangeCallback = t,
    this
}
_onChangeCallback() {}
}
fe.prototype.isEuler = !0,
fe.DefaultOrder = "XYZ",
fe.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ge {
constructor() {
    this.mask = 1
}
set(t) {
    this.mask = 1 << t | 0
}
enable(t) {
    this.mask |= 1 << t | 0
}
enableAll() {
    this.mask = -1
}
toggle(t) {
    this.mask ^= 1 << t | 0
}
disable(t) {
    this.mask &= ~(1 << t | 0)
}
disableAll() {
    this.mask = 0
}
test(t) {
    return 0 != (this.mask & t.mask)
}
}
let ve = 0;
const ye = new Lt
, xe = new At
, _e = new se
, we = new Lt
, be = new Lt
, Me = new Lt
, Se = new At
, Te = new Lt(1,0,0)
, Ee = new Lt(0,1,0)
, Ae = new Lt(0,0,1)
, Le = {
type: "added"
}
, Re = {
type: "removed"
};
class Ce extends rt {
constructor() {
    super(),
    Object.defineProperty(this, "id", {
        value: ve++
    }),
    this.uuid = ct(),
    this.name = "",
    this.type = "Object3D",
    this.parent = null,
    this.children = [],
    this.up = Ce.DefaultUp.clone();
    const t = new Lt
      , e = new fe
      , n = new At
      , i = new Lt(1,1,1);
    e._onChange((function() {
        n.setFromEuler(e, !1)
    }
    )),
    n._onChange((function() {
        e.setFromQuaternion(n, void 0, !1)
    }
    )),
    Object.defineProperties(this, {
        position: {
            configurable: !0,
            enumerable: !0,
            value: t
        },
        rotation: {
            configurable: !0,
            enumerable: !0,
            value: e
        },
        quaternion: {
            configurable: !0,
            enumerable: !0,
            value: n
        },
        scale: {
            configurable: !0,
            enumerable: !0,
            value: i
        },
        modelViewMatrix: {
            value: new se
        },
        normalMatrix: {
            value: new yt
        }
    }),
    this.matrix = new se,
    this.matrixWorld = new se,
    this.matrixAutoUpdate = Ce.DefaultMatrixAutoUpdate,
    this.matrixWorldNeedsUpdate = !1,
    this.layers = new ge,
    this.visible = !0,
    this.castShadow = !1,
    this.receiveShadow = !1,
    this.frustumCulled = !0,
    this.renderOrder = 0,
    this.animations = [],
    this.userData = {}
}
onBeforeRender() {}
onAfterRender() {}
applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
    this.matrix.premultiply(t),
    this.matrix.decompose(this.position, this.quaternion, this.scale)
}
applyQuaternion(t) {
    return this.quaternion.premultiply(t),
    this
}
setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e)
}
setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0)
}
setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t)
}
setRotationFromQuaternion(t) {
    this.quaternion.copy(t)
}
rotateOnAxis(t, e) {
    return xe.setFromAxisAngle(t, e),
    this.quaternion.multiply(xe),
    this
}
rotateOnWorldAxis(t, e) {
    return xe.setFromAxisAngle(t, e),
    this.quaternion.premultiply(xe),
    this
}
rotateX(t) {
    return this.rotateOnAxis(Te, t)
}
rotateY(t) {
    return this.rotateOnAxis(Ee, t)
}
rotateZ(t) {
    return this.rotateOnAxis(Ae, t)
}
translateOnAxis(t, e) {
    return ye.copy(t).applyQuaternion(this.quaternion),
    this.position.add(ye.multiplyScalar(e)),
    this
}
translateX(t) {
    return this.translateOnAxis(Te, t)
}
translateY(t) {
    return this.translateOnAxis(Ee, t)
}
translateZ(t) {
    return this.translateOnAxis(Ae, t)
}
localToWorld(t) {
    return t.applyMatrix4(this.matrixWorld)
}
worldToLocal(t) {
    return t.applyMatrix4(_e.copy(this.matrixWorld).invert())
}
lookAt(t, e, n) {
    t.isVector3 ? we.copy(t) : we.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
    be.setFromMatrixPosition(this.matrixWorld),
    this.isCamera || this.isLight ? _e.lookAt(be, we, this.up) : _e.lookAt(we, be, this.up),
    this.quaternion.setFromRotationMatrix(_e),
    i && (_e.extractRotation(i.matrixWorld),
    xe.setFromRotationMatrix(_e),
    this.quaternion.premultiply(xe.invert()))
}
add(t) {
    if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++)
            this.add(arguments[t]);
        return this
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
    this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
    t.parent = this,
    this.children.push(t),
    t.dispatchEvent(Le)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
    this)
}
remove(t) {
    if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++)
            this.remove(arguments[t]);
        return this
    }
    const e = this.children.indexOf(t);
    return -1 !== e && (t.parent = null,
    this.children.splice(e, 1),
    t.dispatchEvent(Re)),
    this
}
clear() {
    for (let t = 0; t < this.children.length; t++) {
        const e = this.children[t];
        e.parent = null,
        e.dispatchEvent(Re)
    }
    return this.children.length = 0,
    this
}
attach(t) {
    return this.updateWorldMatrix(!0, !1),
    _e.copy(this.matrixWorld).invert(),
    null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
    _e.multiply(t.parent.matrixWorld)),
    t.applyMatrix4(_e),
    this.add(t),
    t.updateWorldMatrix(!1, !0),
    this
}
getObjectById(t) {
    return this.getObjectByProperty("id", t)
}
getObjectByName(t) {
    return this.getObjectByProperty("name", t)
}
getObjectByProperty(t, e) {
    if (this[t] === e)
        return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i)
            return i
    }
}
getWorldPosition(t) {
    return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
    t = new Lt),
    this.updateWorldMatrix(!0, !1),
    t.setFromMatrixPosition(this.matrixWorld)
}
getWorldQuaternion(t) {
    return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
    t = new At),
    this.updateWorldMatrix(!0, !1),
    this.matrixWorld.decompose(be, t, Me),
    t
}
getWorldScale(t) {
    return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
    t = new Lt),
    this.updateWorldMatrix(!0, !1),
    this.matrixWorld.decompose(be, Se, t),
    t
}
getWorldDirection(t) {
    void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
    t = new Lt),
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize()
}
raycast() {}
traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
        e[n].traverse(t)
}
traverseVisible(t) {
    if (!1 === this.visible)
        return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
        e[n].traverseVisible(t)
}
traverseAncestors(t) {
    const e = this.parent;
    null !== e && (t(e),
    e.traverseAncestors(t))
}
updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
    this.matrixWorldNeedsUpdate = !0
}
updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
    (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
    this.matrixWorldNeedsUpdate = !1,
    t = !0);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
        e[n].updateMatrixWorld(t)
}
updateWorldMatrix(t, e) {
    const n = this.parent;
    if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
    this.matrixAutoUpdate && this.updateMatrix(),
    null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
    !0 === e) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++)
            t[e].updateWorldMatrix(!1, !0)
    }
}
toJSON(t) {
    const e = void 0 === t || "string" == typeof t
      , n = {};
    e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {}
    },
    n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
    });
    const i = {};
    function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
        n.uuid
    }
    if (i.uuid = this.uuid,
    i.type = this.type,
    "" !== this.name && (i.name = this.name),
    !0 === this.castShadow && (i.castShadow = !0),
    !0 === this.receiveShadow && (i.receiveShadow = !0),
    !1 === this.visible && (i.visible = !1),
    !1 === this.frustumCulled && (i.frustumCulled = !1),
    0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
    "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
    i.layers = this.layers.mask,
    i.matrix = this.matrix.toArray(),
    !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
    this.isInstancedMesh && (i.type = "InstancedMesh",
    i.count = this.count,
    i.instanceMatrix = this.instanceMatrix.toJSON(),
    null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
    this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
            const n = e.shapes;
            if (Array.isArray(n))
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    r(t.shapes, i)
                }
            else
                r(t.shapes, n)
        }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
    i.bindMatrix = this.bindMatrix.toArray(),
    void 0 !== this.skeleton && (r(t.skeletons, this.skeleton),
    i.skeleton = this.skeleton.uuid)),
    void 0 !== this.material)
        if (Array.isArray(this.material)) {
            const e = [];
            for (let n = 0, i = this.material.length; n < i; n++)
                e.push(r(t.materials, this.material[n]));
            i.material = e
        } else
            i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++)
            i.children.push(this.children[e].toJSON(t).object)
    }
    if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
            const n = this.animations[e];
            i.animations.push(r(t.animations, n))
        }
    }
    if (e) {
        const e = s(t.geometries)
          , i = s(t.materials)
          , r = s(t.textures)
          , a = s(t.images)
          , o = s(t.shapes)
          , l = s(t.skeletons)
          , c = s(t.animations);
        e.length > 0 && (n.geometries = e),
        i.length > 0 && (n.materials = i),
        r.length > 0 && (n.textures = r),
        a.length > 0 && (n.images = a),
        o.length > 0 && (n.shapes = o),
        l.length > 0 && (n.skeletons = l),
        c.length > 0 && (n.animations = c)
    }
    return n.object = i,
    n;
    function s(t) {
        const e = [];
        for (const n in t) {
            const i = t[n];
            delete i.metadata,
            e.push(i)
        }
        return e
    }
}
clone(t) {
    return (new this.constructor).copy(this, t)
}
copy(t, e=!0) {
    if (this.name = t.name,
    this.up.copy(t.up),
    this.position.copy(t.position),
    this.rotation.order = t.rotation.order,
    this.quaternion.copy(t.quaternion),
    this.scale.copy(t.scale),
    this.matrix.copy(t.matrix),
    this.matrixWorld.copy(t.matrixWorld),
    this.matrixAutoUpdate = t.matrixAutoUpdate,
    this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
    this.layers.mask = t.layers.mask,
    this.visible = t.visible,
    this.castShadow = t.castShadow,
    this.receiveShadow = t.receiveShadow,
    this.frustumCulled = t.frustumCulled,
    this.renderOrder = t.renderOrder,
    this.userData = JSON.parse(JSON.stringify(t.userData)),
    !0 === e)
        for (let e = 0; e < t.children.length; e++) {
            const n = t.children[e];
            this.add(n.clone())
        }
    return this
}
}
Ce.DefaultUp = new Lt(0,1,0),
Ce.DefaultMatrixAutoUpdate = !0,
Ce.prototype.isObject3D = !0;
const Pe = new Lt
, De = new Lt
, Ie = new yt;
class Ne {
constructor(t=new Lt(1,0,0), e=0) {
    this.normal = t,
    this.constant = e
}
set(t, e) {
    return this.normal.copy(t),
    this.constant = e,
    this
}
setComponents(t, e, n, i) {
    return this.normal.set(t, e, n),
    this.constant = i,
    this
}
setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t),
    this.constant = -e.dot(this.normal),
    this
}
setFromCoplanarPoints(t, e, n) {
    const i = Pe.subVectors(n, e).cross(De.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t),
    this
}
copy(t) {
    return this.normal.copy(t.normal),
    this.constant = t.constant,
    this
}
normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t),
    this.constant *= t,
    this
}
negate() {
    return this.constant *= -1,
    this.normal.negate(),
    this
}
distanceToPoint(t) {
    return this.normal.dot(t) + this.constant
}
distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius
}
projectPoint(t, e) {
    return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
    e = new Lt),
    e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
}
intersectLine(t, e) {
    void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"),
    e = new Lt);
    const n = t.delta(Pe)
      , i = this.normal.dot(n);
    if (0 === i)
        return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
}
intersectsLine(t) {
    const e = this.distanceToPoint(t.start)
      , n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0
}
intersectsBox(t) {
    return t.intersectsPlane(this)
}
intersectsSphere(t) {
    return t.intersectsPlane(this)
}
coplanarPoint(t) {
    return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
    t = new Lt),
    t.copy(this.normal).multiplyScalar(-this.constant)
}
applyMatrix4(t, e) {
    const n = e || Ie.getNormalMatrix(t)
      , i = this.coplanarPoint(Pe).applyMatrix4(t)
      , r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r),
    this
}
translate(t) {
    return this.constant -= t.dot(this.normal),
    this
}
equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant
}
clone() {
    return (new this.constructor).copy(this)
}