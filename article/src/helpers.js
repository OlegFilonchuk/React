export function arrToObj(arr) {
    return arr.reduce((acc, item) => {
       acc[item.id] = item;
       return acc;
    }, {})
}

export function objToArr(obj) {
    return Object.values(obj);
}