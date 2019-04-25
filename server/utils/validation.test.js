const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        const string = 1234;
        const res = isRealString(string);

        expect(res).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        const string = '   ';
        const res = isRealString(string);

        expect(res).toBeFalsy();
    });

    it('should allow strings with non space characters', () => {
        const string = 'Testing';
        const res = isRealString(string);

        expect(res).toBeTruthy();
    });
});