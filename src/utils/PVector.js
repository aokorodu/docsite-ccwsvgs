class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  static Subtract(v1, v2) {
    let x = v1.x - v2.x;
    let y = v1.y - v2.y;

    return new PVector(x, y);
  }

  static GetDistance(v1, v2) {
    const dv = this.Subtract(v1, v2);
    return Math.sqrt(dv.x * dv.x + dv.y * dv.y);
  }

  multiply(num) {
    this.x *= num;
    this.y *= num;
  }

  normalize() {
    let num = Math.sqrt(this.x * this.x + this.y * this.y);
    if (num === 0) return;
    this.x = this.x / num;
    this.y = this.y / num;
  }

  reset() {
    this.x = 0;
    this.y = 0;
  }
}

export default PVector;
