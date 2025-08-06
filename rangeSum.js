const sum = array => array.reduce((a, b) => a+b);

function range(a, b, step=1){
    if (a > b) step=-1;
    let numbers = [];
    if (step < 0) {
        for (let i = a; i>=b; i+=step){
            numbers.push(i);
        }
    } else {
        for (let i = a; i<=b; i+=step){
        numbers.push(i);
        }
    }
    return numbers;
}

console.log(range(1, 10))
console.log(range(5, 2))
console.log(sum(range(1, 10)));