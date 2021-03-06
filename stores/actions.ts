import {store} from './store';

export function setCurrentValue(value: string) {
  store.setCurrentValue(value);
}

export function getCurrentValue(): string {
  return store.getCurrentValue();
}

export function getOperator(): string {
  return store.getOperator();
}

export function getFirstOperand(): string {
  return store.getFirstOperand();
}

export function isWaitingForNewCurrentValue(): boolean {
  return store.isWaitingForNewCurrentValue();
}

export function reverseCurrentValue() {
  return store.reverseCurrentValue();
}

export function setOperator(value: string) {
  store.setOperator(value);
}

export function performOperation() {
  store.performOperation();
}

export function setDefaultState() {
  store.setDefaultState();
}

export function getIsLastPressedButtonWasEqual(): boolean {
  return store.getIsLastPressedButtonWasEqual();
}

export function setIsLastPressedButtonWasEqual(value: boolean) {
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
    if (store.getIsLastPressedButtonWasEqual()) {
      store.setFirstOperand('');
    }
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
