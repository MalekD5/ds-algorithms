function insertionSort(list) {
    for (let j = 1; j < list.length; j++) {
        const key = list[j];
        let i = j - 1;
        while (i >= 0 && list[i] > key) {
            list[i+1] = list[i];
            i--;
        }
        list[i+1] = key;
    }
    return list;
}

module.exports = insertionSort;
