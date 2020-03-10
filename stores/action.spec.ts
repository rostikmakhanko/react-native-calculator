import {store} from './store';
import {onButtonPress} from './actions';

describe('Calculator', () => {
  afterEach(() => store.setDefaultState());

  it('when adding two positive numbers should return their sum', function() {
    onButtonPress('4');
    onButtonPress('+');
    onButtonPress('5');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('9');
  });

  it('when adding two positive numbers and press + should return their sum', function() {
    onButtonPress('1');
    onButtonPress('+');
    onButtonPress('2');
    onButtonPress('+');
    expect(store.getCurrentValue()).toBe('3');
  });

  it('when adding two numbers and then pressing = again second operand should be added to the result', function() {
    onButtonPress('1');
    onButtonPress('+');
    onButtonPress('2');
    onButtonPress('=');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('5');
  });

  it('when subtracting 1 by 3 should return 2', function() {
    onButtonPress('3');
    onButtonPress('-');
    onButtonPress('1');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('2');
  });

  it('when multiply 2 and 5 should return 10', function() {
    onButtonPress('2');
    onButtonPress('*');
    onButtonPress('5');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('10');
  });

  it('when divide 12 by 4 should return 3', function() {
    onButtonPress('12');
    onButtonPress('/');
    onButtonPress('4');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('3');
  });

  it('when adding two numbers, press equals than press minus and equals again should not change result', function() {
    onButtonPress('1');
    onButtonPress('+');
    onButtonPress('2');
    onButtonPress('=');
    onButtonPress('-');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('3');
  });
});
