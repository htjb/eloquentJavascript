const SCRIPTS = require('./scripts');

function filter(array, test) {
  /* same as the .filter funciton for an array */
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

function map(array, transform){
    /* same as .map */
    let mapped = [];
    for (let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}

function reduce(array, combine, start){
    /* same as .reduce */
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;
}

function characterCount(script){
    return script.ranges.reduce((count, [from, to])=> count + (to - from), 0)
}

function average(array){
  return array.reduce((a, b) => a + b) / array.length
}

let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl')
console.log(SCRIPTS.map(s=>s.name))

//console.log([1, 2, 3, 4].reduce((a, b) => a + b))
console.log(characterCount(SCRIPTS[0]))
console.log(SCRIPTS.reduce((a, b) => characterCount(a) < characterCount(b) ? b : a))

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))))
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))))