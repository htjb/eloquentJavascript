function reverseArray(arr){
    let newArray = [];
    for (let i = arr.length-1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr){
    let left = 0, right = arr.length -1;
    while (left <= right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left = left + 1;
        right = right - 1;
    }
    return arr
}

arr = ['A', 'B', 'C']
console.log(reverseArray(arr));
console.log(reverseArrayInPlace(['A', 'B', 'C']))