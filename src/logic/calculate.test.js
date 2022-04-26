import calculate from './calculate';

describe('Test calculate function', () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Test sum', () => {
    const buttons = ['2', '+', '2', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('4');
  });

  test('Test substraction', () => {
    const buttons = ['10', '-', '4', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('6');
  });

  test('Test multiplication', () => {
    const buttons = ['5', 'x', '7', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('35');
  });

  test('Test division', () => {
    const buttons = ['5', '÷', '2', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('2.5');
  });

  test('Test remainder operator', () => {
    const buttons = ['9', '%', '4', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('1');
  });

  test('Test 0 divided by 0', () => {
    const buttons = ['0', '÷', '0', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('Can\'t divide by 0.');
  });
});
