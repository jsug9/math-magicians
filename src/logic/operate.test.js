import operate from './operate';

describe('Test operations', () => {
  test('Test sum', () => {
    const first = '2';
    const second = '2';
    const operation = '+';
    const result = operate(first, second, operation);
    expect(result).toEqual('4');
  });

  test('Test substraction', () => {
    const first = '5';
    const second = '2';
    const operation = '-';
    const result = operate(first, second, operation);
    expect(result).toEqual('3');
  });

  test('Test multiplication', () => {
    const first = '3';
    const second = '2';
    const operation = 'x';
    const result = operate(first, second, operation);
    expect(result).toEqual('6');
  });

  test('Test division', () => {
    const first = '6';
    const second = '2';
    const operation = '÷';
    const result = operate(first, second, operation);
    expect(result).toEqual('3');
  });

  test('Test remainder operator', () => {
    const first = '9';
    const second = '4';
    const result = operate(first, second, '%');
    expect(result).toEqual('1');
  });
});
