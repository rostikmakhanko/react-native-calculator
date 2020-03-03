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

export function performOperation() {
  store.performOperation();
}

export function setDefaultState() {
  store.setDefaultState();
}
