console.log("Добрый день!")

let num = prompt("Введите число:");

if (num === null || isNaN(Number(num))) {
    console.log("Ошибка: введенная информация не является числом");
} else {
    num = Number(num);
    let numStr = Math.floor(Math.abs(num)).toString();
    
    console.log("Ваше число: " + num);
    console.log("Количество разрядов: " + numStr.length);
    console.log("Первая цифра числа: " + numStr[0]);
}