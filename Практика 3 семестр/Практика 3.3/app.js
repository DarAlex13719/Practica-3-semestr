console.log("Добрый день!")

let arr = [
    [1050, 588, 699],
    [8, 100, 5333],
    [4756, 333, 0]
];

console.log("Двухмерный массив:");
console.log(arr);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) { 
        let square = arr[i][j] * arr[i][j];
        sum += square;
    }
}

console.log("Сумма квадратов: " + sum);