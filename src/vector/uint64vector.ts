import { Uint64 } from "../numeric/uint64.ts";
import { Vector } from "./mod.ts";

export class Uint64Vector extends Vector<Uint64, bigint> {
  constructor(arg: number | Array<Uint64> = 0) {
    if (typeof arg === "number") {
      super(new Array(arg).fill(new Uint64(0n)));
    }
    if (arg instanceof Array) {
      super(arg);
    }
  }
  copyWithin(
    target: number,
    start: number = 0,
    end: number = this.length,
  ): Uint64Vector {
    super.copyWithin(target, start, end);
    return this;
  }
  concat(other: Uint64Vector): Uint64Vector {
    return new Uint64Vector(this.inner.concat(other.inner));
  }
  fill(
    target: Uint64 | bigint,
    start: number = 0,
    end: number = this.length,
  ): Uint64Vector {
    if (typeof target === "bigint") {
      super.fill(new Uint64(target), start, end);
    } else {
      super.fill(target, start, end);
    }
    return this;
  }
  reverse(): Uint64Vector {
    return new Uint64Vector(this.inner.reverse());
  }
  slice(start: number, end: number): Uint64Vector {
    return new Uint64Vector(this.inner.slice(start, end));
  }
  toTypedArray(): BigUint64Array {
    const array = new BigUint64Array(this.inner.length);
    for (let i = 0; i < this.inner.length; i++) {
      array[i] = this.inner[i].value();
    }
    return array;
  }
  static from(
    array: BigUint64Array | Array<Uint64> | Array<bigint>,
  ): Uint64Vector {
    const vector = new Uint64Vector(0);
    if (array.length !== 0) {
      if (array instanceof BigUint64Array || typeof array[0] === "bigint") {
        for (const element of array) {
          vector.push(new Uint64(element as bigint));
        }
      }
      if (array[0] instanceof Uint64) {
        if (array) {
          vector.inner = array as Array<Uint64>;
        }
      }
    }
    return vector;
  }
  static of(...elementN: Array<Uint64> | Array<bigint>): Uint64Vector {
    return Uint64Vector.from(elementN);
  }
}
