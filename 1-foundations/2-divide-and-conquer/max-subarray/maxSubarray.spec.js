const maxSubArray = require('./maxSubarray');

describe('find max sub array using divide and conqure approach (recrusion)', () => {
    test('test array', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });
});