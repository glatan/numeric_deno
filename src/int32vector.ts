import { Int32 } from "./int32.ts";
import { Vector } from "./mod.ts";

export class Int32Vector extends Vector<Int32> {
  constructor(arg: number | Array<Int32> = 0) {
    if (typeof arg === "number") {
      super(new Array(arg).fill(new Int32(0n)));
    }
    if (arg instanceof Array) {
      super(arg as Array<Int32>);
    }
  }
  fill(value: Int32 | bigint): Int32Vector {
    if (typeof value === "bigint") {
      super.fill(new Int32(value));
    } else {
      super.fill(value);
    }
    return new Int32Vector(this.inner);
  }
  toTypedArray(): Int32Array {
    let array = new Int32Array(this.inner.length);
    for (let i = 0; i < this.inner.length; i++) {
      array[i] = Number(this.inner[i].value());
    }
    return array;
  }
  static fromTypedArray(array: Int32Array): Int32Vector {
    const vector = new Int32Vector(0);
    for (let i = 0; i < array.length; i++) {
      vector.push(new Int32(BigInt(array[i])));
    }
    return vector;
  }
}
