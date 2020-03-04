import * as remx from 'remx';

const initialState = () => ({
  currentValue: '0',
  operator: '',
  firstOperand: '',
  waitForNewCurrentValue: false,
});

const state = remx.state(initialState());

const getters = remx.getters({
  getCurrentValue() {
    return state.currentValue;
  },

  getOperator() {
    return state.operator;
  },

  getFirstOperand() {
    return state.firstOperand;
  },

  isWaitingForNewCurrentValue() {
    return state.waitForNewCurrentValue;
  },
});

const setters = remx.setters({
  setDefaultState() {
    const initState = initialState();
    Object.keys(initState)
      // @ts-ignore
      .forEach(key => (state[key] = initState[key]));
  },

  setCurrentValue(value) {
    state.currentValue = value;
  },

  setOperator(value) {
    state.operator = value;
  },

  setFirstOperand(value) {
    state.firstOperand = value;
  },

  setIsWaitingForNewCurrentValue(value: boolean) {
    state.waitForNewCurrentValue = value;
  },

  reverseCurrentValue() {
    const currentValue = state.currentValue;
    if (currentValue === '0') {
      return;
    }
    if (currentValue[0] === '-') {
      store.setCurrentValue(currentValue.substring(1));
    } else {
      store.setCurrentValue('-' + currentValue);
    }
  },

  addition() {
    store.setCurrentValue(state.firstOperand + state.currentValue);
  },

  performOperation() {
    const operation = state.operator;
    if (
      operation === '' ||
      state.firstOperand === '' ||
      state.currentValue === ''
    ) {
      return;
    }
    const firstOperand = +state.firstOperand;
    const secondOperand = +state.currentValue;
    if (operation === '+' || operation === '-' || operation === '*') {
      store.setFirstOperand(store.getCurrentValue());
    }
    if (operation === '+') {
      store.setCurrentValue((firstOperand + secondOperand).toString());
    } else if (operation === '-') {
      store.setCurrentValue((firstOperand - secondOperand).toString());
    } else if (operation === '*') {
      store.setCurrentValue((firstOperand * secondOperand).toString());
    } else if (operation === '/') {
      store.setCurrentValue((firstOperand / secondOperand).toString());
    }
    console.log((firstOperand + secondOperand).toString());
  },
});

export const store = {
  ...setters,
  ...getters,
};
