import calculate from '../logic/calculate'

describe('Test calculate function', () => {
    test("Add 5 and 6", () => {
        let obj = calculate({}, '5');
        obj = calculate(obj, '+')
        obj = calculate(obj, '6')
        expect(obj).toStrictEqual({total: '5', next: '6', operation: '+',})
    })
    test("Result of 5 + 6", () => {
        let obj = calculate({}, '5');
        obj = calculate(obj, '+')
        obj = calculate(obj, '6')
        obj = calculate(obj, "=")
        expect(obj).toStrictEqual({total: '11', next: null, operation: null,})
    })
    test("Ac button", () => {
        let obj = calculate({}, '5');
        obj = calculate(obj, '+')
        obj = calculate(obj, '6')
        obj = calculate(obj, "AC")
        expect(obj).toStrictEqual({total: '0', next: null, operation: null,})
    })
    test("+/- button", () => {
        let obj = calculate({}, '5');
        obj = calculate(obj, '+')
        obj = calculate(obj, '6')
        obj = calculate(obj, "=")
        obj = calculate(obj, '+/-')
        expect(obj).toStrictEqual({total: '-11', next: null, operation: null,})
    })
})