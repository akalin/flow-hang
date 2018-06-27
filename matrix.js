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
*/

// eslint-disable-next-line no-unused-vars
class Matrix /* :: <T: Field<*>> */ {
  /* ::
  _elements: T[];
  */

  constructor(
    elements /* : (number, number) => T */
  ) {
    this._elements = [];
  }

  zeroElement() /* : T */ {
    return this._elements[0].zero();
  }

  times() {
    let t = this.zeroElement();
    t = t.plus(t);
    t = t.plus(this.zeroElement());
  }
}

/* ::
export type { Field };
export { Matrix };
*/
