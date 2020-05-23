import { Numeric } from "./mod.ts";

const MAX: number = 255;
const MIN: number = 0;
const BIT_LENGTH: number = 8;

export class Uint8 implements Numeric<Uint8> {
  #value: number;
  constructor(value: number) {
    this.#value = value;
  }
  value(): number {
    return this.#value;
  }
  max(): number {
    return MAX;
  }
  min(): number {
    return MIN;
  }
  add(value: Uint8): Uint8 {
    return new Uint8((this.#value + value.#value) & MAX);
  }
  sub(value: Uint8): Uint8 {
    return new Uint8((this.#value - value.#value) & MAX);
  }
  mul(value: Uint8): Uint8 {
    return new Uint8((this.#value * value.#value) & MAX);
  }
  div(value: Uint8): Uint8 {
    return new Uint8((this.#value / value.#value) & MAX);
  }
  logicalLeft(n: number): Uint8 {
    return new Uint8(this.#value << n)
  }
  logicalRight(n: number): Uint8 {
    return new Uint8(this.#value >> n)
  }
  rotateLeft(n: number): Uint8 {
    return new Uint8((this.#value << (n % BIT_LENGTH)) | (this.#value >> ((BIT_LENGTH - n) % BIT_LENGTH)));
  }
  rotateRight(n: number): Uint8 {
    return new Uint8((this.#value >> (n % BIT_LENGTH)) | (this.#value << ((BIT_LENGTH - n) % BIT_LENGTH)));
  }
}
