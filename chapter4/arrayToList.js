function arrayToList (arr) {
    let list = {'value': arr.pop(), 'rest': null};
    for (let i = arr.length; i > 0; i--){
        console.log(i)
        list = prepend(arr.pop(), list)
    }
    return list;
}

function nth (list, n) {
    for (let node = list; node; node = node.rest) {
        if (node['value'] = n){
            return node;
        }
    }
}

function prepend (value, list) {
    return {'value': value, 'rest': list}
}

function listToArray (list) {
    let arr = [];
    for (let node = list; node; node = node.rest){
        arr.push(node['value'])
    }
    return arr
}

list = arrayToList([0, 1, 2, 3, 4, 5]);
//console.log(nth(list, 3));
console.log(listToArray(list))
console.log(prepend(10, list))