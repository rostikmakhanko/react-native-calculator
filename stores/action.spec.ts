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

  xit('when subtracting 1 by 3 should return 2', function() {
    onButtonPress('3');
    onButtonPress('-');
    onButtonPress('1');
    onButtonPress('=');
    expect(store.getCurrentValue()).toBe('2');
  });
});