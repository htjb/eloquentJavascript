function every(array, test){
    for (let element of array){
        if (!test(element)) return false;
    }
    return true;
}

function everyWithSome(array, test){
    // check if any element fails the test with el => !test(el)
    // if an element fails some will return true
    // then negate that 
    // remember some returns true if any element makes its callback true!
    // ohh so then it is like something failed because i returned true... let me 
    // negate that because i really want every element to pass my test
    // ooof thats complicated!
    return !array.some(el => !test(el));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));
console.log(everyWithSome([], n => n < 10));