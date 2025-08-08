function deepEqual (A, B) {
    if (typeof A != typeof B) {
        return false;
    } else if (typeof A === Object) { // not working?
        if (Object.keys(A) != Object.keys(B)) return false;
        console.log('Objects')
    } else {
        console.log('do something');
    }
    console.log(Object.keys(A), Object.keys(B))
}

let obj = {here: {is: "an"}, object: 2};
console.log(obj.keys)
console.log(obj['here'])
console.log(typeof obj)
deepEqual(obj, obj)