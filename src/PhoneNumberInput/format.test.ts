import {formatPhoneNumber} from "./formatPhoneNumber";

describe('#formatPhoneNumber', () => {
    it('returns empty string when value undefined', () => {
        const result = formatPhoneNumber();
        expect(result).toEqual('');
    });
    it('returns empty string when no value', () => {
        const result = formatPhoneNumber('');
        expect(result).toEqual('');
    });
    it('only allows digits', () => {
        const result = formatPhoneNumber('There are no numbers here!');
        expect(result).toEqual('')
    });
    it('inserts ( when 1 digit long', () => {
        const result = formatPhoneNumber('1');
        expect(result).toEqual('(1');
    });
    it('inserts ( when 2 digits long', () => {
        const result = formatPhoneNumber('12');
        expect(result).toEqual('(12');
    });
    it('inserts ( when 3 digits long', () => {
        const result = formatPhoneNumber('123');
        expect(result).toEqual('(123');
    });
    it('inserts ) when 4 digits long', () => {
        const result = formatPhoneNumber('1234');
        expect(result).toEqual('(123) 4');
    });
    it('inserts ) when 5 digits long', () => {
        const result = formatPhoneNumber('12345');
        expect(result).toEqual('(123) 45');
    });
    it('inserts ) when 6 digits long', () => {
        const result = formatPhoneNumber('123456');
        expect(result).toEqual('(123) 456');
    });
    it('inserts - when 7 digits long', () => {
        const result = formatPhoneNumber('1234567');
        expect(result).toEqual('(123) 456-7');
    });
    it('inserts - when 8 digits long', () => {
        const result = formatPhoneNumber('12345678');
        expect(result).toEqual('(123) 456-78');
    });
    it('inserts - when 9 digits long', () => {
        const result = formatPhoneNumber('123456789');
        expect(result).toEqual('(123) 456-789');
    });
    it('inserts - when 10 digits long', () => {
        const result = formatPhoneNumber('1234567890');
        expect(result).toEqual('(123) 456-7890');
    });
});
