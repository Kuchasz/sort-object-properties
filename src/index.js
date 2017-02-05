export const sortObject = (obj) => {
    return Object.keys(obj).sort().reduce((r, key)=>({...r, ...{[key]: obj[key]}}), {});
};

export default sortObject;