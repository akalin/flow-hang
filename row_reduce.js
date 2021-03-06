// @flow

/* eslint-env browser */

'use strict';

/* ::
import { type Field } from './field';
import { Matrix } from './matrix';
*/

/* ::

type RowReduceSwapState<T: Field<*>> = {
  type: 'swap',
  aLeftPrev: Matrix<T>,
  aRightPrev: Matrix<T>,
  aLeft: Matrix<T>,
  aRight: Matrix<T>,
  rowA: number,
  rowB: number,
};

type RowReduceSingularState<T: Field<*>> = {
  type: 'singular',
  aLeft: Matrix<T>,
  aRight: Matrix<T>,
};

type RowReduceDivideState<T: Field<*>> = {
  type: 'divide',
  aLeftPrev: Matrix<T>,
  aRightPrev: Matrix<T>,
  aLeft: Matrix<T>,
  aRight: Matrix<T>,
  row: number,
  divisor: Field<T>,
};

type RowReduceSubtractScaledState<T: Field<*>> = {
  type: 'subtractScaled',
  aLeftPrev: Matrix<T>,
  aRightPrev: Matrix<T>,
  aLeft: Matrix<T>,
  aRight: Matrix<T>,
  rowDest: number,
  rowSrc: number,
  scale: ?Field<T>,
};

type RowReduceInverseFoundState<T: Field<*>> = {
  type: 'inverseFound',
  aLeft: Matrix<T>,
  aRight: Matrix<T>,
};

type RowReduceState<T: Field<*>> =
  | RowReduceSwapState<T>
  | RowReduceSingularState<T>
  | RowReduceDivideState<T>
  | RowReduceSubtractScaledState<T>
  | RowReduceInverseFoundState<T>;
*/

// eslint-disable-next-line no-unused-vars
const rowReduceNextState = /* :: <T: Field<*>> */ (
  state /* : RowReduceState<T> */
) /* : RowReduceState<T> */ => {
  const { aLeft, aRight } = state;

  const zero = aLeft.zeroElement();
  for (let i = 0; i < aLeft.rows(); i += 1) {
    const pivot = aLeft.at(i, i);
    if (pivot.equals(zero)) {
      return {
        type: 'swap',
        aLeftPrev: aLeft,
        aRightPrev: aRight,
        aLeft: aLeft.swapRows(i, i),
        aRight: aRight.swapRows(i, i),
        rowA: i,
        rowB: i,
      };
    }
  }

  return {
    type: 'inverseFound',
    aLeft,
    aRight,
  };
};

/* ::
export type { RowReduceState };
export { rowReduceNextState };
*/
