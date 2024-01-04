export default class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : undefined;
    this._location = typeof location === 'string' ? location : undefined;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
