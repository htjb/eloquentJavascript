const SCRIPTS = require('./scripts');

function characterScript(code) {
    for (let script of SCRIPTS){
        // some takes a test function and tells you if the function returns true
        // for any elements in an array
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })){ return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = []
    for (let item of items) {
        let name = groupName(item);
        // return the first value of counts for which the function is true
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({name, count:1});
        } else {
            known.count++;
        }
    }
    return counts;
}

function textScripts(text){
    // count the characters by name
    //find the script for char.codePointAt(0) (some chars are two codes)
    // if script has a propertie scritp.name else return none then filter the
    // list for none i think.
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    // total number of characters belonging to a script
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    // combine entries to a readable string and join them seperated by a ,
    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(characterScript(121))
console.log(countBy([1, 2, 3, 4, 5], n => n > 2))
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic