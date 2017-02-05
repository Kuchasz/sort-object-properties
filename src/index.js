export default function sortObject(obj) {
    return Object.keys(obj).sort().reduce((r, key)=>({...r, ...{[key]: obj[key]}}), {});
};