const insertionSort = require('./InsertionSort');

describe('insertionSort', () => {
    test('sort list correctly using insertion sort', () => {
        const list = [5, 2, 4, 6, 1, 3];
        const expected = [1, 2, 3, 4, 5, 6];
        expect(insertionSort(list)).toStrictEqual(expected);
    });
});