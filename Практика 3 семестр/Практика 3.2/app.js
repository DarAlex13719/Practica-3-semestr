console.log("Добрый день!")

let str = prompt("Введите строку:");

if (str === null || str === "") {
    console.log("Ошибка: строка пустая");
} else {
    console.log("Исходная строка: " + str);
    let result = "";
    for (let i = str.length - 1; i >= 0; i = i - 2) {
        result += str[i];
    }
    console.log("Каждый второй символ, начиная с последнего: " + result);
}