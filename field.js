// @flow

'use strict';

/* ::
// For why +T is used instead of T, see
// https://github.com/facebook/flow/issues/5272 .
interface Field<+T> {
  plus(b: T): T;
  equals(b: T): boolean;
  // Work around the lack of static members in flow: see
  // https://github.com/facebook/flow/issues/5590 .
  zero(): T;
}

export type { Field };
*/

