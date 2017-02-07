const _sortGlobal = (obj, compareFunction) => {
    const wrappedFunction = compareFunction ? (a, b) => (compareFunction({key: a, value: obj[a]}, {key: b, value: obj[b]})) : undefined;

    // console.log(compareFunction.toString());
    return Object.keys(obj).sort(wrappedFunction).reduce((r, key) => ({...r, [key]: obj[key]}), {});
};

const _compareValues = (value1, value2, direction) => direction * (value1 > value2 ? 1 : value1 === value2 ? 0 : -1);

const _sortByValue = (obj, direction = _sortDirection.ascending, valueSelector = (value) => value) => _sortGlobal(obj, ({value: valueA}, {value: valueB}) => _compareValues(valueSelector(valueA), valueSelector(valueB), direction));
const _sortByKey = (obj, direction = _sortDirection.ascending) => _sortGlobal(obj, ({key: keyA}, {key: keyB}) => _compareValues(keyA, keyB, direction));

const _sortDirection = {
    ascending: 1,
    descending: -1
};

_sortGlobal.value = _sortByValue;
_sortGlobal.key = _sortByKey;
_sortGlobal.sortDirection = _sortDirection;


const sort = _sortGlobal;
export default sort;