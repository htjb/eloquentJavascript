function loop(value, test, update, body){
    if (test(value)){
        body(value);
        let newValue = update(value);
        loop(newValue, test, update, body);
    }
    return false
}

// start at 3, check if n > 0, print n then take 1 away from n
loop(3, n => n > 0, n => n - 1, console.log);