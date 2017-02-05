const _sortGlobal = (obj, compareFunction) => {
    const wrappedFunction = compareFunction ? (a, b) => (compareFunction({key: a, value: obj[a]}, {key: b, value: obj[b]})) : undefined;
    return Object.keys(obj).sort(wrappedFunction).reduce((r, key) => ({...r, ...{[key]: obj[key]}}), {});
};

const _compareValues = (value1, value2, direction) => direction * (value1 > value2 ? 1 : value1 === value2 ? 0 : -1);

const _sortByValue = (obj, valueAccessor, direction = 1) => _sortGlobal(obj, ({value: valueA}, {value: valueB}) => _compareValues(valueAccessor(valueA), valueAccessor(valueB), direction));
const _sortByKey = (obj, direction = 1) => _sortGlobal(obj, ({key: keyA}, {key: keyB}) => _compareValues(keyA, keyB, direction));

_sortGlobal.value = _sortByValue;
_sortGlobal.key = _sortByKey;

const sort = _sortGlobal;
export default sort;