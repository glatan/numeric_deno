export interface Numeric<T> {
  // Return T.#value
  value(): number | bigint;
  // Return max value of T.
  // static max(): number | bigint;
  // Return min value of T
  // static min(): number | bigint;
  // Wrapping arithmetics
  // Addition
  add(value: T): T;
  // Subtraction
  sub(value: T): T;
  // Division
  div(value: T): T;
  // Multiplication
  mul(value: T): T;
  // Remainder
  rem(value: T): T;
  // Exponentiation
  exp(value: T): T;
  // Bit wise
  // AND
  and(value: T): T;
  // OR
  or(value: T): T;
  // XOR
  xor(value: T): T;
  // NOT
  not(): T;
  // Logical shift
  logicalLeft(n: number | bigint): T;
  logicalRight(n: number | bigint): T;
  // Circular shift(rotate)
  rotateLeft(n: number | bigint): T;
  rotateRight(n: number | bigint): T;
  // Create T from Uint8Array
  // Uint8Array to T
  // static fromBeBytes(bytes: Uint8Array): T;
  // Uint8Array to T
  // static fromLeBytes(bytes: Uint8Array): T;
  // Crate Uint8Array
  // T to big endian Uint8Array
  toBeBytes(): Uint8Array;
  // T to little endian Uint8Array
  toLeBytes(): Uint8Array;
}

export class Vector<T extends Numeric<T>> {
  protected inner: Array<T>;
  length: number;
  protected constructor(array: Array<T>) {
    this.inner = array;
    this.length = array.length;
  }
  *[Symbol.iterator](): Iterator<T> {
    for (let i = 0; i < this.inner.length; i++) {
      yield this.inner[i];
    }
  }
  value_by_index(index: number): T {
    if (this.length === 0) {
      throw new Error("This Vector<T> is empty.");
    }
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range.");
    }
    return this.inner[index];
  }
  push(value: T) {
    this.inner.push(value);
    this.length += 1;
  }
  pop(): T {
    if (this.length === 0) {
      throw new Error("This Vector<T> is empty.");
    } else {
      this.length -= 1;
      return this.inner.pop() as T;
    }
  }
  concat(other: Vector<T>) {
    for (const value of other) {
      this.inner.push(value);
    }
    this.length += other.length;
  }
  fill(value: T): Vector<T> {
    for (let i = 0; i < this.inner.length; i++) {
      this.inner[i] = value;
    }
    return new Vector<T>(this.inner);
  }
  equals(other: Vector<T>): boolean {
    for (let i = 0; i < this.inner.length; i++) {
      if (this.inner[i].value() !== other.inner[i].value()) {
        return false;
      }
    }
    return true;
  }
  reverse(): Vector<T> {
    return new Vector<T>(this.inner.reverse());
  }
  slice(start: number, end: number): Vector<T> {
    return new Vector<T>(this.inner.slice(start, end));
  }
}
