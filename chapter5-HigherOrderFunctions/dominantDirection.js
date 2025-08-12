const SCRIPTS = require('./scripts');

function characterScript(code) {
    // find the script associated with a character code 
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
    // find the number of characters in a string in a script.
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

function dominantDirection(text) {
    // count the characters by name
    //find the script for char.codePointAt(0) (some chars are two codes)
    // if script has a propertie scritp.name else return none then filter the
    // list for none i think.
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    
    let dominant = {name: 'null', count: 0};
    for (let script of scripts){
        if (script.count > dominant.count){
            dominant = script
        }
    }
    return SCRIPTS.filter(s => s.name == dominant.name)[0].direction
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl