let maxlength = 4;

for (let i = 0; i < maxlength; i++){
    let line = '';
    for (let j = 0; j < maxlength; j++){
        let start = (i % 2 == 0) ? j : j+1;
        line += (start%2 == 0) ? ' ' : '#';
    }
    console.log(line);
}