// @flow

'use strict';

/* :: import { type Field } from './field'; */

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
export { Matrix };
*/
