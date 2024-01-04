export default class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'string' ? size : undefined;
    this._location = typeof location === 'number' ? location : undefined;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
