const rewire = require("rewire");
const index = rewire('../index.js');

describe('1. validateCreditCard', () => {
    it('Should contain 16 digits', () => {
        const validateCreditCard = index.__get__('validateCreditCard');
        // must contain at least 16 digits
        expect(validateCreditCard('9999-7777-8888-0000')).toEqual({ valid: true, number: '9999-7777-8888-0000' });
        expect(validateCreditCard('6666-6666-6666-1666')).toEqual({ valid: true, number: '6666-6666-6666-1666' });
        expect(validateCreditCard('a923-3211-9c01-1112')).toEqual({ valid: false, number: 'a923-3211-9c01-1112', error: '_invalid characters_' });
        expect(validateCreditCard('4444-4444-4444-4444')).toEqual({ valid: false, number: '4444-4444-4444-4444', error: '_Need more than 1 unique digit_' });
        expect(validateCreditCard('1211-1111-1111-1112')).toEqual({ valid: true, number: '1211-1111-1111-1112' });
    })
    it('should contain at least two different digits', () => {
        const validateCreditCardFunc = index.__get__('validateCreditCard');
        const ccNumberNoDashes = '1211-1111-1111-1112';
        let twoDifferentDigits = false;
        for (let i = 1; i < ccNumberNoDashes.length; i++) {
            if (ccNumberNoDashes[i] !== ccNumberNoDashes[i - 1]) {
                twoDifferentDigits = true;
                break;
            }
        }
        if (twoDifferentDigits === false) {
            result.valid = false;
            result.error = "_Need more than 1 unique digit_";
            return result;
        }
        expect(validateCreditCardFunc(ccNumberNoDashes)).toEqual({ valid: true, number: '1211-1111-1111-1112' });
        expect(validateCreditCardFunc(ccNumberNoDashes)).toEqual({ valid: true, number: '1211-1111-1111-1112' });
        expect(validateCreditCardFunc(ccNumberNoDashes)).toEqual({ valid: true, number: '1211-1111-1111-1112' });
        expect(validateCreditCardFunc('a923-3211-9c01-1112')).toEqual({ valid: false, number: 'a923-3211-9c01-1112', error: '_invalid characters_' });
    })
    it('final digit must be even', () => {
        const validateCreditCardFunc = index.__get__('validateCreditCard');
        const result = validateCreditCardFunc('1111-1111-1111-1110');
        expect(result.valid).toBe(false);
    })
    it('sum of all digits must be greater than 16', () => {
        const validateCreditCardFunc = index.__get__('validateCreditCard');
        const result = validateCreditCardFunc('1111-1111-1111-1110');
        expect(result.valid).toBe(false);
    })

})