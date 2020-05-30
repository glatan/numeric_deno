import { assertEquals, assertThrows } from "../depends.ts";

import { Uint16Vector } from "./uint16vector.ts";
import { Uint16 } from "./uint16.ts";

Deno.test("Uint16Vector", () => {
  // constructor
  assertEquals(new Uint16Vector().length, new Uint16Vector(0).length);
  // Uint16Vector from Array<Uint16>
  assertEquals(
    new Uint16Vector(Array.from([new Uint16(Uint16.max())])).value_by_index(0)
      .value(),
    Uint16.max(),
  );
  const vec = new Uint16Vector(2);
  assertEquals(vec.length, 2);
  // value_by_index
  assertEquals(vec.value_by_index(0).value(), 0);
  assertEquals(vec.value_by_index(1).value(), 0);
  assertThrows(() => {
    // Index out of range
    vec.value_by_index(2);
  });
  assertThrows(() => {
    // This Vector<T> is empty.
    new Uint16Vector(0).value_by_index(0);
  });
  // push
  vec.push(new Uint16(0));
  assertEquals(vec.length, 3);
  // pop
  assertEquals(vec.pop().value(), 0);
  assertEquals(vec.length, 2);
  assertEquals(vec.pop().value(), 0);
  assertEquals(vec.length, 1);
  assertEquals(vec.pop().value(), 0);
  assertEquals(vec.length, 0);
  assertThrows(() => {
    // This Vector<T> is empty.
    vec.pop();
  });
  assertEquals(vec.length, 0);
  // concat
  vec.concat(new Uint16Vector(3));
  assertEquals(vec.length, 3);
  // toTypedArray
  assertEquals(new Uint16Vector(3).toTypedArray(), new Uint16Array(3));
  assertEquals(
    new Uint16Vector(3).fill(Uint16.max()).toTypedArray(),
    new Uint16Array(3).fill(Uint16.max()),
  );
  // fill
  assertEquals(
    new Uint16Vector(3).fill(new Uint16(Uint16.max())).toTypedArray(),
    new Uint16Array(3).fill(Uint16.max()),
  );
  assertEquals(
    new Uint16Vector(3).fill(Uint16.max()).toTypedArray(),
    new Uint16Array(3).fill(Uint16.max()),
  );
  assertEquals(
    new Uint16Vector(3).fill(new Uint16(Uint16.min())).toTypedArray(),
    new Uint16Array(3).fill(Uint16.min()),
  );
  assertEquals(
    new Uint16Vector(3).fill(Uint16.min()).toTypedArray(),
    new Uint16Array(3).fill(Uint16.min()),
  );
  // fromTypedArray and equals
  assertEquals(
    Uint16Vector.fromTypedArray(new Uint16Array(3)).equals(new Uint16Vector(3)),
    true,
  );
  assertEquals(
    Uint16Vector.fromTypedArray(new Uint16Array(3)).equals(
      new Uint16Vector(3).fill(Uint16.max()),
    ),
    false,
  );
  assertEquals(
    Uint16Vector.fromTypedArray(new Uint16Array(3)).fill(
      new Uint16(Uint16.max()),
    ).equals(new Uint16Vector(3).fill(Uint16.max())),
    true,
  );
  // slice
  assertEquals(
    new Uint16Vector(5).slice(0, 3).equals(new Uint16Vector(3)),
    true,
  );
});
