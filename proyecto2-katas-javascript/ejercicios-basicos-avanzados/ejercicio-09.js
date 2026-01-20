const numbers = [ 1, 2, 3, 5, 45, 37, 58 ];

function sumNumbers(numbersList) {
    let sum = 0;
    for (let i = 0; i < numbersList.length; i++) {
    sum += numbersList[i];
    }
    return sum;
}

console.log(sumNumbers(numbers));