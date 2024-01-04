export default class Car {
  constructor(brand, motor, color) {
    this._brand = typeof brand === 'string' ? brand : undefined;
    this._motor = typeof motor === 'string' ? motor : undefined;
    this._color = typeof color === 'string' ? color : undefined;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
