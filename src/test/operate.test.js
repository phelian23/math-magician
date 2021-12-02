import operate from '../logic/operate'

describe('Test operate function', () => {
    test("Add 5 and 6", () => {
        expect(operate('5', '6', '+')).toBe('11')
    })
    test('divide by 0', () => {
        expect(operate('7', '0', '÷')).toBe("Can't divide by 0.")
    })
    test('subtract 4 from 20', () => {
        expect(operate('20', '4', '-')).toBe("16")
    })
    test('multiply 5 and 3', () => {
        expect(operate('5', '3', 'x')).toBe("15")
    })
})
