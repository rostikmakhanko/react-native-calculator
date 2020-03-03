import * as remx from 'remx';
import {setCurrentValue} from './actions';

const initialState = {
  currentValue: '0',
};

const state = remx.state(initialState);

const getters = remx.getters({
  getCurrentValue() {
    return state.currentValue;
  },
});

const setters = remx.setters({
  setCurrentValue(value) {
    state.currentValue = value;
  },

  reverseCurrentValue() {
    const currentValue = state.currentValue;
    if (currentValue === '0') {
      return;
    }
    if (currentValue[0] === '-') {
      setCurrentValue(currentValue.substring(1));
    } else {
      setCurrentValue('-' + currentValue);
    }
  },
});

export const store = {
  ...setters,
  ...getters,
};
