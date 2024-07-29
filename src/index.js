
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return []

    return matrix.reduce((arr, item, key) => {
        if (key % 2 === 0) arr.push(...item);
        else arr.push(...item.reverse());
        return arr;
    }, [])
}
