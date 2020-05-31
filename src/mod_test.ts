import { assertEquals, assertThrows } from "../depends.ts";

import { Uint8Vector } from "./uint8vector.ts";
import { Uint8 } from "./uint8.ts";

Deno.test("Vector", () => {
  // include
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(12),
    ),
    [12, 34, 56, 78].includes(12),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(90),
    ),
    [12, 34, 56, 78].includes(90),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(12),
      3,
    ),
    [12, 34, 56, 78].includes(12, 3),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(12),
      4,
    ),
    [12, 34, 56, 78].includes(12, 4),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(12),
      100,
    ),
    [12, 34, 56, 78].includes(12, 100),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(12),
      -1,
    ),
    [12, 34, 56, 78].includes(12, -1),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).include(
      new Uint8(12),
      -100,
    ),
    [12, 34, 56, 78].includes(12, -100),
  );
  // indexOf
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(12),
    ),
    [12, 34, 56, 78].indexOf(12),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(90),
    ),
    [12, 34, 56, 78].indexOf(90),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(12),
      3,
    ),
    [12, 34, 56, 78].indexOf(12, 3),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(12),
      4,
    ),
    [12, 34, 56, 78].indexOf(12, 4),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(12),
      100,
    ),
    [12, 34, 56, 78].indexOf(12, 100),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(12),
      -1,
    ),
    [12, 34, 56, 78].indexOf(12, -1),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).indexOf(
      new Uint8(12),
      -100,
    ),
    [12, 34, 56, 78].indexOf(12, -100),
  );
  // join
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).join(),
    [12, 34, 56, 78].join(),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).join(""),
    [12, 34, 56, 78].join(""),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array([12, 34, 56, 78])).join(", "),
    [12, 34, 56, 78].join(", "),
  );
  assertEquals(Uint8Vector.fromTypedArray(new Uint8Array()).join(), [].join());
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array()).join(""),
    [].join(""),
  );
  assertEquals(
    Uint8Vector.fromTypedArray(new Uint8Array()).join(", "),
    [].join(", "),
  );
});
