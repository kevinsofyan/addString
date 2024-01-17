const addStrings = require('./index');

describe('addStrings function', () => {
  
    it('should return "Input must be valid integer strings" if the one of the input was not a valid integer string', () => {
        const result = addStrings(123, '456');
        expect(result).toBe('Input must be valid integer strings');
    });

    it('should return "Input must be valid integer strings" if the one of the input has character this was not a valid integer string', () => {
        const result = addStrings("33%2", '456');
        expect(result).toBe('Input must be valid integer strings');
    });

    it('should return "Input must be strings." if one of the inputs is null or undefined', () => {
        const result = addStrings('123', null);
        expect(result).toBe('Input must be valid integer strings');
    });


    it('should add two strings and return the sum', () => {
        const result = addStrings('123', '456');
        expect(result).toBe(579);
    });
});