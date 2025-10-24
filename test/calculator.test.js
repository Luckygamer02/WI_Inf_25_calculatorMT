const calc = require('../src/calculator');
test('add', () => expect(calc.add(1,2)).toBe(3));
test('sub', () => expect(calc.sub(6,4)).toBe(2));
test('mul', () => expect(calc.mul(2,3)).toBe(6));
test('div', () => expect(calc.div(6,3)).toBe(2));
test('addThenMulThenDivBy3', () => expect(calc.addThenMulThenDivBy3(1,2)).toBe(3));
test('div by zero throws', () => expect(() => calc.div(1,0)).toThrow());
test('sqrt', () => expect(calc.sqrt(4)).toBe(2));
