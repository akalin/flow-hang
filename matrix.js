// @flow

'use strict';

/* :: import { type Field } from './field'; */

// eslint-disable-next-line no-unused-vars
class Matrix /* :: <T: Field<*>> */ {
  /* ::
  _rows: number;
  _columns: number;
  _elements: T[];
  */

  constructor(
    rows /* : number */,
    columns /* : number */,
    elements /* : (number, number) => T */
  ) {
    this._rows = rows;
    this._columns = columns;
    this._elements = [];
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < columns; j += 1) {
        this._elements.push(elements(i, j));
      }
    }
  }

  zeroElement() /* : T */ {
    return this._elements[0].zero();
  }

  at(i /* : number */, j /* : number */) /* : T */ {
    return this._elements[i * this._columns + j];
  }

  times(n /* : Matrix<T> */) /* : Matrix<T> */ {
    const columns = this._columns;
    return new Matrix(this._rows, n._columns, (
      i /* : number */,
      j /* : number */
    ) /* : T */ => {
      let t = this.zeroElement();
      t = t.plus(t);
      for (let k = 0; k < columns; k += 1) {
        t = t.plus(this.at(i, k).times(n.at(k, j)));
      }
      return t;
    });
  }
}

/* ::
export { Matrix };
*/
