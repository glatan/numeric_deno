import { Uint32 } from "../numeric/uint32.ts";
import { Vector } from "./mod.ts";

export class Uint32Vector extends Vector<Uint32, bigint> {
  constructor(arg: number | Array<Uint32> = 0) {
    if (typeof arg === "number") {
      super(new Array(arg).fill(new Uint32(0n)));
    }
    if (arg instanceof Array) {
      super(arg);
    }
  }
  copyWithin(
    target: number,
    start: number = 0,
    end: number = this.length,
  ): Uint32Vector {
    super.copyWithin(target, start, end);
    return this;
  }
  concat(other: Uint32Vector): Uint32Vector {
    return new Uint32Vector(this.inner.concat(other.inner));
  }
  fill(
    target: Uint32 | bigint,
    start: number = 0,
    end: number = this.length,
  ): Uint32Vector {
    if (typeof target === "bigint") {
      super.fill(new Uint32(target), start, end);
    } else {
      super.fill(target, start, end);
    }
    return this;
  }
  reverse(): Uint32Vector {
    return new Uint32Vector(this.inner.reverse());
  }
  slice(start: number, end: number): Uint32Vector {
    return new Uint32Vector(this.inner.slice(start, end));
  }
  toTypedArray(): Uint32Array {
    const array = new Uint32Array(this.inner.length);
    for (let i = 0; i < this.inner.length; i++) {
      array[i] = Number(this.inner[i].value());
    }
    return array;
  }
  static from(
    array: Uint32Array | Array<Uint32> | Array<bigint>,
  ): Uint32Vector {
    const vector = new Uint32Vector(0);
    if (array.length !== 0) {
      if (array instanceof Uint32Array) {
        for (const element of array) {
          vector.push(new Uint32(BigInt(element)));
        }
      }
      if (typeof array[0] === "bigint") {
        for (const element of array) {
          vector.push(new Uint32(element as bigint));
        }
      }
      if (array[0] instanceof Uint32) {
        if (array) {
          vector.inner = array as Array<Uint32>;
        }
      }
    }
    return vector;
  }
  static of(...elementN: Array<Uint32> | Array<bigint>): Uint32Vector {
    return Uint32Vector.from(elementN);
  }
}
