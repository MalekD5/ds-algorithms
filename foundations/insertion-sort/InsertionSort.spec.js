const insertionSort = require('./InsertionSort');

describe('insertionSort', () => {
    test('insertion sort with an array', () => {
        const list = [5, 2, 4, 6, 1, 3];
        const expected = [1, 2, 3, 4, 5, 6];
        expect(insertionSort(list)).toStrictEqual(expected);
    });
    test('insertion sort with array of length 2', () => {
        const list = [2, 1];
        const expected = [1, 2];
        expect(insertionSort(list)).toStrictEqual(expected);
    });
    test('insertion sort with an array of length 1', () => {
        const list = [1];
        const expected = [1];
        expect(insertionSort(list)).toStrictEqual(expected);
    })
});