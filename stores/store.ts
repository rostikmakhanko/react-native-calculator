import * as remx from 'remx';

const initialState = () => ({
  currentValue: '0',
  operator: '',
  firstOperand: '',
  waitForNewCurrentValue: false,
  isLastPressedButtonWasEqual: false,
});

const state = remx.state(initialState());

const getters = remx.getters({
  getCurrentValue(): string {
    return state.currentValue;
  },

  getOperator(): string {
    return state.operator;
  },

  getFirstOperand(): string {
    return state.firstOperand;
  },

  isWaitingForNewCurrentValue(): boolean {
    return state.waitForNewCurrentValue;
  },

  getIsLastPressedButtonWasEqual(): boolean {
    return state.isLastPressedButtonWasEqual;
  },
});

const setters = remx.setters({
  setDefaultState() {
    const initState = initialState();
    Object.keys(initState)
      // @ts-ignore
      .forEach(key => (state[key] = initState[key]));
  },

  setCurrentValue(value: string) {
    state.currentValue = value;
  },

  setOperator(value: string) {
    state.operator = value;
  },

  setFirstOperand(value: string) {
    state.firstOperand = value;
  },

  setIsWaitingForNewCurrentValue(value: boolean) {
    state.waitForNewCurrentValue = value;
  },

  setIsLastPressedButtonWasEqual(value: boolean) {
    state.isLastPressedButtonWasEqual = value;
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
    if (
      operation === '+' ||
      operation === '-' ||
      operation === '*' ||
      operation === '/'
    ) {
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

  performOperationWithoutChangingFirstOperand() {
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
    if (operation === '+') {
      store.setCurrentValue((firstOperand + secondOperand).toString());
    } else if (operation === '-') {
      store.setCurrentValue((secondOperand - firstOperand).toString());
    } else if (operation === '*') {
      store.setCurrentValue((firstOperand * secondOperand).toString());
    } else if (operation === '/') {
      store.setCurrentValue((secondOperand / firstOperand).toString());
    }
    console.log('|||');
  },
});

export const store = {
  ...setters,
  ...getters,
};
