export default function sort(obj, compareFunction) {
    const wrappedFunction = compareFunction ? (a, b) => (compareFunction({key: a, value: obj[a]}, {key: b, value: obj[b]})) : undefined;
    return Object.keys(obj).sort(wrappedFunction).reduce((r, key)=>({...r, ...{[key]: obj[key]}}), {});
};