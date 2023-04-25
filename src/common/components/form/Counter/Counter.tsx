'use client';

import * as React from 'react';
import { Minus, Plus } from '@phosphor-icons/react';

import { CounterProps, CounterReducer } from './Counter.types';

import styles from './Counter.module.scss';

const counterStatus = (
  state: CounterReducer['state'],
  min: number,
  max?: number,
) => {
  const maximumValueReached = max !== undefined ? state.value === max : false;
  const minimumValueReached = state.value === min;

  return { maximumValueReached, minimumValueReached };
};

function Counter({
  value: defaultValue = 0,
  min = 0,
  max,
  ...counterProps
}: CounterProps) {
  const [counterState, dispatch] = React.useReducer<CounterReducer['reducer']>(
    (state, action) => {
      const { maximumValueReached, minimumValueReached } = counterStatus(
        state,
        min,
        max,
      );

      if (action.type === 'incremented' && !maximumValueReached) {
        return { value: state.value + 1 };
      }

      if (action.type === 'decremented' && !minimumValueReached) {
        return { value: state.value - 1 };
      }

      return state;
    },
    { value: defaultValue },
  );

  const { maximumValueReached, minimumValueReached } = counterStatus(
    counterState,
    min,
    max,
  );

  const decrementCounter = () => dispatch({ type: 'decremented' });
  const incrementedCounter = () => dispatch({ type: 'incremented' });

  return (
    <div role="generic" aria-label="counter" className={styles['number-input']}>
      <button
        id="minus"
        aria-label="counter-minus-button"
        role="spinbutton"
        type="button"
        onClick={decrementCounter}
        disabled={minimumValueReached}
      >
        <Minus size={16} weight="thin" />
      </button>
      <input
        aria-label="counter-input"
        role="spinbutton"
        type="number"
        value={counterState.value}
        min={min}
        aria-valuemin={min}
        max={max}
        aria-valuemax={max}
        readOnly
        {...counterProps}
      />
      <button
        id="plus"
        aria-label="counter-plus-button"
        role="spinbutton"
        type="button"
        onClick={incrementedCounter}
        disabled={maximumValueReached}
      >
        <Plus size={16} weight="thin" />
      </button>
    </div>
  );
}

export default Counter;
