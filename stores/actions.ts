import {store} from './store';

export function setCurrentValue(value) {
  store.setCurrentValue(value);
}

export function getCurrentValue() {
  return store.getCurrentValue();
}

export function getOperator() {
  return store.getOperator();
}

export function getFirstOperand() {
  return store.getFirstOperand();
}

export function isWaitingForNewCurrentValue() {
  return store.isWaitingForNewCurrentValue();
}

export function reverseCurrentValue() {
  return store.reverseCurrentValue();
}

export function setOperator(value) {
  store.setOperator(value);
}

export function performOperation(operation) {
  store.performOperation(operation);
}

export function setDefaultState() {
  store.setDefaultState();
}

export function getIsLastPressedButtonWasEqual() {
  return store.getIsLastPressedButtonWasEqual();
}

export function setIsLastPressedButtonWasEqual(value) {
  return store.setIsLastPressedButtonWasEqual(value);
}

export const onButtonPress = (buttonSymbol: string) => {
  if (buttonSymbol === '=' && store.getIsLastPressedButtonWasEqual()) {
    store.performOperationWithoutChangingFirstOperand();
    return;
  }
  if (buttonSymbol === 'AC') {
    store.setDefaultState();
  } else if (buttonSymbol === '+/-') {
    store.reverseCurrentValue();
  } else if (buttonSymbol >= '0' && buttonSymbol <= '9') {
    if (store.getIsLastPressedButtonWasEqual()) {
      store.setDefaultState();
    }
    if (store.isWaitingForNewCurrentValue()) {
      store.setFirstOperand(store.getCurrentValue());
      store.setCurrentValue(buttonSymbol);
      store.setIsWaitingForNewCurrentValue(false);
    } else if (store.getCurrentValue() === '0') {
      store.setCurrentValue(buttonSymbol);
    } else {
      store.setCurrentValue(store.getCurrentValue() + buttonSymbol);
    }
  } else if (
    buttonSymbol === '+' ||
    buttonSymbol === '-' ||
    buttonSymbol === '*' ||
    buttonSymbol === '/'
  ) {
    //check how many places you will need to change in order to handle minus
    if (store.isWaitingForNewCurrentValue()) {
      store.setOperator(buttonSymbol);
    } else {
      store.performOperation();
      store.setOperator(buttonSymbol);
      store.setIsWaitingForNewCurrentValue(true);
    }
  } else if (buttonSymbol === '=') {
    store.performOperation();
    store.setIsWaitingForNewCurrentValue(true);
  }
  if (buttonSymbol === '=') {
    store.setIsLastPressedButtonWasEqual(true);
  } else {
    store.setIsLastPressedButtonWasEqual(false);
  }
};
