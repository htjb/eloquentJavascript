function isEven(a){
    a = Math.abs(a)
    if (a == 0) return true;
    else if (a == 1) return false;
    else return isEven(a - 2);
}

// i guess need to take absolute of a if number is negative
console.log(isEven(-2))