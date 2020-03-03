import { store } from "./store";

export function setCurrentValue(value) {
  store.setCurrentValue(value);
}

export function getCurrentValue() {
  return store.getCurrentValue();
}
