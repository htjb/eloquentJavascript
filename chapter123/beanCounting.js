function countChar(text, char){
    let count = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] == char) count += 1;
    }
    return count;
}

let = countBs = (text) => countChar(text, "B");

console.log(countBs("BOBY"))
console.log(countChar("kakkerlak", "k"))